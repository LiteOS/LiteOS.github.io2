(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(t,e,n){t.exports=n.p+"assets/img/onenet1.34d1b2c1.png"},172:function(t,e,n){t.exports=n.p+"assets/img/onenet2.c0ef1022.png"},173:function(t,e,n){t.exports=n.p+"assets/img/onenet3.858dbd16.png"},174:function(t,e,n){t.exports=n.p+"assets/img/onenet4.e260e6a4.png"},175:function(t,e,n){t.exports=n.p+"assets/img/onenet5.82eede94.png"},176:function(t,e,n){t.exports=n.p+"assets/img/onenet6.7b3be8f9.png"},177:function(t,e,n){t.exports=n.p+"assets/img/onenet7.29c12479.png"},178:function(t,e,n){t.exports=n.p+"assets/img/onenet8.037a3e40.png"},179:function(t,e,n){t.exports=n.p+"assets/img/onenet9.f80e7d74.png"},180:function(t,e,n){t.exports=n.p+"assets/img/onenet10.d3a4064f.png"},181:function(t,e,n){t.exports=n.p+"assets/img/onenet11.b94002d3.png"},182:function(t,e,n){t.exports=n.p+"assets/img/onenet12.a8ac3912.png"},585:function(t,e,n){"use strict";n.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"中国移动-onenet-云平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中国移动-onenet-云平台","aria-hidden":"true"}},[this._v("#")]),this._v(" 中国移动 OneNet 云平台")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nbsdk-开发环境简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nbsdk-开发环境简介","aria-hidden":"true"}},[this._v("#")]),this._v(" NBSDK 开发环境简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("IDE软件版本：KEIL uVersion V5.24。\nNBSDK版本  ：V2.1\nLiteOS版本 ：[V2.1](https://github.com/LiteOS/LiteOS)\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("编译环境如下图：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(171),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("通过NBSDK连接CMIOT，需要配置程序的IMEI、IMSI值与平台NB设备的该值一致。如下图：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(172),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("打开cis_def.h头文件，修改文件结尾的IMSI与IMEI的值为平台设备的该值，重新编译下载到NB开发板，即可连接到平台。如下图：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(173),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("NB开发板上电后十秒左右，打开OneNet平台，可以看到NB设备在线绿灯亮起。如下图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(174),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("点击在线的NB设备，打开NB开发板sensor设备信息，如下图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(175),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可以看到开发板有一个温度传感器实例，和一个数字输出示例，点击Temperature对象，可以查看对象的实例的资源属性信息。我们点击一下Sensor Value的读操作标志，会读取到NB开发板所处的温度信息，多次的读操作，可以看到温度的变化。如下图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(176),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("点击Digital Output对象，可以查看对象的实例的资源属性信息。我们点击Digital Output State的写操作标志，填写false并确定，同时观察NB开发板的LED1，发现灯熄灭了；再次写入true，会发现LED1又被点亮了。如下图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(177),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nbsdk应用移植简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nbsdk应用移植简介","aria-hidden":"true"}},[this._v("#")]),this._v(" NBSDK应用移植简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("主要参考《NB-IOT 协议接入说明文档》，以及NBSDK官方sample源码。实际的应用可以参考cis_sample_entry.c和cis_sample_defs.h文件，我们这里新建了cis_sample_entry1.c和cis_sample_defs1.h给应用添加了一个温度传感器，和一个LED灯。如下图：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(178),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(179),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("我们点击3201进入Digital Output的资源定义的描述文件，可以看到如下资源信息：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(180),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("修改源码：我们定义2个对象，数字输出和温度传感器，分别定义1个对象的实例。如下图。对象资源的定义信息详见源码：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(181),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("为适应自身应用，用户需要修改cis_sample_entry.c里的如下回调函数，如下图：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:n(182),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"获取源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取源码")])}],r=n(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("ul",[n("li",[t._v("OneNet支持标准的object ID，可以参考如下网站获取标准object ID号及资源ID号："),n("a",{attrs:{href:"http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html"),n("OutboundLink")],1),t._v("。可以查到数字输出和温度传感器的object ID分别为3201和3303。如下图")])]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),n("ul",[n("li",[t._v("实际应用请参考最新版本的"),n("a",{attrs:{href:"https://open.iot.10086.cn/doc/art431.html#118",target:"_blank",rel:"noopener noreferrer"}},[t._v("《NB-IOT 协议接入说明文档》"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(27),t._v(" "),n("ul",[n("li",[t._v("获取OneNet NBSDK源码，需先签署NDA协议。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://open.iot.10086.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OneNET 合作入口"),n("OutboundLink")],1)])])])},s,!1,null,null,null);i.options.__file="china-mobile-onenet.md";e.default=i.exports}}]);