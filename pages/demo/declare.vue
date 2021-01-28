<!--
 * @Author: xiukun
 * @Date: 2020-07-31 08:58:12
 * @LastEditors: xiukun
 * @LastEditTime: 2020-07-31 08:58:27
 * @FilePath: \uniapp\pages\demo\declare.vue
 * @Description: 我是框架应用说明
-->
<template>
    <view class="content">

        <page-nav desc="desc"></page-nav>
        <view>
            <u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">我是首页模块子项</u-link>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',
        }
    },
    onLoad() {},
    methods: {},
}
</script>

<style lang="scss" scoped>
</style>
