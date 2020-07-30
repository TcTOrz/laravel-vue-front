<!--
 * @Author: Li Jian
 * @Date: 2020-07-20 12:06:38
 * @LastEditTime: 2020-07-30 10:00:21
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/Home.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/login">Go to Home</router-link>
    <el-button type="primary" @click="test()">go login</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ val }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import cookie from '@/plugins/cookie';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      val: 'origin',
    };
  },
  mounted() {
    this.getTest();
    // this.syncAuth();
  },
  methods: {
    // syncAuth() {
    //   const token = this.$route.query.secret;
    //   const hid = this.$route.query.secretId;
    //   console.log(token, hid);
    //   if (token && hid) {
    //     cookie.setCookie('token', token);
    //     cookie.setCookie('hid', hid);
    //     this.$router.push({
    //       path: '/',
    //     });
    //   }
    // },
    getTest() {
      // console.log(this.$axios);
      (this as any).$axios({
        method: 'get',
        url: `${(this as any).GLOBAL.BASE_API}api/val`,
      }).then((res:any) => {
        this.val = res.data;
      });
    },
    test() {
      this.$router.push('/login');
    },
  },
});
</script>
