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
        path: '/login',
        name: '登录',
        component: '@/pages/loginPage',
      },
      {
        path: '/about',
        name: '关于',
        component: '@/pages/aboutPage',
      },
      {
        path: '/getStart',
        name: '新手入门',
        component: '@/pages/getStartPage',
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
