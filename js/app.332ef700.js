(function(){var n={1921:function(n,t,e){"use strict";var i=e(9242),o=e(3396);const a={class:"main-container"};function r(n,t,e,i,r,s){const l=(0,o.up)("Magic8Ball");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(l)])}var s=e(7139);const l={class:"magic-8-ball"},u=(0,o._)("h1",null,[(0,o.Uk)("MAGIC "),(0,o._)("span",null,"8"),(0,o.Uk)(" BALL")],-1),c={class:"ball-image-container"},g=["src"],p={class:"ball-text"},f=["disabled"];function d(n,t,a,r,d,b){return(0,o.wg)(),(0,o.iD)("div",l,[u,(0,o._)("div",c,[(0,o._)("img",{class:"ball-image",src:e(7173)("./"+d.image)},null,8,g),(0,o._)("div",p,(0,s.zw)(d.response),1)]),(0,o._)("input",{id:"question-box",placeholder:"Type your question here...",type:"text",onKeyup:t[0]||(t[0]=(0,i.D2)(((...n)=>b.start&&b.start(...n)),["enter"]))},null,32),(0,o._)("button",{class:"start-button",onClick:t[1]||(t[1]=(...n)=>b.start&&b.start(...n)),disabled:d.isShaking},(0,s.zw)(d.buttonText),9,f)])}const b=["It is certain","It is decidedly so","Without a doubt","Yes definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"],m=()=>{const n=Math.floor(Math.random()*b.length);return b[n]};var h=m,v={name:"Magic8Ball",data(){return{image:"magic-8-ball.png",response:"",buttonText:"Shake 8 Ball",isShaking:!1}},methods:{start(){this.response="",this.isShaking=!0,document.getElementById("question-box").disabled=!0,this.shake8ball(),setTimeout((()=>{this.image="magic-8-ball-answer.png",this.isShaking=!1,document.getElementById("question-box").disabled=!1,this.response=h(),this.buttonText="Shake again!"}),3e3)},shake8ball(){this.image="magic-8-ball-up.png",setTimeout((()=>{this.image="magic-8-ball-down.png"}),1e3),setTimeout((()=>{this.image="magic-8-ball-up.png"}),2e3)}}},y=e(89);const k=(0,y.Z)(v,[["render",d]]);var w=k,x={name:"App",components:{Magic8Ball:w}};const O=(0,y.Z)(x,[["render",r]]);var _=O;(0,i.ri)(_).mount("#app")},7173:function(n,t,e){var i={"./bg.png":5878,"./magic-8-ball-answer.png":9307,"./magic-8-ball-down.png":6564,"./magic-8-ball-up.png":5879,"./magic-8-ball.png":5621};function o(n){var t=a(n);return e(t)}function a(n){if(!e.o(i,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return i[n]}o.keys=function(){return Object.keys(i)},o.resolve=a,n.exports=o,o.id=7173},5878:function(n,t,e){"use strict";n.exports=e.p+"img/bg.7893dfc6.png"},9307:function(n,t,e){"use strict";n.exports=e.p+"img/magic-8-ball-answer.b1fd5495.png"},6564:function(n,t,e){"use strict";n.exports=e.p+"img/magic-8-ball-down.f6fd7992.png"},5879:function(n,t,e){"use strict";n.exports=e.p+"img/magic-8-ball-up.d489e312.png"},5621:function(n,t,e){"use strict";n.exports=e.p+"img/magic-8-ball.303713c8.png"}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return n[i](a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,i,o,a){if(!i){var r=1/0;for(c=0;c<n.length;c++){i=n[c][0],o=n[c][1],a=n[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(e.O).every((function(n){return e.O[n](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){n.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[i,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/magic-8-ball-web/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,i){var o,a,r=i[0],s=i[1],l=i[2],u=0;if(r.some((function(t){return 0!==n[t]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(l)var c=l(e)}for(t&&t(i);u<r.length;u++)a=r[u],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(c)},i=self["webpackChunkmagic_8_ball"]=self["webpackChunkmagic_8_ball"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(1921)}));i=e.O(i)})();
//# sourceMappingURL=app.332ef700.js.map