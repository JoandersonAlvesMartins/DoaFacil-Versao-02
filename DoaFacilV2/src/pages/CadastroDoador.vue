<template>
  <q-page padding class="bg-light-blue-1 flex flex-center">
    <!-- content -->
    <div class="row q-pa-lg q-mx-lg">
      <q-card class="my-card">
        <q-card-section class="flex flex-center">
          <q-img class="q-mx-sm q-mr-lg" src="../Img/logo-doa-facil.png"  style="height: auto; max-width: 250px"/>
          <div class="text-h3"> Cadastro Doador </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <!-- formulário -->
          <q-separator />
          <q-input
            class="q-pa-sm"
            name="name"
            v-model="name"
            color="primary"
            label="Nome Completo"
            filled
            clearable
          />
          <q-input
            class="q-pa-sm"
            name="name"
            v-model="name"
            color="primary"
            label="CPF"
            filled
            clearable
          />
          <q-input
            class="q-pa-sm"
            name="name"
            v-model="name"
            color="primary"
            label="Telefone"
            filled
            clearable
          />
          <q-separator />
          <q-input
            class="q-pa-sm"
            name="name"
            v-model="name"
            color="primary"
            label="E-mail"
            filled
            clearable
          />
          <q-input
            class="q-pa-sm"
            name="name"
            v-model="name"
            color="primary"
            label="Senha"
            filled
            clearable
          />
          <!-- fim do formulário -->
        </q-card-section>
        <q-card-actions vertical class="q-pt-none q-pb-md q-px-xl">
          <!-- btn submit -->
          <q-btn label="Cadastrar" type="submit" color="primary"/>
          <!-- btn submit fim -->
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      submitResult: []
    }
  },

  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
      for (const [name, value] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }
      this.submitResult = submitResult
    }
  }
}
</script>

<style lang="scss">

.my-card{
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
