<template >
  <q-page padding class="fullscreen bg-secondary">

    <div class="titulo">
      <div class="titulo-subtitle q-mt-xl q-ml-xl">
        <div class="text-h1">Doa Fácil</div>
        <div class="text-h3 q-pt-xl">Conectando você<br>a causa certa</div>
      </div>

      <div class="crianca-avatar absolute-right q-px-xl q-mr-xl">
        <q-img alt="Criança Sorindo!" src="../Img/avatar.svg"/>
        <div class="buttons q-my-xl">
          <q-btn class="q-btn q-mr-md" size="20px" style="background:#0ccf50" to=Campanhas>Quero Doar</q-btn>
          <q-btn class="q-btn q-mr-md" size="20px" style="background:#2f40f7" to=LogOrg>Organização</q-btn>
        </div>
      </div>

      <div class="chamada q-pt-xl q-pb-xs relative-bottom">
        <div class="text-h5 text-center">Seja bem vindo(a)<br>O que deseja fazer hoje?</div>
      </div>

      <div class="footer">
        <span class="text-left absolute-bottom q-pa-md q-ml-xl">Ateliê do Bem {{todaysDate}} - Todos os direitos reservados</span>
        <span class="text-right absolute-bottom q-pa-md q-mr-xl"> São mais de <strong>257</strong> campanhas criadas e <strong>2856</strong> doações feitas.</span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
.page-capa{
font-family: Poppins;
color:white;
}

.titulo-subtitle, .buttons{
  color:white;
  font-family: arquivo;
}

.chamada{
color:black;
}

.footer{
color:black;
}

.footer strong{
  font-size:18px;
  color:white;
}
</style>
