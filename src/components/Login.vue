<template>
<div style="width: 50%">
  <h2>登录</h2>
  <div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item label="账号" prop="email">
        <el-input v-model="loginForm.email" placeholder="请输入登录邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" style="width: 100%" prop="captcha">
        <el-input style="width: 55%" v-model="loginForm.captcha" placeholder="请输入验证码">
        </el-input>
        <img :src="captchaSrc"
          style="width: 40%;height: 42px;border-radius: 4px"
          @click="getCaptcha()" alt="图形验证码">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <a href="http://127.0.0.1:9000/auth/github">
      <el-button type="success" class="login github_login">Github登录</el-button>
    </a>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// import axios from '@/plugins/axios';
import cookie from '@/plugins/cookie';
import { Message, Loading } from 'element-ui';

export default Vue.extend({
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
          {
            required: true, message: '请填写密码', trigger: 'blur',
          }, {
            type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur',
          },
        ],
        captcha: [
          {
            required: true, message: '请填写验证码', trigger: 'blur',
          },
        ],
      },
      captchaSrc: '', // 验证码地址
      text: '',
    };
  },
  methods: {
    submitForm(formName:string):void {
      // let _this = this;
      (this.$refs[formName] as any).validate((valid:boolean) => {
        if (valid) {
          Loading.service({ fullscreen: true });
          const { email, password, captcha } = this.loginForm;
          const auth = this.$route.query.auth ? this.$route.query.auth : '';
          (this as any).$axios({
            method: 'post',
            url: `${(this as any).GLOBAL.BASE_API}login`,
            headers: {
              'x-auth-uuid': this.text,
            },
            data: {
              email,
              password,
              captcha,
              auth,
            },
          }).then((res:any) => {
            if (res.data.code === 200) {
              cookie.setCookie('token', res.data.data.token);
              cookie.setCookie('hid', res.data.data.hid);
              this.$router.push((this as any).$route.query.redirect || '/');
              Message({
                message: '登陆成功',
                type: 'success',
                duration: 5 * 1000,
              });
            }
            const loadingInstance = Loading.service({ fullscreen: true });
            loadingInstance.close();
            // console.log(res);
          });
          // console.log(this.$route);
          // alert(this.$route);
        } else {
          console.log('error submit!!');
          // return false;
        }
      });
    },
    resetForm(formName:string):void {
      (this.$refs[formName] as any).resetFields();
    },
    makeId() {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.text = text;
    },
    initCaptcha() {
      this.captchaSrc = `${(this as any).GLOBAL.BASE_URL}${(this as any).GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
    getCaptcha() {
      this.makeId();
      this.captchaSrc = `${(this as any).GLOBAL.BASE_URL}${(this as any).GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
  },
  mounted() {
    this.makeId();
    this.initCaptcha();
  },
});
</script>
