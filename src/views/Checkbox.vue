<template>
  <div class="sun-demo-checkbox">
    <sun-nav-bar title="Checkbox" left-arrow @left-click="$router.back()" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-checkbox v-model="checked1">复选框</sun-checkbox>
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">禁用状态</h2>
      <sun-checkbox v-model="checked2" disabled>复选框</sun-checkbox>
      <sun-checkbox v-model="checked3" disabled>复选框</sun-checkbox>
    </div>

    <!-- 自定义形状 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义形状</h2>
      <sun-checkbox v-model="checked4" shape="square">自定义形状</sun-checkbox>
    </div>
    <!-- 自定义颜色 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义颜色</h2>
      <sun-checkbox v-model="checked5" checked-color="#07c160">自定义颜色</sun-checkbox>
    </div>
    <!-- 自定义大小 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义大小</h2>
      <sun-checkbox v-model="checked6" icon-size="24px">自定义大小</sun-checkbox>
    </div>
    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">禁用状态</h2>
      <sun-checkbox v-model="checked7">
        自定义图标
        <template #icon>
          <sun-icon name="plus"></sun-icon>
        </template>
      </sun-checkbox>
    </div>

    <!-- 禁用文本点击 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">禁用文本点击</h2>
      <sun-checkbox v-model="checked8" label-disabled>复选框</sun-checkbox>
    </div>
    <!-- 复选框组 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">复选框组</h2>
      <sun-checkbox-group v-model="result1">
        <sun-checkbox name="a">复选框 a</sun-checkbox>
        <sun-checkbox name="b">复选框 b</sun-checkbox>
        <sun-checkbox name="c">复选框 c</sun-checkbox>
      </sun-checkbox-group>
    </div>
    <!-- 水平排列 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">水平排列</h2>
      <sun-checkbox-group v-model="result2" direction="horizontal">
        <sun-checkbox name="a">复选框 a</sun-checkbox>
        <sun-checkbox name="b">复选框 b</sun-checkbox>
        <sun-checkbox name="c">复选框 c</sun-checkbox>
      </sun-checkbox-group>
    </div>
    <!-- 限制最大可选数 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">限制最大可选数</h2>
      <sun-checkbox-group v-model="result3" :max="2">
        <sun-checkbox name="a">复选框 a</sun-checkbox>
        <sun-checkbox name="b">复选框 b</sun-checkbox>
        <sun-checkbox name="c">复选框 c</sun-checkbox>
      </sun-checkbox-group>
    </div>

    <!-- 全选与反选 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">全选与反选</h2>
      <sun-checkbox-group v-model="result4" ref="checkboxGroup">
        <sun-checkbox name="a">复选框 a</sun-checkbox>
        <sun-checkbox name="b">复选框 b</sun-checkbox>
        <sun-checkbox name="c">复选框 c</sun-checkbox>
      </sun-checkbox-group>

     <div style="margin-top:10px;">
        <sun-button type="primary" @click="checkAll">全选</sun-button>
        <sun-button type="info" @click="toggleAll">反选</sun-button>
     </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false,
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        result1: [],
        result2: [],
        result3: [],
        result4: [],
      }
    },
    methods: {
      checkAll() {
        this.$refs.checkboxGroup.toggleAll(true);
      },
      toggleAll() {
        this.$refs.checkboxGroup.toggleAll();
      },
    }
  }
</script>

<style lang="less">
  .sun-demo-checkbox {
    background-color: #fff;
    .sun-demo-block {
      padding: 0 16px;
      margin-bottom: 10px;
    }
  }
</style>