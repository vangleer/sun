<template>
  <div class="sun-demo-home">
    <div class="sun-demo-header">
      <h1>
        <img src="https://img.yzcdn.cn/vant/logo.png" alt="阳光" />
        <span>Sun</span>
      </h1>
      <p class="sun-demo-home-desc">轻量、可靠的移动端 Vue 组件库</p>
    </div>

    <div class="sun-demo-home-nav">
      <div v-for="(item, index) in homeList" :key="index">
        <div class="sun-demo-home-nav-title">{{ item.desc }}</div>
        <div class="sun-demo-home-nav-group" v-for="(item2, index2) in item.group" :key="index2">
          <div class="sun-demo-home-nav-block" @click="$router.push(item2.path)">
            <span>{{ item2.text }}</span>
            <sun-icon name="arrow-right" color="rgba(69, 90, 100, 0.6)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../assets/data/index'
  export default {
    data() {
      return {
        homeList: [],
      }
    },
    created() {
      this.homeList = data.homeList
    },
  }
</script>

<style lang="less">
  .sun-demo-home {
    width: 100%;
    min-height: 100vh;
    padding: 46px 20px 20px;
    background: #fff;
  }

  .sun-demo-header {
    h1 {
      display: flex;
      align-items: center;
      font-size: 22px;
      margin-bottom: 10px;
    }

    img {
      width: 32px;
      margin-right: 16px;
    }
  }

  .sun-demo-home-desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }

  .sun-demo-home-nav-title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }

  .sun-demo-home-nav-block {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 0 12px;
    padding: 0 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #e5e5e8;
    }
  }
</style>