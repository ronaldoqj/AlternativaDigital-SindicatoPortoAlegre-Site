<script setup lang="ts">
import TitleDefault from 'components/interface/TitleDefault.vue'
import NewsItem from 'components/interface/NewsItem.vue'
import ButtonDefault from 'components/interface/ButtonDefault.vue'
import { reactive } from 'vue'

const state = reactive({
  news: {
    highlights: [
      {
        src: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-001.jpg',
        route: { name: 'news', params: { id: 1, title: 'O-Santander-informou' } },
        subject: 'Santander vai pagar PLR e PPE no dia 29 de setembro',
        title: 'O Santander informou que realizará o pagamento da Participação nos Lucros ...',
        description: 'Definição dos valores depende da divulgação do INPC, que será anunciado nesta terça-feira (12) O Santander informou que realizará o pagamento da Participação nos Lucros e Resultados (PLR)...'
      },
      {
        src: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-002.jpg',
        route: { name: 'news', params: { id: 2, title: 'Jornal-O-Bancario-de-setembro-destaca' } },
        subject: 'Jornal “O Bancário” de setembro destaca principais...',
        title: 'Edição está disponível online e impressa, no Sindicato, e será entregue nas agências',
        description: 'O nova edição de “O Bancário” já está disponível para a categoria. O jornal de setembro pode ser acessado online (neste link) ou obtido impresso na sede do SindBancários. O material também...'
      },
      {
        src: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-003.jpg',
        route: { name: 'news', params: { id: 3, title: 'Bancarios-de-porto-alegre' } },
        subject: 'Bancários de Porto Alegre fazem ato de apoio a vítimas das inundações',
        title: 'Manifestação tradicional no aniversário do Banrisul, este ano será voltada para arrecadar doações',
        description: 'Nesta terça-feira (12), dia em que o Banrisul completa 95 anos, o Sindicato dos Bancários de Porto Alegre (SindBancários) faz um ato de apoio às vítimas das enchentes provocadas pelo ciclone...'
      }
    ],
    normal: [
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-001.jpg',
        route: { name: 'news', params: { id: 11, title: 'Dirigentes-sindicais-cobram-gestao' } },
        subject: 'Dirigentes sindicais cobram gestão ...',
        title: 'Reunião foi realizada na última terça (5/9) entre dirigentes ...',
        description: 'Em reunião na última terça-feira (5) com o superintendente estadual do Banco do Brasil no Rio Grande do Sul, dirigentes da Fetrafi-RS, do SindBancários Porto Alegre e Região e Rio Grande...'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-002.jpg',
        route: { name: 'news', params: { id: 12, title: 'CineBancarios-exibe-estreia-de-Angela' } },
        subject: 'CineBancários exibe estreia de ”Angela” ...',
        title: 'Seguem em cartaz "Retratos fantasmas", de ...',
        description: 'Dia 7 de setembro estreia no CineBancários “Angela”, inspirado no polêmico assassinato de ngela Diniz, na sessão das 19h. O documentário “Para onde voam as feiticeiras” ...'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-003.jpg',
        route: { name: 'news', params: { id: 13, title: 'Sindicato-vence-acao-coletiva-de-mais' } },
        subject: 'Sindicato vence ação coletiva de mais ...',
        title: 'Funcionários serão contemplados com revisão da ...',
        description: 'O SindBancários venceu ação civil pública de mais de nove anos (ajuizada em 30/01/2014) contra o Santander, que visava a manutenção dos critérios de cobrança do plano de ...'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-004.jpg',
        route: { name: 'news', params: { id: 14, title: 'Piquete-dos-Bancarios-abre-a-porteira' } },
        subject: 'Piquete dos Bancários abre a porteira ...',
        title: 'Estão abertas as portas do tradicional Piquete ...',
        description: 'Estão abertas as portas do tradicional Piquete dos Bancários no Acampamento Farroupilha! Com mais de duas décadas de história, todo ano o espaço proporciona dias de intensa ...'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-005.jpg',
        route: { name: 'news', params: { id: 15, title: 'Banrisulenses-irao-receber-o-valor' } },
        subject: 'Banrisulenses irão receber o valor ...',
        title: 'Funcionários serão contemplados com revisão da ...',
        description: 'Em mais uma vitória do Movimento Sindical Bancário, a direção do Banrisul anunciou nesta terça-feira (05/09), que irá pagar a primeira parcela de PLR e a antecipação da PPR no ...'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-006.jpg',
        route: { name: 'news', params: { id: 16, title: '7-de-Setembro-Grito-dos-Excluidos' } },
        subject: '7 de Setembro: Grito dos Excluídos terá caminhada ...',
        title: 'Atividade será realizada na próxima quinta (7), às 9h30, na ...',
        description: 'O 29º Grito dos Excluídos e das Excluídas vai levar a pergunta “Você tem fome e sede de quê?” para as ruas nesta quinta-feira, 7 de setembro ...'
      }
    ]
  }
})
const subject = 'Assembleia Legislativa'
const title = 'Assembleia irá deliberar sobre aprovação de Acordos Coletivos de Trabalho do Itaú'
const description = 'Cerca de dois meses após ser anunciado como futuro presidente do Banrisul pelo governador Eduar Leite, o nome de Fulano Beltrano Ciclano finalmente foi pautado na Comissão de Finanças da Assembleia Legislativa...'
</script>

<template>
  <div class="section__default">
    <TitleDefault title="Notícias" color="primary" />
    <div class="row q-mb-md q-col-gutter-md">
      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm"><NewsItem :src="state.news.highlights[0].src" :route="state.news.highlights[0].route" :subject="state.news.highlights[0].subject" :title="state.news.highlights[0].title" :description="state.news.highlights[0].description" :highlights="true" /></div>
      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm"><NewsItem :src="state.news.highlights[1].src" :route="state.news.highlights[1].route" :subject="state.news.highlights[1].subject" :title="state.news.highlights[1].title" :description="state.news.highlights[1].description" :highlights="true" /></div>
      <div class="col-xs-12 col-md-6 col-lg-6 col-xl-4 q-my-sm xl"><NewsItem :src="state.news.highlights[2].src" :route="state.news.highlights[2].route" :subject="state.news.highlights[2].subject" :title="state.news.highlights[2].title" :description="state.news.highlights[2].description" :highlights="true" /></div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[0].src" :route="state.news.normal[0].route" :subject="state.news.normal[0].subject" :title="state.news.normal[0].title" :description="state.news.normal[0].description" /></div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[1].src" :route="state.news.normal[1].route" :subject="state.news.normal[1].subject" :title="state.news.normal[1].title" :description="state.news.normal[1].description" /></div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[2].src" :route="state.news.normal[2].route" :subject="state.news.normal[2].subject" :title="state.news.normal[2].title" :description="state.news.normal[2].description" /></div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[3].src" :route="state.news.normal[3].route" :subject="state.news.normal[3].subject" :title="state.news.normal[3].title" :description="state.news.normal[3].description" /></div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[4].src" :route="state.news.normal[4].route" :subject="state.news.normal[4].subject" :title="state.news.normal[4].title" :description="state.news.normal[4].description" /></div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 q-my-sm"><NewsItem :src="state.news.normal[5].src" :route="state.news.normal[5].route" :subject="state.news.normal[5].subject" :title="state.news.normal[5].title" :description="state.news.normal[5].description" /></div>
    </div>

    <div class="box__btn--more">
      <ButtonDefault rounded unradiusTopLeft noCaps title="Mais notícias" color="primary" :size="{maxWidth: '400px'}" style="flex:max-content;" />
    </div>
  </div>
</template>

<style lang="scss">
  .box__btn--more
  {
    display: flex;
    justify-content: center;
  }
</style>
