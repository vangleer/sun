<template>
  <div class="sun-demo-popup">
    <sun-nav-bar title="Popup" left-arrow @left-click="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <!-- <sun-cell is-link @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show">内容</sun-popup> -->
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="弹出层展示" is-link bg-cffect @click="handleShow('center')" />
      </div>
    </div>
    <!-- 弹出位置 -->
    <div class="sun-demo-block">
      <!-- <sun-cell is-link @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show">内容</sun-popup> -->
      <h2 class="sun-demo-nav-title">弹出位置</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="顶部弹出" is-link bg-cffect @click="handleShow('top')" />
        <sun-cell title="底部弹出" is-link bg-cffect @click="handleShow('bottom')" />
        <sun-cell title="左侧弹出" is-link bg-cffect @click="handleShow('left')" />
        <sun-cell title="右侧弹出" is-link bg-cffect @click="handleShow('right')" />
      </div>
    </div>

    <!-- 关闭图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">关闭图标</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="关闭图标" is-link bg-cffect @click="showClose1=true" />
        <sun-cell title="自定义图标" is-link bg-cffect @click="showClose2=true" />
        <sun-cell title="图标位置" is-link bg-cffect @click="showClose3=true" />
      </div>
    </div>

    <!-- 圆角弹窗 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">圆角弹窗</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="圆角弹窗" is-link bg-cffect @click="showRound=true" />
      </div>
    </div>

    <!-- 基础展示 -->
    <sun-popup v-model="showCenter" position="center">内容</sun-popup>
    <sun-popup v-model="showTop" position="top" />
    <sun-popup v-model="showBottom" position="bottom" />
    <sun-popup v-model="showLeft" position="left" />
    <sun-popup v-model="showRight" position="right" />

    <!-- 图标 -->
    <sun-popup v-model="showClose1" position="bottom" closeable />
    <sun-popup v-model="showClose2" position="bottom" closeable close-icon="plus" />
    <sun-popup v-model="showClose3" position="bottom" closeable close-icon-position="top-left" />

    <!-- 圆角 -->
    <sun-popup v-model="showRound" position="bottom" round />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showTop: false,
        showCenter: false,
        showBottom: false,
        showRight: false,
        showLeft: false,
        position: 'center',
        showClose1: false,
        showClose2: false,
        showClose3: false,
        showRound: false
      }
    },
    methods: {
      handleShow(position) {
        switch (position) {
          case 'center':
            this.showCenter = true
            break
          case 'top':
            this.showTop = true
            break
          case 'bottom':
            this.showBottom = true
            break
          case 'left':
            this.showLeft = true
            break
          case 'right':
            this.showRight = true
            break
        }
      }
    }
  }
</script>

<style lang="less">
  .sun-demo-popup {
    margin-top: 49px;
    min-height: 96vh;
    background-color: #f8f8f8;

    .sun-demo-block {
      padding: 0 16px;
    }

    .sun-demo-nav-title {
      padding: 16px 3px;
      margin: 0;
    }

    .sun-demo-nav-row {
      background-color: #fff;
      border-radius: 12px;
      margin-bottom: 10px;
    }
  }
</style>