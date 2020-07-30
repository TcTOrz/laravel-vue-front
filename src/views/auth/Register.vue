<!--
 * @Author: Li Jian
 * @Date: 2020-07-30 09:18:02
 * @LastEditTime: 2020-07-30 09:43:07
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Register.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div>
    <register-component></register-component>
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import registerComponent from '@/components/Register.vue';
import { Component } from 'vue-property-decorator';

@Component({ components: { registerComponent } })
export default class Register extends Vue {}
// export default Vue.extend({
//   components: {
//     registerComponent,
//   },
// });
</script>
