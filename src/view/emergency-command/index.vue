<template>
  <div class="emergency">
    <div class="left">
      <line-echart :labels="showGoodsCategorySale.labels" :values="showGoodsCategorySale.values" />
    </div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import LineEchart from '@/components/echart/src/line-echart.vue'

const showGoodsCategorySale = reactive({
  labels: ['1', '2', '3', '4', '5'],
  values: ['1', '2', '3', '4', '5']
})
</script>

<style scoped lang="less">
.emergency {
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

.left {
  background-color: red;
  display: flex;
  width: 1100px;
  height: 100%;
  margin-right: 40px;
}
.center {
  display: flex;
  flex: 1;
  background-color: blue;
  height: 100%;
  margin-right: 40px;
}
.right {
  display: flex;
  background-color: green;
  height: 100%;
  width: 1100px;
}
</style>
