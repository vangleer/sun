<template>
  <div class="sun-demo-tab-bar">
    <sun-nav-bar title="Tabbar" left-arrow @left-click="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active">
          <sun-tabbar-item icon="home">标签</sun-tabbar-item>
          <sun-tabbar-item icon="category">标签</sun-tabbar-item>
          <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
          <sun-tabbar-item icon="settings">标签</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 徽标提示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">徽标提示</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active2">
          <sun-tabbar-item icon="home">标签</sun-tabbar-item>
          <sun-tabbar-item icon="category" dot>标签</sun-tabbar-item>
          <sun-tabbar-item icon="friends" badge="20">标签</sun-tabbar-item>
          <sun-tabbar-item icon="settings" badge="5">标签</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义图标</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active3">
          <sun-tabbar-item icon="home">
            <span>自定义</span>
            <template #icon>
              <sun-icon name="star-f" />
            </template>
          </sun-tabbar-item>
          <sun-tabbar-item icon="category">标签</sun-tabbar-item>
          <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 自定义颜色 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义颜色</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
          <sun-tabbar-item icon="home">标签</sun-tabbar-item>
          <sun-tabbar-item icon="category">标签</sun-tabbar-item>
          <sun-tabbar-item icon="friends">标签</sun-tabbar-item>
          <sun-tabbar-item icon="settings">标签</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 监听事件切换 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">监听事件切换</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active5" @change="onChange">
          <sun-tabbar-item icon="home">标签1</sun-tabbar-item>
          <sun-tabbar-item icon="category">标签2</sun-tabbar-item>
          <sun-tabbar-item icon="friends">标签3</sun-tabbar-item>
          <sun-tabbar-item icon="settings">标签4</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        active2: 0,
        active3: 0,
        active4: 0,
        active5: 0,
      }
    },
    methods: {
      onChange(index) {
        this.$message({
          type: 'success',
          message: `你切换到了标签 ${index+1}`
        })
      },
    },
  }
</script>

<style lang="less">
  .sun-demo-tab-bar {
    .sun-demo-nav-title {
      padding: 16px;
    }
    .sun-tabbar {
      position: relative;
      top: 0;
      left: 0;
      background-color: #fff;
    }

    .sun-demo-nav-box {

      .sun-nav-bar {
        position: relative;
        background-color: #fff;
        color: #1989fa;

        .sun-nav-bar-left,
        .sun-nav-bar-right {
          font-size: 14px;
        }
      }
    }
  }
</style>