!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Motion={})}(this,(function(t){"use strict";function e(t){let e;return()=>(void 0===e&&(e=t()),e)}const i=e(()=>void 0!==window.ScrollTimeline);class n{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=e}attachTimeline(t,e){const n=this.animations.map(n=>i()&&n.attachTimeline?n.attachTimeline(t):e(n));return()=>{n.forEach((t,e)=>{t&&t(),this.animations[e].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const a=t=>t;let s=a;const o=t=>1e3*t,r=t=>t/1e3;const l=(t,e,i)=>{const n=e-t;return 0===n?1:(i-t)/n},h={linearEasing:void 0};function u(t,i){const n=e(t);return()=>{var t;return null!==(t=h[i])&&void 0!==t?t:n()}}const m=u(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),c=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:c([0,.65,.55,1]),circOut:c([.55,0,1,.45]),backIn:c([.31,.01,.66,-.59]),backOut:c([.33,1.53,.69,.99])};function p(t,e){return t?"function"==typeof t&&m()?((t,e)=>{let i="";const n=Math.max(Math.round(e/10),2);for(let e=0;e<n;e++)i+=t(l(0,n-1,e))+", ";return`linear(${i.substring(0,i.length-2)})`})(t,e):(t=>Array.isArray(t)&&"number"==typeof t[0])(t)?c(t):Array.isArray(t)?t.map(t=>p(t,e)||d.easeOut):d[t]:void 0}const f=(t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}))("px"),y={borderWidth:f,borderTopWidth:f,borderRightWidth:f,borderBottomWidth:f,borderLeftWidth:f,borderRadius:f,radius:f,borderTopLeftRadius:f,borderTopRightRadius:f,borderBottomRightRadius:f,borderBottomLeftRadius:f,width:f,maxWidth:f,height:f,maxHeight:f,top:f,right:f,bottom:f,left:f,padding:f,paddingTop:f,paddingRight:f,paddingBottom:f,paddingLeft:f,margin:f,marginTop:f,marginRight:f,marginBottom:f,marginLeft:f,backgroundPositionX:f,backgroundPositionY:f};function g(t,e){t.timeline=e,t.onfinish=null}const A=t=>null!==t;function b(t,e,i){t.style.setProperty("--"+e,i)}function v(t,e,i){t.style[e]=i}const T=e(()=>{try{document.createElement("div").animate({opacity:[1]})}catch(t){return!1}return!0}),P=e(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),R=new WeakMap;function w(t){const e=R.get(t)||new Map;return R.set(t,e),R.get(t)}class x{constructor(t,e,i,n){const a=e.startsWith("--");this.setValue=a?b:v,this.options=n,this.updateFinishedPromise(),s("string"!=typeof n.type);const l=w(t).get(e);l&&l.stop();if(Array.isArray(i)||(i=[i]),function(t,e,i){for(let n=0;n<e.length;n++)null===e[n]&&(e[n]=0===n?i():e[n-1]),"number"==typeof e[n]&&y[t]&&(e[n]=y[t].transform(e[n]));!T()&&e.length<2&&e.unshift(i())}(e,i,()=>e.startsWith("--")?t.style.getPropertyValue(e):window.getComputedStyle(t)[e]),"function"==typeof n.type){const t=function(t,e=100,i){const n=i({...t,keyframes:[0,e]}),a=Math.min(function(t){let e=0,i=t.next(e);for(;!i.done&&e<2e4;)e+=50,i=t.next(e);return e>=2e4?1/0:e}(n),2e4);return{type:"keyframes",ease:t=>n.next(a*t).value/e,duration:r(a)}}(n,100,n.type);n.ease=m()?t.ease:"easeOut",n.duration=o(t.duration),n.type="keyframes"}else n.ease=n.ease||"easeOut";this.removeAnimation=()=>{var i;return null===(i=R.get(t))||void 0===i?void 0:i.delete(e)};const h=()=>{this.setValue(t,e,function(t,{repeat:e,repeatType:i="loop"},n){const a=t.filter(A),s=e&&"loop"!==i&&e%2==1?0:a.length-1;return s&&void 0!==n?n:a[s]}(i,this.options)),this.cancel(),this.resolveFinishedPromise()};P()?(this.animation=function(t,e,i,{delay:n=0,duration:a=300,repeat:s=0,repeatType:o="loop",ease:r,times:l}={}){const h={[e]:i};l&&(h.offset=l);const u=p(r,a);return Array.isArray(u)&&(h.easing=u),t.animate(h,{delay:n,duration:a,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:"reverse"===o?"alternate":"normal"})}(t,e,i,n),!1===n.autoplay&&this.animation.pause(),this.animation.onfinish=h,this.pendingTimeline&&g(this.animation,this.pendingTimeline),w(t).set(e,this)):h()}get duration(){return r(this.options.duration||300)}get time(){var t;return this.animation?r((null===(t=this.animation)||void 0===t?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=o(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}play(){"finished"===this.state&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){this.animation&&"idle"!==this.state&&"finished"!==this.state&&(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch(t){}}then(t,e){return this.currentFinishedPromise.then(t,e)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}attachTimeline(t){return this.animation?g(this.animation,t):this.pendingTimeline=t,a}}function k(t,e,i,n){const a=function(t,e,i){var n;if("string"==typeof t){let a=document;e&&(s(Boolean(e.current)),a=e.current),i?(null!==(n=i[t])&&void 0!==n||(i[t]=a.querySelectorAll(t)),t=i[t]):t=a.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}(t,n),r=a.length,l=[];for(let t=0;t<r;t++){const n=a[t],s={...i};"function"==typeof s.delay&&(s.delay=s.delay(t,r));for(const t in e){const a=e[t],s={...(h=i,u=t,h[u]||h.default||h)};s.duration=s.duration?o(s.duration):s.duration,s.delay=o(s.delay||0),l.push(new x(n,t,a,s))}}var h,u;return l}const W=(t=>function(e,i,a){return new n(k(e,i,a,t))})();t.animate=W}));
