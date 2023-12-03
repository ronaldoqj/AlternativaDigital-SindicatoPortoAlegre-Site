<script setup lang="ts">
const props = defineProps({
  step: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
})
</script>

<template>
  <!-- Preencher os dados -->
  <div class="component__unionize--card-step">
    <div class="box-card">
      <div class="step">
        <div class="box-letters">
          <span>P</span>
          <span>A</span>
          <span>S</span>
          <span>S</span>
          <span>O</span>
        </div>
        <h3>{{ props.step }}</h3>
      </div>
      <div class="column"></div>
      <div class="title">
        <h5>{{ props.title }}</h5>
      </div>
    </div>
    <p>{{ props.description }}</p>
  </div>
</template>

<style lang="scss">
.component__unionize--card-step
{
  color: $septenary;

  .box-card
  {
    display: flex;
    height: 130px;
    // justify-content: center;
    justify-content: space-evenly;
    align-items: stretch;
    border: solid 1px $septenary;
    border-radius: 20px;
    padding: 15px;

    .step
    {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      .box-letters
      {
        display: flex;
        justify-content: space-around;
        span {
          font-size: 16px;
          font-weight: bold;
          // letter-spacing: 5px;
          // margin: -10px 0 0;
          line-height: 1em;
          margin: 0 0 5px;
        }
      }
      h3 {
        font-size: 70px;
        font-weight: bold;
        margin: 0;
      }
    }

    .column {
      width: 2px;
      min-width: 2px;
      background-color: $septenary;
      margin: 0 10px;
    }

    .title
    {
      display: flex;
      align-items: center;
      text-align: center;
      h5 {
        font-size: 16px;
        line-height: 1.2em;
      }
    }

  }

  p {
    color: $senary;
    line-height: 1.2em;
    margin: 8px 0;
  }
  // display: flex;
  // justify-content: center;
}
</style>
