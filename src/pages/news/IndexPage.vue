<script setup lang="ts">
import LayoutSection from 'layouts/components/LayoutSection.vue'
import RelatedPublications from 'components/interface/RelatedPublications.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import ImageDefault from 'components/interface/ImageDefault.vue'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { TTypeNews } from 'src/types/INews'
import NewsService from 'src/services/NewsService'
import { AxiosError } from 'axios'
import SkeletonNews from 'components/interface/skeletons/SkeletonNews.vue'

const route = useRoute()
const state = reactive({
  control: {
    showContent: false
  },
  news: {
    idNews: null as null | number,
    type: null as null | TTypeNews,
    content: {},
    relatedNews: {
      perPage: 6,
      list: []
    },
    id1: {
      image: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-001.jpg',
      subtitle: 'Santander vai pagar PLR e PPE no dia 29 de setembro',
      title: 'O Santander informou que realizará o pagamento da Participação nos Lucros e Resultados (PLR) e do programa de pagamento da variável semestral, o PPE, tanto para os bancários da rede quanto de departamentos, no dia 29 de setembro',
      content: [
        { type: 'title', value: 'Definição dos valores depende da divulgação do INPC, que será anunciado nesta terça-feira (12)' },
        { type: 'paragraph', value: 'O Santander informou que realizará o pagamento da Participação nos Lucros e Resultados (PLR) e do programa de pagamento da variável semestral, o PPE, tanto para os bancários da rede quanto de departamentos, no dia 29 de setembro.' },
        { type: 'paragraph', value: 'O secretário executivo do SindBancários e membro da Comissão de Organização dos Empregados (COE) do Santander, Luiz Cassemiro, destaca que a PLR é uma conquista importante da organização e luta da categoria bancária, assim como o PPE, outra relevante conquista, assegurada no Acordo Coletivo de Trabalho (ACT) dos bancários do Santander. “Essas conquistas são resultado da luta coletiva. Por isso, é fundamental reforçar a importância de se sindicalizar”, afirma. “Vamos juntar forças na luta em defesa dos nossos direitos e também por novas conquistas. Faça a sua sindicalização”, recomenda o dirigente sindical.' },
        { type: 'title', value: 'Dinheiro no bolso' },
        { type: 'paragraph', value: 'Apesar de ter definido a data do pagamento, os valores a serem pagos aos bancários ainda são incertos, pois o cálculo depende da divulgação da inflação (INPC) acumulada entre setembro de 2022 e agosto de 2023, que será divulgada nesta terça-feira (12/9).' },
        { type: 'paragraph', value: 'Mas, segundo definido na Convenção Coletiva de Trabalho da Categoria (CCT), o valor da antecipação da PLR será composto por uma parcela correspondente à “Regra Básica” e uma “Parcela Adicional”.' },
        { type: 'paragraph', value: 'Pela “Regra Básica”, será pago o valor correspondente a 54% do salário-base mais verbas fixas de natureza salarial, vigentes no dia 1º de setembro de 2022, além do valor fixo, tudo corrigido pelo INPC de setembro de 2022 a agosto de 2023, mais aumento real de 0,5%. O valor tem um teto, que também será corrigido segundo o mesmo índice.' },
        { type: 'paragraph', value: 'Pela “Parcela Adicional”, o valor será determinado pela divisão em partes iguais entre os funcionários elegíveis, de acordo com as regras da CCT, do equivalente a 2,2% do lucro líquido do banco apurado no 1º semestre de 2023. Na parcela adicional também existe um limite que deve ser corrigido.' },
        { type: 'font', value: 'Fonte: Contraf-CUT' }
      ]
    },
    id2: {
      image: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-002.jpg',
      subtitle: 'Jornal “O Bancário” de setembro destaca principais lutas da categoria',
      title: 'Edição está disponível online e impressa, no Sindicato, e será entregue nas agências',
      content: [
        { type: 'paragraph', value: 'O nova edição de “O Bancário” já está disponível para a categoria. O jornal de setembro pode ser acessado online (neste link) ou obtido impresso na sede do SindBancários. O material também será distribuído pelos diretores aos trabalhadores nas agências.' },
        { type: 'paragraph', value: '“O Bancário” traz informações sobre as principais lutas da categoria; novidades de negociações com cada banco, calendário de pagamento da PLR.' },
        { type: 'paragraph', value: 'A nova edição também destaca campanhas de solidariedade, de valorização da vida e contra metas abusivas. São abordadas ainda ações coletivas ganhas, mudanças no ramo financeiro com migração do emprego, e eventos do Sindicato, como baile, piquete e Energia Bancária.' },
        { type: 'paragraph', value: 'O jornal fala ainda sobre a seleção pra oficina de teatro, o resultado da Copa Master SindBancários de Futebol 7, a programação do CineBancários e do projeto Música no Teatro.' },
        { type: 'paragraph', value: 'Boa leitura!' }
      ]
    },
    id3: {
      image: '/assets/image/apresentation/home/destaque/NOTICIA-DESTAQUE-003.jpg',
      subtitle: 'Bancários de Porto Alegre fazem ato de apoio a vítimas das inundações',
      title: 'Manifestação tradicional no aniversário do Banrisul, este ano será voltada para arrecadar doações',
      content: [
        { type: 'paragraph', value: 'Nesta terça-feira (12), dia em que o Banrisul completa 95 anos, o Sindicato dos Bancários de Porto Alegre (SindBancários) faz um ato de apoio às vítimas das enchentes provocadas pelo ciclone extratropical que atingiu o Sul do país.' },
        { type: 'paragraph', value: 'A comemoração dos bancários locais nessa data já é uma tradição, mas neste ano será diferente. Como explica o presidente do SindBancários, Luciano Fetzner, “normalmente fazemos um ato festivo, com distribuição de bolo aos bancários e às pessoas que passam, mas desta vez, devido a essa tragédia, vamos manter o ato político pela defesa do Banrisul público, mas também vamos nos concentrar em arrecadar doações aos atingidos pelas enchentes, tanto nas ilhas do Guaíba, em Porto Alegre, como em dezenas de cidades do Rio Grande do Sul”.' },
        { type: 'paragraph', value: 'Até o momento, a catástrofe natural já causou 46 mortes. Também há o registro de outras 46 pessoas desaparecidas, além de cerca de 10 mil que tiveram que deixar suas casas. Ao todo, 83 municípios gaúchos estão em situação de calamidade pública.' },
        { type: 'paragraph', value: 'No domingo (10), o presidente em exercício, Geraldo Alckmin, visitou o estado, junto de oito ministros e do governador Eduardo Leite, quando anunciou um pacote de R$ 741 milhões do Governo Federal para amparar as vítimas e financiar a reconstrução das localidades afetadas. O vice-presidente assumiu a presidência depois de Lula viajar à Índia, para participar da reunião anual do G20.' },
        { type: 'title', value: 'Solidariedade' },
        { type: 'paragraph', value: 'Há várias campanhas para doações de auxílio às pessoas em situação de dificuldade no Rio Grande do Sul. O Coletivo Sindicato Solidário da Confederação Nacional dos Trabalhadores do Ramo Financeiro (Contraf-CUT) está apoiando as ações do SindBancários e pede que bancárias e bancários, que puderem, façam doações.' },
        { type: 'paragraph', value: 'No próprio estado, as doações podem ser em materiais ou em dinheiro. De outras localidades, a contribuição pode ser feita em dinheiro. Confira as opções abaixo.' },
        { type: 'title', value: 'SindBancários' },
        { type: 'paragraph', value: 'Todo o material arrecadado na campanha do SindBancários está sendo levado aos postos da Defesa Civil gaúcha para entrega às pessoas em situação de necessidade. O SindBancários também está ajudando as instituições estaduais na distribuição das doações. Os itens mais necessários no momento são alimento, água potável, roupa, material de limpeza e de higiene pessoal.' },
        { type: 'paragraph', value: 'Outro pedido é por voluntários, com ferramentas como pás e vassouras, para contribuir com a remoção de lixo e lama, além de limpeza.' },
        { type: 'title', value: 'As doações devem ser entregues na sede da entidade:' },
        { type: 'paragraph', value: 'Rua General Câmara, 424, em Porto Alegre. Fone (51) 3030-9400.' },
        { type: 'paragraph', value: 'Ou em caixas de arrecadação do SindBancários, colocadas nas seguintes agências bancárias:' },
        { type: 'paragraph', value: 'Banco do Brasil, no saguão do prédio (r. Uruguai ,185);' },
        { type: 'paragraph', value: 'Banrisul, agência Central e DG (r. Cap. Montanha, 177);' },
        { type: 'paragraph', value: 'Bradesco, agência Gen. Câmara (Rua General Câmara 253);' },
        { type: 'paragraph', value: 'Caixa, edifício Querência (praça da Alfândega);' },
        { type: 'paragraph', value: 'Itaú, agência 6201 (r. Sete de Setembro, 1073);' },
        { type: 'paragraph', value: 'Santander, agência Centenária (r. Sete de Setembro, 1177).' },
        { type: 'title', value: 'CUT-RS' },
        { type: 'paragraph', value: 'A CUT do Rio Grande do Sul também iniciou uma campanha de apoio às vítimas dos temporais. A Central orientou que todos os sindicatos filiados participem e estimulem doações, que serão entregues nos municípios atingidos no Dia Estadual de Solidariedade – sábado, dia 23. A CUT-RS também abriu uma conta corrente para doações em dinheiro.' },
        { type: 'title', value: 'Doações de materiais, entregar na sede da CUT-RS:' },
        { type: 'paragraph', value: 'Rua Barros Cassal, 283 – Porto Alegre. Fone (51) 3224-2484.' },
        { type: 'title', value: 'Doações em dinheiro enviar para:' },
        { type: 'paragraph', value: 'Cresol (133)' },
        { type: 'paragraph', value: 'Agência 5607' },
        { type: 'paragraph', value: 'Conta corrente 18.735-6' },
        { type: 'paragraph', value: 'CNPJ: 60.563.731/0014-91' },
        { type: 'paragraph', value: 'PIX: 51996410961' },
        { type: 'title', value: 'Defesa Civil' },
        { type: 'paragraph', value: 'A Defesa Civil do Rio Grande do Sul divulgou uma lista de locais onde doações podem ser entregues. Confira:' },
        { type: 'paragraph', value: 'Palácio Piratini: Praça Marechal Deodoro, s/n, Centro Histórico, Porto Alegre' },
        { type: 'paragraph', value: 'Centro Administrativo Fernando Ferrari (Caff): av. Borges de Medeiros, 1501, Centro, Porto Alegre (na portaria e na Central de Doações)' },
        { type: 'paragraph', value: 'Secretaria da Segurança Pública: av. Pernambuco, 649, Navegantes, Porto Alegre' },
        { type: 'paragraph', value: 'Centro Estadual de Treinamento Esportivo (Cete): r. Gonçalves Dias, 700, Menino Deus, Porto Alegre' },
        { type: 'paragraph', value: 'Prédio do Daer e da Procuradoria-Geral do Estado: av. Borges de Medeiros, 1555, Praia de Belas, Porto Alegre' },
        { type: 'paragraph', value: 'Palácio da Polícia Civil: av. João Pessoa, 2.050, Porto Alegre' },
        { type: 'paragraph', value: 'Cruz Azul: r. Mostardeiro, 233, Rio Branco, Porto Alegre' },
        { type: 'paragraph', value: 'Verte Saúde: r. dos Andradas, 846, Centro, Porto Alegre' },
        { type: 'paragraph', value: 'Quartéis da Brigada Militar e do Corpo de Bombeiros Militar' },
        { type: 'paragraph', value: 'Delegacias de polícia' },
        { type: 'paragraph', value: 'Prefeituras de todo o estado' },
        { type: 'paragraph', value: 'Agências do Banrisul no estado' },
        { type: 'paragraph', value: 'Unidades do Sesc' },
        { type: 'paragraph', value: 'Supermercados da Rede Zaffari/Bourbon' },
        { type: 'title', value: 'Sindicato Solidário' },
        { type: 'paragraph', value: 'O Coletivo Sindicato Solidário da Contraf-CUT é formado pelos secretários de Combate ao Racismo, Almir Aguiar (coordenador); de Organização do Ramo Financeiro, Magaly Fagundes; e de Políticas Sociais, Elias Jordão.' },
        { type: 'paragraph', value: 'As campanhas Sindicato Solidário visam organizar ações das entidades sindicais filiadas à Contraf-CUT, em apoio a pessoas em necessidade ou vítimas de catástrofes, como a ocorrida no Sul do Brasil.' }
      ]
    },
    id11: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-001.jpg',
      subtitle: 'Dirigentes sindicais cobram gestão humanizada do novo superintendente estadual do BB no RS',
      title: 'Reunião foi realizada na última terça (5/9) entre dirigentes da Fetrafi-RS, do SindBancários Porto Alegre e Região e Rio Grande e Região com representante do banco',
      content: [
        { type: 'title', value: '' },
        { type: 'paragraph', value: 'Em reunião na última terça-feira (5) com o superintendente estadual do Banco do Brasil no Rio Grande do Sul, dirigentes da Fetrafi-RS, do SindBancários Porto Alegre e Região e Rio Grande e Região pediram providências em relação ao assédio moral que vêm acontecendo em agências de todo o estado. Nesse encontro, foram relatados casos registrados em Porto Alegre, Caxias do Sul e Santa Maria.' },
        { type: 'paragraph', value: 'Segundo Cristiana Garbinatto, diretora da Fetrafi-RS, há inúmeras denúncias de assédio moral a gerentes e suas equipes, envolvendo superintendentes regionais. “A política do medo continua sendo praticada no estado. As pessoas trabalham com medo de perder comissão e até mesmo o emprego. Os casos vão desde situações inadmissíveis como gritos e grosserias a dizer que quem não atingir as metas não receberá PLR e sofrerá processo disciplinar por insubordinação. São mentiras repetidas em vários locais para pressionar os trabalhadores e que causam ainda mais adoecimento”, ressaltou.' },
        { type: 'paragraph', value: 'Após ouvir os relatos dos sindicalistas, o superintendente se comprometeu a trabalhar por uma gestão humanizada no Banco do Brasil e afirmou que não vai apoiar política de medo e de ameaças enquanto estiver no comando. “A reunião foi muito produtiva, porque firmamos o compromisso com uma gestão mais humanizada e de combate à política de assédio, pressão e medo. Estamos na expectativa de que os compromissos assumidos pela Superintendência sejam cumpridos”, avaliou Priscila Aguirres, representante da Fetrafi-RS na Comissão de Empresa dos Funcionários do BB (CEBB).' },
        { type: 'paragraph', value: 'Ronaldo Zeni, dirigente do SindBancários de Porto Alegre e Região, considerou que o encontro pode render bons resultados. “Entendemos como positiva a postura ao diálogo por parte da Superintendência para que possamos superar esta política do medo no BB. Queremos que o Banco volte a ampliar a rede de atendimento e que a carreira volte a ser ascendente”, disse.' },
        { type: 'paragraph', value: 'O dirigente do SindBancários de Rio Grande e Região, Pedro Luiz Pires, espera que, a partir da mudança de posicionamento da nova gestão, o Sindicato ao qual representa tenha mais voz e vez. “Foi muito importante a nossa participação e aguardamos agora que o que foi acordado seja efetivamente cumprido”, falou.' },
        { type: 'paragraph', value: 'Os dirigentes sindicais, por unanimidade, foram incisivos no que diz respeito aos resultados chegarem até os trabalhadores e as trabalhadoras, uma vez que há um adoecimento geral da categoria devido à política de assédio praticada não apenas no BB, mas em todo o setor financeiro/bancário.' },
        { type: 'paragraph', value: 'Outra questão colocada em pauta na reunião foi o fato de correspondentes bancários atuarem em frente às agências do BB, o que é contra as normas, mas, segundo Cristiana, acontece no RS com aval das chefias regionais. “A Fetrafi-RS já notificou o Banco e colocamos de novo o problema na mesa”, informou.' },
        { type: 'paragraph', value: 'Em relação à GDP, os sindicalistas denunciaram que a mesma estava sendo usada como mecanismo de pressão pelas chefias. O superintendente estadual do BB no RS convidou os dirigentes sindicais para participarem das reuniões que acontecem com os gestores para tratar da GDP. Ele também se comprometeu a participar dos eventos do movimento sindical para estreitar o canal de diálogo.' },
        { type: 'paragraph', value: 'Participaram da reunião, que aconteceu em formato híbrido, além dos nomes já citados, a equipe da Gepes Sul e mais 20 bancários e bancárias virtualmente.' },
        { type: 'font', value: 'Fonte: Fetrafi-RS' }
      ]
    },
    id12: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-002.jpg',
      subtitle: 'CineBancários exibe estreia de”Angela” na semana de 7 de setembro',
      title: 'Seguem em cartaz "Retratos fantasmas", de Kleber Mendonça Filho, e o doc "Para Onde Voam as Feiticeiras"',
      content: [
        { type: 'paragraph', value: 'Dia 7 de setembro estreia no CineBancários “Angela”, inspirado no polêmico assassinato de  ngela Diniz, na sessão das 19h. O documentário “Para onde voam as feiticeiras” segue em cartaz, às 15h, junto de “Retratos Fantasmas”, longa-metragem do cineasta e roteirista Kleber Mendonça Filho, em exibição na sessão das 17h.' },
        { type: 'paragraph', value: '“Angela”, longa-metragem de Hugo Prata protagonizado por Isis Valverde, é inspirado na história real da socialite mineira  ngela Diniz. O longa é focado nos últimos meses de vida da  ngela e nas consequências de uma conturbada relação amorosa com o empresário Raul Fernando do Amaral Street (Gabriel Braga Nunes), que culminou em um dos casos de assassinato mais famosos de todos os tempos no Brasil. No elenco, estão ainda Alice Carvalho, Bianca Bin, Carolina Mânica, Chris Couto, Emílio Orciollo Netto e Gustavo Machado.' },
        { type: 'title', value: 'ESTREIA ANGELA' },
        { type: 'paragraph', value: 'Brasil/ Drama/ 2023/ 104min' },
        { type: 'title', value: 'Direção: Hugo Prata' },
        { type: 'paragraph', value: 'Sinopse: Após uma tumultuada separação e ter que ceder a guarda dos seus três filhos, a famosa socialite  ngela Diniz conhece Raul, e acredita ter encontrado alguém que ama seu espírito livre tanto quanto ela. A atração avassaladora fez o casal largar tudo e viver o sonho de reconstruir suas vidas na casa de praia. Mas a vida tranquila rapidamente se transforma quando Raul começa a se mostrar um homem agressivo, violento e controlador. A relação declina para o abuso e a violência, dando origem a um dos casos de assassinato mais famosos de todos os tempos no Brasil.Elenco: Isis Valverde, Gabriel Braga Nunes, Alice Carvalho, Emilio Orciollo Netto, Bianca Bin, Carolina Manica, Gustavo Machado e Chris Couto.' },
        { type: 'title', value: 'EM CARTAZ' },
        { type: 'paragraph', value: 'RETRATOS FANTASMAS' },
        { type: 'paragraph', value: 'Brasil/Documentário/2022/ 93min' },
        { type: 'paragraph', value: 'Direção: Kleber Mendonça Filho' },
        { type: 'paragraph', value: 'Sinopse: O filme tem o centro da cidade do Recife como personagem principal, sendo um espaço histórico e humano, revisitado através dos grandes cinemas que serviram como espaços de convívio durante o século XX. Foram lugares de sonho e de indústria, e a relação das pessoas com esse universo é um marcador de tempo para as mudanças dos costumes em sociedade.' },
        { type: 'title', value: 'PARA ONDE VOAM AS FEITICEIRAS' },
        { type: 'paragraph', value: 'Brasil/ Documentário/ 2020/ 89min' },
        { type: 'paragraph', value: 'Direção: Eliane Caffé, Carla Caffé e Beto Amaral' },
        { type: 'paragraph', value: 'Sinopse: Para onde voam as feiticeiras acompanha a deriva de encenações e improvisos de sete artistas pelas ruas do centro de São Paulo em uma experiência cinematográfica que torna visível a persistência de preconceitos arcaicos de gênero e raça no imaginário comum. No centro desta narrativa polifônica está a importância da resistência política através das alianças de luta comum entre coletivos LGBTQIA+, negritude, indígenas e trabalhadores sem teto.' },
        { type: 'title', value: 'HORÁRIOS CINEBANCÁRIOS' },
        { type: 'paragraph', value: '7 a 13 de setembro' },
        { type: 'paragraph', value: '15h: PARA ONDE VOAM AS FEITICEIRAS' },
        { type: 'paragraph', value: '17h: RETRATOS FANTASMAS' },
        { type: 'paragraph', value: '19h: ANGELA' },
        { type: 'paragraph', value: '*Não há sessões nas segundas-feiras' },
        { type: 'title', value: 'Ingressos' },
        { type: 'paragraph', value: 'Os ingressos podem ser adquiridos a R$ 12 na bilheteria do CineBancários. Idosos (as), estudantes, bancários (as), jornalistas sindicalizados (as), portadores de ID Jovem e pessoas com deficiência pagam R$ 6. São aceitos cartões nas bandeiras Banricompras, Visa, MasterCard e Elo. Na quinta-feira, a meia-entrada é para todos e todas.' },
        { type: 'title', value: 'CineBancários' },
        { type: 'paragraph', value: 'Rua General Câmara, 424 – Centro – Porto Alegre' },
        { type: 'paragraph', value: 'Mais informações pelo telefone (51) 3030.9405 ou pelo e-mail cinebancarios@sindbancarios.org.br' }
      ]
    },
    id13: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-003.jpg',
      subtitle: 'Sindicato vence ação coletiva de mais de nove anos contra o Santander',
      title: 'Funcionários serão contemplados com revisão da mensalidade do plano de saúde; aposentados terão direito à restituição de valores pagos a mais',
      content: [
        { type: 'paragraph', value: 'O SindBancários venceu ação civil pública de mais de nove anos (ajuizada em 30/01/2014) contra o Santander, que visava a manutenção dos critérios de cobrança do plano de saúde. Após o esgotamento de todos os recursos, o Sindicato saiu vitorioso e a decisão se tornou definitiva. Assim, os funcionários do Santander da base territorial do SindBancários Porto Alegre e Região que permanecem com o plano de saúde ativo terão direito à revisão da mensalidade; inclusive os aposentados receberão restituição de valores pagos a mais.' },
        { type: 'paragraph', value: 'Para esclarecer sobre o assunto, o Sindicato promove, na próxima quarta-feira (13), às 17h, uma plenária híbrida, onde os bancários e bancárias do Santander poderão tirar todas as suas dúvidas. A atividade será realizada no auditório da sede da entidade (Rua Gen. Câmara, 424) e também de forma virtual (link abaixo). O diretor do SindBancários e membro da Comissão de Organização dos Empregados do Santander, Luiz Cassemiro, destaca que a ação é uma vitória do Sindicato para os trabalhadores aposentados, licenciados e da ativa.' },
        { type: 'paragraph', value: '“Lutamos até a última instância para defender direitos e valores que os colegas têm a reaver. Nossa luta é coletiva, por isso convidamos os trabalhadores que ainda não estão sócios a se associarem, pois, desta forma, fortalecemos o SindBancários, que este ano completou 90 anos de lutas e resistências, atuando por melhores condições de trabalho e na defesa dos direitos para sua categoria”, afirma o dirigente.' },
        { type: 'paragraph', value: 'No total são 1.757 empregados contemplados, que terão seus direitos reparados e mantidos. O pagamento para os substituídos ainda está em fase de cálculo nos autos da justiça. No processo, foi solicitada a suspensão da alteração realizada em 2014 na forma de custeio do plano de saúde prestado pelas operadoras Bradesco Saúde, Central Nacional Unimed / Unimed Seguradora e Cabesp (para os funcionários oriundos do Banespa, admitidos até 20/11/2000); o restabelecimento das condições contratadas até então; e requerido o pagamento para os substituídos processualmente dos valores cobrados a maior em decorrência da alteração ilegal no custeio do plano.' },
        { type: 'title', value: 'São contemplados trabalhadores do Santander:' },
        { type: 'paragraph', value: '– quanto ao direito de revisão da mensalidade: bancários da base do Sindicato, sócios ou não, que permanecem com o plano de saúde ativo;' },
        { type: 'paragraph', value: '– quanto ao direito de restituição dos valores pagos a maior: bancários da base do Sindicato, sócios ou não, que permaneceram com o plano de saúde após o período de carência previsto na CCT, independente de posterior cancelamento do plano.' },
        { type: 'paragraph', value: 'Funcionários do Santander aposentados que continuam com o plano de saúde e que não foram alcançados pela redução da mensalidade do plano podem entrar em contato com o escritório AVM Advogados Associados para que sua situação seja analisada individualmente. Os telefones de contato são: 51 99291.7152 (WhatsApp), 51 99341.8415 (WhatsApp) ou 51 3061.4880 (telefone fixo).' },
        { type: 'paragraph', value: 'Plenária híbrida – ação plano de saúde Santander' },
        { type: 'paragraph', value: 'Data: quarta-feira (13 setembro)' },
        { type: 'paragraph', value: 'Horário: 17h' },
        { type: 'paragraph', value: 'Entrar na reunião Zoom:' },
        { type: 'paragraph', value: 'https://us06web.zoom.us/j/83166418255?pwd=am1wMkV4YTBJWFU4SVVtK01HTmplQT09' },
        { type: 'paragraph', value: 'ID da reunião: 831 6641 8255' },
        { type: 'paragraph', value: 'Senha de acesso: 212590' },
        { type: 'paragraph', value: 'Imprensa SindBancários' }
      ]
    },
    id14: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-004.jpg',
      subtitle: 'Piquete dos Bancários abre a porteira para receber a todos',
      title: 'Estão abertas as portas do tradicional Piquete dos Bancários no Acampamento Farroupilha!',
      content: [
        { type: 'paragraph', value: 'Estão abertas as portas do tradicional Piquete dos Bancários no Acampamento Farroupilha! Com mais de duas décadas de história, todo ano o espaço proporciona dias de intensa programação para bancários, bancárias, amigos e familiares. Além do cheiro de churrasco no ar, outro chamariz do piquete são as atividades culturais, como música ao vivo, noite de poesia, oficina de chimarrão e, é claro, o já clássico torneio de truco.' },
        { type: 'paragraph', value: 'Na terça-feira (5), a porteira do Piquete dos Bancários foi oficialmente aberta com a presença do patrão, Edson Ramos da Rocha, do presidente do SindBancários, Luciano Fetzner, dirigentes sindicais e amigos da entidade. Ao som de canções nativistas e chamamés, como “Merceditas”, Rocha agradeceu a presença de todos e a quem trabalhou na montagem, enfrentando as fortes chuvas que causaram o alagamento do Parque Harmonia – intensificado com a devastação das árvores por parte da Prefeitura. “É sempre bom frisar que somos a favor do acampamento, mas não do desmatamento”, pontuou o patrão.' },
        { type: 'paragraph', value: 'Fetzner lembrou o início de sua história no movimento sindical, iniciada em meio a uma greve, quando foi apresentado ao Piquete dos Bancários. “Aqui a gente se sente em casa, acolhidos, como em todas ações do Sindicato, que buscam acolher os trabalhadores bancários. O piquete tem a missão de trazer alegria, convívio, cultura e tudo isso fincando uma bandeira da luta – porque nós temos sempre que lembrar que é a luta que nos garante, como já diz o slogan do piquete: Peleando por Dignidade”, ressaltou o presidente.' },
        { type: 'title', value: 'Veja a nossa agenda para o Acampamento Farroupilha 2023 e participe!' },
        { type: 'paragraph', value: '08/09 <br>19h30 – Guarda da Chama' },
        { type: 'paragraph', value: '9/09 <br>10h – Torneio de truco' },
        { type: 'paragraph', value: '11/09 <br>18h – Projeto Cultural – A Revolução de 23' },
        { type: 'title', value: 'Noite da poesia' },
        { type: 'paragraph', value: '18/09 <br>10h – Oficina de chimarrão' },
        { type: 'paragraph', value: '11h – Oficina de churrasco* <br>* exclusivo para mulheres' },
        { type: 'paragraph', value: 'O Piquete fica no lote 20 do Parque Harmonia. Venha nos visitar!' },
        { type: 'paragraph', value: 'Reserva para uso do espaço com Edson: 51 99806-0007' }
      ]
    },
    id15: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-005.jpg',
      subtitle: 'Banrisulenses irão receber o valor referente à PLR no dia 12 de setembro, dia do aniversário do Banrisul.',
      title: 'Funcionários serão contemplados com revisão da mensalidade do plano de saúde; aposentados terão direito à restituição de valores pagos a mais',
      content: [
        { type: 'paragraph', value: 'Em mais uma vitória do Movimento Sindical Bancário, a direção do Banrisul anunciou nesta terça-feira (05/09), que irá pagar a primeira parcela de PLR e a antecipação da PPR no dia 12 de setembro, data em que o banco comemora 95 anos. O novo presidente, Fernando Lemos, decidiu também acatar o pedido da Fetrafi-RS e do SindBancários POA e Região e autorizou a redução do gatilho da PPR para 9%.' },
        { type: 'paragraph', value: 'Raquel Gil, diretora da Fetrafi-RS e coordenadora do Comando Nacional dos Banrisulenses, comemora a vitória: “Enviamos ofício ao novo presidente no dia 18, quando foi anunciada a mudança no guidence de 11% a 15% para 9% a 13%, pedindo a redução do gatilho da PPR. Durante a visita de Fernando Lemos à Fetrafi-RS, no dia 23, reforçamos a reivindicação. A nova direção do Banrisul se mostrou aberta ao diálogo, o que facilitou nossa conquista”, avalia.' },
        { type: 'paragraph', value: 'Para o também membro do Comando e presidente do SinBancários, Luciano Fetzner, o fato de a diretoria do Banrisul ter acatado a solicitação de que a meta de ROAE acompanhasse o mesmo percentual de redução do guidance é um sinal de boa fé e de preocupação com os banrisulenses. “O gesto do nosso banri hoje nos apresenta um cenário promissor. Temos pautas tão urgentes quanto complexas a enfrentar, como é o caso do plano de cargos e dos passivos. Acredito que retomarmos essas discussões também com diálogo franco trará boas soluções, para os trabalhadores e para a instituição. Todos têm a ganhar com isso”, disse Fetzner.' },
        { type: 'paragraph', value: 'Participaram da reunião para assinatura do acordo a diretora da Fetrafi-RS, Raquel Gil de Oliveira, o presidente do SindBancários Poa e Região, Luciano Fetzner, o diretor da Fetrafi-RS, Luiz Carlos Barbosa e o Superintendente de RH do Banrisul, Gaspar Saikoski.' },
        { type: 'font', value: 'Fonte: Fetrafi-RS (Portal BancáriosRS)' }
      ]
    },
    id16: {
      image: '/assets/image/apresentation/home/secundaria/NOTICIA-SECUNDARIAS-005.jpg',
      subtitle: '7 de Setembro: Grito dos Excluídos terá caminhada em São Leopoldo',
      title: 'Atividade será realizada na próxima quinta (7), às 9h30, na estação SL do Trensurb',
      content: [
        { type: 'paragraph', value: 'O 29º Grito dos Excluídos e das Excluídas vai levar a pergunta “Você tem fome e sede de quê?” para as ruas nesta quinta-feira, 7 de setembro, feriado da Independência do Brasil. O tema continua sendo o mesmo da primeira edição: “A vida em primeiro lugar”.' },
        { type: 'paragraph', value: 'Na Região Metropolitana de Porto Alegre, o Grito será realizado em São Leopoldo, dentro da proposta construída em 2019 de descentralizar e ampliar a tradicional manifestação. A ideia é dar visibilidade às comunidades da periferia das cidades, suas histórias de luta e de resistência, e seus “clamores”. A concentração ocorrerá, às 8h30, atrás da Estação São Leopoldo do Trensurb.' },
        { type: 'paragraph', value: 'Também haverá Grito em Pelotas, onde a concentração iniciará às 10h, no Largo do Mercado Público. Durante a mobilização será produzida uma colcha de retalhos simbolizando a voz dos excluídos e das excluídas.' },
        { type: 'title', value: 'A vida em primeiro lugar' },
        { type: 'paragraph', value: 'O Grito em São Leopoldo vai começar com uma caminhada que culminará na Comunidade Steigleder, onde vivem 211 famílias, muitas das quais trabalhando com reciclagem e em situação de vulnerabilidade social.' },
        { type: 'paragraph', value: 'A comunidade conta com uma Cozinha Solidária e é um exemplo de engajamento e participação social, atuando em Conselhos de Defesa de Direitos. Foi duramente atingida pelos ciclones que assolaram a Região Metropolitana, mas mostrou que a união e a organização comunitária salvam vidas.' },
        { type: 'paragraph', value: 'Os ciclones e as mudanças climáticos, que são a expressão mais visível do grito da mãe natureza, também serão lembrados durante a caminhada, assim como a participação popular, um clamor permanente ao longo dos 29 anos de realização desta atividade, que conta com a parceria da gestão atual do município.' },
        { type: 'paragraph', value: 'Estão convidadas a participar do Grito todas as pessoas que lutam e se solidarizam com as lutas por terra, teto, saúde, educação, trabalho, segurança alimentar e nutricional, justiça, cultura, participação popular, democracia, inclusão social e respeito às diferenças.' },
        { type: 'title', value: 'Trabalho decente, direitos e democracia' },
        { type: 'paragraph', value: 'A CUT-RS e centrais sindicais chamam os trabalhadores e as trabalhadoras a participarem da mobilização. Em São Leopoldo, as entidades sindicais levantarão o Grito que trata da “fome e sede de democracia e de saúde”.' },
        { type: 'paragraph', value: '“Vamos destacar a importância da luta por trabalho decente, direitos e democracia que transformam vidas”, afirma o presidente da CUT-RS, Amarildo Cenci.' },
        { type: 'paragraph', value: 'O Grito é um movimento que todos os anos toma as ruas do Brasil, que mobiliza pastorais, entidades sindicais e movimentos sociais comprometidos com a luta contra a exclusão social.' },
        { type: 'title', value: 'Roteiro da caminhada do Grito em São Leopoldo' },
        { type: 'paragraph', value: '8h30 – Concentração – atrás da Estação São Leopoldo do Trensurb, junto ao Palquinho, espaço tradicional do Movimento HIP HOP.' },
        { type: 'paragraph', value: '1º GRITO (no Palquinho perto do Trensurb) – fome e sede das juventudes, da cultura e do lazer' },
        { type: 'paragraph', value: '2º GRITO (terceira quadra da Rua Lindolfo Collor) – fome e sede da população em situação de rua e encarcerada' },
        { type: 'paragraph', value: '3º GRITO (em frente à Escola Estadual Visconde) – fome e sede da educação pública' },
        { type: 'paragraph', value: '4º GRITO (em frente ao SINE/FGTAS) – fome e sede por trabalho digno, pelo direito à renda e pela economia popular e solidária' },
        { type: 'paragraph', value: '5º GRITO (junto à Câmara de Vereadores de São Leopoldo) – fome e sede de democracia e de saúde' },
        { type: 'paragraph', value: '6º GRITO (Ginásio Municipal Celso Morback/arquibancadas) – fome e sede das populações originárias, migrantes, população negra' },
        { type: 'paragraph', value: '7º GRITO (Ponte sobre o Rio dos Sinos) – fome e sede das causas ambientais e das vítimas das mudanças climáticas' },
        { type: 'paragraph', value: '8º GRITO (Dique ao lado dos trilhos do Trensurb) – fome e sede de mulheres e LGBTQIA+' },
        { type: 'paragraph', value: '9º GRITO (junto à Tenda/Cozinha Comunitária do Movimento Nacional de Luta pela Moradia/MNLM, na Comunidade Steigleder) – fome e sede de moradia digna e alimentação saudável' },
        { type: 'paragraph', value: 'Após a caminhada, será realizado um ato inter-religioso e um almoço solidário. A atividade encerrará com um gesto concreto de solidariedade do Movimento dos Trabalhadores e Trabalhadoras Rurais Sem Terra (MST), que fará doação de alimentos para a comunidade.' },
        { type: 'title', value: 'Organização' },
        { type: 'paragraph', value: 'O Grito é organizado pelo Fórum do Grito na Região Metropolitana de Porto Alegre, do qual participam:' },
        { type: 'paragraph', value: '– Pastorais Socais do RS' },
        { type: 'paragraph', value: '– Cáritas Brasileira Regional do RS' },
        { type: 'paragraph', value: '– Pastoral Social da Diocese Meridional – Porto Alegre (Igreja Episcopal Anglicana do Brasil)' },
        { type: 'paragraph', value: '– Conselho Indigenista Missionário (CIMI Sul|)' },
        { type: 'paragraph', value: '– Conselho Nacional dos Leigos do Brasil (CNLB/RS)' },
        { type: 'paragraph', value: '– Movimento Nacional de Luta pela Moradia (MNLM)' },
        { type: 'paragraph', value: '– Movimento de Trabalhadoras e Trabalhadores por Direitos (MTD)' },
        { type: 'paragraph', value: '– Levante Popular da Juventude' },
        { type: 'paragraph', value: '– Associação Trilha Cidadã' },
        { type: 'paragraph', value: '– Paróquia Santo Inácio de Loyola, São Leopoldo' },
        { type: 'paragraph', value: '– Movimento dos Trabalhadores e Trabalhadoras Rurais Sem Terra (MST)' },
        { type: 'paragraph', value: '– Comissão de Incidência Pública, Direitos Humanos e Combate ao Racismo da Igreja Episcopal Anglicana do Brasil' },
        { type: 'paragraph', value: '– Movimento Fé e Política' },
        { type: 'paragraph', value: '– Secretaria de Ação Social da Diocese Meridional (IEAB)' },
        { type: 'paragraph', value: '– Comunidades Eclesiais de Base' },
        { type: 'paragraph', value: '– Conselho Nacional de Igrejas Cristãs – Regional RS' },
        { type: 'paragraph', value: '– Ir. Marta Maria Godoy – Pastoral Carcerária, Canoas' },
        { type: 'paragraph', value: '– Fórum Inter-religioso e Ecumênico do Rio Grande do Sul' },
        { type: 'paragraph', value: '– Central Única dos Trabalhadores (CUT-RS)' },
        { type: 'paragraph', value: '– Sindicato das Sapateiras e dos Sapateiros de Novo Hamburgo' },
        { type: 'paragraph', value: '– Sindicato dos Petroleiros – Sindipetro RS' },
        { type: 'paragraph', value: '– Associação Getúlio Vargas, Mathias Velho, Canoas' },
        { type: 'paragraph', value: '– Ypira-Ypê – Associação Ambiental, Canoas' },
        { type: 'paragraph', value: '– Associação de Moradores do Conjunto Habitacional Guajuviras, Canoas' },
        { type: 'paragraph', value: '– Associação de Moradores do Parque União, Canoas' },
        { type: 'paragraph', value: '– Associação Ecumênica Esperança, Canoas' },
        { type: 'paragraph', value: '– Jornal Brasil de Fato' },
        { type: 'font', value: 'Fonte: CUT-RS com informações do Grito dos Excluídos' }
      ]
    }
  },
  currentNews: {
    image: '',
    subtitle: '',
    title: '',
    content: [{}]
  } as any
})

const getRelatedList = () => {
  NewsService.related({ notNews: state.news.idNews, perPage: state.news.relatedNews.perPage })
    .then((response:any) => {
      console.log('getRelatedList', response.data)
      response.data.forEach((element: never) => {
        state.news.relatedNews.list.push(element as never)
      })
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

const getNews = () => {
  NewsService.get({ id: state.news.idNews })
    .then((response:any) => {
      console.log('getNews', response)
      state.control.showContent = true
      getRelatedList()
    })
    .catch((error:AxiosError) => {
      console.log('error', error)
    })
    .then(() => {
      //
    })
}

onMounted(() => {
  if (route.params && route.params.id.length) {
    if (!isNaN(route.params.id as unknown as number)) {
      state.news.idNews = Number(route.params.id)
      getNews()
    } else {
      // ToDo error
    }
  }

  switch (route.params.id) {
    case '1':
      state.currentNews = state.news.id1
      break
    case '2':
      state.currentNews = state.news.id2
      break
    case '3':
      state.currentNews = state.news.id3
      break

    case '11':
      state.currentNews = state.news.id11
      break
    case '12':
      state.currentNews = state.news.id12
      break
    case '13':
      state.currentNews = state.news.id13
      break
    case '14':
      state.currentNews = state.news.id14
      break
    case '15':
      state.currentNews = state.news.id15
      break
    case '16':
      state.currentNews = state.news.id16
      break

    default:
      state.currentNews = state.news.id1
      break
  }
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div id="page__news" class="col">
      <LayoutSection background="tertiary" type="top" cornerColor="secondary" min-height>
        <TitleDefault title="Notícia" />
        <div v-if="!state.control.showContent" class="q-mt-xl">
          <SkeletonNews />
        </div>

        <div class="q-mb-xl" v-else>
          <h2>{{ state.currentNews.subtitle }}</h2>
          <h1>{{ state.currentNews.title }}</h1>

          <div class="content">
            <ImageDefault class="images__floats left" :src="state.currentNews.image" />
            <template v-for="(item, key) in state.currentNews.content" :key="key">
              <h4 v-if="item.type === 'title'">{{ item.value }}</h4>
              <p v-if="item.type === 'paragraph'">{{ item.value }}</p>
              <p v-if="item.type === 'font'">{{ item.value }}</p>
            </template>
          </div>
        </div>
        <div class="related__publications" v-if="state.news.relatedNews.list.length">
          <RelatedPublications :list="state.news.relatedNews.list" />
        </div>
      </LayoutSection>
    </div>
  </q-page>
</template>

<style lang="scss">
#page__news
{
  .images__floats {
    width: 100%;
    height: 400px;
    border-radius: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 14px;
    color: $quinary;
    line-height: 1.25em;
    margin: 45px 0 10px;
  }

  h1 {
    font-size: 54px;
    line-height: 1.15em;
    color: $primary;
    font-weight: bold;
    margin: 0 0 30px;
  }

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

  .related__publications {
    clear: both;
  }
}
</style>
