<!--
 * @Author: Li Jian
 * @Date: 2020-07-30 09:18:02
 * @LastEditTime: 2020-07-30 23:13:34
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Register.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div class="register-bg">
    <div class="register-class">
      <register-component></register-component>
    </div>
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
  // .register-class {
  //   min-width: 230px;
  //   max-width: 550px;
  //   height: 200px;
  //   margin: 0 auto;
  // }
  // .register-class::before {
  //   content: '';
  //   display: inline-block;
  //   vertical-align: middle;
  //   height: 100%;
  // }
  .register-bg {
    width: 100%;
    height: 100%;
    background-image: url(../../assets/register.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .register-class {
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    top: 23%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    border-radius: 8px;
    padding: 10px 20px;
    box-sizing: border-box;
    z-index: 2;
  }
  .register-class::before {
    content: '';
    background-image: url(../../assets/register.jpg);
    background-attachment: fixed;
    background-size: cover;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);
    position: absolute;
    z-index: -1;
    background-position: center top;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
