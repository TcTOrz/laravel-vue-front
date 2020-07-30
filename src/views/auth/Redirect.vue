<!--
 * @Author: Li Jian
 * @Date: 2020-07-29 16:53:50
 * @LastEditTime: 2020-07-30 09:38:23
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Redirect.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div>授权成功，正在返回首页</div>
</template>

<script lang="ts">
import Vue from 'vue';
import cookie from '@/plugins/cookie';
import { Message } from 'element-ui';

export default Vue.extend({
  // 4rK6B8yvwm0Z2MN3GAe15bviD1dv0J5JPE9RQpaVYxDbkzqgnd
  // N9PvRrxyVmD68pAMpY72OLZQ43wzJa
  // http://127.0.0.1:9000/new/login?token=4rK6B8yvwm0Z2MN3GAe15bviD1dv0J5JPE9RQpaVYxDbkzqgnd&hid=N9PvRrxyVmD68pAMpY72OLZQ43wzJa
  mounted() {
    this.redirect();
  },
  methods: {
    redirect():void {
      const token = this.$route.query.secret;
      const hid = this.$route.query.secretId;
      cookie.setCookie('token', (token as string));
      cookie.setCookie('hid', (hid as string));
      this.$router.push((this as any).$route.query.redirect || '/');
      Message({
        message: '登陆成功',
        type: 'success',
        duration: 5 * 1000,
      });
    },
  },
});
</script>
