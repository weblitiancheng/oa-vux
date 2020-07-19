<template>


    <div>
      <x-header>审批处理</x-header>
      <sticky>
          <tab
              active-color = '#828abd' 
              bar-active-color = '#2c409c'
              default-color = '#2c409c'
                
          >
              <tab-item 
                  selected badge-label="333"  
                  @on-item-click="handler">全部</tab-item>
              <tab-item 
                  badge-label="999" 
                  @on-item-click="handler">代办</tab-item>
          </tab>
      </sticky>
      <div class="tab-items" v-show="tabIndex" >
        <!-- <p class="drop-down" v-if="pullDown">松手刷新数据...</p> -->
        <load-more 
          :tip="pullDownText" 
          class="drop-down" 
          v-if="pullDown"
          style="color:#cababa"
        > 
        </load-more>
        <div class="wrapper" ref='wrapper'>
          <div class="content">
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>审批</h5>
                      <h4>xxx的请假审批</h4>
                      <span>待审批</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/appr_ico.png" alt=""></div>
            </div>
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>审批</h5>
                      <h4>xxx的请假审批</h4>
                      <span>已同意</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/appr_ico.png" alt=""></div>
            </div>
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>抄送</h5>
                      <h4>xxx的请假审批</h4>
                      <span>查看</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/pic12b.png" alt=""></div>
            </div>
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>抄送</h5>
                      <h4>xxx的请假审批</h4>
                      <span>已同意</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/pic12b.png" alt=""></div>
            </div>
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>审批</h5>
                      <h4>xxx的请假审批</h4>
                      <span>已同意</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/pic12b.png" alt=""></div>
            </div>
            <div class="list-items">
              <router-link to="/appr_view" class="appr_link">
                <card class="appr_card">
                  <div slot="content">
                      <h5>审批</h5>
                      <h4>xxx的请假审批</h4>
                      <span>已同意</span>
                  </div>
                </card>  
              </router-link>
              <div class="time">昨天15：30</div>
              <div class="icon"><img src="../assets/appr_ico.png" alt=""></div>
            </div>
      
             <load-more 
                :tip="pullUpText" 
                class="drop-down" 
                v-if="pullUp"
                style="color:#cababa"
             ></load-more>
          </div>
      
        </div>
        
      
      </div>
      <div class="tab-items" v-show='!tabIndex' >
        <load-more 
          :tip="pullDownText" 
          class="drop-down" 
          v-if="pullDown"
          style="color:#cababa"
        >
        </load-more>
        <!-- <p class="drop-down" v-if="pullDown">松手刷新数据...</p> -->
        <div class="wrapperTwo" ref='wrapperTwo'>
          <div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/refuse" class="refuse">拒绝</router-link>
                          <router-link to="/agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>
            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <div class="ready_items">
              <router-link to="/appr_view">
                <card class="appr-card daiban">
                  <div slot="content">
                      <div class="appr-msg">
                        <img src="../assets/appr_ico.png" alt="">
                        <span>xxx的xx审批</span>
                      </div>
                      <div class="feedback">
                          <router-link to="/appr_refuse" class="refuse">拒绝</router-link>
                          <router-link to="/appr_agree" class="agree">同意</router-link>
                      </div>
                  </div>
                </card>
              </router-link>

            </div>
            <load-more 
              :tip="pullUpText" 
              class="drop-down" 
              v-if="pullUp"
              style="color:#cababa"
            >
            </load-more>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { Tab, TabItem, Sticky, Card, Flexbox, FlexboxItem, XHeader, LoadMore } from 'vux'

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Card,
    Flexbox,
    FlexboxItem,
    XHeader,
    LoadMore
  },
  data () {
    return {
      tabIndex: true,
      pullDown: false,
      pullUp: false,
      pullDownText: '正在加载',
      pullUpText: '加载更多'
    }
  },
  methods: {
    // tab组件提供的方法，有一个参数表示当前tab的索引
    handler (idx) {
      idx === 0 ? this.tabIndex = true : this.tabIndex = false
      if (idx === 1) {
        // idx=1初始化scroll对象
        this.scrollFn(this.$refs.wrapperTwo)
      } else if (idx === 0) {
        // idx=0初始化scroll对象
        this.scrollFn(this.$refs.wrapper)
      }
    },
    scrollFn (ele) {
      this.$nextTick(() => {
        this.scroll = new BScroll(ele, {
          click: true,
          scrollY: true,
          probeType: 3
        })
        this.scroll.on('scroll', (pos) => {
              // 如果下拉超过20px 就显示下拉刷新的文字
          pos.y > 20 ? this.pullDown = true : this.pullDown = false
          this.scroll.maxScrollY > pos.y + 10 ? this.pullUp = true : this.pullUp = false
        })
          // touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on('touchEnd', (pos) => {
              // 下拉动作
          if (pos.y > 20) {
            console.log('下拉刷新成功')
            this.pullDown = false
          }
              // 上拉加载 总高度>下拉的高度+10 触发加载更多
          if (this.scroll.maxScrollY > pos.y + 10) {
            console.log('加载更多')
            this.pullUp = true
              // 使用refresh 方法 来更新scroll  解决无法滚动的问题
            this.scroll.refresh()
          } else {
            this.pullUp = false
          }
          console.log(this.scroll.maxScrollY + '总距离----下拉的距离' + pos.y)
        })
        console.log(this.scroll.maxScrollY)
      })
    }
  },
  mounted () {
    // 页面初始化的时候，值初始化一个scroll对象
    this.scrollFn(this.$refs.wrapper)
  }
}
</script>

<style lang="less" scoped>


.wrapper,.wrapperTwo{
  position: absolute;
  left: 0;
  top: 3.23rem;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.list-items{
  height: 5.046rem; /*545px*/
  // background: pink;
  position: relative;
  .appr_link{
    position: absolute;
    box-sizing: border-box;
    width: 7.639rem;
    left: 1.963rem;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: .185rem;
    .appr_card{
      padding-left: .417rem;
    }
    h5{
      color: #444882;
      padding-top: .315rem;
      height: .796rem;
    }

    h4{
      color: #06103e;
      height: .972rem;
      font-weight: 700;
    }

    span{
      display: inline-block;
      color: #71ccb6;
      height: .741rem
    }
  }
  .time{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: .556rem;
    line-height: .556rem;
    padding: 0 .185rem;
    color: #2c409c;
    background: #e2e2ea;
    border-radius: .185rem;
  }
  .icon{
    position: absolute; 
    left: .37rem;
    top: .556rem;
    width: 1.343rem;
    height: 1.343rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
// .ready_items:first-child{
//   // background: #000;

// }
.ready_items{
  box-sizing: border-box;
  height: 3.296rem;
  .daiban{
    width: 9.222rem;
    height: 2.778rem;
    margin-left: .389rem;
    .appr-msg{
      padding-top: .313rem;
      padding-left: .278rem;
      img{
          width: 1.259rem;
          height: 1.259rem;
          padding-right: .648rem;
          vertical-align: middle;
      }
      span{
        font-size: .463rem;
      }
    }
    .feedback{
      padding-bottom: .278rem;
      display: flex;
      justify-content: flex-end;
    .refuse,.agree{
      font-size: .37rem;
      margin-right: .741rem;
    }
    .refuse{
      color: #fb5151;
    }
    .agree{
      color: #85d011
    }
  }

  }
}



  // .daiban{
  //   margin-left: .343rem
  // }

  // .appr-msg{
    // padding-top: .213rem;
  //   img{
      // width: 1.259rem;
      // height: 1.259rem;
      // padding-right: .648rem;
      // vertical-align: middle;
  //   }
  //   span{
  //     color: #1a1e4c;
  //     font-size: 16px
  //   }
  // }
  // .feedback{
  //   padding-bottom: .278rem;
  //   display: flex;
  //   justify-content: flex-end;
  //   .refuse,.agree{
      
  //     margin-right: .741rem;
  //   }
  //   .refuse{
  //     color: #fb5151;
  //   }
  //   .agree{
  //     color: #85d011
  //   }
  // }
 




</style>
