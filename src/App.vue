<!--
 * @Author: Li Jian
 * @Date: 2020-07-29 15:00:46
 * @LastEditTime: 2020-07-30 15:06:18
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

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

</style>
