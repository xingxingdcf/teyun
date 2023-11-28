<template>
  <div class="bg-img">
    <img src="@/assets/common/test-title.png" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.bg-img {
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171b57;
  background-image: url('@/assets/common/page-header-bg.png');
  z-index: 999;
  > img {
    width: 510px;
    height: 49px;
  }
}
</style>
