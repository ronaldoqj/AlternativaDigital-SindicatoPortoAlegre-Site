<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import _ from 'lodash'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardStep from 'src/pages/unionize/components/CardStep.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import SelectForm from 'src/pages/unionize/components/SelectForm.vue'
import RadioForm from 'src/pages/unionize/components/RadioForm.vue'
import CheckBoxForm from 'src/pages/unionize/components/CheckBoxForm.vue'
import NewsUnionize from 'src/services/UnionizeService'
import { AxiosError } from 'axios'
import { gender, color, states, filterOnlyNumbers } from 'src/helpers/helpers'

type TFormStates = 'edition' | 'review' | 'done'
const router = useRouter()
const brazilStates = states
const state = reactive({
  form: {
    formState: 'edition' as TFormStates,
    inputs: {
      commercialData: {
        bank: { value: null as null | string, label: 'Banco', name: 'bank', required: true },
        codeBank: { value: null as null | string, label: 'COD do banco', name: 'code_bank', required: true },
        agency: { value: null as null | string, label: 'Agência', name: 'agency', required: true },

        phone: { value: null as null | string, label: 'Telefone', name: 'phone', mask: '(##) #### - ####', required: false },
        extension: { value: null as null | string, label: 'Ramal', name: 'extension', required: true },
        alreadyAssociated: { value: null as null | string, label: 'Já foi associado à este sindicato?', name: 'already_associated', required: true },

        registration: { value: null as null | string, label: 'Matrícula funcional', name: 'registration', required: true },
        position: { value: null as null | string, label: 'Cargo/Função', name: 'position', required: true },
        commercialEmail: { value: null as null | string, label: 'E-mail comercial', name: 'commercial_email', required: true }
      },
      personalData: {
        name: { value: null as null | string, label: 'Nome', name: 'name', required: true },
        cpf: { value: null as null | string, label: 'CPF', name: 'cpf', mask: '###.###.###-##', required: true },
        rg: { value: null as null | string, label: 'RG', name: 'rg', required: true },
        issuingAuthority: { value: null as null | string, label: 'Orgão Emissor', name: 'issuing_authority', required: true },

        birth: { value: null as null | string, label: 'Data de nascimento', name: 'birth', mask: '##  /  ##  /  ####', required: true },
        gender: { value: { value: '', label: '' }, label: 'Gênero', name: 'gender', options: gender, required: true },
        color: { value: { value: '', label: '' }, label: 'Cor', name: 'color', options: color, required: true },
        maritalStatus: { value: null as null | string, label: 'Estado civil', name: 'marital_status', required: true },

        email: { value: null as null | string, label: 'Email', name: 'email', required: true },
        phone: { value: null as null | string, label: 'Telefone', name: 'phone', mask: '(##) #### - ####', required: false },
        cellphone: { value: null as null | string, label: 'Celular', name: 'cellphone', mask: '(##) ##### - ####', required: true },

        homeAddress: { value: null as null | string, label: 'Endereço Recidencial', name: 'home_address', required: true },
        number: { value: null as null | string, label: 'Número', name: 'number', required: true },
        complement: { value: null as null | string, label: 'Complemento', name: 'complement', required: false },

        neighborhood: { value: null as null | string, label: 'Bairro', name: 'neighborhood', required: true },
        city: { value: null as null | string, label: 'Cidade', name: 'city', required: true },
        state: { value: { value: 'rs', label: 'Rio Grande do Sul' }, label: 'Estado', name: 'state', options: brazilStates, required: true }
      },
      authorizationData: {
        confirm: { value: true },
        bank: { value: null as null | string, label: 'banco', name: 'auth_bank', required: true },
        codeBank: { value: null as null | string, label: 'COD do banco', name: 'auth_code_bank', required: true },
        agency: { value: null as null | string, label: 'Agência', name: 'auth_agency', required: true }
      }
    }
  },
  steps: {
    currentStep: {
      state: '',
      title: '',
      description: ''
    },
    stepOne: {
      state: '01',
      title: 'Preencher os dados',
      description: 'Preencha seus dados conforme os campos obrigatórios'
    },
    stepTwo: {
      state: '02',
      title: 'Conferir os dados',
      description: 'Confira seus dados e aceite as politicas de sindicalização'
    },
    stepThree: {
      state: '03',
      title: 'Baixar PDF, assinar PDF no .gov e enviar para análise',
      description: 'Após baixar sua ficha digital, acesse o website do Governo Federal (www.gov.br) e assine digitalmente sua ficha de sindicalização, após isso faça o uploud desse arquivo por aqui.'
    }
  }
})

const cData = state.form.inputs.commercialData
const pData = state.form.inputs.personalData
const aData = state.form.inputs.authorizationData

const formReadyOnly = computed((): boolean => {
  return state.form.formState === 'review'
})

const disableConfirm = computed((): boolean => {
  let disableBtn = false

  if (cData.bank.required && _.isEmpty(cData.bank.value)) { disableBtn = true }
  if (cData.codeBank.required && _.isEmpty(cData.codeBank.value)) { disableBtn = true }
  if (cData.agency.required && _.isEmpty(cData.agency.value)) { disableBtn = true }
  if (cData.phone.required && _.isEmpty(cData.phone.value)) { disableBtn = true }
  if (cData.extension.required && _.isEmpty(cData.extension.value)) { disableBtn = true }
  if (cData.alreadyAssociated.required && _.isEmpty(cData.alreadyAssociated.value)) { disableBtn = true }
  if (cData.registration.required && _.isEmpty(cData.registration.value)) { disableBtn = true }
  if (cData.position.required && _.isEmpty(cData.position.value)) { disableBtn = true }
  if (cData.commercialEmail.required && _.isEmpty(cData.commercialEmail.value)) { disableBtn = true }
  if (pData.name.required && _.isEmpty(pData.name.value)) { disableBtn = true }
  if (pData.cpf.required && _.isEmpty(pData.cpf.value)) { disableBtn = true }
  if (pData.rg.required && _.isEmpty(pData.rg.value)) { disableBtn = true }
  if (pData.issuingAuthority.required && _.isEmpty(pData.issuingAuthority.value)) { disableBtn = true }
  if (pData.birth.required && _.isEmpty(pData.birth.value)) { disableBtn = true }
  if (pData.gender.required && _.isEmpty(pData.gender.value)) { disableBtn = true }
  if (pData.color.required && _.isEmpty(pData.color.value)) { disableBtn = true }
  if (pData.maritalStatus.required && _.isEmpty(pData.maritalStatus.value)) { disableBtn = true }
  if (pData.email.required && _.isEmpty(pData.email.value)) { disableBtn = true }
  if (pData.phone.required && _.isEmpty(pData.phone.value)) { disableBtn = true }
  if (pData.cellphone.required && _.isEmpty(pData.cellphone.value)) { disableBtn = true }
  if (pData.homeAddress.required && _.isEmpty(pData.homeAddress.value)) { disableBtn = true }
  if (pData.number.required && _.isEmpty(pData.number.value)) { disableBtn = true }
  if (pData.complement.required && _.isEmpty(pData.complement.value)) { disableBtn = true }
  if (pData.neighborhood.required && _.isEmpty(pData.neighborhood.value)) { disableBtn = true }
  if (pData.city.required && _.isEmpty(pData.city.value)) { disableBtn = true }
  if (pData.state.required && _.isEmpty(pData.state.value)) { disableBtn = true }

  return disableBtn
})

const changeFormState = (formState:TFormStates) => {
  state.form.formState = formState
  switch (formState) {
    case 'edition':
      state.steps.currentStep = state.steps.stepOne
      // state.staps.two = 'default'
      break
    case 'review':
      state.steps.currentStep = state.steps.stepTwo
      // state.staps.two = 'actived'
      break
    case 'done':
    default:
      state.steps.currentStep = state.steps.stepThree
      // state.staps.two = 'done'
      break
  }
}

const clearForm = (): void => {
  cData.bank.value = null
  cData.codeBank.value = null
  cData.agency.value = null
  cData.phone.value = null
  cData.extension.value = null
  cData.alreadyAssociated.value = null
  cData.registration.value = null
  cData.position.value = null
  cData.commercialEmail.value = null
  pData.name.value = null
  pData.cpf.value = null
  pData.rg.value = null
  pData.issuingAuthority.value = null
  pData.birth.value = null
  pData.gender.value = { value: '', label: '' }
  pData.color.value = { value: '', label: '' }
  pData.maritalStatus.value = null
  pData.email.value = null
  pData.phone.value = null
  pData.cellphone.value = null
  pData.homeAddress.value = null
  pData.number.value = null
  pData.complement.value = null
  pData.neighborhood.value = null
  pData.city.value = null
  pData.state.value = { value: 'rs', label: 'Rio Grande do Sul' }
  aData.confirm.value = false
  aData.bank.value = null
  aData.agency.value = null
  aData.codeBank.value = null
}

const saveForm = () => {
  NewsUnionize.register(state.form.inputs)
    .then((response:any) => {
      toConfirmForm(response.data.cpf)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const clickDownloadPDF = () => {
  saveForm()
  // changeFormState('done')
  // downloadPDF()
}

const testingForm = () => {
  // state.form.inputs.commercialData.bank.value = 'Bank'
  // state.form.inputs.commercialData.codeBank.value = 'codeBank'
  // state.form.inputs.commercialData.agency.value = 'Agency'
  // state.form.inputs.commercialData.phone.value = '5111111111'
  // state.form.inputs.commercialData.commercialEmail.value = 'comercial Email'
  // state.form.inputs.commercialData.extension.value = 'extension'
  // state.form.inputs.commercialData.alreadyAssociated.value = 'y'
  // state.form.inputs.commercialData.registration.value = 'Registration'
  // state.form.inputs.commercialData.position.value = 'Position'
  // state.form.inputs.commercialData.commercialEmail.value = 'email@comercial.com'

  // state.form.inputs.personalData.name.value = 'Fulano'
  // state.form.inputs.personalData.cpf.value = '11111111111'
  // state.form.inputs.personalData.rg.value = '546432131654'
  // state.form.inputs.personalData.issuingAuthority.value = 'SJS-RS'
  // state.form.inputs.personalData.birth.value = '13041984'
  // state.form.inputs.personalData.gender.value = { value: 'masculino', label: 'Masculino' }
  // state.form.inputs.personalData.color.value = { value: 'branca', label: 'Branca' }
  // state.form.inputs.personalData.maritalStatus.value = 'Estado civil'
  // state.form.inputs.personalData.email.value = 'email@personal.com'
  // state.form.inputs.personalData.phone.value = '5133333333'
  // state.form.inputs.personalData.cellphone.value = '519999999999'
  // state.form.inputs.personalData.homeAddress.value = 'homeAddress'
  // state.form.inputs.personalData.number.value = 'number'
  // state.form.inputs.personalData.complement.value = 'complement'
  // state.form.inputs.personalData.neighborhood.value = 'neighborhood'
  // state.form.inputs.personalData.city.value = 'Porto Alegre'
  // state.form.inputs.personalData.state.value = { value: 'rs', label: 'Rio Grande do Sul' }

  // state.form.inputs.authorizationData.confirm.value = true
  // state.form.inputs.authorizationData.bank.value = 'Auth Bank'
  // state.form.inputs.authorizationData.codeBank.value = 'Auth codeBank'
  // state.form.inputs.authorizationData.agency.value = 'Auth Agency'
}

const toConfirmForm = (cpf: string) => {
  cpf = filterOnlyNumbers(cpf)
  router.push({ name: 'uploadFile', params: { cpf } })
}

onMounted(() => {
  testingForm()
  changeFormState('edition')
})

</script>

<template>
    <LayoutSection id="print" background="tertiary" type="top" cornerColor="secondary" min-height>
      <TitleDefault title="Sindicalize-se" />
      <div class="page__unionize--content">
        <div class="page__unionize--section-title">
          Passos da sindicalização
        </div>
        <div class="box__steps">
          <CardStep :step="state.steps.currentStep.state" :title="state.steps.currentStep.title" :description="state.steps.currentStep.description" />
        </div>
        <div>
          <div class="page__unionize--section-form q-my-xl">
            <div class="header--section-form">Dados Comerciais</div>
            <div class="section--form">
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-5"><InputForm ref-model="refBank" v-model="cData.bank.value" :label="cData.bank.label" :name="cData.bank.name" :read-only="formReadyOnly" :required="cData.bank.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.codeBank.value" :label="cData.codeBank.label" :name="cData.codeBank.name" :read-only="formReadyOnly" :required="cData.codeBank.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="cData.agency.value" :label="cData.agency.label" :name="cData.agency.name" :read-only="formReadyOnly" :required="cData.agency.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.phone.value" :label="cData.phone.label" :name="cData.phone.name" :read-only="formReadyOnly" :mask="cData.phone.mask" :required="cData.phone.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.extension.value" :label="cData.extension.label" :name="cData.extension.name" :read-only="formReadyOnly" :required="cData.extension.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><RadioForm v-model="cData.alreadyAssociated.value" :label="cData.alreadyAssociated.label" :name="cData.alreadyAssociated.name" :read-only="formReadyOnly" :required="cData.alreadyAssociated.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="cData.registration.value" :label="cData.registration.label" :name="cData.registration.name" :read-only="formReadyOnly" :required="cData.registration.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.position.value" :label="cData.position.label" :name="cData.position.name" :read-only="formReadyOnly" :required="cData.position.required" /></div>
                <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.commercialEmail.value" :label="cData.commercialEmail.label" :name="cData.commercialEmail.name" :read-only="formReadyOnly" :required="cData.commercialEmail.required" /></div>
              </div>
            </div>
          </div>
          <div class="page__unionize--section-form q-my-xl">
            <div class="header--section-form">Dados Pessoais</div>
            <div class="section--form">
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-12"><InputForm v-model="pData.name.value" :label="pData.name.label" :name="pData.name.name" :read-only="formReadyOnly" :required="pData.name.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-5"><InputForm v-model="pData.cpf.value" :label="pData.cpf.label" :name="pData.cpf.name" :read-only="formReadyOnly" :mask="pData.cpf.mask" :required="pData.cpf.required" /></div>
                <div class="col-xs-12 col-sm-6 col-lg-5"><InputForm v-model="pData.rg.value" :label="pData.rg.label" :name="pData.rg.name" :read-only="formReadyOnly" :required="pData.rg.required" /></div>
                <div class="col-xs-12 col-sm-6 col-lg-2"><InputForm v-model="pData.issuingAuthority.value" :label="pData.issuingAuthority.label" :name="pData.issuingAuthority.name" :read-only="formReadyOnly" :required="pData.issuingAuthority.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><InputForm v-model="pData.birth.value" :label="pData.birth.label" :name="pData.birth.name" :read-only="formReadyOnly" :mask="pData.birth.mask" :required="pData.birth.required" /></div>
                <!-- <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><RadioForm label="Gênero" gender /></div> -->
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><SelectForm v-model="pData.gender.value" :label="pData.gender.label" :name="pData.gender.name" :read-only="formReadyOnly" :options="pData.gender.options" :required="pData.gender.required" /></div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><SelectForm v-model="pData.color.value" :label="pData.color.label" :name="pData.color.name" :read-only="formReadyOnly" :options="pData.color.options" :required="pData.color.required" /></div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><InputForm v-model="pData.maritalStatus.value" :label="pData.maritalStatus.label" :name="pData.maritalStatus.name" :read-only="formReadyOnly" :required="pData.maritalStatus.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.email.value" :label="pData.email.label" :name="pData.email.name" :read-only="formReadyOnly" :required="pData.email.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.phone.value" :label="pData.phone.label" :name="pData.phone.name" :read-only="formReadyOnly" :mask="pData.phone.mask" :required="pData.phone.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.cellphone.value" :label="pData.cellphone.label" :name="pData.cellphone.name" :read-only="formReadyOnly" :mask="pData.cellphone.mask" :required="pData.cellphone.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.homeAddress.value" :label="pData.homeAddress.label" :name="pData.homeAddress.name" :read-only="formReadyOnly" :required="pData.homeAddress.required" /></div>
                <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm v-model="pData.number.value" :label="pData.number.label" :name="pData.number.name" :read-only="formReadyOnly" :required="pData.number.required" /></div>
                <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm v-model="pData.complement.value" :label="pData.complement.label" :name="pData.complement.name" :read-only="formReadyOnly" :required="pData.complement.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-4"><InputForm v-model="pData.neighborhood.value" :label="pData.neighborhood.label" :name="pData.neighborhood.name" :read-only="formReadyOnly" :required="pData.neighborhood.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="pData.city.value" :label="pData.city.label" :name="pData.city.name" :read-only="formReadyOnly" :required="pData.city.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-4"><SelectForm v-model="pData.state.value" :label="pData.state.label" :name="pData.state.name" :read-only="formReadyOnly" :options="pData.state.options" :required="pData.state.required" /></div>
              </div>
            </div>
          </div>

          <section class="page__unionize--section-authorization q-mb-lg" v-if="state.form.formState === 'review'">
            <div class="column-first">
              <CheckBoxForm v-model="aData.confirm.value" size="xl" color="octal" />
            </div>
            <div class="column-second">
              <p>
                 Autorizo o Sindicato dos Bancários de Porto Alegre e Região a requerer o desconto de mensalidades sindicais e outras contribuições sindicais
                 devidamente autorizadas em assembleia geral da categoria, através de desconto em folha de pagamento ou utilizar meus dados bancários:
              </p>
              <div class="row q-col-gutter-sm q-mb-sm">
                  <div class="col-xs-12 col-md-5"><InputForm v-model="aData.bank.value" :label="aData.bank.label" :name="aData.bank.name" :required="aData.bank.required" /></div>
                  <div class="col-3 col-xs-6 col-md-3"><InputForm v-model="aData.codeBank.value" :label="aData.codeBank.label" :name="aData.codeBank.name" :required="aData.codeBank.required" /></div>
                  <div class="col-4 col-xs-6 col-md-4"><InputForm v-model="aData.agency.value" :label="aData.agency.label" :name="aData.agency.name" :required="aData.agency.required" /></div>
                </div>
              <p>para débito na minha conta corrente ou, ainda, através de outro meio eletrônico.</p>
              <p>
                As suas informações pessoais serão tratadas de acordo com a lei 13.709/18 (Lei Geral de Proteção de Dados – LGPD), principalmente nas hipóteses de
                execução de contrato, legítimo interesse e exercício regular de direitos e ficam a você assegurados todos os direitos de acesso à informação, retificação
                e eliminação de dados pessoais e sua titularidade, quando isso não importe na execução do presente contrato. Poderemos também enviar notificações
                referentes a atividade sindical por meios eletrônicos ou tradicionais a fim de lhe manter a par dos últimos acontecimentos relevantes.
              </p>
            </div>
          </section>

          <div class="page__unionize--section-actions q-mb-xl">
            <div class="row q-col-gutter-sm confirm" v-if="state.form.formState === 'edition'">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <q-btn color="septenary" size="lg" class="default__btn confirm-btn" label="Limpar Formulário" @click="clearForm()" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-8">
                <q-btn color="octal" size="lg" class="default__btn confirm-btn" label="Confirmar Dados" @click="changeFormState('review')" :disable="disableConfirm" />
              </div>
            </div>
            <div class="row q-col-gutter-sm send" v-if="state.form.formState === 'review'">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <q-btn color="septenary" size="lg" class="default__btn confirm-btn" label="Reeditar Dados" @click="changeFormState('edition')" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-8">
                <q-btn color="octal" size="lg" class="default__btn confirm-btn" label="Gerar PDF" @click="clickDownloadPDF()" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
</template>

<style lang="scss" scoped>
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

    .page__unionize--section-authorization
    {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      text-align: justify;

      p {
        color: $accent;
        margin: 0 0 20px;
      }

      @media only screen and (min-width: $breakpoint-xs)
      {
        flex-direction: row;
      }
    }

    .page__unionize--section-actions {
      .default__btn {
        width: 100%;
          border-radius: 20px;
      }
    }
  }
}
</style>
