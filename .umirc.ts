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
      {
        psth: '/getStart',
        name: '新手入门',
        component: '@/pages/getStartPage',
      },
      {
        psth: '/about',
        name: '关于',
        component: '@/pages/aboutPage',
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
