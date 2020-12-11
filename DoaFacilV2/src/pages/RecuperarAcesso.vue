<template>
  <q-page padding class="login bg-light-blue-1">
    <!-- content -->
    <div class="row q-pa-lg q-mx-lg">
      <q-card class="my-card">
        <q-card-section class="flex flex-center">
          <q-img class="q-mx-sm q-mr-lg" src="../Img/logo-doa-facil.png"  style="height: auto; max-width: 250px"/>
          <div class="text-h4">Recuperar Acesso</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <!-- formulário -->
          <template>
            <!-- email -->
            <div class="q-pa-lg q-mx-lg" style="max-width: 100%">
              <div class="q-mb-lg">
                <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
              >
                <q-input
                  filled
                  v-model="email"
                  label="Digite o E-mail"
                  hint="Informe um e-mail para recuperar o acesso"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Por favor digite o e-mail cadastro.']"
                />
              </q-form>
              </div>
            <!-- fim email -->
            </div>
          </template>
          <!-- fim do formulário -->
        </q-card-section>
        <q-card-actions vertical class="q-mx-md q-pt-none q-pb-md q-px-xl">
          <!-- btn submit -->
          <q-btn label="Enviar" type="submit" color="primary"/>
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
      email: null,
      age: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.email = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style lang="scss">
.login{
 font-family: Poppins;
}

.my-card{
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}

.txt-horizontal {
  font-size: 16px;
  color: blue;
}
</style>
