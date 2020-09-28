<template>
  <div class="sun-demo-toast">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Toast" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">基础用法</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="文字提示" is-link bg-cffect @click="$toast('提示内容')" />
        <sun-cell title="加载提示" is-link bg-cffect @click="$toast.loading('加载中...')" />
        <sun-cell title="成功提示" is-link bg-cffect @click="$toast.success('成功提示')" />
        <sun-cell title="失败提示" is-link bg-cffect @click="$toast.fail('失败提示')" />
      </div>
    </div>

    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义图标</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="自定义图标" is-link bg-cffect @click="$toast({message:'自定义图标',icon:'like-o'})" />
        <sun-cell title="自定义图片" is-link bg-cffect
          @click="$toast.loading({message:'自定义图片',icon:'https://img.yzcdn.cn/vant/logo.png'})" />
        <sun-cell title="自定义加载图标" is-link bg-cffect @click="$toast.loading({message:'加载中...',icon:'loading2'})" />
      </div>
    </div>

    <!-- 自定义位置 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">自定义位置</h2>
      <div class="sun-demo-nav-row">
        <sun-cell title="顶部展示" is-link bg-cffect @click="$toast({message:'顶部展示', position: 'top'})" />
        <sun-cell title="底部展示" is-link bg-cffect @click="$toast({message:'底部展示', position: 'bottom'})" />
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  .sun-demo-toast {
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