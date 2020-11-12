<template>
  <div class="sun-demo-collapse">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Collapse" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-collapse v-model="activeNames">
          <sun-collapse-item :title="$t('common.title')+'1'" name="1">{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'2'" name="2">{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'3'" name="3">{{$t('sunCollapse.text')}}</sun-collapse-item>
        </sun-collapse>
      </div>
    </div>

    <!-- 手风琴 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCollapse.accordion')}}</h2>
      <div class="sun-demo-nav-row">
         <sun-collapse v-model="activeName" accordion >
          <sun-collapse-item :title="$t('common.title')+'1'" name="1">{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'2'" name="2">{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'3'" name="3">{{$t('sunCollapse.text')}}</sun-collapse-item>
        </sun-collapse>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.disabled')}}</h2>
      <div class="sun-demo-nav-row">
         <sun-collapse v-model="activeNames2">
          <sun-collapse-item :title="$t('common.title')+'1'" name="1">{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'2'" name="2" disabled>{{$t('sunCollapse.text')}}</sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'3'" name="3" disabled>{{$t('sunCollapse.text')}}</sun-collapse-item>
        </sun-collapse>
      </div>
    </div>

    <!-- 自定义标题内容 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCollapse.titleSlot')}}</h2>
      <div class="sun-demo-nav-row">
        <sun-collapse v-model="activeNames">
          <sun-collapse-item name="1">
            <template #title>
              <div>{{$t('common.title')}}1 <sun-icon name="success-o" /></div>
            </template>
            {{$t('sunCollapse.text')}}
          </sun-collapse-item>
          <sun-collapse-item :title="$t('common.title')+'2'" name="2" icon="category-o">
            {{$t('sunCollapse.text')}}
          </sun-collapse-item>
        </sun-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames:['1'],
      activeName:'1',
      activeNames2:[]
    }
  }
}
</script>

<style lang="less" scoped>
.sun-demo-collapse {
  padding-bottom: 20px;
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