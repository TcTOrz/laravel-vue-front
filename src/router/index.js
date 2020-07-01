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
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue') },
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // '/dist'
  routes,
});

router.beforeEach((to, from, next) => {
  const token = cookie.getCookie('token');
  // console.log(token);
  // if (token == null) {
  //   next({
  //     path: '/login',
  //   });
  //   // return;
  // }
  // console.log(from.path);
  if (to.path === '/') {
    next({
      name: 'Login',
    });
  }
  if (from.path === '/login') {
    if (token == null) {
      next({
        name: 'Login',
      });
    }
  }
  next();
  // if (to.matched.some((r) => r.meta.auth)) {
  //   if (token) {
  //     next();
  //   } else {
  //     // next();
  //     next({
  //       path: '/login',
  //       query: { edirect: to.fullPath },
  //     });
  //   }
  // } else {
  //   if (token) {
  //     if (to.path === '/login') {
  //       router.go(-1);
  //     }
  //   }
  //   next();
  // }
});

export default router;
