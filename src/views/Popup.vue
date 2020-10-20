<template>
  <div class="sun-demo-popup">
    <sun-nav-bar title="Popup" left-arrow @left-click="$router.back()" />

    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <!-- <sun-cell is-link @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show">内容</sun-popup> -->
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunPopup.buttonBasic')" is-link bg-cffect @click="handleShow('center')" />
      </div>
    </div>
    <!-- 弹出位置 -->
    <div class="sun-demo-block">
      <!-- <sun-cell is-link @click="showPopup">展示弹出层</sun-cell>\n<sun-popup v-model="show">内容</sun-popup> -->
      <h2 class="sun-demo-nav-title">{{$t('sunPopup.position')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunPopup.buttonTop')" is-link bg-cffect @click="handleShow('top')" />
        <sun-cell :title="$t('sunPopup.buttonBottom')" is-link bg-cffect @click="handleShow('bottom')" />
        <sun-cell :title="$t('sunPopup.buttonLeft')" is-link bg-cffect @click="handleShow('left')" />
        <sun-cell :title="$t('sunPopup.buttonRight')" is-link bg-cffect @click="handleShow('right')" />
      </div>
    </div>

    <!-- 关闭图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunPopup.closeIcon')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunPopup.closeIcon')" is-link bg-cffect @click="showClose1=true" />
        <sun-cell :title="$t('sunPopup.customCloseIcon')" is-link bg-cffect @click="showClose2=true" />
        <sun-cell :title="$t('sunPopup.customIconPosition')" is-link bg-cffect @click="showClose3=true" />
      </div>
    </div>

    <!-- 圆角弹窗 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunPopup.roundCorner')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunPopup.roundCorner')" is-link bg-cffect @click="showRound=true" />
      </div>
    </div>

    <!-- 基础展示 -->
    <sun-popup v-model="showCenter" position="center">{{$t('common.content')}}</sun-popup>
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
    .sun-demo-block {
      padding: 0 16px;
    }
    .sun-demo-nav-row {
      background-color: #fff;
      border-radius: 12px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
</style>