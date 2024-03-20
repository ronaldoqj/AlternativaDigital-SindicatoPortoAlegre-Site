<script setup lang="ts">
import { PropType } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'
// import ButtonDefault from 'components/interface/ButtonDefault.vue'
import { IDocumentItem } from 'src/components/models/interfaces/pages/services/document'

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
  subtitle: {
    type: String,
    require: false
  },
  titleButton: {
    type: String,
    default: 'Baixar PDF',
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
    type: Object as PropType<IDocumentItem>,
    default: () => { return { size: 106, viewBox: '0 0 103 106' } },
    require: false
  },
  color: {
    type: String,
    default: 'primary',
    require: false
  }
})
</script>

<template>
  <div class="component__document--item">
    <IconDefault :size="props.size.size" :viewBox="props.size.viewBox" class="icon-class" :color="props.color" :src="props.src" />
    <div :class="`text-${props.color} content`">
      <div>
        <div class="subtitle">{{ props.subtitle }}</div>
        <div class="title">{{ props.title }}</div>
      </div>
        <a class="btn--link" :href="props.link" target="_blank">{{ props.titleButton }}</a>
        <!-- <ButtonDefault rounded flat noCaps  :title="props.titleButton" :color="props.color" /> -->
    </div>
  </div>
</template>

<style lang="scss">
.component__document--item
{
  margin: 0 0 20px;
  padding: 0 5px;
  display: flex;
  justify-content: left;

  .content
  {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .subtitle {
      font-size: 15px;
      line-height: 1em;
      margin-bottom: 4px;
      color: $quinary;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.2em;
      color: $senary;
      margin-bottom: 5px;
    }

    .btn--link{
      // width: 100%;
      color: $accent;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
