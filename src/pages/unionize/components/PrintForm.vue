<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import _ from 'lodash'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import SelectForm from 'src/pages/unionize/components/SelectForm.vue'
import RadioForm from 'src/pages/unionize/components/RadioForm.vue'
import CheckBoxForm from 'src/pages/unionize/components/CheckBoxForm.vue'
import NewsUnionize from 'src/services/UnionizeService'
import { AxiosError } from 'axios'
import { states } from 'src/helpers/helpers'

type TFormStates = 'edition' | 'review' | 'done'

const props = defineProps({
  form: {
    type: Object,
    require: true
  }
})

const brazilStates = states
const state = reactive({
  form: {
    formState: 'edition' as TFormStates,
    inputs: {
      commercialData: {
        bank: { value: null as null | string, label: 'banco', name: 'bank', required: true },
        codeBank: { value: null as null | string, label: 'COD do banco', name: 'code_bank', required: false },
        agency: { value: null as null | string, label: 'Agência', name: 'agency', required: false },

        phone: { value: null as null | string, label: 'Telefone', name: 'phone', mask: '(##) #### - ####', required: false },
        extension: { value: null as null | string, label: 'Ramal', name: 'extension', required: false },
        alreadyAssociated: { value: null as null | string, label: 'Já foi associado à este sindicato?', name: 'already_associated', required: false },

        registration: { value: null as null | string, label: 'Matrícula funcional', name: 'registration', required: false },
        position: { value: null as null | string, label: 'Cargo/Função', name: 'position', required: false },
        commercialEmail: { value: null as null | string, label: 'E-mail comercial', name: 'commercial_email', required: false }
      },
      personalData: {
        name: { value: null as null | string, label: 'Nome', name: 'name', required: false },
        cpf: { value: null as null | string, label: 'CPF', name: 'cpf', mask: '###.###.###-##', required: false },
        rg: { value: null as null | string, label: 'RG', name: 'rg', required: false },

        birth: { value: null as null | string, label: 'Data de nascimento', name: 'birth', mask: '##  /  ##  /  ####', required: false },
        sex: { value: null as null | string, label: 'Sexo', name: 'sex', required: false },
        maritalStatus: { value: null as null | string, label: 'Estado civil', name: 'marital_status', required: false },

        email: { value: null as null | string, label: 'Email', name: 'email', required: false },
        phone: { value: null as null | string, label: 'Telefone', name: 'phone', mask: '(##) #### - ####', required: false },
        cellphone: { value: null as null | string, label: 'Celular', name: 'cellphone', mask: '(##) ##### - ####', required: false },

        homeAddress: { value: null as null | string, label: 'Endereço Recidencial', name: 'home_address', required: false },
        number: { value: null as null | string, label: 'Número', name: 'number', required: false },
        complement: { value: null as null | string, label: 'Complemento', name: 'complement', required: false },

        neighborhood: { value: null as null | string, label: 'Bairro', name: 'neighborhood', required: false },
        city: { value: null as null | string, label: 'Cidade', name: 'city', required: false },
        state: { value: null as null | object, label: 'Estado', name: 'state', options: brazilStates, required: false }
      },
      authorizationData: {
        confirm: { value: false },
        bank: { value: null as null | string, label: 'banco', name: 'auth_bank', required: false },
        codeBank: { value: null as null | string, label: 'COD do banco', name: 'auth_code_bank', required: false },
        agency: { value: null as null | string, label: 'Agência', name: 'auth_agency', required: false }
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
  // return state.form.formState === 'review'
  return true
})

const downloadPDF = () => {
  console.log('click Download PDF')
  const element = document.getElementById('print__component')
  // eslint-disable-next-line no-undef
  // html2pdf(element)

  const opt = {
    margin: 0,
    filename: 'myfiletest4.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    pagebreak: { after: '#break' },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }
  // New Promise-based usage:
  // eslint-disable-next-line no-undef
  html2pdf().set(opt).from(element).save()
  // eslint-disable-next-line no-undef
  console.log('html2pdf', html2pdf())
  // state.show = false
}

// const disableConfirm = computed((): boolean => {
//   let disableBtn = false

//   if (cData.bank.required && _.isEmpty(cData.bank.value)) { disableBtn = true }
//   if (cData.codeBank.required && _.isEmpty(cData.codeBank.value)) { disableBtn = true }
//   if (cData.agency.required && _.isEmpty(cData.agency.value)) { disableBtn = true }
//   if (cData.phone.required && _.isEmpty(cData.phone.value)) { disableBtn = true }
//   if (cData.extension.required && _.isEmpty(cData.extension.value)) { disableBtn = true }
//   if (cData.alreadyAssociated.required && _.isEmpty(cData.alreadyAssociated.value)) { disableBtn = true }
//   if (cData.registration.required && _.isEmpty(cData.registration.value)) { disableBtn = true }
//   if (cData.position.required && _.isEmpty(cData.position.value)) { disableBtn = true }
//   if (cData.commercialEmail.required && _.isEmpty(cData.commercialEmail.value)) { disableBtn = true }
//   if (pData.name.required && _.isEmpty(pData.name.value)) { disableBtn = true }
//   if (pData.cpf.required && _.isEmpty(pData.cpf.value)) { disableBtn = true }
//   if (pData.rg.required && _.isEmpty(pData.rg.value)) { disableBtn = true }
//   if (pData.birth.required && _.isEmpty(pData.birth.value)) { disableBtn = true }
//   if (pData.sex.required && _.isEmpty(pData.sex.value)) { disableBtn = true }
//   if (pData.maritalStatus.required && _.isEmpty(pData.maritalStatus.value)) { disableBtn = true }
//   if (pData.email.required && _.isEmpty(pData.email.value)) { disableBtn = true }
//   if (pData.phone.required && _.isEmpty(pData.phone.value)) { disableBtn = true }
//   if (pData.cellphone.required && _.isEmpty(pData.cellphone.value)) { disableBtn = true }
//   if (pData.homeAddress.required && _.isEmpty(pData.homeAddress.value)) { disableBtn = true }
//   if (pData.number.required && _.isEmpty(pData.number.value)) { disableBtn = true }
//   if (pData.complement.required && _.isEmpty(pData.complement.value)) { disableBtn = true }
//   if (pData.neighborhood.required && _.isEmpty(pData.neighborhood.value)) { disableBtn = true }
//   if (pData.city.required && _.isEmpty(pData.city.value)) { disableBtn = true }
//   if (pData.state.required && _.isEmpty(pData.state.value)) { disableBtn = true }

//   return disableBtn
// })

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

// const saveForm = () => {
//   NewsUnionize.register(state.form.inputs)
//     .then((response:any) => {
//       console.log('Unionize Register', response)
//       // state.sectionBanners = response.data.banners
//       // state.sectionNews = {
//       //   highlights: response.data.highlights,
//       //   geral: response.data.geral
//       // }
//     })
//     .catch((error:AxiosError) => {
//       console.log('error', error)
//     })
//     .then(() => {
//       //
//     })
// }

const initForm = () => {
  if (props.form) {
    state.form.inputs.commercialData.bank.value = props.form.bank
    state.form.inputs.commercialData.codeBank.value = props.form.code_bank
    state.form.inputs.commercialData.agency.value = props.form.agency
    state.form.inputs.commercialData.phone.value = props.form.commercial_phone
    state.form.inputs.commercialData.commercialEmail.value = props.form.commercial_email
    state.form.inputs.commercialData.extension.value = props.form.extension
    state.form.inputs.commercialData.alreadyAssociated.value = props.form.already_associated
    state.form.inputs.commercialData.registration.value = props.form.registration
    state.form.inputs.commercialData.position.value = props.form.position

    state.form.inputs.personalData.name.value = props.form.name
    state.form.inputs.personalData.cpf.value = props.form.cpf
    state.form.inputs.personalData.rg.value = props.form.rg
    state.form.inputs.personalData.birth.value = props.form.birth.replace('-', '')
    state.form.inputs.personalData.sex.value = props.form.sex
    state.form.inputs.personalData.maritalStatus.value = props.form.marital_status
    state.form.inputs.personalData.email.value = props.form.email
    state.form.inputs.personalData.phone.value = props.form.phone
    state.form.inputs.personalData.cellphone.value = props.form.cellphone
    state.form.inputs.personalData.homeAddress.value = props.form.home_address
    state.form.inputs.personalData.number.value = props.form.number
    state.form.inputs.personalData.complement.value = props.form.complement
    state.form.inputs.personalData.neighborhood.value = props.form.neighborhood
    state.form.inputs.personalData.city.value = props.form.city
    state.form.inputs.personalData.state.value = props.form.state

    state.form.inputs.authorizationData.confirm.value = props.form.auth_agree
    state.form.inputs.authorizationData.bank.value = props.form.auth_bank
    state.form.inputs.authorizationData.codeBank.value = props.form.auth_code_bank
    state.form.inputs.authorizationData.agency.value = props.form.auth_agency
  }

  /*
  state.form.inputs.commercialData.bank.value = 'Bank'
  state.form.inputs.commercialData.codeBank.value = 'codeBank'
  state.form.inputs.commercialData.agency.value = 'Agency'
  state.form.inputs.commercialData.phone.value = '5111111111'
  state.form.inputs.commercialData.commercialEmail.value = 'comercial Email'
  state.form.inputs.commercialData.extension.value = 'extension'
  state.form.inputs.commercialData.alreadyAssociated.value = 'y'
  state.form.inputs.commercialData.registration.value = 'Registration'
  state.form.inputs.commercialData.position.value = 'Position'
  state.form.inputs.commercialData.commercialEmail.value = 'email@comercial.com'

  state.form.inputs.personalData.name.value = 'Fulano'
  state.form.inputs.personalData.cpf.value = '00314565414'
  state.form.inputs.personalData.rg.value = '546432131654'
  state.form.inputs.personalData.birth.value = '13041984'
  state.form.inputs.personalData.sex.value = 'sex'
  state.form.inputs.personalData.maritalStatus.value = 'maritalStatus'
  state.form.inputs.personalData.email.value = 'email@personal.com'
  state.form.inputs.personalData.phone.value = '5133333333'
  state.form.inputs.personalData.cellphone.value = '51999999999'
  state.form.inputs.personalData.homeAddress.value = 'homeAddress'
  state.form.inputs.personalData.number.value = 'number'
  state.form.inputs.personalData.complement.value = 'complement'
  state.form.inputs.personalData.neighborhood.value = 'neighborhood'
  state.form.inputs.personalData.city.value = 'Porto Alegre'
  state.form.inputs.personalData.state.value = { value: 'rs', label: 'Rio Grande do Sul' }

  state.form.inputs.authorizationData.confirm.value = true
  state.form.inputs.authorizationData.bank.value = 'Auth Bank'
  state.form.inputs.authorizationData.codeBank.value = 'Auth codeBank'
  state.form.inputs.authorizationData.agency.value = 'Auth Agency'
  */
}

onMounted(() => {
  console.log('props.form', props.form)
  initForm()
  changeFormState('edition')
  downloadPDF()
})

</script>

<template>
    <LayoutSection id="print__component" background="white" without-curve-top without-curve-bootom min-height>
      <div class="page__unionize--content">
        <div class="page__unionize--section-title">
          Passos da sindicalização
        </div>
        <div>
          <div id="break" class="page__unionize--section-form q-my-xs">
            <div class="header--section-form">Dados Comerciais</div>
            <div class="section--form">
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-5"><InputForm to-print ref-model="refBank" v-model="cData.bank.value" :label="cData.bank.label" :name="cData.bank.name" :read-only="formReadyOnly" :required="cData.bank.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm to-print v-model="cData.codeBank.value" :label="cData.codeBank.label" :name="cData.codeBank.name" :read-only="formReadyOnly" :required="cData.codeBank.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm to-print v-model="cData.agency.value" :label="cData.agency.label" :name="cData.agency.name" :read-only="formReadyOnly" :required="cData.agency.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-5"><InputForm to-print v-model="cData.phone.value" :label="cData.phone.label" :name="cData.phone.name" :read-only="formReadyOnly" :mask="cData.phone.mask" :required="cData.phone.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm to-print v-model="cData.extension.value" :label="cData.extension.label" :name="cData.extension.name" :read-only="formReadyOnly" :required="cData.extension.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><RadioForm to-print v-model="cData.alreadyAssociated.value" :label="cData.alreadyAssociated.label" :name="cData.alreadyAssociated.name" :read-only="formReadyOnly" size="sm" :required="cData.alreadyAssociated.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm to-print v-model="cData.registration.value" :label="cData.registration.label" :name="cData.registration.name" :read-only="formReadyOnly" :required="cData.registration.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm to-print v-model="cData.position.value" :label="cData.position.label" :name="cData.position.name" :read-only="formReadyOnly" :required="cData.position.required" /></div>
                <div class="col-xs-12 col-lg-5"><InputForm to-print v-model="cData.commercialEmail.value" :label="cData.commercialEmail.label" :name="cData.commercialEmail.name" :read-only="formReadyOnly" :required="cData.commercialEmail.required" /></div>
              </div>
            </div>
            <!-- </div> -->
            <!-- <div class="page__unionize--section-form q-my-xs"> -->
            <div class="header--section-form">Dados Pessoais</div>
            <div class="section--form">
              <div class="row q-col-gutter-xs">
                <div class="col-12"><InputForm to-print v-model="pData.name.value" :label="pData.name.label" :name="pData.name.name" :read-only="formReadyOnly" :required="pData.name.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-5"><InputForm to-print v-model="pData.cpf.value" :label="pData.cpf.label" :name="pData.cpf.name" :read-only="formReadyOnly" :mask="pData.cpf.mask" :required="pData.cpf.required" /></div>
                <div class="col-xs-12 col-lg-5"><InputForm to-print v-model="pData.rg.value" :label="pData.rg.label" :name="pData.rg.name" :read-only="formReadyOnly" :required="pData.rg.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-md-7 col-lg-4"><InputForm to-print v-model="pData.birth.value" :label="pData.birth.label" :name="pData.birth.name" :read-only="formReadyOnly" :mask="pData.birth.mask" :required="pData.birth.required" /></div>
                <!-- <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><RadioForm label="Sexo" gender /></div> -->
                <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><InputForm to-print v-model="pData.sex.value" :label="pData.sex.label" :name="pData.sex.name" :read-only="formReadyOnly" :required="pData.sex.required" /></div>
                <div class="col-xs-12 col-sm-6 col-lg-5"><InputForm to-print v-model="pData.maritalStatus.value" :label="pData.maritalStatus.label" :name="pData.maritalStatus.name" :read-only="formReadyOnly" :required="pData.maritalStatus.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-6"><InputForm to-print v-model="pData.email.value" :label="pData.email.label" :name="pData.email.name" :read-only="formReadyOnly" :required="pData.email.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm to-print v-model="pData.phone.value" :label="pData.phone.label" :name="pData.phone.name" :read-only="formReadyOnly" :mask="pData.phone.mask" :required="pData.phone.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-3"><InputForm to-print v-model="pData.cellphone.value" :label="pData.cellphone.label" :name="pData.cellphone.name" :read-only="formReadyOnly" :mask="pData.phone.mask" :required="pData.cellphone.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-6"><InputForm to-print v-model="pData.homeAddress.value" :label="pData.homeAddress.label" :name="pData.homeAddress.name" :read-only="formReadyOnly" :required="pData.homeAddress.required" /></div>
                <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm to-print v-model="pData.number.value" :label="pData.number.label" :name="pData.number.name" :read-only="formReadyOnly" :required="pData.number.required" /></div>
                <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm to-print v-model="pData.complement.value" :label="pData.complement.label" :name="pData.complement.name" :read-only="formReadyOnly" :required="pData.complement.required" /></div>
              </div>
              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-lg-4"><InputForm to-print v-model="pData.neighborhood.value" :label="pData.neighborhood.label" :name="pData.neighborhood.name" :read-only="formReadyOnly" :required="pData.neighborhood.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm to-print v-model="pData.city.value" :label="pData.city.label" :name="pData.city.name" :read-only="formReadyOnly" :required="pData.city.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-4"><SelectForm to-print v-model="pData.state.value" :label="pData.state.label" :name="pData.state.name" :read-only="formReadyOnly" :options="pData.state.options" :required="pData.state.required" /></div>
              </div>
            </div>
          </div>

          <section class="page__unionize--section-form page__unionize--section-authorization q-mb-lg">
            <div class="column-first">
              <CheckBoxForm v-model="aData.confirm.value" size="xl" color="octal" />
            </div>
            <div class="column-second">
              <p>
                 Autorizo o Sindicato dos Bancários de Porto Alegre e Região a requerer o desconto de mensalidades sindicais e outras contribuições sindicais
                 devidamente autorizadas em assembleia geral da categoria, através de desconto em folha de pagamento ou utilizar meus dados bancários:
              </p>
              <div class="row q-col-gutter-xs q-mb-sm">
                  <div class="col-xs-12 col-md-5"><InputForm to-print v-model="aData.bank.value" :label="aData.bank.label" :name="aData.bank.name" :read-only="formReadyOnly" :options="pData.state.options" :required="aData.bank.required" /></div>
                  <div class="col-3 col-xs-6 col-md-3"><InputForm to-print v-model="aData.codeBank.value" :label="aData.codeBank.label" :name="aData.codeBank.name" :read-only="formReadyOnly" :options="pData.state.options" :required="aData.codeBank.required" /></div>
                  <div class="col-4 col-xs-6 col-md-4"><InputForm to-print v-model="aData.agency.value" :label="aData.agency.label" :name="aData.agency.name" :read-only="formReadyOnly" :options="pData.state.options" :required="aData.agency.required" /></div>
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
        </div>
      </div>
    </LayoutSection>
</template>

<style lang="scss" scoped>
#print__component
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
      border-radius: 40px;
      padding: 30px;
      background-color: $tertiary;
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
