<template>
  <div class="sun-demo-button">
    <sun-nav-bar left-arrow
                 @click-left="$router.back()"
                 title="Button" />
    <div class="sun-demo-nav">
      <!-- 按钮类型 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.type')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary">{{$t('sunButton.primary')}}</sun-button>
          <sun-button type="info">{{$t('sunButton.info')}}</sun-button>
          <sun-button>{{$t('sunButton.default')}}</sun-button>
          <sun-button type="danger">{{$t('sunButton.danger')}}</sun-button>
          <sun-button type="warning">{{$t('sunButton.warning')}}</sun-button>
        </div>
      </div>
      <!-- 禁用状态 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('common.disabled')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      disabled>{{$t('common.disabled')}}</sun-button>
          <sun-button type="info"
                      disabled>{{$t('common.disabled')}}</sun-button>
        </div>
      </div>
      <!-- 朴素按钮 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.plain')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      plain>{{$t('sunButton.plain')}}</sun-button>
          <sun-button type="info"
                      plain>{{$t('sunButton.plain')}}</sun-button>
        </div>
      </div>
      <!-- 按钮形状 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.shape')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary">{{$t('sunButton.square')}}</sun-button>
          <sun-button type="info"
                      round>{{$t('sunButton.round')}}</sun-button>
        </div>
      </div>
      <!-- 图标按钮 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.icon')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      icon="plus"></sun-button>
          <sun-button type="primary"
                      icon="plus">{{$t('common.button')}}</sun-button>
          <sun-button type="info"
                      plain
                      icon="friends">{{$t('common.button')}}</sun-button>
        </div>
      </div>

      <!-- 按钮边框效果 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.borderEffect')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      isExtra>{{$t('sunButton.showEffect')}}</sun-button>
          <sun-button type="info"
                      effectWidth="10px" isExtra>{{$t('sunButton.adjustEffect')}}</sun-button>
        </div>
      </div>

      <!-- 按钮尺寸 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.size')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      size="large">{{$t('sunButton.large')}}</sun-button>
          <sun-button type="primary"
                      size="default">{{$t('sunButton.normal')}}</sun-button>
          <sun-button type="info"
                      size="small">{{$t('sunButton.small')}}</sun-button>
          <sun-button type="danger"
                      size="mini">{{$t('sunButton.mini')}}</sun-button>
        </div>
      </div>

      <!-- 自定义颜色 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">{{$t('sunButton.customColor')}}</h2>
        <div class="sun-demo-nav-row">
          <sun-button color="#7232dd">{{$t('sunButton.pure')}}</sun-button>
          <sun-button color="#7232dd"
                      plain>{{$t('sunButton.pure')}}</sun-button>
          <sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">{{$t('sunButton.gradient')}}</sun-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.sun-demo-block {
  padding: 0 16px;
}
.sun-demo-nav-row {
  .sun-btn {
    margin-bottom: 10px;
    margin-right: 10px;
    .sun-icon {
      font-size: 16px;
    }
  }
}
</style>