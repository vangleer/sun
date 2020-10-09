<template>
  <div class="sun-demo-switch">
    <sun-nav-bar title="Switch" left-arrow @left-click="$router.back()" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-switch v-model="checked" />
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">禁用状态</h2>
      <sun-switch v-model="checked2" disabled />
    </div>

    <!-- 加载状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">加载状态</h2>
      <sun-switch v-model="checked3" loading />
    </div>


    <!-- 自定义大小 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义大小</h2>
      <sun-switch v-model="checked4" size="24px" />
    </div>
    <!-- 自定义颜色 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义颜色</h2>
      <sun-switch v-model="checked5" active-color="#07c160" inactive-color="#ee0a24" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
      }
    }
  }
</script>

<style lang="less">
  .sun-demo-switch {
    margin-top: 49px;
    min-height: 96vh;

    .sun-demo-nav-title {
      padding: 16px 3px;
      margin: 0;
    }

    .sun-demo-block {
      padding: 0 16px;
      margin-bottom: 10px;
    }
  }
</style>