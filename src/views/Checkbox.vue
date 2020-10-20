<template>
  <div class="sun-demo-checkbox">
    <sun-nav-bar title="Checkbox" left-arrow @left-click="$router.back()" />
    <!-- 基础用法 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
      <sun-checkbox v-model="checked1">{{$t('sunCheckbox.checkbox')}}</sun-checkbox>
    </div>
    <!-- 禁用状态 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('common.disabled')}}</h2>
      <sun-checkbox v-model="checked2" disabled>{{$t('sunCheckbox.checkbox')}}</sun-checkbox>
      <sun-checkbox v-model="checked3" disabled>{{$t('sunCheckbox.checkbox')}}</sun-checkbox>
    </div>

    <!-- 自定义形状 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.customShape')}}</h2>
      <sun-checkbox v-model="checked4" shape="square">{{$t('sunCheckbox.customShape')}}</sun-checkbox>
    </div>
    <!-- 自定义颜色 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.customColor')}}</h2>
      <sun-checkbox v-model="checked5" checked-color="#07c160">{{$t('sunCheckbox.customColor')}}</sun-checkbox>
    </div>
    <!-- 自定义大小 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.customIconSize')}}</h2>
      <sun-checkbox v-model="checked6" icon-size="24px">{{$t('sunCheckbox.customIconSize')}}</sun-checkbox>
    </div>
    <!-- 自定义图标 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.customIcon')}}</h2>
      <sun-checkbox v-model="checked7">
        {{$t('sunCheckbox.customIcon')}}
        <template #icon>
          <sun-icon name="plus"></sun-icon>
        </template>
      </sun-checkbox>
    </div>

    <!-- 禁用文本点击 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.disableLabel')}}</h2>
      <sun-checkbox v-model="checked8" label-disabled>{{$t('sunCheckbox.checkbox')}}</sun-checkbox>
    </div>
    <!-- 复选框组 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.title3')}}</h2>
      <sun-checkbox-group v-model="result1">
        <sun-checkbox name="a">{{$t('sunCheckbox.checkbox')}} a</sun-checkbox>
        <sun-checkbox name="b">{{$t('sunCheckbox.checkbox')}} b</sun-checkbox>
        <sun-checkbox name="c">{{$t('sunCheckbox.checkbox')}} c</sun-checkbox>
      </sun-checkbox-group>
    </div>
    <!-- 水平排列 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.horizontal')}}</h2>
      <sun-checkbox-group v-model="result2" direction="horizontal">
        <sun-checkbox name="a">{{$t('sunCheckbox.checkbox')}} a</sun-checkbox>
        <sun-checkbox name="b">{{$t('sunCheckbox.checkbox')}} b</sun-checkbox>
        <sun-checkbox name="c">{{$t('sunCheckbox.checkbox')}} c</sun-checkbox>
      </sun-checkbox-group>
    </div>
    <!-- 限制最大可选数 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.title4')}}</h2>
      <sun-checkbox-group v-model="result3" :max="2">
        <sun-checkbox name="a">{{$t('sunCheckbox.checkbox')}} a</sun-checkbox>
        <sun-checkbox name="b">{{$t('sunCheckbox.checkbox')}} b</sun-checkbox>
        <sun-checkbox name="c">{{$t('sunCheckbox.checkbox')}} c</sun-checkbox>
      </sun-checkbox-group>
    </div>

    <!-- 全选与反选 -->
    <div class="sun-demo-block">
      <h2 class="sun-demo-nav-title">{{$t('sunCheckbox.toggleAll')}}</h2>
      <sun-checkbox-group v-model="result4" ref="checkboxGroup">
        <sun-checkbox name="a">{{$t('sunCheckbox.checkbox')}} a</sun-checkbox>
        <sun-checkbox name="b">{{$t('sunCheckbox.checkbox')}} b</sun-checkbox>
        <sun-checkbox name="c">{{$t('sunCheckbox.checkbox')}} c</sun-checkbox>
      </sun-checkbox-group>

     <div style="margin-top:10px;">
        <sun-button type="primary" @click="checkAll">{{$t('sunCheckbox.checkAll')}}</sun-button>
        <sun-button type="info" @click="toggleAll">{{$t('sunCheckbox.inverse')}}</sun-button>
     </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: false,
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        result1: [],
        result2: [],
        result3: [],
        result4: [],
      }
    },
    methods: {
      checkAll() {
        this.$refs.checkboxGroup.toggleAll(true);
      },
      toggleAll() {
        this.$refs.checkboxGroup.toggleAll();
      },
    }
  }
</script>

<style lang="less">
  .sun-demo-checkbox {
    background-color: #fff;
    .sun-demo-block {
      padding: 0 16px;
      margin-bottom: 10px;
    }
  }
</style>