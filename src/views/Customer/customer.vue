<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-19 15:29:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-20 11:25:37
--> 
<template>
    <div>
        <img src="https://ipasoncnwebsite.oss-cn-shanghai.aliyuncs.com/images/162dd4ab-4c75-4182-96d5-a5058dde81b0.jpg" class="ipason_bg">
        <br>
        <div class="tissue_box" id="yuansu" ref="yuansu">
          <div class="tissue_row1" ref="element1">
            <img src="/src/assets/logo.png" class="tissue_img">
            <div class="tissue_one">武汉攀升鼎承科技有限公司</div>
          </div>
          <div class="tissue_row2" ref="element2">
            <img src="/src/assets/logo.png" class="tissue2_img">
            <div class="tissue_two">武汉攀升鼎承科技有限公司</div>
          </div>
          <div class="tissue_line"></div>
        </div>
        <br>
        <h2>常用联系人</h2>
        <flexbox orient="vertical" :gutter="0" style="overflow: hidden;">
            <flexbox-item v-for="(customer_data) of customerData" :key="customer_data.customer_txt">
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
  import Vtabbar from '@/views/components/tabbar'
  var customerData = require('@/assets/data_json/customer.json')
  
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
    },
    methods: {
      Height () {
        let height1 = this.$refs.element1.offsetHeight
        let height2 = this.$refs.element2.offsetHeight
        console.log(height1 + '和' + height2)
        this.$refs.yuansu.style.height = height1 + height2 + 'px'
      }
    },
    mounted () {
      this.Height()
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
      height: 1.3rem /* 150/100 */;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: .5rem;
      border-bottom: 0.01rem solid #dde0ef;
    }
    .customer_vx{
      width: 1rem /* 100/100 */;
      height: 1rem /* 50/100 */;
      border-radius: 50%;
    }
    .msg_lieRight{
      margin-left: .3rem;
    }
    h2{
      width: 94%;
      margin: 0 auto;
    }
    .tissue_box{
      width: 94%;
      margin: 0 auto;
      position: relative;
    }
    .tissue_row1{
      display: flex;
      align-items: center;
      height: 1rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    .tissue_img{
      width: 1rem;
      height: 1rem;
      border-radius: 0.3rem;
      display: block;
      margin-right: 0.5rem;
    }
    .tissue2_img{
      width: 1rem;
      height: 1rem;
      border-radius: 0.3rem;
      display: block;
      margin-right: 0.5rem;
      padding-left: 1.5rem;
    }
    .tissue_one{
      border-bottom: 0.01rem solid #bfbfbf;
      height: 1rem;
      line-height: 1rem;
      width: 8rem;
    }
    .tissue_row2{
      display: flex;
      align-items: center;
      height: 1rem;
      position: absolute;
      top: 1.1rem;
      left: 0;
    }
    .tissue_two{
      height: 1rem;
      line-height: 1rem;
      width: 8rem;
    }
    .tissue_line{
      border-left: 0.01rem solid #bfbfbf;
      border-bottom: 0.01rem solid #bfbfbf;
      position: absolute;
      top: 1.1rem;
      left: 0.5rem;
      width: 0.8rem;
      height: 0.6rem;
    }
   
</style>