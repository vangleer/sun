<template>
  <div class="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {}
</script>

<style>
html::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
.sun-demo-nav-title {
  margin: 24px 0 8px 0;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}
</style>