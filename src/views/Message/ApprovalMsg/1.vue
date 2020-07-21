
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
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        所在部门
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       软件开发部
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        用章公司
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       武汉攀升鼎承科技有限公司
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        用途
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       啦啦
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        金额
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       ￥300,000.00
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        合同编号
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       啦啦啦
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
             <flexbox-item :span="4" class="firstPart">
                    <div>
                        对方名称
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                       啦啦啦
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
              <flexbox-item :span="4" class="firstPart">
                    <div>
                        用印份数
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                      5
                    </div>
              </flexbox-item>
            </flexbox>
            <flexbox :gutter="0"  wrap="wrap" class="flexbox">
              <flexbox-item :span="4" class="firstPart">
                    <div>
                        附件
                    </div>
              </flexbox-item>
              <flexbox-item :span="8">
                    <div class="secondPart">
                     
                    </div>
              </flexbox-item>
            </flexbox>
            
        </div>
      </card>
      <card style="overflow:visible">
          <div slot="content">
              <div class="appr_items">
                <flexbox :gutter="0"  wrap="wrap" class="flexbox">
                  <flexbox-item :span="4">
                    <div class="flex-img">
                        <img src="@/assets/wximg.jpg" alt="">
                    </div>
                  </flexbox-item>
                  <flexbox-item :span="8">
                    <div class="flex-text">
                
                        <div class="flex-l">
                            <h5>发起申请</h5>
                            <p>沈志雄</p>
                        </div>
                        <div class="flex-r">
                            <span>2020/6/24 14:42</span>
                        </div>
                    </div>  
                  </flexbox-item>
                </flexbox>
                <flexbox :gutter="0"  wrap="wrap" class="flexbox">
                  <flexbox-item :span="4">
                    <div class="flex-demo flex-img">
                        <img src="@/assets/system_ico.jpg" alt="">
                    </div>
                  </flexbox-item>
                  <flexbox-item :span="8">
                    <div class="flex-text">
                      <div class="flex-l">
                        <h5>审批人</h5>
                        <p>4人审批</p>
                      </div>
                      <div class="flex-r">
                         <span 
                          class="iconfont" 
                          :class="[activeClass]" 
                          @click="handleAppr"
                         ></span>
                      </div>
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
      activeClass: 'icon-xiajiantou'
    }
  },
  methods: {
    handleAppr () {
      this.activeClass ==='icon-xiajiantou' ?  this.activeClass='icon-shangjiantou' : this.activeClass = 'icon-xiajiantou'
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
  padding-left: .556rem;
  margin-top: 0;
  .flexbox{
    height: .87rem;
    font-size: .352rem;
    .firstPart{
      color: #bebebe;
    }
    .secondPart{
      color:#0e1055 ;
    }
  }
}

.appr_steps{
  padding-bottom: 1.259rem;
 .appr_items{
    padding-top: .5rem;
    overflow: visible;
    & .flexbox:last-child{
      padding-bottom: .6rem;
      &::after{
        height: 0;
      }
  }
 .flexbox{
    box-sizing: border-box;
    position: relative;
    padding: 0 1.1rem 1rem;
    &::after{
      display: block;
      content: '';
      position: absolute;
      top: 1.6rem;
      left: 1.6rem;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
      height: 1rem;
      width: .056rem;
      background: #d8daec;


    }
    .vux-flexbox-item{
      height: 1.628rem;
      display: flex;
      align-items: center;
    }
    img{
      position: relative;
      width: 1.157rem;
      height: 1.157rem;
      border-radius: 50%;
      vertical-align: middle;
    }

    .flex-text{
      display: flex;
      justify-content: space-between;
      .flex-l{
        h5{
          height: .556rem;
        }
        p{
          color: #a0a0a3;
        }
      }
      .flex-r{
          display: flex;
          width: 3.5rem;
          justify-content: center;
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
