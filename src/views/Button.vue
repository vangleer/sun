<template>
  <div class="sun-demo-button">
    <sun-nav-bar left-arrow
                 @left-click="$router.back()"
                 title="Button" />
    <div class="sun-demo-nav">
      <!-- 按钮类型 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">按钮类型</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary">主要按钮</sun-button>
          <sun-button type="info">信息按钮</sun-button>
          <sun-button>默认按钮</sun-button>
          <sun-button type="danger">危险按钮</sun-button>
          <sun-button type="warning">警告按钮</sun-button>
        </div>
      </div>
      <!-- 禁用状态 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">禁用状态</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      disabled>禁用状态</sun-button>
          <sun-button type="info"
                      disabled>禁用状态</sun-button>
        </div>
      </div>
      <!-- 朴素按钮 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">朴素按钮</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      plain>朴素按钮</sun-button>
          <sun-button type="info"
                      plain>朴素按钮</sun-button>
        </div>
      </div>
      <!-- 按钮形状 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">按钮形状</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary">方形按钮</sun-button>
          <sun-button type="info"
                      round>圆形按钮</sun-button>
        </div>
      </div>
      <!-- 图标按钮 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">图标按钮</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      icon="plus"></sun-button>
          <sun-button type="primary"
                      icon="plus">按钮</sun-button>
          <sun-button type="info"
                      plain
                      icon="friends">按钮</sun-button>
        </div>
      </div>

      <!-- 按钮边框效果 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">按钮边框阴影效果</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      isExtra>开起点击边框阴影</sun-button>
          <sun-button type="info"
                      effectWidth="10px" isExtra>调整效果大小</sun-button>
        </div>
      </div>

      <!-- 按钮尺寸 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">按钮尺寸</h2>
        <div class="sun-demo-nav-row">
          <sun-button type="primary"
                      size="large">大号按钮</sun-button>
          <sun-button type="primary"
                      size="default">普通按钮</sun-button>
          <sun-button type="info"
                      size="small">小型按钮</sun-button>
          <sun-button type="danger"
                      size="mini">迷你按钮</sun-button>
        </div>
      </div>

      <!-- 自定义颜色 -->
      <div class="sun-demo-block">
        <h2 class="sun-demo-nav-title">自定义颜色</h2>
        <div class="sun-demo-nav-row">
          <sun-button color="#7232dd">单色按钮</sun-button>
          <sun-button color="#7232dd"
                      plain>单色按钮</sun-button>
          <sun-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变按钮</sun-button>
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