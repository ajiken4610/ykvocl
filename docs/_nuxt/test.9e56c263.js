import{f as J,n as G,o as v,c as h,F as T,q as H,s as Q,t as D,i as c,r as A,g as O,h as X,k as R,a as y,v as Y,w as k,d as V,j as K,l as U,b as z,m as j}from"./entry.44d2d87b.js";import{_ as P}from"./nuxt-link.8e9074e0.js";function x(){}x.prototype={diff:function(e,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=s.callback;typeof s=="function"&&(r=s,s={}),this.options=s;var o=this;function i(a){return r?(setTimeout(function(){r(void 0,a)},0),!0):a}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var u=n.length,l=e.length,f=1,m=u+l;s.maxEditLength&&(m=Math.min(m,s.maxEditLength));var d=[{newPos:-1,components:[]}],_=this.extractCommon(d[0],n,e,0);if(d[0].newPos+1>=u&&_+1>=l)return i([{value:this.join(n),count:n.length}]);function w(){for(var a=-1*f;a<=f;a+=2){var p=void 0,C=d[a-1],L=d[a+1],N=(L?L.newPos:0)-a;C&&(d[a-1]=void 0);var B=C&&C.newPos+1<u,F=L&&0<=N&&N<l;if(!B&&!F){d[a]=void 0;continue}if(!B||F&&C.newPos<L.newPos?(p=ee(L),o.pushComponent(p.components,void 0,!0)):(p=C,p.newPos++,o.pushComponent(p.components,!0,void 0)),N=o.extractCommon(p,n,e,a),p.newPos+1>=u&&N+1>=l)return i(S(o,p.components,n,e,o.useLongestToken));d[a]=p}f++}if(r)(function a(){setTimeout(function(){if(f>m)return r();w()||a()},0)})();else for(;f<=m;){var g=w();if(g)return g}},pushComponent:function(e,n,s){var r=e[e.length-1];r&&r.added===n&&r.removed===s?e[e.length-1]={count:r.count+1,added:n,removed:s}:e.push({count:1,added:n,removed:s})},extractCommon:function(e,n,s,r){for(var o=n.length,i=s.length,u=e.newPos,l=u-r,f=0;u+1<o&&l+1<i&&this.equals(n[u+1],s[l+1]);)u++,l++,f++;return f&&e.components.push({count:f}),e.newPos=u,l},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],s=0;s<e.length;s++)e[s]&&n.push(e[s]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function S(t,e,n,s,r){for(var o=0,i=e.length,u=0,l=0;o<i;o++){var f=e[o];if(f.removed){if(f.value=t.join(s.slice(l,l+f.count)),l+=f.count,o&&e[o-1].added){var d=e[o-1];e[o-1]=e[o],e[o]=d}}else{if(!f.added&&r){var m=n.slice(u,u+f.count);m=m.map(function(w,g){var a=s[l+g];return a.length>w.length?a:w}),f.value=t.join(m)}else f.value=t.join(n.slice(u,u+f.count));u+=f.count,f.added||(l+=f.count)}}var _=e[i-1];return i>1&&typeof _.value=="string"&&(_.added||_.removed)&&t.equals("",_.value)&&(e[i-2].value+=_.value,e.pop()),e}function ee(t){return{newPos:t.newPos,components:t.components.slice(0)}}var te=new x;function ne(t,e,n){return te.diff(t,e,n)}var W=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,M=/\S/,b=new x;b.equals=function(t,e){return this.options.ignoreCase&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e||this.options.ignoreWhitespace&&!M.test(t)&&!M.test(e)};b.tokenize=function(t){for(var e=t.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&W.test(e[n])&&W.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var Z=new x;Z.tokenize=function(t){var e=[],n=t.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var s=0;s<n.length;s++){var r=n[s];s%2&&!this.options.newlineIsToken?e[e.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),e.push(r))}return e};var oe=new x;oe.tokenize=function(t){return t.split(/(\S.+?[.!?])(?=\s+|$)/)};var se=new x;se.tokenize=function(t){return t.split(/([{}:;,]|\s+)/)};function q(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?q=function(e){return typeof e}:q=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(t)}var re=Object.prototype.toString,E=new x;E.useLongestToken=!0;E.tokenize=Z.tokenize;E.castInput=function(t){var e=this.options,n=e.undefinedReplacement,s=e.stringifyReplacer,r=s===void 0?function(o,i){return typeof i>"u"?n:i}:s;return typeof t=="string"?t:JSON.stringify($(t,null,null,r),r,"  ")};E.equals=function(t,e){return x.prototype.equals.call(E,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function $(t,e,n,s,r){e=e||[],n=n||[],s&&(t=s(r,t));var o;for(o=0;o<e.length;o+=1)if(e[o]===t)return n[o];var i;if(re.call(t)==="[object Array]"){for(e.push(t),i=new Array(t.length),n.push(i),o=0;o<t.length;o+=1)i[o]=$(t[o],e,n,s,r);return e.pop(),n.pop(),i}if(t&&t.toJSON&&(t=t.toJSON()),q(t)==="object"&&t!==null){e.push(t),i={},n.push(i);var u=[],l;for(l in t)t.hasOwnProperty(l)&&u.push(l);for(u.sort(),o=0;o<u.length;o+=1)l=u[o],i[l]=$(t[l],e,n,s,l);e.pop(),n.pop()}else i=t;return i}var I=new x;I.tokenize=function(t){return t.slice()};I.join=I.removeEmpty=function(t){return t};const ie=J({__name:"Diff",props:{src:{default:""},dst:{default:""}},setup(t){const e=t,n=G(()=>ne(e.src,e.dst));return(s,r)=>(v(),h("div",null,[(v(!0),h(T,null,H(c(n),(o,i)=>(v(),h("span",{class:Q(["inline-block rounded mx-[.125rem]",{"bg-green-500":o.added,"bg-red-500 line-through":o.removed}]),key:i},D(o.value),3))),128))]))}}),ue=t=>t.replaceAll(/\b.+?\b/g,e=>e.length!==2?e.charAt(0)+"*".repeat(e.length-1):"*".repeat(e.length)),le={key:0},fe={class:"text-4xl text-center"},ae={class:"text-center"},ce={class:"block ml-auto w-fit"},de={key:1,class:"text-center"},pe={key:0,class:"font-bold !text-green-500"},ve=y("div",{class:"font-bold !text-red-500"},"Incorrect!",-1),me={class:"block mx-auto w-fit"},he={class:"flex flex-row-reverse"},_e={key:0,class:"font-bold mt-4 !text-red-600"},we={key:1,class:"text-center"},xe=y("div",{class:"text-4xl"},"No words in word list.",-1),ge=J({__name:"test",setup(t){const{$service:e}=j(),n=e.test,{problem:s,updateScore:r}=n,o=A(""),i=A(!1),u=A(void 0),l=()=>{o.value&&s.value?(i.value=!1,u.value=o.value===s.value[1]):i.value=!0},f=()=>{o.value&&s.value&&(r(o.value===s.value[1]),u.value=void 0,o.value="")};return(m,d)=>{const _=O("UiTextfield"),w=O("UiButton"),g=ie,a=P,p=X("auto-animate");return c(s)?R((v(),h("div",le,[y("div",fe,D(c(s)[0]),1),c(u)===void 0?(v(),h(T,{key:0},[y("div",ae,D(("getMaskedString"in m?m.getMaskedString:c(ue))(c(s)[1])),1),c(u)===void 0?(v(),Y(_,{key:0,class:"w-full mt-4",modelValue:c(o),"onUpdate:modelValue":d[0]||(d[0]=C=>K(o)?o.value=C:null),onEnter:l},{default:k(()=>[V("Value")]),_:1},8,["modelValue"])):U("",!0),y("div",ce,[z(w,{class:"mt-4",raised:"",onClick:l},{default:k(()=>[V("Confirm")]),_:1})])],64)):(v(),h("div",de,[y("div",null,"Answer: "+D(c(s)[1]),1),c(o)===c(s)[1]?(v(),h("div",pe,"Correct!")):(v(),h(T,{key:1},[y("div",null,"Answered: "+D(c(o)),1),ve,z(g,{src:c(o),dst:c(s)[1]},null,8,["src","dst"])],64)),y("div",me,[z(w,{class:"mt-4",raised:"",onClick:f},{default:k(()=>[V("Next")]),_:1})])])),R((v(),h("div",he,[c(i)?(v(),h("div",_e,"Value is Required.")):U("",!0)])),[[p]])])),[[p]]):(v(),h("div",we,[xe,z(a,{class:"mt-4 block w-fit mx-auto",to:"/add"},{default:k(()=>[z(w,{raised:""},{default:k(()=>[V("Add Word")]),_:1})]),_:1})]))}}});export{ge as default};
