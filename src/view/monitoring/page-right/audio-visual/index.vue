<template>
  <div class="audio-visual">
    <div class="btns">
      <div
        class="item"
        :class="{ 'active-item': activeBtn === index }"
        v-for="(item, index) in btns"
        :key="index"
        @click="changeItem(index)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="dashboard">
      <VideoVoiceDashboard width="482px" height="300px"></VideoVoiceDashboard>

      <div class="list">
        <VideoVoiceList :maxHeight="'300px'"></VideoVoiceList>
      </div>
    </div>
  </div>
</template>
CCTV

<script setup lang="ts">
import { ref } from 'vue'
import VideoVoiceList from '@/components/video-voice-list/index.vue'
import VideoVoiceDashboard from '@/components/video-voice-dashboard/index.vue'
const activeBtn = ref(0)

const btns = [
  { name: '双向语音视频', index: 0 },
  { name: 'CCTV', index: 0 },
  { name: '实时监控', index: 0 }
]

function changeItem(index: number) {
  activeBtn.value = index
}
</script>

<style scoped lang="less">
.audio-visual {
  width: 100%;
  height: 500px;
  padding: 0 16px;
  background: url('@/assets/monitoring/video-bg.png');
  .btns {
    display: flex;
    .item {
      width: 170px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #89c4fd;
      font-size: 20px;
      margin-right: 20px;
      background: url('@/assets/monitoring/video-btn.png') no-repeat;
      cursor: pointer;
    }
  }
}

.active-item {
  background: url('@/assets/monitoring/video-btn-active.png') no-repeat !important;
  color: #ffffff !important;
}

.dashboard {
  display: flex;
  padding: 40px 0 0 20px;
}
.list {
  margin-left: 15px;
}
</style>
