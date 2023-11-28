<template>
  <div class="list">
    <div class="titles">
      <div class="title">报警统计排名</div>
      <div class="title">报警</div>
      <div class="title">记录</div>
    </div>
    <div
      class="item"
      :class="{ 'active-item': activeItem === index }"
      v-for="(item, index) in 10"
      :key="index"
      @click="changeItem(index)"
    >
      <div class="index">{{ index + 1 }}</div>
      <div class="name">大富</div>
      <div class="jing">1</div>
      <div class="jilv">1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeItem = ref(0)

function changeItem(index: number) {
  activeItem.value = index
}
</script>

<style scoped lang="less">
.list {
  margin-top: 15px;
  width: 230px;
  padding-left: 16px;

  .item {
    display: flex;
    font-size: 16px;
    color: #ffffff;
    height: 43px;
    line-height: 43px;
    background: linear-gradient(136deg, rgba(0, 126, 254, 0.56) 0%, rgba(12, 80, 199, 0) 100%);
    border-top: 1px solid;
    cursor: pointer;
    .index {
      width: 23px;
      text-align: center;
    }
    .name {
      width: 106px;
    }
    .jilv {
      margin-left: 50px;
    }
  }
}
.active-item {
  background: url('@/assets/monitoring/rankings-bg.png') !important;
}

.titles {
  display: flex;
  justify-content: space-around;
  background-color: #0257cc;
  padding: 12px 10px;
  font-size: 14px;
}
.title {
  font-size: 14px;
  color: #1ffff9;
}
</style>
