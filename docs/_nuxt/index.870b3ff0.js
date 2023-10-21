import{C as V,j as $,m as x,f as D,D as A,g as i,o as m,B as E,w as t,b as e,d as u,P as c,i as R,n as S,c as v,A as w,a as h,h as y,k as C,_ as b}from"./entry.e8847423.js";import{_ as H}from"./nuxt-link.1db3f8d3.js";import{_ as U}from"./_plugin-vue_export-helper.c27b6911.js";const P="$s";function I(...r){const l=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(l);const[n,o]=r;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const _=P+n,d=x(),s=V(d.payload.state,_);if(s.value===void 0&&o){const a=o();if($(a))return d.payload.state[_]=a,a;s.value=a}return s}const j=D({__name:"Drawer",setup(r){const l=I("drawerOpen",()=>!1);return A(()=>{S().fullPath&&(l.value=!1)}),(n,o)=>{const _=i("UiDrawerTitle"),d=i("UiDrawerHeader"),s=i("UiIcon"),a=i("UiItemFirstContent"),p=i("UiItemTextContent"),f=i("UiNavItem"),g=i("UiItemDivider"),k=i("UiNav"),N=i("UiDrawerContent"),B=i("UiDrawer");return m(),E(B,{modelValue:R(l),"onUpdate:modelValue":o[0]||(o[0]=T=>$(l)?l.value=T:null),type:"modal"},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[u("AjiVocaLearn")]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(k,null,{default:t(()=>[e(f,{href:"#/",active:(n._.provides[c]||n.$route).path==="/"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[u("home")]),_:1})]),_:1}),e(p,null,{default:t(()=>[u("Home")]),_:1})]),_:1},8,["active"]),e(f,{href:"#/test",active:(n._.provides[c]||n.$route).path==="/test"||(n._.provides[c]||n.$route).path==="/test/"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[u("quiz")]),_:1})]),_:1}),e(p,null,{default:t(()=>[u("Test")]),_:1})]),_:1},8,["active"]),e(f,{href:"#/add",active:(n._.provides[c]||n.$route).path==="/add"||(n._.provides[c]||n.$route).path==="/add/"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[u("note_add")]),_:1})]),_:1}),e(p,null,{default:t(()=>[u("Add Word")]),_:1})]),_:1},8,["active"]),e(f,{href:"#/list",active:(n._.provides[c]||n.$route).path==="/list"||(n._.provides[c]||n.$route).path==="/list/"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[u("notes")]),_:1})]),_:1}),e(p,null,{default:t(()=>[u("Words List")]),_:1})]),_:1},8,["active"]),e(g),e(f,{href:"#/settings",active:(n._.provides[c]||n.$route).path==="/settings"||(n._.provides[c]||n.$route).path==="/settings/"},{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[u("settings")]),_:1})]),_:1}),e(p,null,{default:t(()=>[u("Settings")]),_:1})]),_:1},8,["active"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),L=h("div",null,"AjiVocaLearn",-1),M=D({__name:"Header",setup(r){const l=I("drawerOpen",()=>!1);return(n,o)=>{const _=i("UiIconButton"),d=H,s=i("UiTopAppBar");return m(),v("div",null,[e(s,{"content-selector":"#main"},{"nav-icon":t(({navIconClass:a})=>[e(_,{id:"drawer-opener",class:w(a),icon:"menu",onClick:o[0]||(o[0]=p=>l.value=!0)},null,8,["class"])]),toolbar:t(({toolbarItemClass:a})=>[e(d,{to:"/settings"},{default:t(()=>[e(_,{class:w(a),icon:"settings"},null,8,["class"])]),_:2},1024)]),default:t(()=>[L]),_:1})])}}});function O(r,l){const n=b,o=y("auto-animate");return C((m(),v("div",null,[e(n,{class:"p-4 max-w-screen-md mx-auto"})])),[[o]])}const F={},z=U(F,[["render",O]]),K={class:"text-end m-2"},W=h("hr",null,null,-1),q=h("div",{class:"m-2"},"@2023 ajiken4610",-1),G=[W,q];function J(r,l){return m(),v("div",K,G)}const Q={},X=U(Q,[["render",J]]);function Y(r,l){const n=j,o=M,_=z,d=X,s=y("auto-animate");return m(),v("div",null,[e(n),e(o,{ref:"headerElementRef"},null,512),C(e(_,{id:"main"},null,512),[[s]]),e(d,{ref:"footerElementRef"},null,512)])}const Z={},oe=U(Z,[["render",Y]]);export{oe as default};