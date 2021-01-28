<template>
    <view class="container">
        <view class="u-searchbox">
            <view class="u-search-input">
                <u-icon name="search" size="30" color="#333"></u-icon>
                <input confirm-type="search" placeholder="大家都在搜：红酒" :focus="true" auto-focus placeholder-class="u-input-plholder" class="u-input" v-model.trim="key" @input="inputKey" />
                <u-icon name="close" size="20" color='#bcbcbc' @click="cleanKey" v-show="key"></u-icon>
            </view>
            <view class="u-cancle" @click="search">搜索</view>
        </view>

        <view class="u-search-history" v-show="history.length>0 && !key">
            <view class="u-history-header">
                <view class="u-search-title">最近搜索</view>
                <u-icon name="trash" size="40" color="#333" @click="deleteHistory" class="u-icon-delete"></u-icon>
            </view>
            <view class="u-history-content">
                <block v-for="(item,index) in history" :key="index" >
                    <u-tag type="info" shape="square" :text="item" style="margin:0 10rpx 6rpx 0;cursor:pointer;"  @click="search"/>
                </block>
            </view>
        </view>
        <view class="u-search-hot">
            <view class="u-hot-header">
                <view class="u-search-title">热门搜索</view>
            </view>
            <view class="u-hot-content">
                <block v-for="(item,index) in hot" :key="index">
                    <u-tag type="info" shape="square" :text="item" style="margin:0 10rpx 6rpx 0;cursor:pointer;"   @click="search" />
                </block>
            </view>
        </view>
    </view>

</template>

<script>
export default {
    data() {
        return {
            history: ['红酒', '白酒', '鸡尾酒', '白啤', '黑啤', '精酿', '乳饮'],
            hot: [
                '红酒',
                '白酒',
                '鸡尾酒',
                '白啤',
                '黑啤',
                '精酿',
                '乳饮',
                '自热火锅',
            ],
            key: '',
        }
    },
    methods: {
		//跳转搜索页面
        search: function () {
            uni.navigateTo({
                url: '/pages/classify/list',
            })
        },
		//删除历史
		deleteHistory: function(){
			this.history = []
		},
		//清空搜索值
        cleanKey: function () {
            this.key = ''
        },
		//按下按钮
        inputKey: function (e) {
            this.key = e.detail.value
        },
    },
}
</script>

<style>
page {
    color: #333;
    background: #fff;
}

.container {
    padding: 0 30rpx 30rpx 30rpx;
    box-sizing: border-box;
}

.u-searchbox {
    padding: 30rpx 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.u-search-input {
    width: 100%;
    height: 66rpx;
    border-radius: 35rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.u-input {
    flex: 1;
    color: #333;
    padding: 0 16rpx;
    font-size: 28rpx;
}

.u-input-plholder {
    font-size: 28rpx;
    color: #b2b2b2;
}

.u-cancle {
    color: #888;
    font-size: 28rpx;
    padding-left: 30rpx;
    flex-shrink: 0;
}

.u-history-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30rpx 0;
}
.u-history-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.u-icon-delete {
    padding: 10rpx;
}

.u-search-title {
    font-size: 28rpx;
    font-weight: bold;
}

.u-hot-header {
    padding: 30rpx 0;
}

.u-header {
    padding: 26rpx 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.u-header-left {
    font-size: 30rpx;
    color: #222;
    border-left: 4rpx solid #eb0909;
    padding-left: 10rpx;
    word-break: break-all;
}

.u-noboredr {
    border-left: 0 !important;
}

.u-result-box {
    font-size: 28rpx;
}

.u-result-item {
    line-height: 28rpx;
    padding: 28rpx 0;
}
</style>