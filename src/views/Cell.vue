<template>
  <div class="sun-demo-cell">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Cell" />
    <!-- 基础展示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunCell.cell')" :value="$t('common.content')" />
        <sun-cell :title="$t('sunCell.cell')" :value="$t('common.content')" :label="$t('common.describeInfo')" />
      </div>
    </div>

    <!-- 图标展示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCell.showIcon')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell icon="friends" :title="$t('sunCell.cell')" :value="$t('common.content')" />
      </div>
    </div>

    <!-- 展示箭头 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCell.showArrow')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunCell.cell')" is-link />
        <sun-cell :title="$t('sunCell.cell')" is-link :value="$t('common.content')" />
        <sun-cell :title="$t('sunCell.cell')" is-link arrow-direction="down" :value="$t('common.content')" />
      </div>
    </div>

    <!-- 点击背景效果 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCell.background')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunCell.cell')" :bgEffect="true" />
        <sun-cell :title="$t('sunCell.cell')" :bgEffect="false" :value="$t('common.content')" />
      </div>
    </div>

    <!-- 使用插槽 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.useSlots')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell>
          <template #title>
            <span>{{$t('sunCell.otherCell')}}</span>
            <sun-button size="mini" type="danger">{{$t('common.button')}}</sun-button>
          </template>
        </sun-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.sun-demo-cell {
  .sun-demo-nav-title {
    padding: 16px;
  }
  .sun-demo-block {
    padding: 0;
  }
  .sun-demo-nav-row {
    background-color: #fff;
  }
}
</style>