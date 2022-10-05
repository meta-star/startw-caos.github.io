import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = new VueRouter({
  routes
});

export default router;
