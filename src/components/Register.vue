<template>
<div>
  <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px">
    <el-form-item label="账号" prop="name">
      <el-input v-model="registerForm.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerForm.email" placeholder="请输入注册邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="重复密码" prop="rePassword">
      <el-input v-model="registerForm.rePassword" type="password" placeholder="请确认密码"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="captcha">
      <el-input v-model="registerForm.captcha" placeholder="请输入验证码"></el-input>
      <img :src="captchaSrc"
        style="width: 40%;height: 42px;border-radius: 4px" @click="getCaptcha()" alt="图形验证码">
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
      <el-button type="primary"><router-link to="/login">去登录</router-link></el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import cookie from '@/plugins/cookie';
import { Message, Loading } from 'element-ui';

export default {
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        captcha: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur',
          },
        ],
        rePassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' },
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      captchaSrc: '',
      text: '',
    };
  },
  mounted() {
    this.makeId();
    this.initCaptcha();
  },
  methods: {
    makeId() {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.text = text;
    },
    initCaptcha() {
      this.captchaSrc = `${this.GLOBAL.BASE_URL}${this.GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
    getCaptcha() {
      this.makeId();
      this.captchaSrc = `${this.GLOBAL.BASE_URL}${this.GLOBAL.BASE_API}captcha?uuid=${this.text}`;
    },
    submitRegister(name, email, password, captcha) {
      this.axios({
        method: 'post',
        url: `${this.GLOBAL.BASE_API}register`,
        headers: {
          'x-auth-uuid': this.text,
        },
        data: {
          name,
          email,
          password,
          captcha,
        },
      }).then((res) => {
        if (res.data.code === 200) {
          cookie.setCookie('token', res.data.data.token);
          cookie.setCookie('hid', res.data.data.hid);
          Message({
            message: '注册成功, 请激活邮箱后登录',
            type: 'success',
            duration: 5 * 1000,
          });
          this.$router.push('/login');
        }
        const loadingInstance = Loading.service({ fullscreen: true });
        loadingInstance.close();
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Loading.service({ fullscreen: true });
          this.submitRegister(this.registerForm.name,
            this.registerForm.email, this.registerForm.password, this.registerForm.captcha);
          // console.log('submit!');
        } else {
          // eslint-disable-next-line
          console.log('error submit!!');
          return false;
        }
        return false;
      });
    },
  },
};
</script>
