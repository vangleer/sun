<template>
  <div class="sun-demo-pagination">
    <sun-nav-bar left-arrow @left-click="$router.back()" title="Pagination" style="background-color: #fff;" />
    <!-- 基础展示 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <sun-pagination  v-model="currentPage" :prev-text="$t('sunPage.prevText')" :next-text="$t('sunPage.nextText')" :total-items="24" :items-per-page="5"></sun-pagination>
    </div>

    <!-- 简单模式 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunPage.title2')}}</h2>
      <sun-pagination v-model="currentPage2" :prev-text="$t('sunPage.prevText')" :next-text="$t('sunPage.nextText')" :page-count="12" mode="simple" />
    </div>

    <!-- 显示省略号 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunPage.title3')}}</h2>
      <sun-pagination v-model="currentPage3" :prev-text="$t('sunPage.prevText')" :next-text="$t('sunPage.nextText')" :show-page-size="3" :total-items="125" force-ellipses/>
    </div>

     <!-- 自定义按钮 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.custom')+$t('common.button')}}</h2>
      <sun-pagination v-model="currentPage4" :prev-text="$t('sunPage.prevText')" :next-text="$t('sunPage.nextText')" :total-items="50" :show-page-size="5">
        <template #prev-text>
          <sun-icon name="arrow-left" />
        </template>
        <template #next-text>
          <sun-icon name="arrow-right" />
        </template>
        <template #page="scope">{{ scope.text }}</template>
     </sun-pagination>
    </div>

  </div>
</template>

<script>
  import data from '../assets/data/icons.js'
  import Clipboard from 'clipboard'
  export default {
    data() {
      return {
          currentPage:2,
          currentPage2:1,
          currentPage3:1,
          currentPage4:1,
      }
    },
    mounted() {
    },
    methods: {
    },
  }
</script>

<style lang="less">
  .sun-demo-pagination {
    width: 100%;
    .sun-demo-block {
      padding: 0 16px 16px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .sun-col {
      line-height: 30px;
      text-align: center;
      background-color: #39a9ed;
      color: #fff;
      margin-bottom: 10px;
    }

    .sun-row>.sun-col:nth-child(2n) {
      opacity: 0.6;
    }
   
  }
</style>