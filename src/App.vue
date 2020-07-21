<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';


html {
  overflow-y: scroll;
}

// :root {
//   overflow-y: auto;
//   overflow-x: hidden;
// }

// :root body {
//   position: absolute;
// }

body {
  width: 100%;
  overflow: hidden;
   background-color: #fbf9fe;
}

</style>
