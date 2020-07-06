<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/login">Go to Home</router-link>
    <el-button type="primary" @click="test()">go login</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ val }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      val: 'origin',
    };
  },
  mounted() {
    this.getTest();
  },
  methods: {
    getTest() {
      this.$axios({
        method: 'get',
        url: `${this.GLOBAL.BASE_API}api/val`,
      }).then((res) => {
        this.val = res.data;
      });
    },
    test() {
      this.$router.push('/login');
    },
  },
};
</script>
