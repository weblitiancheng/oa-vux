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
            <flexbox-item>
                <div class="my_lie">
                    <img src="../assets/pic8.png" class="pic8">
                    <div class="my_lieRight">
                    <p>我审批的</p>
                    </div>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="my_lie">
                    <img src="../assets/pic9.png" class="pic9">
                    <div class="my_lieRight">
                    <p>我发起的</p>
                    </div>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="my_lie">
                    <img src="../assets/pic10.png" class="pic10">
                    <div class="my_lieRight">
                    <p>抄送我的</p>
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
  
  export default {
    data () {
      return {
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
    .message_box{
        width: 94%;
        display: flex;
        align-items: center;
        padding: 0.4rem 0rem;
        margin: 0 auto;
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
    .pic8{
      width: 1.2rem /* 100/100 */;
      height: 1.2rem /* 50/100 */;
      border-radius: 0.2rem;
    }
    .pic9{
      width: 1.2rem /* 100/100 */;
      height: 1.2rem /* 50/100 */;
      border-radius: 0.2rem;
    }
    .pic10{
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
    .my_in_box span{
      font-size: 0.4;
      color: #a5abcf;
    }
    .red_size{
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      color: red !important;
      text-align: center;
      line-height: 0.6rem;
      display: inline-block;
      border: 0.02rem solid #dde0ef;
    }
    .left_size{
      width: 6rem;
    }
</style>