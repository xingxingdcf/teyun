d
<template>
  <div class="monitoring">
    <pageLeft></pageLeft>

    <pageCenter></pageCenter>

    <pageRight></pageRight>
  </div>
</template>

<script setup lang="ts">
import pageLeft from './page-left/index.vue'
import pageCenter from './page-center/index.vue'
import pageRight from './page-right/index.vue'
</script>

<style scoped lang="less">
.monitoring {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: url('@/assets/emergency/bg-img.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
}
</style>
