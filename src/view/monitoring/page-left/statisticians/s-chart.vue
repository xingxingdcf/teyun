<template>
  <div>
    <div class="top">
      <div class="s-title">避碰预警统计</div>
      <div class="select">
        <div class="title1">
          <div class="line line1"></div>
          <div>记录</div>
        </div>
        <div class="title2">
          <div class="line line2"></div>
          <div>报警</div>
        </div>
        <div class="date">
          <el-date-picker
            class="el-date-editor"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            popper-class="date-style"
            :teleported="false"
          />
          <el-date-picker
            class="el-date-editor"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            popper-class="date-style"
            :teleported="false"
          />
        </div>
      </div>
    </div>
    <div class="chart">
      <line-echart
        width="680px"
        height="270px"
        :labels="showGoodsCategorySale.labels"
        :values="showGoodsCategorySale.values"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import LineEchart from '@/components/echart/src/line-echart.vue'

const value1 = ref(0)
const showGoodsCategorySale = reactive({
  labels: [
    '2023年05月',
    '2023年05月',
    '2023年05月',
    '2023年05月',
    '2023年05月',
    '2023年05月',
    '2023年05月'
  ],
  values: ['1', '2', '10', '4', '5', '4', '5']
})
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
}
.s-title {
  padding-left: 35px;
  line-height: 45px;
  font-size: 20px;
  color: #ffffff;
  width: 210px;
  height: 45px;
  background: url('@/assets/monitoring/title-bg01.png');
  .chart {
    margin-right: 20px;
    width: 680px;
    height: 280px;
  }
}
.select {
  display: flex;
  .line {
    margin-right: 4px;
    width: 16px;
    height: 4px;
    border-radius: 2px;
    background-color: #1c60fe;
    .line2 {
      background-color: #f8ba4c !important;
    }
  }
  .title1,
  .title2 {
    display: flex;
    align-items: center;
  }
  .title1 {
    color: #1c60fe;
  }
  .title2 {
    margin-left: 20px;
    color: #f8ba4c;
  }
}
.date {
  display: flex;
  align-items: center;
  margin-left: 22px;
  :deep(.el-date-editor) {
    width: 100px;
    height: 36px;
    background-color: #1c60fe;
  }
}
.date-style {
  background-color: #1c60fe;
}
</style>
