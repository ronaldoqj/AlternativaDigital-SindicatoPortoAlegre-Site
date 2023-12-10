<script setup lang="ts">
import { onMounted, computed, shallowRef } from 'vue'
// import { ButtonDefaultSize, IDinamicList } from 'components/models/interfaces/InterfacesDefault'

const props = defineProps({
  // listItems: {
  //   type: Object as PropType<IDinamicList>,
  //   default: () => ({}),
  //   require: true
  // },
  listItems: {
    type: Object,
    default: () => ({}),
    require: true
  },
  itemsScreenBreak: {
    type: String,
    default: 'col-xs-12 col-md-6 col-lg-4 col-xl-3',
    required: false
  },
  componentItem: {
    type: Object,
    default: () => ({}),
    require: true
  }
})

const freezeComponent = shallowRef(props.componentItem)

const opened = computed((): boolean => {
  return props.listItems.open
})

onMounted(() => {
  console.log('props.componentItem', props.listItems)
})
</script>

<template>
  <div class="component__syndicate--expand-item" >
    <q-expansion-item
      :default-opened="opened"
      switch-toggle-side
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      :label="props.listItems.title"
      header-class="bg-primary text-white header__expansion--item"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section class="col-items">
          <div class="row">
            <component
              v-for="(item, key) in (props.listItems.items)" :key="key"
              :class="`${props.itemsScreenBreak}`"
              :is="freezeComponent"
              v-bind="item"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<style lang="scss">
.q-expansion-item {
  border-top-left-radius: 0 !important;
}

.col-items {
  margin-top: 30px;
}

.component__syndicate--expand-item
{
  margin-bottom: 20px;

  .header__expansion--item {
    font-weight: bold;
    font-size: 25px;
    border-top-left-radius: 0;
  }

  // @media only screen and (min-width: $breakpoint-sm)
  // {

  // }
}
</style>
