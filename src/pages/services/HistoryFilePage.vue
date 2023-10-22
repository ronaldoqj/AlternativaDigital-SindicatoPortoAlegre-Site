<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
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

</script>

<template>
  <div id="page__services--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop src="/assets/image/tests/test-6.jpg" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <div id="content__page--service-default-open">
        <TitleDefault class="q-mb-xl" title="Arquivo Histórico" />
        <div>
          <ImageDefault class="images__floats left" src="/assets/image/tests/test-1.jpg" />
          <p>
             Arquivo Histórico Sindicato dos Bancários de Porto Alegre e Região (AHSBPOA) O Arquivo Histórico Sindicato dos Bancários de Porto Alegre e Região (AHSBPOA) disponibiliza uma série de conjuntos documentais de diversos suportes, com informações que vão além da representação de uma classe profissional.
          </p>
          <p>
            A trajetória e experiência coletiva do Sindicato dos Bancários de Porto Alegre e Região é traduzida por uma série de documentos que compõem o acervo da entidade. Reestruturado a partir de 2002, o Arquivo Histórico do SindBancários (AHSBPOA) recupera a história institucional por meio de um farto espaço de memória, com documentos textuais diversos, videográficos, fotográficos, periódicos, iconográficos, entre outros.
          </p>
          <p>O acervo pode ser consultado pelos bancários, de forma presencial ou virtual.</p>
          <p>
            O Sindicato dos Bancários, através da assessoria técnica da Arxius do Brasil, proporciona para a gestão do AHSBPOA uma base de dados de código aberto. Assim o usuário pode ter acesso online ao conteúdo do acervo.
          </p>
          <p>
            Acesse:<br />
            <a href="http://www.adb.inf.br" target="_blank">www.adb.inf.br</a>
          </p>
          <p>
            Endereço: <br />
            Rua General Câmara, 424, 3º andar – Centro Histórico <br />
            Porto Alegre – RS <br />
            Contato: (51) 3030 – 9400 <br />
            E-mail: ahsbpoa@sindbancarios.org.br
          </p>
          <h4>ACERVO</h4>
          <p>
            Seu acervo é constituído desde recortes de jornais da década de 1930 ao registro de assembleias em VHS da década de 1990; passando por registros da reunião da Intersindical que deu origem à CUT e ao PT. <br />
            Há projetos editoriais, charges, registros fotográficos de ações e lutas sindicais ao panfleto ou cartaz que revelam percursos históricos não oficializados e inserem a categoria em um rico contexto social, político e cultural.
          </p>
          <p>
            Consulta Online: <br />
            Pesquisa padrão, acesse <a href="http://memoria.arxiusdobrasil.com.br" target="_blank">memoria.arxiusdobrasil.com.br</a> <br />
            Acesse a série ‘O Bancário’: <a href="https://obancario.adb.inf.br" target="_blank">obancario.adb.inf.br</a> <br />
          </p>
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
    height: 430px;
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
    }

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
