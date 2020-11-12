<template>
  <div class="sun-demo-toast">
    <sun-nav-bar left-arrow @click-left="$router.back()" title="Toast" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunToast.title1')" is-link bg-cffect @click="$toast($t('sunToast.text'))" />
        <sun-cell :title="$t('sunToast.title2')" is-link bg-cffect @click="$toast.loading($t('sunButton.loadingText'))" />
        <sun-cell :title="$t('sunToast.success')" is-link bg-cffect @click="$toast.success($t('sunToast.success'))" />
        <sun-cell :title="$t('sunToast.fail')" is-link bg-cffect @click="$toast.fail($t('sunToast.fail'))" />
      </div>
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunToast.customIcon')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunToast.customIcon')" is-link bg-cffect @click="$toast({message:$t('sunToast.customIcon'),icon:'like-o'})" />
        <sun-cell :title="$t('sunToast.customImage')" is-link bg-cffect
          @click="$toast.loading({message:$t('sunToast.customImage'),icon:'https://img.yzcdn.cn/vant/logo.png'})" />
        <sun-cell :title="$t('sunToast.loadingType')" is-link bg-cffect @click="$toast.loading({message:$t('sunButton.loadingText'),icon:'loading2'})" />
      </div>
    </div>

    <!-- 自定义位置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunToast.customPosition')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunToast.positionTop')" is-link bg-cffect @click="$toast({message:$t('sunToast.positionTop'), position: 'top'})" />
        <sun-cell :title="$t('sunToast.positionBottom')" is-link bg-cffect @click="$toast({message:$t('sunToast.positionBottom'), position: 'bottom'})" />
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  .sun-demo-toast {

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