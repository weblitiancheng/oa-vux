<template>
    <div>
        <sticky>
            <x-header>新建仓库</x-header>
        </sticky>
        <group>
            <x-input 
                title="店铺名称" 
                v-model.trim = "storeName" 
                placeholder = '区分大小写'
                
            >
            </x-input>
            <x-input
                title="对应公司" 
                v-model.trim = "company" 
                placeholder = '请准确完整填写公司名称 '
                
            >
            </x-input>
            <popup-radio 
                title="开店平台" 
                :options="options1" 
                v-model.trim="platform"
                placeholder="请选择"

            >
            </popup-radio>
            <popup-radio 
                title="发货仓库" 
                :options="options2" 
                v-model.trim="ship"
                placeholder="请选择"
            >
            </popup-radio>
            <x-input
                title="店铺发货地址" 
                v-model.trim = "address" 
                placeholder = '按照省、市、区、街道等 '      
            >
            </x-input>
            <x-input
                title="店铺主账号" 
                v-model.trim = "account" 
                placeholder = '请输入 '      
            >
            </x-input>
            <x-input
                title="店铺密码" 
                type="password"
                v-model.trim = "psw" 
                placeholder = '请输入'      
            >
            </x-input>
        </group>
        <card class="card_steps">
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
</template>
<script>
import { XHeader, Sticky, Group, XInput, PopupRadio, XTextarea, XButton, Card, Flexbox, FlexboxItem, Popup } from 'vux'
export default {
  data () {
    return {
      storeName: '',
      company: '',
      platform: '',
      ship: '',
      address: '',
      account: '',
      psw: '',
      options1: ['淘宝', '京东', '苏宁', '拼多多', '后台', '微店', '小红书', '有赞'],
      options2: ['1', '2', '3', '4', '5']
    }
  },
  components: {
    XHeader,
    Sticky,
    Group,
    XInput,
    PopupRadio,
    XTextarea,
    XButton,
    Card,
    Flexbox,
    FlexboxItem,
    Popup
  }
}
</script>
<style lang="less" scope>
// 修改vux自己定义组件的样式
    body{
        color: #000129;
        font-size: .37rem !important;
    }
  .vux-cell-value{
    color: #000129 !important;
  }
  .weui-cell_access .weui-cell__ft{
    flex:1;
    text-align: left !important;
  }
  .weui-cell__ft::after{
    content: '';
    width: 0 !important;
    height: 0 !important;
    border-style: none !important;
  }
  .weui-textarea{
    text-align: center;
  }
  .weui-cell__primary{
    text-align: center;
  }
.weui-input{
  text-align: center;
}
// card_steps 通用样式结束
.vux-card-content{
  padding: .5rem .5rem 0;
}
.card_steps{
  margin-bottom: 1.259rem;
  overflow: visible;
  .steps_title{
    padding-bottom: .5rem;
    font-size: .389rem;
    
  }
 .appr_items{
    // padding: .5rem 1rem 0;
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

// 底部按钮
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