/*
 * @Author: Li Jian
 * @Date: 2020-07-20 13:54:18
 * @LastEditTime: 2020-07-21 09:27:44
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/router/index.js
 * @Motto: MMMMMMMM
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import cookie from '../plugins/cookie';
import Home from '../views/Home.vue';
// import Login from '../views/auth/Login.vue';

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];

const routes = [
  {
    path: '/', name: 'Home', meta: { auth: true }, component: Home,
  },
  { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue') },
  { path: '/register', name: 'Register', component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue') },
  { path: '/new/login', name: 'AuthLoginRedirect', component: () => import(/* webpackChunkName: "loginredirect" */ '../views/auth/Redirect.vue') },
  { path: '/new/auth', name: 'AuthVerify', component: () => import(/* webpackChunkName: "VerifyAuth" */ '../views/auth/Verify.vue') },
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // '/dist'
  routes,
});

router.beforeEach((to, from, next) => {
  const token = cookie.getCookie('token');

  if (to.matched.some((r) => r.meta.auth)) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
