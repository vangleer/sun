<template>
  <div class="sun-demo-rate">
    <sun-nav-bar title="Rate" left-arrow @left-click="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <sun-rate v-model="value" />
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.customIcon')}}</h2>
      <sun-rate v-model="value2" icon="like" void-icon="like-o" />
    </div>

    <!-- 自定义样式 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.customStyle')}}</h2>
      <sun-rate v-model="value3" :size="25" color="#ffd21e" void-icon="star-f" void-color="#eee" />
    </div>

    <!-- 自定义数量 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.customCount')}}</h2>
      <sun-rate v-model="value4" :count="6" />
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.disabled')}}</h2>
      <sun-rate v-model="value5" disabled />
    </div>
    <!-- 只读状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.readonly')}}</h2>
      <sun-rate v-model="value6" readonly />
    </div>
    <!-- 监听 change 事件 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunRate.changeEvent')}}</h2>
      <sun-rate v-model="value7" @change="onChange" />
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 3,
        value2: 4,
        value3: 2,
        value4: 4,
        value5: 4,
        value6: 2,
        value7: 3
      }
    },
    methods: {
      onChange(value) {
        this.$toast('Current Value: ' + value);
      }
    }
  }
</script>

<style lang="less">
  .sun-demo-rate {
    min-height: 100vh;
    background-color: #fff;
    .sun-demo-block {
      padding: 0 16px;
      margin-bottom: 10px;
    }
  }
</style>