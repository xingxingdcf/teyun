<template>
  <div>
    <div class="v-title">选择视频设备</div>
    <div
      class="item"
      v-for="(item, index) in 15"
      :key="index"
      :class="{ 'active-item': selectVideo.includes(index) }"
      @click="changeItem(index)"
    >
      <img class="video-icon" src="@/assets/emergency/video-icon.png" alt="" />
      <div class="title">驾驶台内左前</div>
      <img class="select-icon" src="@/assets/emergency/select-icon.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeItem = ref(0)
const videoList = [
  {
    name: '驾驶台内左前'
  },
  {
    name: '驾驶台内右前'
  },
  {
    name: '驾驶台内电台'
  }
]

const selectVideo = ref<number[]>([])
function changeItem(index: number) {
  const length = selectVideo.value.length
  const findIdx = selectVideo.value.findIndex((item) => item === index)

  if (findIdx === -1 && length < 5) {
    selectVideo.value.push(index)
  } else {
    selectVideo.value.splice(findIdx, 1)
  }
}
</script>

<style scoped lang="less">
.v-title {
  font-style: 16px;
  color: #89c4fd;
  margin-bottom: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 226px;
  height: 38px;
  color: #89c4fd;
  font-size: 16px;
  padding: 0 13px;
  border-radius: 4px;
  line-height: 38px;
  &.active-item {
    color: #ffffff;
    background: linear-gradient(90deg, #0096ff 0%, #326dff 100%);
  }

  .video-icon {
    width: 14px;
    height: 18px;
  }
  .select-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
