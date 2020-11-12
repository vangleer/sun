<template>
  <div class="sun-demo-stepper">
    <sun-nav-bar left-arrow @click-left="$router.back()" title="Stepper" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('common.basicUsage')">
        <sun-stepper v-model="value" />
      </sun-cell>
    </div>
    <!-- 设置步长 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('sunStepper.step')">
        <sun-stepper v-model="value2" step="3" />
      </sun-cell>
    </div>
    <!-- 限制输入范围 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('sunStepper.range')">
        <sun-stepper v-model="value3" min="5" max="8" />
      </sun-cell>
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('common.disabled')">
        <sun-stepper v-model="value4" disabled />
      </sun-cell>
    </div>
    <!-- 禁用输入框 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('sunStepper.disableInput')">
        <sun-stepper v-model="value5" disable-input />
      </sun-cell>
    </div>

    <!-- 自定义大小 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('sunStepper.customSize')">
        <sun-stepper v-model="value6" input-width="40px" button-size="32px" />
      </sun-cell>
    </div>
    <!-- 圆角风格 -->
    <div class="sun-demo-block">
      <sun-cell :title="$t('sunStepper.roundTheme')">
        <sun-stepper v-model="value7" theme="round" button-size="22" disable-input />
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
        value4: 3,
        value5: 3,
        value6: 2,
        value7: 6,
      }
    }
  }
</script>

<style lang="less">
.sun-demo-stepper .sun-demo-block {
  background-color: #fff;
}
</style>