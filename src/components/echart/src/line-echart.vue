<template>
  <div class="line-echart">
    <base-echart :options="options" :width="width" :height="height"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseEchart from '@/components/echart'
import type { EChartsOption } from 'echarts'

const props = defineProps<{
  labels: string[]
  values: string[]
  width: string
  height: string
}>()

const options = computed<EChartsOption>(() => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#001140'
        }
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        axisLabel: {
          color: '#05A7FA'
        },
        type: 'category',
        boundaryGap: false,

        data: props.labels
      }
    ],
    yAxis: [
      {
        axisLabel: {
          color: '#05A7FA'
        },
        type: 'value',

        boundaryGap: [0, '30%']
      }
    ],
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#1C60FE',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
        },
        areaStyle: {},
        data: ['4', '5', '4', '5', '1', '2', '10']
      },
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#F8BA4C',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 2 }, { xAxis: 1 }, { xAxis: 3 }, { xAxis: 6 }]
        },
        areaStyle: {},
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
