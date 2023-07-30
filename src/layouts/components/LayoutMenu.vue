<script setup lang="ts">
// import { PropType } from 'vue'
// import { type ratioType } from 'components/models/interfaces/InterfacesDefault'

// const props = defineProps({
//   menu: {
//     type: Object as PropType<ratioType>,
//     required: false
//   }
// })
</script>

<template>
  <q-btn class="menu__main" flat color="text-negative" label="Home" no-caps></q-btn>
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
                <q-item-section>História</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Estatuto</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Diretoria</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Acordos e convenções</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Editais</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable>
          <q-item-section>Comunicação</q-item-section>
          <q-item-section class="more__menu--right" side>
            <q-icon color="text-inverse" name="keyboard_arrow_right" />
          </q-item-section>

          <q-menu auto-close class="bg-accent text-text-inverse submenu--level2" anchor="top end" self="top start">
            <q-list dense>
              <q-item clickable>
                <q-item-section>Notícias</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Artigos</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Estúdio RAO</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Galeria de fotos</q-item-section>
              </q-item>
              <q-separator class="menu__separator" />
              <q-item clickable>
                <q-item-section>Publicações</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Quit</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Departamentos" no-caps>
    <q-menu anchor="bottom middle" self="top middle" class="bg-accent text-text-inverse submenu">
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>Quem somos</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Jurídico</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>
            Saúde e condições<br />
            de trabalho
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Juventude e Gênero</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>
            Diversidade e<br />
            Combate ao Racismo
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Esporte e Lazer</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Cultura e Sustentabilidade</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>
            Aposentados e<br />
            Seguridade Social
          </q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Formação</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>
            Financeiras e terceirizados<br />
            do ramo financeiro
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Serviços" no-caps>
    <q-menu anchor="bottom middle" self="top middle" class="bg-accent text-text-inverse submenu">
      <q-list dense style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>Convênios</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Arquivo histórico</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Espaços</q-item-section>
        </q-item>

        <q-separator class="menu__separator" />

        <q-item clickable v-close-popup>
          <q-item-section>Jurídico</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>

  <q-btn class="menu__main" flat color="text-negative" label="Sindicalize-se" no-caps></q-btn>
  <q-btn class="menu__main" flat color="text-negative" label="Contato" no-caps></q-btn>
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
