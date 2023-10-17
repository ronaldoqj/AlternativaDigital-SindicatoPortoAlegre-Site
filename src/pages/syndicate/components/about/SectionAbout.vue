<script setup lang="ts">
import { IHistory } from 'src/components/models/interfaces/pages/syndicate/IAbout'
import { PropType, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<IHistory[]>,
    required: false
  }
})

onMounted(() => {
  console.log('about props', props.item)
})
</script>

<template>
  <div class="syndicate__section--About">
    <div class="item q-mt-xl" v-for="(row, key) in (props.item as IHistory[])" :key="key">
      <h2>{{ row.title }}</h2>
      <p v-for="(item, key2) in (row.content as IHistory)" :key="key2">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.syndicate__section--About
{
  h2 {
    font-size: 25px;
    color: $accent;
    font-weight: bold;
    margin: 0;
  }

  p {
    color: $senary;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style>
