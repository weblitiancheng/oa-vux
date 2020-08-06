<template>
    <div>
        
        <sticky
            ref="sticky"
            >
            <x-header>我审批的</x-header>
            <tab 
                active-color = '#828abd' 
                bar-active-color = '#2c409c'
                default-color = '#2c409c'
              
            >
                <tab-item 
                    selected
                    badge-label="333" 
                    @on-item-click="handler"
                >
                    带我审批的
                </tab-item>
                <tab-item
                    badge-label="999" 
                    @on-item-click="handler"
                >
                    我已经审批的
                </tab-item>
            </tab>
            <search
            :auto-fixed = false
            v-model="search"
            >
               
            </search>
            <load-more 
                :tip="pullDownText" 
                class="drop-down" 
                v-if="pullDown"
                style="color:#cababa"
              > 
            </load-more>
      </sticky>
       <div class="main">
           <div class="tab_items" v-show="tabIndex">

       
               <div class="wrapper" ref="wrapper"> 
                    <div class="content">
                     <p v-for="i in 100" :key="i">{{i}}</p>
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
           <div class="tab_items" v-show="!tabIndex">                
              <div class="wrapperTwo" ref="wrapperTwo">
                <div class="content">
                  <p v-for="i in 100" :key="i">{{i}}</p>
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
     
    </div>
    
    
</template>

<script>
import BScroll from 'better-scroll'
import { XHeader, Sticky, Tab, TabItem, Search, LoadMore } from 'vux'
export default {
  data () {
    return {
      tabIndex: true,
      pullDown: true,
      pullUp: true,
      search: '',
      pullDownText: '正在加载',
      pullUpText: '加载更多'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollFn(this.$refs.wrapper)
    })
  },
  methods: {
    handler (idx) {
      idx === 0 ? this.tabIndex = true : this.tabIndex = false
      if (idx === 0) {
        this.scrollFn(this.$refs.wrapper)
      } else if (idx === 1) {
        // this.scrollFn(this.$refs.wrapperTwo)
      }
    },
    scrollFn (ele) {
      this.scroll = new BScroll(ele, {
        click: true,
        scrollY: true,
        probeType: 2
      })
      console.log(1)
    }
  },
  components: {
    XHeader,
    Sticky,
    Tab,
    TabItem,
    Search,
    LoadMore
  }
}
</script>
<style lang="less" scope>
// ios端吸顶滚动有颤抖问题
 .vux-sticky-box{
    position:fixed !important;
    width: 100%;
 }
.wrapper,.wrapperTwo{
  position: absolute;
  left: 0;
  top: 3.5rem;
  bottom: 0;
  right: 0;
}

</style>