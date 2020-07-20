<template>
  <div>授权成功，正在返回首页</div>
</template>

<script>
import cookie from '@/plugins/cookie';
import { Message } from 'element-ui';

export default {
  // 4rK6B8yvwm0Z2MN3GAe15bviD1dv0J5JPE9RQpaVYxDbkzqgnd
  // N9PvRrxyVmD68pAMpY72OLZQ43wzJa
  // http://127.0.0.1:9000/new/login?token=4rK6B8yvwm0Z2MN3GAe15bviD1dv0J5JPE9RQpaVYxDbkzqgnd&hid=N9PvRrxyVmD68pAMpY72OLZQ43wzJa
  mounted() {
    this.redirect();
  },
  methods: {
    redirect() {
      const token = this.$route.query.secret;
      const hid = this.$route.query.secretId;
      cookie.setCookie('token', token);
      cookie.setCookie('hid', hid);
      this.$router.push(this.$route.query.redirect || '/');
      Message({
        message: '登陆成功',
        type: 'success',
        duration: 5 * 1000,
      });
    },
  },
};
</script>
