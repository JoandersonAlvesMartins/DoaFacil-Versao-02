<template>
    <q-layout view="lHh Lpr lFf" class="fullscreen bg-grey-2 shadow-2 rounded-borders">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="west" />
          <q-toolbar-title class="q-ml-xl">
          Doa Fácil.com
        </q-toolbar-title>
        <div class="q-mr-xl">Version 2.0</div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="400"
        content-class="bg-blue-grey-2"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-separator colo="black"/>

            <q-item clickable v-ripple to="Doador">
              <q-item-section avatar>
                <q-icon name="perm_identity"/>
              </q-item-section>

              <q-item-section>
                Perfil Doador
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="Dpd">
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Dados Pessoais
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="Campanha">
              <q-item-section avatar>
                <q-icon name="fact_check" />
              </q-item-section>

              <q-item-section>
                Lista de Campanhas
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="add_shopping_cart" />
              </q-item-section>

              <q-item-section>
                Meu Querido Carrinho
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="HistD">
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>
                Historico de Doações
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="RedSen">
              <q-item-section avatar>
                <q-icon name="published_with_changes" />
              </q-item-section>

              <q-item-section>
                Mudar Senha
              </q-item-section>
            </q-item>
              <q-separator colo="black"/>
            <q-item exact clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="highlight_off" />
              </q-item-section>
              <q-item-section>
                Sair
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top bg-blue-grey-2" style="height: 150px">
          <div class="absolute-bottom text-center">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Nome Doador</div>
              <span>doador@email.com</span>
            <div class="q-px-sm">
              <q-icon class="itens-center" name="star" color="blue" size="20px"></q-icon>
              <span class="text-h6">4.2</span>
            </div>
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="row q-pa-sm q-mx-lg flex flex-center">
            <q-card-section class="flex flex-center">
              <q-img src="../Img/logo-doa-facil.png"  style="height: auto; max-width: 250px"/>
              <div class="text-h4"> Amado Carrinho de Doações </div>
            </q-card-section>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
