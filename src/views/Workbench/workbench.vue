<template>
    <div style="overflow-x: hidden;">
      <img src="https://ipasoncnwebsite.oss-cn-shanghai.aliyuncs.com/images/162dd4ab-4c75-4182-96d5-a5058dde81b0.jpg" class="ipason_bg">
      <br>
      <div class="work_tit">
        <h2>审批</h2>
        <h3 @click="fold()" v-if="niceData.length>4">{{text}}</h3>
      </div>
      <br>
      <div class="nice_li">
        <ul class="clearfloat">
          <li v-for="(nice_data) of showData" :key="nice_data.bg_txt">
            <router-link :to='nice_data.bg_link'>
               <img :src="nice_data.bg_url">
            </router-link>
            <p>{{nice_data.bg_txt}}</p>
          </li>
        </ul>
      </div>
      <Vtabbar></Vtabbar>
    </div>
</template>


<script>
  import {Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider} from 'vux'
  import Vtabbar from '@/views/components/tabbar'
  import niceData from '@/assets/data_json/workbench.json'
  export default {
    data () {
      return {
        showData: niceData,
        niceData: niceData,
        text: '收起'
      }
    },
    methods: {
      fold () {
        if (this.text === '收起') {
          this.showData = niceData.slice(0, 4)
          this.text = '展开'
        } else {
          this.showData = niceData
          this.text = '收起'
        }
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
  .ipason_bg{
    width: 94%;
    margin: 0 auto;
    display: block;
    border-radius: .2rem /* 20/100 */;
  }


  ul li{
    list-style-type: none;
  }
  .nice_li{
    margin: 0 auto;
  }
  .nice_li li{
    float: left;
    width: 24%;
    margin-right: 1%;
    margin-bottom: 0.5rem;
  }
  .nice_li img{
    width: 1.5rem /* 150/100 */;
    height: 1.5rem /* 150/100 */;
    display: block;
    margin: 0 auto;
    border-radius: 0.2rem;
  }
  .nice_li p{
    text-align: center;
    width: 100%;
    margin-top: 0.1rem;
  }
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  .clearfloat{zoom:1}

  .work_tit{
    display: flex;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    align-items: center;
  }
</style>