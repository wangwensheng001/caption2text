(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)s=i[f],o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={1:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/caption2text/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([4,0]),n()})({4:function(e,t,n){e.exports=n("Vtdi")},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r,o,a=n("Kw5r"),s=n("zlta"),i=n.n(s),c=(n("0eeA"),n("v0CA"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Index")}),l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{directives:[{name:"resize",rawName:"v-resize",value:e.resizeHandler,expression:"resizeHandler"}]},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",{staticClass:"white--text"},[e._v("字幕转文本工具")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",dark:""},on:{click:e.switchEncoding}},[e._v(e._s(e.encoding))]),e._v(" "),n("v-btn",{attrs:{icon:"",dark:""},on:{click:e.switchFormat}},[e._v(e._s(e.files[0].format))]),e._v(" "),n("a",{attrs:{href:"https://github.com/F-loat/caption2text",target:"_blank"}},[n("v-btn",{attrs:{icon:"",dark:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",fill:"#fff",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])],1)],1),e._v(" "),n("div",{staticClass:"main",on:{drop:function(t){return t.preventDefault(),e.dropFile(t)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.files[0].source,expression:"files[0].source"}],ref:"source",staticClass:"source",attrs:{placeholder:"支持多文件拖入"},domProps:{value:e.files[0].source},on:{input:function(t){t.target.composing||e.$set(e.files[0],"source",t.target.value)}}}),e._v(" "),n("pre",{ref:"result",staticClass:"result",class:{holder:!e.files[0].source}},[e._v(e._s(e.getResult(e.files[0].source)||"支持批量导出"))])]),e._v(" "),n("v-btn",{attrs:{color:"secondary",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[n("v-icon",[e._v("get_app")])],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[e._v("导出文本")]),e._v(" "),n("v-card-text",[e._l(e.files,function(t){return n("v-text-field",{key:t.name,attrs:{label:"文件名",suffix:"."+e.outputFormat},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"file.name"}})}),e._v(" "),n("v-radio-group",{attrs:{label:"文件格式",row:""},model:{value:e.outputFormat,callback:function(t){e.outputFormat=t},expression:"outputFormat"}},[n("v-radio",{attrs:{label:"Word",value:"docx"}}),e._v(" "),n("v-radio",{attrs:{label:"Text",value:"txt"}})],1)],2),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){t.stopPropagation(),e.dialog=!1}}},[e._v("取消")]),e._v(" "),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(t){return t.stopPropagation(),e.downFile(t)}}},[e._v("下载")])],1)],1)],1),e._v(" "),n("v-snackbar",{attrs:{timeout:2e3,top:e.windowSize.x>=600,bottom:e.windowSize.x<600},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n    "+e._s(e.snackbar.text)+"\n    "),n("v-btn",{attrs:{flat:"",color:"secondary"},nativeOn:{click:function(t){e.snackbar.show=!1}}},[e._v("Close")])],1)],1)},f=[],d=(n("KKXr"),n("rE2o"),n("ioFf"),n("rGqo"),n("ls82"),n("MECJ")),p=(n("f3/d"),n("pIFo"),n("OQc2")),v=n.n(p),h=n("fDnD"),g=n.n(h),m=n("AIMp"),b=n.n(m),w=n("+/lt"),x=n.n(w),k=n("JEAp"),_={name:"Index",data:function(){return{windowSize:{x:window.innerWidth,y:window.innerHeight},encoding:"utf-8",outputFormat:"docx",files:[{format:"ass",source:""}],snackbar:{show:!1,text:""},dialog:!1}},mounted:function(){var e=this;this.$nextTick(function(){new v.a,e.$refs.source.addEventListener("scroll",e.scrollSync),e.$refs.result.addEventListener("scroll",e.scrollSync)})},methods:{getResult:function(e){var t=this.format;return"srt"===t?e.replace(/(\d+:?){3},\d+ --> (\d+:?){3},\d?/g,"").replace(/\d+\s*\n/g,"").replace(/{\\an.*}/g,"").replace(/{\\pos.*}/g,""):"ass"===t?e.replace(/[^]*\[Events\]\s*/,"").replace(/Format:.*\s*/,"").replace(/Dialogue.*,,(.*p0})?/g,"\n").replace(/{.*?}/g,"").replace(/\\N/g,"\n").replace(/(\s*\n){3,}/g,"\n\n"):e},resizeHandler:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight}},switchEncoding:function(){this.encoding="utf-8"===this.encoding?"gb2312":"utf-8",this.dropFile(null,r)},switchFormat:function(){this.format="ass"===this.format?"srt":"ass"},dropFile:function(e,t){for(var n=this,r=t?[t]:e.dataTransfer.files,o=function(e){var t={},o=new FileReader;o.onload=function(e){t.source=e.target.result},o.readAsText(r[e],n.encoding),t.format=r[e].name.replace(/.*\./,""),t.name=r[e].name.replace(".".concat(t.format),""),n.files[e]=t},a=0;a<r.length;a+=1)o(a);this.files.length>1&&(this.dialog=!0),this.snackbar={show:!0,text:"字幕导入成功"}},downFile:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,a,s,i,c,l,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.files,n=this.outputFormat,r=!0,o=!1,a=void 0,e.prev=4,s=t[Symbol.iterator]();case 6:if(r=(i=s.next()).done){e.next=30;break}if(c=i.value,c.name){e.next=11;break}return this.snackbar={show:!0,text:"请输入文件名"},e.abrupt("continue",27);case 11:if(l=this.getResult(c.source),u=void 0,"docx"!==n){e.next=25;break}return e.prev=14,e.next=17,this.generateDoc(l);case 17:u=e.sent,e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](14),e.t0&&(this.snackbar={show:!0,text:"出错了..."});case 23:e.next=26;break;case 25:u=new Blob([l.replace(/\r?\n/g,"\r\n")]);case 26:Object(k["saveAs"])(u,"".concat(c.name,".").concat(n));case 27:r=!0,e.next=6;break;case 30:e.next=36;break;case 32:e.prev=32,e.t1=e["catch"](4),o=!0,a=e.t1;case 36:e.prev=36,e.prev=37,r||null==s.return||s.return();case 39:if(e.prev=39,!o){e.next=42;break}throw a;case 42:return e.finish(39);case 43:return e.finish(36);case 44:this.dialog=!1,this.snackbar={show:!0,text:"文本导出成功"};case 46:case"end":return e.stop()}},e,this,[[4,32,36,44],[14,20],[37,,39,43]])}));return function(){return e.apply(this,arguments)}}(),generateDoc:function(e){return new Promise(function(t,n){b.a.getBinaryContent("template.docx",function(r,o){if(r)return n(r);var a=new g.a(o),s=(new x.a).loadZip(a);s.setData({author:"F-loat",content:e.split("\n").map(function(e){return{text:e}})}),s.render();var i=s.getZip().generate({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});t(i)})})},scrollSync:function(e){var t=this;clearTimeout(o);var n=e.target,r=n.scrollTop,a=n.scrollHeight,s=r/a,i=this.$refs,c=i.source,l=i.result,u=e.target===c?l:c;u.removeEventListener("scroll",this.scrollSync),u.scrollTop=u.scrollHeight*s,o=setTimeout(function(){u.addEventListener("scroll",t.scrollSync)},300)}}},y=_,F=(n("xeQW"),n("KHd+")),O=Object(F["a"])(y,u,f,!1,null,"359cbd20",null),E=O.exports,j={name:"app",components:{Index:E}},z=j,A=(n("ZL7j"),Object(F["a"])(z,c,l,!1,null,null,null)),C=A.exports,S=n("lIOY");Object(S["a"])("".concat("/caption2text/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,a["a"].use(i.a,{theme:{primary:"#474a4f",secondary:"#ff5252"}}),new a["a"]({render:function(e){return e(C)}}).$mount("#app")},YnGJ:function(e,t,n){},ZL7j:function(e,t,n){"use strict";var r=n("YnGJ"),o=n.n(r);o.a},sbG2:function(e,t,n){},xeQW:function(e,t,n){"use strict";var r=n("sbG2"),o=n.n(r);o.a}});