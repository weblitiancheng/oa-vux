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
@import '~vux/src/styles/1px.less';

// html {
//   overflow-y: scroll;
// }


html,body{
	padding: 0;
	margin: 0;
	width: 100%;	
	height: 100%;	
	position: absolute;	
	left: 0;top: 0;	
	overflow: hidden;	
  overflow-y: auto;
  background-color: #fbf9fe;
}
::-webkit-scrollbar  
{  
	display: none!important;
    width: 0px;  
    height: 0px;  
}
</style>
