<template>
    <div>
        <x-header>附件</x-header>
        <div class="annex_top">
            <span>我的云盘</span>
            <x-button
                link = "BACK"
                mini
            >确定</x-button>
        </div>
        <div class="annex_tip">
            <p>温馨提示：</p>
            <p>云盘文件由电脑端OA上传(oa.ipason.cn),</p>
            <p>请微信扫码登录后，在左侧菜单下方找到此功能</p>
        </div>
    </div>
</template>
<script>
import { XHeader, XButton } from 'vux'
export default {
  components: {
    XHeader,
    XButton
  }
}
</script>
<style lang="less" scope>
    .annex_top{
        display: flex;
        height: 1.3rem;
        line-height: 1.3rem;
        background: #eee;
        justify-content: space-between;
        span{
            margin-left: .6rem;
            font-size: .296rem;
            color: #0a0844 ;
        }
        .weui-btn{
            height: .685rem;
            width: 2.037rem;
            align-self: center;
            margin:  0 .3rem 0 0;
            color: #fff;
            background: #2f429c;
            font-size: .296rem;
        }       
    }
    .annex_tip{
        width: 90%;
        margin: 0 auto;
        line-height: 1.1rem;
        text-align: center;
        font-size: .37rem;
        color: #999;
        padding-top: 2rem;
    }
</style>