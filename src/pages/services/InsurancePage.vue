<script setup lang="ts">
import { reactive } from 'vue'
import { baseURL } from 'src/helpers/helpers'
import LayoutSection from 'layouts/components/LayoutSection.vue'
import TitleDefault from 'components/interface/TitleDefault.vue'
import BannerTop from 'components/interface/BannerTop.vue'
// import TabsCategories from 'components/interface/TabsCategories.vue'
import InsuranceItem from 'components/interface/InsuranceItem.vue'

const state = reactive({
  item: {
    title: 'Clinica Odontológica',
    subject: 'Desconto de 25% em compras acima de R$ 150,00',
    phone: '(51) 3325-5036',
    mail: 'farmacia@donjoaoxii.com.br',
    socialMedia: ['facebook', 'instagram', 'twitter', 'whatsapp', 'youtube']
  },
  items: {
    physicalActivity: [
      {
        title: 'Deiques Companhia Esportiva',
        subject: 'Aulas de Futsal e Personal Training',
        description: 'Desconto no pacote anual mediante a apresentação da carteirinha sindical.',
        phone: '(51) 99845-6326',
        address: '',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'https://www.facebook.com/DeiquesCiaEsportiva',
          instagram: 'https://www.instagram.com/deiquesciaesportiva/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Fisioterapia | Centrofisio',
        subject: 'Desconto nas sessões de fisioterapia e acupuntura para pacientes e familiares que trabalhem em bancos em Porto Alegre e Região metropolitana, mediante comprovação.',
        description: '',
        phone: '(51) 99997-7043 | (51) 3026-2511 (Com Letícia)',
        address: 'Rua dos Andradas 1711/502 | Centro | Porto Alegre',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Prime Studio Pilates',
        subject: 'Desconto nos planos semestral e anual mediante a apresentação de matrícula ou carteirinha sindical.',
        description: '',
        phone: '(51) 99877-8718',
        address: 'Avenida Teresópolis, 3242, sala 202',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Manoela Carniel Studio Pilates',
        subject: 'Pilates + Move Flow',
        description: 'Bancários sindicalizados possuem desconto no plano mensal. Aulas com dia e horário fixo.',
        phone: '(51) 98187-1205',
        address: 'Rua Demétrio Ribeiro, 817 – centro POA/RS',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'https://m.facebook.com/manucarnielmovimento/',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Instituto Golden Pilates e Fisioterapia',
        subject: 'Desconto de 10% no pagamento mensal de Pilates ou Treinamento Funcional e de pacotes de 5 sessões de qualquer serviço (Pagamentos em dinheiro ou transferência bancária).',
        description: 'Comprovação de sócio por carteirinha do sindicato.',
        phone: '(51) 3224-8631 Whats (51) 98055-4430',
        address: 'Rua dos Andradas 1091, sala 73, 7º andar ',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'https://www.facebook.com/institutogoldenpilatesefisioterapia/',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Bambu Studio Pilates',
        subject: 'Aulas de pilates (45 minutos com agendamento prévio): desconto no plano mensal e trimestral (1 ou 2 vezes por semana). Individual ou em duplas.',
        description: '',
        phone: 'Fone: (51) 3516-5335 ou Whatsapp (51) 99248-7582',
        address: 'Avenida Osvaldo Aranha,1439 - sala 301',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'https://www.facebook.com/BambuPilateseFisio/',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Karen Ibias Ballet',
        subject: 'Aulas de Dança para todas as idades.',
        description: 'Isenção da matrícula e desconto na mensalidade para sindicalizados e seus familiares, ao assinarem um contrato fidelidade de, no mínimo, 6 (seis) meses.',
        phone: '(51) 3085-6002',
        address: 'Sede Plínio - Avenida Plínio Brasil Milano, 427, Higienópolis, Porto Alegre - RS.',
        address2: 'Sede Menino Deus - Rua Barão de Teffé, 157, Menino Deus, Porto Alegre - RS.',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'Facebook: https://www.facebook.com/KarenIbiasBallet',
          instagram: 'Instagram: https://www.instagram.com/karenibiasballet/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      }
    ],
    HealthAndBeauty: [
      {
        title: 'Odontologia | Pronto Clínica Dentária',
        subject: 'Cirurgiões-dentistas rigorosamente selecionados. Diagnósticos, Urgência, Radiologia, Tratamento Conservador (prevenção). Odontopediatria, Dentística, Endodontia, Periodontia, Cirurgia e Prótese Dentária. ',
        description: 'Atendimento diurno, noturno, urgência aos sábados, domingos e feriados.',
        phone: '',
        address: 'Consultório Porto Alegre: Av. Otavio Rocha, 115-12º andar - Centro. Fone: (51) 32245707',
        address2: 'Consultório Gravataí: Rua Coronel Sarmento, 1495 - Centro. Fone: (51) 3488-5956',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'iSaúde Clínica Particular +Acessível',
        subject: 'A iSaúde é uma clínica de multiespecialidades, que oferece consultas e exames acessíveis, com atendimento humanizado e alta qualidade do corpo clínico. Bancários sindicalizados e seus dependentes têm direito a descontos.',
        description: 'Agendamento de consultas e exames: Fone (51) 3103-9700 / Whatsapp (51) 99266-1494 Rua dos Andradas 1234 conj 1610 - Centro Histórico de Porto Alegre. Site para visualizar especialidades, preços, conversar ou agendar por chat: www.isaude.med.br',
        phone: '',
        address: '',
        address2: '',
        mail: '',
        site: 'https://isaude.med.br/',
        socialMedia: {
          facebook: '',
          instagram: 'www.instagram.com/isaudeclinicamaisacessivel/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Podologia Minossi | Atendimento em clínica própria e domiciliar',
        subject: 'Podóloga com mais de 12 anos de experiência no tratamento e prevenção de doenças dos pés.',
        description: 'Especialista em tratamentos para calos, calosidades, unha encravada, órtese ungueal, fungos e micoses, fissuras, pés diabéticos e reflexologia podal.',
        phone: '(51) 98481-9658',
        address: 'Av. Juca Batista 1458 loja 11 - Centro comercial La Fuente',
        address2: '',
        mail: '',
        site: 'www.podologiaminossi.com.br',
        socialMedia: {
          facebook: 'https://www.facebook.com/anapaulaminossi/?locale=pt_BR',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Evandro Rossi | Terapeuta Ocupacional Harmonia do Ser - Consultório terapêutico e de terapia ocupacional',
        subject: 'Consultorias e atendimentos de terapia ocupacional e de terapias corporais e integrativas, com ênfase em: Saúde do Trabalhador (Ergonomia e posturas, LER/DORT e PCDS) | Estresse Ocupacional e Social | Desempenho Ocupacional Satisfatório | Bem Estar Físico, Mental e Social.',
        description: 'Desconto em Consultas e ou Atendimentos aos bancários sindicalizados e dependentes, mediante comprovação.',
        phone: 'WhatsApp (51) 99811-1233 / (51) 98537-1456',
        address: 'Rua Dr. Flores, 330 - Sala 117 - Centro Histórico - POA/RS.',
        address2: '',
        mail: 'rossi.terapias@hotmail.com',
        site: '',
        socialMedia: {
          facebook: 'https://www.facebook.com/evandrorossi.to/',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Bianca Hennes | Aromaterapeuta e Consultora de Bem Estar da Harmôniccos Óleos Essenciais',
        subject: 'Reeducações para substituição de produtos sintéticos por produtos naturais. Consultas aromáticas para definirmos a melhor forma de uso dos produtos. Desconto mediante a apresentação de matrícula ou carteirinha sindical.',
        description: '',
        phone: '(47) 99971-0442',
        address: '',
        address2: '',
        mail: 'lavorobianca@gmail.com | atendimento on-line',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '@harmoniccosoleosessenciais',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Q Saúde Suplementos',
        subject: 'Suplementos e acessórios para treino de mais de 60 marcas nacionais e importadas. Desconto para compras à vista em toda loja. ',
        description: '',
        phone: 'Telefone/WhatsApp: (51) 99247-2696',
        address: '',
        address2: '',
        mail: '',
        site: 'https://www.qsaudesuplementos.com.br',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Espaço de Beleza Adri Aragão',
        subject: 'Produtos oferecidos: Boticário, Empório Essenza e Natura (perfumes, hidratantes, águas perfumadas, maquiagens, sabonetes, cremes mão e pés, velas perfumadas, aromatizadores de ambientes, entre outros).',
        description: 'Descontos em compras, na apresentação do crachá funcional ou carteira de associado ao sindicato.',
        phone: '(51) 99957-9595 / (51) 3062-3222',
        address: 'Rua Siqueira Campos, 1194 - térreo - estacionamento no local pela Mauá, 1093 - Estacionamento Paineira',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Óptica CIA dos Óculos',
        subject: 'Desconto fixo de 10% para compras no prazo em até 10x em armações e óculos de sol e 15% à vista, mediante apresentação da carteira de sócio.',
        description: '',
        phone: 'Loja 1 - (51) 3092-0852 / Whatsapp - (51) 99354-7025. | Loja2 - (51) 3024-0852 / Whatsapp - (51) 99240-1142.',
        address: 'Loja 1 - Rua Prof. Annes Dias, 158 - Porto Alegre - RS',
        address2: 'Loja 2 - Av Cristóvão Colombo, 2149 Lj 20 - Porto Alegre - RS',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: '',
        subject: '',
        description: '',
        phone: '',
        address: '',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Óptica Nobre Causa',
        subject: 'Desconto nas armações de óculos de grau e solares mediante a apresentação de matrícula ou carteirinha sindical.',
        description: '',
        phone: '(51) 98451-0719',
        address: 'Andradas 904 loja 02 | Porto Alegre',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: 'https://www.instagram.com/nobrecausa/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'IMUNESAFE | Clínica de Vacinas',
        subject: 'Desconto em todas as vacinas (pneumococicas, hepatites, meningococicas, herpes zoster, HPV, gripe, vacinas do bebê ao vovô). A Clínica oferece a comodidade da Vacinação em Casa, no condomínio ou no local de trabalho. Contamos com estacionamento gratuito para clientes.',
        description: 'Pagamentos podem ser efetuados à vista, PIX ou cartão de crédito. A comprovação de sócio é feita mediante a apresentação da carteirinha de Sindicalização.',
        phone: '(51) 3273-1893 / WhatsApp: (51) 99810-2626',
        address: 'Av. Ipiranga, 7450, loja 05 - Jardim Botânico Porto Alegre - RS - 91530-000',
        address2: '',
        mail: 'imunesafevacina@gmail.com',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: 'https://www.instagram.com/imunesafevacinas/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Estética Viver Bem - Maria de Fátima Gué',
        subject: 'Estética facial e corporal, drenagem linfática, redução de medidas, pós operatório, massagem para gestantes, massagem facial, entre outros serviços de estética. Bancários sindicalizados possuem 20% de desconto no plano de mensalidade.',
        description: '',
        phone: '(51) 99906-9968',
        address: 'Rua Saldanha da Gama, 573. Bairro Harmonia - Canoas/RS',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: '',
          instagram: '@fatimaguemassoterapeuta',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'VivaSom',
        subject: 'A VivaSom é uma empresa que realiza exames audiológicos e comercializa aparelhos auditivos de renomadas marcas a nível mundial, há mais de 13 anos. Desconto sob tabela vigente/avaliação auditiva gratuita para bancários sindicalizados.',
        description: '',
        phone: '',
        address: 'Centro POA: Rua dos Andradas 1781 / cj 1806/ Whats: (51) 98100.8350/ Tel: (51) 3086-486',
        address2: 'Rua Florencio Ygartua, 164 – Moinhos de Vento / Whats: (51) 98350-4544/ Tel: (51) 3377-1200',
        mail: '',
        site: 'https://www.vivasom.com.br/servicos-aparelhos-auditivos',
        socialMedia: {
          facebook: 'https://www.facebook.com/vivasom.aparelhos.auditivos',
          instagram: 'https://www.instagram.com/vivasom_aparelhos_auditivos/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      }
    ],
    tourism: [
      {
        title: 'Hotel Intercity Cidade Baixa',
        subject: '20% de desconto, para reservas efetuadas diretamente em nosso site. 5% para as reservas efetuadas diretamente no hotel ou por nossa central de reservas. 10% de desconto para salas de evento.',
        description: '',
        phone: 'Central de reservas: 0300 210 7700 (custo local) | (51) 3201-7700',
        address: 'Av. Loureiro da Silva, 1960 | Porto Alegre - RS | 90050-240',
        address2: '',
        mail: '',
        site: 'https://www.intercityhoteis.com.br',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'ADESBAM',
        subject: 'Bancários associados ao Sindicato têm vantagens e descontos. Informe-se:',
        description: '',
        phone: '(51) 3211-4666',
        address: 'Rua Dr. Mario Totta, 108, Bairro Tristeza | Porto Alegre - RS',
        address2: '',
        mail: 'adesbam@adesbam.com.br',
        site: 'http://www.adesbam.com.br',
        socialMedia: {
          facebook: '',
          instagram: 'https://www.instagram.com/adesbam/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      },
      {
        title: 'Host Turismo',
        subject: 'A HOST TURISMO em parceria com as melhores operadoras e consolidadoras vem atuando no mercado de turismo desde 2015 como Agência de Viagens, para que todos possam ter aquela viagem para contar por toda vida.',
        description: 'Bancários sindicalizados terão a oportunidade de aderir sua viagem com 3% de desconto. Pagamentos facilitados através de cartão de crédito ou boleto bancário (mediante análise de crédito), com parcelas sem juros.',
        phone: '',
        address: '',
        address2: '',
        mail: '',
        site: '',
        socialMedia: {
          facebook: 'https://www.facebook.com/people/Host-Turismo/100069383412171/',
          instagram: 'https://www.instagram.com/hostturismo/',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      }
    ],
    others: [
      {
        title: 'Quadro Amarelo | Plataforma de Escrita Criativa',
        subject: 'Curso Online de Escrita Criativa com Assis Brasil e Jéferson Assumção',
        description: 'Desconto de 20% sobre a compra do curso à vista e 10% a prazo, em até 12 parcelas no cartão de crédito.',
        phone: '',
        address: '',
        address2: '',
        mail: 'contato@quadroamarelo.com.br',
        site: 'https://www.quadroamarelo.com.br/',
        socialMedia: {
          facebook: '',
          instagram: '',
          twitter: '',
          whatsapp: '',
          youtube: ''
        }
      }
    ]
  }
})

</script>

<template>
  <div id="page__services--insurance" class="col">
    <LayoutSection background="tertiary" type="banner" cornerColor="tertiary" min-height>
      <BannerTop :src="`${baseURL}temporary/images/services/convenios.jpg`" />
    </LayoutSection>

    <LayoutSection background="tertiary" cornerColor="secondary">
      <div id="content__page--service-insurance">
        <TitleDefault class="q-mb-md" title="Convênios" />
        <div class="subtitle q-mb-xl">Os bancários e bancárias sindicalizadas têm, à disposição, uma série de descontos e benefícios em cursos, escolas, universidades, consultas, estabelecimentos esportivos, restaurantes e livrarias. Confira os convênios do SindBancários nas diferentes áreas.</div>
        <!-- <TabsCategories title="Filtro por categoia" /> -->
        <div class="section--insurance">
          <h2 class="q-mt-xl q-mb-lg">Atividade Física</h2>
            <!-- title: 'Host Turismo',
            subject: 'A HOST TURISMO em parceria com as melhores operadoras e consolidadoras vem atuando no mercado de turismo desde 2015 como Agência de Viagens, para que todos possam ter aquela viagem para contar por toda vida.',
            description: 'Bancários sindicalizados terão a oportunidade de aderir sua viagem com 3% de desconto. Pagamentos facilitados através de cartão de crédito ou boleto bancário (mediante análise de crédito), com parcelas sem juros.',
            phone: '',
            address: '',
            address2: '',
            mail: '',
            site: '',
            socialMedia: {
              facebook: 'https://www.facebook.com/people/Host-Turismo/100069383412171/',
              instagram: 'https://www.instagram.com/hostturismo/',
              twitter: '',
              whatsapp: '',
              youtube: ''
            } -->

          <div class="row q-mt-sm q-col-gutter-lg">
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, key) in (state.items.physicalActivity)" :key="key">
              <InsuranceItem
                :title="item.title"
                :subject="item.subject"
                :description="item.description"
                :phone="item.phone"
                :address="item.address"
                :address2="item.address2"
                :mail="item.mail"
                :site="item.site"
                :social-media="item.socialMedia" />
            </div>
          </div>
        </div>

        <div class="section--insurance">
          <h2 class="q-mt-xl q-mb-lg">Saúde e Beleza</h2>

          <div class="row q-mt-sm q-col-gutter-lg">
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, key) in (state.items.HealthAndBeauty)" :key="key">
              <InsuranceItem
                :title="item.title"
                :subject="item.subject"
                :description="item.description"
                :phone="item.phone"
                :address="item.address"
                :address2="item.address2"
                :mail="item.mail"
                :site="item.site"
                :social-media="item.socialMedia" />
            </div>
          </div>
        </div>
        <div class="section--insurance">
          <h2 class="q-mt-xl q-mb-lg">Turismo e Hospedagem</h2>

          <div class="row q-mt-sm q-col-gutter-lg">
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, key) in (state.items.tourism)" :key="key">
              <InsuranceItem
                :title="item.title"
                :subject="item.subject"
                :description="item.description"
                :phone="item.phone"
                :address="item.address"
                :address2="item.address2"
                :mail="item.mail"
                :site="item.site"
                :social-media="item.socialMedia" />
            </div>
          </div>
        </div>
        <div class="section--insurance">
          <h2 class="q-mt-xl q-mb-lg">Outros</h2>

          <div class="row q-mt-sm q-col-gutter-lg">
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, key) in (state.items.others)" :key="key">
              <InsuranceItem
                :title="item.title"
                :subject="item.subject"
                :description="item.description"
                :phone="item.phone"
                :address="item.address"
                :address2="item.address2"
                :mail="item.mail"
                :site="item.site"
                :social-media="item.socialMedia" />
            </div>
          </div>
        </div>
        <!-- <div class="section--insurance">
          <h2 class="q-mt-xl q-mb-lg">Atividade Física</h2>

          <div class="row q-mt-sm q-col-gutter-lg">
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>

            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
            <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3"><InsuranceItem :title="state.item.title" :subject="state.item.subject" :phone="state.item.phone" :mail="state.item.mail" :social-media="state.item.socialMedia" /></div>
          </div>
        </div> -->

      </div>
    </LayoutSection>
  </div>
</template>

<style lang="scss">
#page__services--insurance
{
  h2 {
    font-size: 25px;
    color: $accent;
    font-weight: bold;
    text-align: center;
    line-height: 1.4em;
  }

  #content__page--service-insurance {
    margin-bottom: 30px;

    .subtitle {
      text-align: justify;
    }
  }
}
</style>
