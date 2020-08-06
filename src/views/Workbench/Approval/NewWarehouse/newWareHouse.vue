<template>
    <div>
        <sticky>
            <x-header>新建仓库</x-header>
        </sticky>
        <group>
            <x-input
                title="仓库名称"
                placeholder="请输入"
                label-width = '4rem'
                v-model="stroeName"
            >
            </x-input>
            <x-textarea
                title="仓库用途"
                placeholder="请输入"
                label-width = '4rem'
                v-model="stroeUse"
            >
            </x-textarea>
            <x-input
                title="创建部门"
                placeholder="请输入"
                label-width = '4rem'
                v-model="creDepartment"
            >
            </x-input>
            <x-input
                title="要创建仓库的人"
                placeholder="请选择"
                label-width = '4rem'
                v-model="whoCreate"
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
  name: 'newWareHouse',
  data () {
    return {
      // 仓库名称
      stroeName: '',
      // 仓库用途
      stroeUse: '',
      // 创建部门
      creDepartment: '',
      // 要创建仓库的人
      whoCreate: ''
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
.vux-x-textarea label.weui-label{
    width: 4rem !important;
}
// card_steps 通用样式结束
.vux-card-content{
  padding: .5rem .5rem 0;
}
.card_steps{
  // margin-bottom: 1.259rem;
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