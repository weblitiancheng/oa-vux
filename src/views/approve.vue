<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
      <tab-item @on-item-click="onItemClick">待办</tab-item>
    </tab>
  </div>
</template>


<script>
import { Grid, GridItem, GroupTitle, Flexbox, FlexboxItem, Divider, Tab, TabItem, Sticky, XButton, Swiper, SwiperItem } from 'vux'
import Vtabbar from './components/tabbar'
var customerData = require('../assets/data_json/customer.json')

export default {
  data () {
    return {
      customerData: customerData.slice(0, 5)
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    Vtabbar,
    Grid,
    GridItem,
    GroupTitle,
    Tab,
    TabItem,
    Sticky,
    XButton,
    Swiper,
    SwiperItem
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
}
.ipason_bg {
  width: 94%;
  margin: 0 auto;
  display: block;
  border-radius: 0.2rem /* 20/100 */;
}
.msg_lie {
  height: 1.3rem /* 150/100 */;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-bottom: 0.01rem solid #dde0ef;
}
.customer_vx {
  width: 1rem /* 100/100 */;
  height: 1rem /* 50/100 */;
  border-radius: 50%;
}
.msg_lieRight {
  margin-left: 0.3rem;
}
h2 {
  width: 94%;
  margin: 0 auto;
}
.tissue_box {
  width: 94%;
  margin: 0 auto;
  position: relative;
}
.tissue_row1 {
  display: flex;
  align-items: center;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
}
.tissue_img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.3rem;
  display: block;
  margin-right: 0.5rem;
}
.tissue2_img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.3rem;
  display: block;
  margin-right: 0.5rem;
  padding-left: 1.5rem;
}
.tissue_one {
  border-bottom: 0.01rem solid #bfbfbf;
  height: 1rem;
  line-height: 1rem;
  width: 8rem;
}
.tissue_row2 {
  display: flex;
  align-items: center;
  height: 1rem;
  position: absolute;
  top: 1.1rem;
  left: 0;
}
.tissue_two {
  height: 1rem;
  line-height: 1rem;
  width: 8rem;
}
.tissue_line {
  border-left: 0.01rem solid #bfbfbf;
  border-bottom: 0.01rem solid #bfbfbf;
  position: absolute;
  top: 1.1rem;
  left: 0.5rem;
  width: 0.8rem;
  height: 0.6rem;
}
</style>