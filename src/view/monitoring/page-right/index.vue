<template>
  <div class="page-right">
    <div class="top">
      <aware-warn></aware-warn>
    </div>
    <div class="bottom">
      <audio-visual></audio-visual>
    </div>
  </div>
</template>

<script setup lang="ts">
import AwareWarn from './aware-warn/index.vue'
import AudioVisual from './audio-visual/index.vue'
</script>

<style scoped lang="less">
.page-right {
  background: linear-gradient(180deg, rgba(0, 24, 97, 0) 0%, #001861 95%, #002cab 100%);
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(0, 82, 149, 0), rgba(0, 140, 255, 1)) 1 1;
  height: 100%;
  width: 1100px;
  .top {
    width: 100%;
    margin-bottom: 10px;
    background: linear-gradient(180deg, rgba(0, 24, 97, 0) 0%, #001861 95%, #002cab 100%);
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 82, 149, 0), rgba(0, 140, 255, 1)) 1 1;
  }
  .bottom {
    height: 500px;
    background: linear-gradient(180deg, rgba(0, 24, 97, 0) 0%, #001861 95%, #002cab 100%);
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 82, 149, 0), rgba(0, 140, 255, 1)) 1 1;
  }
}
</style>
