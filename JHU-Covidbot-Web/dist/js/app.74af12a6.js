(function(t){function e(e){for(var i,a,r=e[0],o=e[1],u=e[2],d=0,g=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&g.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);c&&c(e);while(g.length)g.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(i=!1)}i&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},l=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=o;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"002c":function(t,e,n){},"03b6":function(t,e,n){},"0527":function(t,e,n){},"0686":function(t,e,n){},"0760":function(t,e,n){},"1fc2":function(t,e,n){"use strict";n("2941")},2160:function(t,e,n){"use strict";n("dd27")},"26dd":function(t,e,n){},2941:function(t,e,n){},"2afe":function(t,e,n){"use strict";n("c6f4")},"42ad":function(t,e,n){"use strict";n("fb64")},4357:function(t,e,n){},4968:function(t,e,n){},"4a65":function(t,e,n){},"4b83":function(t,e,n){"use strict";n("0686")},"529f":function(t,e,n){},"55a9":function(t,e,n){"use strict";n("8741")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("TopHead"),n("section",{staticClass:"container chat-container"},[t.error?n("Error",{attrs:{error:t.error}}):t._e(),n("RichComponent",[n("Bubble",{attrs:{text:"Test"}})],1),t.messages?n("section",{staticStyle:{height:"80%"},attrs:{"aria-live":"polite"}},[t._l(t.messages,(function(e){return n("div",{key:e.responseId,attrs:{id:"message"}},[n("BubbleWrapper",[e.data.queryResult.queryText?n("Bubble",{attrs:{text:e.data.queryResult.queryText,me:""}}):t._e()],1),n("RichComponent",[e.data.queryResult.fulfillmentText?n("Bubble",{attrs:{text:e.data.queryResult.fulfillmentText}}):t._e()],1),t._l(e.data.queryResult.fulfillmentMessages,(function(e,i){return n("RichComponent",{key:i},[e.listSelect?n("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return n("ListItem",{key:e.info.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.imageUri,"image-title":e.image.accessibilityText},nativeOn:{click:function(n){return t.send({text:e.info.key})}}})})),1):t._e()],1)})),e.data.queryResult.webhookPayload&&e.data.queryResult.webhookPayload.google?n("section",[t._l(e.data.queryResult.webhookPayload.google.richResponse.items,(function(e,i){return n("RichComponent",{key:i},[e.listSelect?n("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return n("ListItem",{key:e.info.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.url,"image-title":e.image.accessibilityText},nativeOn:{click:function(n){return t.send({text:e.info.key})}}})})),1):t._e()],1)})),t._l(e.data.queryResult.webhookPayload.google.systemIntent,(function(e,i){return n("RichComponent",{key:i},[e.listSelect?n("List",{attrs:{title:e.listSelect.title,subtitle:e.listSelect.subtitle}},t._l(e.listSelect.items,(function(e){return n("ListItem",{key:e.optionInfo.key,attrs:{title:e.title,description:e.description,"image-uri":e.image.url,"image-title":e.image.accessibilityText},nativeOn:{click:function(n){return t.send({text:e.optionInfo.key})}}})})),1):t._e()],1)}))],2):t._e()],2)})),t.loading?n("div",{attrs:{id:"message"}},[n("BubbleWrapper",[n("Bubble",{attrs:{me:"",loading:"","aria-hidden":"true"}})],1),n("Bubble",{attrs:{loading:"","aria-hidden":"true"}})],1):t._e()],2):t._e()],1),n("ChatInput",{ref:"input",on:{submit:t.send}},[t._l(t.suggestions.text_suggestions,(function(e,i){return n("Suggestion",{key:i,attrs:{title:e},nativeOn:{click:function(n){return t.send({text:e})}}})})),t.suggestions.link_suggestion?n("Suggestion",{attrs:{title:t.suggestions.link_suggestion.destinationName,url:t.suggestions.link_suggestion.uri||t.suggestions.link_suggestion.url}}):t._e()],2)],1)},l=[],a=(n("ac1f"),n("5319"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay"},[n("img",{staticClass:"app-icon",attrs:{src:"https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university.shield.small_.blue_.png",alt:t.logo}}),n("h1",{staticClass:"app-title"},[t._v("Welcome to the COVID-19 Q&A Chatbot")])])}),r=[],o=n("2877"),u={},c=Object(o["a"])(u,a,r,!1,null,"34f17271",null),d=c.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay"},[n("i",{staticClass:"material-icons error-icon",attrs:{"aria-hidden":"true"}},[t._v("error")]),n("pre",{staticClass:"error-description"},[t._v(t._s(t.error))])])},f=[],p={name:"Error",props:{error:{type:String,default:null}}},m=p,b=(n("d382"),Object(o["a"])(m,g,f,!1,null,"7c2ba058",null)),h=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app-head"},[t._m(0),t._t("default")],2)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-info"},[n("div",{staticClass:"app-name"},[t._v("GCIS Help")]),n("div",{staticClass:"app-poweredby"},[t._v("TBC")])])}],v={name:"TopHead",props:{app:{type:Object,default:null}}},S=v,C=(n("6674"),Object(o["a"])(S,y,_,!1,null,"4dbb5db9",null)),k=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottomchat"},[n("div",{staticClass:"container"},[n("div",{staticClass:"suggestions"},[t._t("default")],2),n("div",{staticClass:"flexible"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",autofocus:"",placeholder:t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].inputTitle||t.translations[t.config.fallback_lang].inputTitle},domProps:{value:t.query},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit({text:t.query})},focus:function(e){t.microphone=!1,t.should_listen=!1},input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("button",{staticClass:"button",attrs:{title:t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle,"aria-label":t.translations[t.lang()]&&t.translations[t.lang()].sendTitle||t.translations[t.config.fallback_lang].sendTitle},on:{click:function(e){return t.submit({text:t.query})}}},[n("i",{staticClass:"material-icons",attrs:{"aria-hidden":"true"}},[t._v("arrow_upward")])])])])])},T=[],w=n("1eaa");n("68cb");window.MediaRecorder=w["a"];var q={name:"ChatInput",data:function(){return{query:"",microphone:!1,recognition:null,recorder:null,should_listen:!1}},computed:{},watch:{},methods:{listen:function(){},submit:function(t){t.text&&t.text.length>0&&(this.$emit("submit",t),this.query="")}}},O=q,R=(n("b5eb"),Object(o["a"])(O,x,T,!1,null,"6cd93d59",null)),j=R.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[t._t("default")],2)},I=[],M={name:"RichComponent"},P=M,$=(n("2160"),Object(o["a"])(P,E,I,!1,null,"190ddbcc",null)),B=$.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bubble",class:{me:t.me,loading:t.loading},attrs:{tabindex:"0"}},[n("p",{staticClass:"a",domProps:{innerHTML:t._s(t.text)}},[t._v(t._s(t.text))])])},L=[],N={name:"Bubble",props:{text:{type:String,required:!1,default:""},me:{type:Boolean},loading:{type:Boolean}}},A=N,W=(n("e534"),n("c214"),Object(o["a"])(A,U,L,!1,null,"69e0907b",null)),J=W.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bubble-wrapper"},[t._t("default")],2)},F=[],V={name:"BubbleWrapper"},z=V,D=(n("4b83"),Object(o["a"])(z,H,F,!1,null,"2ec30dc2",null)),G=D.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",attrs:{tabindex:"0"}},[t.imageUri?n("img",{staticClass:"card-image",attrs:{src:t.imageUri,alt:t.imageTitle||t.title}}):t._e(),n("div",{staticClass:"card-content"},[t.title?n("div",{staticClass:"card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?n("div",{staticClass:"card-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t.text?n("div",{staticClass:"card-text"},[t._v(t._s(t.text))]):t._e(),t._t("default")],2)])},K=[],X={name:"Card",props:{text:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},subtitle:{type:String,default:null},title:{type:String,default:null}}},Y=X,Z=(n("1fc2"),Object(o["a"])(Y,Q,K,!1,null,"86cdfd1c",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"card-button",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[n("i",{staticClass:"material-icons card-button-icon",attrs:{"aria-hidden":"true"}},[t._v("arrow_forward")]),n("span",{staticClass:"card-button-title"},[t._v(t._s(t.title))])])},nt=[],it={name:"CardButton",props:{uri:{type:String,default:null},title:{type:String,default:null}}},st=it,lt=(n("7349"),Object(o["a"])(st,et,nt,!1,null,"3fd8dad8",null)),at=lt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"carousel"},[t._t("default")],2)},ot=[],ut={name:"CarouselSelect"},ct=ut,dt=(n("ed39"),Object(o["a"])(ct,rt,ot,!1,null,"f588cec2",null)),gt=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t.title?n("div",{staticClass:"list-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?n("div",{staticClass:"list-subtitle"},[t._v("Subtitle")]):t._e(),n("ul",{staticClass:"list-content",attrs:{"aria-label":t.title}},[t._t("default")],2)])},pt=[],mt={name:"List",props:{title:{type:String,default:null},subtitle:{type:String,default:null}}},bt=mt,ht=(n("c296"),Object(o["a"])(bt,ft,pt,!1,null,"2da4c2f2",null)),yt=ht.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item",attrs:{tabindex:"0"}},[t.imageUri?n("img",{staticClass:"list-item-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),n("a",{staticClass:"list-item-content",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.uri}},[n("div",{staticClass:"list-item-title"},[t._v(t._s(t.title))]),n("span",{staticClass:"list-item-description"},[t._v(t._s(t.description))]),n("span",{staticClass:"list-item-footer"},[t._v(t._s(t.footer))])])])},vt=[],St={name:"ListItem",props:{imageUri:{type:String,default:null},imageTitle:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null},footer:{type:String,default:null},uri:{type:String,default:null}}},Ct=St,kt=(n("55a9"),Object(o["a"])(Ct,_t,vt,!1,null,"00dbfc94",null)),xt=kt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"picture",attrs:{src:t.uri,alt:t.title}})},wt=[],qt={name:"Picture",props:{uri:{type:String,default:null},title:{type:String,default:null}}},Ot=qt,Rt=(n("42ad"),Object(o["a"])(Ot,Tt,wt,!1,null,"9bf57eb6",null)),jt=Rt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[t.iconUri?n("img",{staticClass:"media-image",attrs:{src:t.iconUri,alt:t.iconTitle}}):t._e(),n("div",{staticClass:"media-content"},[t.name?n("div",{staticClass:"media-title"},[t._v(t._s(t.name))]):t._e(),t.description?n("div",{staticClass:"media-subtitle"},[t._v(t._s(t.description))]):t._e()]),n("audio",{staticClass:"media-controls",attrs:{controls:"",src:t.uri}})])},It=[],Mt={name:"Media",props:{name:{type:String,default:null},description:{type:String,default:null},iconUri:{type:String,default:null},iconTitle:{type:String,default:null},uri:{type:String,default:null}}},Pt=Mt,$t=(n("de4e"),Object(o["a"])(Pt,Et,It,!1,null,"58324bb1",null)),Bt=$t.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-card"},[t.imageUri?n("img",{staticClass:"table-card-image",attrs:{src:t.imageUri,alt:t.imageTitle}}):t._e(),n("div",{staticClass:"table-card-content"},[t.title?n("div",{staticClass:"table-card-title"},[t._v(t._s(t.title))]):t._e(),t.subtitle?n("div",{staticClass:"table-card-subtitle"},[t._v(t._s(t.subtitle))]):t._e()]),n("div",{staticClass:"table-card-scrollable"},[n("table",{staticClass:"table-card-table",attrs:{cellspacing:"0",cellpadding:"0"}},[n("tr",t._l(t.header,(function(e,i){return n("th",{key:i},[t._v(t._s(e.header))])})),0),t._l(t.rows,(function(e,i){return n("tr",{key:i},t._l(e.cells,(function(e){return n("td",{key:e.text},[t._v(t._s(e.text))])})),0)}))],2)]),t._t("default")],2)},Lt=[],Nt={name:"TableCard",props:{title:{type:String,default:null},subtitle:{type:String,default:null},imageUri:{type:String,default:null},imageTitle:{type:String,default:null},header:{type:Array,default:null},rows:{type:Array,default:null}}},At=Nt,Wt=(n("9743"),Object(o["a"])(At,Ut,Lt,!1,null,"29435e37",null)),Jt=Wt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.url?n("a",{staticClass:"suggestion",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.url}},[t._v(" "+t._s(t.title)+" ")]):n("button",{staticClass:"suggestion"},[t._v(t._s(t.title))])},Ft=[],Vt={name:"Suggestion",props:{url:{type:String,default:null},title:{type:String,default:null}}},zt=Vt,Dt=(n("2afe"),Object(o["a"])(zt,Ht,Ft,!1,null,"7d7ed0c8",null)),Gt=Dt.exports,Qt=n("c437");var Kt={name:"App",components:{Welcome:d,Error:h,TopHead:k,ChatInput:j,RichComponent:B,Bubble:J,BubbleWrapper:G,Card:tt,CardButton:at,Carousel:gt,List:yt,ListItem:xt,Picture:jt,Media:Bt,TableCard:Jt,Suggestion:Gt},data:function(){return{app:null,messages:[],language:"",session:"",muted:!0,loading:!1,error:null}},computed:{suggestions:function(){if(this.messages.length>0){var t=this.messages[this.messages.length-1],e=[];for(var n in t.data.queryResult.fulfillmentMessages)console.log(t.data.queryResult.fulfillmentMessages[n]),t.data.queryResult.fulfillmentMessages[n].suggestions&&(e.text_suggestions=t.data.queryResult.fulfillmentMessages[n].suggestions.suggestions.map((function(t){return t.title}))),t.data.queryResult.fulfillmentMessages[n].linkOutSuggestion&&(e.link_suggestion=t.data.queryResult.fulfillmentMessages[n].linkOutSuggestion),t.data.queryResult.fulfillmentMessages[n].quickReplies&&(console.log("enter quick reply"),e.text_suggestions=t.data.queryResult.fulfillmentMessages[n].quickReplies.quickReplies);if(t.data.queryResult.webhookPayload&&t.data.queryResult.webhookPayload.google)for(var i in t.data.queryResult.webhookPayload.google)t.data.queryResult.webhookPayload.google[i].suggestions&&(e.text_suggestions=t.data.queryResult.webhookPayload.google[i].suggestions.map((function(t){return t.title}))),t.data.queryResult.webhookPayload.google[i].linkOutSuggestion&&(e.link_suggestion=t.data.queryResult.webhookPayload.google[i].linkOutSuggestion);return e}return{text_suggestions:this.config.start_suggestions}}},watch:{messages:function(t){console.log("enter messages watch function"),this.history()&&sessionStorage.setItem("message_history",JSON.stringify(t)),console.log(JSON.stringify(t)),console.log("exit messages watch function")},loading:function(){console.log("enter loading watch function"),setTimeout((function(){var t=document.querySelector("#app");if(t.querySelector("#message")){var e=t.querySelectorAll("#message")[t.querySelectorAll("#message").length-1].offsetTop-68;window.scrollTo({top:e,behavior:"smooth"})}}),2),console.log("exit loading watch function")}},created:function(){console.log("enter created watch function"),console.log("created branch a"),this.history()&&null!==sessionStorage.getItem("message_history")&&(this.messages=JSON.parse(sessionStorage.getItem("message_history")),console.log(this.messages)),console.log("created branch b"),this.history()&&null!==sessionStorage.getItem("session")?(this.session=sessionStorage.getItem("session"),console.log(this.session)):(this.session=Qt(),this.history()&&sessionStorage.setItem("session",this.session)),console.log("created branch c"),this.history()&&null!==sessionStorage.getItem("agent")&&(this.app=JSON.parse(sessionStorage.getItem("agent")),console.log(this.app)),console.log("exit created watch function")},methods:{send:function(t){var e=this,n={sentence:t.text},i={"Content-Type":"application/json"};this.loading=!0,this.error=null,this.$api.post("v1/general",n,i).then((function(t){e.messages.push(t),console.log(sessionStorage),console.log(e.messages)})).catch((function(t){e.error=t.message})).then((function(){return e.loading=!1}))},handle:function(t){}}},Xt=Kt,Yt=(n("6933"),n("f446"),Object(o["a"])(Xt,s,l,!1,null,"8d12f316",null)),Zt=Yt.exports,te={endpoint:"https://gateway.covid-19-bot.org",muted:!1,start_suggestions:[],fallback_lang:"en",voice:"native"},ee=n("e3e6"),ne=n("9483"),ie=function(){Object(ne["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})},se=n("bc3a"),le=n.n(se);ie(),i["a"].config.productionTip=!1,i["a"].prototype.config=te,i["a"].prototype.translations=ee,i["a"].prototype.history=function(){console.log("enter histroy function");try{return sessionStorage.getItem("check"),console.log("exit histroy function"),!0}catch(t){return!1}},i["a"].prototype.lang=function(){return i["a"].prototype.history()&&sessionStorage.getItem("lang")||te.fallback_lang},i["a"].use({install:function(t){t.prototype.$api=le.a.create({baseURL:"http://127.0.0.1:5000/api/"})}}),new i["a"]({render:function(t){return t(Zt)}}).$mount("#app")},6674:function(t,e,n){"use strict";n("4968")},6933:function(t,e,n){"use strict";n("4a65")},7349:function(t,e,n){"use strict";n("002c")},"7efd":function(t,e,n){},8741:function(t,e,n){},9743:function(t,e,n){"use strict";n("4357")},b1de:function(t,e,n){},b5eb:function(t,e,n){"use strict";n("e041")},c214:function(t,e,n){"use strict";n("0527")},c296:function(t,e,n){"use strict";n("03b6")},c6f4:function(t,e,n){},d382:function(t,e,n){"use strict";n("529f")},dd27:function(t,e,n){},de4e:function(t,e,n){"use strict";n("0760")},e041:function(t,e,n){},e3e6:function(t){t.exports=JSON.parse('{"en":{"welcomeTitle":"Welcome to","muteTitle":"Mute","unMuteTitle":"Unmute","inputTitle":"Type your question and press enter","sendTitle":"Send","microphoneTitle":"Voice Input","recognitionUnavailable":"Speech recognition is not available"},"ru":{"welcomeTitle":"Добро пожаловать в","muteTitle":"Звук","unMuteTitle":"Без звука","inputTitle":"Введите ваше сообщение","sendTitle":"Отправить","microphoneTitle":"Голосовой ввод"},"de":{"welcomeTitle":"Wilkommen bei","muteTitle":"Stumm","unMuteTitle":"Nicht stumm","inputTitle":"Schreiben Sie ihre Nachricht","sendTitle":"Senden","microphoneTitle":"Spracheingabe"},"fr":{"welcomeTitle":"Bienvenue à","muteTitle":"Son","unMuteTitle":"Silent","inputTitle":"Entrez votre message","sendTitle":"Envoyer","microphoneTitle":"Entrée vocale"}}')},e534:function(t,e,n){"use strict";n("7efd")},ed39:function(t,e,n){"use strict";n("26dd")},f446:function(t,e,n){"use strict";n("b1de")},fb64:function(t,e,n){}});