<!--
 * @Author: Li Jian
 * @Date: 2020-07-30 09:31:46
 * @LastEditTime: 2020-07-30 09:59:29
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/About.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-slider v-model="value1"></el-slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  data() {
    return {
      input: '',
      value1: 0,
    };
  },
});
</script>
