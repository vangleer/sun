<template>
  <div class="sun-demo-stepper">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Stepper" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <sun-cell title="基础用法">
        <sun-stepper v-model="value" />
      </sun-cell>
    </div>
    <!-- 设置步长 -->
    <div class="sun-demo-block">
      <sun-cell title="设置步长">
        <sun-stepper v-model="value2" step="3" />
      </sun-cell>
    </div>
    <!-- 限制输入范围 -->
    <div class="sun-demo-block">
      <sun-cell title="限制输入范围">
        <sun-stepper v-model="value3" min="5" max="8" />
      </sun-cell>
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <sun-cell title="禁用状态">
        <sun-stepper v-model="value4" disabled />
      </sun-cell>
    </div>
    <!-- 禁用输入框 -->
    <div class="sun-demo-block">
      <sun-cell title="禁用输入框">
        <sun-stepper v-model="value" disable-input />
      </sun-cell>
    </div>

    <!-- 自定义大小 -->
    <div class="sun-demo-block">
      <sun-cell title="自定义大小">
        <sun-stepper v-model="value" input-width="40px" button-size="32px" />
      </sun-cell>
    </div>
    <!-- 圆角风格 -->
    <div class="sun-demo-block">
      <sun-cell title="圆角风格">
        <sun-stepper v-model="value" theme="round" button-size="22" disable-input />
      </sun-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 4,
        value2: 2,
        value3: 6,
        value4: 4,
        value5: 4,
        value6: 4,
      }
    }
  }
</script>

<style lang="less">
  .sun-demo-stepper {
    padding-top: 49px;
  }
</style>