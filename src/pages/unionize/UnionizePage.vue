<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ButtonStep from 'src/pages/unionize/components/ButtonStep.vue'
import SeparatorStep from 'src/pages/unionize/components/SeparatorStep.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import RadioForm from 'src/pages/unionize/components/RadioForm.vue'
</script>

<template>
    <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
      <TitleDefault title="Sindicalize-se" />

      <div class="page__unionize--content">
        <div class="page__unionize--section-title">
          Passos da sindicalização
        </div>
        <div class="box__steps">
          <ButtonStep actived description="Preencher os dados" />
          <SeparatorStep class="separator__step" />
          <ButtonStep title="02" description="Enviado" />
        </div>

        <div class="page__unionize--section-form q-my-xl">
          <div class="header--section-form">Dados Comerciais</div>
          <div class="section--form">
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm label="Banco" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm label="COD do banco" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm label="Agência" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm label="Telefone" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm label="Ramal" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><RadioForm label="Já foi associado à este sindicato?" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm label="Matrícula funcional" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm label="Cargo/Função" /></div>
              <div class="col-xs-12 col-lg-5"><InputForm label="E-mail comercial" /></div>
            </div>
          </div>
        </div>
        <div class="page__unionize--section-form q-my-xl">
          <div class="header--section-form">Dados Pessoais</div>
          <div class="section--form">
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm label="CPF" /></div>
              <div class="col-xs-12 col-lg-5"><InputForm label="RG" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-md-7 col-lg-4"><InputForm label="Data de nascimento" /></div>
              <!-- <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><RadioForm label="Sexo" gender /></div> -->
              <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><InputForm label="Sexo" /></div>
              <div class="col-xs-12 col-sm-6 col-lg-5"><InputForm label="Estado civil" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm label="E-mail" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm label="Telefone" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-3"><InputForm label="Celular" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm label="Endereço Residencial" /></div>
              <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm label="Número" /></div>
              <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm label="Complemento" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm label="Bairro" /></div>
              <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm label="Cidade" /></div>
              <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm label="Estado" /></div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
</template>

<style lang="scss">
#page__unionize
{
  .page__unionize--content
  {
    .page__unionize--section-title {
      color: $accent;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      margin: 10px 0 36px;
    }

    .box__steps {
      display: flex;
      justify-content: center;
    }

    .separator__step {
      margin: 60px 40px;
    }

    .page__unionize--section-form
    {
      .header--section-form {
        color: $septenary;
        font-size: 25px;
        font-weight: bold;
        line-height: 1.1em;
        background: $background;
        text-align: center;
        position: relative;
        width: fit-content;
        padding: 0 10px;
        margin: 0 auto -10px;
        transition: 0.3s ease-in-out;

        @media only screen and (min-width: $breakpoint-xs)
        {
          padding: 0 35px;
        }
      }
      .section--form {
        border: solid 1px $septenary;
        border-radius: 45px;
        padding: 30px;
      }
    }
  }
}
</style>
