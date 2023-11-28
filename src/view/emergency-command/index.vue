<template>
  <div class="emergency">
    <page-left></page-left>
    <page-center></page-center>
    <page-right></page-right>
  </div>
</template>

<script setup lang="ts">
import PageLeft from './page-left/index.vue'
import PageCenter from './page-center/index.vue'
import PageRight from './page-right/index.vue'
</script>

<style scoped lang="less">
.emergency {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  // background: url('@/assets/emergency/bg-img.png');
  // background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  background-color: #171b57;
  padding: 20px;
}
</style>
