<template>
    <div>
        <img src="https://ipasoncnwebsite.oss-cn-shanghai.aliyuncs.com/images/162dd4ab-4c75-4182-96d5-a5058dde81b0.jpg" class="ipason_bg">
        <br>
        <flexbox orient="vertical" :gutter="0" style="overflow: hidden;">
            <flexbox-item v-for="(customer_data,index) of customerData" :key="customer_data.customer_txt">
                <div class="msg_lie">
                    <img :src="customer_data.customer_img" class="customer_vx">
                    <div class="msg_lieRight">{{customer_data.customer_txt}}</div>
                </div>
            </flexbox-item>
        </flexbox>
        <Vtabbar></Vtabbar>
    </div>
</template>


<script>
  import {Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider} from 'vux'
  import Vtabbar from './components/tabbar'
  var customerData = require('../assets/data_json/customer.json')
  
  export default {
    data () {
      return {
        customerData: customerData.slice(0, 5)
      }
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
    .ipason_bg{
        width: 94%;
        margin: 0 auto;
        display: block;
        border-radius: .2rem /* 20/100 */;
    }
    .msg_lie{
      height: 1.8rem /* 150/100 */;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: .5rem;
      border-bottom: 0.01rem solid #dde0ef;
    }
    .customer_vx{
      width: 1.3rem /* 100/100 */;
      height: 1.3rem /* 50/100 */;
      border-radius: 50%;
    }
    .msg_lieRight{
      margin-left: .3rem;
    }
    
    
    
   
</style>