<template>
  <div>
    <div class="w-header">
      <div class="title">船员行为感知预警</div>
      <div class="select">
        <el-select :teleported="false" v-model="value" class="el-select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div class="date">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :teleported="false"
          />
        </div>
      </div>
    </div>
    <div class="aware-warn">
      <a-type></a-type>
      <a-list></a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AType from './a-type.vue'
import AList from './a-list.vue'

const value = ref()
const value1 = ref()

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
// @import '@/design/el/el-date-time.less';
.w-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    padding-left: 35px;
    line-height: 45px;
    font-size: 20px;
    width: 210px;
    height: 45px;
    color: #ffffff;
    background: url('@/assets/monitoring/title-bg01.png');
  }
  .select {
    display: flex;
    .date {
      margin-left: 30px;
    }
  }
}
.aware-warn {
  display: flex;
  width: 100%;
}
</style>
