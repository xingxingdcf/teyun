<template>
  <div>
    <div class="top">
      <div class="s-title">避碰预警统计</div>
      <div class="select">
        <el-select :teleported="false" v-model="value" class="el-select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="type">
          <div class="item">报警</div>
          <div class="item">记录</div>
        </div>
      </div>
    </div>

    <div class="main">
      <m-rankings></m-rankings>
      <m-list></m-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import MList from './m-list.vue'
import MRankings from './m-rankings.vue'

import { ref } from 'vue'

const value = ref('Option1')

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<style scoped lang="less">
@import '@/design/el/el-select.less';
.top {
  display: flex;
  justify-content: space-between;
  .select {
    display: flex;
    .el-select {
      width: 90px;
      height: 36px;
      background: #022056;
    }
    .type {
      display: flex;
      .item {
        color: #ffffff;
        margin-left: 10px;
        width: 90px;
        height: 36px;
        background: #022056;
        color: #00d6ff;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
        border-radius: 2px;
        border: 1px solid #0099ff;
      }
    }
  }
}
.s-title {
  padding-left: 35px;
  line-height: 45px;
  font-size: 20px;
  color: #ffffff;
  width: 210px;
  height: 45px;
  background: url('@/assets/monitoring/title-bg01.png');
}

.main {
  display: flex;
  justify-content: space-between;
}
</style>
