<template>
  <div>
    <login-component></login-component>
    没有账号？
    <router-link to="/register">注册</router-link>
  </div>
</template>

<script>
import LoginComponent from '@/components/Login.vue';

export default {
  data() {
    return {};
  },
  components: {
    LoginComponent,
  },
};
</script>
