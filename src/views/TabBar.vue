<template>
  <div class="sun-demo-tab-bar">
    <sun-nav-bar title="Tabbar" left-arrow @click-left="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active">
          <sun-tabbar-item icon="home">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="category">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="friends">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="settings">{{$t('common.tag')}}</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 徽标提示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunTabbar.badge')}}</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active2">
          <sun-tabbar-item icon="home">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="category" dot>{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="friends" badge="20">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="settings" badge="5">{{$t('common.tag')}}</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunTabbar.customIcon')}}</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active3">
          <sun-tabbar-item icon="home">
            <span>{{$t('common.custom')}}</span>
            <template #icon>
              <sun-icon name="star-f" />
            </template>
          </sun-tabbar-item>
          <sun-tabbar-item icon="category">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="friends">{{$t('common.tag')}}</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 自定义颜色 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.customColor')}}</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
          <sun-tabbar-item icon="home">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="category">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="friends">{{$t('common.tag')}}</sun-tabbar-item>
          <sun-tabbar-item icon="settings">{{$t('common.tag')}}</sun-tabbar-item>
        </sun-tabbar>
      </div>
    </div>

    <!-- 监听事件切换 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunTabbar.switchEvent')}}</h2>
      <div class="sun-demo-nav-box">
        <sun-tabbar v-model="active5" @change="onChange">
          <sun-tabbar-item icon="home">{{$t('common.tag')}}1</sun-tabbar-item>
          <sun-tabbar-item icon="category">{{$t('common.tag')}}2</sun-tabbar-item>
          <sun-tabbar-item icon="friends">{{$t('common.tag')}}3</sun-tabbar-item>
          <sun-tabbar-item icon="settings">{{$t('common.tag')}}4</sun-tabbar-item>
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
          message: `${this.$t('sunTabbar.selectTip')} ${index+1}`
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