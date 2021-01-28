<template>
	<view class="content">
		
		<page-nav desc="desc"></page-nav>
		<view>
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">我的定制首页</u-link>
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

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
