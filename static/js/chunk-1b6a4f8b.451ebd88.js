(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b6a4f8b"],{"355f":function(t,e,i){t.exports=i.p+"static/img/slide-2.d358243b.jpg"},3682:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slideYz"},[i("el-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",[t._v("滑动验证")])]),i("p",{staticClass:"pTitle"},[i("i",{staticClass:"el-icon-s-opportunity"}),t._v("\n      点击按钮调出滑动验证模块，相关配置如下：\n    ")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showSlide=!0}}},[t._v("验证")]),i("p",{staticClass:"pTitle fontBold",staticStyle:{"margin-top":"50px"}},[t._v("参数说明：")]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataTab1,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"params",label:"参数"}}),i("el-table-column",{attrs:{prop:"type",label:"类型"}}),i("el-table-column",{attrs:{prop:"default",label:"默认值"}}),i("el-table-column",{attrs:{prop:"info",label:"说明"}})],1),i("p",{staticClass:"pTitle fontBold",staticStyle:{"margin-top":"20px"}},[t._v("回调函数：")]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataTab2,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"funcName",label:"事件名"}}),i("el-table-column",{attrs:{prop:"type",label:"类型"}}),i("el-table-column",{attrs:{prop:"info",label:"说明"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSlide,expression:"showSlide"}],staticClass:"slideSty"},[i("slide-verify",{ref:"slideDiv",attrs:{sliderText:t.text,w:350,h:175},on:{success:t.onSuccess,fail:t.onFail}}),i("div",{staticClass:"iconBtn"},[i("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.showSlide=!1}}}),i("i",{staticClass:"el-icon-refresh",on:{click:t.refresh}})])],1)],1)],1)},n=[],r=i("bf84"),a={data:function(){return{showSlide:!1,text:"向右滑动",dataTab1:[{params:"l",type:"Number",default:42,info:"滑块的边长"},{params:"r",type:"Number",default:10,info:"滑块突出圆的半径"},{params:"w",type:"Number",default:310,info:"canvas画布的宽"},{params:"h",type:"Number",default:155,info:"canvas画布的高"},{params:"slideText",type:"String",default:"Slide filled right",info:"滑块文字"}],dataTab2:[{funcName:"success",type:"Function",info:"验证码匹配成功的回调"},{funcName:"fail",type:"Function",info:"验证码未匹配的回调"},{funcName:"refresh",type:"Function",info:"刷新验证图片的回调"}]}},components:{SlideVerify:r["a"]},methods:{onSuccess:function(){this.showSlide=!1,this.$message.success("验证成功"),this.refresh()},onFail:function(){this.$message.error("验证失败")},refresh:function(){this.$refs.slideDiv.reset()}}},o=a,c=(i("bffe"),i("63a6"),i("2877")),l=Object(c["a"])(o,s,n,!1,null,"1b230ac7",null);e["default"]=l.exports},4195:function(t,e,i){},"44bc":function(t,e,i){"use strict";var s=i("7b1b"),n=i.n(s);n.a},5492:function(t,e,i){t.exports=i.p+"static/img/slide-3.80666881.jpg"},"5dbc":function(t,e,i){var s=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var r,a=e.constructor;return a!==i&&"function"==typeof a&&(r=a.prototype)!==i.prototype&&s(r)&&n&&n(t,r),t}},"63a6":function(t,e,i){"use strict";var s=i("4195"),n=i.n(s);n.a},"69a7":function(t,e,i){t.exports=i.p+"static/img/slide-0.6e5db33c.jpg"},"71c4":function(t,e,i){t.exports=i.p+"static/img/slide-1.a976180d.jpg"},"7b1b":function(t,e,i){},"8b97":function(t,e,i){var s=i("d3f4"),n=i("cb7c"),r=function(t,e){if(n(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return r(t,i),e?t.__proto__=i:s(t,i),t}}({},!1):void 0),check:r}},a8fb:function(t,e,i){var s={"./slide-0.jpg":"69a7","./slide-1.jpg":"71c4","./slide-2.jpg":"355f","./slide-3.jpg":"5492","./slide-4.jpg":"c017"};function n(t){var e=r(t);return i(e)}function r(t){var e=s[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="a8fb"},aa77:function(t,e,i){var s=i("5ca1"),n=i("be13"),r=i("79e5"),a=i("fdef"),o="["+a+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,e,i){var n={},o=r(function(){return!!a[t]()||c[t]()!=c}),l=n[t]=o?e(h):a[t];i&&(n[i]=l),s(s.P+s.F*o,"String",n)},h=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},bf84:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-verify",attrs:{id:"slideVerify",onselectstart:"return false;"}},[i("canvas",{ref:"canvas",attrs:{width:t.w,height:t.h}}),i("div",{staticClass:"slide-verify-refresh-icon",on:{click:t.refresh}}),i("canvas",{ref:"block",staticClass:"slide-verify-block",attrs:{width:t.w,height:t.h}}),i("div",{staticClass:"slide-verify-slider",class:{"container-active":t.containerActive,"container-success":t.containerSuccess,"container-fail":t.containerFail}},[i("div",{staticClass:"slide-verify-slider-mask",style:{width:t.sliderMaskWidth}},[i("div",{staticClass:"slide-verify-slider-mask-item",style:{left:t.sliderLeft},on:{mousedown:t.sliderDown,touchstart:t.touchStartEvent,touchmove:t.touchMoveEvent,touchend:t.touchEndEvent}},[i("i",{staticClass:"el-icon-arrow-right"})])]),i("span",{staticClass:"slide-verify-slider-text"},[t._v(t._s(t.sliderText))])])])},n=[],r=(i("c5f6"),Math.PI);function a(t,e){return t+e}function o(t){return t*t}var c={name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"}},data:function(){return{containerActive:!1,containerSuccess:!1,containerFail:!1,canvasCtx:null,blockCtx:null,block:null,block_x:void 0,block_y:void 0,L:this.l+2*this.r+3,img:void 0,originX:void 0,originY:void 0,isMouseDown:!1,trail:[],sliderLeft:0,sliderMaskWidth:0}},mounted:function(){this.init()},methods:{init:function(){this.initDom(),this.initImg(),this.bindEvents()},initDom:function(){this.block=this.$refs.block,this.canvasCtx=this.$refs.canvas.getContext("2d"),this.blockCtx=this.block.getContext("2d")},initImg:function(){var t=this,e=this.createImg(function(){t.drawBlock(),t.canvasCtx.drawImage(e,0,0,t.w,t.h),t.blockCtx.drawImage(e,0,0,t.w,t.h);var i=t.block_x,s=t.block_y,n=t.r,r=t.L,a=s-2*n-1,o=t.blockCtx.getImageData(i,a,r,r);t.block.width=r,t.blockCtx.putImageData(o,0,a)});this.img=e},drawBlock:function(){this.block_x=this.getRandomNumberByRange(this.L+10,this.w-(this.L+10)),this.block_y=this.getRandomNumberByRange(10+2*this.r,this.h-(this.L+10)),this.draw(this.canvasCtx,this.block_x,this.block_y,"fill"),this.draw(this.blockCtx,this.block_x,this.block_y,"clip")},draw:function(t,e,i,s){var n=this.l,a=this.r;t.beginPath(),t.moveTo(e,i),t.arc(e+n/2,i-a+2,a,.72*r,2.26*r),t.lineTo(e+n,i),t.arc(e+n+a-2,i+n/2,a,1.21*r,2.78*r),t.lineTo(e+n,i+n),t.lineTo(e,i+n),t.arc(e+a-2,i+n/2,a+.4,2.76*r,1.24*r,!0),t.lineTo(e,i),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.7)",t.strokeStyle="rgba(255, 255, 255, 0.7)",t.stroke(),t[s](),t.globalCompositeOperation="overlay"},createImg:function(t){var e=this,i=document.createElement("img");return i.crossOrigin="Anonymous",i.onload=t,i.onerror=function(){i.src=e.getRandomImg()},i.src=this.getRandomImg(),i},getRandomImg:function(){return i("a8fb")("./slide-".concat(this.getRandomNumberByRange(0,4),".jpg"))},getRandomNumberByRange:function(t,e){return Math.round(Math.random()*(e-t)+t)},refresh:function(){this.reset(),this.$emit("refresh")},sliderDown:function(t){this.originX=t.clientX,this.originY=t.clientY,this.isMouseDown=!0},touchStartEvent:function(t){this.originX=t.changedTouches[0].pageX,this.originY=t.changedTouches[0].pageY,this.isMouseDown=!0},bindEvents:function(){var t=this;document.addEventListener("mousemove",function(e){if(!t.isMouseDown)return!1;var i=e.clientX-t.originX,s=e.clientY-t.originY;if(i<0||i+38>=t.w)return!1;t.sliderLeft=i+"px";var n=(t.w-40-20)/(t.w-40)*i;t.block.style.left=n+"px",t.containerActive=!0,t.sliderMaskWidth=i+"px",t.trail.push(s)}),document.addEventListener("mouseup",function(e){if(!t.isMouseDown)return!1;if(t.isMouseDown=!1,e.clientX===t.originX)return!1;t.containerActive=!1;var i=t.verify(),s=i.spliced,n=i.TuringTest;s?n?(t.containerSuccess=!0,t.$emit("success")):(t.containerFail=!0,t.sliderText="try again",t.reset()):(t.containerFail=!0,t.$emit("fail"),setTimeout(function(){t.reset()},1e3))})},touchMoveEvent:function(t){if(!this.isMouseDown)return!1;var e=t.changedTouches[0].pageX-this.originX,i=t.changedTouches[0].pageY-this.originY;if(e<0||e+38>=this.w)return!1;this.sliderLeft=e+"px";var s=(this.w-40-20)/(this.w-40)*e;this.block.style.left=s+"px",this.containerActive=!0,this.sliderMaskWidth=e+"px",this.trail.push(i)},touchEndEvent:function(t){var e=this;if(!this.isMouseDown)return!1;if(this.isMouseDown=!1,t.changedTouches[0].pageX===this.originX)return!1;this.containerActive=!1;var i=this.verify(),s=i.spliced,n=i.TuringTest;s?n?(this.containerSuccess=!0,this.$emit("success")):(this.containerFail=!0,this.sliderText="try again",this.reset()):(this.containerFail=!0,this.$emit("fail"),setTimeout(function(){e.reset()},1e3))},verify:function(){var t=this.trail,e=t.reduce(a)/t.length,i=t.map(function(t){return t-e}),s=Math.sqrt(i.map(o).reduce(a)/t.length),n=parseInt(this.block.style.left);return{spliced:Math.abs(n-this.block_x)<10,TuringTest:e!==s}},reset:function(){this.containerActive=!1,this.containerSuccess=!1,this.containerFail=!1,this.sliderLeft=0,this.block.style.left=0,this.sliderMaskWidth=0;var t=this.w,e=this.h;this.canvasCtx.clearRect(0,0,t,e),this.blockCtx.clearRect(0,0,t,e),this.block.width=t,this.img.src=this.getRandomImg()}}},l=c,u=(i("44bc"),i("2877")),f=Object(u["a"])(l,s,n,!1,null,"2c8f8447",null);e["a"]=f.exports},bffe:function(t,e,i){"use strict";var s=i("fcc0"),n=i.n(s);n.a},c017:function(t,e,i){t.exports=i.p+"static/img/slide-4.69bbd474.jpg"},c5f6:function(t,e,i){"use strict";var s=i("7726"),n=i("69a8"),r=i("2d95"),a=i("5dbc"),o=i("6a99"),c=i("79e5"),l=i("9093").f,u=i("11e9").f,f=i("86cc").f,h=i("aa77").trim,d="Number",p=s[d],b=p,v=p.prototype,g=r(i("2aeb")(v))==d,m="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():h(e,3);var i,s,n,r=e.charCodeAt(0);if(43===r||45===r){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if(a=c.charCodeAt(l),a<48||a>n)return NaN;return parseInt(c,s)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(g?c(function(){v.valueOf.call(i)}):r(i)!=d)?a(new b(y(e)),i,p):y(e)};for(var w,k=i("9e1e")?l(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)n(b,w=k[x])&&!n(p,w)&&f(p,w,u(b,w));p.prototype=v,v.constructor=p,i("2aba")(s,d,p)}},fcc0:function(t,e,i){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);