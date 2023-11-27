<template>
  <div class="list">
    <div
      v-for="(item, index) in 4"
      class="item"
      :class="{ 'active-item': index === activeIndex }"
      @click="changeItem(index)"
    >
      <div class="icon-border">
        <img src="@/assets/monitoring/aware-icon01.png" alt="" />
      </div>
      <div class="info">
        <div class="title">驾驶台工班组</div>
        <div class="statistic">
          <div>
            <span class="num">2</span>
            <span class="text">艘</span>
          </div>
          <div class="frequency">
            <span class="num">128</span>
            <span class="text">次</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)

function changeItem(index: number) {
  activeIndex.value = index
}
</script>

<style scoped lang="less">
.list {
  padding: 0 16px;
  margin-top: 15px;
  .item {
    display: flex;
    align-items: center;
    width: 285px;
    height: 90px;
    background: url('@/assets/monitoring/aware-bg.png');
    margin-bottom: 15px;
    cursor: pointer;
    .icon-border {
      width: 82px;
      height: 82px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      background: url('@/assets/monitoring/aware-item-bg.png');
      > img {
        width: 38px;
        height: 38px;
      }
    }
    .info {
      margin-left: 18px;
      color: #ffffff;
      font-size: 16px;
      .title {
        margin-bottom: 5px;

        color: #00f8ff;
      }
      .statistic {
        display: flex;
        .frequency {
          margin-left: 10px;
        }
        .num {
          font-size: 26px;
        }
      }
    }
  }
}

.active-item {
  width: 285px;
  height: 90px;
  background: url('@/assets/monitoring/aware-active-bg.png') no-repeat !important;
}
</style>
