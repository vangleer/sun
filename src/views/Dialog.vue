<template>
  <div class="sun-demo-dialog">
    <sun-nav-bar left-arrow @click-left="$router.back()" title="Dialog" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunDialog.alert1')" is-link bg-cffect @click="alert1(1)" />
        <sun-cell :title="$t('sunDialog.alert2')" is-link bg-cffect @click="alert1(2)" />
        <sun-cell :title="$t('sunDialog.confirm')" is-link bg-cffect @click="alert1(3)" />
      </div>
    </div>

    <!-- 切换圆角 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunDialog.roundButton')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunDialog.alert1')" is-link bg-cffect @click="alert2(1)" />
        <sun-cell :title="$t('sunDialog.alert2')" is-link bg-cffect @click="alert2(2)" />
      </div>
    </div>
    <sun-dialog v-model="show" :theme="theme" :title="title?$t('sunDialog.title'):''" :message="$t('sunDialog.content')" :show-cancel-button="showCancelButton"> </sun-dialog>
    <sun-dialog v-model="show2" cancel-button-color="#fff" theme="round-button" :title="title?$t('sunDialog.title'):''" :message="$t('sunDialog.content')" :show-cancel-button="showCancelButton"> </sun-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,
        show2:false,
        title:true,
        showCancelButton:false,
        theme:''
      }
    },
    methods:{
      alert1(opt,theme) {
        switch(opt) {
          case 1:
            this.title = true
            this.showCancelButton = false
            break
          case 2:
            this.title = false
            this.showCancelButton = false
            break
          case 3:
            this.title = true
            this.showCancelButton = true
            break
          default:
            this.title = true
            this.showCancelButton = false
        }
        this.show = !this.show
      },
      alert2(opt) {
        this.title = opt === 1 
        this.show2 = ! this.show2
      },
    }
  }
</script>

<style lang="less">
  .sun-demo-dialog {
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