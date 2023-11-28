<template>
  <div class="screen">
    <el-row>
      <!-- 第一个盒子，占满一行 -->
      <el-col :span="24">
        <div class="first-video-box">
          <img src="@/assets/common/test2.png" alt="" />
        </div>
      </el-col>

      <!-- 接下来的四个盒子，每行显示两个 -->
      <el-col v-for="(item, index) in 4" :key="index" :span="12">
        <div
          class="video-box"
          :style="{
            marginRight: index % 2 === 0 ? '4px' : '',
            marginLeft: index % 2 !== 0 ? '4px' : ''
          }"
        >
          <img src="@/assets/common/test2.png" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.screen {
  width: 750px;
}

.first-video-box {
  height: 400px;
  margin-bottom: 8px;
  > img {
    width: 100%;
    height: 100%;
  }
}
.video-box {
  text-align: center;
  height: 200px;
  margin-bottom: 8px;
  > img {
    width: 100%;
    height: 100%;
  }
}
</style>
