webpackJsonp([4],{108:function(e,t,r){e.exports=r.p+"b5da1528fa80f29a03b2139fd9943148.png"},120:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(r(2),r(35),r(176)),o=r.n(n),a=r(175),i=r.n(a),s=r(177),l=r.n(s);t.default={data:function(){return{alert:!1,currentStep:0}},components:{SetFavor:o.a,Pay:i.a,Success:l.a},methods:{showStep:function(e){return e===this.currentStep},handleReset:function(e){this.$refs[e].resetFields()},back:function(){this.$store.commit("Favor/createFavor/CLEAR"),this.$router.go(-1)},nextStep:function(e){this.currentStep=this.currentStep+e}}}},131:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);r(33);t.default={data:function(){return{}},computed:r.i(n.b)("Ques/createQues",{formValidate:"formValidate",formContent:"formContent"}),methods:{changeStep:function(e){var t=JSON.parse('{"formValidate":'+JSON.stringify(this.formValidate)+',"formContent":'+JSON.stringify(this.formContent)+"}");console.log("data"),console.log(t),this.$store.dispatch("Ques/CREATE_QUES",t),this.$emit("changeStep",e)}}}},132:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2),r(35);t.default={data:function(){return{ruleValidate:{title:[{required:!0,trigger:"blur"}],time:[{required:!0,trigger:"blur"}],place:[{required:!0,trigger:"blur"}],event:[{required:!0,trigger:"blur"}],quantity:[{required:!0,trigger:"blur"},{type:"number",message:"输入必须为整数",trigger:"change",transform:function(e){return Number(e)}}],deposit:[{required:!1,trigger:"blur"},{type:"number",message:"输入必须为整数",trigger:"change",transform:function(e){return Number(e)}}],reward:[{required:!0,message:"报酬不能为空",trigger:"blur"},{type:"number",message:"输入必须为整数",trigger:"blur",transform:function(e){return Number(e)}}],info:[{required:!0,type:"array",min:1,message:"至少选择显示一个联系方式",trigger:"change"},{type:"array",trigger:"change"}]},formValidate:{title:"1111",time:"",place:"",event:0,quantity:1,info:[],deposit:0}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.$store.commit("Ques/createQues/SET_VALIDATE",t.formValidate),t.$emit("changeStep",1)):t.$Message.error("设置失败！请完善信息后再次尝试")})},handleReset:function(e){this.$refs[e].resetFields()},changeStep:function(e){this.$emit("changeStep",e)}}}},133:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2),r(33);t.default={data:function(){return{}},mounted:function(){var e=this;setTimeout(function(){e.$router.push("/questionnaire")},3e3)}}},144:function(e,t){},147:function(e,t){},148:function(e,t){},150:function(e,t){},175:function(e,t,r){r(148);var n=r(32)(r(131),r(193),null,null);n.options.__file="E:\\FILE_myself\\Learning\\juniorsecond\\system_design\\system-design\\frontend\\TimeIsMoney\\src\\views\\createFavor\\Pay.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Pay.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},176:function(e,t,r){r(147);var n=r(32)(r(132),r(192),null,null);n.options.__file="E:\\FILE_myself\\Learning\\juniorsecond\\system_design\\system-design\\frontend\\TimeIsMoney\\src\\views\\createFavor\\SetFavor.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] SetFavor.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},177:function(e,t,r){r(150);var n=r(32)(r(133),r(195),null,null);n.options.__file="E:\\FILE_myself\\Learning\\juniorsecond\\system_design\\system-design\\frontend\\TimeIsMoney\\src\\views\\createFavor\\Success.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Success.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},189:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{margin:"0px 15%"}},[r("div",{staticStyle:{width:"100%",overflow:"hidden",height:"50px",position:"relative","margin-top":"20px"}},[r("div",{staticStyle:{width:"5%",float:"left"}},[r("Icon",{staticStyle:{float:"left",bottom:"5px"},attrs:{type:"ios-arrow-back",size:"24"},on:{click:function(t){e.alert=!e.alert}}})],1),e._v(" "),r("div",{staticStyle:{width:"95%",float:"right"}},[r("Steps",{attrs:{current:e.currentStep}},[r("Step",{attrs:{title:"跑腿设置",content:"设置问卷发布的相关参数"}}),e._v(" "),r("Step",{attrs:{title:"押金支付",content:"支付押金"}}),e._v(" "),r("Step",{attrs:{title:"发布成功",content:"发布成功"}})],1)],1)]),e._v(" "),r("div",{staticStyle:{"margin-top":"40px",overflow:"hidden"}},[e.showStep(0)?r("SetFavor",{on:{changeStep:e.nextStep}}):e.showStep(1)?r("Pay",{on:{changeStep:e.nextStep}}):r("Success")],1),e._v(" "),r("Modal",{attrs:{title:"提示",styles:{top:"20px"}},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[r("p",[e._v("此时返回系统不会保存已经填写的内容。确认返回？")]),e._v(" "),r("button",{on:{click:e.back}},[e._v("确认")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},192:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"}},[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[r("FormItem",{attrs:{label:"标题",prop:"title"}},[r("Input",{attrs:{placeholder:"输入跑腿任务标题"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),e._v(" "),r("FormItem",{attrs:{label:"事件",prop:"event"}},[r("Input",{attrs:{placeholder:"输入跑腿任务具体内容"},model:{value:e.formValidate.event,callback:function(t){e.$set(e.formValidate,"event",t)},expression:"formValidate.event"}})],1),e._v(" "),r("FormItem",{attrs:{label:"时间",prop:"time"}},[r("Input",{attrs:{placeholder:"输入跑腿任务标题"},model:{value:e.formValidate.time,callback:function(t){e.$set(e.formValidate,"time",t)},expression:"formValidate.time"}})],1),e._v(" "),r("FormItem",{attrs:{label:"地点",prop:"place"}},[r("Input",{attrs:{placeholder:"输入跑腿任务标题"},model:{value:e.formValidate.place,callback:function(t){e.$set(e.formValidate,"place",t)},expression:"formValidate.place"}})],1),e._v(" "),r("FormItem",{attrs:{label:"酬金",prop:"reward"}},[r("Input",{attrs:{placeholder:"输入每份问卷填写报酬"},model:{value:e.formValidate.reward,callback:function(t){e.$set(e.formValidate,"reward",t)},expression:"formValidate.reward"}})],1),e._v(" "),r("FormItem",{attrs:{label:"招募数量",prop:"quantity"}},[r("Input",{attrs:{placeholder:"输入召集数量"},model:{value:e.formValidate.quantity,callback:function(t){e.$set(e.formValidate,"quantity",t)},expression:"formValidate.quantity"}})],1),e._v(" "),r("FormItem",{attrs:{label:"押金",prop:"deposit"}},[r("Input",{attrs:{placeholder:"输入本次任务价值"},model:{value:e.formValidate.deposit,callback:function(t){e.$set(e.formValidate,"deposit",t)},expression:"formValidate.deposit"}})],1),e._v(" "),r("FormItem",{attrs:{label:"个人信息展示",prop:"info"}},[r("CheckboxGroup",{model:{value:e.formValidate.info,callback:function(t){e.$set(e.formValidate,"info",t)},expression:"formValidate.info"}},[r("Checkbox",{attrs:{label:"微信"}}),e._v(" "),r("Checkbox",{attrs:{label:"电话"}}),e._v(" "),r("Checkbox",{attrs:{label:"QQ"}}),e._v(" "),r("Checkbox",{attrs:{label:"个性签名"}})],1)],1),e._v(" "),r("FormItem",[r("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){e.handleReset("formValidate")}}},[e._v("Reset")])],1)],1),e._v(" "),r("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"40px"}},[r("Button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){e.changeStep(-1)}}},[e._v("上一步")]),r("Button",{on:{click:function(t){e.handleSubmit("formValidate")}}},[e._v("下一步")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},193:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%","text-align":"center"}},[n("img",{attrs:{src:r(108)}}),e._v(" "),n("p",{staticStyle:{"font-size":"20px","margin-top":"20px"}},[e._v("扫描二维码并支付"),n("span",{staticStyle:{"font-size":"20px",color:"#ce4545"}},[e._v("￥"+e._s(e.formValidate.reward*e.formValidate.quantity))])]),e._v(" "),n("p",[e._v("支付作为押金及填写酬金，未使用部分可退回")]),e._v(" "),n("Button",{on:{click:function(t){e.changeStep(1)}}},[e._v("手动下一步")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},195:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%","text-align":"center"}},[r("p",{staticStyle:{"font-size":"30px","font-weight":"700",margin:"20px 0"}},[e._v("发布成功")]),e._v(" "),r("p",[e._v("3s后自动跳转")])])}]},e.exports.render._withStripped=!0},83:function(e,t,r){r(144);var n=r(32)(r(120),r(189),null,null);n.options.__file="E:\\FILE_myself\\Learning\\juniorsecond\\system_design\\system-design\\frontend\\TimeIsMoney\\src\\views\\CreateFavor.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] CreateFavor.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports}});