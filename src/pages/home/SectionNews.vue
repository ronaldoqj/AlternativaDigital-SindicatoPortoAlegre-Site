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
        subject: 'Santander vai pagar PLR e PPE no dia 29 de setembro',
        title: 'O Santander informou que realizará o pagamento da Participação nos Lucros e Resultados (PLR) e do programa de pagamento da variável semestral, o PPE, tanto para os bancários da rede quanto de departamentos, no dia 29 de setembro.',
        description: 'Definição dos valores depende da divulgação do INPC, que será anunciado nesta terça-feira (12) O Santander informou que realizará o pagamento da Participação nos Lucros e Resultados (PLR) e do programa de pagamento da variável semestral, o PPE, tanto para os bancários da rede quanto de departamentos, no dia 29 de setembro.'
      },
      {
        src: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-002.jpg',
        subject: 'Jornal “O Bancário” de setembro destaca principais lutas da categoria',
        title: 'Edição está disponível online e impressa, no Sindicato, e será entregue nas agências',
        description: 'O nova edição de “O Bancário” já está disponível para a categoria. O jornal de setembro pode ser acessado online (neste link) ou obtido impresso na sede do SindBancários. O material também será distribuído pelos diretores aos trabalhadores nas agências.'
      },
      {
        src: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-003.jpg',
        subject: 'Bancários de Porto Alegre fazem ato de apoio a vítimas das inundações',
        title: 'Manifestação tradicional no aniversário do Banrisul, este ano será voltada para arrecadar doações',
        description: 'Nesta terça-feira (12), dia em que o Banrisul completa 95 anos, o Sindicato dos Bancários de Porto Alegre (SindBancários) faz um ato de apoio às vítimas das enchentes provocadas pelo ciclone extratropical que atingiu o Sul do país.'
      }
    ],
    normal: [
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-001.jpg',
        subject: 'Dirigentes sindicais cobram gestão humanizada do novo superintendente estadual do BB no RS',
        title: 'Reunião foi realizada na última terça (5/9) entre dirigentes da Fetrafi-RS, do SindBancários Porto Alegre e Região e Rio Grande e Região com representante do banco',
        description: 'Em reunião na última terça-feira (5) com o superintendente estadual do Banco do Brasil no Rio Grande do Sul, dirigentes da Fetrafi-RS, do SindBancários Porto Alegre e Região e Rio Grande e Região pediram providências em relação ao assédio moral que vêm acontecendo em agências de todo o estado. Nesse encontro, foram relatados casos registrados em Porto Alegre, Caxias do Sul e Santa Maria.'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-002.jpg',
        subject: 'CineBancários exibe estreia de”Angela” na semana de 7 de setembro',
        title: 'Seguem em cartaz "Retratos fantasmas", de Kleber Mendonça Filho, e o doc "Para Onde Voam as Feiticeiras"',
        description: 'Dia 7 de setembro estreia no CineBancários “Angela”, inspirado no polêmico assassinato de  ngela Diniz, na sessão das 19h. O documentário “Para onde voam as feiticeiras” segue em cartaz, às 15h, junto de “Retratos Fantasmas”, longa-metragem do cineasta e roteirista Kleber Mendonça Filho, em exibição na sessão das 17h.'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-003.jpg',
        subject: 'Sindicato vence ação coletiva de mais de nove anos contra o Santander',
        title: 'Funcionários serão contemplados com revisão da mensalidade do plano de saúde; aposentados terão direito à restituição de valores pagos a mais',
        description: 'O SindBancários venceu ação civil pública de mais de nove anos (ajuizada em 30/01/2014) contra o Santander, que visava a manutenção dos critérios de cobrança do plano de saúde. Após o esgotamento de todos os recursos, o Sindicato saiu vitorioso e a decisão se tornou definitiva. Assim, os funcionários do Santander da base territorial do SindBancários Porto Alegre e Região que permanecem com o plano de saúde ativo terão direito à revisão da mensalidade; inclusive os aposentados receberão restituição de valores pagos a mais.'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-004.jpg',
        subject: 'Piquete dos Bancários abre a porteira para receber a todos',
        title: 'Estão abertas as portas do tradicional Piquete dos Bancários no Acampamento Farroupilha!',
        description: 'Estão abertas as portas do tradicional Piquete dos Bancários no Acampamento Farroupilha! Com mais de duas décadas de história, todo ano o espaço proporciona dias de intensa programação para bancários, bancárias, amigos e familiares. Além do cheiro de churrasco no ar, outro chamariz do piquete são as atividades culturais, como música ao vivo, noite de poesia, oficina de chimarrão e, é claro, o já clássico torneio de truco.'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-005.jpg',
        subject: 'Banrisulenses irão receber o valor referente à PLR no dia 12 de setembro, dia do aniversário do Banrisul.',
        title: 'Funcionários serão contemplados com revisão da mensalidade do plano de saúde; aposentados terão direito à restituição de valores pagos a mais',
        description: 'Em mais uma vitória do Movimento Sindical Bancário, a direção do Banrisul anunciou nesta terça-feira (05/09), que irá pagar a primeira parcela de PLR e a antecipação da PPR no dia 12 de setembro, data em que o banco comemora 95 anos. O novo presidente, Fernando Lemos, decidiu também acatar o pedido da Fetrafi-RS e do SindBancários POA e Região e autorizou a redução do gatilho da PPR para 9%.'
      },
      {
        src: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-006.jpg',
        subject: '7 de Setembro: Grito dos Excluídos terá caminhada em São Leopoldo',
        title: 'Atividade será realizada na próxima quinta (7), às 9h30, na estação SL do Trensurb',
        description: 'O 29º Grito dos Excluídos e das Excluídas vai levar a pergunta “Você tem fome e sede de quê?” para as ruas nesta quinta-feira, 7 de setembro, feriado da Independência do Brasil. O tema continua sendo o mesmo da primeira edição: “A vida em primeiro lugar”.'
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
    <div class="row q-mb-md">
      <div class="col-xs-12 col-lg-6 col-xl-4 q-my-sm"><NewsItem :src="state.news.highlights[0].src" :subject="state.news.highlights[0].subject" :title="state.news.highlights[0].title" :description="state.news.highlights[0].description" :highlights="true" /></div>
      <div class="col-xs-12 col-lg-6 col-xl-4 q-my-sm"><NewsItem :src="state.news.highlights[1].src" :subject="state.news.highlights[1].subject" :title="state.news.highlights[1].title" :description="state.news.highlights[1].description" :highlights="true" /></div>
      <div class="col-xs-12 col-lg-6 col-xl-4 q-my-sm xl"><NewsItem :src="state.news.highlights[2].src" :subject="state.news.highlights[2].subject" :title="state.news.highlights[2].title" :description="state.news.highlights[2].description" :highlights="true" /></div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[0].src" :subject="state.news.normal[0].subject" :title="state.news.normal[0].title" :description="state.news.normal[0].description" :highlights="true" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[1].src" :subject="state.news.normal[1].subject" :title="state.news.normal[1].title" :description="state.news.normal[1].description" :highlights="true" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[2].src" :subject="state.news.normal[2].subject" :title="state.news.normal[2].title" :description="state.news.normal[2].description" :highlights="true" /></div>

      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[3].src" :subject="state.news.normal[3].subject" :title="state.news.normal[3].title" :description="state.news.normal[3].description" :highlights="true" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[4].src" :subject="state.news.normal[4].subject" :title="state.news.normal[4].title" :description="state.news.normal[4].description" :highlights="true" /></div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-my-sm"><NewsItem :src="state.news.normal[5].src" :subject="state.news.normal[5].subject" :title="state.news.normal[5].title" :description="state.news.normal[5].description" :highlights="true" /></div>
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
