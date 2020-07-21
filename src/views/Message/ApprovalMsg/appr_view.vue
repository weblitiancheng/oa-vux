
<template>
  <div>
    <x-header>审批查看</x-header>

    <div class="appr_steps">
      <card class="header">
          <div slot="content">
              <div>
                  <img src="@/assets/wximg.jpg" alt="">
                  <span>lalala</span>
              </div>
          </div>
      </card>
      <card class="appr_msg">
        <div slot="content">
            <flexbox orient="vertical" :gutter="0">
              <!-- <flexbox-item>
                <div class="msg_row">
                    <span class="row_l">审批编号</span>
                    <span class="row_r">2020071941754450002</span>
                </div>
              </flexbox-item> -->
              <flexbox-item  
                v-for="(items,index) of appr_msg" 
                :key="index"
              >
                <div class="msg_row">
                    <span class="row_l">{{items.appr_msg}}</span>
                    <span class="row_r">{{items.appr_conent}}</span>
                </div>
              </flexbox-item>
            </flexbox>   
        </div>
      </card>
      <card style="overflow:visible">
          <div slot="content">
              <div class="appr_items">
                <flexbox :gutter="0" orient="vertical">
                  <flexbox-item>
                    <div class="flexbox">
                      <div class="flex-img">
                          <img src="@/assets/wximg.jpg" alt="">
                      </div>
                      <div class="flex-text">
                          <div class="flex-l">
                              <h5>发起申请</h5>
                              <p>沈志雄</p>
                              <p></p>
                          </div>
                          <div class="flex-r">
                              <span>2020/6/24 14:42</span>
                          </div>
                      </div> 
                    </div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flexbox">
                      <div class="flex-img">
                          <img src="@/assets/wximg.jpg" alt="">
                      </div>
                      <div class="flex-text">
                  
                          <div class="flex-l">
                              <h5>审批人</h5>
                              <p>啦啦啦</p>
                              <p>(审批中)</p>
                          </div>
                          <div class="flex-r">
                              <span>14:42</span>
                          </div>
                      </div> 
                    </div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flexbox">
                      <div class="flex-img">
                          <img src="@/assets/wximg.jpg" alt="">
                      </div>
                      <div class="flex-text">
                  
                          <div class="flex-l">
                              <h5>发起申请</h5>
                              <p>沈志雄</p>
                              <p>(审批中)</p>
                          </div>
                          <div class="flex-r">
                              <span>2020/6/24 14:42</span>
                          </div>
                      </div> 
                    </div>
                  </flexbox-item>
                  <flexbox-item>
                    <div class="flexbox">
                      <div class="flex-img">
                          <img src="@/assets/system_ico.jpg" alt="">
                      </div>
                      <div class="flex-text">
                  
                          <div class="flex-l">
                              <h5>发起申请</h5>
                              <p>四个审批人</p>
                              <p></p>
                          </div>
                          <div class="flex-r">
                              <span :class="[activeClass]" @click="handleAppr"></span>
                          </div>
                      </div> 
                    </div>
                    <div class="morethan">
                      
                    </div>
                  </flexbox-item>
                </flexbox>
              </div>
          </div>
      </card>
      <card class="footBar">
          <div slot="content">
            <div class="footBar_btn">
                <x-button type="warn" mini link='/appr_refuse'>拒绝</x-button>
                <x-button type="primary" mini link="/appr_agree">同意</x-button>
            </div>
          </div>
      </card>
    </div>
  </div>
</template>

<script>

import { Flexbox, FlexboxItem, XHeader, Card, XButton } from 'vux'

export default {
  name: 'appr',
  data () {
    return {
      activeClass: 'icon-shangjiantou',
      //模拟msg的信息
      appr_msg: [
        {
          appr_msg:'审批编号',
          appr_conent:2020071941754450002
        },
        {
          appr_msg:'所在部门',
          appr_conent:'软件开发部'
        },
        {
          appr_msg:'事由',
          appr_conent:'啦啦啦啦啦啦啦啦啦啦啦啦d啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
        },
        {
          appr_msg:'金额',
          appr_conent:0
        },
        {
          appr_msg:'附件',
          appr_conent:''
        }
      ],
      // 如果审批人的个数超过俩个的话 .morethen的div显示，且span里里面有点击事件
    }
  },
  methods: {
    handleAppr () {
      this.activeClass ==='iconfont icon-xiajiantou' ?  this.activeClass='iconfont icon-shangjiantou' : this.activeClass = 'iconfont icon-xiajiantou'
    }
  },
  created () {
  },
  components: {
    Flexbox,
    FlexboxItem,
    XHeader,
    Card,
    XButton
  },
  mounted () {
    console.log(this.$refs)
  }
}
</script>

<style scoped lang='less'>
.header{
  border-bottom: 1px solid #e2d9d9;
  padding: .185rem;
  img{
    box-sizing: border-box;
    width: 2.13rem;
    height: 2.13rem;
    border: .05rem solid #8687b6;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .556rem;
    
  }
  span{
    font-weight: 700;
    font-size: .37rem;
    color:#0e1055;  
  }
}
.appr_msg{
  padding: .2rem .556rem;
  margin-top: 0;
  .msg_row{
    display: flex;
    padding: .1rem 0;
    font-size: .352rem;
   
    .row_l{
      flex: 1;
      color: #bebebe;
    }
    .row_r{
      flex: 2;
      color:#0e1055 ;
    }
  }
}
.appr_steps{
  padding-bottom: 1.259rem;
 .appr_items{
    padding-top: .5rem;
    overflow: visible;
    // 从第二flexbox开始才有流程细线
    & .vux-flexbox-item+.vux-flexbox-item .flexbox .flex-img::after{
      display: block;
      content: '';
      position: absolute;
      height: 1rem;
      width: .056rem;
      background: #d8daec;
      top:-1rem;
      left: 1.5rem;
    }
    .flexbox,.morethan{
      position: relative;
      padding-left: 1rem;
      padding-bottom: .6rem;
      width: 100%;
      
      display: flex;
      .flex-img{
        flex: 1;
        img{
        
          width: 1.157rem;
          height: 1.157rem;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .flex-text{
        flex: 2;
        display: flex;
        .flex-l{
          flex: 1;
          h5{
             height: .556rem;
          }
          p{
          color: #a0a0a3;
          }
          p + p {
            height: 20px;
            color:#eb6a1a
          }
        }
        .flex-r{
          flex: 2;
        }
      }
    }
 }
}
.footBar{
  position: fixed;
  width: 100%;
  height: 1.259rem;
  bottom: 0;
  border-top: 1px  solid  #ccc;
  .footBar_btn{
   float: right;
   /deep/ .weui-btn_mini{
     margin-right: .385rem;
     margin-top: 0.25rem;

   }
  }
}




</style>
