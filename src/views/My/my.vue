<template>
    
    <div style="overflow-x: hidden;">
        <x-header>个人中心</x-header>
        <div class="message_box">
            <img src="../../assets/wximg.jpg" class="my_img">
            <div>
                <h2 class="my_name">沈志雄</h2>
                <p class="my_job">软件研发部</p>
                
            </div>
            <div>
                退出登录<span>></span>
            </div>
        </div>
        <p class="line"></p>
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item v-for="(my_data) of myData" :key="my_data.my_txt">
                <router-link :to="my_data.my_url">
                  <div class="my_lie">
                      <img :src="my_data.my_img" class="my_pic8">
                      <div class="my_lieRight">
                      <p>{{my_data.my_txt}}</p>
                      </div>
                  </div>
                </router-link>
            </flexbox-item>
        </flexbox>
      <Vtabbar></Vtabbar>
    </div>
</template>


<script>
  import {Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider, XHeader} from 'vux'
  import Vtabbar from '@/views/components/tabbar'
  var myData = require('@/assets/data_json/my.json')
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
      GroupTitle,
      XHeader
    }
  }
</script>


<style lang="less" scope>
    *{margin: 0;padding: 0;}
    .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
    .clearfloat{zoom:1}
    .message_box{
        width: 94%;
        display: flex;
        align-items: center;
        padding: 0.4rem 0rem;
        margin: 0 auto;
    }
    .message_box div+div{
      flex: 1;
      text-align: right;
      margin-right: .667rem ;
      color: #0f1528;
      span{
        margin-left: .1rem;
      }
    }
    .my_img{
        width: 2rem;
        height: 2rem;
        border-radius: 0.3rem;
        margin-right: 0.5rem;
    }
    .line{
        height: 0.02rem;
        width: 100%;
        background: #e9e9e9;
    }



    .flex-demo {
        text-align: center;
        color: #fff;
        background-color: #20b907;
        border-radius: 4px;
        background-clip: padding-box;
    }
    .ipason_log{
        width:3.4rem /* 440/100 */;
        height:1rem /* 121/100 */ ;
        
    }
    .title{
        background:#2a4198;
        height:1.4rem /* 140/100 */ ;
        display:flex;
        align-items: center;
        padding-left: .5rem /* 50/100 */;
    }
    .my_lie{
      height: 1.8rem /* 150/100 */;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: .5rem;
      border-bottom: 0.01rem solid #dde0ef;
    }
    .my_pic8{
      width: 1.2rem /* 100/100 */;
      height: 1.2rem /* 50/100 */;
      border-radius: 0.2rem;
    }
    .my_lieRight{
      margin-left: .3rem;
    }
    .my_in_box{
      display: flex;
      justify-content: space-between;
      width: 7.5rem;
    }
    .my_lieRight p{
      font-size: 0.5rem;
      color: #000d49;
    }
   
</style>