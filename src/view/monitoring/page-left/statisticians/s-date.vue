<template>
  <div>
    <div class="s-title">避碰预警统计</div>
    <!-- 统计 -->
    <div class="statistics">
      <div class="item" v-for="item in 4">
        <div class="date">2023.3.12~今</div>
        <div class="bottom">
          <div class="recording">
            <div class="value">59</div>
            <div class="title">记录量</div>
          </div>
          <div class="alarm">
            <div class="value warn">1</div>
            <div class="title">报警量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.s-title {
  line-height: 45px;
  font-size: 20px;
  color: #ffffff;
  width: 210px;
  height: 45px;
  background: url('@/assets/monitoring/title-bg01.png');
}
.statistics {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 26px;
  margin-left: 15px;
  width: 350px;
  > .item {
    width: 170px;
    height: 120px;
    margin-bottom: 6px;
    color: #ffffff;
    background: url('@/assets/monitoring/statistics-bg.png');
    > .date {
      margin-top: 10px;
      margin-left: 16px;
    }
    > .bottom {
      display: flex;
      justify-content: space-between;
      padding: 21px;
      text-align: center;
      > .recording .alarm {
        display: flex;
      }
      .value {
        font-size: 30px;
      }
      .title {
        margin-top: 10px;
        font-size: 14px;
      }
      .warn {
        color: #ffd81f;
      }
    }
  }
}
</style>
