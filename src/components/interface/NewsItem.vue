<script setup lang="ts">
import ImageDefault from 'components/interface/ImageDefault.vue'
import { defaultImage } from 'src/helpers/helpers'
import { computed, reactive, PropType } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'
import IconDefault from 'components/interface/IconDefault.vue'

const props = defineProps({
  src: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    require: false
  },
  date: {
    type: String,
    required: true
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
  },
  onlyText: {
    type: Boolean,
    required: false
  },
  route: {
    type: Object as PropType<RouteLocationRaw>,
    default: () => ({ }),
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
        minWidth: '266px',
        height: '175px'
      },
      description: false,
      style: 'default'
    }
  },
  size: {
    minWidth: '266px',
    height: '175px'
  },
  description: false
})

const router = useRouter()
const clickRoute = (route: RouteLocationRaw) => {
  router.push(route)
  // router.replace(route)
}

const resolveImage = computed((): string => {
  return props.src ? props.src : defaultImage
})

const resolveOnlyText = computed((): string => {
  return props.onlyText ? 'only--text' : ''
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
  <div :class="`news__item ${resolveOnlyText}`" @click="clickRoute(props.route)">
    <div v-if="!props.onlyText">
      <ImageDefault class="news__image" :size="resolveType().size" :src="resolveImage"></ImageDefault>
    </div>
    <div class="box__texts">
      <div :class="`box__texts--titles ${resolveType().style}`">
        <div class="box-subject">
          <h5 class="tag-h5 " v-if="props.subject">{{ props.subject }}</h5>
          <div class="box-date">
            <IconDefault :size="24" class="icon--default" :color="'quinary'" viewBox="0 5 56 30" src="/assets/svg/icon-calendar.svg#calendar" />
            <h5 class="tag-h5 date">{{ props.date }}</h5>
          </div>
        </div>
        <h4 class="tag-h4 " v-if="props.title">{{ props.title }}</h4>
        <h6 class="tag-h6 " v-if="props.highlights === true">{{ props.description }}</h6>
      </div>
      <div>
        <a :to="props.route">Leia mais</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .news__item
  {
    $border-radius: 20px;

    margin-bottom: 20px;
    cursor: pointer;

    .news__image {
      border-radius: $border-radius;
    }

    @media only screen and (max-width: $breakpoint-sm) {
      width: auto;
      // max-width: max-content;
      // flex-direction: column;
      padding: 0 5px;

      .news__image {
        margin-bottom: 10px;
      }

      &.only--text {
        margin-bottom: 20px;
      }
    }

    .box__texts
    {
      margin: 6px 0 0;
      padding: 0 5px;
      width: 100%;

      .box__texts--titles
      {
        .tag-h4,
        .tag-h5,
        .tag-h6 {
          margin: 0;
        }

        .box-subject {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap-reverse;
          align-items: center;

          .tag-h5 {
            font-size: 15px;
            line-height: 1.2em;
            color: $quinary;

            &.date {
              font-size: 13px;
            }
          }

          .box-date {
            display: flex;
            align-items: center;
          }
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
        color: $septenary;
        text-decoration: none;

        &:hover {
          color: $primary;
          text-decoration: underline;
        }
      }
    }

    &.only--text {
      border: solid 1px $quaternary;
      border-radius: $border-radius;
      padding: 20px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>
