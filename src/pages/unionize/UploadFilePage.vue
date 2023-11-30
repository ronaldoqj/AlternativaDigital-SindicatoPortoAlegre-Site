<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { baseURL } from 'src/helpers/helpers'
import { AxiosError } from 'axios'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardStep from './components/CardStep.vue'
import ButtonCardFile from './components/ButtonCardFile.vue'
import CardAlert from './components/CardAlert.vue'
import NewsService from 'src/services/UnionizeService'
import { IUnionize } from 'src/types/IUnionize'
import PrintForm from './components/PrintForm.vue'

type TControlFomr = 'form' | 'print' | 'message'

const route = useRoute()
const router = useRouter()

const state = reactive({
  status: 'done',
  modelUpload: null,
  email: '',
  controlForm: {
    show: 'form' as TControlFomr
  },
  form: {}
})

const getForm = (email: string) => {
  console.log('getForm by email', email)
  NewsService.getByEmail({ email })
    .then((response:any) => {
      console.log('response', response)
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
  formData.append('email', state.email)

  console.log('state.modelUpload', state.modelUpload)

  NewsService.registerPdfFile(formData)
    .then((response:IUnionize) => {
      console.log('response RegisterPdfFile', response)
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
  window.open(`${baseURL}api/site/unionize/print/${state.email}`, '_blank')
  // NewsService.print('1')
  //   .then((response:IUnionize) => {
  //     console.log('print', response)
  //   })
  //   .catch((error:AxiosError) => {
  //     console.log('error', error)
  //     alert('Por favor selecione um documento PDF válido')
  //   })
  //   .then(() => {
  //     console.log('finally service RegisterPdfFile')
  //   })
  /*
  state.controlForm.show = 'print'
  console.log('downloadPDF')

  const interval = setInterval(() => {
    state.controlForm.show = 'form'
    clearInterval(interval)
  }, 3000)
  */
}

onMounted(() => {
  let emailFound = false
  console.log('route.params', route.params)

  if (route.params) {
    if ('email' in route.params) {
      if (route.params.email.length) {
        state.email = route.params.email as string
        getForm(route.params.email as string)
        emailFound = true
      }
    }
  }

  if (!emailFound) {
    redirectToFirstStep()
  }
})
</script>

<template>
  <section v-if="state.controlForm.show === 'print'">
    <PrintForm :form="state.form" />
  </section>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
    <section class="q-mb-xl" id="page__upload--File" v-if="state.controlForm.show === 'form'">
      <TitleDefault title="Sindicalize-se" />
      <section class="q-mb-xl">
        <div class="row q-col-gutter-md justify-center">
          <div class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
            <CardStep step="03" title="Baixar PDF, assinar PDF no .gov e enviar para análise" />
          </div>
        </div>
      </section>
      <section class="row q-col-gutter-md q-mt-xl">
        <div class="col-12">
          <CardAlert @click="downloadPdf()" color="error">
            Baixar arquivo PDF da sindicalização
          </CardAlert>
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
}
</style>
