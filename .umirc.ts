import { defineConfig } from 'umi';

const routes = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    name: 'basiclayout',
    routes: [
      {
        path: '/',
        name: '主页',
        component: '@/pages/mainPage',
      },
      {
        psth: '/login',
        name: '登录',
        component: '@/pages/loginPage',
      },
    ],
  },
];
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
