<template>
  <div class="list">
    <div v-for="item in 6" class="item">
      <div class="icon"></div>
      <div class="left">
        <div class="title">我方船舶</div>
        <div class="info">
          <span class="name">中远盛世</span>
          <span class="gps">经纬度: 1.62N,102.82E</span>
        </div>
      </div>
      <div class="right">
        <div class="record">
          <span class="type">记录</span>
          <span class="time">2023-11-12 16:23:26</span>

          <div class="cpa">
            <div class="d item">D：0.554</div>
            <div class="dcpa item">DCPA：0.380</div>
            <div class="tcpa item">TCPA：5.000</div>
          </div>
        </div>
        <div class="info">
          <div class="title">对方船舶</div>
          <div class="name">SEABIRD</div>
        </div>
      </div>

      <div class="more">
        <img src="@/assets/monitoring/more.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.list {
  > .item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 39, 109, 0.7);
    border-radius: 4px;
    border: 1px solid #00a4ff;
    width: 800px;
    height: 75px;
    margin-bottom: 10px;
    background: url('@/assets/monitoring/item-b.png') no-repeat;
    padding-right: 15px;
    .icon {
      position: absolute;
      top: 0;
      left: -40px;
      z-index: 9;
      width: 91px;
      height: 67px;
      background: url('@/assets/monitoring/icon.png');
    }

    .left {
      padding-left: 64px;
      color: #ffffff;
      .title {
        margin-bottom: 10px;
        color: #00feff;
      }
      .info {
        .name {
          font-size: 16px;
        }
        .gps {
          font-size: 12px;
        }
      }
    }
    .right {
      margin-left: 30px;
      display: flex;
      color: #ffffff;
      .record {
        .type {
          padding: 2px 7px;
          color: #011f61;
          font-size: 12px;
          background-color: #00e5ff;
          text-align: center;
          line-height: 18px;
        }
        .time {
          padding: 2px 7px;
          margin-left: 10px;
          font-size: 12px;
          background-color: #00aaff;
        }
        .cpa {
          display: flex;
          margin-top: 15px;
          font-size: 14px;
          .item {
            margin-right: 15px;
          }
        }
      }
      .info {
        margin-left: 32px;
        .title {
          font-size: 14px;
          color: #00feff;
        }

        .name {
          font-size: 16px;
          margin-top: 12px;
        }
      }
    }
    .more {
      cursor: pointer;
    }
  }
}
</style>
