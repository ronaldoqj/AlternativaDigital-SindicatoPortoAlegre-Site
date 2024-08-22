<script setup lang="ts">
import { baseURL } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import { useQuasar } from 'quasar'
import { shallowRef, reactive, computed, onMounted, watch } from 'vue'

import DocumentItem from './components/DocumentItem.vue'
import MembersItem from './components/MembersItem.vue'
import NewsService from 'src/services/NewsService'
import RelatedPublications from 'components/interface/RelatedPublications.vue'

import { IDinamicList, IDinamicScreen, TScreenSize } from 'src/components/models/interfaces/InterfacesDefault'
import { AxiosError } from 'axios'
import { INews, IResponseRelated } from 'src/types/INews'

interface IItemMember {
  title: string
  surname: string
  subtitle: string
  description: string
  image: string
}

const $q = useQuasar()
const freezeComponentDocument = shallowRef(DocumentItem)

const state = reactive({
  documents: {
    items: {
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  legalMembers: {
    items: {
      screenBreak: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2',
      currentScreen: {} as IDinamicScreen,
      listProp: [] as IItemMember[]
    } as IDinamicList
  },
  departmentPublications: {
    items: {
      screenBreak: 'col-xs-12 col-sm-12 col-md-6 col-xl-4',
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  relatedDepartments: {
    departmentId: 1,
    limit: 6,
    list: [] as INews[]
  }
})

const setListDocuments = () => {
  state.documents.items.listProp.push({ title: 'Agiplan', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/AGIPLAN-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Banrisul', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BANRISUL-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Bradesco', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BRADESCO-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'BRDE', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/BRDE-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'CEF', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/CEF-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Hsbc', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/HSBC-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Itaú', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/ITAU-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'NBC', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/NBC-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Renner', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/RENNER-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Safra', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/SAFRA-RELATORIO_ACOES_COLETIVAS.pdf` })
  state.documents.items.listProp.push({ title: 'Santander', description: 'Relatorio ações coletivas', src: '/assets/svg/icon-pdf.svg#icon_pdf', link: `${baseURL}temporary/documents/departments-services/SANTANDER-RELATORIO_ACOES_COLETIVAS.pdf` })
}

const setListLegalMembers = () => {
  state.legalMembers.items.listProp.push({ title: 'Simoni', surname: 'Fernandes Medeiros', subtitle: 'Jurídico', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/juridico_simoni_medeiros.jpg` })
  state.legalMembers.items.listProp.push({ title: 'Ronaldo', surname: 'Zeni', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/011.jpg` })
}

const setDepartmentPublications = () => {
  const limitImages = 7
  let countImages = 0

  for (let index = 0; index < 16; index++) {
    if (countImages === limitImages) {
      countImages = 0
    }
    countImages += 1

    const title = 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú'
    const description = 'Assembleia Legislativa'

    state.departmentPublications.items.listProp.push({ subject: `Subject ${index}`, title: `${title} ${index}`, description: `${description} ${index}` })
  }
}

const currentScreenSize = computed((): TScreenSize => {
  return $q.screen.name
})

const changeOrderList = (screenSize: TScreenSize) => {
  let blockSizeDocument:number
  let blockSizeDepartmentPublications:number

  switch (screenSize) {
    case 'md':
      blockSizeDocument = 2
      blockSizeDepartmentPublications = 6
      blockSizeDocument = 2
      break
    case 'lg':
      blockSizeDocument = 3
      blockSizeDepartmentPublications = 6
      break
    default:
      blockSizeDocument = 4
      blockSizeDepartmentPublications = 9
      break
  }

  state.documents.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
  state.departmentPublications.items.currentScreen = { screen: screenSize, blockSize: blockSizeDepartmentPublications }
  state.legalMembers.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
}

const getRelatedDepartments = () => {
  NewsService.relatedDepartment({ department_id: state.relatedDepartments.departmentId, limit: state.relatedDepartments.limit })
    .then((response:IResponseRelated) => {
      state.relatedDepartments.list = response.data
      // console.log('getRelatedDepartments response:', response)
      // console.log('initial response', response.data)
      // console.log('initial response2', state.sectionNews)
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListDocuments()
  setDepartmentPublications()
  setListLegalMembers()
  changeOrderList(currentScreenSize.value)
  getRelatedDepartments()
})

</script>

<template>
  <div id="page__services--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="`${baseURL}temporary/images/services/juridico.jpg`" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <div id="content__page--service-default-open">
        <TitleDefault class="q-mb-xl" title="Serviços Jurídico" />
        <div>
          <p>As consultas com os advogados e advogadas retornam ao formato presencial no Sindicato dos Bancários de Porto Alegre e Região, juntamente do atendimento virtual, de forma remota, em sala virtual do aplicativo Zoom, nos mesmos horários do atendimento presencial.</p>
          <p>
            Para ser atendido de forma remota, o associado deve acessar o link dos plantões jurídicos, que será sempre o mesmo, no dia e horário da especialidade desejada. <br />
            O advogado plantonista irá admitir o bancário na sala virtual e iniciará o atendimento. A consulta contará com a mesma privacidade e sigilo de um atendimento presencial. Poderá haver espera, pois os atendimentos acontecerão por ordem de solicitação de entrada na sala virtual, na mesma sistemática que ocorre quando realizado na sede da entidade (ordem de chegada, sem agendamento prévio).
          </p>
          <p>“A importância do atendimento jurídico ao bancário é indiscutível, portanto voltamos ao plantão jurídico presencial e manteremos em paralelo também o atendimento remoto. Em uma conjuntura política tão desfavorável ao trabalhador é importante essa proximidade ampliada do Sindicato para proteção aos direitos dos colegas”, afirma a diretora do Departamento Jurídico do SindBancários, Simoni Medeiros.</p>
        </div>

        <div>
          <h4>Sala de atendimento virtual – Plantões jurídicos semanais</h4>
          <div class="space__between"></div>
          <p>
            <strong>Entrar na reunião Zoom:</strong> <br>
            <a href="https://us02web.zoom.us/j/84785973845?pwd=cGFWUUV5Q2pYMFdvR0FraWtUS2JQdz09" target="_blank">https://us02web.zoom.us/j/84785973845?pwd=cGFWUUV5Q2pYMFdvR0FraWtUS2JQdz09</a>
          </p>
          <p>
            <strong>ID da reunião:</strong> 847 8597 3845 <br>
            <strong>Senha de acesso:</strong> 136428
          </p>
        </div>

        <div class="space__between"></div>

        <div>
          <h4>Dias e horários</h4>
          <div class="space__between"></div>
          <p>
            <strong class="title-strong">SEGUNDA-FEIRA</strong><br>
            <strong>10h – 12h:</strong> Direito Previdenciário/Acidentário – Antonio Vicente Martins Advogados Associados<br>
            <strong>13h30 – 16h:</strong> Trabalhista – Camargo, Catita e Maineri Advogados Associados
          </p>
          <p>
            <strong class="title-strong">TERÇA-FEIRA</strong><br>
            <strong>10h – 12h:</strong> Direito Previdenciário/Acidentário – Antonio Vicente Martins Advogados Associados<br>
            <strong>9h – 11h:</strong> Previdenciário – Aposentadoria e Complementar – Aline Portanova<br>
            <strong>13h30 – 16h:</strong> Trabalhista – Antonio Vicente Martins Advogados
          </p>
          <p>
            <strong class="title-strong">QUARTA-FEIRA</strong><br>
            <strong>10h – 12h:</strong> Direito Previdenciário/Acidentário – Antonio Vicente Martins Advogados<br>
            <strong>13h30 – 16h:</strong> Direito Civil e Trabalhista – Costa Advogados Associados
          </p>
          <p>
            <strong class="title-strong">QUINTA-FEIRA</strong><br>
            <strong>10h – 12h:</strong> Direito Previdenciário/Acidentário – Antonio Vicente Martins Advogados<br>
            <strong>13h30 – 16h:</strong> Trabalhista – Franck & Costa Advogados Associados
          </p>
          <p>
            <strong class="title-strong">SEXTA-FEIRA</strong><br>
            <strong>9h – 11h:</strong> Previdenciário – Aposentadoria e Complementar – Aline Portanova<br>
            <strong>13h30 – 16h:</strong> Trabalhista – Fagundes & Schneider Advogados
          </p>
        </div>

        <div class="space__between"></div>

        <div>
          <h4>Escritórios credenciados</h4>
          <div class="space__between"></div>

          <p>
            <strong class="title-strong">AVM Advogados</strong><br>
            Telefone: 51 3061-4880<br>
            E-mail: contato@avmadvogados.com.br
          </p>
          <p>
            <strong class="title-strong">CCM Advogados</strong><br>
            Telefone: 51 99797-0591<br>
            E-mail: ccm@ccm.adv.br
          </p>
          <p>
            <strong class="title-strong">Costa Advogados</strong><br>
            Telefone: 51 99630-6203<br>
            E-mail: atendimento@costaadvogados.com.br
          </p>
          <p>
            <strong class="title-strong">Jairo Frank Advogado</strong><br>
            Telefone: 51 3226-0844<br>
            E-mail: jfrank@gfcadv.com.br
          </p>
          <p>
            <strong class="title-strong">Fagundes e Schneider</strong><br>
            Telefone: 51 3595-3995<br>
            E-mail: atendimento@fse.adv.br
          </p>
        </div>

        <div class="space__between"></div>

        <div>
          <h4>Comissões de conciliação</h4>
          <div class="space__between"></div>
          <p>O SindBancários coordena e orienta tentativas de solução de conflitos trabalhistas individuais utilizando as Comissões de Conciliação Prévia (CCP) ou Voluntária (CCV). <br>
             O papel dessas comissões é buscar um acordo extrajudicial pertinente às lesões sofridas pelo bancário no curso da contratualidade. O trabalhador é orientado sobre os seus direitos e o que isso representa financeiramente. Os pleitos são submetidos ao empregador, que poderá ou não negociar.</p>
          <p><strong>Comissão de Conciliação Prévia (CCP) do Banco do Brasil</strong></p>
        </div>

        <div class="space__between"></div>

        <div>
          <h4>Direitos dos bancários</h4>
          <div class="space__between"></div>
          <p>
             São vários os direitos conquistados pelos bancários, hoje vigentes pela Convenção Coletiva de Trabalho (CCT) <br>
             Abono de Falta do Estudante
          </p>
          <p>
            <strong>O empregado estudante terá abonada sua falta ao serviço e considerada como dia de trabaiho efetivo, para todos os efeitos legais, nas seguintes condições:</strong>
            <ul>
              <li>Nos dias em que estiver comprovadamente realizando provas de exame vestibular para ingresso em estabelecimento de ensino superior</li>
              <li>Nos dias de prova escolar obrigatória, mediante aviso prévio de 48 (quarenta e oito) horas, desde que comprovada sua realização em dia e hora incompatíveis com a presença do empregado ao serviço. A comprovação da prova escolar obrigatória deverá ser efetuada por meio de declaração escrita do estabelecimento de ensino</li>
              <li>Ausências legais ampliadas pela Convenção Coletiva (CCT)</li>
              <li>Quatro dias úteis consecutivos, em caso de falecimento de cônjuge, ascendente, descendente, irmão ou pessoa que, comprovadamente, viva sob sua dependência econômica</li>
              <li>Cinco dias úteis consecutivos, em virtude de casamento</li>
              <li>Cinco dias consecutivos, ao pai, garantido o mínimo de três (3) dias úteis, no decorrer da primeira semana de vida do filho</li>
              <li>Um dia para doação de sangue, comprovada</li>
              <li>Um dia para internação hospitalar, por motivo de doença de cônjuge, filho, pai ou mãe</li>
              <li>Dois dias por ano para levar filho ou dependente menor de 14 anos ao médico, mediante comprovação, em até 48 horas após</li>
              <li>Pelo tempo que se fizer necessário, quando o empregado tiver que comparecer a juízo</li>
            </ul>
          </p>
        </div>
      </div>
    </LayoutSection>

    <LayoutSection background="quaternary" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Documentos para processos" />
      <CarouselSlide v-if="state.documents.items.listProp.length" :listItems="state.documents.items" :component-item="freezeComponentDocument" item-class="departments__legal--document-item" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="quaternary">
      <RelatedPublications v-if="state.relatedDepartments.list.length" :list="state.relatedDepartments.list" />
      <div v-else>
        <TitleDefault title="Publicações Relacionadas" />
        <TitleDefault class="q-my-xl" title="Nenhuma publicação relacionada encontrada" only-text />
      </div>
      <!-- <CarouselSlide v-if="state.departmentPublications.items.listProp.length" :listItems="state.departmentPublications.items" :items-screen-break="state.departmentPublications.items.screenBreak" :component-item="freezeComponentDepartmentPublications" item-class="" /> -->
    </LayoutSection>

    <LayoutSection background="quaternary" cornerColor="secondary">
      <TitleDefault class="q-mb-xl" title="Membros por equipe" />
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(member, key) in (state.legalMembers.items.listProp as IItemMember[])" :key="key">
          <MembersItem :title="member.title" :surname="member.surname" :subtitle="member.subtitle" :description="member.description" :image="member.image" background-color="tertiary" />
        </div>
      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__services--default-open
{
  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  #content__page--service-default-open
  {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 5px 0;
      font-size: 25px;
      font-weight: bold;
      line-height: 1.2em;
      color: $accent;
    }

    p {
      text-align: justify;

      .title-strong {
        font-size: 1.2em;
      }
    }

    .space__between {
      margin: 10px 0;
      clear: both;
    }

    ul {
      padding: 0px 17px;
      margin: 5px 0 0 0;

      list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 9 9"><circle fill="%23E34548" cx="7" cy="7" r="2"/></svg>');
      li {
        margin-top: -5px;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm)
  {
    .images__floats
    {
      width: 400px;

      &.left {
        float: left;
        margin-right: 10px;
      }

      &.right {
        float: right;
        margin-left: 10px;
      }
    }
  }
}
</style>
