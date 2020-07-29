<!--
 * @Author: Li Jian
 * @Date: 2020-07-29 17:02:17
 * @LastEditTime: 2020-07-29 17:12:12
 * @LastEditors: Li Jian
 * @Description:
 * @FilePath: /water-environment-front/src/components/Test.vue
 * @Motto: MMMMMMMM
-->
<template>
<div>
  {{title}}
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Test extends Vue {
  @Prop({ type: String, default: '' })
  public title!:string
}
</script>
