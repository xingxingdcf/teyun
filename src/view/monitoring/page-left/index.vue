<template>
  <div class="page-left">
    <div class="top">
      <Statisticians></Statisticians>
    </div>
    <div class="bottom">
      <Monitor></Monitor>
    </div>
  </div>
</template>

<script setup lang="ts">
import Statisticians from './statisticians/index.vue'
import Monitor from './monitor/index.vue'
</script>

<style scoped lang="less">
.page-left {
  width: 1100px;
  height: 100%;
  padding-right: 10px;
  margin-left: 20px;
  background: url('@/assets/monitoring/left-bg.png');
  .top {
    width: 100%;

    background: linear-gradient(180deg, rgba(0, 24, 97, 0) 0%, #001861 95%, #002cab 100%);
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 82, 149, 0), rgba(0, 140, 255, 1)) 1 1;
  }
  .bottom {
    margin-top: 10px;
    width: 100%;
    height: 590px;
    background: linear-gradient(180deg, rgba(0, 24, 97, 0) 0%, #001861 95%, #002cab 100%);
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 82, 149, 0), rgba(0, 140, 255, 1)) 1 1;
  }
}
</style>
