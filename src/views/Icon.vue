<template>
  <div class="sun-demo-icon">
    <sun-nav-bar
      left-arrow
      @click-left="$router.back()"
      title="Icon"
      style="background-color: #fff;"
    />
    <sun-tabs>
      <div
        class="sun-tab-item"
        v-for="(item, index) in tabList"
        :key="index"
        @click="handleTabClick(index)"
      >
        {{ item }}
      </div>
    </sun-tabs>
    <div class="sun-demo-icon-content">
      <!-- 用法实例 -->
      <div class="sun-demo-icon-box1" v-show="currentIndex === 0">
        <!-- 基础用法 -->
        <div class="sun-demo-block">
          <h2 class="sun-demo-nav-title">{{$t('common.basicUsage')}}</h2>
          <!-- <code>Icon</code>的<code>name</code>属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例 -->
          <div class="sun-demo-nav-row">
            <sun-icon name="message-o" />
            <sun-icon name="star-o" />
          </div>
        </div>
        <!-- 徽标提示 -->
        <div class="sun-demo-block">
          <h2 class="sun-demo-nav-title">{{$t('sunIcon.badge')}}</h2>
          <!-- 设置<code>dot</code>属性后，会在图标右上角展示一个小红点。设置<code>badge</code>属性后，会在图标右上角展示相应的徽标 -->
          <div class="sun-demo-nav-row">
            <sun-icon name="message-o" dot />
            <sun-icon name="message-o" badge="8" />
            <sun-icon name="message-o" badge="88+" />
          </div>
        </div>
        <!-- 图标颜色 -->
        <div class="sun-demo-block">
          <h2 class="sun-demo-nav-title">{{$t('sunIcon.color')}}</h2>
          <!-- <code>Icon</code>的<code>color</code>属性用来设置图标的颜色 -->
          <div class="sun-demo-nav-row">
            <sun-icon name="message-o" color="#1989fa" />
            <sun-icon name="message-o" color="#07c160" />
          </div>
        </div>

        <!-- 图标大小 -->
        <div class="sun-demo-block">
          <h2 class="sun-demo-nav-title">{{$t('sunIcon.size')}}</h2>
          <!-- <code>Icon</code>的<code>size</code>属性用来设置图标的尺寸大小，默认单位为px -->
          <div class="sun-demo-nav-row">
            <sun-icon name="message-o" size="40" />
            <sun-icon name="message-o" size="3rem" />
          </div>
        </div>
      </div>

      <div class="sun-demo-icon-box2" v-show="currentIndex === 1">
        <div class="sun-demo-icon-row">
          <div
            class="sun-demo-icon-item"
            v-for="(item, index) in baseIcon"
            :key="index"
            @click="handleIconClick(item)"
            :id="item"
          >
            <sun-icon :name="item" />
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="sun-demo-icon-box3" v-show="currentIndex === 2">
        <div class="sun-demo-icon-row">
          <div
            class="sun-demo-icon-item"
            v-for="(item, index) in lineStyleIcon"
            :key="index"
            @click="handleIconClick(item)"
            :id="item"
          >
            <sun-icon :name="item" />
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="sun-demo-icon-box4" v-show="currentIndex === 3">
        <div class="sun-demo-icon-row">
          <div
            class="sun-demo-icon-item"
            v-for="(item, index) in solidStyleIcon"
            :key="index"
            @click="handleIconClick(item)"
            :id="item"
          >
            <sun-icon :name="item" />
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data/icons.js'
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      tabList: [this.$t('sunIcon.demo'), this.$t('sunIcon.basic'), this.$t('sunIcon.outline'), this.$t('sunIcon.filled')],
      currentIndex: 0,
      baseIcon: data.baseIcon,
      lineStyleIcon: data.lineStyleIcon,
      solidStyleIcon: data.solidStyleIcon,
    }
  },
  mounted() {
    console.log(this.baseIcon)
  },
  methods: {
    handleTabClick(index) {
      this.currentIndex = index
    },

    handleIconClick(item) {
      var clipboard = new Clipboard('#' + item, {
        text: function() {
          return `<sun-icon name="${item}" />`
        },
      })

      clipboard.on('success', (e) => {
        this.$message.success({
          message: `${this.$t('sunIcon.copySuccess')}: <sun-icon name="${item}" />`,
          border: true,
        })
        clipboard.destroy() // 释放内存
      })
      clipboard.on('error', (e) => {
        this.$message.warning({
          message: this.$t('sunIcon.noSuport'),
          border: true,
        })
        clipboard.destroy() // 释放内存
      })
    },
  },
}
</script>

<style lang="less" scoped>
.sun-demo-icon {
  .sun-tab-item {
    font-size: 14px;
  }
}

.sun-demo-icon-content {
  padding: 16px;

  [class^='sun-demo-icon-box'] {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
  }

  .sun-demo-icon-box1 {
    padding: 16px;
  }
}

.sun-icon {
  font-size: 32px !important;
  margin: 10px 30px 10px 0;
}

.sun-demo-icon-row {
  display: flex;
  flex-wrap: wrap;

  .sun-demo-icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    height: 100px;
    cursor: pointer;

    &:active {
      background-color: #f1f3f6;
    }

    .sun-icon {
      margin: 0;
    }

    p {
      font-size: 12px;
      color: #646566;
      margin-top: 10px;
    }
  }
}
</style>
