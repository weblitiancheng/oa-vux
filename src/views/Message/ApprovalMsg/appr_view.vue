
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
                  <!-- <flexbox-item>
                    <div class="flexbox">
                      <div class="flex-img">
                          <img src="@/assets/wximg.jpg" alt="">
                          <div class="line"></div>
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
                    <div class="flexbox" >
                      <div class="flex-img">
                          <img src="@/assets/system_ico.jpg" alt="">
                          <div class="line"></div>
                      </div>
                      <div class="flex-text">
                          <div class="flex-l">
                              <h5>发起申请</h5>
                              <p>四个审批人</p>
                              <p></p>
                          </div>
                          <div class="flex-r">
                              <span 
                                :class="activeClass" 
                                @click="handleAppr($event)" 
                              
                              > 
                                <div class="morethan" v-if="isActive">
                                  <ul>
                                    <li>
                                      <img src="@/assets/wximg.jpg" alt="">
                                      <p>沈志雄</p>
                                      <p>(通过)</p>
                                    </li>
                                    <li>
                                      <img src="@/assets/wximg.jpg" alt="">
                                      <p>沈志雄</p>
                                      <p>(通过)</p>
                                    </li>

                                  </ul>
                                  <p>2020/6/24 14:42</p>
                                </div>
                              </span>
                          </div>
                      </div> 
                    </div>

                  </flexbox-item>
                  <flexbox-item>
                    <div class="flexbox" >
                      <div class="flex-img">
                          <img src="@/assets/system_ico.jpg" alt="">
                          <div class="line"></div>
                      </div>
                      <div class="flex-text">
                          <div class="flex-l">
                              <h5>发起申请</h5>
                              <p>四个审批人</p>
                              <p></p>
                          </div>
                          <div class="flex-r">
                              <span 
                                :class="activeClass" 
                                @click="handleAppr($event)" 
                              
                              > 
                                <div class="morethan" v-if="isActive">
                                  <ul>
                                    <li>
                                      <img src="@/assets/wximg.jpg" alt="">
                                      <p>沈志雄</p>
                                      <p>(通过)</p>
                                    </li>
                                    <li>
                                      <img src="@/assets/wximg.jpg" alt="">
                                      <p>沈志雄</p>
                                      <p>(通过)</p>
                                    </li>

                                  </ul>
                                  <p>2020/6/24 14:42</p>
                                </div>
                              </span>
                          </div>
                      </div> 
                    </div>

                  </flexbox-item> -->
                  <flexbox-item
                    v-for="(items,index) of appr_stemps"
                    :key="index"              
                  >
                    <div class="flexbox">
                      <div class="flex-img">
                          <img :src="items.steps_img" alt="">
                          <div class="line"></div>
                      </div>
                      <div class="flex-text">
                          <div class="flex-l">
                              <h5>{{items.steps_text}}</h5>
                              <p>{{items.steps_people}}</p>
                              <p>{{items.steps_status}}</p>
                          </div>
                          <div class="flex-r">
                              <span
                                :class="items.activeClass?activeClass:''"
                                @click="handleFold($event,items)"
                                :ref = 'index'
                              >
                                {{items.option?'':items.steps_time}}
                                <div class="morethan" v-show="items.option&&items.isActive">
                                  <ul>
                                    <!-- <li>
                                      <img src="@/assets/wximg.jpg" alt="">
                                      <p>沈志雄</p>
                                      <p>(通过)</p>
                                    </li> -->
                                    <li 
                                      v-for="(list,idx) of items.option"
                                      :key=idx
                                    >
                                      <img :src="list.steps_img" alt="">
                                      <p>{{list.steps_people}}</p>
                                      <p>{{list.steps_status}}</p>
                                    </li>

                                  </ul>
                                  <p>{{items.steps_time}}</p>
                                </div>
                              </span>
                          </div>
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
      activeClass: 'iconfont icon-shangjiantou',
      // 模拟msg的数据
      appr_msg: [
        {
          appr_msg: '审批编号',
          appr_conent: 2020071941754450002
        },
        {
          appr_msg: '所在部门',
          appr_conent: '软件开发部'
        },
        {
          appr_msg: '事由',
          appr_conent: '啦啦啦啦啦啦啦啦啦啦啦啦d啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
        },
        {
          appr_msg: '金额',
          appr_conent: 0
        },
        {
          appr_msg: '附件',
          appr_conent: ''
        }
      ],
      // 模拟appr_steps流程图的数据
      appr_stemps: [
        {
          steps_img: '/static/img/wximg.c5b998e.jpg',
          steps_text: '发起申请',
          steps_people: '李天成',
          steps_time: '2020/6/24 14:42',
          activeClass: false

        },
        {
          steps_img: '/static/img/wximg.c5b998e.jpg',
          steps_text: '审批人',
          steps_people: '沈志雄',
          steps_time: '2020/6/24 14:42',
          steps_status: '通过',
          activeClass: false
        },
        {
          steps_img: '/static/img/wximg.c5b998e.jpg',
          steps_text: '审批人',
          steps_people: '四个审批人',
          activeClass: true,
          steps_time: '2020/6/24 14:42',
          isActive: false,
          option: [
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '李天成'
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '

            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            }
          ]
        },
        {
          steps_img: '/static/img/wximg.c5b998e.jpg',
          steps_text: '审批人',
          steps_people: '四个审批人',
          activeClass: true,
          isActive: false,
          steps_time: '2020/6/24 14:42',
          option: [
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '李天成'
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '

            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            }
          ]
        },
        {
          steps_img: '/static/img/wximg.c5b998e.jpg',
          steps_text: '审批人',
          steps_people: '四个审批人',
          activeClass: true,
          isActive: false,
          steps_time: '2020/6/24 14:42',
          option: [
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '李天成'
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '

            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            },
            {
              steps_img: '/static/img/wximg.c5b998e.jpg',
              steps_status: '通过',
              steps_people: '啦啦啦 '
            }
          ]
        }
      ]
      // 如果审批人的个数超过俩个的话 span俩面的ul显示，且span里面有点击事件

    }
  },
  methods: {
    handleFold (e, items) {
      if (items.option) {
        this.activeClass === 'iconfont icon-xiajiantou' ? this.activeClass = 'iconfont icon-shangjiantou' : this.activeClass = 'iconfont icon-xiajiantou'
        items.isActive = !items.isActive
        this.$nextTick(() => {
          // 当前span的高度
          let spanHeight = e.target.offsetHeight
          console.log(spanHeight)
          let node = e.target.parentNode.parentNode.parentNode.querySelector('.line')
          node.style.height = spanHeight + 'px'
        })
      }
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

// appr_steps 通用样式
/*
  img 是所有的流程图的图片
  h5  是发起申请的行  
  p   第一个是审批人 
  p+p 是审批状态
*/ 
img{
  width: 1.157rem;
  height: 1.157rem;
  border-radius: 50%;
  vertical-align: middle;
}
h5{
    height: .556rem;
}
p{
color: #a0a0a3;
font-size: .3rem;
}
p + p {
  height: 20px;
  color:#eb6a1a;
  font-size: .278rem
}
// appr_steps 通用样式结束

.appr_steps{
  padding-bottom: 1.259rem;
 .appr_items{
    padding-top: .5rem;
    overflow: visible;
    // 最有一行flexbox没有流程细线(细线是加载flex-img中)
    & .vux-flexbox-item:last-child .flexbox .flex-img .line{
      height: 0 !important;
    }
    .flexbox{
      box-sizing: border-box;
      position: relative;
      padding-left: 1rem;
      padding-bottom: .6rem;
      width: 100%;
      display: flex;
      .flex-img{
        flex: 1;
        .line{
         
          position: absolute;
          height: 1rem;
          width: .056rem;
          background: #d8daec;
          top:1.2rem;
          left: 1.5rem;
        }
      }
      .flex-text{
        flex: 2;
        display: flex;
        .flex-l{
          flex: 1;
        }
        .flex-r{
          flex: 2;
          span{
            display: block;
            .morethan{
              ul{
                display: flex;
                flex-wrap: wrap;
                li{
                  list-style: none;
                  padding-right: .4rem;
                  padding-bottom: .4rem;
                }
              }
              & >p{
                text-align: center;
              }
            }
           
          }
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
