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
    
    <sticky>
      <x-header>请假</x-header>
    </sticky>
    <div class="contanier">
      <group>
        <x-input 
          title="事由" 
          v-model = "reason" 
          placeholder = '请输入'
           label-width = '4rem'
        >
        </x-input>
        <x-input
          title="金额" 
          v-model = "money" 
          placeholder = '输入金额'
          label-width = '4rem'
        >
        </x-input>
        <cell title="附件">
            <router-link :to="{path:'/appr_annex'}">{{annex_msg}}</router-link>
       </cell>
      </group>
      <card class="card_steps" style="padding: .5rem .5rem 0;">
          <div slot="content">
              <div class="steps_title">审批流程</div>
              <div class="appr_items">
                <flexbox 
                  :gutter="0" 
                  orient="vertical"
                >
                    <flexbox-item>
                        <div class="flexbox">
                            <div class="flex-img">
                              <img src="@/assets/pic13.png" alt="">
                              <div class="level">
                                  发起人
                              </div>
                          </div>
                          <div class="flex-text">
                              
                              <div class="appr_people">
                                <img src="@/assets/wximg.jpg" alt="">
                                <br>
                                <p>李天成</p>
                              </div>

                          </div>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flexbox">
                            <div class="flex-img">
                              <img src="@/assets/pic11.png" alt="">
                              <div class="level">
                                  一级审批人
                              </div>
                          </div>
                          <div class="flex-text">
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
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flexbox">
                            <div class="flex-img">
                              <img src="@/assets/pic11.png" alt="">
                              <div class="level">
                                  二级审批人
                              </div>
                          </div>
                          <div class="flex-text">
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
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flexbox">
                            <div class="flex-img">
                              <img src="@/assets/pic12.png" alt="">
                              <div class="level">
                                  抄送
                              </div>
                          </div>
                          <div class="flex-text">
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
import { Group, XHeader, XInput, Cell, Flexbox, FlexboxItem, Card, XButton, Sticky } from 'vux'

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
    XButton,
    Sticky
  }
}
</script>

<style lang='less' scoped >

// 修改附件input中样式
.weui-cells .weui-cell:last-child {
   /deep/.weui-cell__ft {
     flex: 1.3;
     text-align: left;
   }
  
}

// card_steps 

.card_steps{
  margin-bottom: 1.259rem;
  overflow: visible;
  .steps_title{
    padding-bottom: .5rem;
    font-size: .389rem;
    
  }
 .appr_items{
    overflow: visible;
    .flexbox{
      display: flex;
      padding-bottom: .5rem;

      .flex-img{
        position: relative;
        flex: 1.2;
        display: flex;
        img{
          vertical-align: middle;
          width: .5rem;
          height: .5rem;
          padding-right: .5rem;
        }
        &::after{
          content: '';
          display: block;
          position: absolute;
          height: 100%;
          width: .074rem;
          left: .2rem;
          top: .5rem;
          background: #cccff3;
        }
      }

      .flex-text{
        flex: 2;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        .appr_people{
          padding-left: .4rem;
          img{
            width: 1.157rem;
            height: 1.157rem;
            border-radius: 50%;
          }
        }
      
      }
    }
    // 最后一个flexbox的flex-img没有
    .vux-flexbox .vux-flexbox-item:last-child .flexbox .flex-img::after{
      display: none
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
button.weui-btn{
  height: 100%;
}
</style>
