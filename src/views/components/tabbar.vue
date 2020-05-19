<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-18 09:39:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-19 17:14:01
--> 
<template>
  <div>
    <tabbar class="daohang">
      <tabbar-item link="../msg" v-for="(tabber_data,index) of tabberData" :key="tabber_data.bg_txt" :link="tabber_data.link_url" :selected="$route.path == '/'+tabber_data.link_url">
        <img slot="icon" :src="tabber_data.tabbar_url" link="../msg">
        <img slot="icon-active" :src="tabber_data.tabbar_urls">
        <span slot="label">{{tabber_data.tabbar_txt}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
var tabberData = require('../../assets/data_json/tabbar.json')
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      tabberData: tabberData
    }
  }
}
</script>
<style scoped>
  .daohang{
    position: fixed;
    bottom: 0;
    z-index: 99999999999;
  }
</style>