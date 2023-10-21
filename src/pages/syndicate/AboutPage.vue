<script setup lang="ts">
import { baseURL } from 'src/helpers/helpers'
import { useQuasar } from 'quasar'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
// import CarouselSlide from 'src/components/interface/CarouselSlide.vue'
import { reactive, computed, onMounted, watch } from 'vue'
import MembersItem from 'src/pages/departments/components/MembersItem.vue'
import { TScreenSize, IDinamicScreen, IDinamicList } from 'components/models/interfaces/InterfacesDefault'
import StatuteItem from 'src/pages/syndicate/components/about/StatuteItem.vue'
import SectionAbout from 'src/pages/syndicate/components/about/SectionAbout.vue'

// interface IItemMember {
//   title: string
//   surname: string
//   subtitle: string
//   description: string
//   image: string
// }

const $q = useQuasar()
// const freezeComponentStatute = shallowRef(StatuteItem)
// const freezeComponentMembersItem = shallowRef(MembersItem)
const state = reactive({
  section: {
    about: [
      {
        title: 'História',
        content: [
          'O Sindicato dos Bancários de Porto Alegre e Região - SindBancários foi fundado em 18 de janeiro de 1933, em uma Assembleia Geral com a presença de 185 bancários. À época, o SindBancários chamava-se Sindicato dos Bancários do Rio Grande do Sul. A base era estadual, mas, com o surgimento de novos sindicatos no Interior, a entidade assumiu o nome atual: Sindicato dos Bancários de Porto Alegre e Região.',
          'Em nove décadas, o SindBancários desenhou uma trajetória de presença marcante na construção do sindicalismo bancário brasileiro. No Estado, a entidade tem papel crucial na luta por mais dignidade dos trabalhadores e trabalhadoras, e na construção da democracia em diversos períodos históricos.'
        ]
      },
      {
        title: 'As intervenções',
        content: [
          'A primeira ocorreu em 1946, quando caiu o Estado Novo. A segunda, em 1964, quando do Golpe Militar. Outra intervenção foi em 1968, quando recrudesceu o regime militar, com o Ato Institucional (AI) 5. Em 6 de setembro de 1979, em meio à maior greve dos bancários porto-alegrenses, ocorreria a quarta e última intervenção, que durou 10 meses e cinco dias.',
          'A ação interventora terminou com a cassação dos dirigentes Aquiles Notti, Câncio Vargas, Felipe Nogueira e do então presidente do Sindicato, Olívio Dutra, ex-governador do Rio Grande do Sul e ex-ministro das Cidades do governo Lula (2003-2005).'
        ]
      },
      {
        title: 'CUT',
        content: [
          'Em setembro de 1983, seguindo suas tradições de vanguarda da classe trabalhadora gaúcha, o Sindicato foi o primeiro do Estado a filiar-se à recém criada Central Única dos Trabalhadores (CUT). Muitos dos seus quadros assumiram postos na direção da Central.'
        ]
      },
      {
        title: 'Base do Sindicato',
        content: [
          'Desde 1990, o Sindicato tem como base Porto Alegre e 14 municípios vizinhos. São eles: Alvorada, Barra do Ribeiro, Cachoeirinha, Canoas, Charqueadas, Eldorado do Sul, Esteio, Gravataí, Guaíba, Nova Santa Rita, São Jerônimo, Sapucaia do Sul, Sertão Santana e Viamão.'
        ]
      },
      {
        title: 'Sede',
        content: [
          'Toda a estrutura diretiva, de serviços e equipamentos para uso dos bancários e da comunidade (auditório, biblioteca, cinema, espaço cultural) está em um único lugar. A Casa dos Bancários é a referência da ação do SindBancários na Capital. O local, que antigamente era chamado de Sede da Ladeira (fica na Rua General Câmara), foi completamente restaurado, ganhando salas, espaço para atendimento de associados, auditório, salão de festas e áreas de cultura e lazer. Conheça mais sobre os espaços aqui.'
        ]
      }
    ],
    direction: [
      {
        content: [
          'A administração do Sindicato é exercida pelos 15 (quinze) integrantes titulares da Diretoria Executiva, representados pelo Diretor Presidente e pelos Diretores Titulares de cada departamento (conforme o Artigo 28 do Estatuto).',
          'Em nove décadas, o SindBancários desenhou uma trajetória de presença marcante na construção do sindicalismo bancário brasileiro. No Estado, a entidade tem papel crucial na luta por mais dignidade dos trabalhadores e trabalhadoras, e na construção da democracia em diversos períodos históricos.'
        ],
        spaceAfter: 'q-mb-xl'
      },
      {
        title: 'Constituem os integrantes titulares da Diretoria Executiva os seguintes cargos:',
        content: [
          'Diretor Presidente;',
          'Diretor Titular da Secretaria Geral;',
          'Diretor Titular da Secretaria Executiva;',
          'Diretor Titular Financeiro;',
          'Diretor Titular Administrativo;',
          'Diretor Titular de Comunicação;',
          'Diretor Titular Jurídico;',
          'Diretor Titular de Juventude e Gênero;',
          'Diretor Titular de Diversidade e Combate ao Racismo;',
          'Diretor Titular de Saúde e Condições de Trabalho;',
          'Diretor Titular de Esportes e Lazer;',
          'Diretor Titular de Cultura e Sustentabilidade;',
          'Diretor Titular de Aposentados e Seguridade Social;',
          'Diretor Titular de Formação;',
          'Diretor Titular de Financeiras e Terceirizados do Ramo Financeiro.',
          'Os integrantes da Diretoria Executiva, do Conselho de Representação em Entidades de Grau Superior e do Conselho Fiscal do Sindicato são eleitos em Assembleia Geral Ordinária da categoria, em processo eleitoral, quadrienalmente. As eleições, em primeiro turno, são realizadas dentro do prazo máximo de 60 (sessenta) e mínimo de 30 (trinta) dias que antecedem o término dos mandatos vigentes.'
        ],
        spaceAfter: 'q-py-md'
      },
      {
        spaceBefore: 'q-mt-xl',
        title: 'Conheça os integrantes da atual gestão do SindBancários:'
      }
    ]
  },
  statute: {
    item: {
      title: 'Estatuto 2023 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer 1',
      src: '/assets/svg/icon-xml.svg#icon_xml'
    },
    items: {
      currentScreen: {} as IDinamicScreen,
      listProp: [] as Array<object>
    } as IDinamicList
  },
  legalMembers: [
    {
      section: 'Presidente',
      list: [
        { title: 'Luciano', surname: 'Fetzner Barcellos', subtitle: 'Presidência', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/001.jpg` }
      ]
    },
    {
      section: 'Secretaria geral',
      list: [
        { title: 'Luis Gustavo', surname: 'Vargas Soares', subtitle: 'Secretaria Geral', description: 'Bradesco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Silvia Regina', surname: 'de Carvalho Chaves', subtitle: 'Secretaria Geral', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/002.jpg` },
        { title: 'Eduardo', surname: 'Munhoz Baptista', subtitle: 'Secretaria Geral', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/003.jpg` }
      ]
    },
    {
      section: 'Secretaria executiva',
      list: [
        { title: 'Luiz', surname: 'Cassemiro', subtitle: 'Secretaria Executiva', description: 'Santander', image: `${baseURL}temporary/images/quem-somos/directorship/006.jpg` },
        { title: 'Daniela', surname: 'Silva de Souza', subtitle: 'Secretaria Executiva', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/005.jpg` },
        { title: 'Jailson', surname: 'Bueno Prodes', subtitle: 'Secretaria Executiva', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Financeiro',
      list: [
        { title: 'Tiago', surname: 'Vasconcellos Pedroso', subtitle: 'Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/009.jpg` },
        { title: 'Maristela', surname: 'da Rocha', subtitle: 'Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/010.jpg` },
        { title: 'Fabiano', surname: 'Barnart', subtitle: 'Financeiro', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Administrativo',
      list: [
        { title: 'Antônio Augusto', surname: 'Borges de Borges', subtitle: 'Administrativo', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/008.jpg` },
        { title: 'Jorge Luis', surname: 'Consminski Lucas', subtitle: 'Administrativo', description: 'Bradesco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Ronaldo', surname: 'Souza Gross', subtitle: 'Administrativo', description: 'Bradesco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Comunicação',
      list: [
        { title: 'Gilnei', surname: 'Silva Nunes', subtitle: 'Comunicação', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/022.jpg` },
        { title: 'Jonas', surname: 'de Souza Castilhos', subtitle: 'Comunicação', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/023.jpg` },
        { title: 'Andrei', surname: 'Freitas Teixeira', subtitle: 'Comunicação', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Jurídico',
      list: [
        { title: 'Simoni', surname: 'Fernandes Medeiros', subtitle: 'Jurídico', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Ronaldo', surname: 'Zeni', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/011.jpg` }
      ]
    },
    {
      section: 'Juventude e Gênero',
      list: [
        { title: 'Carmen', surname: 'Guedes', subtitle: 'Juventude e Gênero', description: 'Santander', image: `${baseURL}temporary/images/quem-somos/directorship/013.jpg` },
        { title: 'Rachel', surname: 'de Araujo Weber', subtitle: 'Juventude e Gênero', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Gean Francisco', surname: 'Farias Espíndula', subtitle: 'Juventude e Gênero', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Diversidade e Combate ao Racismo',
      list: [
        { title: 'Sandro Artur', surname: 'Ferreira Rodrigues', subtitle: 'Diversidade e Combate ao Racismo', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/014.jpg` },
        { title: 'Ernesto Humberto', surname: 'dos Santos', subtitle: 'Diversidade e Combate ao Racismo', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Saúde e Condições de Trabalho',
      list: [
        { title: 'Jamile', surname: 'Chamun', subtitle: 'Saúde e Condições de Trabalho', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/012.jpg` },
        { title: 'Thiely Denise', surname: 'Kalil', subtitle: 'Saúde e Condições de Trabalho', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Rodrigo', surname: 'Ambros Rodrigues', subtitle: 'Saúde e Condições de Trabalho', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Esporte e Lazer',
      list: [
        { title: 'Gerson Marques', surname: 'dos Reis', subtitle: 'Esporte e Lazer', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Carlos Odone', surname: 'Dahlheimer Viale', subtitle: 'Esporte e Lazer', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Rogério', surname: 'de Rodrigues Rodrigues', subtitle: 'Esporte e Lazer', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Cultura e Sustentabilidade',
      list: [
        { title: 'Ana Lúcia', surname: 'Soares Guimaraens', subtitle: 'Cultura e Sustentabilidade', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Guaracy', surname: 'Padilla Gonçalves', subtitle: 'Cultura e Sustentabilidade', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/016.jpg` },
        { title: 'Eroni', surname: 'Batista Ribeiro', subtitle: 'Cultura e Sustentabilidade', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/017.jpg` }
      ]
    },
    {
      section: 'Aposentados e Seguridade Social',
      list: [
        { title: 'Natalina', surname: 'Rosane Gue', subtitle: 'Aposentados e Seguridade Social', description: 'Santander', image: `${baseURL}temporary/images/quem-somos/directorship/019.jpg` },
        { title: 'Claudete', surname: 'Genuíno Marocco', subtitle: 'Aposentados e Seguridade Social', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/018.jpg` },
        { title: 'Ida Jaqueline', surname: 'Pellegino', subtitle: 'Aposentados e Seguridade Social', description: 'Santander', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` }
      ]
    },
    {
      section: 'Formação',
      list: [
        { title: 'Virgínia', surname: 'Faria', subtitle: 'Formação', description: 'In Memoriam', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Jairo', surname: 'Severo Soares', subtitle: 'Formação', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/020.jpg` },
        { title: 'Itamara', surname: 'Pinto Brum', subtitle: 'Formação', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` }
      ]
    },
    {
      section: 'Financeiras e Terceirizados do Ramo Financeiro',
      list: [
        { title: 'Claudia Stella', surname: 'Rodrigues Santana de Resende', subtitle: 'Financeiras e Terceirizados do Ramo Financeiro', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Caroline', surname: 'Soares Heidner', subtitle: 'Financeiras e Terceirizados do Ramo Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/021.jpg` },
        { title: 'Marilene', surname: 'Brusa Sá', subtitle: 'Financeiras e Terceirizados do Ramo Financeiro', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` }
      ]
    },
    {
      section: 'Conselho de Representação em Entidades de Grau Superior',
      list: [
        { title: 'Everton', surname: 'de Morais Gimenis', subtitle: 'Conselho de Representação em Entidades de Grau Superior', description: 'Bradesco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Mauro', surname: 'Salles Machado', subtitle: 'Conselho de Representação em Entidades de Grau Superior', description: 'Santander', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` }
      ]
    },
    {
      section: 'Conselho Fiscal',
      list: [
        { title: 'Nilton', surname: 'Correa Gomes', subtitle: 'Conselho Fiscal', description: 'Bradesco', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Fabiano', surname: 'Beneduzi', subtitle: 'Conselho Fiscal', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Edson', surname: 'Ramos da Rocha', subtitle: 'Conselho Fiscal', description: 'Bradesco', image: `${baseURL}temporary/images/quem-somos/directorship/007.jpg` },
        { title: 'Carlos Eduardo', surname: 'Bobsin', subtitle: 'Conselho Fiscal', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Cristina', surname: 'Silva Rocha Garbinatto', subtitle: 'Conselho Fiscal', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/004.jpg` },
        { title: 'Rodrigo', surname: 'Pereira Soares', subtitle: 'Conselho Fiscal', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_masculino.jpg` },
        { title: 'Noelha', surname: 'Rodrigues da Rosa', subtitle: 'Conselho Fiscal', description: 'Banrisul', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` },
        { title: 'Maria Francilina', surname: 'Maier Dias', subtitle: 'Conselho Fiscal', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/people/diretoria_feminino.jpg` }
      ]
    }
  ]
  // legalMembers: {
  //   items: {
  //     screenBreak: 'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2',
  //     currentScreen: {} as IDinamicScreen,
  //     listProp: [] as IItemMember[]
  //   } as IDinamicList
  // }
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

// const setListLegalMembers = () => {
//   state.legalMembers.items.listProp.push({ title: 'Luciano', surname: 'Fetzner Barcellos', subtitle: 'Presidência', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/001.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Silvia', surname: 'Regina de Carvalho Chaves', subtitle: 'Secretaria Geral', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/002.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Eduardo', surname: 'Munhoz Baptista', subtitle: 'Secretaria Geral', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/003.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Cristina', surname: 'Silva Rocha Garbinatto', subtitle: 'Conselho Fiscal', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/004.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Daniela', surname: 'Silva de Souza', subtitle: 'Secretaria Executiva', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/005.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Luiz', surname: 'Cassemiro', subtitle: 'Secretaria Geral', description: 'Secretaria Executiva', image: `${baseURL}temporary/images/quem-somos/directorship/006.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Edson', surname: 'Ramos da Rocha', subtitle: 'Conselho Fiscal', description: 'Bradesco', image: `${baseURL}temporary/images/quem-somos/directorship/007.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Antônio', surname: 'Augusto Borges de Borges', subtitle: 'Administrativo', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/008.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Tiago', surname: 'Vasconcellos Pedroso', subtitle: 'Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/009.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Maristela', surname: 'da Rocha', subtitle: 'Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/010.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Ronaldo', surname: 'Zeni', subtitle: 'Jurídico', description: 'Banco Do Brasil', image: `${baseURL}temporary/images/quem-somos/directorship/011.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Jamile', surname: 'Chamun', subtitle: 'Saúde', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/012.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Carmen', surname: 'Guedes', subtitle: 'Juventude e Gênero', description: 'Santander', image: `${baseURL}temporary/images/quem-somos/directorship/013.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Sandro', surname: 'Artur Ferreira Rodrigues', subtitle: 'Diversidade e Combate ao Racismo', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/014.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'ESPORTE E LAZER', surname: '', subtitle: '', description: '', image: `${baseURL}temporary/images/quem-somos/directorship/015.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Guaracy', surname: 'Padilla Gonçalves', subtitle: 'Cultura e Sustentabilidade', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/016.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Eroni', surname: 'Batista Ribeiro', subtitle: 'Cultura e Sustentabilidade', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/017.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Claudete', surname: 'Genuíno Marocco', subtitle: 'Aposentados e Seguridade Social', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/018.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Natalina', surname: 'Rosane Gue', subtitle: 'Aposentados e Seguridade Social', description: 'Santander', image: `${baseURL}temporary/images/quem-somos/directorship/019.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Jairo', surname: 'Severo Soares', subtitle: 'Formação', description: 'Itaú-Unibanco', image: `${baseURL}temporary/images/quem-somos/directorship/020.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Caroline', surname: 'Soares Heidner', subtitle: 'Financeiras e Terceirizados do Ramo Financeiro', description: 'Caixa Econômica Federal', image: `${baseURL}temporary/images/quem-somos/directorship/021.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Gilnei', surname: 'Silva Nunes', subtitle: 'Comunicação', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/022.jpg` })
//   state.legalMembers.items.listProp.push({ title: 'Jonas', surname: 'de Souza Castilhos', subtitle: 'Comunicação', description: 'Banrisul', image: `${baseURL}temporary/images/quem-somos/directorship/023.jpg` })
// }

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
  // state.legalMembers.items.currentScreen = { screen: screenSize, blockSize: blockSizeDocument }
}

watch(currentScreenSize, (newValue) => {
  changeOrderList(newValue)
})

onMounted(() => {
  setListStatute()
  // setListLegalMembers()
  changeOrderList(currentScreenSize.value)
})
</script>

<template>
  <div id="page__departments--default-open" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="`${baseURL}temporary/images/quem-somos/BANNER_QUEM_SOMOS.jpg`" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="accent">
      <div id="content__page--departments-default-open">
        <TitleDefault class="q-mb-xl" title="Quem Somos" />
        <SectionAbout :item="state.section.about" />
      </div>
    </LayoutSection>

    <LayoutSection background="accent" cornerColor="tertiary">
      <TitleDefault class="q-mb-lg" title="Estatuto" color="text-inverse" />
      <div class="row q-mb-lg">
        <div class="col-xs-12 col-md-7 self-center q-mb-md">
          <p class="section__statute--subtitle">
            Confira todas definições e organização do Estatuto do SindBancários. O documento prevê estrutura de gestão da entidades, instâncias deliberativas, departamentos, processo eleitoral e aprovação de plano anual.
          </p>
        </div>
        <div class="col-xs-12 col-md-5 self-center q-mb-md">
          <StatuteItem style="margin: 0;" :title="state.statute.item.title" :description="state.statute.item.description" :src="state.statute.item.src" :link="`${baseURL}temporary/documents/about/Novo_Estatuto_Social_do_Sindicato_dos_Bancarios_de_Porto_Alegre_e_Regiao.pdf`" />
        </div>
      </div>
      <!-- <p class="section__statute--subtitle">
        Confira todas as definições e organização do Estatuto do SindBancários. O documento prevê estrutura de gestão das entidades, instâncias deliberativas, departamentos, processo eleitoral e aprovação de plano anual.
      </p>
      <CarouselSlide v-if="state.statute.items.listProp.length" :listItems="state.statute.items" color="text-inverse" control-color="text-inverse" :component-item="freezeComponentStatute" item-class="departments__legal--document-item" /> -->
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <TitleDefault class="q-mt-xl" title="Diretoria" />
      <SectionAbout :item="state.section.direction" />

      <div class="row" v-for="(section, key) in (state.legalMembers)" :key="key">
        <div class="col-12 sectiom--members">
          <div>{{ section.section }}</div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(member, key) in (section.list)" :key="key">
          <MembersItem :title="member.title" :surname="member.surname" :subtitle="member.subtitle" :description="member.description" :image="member.image" />
        </div>
      </div>
      <div class="q-mb-xl"></div>
      <!-- <CarouselSlide v-if="state.legalMembers.items.listProp.length" :listItems="state.legalMembers.items" :component-item="freezeComponentMembersItem" /> -->
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
    margin: 0 40px;
    text-align: justify;
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

  .sectiom--members
  {
    margin: 50px 0 10px;
    display: flex;

    div {
      background-color: $primary;
      color: $text-inverse;
      font-size: 15px;
      padding: 20px 50px;
      border-top-left-radius: 0;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }

  @media only screen and (max-width: $breakpoint-sm)
  {
    .sectiom--members
    {
      div {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm)
  {
    text-align: center;
    .sectiom--members
    {

      div {
        margin: 0 auto;
        max-width: 450px;
      }
    }
  }

}
</style>
