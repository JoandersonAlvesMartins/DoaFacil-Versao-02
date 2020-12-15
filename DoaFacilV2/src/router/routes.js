
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'LogDoar', component: () => import('pages/LoginDoador.vue') },
      { path: 'LogOrg', component: () => import('pages/LoginOrganizacao.vue') },
      { path: 'NaoLembro', component: () => import('pages/RecuperarAcesso.vue') },
      { path: 'CadDoar', component: () => import('pages/CadastroDoador.vue') },
      { path: 'CadOrg', component: () => import('pages/CadastroOrganizacao.vue') },
      { path: 'Campanhas', component: () => import('pages/ListaCampanhaNoLog.vue') },
      { path: 'Campanha', component: () => import('pages/ListaCampanhaLog.vue') },
      { path: 'Organizacao', component: () => import('pages/PerfilOrg.vue') },
      { path: 'Doador', component: () => import('pages/PerfilDoador.vue') },
      { path: 'Car', component: () => import('pages/CarrinhoDoacao.vue') },
      { path: 'NovaCampanha', component: () => import('pages/CriarCampanha.vue') },
      { path: 'Dpd', component: () => import('pages/DadosPessoaisDoador.vue') },
      { path: 'Dpo', component: () => import('pages/DadosPessoaisOrganizacao.vue') },
      { path: 'HistD', component: () => import('pages/HistoricoDoacoesDoador.vue') },
      { path: 'HistO', component: () => import('pages/HistoricoDoadores.vue') },
      { path: 'HistCamp', component: () => import('pages/HistoricoCampanhasOrg.vue') },
      { path: 'RedSen', component: () => import('pages/RedefinirSenhaDoador.vue') },
      { path: 'RedSenOrg', component: () => import('pages/RedefinirSenhaOrganizacao.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
