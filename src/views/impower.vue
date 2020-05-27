<!--
 * @Author: your name
 * @Date: 2020-05-27 09:07:07
 * @LastEditTime: 2020-05-27 14:53:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oa-h5f:\Codes\oa-vux\src\views\login.vue
--> 
<template>
  <div class="login_banner">
    <img src="/src/assets/ipason.png" class="login_img">
    <h2>欢迎登录攀升OA办公平台</h2>
    <br>
    <div class="jieshao_txt">当前微信身份用于关联已绑定OA平台账<br>授权登录即可</div>
    <div class="btn_index">
      授权登录
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      notice: '沈志雄自传：吾乃攀升‘彭于晏’，不接受任何反驳。24小时等你call：15172323855'
    }
  },
  components: {
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style-type: none;
}
.login_img {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 0.02rem solid #fff;
  /* margin-top: 1rem; */
  margin-bottom: 0.5rem;
}
h2 {
  color: #2b4197;
  text-align: center;
}
.jieshao_txt {
  color: #2b4197;
  text-align: center;
}
.btn_index {
  background-color: #2b4197;
  color: #fff;
  width: 80%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  margin-top: 3rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 3rem;
}
</style>