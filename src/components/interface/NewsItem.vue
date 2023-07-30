<script setup type="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import { reactive } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    require: false
  },
  title: {
    type: String,
    require: false
  },
  description: {
    type: String,
    require: false
  },
  readMore: {
    type: String,
    require: false
  },
  highlights: {
    type: Boolean,
    required: false
  }
})

const state = reactive({
  type: {
    highlights: {
      size: {
        minWidth: '266px',
        height: '266px'
      },
      description: false,
      style: 'highlights'
    },
    default: {
      size: {
        minWidth: '175px',
        height: '175px'
      },
      description: false,
      style: 'default'
    }
  },
  size: {
    minWidth: '175px',
    height: '175px'
  },
  description: false
})

const resolveType = () => {
  if (props.highlights) {
    state.size = {
      minWidth: '266px',
      height: '266px'
    }

    state.description = true
  }

  return props.highlights ? state.type.highlights : state.type.default
}

resolveType()

</script>

<template>
  <div class="news__item">
    <div>
      <ImageDefault class="news__image" :size="resolveType().size" src="assets/image/tests/test-1.jpg"></ImageDefault>
    </div>
    <div class="box__texts">
      <div :class="`box__texts--titles ${resolveType().style}`">
        <h5 class="tag-h5" v-if="props.subject">{{ props.subject }}</h5>
        <h4 class="tag-h4" v-if="props.title">{{ props.title }}</h4>
        <h6 class="tag-h6" v-if="props.highlights === true">{{ props.description }}</h6>
      </div>
      <div>
        <a href="#">Leia mais</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .news__item {
    display: flex;
    margin-bottom: 20px;
    max-width: 800px;

    .news__image {
      border-radius: 20px;
    }

    @media only screen and (max-width: $breakpoint-sm) {
      width: auto;
      max-width: max-content;
      flex-direction: column;

      .news__image {
        border-radius: 20px;
        margin-bottom: 10px;
      }
    }

  }

  .box__texts
  {
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .box__texts--titles
    {
      .tag-h4,
      .tag-h5,
      .tag-h6 {
        margin: 0;
      }

      .tag-h5 {
        font-size: 15px;
        line-height: 1.2em;
        color: $quinary;
      }

      .tag-h4 {
        font-size: 20px;
        line-height: 1.2em;
        font-weight: bold;
        color: $primary;
        margin: 4px 0;
      }

      .tag-h6 {
        font-size: 12px;
        color: $senary;
        line-height: 1.4em;
      }

      &.highlights {
        .tag-h4 {
          font-size: 25px;
        }
      }
    }

    a {
      color: $primary;
    }
  }

</style>