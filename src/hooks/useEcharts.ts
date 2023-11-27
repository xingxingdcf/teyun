import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

export function useEcharts(domEl: HTMLElement, theme = 'dark') {
  // 初始化echarts
  const echartsInstance = echarts.init(domEl, theme, { renderer: 'svg' })

  // 设置options
  const setOptions = (options: EChartsOption) => {
    echartsInstance.setOption(options)
  }

  // 监听window尺寸的变化
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  return [setOptions]
}
