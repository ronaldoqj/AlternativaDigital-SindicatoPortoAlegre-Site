<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { AxiosError } from 'axios'
import { filterOnlyNumbers } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import NewsService from 'src/services/UnionizeService'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
// import { IUnionize } from 'src/types/IUnionize'

const router = useRouter()
const state = reactive({
  status: 'done',
  modelUpload: null,
  email: '',
  form: {
    cpf: '',
    email: ''
  },
  controls: {
    btnSend: {
      title: 'Conferir Dados',
      disable: true
    }
  }
})

const getForm = (cpf: string) => {
  NewsService.getByCpf({ cpf })
    // .then((response:IUnionize) => {
    .then(() => {
      redirectToLastStep(cpf)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
      alert('Não foi possível encontrar um cadastro para o CPF informado')
    })
    .then(() => {
      // console.log('finally service')
    })
}

const redirectToLastStep = (cpf: string) => {
  cpf = filterOnlyNumbers(cpf)
  router.push({ name: 'uploadFile', params: { cpf } })
}

const disableBtnToSend = computed(() => {
  let check = true
  if (state.form.cpf.length > 13) {
    check = false
  }
  return check
})

onMounted(() => {
  // state.form.cpf = '11111111111'
})
</script>

<template>
  <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
    <section id="page__find--form">
      <TitleDefault title="Sindicalize-se" />
      <section class="q-my-lg">
        <div class="row">
          <div class="col-12">
            <div class="title">Informe seus dados para vincularmos corretamente seu arquivo</div>
          </div>
        </div>
      </section>
      <section class="q-mb-xl">
        <div class="row q-col-gutter-md justify-center q-my-lg">
          <div class="col-xs-12 col-sm-6 offset-sm-2">
            <InputForm v-model="state.form.cpf" label="CPF" name="cpf" mask="###.###.###-##" :required="true" />
          </div>
          <div class="offset-sm-2"></div>
        </div>
        <!-- <div class="row q-col-gutter-md justify-center">
          <div class="col-xs-12 col-sm-6 offset-sm-2">
            <InputForm v-model="state.form.email" label="E-Mail" name="email" :required="true" />
          </div>
          <div class="offset-sm-2"></div>
        </div> -->
        <div class="row q-col-gutter-md q-my-lg justify-center">
          <div class="col-xs-12 col-sm-6 offset-sm-2">
            <q-btn color="octal" size="lg" class="default__btn confirm-btn" :label="state.controls.btnSend.title" @click="getForm(state.form.cpf)" :disable="disableBtnToSend" />
          </div>
          <div class="offset-sm-2"></div>
        </div>
      </section>
    </section>
  </LayoutSection>
</template>

<style lang="scss">
#page__find--form
{
  .title {
    color: $accent;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

  .default__btn {
    width: 100%;
      border-radius: 40px;
  }
}
</style>
