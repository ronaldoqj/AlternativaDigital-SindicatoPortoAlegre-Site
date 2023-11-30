<script setup lang="ts">
import IconDefault from 'components/interface/IconDefault.vue'

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
  <div class="unionize__component--button-card-file dialog--box">
    <div class="dialog--done">
      <IconDefault :size="140" class="icon--default" color="text-inverse" viewBox="0 0 169.85 100.4" src="/assets/svg/icon-sent.svg#icon_sent" />
      <p class="title">SUA SINDICALIZAÇÃO FOI ENVIADA PARA ANÁLISE.</p>
      <p class="description q-py-lg">
        Sua sindicalização foi enviada para análise da nossa equipe administrativa, em breve
        entraremos em contato via WhatsApp ou e-mail para confirmar sua sindicalização.
      </p>
      <p class="description q-pb-lg">Muito obrigado.</p>
    </div>
  </div>
</template>

<style lang="scss">
.unionize__component--button-card-file
{
  &.dialog--box
  {
    .dialog--done
    {
      background-color: $octal;
      color: $text-inverse;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      margin: 60px auto;
      max-width: 800px;
      border-radius: 40px;
      flex-direction: column;
      transition: 0.3s ease-in-out;

      p {
        font-weight: bold;
        text-align: center;
        font-size: 20px;
        margin: 0;

        &.description {
          font-weight: normal;
          font-size: 16px;
        }
      }

      @media only screen and (min-width: $breakpoint-xs)
      {
        padding: 60px;
      }
    }
  }
}
</style>
