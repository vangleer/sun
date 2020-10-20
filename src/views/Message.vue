<template>
  <div class="sun-demo-message">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Message" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunMessage.textTip')" is-link bg-cffect @click="$message($t('sunMessage.textTip'))" />
      </div>
    </div>

    <!-- 消息类型 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunMessage.messageType')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunMessage.success')" is-link bg-cffect @click="$message({message:$t('sunMessage.success'),type:'success'})" />
        <sun-cell :title="$t('sunMessage.danger')" is-link bg-cffect @click="$message({message:$t('sunMessage.danger'),type:'error'})" />
        <sun-cell :title="$t('sunMessage.primary')" is-link bg-cffect @click="$message({message:$t('sunMessage.primary'),type:'info'})" />
        <sun-cell :title="$t('sunMessage.warning')" is-link bg-cffect @click="$message({message:$t('sunMessage.warning'),type:'warning'})" />
        <sun-cell :title="$t('sunMessage.loading')" is-link bg-cffect @click="$message({message:$t('sunMessage.loading'),type:'loading'})" />
      </div>
    </div>

    <!-- 是否显示边框 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunMessage.success')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunMessage.success')" is-link bg-cffect @click="$message({message:$t('sunMessage.success'),type:'success',border:true})" />
        <sun-cell :title="$t('sunMessage.danger')" is-link bg-cffect @click="$message({message:$t('sunMessage.danger'),type:'error',border:true})" />
      </div>
    </div>

    <!-- 显示位置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunMessage.position')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunMessage.success')" is-link bg-cffect
          @click="$message({message:$t('sunMessage.success'),type:'success',border:true,position:'center'})" />
        <sun-cell :title="$t('sunMessage.danger')" is-link bg-cffect
          @click="$message({message:$t('sunMessage.danger'),type:'error',border:true,position:'bottom'})" />
      </div>
    </div>

    <!-- 自定义配置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunMessage.customMessage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-cell :title="$t('sunMessage.customDuration')" is-link bg-cffect
          @click="$message({message:$t('sunMessage.customDuration'),type:'success',border:true,duration:3000})" />
        <sun-cell :title="$t('sunMessage.customColor')" is-link bg-cffect @click="$message({message:$t('sunMessage.customColor'),border:true,color:'pink'})" />
        <sun-cell :title="$t('sunMessage.customIcon')" is-link bg-cffect @click="$message({message:$t('sunMessage.customIcon'),border:true,icon:'plus'})" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  .sun-demo-message {
    .sun-demo-block {
      padding: 0 16px 16px;
    }

    .sun-demo-nav-row {
      background-color: #fff;
      border-radius: 12px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
</style>