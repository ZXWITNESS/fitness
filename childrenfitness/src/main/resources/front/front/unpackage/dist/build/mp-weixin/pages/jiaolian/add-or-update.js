(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaolian/add-or-update"],{"267b":function(e,n,t){"use strict";(function(e){t("eac3");a(t("66fd"));var n=a(t("7434"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"317c":function(e,n,t){},"6fcc":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},7434:function(e,n,t){"use strict";t.r(n);var a=t("6fcc"),r=t("8a38");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("a7e6");var o,u=t("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"008654e4",null,!1,a["a"],o);n["default"]=s.exports},"8a38":function(e,n,t){"use strict";t.r(n);var a=t("fec8"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a},a7e6:function(e,n,t){"use strict";var a=t("317c"),r=t.n(a);r.a},fec8:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,o){try{var u=e[i](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(a,r)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function u(e){i(o,a,r,u,s,"next",e)}function s(e){i(o,a,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b067"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{jiaoliangonghao:"",mima:"",jiaolianxingming:"",touxiang:"",xingbie:"",lianxidianhua:"",shenfenzhenghao:"",shengao:"",tizhong:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoliangonghao:!1,mima:!1,jiaolianxingming:!1,touxiang:!1,xingbie:!1,lianxidianhua:!1,shenfenzhenghao:!1,shengao:!1,tizhong:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(a.default.mark((function r(){var i,o,u,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,t.$api.session(i);case 3:if(o=r.sent,t.user=o.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return t.ruleForm.id=n.id,r.next=12,t.$api.info("jiaolian",t.ruleForm.id);case 12:o=r.sent,t.ruleForm=o.data;case 14:if(t.cross=n.cross,!n.cross){r.next=58;break}u=e.getStorageSync("crossObj"),r.t0=a.default.keys(u);case 18:if((r.t1=r.t0()).done){r.next=58;break}if(s=r.t1.value,"jiaoliangonghao"!=s){r.next=24;break}return t.ruleForm.jiaoliangonghao=u[s],t.ro.jiaoliangonghao=!0,r.abrupt("continue",18);case 24:if("mima"!=s){r.next=28;break}return t.ruleForm.mima=u[s],t.ro.mima=!0,r.abrupt("continue",18);case 28:if("jiaolianxingming"!=s){r.next=32;break}return t.ruleForm.jiaolianxingming=u[s],t.ro.jiaolianxingming=!0,r.abrupt("continue",18);case 32:if("touxiang"!=s){r.next=36;break}return t.ruleForm.touxiang=u[s],t.ro.touxiang=!0,r.abrupt("continue",18);case 36:if("xingbie"!=s){r.next=40;break}return t.ruleForm.xingbie=u[s],t.ro.xingbie=!0,r.abrupt("continue",18);case 40:if("lianxidianhua"!=s){r.next=44;break}return t.ruleForm.lianxidianhua=u[s],t.ro.lianxidianhua=!0,r.abrupt("continue",18);case 44:if("shenfenzhenghao"!=s){r.next=48;break}return t.ruleForm.shenfenzhenghao=u[s],t.ro.shenfenzhenghao=!0,r.abrupt("continue",18);case 48:if("shengao"!=s){r.next=52;break}return t.ruleForm.shengao=u[s],t.ro.shengao=!0,r.abrupt("continue",18);case 52:if("tizhong"!=s){r.next=56;break}return t.ruleForm.tizhong=u[s],t.ro.tizhong=!0,r.abrupt("continue",18);case 56:r.next=18;break;case 58:t.styleChange();case 59:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(a.default.mark((function t(){var r,i,o,u,s,c,l,f,g,d;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.jiaoliangonghao){t.next=3;break}return n.$utils.msg("教练工号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(n.ruleForm.jiaolianxingming){t.next=9;break}return n.$utils.msg("教练姓名不能为空"),t.abrupt("return");case 9:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if(!n.ruleForm.shenfenzhenghao||n.$validate.checkIdCard(n.ruleForm.shenfenzhenghao)){t.next=15;break}return n.$utils.msg("身份证号应输入身份证格式"),t.abrupt("return");case 15:if(!n.cross){t.next=31;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=31;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=27;break}for(l in c)l==u&&(c[l]=s);return f=e.getStorageSync("crossTable"),t.next=25,n.$api.update("".concat(f),c);case 25:t.next=31;break;case 27:r=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 31:if(!i||!r){t.next=53;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:r,crossrefid:i},t.next=37,n.$api.list("jiaolian",g);case 37:if(d=t.sent,!(d.data.total>=o)){t.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!n.ruleForm.id){t.next=48;break}return t.next=46,n.$api.update("jiaolian",n.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,n.$api.add("jiaolian",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!n.ruleForm.id){t.next=58;break}return t.next=56,n.$api.update("jiaolian",n.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,n.$api.add("jiaolian",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])}},[["267b","common/runtime","common/vendor"]]]);