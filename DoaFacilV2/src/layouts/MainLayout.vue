<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="west"
          aria-label="west"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="q-ml-xl">
          Doa Fácil.com
        </q-toolbar-title>

        <div class="q-mr-xl">Version 2.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="800"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Doa Fácil.com
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
</style>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Página Inicial',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Quero Doar',
    caption: 'Sou Doador',
    icon: 'card_giftcard',
    link: '/LogDoar'
  },
  {
    title: 'Organização',
    caption: 'Organização',
    icon: 'roofing',
    link: '/LogOrg'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
