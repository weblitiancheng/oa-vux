<template>
  <div style="overflow-x: hidden;">
    <flexbox orient="vertical">
      <flexbox-item>
        <div class=" title"><img src="@/assets/ipason_log.png" class="ipason_log"></div>
      </flexbox-item>
    </flexbox>

    <!-- 跑马灯通知 -->
    <div class="notice-card-wrapper" style="height:0.7rem;background:#fff;line-height:0.7rem">
      <div class="header">
        <div class="title_txt">
          <!-- 系统公告 -->
          <div class="message">
            <div class="inner-container">
              <span v-html="notice"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <flexbox orient="vertical" :gutter="0">
      <flexbox-item>
        <div class="msg_lie">
          <img src="@/assets/system_ico.jpg" class="system_ico1">
          <div class="msg_lieRight">
            <p>系统消息</p>
            <div class="msg_in_box">
              <span>111</span>
              <span class="red_size">18</span>
            </div>
          </div>

        </div>
      </flexbox-item>
      <flexbox-item>
        <router-link to="/approve">
          <div class="msg_lie">
            <img src="@/assets/appr_ico.png" class="system_ico2">
            <div class="msg_lieRight">
              <p>审批消息</p>
              <div class="msg_in_box">
                <span class="left_size">111</span>
                <span class="red_size">2</span>
              </div>
            </div>
          </div>
        </router-link>
      </flexbox-item>
      <flexbox-item>
        <div class="msg_lie">
          <img src="@/assets/tongzhi_ico.png" class="system_ico3">
          <div class="msg_lieRight">
            <p>发文通知</p>
            <div class="msg_in_box">
              <span>111</span>
              <span class="red_size">8</span>
            </div>
          </div>

        </div>
      </flexbox-item>
    </flexbox>

    <Vtabbar></Vtabbar>
  </div>
</template>


<script>
import Vtabbar from '@/views/components/tabbar'
import { Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  data () {
    return {
      notice: '沈志雄自传：吾乃攀升‘彭于晏’，不接受任何反驳。24小时等你call：15172323855'
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Vtabbar
  }
}
</script>


<style scoped>
/* @import '~vux/src/styles/1px.less'; */

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
.ipason_log {
  width: 3.4rem /* 440/100 */;
  height: 1rem /* 121/100 */;
}
.title {
  background: #2a4198;
  height: 1.4rem /* 140/100 */;
  display: flex;
  align-items: center;
  padding-left: 0.5rem /* 50/100 */;
}
.msg_lie {
  height: 1.8rem /* 150/100 */;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-bottom: 0.01rem solid #dde0ef;
}
.system_ico1 {
  width: 1.5rem /* 100/100 */;
  height: 1.5rem /* 50/100 */;
  border-radius: 0.2rem;
}
.system_ico2 {
  width: 1.5rem /* 100/100 */;
  height: 1.5rem /* 50/100 */;
  border-radius: 0.2rem;
}
.system_ico3 {
  width: 1.5rem /* 100/100 */;
  height: 1.5rem /* 50/100 */;
  border-radius: 0.2rem;
}
.msg_lieRight {
  margin-left: 0.3rem;
}
.msg_in_box {
  display: flex;
  justify-content: space-between;
  width: 7.5rem;
  align-items: center;
}
.msg_lieRight p {
  font-size: 0.4rem;
  color: #000d49;
}
.msg_in_box span {
  font-size: 0.4;
  color: #a5abcf;
}
.red_size {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  color: red !important;
  text-align: center;
  line-height: 0.6rem;
  display: inline-block;
  border: 0.02rem solid #dde0ef;
}
.left_size {
  width: 6rem;
}

/* 跑马灯css */

.inner-container {
  /* // 把文字弄出可见区域 */
  margin-left: 100%;
  color: red;
  font-size: 0.2rem;
  width: 200%;
  animation: myMove 15s linear infinite;
  /* // 重点，定义动画 */
  animation-fill-mode: forwards;
}
/*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-17rem);
  }
}
</style>