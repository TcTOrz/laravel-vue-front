<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-slider v-model="value1"></el-slider>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      input: '',
      value1: 0,
    };
  },
};
</script>
