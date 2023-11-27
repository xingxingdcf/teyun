<template>
  <div>
    <div class="w-title">船员行为感知预警</div>
    <div class="aware-warn">
      <a-type></a-type>
      <a-list></a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import AType from './a-type.vue'
import AList from './a-list.vue'
</script>

<style scoped lang="less">
.w-title {
  padding-left: 35px;
  line-height: 45px;
  font-size: 20px;
  color: #ffffff;
  width: 210px;
  height: 45px;
  background: url('@/assets/monitoring/title-bg01.png');
}
.aware-warn {
  display: flex;
  width: 100%;
}
</style>
