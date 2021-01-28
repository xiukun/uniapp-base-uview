<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="openLogin()">
				home首页
			</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.getGet()
			this.getPost()
		},
		methods: {
			openLogin() {
			            uni.navigateTo({
			                url: '/pages/user/login/login',
			            });
			        },
			getGet() {
				// 请求方式
				// this.$u.get('/ebapi/store_api/hot_search', {
				// 	id: 2
				// }).then(res => {
				// 	this.result = res;
				// })
			},
			getPost() {
				// this.$u.post('/ebapi/public_api/index', {
				// 	id: 1
				// }).then(res => {
				// 	this.result = res.banner;
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.button-demo {
		margin-top: 80rpx;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}
</style>
