<script setup lang="ts">
import { PropType } from 'vue'

export type TState = 'default' | 'actived' | 'done'

const props = defineProps({
  src: {
    type: String,
    default: '/assets/svg/icon-file.svg#icon_file',
    required: false
  },
  title: {
    type: String,
    default: '01',
    require: false
  },
  actived: {
    type: Boolean,
    default: false,
    require: false
  },
  state: {
    type: String as PropType<TState>,
    default: 'default',
    require: false
  },
  description: {
    type: String,
    default: 'Passo',
    require: false
  }
})
</script>

<template>
  <!-- Preencher os dados -->
  <div :class="`component__unionize--button-step ${props.state}`">
    <div class="button-step">
      <span>{{ props.title }}</span>
    </div>
    <div class="title">{{ props.description }}</div>
  </div>
</template>

<style lang="scss">
.component__unionize--button-step
{
  $size: 125px;

  width: fit-content;
  transition: 0.3s ease-in-out;

  .button-step
  {
    width: $size;
    height: $size;
    font-weight: 200;
    border: solid 10px $quaternary;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;

    span {
      font-size: 60px;
      color: $quaternary;
    }
  }

  .title {
    font-size: 14px;
    text-align: center;
    color: $quaternary;
  }

  &.actived
  {
    span {
      color: $septenary;
    }

    cursor: pointer;

    .title {
      color: $septenary;
    }

    .button-step {
      border-color: $septenary;
    }

    &:hover
    {
      span {
        color: $accent;
      }

      .button-step {
        border-color: $accent;
      }

      .title {
        color: $accent;
        text-decoration: underline;
      }
    }
  }

  &.done
  {
    span {
      color: $octal;
    }

    cursor: pointer;

    .title {
      color: $octal;
    }

    .button-step {
      border-color: $octal;
    }

    &:hover
    {
      span {
        color: $octal;
      }

      .button-step {
        border-color: $octal;
      }

      .title {
        color: $octal;
        text-decoration: underline;
      }
    }
  }
}
</style>
