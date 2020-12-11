<template>
  <div class="fullscreen bg-indigo-6 text-white text-center q-pa-md flex flex-center">
    <div>
      <q-img src="../Img/logo-doa-facil-txt-grande.png"  style="height: auto; max-width: 250px"/>
      <div style="font-size: 18vh">
        404
        <q-img src="../Img/Oops-404.png"  style="height: auto; max-width: 160px"/>
      </div>
      <div class="text-h4" style="opacity:.7">
        Estamos trabalhando para resolver o problema...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        icon="west"
        label="Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
