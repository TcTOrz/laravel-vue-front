<!--
 * @Author: Li Jian
 * @Date: 2020-07-21 09:30:51
 * @LastEditTime: 2020-07-21 09:57:19
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/views/auth/Verify.vue
 * @Motto: MMMMMMMM
-->
<template>
  <div>Verify: 8bo5KPdO6qngFa50ndrt4EVMyzRkWY
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item label="账号" prop="email">
        <el-input v-model="loginForm.email" size="large" placeholder="请输入登录邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" size="large" type="password" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item label="验证码" style="width: 100%" prop="captcha">
        <el-input style="width: 55%" v-model="loginForm.captcha" size="large"  placeholder="请输入验证码">
        </el-input>
        <img :src="captchaSrc" style="width: 40%;height: 42px;border-radius: 4px"
            @click="getCaptcha()" alt="图形验证码">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <!--<el-button @click="resetForm('loginForm')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import cookie from '@/plugins/cookie';
import { Message, Loading } from 'element-ui';

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
        captcha: '',
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          {
            type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur',
          },
        ],
        captcha: [
          { required: true, message: '请填写验证码', trigger: 'blur' },
        ],
      },
      captchaSrc: '', // 验证码地址
      text: '',
    };
  },
  mounted() {
    // this.test();
    this.makeId();
    this.initCaptcha();
  },
  methods: {
    test() {
      // eslint-disable-next-line no-alert
      alert(this.$route.query.auth);
    },
    /** 初始化验证码 */
    initCaptcha() {
      this.captchaSrc = `${this.GLOBAL.BASE_URL}${this.GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
    /** 点击获取新的验证码 */
    getCaptcha() {
      this.makeId();
      this.captchaSrc = `${this.GLOBAL.BASE_URL}${this.GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
    makeId() {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.text = text;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Loading.service({ fullscreen: true });
          const { email, password, captcha } = this.loginForm;
          const auth = this.$route.query.auth ? this.$route.query.auth : '';
          this.axios({
            method: 'POST',
            url: `${this.GLOBAL.BASE_API}login`,
            headers: {
              'x-auth-uuid': this.text,
            },
            data: {
              email,
              password,
              captcha,
              auth,
            },
          }).then((res) => {
            console.log(res);
            if (res.data.code === 200) {
              cookie.setCookie('token', res.data.data.token);
              cookie.setCookie('hid', res.data.data.hid);
              this.$router.push(this.$route.query.redirect || '/');
              Message({
                message: '登陆成功',
                type: 'success',
                duration: 5 * 1000,
              });
              const loadingInstance = Loading.service({ fullscreen: true });
              loadingInstance.close();
            } else {
              console.log('error submit!!');
              // return false;
            }
          });
        }
      });
    },
  },
};
</script>
