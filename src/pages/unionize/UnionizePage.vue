<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ButtonStep, { TState } from 'src/pages/unionize/components/ButtonStep.vue'
import SeparatorStep from 'src/pages/unionize/components/SeparatorStep.vue'
import InputForm from 'src/pages/unionize/components/InputForm.vue'
import RadioForm from 'src/pages/unionize/components/RadioForm.vue'
import { computed, reactive } from 'vue'

type TFormStates = 'edition' | 'review' | 'done'

const state = reactive({
  form: {
    formState: 'edition' as TFormStates,
    inputs: {
      commercialData: {
        bank: { value: null, label: 'banco', name: 'bank' },
        bankCode: { value: null, label: 'COD do banco', name: 'cod_bank' },
        agency: { value: null, label: 'Agência', name: 'agency' },

        phone: { value: null, label: 'Telefone', name: 'phone' },
        extension: { value: null, label: 'Ramal', name: 'extension' },
        alreadyAssociated: { value: null, label: 'Já foi associado à este sindicato?', name: 'already_associated' },

        registration: { value: null, label: 'Matrícula funcional', name: 'registration' },
        position: { value: null, label: 'Cargo/Função', name: 'position' },
        commercialEmail: { value: null, label: 'E-mail comercial', name: 'commercial_email' }
      },
      personalData: {
        cpf: { value: null, label: 'CPF', name: 'cpf' },
        rg: { value: null, label: 'RG', name: 'rg' },

        birth: { value: null, label: 'Data de nascimento', name: 'birth' },
        sex: { value: null, label: 'Sexo', name: 'sex' },
        maritalStatus: { value: null, label: 'Estado civil', name: 'marital_status' },

        email: { value: null, label: 'Email', name: 'email' },
        phone: { value: null, label: 'Telefone', name: 'phone' },
        cellPhone: { value: null, label: 'Celular', name: 'cell_phone' },

        homeAddress: { value: null, label: 'Endereço Recidencial', name: 'home_address' },
        number: { value: null, label: 'Número', name: 'number' },
        complement: { value: null, label: 'Complemento', name: 'complement' },

        neighborhood: { value: null, label: 'Bairro', name: 'neighborhood' },
        city: { value: null, label: 'Cidade', name: 'city' },
        state: { value: null, label: 'Estado', name: 'state' }
      }
    }
  },
  staps: {
    one: 'actived' as TState,
    two: 'default' as TState
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
      state.staps.one = 'actived'
      state.staps.two = 'default'
      break
    case 'review':
      state.staps.one = 'done'
      state.staps.two = 'actived'
      break
    case 'done':
    default:
      state.staps.one = 'done'
      state.staps.two = 'done'
      break
  }
}
</script>

<template>
    <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
      <TitleDefault title="Sindicalize-se" />

      <div class="page__unionize--content">
        <div class="page__unionize--section-title">
          Passos da sindicalização
        </div>
        <div class="box__steps">
          <ButtonStep title="01" :state="state.staps.one" description="Preencher os dados" />
          <SeparatorStep class="separator__step" />
          <ButtonStep title="02" :state="state.staps.two" description="Enviado" />
        </div>

        <div class="page__unionize--section-form q-my-xl">
          <div class="header--section-form">Dados Comerciais</div>
          <div class="section--form">
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.bank.value" :label="cData.bank.label" :name="cData.bank.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.bankCode.value" :label="cData.bankCode.label" :name="cData.bankCode.name" :read-only="formReadyOnly" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="cData.agency.value" :label="cData.agency.label" :name="cData.agency.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.phone.value" :label="cData.phone.label" :name="cData.phone.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.extension.value" :label="cData.extension.label" :name="cData.extension.name" :read-only="formReadyOnly" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><RadioForm :label="cData.alreadyAssociated.label" :name="cData.alreadyAssociated.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-4 col-xs-12 col-sm-6 col-lg-4"><InputForm v-model="cData.registration.value" :label="cData.registration.label" :name="cData.registration.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="cData.position.value" :label="cData.position.label" :name="cData.position.name" :read-only="formReadyOnly" /></div>
              <div class="col-xs-12 col-lg-5"><InputForm v-model="cData.commercialEmail.value" :label="cData.commercialEmail.label" :name="cData.commercialEmail.name" :read-only="formReadyOnly" /></div>
            </div>
          </div>
        </div>
        <div class="page__unionize--section-form q-my-xl">
          <div class="header--section-form">Dados Pessoais</div>
          <div class="section--form">
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-5"><InputForm v-model="pData.cpf.value" :label="pData.cpf.label" :name="pData.cpf.name" :read-only="formReadyOnly" /></div>
              <div class="col-xs-12 col-lg-5"><InputForm v-model="pData.rg.value" :label="pData.rg.label" :name="pData.rg.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-md-7 col-lg-4"><InputForm v-model="pData.birth.value" :label="pData.birth.label" :name="pData.birth.name" :read-only="formReadyOnly" /></div>
              <!-- <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><RadioForm label="Sexo" gender /></div> -->
              <div class="col-xs-12 col-md-5 col-sm-6 col-lg-3"><InputForm v-model="pData.sex.value" :label="pData.sex.label" :name="pData.sex.name" :read-only="formReadyOnly" /></div>
              <div class="col-xs-12 col-sm-6 col-lg-5"><InputForm v-model="pData.maritalStatus.value" :label="pData.maritalStatus.label" :name="pData.maritalStatus.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.email.value" :label="pData.email.label" :name="pData.email.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.phone.value" :label="pData.phone.label" :name="pData.phone.name" :read-only="formReadyOnly" /></div>
              <div class="col-4 col-xs-12 col-sm-6 col-lg-3"><InputForm v-model="pData.cellPhone.value" :label="pData.cellPhone.label" :name="pData.cellPhone.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.homeAddress.value" :label="pData.homeAddress.label" :name="pData.homeAddress.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm v-model="pData.number.value" :label="pData.number.label" :name="pData.number.name" :read-only="formReadyOnly" /></div>
              <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm v-model="pData.complement.value" :label="pData.complement.label" :name="pData.complement.name" :read-only="formReadyOnly" /></div>
            </div>
            <div class="row q-col-gutter-sm q-my-md">
              <div class="col-xs-12 col-lg-6"><InputForm v-model="pData.neighborhood.value" :label="pData.neighborhood.label" :name="pData.neighborhood.name" :read-only="formReadyOnly" /></div>
              <div class="col-4 col-xs-12 col-sm-8 col-lg-4"><InputForm v-model="pData.city.value" :label="pData.city.label" :name="pData.city.name" :read-only="formReadyOnly" /></div>
              <div class="col-3 col-xs-12 col-sm-4 col-lg-2"><InputForm v-model="pData.state.value" :label="pData.state.label" :name="pData.state.name" :read-only="formReadyOnly" /></div>
            </div>
          </div>
        </div>

        <div class="page__unionize--section-actions q-mb-xl">
          <div class="confirm" v-if="state.form.formState === 'edition'">
            <q-btn color="octal" size="lg" class="default__btn confirm-btn" label="Confirmar Dados" @click="changeFormState('review')" />
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

    .page__unionize--section-actions {
      .default__btn {
        width: 100%;
          border-radius: 20px;
      }
    }
  }
}
</style>
