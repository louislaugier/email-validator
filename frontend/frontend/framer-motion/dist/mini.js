!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Motion={},t.React)}(this,(function(t,e){"use strict";function i(t){const i=e.useRef(null);return null===i.current&&(i.current=t()),i.current}function n(t){let e;return()=>(void 0===e&&(e=t()),e)}const a=n(()=>void 0!==window.ScrollTimeline);class r{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=e}attachTimeline(t,e){const i=this.animations.map(i=>a()&&i.attachTimeline?i.attachTimeline(t):e(i));return()=>{i.forEach((t,e)=>{t&&t(),this.animations[e].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const s=t=>t;let o=s;const l=t=>1e3*t,u=t=>t/1e3;const h=(t,e,i)=>{const n=e-t;return 0===n?1:(i-t)/n},c={linearEasing:void 0};function m(t,e){const i=n(t);return()=>{var t;return null!==(t=c[e])&&void 0!==t?t:i()}}const d=m(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),p=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,f={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:p([0,.65,.55,1]),circOut:p([.55,0,1,.45]),backIn:p([.31,.01,.66,-.59]),backOut:p([.33,1.53,.69,.99])};function y(t,e){return t?"function"==typeof t&&d()?((t,e)=>{let i="";const n=Math.max(Math.round(e/10),2);for(let e=0;e<n;e++)i+=t(h(0,n-1,e))+", ";return`linear(${i.substring(0,i.length-2)})`})(t,e):(t=>Array.isArray(t)&&"number"==typeof t[0])(t)?p(t):Array.isArray(t)?t.map(t=>y(t,e)||f.easeOut):f[t]:void 0}const g=(t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}))("px"),A={borderWidth:g,borderTopWidth:g,borderRightWidth:g,borderBottomWidth:g,borderLeftWidth:g,borderRadius:g,radius:g,borderTopLeftRadius:g,borderTopRightRadius:g,borderBottomRightRadius:g,borderBottomLeftRadius:g,width:g,maxWidth:g,height:g,maxHeight:g,top:g,right:g,bottom:g,left:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,backgroundPositionX:g,backgroundPositionY:g};function b(t,e){t.timeline=e,t.onfinish=null}const v=t=>null!==t;function T(t,e,i){t.style.setProperty("--"+e,i)}function P(t,e,i){t.style[e]=i}const R=n(()=>{try{document.createElement("div").animate({opacity:[1]})}catch(t){return!1}return!0}),w=n(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),x=new WeakMap;function k(t){const e=x.get(t)||new Map;return x.set(t,e),x.get(t)}class E{constructor(t,e,i,n){const a=e.startsWith("--");this.setValue=a?T:P,this.options=n,this.updateFinishedPromise(),o("string"!=typeof n.type);const r=k(t).get(e);r&&r.stop();if(Array.isArray(i)||(i=[i]),function(t,e,i){for(let n=0;n<e.length;n++)null===e[n]&&(e[n]=0===n?i():e[n-1]),"number"==typeof e[n]&&A[t]&&(e[n]=A[t].transform(e[n]));!R()&&e.length<2&&e.unshift(i())}(e,i,()=>e.startsWith("--")?t.style.getPropertyValue(e):window.getComputedStyle(t)[e]),"function"==typeof n.type){const t=function(t,e=100,i){const n=i({...t,keyframes:[0,e]}),a=Math.min(function(t){let e=0,i=t.next(e);for(;!i.done&&e<2e4;)e+=50,i=t.next(e);return e>=2e4?1/0:e}(n),2e4);return{type:"keyframes",ease:t=>n.next(a*t).value/e,duration:u(a)}}(n,100,n.type);n.ease=d()?t.ease:"easeOut",n.duration=l(t.duration),n.type="keyframes"}else n.ease=n.ease||"easeOut";this.removeAnimation=()=>{var i;return null===(i=x.get(t))||void 0===i?void 0:i.delete(e)};const s=()=>{this.setValue(t,e,function(t,{repeat:e,repeatType:i="loop"},n){const a=t.filter(v),r=e&&"loop"!==i&&e%2==1?0:a.length-1;return r&&void 0!==n?n:a[r]}(i,this.options)),this.cancel(),this.resolveFinishedPromise()};w()?(this.animation=function(t,e,i,{delay:n=0,duration:a=300,repeat:r=0,repeatType:s="loop",ease:o,times:l}={}){const u={[e]:i};l&&(u.offset=l);const h=y(o,a);return Array.isArray(h)&&(u.easing=h),t.animate(u,{delay:n,duration:a,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:"reverse"===s?"alternate":"normal"})}(t,e,i,n),!1===n.autoplay&&this.animation.pause(),this.animation.onfinish=s,this.pendingTimeline&&b(this.animation,this.pendingTimeline),k(t).set(e,this)):s()}get duration(){return u(this.options.duration||300)}get time(){var t;return this.animation?u((null===(t=this.animation)||void 0===t?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=l(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}play(){"finished"===this.state&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){this.animation&&"idle"!==this.state&&"finished"!==this.state&&(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch(t){}}then(t,e){return this.currentFinishedPromise.then(t,e)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}attachTimeline(t){return this.animation?b(this.animation,t):this.pendingTimeline=t,s}}function W(t,e,i,n){const a=function(t,e,i){var n;if("string"==typeof t){let a=document;e&&(o(Boolean(e.current)),a=e.current),i?(null!==(n=i[t])&&void 0!==n||(i[t]=a.querySelectorAll(t)),t=i[t]):t=a.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}(t,n),r=a.length,s=[];for(let t=0;t<r;t++){const n=a[t],o={...i};"function"==typeof o.delay&&(o.delay=o.delay(t,r));for(const t in e){const a=e[t],r={...(u=i,h=t,u[h]||u.default||u)};r.duration=r.duration?l(r.duration):r.duration,r.delay=l(r.delay||0),s.push(new E(n,t,a,r))}}var u,h;return s}t.useAnimate=function(){const t=i(()=>({current:null,animations:[]})),n=i(()=>(t=>function(e,i,n){return new r(W(e,i,n,t))})(t));var a;return a=()=>{t.animations.forEach(t=>t.stop())},e.useEffect(()=>()=>a(),[]),[t,n]}}));
