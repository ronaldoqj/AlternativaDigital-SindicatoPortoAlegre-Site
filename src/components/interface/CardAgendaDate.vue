<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  dates: {
    type: Array<string>,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
})

const resolveMultiple = computed(() => {
  return props.dates?.length > 1 ? 'multiple' : ''
})

const resolveConectionWord = computed(() => {
  return props.dates?.length > 1 ? 'à' : 'e'
})
</script>

<template>
  <div :class="`component__card--date ${resolveMultiple}`">
    <div class="box--card">
      <div class="day">
        <span>{{ props.dates[0] }}</span>
        <span v-if="props.dates.length > 1" class="conection--days">{{ resolveConectionWord }}</span>
        <span v-if="props.dates.length > 1">{{ props.dates[props.dates.length - 1] }}</span>
      </div>
      <div class="date">
        <div>{{ props.month }}</div>
        <div>{{ props.year }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.component__card--date
{
  $card__border--radius: 35px;

  display: flex;
  justify-content: center;
  background-color: $primary;
  color: white;
  padding: 30px 40px;
  border-top-right-radius: $card__border--radius;
  border-bottom-left-radius: $card__border--radius;
  border-bottom-right-radius: $card__border--radius;
  width: auto;
  transition: 0.2s ease-in-out;

  .box--card
  {
    display: flex;

    .day
    {
      display: flex;
      align-items: center;
      transition: 0.2s ease-in-out;

      span {
        font-size: 6em;
        font-weight: bold;
        line-height: 0.7em;
      }

      .conection--days {
        font-size: 3em;
        margin: 0 5px;
        transition: 0.2s ease-in-out;
      }
    }

    .date {
      font-size: 1.4em;
      line-height: 1em;
      display: flex;
      flex-flow: column;
      justify-content: end;
      transition: 0.2s ease-in-out;
    }
  }

  &.multiple
  {
    .box--card
    {
      flex-direction: column;
      align-items: end;
      transition: 0.2s ease-in-out;

      .date
      {
        display: flex;
        flex-flow: row;
        justify-content: end;
        margin-top: 1px;
        letter-spacing: 1px;
        transition: 0.2s ease-in-out;

        div {
          margin-left: 5px;
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xs)
  {
    width: fit-content;

    .box--card
    {
      &.multiple
      {
        align-items: center;
        align-items: end;
      }
    }

  }
}
</style>
