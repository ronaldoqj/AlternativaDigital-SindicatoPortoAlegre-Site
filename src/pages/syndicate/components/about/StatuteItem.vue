<script setup lang="ts">
import { PropType } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'
import { IStatuteItem } from 'src/components/models/interfaces/pages/syndicate/IAbout'

const props = defineProps({
  src: {
    type: String,
    default: '/assets/svg/icon-file.svg#icon_file',
    required: false
  },
  title: {
    type: String,
    require: false
  },
  titleButton: {
    type: String,
    default: 'Visualizar Estatuto',
    require: false
  },
  description: {
    type: String,
    require: false
  },
  link: {
    type: String,
    require: false
  },
  size: {
    type: Object as PropType<IStatuteItem>,
    default: () => { return { size: 106, viewBox: '0 0 103 106' } },
    require: false
  },
  color: {
    type: String,
    default: 'text-inverse',
    require: false
  }
})

const clickLink = (link: undefined | string) => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<template>
  <div class="component__document--item">
    <IconDefault :size="props.size.size" :viewBox="props.size.viewBox" class="icon-class" :color="props.color" :src="props.src" />
    <div :class="`text-${props.color} content`">
      <div class="title">{{ props.title }}</div>
      <div class="description">{{ props.description }}</div>
      <div>
        <ButtonDefault rounded noCaps class="btn--link" :title="props.titleButton" :color="`septenary`" @click="clickLink(props.link)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.component__document--item
{
  margin: 0 0 20px;
  padding: 0 5px;
  display: flex;
  justify-content: center;

  .content
  {
    margin-left: 10px;

    .title {
      font-size: 35px;
      font-weight: bold;
      line-height: 1em;
    }

    .description {
      font-size: 14px;
      line-height: 1em;
      margin: 5px 0 10px;
    }

    .btn--link{
      width: 100%;
    }
  }
}
</style>
