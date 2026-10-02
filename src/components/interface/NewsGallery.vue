<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { morph, QImg } from 'quasar'
import { getValidImage } from 'src/helpers/helpers'
import type { IGallery } from 'src/types/INews'

const props = defineProps<{
  galleries: IGallery[]
}>()

type QImgInstance = InstanceType<typeof QImg>

const thumbRefs = ref<QImgInstance[]>([])
const fullRef = ref<QImgInstance>()
const indexZoomed = ref<number>()

const galleriesWithImages = computed(() => props.galleries.filter(gallery => gallery.items.length))

const images = computed(() => galleriesWithImages.value.flatMap(gallery =>
  gallery.items.map(item => ({
    id: `${gallery.id}-${item.id}`,
    src: getValidImage(item.image),
    alt: item.image.description || item.image.name || gallery.title
  }))
))

const noop = () => undefined
const imgLoaded = {
  promise: Promise.resolve(),
  resolve: noop,
  reject: noop
}

const imgLoadedResolve = () => imgLoaded.resolve()
const imgLoadedReject = () => imgLoaded.reject()

const zoomImage = (index?: number) => {
  const indexZoomedState = indexZoomed.value
  let cancel: (() => boolean) | undefined

  imgLoaded.reject()

  const zoom = () => {
    if (index !== undefined && index !== indexZoomedState) {
      imgLoaded.promise = new Promise((resolve, reject) => {
        imgLoaded.resolve = () => {
          imgLoaded.resolve = noop
          imgLoaded.reject = noop
          resolve()
        }
        imgLoaded.reject = () => {
          imgLoaded.resolve = noop
          imgLoaded.reject = noop
          reject(new Error('Error loading image'))
        }
      })

      cancel = morph({
        from: thumbRefs.value[index].$el,
        to: fullRef.value.$el,
        onToggle: () => {
          indexZoomed.value = index
        },
        waitFor: imgLoaded.promise,
        duration: 400,
        hideFromClone: true,
        onEnd: end => {
          if (end === 'from' && indexZoomed.value === index) indexZoomed.value = undefined
        }
      })
    }
  }

  if (indexZoomedState !== undefined && (cancel === undefined || cancel() === false)) {
    morph({
      from: fullRef.value.$el,
      to: thumbRefs.value[indexZoomedState].$el,
      onToggle: () => {
        indexZoomed.value = undefined
      },
      duration: 200,
      keepToClone: true,
      onEnd: zoom
    })
  } else {
    zoom()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && indexZoomed.value !== undefined) zoomImage()
}

if (typeof window !== 'undefined') window.addEventListener('keydown', handleKeydown)
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed-full news-gallery__blinder bg-grey-10"
      :class="indexZoomed !== undefined ? 'news-gallery__blinder--active' : undefined"
      @click="zoomImage()"
    />

    <q-img
      ref="fullRef"
      class="news-gallery__image-full fixed-center"
      :class="indexZoomed !== undefined ? 'news-gallery__image-full--active' : undefined"
      :src="indexZoomed !== undefined ? images[indexZoomed]?.src : undefined"
      :alt="indexZoomed !== undefined ? images[indexZoomed]?.alt : ''"
      fit="contain"
      @load="imgLoadedResolve"
      @error="imgLoadedReject"
      @click="zoomImage()"
    />
  </Teleport>

  <div class="news-gallery__groups">
    <section v-for="gallery in galleriesWithImages" :key="gallery.id" class="news-gallery__group">
      <header class="news-gallery__header">
        <h3>{{ gallery.title }}</h3>
        <p v-if="gallery.subtitle">{{ gallery.subtitle }}</p>
      </header>

      <div class="news-gallery__grid">
        <q-img
          v-for="item in gallery.items"
          :key="`${gallery.id}-${item.id}`"
          ref="thumbRefs"
          class="news-gallery__image"
          :class="images[indexZoomed as number]?.id === `${gallery.id}-${item.id}` ? 'news-gallery__image--selected' : undefined"
          :src="getValidImage(item.image)"
          :alt="item.image.description || item.image.name || gallery.title"
          :ratio="4 / 3"
          role="button"
          tabindex="0"
          @click="zoomImage(images.findIndex(image => image.id === `${gallery.id}-${item.id}`))"
          @keyup.enter="zoomImage(images.findIndex(image => image.id === `${gallery.id}-${item.id}`))"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.news-gallery {
  &__groups { display: grid; gap: 32px; }
  &__group { min-width: 0; }
  &__header { margin-bottom: 14px; }
  &__header h3 { margin: 0; color: $primary; font-size: 22px; font-style: normal; line-height: 1.3; }
  &__header p { margin: 4px 0 0; color: $senary; }
  &__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
  &__image { overflow: hidden; border-radius: 6px; cursor: zoom-in; transition: opacity 0.2s ease-in-out; }
  &__image:focus-visible { outline: 3px solid $primary; outline-offset: 3px; }
  &__image--selected { opacity: 0.3; }
  &__image-full { width: min(1100px, 88vw); height: min(82vh, 780px); z-index: 100001; pointer-events: none; cursor: zoom-out; opacity: 0; }
  &__image-full--active { pointer-events: all; opacity: 1; }
  &__blinder { opacity: 0; z-index: 100000; pointer-events: none; transition: opacity 0.3s ease-in-out; }
  &__blinder--active { opacity: 0.78; pointer-events: all; }
}

@media (max-width: $breakpoint-xs) {
  .news-gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .news-gallery__image-full { width: 94vw; height: 80vh; }
}
</style>
