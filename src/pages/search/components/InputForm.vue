<script setup lang="ts">
import { PropType } from 'vue'
import IconDefault from 'components/interface/IconDefault.vue'

const emits = defineEmits(['update:modelValue', 'clickToSearch'])

const props = defineProps({
  modelValue: {
    type: String as PropType<string | number | null | undefined>,
    default: () => ('')
  },
  label: {
    type: String,
    default: '',
    require: false
  },
  type: {
    type: String,
    default: '',
    require: false
  },
  name: {
    type: String,
    required: true
  },
  readOnly: {
    type: Boolean,
    default: false,
    require: false
  },
  mask: {
    type: String,
    require: false
  },
  toPrint: {
    type: Boolean,
    require: false
  },
  placeholder: {
    type: String,
    require: false
  },
  typeSearch: {
    type: Boolean,
    require: false
  },
  required: {
    type: Boolean,
    required: false
  }
})

const triggerClickToSearch = () => {
  console.log('click triggerClickToSearch')
  emits('clickToSearch', true)
}
</script>

<template>
  <div :class="`page__search--component-input ${props.required ? 'required' : ''} ${props.toPrint ? 'to--print' : ''} ${props.typeSearch ? 'search' : ''}`">
    <span class="label__form">{{ props.label }}</span>
    <div :class="`box__input ${props.type} ${props.readOnly ? 'read__only' : ''}`">
      <div class="search--buttom" @click="triggerClickToSearch">
        <IconDefault :size="24" class="icon--default" color="quinary" viewBox="0 0 19.03 19.06" src="/assets/svg/icon-search.svg#icon_search" />
        Buscar
      </div>
      <div class="box--field">
        <q-input
          :model-value="(modelValue as string | null)"
          :placeholder="props.placeholder"
          @update:model-value="(event) => $emit('update:modelValue', event)"
          :readonly="props.readOnly"
          borderless
          :name="props.name"
          :class="props.readOnly ? 'read__only--input' : ''"
          :mask="props.mask"
          dense
        >
        </q-input>
      </div>
      <!-- <div v-if="props.typeSearch" class="search--buttom">
        Buscar
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.page__search--component-input
{
  $height-input: 40px;
  $border-radius-input: 40px;

  &.required
  {
    .box__input {
      border: solid 1px $primary;
    }
  }

  .label__form {
    color: $text-inverse;
    font-size: 15px;
    color: $quinary;
  }

  .box__input
  {
    input {
      color: $accent;
      font-weight: normal;
    }

    &.textarea {
      height: 200px;
    }

    &.read__only {
      border: 0;
      box-shadow: 0px 3px 4px #fff;
      padding: 0 10px;

      .read__only--input
      {
        font-size: 18px;

        input {
          font-weight: 400;
        }
      }
    }

    .box--field
    {
      border-radius: $border-radius-input;
      width: inherit;
      height: $height-input;
      border: solid 1px $quinary;
      padding: 0 20px;
      box-shadow: 0px 3px 4px #9E9B9B60;
      transition: 0.2s ease-in-out;
    }
  }

  &.to--print
  {
    .label__form {
      font-size: 12px;
    }

    .box__input
    {
      height: 20px;

      .q-field__control {
        height: 20px;
      }

      input {
        color: $accent;
        font-weight: normal;
        font-size: 12px;
      }
    }
  }

  &.search
  {
    $width-search: 140px;

    .box__input
    {
      .search--buttom
      {
        cursor: pointer;
        border: solid 1px $quaternary;
        background-color: $quaternary;
        height: $height-input;
        width: $width-search + 20;
        color: $quinary;
        float: right;
        position: relative;
        border-top-right-radius: $border-radius-input;
        border-bottom-right-radius: $border-radius-input;
        box-shadow: 0px 3px 4px #9E9B9B60;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-in-out;

        .icon--default {
          margin-right: 5px;
          transition: 0.2s ease-in-out;
        }

        &:hover
        {
          color: $senary;

          .icon--default {
            margin-right: 10px;
          }
        }
      }

      .box--field {
        width: calc(100% - #{$width-search});
        border-color: $quaternary;
        position: relative;
        background: $text-inverse;
        z-index: 1;
      }
    }
  }
}
</style>
