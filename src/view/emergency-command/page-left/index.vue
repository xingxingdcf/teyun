<template>
  <div class="page-left">
    <div class="top">
      <div class="btns">
        <div class="btn" :class="{ 'active-btn': activeChannel === 0 }" @click="changeChannel(0)">
          CCTV
        </div>
        <div class="btn" :class="{ 'active-btn': activeChannel === 1 }" @click="changeChannel(1)">
          远程货物监控
        </div>
      </div>
    </div>
    <div class="bottom">
      <VideoList class="video-list"></VideoList>
      <VideoScreen></VideoScreen>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VideoList from './video-list.vue'
import VideoScreen from './video-screen.vue'
const activeChannel = ref(0)

function changeChannel(index: number) {
  activeChannel.value = index
}
</script>

<style scoped lang="less">
.page-left {
  // display: flex;
  width: 1100px;
  height: 100%;
  margin-right: 40px;
}
.top {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .btns {
    display: flex;
    .btn {
      color: #89c4fd;
      line-height: 50px;
      text-align: center;
      margin: 0 10px;
      width: 183px;
      height: 50px;
      font-size: 20px;
      background: url('@/assets/common/btn.png') no-repeat;
      background-size: 100% 100%;
      background-size: cover;
    }
    .active-btn {
      color: #ffffff;
      background: url('@/assets/common/btn-active.png');
    }
  }
}

.bottom {
  display: flex;
  width: 100%;
  height: 880px;
  padding: 28px;
  background: url('@/assets/emergency/left-bg.png') no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  .video-list {
    margin-right: 75px;
  }
}
</style>
