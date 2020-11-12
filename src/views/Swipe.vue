<template>
  <div class="sun-demo-swipe">
    <sun-nav-bar left-arrow @click-left="$router.back()" title="Swipe" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <sun-swipe class="my-swipe" :autoplay="3000">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunSwipe.title3')}}</h2>
      <sun-swipe class="my-swipe" @change="onChange">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunSwipe.title4')}}</h2>
      <sun-swipe class="my-swipe" vertical>
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunSwipe.title7')}}</h2>
      <sun-swipe class="my-swipe" square-indicators>
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>
      </sun-swipe>
    </div>

    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunSwipe.title6')}}</h2>
      <sun-swipe class="my-swipe" @change="onChange2">
        <sun-swipe-item>1</sun-swipe-item>
        <sun-swipe-item>2</sun-swipe-item>
        <sun-swipe-item>3</sun-swipe-item>
        <sun-swipe-item>4</sun-swipe-item>

        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/4
          </div>
        </template>
      </sun-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        current: 0,
      }
    },
    methods: {
      onChange(index) {
        this.$toast(this.$t('sunSwipe.message') + index)
      },
      onChange2(index) {
        this.current = index;
      },
    },
    created() {}
  }
</script>

<style lang="less">
  .sun-demo-swipe {
    padding-bottom: 20px;

    .my-swipe .sun-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 200px;
      text-align: center;
      background-color: #2bde9d;
    }

    .my-swipe .sun-swipe-item:nth-child(odd) {
      background-color: #7fe2be;
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
    .sun-demo-nav-title {
      padding-left: 12px;
    }
  }
</style>