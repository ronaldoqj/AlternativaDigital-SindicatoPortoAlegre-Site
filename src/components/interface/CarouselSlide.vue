<script setup lang="ts">
import { PropType, computed, onMounted, ref, shallowRef } from 'vue'
import { arrayChunk } from 'src/helpers/helpers'
import { ButtonDefaultSize, IDinamicList } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  title: {
    type: String,
    require: false
  },
  size: {
    type: Object as PropType<ButtonDefaultSize>,
    require: false
  },
  color: {
    type: String,
    require: false
  },
  controlColor: {
    type: String,
    default: 'accent',
    require: false
  },
  itemStyle: {
    type: Object,
    default: () => ({}),
    required: false
  },
  itemClass: {
    type: String,
    default: '',
    required: false
  },
  itemsScreenBreak: {
    type: String,
    default: 'col-xs-12 col-md-6 col-lg-4 col-xl-3',
    required: false
  },
  listItems: {
    type: Object as PropType<IDinamicList>,
    default: () => ({}),
    require: true
  },
  componentItem: {
    type: Object,
    default: () => ({}),
    require: true
  }
})

const slide = ref(1)
const freezeComponent = shallowRef(props.componentItem)
const blockList = computed(() => {
  resetPageCarousel()
  return arrayChunk(props.listItems.listProp, props.listItems.currentScreen.blockSize)
})

const resetPageCarousel = () => {
  slide.value = 0
}

onMounted(() => {
  // To Do
})
</script>

<template>
    <div v-if="!blockList.length">Loading</div>
    <div v-else class="section__services--carousel">
      <q-carousel
        class="carousel-section"
        :control-color="props.controlColor"
        swipeable
        animated
        v-model="slide"
        :autoplay="700000"
        navigation
        infinite
      >

        <q-carousel-slide
          v-for="(itemIndex, keyIndex) in (blockList)" :key="keyIndex"
          :name="keyIndex"
          class="carousel--slide column no-wrap"
        >
          <div class="row q-col-gutter-xs">
            <component
              v-for="(item, key) in (itemIndex)" :key="key"
              :style="props.itemStyle"
              :class="`${props.itemsScreenBreak} ${props.itemClass}`"
              :is="freezeComponent"
              v-bind="item"
            />
          </div>
        </q-carousel-slide>
        <!-- <q-carousel-slide :name="2" class="carousel--slide column no-wrap">
          <div class="row fit justify-start q-gutter-sm no-wrap">
            <div class="container-content">
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/material.png" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/donuts.png" />
              <q-img class="rounded-borders content-item" src="https://cdn.quasar.dev/img/donuts.png" />
            </div>
          </div>
        </q-carousel-slide> -->

      </q-carousel>
    </div>
</template>

<style lang="scss">
$border-radius-control-banner: 20px;
$height-item: 360px;

.icon-size {
  border: solid 1px black;
}

.section__services--carousel
{
  .carousel-section
  {
    background-color: transparent;
    height: inherit;

    .carousel--slide
    {
      padding: 10px 0 50px 0;

      .container-content
      {
        height: inherit;

        .content-item {
          margin: 5px;
          height: $height-item;
          width: 350px;
          cursor: pointer;
        }

        // @media only screen and (min-width: $breakpoint-md)
        // {
        //   flex-direction: row;
        // }
      }

      /** Styles for specific pages */
      @media only screen and (max-width: $breakpoint-sm)
      {
        .departments__legal--document-item {
          margin-bottom: 50px;

          &:last-child {
            margin-bottom: 20px;
          }
        }
      }

    }

    .q-carousel__control {
      bottom: -5px;
    }

    // @media only screen and (max-width: $breakpoint-md)
    // {
    //   height: inherit;
    // }

  }
}
</style>
