<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-18 09:39:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-19 14:08:33
--> 
<template>
  <div>
    <tabbar>
      <tabbar-item link="../msg" v-model="selected">
        <img slot="icon" src="../../assets/msg.png" link="../msg">
        <img slot="icon-active" src="../../assets/msgs.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="../workbench">
        <img slot="icon" src="../../assets/ipason-w.png" >
        <img slot="icon-active" src="../../assets/ipason.png" >
        <span slot="label">工作台</span>
      </tabbar-item>
      <tabbar-item  >
        <img slot="icon" src="../../assets/customer.png">
        <img slot="icon-active" src="../../assets/customers.png">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item link="../my">
        <img slot="icon" src="../../assets/my.png">
        <img slot="icon-active" src="../../assets/mys.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
  }
}
</script>