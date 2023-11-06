<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import _ from 'lodash'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import CardStep from 'src/pages/unionize/components/CardStep.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import SelectForm from 'src/pages/unionize/components/SelectForm.vue'
import RadioForm from 'src/pages/unionize/components/RadioForm.vue'

type TFormStates = 'edition' | 'review' | 'done'
const brazilStates = [
  { value: 'ac', label: 'Acre' },
  { value: 'al', label: 'Alagoas' },
  { value: 'am', label: 'Amazonas' },
  { value: 'ap', label: 'Amapá' },
  { value: 'ba', label: 'Bahia' },
  { value: 'ce', label: 'Ceará' },
  { value: 'df', label: 'Distrito Federal' },
  { value: 'es', label: 'Espírito Santo' },
  { value: 'go', label: 'Goiás' },
  { value: 'ma', label: 'Maranhão' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'ms', label: 'Mato Grosso do Sul' },
  { value: 'mt', label: 'Mato Grosso' },
  { value: 'pa', label: 'Pará' },
  { value: 'pb', label: 'Paraíba' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'pi', label: 'Piauí' },
  { value: 'pr', label: 'Paraná' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'rn', label: 'Rio Grande do Norte' },
  { value: 'ro', label: 'Rondônia' },
  { value: 'rr', label: 'Roraima' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'se', label: 'Sergipe' },
  { value: 'to', label: 'Tocantins' }
]
const state = reactive({
  form: {
    formState: 'edition' as TFormStates,
    inputs: {
      commercialData: {
        bank: { value: null, label: 'banco', name: 'bank', required: true },
        bankCode: { value: null, label: 'COD do banco', name: 'cod_bank', required: false },
        agency: { value: null, label: 'Agência', name: 'agency', required: false },

        phone: { value: null, label: 'Telefone', name: 'phone', mask: '(##) ##### - ####', required: false },
        extension: { value: null, label: 'Ramal', name: 'extension', required: false },
        alreadyAssociated: { value: null, label: 'Já foi associado à este sindicato?', name: 'already_associated', required: false },

        registration: { value: null, label: 'Matrícula funcional', name: 'registration', required: false },
        position: { value: null, label: 'Cargo/Função', name: 'position', required: false },
        commercialEmail: { value: null, label: 'E-mail comercial', name: 'commercial_email', required: false }
      },
      personalData: {
        name: { value: null, label: 'Nome', name: 'name', required: false },
        cpf: { value: null, label: 'CPF', name: 'cpf', mask: '###.###.###-##', required: false },
        rg: { value: null, label: 'RG', name: 'rg', required: false },

        birth: { value: null, label: 'Data de nascimento', name: 'birth', mask: '##  /  ##  /  ####', required: false },
        sex: { value: null, label: 'Sexo', name: 'sex', required: false },
        maritalStatus: { value: null, label: 'Estado civil', name: 'marital_status', required: false },

        email: { value: null, label: 'Email', name: 'email', required: false },
        phone: { value: null, label: 'Telefone', name: 'phone', mask: '(##) ##### - ####', required: false },
        cellPhone: { value: null, label: 'Celular', name: 'cell_phone', mask: '(##) ##### - ####', required: false },

        homeAddress: { value: null, label: 'Endereço Recidencial', name: 'home_address', required: false },
        number: { value: null, label: 'Número', name: 'number', required: false },
        complement: { value: null, label: 'Complemento', name: 'complement', required: false },

        neighborhood: { value: null, label: 'Bairro', name: 'neighborhood', required: false },
        city: { value: null, label: 'Cidade', name: 'city', required: false },
        state: { value: null, label: 'Estado', name: 'state', options: brazilStates, required: false }
      }
    }
  },
  staps: {
    // one: 'actived' as TState,
    // two: 'default' as TState
  }
})

const cData = state.form.inputs.commercialData
const pData = state.form.inputs.personalData

const formReadyOnly = computed((): boolean => {
  return state.form.formState === 'review'
})

const changeFormState = (formState:TFormStates) => {
  state.form.formState = formState

  switch (formState) {
    case 'edition':
      // state.staps.one = 'actived'
      // state.staps.two = 'default'
      break
    case 'review':
      // state.staps.one = 'done'
      // state.staps.two = 'actived'
      break
    case 'done':
    default:
      // state.staps.one = 'done'
      // state.staps.two = 'done'
      break
  }
}

const downloadPDF = () => {
  console.log('click Download PDF')
  // const element = document.getElementById('print')
  // eslint-disable-next-line no-undef
  // html2pdf(element)

  // const opt = {
  //   margin: 0,
  //   filename: 'myfiletest4.pdf',
  //   image: { type: 'jpeg', quality: 1 },
  //   html2canvas: { scale: 2 },
  //   jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  // }
  // New Promise-based usage:
  // eslint-disable-next-line no-undef
  // html2pdf().set(opt).from(element).save()
}

const disableConfirm = computed((): boolean => {
  let disableBtn = false

  if (cData.bank.required && _.isEmpty(cData.bank.value)) { disableBtn = true }
  if (cData.bankCode.required && _.isEmpty(cData.bankCode.value)) { disableBtn = true }
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
  if (pData.birth.required && _.isEmpty(pData.birth.value)) { disableBtn = true }
  if (pData.sex.required && _.isEmpty(pData.sex.value)) { disableBtn = true }
  if (pData.maritalStatus.required && _.isEmpty(pData.maritalStatus.value)) { disableBtn = true }
  if (pData.email.required && _.isEmpty(pData.email.value)) { disableBtn = true }
  if (pData.phone.required && _.isEmpty(pData.phone.value)) { disableBtn = true }
  if (pData.cellPhone.required && _.isEmpty(pData.cellPhone.value)) { disableBtn = true }
  if (pData.homeAddress.required && _.isEmpty(pData.homeAddress.value)) { disableBtn = true }
  if (pData.number.required && _.isEmpty(pData.number.value)) { disableBtn = true }
  if (pData.complement.required && _.isEmpty(pData.complement.value)) { disableBtn = true }
  if (pData.neighborhood.required && _.isEmpty(pData.neighborhood.value)) { disableBtn = true }
  if (pData.city.required && _.isEmpty(pData.city.value)) { disableBtn = true }
  if (pData.state.required && _.isEmpty(pData.state.value)) { disableBtn = true }

  return disableBtn
})

onMounted(() => {
  // console.log('_.isNil(null): ', _.isNil(null))
  // console.log('_.isNil(\'\')', _.isNil(''))
  // console.log('_.isNil({})', _.isNil({}))
  // console.log('_.isNil([])', _.isNil([]))
  // console.log('_.isNil(undefined)', _.isNil(undefined))

  // console.log('_.isEmpty(null): ', _.isEmpty(null))
  // console.log('_.isEmpty(\'\')', _.isEmpty(''))
  // console.log('_.isEmpty({})', _.isEmpty({}))
  // console.log('_.isEmpty([])', _.isEmpty([]))
  // console.log('_.isEmpty(undefined)', _.isEmpty(undefined))
  // console.log('_.isEmpty(\'a\')', _.isEmpty('a'))
})

</script>

<template>
    <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
      <TitleDefault title="Sindicalize-se" />

      <div id="print" class="page__unionize--content">
        <button @click="downloadPDF">Download-PDF</button>
        <div class="page__unionize--section-title">
          Passos da sindicalização
        </div>
        <div class="box__steps">
          <CardStep step="01" title="Preencher os dados" description="Preencha seus dados conforme os campos obrigatórios" />
        </div>

        <div v-if="state.form.formState === 'done'" class="dialog--box">
          <div class="dialog--done">
            <p>Olá {{ state.form.inputs.personalData.name.value }},</p>
            <p>Seu cadastro foi enviado com sucesso.</p>
          </div>
        </div>
        <div v-else>
          <div class="page__unionize--section-form q-my-xl">
            <div class="header--section-form">Dados Comerciais</div>
            <div class="section--form">
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.bank.value" :label="cData.bank.label" :name="cData.bank.name" :read-only="formReadyOnly" :required="cData.bank.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.bankCode.value" :label="cData.bankCode.label" :name="cData.bankCode.name" :read-only="formReadyOnly" :required="cData.bankCode.required" /></div>
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
                <div class="col-xs-12 col-lg-5"><InputForm v-model="pData.rg.value" :label="pData.rg.label" :name="pData.rg.name" :read-only="formReadyOnly" :required="pData.rg.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-md-7 col-lg-4"><InputForm v-model="pData.birth.value" :label="pData.birth.label" :name="pData.birth.name" :read-only="formReadyOnly" :mask="pData.birth.mask" :required="pData.birth.required" /></div>
                <!-- <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><RadioForm label="Sexo" gender /></div> -->
                <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><InputForm v-model="pData.sex.value" :label="pData.sex.label" :name="pData.sex.name" :read-only="formReadyOnly" :required="pData.sex.required" /></div>
                <div class="col-xs-12 col-sm-6 col-lg-5"><InputForm v-model="pData.maritalStatus.value" :label="pData.maritalStatus.label" :name="pData.maritalStatus.name" :read-only="formReadyOnly" :required="pData.maritalStatus.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.email.value" :label="pData.email.label" :name="pData.email.name" :read-only="formReadyOnly" :required="pData.email.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.phone.value" :label="pData.phone.label" :name="pData.phone.name" :read-only="formReadyOnly" :mask="pData.phone.mask" :required="pData.phone.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.cellPhone.value" :label="pData.cellPhone.label" :name="pData.cellPhone.name" :read-only="formReadyOnly" :mask="pData.phone.mask" :required="pData.cellPhone.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.homeAddress.value" :label="pData.homeAddress.label" :name="pData.homeAddress.name" :read-only="formReadyOnly" :required="pData.homeAddress.required" /></div>
                <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm v-model="pData.number.value" :label="pData.number.label" :name="pData.number.name" :read-only="formReadyOnly" :required="pData.number.required" /></div>
                <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm v-model="pData.complement.value" :label="pData.complement.label" :name="pData.complement.name" :read-only="formReadyOnly" :required="pData.complement.required" /></div>
              </div>
              <div class="row q-col-gutter-sm q-my-md">
                <div class="col-xs-12 col-lg-5"><InputForm v-model="pData.neighborhood.value" :label="pData.neighborhood.label" :name="pData.neighborhood.name" :read-only="formReadyOnly" :required="pData.neighborhood.required" /></div>
                <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="pData.city.value" :label="pData.city.label" :name="pData.city.name" :read-only="formReadyOnly" :required="pData.city.required" /></div>
                <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><SelectForm v-model="pData.state.value" :label="pData.state.label" :name="pData.state.name" :read-only="formReadyOnly" :options="pData.state.options" :required="pData.state.required" /></div>
              </div>
            </div>
          </div>

          <div class="page__unionize--section-actions q-mb-xl">
            <div class="confirm" v-if="state.form.formState === 'edition'">
              <q-btn color="octal" size="lg" class="default__btn confirm-btn" label="Confirmar Dados" @click="changeFormState('review')" :disable="disableConfirm" />
            </div>
            <div class="row q-col-gutter-sm send" v-if="state.form.formState === 'review'">
              <div class="col-4">
                <q-btn color="septenary" size="lg" class="default__btn confirm-btn" label="Reeditar Dados" @click="changeFormState('edition')" />
              </div>
              <div class="col-8">
                <q-btn color="octal" size="lg" class="default__btn confirm-btn" label="Enviar Dados" @click="changeFormState('done')" />
              </div>
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
    .dialog--box
    {
      .dialog--done {
        background-color: $octal;
        color: $text-inverse;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 60px;
        margin: 60px auto;
        max-width: 800px;
        border-radius: 40px;
        flex-direction: column;

        p {
          font-weight: bold;
          text-align: center;
          font-size: 20px;
          margin: 0;
        }
      }
    }

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

    .page__unionize--section-actions {
      .default__btn {
        width: 100%;
          border-radius: 20px;
      }
    }
  }
}
</style>
