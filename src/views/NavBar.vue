<template>
  <div class="sun-demo-nav-bar">
    <sun-nav-bar title="NavBar" left-arrow @left-click="$router.back()" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-box">
        <sun-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
          @click-right="onClickRight" />
      </div>
    </div>

    <!-- 使用插槽 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">使用插槽</h2>
      <div class="sun-demo-nav-box">
        <sun-nav-bar title="标题" left-text="返回" left-arrow>
          <template #right>
            <sun-icon name="plus" size="18" />
          </template>
        </sun-nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        this.$toast('返回');
      },
      onClickRight() {
        this.$Toast('按钮');
      },
    },
    created() {}
  }
</script>

<style lang="less">
  .sun-demo-nav-bar {
    .sun-demo-nav-title {
      padding: 16px;
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