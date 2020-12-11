
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
      { path: 'CadOrg', component: () => import('pages/CadastroOrganizacao.vue') }
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
