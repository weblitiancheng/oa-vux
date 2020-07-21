<!--
 * @Author: your name
 * @Date: 2020-05-16 18:01:47
 * @LastEditTime: 2020-05-27 09:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oa-h5f:\Codes\oa-vux\src\views\appr.vue
--> 
<template>
  <div>
    <x-header>请假</x-header>
    <div class="contanier">
      <group>
        <x-input 
          title="事由" 
          v-model = "reason" 
          placeholder = '请输入'
          placeholder-align = 'center'
        >
        </x-input>
        <x-input
          title="金额" 
          v-model = "money" 
          placeholder = '输入金额'
          placeholder-align = 'center'
        >
        </x-input>
        <cell title="附件">
            <router-link :to="{path:'/appr_annex'}">{{annex_msg}}</router-link>
       </cell>
      </group>
      <card style="overflow:visible" class="appr_steps">
          <div slot="content">
            <div class="appr_items">
              <flexbox :gutter="0"  wrap="wrap" class="flexbox">
                <flexbox-item :span="4">
                  <div class="flex-img">
                      <img src="@/assets/pic13.png" alt="">
                  </div>
                  <div class="level">发起人</div>
                </flexbox-item>
                <flexbox-item :span="8">
                  <div class="flex-text">
                      <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>李天成</p>
                     </div>
                  </div>  
                </flexbox-item>
              </flexbox> 
              <flexbox :gutter="0"  wrap="wrap" class="flexbox ">
                <flexbox-item :span="4">
                  <div class="flex-img">
                      <img src="@/assets/pic11.png" alt="">
                  </div>
                  <div class="level">一级审批</div>
                </flexbox-item>
                <flexbox-item :span="8">
                  <div class="flex-text">
                      <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>啦啦啦</p>
                     </div>
                  </div>  
                </flexbox-item>
              </flexbox> 
              <flexbox :gutter="0"  wrap="wrap" class="flexbox ">
                <flexbox-item :span="4">
                  <div class="flex-img">
                      <img src="@/assets/pic11.png" alt="">
                  </div>
                  <div class="level">二级审批</div>
                </flexbox-item>
                <flexbox-item :span="8" class="">
                  <div class="flex-text ">
                     <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>李天成</p>
                     </div>
                      <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>李天成</p>
                     </div>
                  </div>  
                </flexbox-item>
              </flexbox>
              <flexbox :gutter="0"  wrap="wrap" class="flexbox ">
                <flexbox-item :span="4">
                  <div class="flex-img">
                      <img src="@/assets/pic11.png" alt="">
                  </div>
                  <div class="level">三级审批</div>
                </flexbox-item>
                <flexbox-item :span="8" class="">
                  <div class="flex-text ">
                     <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>李天成</p>
                     </div>
                      <div class="appr_people">
                        <img src="@/assets/wximg.jpg" alt="">
                        <br>
                        <p>李天成</p>
                     </div>
                  </div>  
                </flexbox-item>
              </flexbox>
              <flexbox :gutter="0"  wrap="wrap" class="flexbox"  style="padding-bottom:1.5rem ">
                <flexbox-item :span="4">
                  <div class="flex-img">
                      <img src="@/assets/pic12.png" alt="">
                  </div>
                  <div class="level">抄送</div>
                </flexbox-item>
                <flexbox-item :span="8">
                  <div class="flex-text" style="padding-top:1.2rem ">
                    <div class="appr_people">
                      <img src="@/assets/wximg.jpg" alt="">
                      <br>
                      <p>李天成</p>
                    </div>
                    <div class="appr_people">
                      <img src="@/assets/wximg.jpg" alt="">
                      <br>
                      <p>李天成</p>
                    </div>
                    <div class="appr_people">
                      <img src="@/assets/wximg.jpg" alt="">
                      <br>
                      <p>李天成</p>
                    </div>
                    <div class="appr_people">
                      <img src="@/assets/wximg.jpg" alt="">
                      <br>
                      <p>李天成</p>
                    </div> 
                    <div class="appr_people">
                      <img src="@/assets/wximg.jpg" alt="">
                      <br>
                      <p>李天成</p>
                    </div>                         
                  </div>  
                </flexbox-item>
              </flexbox>
            </div>
          </div>
      </card>
      <div class="submit_btn">
        <x-button
          style="color:#fff;background:#2e439c"
        >
          同意
        </x-button>
      </div>
    </div>
  </div>
</template>      

<script>
import {  Group, XHeader, XInput,  Cell, Flexbox, FlexboxItem, Card, XButton } from 'vux'

export default {
  name: 'appr',
  data () {
    return {
      reason: '',
      money: '',
      annex_msg: '从云盘选择'
    }
  },
  created () {
  },
  components: {
    XHeader,
    Group,
    XInput,
    Cell,
    Flexbox,
    FlexboxItem,
    Card,
    XButton
  }
}
</script>

<style lang='less' scoped >
// 超过四个审批人的flexbox,改变他线的长度 
.line::after{
  height: 2.5rem !important;
  top: -2rem !important;
}
// 修改附件input中样式
.weui-cells .weui-cell:last-child {
   /deep/.weui-cell__ft {
     flex: 1.2;
     text-align: left;
   }
  
}
.contanier{
  padding-bottom: 1.204rem;
}
.appr_steps{
  //  padding-bottom: 1.259rem;
  .appr_items{
    padding-top: .5rem;
    overflow: visible;


    .flexbox{
      box-sizing: border-box;
      position: relative;
      padding: 0 .5rem .8rem;
      // 第二个flexbox才西线
      & +.flexbox::after{
        display: block;
        content: '';
        position: absolute;
        top: -1.3rem;
        left: .75rem;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        height: 1.9rem;
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
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      .level{
        margin-left: .185rem;
        font-size: .296rem;
        color: #010728;
      }
      .flex-text{
        display: flex;
        justify-content: flex-end;
        width: 100%;
      
        flex-wrap: wrap;
        .appr_people{
          margin-left: 20px;
          img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
          } 
        }
      }
    }

  }
}
.submit_btn{
  position: fixed;
  width: 100%;
  height: 1.204rem;
  left: 0;
  bottom: 0;
 

}
</style>
