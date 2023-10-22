<script setup lang="ts">
import IconDefault from 'components/interface/IconDefault.vue'
// import { reactive } from 'vue'

const props = defineProps({
  title: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  address: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    require: true
  },
  site: {
    type: String,
    require: true
  },
  socialMedia: {
    type: Object,
    required: true
  }
})

// const state = reactive({
//   type: {
//     highlights: {
//       size: {
//         minWidth: '266px',
//         height: '266px'
//       },
//       description: false,
//       style: 'highlights'
//     },
//     default: {
//       size: {
//         minWidth: '175px',
//         height: '175px'
//       },
//       description: false,
//       style: 'default'
//     }
//   },
//   size: {
//     minWidth: '175px',
//     height: '175px'
//   },
//   description: false
// })

</script>

<template>
  <div class="component__insurance--item">
    <div class="box__texts">
      <div class="box__texts--titles">
        <h4 v-if="props.title">{{ props.title }}</h4>
        <h5 v-if="props.subject?.length">{{ props.subject }}</h5>
        <h5 v-if="props.description?.length">{{ props.description }}</h5>
        <h6 v-if="props.phone?.length">Fone: <span>{{ props.phone }}</span></h6>
        <h6 v-if="props.address.length">Endereço: <span>{{ props.address }}</span></h6>
        <h6 v-if="props.address2.length">Endereço: <span>{{ props.address2 }}</span></h6>
        <h6 v-if="props.mail?.length">E-mail: <span> <a :href="`mailto:${props.mail}`">{{ props.mail }}</a></span></h6>
        <h6 v-if="props.site?.length">Site: <span> <a :href="props.site" target="_blank">{{ props.site }}</a></span></h6>
        <h6 v-if="props.socialMedia">Redes Sociais:</h6>
        <div class="box__icons--social-media">
          <q-btn size="sm" flat round class="container-icon" :disable="!props.socialMedia.facebook.length">
            <IconDefault :size="24" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
          </q-btn>
          <q-btn size="sm" flat round class="container-icon" :disable="!props.socialMedia.instagram.length">
            <IconDefault :size="24" class="icon-class" viewBox="0 0 22.3 22.3" src="/assets/svg/icon-instagram-outline.svg#instagram_outline" />
          </q-btn>
          <q-btn size="sm" flat round class="container-icon" :disable="!props.socialMedia.twitter.length">
            <IconDefault :size="24" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
          </q-btn>
          <q-btn size="sm" flat round class="container-icon" :disable="!props.socialMedia.whatsapp.length">
            <IconDefault :size="24" class="icon-class" viewBox="0 0 20.65 20.7" src="/assets/svg/icon-whatsapp-outline.svg#whatsapp_outline" />
          </q-btn>
          <q-btn size="sm" flat round class="container-icon" :disable="!props.socialMedia.youtube.length">
            <IconDefault :size="24" class="icon-class" viewBox="0 0 24.17 17.07" src="/assets/svg/icon-youtube-outline.svg#youtube_outline" />
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .component__insurance--item
  {
    margin-bottom: 20px;

    .box__icons--social-media
    {
      display: flex;
      justify-content: space-between;

      .container-icon
      {
        background: $quaternary !important;
        border: none;
        border-radius: 0 50% 50%;
        width: 68px;
        height: 63px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease-in-out;

        &:last-child {
          margin-right: 0;
        }

        .icon-class {
          color: $quinary;
        }

        &:hover
        {
          background-color: $primary !important;

          .icon-class {
            color: $text-inverse;
          }
        }

        &.disabled {
          opacity: 0.4d !important;
        }
      }
    }

    @media only screen and (min-width: $breakpoint-sm) {
      .box__icons--social-media
      {
        justify-content: start;

        .container-icon {
          margin-right: 8px;
        }
      }
    }

  }

  .box__texts
  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .box__texts--titles
    {
      h4,
      h5 {
        margin: 0;
        font-weight: unset;
      }

      h4 {
        font-size: 25px;
        font-weight: bold;
        line-height: 1.2em;
        color: $accent;
      }

      h5 {
        font-size: 12px;
        line-height: 1.2em;
        color: $senary;
        margin: 4px 0;
        margin: 8px 0 20px;
      }

      h6 {
        font-size: 12px;
        font-weight: unset;
        line-height: 1.2em;
        color: $senary;
        margin: 12px 0;

        span {
          font-size: 15px;
          color: $primary;
        }
      }

      a {
        color: $primary;
      }
    }
  }

</style>
