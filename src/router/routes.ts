import Home from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/personal-center',
    name: 'personalCenter',
    component: () => import('../views/personal-center/index.vue'),
    redirect: '/personal-center/main',
    children: [
      {
        path: 'main',
        name: 'personalCenterMain',
        component: () => import('../views/personal-center/main.vue'),
      },
      {
        path: 'account-information',
        name: 'personalCenterAccountInformation',
        component: () => import('../views/personal-center/account-information/index.vue'),
      },
      {
        path: 'orders',
        name: 'personalCenterOrders',
        component: () => import('../views/personal-center/orders/index.vue'),
      },
      {
        path: 'wallet',
        name: 'personalCenterWallet',
        component: () => import('../views/personal-center/wallet/index.vue'),
      }
    ]
  }
]

export default routes