<template>
  <div class="statisticians">
    <s-date></s-date>
    <div class="chart">
      <s-chart></s-chart>
    </div>
  </div>
</template>

<script setup lang="ts">
import SChart from './s-chart.vue'
import SDate from './s-date.vue'
</script>

<style scoped lang="less">
.statisticians {
  display: flex;
  justify-content: space-between;
}

.chart {
  // width: 100%;
}
</style>
