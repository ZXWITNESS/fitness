(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"051c":function(r,t,o){"use strict";var e,i=function(){var r=this,t=r.$createElement,o=r._self._c||t;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"box",style:{padding:"60rpx 120rpx 100rpx",boxShadow:" 0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"-310rpx 5% 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"90%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 16rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto 40rpx",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"0",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220211/5d658f9d5a3949b4ad49aed902c58cfa.jfif",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220211/5d658f9d5a3949b4ad49aed902c58cfa.jfif",mode:"aspectFill"}})],1),o("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 16rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:r.username,callback:function(t){r.username=t},expression:"username"}})],1),o("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 16rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:r.password,callback:function(t){r.password=t},expression:"password"}})],1),r.roleNum>1?o("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 16rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-picker",{attrs:{value:r.index,range:r.options},on:{change:function(t){arguments[0]=t=r.$handleEvent(t),r.optionsChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"uni-picker-type",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(227, 227, 227, 1)",backgroundColor:"rgba(255, 255, 255, 0.82)",color:"rgba(41, 41, 41, 1)",textAlign:"center",borderRadius:"20rpx",borderWidth:"2rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.options[r.index]))])],1)],1):r._e(),o("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(119, 197, 97, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onLoginTap.apply(void 0,arguments)}}},[r._v("登录")]),o("v-uni-view",{staticClass:"links",style:{padding:"0",boxShadow:"0 0px 0px rgba(0,0,0,0)",margin:"0 0 16rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[o("v-uni-view",{staticClass:"link-highlight",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"10rpx auto",borderColor:"#ccc",backgroundColor:"rgba(0, 0, 0, 0)",color:"rgba(65, 65, 65, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onRegisterTap("yonghu")}}},[r._v("注册用户")]),o("v-uni-view",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(57, 57, 57, 1)",textAlign:"right",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onForgetTap.apply(void 0,arguments)}}},[r._v("忘记密码？")])],1)],1)],1)},n=[];o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return e}))},"20a7":function(r,t,o){"use strict";var e=o("45d2"),i=o.n(e);i.a},3285:function(r,t,o){"use strict";o.r(t);var e=o("6263"),i=o.n(e);for(var n in e)"default"!==n&&function(r){o.d(t,r,(function(){return e[r]}))}(n);t["default"]=i.a},4411:function(r,t,o){var e=o("24fb");t=e(!1),t.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4c368d34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box}.content[data-v-4c368d34]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220214/c79a7a64343c4d07a6b38deec4bbbf2c.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-4c368d34]{text-align:center}.logo uni-image[data-v-4c368d34]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-4c368d34]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-4c368d34]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-4c368d34]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-4c368d34]{margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-4c368d34]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-4c368d34]{margin:0;color:#b49950}',""]),r.exports=t},"45d2":function(r,t,o){var e=o("f8c8");"string"===typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);var i=o("4f06").default;i("3b26d85a",e,!0,{sourceMap:!1,shadowMode:!1})},"60d5":function(r,t,o){"use strict";var e=o("baab"),i=o.n(e);i.a},6263:function(r,t,o){"use strict";var e=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("96cf");var i=e(o("3b8d")),n=e(o("2971")),a={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var r=["请选择登录用户类型"],t=n.default.list();this.menuList=t;for(var o=0;o<this.menuList.length;o++)"是"==this.menuList[o].hasFrontLogin&&(r.push(this.menuList[o].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=r,this.randomString(4),this.styleChange()},methods:{randomString:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],e=["28","30","32","34","36"],i=0;i<r;i++){var n=Math.floor(Math.random()*t.length);this.codes[i].num=t[n];for(var a="#",d=0;d<6;d++){var s=Math.floor(Math.random()*o.length);a+=o[s]}this.codes[i].color=a;var c=Math.floor(30*Math.random()),l=Math.floor(2*Math.random());1==l&&(c="-"+c),this.codes[i].rotate="rotate("+c+"deg)";var u=Math.floor(Math.random()*e.length);this.codes[i].size=e[u]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(r){uni.setStorageSync("loginTable",r),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var r=(0,i.default)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.optionsValues[this.index]){r.next=3;break}return this.$utils.msg("请选择登陆用户类型"),r.abrupt("return");case 3:return r.next=5,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 5:return t=r.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),r.next=12,this.$api.session("".concat(this.optionsValues[this.index]));case 12:t=r.sent,uni.setStorageSync("userid",t.data.id),t.data.vip&&uni.setStorageSync("vip",t.data.vip),uni.setStorageSync("role","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 17:case"end":return r.stop()}}),r,this)})));function t(){return r.apply(this,arguments)}return t}(),optionsChange:function(r){this.index=r.target.value}}};t.default=a},a86a:function(r,t,o){"use strict";o.r(t);var e=o("051c"),i=o("3285");for(var n in i)"default"!==n&&function(r){o.d(t,r,(function(){return i[r]}))}(n);o("20a7"),o("60d5");var a,d=o("f0c5"),s=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"4c368d34",null,!1,e["a"],a);t["default"]=s.exports},baab:function(r,t,o){var e=o("4411");"string"===typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);var i=o("4f06").default;i("26ec6237",e,!0,{sourceMap:!1,shadowMode:!1})},f8c8:function(r,t,o){var e=o("24fb");t=e(!1),t.push([r.i,".btn-submit[data-v-4c368d34]{height:auto!important;line-height:%?88?%}",""]),r.exports=t}}]);