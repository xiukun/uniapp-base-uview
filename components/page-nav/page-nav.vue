<!--
 * @Author: xiukun
 * @Date: 2020-07-30 13:42:25
 * @LastEditors: xiukun
 * @LastEditTime: 2020-07-31 09:57:17
 * @FilePath: \uniapp\components\page-nav\page-nav.vue
 * @Description: demo演示页面
--> 
<template>
    <view class="nav-wrap">
        <view class="nav-title">
            <image class="logo" src="https://cdn.uviewui.com/uview/common/logo.png" mode="widthFix"></image>
            <view class="nav-info">
                <view class="nav-title__text">
                    uView UI
                </view>
                <view class="nav-slogan">
                    多平台快速开发的UI框架
                </view>
            </view>
        </view>
        <view class="nav-desc">
            {{desc}}
            <u-button type="primary" @click="getAjax">接口请求</u-button>
        </view>
        <view class="nav-desc">
            <u-button type="primary" @click="setToken">添加全局token</u-button>

        </view>
    </view>
</template>

<script>
export default {
    props: {
        desc: String,
    },
    mounted() {
        //获取vuex中的版本号
        console.log(this.vuex_version)
    },
    methods: {
        getAjax() {
            this.$u.api
                .getCartAmounts()
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            this.$u.api
                .getCataLogAll()
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        setToken() {
            this.$u.vuex('vuex_token', 'woshimiyao')
            console.log(this.vuex_token)
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-wrap {
    padding: 30rpx;
}

.nav-title {
    display: flex;
    align-items: center;
}

.nav-info {
    margin-left: 30rpx;
}

.nav-title__text {
    display: flex;
    color: $u-main-color;
    font-size: 50rpx;
    font-weight: bold;
}

.logo {
    width: 140rpx;
    height: auto;
}

.nav-slogan {
    color: $u-tips-color;
    font-size: 28rpx;
}

.nav-desc {
    margin-top: 20rpx;
    font-size: 28rpx;
    color: $u-content-color;
}
</style>
