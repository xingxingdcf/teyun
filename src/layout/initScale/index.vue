<template>
  <div class="dataScreen-container">
    <!-- <div class="menu"></div> -->
    <div class="dataScreen-content" ref="dataScreenRef">
      <PageHeader></PageHeader>
      <div class="dataScreen-main">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import PageHeader from '../header/index.vue'
const dataScreenRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    dataScreenRef.value.style.width = `3840px`
    dataScreenRef.value.style.height = `1080px`
  }
  window.addEventListener('resize', resize)
})

// 设置响应式
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
}

// 根据浏览器大小推断缩放比例
const getScale = (width = 3840, height = 1080) => {
  let ww = window.innerWidth / width
  let wh = window.innerHeight / height
  return ww < wh ? ww : wh
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})
</script>

<style lang="less">
@import '@/design/index.less';

.dataScreen-container {
  width: 100%;
  height: 100%;
  background: url('@/assets/experience/bg-img.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  .dataScreen-content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform-origin: left top;
  }
}

.dataScreen-main {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 100%;
}

.menu {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 54px;
  height: 90px;
  background: url('@/assets/experience/menu.png') no-repeat;
  z-index: 9999;
}
</style>
