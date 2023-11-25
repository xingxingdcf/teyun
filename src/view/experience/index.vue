<template>
  <div class="experience">
    <div class="experience-header">
      <div class="header-ct">
        <div class="header-ct-title"></div>
      </div>
    </div>
    <div class="experience-main">
      <el-carousel
        type="card"
        height="650px"
        :autoplay="false"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item class="carousel-item" v-for="item in 3" :key="item">
          <div class="carousel-item">
            <img src="@/assets/experience/02.png" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="experience-footer">
      <div class="footer-title"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.experience {
  width: 100%;
}
.experience-header {
  display: flex;
  width: 100%;
  height: 150px;
  .header-ct {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    background: url('@/assets/experience/top.png') no-repeat;
    background-size: 100% 100%;
  }
  .header-ct-title {
    margin-top: 24px;
    width: 556px;
    height: 53px;
    background: url('@/assets/experience/top-title.png') no-repeat;
  }
}

.experience-main {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;

  .el-carousel {
    height: 650px;
    width: 60%;
  }
  .carousel-item {
    height: 650px;
    width: 1126px;
    > img {
      height: 650px;
      width: 1126px;
    }
  }
}

.experience-footer {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  .footer-title {
    width: 877px;
    height: 110px;
    background: url('@/assets/experience/bottom-title.png') no-repeat;
  }
}
</style>
