<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import { useQuasar } from 'quasar'
import { shallowRef, reactive, computed, onMounted, watch } from 'vue'

import MembersItem from 'src/pages/departments/components/MembersItem.vue'
import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import StatuteItem from 'src/pages/syndicate/components/about/StatuteItem.vue'
import SectionAbout from 'src/pages/syndicate/components/about/SectionAbout.vue'

const $q = useQuasar()
const freezeComponentStatute = shallowRef(StatuteItem)
const freezeComponentMembersItem = shallowRef(MembersItem)
const state = reactive({
  section: {
    about: [
      {
        title: 'História',
        content: [
          'O Sindicato dos Bancários de Porto Alegre e Região (SindBancários) completou 90 anos de história em 2023. A entidade foi fundada em 18 de janeiro de 1933, em uma Assembleia Geral que contou com 185 bancários. Na época, o SindBancários se chamou Sindicato dos Bancários do Rio Grande do Sul.',
          'A base era estadual, mas, com o surgimento de novos sindicatos no Interior, a entidade assumiu o nome atual: Sindicato dos Bancários de Porto Alegre e Região.',
          'Em 90 anos, o SindBancários desenhou uma trajetória de presença marcante na construção do sindicalismo bancário brasileiro. No Estado, tem papel crucial na luta por mais dignidade dos trabalhadores e trabalhadoras, e na construção da democracia em diversos períodos históricos.'
        ]
      },
      {
        title: 'As intervenções',
        content: [
          'A primeira ocorreu em 1946, quando caiu o Estado Novo. Novamente, em 1964, quando do Golpe Militar. Outra intervenção foi em 1968, quando recrudesceu o regime militar, com o Ato Institucional (AI) 5. Em 6 de setembro de 1979, em meio à maior greve dos bancários porto-alegrenses, ocorreria a quarta e última intervenção, que durou 10 meses e cinco dias.',
          'A ação interventora terminou com a cassação dos dirigentes Aquiles Notti, Câncio Vargas, Felipe Nogueira e do então presidente do Sindicato, Olívio Dutra, ex-governador do Rio Grande do Sul e ex-ministro das Cidades do governo Lula.'
        ]
      },
      {
        title: 'CUT',
        content: [
          'Em setembro de 1983, seguindo suas tradições de vanguarda da classe trabalhadora gaúcha, o Sindicato foi o primeiro a filiar-se no Estado à recém criada Central Única dos Trabalhadores (CUT). Muitos dos seus quadros assumiram postos na direção da Central.'
        ]
      },
      {
        title: 'Base do Sindicato',
        content: [
          'Desde 1990, o Sindicato tem como base Porto Alegre e 14 municípios vizinhos (Alvorada, Barra do Ribeiro, Cachoeirinha, Canoas, Charqueadas, Eldorado do Sul, Esteio, Gravataí, Guaíba, Nova Santa Rita, São Jerônimo, Sapucaia do Sul, Sertão Santana e Viamão).'
        ]
      },
      {
        title: 'Sede',
        content: [
          'Toda a estrutura diretiva, de serviços e equipamentos para uso dos bancários e da comunidade (auditório, biblioteca, cinema, Espaço Cultural) está em um único lugar. A Casa dos Bancários é a referência da ação do SindBancários na Capital. O local, que antigamente era chamado de Sede da Ladeira (fica na Rua General Câmara), foi completamente restaurado, ganhando salas, espaço para atendimento de associados, auditório, salão de festas e áreas de cultura e lazer.'
        ]
      }
    ]
  },
  statute: {
    items: {
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  legalMembers: {
    items: {
      screenBreak: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2',
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  }
})

const setListStatute = () => {
  state.statute.items.listProp.push({ title: 'Estatuto 2023 1', description: 'Lorem ipsum dolor sit amet, consectetuer 1', src: '/assets/svg/icon-xml.svg#icon_xml' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 2', description: 'Lorem ipsum dolor sit amet, consectetuer 2', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 3', description: 'Lorem ipsum dolor sit amet, consectetuer 3', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 4', description: 'Lorem ipsum dolor sit amet, consectetuer 4', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 5', description: 'Lorem ipsum dolor sit amet, consectetuer 5', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 6', description: 'Lorem ipsum dolor sit amet, consectetuer 6', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 7', description: 'Lorem ipsum dolor sit amet, consectetuer 7', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 8', description: 'Lorem ipsum dolor sit amet, consectetuer 8', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 9', description: 'Lorem ipsum dolor sit amet, consectetuer 9', src: '/assets/svg/icon-pdf.svg#icon_pdf' })
  state.statute.items.listProp.push({ title: 'Estatuto 2023 10', description: 'Lorem ipsum dolor sit amet, consectetuer 10', src: '/assets/svg/icon-xml.svg#icon_xml' })
}

const setListLegalMembers = () => {
  state.legalMembers.items.listProp.push({ title: 'Luciano Fetzner Barcellos', subtitle: 'Presidente', description: 'Banrisul', image: '/assets/image/tests/test-6.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Luis Gustavo Vargas Soares', subtitle: 'Secretario Geral', description: 'Bradesco', image: '/assets/image/tests/test-5.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Silvia Regina de Carvalho Chaves', subtitle: 'Secretaria Geral', description: 'Banrisul', image: '/assets/image/tests/test-4.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Luciano Fetzner Barcellos', subtitle: 'Presidente', description: 'Banrisul', image: '/assets/image/tests/test-1.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Luis Gustavo Vargas Soares', subtitle: 'Secretario Geral', description: 'Bradesco', image: '/assets/image/tests/test-2.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Silvia Regina de Carvalho Chaves', subtitle: 'Secretaria Geral', description: 'Banrisul', image: '/assets/image/tests/test-3.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Luciano Fetzner Barcellos', subtitle: 'Presidente', description: 'Banrisul', image: '/assets/image/tests/test-7.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Luis Gustavo Vargas Soares', subtitle: 'Secretario Geral', description: 'Bradesco', image: '/assets/image/tests/test-4.jpg' })
  state.legalMembers.items.listProp.push({ title: 'Silvia Regina de Carvalho Chaves', subtitle: 'Secretaria Geral', description: 'Banrisul', image: '/assets/image/tests/test-5.jpg' })
}

const currentScreenSize = computed((): TScreenSize => {
  return $q.screen.name
})

const changeOrderList = (screenSize: TScreenSize) => {
  let blockSizeDocument:number

  switch (screenSize) {
    case 'md':
      blockSizeDocument = 2
      blockSizeDocument = 2
      break
    case 'lg':
      blockSizeDocument = 3
      break
    default:
      blockSizeDocument = 4
      break
  }

  state.statute.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
  state.legalMembers.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListStatute()
  setListLegalMembers()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__departments--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop src="/assets/image/tests/test-6.jpg" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="accent">
      <div id="content__page--departments-default-open">
        <TitleDefault class="q-mb-xl" title="Departamento Jurídico" />
        <SectionAbout :item="state.section.about" />
      </div>
    </LayoutSection>

    <LayoutSection background="accent" cornerColor="tertiary">
      <TitleDefault class="q-mb-xl" title="Estatuto" color="text-inverse" />
      <p class="section__statute--subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl
        ut aliquip ex ea commodo consequat. Duis autem vel eum
        iriure dolor in hendrerit in vulputate velit esse molestie
        consequat, vel illum dolore.
      </p>
      <CarouselSlide v-if="state.statute.items.listProp.length" :listItems="state.statute.items" color="text-inverse" control-color="text-inverse" :component-item="freezeComponentStatute" item-class="departments__legal--document-item" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <TitleDefault class="q-mb-xl" title="Diretoria" />
      <p class="subtitle__legal-members">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
        facilisi.
      </p>
      <CarouselSlide v-if="state.legalMembers.items.listProp.length" :listItems="state.legalMembers.items" :component-item="freezeComponentMembersItem" />
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__departments--default-open
{
  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  .section__statute--subtitle {
    color: $text-inverse;
    font-size: 14px;
    margin: -40px 0 40px;
  }

  #content__page--departments-default-open
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
    }

    .space__between {
      margin: 10px 0;
      clear: both;
    }
  }

  .subtitle__legal-members {
    margin: -50px 0 30px;
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