"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("css-to-react-native"),t=require("postcss"),n=require("tslib"),r=require("react");require("shallowequal");var o=require("stylis"),s=require("@emotion/unitless");function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var c=/*#__PURE__*/i(e),u=/*#__PURE__*/i(r),l=/*#__PURE__*/a(o),p=/*#__PURE__*/i(s),h=Object.freeze([]),f=Object.freeze({}),d="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,s=e.length;o<s;o+=1)r.push(e[o]);return r.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function v(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return"production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(y.apply(void 0,n.__spreadArray([d[e]],t,!1)).trim())}function m(e,t){Object.defineProperty(e,"toString",{value:t})}var g="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",S="active",_="data-styled-version",w="6.1.13",b="/*!sc*/\n",E="undefined"!=typeof window&&"HTMLElement"in window,A=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),P=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw v(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(b);return t},e}(),C=1<<30,N=new Map,T=new Map,O=1,x=function(e){if(N.has(e))return N.get(e);for(;T.has(O);)O++;var t=O++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>C))throw v(16,"".concat(t));return N.set(e,t),T.set(t,e),t},D=function(e,t){O=t+1,N.set(e,t),T.set(t,e)},j="style[".concat(g,"][").concat(_,'="').concat(w,'"]'),R=new RegExp("^".concat(g,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},z=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(b),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim();if(a){var c=a.match(R);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(D(l,u),I(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},B=function(e){for(var t=document.querySelectorAll(j),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(g)!==S&&(z(e,o),o.parentNode&&o.parentNode.removeChild(o))}},L=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(g,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(g,S),r.setAttribute(_,w);var i="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},k=function(){function e(e){this.element=L(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw v(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),M=function(){function e(e){this.element=L(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),V=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$=E,q={isServer:!E,useCSSOMInjection:!A},F=function(){function e(e,t,r){void 0===e&&(e=f),void 0===t&&(t={});var o=this;this.options=n.__assign(n.__assign({},q),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&E&&$&&($=!1,B(this)),m(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return T.get(e)}(n);if(void 0===o)return"continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return"continue";var a="".concat(g,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(b)},s=0;s<n;s++)o(s);return r}(o)})}return e.registerId=function(e){return x(e)},e.prototype.rehydrate=function(){!this.server&&E&&B(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n.__assign(n.__assign({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new V(n):t?new k(n):new M(n)}(this.options),new P(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(x(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(x(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(x(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Y=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},G=/&/g,W=/^\s*\/\/.*$/gm;function H(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=H(e.children,t)),e})}var U=new F,K=function(e){var t,n,r,o=f.options,s=void 0===o?f:o,i=f.plugins,a=void 0===i?h:i,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=a.slice();u.push(function(e){e.type===l.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(G,n).replace(r,c))}),s.prefix&&u.push(l.prefixer),u.push(l.stringify);var p=function(e,o,i,a){void 0===o&&(o=""),void 0===i&&(i=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(W,""),p=l.compile(i||o?"".concat(i," ").concat(o," { ").concat(c," }"):c);s.namespace&&(p=H(p,s.namespace));var h=[];return l.serialize(p,l.middleware(u.concat(l.rulesheet(function(e){return h.push(e)})))),h};return p.hash=a.length?a.reduce(function(e,t){return t.name||v(15),Y(e,t.name)},5381).toString():"",p}(),Z=(u.default.createContext({shouldForwardProp:void 0,styleSheet:U,stylis:K}),u.default.createContext(void 0),function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=K);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,m(this,function(){throw v(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=K),this.name+e.hash},e}());function J(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}var Q=function(e){return e>="A"&&e<="Z"};function X(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Q(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}function ee(e){return"function"==typeof e}function te(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ne(e){return"object"==typeof e&&"styledComponentId"in e}var re=function(e){return null==e||!1===e||""===e},oe=function(e){var t,r,o=[];for(var s in e){var i=e[s];e.hasOwnProperty(s)&&!re(i)&&(Array.isArray(i)&&i.isCss||ee(i)?o.push("".concat(X(s),":"),i,";"):te(i)?o.push.apply(o,n.__spreadArray(n.__spreadArray(["".concat(s," {")],oe(i),!1),["}"],!1)):o.push("".concat(X(s),": ").concat((t=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in p.default||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function se(e,t,n,r){if(re(e))return[];if(ne(e))return[".".concat(e.styledComponentId)];if(ee(e)){if(!ee(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return"production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof Z||te(o)||null===o||console.error("".concat(J(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),se(o,t,n,r)}var s;return e instanceof Z?n?(e.inject(n,r),[e.getName(r)]):[e]:te(e)?oe(e):Array.isArray(e)?Array.prototype.concat.apply(h,e.map(function(e){return se(e,t,n,r)})):[e.toString()]}function ie(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ae=function(e){return Object.assign(e,{isCss:!0})};function ce(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ee(e)||te(e))return ae(se(ie(h,n.__spreadArray([e],t,!0))));var o=e;return 0===t.length&&1===o.length&&"string"==typeof o[0]?se(o):ae(se(ie(o,t)))}function ue(e,t,r){if(void 0===r&&(r=f),!t)throw v(1,t);var o=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return e(t,r,ce.apply(void 0,n.__spreadArray([o],s,!1)))};return o.attrs=function(o){return ue(e,t,n.__assign(n.__assign({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return ue(e,t,n.__assign(n.__assign({},r),o))},o}var le,pe=u.default.createContext(void 0),he=pe.Consumer;function fe(e,t,n){return void 0===n&&(n=f),e.theme!==n.theme&&e.theme||t||n.theme}var de="function"==typeof Symbol&&Symbol.for,ye=de?Symbol.for("react.memo"):60115,ve=de?Symbol.for("react.forward_ref"):60112,me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ge={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Se={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_e=((le={})[ve]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},le[ye]=Se,le);function we(e){return("type"in(t=e)&&t.type.$$typeof)===ye?Se:"$$typeof"in e?_e[e.$$typeof]:me;var t}var be=Object.defineProperty,Ee=Object.getOwnPropertyNames,Ae=Object.getOwnPropertySymbols,Pe=Object.getOwnPropertyDescriptor,Ce=Object.getPrototypeOf,Ne=Object.prototype;function Te(e,t,n){if("string"!=typeof t){if(Ne){var r=Ce(t);r&&r!==Ne&&Te(e,r,n)}var o=Ee(t);Ae&&(o=o.concat(Ae(t)));for(var s=we(e),i=we(t),a=0;a<o.length;++a){var c=o[a];if(!(c in ge||n&&n[c]||i&&c in i||s&&c in s)){var u=Pe(t,c);try{be(e,c,u)}catch(e){}}}}return e}var Oe=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function De(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}var je={};function Re(e,t,n){if(void 0===n&&(n=!1),!n&&!te(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Re(e[r],t[r]);else if(te(t))for(var r in t)e[r]=Re(e[r],t[r]);return e}var Ie,ze,Be=require("react-native"),Le=(Ie=Be.StyleSheet,ze=function(){function e(e){this.rules=e}return e.prototype.generateStyleObject=function(e){var n=De(se(this.rules,e)),r=function(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xe(t%52)+n;return(xe(t%52)+n).replace(Oe,"$1-$2")}(Y(5381,n)>>>0);if(!je[r]){var o=t.parse(n),s=[];o.each(function(e){"decl"===e.type?s.push([e.prop,e.value]):"production"!==process.env.NODE_ENV&&"comment"!==e.type&&console.warn("Node of type ".concat(e.type," not supported as an inline style"))});var i=c.default(s,["borderWidth","borderColor"]),a=Ie.create({generated:i});je[r]=a.generated}return je[r]},e}(),function(e,t,o){var s=ne(e),i=e,a=t.displayName,c=void 0===a?function(e){return function(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}(e)?"styled.".concat(e):"Styled(".concat(J(e),")")}(e):a,l=t.attrs,p=void 0===l?h:l,d=s&&i.attrs?i.attrs.concat(p).filter(Boolean):p,y=t.shouldForwardProp;if(s&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;y=function(e,t){return v(e,t)&&m(e,t)}}else y=v}var g=function(e,t){return function(e,t,o){var s=e.attrs,i=e.inlineStyle,a=e.defaultProps,c=e.shouldForwardProp,l=e.target,p=u.default.useContext(pe),h=function(e,t,r){void 0===e&&(e=f);var o=n.__assign(n.__assign({},t),{theme:e}),s={};return r.forEach(function(e){var t,n=ee(e)?e(o):e;for(t in n)o[t]=s[t]=n[t]}),[o,s]}(fe(t,p,a)||f,t,s),d=h[1],y=i.generateStyleObject(h[0]),v=o,m=d.as||t.as||l,g=d!==t?n.__assign(n.__assign({},t),d):t,S={};for(var _ in g)"$"!==_[0]&&"as"!==_&&("forwardedAs"===_?S.as=g[_]:c&&!c(_,m)||(S[_]=g[_]));return S.style=r.useMemo(function(){return ee(t.style)?function(e){return[y].concat(t.style(e))}:t.style?[y].concat(t.style):y},[t.style,y]),S.ref=v,r.createElement(m,S)}(S,e,t)};g.displayName=c;var S=u.default.forwardRef(g);return S.attrs=d,S.inlineStyle=new ze(s?i.inlineStyle.rules.concat(o):o),S.displayName=c,S.shouldForwardProp=y,S.styledComponentId=!0,S.target=s?i.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Re(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Te(S,e,{attrs:!0,inlineStyle:!0,displayName:!0,shouldForwardProp:!0,target:!0}),S}),ke=function(e){return ue(Le,e)};["ActivityIndicator","Button","DatePickerIOS","DrawerLayoutAndroid","FlatList","Image","ImageBackground","KeyboardAvoidingView","Modal","Pressable","ProgressBarAndroid","ProgressViewIOS","RefreshControl","SafeAreaView","ScrollView","SectionList","Slider","Switch","Text","TextInput","TouchableHighlight","TouchableOpacity","View","VirtualizedList"].forEach(function(e){return Object.defineProperty(ke,e,{enumerable:!0,configurable:!1,get:function(){if(e in Be&&Be[e])return ke(Be[e]);throw new Error("".concat(e," is not available in the currently-installed version of react-native"))}})}),exports.ThemeConsumer=he,exports.ThemeContext=pe,exports.ThemeProvider=function(e){var t=u.default.useContext(pe),o=r.useMemo(function(){return function(e,t){if(!e)throw v(14);if(ee(e)){var r=e(t);if("production"!==process.env.NODE_ENV&&(null===r||Array.isArray(r)||"object"!=typeof r))throw v(7);return r}if(Array.isArray(e)||"object"!=typeof e)throw v(8);return t?n.__assign(n.__assign({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?u.default.createElement(pe.Provider,{value:o},e.children):null},exports.css=ce,exports.default=ke,exports.isStyledComponent=ne,exports.styled=ke,exports.toStyleSheet=function(e){var n=De(se(e)),r=t.parse(n),o=[];r.each(function(e){"decl"===e.type?o.push([e.prop,e.value]):"production"!==process.env.NODE_ENV&&"comment"!==e.type&&console.warn("Node of type ".concat(e.type," not supported as an inline style"))});var s=c.default(o,["borderWidth","borderColor"]);return Be.StyleSheet.create({style:s}).style},exports.useTheme=function(){var e=r.useContext(pe);if(!e)throw v(18);return e},exports.withTheme=function(e){var t=u.default.forwardRef(function(t,r){var o=fe(t,u.default.useContext(pe),e.defaultProps);return"production"!==process.env.NODE_ENV&&void 0===o&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(J(e),'"')),u.default.createElement(e,n.__assign({},t,{theme:o,ref:r}))});return t.displayName="WithTheme(".concat(J(e),")"),Te(t,e)};
//# sourceMappingURL=styled-components.native.cjs.js.map
