<template>
  <div class="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  watch:{
    $route(to,from){
      console.log(to.path);
      let parentPath = 'https://java0088.github.io/sun-ui-client/dist/#' // 线上
      // let parentPath = ' http://localhost:8082/#' // 测试
      window.parent.location.href = parentPath+to.path
      document.documentElement.scrollTop = 0
      console.log(parentPath)
    }
  }
}
</script>

<style lang="less">

html::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
.sun-demo-nav-title {
  padding: 16px 0;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}
.app {
  padding-top: 49px;
  width: 100vw;
  min-height: 100vh;
  background-color: #f8f8f8;
  .sun-nav-bar {
    background-color: #fff ;
  }
}
</style>