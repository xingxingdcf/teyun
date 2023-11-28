<template>
  <div class="screen">
    <el-row>
      <!-- 第一个盒子，占满一行 -->
      <el-col :span="24">
        <div class="first-video-box">盒子1</div>
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
          盒子{{ index + 2 }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.screen {
  width: 718px;
}

.first-video-box {
  height: 400px;
  background-color: #eee;
  margin-bottom: 8px;
}
.video-box {
  background-color: #eee;
  text-align: center;
  height: 200px;
  margin-bottom: 8px;
}
</style>
