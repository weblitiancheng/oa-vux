<!--
 * @Author: your name
 * @Date: 2020-05-27 09:07:07
 * @LastEditTime: 2020-05-27 14:08:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oa-h5f:\Codes\oa-vux\src\views\login.vue
--> 
<template>
  <div class="login_banner">
    <img src="/src/assets/ipason.png" class="login_img">
    <div class="login_name">攀升彭于晏</div>
    <div class="biaoti1">欢迎来到攀升OA办公平台</div>
    <div class="biaoti2">
      首次使用将验证你的身份，通过你在<span class="biaoti2_color">攀升企业钉钉</span>上注册的手机号码，我们将同步你的员工信息并与当前微信身份关联，输入你的手机号码短信验证即可。
      <br>一旦关联绑定，不可修改，请谨慎操作。
    </div>

    <form class="form_box">
      <div class="put_box">
        <input type="text" placeholder="手机号码" id="mobile" class="one_put" v-model="mobile" maxlength="11">
        <img src="/src/assets/phone.png" class="phone_img">
      </div>
      <div class="put_box">
        <input type="text" placeholder="短信验证码" id="rcode" class="two_put" v-model="inputCode" maxlength="6">
        <span class="put_span" @click="sendVerificationCode()">{{time}}</span>
      </div>
    </form>

    <div class="btn_index" @click="submit()">
      确认
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
.login_banner {
  background: url("/src/assets/pic23.png") no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
  padding-top: 1.5rem;
}
.login_img {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 0.02rem solid #fff;
  /* margin-top: 2.5rem; */
}
.login_name {
  line-height: 0.8rem;
  font-weight: bold;
  text-align: center;
}
.biaoti1 {
  font-size: 0.5rem;
  color: #a29b9b;
  margin: 1rem auto 0.5rem;
  text-align: center;
}
.biaoti2 {
  font-size: 0.35rem;
  color: #a29b9b;
  margin: 0rem auto;
  width: 79%;
}
.biaoti2_color {
  color: red;
}

.form_box {
  width: 79%;
  display: block;
  margin: 0 auto;
}
.one_put {
  width: 85%;
  border-bottom: 0.01rem solid #dedede;
  height: 0.7rem;
  color: #2b4197;
}
.two_put {
  width: 76%;
  border-bottom: 0.01rem solid #dedede;
  height: 0.7rem;
  color: #2b4197;
}
.phone_img {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 0.7rem;
  width: 0.5rem;
}
.put_box {
  position: relative;
  margin-top: 0.5rem;
}

input {
  border: none;
  background: none;
}
input::placeholder {
  color: #d7d8ec;
}

.put_span {
  border: 0.05rem solid #2b4197;
  /* padding: 0.1rem; */
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0.2rem;
  width: 20%;
  text-align: center;
  color: #2b4197;
  height: 0.7rem;
  line-height: 0.7rem;
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