<template>
    <div class="contanier">
        <x-header>审批意见</x-header>
        <div class="wrapper">
            <div class="textarea">
                <group>
                    <x-textarea 
                        :placeholder="placeholder" 
                        @on-blur="onEvent('blur')" 
                        v-model="val"
                        :height='180'
                    >
                    </x-textarea>
                </group>
            </div>
            <div class="remind">@的人:</div>
            <div class="agree_btn">
                <x-button
                   style="color:#fff;background:#5886e6"
                >
                    同意
                </x-button>
            </div>
        </div>
        
    </div>
</template>
<script>
import {XHeader, XTextarea, Group, XButton} from 'vux'
export default {
  components: {
    XHeader,
    XTextarea,
    Group,
    XButton
  },
  data () {
    return {
      val: '',
      placeholder: '请输入意见，使用@键可以提示相关联系人'
    }
  },
  methods: {
    onEvent (a) {
      console.log(a)
    }
  }
}
</script>
<style lang="less" scope>

        body{
           background: #fff;
        }
        .wrapper{
            width:95%;
            margin: auto;
        }
        .remind{
            padding-top: 2.13rem;
            padding-bottom: 2.056rem;
            font-size: .333rem;
            color: black;
        }
        // 去除他給的上下border
        .weui-cells:before,.weui-cells::after{
            display: none;
        }
</style>