<!--
 * @Author: Li Jian
 * @Date: 2020-07-29 16:17:32
 * @LastEditTime: 2020-07-30 15:54:29
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Login.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div class="login-class">
    <login-component></login-component>
    <section>
      没有账号？
      <router-link to="/register">{{msgRegister}}</router-link>
      <div style="color: blue; font-size: 20px; cursor:pointer;" @click="clickme()">点我点我</div>
      <test-component :title="title"></test-component>
      <transition name="fade">
        <p style="color: blue; font-size: 30px;" v-if="show">hello</p>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import LoginComponent from '@/components/Login.vue';
import TestComponent from '@/components/Test.vue';

@Component({ components: { LoginComponent, TestComponent } })
export default class Login extends Vue {
  msgRegister: string = '注册';

  title:string = '我是props测试';

  show:boolean = false;

  clickme(): void{
    this.show = true;
    this.msgRegister = '点我注册';
    this.title = '我是props测试，别点错哦!';
    setTimeout(() => {
      this.show = false;
      this.reset();
    }, 3000);
  }

  reset(): void{
    this.msgRegister = '注册';
    this.title = '我是props测试 ';
  }
}

// export default class Login{

// }

// export default {
//   data() {
//     return {};
//   },
//   components: {
//     LoginComponent,
//   },
// };
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .login-class {
    height: 200px;
  }
  .login-class::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  section {
    text-align: center;
  }
</style>
