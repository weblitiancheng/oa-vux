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
    <x-header>请假</x-header>
    <div>
      <group>
        <!-- <x-input title="手机号" v-model="phone" is-type="china-mobile"></x-input> -->
        <!--<selector title="城市" v-model="city" :options="cities" direction="rtl"></selector>-->
        <!-- <component 
          v-for="(comp,index) in comps" 
          :is="comp.compName" 
          :key="index" 
          :title="comp.title"
          :is-type="comp.isType" 
          :options="comp.options" 
          :text-align="comp.textAlign" 
          :direction="comp.direction"
          :label-position="comp.labelPosition" 
          :value="comp.value"
        >
        </component> -->
        <x-input 
          title="事由" 
          v-model = "reason" 
          placeholder = '请输入'
          placeholder-align = 'center'
        >
        </x-input>
        <x-input
          title="金额" 
          v-model = "money" 
          placeholder = '输入金额'
          placeholder-align = 'center'
        >
        </x-input>
        <cell title="附件" :link="{path:'/my'}">
       </cell>
      </group>
      <flow orientation="vertical" style="height:200px;">
        <flow-state state="1" title="已付款" is-done></flow-state>
        <flow-line is-done :line-span="15"></flow-line>

        <flow-state state="2" title="已发货" is-done></flow-state>
        <flow-line :line-span="30" tip="进行中"></flow-line>

        <flow-state state="3" title="待收货"></flow-state>
        <flow-line :line-span="45"></flow-line>

        <flow-state state="4" title="完成"></flow-state>
      </flow>
    </div>
  </div>
</template>      

<script>
import { Flow, FlowLine, FlowState, Group, Selector, XHeader, XInput, Checklist, Cell } from 'vux'

export default {
  name: 'appr',
  data () {
    return {
      reason: '',
      money: ''
      // phone: '',
      // city: '武汉',
      // cities: ['武汉', '黄冈'],
      // formHtml: '<input title="手机号">\n',
      // comps: [
      //   { 
      //     'compName': 'XInput', 
      //     'title': '手机号', 
      //     'isType': 'china-mobile',
      //     'required': 'required', 
      //     'textAlign': 'right', 
      //     'value': '15172323855'
      //   }, 
      //   { 
      //     'compName': 'XInput', 
      //     'title': '姓名', 
      //     'required': 'required', 
      //     'textAlign': 'right'
      //   }, 
      //   { 
      //     'compName': 'Selector', 
      //     'title': '城市', 
      //     'options': ['武汉', '黄冈'], 
      //     'value': '武汉', 
      //     'required': 'required', 
      //     'direction': 'rtl' 
      //   },
      //   { 
      //     'compName': 'Checklist', 
      //     'title': '技能', 
      //     'labelPosition': 'left', 
      //     'value': ['唱', '跳'], 
      //     'options': ['唱', '跳', 'rap', '篮球', '嫖娼'] 
      //   }
      // ],
      // apps: []
    }
  },
  created () {
    // this.comps.forEach(comp => {
    //   this.apps.push(require('./components/my-input'))
    //   this.apps.push('XInput')
    //   this.apps.push(comp)
    // })
  },
  components: {
    XHeader,
    Group,
    XInput,
    Selector,
    Checklist,
    Flow,
    FlowState,
    FlowLine,
    Cell
  }
}
</script>

<style lang='less' scoped >
  .file{
    
  }
 
</style>
