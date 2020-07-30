<!--
 * @Author: Li Jian
 * @Date: 2020-07-29 15:00:46
 * @LastEditTime: 2020-07-30 09:33:09
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/App.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <router-link to="/about">Go to Foo</router-link>
    <router-link to="/home">Go to Bar</router-link> -->
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
export default Vue.extend({
  name: 'app',
  components: {
    // HelloWorld,
  },
});
</script>

<style>
body {
  margin: 0;
}
#app {
  height: 100%;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
