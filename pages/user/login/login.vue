<template>
	<view class="login">
		<view class="loginBox">
			<view class="bigLogin">
				用户登录
			</view>
			<u-form :model="form" ref="uForm">
				<u-form-item left-icon="account" :left-icon-style="iconStyle" prop="username">
					<u-input v-model="form.username" placeholder="请输入您的用户名/手机号" />
				</u-form-item>
				<u-form-item left-icon="lock-open" :left-icon-style="iconStyle" prop="password">
					<u-input type="password" v-model="form.password" placeholder="请输入6-20位登录密码" />
				</u-form-item>
			</u-form>
			<u-row gutter="16">
				<u-col span="6">
					<view class="register">
						新用户注册
					</view>
				</u-col>
				<u-col span="6">
					<view class="forgetPassword">
						忘记密码？
					</view>
				</u-col>
			</u-row>
			<u-button :custom-style="customStyle" @click="login()" type="primary">登录</u-button>
			<view class="shortMessage">
				短信验证码登录 >
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				iconStyle: {
					color: '#bdbdbd',
					fontSize: '34rpx'
				},
				customStyle: {
					marginTop: '40rpx',
					background: 'rgb(208, 166, 106)'
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur,change'
					}],
					password: [{
						min: 6,
						required: true,
						message: '请输入正确的密码',
						trigger: 'blur'
					}]
				}
			}
		},
		onLoad() {
			
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			login() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.$u.api
							.login(this.form)
							.then((res) => {
								console.log(res)
								this.$u.vuex('vuex_token', res.data)
								console.log(this.vuex_token)
							})
							.catch((err) => {
								console.log(err)
							})
					} else {
						console.log('验证失败');
					}
				});
			}

		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 22rpx;
	}

	.bigLogin {
		font-size: 60rpx;
		margin: 70rpx 0 60rpx;
	}

	.u-form-item {
		padding: 10rpx;
		border-bottom: 1rpx solid #ddd;
	}

	.register {
		color: #4b89dc;
		font-size: 28rpx;
		margin-top: 20rpx;
	}

	.forgetPassword {
		color: #4b89dc;
		font-size: 28rpx;
		margin-top: 20rpx;
		text-align: right;
	}

	.shortMessage {
		color: rgb(208, 166, 106);
		font-size: 30rpx;
		margin-top: 70rpx;
		text-align: center;
	}
</style>
