(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{249:function(t,s,a){t.exports=a.p+"assets/img/raw-project-group-example.b9ba6c0c.png"},250:function(t,s,a){t.exports=a.p+"assets/img/raw-project-example-path.2bf046f8.png"},251:function(t,s,a){t.exports=a.p+"assets/img/raw-project-example-macro.e4a84773.png"},688:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"验证实验设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证实验设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证实验设计")]),t._v(" "),n("p",[t._v("目前 Huawei LiteOS 内置了 "),n("strong",[t._v("内核测试代码")]),t._v("，我们可以直接拿这套代码进行验证。")]),t._v(" "),n("h2",{attrs:{id:"添加-example-测试代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-example-测试代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 example 测试代码")]),t._v(" "),n("p",[n("img",{attrs:{src:a(249),alt:""}})]),t._v(" "),n("p",[t._v("也不要忘记头文件路径导入")]),t._v(" "),n("p",[n("img",{attrs:{src:a(250),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"修改-main-c-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-main-c-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 main.c 文件")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE BEGIN Includes */")]),t._v("\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"los_base.h"')])]),t._v("\n"),n("span",{attrs:{class:"token macro property"}},[t._v("#"),n("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"los_inspect_entry.h"')])]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE END Includes */")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE BEGIN 2 */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("LOS_KernelInit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_NOK"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("LOS_Inspect_Entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("LOS_Start")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* USER CODE END 2 */")]),t._v("\n")])])]),n("h2",{attrs:{id:"添加日志输出宏定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加日志输出宏定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加日志输出宏定义")]),t._v(" "),n("p",[n("code",[t._v("LOS_KERNEL_DEBUG_OUT")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(251),alt:""}})]),t._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("危险")]),t._v(" "),n("p",[t._v("请务按照上面示例的方式添加测试代码。因为只有在 USER CODE 注释包裹内添加，下一次再使用 STM32Cube 导出的代码才不会被覆盖。")])])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="inspect-example.md";s.default=r.exports}}]);