import { defineConfig } from 'umi';

const routes = [
  { path: '/', component: '@/layouts/BasicLayout', name: 'basiclayout',routes:[
    {
      path:'/',
      name:'主页',
      component:'@/pages/mainPage'
    }
  ] },
];
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
