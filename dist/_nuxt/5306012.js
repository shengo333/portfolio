(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,n,e){"use strict";var r=e(5),o=e(24),c=e(25),h=e(131),l=e(68),f=e(9),d=e(51).f,m=e(52).f,v=e(11).f,w=e(198).trim,A="Number",C=r.Number,x=C,F=C.prototype,N=c(e(89)(F))==A,y="trim"in String.prototype,I=function(t){var n=l(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,c=(n=y?n.trim():w(n,3)).charCodeAt(0);if(43===c||45===c){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===c){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var code,h=n.slice(2),i=0,f=h.length;i<f;i++)if((code=h.charCodeAt(i))<48||code>o)return NaN;return parseInt(h,r)}}return+n};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof C&&(N?f((function(){F.valueOf.call(e)})):c(e)!=A)?h(new x(I(n)),e,C):I(n)};for(var S,E=e(7)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;E.length>R;R++)o(x,S=E[R])&&!o(C,S)&&v(C,S,m(x,S));C.prototype=F,F.constructor=C,e(14)(r,A,C)}},198:function(t,n,e){var r=e(3),o=e(32),c=e(9),h=e(199),l="["+h+"]",f=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),m=function(t,n,e){var o={},l=c((function(){return!!h[t]()||"​"!="​"[t]()})),f=o[t]=l?n(v):h[t];e&&(o[e]=f),r(r.P+r.F*l,"String",o)},v=m.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(d,"")),t};t.exports=m},199:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},228:function(t,n,e){"use strict";e.r(n);e(197);var r={name:"vue-matrix-raindrop",props:{canvasWidth:{type:Number,default:800},canvasHeight:{type:Number,default:600},fontSize:{type:Number,default:20},fontFamily:{type:String,default:"arial"},textContent:{type:String,default:"abcdefghijklmnopqrstuvwxyz"},textColor:{type:String,default:"#0F0",validator:function(t){return/^#([0-9a-fA-F]{6})|([0-9a-fA-F]{3})$/g.test(t)}},backgroundColor:{type:String,default:"rgba(0,0,0,0.1)",validator:function(t){return/^[rR][gG][Bb][Aa][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0\.\d{1,2}|1|0)?[\)]{1}$/.test(t)}},speed:{type:Number,default:2,validator:function(t){return t%1==0}}},mounted:function(){this.initRAF(),this.initCanvas(),this.initRainDrop(),this.animationUpdate()},methods:{initRAF:function(){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}},initCanvas:function(){this.canvas=document.getElementById("vue-matrix-raindrop"),"canvas"!==this.canvas.tagName.toLowerCase()&&console.error("Error! Invalid canvas! Please check the canvas's id!"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvasCtx=this.canvas.getContext("2d"),this.canvasCtx.font=this.fontSize+"px "+this.fontFamily,this.columns=this.canvas.width/this.fontSize},initRainDrop:function(){for(var i=0;i<this.columns;i++)this.rainDropPositionArray.push(0)},animationUpdate:function(){if(this.speedCnt++,this.speedCnt===this.speed){this.speedCnt=0,this.canvasCtx.fillStyle=this.backgroundColor,this.canvasCtx.fillRect(0,0,this.canvas.width,this.canvas.height),this.canvasCtx.fillStyle=this.textColor;for(var i=0,t=this.rainDropPositionArray.length;i<t;i++){this.rainDropPositionArray[i]++;var n=Math.floor(Math.random()*this.textContent.length),e=this.textContent[n],r=this.rainDropPositionArray[i]*this.fontSize;this.canvasCtx.fillText(e,i*this.fontSize,r),r>this.canvasHeight&&Math.random()>.9&&(this.rainDropPositionArray[i]=0)}}window.requestAnimationFrame(this.animationUpdate)}},data:function(){return{canvasCtx:null,canvas:null,columns:0,rainDropPositionArray:[],speedCnt:0}}},o=e(31),c={name:"App",components:{VueMatrixRaindrop:Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"vue-matrix-raindrop"}})}),[],!1,null,"b47e84ac",null).exports}},h=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("VueMatrixRaindrop")],1)}),[],!1,null,null,null);n.default=h.exports}}]);