<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import IntroductionVideo from './components/IntroductionVideo.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'
import CardStep from './components/CardStep.vue'

const openVideo = () => {
  console.log('open video')
}
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
    <section id="page__unionize--introduction">
      <TitleDefault title="Sindicalize-se" />
      <div class="row q-col-gutter-md q-mt-xl">
        <div class="col-xs-12 col-md-6">
          <CardButton :route="{name: 'unionizeForm'}" :image="`/assets/image/image-inscricao-sindicalizacao-digital.png`" background="primary" color="text-inverse" :title="`Sindicalize-se aqui`" />
        </div>
        <div class="col-xs-12 col-md-6">
          <CardButton :route="{name: 'findForm'}" :image="`/assets/image/image-ficha-sindicalizacao-digital.png`" background="primary" color="text-inverse" :title="`Enviar arquivo PDF assinado no .gov.br*`" subtitle="*Após preencher a ficha digital no banner ao lado" />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-12 text-center">
          <TitleDefault title="Como é feita a sindicalização digital?" only-text class="justify-center q-mt-xl q-pt-lg q-mb-lg" :style-text="{ textAlign: 'center' }" />
          <IntroductionVideo @click="openVideo()" />
          <TitleDefault title="Confira o passo-a-passo para realizar sua sindicalização totalmente digital." only-text class="justify-center q-mt-md" :style-text="{ fontSize: '18px', textAlign: 'center' }" />
          <ButtonDefault
            class="q-my-xl"
            :style="{width: '100%', maxWidth: '800px', height: '60px', fontSize: '20px', lineHeight: '1.2em'}"
            color="primary"
            rounded
            unradiusTopLeft
            noCaps
            title="Passo-a-passo para a sindicalização"
            @click="openVideo()"
          />
        </div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="row q-col-gutter-md justify-center">
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3"><CardStep step="01" title="Preencher os dados" description="Preencha seus dados conforme os campos obrigatórios" /></div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3"><CardStep step="02" title="Conferir os dados" description="Confira seus dados e aceite as políticas de sindicalização" /></div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3"><CardStep step="03" title="Baixar PDF, assinar PDF no .gov.br e enviar para análise" description="Após baixar sua ficha digital, acesse o website do Governo Federal (www.gov.br) e assine digitalmente sua ficha de sindicalização, após isso faça o upload desse arquivo por aqui." /></div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3"><CardStep step="04" title="Sindicalização enviada para análise" description="Sua sindicalização foi remetida para analise junto ao sindicato." /></div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3"><CardStep step="05" title="Confirmação da sindicalização" description="Você receberá o contato do Sindbancários confirmando o sucesso da sua sindicalização." /></div>
      </div>
    </section>
  </LayoutSection>
</template>

<style lang="scss">
</style>
