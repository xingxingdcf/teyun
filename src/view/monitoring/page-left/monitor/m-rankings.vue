<template>
  <div class="list">
    <div
      class="item"
      :class="{ 'active-item': activeItem === index }"
      v-for="(item, index) in 10"
      :key="index"
      @click="changeItem(index)"
    >
      <div class="index">{{ index + 1 }}</div>
      <div class="name">大富</div>
      <div class="jing"></div>
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
  }
}
.active-item {
  background: url('@/assets/monitoring/rankings-bg.png') !important;
}
</style>
