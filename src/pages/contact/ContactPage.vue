<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import InputForm from 'src/pages/contact/components/InputForm.vue'
import IconDefault from 'components/interface/IconDefault.vue'
</script>

<template>
  <LayoutSection background="tertiary" type="top" without-curve-bootom min-height>
    <div id="page__contact">
      <TitleDefault title="Contato" />
      <div id="content__page--contact">

        <div class="row">
          <div class="col-xs-12 col-lg-6">
            <div class="personal--data-item">
              <q-btn size="sm" flat round class="container-icon">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
              </q-btn>
              <span class="item">51. 3030 9400</span>
            </div>
            <div class="personal--data-item">
              <q-btn size="sm" flat round class="container-icon">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 22.3 22.3" src="/assets/svg/icon-instagram-outline.svg#instagram_outline" />
              </q-btn>
              <span class="item">contato@sindbancarios.org.br</span>
            </div>
            <div class="personal--data-item">
              <q-btn size="sm" flat round class="container-icon">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
              </q-btn>
              <span class="item">Sindicato dos Bancários de Porto Alegre e Região</span>
            </div>

            <div class="description__personal--data">
              <p>R. Gen. Câmara, 424</p>
              <p>Centro Histórico - Porto Alegre - RS</p>
              <p>CEP: 90010-230</p>
            </div>

            <div style="height: 80px;"></div>
            <div class="personal--data-item social-media">
              <q-btn size="sm" flat round class="container-icon" href="https://www.facebook.com/SindBancarios.PoA/" target="_blank">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 12.18 22.3" src="/assets/svg/icon-facebook-outline.svg#facebook_outline" />
              </q-btn>
              <q-btn size="sm" flat round class="container-icon" href="https://www.instagram.com/sindbancariospoa/" target="_blank">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 22.3 22.3" src="/assets/svg/icon-instagram-outline.svg#instagram_outline" />
              </q-btn>
              <q-btn size="sm" flat round class="container-icon" href="https://twitter.com/sindbancarios" target="_blank">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 26.99 22.31" src="/assets/svg/icon-twitter-outline.svg#twitter_outline" />
              </q-btn>
              <!-- <q-btn size="sm" flat round class="container-icon" href="" target="_blank">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 20.65 20.7" src="/assets/svg/icon-whatsapp-outline.svg#whatsapp_outline" />
              </q-btn> -->
              <q-btn size="sm" flat round class="container-icon" href="https://www.youtube.com/SindBancariosPoA" target="_blank">
                <IconDefault :size="24" class="icon-class" viewBox="0 0 24.17 17.07" src="/assets/svg/icon-youtube-outline.svg#youtube_outline" />
              </q-btn>
            </div>

            <div style="height: 80px;"></div>
          </div>
          <div class="col-xs-12 col-lg-6">
            <div class="form">
              <InputForm title="Nome" class="q-mb-md" />
              <InputForm title="Telefone" class="q-mb-md" />
              <InputForm title="E-mail" class="q-mb-md" />
              <InputForm title="Assunto" class="q-mb-md" />
              <InputForm title="Mensagem" type="textarea" class="q-mb-md" />
            </div>
          </div>
        </div>

      </div>
    </div>
    <TitleDefault title="Localização" only-text class="q-mt-xl" />
  </LayoutSection>
  <LayoutSection background="tertiary" type="banner" cornerColor="secondary" min-height>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12467.796408773884!2d-9.0460533!3d38.62705195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1694046684967!5m2!1spt-PT!2spt"
      width="100%"
      height="870"
      style="border:0;"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </LayoutSection>
</template>

<style lang="scss">
#page__contact
{
  #content__page--contact
  {
    margin: 30px 0;

    .personal--data-item
    {
      display: flex;
      align-items: center;
      color: $septenary;
      margin: 10px 0;
      font-size: 18px;

      span
      {
        &.item {
          margin-left: 10px;
          line-height: 1.1em;
        }
      }

      &.social-media {
        justify-content: space-evenly;
      }

      @media only screen and (min-width: $breakpoint-md)
      {
        &.social-media {
          max-width: 650px;
          padding-right: 20px;
          justify-content: space-between;
        }
      }

      .container-icon
      {
        border: solid 1px $septenary;
        border-radius: 50%;
        width: 38px;
        min-width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease-in-out;

        &:last-child {
          margin-right: 0;
        }

        &:hover
        {
          background-color: $primary !important;

          .icon-class {
            color: $text-inverse;
          }
        }
      }
    }

    .description__personal--data
    {
      margin-top: -8px;

      p {
        color: $senary;
        margin: 0px 0 0 48px;
      }
    }

    .form {
      padding: 35px;
      border-radius: 30px;
      background-color: $septenary;
    }
  }
}
</style>
