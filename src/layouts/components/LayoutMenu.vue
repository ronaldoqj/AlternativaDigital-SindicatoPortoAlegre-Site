<script setup lang="ts">
import { reactive } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
  menu: {
    home: { name: 'home' } as RouteLocationRaw,
    news: { name: 'allNews' } as RouteLocationRaw,
    about: { name: 'about' } as RouteLocationRaw,
    agreementsConventions: { name: 'agreementsConventions' } as RouteLocationRaw,
    notice: { name: 'notice' } as RouteLocationRaw,
    unionize: { name: 'unionize' } as RouteLocationRaw,
    studioRAO: { name: 'studioRAO' } as RouteLocationRaw,
    publications: { name: 'publications' } as RouteLocationRaw,

    departments: { name: 'departments' } as RouteLocationRaw,
    departmentsLegal: { name: 'departmentsLegal' } as RouteLocationRaw,
    saude: { name: 'saude' } as RouteLocationRaw,
    juventude: { name: 'juventude' } as RouteLocationRaw,
    diversidade: { name: 'diversidade' } as RouteLocationRaw,
    esporte: { name: 'esporte' } as RouteLocationRaw,
    cultura: { name: 'cultura' } as RouteLocationRaw,
    aposentados: { name: 'aposentados' } as RouteLocationRaw,
    formacao: { name: 'formacao' } as RouteLocationRaw,
    financeiras: { name: 'financeiras' } as RouteLocationRaw,
    comunicacao: { name: 'comunicacao' } as RouteLocationRaw,

    services: { name: 'services' } as RouteLocationRaw,
    servicesInsurance: { name: 'servicesInsurance' } as RouteLocationRaw,
    servicesHistoryFile: { name: 'servicesHistoryFile' } as RouteLocationRaw,
    servicesSpaces: { name: 'servicesSpaces' } as RouteLocationRaw,
    servicesLegal: { name: 'servicesLegal' } as RouteLocationRaw,
    contact: { name: 'contact' } as RouteLocationRaw
    // news: { name: 'news', params: { id: 1, title: 'O-Santander-informou' } } as RouteLocationRaw
  }
})

const clickRoute = (route: RouteLocationRaw) => {
  router.push(route)
  // router.replace(route)
}
// const props = defineProps({
//   menu: {
//     type: Object as PropType<ratioType>,
//     required: false
//   }
// })

const clickLink = (link:string, target:string) => {
  window.open(link, target)
}

</script>

<template>
  <q-btn class="menu__main" flat color="text-negative" @click="clickRoute(state.menu.home)" label="Home" no-caps></q-btn>
  <q-btn class="menu__main" flat color="text-negative" label="O Sindicato" no-caps>
    <q-menu anchor="bottom middle" self="top middle" class="bg-accent text-text-inverse submenu">
      <q-list dense style="min-width: 100px">
        <q-item clickable>
          <q-item-section>Quem somos</q-item-section>
          <q-item-section class="more__menu--right" side>
            <q-icon color="text-inverse" name="keyboard_arrow_right" />
          </q-item-section>

          <q-menu auto-close class="bg-accent text-text-inverse submenu--level2" anchor="top end" self="top start">
            <q-list dense>
              <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.about)">História</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.about)">Estatuto</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.about)">Diretoria</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.agreementsConventions)">Acordos e convenções</q-item-section>
        </q-item>

        <q-separator v-if="true" class="menu__separator" />

        <q-item v-if="true" clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.notice)">Editais</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.news)">Notícias</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable>
          <q-item-section>Comunicação</q-item-section>
          <q-item-section class="more__menu--right" side>
            <q-icon color="text-inverse" name="keyboard_arrow_right" />
          </q-item-section>

          <q-menu auto-close class="bg-accent text-text-inverse submenu--level2" anchor="top end" self="top start">
            <q-list dense>
              <!-- <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.news)">Notícias</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Artigos</q-item-section>
              </q-item>
              <q-separator class="menu__separator" /> -->
              <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.studioRAO)">Estúdio RAO</q-item-section>
              </q-item>
              <!-- <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Galeria de fotos</q-item-section>
              </q-item> -->
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section @click="clickRoute(state.menu.publications)">Publicações</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>

        <!-- <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Quit</q-item-section>
        </q-item> -->
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Departamentos" no-caps>
    <q-menu anchor="bottom middle" self="top middle" class="bg-accent text-text-inverse submenu">
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.departments)">Todos Departamentos</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.departmentsLegal)">Jurídico</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.saude)">
            Saúde e condições<br />
            de trabalho
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.juventude)">Juventude e Gênero</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.diversidade)">
            Diversidade e<br />
            Combate ao Racismo
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.esporte)">Esporte e Lazer</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.cultura)">Cultura e Sustentabilidade</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.aposentados)">
            Aposentados e<br />
            Seguridade Social
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.formacao)">Formação</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.financeiras)">
            Financeiras e terceirizados<br />
            do ramo financeiro
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.comunicacao)">
            Comunicação
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Serviços" no-caps>
    <q-menu anchor="bottom middle" self="top middle" class="bg-accent text-text-inverse submenu">
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.services)">Todos Serviços</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.servicesInsurance)">Convênios</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.servicesHistoryFile)">Arquivo histórico</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickLink('https://portal.sindbancarios.org.br/', '_blank')">Portal do associado</q-item-section>
        </q-item>

        <!-- <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.servicesSpaces)">Espaços</q-item-section>
        </q-item> -->

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section @click="clickRoute(state.menu.servicesLegal)">Jurídico</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Sindicalize-se" no-caps @click="clickRoute(state.menu.unionize)"></q-btn>
  <q-btn class="menu__main" flat color="text-negative" label="Contato" no-caps @click="clickRoute(state.menu.contact)"></q-btn>
</template>

<style lang="scss">
$borderRadius: 20px;

.menu__main {
  font-size: 20px;
}

.q-menu {
  font-size: 14px;
}

.submenu {
  // margin-top: 10px !important;
  border-radius: $borderRadius;
  padding: 10px;
  text-align: center;
}

.submenu, .submenu--level2 {
  .more__menu--right {
    position: absolute;
    right: 0;
  }
  .menu__separator{
    background-color: $primary;
  }
}

.submenu--level2 {
  padding: 10px;
  margin-top: -10px !important;
  min-width: 190px;
  text-align: center;
  margin-left: 10px !important;
  border-radius: $borderRadius;
}
</style>
