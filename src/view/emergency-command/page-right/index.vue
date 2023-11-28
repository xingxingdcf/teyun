<template>
  <div class="page-right">
    <div class="top">
      <div class="title">双向视频语音</div>
    </div>
    <div class="bottom">
      <VideoVoiceDashboard></VideoVoiceDashboard>
      <div class="list">
        <VideoVoiceList></VideoVoiceList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoVoiceDashboard from '@/components/video-voice-dashboard/index.vue'
import VideoVoiceList from '@/components/video-voice-list/index.vue'
</script>

<style scoped lang="less">
.page-right {
  height: 100%;
  width: 1100px;

  .top {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    width: 100%;
    height: 100px;
    background: url('@/assets/emergency/right-top-bg.png') no-repeat;
    .title {
      width: 396px;
      height: 52px;
      font-style: 20px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
      line-height: 52px;
      background: url('@/assets/emergency/right-title-bg.png') no-repeat;
    }
  }
}
.bottom {
  padding: 40px;
  height: 850px;
  display: flex;
  justify-content: space-between;
  background: url('@/assets/emergency/right-video-bg.png') no-repeat;
}
.list {
  margin-left: 18px;
  width: 275px;
}
</style>
