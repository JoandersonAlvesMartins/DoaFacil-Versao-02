<template>
  <q-page padding class="bg-light-blue-1">
    <!-- content -->
    <div class="row q-pa-sm q-mx-lg flex flex-center">
      <q-card-section class="flex flex-center">
        <q-img src="../Img/logo-doa-facil.png"  style="height: auto; max-width: 250px"/>
        <div class="text-h4"> Lista de Campanhas </div>
      </q-card-section>
    </div>
    <div class="row q-px-lg q-mx-lg flex flex-center">
      <!-- transformar em um componente inicio -->
      <template>
        <div class="col-12 q-mb-md">
          <q-banner rounded class="bg-grey-3">
            <template v-slot:avatar>
                <q-avatar size="70px">
                  <img
                  src="../Img/computer-1331579_640.png"
                >
                </q-avatar>
                <div class="q-pa-sm items-center">
                  <div class="text-h6">Nome Organização</div>
                  <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </template>
            <template class="q-mx-md q-pa-sm">
              <div>
                <div class="float-right">
                  <div class="sutitle" >Termíno dd/mm/aaaa</div>
                  <div class="sutitle">Meta R$ 0,00</div>
                  <div class="sutitle">Arrecadação Parcial R$ 0,00</div>
                  <q-btn class="q-btn" style="background:#0ccf50" to="LogDoar">Doar</q-btn>
                </div>
                <div class="text-center">
                  <div class="text-h5">Descrição</div>
                  <p v-for="n in 2" :key="n"> Descrição da campanha vai aqui.</p>
                </div>
              </div>
            </template>
          </q-banner>
        </div>
      </template>
    <!-- termino do component a ser criado -->
    <template>
        <div class="col-12 q-mb-md">
          <q-banner rounded class="bg-grey-3">
            <template v-slot:avatar>
                <q-avatar size="70px">
                  <img
                  src="../Img/computer-1331579_640.png"
                >
                </q-avatar>
                <div class="q-pa-sm items-center">
                  <div class="text-h6">Nome Organização</div>
                  <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </template>
            <template class="q-mx-md q-pa-sm">
              <div>
                <div class="float-right">
                  <div class="sutitle" >Termíno dd/mm/aaaa</div>
                  <div class="sutitle">Meta R$ 0,00</div>
                  <div class="sutitle">Arrecadação Parcial R$ 0,00</div>
                  <q-btn class="q-btn" style="background:#0ccf50" to="LogDoar">Doar</q-btn>
                </div>
                <div class="text-center">
                  <div class="text-h5">Descrição</div>
                  <p v-for="n in 2" :key="n"> Descrição da campanha vai aqui.</p>
                </div>
              </div>
            </template>
          </q-banner>
        </div>
      </template>
      <template>
        <div class="col-12 q-mb-md">
          <q-banner rounded class="bg-grey-3">
            <template v-slot:avatar>
                <q-avatar size="70px">
                  <img
                  src="../Img/computer-1331579_640.png"
                >
                </q-avatar>
                <div class="q-pa-sm items-center">
                  <div class="text-h6">Nome Organização</div>
                  <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </template>
            <template class="q-mx-md q-pa-sm">
              <div>
                <div class="float-right">
                  <div class="sutitle" >Termíno dd/mm/aaaa</div>
                  <div class="sutitle">Meta R$ 0,00</div>
                  <div class="sutitle">Arrecadação Parcial R$ 0,00</div>
                  <q-btn class="q-btn" style="background:#0ccf50" to="LogDoar">Doar</q-btn>
                </div>
                <div class="text-center">
                  <div class="text-h5">Descrição</div>
                  <p v-for="n in 2" :key="n"> Descrição da campanha vai aqui.</p>
                </div>
              </div>
            </template>
          </q-banner>
        </div>
      </template>
      <template>
        <div class="col-12 q-mb-md">
          <q-banner rounded class="bg-grey-3">
            <template v-slot:avatar>
                <q-avatar size="70px">
                  <img
                  src="../Img/computer-1331579_640.png"
                >
                </q-avatar>
                <div class="q-pa-sm items-center">
                  <div class="text-h6">Nome Organização</div>
                  <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </template>
            <template class="q-mx-md q-pa-sm">
              <div>
                <div class="float-right">
                  <div class="sutitle" >Termíno dd/mm/aaaa</div>
                  <div class="sutitle">Meta R$ 0,00</div>
                  <div class="sutitle">Arrecadação Parcial R$ 0,00</div>
                  <q-btn class="q-btn" style="background:#0ccf50" to="LogDoar">Doar</q-btn>
                </div>
                <div class="text-center">
                  <div class="text-h5">Descrição</div>
                  <p v-for="n in 2" :key="n"> Descrição da campanha vai aqui.</p>
                </div>
              </div>
            </template>
          </q-banner>
        </div>
      </template>
      <template>
        <div class="col-12 q-mb-md">
          <q-banner rounded class="bg-grey-3">
            <template v-slot:avatar>
                <q-avatar size="70px">
                  <img
                  src="../Img/computer-1331579_640.png"
                >
                </q-avatar>
                <div class="q-pa-sm items-center">
                  <div class="text-h6">Nome Organização</div>
                  <q-rating size="18px" v-model="stars" :max="5" color="primary" />
                  <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                </div>
            </template>
            <template class="q-mx-md q-pa-sm">
              <div>
                <div class="float-right">
                  <div class="sutitle" >Termíno dd/mm/aaaa</div>
                  <div class="sutitle">Meta R$ 0,00</div>
                  <div class="sutitle">Arrecadação Parcial R$ 0,00</div>
                  <q-btn class="q-btn" style="background:#0ccf50" to="LogDoar">Doar</q-btn>
                </div>
                <div class="text-center">
                  <div class="text-h5">Descrição</div>
                  <p v-for="n in 2" :key="n"> Descrição da campanha vai aqui.</p>
                </div>
              </div>
            </template>
          </q-banner>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
