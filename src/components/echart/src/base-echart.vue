<template>
  <div class="base-echart">
    <div class="echart" ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import type { EChartsOption } from 'echarts'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    options: () => ({})
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const [setOptions] = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
