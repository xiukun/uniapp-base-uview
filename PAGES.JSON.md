## 说明

[pages.json官方说明](https://uniapp.dcloud.io/collocation/pages)
pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。
它类似微信小程序中app.json的页面管理部分。注意定位权限申请等原属于app.json的内容，在uni-app中是在manifest中配置。

-   开启easycom 树摇机制 默认自动加载compontents目录下符合书写规范的组件。格式：components/self-com/self-com.vue。必须目录命及vue文件名一致才能正确的引用。
在其他页面中直接<self-com></self-com>组件使用即可，不用import或者require路径引用。
我在easycom中配置了自动检测引用uview-ui中的组件配置，uview-ui的组件可以直接使用不需要import或者require路径引用。

-   page:中是页面的路由配置，因为小程序及app不支持vue-router的路由写法，所以使用page配置路由。
-   subPackages:是路由分包配置，因为小程序支持分包加载，主包最大2M，如果超过2M需要分包策略（1个分包最多2M），分包最多加载好像是16M。
-   preloadRule:预下载分包，参考官方说明
-   globalStyle:用于设置应用的状态栏、导航条、标题、窗口背景色等。
-   tabBar:可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。这是系统原生导航，如果需要自定义tabBar，参考uview ui中的示例引用。
-   其他配置项请参考[pages.json官方说明](https://uniapp.dcloud.io/collocation/pages)
