webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,r){e.exports=r("NHnr")},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("/5sW"),a=(r("VjuZ"),{name:"Index",data:function(){return{format:"ass",source:""}},computed:{result:function(){var e=this.format,t=this.source;return"srt"===e?t.replace(/(\d+\n)/g,"").replace(/(\d+:?){3},\d+ --> (\d+:?){3},/g,"").replace(/{\\an.*}/g,"").replace(/{\\pos.*}/g,""):"ass"===e?t.replace(/{.*}/g,"").replace(/[^]*\[Events\]\n/,"").replace(/Format:.*\n/,"").replace(/Dialogue.*,(.*p0})?/g,"\n").replace(/\\N/g,"\n").replace(/\n{3,}/g,"\n\n"):t}}}),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[e._v("字幕转文本工具")]),r("form",{staticClass:"form"},[r("div",{staticClass:"form-title"},[e._v("字幕格式：")]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"ass"}},[e._v("ass")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],attrs:{type:"radio",value:"ass",name:"ass"},domProps:{checked:e._q(e.format,"ass")},on:{change:function(t){e.format="ass"}}})]),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"srt"}},[e._v("srt")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.format,expression:"format"}],attrs:{type:"radio",value:"srt",name:"srt"},domProps:{checked:e._q(e.format,"srt")},on:{change:function(t){e.format="srt"}}})])])]),r("div",{staticClass:"main"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"source",domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),r("pre",{staticClass:"result",domProps:{textContent:e._s(e.result)}})])])},s=[],c=r("XyMi");function i(e){r("oxVq")}var l=!1,u=i,d="data-v-2037ae5c",f=null,p=Object(c["a"])(a,n,s,l,u,d,f),m=p.exports,v={name:"app",components:{Index:m}},g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Index")],1)},h=[];function x(e){r("+VGo")}var _=!1,C=x,b=null,w=null,N=Object(c["a"])(v,g,h,_,C,b,w),k=N.exports,y=r("ydGU");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(k)}}).$mount("#app")},oxVq:function(e,t){}},[0]);