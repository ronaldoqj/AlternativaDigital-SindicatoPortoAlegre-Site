<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import InputForm from 'src/pages/contact/components/InputForm.vue'
import IconDefault from 'components/interface/IconDefault.vue'
import { computed, onMounted, reactive, ref } from 'vue'

const recaptcha = ref<HTMLElement | null>(null)
const maxMbPerFile = 2
const messageSizeExceeded = `Limite permitido excedido de ${maxMbPerFile}mb!`
const state = reactive({
  form: {
    reCAPTCHA: false,
    protocolType: {
      value: null,
      name: 'tipoSolicitacao',
      options: [
        { label: 'Denúncia', value: 'D', color: 'text-inverse', size: 'xl' },
        { label: 'Sugestão', value: 'S', color: 'text-inverse', size: 'xl' },
        { label: 'Reclamação', value: 'R', color: 'text-inverse', size: 'xl' },
        { label: 'Pedido de Informação', value: 'I', color: 'text-inverse', size: 'xl' },
        { label: 'Pedido de Providências', value: 'P', color: 'text-inverse', size: 'xl' }
      ]
    },
    nameBank: {
      value: null,
      name: 'nomeBanco'
    },
    agency: {
      value: null,
      name: 'agencia'
    },
    name: {
      value: null,
      name: 'nome'
    },
    phone: {
      value: null,
      name: 'fone'
    },
    email: {
      value: null,
      name: 'email'
    },
    subject: {
      value: null,
      name: 'assunto'
    },
    message: {
      value: null,
      name: 'mensagemSite'
    },
    sendToSector: {
      value: null,
      name: 'oidSetor',
      options: [
        { label: 'Atendimento Geral', value: '11', color: 'text-inverse', size: 'xl' },
        { label: 'Administração', value: '7', color: 'text-inverse', size: 'xl' },
        { label: 'Biblioteca', value: '9', color: 'text-inverse', size: 'xl' },
        { label: 'Cine Bancários', value: '12', color: 'text-inverse', size: 'xl' },
        { label: 'Financeiro', value: '1', color: 'text-inverse', size: 'xl' },
        { label: 'Formação', value: '8', color: 'text-inverse', size: 'xl' },
        { label: 'Jurídico', value: '3', color: 'text-inverse', size: 'xl' },
        { label: 'Saúde do Trabalhador', value: '5', color: 'text-inverse', size: 'xl' },
        { label: 'Outros', value: '10', color: 'text-inverse', size: 'xl' }
      ]
    },
    file1: {
      value: null,
      hint: undefined,
      size: 0,
      name: 'documentoUpload1'
    },
    file2: {
      value: null,
      hint: undefined,
      size: 0,
      name: 'documentoUpload2'
    },
    file3: {
      value: null,
      hint: undefined,
      size: 0,
      name: 'documentoUpload3'
    }
  }
})

// const validCaptcha = () => {
//   // const getResponse = grecaptcha.getResponse() as string
//   // const getResponse = grecaptcha.getResponse() as string
//   // eslint-disable-next-line no-undef
//   // console.log('grecaptcha', grecaptcha.getResponse())
//   // grecaptcha.ready((element: any) => {
//   //   console.log('element', element)
//   // })
//   return ''
// }

const validateForm = computed(() => {
  let send = true

  if (state.form.protocolType.value === null) { send = false }
  // if (state.form.nameBank.value === null) { send = false }
  // if (state.form.agency.value === null) { send = false }
  // if (state.form.name.value === null) { send = false }
  // if (state.form.phone.value === null) { send = false }
  // if (state.form.email.value === null) { send = false }
  // if (state.form.subject.value === null) { send = false }
  if (state.form.message.value === null) { send = false }
  if (state.form.file1.size > maxMbPerFile) { send = false }
  if (state.form.file2.size > maxMbPerFile) { send = false }
  if (state.form.file3.size > maxMbPerFile) { send = false }
  // if (state.form.sendToSector.value === null) { send = false }
  if (state.form.reCAPTCHA === false) { send = false }

  return send
})

const calcToMb = (bytes:number) => {
  return bytes / (1024 * 1024)
}

const handleFileChange = (fileObject:any) => {
  fileObject.size = calcToMb(fileObject.value[0].size)
  fileObject.hint = fileObject.size > maxMbPerFile ? messageSizeExceeded : undefined
}

const onSubmit = (evt:any) => {
  // console.log('@submit - do something here', evt)
  if (validateForm.value) {
    evt.target.submit()
  }
}

onMounted(() => {
  if (recaptcha.value) {
    // Carregar o reCAPTCHA do Google
    window.grecaptcha.render(recaptcha.value, {
      sitekey: '6LfpraEUAAAAAA4_KnXCx8BmWxBP01xkU-MXtWmJ',
      callback: (response: string) => {
        // Callback chamado após o usuário resolver o reCAPTCHA
        console.log('reCAPTCHA resolved:', response)
        state.form.reCAPTCHA = true
        // Você pode fazer algo com a resposta, como enviar para o servidor junto com o formulário
      }
    })
  }
})
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
              <span class="item">atendimento@sindbancarios.org.br</span>
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
            <q-form action="https://fielassociado.sindbancarios.org.br/atendimento/atendimentoSite.php" method="post" @submit.prevent="onSubmit" enctype="multipart/form-data">
              <div class="form">
                <div class="title">Tipo de Protocolo</div>
                <section class="radio">
                  <q-option-group
                    :options="state.form.protocolType.options"
                    type="radio"
                    v-model="state.form.protocolType.value"
                    color="text-inverse"
                    class="text-white"
                    :name="state.form.protocolType.name"
                    keep-color
                    inline
                  />
                </section>
                <div class="row q-col-gutter-sm">
                  <div class="col-xs-12 col-sm-8">
                    <InputForm title="Banco" class="q-mb-md" :name="state.form.nameBank.name" v-model="state.form.nameBank.value" />
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <InputForm title="Agência" class="q-mb-md" :name="state.form.agency.name" v-model="state.form.agency.value" />
                  </div>
                </div>

                <InputForm title="Seu nome" class="q-mb-md" :name="state.form.name.name" v-model="state.form.name.value" />
                <InputForm title="Seu telefone" class="q-mb-md" :name="state.form.phone.name" v-model="state.form.phone.value" />
                <InputForm title="Seu e-mail" class="q-mb-md" :name="state.form.email.name" v-model="state.form.email.value" />
                <InputForm title="Assunto" class="q-mb-md" :name="state.form.subject.name" v-model="state.form.subject.value" />
                <InputForm title="Mensagem" type="textarea" class="q-mb-md" :name="state.form.message.name" v-model="state.form.message.value" />

                <!-- <div class="title">Encaminhar para o Setor</div>
                <section class="radio">
                  <q-option-group
                    :options="state.form.sendToSector.options"
                    type="radio"
                    v-model="state.form.sendToSector.value"
                    color="text-inverse"
                    class="text-white"
                    :name="state.form.sendToSector.name"
                    keep-color
                    inline
                  />
                </section> -->

                <!-- documentoUpload -->
                <div class="title"> Anexar Documento </div>
                <section class="attach--file q-mb-lg">
                  <div class="q-my-xs">
                    <div class="file-btn">Escolher Arquivo</div>
                    <q-input
                      rounded
                      standout
                      v-model="state.form.file1.value"
                      :name="state.form.file1.name"
                      :hint="state.form.file1.hint"
                      type="file"
                      color="text"
                      class="input-file"
                      bg-color="text-inverse"
                      label-color="text"
                      @change="handleFileChange(state.form.file1)"
                      dark
                      dense
                    />
                  </div>
                  <div class="q-my-xs">
                    <div class="file-btn">Escolher Arquivo</div>
                    <q-input
                      rounded
                      standout
                      v-model="state.form.file2.value"
                      :name="state.form.file2.name"
                      :hint="state.form.file2.hint"
                      type="file"
                      color="text"
                      class="input-file"
                      bg-color="text-inverse"
                      @change="handleFileChange(state.form.file2)"
                      label-color="text"
                      dark
                      dense
                    />
                  </div>
                  <div class="q-my-xs">
                    <div class="file-btn">Escolher Arquivo</div>
                    <q-input
                      rounded
                      standout
                      v-model="state.form.file3.value"
                      :name="state.form.file3.name"
                      :hint="state.form.file3.hint"
                      type="file"
                      color="text"
                      class="input-file"
                      bg-color="text-inverse"
                      @change="handleFileChange(state.form.file3)"
                      label-color="text"
                      dark
                      dense
                    />
                  </div>
                </section>
                <section class="q-mb-lg">
                  <!-- <div class="g-recaptcha" data-sitekey="6LfpraEUAAAAAA4_KnXCx8BmWxBP01xkU-MXtWmJ"></div> -->
                  <div class="g-recaptcha" ref="recaptcha"></div>
                </section>
                <section>
                  <div>
                    <q-btn class="btn-send full-width" label="Enviar" type="submit" color="octal" rounded unelevated :disable="!validateForm" />
                  </div>
                </section>
              </div>
              <!-- <button @click="validCaptcha()">click</button> -->
            </q-form>
          </div>
        </div>

      </div>
    </div>
    <TitleDefault title="Localização" only-text class="q-mt-xl" />
  </LayoutSection>
  <LayoutSection background="tertiary" type="banner" cornerColor="secondary" min-height>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3454.2022427409574!2d-51.2324297!3d-30.0310552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519791027dfa4b7%3A0xe0302d31c109cb1a!2sSindBanc%C3%A1rios%20%7C%20Sindicato%20dos%20Banc%C3%A1rios%20de%20Porto%20Alegre%20e%20Regi%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1702086895251!5m2!1spt-PT!2spt"
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

    .form
    {
      padding: 35px;
      border-radius: 30px;
      background-color: $septenary;

      .title {
        color: $tertiary;
      }

      .btn-send {
        border: solid 1px $tertiary;
      }

      .attach--file
      {
        .file-btn {
          width: calc(120px + 10%);
          height: 40px;
          font-size: 12px;
          color: $text-inverse;
          border: solid 1px $tertiary;
          background-color: $primary;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          float: right;
        }

        .q-field__control {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .input-file {
          input {
            color: $text;
          }

          .q-field__messages {
            color: white;
          }
        }
      }

      .g-recaptcha
      {
        > div {
          margin: 0 0 0 auto;
        }
      }
    }
  }
}
</style>
