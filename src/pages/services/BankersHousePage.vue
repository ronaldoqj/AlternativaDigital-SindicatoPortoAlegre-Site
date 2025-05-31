<script setup lang="ts">
import { getValidImage } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import GenericPageService from 'src/services/GenericPageService'
import { IGenericPage, IResponseGenericPage } from 'src/types/IGenericPage'
import { onMounted, reactive } from 'vue'
import { AxiosError } from 'axios'
// import { reactive } from 'vue'

// const state = reactive({
//   item: {
//     title: 'Clinica Odontológica update',
//     subject: 'Desconto de 25% em compras acima de R$ 150,00 update',
//     phone: '3325 5036 update',
//     mail: 'farmacia@donjoaoxii.com.br update',
//     socialMedia: ['facebook', 'instagram', 'twitter', 'whatsapp', 'youtube']
//   }
// })

const state = reactive({
  service: {} as IGenericPage,
  controlsPage: {
    loading: true
  }
})

const getGenericPage = (id:number) => {
  GenericPageService.get({ id })
    .then((response:IResponseGenericPage) => {
      state.service = response.data as IGenericPage
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      state.controlsPage.loading = false
    })
}

onMounted(() => {
  getGenericPage(11)
})

</script>

<!-- <template>
  <div id="page__services--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="`${baseURL}temporary/images/services/casa-dos-bancarios.jpg`" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <div id="content__page--service-default-open">
        <TitleDefault class="q-mb-xl" title="Espaço Casa dos Bancários" />
        <div>
          <p>
            A Casa dos Bancários é um centro de organização e atendimento à categoria. Tem auditório com capacidade para 120 lugares que pode ser transformada em sala menores, permitindo que várias atividades ocorram ao mesmo tempo; salão de festas com capacidade churrasqueira, eletrodomésticos, louça, refrigeradores e capacidade para 20 pessoas, biblioteca com mais de 9 mil livros disponíveis para locação dos sócios e um cinema, o CineBancários.
          </p>

          <h4 class="q-pt-xl">Auditório</h4>
          <p>
            <ul>
              <li>Capacidade para 120 lugares;</li>
              <li>Ambiente climatizado;</li>
              <li>Acesso à Internet;</li>
              <li>Equipado com datashow e som;</li>
              <li>Pode ser transformada em salas menores, de forma que, durante um mesmo evento, várias atividades possam ocorrer ao mesmo tempo;</li>
              <li>Ar condicionado modulado para cada sala;</li>
            </ul>
          </p>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/auditorium_1.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/auditorium_2.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/auditorium_3.jpg`" />
            </div>
          </div>

          <h4 class="q-pt-xl">Biblioteca</h4>
          <p>
            A Biblioteca está localizada no térreo da Casa dos Bancários, em um espaço aconchegante, silencioso e com mobiliário adequado para quem quiser se dedicar à leitura. São aproximadamente 10 mil livros, nos mais diversos assuntos, além de revistas de atualidades e jornais, à disposição da categoria bancária.
          </p>
          <p>
            Funcionamento: de segunda a sexta, das 9h às 18h<br>
            Telefones: (51) 3030.9407/9404<br>
            E-mail: biblioteca@sindbancarios.org.br
          </p>
          <p>
            <strong>ACESSO AO ACERVO VIA INTERNET</strong><br>
            Mais uma facilidade está ao alcance a categoria. É possível consultar o acervo da Biblioteca sem precisar se deslocar até a Casa dos Bancários. Basta entrar no site http://biblioteca.sindbancarios.org.br/ e acessar o menu de pesquisa, para descobrir o que há disponível.
          </p>
          <p>
            Você poderá pesquisar por autor, título ou assunto e a navegação é muito simples. Reservas e renovações de livros, também podem ser feitas pela internet, só que, para isso, o usuário tem que estar cadastrado na Biblioteca.
          </p>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/library_1.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/library_2.jpg`" />
            </div>
          </div>

          <h4 class="q-pt-xl">Cine Bancários</h4>
          <h5>A SALA</h5>
          <p>
            <ul>
              <li>Ambiente climatizado</li>
              <li>81 poltronas</li>
              <li>Dois lugares para cadeirantes</li>
              <li>Projeção em DCP, bluray e 35mm</li>
              <li>Som Dolby Digital 5.1</li>
            </ul>

            Ingressos:<br>
            Público em geral: R$ 12,00<br>
            Estudantes, idosos acima de 60 anos e bancários sindicalizados: R$ 6,00<br>
            São aceitos cartões nas bandeiras Banricompras, Visa, MasterCard e Elo.<br>
            Confira a programação aqui.<br>
            *Não há sessões nas segundas-feiras<br>
            Contato:<br>
            (51) 3030.9405<br>
            Funcionamento:<br>
            De terça a domingo
          </p>

          <h4 class="q-pt-xl">Salão de Festas</h4>
          <h5>Salão de Festas</h5>
          <p>
            <ul>
              <li>Capacidade para 100 pessoas</li>
              <li>Churrasqueira, eletrodomésticos, louça, refrigeradores</li>
            </ul>
          </p>
          <h5>Refrigeradores</h5>
          <p>
            <ul>
              <li>Mesas e cadeiras</li>
              <li>Sistema de som com microfone</li>
              <li>Ambiente climatizado</li>
              <li>Pode ser locado por bancários</li>
            </ul>
          </p>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/party-room_1.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/party-room_2.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/party-room_3.jpg`" />
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
              <ImageDefault ratio="1" class="rounded-borders" :src="`${baseURL}temporary/images/bankers-house/party-room_4.jpg`" />
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  </div>
</template> -->
<template>
  <div id="page__services--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="getValidImage(state.service.image)" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <div id="content__page--service-default-open">
        <TitleDefault class="q-mb-xl" :title="state.service.title as string" />
        <div v-html="state.service.text"></div>
      </div>
      <q-inner-loading
        :showing="state.controlsPage.loading"
        label="Por favor espere..."
        label-class="text-primary"
        color="primary"
        label-style="font-size: 1.1em"
      />
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__services--default-open
{
  .images__floats {
    width: 100%;
    height: 430px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  #content__page--service-default-open
  {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    // h4 {
    //   margin: 5px 0;
    //   font-size: 25px;
    //   font-weight: bold;
    //   line-height: 1.2em;
    //   color: $accent;
    // }

    // h5 {
    //   margin: 0;
    //   padding: 10px 0 0;
    //   line-height: 1em;
    //   font-size: 1.2em;
    //   color: $senary;
    // }

    // p {
    //   text-align: justify;
    // }

    .space__between {
      margin: 10px 0;
      clear: both;
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
