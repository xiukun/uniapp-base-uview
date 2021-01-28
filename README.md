<!--
 * @Description: 说明
 * @Author: henry@xiukun
 * @Date: 2020-12-29 14:07:23
 * @LastEditTime: 2020-12-29 14:51:44
 * @LastEditors: henry@xiukun
-->

## 说明

本产品使用 uView UI，是基于[uni-app](https://uniapp.dcloud.io/)生态优秀的 UI 框架
[uVIew工具类](https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F) 包含常用函数，重点看！！！

## 目录结构

-   common:公共函数类目录，封装了 http 请求拦截类等，公共函数类可放入此文件夹。
	1.http.api.js是ajax请求方式的封装引用。其中注释了使用方式，放在了vue原型中，暴露this.$u.api使用方式。
	在页面的使用方式mounted(){ this.$u.api.getCartAmounts({param:1}).then(res=>{}).catch(err=>{})}
	2.http.interceptor是请求拦截器，其中的token及响应状态在其中设置。
	
-   components:自定义组件文件夹，自定义组件放入此文件夹中，因为启用了树摇优化，在 page.json 配置 easycom,直接在页面使用即可，无需 import 引用。
    > 例子：
    ​```
	<page-nav desc="描述"></page-nav>
	​```
	
-   pages:页面文件夹
	重点：请按照分包路径去设置pages目录下的文件夹，如果随意创建会造成主包/分包资源不均等状况，请慎重创建配置。
	
-   static:静态资源文件夹，存放图片，css,js 等

-   store: vuex 文件夹
	1./store/index.js中使用了vuex+uni.getStorageSync()存储方式。
	2.saveStateKeys中key是永久数据，在其中定义了vue_token,也要在Vuex.Store({state:{vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',}})、
	定义vuex_token,然后在其他页面中使用 :
	赋值：this.$u.vuex('vuex_token', 'token123123123')
	取值：this.vuex_token
	3.普通vuex数据这正常的定义在Vuex.Store的state中，
	赋值：this.$u.vuex('vuex_version', '2.0.0')
	取值：this.vuex_version

-   uview-ui UI 框架文件夹，其中插件使用 直接使用 uview-ui/components/文件夹下 的文件名称即可
    > 例子：
	​```
	<u-avatar src="url"></u-avatar>
	​```
-   App.vue 文件中引用了 uview-ui/index.scss 样式文件
-   main.js 文件全局定义文件
-   manifest.json 为 app,小程序，h5 等的配置文件
-   page.json 文件配置路由路径，分包，预加载，easycom，全局样式等 详细说明请看PAGES.JSON.md文件
-   template.h5.html 页面为 h5 环境下依赖的生成文件，不可删除，我在此页面设置了fontSize随分辨率大小改变，如果不需要则删除使用固定px，rpx。
-   uni.scss 文件 配置的是全局使用的 css，是直接生成到主 app.js 下的样式，建议只加载必要的基本样式，其他 css 文件分别写在其他对应页面下
