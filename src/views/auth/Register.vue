<template>
  <div>
    <register-component></register-component>
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<script>

import registerComponent from '@/components/Register.vue';

export default {
  components: {
    registerComponent,
  },
};
</script>
