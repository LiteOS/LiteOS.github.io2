(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{168:function(t,e,a){t.exports=a.p+"assets/img/terabits-uart-nbiot.0d89b476.png"},419:function(t,e,a){t.exports=a.p+"assets/img/oceanconnect-real-device.1f89a9ce.png"},420:function(t,e,a){t.exports=a.p+"assets/img/oceanconnect-real-device-evb.0bf2129c.png"},421:function(t,e,a){t.exports=a.p+"assets/img/qcom-at-ncdp.f964e77b.png"},422:function(t,e,a){t.exports=a.p+"assets/img/qcom-at-nmgs.a55204f2.png"},423:function(t,e,a){t.exports=a.p+"assets/img/qcom-at-nmgs-ok.7ec2f177.png"},424:function(t,e,a){t.exports=a.p+"assets/img/oceanconnect-real-device-evb-bound.893cbdd6.png"},425:function(t,e,a){t.exports=a.p+"assets/img/oceanconnect-real-device-history-data.d04cabf5.png"},693:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"步骤4：利用-qcom-串口工具，at-指令实现数据上报到-oceanconnect-iot平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤4：利用-qcom-串口工具，at-指令实现数据上报到-oceanconnect-iot平台","aria-hidden":"true"}},[t._v("#")]),t._v(" 步骤4：利用 QCOM 串口工具，AT 指令实现数据上报到 OceanConnect IoT平台")]),t._v(" "),s("h2",{attrs:{id:"_4-1how-to-create-a-real-device-in-developer-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1how-to-create-a-real-device-in-developer-portal","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1\tHow to create a real device in developer portal")]),t._v(" "),s("p",[t._v("Now, we need to use a real device verify whether the device send data to the IoT platform. Register a new Device again. Fill the IMEI in the VerifyCode blank.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(419),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(420),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_4-2set-some-params-in-the-nb-iot-module-and-using-at-commands-to-send-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2set-some-params-in-the-nb-iot-module-and-using-at-commands-to-send-data","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2\tSet some params in the NB-IoT module, and using AT Commands to send data.")]),t._v(" "),s("ol",[s("li",[t._v("Change the Jumper Cap J14, and connect UNIT_USB interface.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(168),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Open the QCom Tool, Run AT Commands as followed.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("AT+CFUN=0\nAT+NCDP=218.4.33.72\nAT+NCDP?\nAT+NRB\n")])])]),s("p",[s("img",{attrs:{src:a(421),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("using AT+NMGS send a test message")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(422),alt:""}})]),t._v(" "),s("p",[s("code",[t._v("AT+NMGS=2,0001")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(423),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(424),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(425),alt:""}})]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Two hexadecimal number represent a Byte, you must send data that is smaller than 512 bytes.")])])])}],n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);o.options.__file="04-using-at-commands-connect-oceanconnect.md";e.default=o.exports}}]);