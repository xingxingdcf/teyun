<template>
  <initScale>
    <el-config-provider :locale="locale">
      <router-view class="router-view-transition"></router-view>
    </el-config-provider>
  </initScale>
</template>

<script setup lang="ts">
import initScale from '@/layout/initScale/index.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
</script>
