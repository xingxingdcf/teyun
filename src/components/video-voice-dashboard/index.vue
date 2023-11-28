<template>
  <div>
    <div class="video-window" :style="{ width, height }">
      <img class="test" src="@/assets/common/test-video.png" alt="" />
    </div>

    <div class="dashboard">
      <div class="video-icon icon" @click="handleVideoClick"></div>
      <div class="hangup-icon icon" @click="handleHangupClick"></div>
      <div class="audio-icon icon" @click="handleAudioClick"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  width?: string
  height?: string
}
withDefaults(defineProps<Props>(), {
  width: '750px',
  height: '470px'
})

const emits = defineEmits(['handleVideoClick', 'handleHangupClick', 'handleAudioClick'])
function handleVideoClick() {
  emits('handleVideoClick')
}
function handleHangupClick() {
  emits('handleHangupClick')
}
function handleAudioClick() {
  emits('handleAudioClick')
}
</script>

<style scoped lang="less">
.video-window {
  > img {
    width: 100%;
    height: 100%;
  }
}
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .video-icon {
    background: url('@/assets/common/video-icon.png');
  }
  .audio-icon {
    background: url('@/assets/common/audio-icon.png');
  }
  .hangup-icon {
    width: 86px;
    height: 66px;
    margin: 0 10px;
    background: url('@/assets/common/hangup-icon.png');
  }
}
</style>
