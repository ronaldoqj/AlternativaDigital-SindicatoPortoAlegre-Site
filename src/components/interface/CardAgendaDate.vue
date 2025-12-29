<script setup lang="ts">
import { computed } from 'vue'
import { shortMonth } from 'src/helpers/helpers'

const props = defineProps({
  scheduledDate: {
    type: Array<{ scheduled_date: string }>,
    required: true
  }
})

const resolveMultiple = computed(() => {
  return props.scheduledDate?.length > 1 ? 'multiple' : ''
})

const resolveScheduledDate = computed(() => {
  const dates = {
    initial: { day: '', month: '' },
    final: { day: '', month: '' }
  }

  const initialDate = props.scheduledDate[0]
  const initialDateSplit = initialDate.scheduled_date.split('-')
  const finalDate = props.scheduledDate[props.scheduledDate.length - 1]
  const finalDateSplit = finalDate.scheduled_date.split('-')

  dates.initial.day = initialDateSplit[2]
  dates.initial.month = shortMonth(initialDate.scheduled_date)
  dates.final.day = finalDateSplit[2]
  dates.final.month = shortMonth(finalDate.scheduled_date)

  return dates
})

const resolveConectionWord = computed(() => {
  return props.scheduledDate?.length > 1 ? 'A' : 'E'
})
</script>

<template>
  <div class="component__card--date">
    <div :class="`box--card ${resolveMultiple}`">
      <div class="day">
        <span>{{ resolveScheduledDate.initial.day }}</span>
        <span class="month">{{ resolveScheduledDate.initial.month }}</span>
      </div>
      <div v-if="props.scheduledDate.length > 1" class="conect--dates">{{ resolveConectionWord }}</div>
      <div v-if="props.scheduledDate.length > 1" class="day">
        <span>{{ resolveScheduledDate.final.day }}</span>
        <span class="month">{{ resolveScheduledDate.final.month }}</span>
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
    .day
    {
      display: flex;
      align-items: flex-end;
      transition: 0.2s ease-in-out;

      span {
        font-size: 6em;
        font-weight: bold;
        line-height: 0.7em;

        &.month {
          font-size: 2em;
        }
      }
    }

    .conect--dates {
      font-size: 3em;
      margin: 0 15px;
      transition: 0.2s ease-in-out;
    }

    &.multiple
    {
      display: flex;
      align-items: center;
      transition: 0.2s ease-in-out;

      .day {
        flex-direction: column;
        align-items: center;

        span
        {
          &.month {
            letter-spacing: 3px;
            line-height: 0.9em;
          }
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xs)
  {
    width: fit-content;
  }
}
</style>
