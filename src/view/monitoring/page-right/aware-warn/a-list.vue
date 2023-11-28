<template>
  <div>
    <el-tabs v-model="activeTab" class="el-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabsList"
        :key="index"
        :label="item.label"
        :name="item.name"
      >
        <div class="table-title">
          <span class="title1">船舶</span>
          <span class="title2">报警等级</span>
          <span class="title3">应答状态</span>
          <span class="title4">报警时间</span>
        </div>
        <div class="item" v-for="(item, index) in listData" :key="index">
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <AlarmLevel class="level" :value="item.level"></AlarmLevel>
            <div class="status">{{ item.status ? 'Yes' : 'No' }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
          <img src="@/assets/monitoring/more-01.png" alt="" class="more" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AlarmLevel from '@/components/alarm-level/index.vue'
import type { TabsPaneContext } from 'element-plus'

const activeTab = ref('船长值班不规范')

const tabsList = [
  {
    label: '船长值班不规范',
    name: '船长值班不规范',
    value: 20
  },
  {
    label: '船员值班不规范',
    name: '船员值班不规范',
    value: 20
  },
  {
    label: '瞭望不规范',
    name: '瞭望不规范',
    value: 20
  },
  {
    label: '驾驶台值班人数不足',
    name: '驾驶台值班人数不足',
    value: 20
  }
]
const listData = [
  {
    name: '长安城',
    level: 3,
    status: true,
    time: '2023-11-14-00:27:32'
  },
  {
    name: '长安城',
    level: 2,
    status: false,
    time: '2023-11-14-00:27:32'
  },
  {
    name: '长安城',
    level: 1,
    status: false,
    time: '2023-11-14-00:27:32'
  },
  {
    name: '长安城',
    level: 3,
    status: false,
    time: '2023-11-14-00:27:32'
  },
  {
    name: '长安城',
    level: 0,
    status: false,
    time: '2023-11-14-00:27:32'
  },
  {
    name: '长安城',
    level: 1,
    status: false,
    time: '2023-11-14-00:27:32'
  }
]

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="less">
@import '@/design/el/el-tabs.less';
.table-title {
  display: flex;
  font-size: 14px;
  color: #ffffff;
  padding: 15px 14px 10px;
  background-color: #010f29;
  .title2 {
    margin-left: 135px;
  }
  .title3 {
    margin-left: 90px;
  }
  .title4 {
    margin-left: 80px;
  }
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 750px;

  padding: 10px 18px;
  background: rgba(0, 43, 116, 0.32);
  border-top: 1px solid #0c67db;
  font-size: 14px;
  .info {
    display: flex;
    align-items: center;

    .level {
      margin-left: 75px;
    }
    .status {
      margin-left: 46px;
      width: 38px;
      height: 18px;
      font-size: 12px;
      text-align: center;
      line-height: 18px;
      background-color: #c40000;
      border-radius: 2px;
    }
    .time {
      margin-left: 50px;
      font-size: 14px;
    }
  }
  > img {
    cursor: pointer;
  }
}
</style>
