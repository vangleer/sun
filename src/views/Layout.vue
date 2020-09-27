<template>
  <div class="sun-demo-layout">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Col" style="background-color: #fff;" />
    <!-- 基础展示 -->
    <div class="sun-demo-block">
      <!-- Layout 组件提供了<code>24列栅格</code>，通过在<code>Col</code>上添加<code>span</code>属性设置列所占的宽度百分比
此外，添加<code>offset</code>属性可以设置列的偏移宽度，计算方式与 span 相同 -->
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <sun-row>
        <sun-col span="8">span: 8</sun-col>
        <sun-col span="8">span: 8</sun-col>
        <sun-col span="8">span: 8</sun-col>
      </sun-row>

      <sun-row>
        <sun-col span="4">span: 4</sun-col>
        <sun-col span="10" offset="4">offset: 4, span: 10</sun-col>
      </sun-row>

      <sun-row>
        <sun-col offset="12" span="12">offset: 12, span: 12</sun-col>
      </sun-row>
    </div>

    <!-- 设置列元素间距 -->
    <div class="sun-demo-block">
      <!-- 通过<code>gutter</code>属性可以设置列元素之间的间距，默认间距为 0 -->
      <h2 class="sun-demo-nav-title">设置列元素间距</h2>
      <sun-row gutter="20">
        <sun-col span="8">span: 8</sun-col>
        <sun-col span="8">span: 8</sun-col>
        <sun-col span="8">span: 8</sun-col>
      </sun-row>
    </div>

    <!-- Flex 布局 -->
    <div class="sun-demo-block">
      <!-- 将 <code>type</code> 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐 -->
      <h2 class="sun-demo-nav-title">Flex 布局</h2>
      <!-- 左对齐 -->
      <sun-row type="flex">
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
      </sun-row>

      <!-- 居中 -->
      <sun-row type="flex" justify="center">
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
      </sun-row>

      <!-- 右对齐 -->
      <sun-row type="flex" justify="end">
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
      </sun-row>

      <!-- 两端对齐 -->
      <sun-row type="flex" justify="space-between">
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
      </sun-row>

      <!-- 每个元素的两侧间隔相等 -->
      <sun-row type="flex" justify="space-around">
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
        <sun-col span="6">span: 6</sun-col>
      </sun-row>
    </div>
  </div>
</template>

<script>
  import data from '../assets/data/icons.js'
  import Clipboard from 'clipboard'
  export default {
    data() {
      return {
        tabList: ['用法示例', '基础图标', '线框风格', '实底风格'],
        currentIndex: 0,
        baseIcon: data.baseIcon,
        lineStyleIcon: data.lineStyleIcon,
        solidStyleIcon: data.solidStyleIcon,
      }
    },
    mounted() {
      console.log(this.baseIcon)
    },
    methods: {
      handleTabClick(index) {
        this.currentIndex = index
      },

      handleIconClick(item) {
        var clipboard = new Clipboard('#' + item, {
          text: function () {
            return `<sun-icon name="${item}" />`
          },
        })

        clipboard.on('success', (e) => {
          this.$message.success({
            message: `复制成功: <sun-icon name="${item}" />`,
            border: true,
          })
          clipboard.destroy() // 释放内存
        })
        clipboard.on('error', (e) => {
          this.$message.warning({
            message: `该手机不支持自动复制`,
            border: true,
          })
          clipboard.destroy() // 释放内存
        })
      },
    },
  }
</script>

<style lang="less">
  .sun-demo-layout {
    padding-top: 49px;

    .sun-demo-block {
      padding: 0 16px;
      overflow: hidden;
    }

    .sun-col {
      line-height: 30px;
      text-align: center;
      background-color: #39a9ed;
      color: #fff;
      margin-bottom: 10px;
    }

    .sun-row>.sun-col:nth-child(2n) {
      opacity: 0.6;
    }
  }
</style>