<template>
  <div>
    <el-input
      v-model="input1"
      class="el-input"
      size="large"
      placeholder="搜索"
      :prefix-icon="Search"
    />
    <div class="list">
      <el-scrollbar max-height="500px" style="padding: 0 20px 0 0">
        <div
          class="item"
          v-for="(item, index) in 20"
          @click="changeItem(index)"
          :class="{ 'active-item': activeItem === index }"
        >
          <div class="name">特运指挥中心(COSCO)</div>
          <img src="@/assets/monitoring/play-audio.png" v-if="activeItem === index" class="play" />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, component } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input1 = ref('')
const activeItem = ref(0)

function changeItem(index: number) {
  activeItem.value = index
}
</script>

<style scoped lang="less">
@import '@/design/el/el-input.less';
.list {
  margin-top: 10px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    color: #89c4fd;
    font-size: 14px;
    line-height: 36px;
    padding: 7px;
    cursor: pointer;
    .play {
      width: 20px;
      height: 20px;
    }
  }
  & .active-item {
    background: #005dff;
    box-shadow: 0px 7px 7px 0px rgba(0, 93, 255, 0.37);
    border-radius: 6px;

    color: #ffffff !important;
    font-size: 16px !important;
  }
}
</style>
