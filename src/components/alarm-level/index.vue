<template>
  <div class="list">
    <div class="item" :class="{ box1: value >= 1 }"></div>
    <div class="item" :class="{ box2: value >= 2 }"></div>
    <div class="item" :class="{ box3: value >= 3 }"></div>
    <div class="text" :style="{ color: formatText(value).color }">{{ formatText(value).text }}</div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  value: number | string
}
const props = withDefaults(defineProps<Props>(), {
  value: 0
})

function formatText(value: string | number) {
  let initText = {
    text: '',
    color: '#ffffff'
  }

  if (value == 1) {
    initText.text = '一级'
    initText.color = '#FFD300'
  } else if (value == 2) {
    initText.text = '二级'
    initText.color = '#FF8C00'
  } else if (value >= 3) {
    initText.text = '三级'
    initText.color = '#FF4949'
  } else {
    initText.text = '零级'
  }
  return initText
}
</script>

<style scoped lang="less">
.list {
  display: flex;
  align-items: center;
}
.item {
  width: 40px;
  height: 8px;
  background: #070707;
  border-radius: 1px;
  margin: 0 1px;
}
.text {
  font-size: 14px;
  margin-left: 10px;
}
.box1 {
  background: linear-gradient(270deg, #ffc35e 0%, #feff8a 100%);
}
.box2 {
  background: linear-gradient(270deg, #ff6900 0%, #ffa600 100%);
}
.box3 {
  background: linear-gradient(270deg, #d70000 0%, #d32d00 100%);
}
</style>
