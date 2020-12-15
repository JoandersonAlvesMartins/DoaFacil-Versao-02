<template>
  <q-page padding class="login bg-light-blue-1 flex flex-center">
    <!-- content -->
    <div class="row q-pa-lg q-mx-lg">
      <q-card class="my-card">
        <q-card-section class="flex flex-center">
          <q-img class="q-mx-sm q-mr-lg" src="../Img/logo-doa-facil.png"  style="height: auto; max-width: 250px"/>
          <div class="text-h4">Doador</div>
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
                  label="E-mail / Usuário"
                  hint="Digite o seu melhor E-mail"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Por favor digite o seu melhor e-mail.']"
                />
              </q-form>
              </div>
            <!-- fim email -->
            <!-- senha -->
              <div>
                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md"
                >
                  <q-input
                    filled
                    v-model="password"
                    label="Senha de Acesso"
                    hint="Digite a senha cadastro"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Por favor digite a senha cadastro, caso não lembre, click em (Oops, esqueci minha senha/usuário).']"
                  />
                </q-form>
              </div>
              <!-- fim senha -->
            </div>
          </template>
          <!-- fim do formulário -->
        </q-card-section>
        <q-separator />
        <q-card-actions horizontal class="txt-horizontal flex flex-center">
          <q-btn flat class="q-pt-none" to="NaoLembro">Oops, esqueci minha senha/usuário</q-btn>
          <q-btn flat to="CadDoar">Uhuuuu, Eu vou é me cadastrar</q-btn>
        </q-card-actions>
        <q-card-actions vertical class="q-pt-none q-pb-md q-px-xl">
          <!-- btn submit -->
          <q-btn label="Logar" type="submit" color="primary" to="/Doador"/>
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
