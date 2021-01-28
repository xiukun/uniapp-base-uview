<template>
  <view class="aboutWe">
    <view class="topBox">
      <image class="bannerImg" src="../../static/imgs/aboutWe/topBanner.png" alt ></image>
      <view class="aboutUs">ABOUT US</view>
      <view class="border"></view>
      <view class="guanyuwe">关于我们</view>
    </view>
    <view class="contentBox">
      <text class='contitle'>中国商务服饰产业共享平台</text>
      <view class='context'>央联服饰平台依托中国国际商务服饰产业联盟、央联万贸平台资源优势，优化服饰产业资源。作为服装产业平台经济领军者，为国内外客户提供快捷、专业的线上线下商务服饰团体定制及高端定制服务，打造中国国际商务服饰产业共享平台。</view>
      <view class='context'>平台运用互联网、大数据等技术手段，涉及服饰产业链各个环节，凭借线下30年丰富的大客户服务经验，常年为国内各大系统、政府机关、企事业单位、60余家央企及2300万员工会员进行一站式综合服务，服务客户覆盖B端、C端团体及个人，满足消费者对服饰的个性化、标准化、功能化需求。平台将设计研发、智能裁剪、定制加工、智慧物流等多环节、全链条紧密链接，助力服饰企业增值增量赋能、提升品牌价值，为成为服装定制领域集大成者而持续精进，最终形成服装企业集群、产业集群、品牌集群。</view>
      <view class='u-m-t-40 u-m-b-4'>
        <image
          class="jichangImg u-m-r-10"
          src="../../static/imgs/aboutWe/jichang.png"
          alt></image>
        <image class="yinhangImg" src="../../static/imgs/aboutWe/yinhang.png" alt></image>
      </view>
      <view>
        <image
          class="yinhangImg u-m-r-10"
          src="../../static/imgs/aboutWe/jiudian.png"
          alt></image>
        <image class="jichangImg" src="../../static/imgs/aboutWe/xuexiao.png" alt></image>
      </view>
      <text class='u-m-t-50 contitle'>联系我们</text>
      <text class='conus'>CONTACT US</text>
      <view class="infoClass email">电话: 400-000-0101</view>
      <view class="infoClass email">邮箱: yanglianwine@sina.com</view>
      <view class="infoClass email">地址: 中国·青岛香港中路国际金融中心30L</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "aboutWe"
};
</script>

<style lang="scss" scoped>
.topBox {
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  .bannerImg {
    width: 100%;
    height: 544rpx;
  }
  .aboutUs {
    font-size: 48rpx;
    color: #fff;
    position: absolute;
    top: 172rpx;
    text-align: center;
    width: 100%;
  }
  .border {
    position: absolute;
    height: 1px;
    background: #fff;
    top: 280rpx;
    width: 64rpx;
    left: 50%;
    transform: translate(-50%);
  }
  .guanyuwe {
    position: absolute;
    top: 320rpx;
    text-align: center;
    color: #fff;
    width: 100%;
    font-size: 30rpx;
  }
}
.contentBox {
  padding: 40rpx 40rpx 120rpx;
  background: #fff;
  height: 100%;
  .contitle{
    color: #2f323a;
    font-size: 36rpx;
    font-weight: 600;
	display: block;
  }
  .conus {
    font-size: 18rpx;
    color: #999999;
  }
  .context{
	  font-size: 24rpx;
	  margin-top: 38rpx;
	  color: #999999;
	  text-indent: 2em;
  }
  .jichangImg {
    width: 440rpx;
    height: 120rpx;
    display: inline-block;
  }
  .yinhangImg {
    width: calc(100% - 450rpx);;
    height: 120rpx;
    display: inline-block;
  }
  .infoClass {
    width: 100%;
    height: 120rpx;
    font-size: 24rpx;
    background: #f5f5f5;
    margin: 11rpx 0;
    color: #4D4D4D;
  }
  .email{
    padding-left: 40rpx;
    line-height: 120rpx;
  }
}
</style>
<style lang="scss">
.aboutWe {
  .yd-grids-2:before {
    background-image: none;
  }
  .yd-grids-item:after {
    background-image: none;
  }
  .yd-grids-2 {
    background: #f5f5f5;
  }
  .yd-grids-item{
    color: #4d4d4d;
    font-size: 24rpx;
  }
}
</style>