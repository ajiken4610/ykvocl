import{f as k,n as B,q as C,s as b,g as l,h as N,o as d,c as r,a as c,b as o,w as a,d as t,i as s,k as g,l as y,m as I,v as q}from"./entry.61166ef0.js";const D={class:"text-4xl text-center"},R={class:"text-right"},T={key:0,class:"font-bold !text-red-600"},A=c("span",{class:"align-top"},"Both properties are Required.",-1),E={class:"flex flex-row-reverse mt-1"},K=k({__name:"edit",setup(S){var p;const{$service:x}=I(),{wordsWithScore:u}=x.edit,m=parseInt(((p=B().query.i)==null?void 0:p.toString())||"-1"),e=C(u.value[m].slice()),V=()=>e[0]&&e[1],_=b(()=>!V()),h=()=>{u.value[m]=e,q().back()};return(W,n)=>{const f=l("UiIcon"),v=l("UiTextfield"),w=l("UiButton"),U=N("auto-animate");return d(),r("div",null,[c("div",D,[o(f,{class:"mx-2"},{default:a(()=>[t("edit")]),_:1}),t("Edit Word")]),o(v,{class:"w-full mt-4",modelValue:s(e)[0],"onUpdate:modelValue":n[0]||(n[0]=i=>s(e)[0]=i)},{default:a(()=>[t("Key")]),_:1},8,["modelValue"]),o(v,{class:"w-full my-2",modelValue:s(e)[1],"onUpdate:modelValue":n[1]||(n[1]=i=>s(e)[1]=i)},{default:a(()=>[t("Value")]),_:1},8,["modelValue"]),g((d(),r("div",R,[s(_)?(d(),r("div",T,[o(f,null,{default:a(()=>[t("error")]),_:1}),A])):y("",!0),c("div",E,[o(w,{class:"!min-w-[5rem]",raised:"",disabled:s(_),onClick:h},{default:a(()=>[t("Confirm")]),_:1},8,["disabled"])])])),[[U]])])}}});export{K as default};