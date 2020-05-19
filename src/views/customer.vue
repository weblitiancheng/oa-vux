<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-19 15:29:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-19 15:30:10
--> 
<template>
    <div style="overflow-x: hidden;">
        <div class="message_box">
            <img src="../assets/logo.png" class="my_img">
            <div>
                <h2 class="my_name">沈志雄</h2>
                <p class="my_job">软件研发部</p>
            </div>
        </div>
        <p class="line"></p>
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item v-for="(my_data,index) of myData" :key="my_data.my_txt">
                <div class="my_lie">
                    <img :src="my_data.my_img" class="pic8">
                    <div class="my_lieRight">
                    <p>{{my_data.my_txt}}</p>
                    </div>
                </div>
            </flexbox-item>
        </flexbox>
      <Vtabbar></Vtabbar>
    </div>
</template>


<script>
  import {Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider} from 'vux'
  import Vtabbar from './components/tabbar'
  var myData = require('../assets/data_json/my.json')
  export default {
    data () {
      return {
        myData: myData
      }
    },
    methods: {
    },
    components: {
      Flexbox,
      FlexboxItem,
      Divider,
      Vtabbar,
      Grid,
      GridItem,
      GroupTitle
    }
  }
</script>


<style scoped>
    *{margin: 0;padding: 0;}
    .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
    .clearfloat{zoom:1}
</style>