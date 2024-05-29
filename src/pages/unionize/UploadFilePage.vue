<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { baseURL } from 'src/helpers/helpers'
import { AxiosError } from 'axios'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardButton from 'components/interface/CardButton.vue'
import CardStep from './components/CardStep.vue'
import ButtonCardFile from './components/ButtonCardFile.vue'
import CardAlert from './components/CardAlert.vue'
import UnionizeService from 'src/services/UnionizeService'
import { IUnionize } from 'src/types/IUnionize'

type TControlFomr = 'form' | 'message'

const route = useRoute()
const router = useRouter()

const state = reactive({
  status: 'done',
  modelUpload: null,
  cpf: '',
  controlForm: {
    show: 'form' as TControlFomr
  },
  form: {}
})

const getForm = (cpf: string) => {
  UnionizeService.getByCpf({ cpf })
    .then((response:any) => {
      state.form = response.data
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      console.log('finally service')
    })
}

const redirectToFirstStep = () => {
  router.push({ name: 'unionize' })
}

const sendPdfFile = () => {
  // state.modelUpload
  const formData = new FormData()
  formData.append('pdf_file', state.modelUpload as any)
  formData.append('cpf', state.cpf)

  UnionizeService.registerPdfFile(formData)
    .then((response:IUnionize) => {
      state.controlForm.show = 'message'
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
      alert('Por favor selecione um documento PDF válido')
    })
    .then(() => {
      console.log('finally service RegisterPdfFile')
    })
}

const showBtnToSendFromCardAlert = computed(() => {
  return !!state.modelUpload
})

const downloadPdf = () => {
  window.open(`${baseURL}api/site/unionize/print/${state.cpf}`, '_blank')
}

const linkToExternal = () => {
  window.open('https://www.gov.br/pt-br/servicos/assinatura-eletronica', '_blank')
}

onMounted(() => {
  let cpfFound = false

  if (route.params) {
    if ('cpf' in route.params) {
      if (route.params.cpf.length) {
        state.cpf = route.params.cpf as string
        getForm(route.params.cpf as string)
        cpfFound = true
      }
    }
  }

  if (!cpfFound) {
    redirectToFirstStep()
  }
})
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
    <section class="q-mb-xl" id="page__upload--File" v-if="state.controlForm.show === 'form'">
      <TitleDefault title="Sindicalize-se" />
      <section class="q-mb-xl">
        <div class="row q-col-gutter-md justify-center">
          <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
            <CardStep step="03" title="Baixar PDF, assinar PDF no .gov.br e enviar para análise" />
          </div>
        </div>
      </section>
      <section class="row q-col-gutter-md q-mt-xl">
        <div class="col-12">
          <CardAlert @click="downloadPdf()" color="error">
            Baixar arquivo PDF da sindicalização
          </CardAlert>
        </div>
        <div class="card__button--fullwidth" @click="linkToExternal()">
          <CardButton :image="`/assets/image/image-site-governament.jpg`" background="quaternary" color="primary" :title="`Acessar .gov.br para assinar digitalmente sua sindicalização`">
            <q-img
              src="/assets/image/icon-gov-br.png"
              width="100px"
              height="36px"
              class="image__card--button"
            />
          </CardButton>
        </div>
        <div class="col-12">
          <!-- @click="sendPdfFile()" -->
          <CardAlert
            color="success"
            title="Selecionar PDF assinado da sindicalização"
            title-btn="ENVIAR PDF ASSINADO"
            rotate-arrow
            :show-btn="showBtnToSendFromCardAlert"
            @clickToSend="sendPdfFile()"
          >
            <q-file v-model="state.modelUpload" class="full-width" color="octal" label="Selecionar arquivo PDF" dark />
          </CardAlert>
        </div>
      </section>
    </section>
    <section class="section--success" v-if="state.controlForm.show === 'message'">
      <TitleDefault title="Sindicalize-se" />
      <div class="row q-col-gutter-md justify-center q-mt-lg">
        <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
          <CardStep step="04" title="Sindicalização enviada para análise" />
        </div>
      </div>
      <div class="row q-col-gutter-md justify-center">
        <div class="col-xs-12">
          <ButtonCardFile />
        </div>
      </div>
    </section>
  </LayoutSection>
</template>

<style lang="scss">
#page__upload--File
{
  .section--download {
    //
  }

  .section--upload {
    //
  }

  .card__button--fullwidth {
    width: 100%;
  }

  .image__card--button {
    margin-right: 20px;
  }
}
</style>
