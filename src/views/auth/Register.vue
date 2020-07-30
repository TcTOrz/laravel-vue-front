<!--
 * @Author: Li Jian
 * @Date: 2020-07-30 09:18:02
 * @LastEditTime: 2020-07-30 15:59:24
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Register.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div class="register-class">
    <register-component></register-component>
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

<style lang="scss">
  .register-class {
    height: 200px;
  }
  .register-class::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
</style>
