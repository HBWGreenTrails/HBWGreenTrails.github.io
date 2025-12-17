(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function b6(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var o4={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Dd(){if(Gh)return fl;Gh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return fl.Fragment=t,fl.jsx=i,fl.jsxs=i,fl}var Qh;function Md(){return Qh||(Qh=1,o4.exports=Dd()),o4.exports}var w=Md(),l4={exports:{}},Dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Id(){if(Kh)return Dt;Kh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),S=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Q={};function z(L,et,pt){this.props=L,this.context=et,this.refs=Q,this.updater=pt||I}z.prototype.isReactComponent={},z.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=z.prototype;function X(L,et,pt){this.props=L,this.context=et,this.refs=Q,this.updater=pt||I}var J=X.prototype=new F;J.constructor=X,V(J,z.prototype),J.isPureReactComponent=!0;var ct=Array.isArray,st={H:null,A:null,T:null,S:null},mt=Object.prototype.hasOwnProperty;function N(L,et,pt,lt,ut,Rt){return pt=Rt.ref,{$$typeof:r,type:L,key:et,ref:pt!==void 0?pt:null,props:Rt}}function R(L,et){return N(L.type,et,void 0,void 0,void 0,L.props)}function b(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pt){return et[pt]})}var O=/\/+/g;function P(L,et){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):et.toString(36)}function M(){}function Wt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(M,M):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function le(L,et,pt,lt,ut){var Rt=typeof L;(Rt==="undefined"||Rt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(Rt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case r:case t:St=!0;break;case C:return St=L._init,le(St(L._payload),et,pt,lt,ut)}}if(St)return ut=ut(L),St=lt===""?"."+P(L,0):lt,ct(ut)?(pt="",St!=null&&(pt=St.replace(O,"$&/")+"/"),le(ut,et,pt,"",function(oe){return oe})):ut!=null&&(b(ut)&&(ut=R(ut,pt+(ut.key==null||L&&L.key===ut.key?"":(""+ut.key).replace(O,"$&/")+"/")+St)),et.push(ut)),1;St=0;var fe=lt===""?".":lt+":";if(ct(L))for(var Ut=0;Ut<L.length;Ut++)lt=L[Ut],Rt=fe+P(lt,Ut),St+=le(lt,et,pt,Rt,ut);else if(Ut=T(L),typeof Ut=="function")for(L=Ut.call(L),Ut=0;!(lt=L.next()).done;)lt=lt.value,Rt=fe+P(lt,Ut++),St+=le(lt,et,pt,Rt,ut);else if(Rt==="object"){if(typeof L.then=="function")return le(Wt(L),et,pt,lt,ut);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return St}function it(L,et,pt){if(L==null)return L;var lt=[],ut=0;return le(L,lt,"","",function(Rt){return et.call(pt,Rt,ut++)}),lt}function ot(L){if(L._status===-1){var et=L._result;et=et(),et.then(function(pt){(L._status===0||L._status===-1)&&(L._status=1,L._result=pt)},function(pt){(L._status===0||L._status===-1)&&(L._status=2,L._result=pt)}),L._status===-1&&(L._status=0,L._result=et)}if(L._status===1)return L._result.default;throw L._result}var dt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Vt(){}return Dt.Children={map:it,forEach:function(L,et,pt){it(L,function(){et.apply(this,arguments)},pt)},count:function(L){var et=0;return it(L,function(){et++}),et},toArray:function(L){return it(L,function(et){return et})||[]},only:function(L){if(!b(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Dt.Component=z,Dt.Fragment=i,Dt.Profiler=l,Dt.PureComponent=X,Dt.StrictMode=s,Dt.Suspense=m,Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,Dt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Dt.cache=function(L){return function(){return L.apply(null,arguments)}},Dt.cloneElement=function(L,et,pt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var lt=V({},L.props),ut=L.key,Rt=void 0;if(et!=null)for(St in et.ref!==void 0&&(Rt=void 0),et.key!==void 0&&(ut=""+et.key),et)!mt.call(et,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&et.ref===void 0||(lt[St]=et[St]);var St=arguments.length-2;if(St===1)lt.children=pt;else if(1<St){for(var fe=Array(St),Ut=0;Ut<St;Ut++)fe[Ut]=arguments[Ut+2];lt.children=fe}return N(L.type,ut,void 0,void 0,Rt,lt)},Dt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},Dt.createElement=function(L,et,pt){var lt,ut={},Rt=null;if(et!=null)for(lt in et.key!==void 0&&(Rt=""+et.key),et)mt.call(et,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(ut[lt]=et[lt]);var St=arguments.length-2;if(St===1)ut.children=pt;else if(1<St){for(var fe=Array(St),Ut=0;Ut<St;Ut++)fe[Ut]=arguments[Ut+2];ut.children=fe}if(L&&L.defaultProps)for(lt in St=L.defaultProps,St)ut[lt]===void 0&&(ut[lt]=St[lt]);return N(L,Rt,void 0,void 0,null,ut)},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(L){return{$$typeof:p,render:L}},Dt.isValidElement=b,Dt.lazy=function(L){return{$$typeof:C,_payload:{_status:-1,_result:L},_init:ot}},Dt.memo=function(L,et){return{$$typeof:y,type:L,compare:et===void 0?null:et}},Dt.startTransition=function(L){var et=st.T,pt={};st.T=pt;try{var lt=L(),ut=st.S;ut!==null&&ut(pt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Vt,dt)}catch(Rt){dt(Rt)}finally{st.T=et}},Dt.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},Dt.use=function(L){return st.H.use(L)},Dt.useActionState=function(L,et,pt){return st.H.useActionState(L,et,pt)},Dt.useCallback=function(L,et){return st.H.useCallback(L,et)},Dt.useContext=function(L){return st.H.useContext(L)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(L,et){return st.H.useDeferredValue(L,et)},Dt.useEffect=function(L,et){return st.H.useEffect(L,et)},Dt.useId=function(){return st.H.useId()},Dt.useImperativeHandle=function(L,et,pt){return st.H.useImperativeHandle(L,et,pt)},Dt.useInsertionEffect=function(L,et){return st.H.useInsertionEffect(L,et)},Dt.useLayoutEffect=function(L,et){return st.H.useLayoutEffect(L,et)},Dt.useMemo=function(L,et){return st.H.useMemo(L,et)},Dt.useOptimistic=function(L,et){return st.H.useOptimistic(L,et)},Dt.useReducer=function(L,et,pt){return st.H.useReducer(L,et,pt)},Dt.useRef=function(L){return st.H.useRef(L)},Dt.useState=function(L){return st.H.useState(L)},Dt.useSyncExternalStore=function(L,et,pt){return st.H.useSyncExternalStore(L,et,pt)},Dt.useTransition=function(){return st.H.useTransition()},Dt.version="19.0.0",Dt}var Yh;function X4(){return Yh||(Yh=1,l4.exports=Id()),l4.exports}var q=X4();const dn=b6(q);var u4={exports:{}},dl={},c4={exports:{}},h4={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Nd(){return $h||($h=1,function(r){function t(it,ot){var dt=it.length;it.push(ot);t:for(;0<dt;){var Vt=dt-1>>>1,L=it[Vt];if(0<l(L,ot))it[Vt]=ot,it[dt]=L,dt=Vt;else break t}}function i(it){return it.length===0?null:it[0]}function s(it){if(it.length===0)return null;var ot=it[0],dt=it.pop();if(dt!==ot){it[0]=dt;t:for(var Vt=0,L=it.length,et=L>>>1;Vt<et;){var pt=2*(Vt+1)-1,lt=it[pt],ut=pt+1,Rt=it[ut];if(0>l(lt,dt))ut<L&&0>l(Rt,lt)?(it[Vt]=Rt,it[ut]=dt,Vt=ut):(it[Vt]=lt,it[pt]=dt,Vt=pt);else if(ut<L&&0>l(Rt,dt))it[Vt]=Rt,it[ut]=dt,Vt=ut;else break t}}return ot}function l(it,ot){var dt=it.sortIndex-ot.sortIndex;return dt!==0?dt:it.id-ot.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],y=[],C=1,S=null,T=3,I=!1,V=!1,Q=!1,z=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function J(it){for(var ot=i(y);ot!==null;){if(ot.callback===null)s(y);else if(ot.startTime<=it)s(y),ot.sortIndex=ot.expirationTime,t(m,ot);else break;ot=i(y)}}function ct(it){if(Q=!1,J(it),!V)if(i(m)!==null)V=!0,Wt();else{var ot=i(y);ot!==null&&le(ct,ot.startTime-it)}}var st=!1,mt=-1,N=5,R=-1;function b(){return!(r.unstable_now()-R<N)}function D(){if(st){var it=r.unstable_now();R=it;var ot=!0;try{t:{V=!1,Q&&(Q=!1,F(mt),mt=-1),I=!0;var dt=T;try{e:{for(J(it),S=i(m);S!==null&&!(S.expirationTime>it&&b());){var Vt=S.callback;if(typeof Vt=="function"){S.callback=null,T=S.priorityLevel;var L=Vt(S.expirationTime<=it);if(it=r.unstable_now(),typeof L=="function"){S.callback=L,J(it),ot=!0;break e}S===i(m)&&s(m),J(it)}else s(m);S=i(m)}if(S!==null)ot=!0;else{var et=i(y);et!==null&&le(ct,et.startTime-it),ot=!1}}break t}finally{S=null,T=dt,I=!1}ot=void 0}}finally{ot?O():st=!1}}}var O;if(typeof X=="function")O=function(){X(D)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,M=P.port2;P.port1.onmessage=D,O=function(){M.postMessage(null)}}else O=function(){z(D,0)};function Wt(){st||(st=!0,O())}function le(it,ot){mt=z(function(){it(r.unstable_now())},ot)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(it){it.callback=null},r.unstable_continueExecution=function(){V||I||(V=!0,Wt())},r.unstable_forceFrameRate=function(it){0>it||125<it?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<it?Math.floor(1e3/it):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(it){switch(T){case 1:case 2:case 3:var ot=3;break;default:ot=T}var dt=T;T=ot;try{return it()}finally{T=dt}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(it,ot){switch(it){case 1:case 2:case 3:case 4:case 5:break;default:it=3}var dt=T;T=it;try{return ot()}finally{T=dt}},r.unstable_scheduleCallback=function(it,ot,dt){var Vt=r.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?Vt+dt:Vt):dt=Vt,it){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=dt+L,it={id:C++,callback:ot,priorityLevel:it,startTime:dt,expirationTime:L,sortIndex:-1},dt>Vt?(it.sortIndex=dt,t(y,it),i(m)===null&&it===i(y)&&(Q?(F(mt),mt=-1):Q=!0,le(ct,dt-Vt))):(it.sortIndex=L,t(m,it),V||I||(V=!0,Wt())),it},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(it){var ot=T;return function(){var dt=T;T=ot;try{return it.apply(this,arguments)}finally{T=dt}}}}(h4)),h4}var Xh;function Vd(){return Xh||(Xh=1,c4.exports=Nd()),c4.exports}var f4={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Od(){if(Wh)return rn;Wh=1;var r=X4();function t(m){var y="https://react.dev/errors/"+m;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)y+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+m+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,y,C){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:y,implementation:C}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,y){if(m==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rn.createPortal=function(m,y){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(m,y,null,C)},rn.flushSync=function(m){var y=f.T,C=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=y,s.p=C,s.d.f()}},rn.preconnect=function(m,y){typeof m=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(m,y))},rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},rn.preinit=function(m,y){if(typeof m=="string"&&y&&typeof y.as=="string"){var C=y.as,S=p(C,y.crossOrigin),T=typeof y.integrity=="string"?y.integrity:void 0,I=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;C==="style"?s.d.S(m,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:I}):C==="script"&&s.d.X(m,{crossOrigin:S,integrity:T,fetchPriority:I,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rn.preinitModule=function(m,y){if(typeof m=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var C=p(y.as,y.crossOrigin);s.d.M(m,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(m)},rn.preload=function(m,y){if(typeof m=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var C=y.as,S=p(C,y.crossOrigin);s.d.L(m,C,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rn.preloadModule=function(m,y){if(typeof m=="string")if(y){var C=p(y.as,y.crossOrigin);s.d.m(m,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(m)},rn.requestFormReset=function(m){s.d.r(m)},rn.unstable_batchedUpdates=function(m,y){return m(y)},rn.useFormState=function(m,y,C){return f.H.useFormState(m,y,C)},rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},rn.version="19.0.0",rn}var Zh;function Ld(){if(Zh)return f4.exports;Zh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),f4.exports=Od(),f4.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function kd(){if(Jh)return dl;Jh=1;var r=Vd(),t=X4(),i=Ld();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),I=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ct=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var N=Symbol.for("react.client.reference");function R(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case p:return"Portal";case C:return"Profiler";case y:return"StrictMode";case Q:return"Suspense";case z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I:return(e.displayName||"Context")+".Provider";case T:return(e._context.displayName||"Context")+".Consumer";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:R(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return R(e(n))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.assign,O,P;function M(e){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+e+P}var Wt=!1;function le(e,n){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var tt=function(){throw Error()};if(Object.defineProperty(tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(tt,[])}catch(Y){var G=Y}Reflect.construct(e,[],tt)}else{try{tt.call()}catch(Y){G=Y}e.call(tt.prototype)}}else{try{throw Error()}catch(Y){G=Y}(tt=e())&&typeof tt.catch=="function"&&tt.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var x=_.split(`
`),U=E.split(`
`);for(h=o=0;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===x.length||h===U.length)for(o=x.length-1,h=U.length-1;1<=o&&0<=h&&x[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(x[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||x[o]!==U[h]){var $=`
`+x[o].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=o&&0<=h);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?M(a):""}function it(e){switch(e.tag){case 26:case 27:case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function ot(e){try{var n="";do n+=it(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Vt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(dt(e)!==e)throw Error(s(188))}function et(e){var n=e.alternate;if(!n){if(n=dt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return L(h),e;if(d===o)return L(h),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function pt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=pt(e),n!==null)return n;e=e.sibling}return null}var lt=Array.isArray,ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt={pending:!1,data:null,method:null,action:null},St=[],fe=-1;function Ut(e){return{current:e}}function oe(e){0>fe||(e.current=St[fe],St[fe]=null,fe--)}function Ct(e,n){fe++,St[fe]=e.current,e.current=n}var xt=Ut(null),Ft=Ut(null),ne=Ut(null),ie=Ut(null);function Zt(e,n){switch(Ct(ne,n),Ct(Ft,e),Ct(xt,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Ch(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Ch(e),n=Eh(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}oe(xt),Ct(xt,n)}function Xt(){oe(xt),oe(Ft),oe(ne)}function zt(e){e.memoizedState!==null&&Ct(ie,e);var n=xt.current,a=Eh(n,e.type);n!==a&&(Ct(Ft,e),Ct(xt,a))}function rt(e){Ft.current===e&&(oe(xt),oe(Ft)),ie.current===e&&(oe(ie),ol._currentValue=Rt)}var Te=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,Ke=r.unstable_cancelCallback,Di=r.unstable_shouldYield,cr=r.unstable_requestPaint,mn=r.unstable_now,Hl=r.unstable_getCurrentPriorityLevel,Me=r.unstable_ImmediatePriority,Pe=r.unstable_UserBlockingPriority,Mi=r.unstable_NormalPriority,Fl=r.unstable_LowPriority,lo=r.unstable_IdlePriority,c1=r.log,ha=r.unstable_setDisableYieldValue,hr=null,en=null;function uo(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(hr,e,void 0,(e.current.flags&128)===128)}catch{}}function ii(e){if(typeof c1=="function"&&ha(e),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(hr,e)}catch{}}var ln=Math.clz32?Math.clz32:Ql,co=Math.log,Gl=Math.LN2;function Ql(e){return e>>>=0,e===0?32:31-(co(e)/Gl|0)|0}var ri=128,fr=4194304;function Xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,h=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?o=Xn(a):(d&=E,d!==0?o=Xn(d):e||(_=E&~_,_!==0&&(o=Xn(_))))):(E=a&~h,E!==0?o=Xn(E):d!==0?o=Xn(d):e||(_=a&~_,_!==0&&(o=Xn(_)))),o===0?0:n!==0&&n!==o&&(n&h)===0&&(h=o&-o,_=n&-n,h>=_||h===32&&(_&4194176)!==0)?n:o}function dr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ts(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var e=ri;return ri<<=1,(ri&4194176)===0&&(ri=128),e}function pr(){var e=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),e}function es(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ae(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kl(e,n,a,o,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,x=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var $=31-ln(a),tt=1<<$;E[$]=0,x[$]=-1;var G=U[$];if(G!==null)for(U[$]=null,$=0;$<G.length;$++){var Y=G[$];Y!==null&&(Y.lane&=-536870913)}a&=~tt}o!==0&&mr(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~n))}function mr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ln(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function gr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ln(a),h=1<<o;h&n|e[o]&n&&(e[o]|=n),a&=~h}}function Yl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $l(){var e=ut.p;return e!==0?e:(e=window.event,e===void 0?32:Ph(e.type))}function yr(e,n){var a=ut.p;try{return ut.p=e,n()}finally{ut.p=a}}var ai=Math.random().toString(36).slice(2),je="__reactFiber$"+ai,Ie="__reactProps$"+ai,Ii="__reactContainer$"+ai,fa="__reactEvents$"+ai,ns="__reactListeners$"+ai,si="__reactHandles$"+ai,fo="__reactResources$"+ai,vr="__reactMarker$"+ai;function da(e){delete e[je],delete e[Ie],delete e[fa],delete e[ns],delete e[si]}function Wn(e){var n=e[je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Sh(e);e!==null;){if(a=e[je])return a;e=Sh(e)}return n}e=a,a=e.parentNode}return null}function Ni(e){if(e=e[je]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _r(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Cr(e){var n=e[fo];return n||(n=e[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function de(e){e[vr]=!0}var po=new Set,is={};function An(e,n){gn(e,n),gn(e+"Capture",n)}function gn(e,n){for(is[e]=n,e=0;e<n.length;e++)po.add(n[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},go={};function Xl(e){return Te.call(go,e)?!0:Te.call(mo,e)?!1:h1.test(e)?go[e]=!0:(mo[e]=!0,!1)}function Er(e,n,a){if(Xl(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Tr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function On(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function f1(e){var n=Wl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){o=""+_,d.call(this,_)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pa(e){e._valueTracker||(e._valueTracker=f1(e))}function yo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Wl(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vi=/[\n"\\]/g;function ve(e){return e.replace(Vi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ar(e,n,a,o,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?as(e,_,un(n)):a!=null?as(e,_,un(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+un(E):e.removeAttribute("name")}function ma(e,n,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function as(e,n,a){n==="number"&&rs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Gt(e,n,a,o){if(e=e.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=n.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function ga(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function Sr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ln(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var d1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||d1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zl(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&vo(e,h,o)}else for(var d in n)n.hasOwnProperty(d)&&vo(e,d,n[d])}function _o(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var p1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oi(e){return m1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var kn=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,Li=null;function ki(e){var n=Ni(e);if(n&&(e=n.stateNode)){var a=e[Ie]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ar(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var h=o[Ie]||null;if(!h)throw Error(s(90));Ar(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&yo(o)}break t;case"textarea":ga(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Gt(e,!!a.multiple,n,!1)}}}var Co=!1;function Jl(e,n,a){if(Co)return e(n,a);Co=!0;try{var o=e(n);return o}finally{if(Co=!1,(Oi!==null||Li!==null)&&(Fu(),Oi&&(n=Oi,e=Li,Li=Oi=null,ki(n),e)))for(n=0;n<e.length;n++)ki(e[n])}}function ya(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ie]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Un=!1;if(Sn)try{var va={};Object.defineProperty(va,"passive",{get:function(){Un=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Un=!1}var li=null,br=null,Ui=null;function Eo(){if(Ui)return Ui;var e,n=br,a=n.length,o,h="value"in li?li.value:li.textContent,d=h.length;for(e=0;e<a&&n[e]===h[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===h[d-o];o++);return Ui=h.slice(e,1<o?1-o:void 0)}function ui(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function To(){return!1}function Be(e){function n(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ci:To,this.isPropagationStopped=To,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),n}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Be(Yt),_a=D({},Yt,{view:0,detail:0}),tu=Be(_a),ls,us,hi,Ca=D({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(ls=e.screenX-hi.screenX,us=e.screenY-hi.screenY):us=ls=0,hi=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:us}}),zn=Be(Ca),eu=D({},Ca,{dataTransfer:0}),g1=Be(eu),Ea=D({},_a,{relatedTarget:0}),cs=Be(Ea),Ao=D({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),hs=Be(Ao),nu=D({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fs=Be(nu),y1=D({},Yt,{data:0}),So=Be(y1),Ta={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ru={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ru[e])?!!n[e]:!1}function Aa(){return bo}var au=D({},_a,{key:function(e){if(e.key){var n=Ta[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ds=Be(au),su=D({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=Be(su),zi=D({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),ou=Be(zi),lu=D({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),uu=Be(lu),cu=D({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ps=Be(cu),cn=D({},Yt,{newState:0,oldState:0}),hu=Be(cn),fu=[9,13,27,32],fi=Sn&&"CompositionEvent"in window,u=null;Sn&&"documentMode"in document&&(u=document.documentMode);var g=Sn&&"TextEvent"in window&&!u,v=Sn&&(!fi||u&&8<u&&11>=u),A=" ",B=!1;function K(e,n){switch(e){case"keyup":return fu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function at(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Ne(e,n){switch(e){case"compositionend":return at(n);case"keypress":return n.which!==32?null:(B=!0,A);case"textInput":return e=n.data,e===A&&B?null:e;default:return null}}function jt(e,n){if(Pt)return e==="compositionend"||!fi&&K(e,n)?(e=Eo(),Ui=br=li=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var qe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ve(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qe[e.type]:n==="textarea"}function Pi(e,n,a,o){Oi?Li?Li.push(o):Li=[o]:Oi=o,n=$u(n,"onChange"),0<n.length&&(a=new os("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ye=null,di=null;function Ro(e){mh(e,0)}function du(e){var n=_r(e);if(yo(n))return e}function F2(e,n){if(e==="change")return n}var G2=!1;if(Sn){var v1;if(Sn){var _1="oninput"in document;if(!_1){var Q2=document.createElement("div");Q2.setAttribute("oninput","return;"),_1=typeof Q2.oninput=="function"}v1=_1}else v1=!1;G2=v1&&(!document.documentMode||9<document.documentMode)}function K2(){Ye&&(Ye.detachEvent("onpropertychange",Y2),di=Ye=null)}function Y2(e){if(e.propertyName==="value"&&du(di)){var n=[];Pi(n,di,e,ss(e)),Jl(Ro,n)}}function a8(e,n,a){e==="focusin"?(K2(),Ye=n,di=a,Ye.attachEvent("onpropertychange",Y2)):e==="focusout"&&K2()}function s8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return du(di)}function o8(e,n){if(e==="click")return du(n)}function l8(e,n){if(e==="input"||e==="change")return du(n)}function u8(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bn=typeof Object.is=="function"?Object.is:u8;function xo(e,n){if(bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Te.call(n,h)||!bn(e[h],n[h]))return!1}return!0}function $2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X2(e,n){var a=$2(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$2(a)}}function W2(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?W2(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Z2(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=rs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=rs(e.document)}return n}function C1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function c8(e,n){var a=Z2(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&W2(n.ownerDocument.documentElement,n)){if(o!==null&&C1(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=n.textContent.length,d=Math.min(o.start,h);o=o.end===void 0?d:Math.min(o.end,h),!a.extend&&d>o&&(h=o,o=d,d=h),h=X2(n,d);var _=X2(n,o);h&&_&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==_.node||a.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var h8=Sn&&"documentMode"in document&&11>=document.documentMode,ms=null,E1=null,Do=null,T1=!1;function J2(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;T1||ms==null||ms!==rs(o)||(o=ms,"selectionStart"in o&&C1(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Do&&xo(Do,o)||(Do=o,o=$u(E1,"onSelect"),0<o.length&&(n=new os("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ms)))}function Sa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var gs={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},A1={},t5={};Sn&&(t5=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ba(e){if(A1[e])return A1[e];if(!gs[e])return e;var n=gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in t5)return A1[e]=n[a];return e}var e5=ba("animationend"),n5=ba("animationiteration"),i5=ba("animationstart"),f8=ba("transitionrun"),d8=ba("transitionstart"),p8=ba("transitioncancel"),r5=ba("transitionend"),a5=new Map,s5="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Zn(e,n){a5.set(e,n),An(n,[e])}var Pn=[],ys=0,S1=0;function pu(){for(var e=ys,n=S1=ys=0;n<e;){var a=Pn[n];Pn[n++]=null;var o=Pn[n];Pn[n++]=null;var h=Pn[n];Pn[n++]=null;var d=Pn[n];if(Pn[n++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&o5(a,h,d)}}function mu(e,n,a,o){Pn[ys++]=e,Pn[ys++]=n,Pn[ys++]=a,Pn[ys++]=o,S1|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function b1(e,n,a,o){return mu(e,n,a,o),gu(e)}function wr(e,n){return mu(e,null,null,n),gu(e)}function o5(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&n!==null&&e.tag===3&&(d=e.stateNode,h=31-ln(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[n]:e.push(n),n.lane=a|536870912)}function gu(e){if(50<tl)throw tl=0,I0=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vs={},l5=new WeakMap;function jn(e,n){if(typeof e=="object"&&e!==null){var a=l5.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ot(n)},l5.set(e,n),n)}return{value:e,source:n,stack:ot(n)}}var _s=[],Cs=0,yu=null,vu=0,Bn=[],qn=0,wa=null,ji=1,Bi="";function Ra(e,n){_s[Cs++]=vu,_s[Cs++]=yu,yu=e,vu=n}function u5(e,n,a){Bn[qn++]=ji,Bn[qn++]=Bi,Bn[qn++]=wa,wa=e;var o=ji;e=Bi;var h=32-ln(o)-1;o&=~(1<<h),a+=1;var d=32-ln(n)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,ji=1<<32-ln(n)+h|a<<h|o,Bi=d+e}else ji=1<<d|a<<h|o,Bi=e}function w1(e){e.return!==null&&(Ra(e,1),u5(e,1,0))}function R1(e){for(;e===yu;)yu=_s[--Cs],_s[Cs]=null,vu=_s[--Cs],_s[Cs]=null;for(;e===wa;)wa=Bn[--qn],Bn[qn]=null,Bi=Bn[--qn],Bn[qn]=null,ji=Bn[--qn],Bn[qn]=null}var hn=null,$e=null,Qt=!1,Jn=null,pi=!1,x1=Error(s(519));function xa(e){var n=Error(s(418,""));throw No(jn(n,e)),x1}function c5(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[je]=e,n[Ie]=o,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)Lt(nl[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),ma(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),pa(n);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),Sr(n,o.value,o.defaultValue,o.children),pa(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_h(n.textContent,a)?(o.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),o.onScroll!=null&&Lt("scroll",n),o.onScrollEnd!=null&&Lt("scrollend",n),o.onClick!=null&&(n.onclick=Xu),n=!0):n=!1,n||xa(e)}function h5(e){for(hn=e.return;hn;)switch(hn.tag){case 3:case 27:pi=!0;return;case 5:case 13:pi=!1;return;default:hn=hn.return}}function Mo(e){if(e!==hn)return!1;if(!Qt)return h5(e),Qt=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Y0(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&$e&&xa(e),h5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=ei(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else $e=hn?ei(e.stateNode.nextSibling):null;return!0}function Io(){$e=hn=null,Qt=!1}function No(e){Jn===null?Jn=[e]:Jn.push(e)}var Vo=Error(s(460)),f5=Error(s(474)),D1={then:function(){}};function d5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _u(){}function p5(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_u,_u),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Vo?Error(s(483)):e;default:if(typeof n.status=="string")n.then(_u,_u);else{if(e=ae,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Vo?Error(s(483)):e}throw Oo=n,Vo}}var Oo=null;function m5(){if(Oo===null)throw Error(s(459));var e=Oo;return Oo=null,e}var Es=null,Lo=0;function Cu(e){var n=Lo;return Lo+=1,Es===null&&(Es=[]),p5(Es,e,n)}function ko(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Eu(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function g5(e){var n=e._init;return n(e._payload)}function y5(e){function n(j,k){if(e){var H=j.deletions;H===null?(j.deletions=[k],j.flags|=16):H.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function h(j,k){return j=zr(j,k),j.index=0,j.sibling=null,j}function d(j,k,H){return j.index=H,e?(H=j.alternate,H!==null?(H=H.index,H<k?(j.flags|=33554434,k):H):(j.flags|=33554434,k)):(j.flags|=1048576,k)}function _(j){return e&&j.alternate===null&&(j.flags|=33554434),j}function E(j,k,H,W){return k===null||k.tag!==6?(k=A0(H,j.mode,W),k.return=j,k):(k=h(k,H),k.return=j,k)}function x(j,k,H,W){var ft=H.type;return ft===m?$(j,k,H.props.children,W,H.key):k!==null&&(k.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===X&&g5(ft)===k.type)?(k=h(k,H.props),ko(k,H),k.return=j,k):(k=Pu(H.type,H.key,H.props,null,j.mode,W),ko(k,H),k.return=j,k)}function U(j,k,H,W){return k===null||k.tag!==4||k.stateNode.containerInfo!==H.containerInfo||k.stateNode.implementation!==H.implementation?(k=S0(H,j.mode,W),k.return=j,k):(k=h(k,H.children||[]),k.return=j,k)}function $(j,k,H,W,ft){return k===null||k.tag!==7?(k=za(H,j.mode,W,ft),k.return=j,k):(k=h(k,H),k.return=j,k)}function tt(j,k,H){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=A0(""+k,j.mode,H),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case f:return H=Pu(k.type,k.key,k.props,null,j.mode,H),ko(H,k),H.return=j,H;case p:return k=S0(k,j.mode,H),k.return=j,k;case X:var W=k._init;return k=W(k._payload),tt(j,k,H)}if(lt(k)||mt(k))return k=za(k,j.mode,H,null),k.return=j,k;if(typeof k.then=="function")return tt(j,Cu(k),H);if(k.$$typeof===I)return tt(j,ku(j,k),H);Eu(j,k)}return null}function G(j,k,H,W){var ft=k!==null?k.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ft!==null?null:E(j,k,""+H,W);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case f:return H.key===ft?x(j,k,H,W):null;case p:return H.key===ft?U(j,k,H,W):null;case X:return ft=H._init,H=ft(H._payload),G(j,k,H,W)}if(lt(H)||mt(H))return ft!==null?null:$(j,k,H,W,null);if(typeof H.then=="function")return G(j,k,Cu(H),W);if(H.$$typeof===I)return G(j,k,ku(j,H),W);Eu(j,H)}return null}function Y(j,k,H,W,ft){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return j=j.get(H)||null,E(k,j,""+W,ft);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case f:return j=j.get(W.key===null?H:W.key)||null,x(k,j,W,ft);case p:return j=j.get(W.key===null?H:W.key)||null,U(k,j,W,ft);case X:var It=W._init;return W=It(W._payload),Y(j,k,H,W,ft)}if(lt(W)||mt(W))return j=j.get(H)||null,$(k,j,W,ft,null);if(typeof W.then=="function")return Y(j,k,H,Cu(W),ft);if(W.$$typeof===I)return Y(j,k,H,ku(k,W),ft);Eu(k,W)}return null}function gt(j,k,H,W){for(var ft=null,It=null,vt=k,Et=k=0,Ge=null;vt!==null&&Et<H.length;Et++){vt.index>Et?(Ge=vt,vt=null):Ge=vt.sibling;var Kt=G(j,vt,H[Et],W);if(Kt===null){vt===null&&(vt=Ge);break}e&&vt&&Kt.alternate===null&&n(j,vt),k=d(Kt,k,Et),It===null?ft=Kt:It.sibling=Kt,It=Kt,vt=Ge}if(Et===H.length)return a(j,vt),Qt&&Ra(j,Et),ft;if(vt===null){for(;Et<H.length;Et++)vt=tt(j,H[Et],W),vt!==null&&(k=d(vt,k,Et),It===null?ft=vt:It.sibling=vt,It=vt);return Qt&&Ra(j,Et),ft}for(vt=o(vt);Et<H.length;Et++)Ge=Y(vt,j,Et,H[Et],W),Ge!==null&&(e&&Ge.alternate!==null&&vt.delete(Ge.key===null?Et:Ge.key),k=d(Ge,k,Et),It===null?ft=Ge:It.sibling=Ge,It=Ge);return e&&vt.forEach(function(Gr){return n(j,Gr)}),Qt&&Ra(j,Et),ft}function bt(j,k,H,W){if(H==null)throw Error(s(151));for(var ft=null,It=null,vt=k,Et=k=0,Ge=null,Kt=H.next();vt!==null&&!Kt.done;Et++,Kt=H.next()){vt.index>Et?(Ge=vt,vt=null):Ge=vt.sibling;var Gr=G(j,vt,Kt.value,W);if(Gr===null){vt===null&&(vt=Ge);break}e&&vt&&Gr.alternate===null&&n(j,vt),k=d(Gr,k,Et),It===null?ft=Gr:It.sibling=Gr,It=Gr,vt=Ge}if(Kt.done)return a(j,vt),Qt&&Ra(j,Et),ft;if(vt===null){for(;!Kt.done;Et++,Kt=H.next())Kt=tt(j,Kt.value,W),Kt!==null&&(k=d(Kt,k,Et),It===null?ft=Kt:It.sibling=Kt,It=Kt);return Qt&&Ra(j,Et),ft}for(vt=o(vt);!Kt.done;Et++,Kt=H.next())Kt=Y(vt,j,Et,Kt.value,W),Kt!==null&&(e&&Kt.alternate!==null&&vt.delete(Kt.key===null?Et:Kt.key),k=d(Kt,k,Et),It===null?ft=Kt:It.sibling=Kt,It=Kt);return e&&vt.forEach(function(xd){return n(j,xd)}),Qt&&Ra(j,Et),ft}function Ee(j,k,H,W){if(typeof H=="object"&&H!==null&&H.type===m&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case f:t:{for(var ft=H.key;k!==null;){if(k.key===ft){if(ft=H.type,ft===m){if(k.tag===7){a(j,k.sibling),W=h(k,H.props.children),W.return=j,j=W;break t}}else if(k.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===X&&g5(ft)===k.type){a(j,k.sibling),W=h(k,H.props),ko(W,H),W.return=j,j=W;break t}a(j,k);break}else n(j,k);k=k.sibling}H.type===m?(W=za(H.props.children,j.mode,W,H.key),W.return=j,j=W):(W=Pu(H.type,H.key,H.props,null,j.mode,W),ko(W,H),W.return=j,j=W)}return _(j);case p:t:{for(ft=H.key;k!==null;){if(k.key===ft)if(k.tag===4&&k.stateNode.containerInfo===H.containerInfo&&k.stateNode.implementation===H.implementation){a(j,k.sibling),W=h(k,H.children||[]),W.return=j,j=W;break t}else{a(j,k);break}else n(j,k);k=k.sibling}W=S0(H,j.mode,W),W.return=j,j=W}return _(j);case X:return ft=H._init,H=ft(H._payload),Ee(j,k,H,W)}if(lt(H))return gt(j,k,H,W);if(mt(H)){if(ft=mt(H),typeof ft!="function")throw Error(s(150));return H=ft.call(H),bt(j,k,H,W)}if(typeof H.then=="function")return Ee(j,k,Cu(H),W);if(H.$$typeof===I)return Ee(j,k,ku(j,H),W);Eu(j,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,k!==null&&k.tag===6?(a(j,k.sibling),W=h(k,H),W.return=j,j=W):(a(j,k),W=A0(H,j.mode,W),W.return=j,j=W),_(j)):a(j,k)}return function(j,k,H,W){try{Lo=0;var ft=Ee(j,k,H,W);return Es=null,ft}catch(vt){if(vt===Vo)throw vt;var It=Qn(29,vt,null,j.mode);return It.lanes=W,It.return=j,It}finally{}}}var Da=y5(!0),v5=y5(!1),Ts=Ut(null),Tu=Ut(0);function _5(e,n){e=Zi,Ct(Tu,e),Ct(Ts,n),Zi=e|n.baseLanes}function M1(){Ct(Tu,Zi),Ct(Ts,Ts.current)}function I1(){Zi=Tu.current,oe(Ts),oe(Tu)}var Hn=Ut(null),mi=null;function Rr(e){var n=e.alternate;Ct(Oe,Oe.current&1),Ct(Hn,e),mi===null&&(n===null||Ts.current!==null||n.memoizedState!==null)&&(mi=e)}function C5(e){if(e.tag===22){if(Ct(Oe,Oe.current),Ct(Hn,e),mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(mi=e)}}else xr()}function xr(){Ct(Oe,Oe.current),Ct(Hn,Hn.current)}function qi(e){oe(Hn),mi===e&&(mi=null),oe(Oe)}var Oe=Ut(0);function Au(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var m8=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},g8=r.unstable_scheduleCallback,y8=r.unstable_NormalPriority,Le={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function N1(){return{controller:new m8,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&g8(y8,function(){e.controller.abort()})}var zo=null,V1=0,As=0,Ss=null;function v8(e,n){if(zo===null){var a=zo=[];V1=0,As=P0(),Ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return V1++,n.then(E5,E5),n}function E5(){if(--V1===0&&zo!==null){Ss!==null&&(Ss.status="fulfilled");var e=zo;zo=null,As=0,Ss=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _8(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var T5=b.S;b.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&v8(e,n),T5!==null&&T5(e,n)};var Ma=Ut(null);function O1(){var e=Ma.current;return e!==null?e:ae.pooledCache}function Su(e,n){n===null?Ct(Ma,Ma.current):Ct(Ma,n.pool)}function A5(){var e=O1();return e===null?null:{parent:Le._currentValue,pool:e}}var Dr=0,Mt=null,Jt=null,we=null,bu=!1,bs=!1,Ia=!1,wu=0,Po=0,ws=null,C8=0;function Se(){throw Error(s(321))}function L1(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!bn(e[a],n[a]))return!1;return!0}function k1(e,n,a,o,h,d){return Dr=d,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,b.H=e===null||e.memoizedState===null?Na:Mr,Ia=!1,d=a(o,h),Ia=!1,bs&&(d=b5(n,a,o,h)),S5(e),d}function S5(e){b.H=gi;var n=Jt!==null&&Jt.next!==null;if(Dr=0,we=Jt=Mt=null,bu=!1,Po=0,ws=null,n)throw Error(s(300));e===null||He||(e=e.dependencies,e!==null&&Lu(e)&&(He=!0))}function b5(e,n,a,o){Mt=e;var h=0;do{if(bs&&(ws=null),Po=0,bs=!1,25<=h)throw Error(s(301));if(h+=1,we=Jt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}b.H=Va,d=n(a,o)}while(bs);return d}function E8(){var e=b.H,n=e.useState()[0];return n=typeof n.then=="function"?jo(n):n,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(Mt.flags|=1024),n}function U1(){var e=wu!==0;return wu=0,e}function z1(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function P1(e){if(bu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bu=!1}Dr=0,we=Jt=Mt=null,bs=!1,Po=wu=0,ws=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?Mt.memoizedState=we=e:we=we.next=e,we}function Re(){if(Jt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var n=we===null?Mt.memoizedState:we.next;if(n!==null)we=n,Jt=e;else{if(e===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},we===null?Mt.memoizedState=we=e:we=we.next=e}return we}var Ru;Ru=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function jo(e){var n=Po;return Po+=1,ws===null&&(ws=[]),e=p5(ws,e,n),n=Mt,(we===null?n.memoizedState:we.next)===null&&(n=n.alternate,b.H=n===null||n.memoizedState===null?Na:Mr),e}function xu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===I)return nn(e)}throw Error(s(438,String(e)))}function j1(e){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ct;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function Du(e){var n=Re();return B1(n,Jt,e)}function B1(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}n.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var E=_=null,x=null,U=n,$=!1;do{var tt=U.lane&-536870913;if(tt!==U.lane?(Bt&tt)===tt:(Dr&tt)===tt){var G=U.revertLane;if(G===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),tt===As&&($=!0);else if((Dr&G)===G){U=U.next,G===As&&($=!0);continue}else tt={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(E=x=tt,_=d):x=x.next=tt,Mt.lanes|=G,Pr|=G;tt=U.action,Ia&&a(d,tt),d=U.hasEagerState?U.eagerState:a(d,tt)}else G={lane:tt,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(E=x=G,_=d):x=x.next=G,Mt.lanes|=tt,Pr|=tt;U=U.next}while(U!==null&&U!==n);if(x===null?_=d:x.next=E,!bn(d,e.memoizedState)&&(He=!0,$&&(a=Ss,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=x,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function q1(e){var n=Re(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=n.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);bn(d,n.memoizedState)||(He=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function w5(e,n,a){var o=Mt,h=Re(),d=Qt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!bn((Jt||h).memoizedState,a);if(_&&(h.memoizedState=a,He=!0),h=h.queue,G1(D5.bind(null,o,h,e),[e]),h.getSnapshot!==n||_||we!==null&&we.memoizedState.tag&1){if(o.flags|=2048,Rs(9,x5.bind(null,o,h,a,n),{destroy:void 0},null),ae===null)throw Error(s(349));d||(Dr&60)!==0||R5(o,n,a)}return a}function R5(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=Ru(),Mt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function x5(e,n,a,o){n.value=a,n.getSnapshot=o,M5(n)&&I5(e)}function D5(e,n,a){return a(function(){M5(n)&&I5(e)})}function M5(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!bn(e,a)}catch{return!0}}function I5(e){var n=wr(e,2);n!==null&&fn(n,e,2)}function H1(e){var n=yn();if(typeof e=="function"){var a=e;if(e=a(),Ia){ii(!0);try{a()}finally{ii(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function N5(e,n,a,o){return e.baseState=a,B1(e,Jt,typeof o=="function"?o:Hi)}function T8(e,n,a,o,h){if(Nu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};b.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,V5(n,d)):(d.next=a.next,n.pending=a.next=d)}}function V5(e,n){var a=n.action,o=n.payload,h=e.state;if(n.isTransition){var d=b.T,_={};b.T=_;try{var E=a(h,o),x=b.S;x!==null&&x(_,E),O5(e,n,E)}catch(U){F1(e,n,U)}finally{b.T=d}}else try{d=a(h,o),O5(e,n,d)}catch(U){F1(e,n,U)}}function O5(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){L5(e,n,o)},function(o){return F1(e,n,o)}):L5(e,n,a)}function L5(e,n,a){n.status="fulfilled",n.value=a,k5(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,V5(e,a)))}function F1(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,k5(n),n=n.next;while(n!==o)}e.action=null}function k5(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function U5(e,n){return n}function z5(e,n){if(Qt){var a=ae.formState;if(a!==null){t:{var o=Mt;if(Qt){if($e){e:{for(var h=$e,d=pi;h.nodeType!==8;){if(!d){h=null;break e}if(h=ei(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){$e=ei(h.nextSibling),o=h.data==="F!";break t}}xa(o)}o=!1}o&&(n=a[0])}}return a=yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U5,lastRenderedState:n},a.queue=o,a=n3.bind(null,Mt,o),o.dispatch=a,o=H1(!1),d=X1.bind(null,Mt,!1,o.queue),o=yn(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,a=T8.bind(null,Mt,h,d,a),h.dispatch=a,o.memoizedState=e,[n,a,!1]}function P5(e){var n=Re();return j5(n,Jt,e)}function j5(e,n,a){n=B1(e,n,U5)[0],e=Du(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?jo(n):n;var o=Re(),h=o.queue,d=h.dispatch;return a!==o.memoizedState&&(Mt.flags|=2048,Rs(9,A8.bind(null,h,a),{destroy:void 0},null)),[n,d,e]}function A8(e,n){e.action=n}function B5(e){var n=Re(),a=Jt;if(a!==null)return j5(n,a,e);Re(),n=n.memoizedState,a=Re();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Rs(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=Mt.updateQueue,n===null&&(n=Ru(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function q5(){return Re().memoizedState}function Mu(e,n,a,o){var h=yn();Mt.flags|=e,h.memoizedState=Rs(1|n,a,{destroy:void 0},o===void 0?null:o)}function Iu(e,n,a,o){var h=Re();o=o===void 0?null:o;var d=h.memoizedState.inst;Jt!==null&&o!==null&&L1(o,Jt.memoizedState.deps)?h.memoizedState=Rs(n,a,d,o):(Mt.flags|=e,h.memoizedState=Rs(1|n,a,d,o))}function H5(e,n){Mu(8390656,8,e,n)}function G1(e,n){Iu(2048,8,e,n)}function F5(e,n){return Iu(4,2,e,n)}function G5(e,n){return Iu(4,4,e,n)}function Q5(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K5(e,n,a){a=a!=null?a.concat([e]):null,Iu(4,4,Q5.bind(null,n,e),a)}function Q1(){}function Y5(e,n){var a=Re();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&L1(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $5(e,n){var a=Re();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&L1(n,o[1]))return o[0];if(o=e(),Ia){ii(!0);try{e()}finally{ii(!1)}}return a.memoizedState=[o,n],o}function K1(e,n,a){return a===void 0||(Dr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=W3(),Mt.lanes|=e,Pr|=e,a)}function X5(e,n,a,o){return bn(a,n)?a:Ts.current!==null?(e=K1(e,a,o),bn(e,n)||(He=!0),e):(Dr&42)===0?(He=!0,e.memoizedState=a):(e=W3(),Mt.lanes|=e,Pr|=e,n)}function W5(e,n,a,o,h){var d=ut.p;ut.p=d!==0&&8>d?d:8;var _=b.T,E={};b.T=E,X1(e,!1,n,a);try{var x=h(),U=b.S;if(U!==null&&U(E,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=_8(x,o);Bo(e,n,$,Dn(e))}else Bo(e,n,o,Dn(e))}catch(tt){Bo(e,n,{then:function(){},status:"rejected",reason:tt},Dn())}finally{ut.p=d,b.T=_}}function S8(){}function Y1(e,n,a,o){if(e.tag!==5)throw Error(s(476));var h=Z5(e).queue;W5(e,h,n,Rt,a===null?S8:function(){return J5(e),a(o)})}function Z5(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Rt,baseState:Rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function J5(e){var n=Z5(e).next.queue;Bo(e,n,{},Dn())}function $1(){return nn(ol)}function t3(){return Re().memoizedState}function e3(){return Re().memoizedState}function b8(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Dn();e=Vr(a);var o=Or(n,e,a);o!==null&&(fn(o,n,a),Fo(o,n,a)),n={cache:N1()},e.payload=n;return}n=n.return}}function w8(e,n,a){var o=Dn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?i3(n,a):(a=b1(e,n,a,o),a!==null&&(fn(a,e,o),r3(a,n,o)))}function n3(e,n,a){var o=Dn();Bo(e,n,a,o)}function Bo(e,n,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))i3(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,bn(E,_))return mu(e,n,h,0),ae===null&&pu(),!1}catch{}finally{}if(a=b1(e,n,h,o),a!==null)return fn(a,e,o),r3(a,n,o),!0}return!1}function X1(e,n,a,o){if(o={lane:2,revertLane:P0(),action:o,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(n)throw Error(s(479))}else n=b1(e,a,o,2),n!==null&&fn(n,e,2)}function Nu(e){var n=e.alternate;return e===Mt||n!==null&&n===Mt}function i3(e,n){bs=bu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r3(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gr(e,a)}}var gi={readContext:nn,use:xu,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se};gi.useCacheRefresh=Se,gi.useMemoCache=Se,gi.useHostTransitionStatus=Se,gi.useFormState=Se,gi.useActionState=Se,gi.useOptimistic=Se;var Na={readContext:nn,use:xu,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:H5,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Mu(4194308,4,Q5.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Mu(4194308,4,e,n)},useInsertionEffect:function(e,n){Mu(4,2,e,n)},useMemo:function(e,n){var a=yn();n=n===void 0?null:n;var o=e();if(Ia){ii(!0);try{e()}finally{ii(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=yn();if(a!==void 0){var h=a(n);if(Ia){ii(!0);try{a(n)}finally{ii(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=w8.bind(null,Mt,e),[o.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:function(e){e=H1(e);var n=e.queue,a=n3.bind(null,Mt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Q1,useDeferredValue:function(e,n){var a=yn();return K1(a,e,n)},useTransition:function(){var e=H1(!1);return e=W5.bind(null,Mt,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Mt,h=yn();if(Qt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ae===null)throw Error(s(349));(Bt&60)!==0||R5(o,n,a)}h.memoizedState=a;var d={value:a,getSnapshot:n};return h.queue=d,H5(D5.bind(null,o,d,e),[e]),o.flags|=2048,Rs(9,x5.bind(null,o,d,a,n),{destroy:void 0},null),a},useId:function(){var e=yn(),n=ae.identifierPrefix;if(Qt){var a=Bi,o=ji;a=(o&~(1<<32-ln(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=wu++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=C8++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return yn().memoizedState=b8.bind(null,Mt)}};Na.useMemoCache=j1,Na.useHostTransitionStatus=$1,Na.useFormState=z5,Na.useActionState=z5,Na.useOptimistic=function(e){var n=yn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=X1.bind(null,Mt,!0,a),a.dispatch=n,[e,n]};var Mr={readContext:nn,use:xu,useCallback:Y5,useContext:nn,useEffect:G1,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:Du,useRef:q5,useState:function(){return Du(Hi)},useDebugValue:Q1,useDeferredValue:function(e,n){var a=Re();return X5(a,Jt.memoizedState,e,n)},useTransition:function(){var e=Du(Hi)[0],n=Re().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:w5,useId:t3};Mr.useCacheRefresh=e3,Mr.useMemoCache=j1,Mr.useHostTransitionStatus=$1,Mr.useFormState=P5,Mr.useActionState=P5,Mr.useOptimistic=function(e,n){var a=Re();return N5(a,Jt,e,n)};var Va={readContext:nn,use:xu,useCallback:Y5,useContext:nn,useEffect:G1,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:q1,useRef:q5,useState:function(){return q1(Hi)},useDebugValue:Q1,useDeferredValue:function(e,n){var a=Re();return Jt===null?K1(a,e,n):X5(a,Jt.memoizedState,e,n)},useTransition:function(){var e=q1(Hi)[0],n=Re().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:w5,useId:t3};Va.useCacheRefresh=e3,Va.useMemoCache=j1,Va.useHostTransitionStatus=$1,Va.useFormState=B5,Va.useActionState=B5,Va.useOptimistic=function(e,n){var a=Re();return Jt!==null?N5(a,Jt,e,n):(a.baseState=e,[e,a.queue.dispatch])};function W1(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:D({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Z1={isMounted:function(e){return(e=e._reactInternals)?dt(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Dn(),h=Vr(o);h.payload=n,a!=null&&(h.callback=a),n=Or(e,h,o),n!==null&&(fn(n,e,o),Fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Dn(),h=Vr(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Or(e,h,o),n!==null&&(fn(n,e,o),Fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Dn(),o=Vr(a);o.tag=2,n!=null&&(o.callback=n),n=Or(e,o,a),n!==null&&(fn(n,e,a),Fo(n,e,a))}};function a3(e,n,a,o,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!xo(a,o)||!xo(h,d):!0}function s3(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Z1.enqueueReplaceState(n,n.state,null)}function Oa(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=D({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function o3(e){Vu(e)}function l3(e){console.error(e)}function u3(e){Vu(e)}function Ou(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function c3(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function J1(e,n,a){return a=Vr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ou(e,n)},a}function h3(e){return e=Vr(e),e.tag=3,e}function f3(e,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){c3(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){c3(n,a,o),typeof h!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function R8(e,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ho(n,a,h,!0),a=Hn.current,a!==null){switch(a.tag){case 13:return mi===null?O0():a.alternate===null&&Ce===0&&(Ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===D1?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),k0(e,o,h)),!1;case 22:return a.flags|=65536,o===D1?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),k0(e,o,h)),!1}throw Error(s(435,a.tag))}return k0(e,o,h),O0(),!1}if(Qt)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==x1&&(e=Error(s(422),{cause:o}),No(jn(e,a)))):(o!==x1&&(n=Error(s(423),{cause:o}),No(jn(n,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=jn(o,a),h=J1(e.stateNode,o,h),p0(e,h),Ce!==4&&(Ce=2)),!1;var d=Error(s(520),{cause:o});if(d=jn(d,a),Zo===null?Zo=[d]:Zo.push(d),Ce!==4&&(Ce=2),n===null)return!0;o=jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=J1(a.stateNode,o,e),p0(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(jr===null||!jr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=h3(h),f3(h,e,a,o),p0(a,h),!1}a=a.return}while(a!==null);return!1}var d3=Error(s(461)),He=!1;function Xe(e,n,a,o){n.child=e===null?v5(n,null,a,o):Da(n,e.child,a,o)}function p3(e,n,a,o,h){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return ka(n),o=k1(e,n,a,_,d,h),E=U1(),e!==null&&!He?(z1(e,n,h),Fi(e,n,h)):(Qt&&E&&w1(n),n.flags|=1,Xe(e,n,o,h),n.child)}function m3(e,n,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!T0(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,g3(e,n,d,o,h)):(e=Pu(a.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!l0(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(_,o)&&e.ref===n.ref)return Fi(e,n,h)}return n.flags|=1,e=zr(d,o),e.ref=n.ref,e.return=n,n.child=e}function g3(e,n,a,o,h){if(e!==null){var d=e.memoizedProps;if(xo(d,o)&&e.ref===n.ref)if(He=!1,n.pendingProps=o=d,l0(e,h))(e.flags&131072)!==0&&(He=!0);else return n.lanes=e.lanes,Fi(e,n,h)}return t0(e,n,a,o,h)}function y3(e,n,a){var o=n.pendingProps,h=o.children,d=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(qo(e,n),o.mode==="hidden"||d){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|a:a,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return v3(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Su(n,_!==null?_.cachePool:null),_!==null?_5(n,_):M1(),C5(n);else return n.lanes=n.childLanes=536870912,v3(e,n,_!==null?_.baseLanes|a:a,a)}else _!==null?(Su(n,_.cachePool),_5(n,_),xr(),n.memoizedState=null):(e!==null&&Su(n,null),M1(),xr());return Xe(e,n,h,a),n.child}function v3(e,n,a,o){var h=O1();return h=h===null?null:{parent:Le._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Su(n,null),M1(),C5(n),e!==null&&Ho(e,n,o,!0),null}function qo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function t0(e,n,a,o,h){return ka(n),a=k1(e,n,a,o,void 0,h),o=U1(),e!==null&&!He?(z1(e,n,h),Fi(e,n,h)):(Qt&&o&&w1(n),n.flags|=1,Xe(e,n,a,h),n.child)}function _3(e,n,a,o,h,d){return ka(n),n.updateQueue=null,a=b5(n,o,a,h),S5(e),o=U1(),e!==null&&!He?(z1(e,n,d),Fi(e,n,d)):(Qt&&o&&w1(n),n.flags|=1,Xe(e,n,a,d),n.child)}function C3(e,n,a,o,h){if(ka(n),n.stateNode===null){var d=vs,_=a.contextType;typeof _=="object"&&_!==null&&(d=nn(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Z1,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},f0(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?nn(_):vs,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(W1(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Z1.enqueueReplaceState(d,d.state,null),Qo(n,o,d,h),Go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,x=Oa(a,E);d.props=x;var U=d.context,$=a.contextType;_=vs,typeof $=="object"&&$!==null&&(_=nn($));var tt=a.getDerivedStateFromProps;$=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,$||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||U!==_)&&s3(n,d,o,_),Nr=!1;var G=n.memoizedState;d.state=G,Qo(n,o,d,h),Go(),U=n.memoizedState,E||G!==U||Nr?(typeof tt=="function"&&(W1(n,a,tt,o),U=n.memoizedState),(x=Nr||a3(n,a,x,o,G,U,_))?($||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),d.props=o,d.state=U,d.context=_,o=x):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,d0(e,n),_=n.memoizedProps,$=Oa(a,_),d.props=$,tt=n.pendingProps,G=d.context,U=a.contextType,x=vs,typeof U=="object"&&U!==null&&(x=nn(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==tt||G!==x)&&s3(n,d,o,x),Nr=!1,G=n.memoizedState,d.state=G,Qo(n,o,d,h),Go();var Y=n.memoizedState;_!==tt||G!==Y||Nr||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof E=="function"&&(W1(n,a,E,o),Y=n.memoizedState),($=Nr||a3(n,a,$,o,G,Y,x)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Y,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Y,x)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Y),d.props=o,d.state=Y,d.context=x,o=$):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,qo(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Da(n,e.child,null,h),n.child=Da(n,null,a,h)):Xe(e,n,a,h),n.memoizedState=d.state,e=n.child):e=Fi(e,n,h),e}function E3(e,n,a,o){return Io(),n.flags|=256,Xe(e,n,a,o),n.child}var e0={dehydrated:null,treeContext:null,retryLane:0};function n0(e){return{baseLanes:e,cachePool:A5()}}function i0(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function T3(e,n,a){var o=n.pendingProps,h=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Qt){if(h?Rr(n):xr(),Qt){var E=$e,x;if(x=E){t:{for(x=E,E=pi;x.nodeType!==8;){if(!E){E=null;break t}if(x=ei(x.nextSibling),x===null){E=null;break t}}E=x}E!==null?(n.memoizedState={dehydrated:E,treeContext:wa!==null?{id:ji,overflow:Bi}:null,retryLane:536870912},x=Qn(18,null,null,0),x.stateNode=E,x.return=n,n.child=x,hn=n,$e=null,x=!0):x=!1}x||xa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;qi(n)}return E=o.children,o=o.fallback,h?(xr(),h=n.mode,E=a0({mode:"hidden",children:E},h),o=za(o,h,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,h=n.child,h.memoizedState=n0(a),h.childLanes=i0(e,_,a),n.memoizedState=e0,o):(Rr(n),r0(n,E))}if(x=e.memoizedState,x!==null&&(E=x.dehydrated,E!==null)){if(d)n.flags&256?(Rr(n),n.flags&=-257,n=s0(e,n,a)):n.memoizedState!==null?(xr(),n.child=e.child,n.flags|=128,n=null):(xr(),h=o.fallback,E=n.mode,o=a0({mode:"visible",children:o.children},E),h=za(h,E,a,null),h.flags|=2,o.return=n,h.return=n,o.sibling=h,n.child=o,Da(n,e.child,null,a),o=n.child,o.memoizedState=n0(a),o.childLanes=i0(e,_,a),n.memoizedState=e0,n=h);else if(Rr(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var U=_.dgst;_=U,o=Error(s(419)),o.stack="",o.digest=_,No({value:o,source:null,stack:null}),n=s0(e,n,a)}else if(He||Ho(e,n,a,!1),_=(a&e.childLanes)!==0,He||_){if(_=ae,_!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|a))!==0?0:o,o!==0&&o!==x.retryLane)throw x.retryLane=o,wr(e,o),fn(_,e,o),d3}E.data==="$?"||O0(),n=s0(e,n,a)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=q8.bind(null,e),E._reactRetry=n,n=null):(e=x.treeContext,$e=ei(E.nextSibling),hn=n,Qt=!0,Jn=null,pi=!1,e!==null&&(Bn[qn++]=ji,Bn[qn++]=Bi,Bn[qn++]=wa,ji=e.id,Bi=e.overflow,wa=n),n=r0(n,o.children),n.flags|=4096);return n}return h?(xr(),h=o.fallback,E=n.mode,x=e.child,U=x.sibling,o=zr(x,{mode:"hidden",children:o.children}),o.subtreeFlags=x.subtreeFlags&31457280,U!==null?h=zr(U,h):(h=za(h,E,a,null),h.flags|=2),h.return=n,o.return=n,o.sibling=h,n.child=o,o=h,h=n.child,E=e.child.memoizedState,E===null?E=n0(a):(x=E.cachePool,x!==null?(U=Le._currentValue,x=x.parent!==U?{parent:U,pool:U}:x):x=A5(),E={baseLanes:E.baseLanes|a,cachePool:x}),h.memoizedState=E,h.childLanes=i0(e,_,a),n.memoizedState=e0,o):(Rr(n),a=e.child,e=a.sibling,a=zr(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function r0(e,n){return n=a0({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function a0(e,n){return Y3(e,n,0,null)}function s0(e,n,a){return Da(n,e.child,null,a),e=r0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A3(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),c0(e.return,n,a)}function o0(e,n,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function S3(e,n,a){var o=n.pendingProps,h=o.revealOrder,d=o.tail;if(Xe(e,n,o.children,a),o=Oe.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A3(e,a,n);else if(e.tag===19)A3(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ct(Oe,o),h){case"forwards":for(a=n.child,h=null;a!==null;)e=a.alternate,e!==null&&Au(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),o0(n,!1,h,a,d);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&Au(e)===null){n.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}o0(n,!0,a,null,d);break;case"together":o0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ho(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=zr(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zr(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function l0(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function x8(e,n,a){switch(n.tag){case 3:Zt(n,n.stateNode.containerInfo),Ir(n,Le,e.memoizedState.cache),Io();break;case 27:case 5:zt(n);break;case 4:Zt(n,n.stateNode.containerInfo);break;case 10:Ir(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Rr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T3(e,n,a):(Rr(n),e=Fi(e,n,a),e!==null?e.sibling:null);Rr(n);break;case 19:var h=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ho(e,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return S3(e,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ct(Oe,Oe.current),o)break;return null;case 22:case 23:return n.lanes=0,y3(e,n,a);case 24:Ir(n,Le,e.memoizedState.cache)}return Fi(e,n,a)}function b3(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)He=!0;else{if(!l0(e,a)&&(n.flags&128)===0)return He=!1,x8(e,n,a);He=(e.flags&131072)!==0}else He=!1,Qt&&(n.flags&1048576)!==0&&u5(n,vu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,h=o._init;if(o=h(o._payload),n.type=o,typeof o=="function")T0(o)?(e=Oa(o,e),n.tag=1,n=C3(null,n,o,e,a)):(n.tag=0,n=t0(null,n,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===V){n.tag=11,n=p3(null,n,o,e,a);break t}else if(h===F){n.tag=14,n=m3(null,n,o,e,a);break t}}throw n=R(o)||o,Error(s(306,n,""))}}return n;case 0:return t0(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Oa(o,n.pendingProps),C3(e,n,o,h,a);case 3:t:{if(Zt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;h=n.memoizedState,o=h.element,d0(e,n),Qo(n,d,null,a);var _=n.memoizedState;if(d=_.cache,Ir(n,Le,d),d!==h.cache&&h0(n,[Le],a,!0),Go(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=E3(e,n,d,a);break t}else if(d!==o){o=jn(Error(s(424)),n),No(o),n=E3(e,n,d,a);break t}else for($e=ei(n.stateNode.containerInfo.firstChild),hn=n,Qt=!0,Jn=null,pi=!0,a=v5(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Io(),d===o){n=Fi(e,n,a);break t}Xe(e,n,d,a)}n=n.child}return n;case 26:return qo(e,n),e===null?(a=xh(n.type,null,n.pendingProps,null))?n.memoizedState=a:Qt||(a=n.type,e=n.pendingProps,o=Wu(ne.current).createElement(a),o[je]=n,o[Ie]=e,We(o,a,e),de(o),n.stateNode=o):n.memoizedState=xh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Qt&&(o=n.stateNode=bh(n.type,n.pendingProps,ne.current),hn=n,pi=!0,$e=ei(o.firstChild)),o=n.pendingProps.children,e!==null||Qt?Xe(e,n,o,a):n.child=Da(n,null,o,a),qo(e,n),n.child;case 5:return e===null&&Qt&&((h=o=$e)&&(o=rd(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,hn=n,$e=ei(o.firstChild),pi=!1,h=!0):h=!1),h||xa(n)),zt(n),h=n.type,d=n.pendingProps,_=e!==null?e.memoizedProps:null,o=d.children,Y0(h,d)?o=null:_!==null&&Y0(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=k1(e,n,E8,null,null,a),ol._currentValue=h),qo(e,n),Xe(e,n,o,a),n.child;case 6:return e===null&&Qt&&((e=a=$e)&&(a=ad(a,n.pendingProps,pi),a!==null?(n.stateNode=a,hn=n,$e=null,e=!0):e=!1),e||xa(n)),null;case 13:return T3(e,n,a);case 4:return Zt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Da(n,null,o,a):Xe(e,n,o,a),n.child;case 11:return p3(e,n,n.type,n.pendingProps,a);case 7:return Xe(e,n,n.pendingProps,a),n.child;case 8:return Xe(e,n,n.pendingProps.children,a),n.child;case 12:return Xe(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ir(n,n.type,o.value),Xe(e,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,ka(n),h=nn(h),o=o(h),n.flags|=1,Xe(e,n,o,a),n.child;case 14:return m3(e,n,n.type,n.pendingProps,a);case 15:return g3(e,n,n.type,n.pendingProps,a);case 19:return S3(e,n,a);case 22:return y3(e,n,a);case 24:return ka(n),o=nn(Le),e===null?(h=O1(),h===null&&(h=ae,d=N1(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),n.memoizedState={parent:o,cache:h},f0(n),Ir(n,Le,h)):((e.lanes&a)!==0&&(d0(e,n),Qo(n,null,null,a),Go()),h=e.memoizedState,d=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Ir(n,Le,o)):(o=d.cache,Ir(n,Le,o),o!==h.cache&&h0(n,[Le],a,!0))),Xe(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var u0=Ut(null),La=null,Gi=null;function Ir(e,n,a){Ct(u0,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=u0.current,oe(u0)}function c0(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function h0(e,n,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var x=0;x<n.length;x++)if(E.context===n[x]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),c0(d.return,a,e),o||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),c0(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Ho(e,n,a,o){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;bn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===ie.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}h=h.return}e!==null&&h0(n,e,a,o),n.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){La=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return w3(La,e)}function ku(e,n){return La===null&&ka(e),w3(e,n)}function w3(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var Nr=!1;function f0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function d0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Or(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(me&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=gu(e),o5(e,null,a),n}return mu(e,o,n,a),gu(e)}function Fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gr(e,a)}}function p0(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=n:d=d.next=n}else h=d=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var m0=!1;function Go(){if(m0){var e=Ss;if(e!==null)throw e}}function Qo(e,n,a,o){m0=!1;var h=e.updateQueue;Nr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var x=E,U=x.next;x.next=null,_===null?d=U:_.next=U,_=x;var $=e.alternate;$!==null&&($=$.updateQueue,E=$.lastBaseUpdate,E!==_&&(E===null?$.firstBaseUpdate=U:E.next=U,$.lastBaseUpdate=x))}if(d!==null){var tt=h.baseState;_=0,$=U=x=null,E=d;do{var G=E.lane&-536870913,Y=G!==E.lane;if(Y?(Bt&G)===G:(o&G)===G){G!==0&&G===As&&(m0=!0),$!==null&&($=$.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var gt=e,bt=E;G=n;var Ee=a;switch(bt.tag){case 1:if(gt=bt.payload,typeof gt=="function"){tt=gt.call(Ee,tt,G);break t}tt=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=bt.payload,G=typeof gt=="function"?gt.call(Ee,tt,G):gt,G==null)break t;tt=D({},tt,G);break t;case 2:Nr=!0}}G=E.callback,G!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},$===null?(U=$=Y,x=tt):$=$.next=Y,_|=G;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;Y=E,E=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);$===null&&(x=tt),h.baseState=x,h.firstBaseUpdate=U,h.lastBaseUpdate=$,d===null&&(h.shared.lanes=0),Pr|=_,e.lanes=_,e.memoizedState=tt}}function R3(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function x3(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)R3(a[e],n)}function Ko(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){re(n,n.return,E)}}function Lr(e,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var x=a;try{E()}catch(U){re(h,x,U)}}}o=o.next}while(o!==d)}}catch(U){re(n,n.return,U)}}function D3(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{x3(n,a)}catch(o){re(e,e.return,o)}}}function M3(e,n,a){a.props=Oa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){re(e,n,o)}}function Ua(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=o;break;default:h=o}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){re(e,n,d)}}function wn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){re(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){re(e,n,h)}else a.current=null}function I3(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){re(e,e.return,h)}}function N3(e,n,a){try{var o=e.stateNode;J8(o,e.type,a,n),o[Ie]=n}catch(h){re(e,e.return,h)}}function V3(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function g0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function y0(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(y0(e,n,a),e=e.sibling;e!==null;)y0(e,n,a),e=e.sibling}function Uu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Uu(e,n,a),e=e.sibling;e!==null;)Uu(e,n,a),e=e.sibling}var Ki=!1,_e=!1,v0=!1,O3=typeof WeakSet=="function"?WeakSet:Set,Fe=null,L3=!1;function D8(e,n){if(e=e.containerInfo,Q0=ic,e=Z2(e),C1(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,x=-1,U=0,$=0,tt=e,G=null;e:for(;;){for(var Y;tt!==a||h!==0&&tt.nodeType!==3||(E=_+h),tt!==d||o!==0&&tt.nodeType!==3||(x=_+o),tt.nodeType===3&&(_+=tt.nodeValue.length),(Y=tt.firstChild)!==null;)G=tt,tt=Y;for(;;){if(tt===e)break e;if(G===a&&++U===h&&(E=_),G===d&&++$===o&&(x=_),(Y=tt.nextSibling)!==null)break;tt=G,G=tt.parentNode}tt=Y}a=E===-1||x===-1?null:{start:E,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(K0={focusedElem:e,selectionRange:a},ic=!1,Fe=n;Fe!==null;)if(n=Fe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Fe=e;else for(;Fe!==null;){switch(n=Fe,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var gt=Oa(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(gt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(bt){re(a,a.return,bt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)W0(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":W0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Fe=e;break}Fe=n.return}return gt=L3,L3=!1,gt}function k3(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&Ko(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){re(a,a.return,E)}else{var h=Oa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){re(a,a.return,E)}}o&64&&D3(a),o&512&&Ua(a,a.return);break;case 3:if($i(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{x3(o,e)}catch(E){re(a,a.return,E)}}break;case 26:$i(e,a),o&512&&Ua(a,a.return);break;case 27:case 5:$i(e,a),n===null&&o&4&&I3(a),o&512&&Ua(a,a.return);break;case 12:$i(e,a);break;case 13:$i(e,a),o&4&&P3(e,a);break;case 22:if(h=a.memoizedState!==null||Ki,!h){n=n!==null&&n.memoizedState!==null||_e;var d=Ki,_=_e;Ki=h,(_e=n)&&!_?kr(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Ki=d,_e=_}o&512&&(a.memoizedProps.mode==="manual"?Ua(a,a.return):wn(a,a.return));break;default:$i(e,a)}}function U3(e){var n=e.alternate;n!==null&&(e.alternate=null,U3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&da(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,Rn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)z3(e,n,a),a=a.sibling}function z3(e,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(hr,a)}catch{}switch(a.tag){case 26:_e||wn(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||wn(a,n);var o=xe,h=Rn;for(xe=a.stateNode,Yi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);da(a),xe=o,Rn=h;break;case 5:_e||wn(a,n);case 6:h=xe;var d=Rn;if(xe=null,Yi(e,n,a),xe=h,Rn=d,xe!==null)if(Rn)try{e=xe,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){re(a,n,_)}else try{xe.removeChild(a.stateNode)}catch(_){re(a,n,_)}break;case 18:xe!==null&&(Rn?(n=xe,a=a.stateNode,n.nodeType===8?X0(n.parentNode,a):n.nodeType===1&&X0(n,a),hl(n)):X0(xe,a.stateNode));break;case 4:o=xe,h=Rn,xe=a.stateNode.containerInfo,Rn=!0,Yi(e,n,a),xe=o,Rn=h;break;case 0:case 11:case 14:case 15:_e||Lr(2,a,n),_e||Lr(4,a,n),Yi(e,n,a);break;case 1:_e||(wn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&M3(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:_e||wn(a,n),_e=(o=_e)||a.memoizedState!==null,Yi(e,n,a),_e=o;break;default:Yi(e,n,a)}}function P3(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(a){re(n,n.return,a)}}function M8(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new O3),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new O3),n;default:throw Error(s(435,e.tag))}}function _0(e,n){var a=M8(e);n.forEach(function(o){var h=H8.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:xe=E.stateNode,Rn=!1;break t;case 3:xe=E.stateNode.containerInfo,Rn=!0;break t;case 4:xe=E.stateNode.containerInfo,Rn=!0;break t}E=E.return}if(xe===null)throw Error(s(160));z3(d,_,h),xe=null,Rn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)j3(n,e),n=n.sibling}var ti=null;function j3(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Gn(e),o&4&&(Lr(3,e,e.return),Ko(3,e),Lr(5,e,e.return));break;case 1:Fn(n,e),Gn(e),o&512&&(_e||a===null||wn(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=ti;if(Fn(n,e),Gn(e),o&512&&(_e||a===null||wn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[vr]||d[je]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),We(d,o,a),d[je]=e,de(d),o=d;break t;case"link":var _=Ih("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(o),We(d,o,a),h.head.appendChild(d);break;case"meta":if(_=Ih("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(o),We(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[je]=e,de(d),o=d}e.stateNode=o}else Nh(h,e.type,e.stateNode);else e.stateNode=Mh(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Nh(h,e.type,e.stateNode):Mh(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&N3(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var x=h.firstChild;x;){var U=x.nextSibling,$=x.nodeName;x[vr]||$==="HEAD"||$==="BODY"||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&x.rel.toLowerCase()==="stylesheet"||h.removeChild(x),x=U}for(var tt=e.type,G=h.attributes;G.length;)h.removeAttributeNode(G[0]);We(h,tt,d),h[je]=e,h[Ie]=d}catch(gt){re(e,e.return,gt)}}case 5:if(Fn(n,e),Gn(e),o&512&&(_e||a===null||wn(a,a.return)),e.flags&32){h=e.stateNode;try{Ln(h,"")}catch(gt){re(e,e.return,gt)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,N3(e,h,a!==null?a.memoizedProps:h)),o&1024&&(v0=!0);break;case 6:if(Fn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(gt){re(e,e.return,gt)}}break;case 3:if(tc=null,h=ti,ti=Zu(n.containerInfo),Fn(n,e),ti=h,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{hl(n.containerInfo)}catch(gt){re(e,e.return,gt)}v0&&(v0=!1,B3(e));break;case 4:o=ti,ti=Zu(e.stateNode.containerInfo),Fn(n,e),Gn(e),ti=o;break;case 12:Fn(n,e),Gn(e);break;case 13:Fn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(x0=mn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_0(e,o)));break;case 22:if(o&512&&(_e||a===null||wn(a,a.return)),x=e.memoizedState!==null,U=a!==null&&a.memoizedState!==null,$=Ki,tt=_e,Ki=$||x,_e=tt||U,Fn(n,e),_e=tt,Ki=$,Gn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=x?n._visibility&-2:n._visibility|1,x&&(n=Ki||_e,a===null||U||n||xs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){U=a=n;try{if(h=U.stateNode,x)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=U.stateNode,E=U.memoizedProps.style;var Y=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(gt){re(U,U.return,gt)}}}else if(n.tag===6){if(a===null){U=n;try{U.stateNode.nodeValue=x?"":U.memoizedProps}catch(gt){re(U,U.return,gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_0(e,a))));break;case 19:Fn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_0(e,o)));break;case 21:break;default:Fn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(V3(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var h=o.stateNode,d=g0(e);Uu(e,d,h);break;case 5:var _=o.stateNode;o.flags&32&&(Ln(_,""),o.flags&=-33);var E=g0(e);Uu(e,E,_);break;case 3:case 4:var x=o.stateNode.containerInfo,U=g0(e);y0(e,U,x);break;default:throw Error(s(161))}}}catch($){re(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B3(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B3(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k3(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Lr(4,n,n.return),xs(n);break;case 1:wn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M3(n,n.return,a),xs(n);break;case 26:case 27:case 5:wn(n,n.return),xs(n);break;case 22:wn(n,n.return),n.memoizedState===null&&xs(n);break;default:xs(n)}e=e.sibling}}function kr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:kr(h,d,a),Ko(4,d);break;case 1:if(kr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){re(o,o.return,U)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)R3(x[h],E)}catch(U){re(o,o.return,U)}}a&&_&64&&D3(d),Ua(d,d.return);break;case 26:case 27:case 5:kr(h,d,a),a&&o===null&&_&4&&I3(d),Ua(d,d.return);break;case 12:kr(h,d,a);break;case 13:kr(h,d,a),a&&_&4&&P3(h,d);break;case 22:d.memoizedState===null&&kr(h,d,a),Ua(d,d.return);break;default:kr(h,d,a)}n=n.sibling}}function C0(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Uo(a))}function E0(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Uo(e))}function Ur(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q3(e,n,a,o),n=n.sibling}function q3(e,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ur(e,n,a,o),h&2048&&Ko(9,n);break;case 3:Ur(e,n,a,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Uo(e)));break;case 12:if(h&2048){Ur(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){re(n,n.return,x)}}else Ur(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Ur(e,n,a,o):Yo(e,n):d._visibility&4?Ur(e,n,a,o):(d._visibility|=4,Ds(e,n,a,o,(n.subtreeFlags&10256)!==0)),h&2048&&C0(n.alternate,n);break;case 24:Ur(e,n,a,o),h&2048&&E0(n.alternate,n);break;default:Ur(e,n,a,o)}}function Ds(e,n,a,o,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,_=n,E=a,x=o,U=_.flags;switch(_.tag){case 0:case 11:case 15:Ds(d,_,E,x,h),Ko(8,_);break;case 23:break;case 22:var $=_.stateNode;_.memoizedState!==null?$._visibility&4?Ds(d,_,E,x,h):Yo(d,_):($._visibility|=4,Ds(d,_,E,x,h)),h&&U&2048&&C0(_.alternate,_);break;case 24:Ds(d,_,E,x,h),h&&U&2048&&E0(_.alternate,_);break;default:Ds(d,_,E,x,h)}n=n.sibling}}function Yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,h=o.flags;switch(o.tag){case 22:Yo(a,o),h&2048&&C0(o.alternate,o);break;case 24:Yo(a,o),h&2048&&E0(o.alternate,o);break;default:Yo(a,o)}n=n.sibling}}var $o=8192;function Ms(e){if(e.subtreeFlags&$o)for(e=e.child;e!==null;)H3(e),e=e.sibling}function H3(e){switch(e.tag){case 26:Ms(e),e.flags&$o&&e.memoizedState!==null&&vd(ti,e.memoizedState,e.memoizedProps);break;case 5:Ms(e);break;case 3:case 4:var n=ti;ti=Zu(e.stateNode.containerInfo),Ms(e),ti=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=$o,$o=16777216,Ms(e),$o=n):Ms(e));break;default:Ms(e)}}function F3(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fe=o,Q3(o,e)}F3(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)G3(e),e=e.sibling}function G3(e){switch(e.tag){case 0:case 11:case 15:Xo(e),e.flags&2048&&Lr(9,e,e.return);break;case 3:Xo(e);break;case 12:Xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,zu(e)):Xo(e);break;default:Xo(e)}}function zu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fe=o,Q3(o,e)}F3(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Lr(8,n,n.return),zu(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,zu(n));break;default:zu(n)}e=e.sibling}}function Q3(e,n){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:Lr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Fe=o;else t:for(a=e;Fe!==null;){o=Fe;var h=o.sibling,d=o.return;if(U3(o),o===a){Fe=null;break t}if(h!==null){h.return=d,Fe=h;break t}Fe=d}}}function I8(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new I8(e,n,a,o)}function T0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zr(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function K3(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pu(e,n,a,o,h,d){var _=0;if(o=e,typeof e=="function")T0(e)&&(_=1);else if(typeof e=="string")_=gd(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return za(a.children,h,d,n);case y:_=8,h|=24;break;case C:return e=Qn(12,a,n,h|2),e.elementType=C,e.lanes=d,e;case Q:return e=Qn(13,a,n,h),e.elementType=Q,e.lanes=d,e;case z:return e=Qn(19,a,n,h),e.elementType=z,e.lanes=d,e;case J:return Y3(a,h,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case I:_=10;break t;case T:_=9;break t;case V:_=11;break t;case F:_=14;break t;case X:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(_,a,n,h),n.elementType=e,n.type=o,n.lanes=d,n}function za(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Y3(e,n,a,o){e=Qn(22,e,o,n),e.elementType=J,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var _=wr(d,2);_!==null&&(h._pendingVisibility|=2,fn(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var _=wr(d,2);_!==null&&(h._pendingVisibility&=-3,fn(_,d,2))}}};return e.stateNode=h,e}function A0(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function S0(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xi(e){e.flags|=4}function $3(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vh(n)){if(n=Hn.current,n!==null&&((Bt&4194176)===Bt?mi!==null:(Bt&62914560)!==Bt&&(Bt&536870912)===0||n!==mi))throw Oo=D1,f5;e.flags|=8192}}function ju(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pr():536870912,e.lanes|=n,Ns|=n)}function Wo(e,n){if(!Qt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&31457280,o|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function N8(e,n,a){var o=n.pendingProps;switch(R1(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(n),null;case 1:return pe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(Le),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mo(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Jn!==null&&(N0(Jn),Jn=null))),pe(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(pe(n),$3(n,a)):(pe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),pe(n),$3(n,a)):(pe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Xi(n),pe(n),n.flags&=-16777217),null;case 27:rt(n),a=ne.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return pe(n),null}e=xt.current,Mo(n)?c5(n):(e=bh(h,o,a),n.stateNode=e,Xi(n))}return pe(n),null;case 5:if(rt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return pe(n),null}if(e=xt.current,Mo(n))c5(n);else{switch(h=Wu(ne.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[je]=n,e[Ie]=o;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(We(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return pe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Xi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ne.current,Mo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,h=hn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[je]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_h(e.nodeValue,a)),e||xa(n)}else e=Wu(e).createTextNode(o),e[je]=n,n.stateNode=e}return pe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Mo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[je]=n}else Io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pe(n),h=!1}else Jn!==null&&(N0(Jn),Jn=null),h=!0;if(!h)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),ju(n,n.updateQueue),pe(n),null;case 4:return Xt(),e===null&&H0(n.stateNode.containerInfo),pe(n),null;case 10:return Qi(n.type),pe(n),null;case 19:if(oe(Oe),h=n.memoizedState,h===null)return pe(n),null;if(o=(n.flags&128)!==0,d=h.rendering,d===null)if(o)Wo(h,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Au(e),d!==null){for(n.flags|=128,Wo(h,!1),e=d.updateQueue,n.updateQueue=e,ju(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)K3(a,e),a=a.sibling;return Ct(Oe,Oe.current&1|2),n.child}e=e.sibling}h.tail!==null&&mn()>Bu&&(n.flags|=128,o=!0,Wo(h,!1),n.lanes=4194304)}else{if(!o)if(e=Au(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,ju(n,e),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Qt)return pe(n),null}else 2*mn()-h.renderingStartTime>Bu&&a!==536870912&&(n.flags|=128,o=!0,Wo(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=mn(),n.sibling=null,e=Oe.current,Ct(Oe,o?e&1|2:e&1),n):(pe(n),null);case 22:case 23:return qi(n),I1(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(pe(n),n.subtreeFlags&6&&(n.flags|=8192)):pe(n),a=n.updateQueue,a!==null&&ju(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&oe(Ma),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(Le),pe(n),null;case 25:return null}throw Error(s(156,n.tag))}function V8(e,n){switch(R1(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(Le),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return oe(Oe),null;case 4:return Xt(),null;case 10:return Qi(n.type),null;case 22:case 23:return qi(n),I1(),e!==null&&oe(Ma),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(Le),null;case 25:return null;default:return null}}function X3(e,n){switch(R1(n),n.tag){case 3:Qi(Le),Xt();break;case 26:case 27:case 5:rt(n);break;case 4:Xt();break;case 13:qi(n);break;case 19:oe(Oe);break;case 10:Qi(n.type);break;case 22:case 23:qi(n),I1(),e!==null&&oe(Ma);break;case 24:Qi(Le)}}var O8={getCacheForType:function(e){var n=nn(Le),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},L8=typeof WeakMap=="function"?WeakMap:Map,me=0,ae=null,Nt=null,Bt=0,se=0,xn=null,Wi=!1,Is=!1,b0=!1,Zi=0,Ce=0,Pr=0,Pa=0,w0=0,Kn=0,Ns=0,Zo=null,yi=null,R0=!1,x0=0,Bu=1/0,qu=null,jr=null,Hu=!1,ja=null,Jo=0,D0=0,M0=null,tl=0,I0=null;function Dn(){if((me&2)!==0&&Bt!==0)return Bt&-Bt;if(b.T!==null){var e=As;return e!==0?e:P0()}return $l()}function W3(){Kn===0&&(Kn=(Bt&536870912)===0||Qt?ho():536870912);var e=Hn.current;return e!==null&&(e.flags|=32),Kn}function fn(e,n,a){(e===ae&&se===2||e.cancelPendingCommit!==null)&&(Vs(e,0),Ji(e,Bt,Kn,!1)),Ae(e,a),((me&2)===0||e!==ae)&&(e===ae&&((me&2)===0&&(Pa|=a),Ce===4&&Ji(e,Bt,Kn,!1)),vi(e))}function Z3(e,n,a){if((me&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||dr(e,n),h=o?z8(e,n):L0(e,n,!0),d=o;do{if(h===0){Is&&!o&&Ji(e,n,0,!1);break}else if(h===6)Ji(e,n,0,!Wi);else{if(a=e.current.alternate,d&&!k8(a)){h=L0(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;h=Zo;var x=E.current.memoizedState.isDehydrated;if(x&&(Vs(E,_).flags|=256),_=L0(E,_,!1),_!==2){if(b0&&!x){E.errorRecoveryDisabledLanes|=d,Pa|=d,h=4;break t}d=yi,yi=h,d!==null&&N0(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){Vs(e,0),Ji(e,n,0,!0);break}t:{switch(o=e,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ji(o,n,Kn,!Wi);break t}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(d=x0+300-mn(),10<d)){if(Ji(o,n,Kn,!Wi),Vn(o,0)!==0)break t;o.timeoutHandle=Th(J3.bind(null,o,a,yi,qu,R0,n,Kn,Pa,Ns,Wi,2,-0,0),d);break t}J3(o,a,yi,qu,R0,n,Kn,Pa,Ns,Wi,0,-0,0)}}break}while(!0);vi(e)}function N0(e){yi===null?yi=e:yi.push.apply(yi,e)}function J3(e,n,a,o,h,d,_,E,x,U,$,tt,G){var Y=n.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(sl={stylesheets:null,count:0,unsuspend:yd},H3(n),n=_d(),n!==null)){e.cancelPendingCommit=n(sh.bind(null,e,a,o,h,_,E,x,1,tt,G)),Ji(e,d,_,!U);return}sh(e,a,o,h,_,E,x,$,tt,G)}function k8(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!bn(d(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ji(e,n,a,o){n&=~w0,n&=~Pa,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var d=31-ln(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&mr(e,a,n)}function Fu(){return(me&6)===0?(el(0),!1):!0}function V0(){if(Nt!==null){if(se===0)var e=Nt.return;else e=Nt,Gi=La=null,P1(e),Es=null,Lo=0,e=Nt;for(;e!==null;)X3(e.alternate,e),e=e.return;Nt=null}}function Vs(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ed(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),V0(),ae=e,Nt=a=zr(e.current,null),Bt=n,se=0,xn=null,Wi=!1,Is=dr(e,n),b0=!1,Ns=Kn=w0=Pa=Pr=Ce=0,yi=Zo=null,R0=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-ln(o),d=1<<h;n|=e[h],o&=~d}return Zi=n,pu(),a}function th(e,n){Mt=null,b.H=gi,n===Vo?(n=m5(),se=3):n===f5?(n=m5(),se=4):se=n===d3?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xn=n,Nt===null&&(Ce=1,Ou(e,jn(n,e.current)))}function eh(){var e=b.H;return b.H=gi,e===null?gi:e}function nh(){var e=b.A;return b.A=O8,e}function O0(){Ce=4,Wi||(Bt&4194176)!==Bt&&Hn.current!==null||(Is=!0),(Pr&134217727)===0&&(Pa&134217727)===0||ae===null||Ji(ae,Bt,Kn,!1)}function L0(e,n,a){var o=me;me|=2;var h=eh(),d=nh();(ae!==e||Bt!==n)&&(qu=null,Vs(e,n)),n=!1;var _=Ce;t:do try{if(se!==0&&Nt!==null){var E=Nt,x=xn;switch(se){case 8:V0(),_=6;break t;case 3:case 2:case 6:Hn.current===null&&(n=!0);var U=se;if(se=0,xn=null,Os(e,E,x,U),a&&Is){_=0;break t}break;default:U=se,se=0,xn=null,Os(e,E,x,U)}}U8(),_=Ce;break}catch($){th(e,$)}while(!0);return n&&e.shellSuspendCounter++,Gi=La=null,me=o,b.H=h,b.A=d,Nt===null&&(ae=null,Bt=0,pu()),_}function U8(){for(;Nt!==null;)ih(Nt)}function z8(e,n){var a=me;me|=2;var o=eh(),h=nh();ae!==e||Bt!==n?(qu=null,Bu=mn()+500,Vs(e,n)):Is=dr(e,n);t:do try{if(se!==0&&Nt!==null){n=Nt;var d=xn;e:switch(se){case 1:se=0,xn=null,Os(e,n,d,1);break;case 2:if(d5(d)){se=0,xn=null,rh(n);break}n=function(){se===2&&ae===e&&(se=7),vi(e)},d.then(n,n);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:d5(d)?(se=0,xn=null,rh(n)):(se=0,xn=null,Os(e,n,d,7));break;case 5:var _=null;switch(Nt.tag){case 26:_=Nt.memoizedState;case 5:case 27:var E=Nt;if(!_||Vh(_)){se=0,xn=null;var x=E.sibling;if(x!==null)Nt=x;else{var U=E.return;U!==null?(Nt=U,Gu(U)):Nt=null}break e}}se=0,xn=null,Os(e,n,d,5);break;case 6:se=0,xn=null,Os(e,n,d,6);break;case 8:V0(),Ce=6;break t;default:throw Error(s(462))}}P8();break}catch($){th(e,$)}while(!0);return Gi=La=null,b.H=o,b.A=h,me=a,Nt!==null?0:(ae=null,Bt=0,pu(),Ce)}function P8(){for(;Nt!==null&&!Di();)ih(Nt)}function ih(e){var n=b3(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Gu(e):Nt=n}function rh(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_3(a,n,n.pendingProps,n.type,void 0,Bt);break;case 11:n=_3(a,n,n.pendingProps,n.type.render,n.ref,Bt);break;case 5:P1(n);default:X3(a,n),n=Nt=K3(n,Zi),n=b3(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Gu(e):Nt=n}function Os(e,n,a,o){Gi=La=null,P1(n),Es=null,Lo=0;var h=n.return;try{if(R8(e,h,n,a,Bt)){Ce=1,Ou(e,jn(a,e.current)),Nt=null;return}}catch(d){if(h!==null)throw Nt=h,d;Ce=1,Ou(e,jn(a,e.current)),Nt=null;return}n.flags&32768?(Qt||o===1?e=!0:Is||(Bt&536870912)!==0?e=!1:(Wi=e=!0,(o===2||o===3||o===6)&&(o=Hn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ah(n,e)):Gu(n)}function Gu(e){var n=e;do{if((n.flags&32768)!==0){ah(n,Wi);return}e=n.return;var a=N8(n.alternate,n,Zi);if(a!==null){Nt=a;return}if(n=n.sibling,n!==null){Nt=n;return}Nt=n=e}while(n!==null);Ce===0&&(Ce=5)}function ah(e,n){do{var a=V8(e.alternate,e);if(a!==null){a.flags&=32767,Nt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Nt=e;return}Nt=e=a}while(e!==null);Ce=6,Nt=null}function sh(e,n,a,o,h,d,_,E,x,U){var $=b.T,tt=ut.p;try{ut.p=2,b.T=null,j8(e,n,a,o,tt,h,d,_,E,x,U)}finally{b.T=$,ut.p=tt}}function j8(e,n,a,o,h,d,_,E){do Ls();while(ja!==null);if((me&6)!==0)throw Error(s(327));var x=e.finishedWork;if(o=e.finishedLanes,x===null)return null;if(e.finishedWork=null,e.finishedLanes=0,x===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var U=x.lanes|x.childLanes;if(U|=S1,Kl(e,o,U,d,_,E),e===ae&&(Nt=ae=null,Bt=0),(x.subtreeFlags&10256)===0&&(x.flags&10256)===0||Hu||(Hu=!0,D0=U,M0=a,F8(Mi,function(){return Ls(),null})),a=(x.flags&15990)!==0,(x.subtreeFlags&15990)!==0||a?(a=b.T,b.T=null,d=ut.p,ut.p=2,_=me,me|=4,D8(e,x),j3(x,e),c8(K0,e.containerInfo),ic=!!Q0,K0=Q0=null,e.current=x,k3(e,x.alternate,x),cr(),me=_,ut.p=d,b.T=a):e.current=x,Hu?(Hu=!1,ja=e,Jo=o):oh(e,U),U=e.pendingLanes,U===0&&(jr=null),uo(x.stateNode),vi(e),n!==null)for(h=e.onRecoverableError,x=0;x<n.length;x++)U=n[x],h(U.value,{componentStack:U.stack});return(Jo&3)!==0&&Ls(),U=e.pendingLanes,(o&4194218)!==0&&(U&42)!==0?e===I0?tl++:(tl=0,I0=e):tl=0,el(0),null}function oh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Uo(n)))}function Ls(){if(ja!==null){var e=ja,n=D0;D0=0;var a=Yl(Jo),o=b.T,h=ut.p;try{if(ut.p=32>a?32:a,b.T=null,ja===null)var d=!1;else{a=M0,M0=null;var _=ja,E=Jo;if(ja=null,Jo=0,(me&6)!==0)throw Error(s(331));var x=me;if(me|=4,G3(_.current),q3(_,_.current,E,a),me=x,el(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(hr,_)}catch{}d=!0}return d}finally{ut.p=h,b.T=o,oh(e,n)}}return!1}function lh(e,n,a){n=jn(a,n),n=J1(e.stateNode,n,2),e=Or(e,n,2),e!==null&&(Ae(e,2),vi(e))}function re(e,n,a){if(e.tag===3)lh(e,e,a);else for(;n!==null;){if(n.tag===3){lh(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(jr===null||!jr.has(o))){e=jn(a,e),a=h3(2),o=Or(n,a,2),o!==null&&(f3(a,o,n,e),Ae(o,2),vi(o));break}}n=n.return}}function k0(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new L8;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(b0=!0,h.add(a),e=B8.bind(null,e,n,a),n.then(e,e))}function B8(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ae===e&&(Bt&a)===a&&(Ce===4||Ce===3&&(Bt&62914560)===Bt&&300>mn()-x0?(me&2)===0&&Vs(e,0):w0|=a,Ns===Bt&&(Ns=0)),vi(e)}function uh(e,n){n===0&&(n=pr()),e=wr(e,n),e!==null&&(Ae(e,n),vi(e))}function q8(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),uh(e,a)}function H8(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),uh(e,a)}function F8(e,n){return ye(e,n)}var Qu=null,ks=null,U0=!1,Ku=!1,z0=!1,Ba=0;function vi(e){e!==ks&&e.next===null&&(ks===null?Qu=ks=e:ks=ks.next=e),Ku=!0,U0||(U0=!0,Q8(G8))}function el(e,n){if(!z0&&Ku){z0=!0;do for(var a=!1,o=Qu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-ln(42|e)+1)-1,d&=h&~(_&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,fh(o,d))}else d=Bt,d=Vn(o,o===ae?d:0),(d&3)===0||dr(o,d)||(a=!0,fh(o,d));o=o.next}while(a);z0=!1}}function G8(){Ku=U0=!1;var e=0;Ba!==0&&(td()&&(e=Ba),Ba=0);for(var n=mn(),a=null,o=Qu;o!==null;){var h=o.next,d=ch(o,n);d===0?(o.next=null,a===null?Qu=h:a.next=h,h===null&&(ks=a)):(a=o,(e!==0||(d&3)!==0)&&(Ku=!0)),o=h}el(e)}function ch(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-ln(d),E=1<<_,x=h[_];x===-1?((E&a)===0||(E&o)!==0)&&(h[_]=ts(E,n)):x<=n&&(e.expiredLanes|=E),d&=~E}if(n=ae,a=Bt,a=Vn(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&se===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ke(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||dr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ke(o),Yl(a)){case 2:case 8:a=Pe;break;case 32:a=Mi;break;case 268435456:a=lo;break;default:a=Mi}return o=hh.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ke(o),e.callbackPriority=2,e.callbackNode=null,2}function hh(e,n){var a=e.callbackNode;if(Ls()&&e.callbackNode!==a)return null;var o=Bt;return o=Vn(e,e===ae?o:0),o===0?null:(Z3(e,o,n),ch(e,mn()),e.callbackNode!=null&&e.callbackNode===a?hh.bind(null,e):null)}function fh(e,n){if(Ls())return null;Z3(e,n,!0)}function Q8(e){nd(function(){(me&6)!==0?ye(Me,e):e()})}function P0(){return Ba===0&&(Ba=ho()),Ba}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oi(""+e)}function ph(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function K8(e,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var d=dh((h[Ie]||null).action),_=o.submitter;_&&(n=(n=_[Ie]||null)?dh(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var E=new os("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var x=_?ph(h,_):new FormData(h);Y1(a,{pending:!0,data:x,method:h.method,action:d},null,x)}}else typeof d=="function"&&(E.preventDefault(),x=_?ph(h,_):new FormData(h),Y1(a,{pending:!0,data:x,method:h.method,action:d},d,x))},currentTarget:h}]})}}for(var j0=0;j0<s5.length;j0++){var B0=s5[j0],Y8=B0.toLowerCase(),$8=B0[0].toUpperCase()+B0.slice(1);Zn(Y8,"on"+$8)}Zn(e5,"onAnimationEnd"),Zn(n5,"onAnimationIteration"),Zn(i5,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(f8,"onTransitionRun"),Zn(d8,"onTransitionStart"),Zn(p8,"onTransitionCancel"),Zn(r5,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function mh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],x=E.instance,U=E.currentTarget;if(E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch($){Vu($)}h.currentTarget=null,d=x}else for(_=0;_<o.length;_++){if(E=o[_],x=E.instance,U=E.currentTarget,E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch($){Vu($)}h.currentTarget=null,d=x}}}}function Lt(e,n){var a=n[fa];a===void 0&&(a=n[fa]=new Set);var o=e+"__bubble";a.has(o)||(gh(n,e,2,!1),a.add(o))}function q0(e,n,a){var o=0;n&&(o|=4),gh(a,e,o,n)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function H0(e){if(!e[Yu]){e[Yu]=!0,po.forEach(function(a){a!=="selectionchange"&&(X8.has(a)||q0(a,!1,e),q0(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yu]||(n[Yu]=!0,q0("selectionchange",!1,n))}}function gh(e,n,a,o){switch(Ph(n)){case 2:var h=Td;break;case 8:h=Ad;break;default:h=n4}a=h.bind(null,n,a,e),h=void 0,!Un||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,a,{capture:!0,passive:h}):e.addEventListener(n,a,!0):h!==void 0?e.addEventListener(n,a,{passive:h}):e.addEventListener(n,a,!1)}function F0(e,n,a,o,h){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(_===4)for(_=o.return;_!==null;){var x=_.tag;if((x===3||x===4)&&(x=_.stateNode.containerInfo,x===h||x.nodeType===8&&x.parentNode===h))return;_=_.return}for(;E!==null;){if(_=Wn(E),_===null)return;if(x=_.tag,x===5||x===6||x===26||x===27){o=d=_;continue t}E=E.parentNode}}o=o.return}Jl(function(){var U=d,$=ss(a),tt=[];t:{var G=a5.get(e);if(G!==void 0){var Y=os,gt=e;switch(e){case"keypress":if(ui(a)===0)break t;case"keydown":case"keyup":Y=ds;break;case"focusin":gt="focus",Y=cs;break;case"focusout":gt="blur",Y=cs;break;case"beforeblur":case"afterblur":Y=cs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=ou;break;case e5:case n5:case i5:Y=hs;break;case r5:Y=uu;break;case"scroll":case"scrollend":Y=tu;break;case"wheel":Y=ps;break;case"copy":case"cut":case"paste":Y=fs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=wo;break;case"toggle":case"beforetoggle":Y=hu}var bt=(n&4)!==0,Ee=!bt&&(e==="scroll"||e==="scrollend"),j=bt?G!==null?G+"Capture":null:G;bt=[];for(var k=U,H;k!==null;){var W=k;if(H=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||H===null||j===null||(W=ya(k,j),W!=null&&bt.push(il(k,W,H))),Ee)break;k=k.return}0<bt.length&&(G=new Y(G,gt,null,a,$),tt.push({event:G,listeners:bt}))}}if((n&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",G&&a!==kn&&(gt=a.relatedTarget||a.fromElement)&&(Wn(gt)||gt[Ii]))break t;if((Y||G)&&(G=$.window===$?$:(G=$.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(gt=a.relatedTarget||a.toElement,Y=U,gt=gt?Wn(gt):null,gt!==null&&(Ee=dt(gt),bt=gt.tag,gt!==Ee||bt!==5&&bt!==27&&bt!==6)&&(gt=null)):(Y=null,gt=U),Y!==gt)){if(bt=zn,W="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(bt=wo,W="onPointerLeave",j="onPointerEnter",k="pointer"),Ee=Y==null?G:_r(Y),H=gt==null?G:_r(gt),G=new bt(W,k+"leave",Y,a,$),G.target=Ee,G.relatedTarget=H,W=null,Wn($)===U&&(bt=new bt(j,k+"enter",gt,a,$),bt.target=H,bt.relatedTarget=Ee,W=bt),Ee=W,Y&&gt)e:{for(bt=Y,j=gt,k=0,H=bt;H;H=Us(H))k++;for(H=0,W=j;W;W=Us(W))H++;for(;0<k-H;)bt=Us(bt),k--;for(;0<H-k;)j=Us(j),H--;for(;k--;){if(bt===j||j!==null&&bt===j.alternate)break e;bt=Us(bt),j=Us(j)}bt=null}else bt=null;Y!==null&&yh(tt,G,Y,bt,!1),gt!==null&&Ee!==null&&yh(tt,Ee,gt,bt,!0)}}t:{if(G=U?_r(U):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var ft=F2;else if(Ve(G))if(G2)ft=l8;else{ft=s8;var It=a8}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&_o(U.elementType)&&(ft=F2):ft=o8;if(ft&&(ft=ft(e,U))){Pi(tt,ft,a,$);break t}It&&It(e,G,U),e==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&as(G,"number",G.value)}switch(It=U?_r(U):window,e){case"focusin":(Ve(It)||It.contentEditable==="true")&&(ms=It,E1=U,Do=null);break;case"focusout":Do=E1=ms=null;break;case"mousedown":T1=!0;break;case"contextmenu":case"mouseup":case"dragend":T1=!1,J2(tt,a,$);break;case"selectionchange":if(h8)break;case"keydown":case"keyup":J2(tt,a,$)}var vt;if(fi)t:{switch(e){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Pt?K(e,a)&&(Et="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(v&&a.locale!=="ko"&&(Pt||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Pt&&(vt=Eo()):(li=$,br="value"in li?li.value:li.textContent,Pt=!0)),It=$u(U,Et),0<It.length&&(Et=new So(Et,e,null,a,$),tt.push({event:Et,listeners:It}),vt?Et.data=vt:(vt=at(a),vt!==null&&(Et.data=vt)))),(vt=g?Ne(e,a):jt(e,a))&&(Et=$u(U,"onBeforeInput"),0<Et.length&&(It=new So("onBeforeInput","beforeinput",null,a,$),tt.push({event:It,listeners:Et}),It.data=vt)),K8(tt,e,U,a,$)}mh(tt,n)})}function il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $u(e,n){for(var a=n+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ya(e,a),h!=null&&o.unshift(il(e,h,d)),h=ya(e,n),h!=null&&o.push(il(e,h,d))),e=e.return}return o}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yh(e,n,a,o,h){for(var d=n._reactName,_=[];a!==null&&a!==o;){var E=a,x=E.alternate,U=E.stateNode;if(E=E.tag,x!==null&&x===o)break;E!==5&&E!==26&&E!==27||U===null||(x=U,h?(U=ya(a,d),U!=null&&_.unshift(il(a,U,x))):h||(U=ya(a,d),U!=null&&_.push(il(a,U,x)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var W8=/\r\n?/g,Z8=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(W8,`
`).replace(Z8,"")}function _h(e,n){return n=vh(n),vh(e)===n}function Xu(){}function te(e,n,a,o,h,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ln(e,""+o);break;case"className":Tr(e,"class",o);break;case"tabIndex":Tr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(e,a,o);break;case"style":Zl(e,o,d);break;case"data":if(n!=="object"){Tr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oi(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&te(e,n,"name",h.name,h,null),te(e,n,"formEncType",h.formEncType,h,null),te(e,n,"formMethod",h.formMethod,h,null),te(e,n,"formTarget",h.formTarget,h,null)):(te(e,n,"encType",h.encType,h,null),te(e,n,"method",h.method,h,null),te(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=oi(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"onScroll":o!=null&&Lt("scroll",e);break;case"onScrollEnd":o!=null&&Lt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=oi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Lt("beforetoggle",e),Lt("toggle",e),Er(e,"popover",o);break;case"xlinkActuate":On(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":On(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":On(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":On(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":On(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":On(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":On(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":On(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":On(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Er(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=p1.get(a)||a,Er(e,a,o))}}function G0(e,n,a,o,h,d){switch(a){case"style":Zl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&Ln(e,""+o);break;case"onScroll":o!=null&&Lt("scroll",e);break;case"onScrollEnd":o!=null&&Lt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!is.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),d=e[Ie]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Er(e,a,o)}}}function We(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",e),Lt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:te(e,n,d,_,a,null)}}h&&te(e,n,"srcSet",a.srcSet,a,null),o&&te(e,n,"src",a.src,a,null);return;case"input":Lt("invalid",e);var E=d=_=h=null,x=null,U=null;for(o in a)if(a.hasOwnProperty(o)){var $=a[o];if($!=null)switch(o){case"name":h=$;break;case"type":_=$;break;case"checked":x=$;break;case"defaultChecked":U=$;break;case"value":d=$;break;case"defaultValue":E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:te(e,n,o,$,a,null)}}ma(e,d,E,x,U,_,h,!1),pa(e);return;case"select":Lt("invalid",e),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:te(e,n,h,E,a,null)}n=d,a=_,e.multiple=!!o,n!=null?Gt(e,!!o,n,!1):a!=null&&Gt(e,!!o,a,!0);return;case"textarea":Lt("invalid",e),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:te(e,n,_,E,a,null)}Sr(e,o,h,d),pa(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:te(e,n,x,o,a,null)}return;case"dialog":Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":Lt("load",e);break;case"video":case"audio":for(o=0;o<nl.length;o++)Lt(nl[o],e);break;case"image":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"embed":case"source":case"link":Lt("error",e),Lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(o=a[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:te(e,n,U,o,a,null)}return;default:if(_o(n)){for($ in a)a.hasOwnProperty($)&&(o=a[$],o!==void 0&&G0(e,n,$,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&te(e,n,E,o,a,null))}function J8(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,x=null,U=null,$=null;for(Y in a){var tt=a[Y];if(a.hasOwnProperty(Y)&&tt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":x=tt;default:o.hasOwnProperty(Y)||te(e,n,Y,null,o,tt)}}for(var G in o){var Y=o[G];if(tt=a[G],o.hasOwnProperty(G)&&(Y!=null||tt!=null))switch(G){case"type":d=Y;break;case"name":h=Y;break;case"checked":U=Y;break;case"defaultChecked":$=Y;break;case"value":_=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Y!==tt&&te(e,n,G,Y,o,tt)}}Ar(e,_,E,x,U,$,d,h);return;case"select":Y=_=E=G=null;for(d in a)if(x=a[d],a.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":Y=x;default:o.hasOwnProperty(d)||te(e,n,d,null,o,x)}for(h in o)if(d=o[h],x=a[h],o.hasOwnProperty(h)&&(d!=null||x!=null))switch(h){case"value":G=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==x&&te(e,n,h,d,o,x)}n=E,a=_,o=Y,G!=null?Gt(e,!!a,G,!1):!!o!=!!a&&(n!=null?Gt(e,!!a,n,!0):Gt(e,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:te(e,n,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&te(e,n,_,h,o,d)}ga(e,G,Y);return;case"option":for(var gt in a)if(G=a[gt],a.hasOwnProperty(gt)&&G!=null&&!o.hasOwnProperty(gt))switch(gt){case"selected":e.selected=!1;break;default:te(e,n,gt,null,o,G)}for(x in o)if(G=o[x],Y=a[x],o.hasOwnProperty(x)&&G!==Y&&(G!=null||Y!=null))switch(x){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:te(e,n,x,G,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var bt in a)G=a[bt],a.hasOwnProperty(bt)&&G!=null&&!o.hasOwnProperty(bt)&&te(e,n,bt,null,o,G);for(U in o)if(G=o[U],Y=a[U],o.hasOwnProperty(U)&&G!==Y&&(G!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:te(e,n,U,G,o,Y)}return;default:if(_o(n)){for(var Ee in a)G=a[Ee],a.hasOwnProperty(Ee)&&G!==void 0&&!o.hasOwnProperty(Ee)&&G0(e,n,Ee,void 0,o,G);for($ in o)G=o[$],Y=a[$],!o.hasOwnProperty($)||G===Y||G===void 0&&Y===void 0||G0(e,n,$,G,o,Y);return}}for(var j in a)G=a[j],a.hasOwnProperty(j)&&G!=null&&!o.hasOwnProperty(j)&&te(e,n,j,null,o,G);for(tt in o)G=o[tt],Y=a[tt],!o.hasOwnProperty(tt)||G===Y||G==null&&Y==null||te(e,n,tt,G,o,Y)}var Q0=null,K0=null;function Wu(e){return e.nodeType===9?e:e.ownerDocument}function Ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Y0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $0=null;function td(){var e=window.event;return e&&e.type==="popstate"?e===$0?!1:($0=e,!0):($0=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,ed=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,nd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(id)}:Th;function id(e){setTimeout(function(){throw e})}function X0(e,n){var a=n,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(o===0){e.removeChild(h),hl(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=h}while(a);hl(n)}function W0(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":W0(a),da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rd(e,n,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[vr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function ad(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ei(e.nextSibling),e===null))return null;return e}function ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Sh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function bh(e,n,a){switch(n=Wu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Yn=new Map,wh=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var tr=ut.d;ut.d={f:sd,r:od,D:ld,C:ud,L:cd,m:hd,X:dd,S:fd,M:pd};function sd(){var e=tr.f(),n=Fu();return e||n}function od(e){var n=Ni(e);n!==null&&n.tag===5&&n.type==="form"?J5(n):tr.r(e)}var zs=typeof document>"u"?null:document;function Rh(e,n,a){var o=zs;if(o&&typeof n=="string"&&n){var h=ve(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),wh.has(h)||(wh.add(h),e={rel:e,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),We(n,"link",e),de(n),o.head.appendChild(n)))}}function ld(e){tr.D(e),Rh("dns-prefetch",e,null)}function ud(e,n){tr.C(e,n),Rh("preconnect",e,n)}function cd(e,n,a){tr.L(e,n,a);var o=zs;if(o&&e&&n){var h='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+ve(a.imageSizes)+'"]')):h+='[href="'+ve(e)+'"]';var d=h;switch(n){case"style":d=Ps(e);break;case"script":d=js(e)}Yn.has(d)||(e=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Yn.set(d,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(rl(d))||n==="script"&&o.querySelector(al(d))||(n=o.createElement("link"),We(n,"link",e),de(n),o.head.appendChild(n)))}}function hd(e,n){tr.m(e,n);var a=zs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=js(e)}if(!Yn.has(d)&&(e=D({rel:"modulepreload",href:e},n),Yn.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(d)))return}o=a.createElement("link"),We(o,"link",e),de(o),a.head.appendChild(o)}}}function fd(e,n,a){tr.S(e,n,a);var o=zs;if(o&&e){var h=Cr(o).hoistableStyles,d=Ps(e);n=n||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(rl(d)))E.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Yn.get(d))&&Z0(e,a);var x=_=o.createElement("link");de(x),We(x,"link",e),x._p=new Promise(function(U,$){x.onload=U,x.onerror=$}),x.addEventListener("load",function(){E.loading|=1}),x.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ju(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function dd(e,n){tr.X(e,n);var a=zs;if(a&&e){var o=Cr(a).hoistableScripts,h=js(e),d=o.get(h);d||(d=a.querySelector(al(h)),d||(e=D({src:e,async:!0},n),(n=Yn.get(h))&&J0(e,n),d=a.createElement("script"),de(d),We(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function pd(e,n){tr.M(e,n);var a=zs;if(a&&e){var o=Cr(a).hoistableScripts,h=js(e),d=o.get(h);d||(d=a.querySelector(al(h)),d||(e=D({src:e,async:!0,type:"module"},n),(n=Yn.get(h))&&J0(e,n),d=a.createElement("script"),de(d),We(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function xh(e,n,a,o){var h=(h=ne.current)?Zu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ps(a.href),a=Cr(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ps(a.href);var d=Cr(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(rl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Yn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yn.set(e,a),d||md(h,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=js(a),a=Cr(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ps(e){return'href="'+ve(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function Dh(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function md(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),We(n,"link",a),de(n),e.head.appendChild(n))}function js(e){return'[src="'+ve(e)+'"]'}function al(e){return"script[async]"+e}function Mh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,de(o),o;var h=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),de(o),We(o,"style",h),Ju(o,a.precedence,e),n.instance=o;case"stylesheet":h=Ps(a.href);var d=e.querySelector(rl(h));if(d)return n.state.loading|=4,n.instance=d,de(d),d;o=Dh(a),(h=Yn.get(h))&&Z0(o,h),d=(e.ownerDocument||e).createElement("link"),de(d);var _=d;return _._p=new Promise(function(E,x){_.onload=E,_.onerror=x}),We(d,"link",o),n.state.loading|=4,Ju(d,a.precedence,e),n.instance=d;case"script":return d=js(a.src),(h=e.querySelector(al(d)))?(n.instance=h,de(h),h):(o=a,(h=Yn.get(d))&&(o=D({},a),J0(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),de(h),We(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ju(o,a.precedence,e));return n.instance}function Ju(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Z0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function J0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function Ih(e,n,a){if(tc===null){var o=new Map,h=tc=new Map;h.set(a,o)}else h=tc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[vr]||d[je]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=e+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function Nh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gd(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var sl=null;function yd(){}function vd(e,n,a){if(sl===null)throw Error(s(475));var o=sl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Ps(a.href),d=e.querySelector(rl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ec.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,de(d);return}d=e.ownerDocument||e,a=Dh(a),(h=Yn.get(h))&&Z0(a,h),d=d.createElement("link"),de(d);var _=d;_._p=new Promise(function(E,x){_.onload=E,_.onerror=x}),We(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ec.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function _d(){if(sl===null)throw Error(s(475));var e=sl;return e.stylesheets&&e.count===0&&t4(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&t4(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)t4(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function t4(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Cd,e),nc=null,ec.call(e))}function Cd(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var o=a.get(null);else{a=new Map,nc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=n.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=ec.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var ol={$$typeof:I,Provider:null,Consumer:null,_currentValue:Rt,_currentValue2:Rt,_threadCount:0};function Ed(e,n,a,o,h,d,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=es(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.hiddenUpdates=es(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Oh(e,n,a,o,h,d,_,E,x,U,$,tt){return e=new Ed(e,n,a,_,E,x,U,tt),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),e.current=d,d.stateNode=e,n=N1(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},f0(d),e}function Lh(e){return e?(e=vs,e):vs}function kh(e,n,a,o,h,d){h=Lh(h),o.context===null?o.context=h:o.pendingContext=h,o=Vr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Or(e,o,n),a!==null&&(fn(a,e,n),Fo(a,e,n))}function Uh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function e4(e,n){Uh(e,n),(e=e.alternate)&&Uh(e,n)}function zh(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&fn(n,e,67108864),e4(e,67108864)}}var ic=!0;function Td(e,n,a,o){var h=b.T;b.T=null;var d=ut.p;try{ut.p=2,n4(e,n,a,o)}finally{ut.p=d,b.T=h}}function Ad(e,n,a,o){var h=b.T;b.T=null;var d=ut.p;try{ut.p=8,n4(e,n,a,o)}finally{ut.p=d,b.T=h}}function n4(e,n,a,o){if(ic){var h=i4(o);if(h===null)F0(e,n,o,rc,a),jh(e,o);else if(bd(h,e,n,a,o))o.stopPropagation();else if(jh(e,o),n&4&&-1<Sd.indexOf(e)){for(;h!==null;){var d=Ni(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Xn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var x=1<<31-ln(_);E.entanglements[1]|=x,_&=~x}vi(d),(me&6)===0&&(Bu=mn()+500,el(0))}}break;case 13:E=wr(d,2),E!==null&&fn(E,d,2),Fu(),e4(d,2)}if(d=i4(o),d===null&&F0(e,n,o,rc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else F0(e,n,o,null,a)}}function i4(e){return e=ss(e),r4(e)}var rc=null;function r4(e){if(rc=null,e=Wn(e),e!==null){var n=dt(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=Vt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function Ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hl()){case Me:return 2;case Pe:return 8;case Mi:case Fl:return 32;case lo:return 268435456;default:return 32}default:return 32}}var a4=!1,Br=null,qr=null,Hr=null,ll=new Map,ul=new Map,Fr=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jh(e,n){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function cl(e,n,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},n!==null&&(n=Ni(n),n!==null&&zh(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function bd(e,n,a,o,h){switch(n){case"focusin":return Br=cl(Br,e,n,a,o,h),!0;case"dragenter":return qr=cl(qr,e,n,a,o,h),!0;case"mouseover":return Hr=cl(Hr,e,n,a,o,h),!0;case"pointerover":var d=h.pointerId;return ll.set(d,cl(ll.get(d)||null,e,n,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,ul.set(d,cl(ul.get(d)||null,e,n,a,o,h)),!0}return!1}function Bh(e){var n=Wn(e.target);if(n!==null){var a=dt(n);if(a!==null){if(n=a.tag,n===13){if(n=Vt(a),n!==null){e.blockedOn=n,yr(e.priority,function(){if(a.tag===13){var o=Dn(),h=wr(a,o);h!==null&&fn(h,a,o),e4(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=i4(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);kn=o,a.target.dispatchEvent(o),kn=null}else return n=Ni(a),n!==null&&zh(n),e.blockedOn=a,!1;n.shift()}return!0}function qh(e,n,a){ac(e)&&a.delete(n)}function wd(){a4=!1,Br!==null&&ac(Br)&&(Br=null),qr!==null&&ac(qr)&&(qr=null),Hr!==null&&ac(Hr)&&(Hr=null),ll.forEach(qh),ul.forEach(qh)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,a4||(a4=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,wd)))}var oc=null;function Hh(e){oc!==e&&(oc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(r4(o||a)===null)continue;break}var d=Ni(a);d!==null&&(e.splice(n,3),n-=3,Y1(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function hl(e){function n(x){return sc(x,e)}Br!==null&&sc(Br,e),qr!==null&&sc(qr,e),Hr!==null&&sc(Hr,e),ll.forEach(n),ul.forEach(n);for(var a=0;a<Fr.length;a++){var o=Fr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fr.length&&(a=Fr[0],a.blockedOn===null);)Bh(a),a.blockedOn===null&&Fr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[Ie]||null;if(typeof d=="function")_||Hh(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Ie]||null)E=_.formAction;else if(r4(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),Hh(a)}}}function s4(e){this._internalRoot=e}lc.prototype.render=s4.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Dn();kh(a,o,e,n,null,null)},lc.prototype.unmount=s4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ls(),kh(e.current,2,null,e,null,null),Fu(),n[Ii]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$l();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fr.length&&n!==0&&n<Fr[a].priority;a++);Fr.splice(a,0,e),a===0&&Bh(e)}};var Fh=t.version;if(Fh!=="19.0.0")throw Error(s(527,Fh,"19.0.0"));ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=et(n),e=e!==null?pt(e):null,e=e===null?null:e.stateNode,e};var Rd={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:Wn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{hr=uc.inject(Rd),en=uc}catch{}}return dl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",h=o3,d=l3,_=u3,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Oh(e,1,!1,null,null,a,o,h,d,_,E,null),e[Ii]=n.current,H0(e.nodeType===8?e.parentNode:e),new s4(n)},dl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=o3,_=l3,E=u3,x=null,U=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(U=a.formState)),n=Oh(e,1,!0,n,a??null,o,h,d,_,E,x,U),n.context=Lh(null),a=n.current,o=Dn(),h=Vr(o),h.callback=null,Or(a,h,o),n.current.lanes=o,Ae(n,o),vi(n),e[Ii]=n.current,H0(e),new lc(n)},dl.version="19.0.0",dl}var tf;function Ud(){if(tf)return u4.exports;tf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),u4.exports=kd(),u4.exports}var zd=Ud();const Pd=b6(zd);var pl={},ef;function jd(){if(ef)return pl;ef=1,Object.defineProperty(pl,"__esModule",{value:!0}),pl.parse=f,pl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function f(T,I){const V=new c,Q=T.length;if(Q<2)return V;const z=(I==null?void 0:I.decode)||C;let F=0;do{const X=T.indexOf("=",F);if(X===-1)break;const J=T.indexOf(";",F),ct=J===-1?Q:J;if(X>ct){F=T.lastIndexOf(";",X-1)+1;continue}const st=p(T,F,X),mt=m(T,X,st),N=T.slice(st,mt);if(V[N]===void 0){let R=p(T,X+1,ct),b=m(T,ct,R);const D=z(T.slice(R,b));V[N]=D}F=ct+1}while(F<Q);return V}function p(T,I,V){do{const Q=T.charCodeAt(I);if(Q!==32&&Q!==9)return I}while(++I<V);return V}function m(T,I,V){for(;I>V;){const Q=T.charCodeAt(--I);if(Q!==32&&Q!==9)return I+1}return V}function y(T,I,V){const Q=(V==null?void 0:V.encode)||encodeURIComponent;if(!r.test(T))throw new TypeError(`argument name is invalid: ${T}`);const z=Q(I);if(!t.test(z))throw new TypeError(`argument val is invalid: ${I}`);let F=T+"="+z;if(!V)return F;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);F+="; Max-Age="+V.maxAge}if(V.domain){if(!i.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);F+="; Domain="+V.domain}if(V.path){if(!s.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);F+="; Path="+V.path}if(V.expires){if(!S(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);F+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(F+="; HttpOnly"),V.secure&&(F+="; Secure"),V.partitioned&&(F+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":F+="; Priority=Low";break;case"medium":F+="; Priority=Medium";break;case"high":F+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":F+="; SameSite=Strict";break;case"lax":F+="; SameSite=Lax";break;case"none":F+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return F}function C(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function S(T){return l.call(T)==="[object Date]"}return pl}jd();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nf="popstate";function Bd(r={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=Xa(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),w4("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,y=m.indexOf("#");p=y===-1?m:m.slice(0,y)}return p+"#"+(typeof c=="string"?c:bl(c))}function s(l,c){$n(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Hd(t,i,s,r)}function he(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function $n(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qd(){return Math.random().toString(36).substring(2,10)}function rf(r,t){return{usr:r.state,key:r.key,idx:t}}function w4(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Xa(t):t,state:i,key:t&&t.key||s||qd()}}function bl({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Xa(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function Hd(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,y=C();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function C(){return(f.state||{idx:null}).idx}function S(){p="POP";let z=C(),F=z==null?null:z-y;y=z,m&&m({action:p,location:Q.location,delta:F})}function T(z,F){p="PUSH";let X=w4(Q.location,z,F);i&&i(X,z),y=C()+1;let J=rf(X,y),ct=Q.createHref(X);try{f.pushState(J,"",ct)}catch(st){if(st instanceof DOMException&&st.name==="DataCloneError")throw st;l.location.assign(ct)}c&&m&&m({action:p,location:Q.location,delta:1})}function I(z,F){p="REPLACE";let X=w4(Q.location,z,F);i&&i(X,z),y=C();let J=rf(X,y),ct=Q.createHref(X);f.replaceState(J,"",ct),c&&m&&m({action:p,location:Q.location,delta:0})}function V(z){let F=l.location.origin!=="null"?l.location.origin:l.location.href,X=typeof z=="string"?z:bl(z);return X=X.replace(/ $/,"%20"),he(F,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,F)}let Q={get action(){return p},get location(){return r(l,f)},listen(z){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(nf,S),m=z,()=>{l.removeEventListener(nf,S),m=null}},createHref(z){return t(l,z)},createURL:V,encodeLocation(z){let F=V(z);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:I,go(z){return f.go(z)}};return Q}function w6(r,t,i="/"){return Fd(r,t,i,!1)}function Fd(r,t,i,s){let l=typeof t=="string"?Xa(t):t,c=rr(l.pathname||"/",i);if(c==null)return null;let f=R6(r);Gd(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let y=np(c);p=tp(f[m],y,s)}return p}function R6(r,t=[],i=[],s=""){let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(he(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let y=nr([s,m.relativePath]),C=i.concat(m);c.children&&c.children.length>0&&(he(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),R6(c.children,t,C,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:Zd(y,c.index),routesMeta:C})};return r.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of x6(c.path))l(c,f,m)}),t}function x6(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=x6(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Gd(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:Jd(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Qd=/^:[\w-]+$/,Kd=3,Yd=2,$d=1,Xd=10,Wd=-2,af=r=>r==="*";function Zd(r,t){let i=r.split("/"),s=i.length;return i.some(af)&&(s+=Wd),t&&(s+=Yd),i.filter(l=>!af(l)).reduce((l,c)=>l+(Qd.test(c)?Kd:c===""?$d:Xd),s)}function Jd(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function tp(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,C=c==="/"?t:t.slice(c.length)||"/",S=bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},C),T=m.route;if(!S&&y&&i&&!s[s.length-1].route.index&&(S=bc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},C)),!S)return null;Object.assign(l,S.params),f.push({params:l,pathname:nr([c,S.pathname]),pathnameBase:sp(nr([c,S.pathnameBase])),route:T}),S.pathnameBase!=="/"&&(c=nr([c,S.pathnameBase]))}return f}function bc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=ep(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((y,{paramName:C,isOptional:S},T)=>{if(C==="*"){let V=p[T]||"";f=c.slice(0,c.length-V.length).replace(/(.)\/+$/,"$1")}const I=p[T];return S&&!I?y[C]=void 0:y[C]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function ep(r,t=!1,i=!0){$n(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function np(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $n(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function rr(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function ip(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Xa(r):r;return{pathname:i?i.startsWith("/")?i:rp(i,t):t,search:op(s),hash:lp(l)}}function rp(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function d4(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ap(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function W4(r){let t=ap(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Z4(r,t,i,s=!1){let l;typeof r=="string"?l=Xa(r):(l={...r},he(!l.pathname||!l.pathname.includes("?"),d4("?","pathname","search",l)),he(!l.pathname||!l.pathname.includes("#"),d4("#","pathname","hash",l)),he(!l.search||!l.search.includes("#"),d4("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let S=t.length-1;if(!s&&f.startsWith("..")){let T=f.split("/");for(;T[0]==="..";)T.shift(),S-=1;l.pathname=T.join("/")}p=S>=0?t[S]:"/"}let m=ip(l,p),y=f&&f!=="/"&&f.endsWith("/"),C=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(y||C)&&(m.pathname+="/"),m}var nr=r=>r.join("/").replace(/\/\/+/g,"/"),sp=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),op=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lp=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function up(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var D6=["POST","PUT","PATCH","DELETE"];new Set(D6);var cp=["GET",...D6];new Set(cp);var eo=q.createContext(null);eo.displayName="DataRouter";var qc=q.createContext(null);qc.displayName="DataRouterState";var M6=q.createContext({isTransitioning:!1});M6.displayName="ViewTransition";var hp=q.createContext(new Map);hp.displayName="Fetchers";var fp=q.createContext(null);fp.displayName="Await";var ni=q.createContext(null);ni.displayName="Navigation";var Vl=q.createContext(null);Vl.displayName="Location";var xi=q.createContext({outlet:null,matches:[],isDataRoute:!1});xi.displayName="Route";var J4=q.createContext(null);J4.displayName="RouteError";function dp(r,{relative:t}={}){he(no(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=q.useContext(ni),{hash:l,pathname:c,search:f}=Ol(r,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:nr([i,c])),s.createHref({pathname:p,search:f,hash:l})}function no(){return q.useContext(Vl)!=null}function oa(){return he(no(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Vl).location}var I6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function N6(r){q.useContext(ni).static||q.useLayoutEffect(r)}function io(){let{isDataRoute:r}=q.useContext(xi);return r?wp():pp()}function pp(){he(no(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(eo),{basename:t,navigator:i}=q.useContext(ni),{matches:s}=q.useContext(xi),{pathname:l}=oa(),c=JSON.stringify(W4(s)),f=q.useRef(!1);return N6(()=>{f.current=!0}),q.useCallback((m,y={})=>{if($n(f.current,I6),!f.current)return;if(typeof m=="number"){i.go(m);return}let C=Z4(m,JSON.parse(c),l,y.relative==="path");r==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:nr([t,C.pathname])),(y.replace?i.replace:i.push)(C,y.state,y)},[t,i,c,l,r])}q.createContext(null);function Ol(r,{relative:t}={}){let{matches:i}=q.useContext(xi),{pathname:s}=oa(),l=JSON.stringify(W4(i));return q.useMemo(()=>Z4(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function mp(r,t){return V6(r,t)}function V6(r,t,i,s){var X;he(no(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=q.useContext(ni),{matches:f}=q.useContext(xi),p=f[f.length-1],m=p?p.params:{},y=p?p.pathname:"/",C=p?p.pathnameBase:"/",S=p&&p.route;{let J=S&&S.path||"";O6(y,!S||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let T=oa(),I;if(t){let J=typeof t=="string"?Xa(t):t;he(C==="/"||((X=J.pathname)==null?void 0:X.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${J.pathname}" was given in the \`location\` prop.`),I=J}else I=T;let V=I.pathname||"/",Q=V;if(C!=="/"){let J=C.replace(/^\//,"").split("/");Q="/"+V.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=!c&&i&&i.matches&&i.matches.length>0?i.matches:w6(r,{pathname:Q});$n(S||z!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),$n(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Cp(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},m,J.params),pathname:nr([C,l.encodeLocation?l.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?C:nr([C,l.encodeLocation?l.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),f,i,s);return t&&F?q.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},F):F}function gp(){let r=bp(),t=up(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),i?q.createElement("pre",{style:l},i):null,f)}var yp=q.createElement(gp,null),vp=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?q.createElement(xi.Provider,{value:this.props.routeContext},q.createElement(J4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _p({routeContext:r,match:t,children:i}){let s=q.useContext(eo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(xi.Provider,{value:r},i)}function Cp(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);he(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(i)for(let m=0;m<l.length;m++){let y=l[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=m),y.route.id){let{loaderData:C,errors:S}=i,T=y.route.loader&&!C.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||T){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,y,C)=>{let S,T=!1,I=null,V=null;i&&(S=c&&y.route.id?c[y.route.id]:void 0,I=y.route.errorElement||yp,f&&(p<0&&C===0?(O6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,V=null):p===C&&(T=!0,V=y.route.hydrateFallbackElement||null)));let Q=t.concat(l.slice(0,C+1)),z=()=>{let F;return S?F=I:T?F=V:y.route.Component?F=q.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=m,q.createElement(_p,{match:y,routeContext:{outlet:m,matches:Q,isDataRoute:i!=null},children:F})};return i&&(y.route.ErrorBoundary||y.route.errorElement||C===0)?q.createElement(vp,{location:i.location,revalidation:i.revalidation,component:I,error:S,children:z(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):z()},null)}function t2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(r){let t=q.useContext(eo);return he(t,t2(r)),t}function Tp(r){let t=q.useContext(qc);return he(t,t2(r)),t}function Ap(r){let t=q.useContext(xi);return he(t,t2(r)),t}function e2(r){let t=Ap(r),i=t.matches[t.matches.length-1];return he(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Sp(){return e2("useRouteId")}function bp(){var s;let r=q.useContext(J4),t=Tp("useRouteError"),i=e2("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function wp(){let{router:r}=Ep("useNavigate"),t=e2("useNavigate"),i=q.useRef(!1);return N6(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{$n(i.current,I6),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var sf={};function O6(r,t,i){!t&&!sf[r]&&(sf[r]=!0,$n(!1,i))}q.memo(Rp);function Rp({routes:r,future:t,state:i}){return V6(r,void 0,i,t)}function xp({to:r,replace:t,state:i,relative:s}){he(no(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=q.useContext(ni);$n(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=q.useContext(xi),{pathname:f}=oa(),p=io(),m=Z4(r,W4(c),f,s==="path"),y=JSON.stringify(m);return q.useEffect(()=>{p(JSON.parse(y),{replace:t,state:i,relative:s})},[p,y,s,t,i]),null}function er(r){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dp({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){he(!no(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Xa(i));let{pathname:m="/",search:y="",hash:C="",state:S=null,key:T="default"}=i,I=q.useMemo(()=>{let V=rr(m,f);return V==null?null:{location:{pathname:V,search:y,hash:C,state:S,key:T},navigationType:s}},[f,m,y,C,S,T,s]);return $n(I!=null,`<Router basename="${f}"> is not able to match the URL "${m}${y}${C}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:q.createElement(ni.Provider,{value:p},q.createElement(Vl.Provider,{children:t,value:I}))}function Mp({children:r,location:t}){return mp(R4(r),t)}function R4(r,t=[]){let i=[];return q.Children.forEach(r,(s,l)=>{if(!q.isValidElement(s))return;let c=[...t,l];if(s.type===q.Fragment){i.push.apply(i,R4(s.props.children,c));return}he(s.type===er,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=R4(s.props.children,c)),i.push(f)}),i}var gc="get",yc="application/x-www-form-urlencoded";function Hc(r){return r!=null&&typeof r.tagName=="string"}function Ip(r){return Hc(r)&&r.tagName.toLowerCase()==="button"}function Np(r){return Hc(r)&&r.tagName.toLowerCase()==="form"}function Vp(r){return Hc(r)&&r.tagName.toLowerCase()==="input"}function Op(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Lp(r,t){return r.button===0&&(!t||t==="_self")&&!Op(r)}var cc=null;function kp(){if(cc===null)try{new FormData(document.createElement("form"),0),cc=!1}catch{cc=!0}return cc}var Up=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function p4(r){return r!=null&&!Up.has(r)?($n(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yc}"`),null):r}function zp(r,t){let i,s,l,c,f;if(Np(r)){let p=r.getAttribute("action");s=p?rr(p,t):null,i=r.getAttribute("method")||gc,l=p4(r.getAttribute("enctype"))||yc,c=new FormData(r)}else if(Ip(r)||Vp(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?rr(m,t):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||gc,l=p4(r.getAttribute("formenctype"))||p4(p.getAttribute("enctype"))||yc,c=new FormData(p,r),!kp()){let{name:y,type:C,value:S}=r;if(C==="image"){let T=y?`${y}.`:"";c.append(`${T}x`,"0"),c.append(`${T}y`,"0")}else y&&c.append(y,S)}}else{if(Hc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=gc,s=null,l=yc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function n2(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Pp(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jp(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Bp(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await Pp(c,i);return f.links?f.links():[]}return[]}));return Gp(s.flat(1).filter(jp).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function of(r,t,i,s,l,c){let f=(m,y)=>i[y]?m.route.id!==i[y].route.id:!0,p=(m,y)=>{var C;return i[y].pathname!==m.pathname||((C=i[y].route.path)==null?void 0:C.endsWith("*"))&&i[y].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,y)=>f(m,y)||p(m,y)):c==="data"?t.filter((m,y)=>{var S;let C=s.routes[m.route.id];if(!C||!C.hasLoader)return!1;if(f(m,y)||p(m,y))return!0;if(m.route.shouldRevalidate){let T=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function qp(r,t,{includeHydrateFallback:i}={}){return Hp(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Hp(r){return[...new Set(r)]}function Fp(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function Gp(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(Fp(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Qp(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&rr(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function L6(){let r=q.useContext(eo);return n2(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Kp(){let r=q.useContext(qc);return n2(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var i2=q.createContext(void 0);i2.displayName="FrameworkContext";function k6(){let r=q.useContext(i2);return n2(r,"You must render this element inside a <HydratedRouter> element"),r}function Yp(r,t){let i=q.useContext(i2),[s,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:y,onMouseLeave:C,onTouchStart:S}=t,T=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let Q=F=>{F.forEach(X=>{f(X.isIntersecting)})},z=new IntersectionObserver(Q,{threshold:.5});return T.current&&z.observe(T.current),()=>{z.disconnect()}}},[r]),q.useEffect(()=>{if(s){let Q=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Q)}}},[s]);let I=()=>{l(!0)},V=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,T,{}]:[c,T,{onFocus:ml(p,I),onBlur:ml(m,V),onMouseEnter:ml(y,I),onMouseLeave:ml(C,V),onTouchStart:ml(S,I)}]:[!1,T,{}]}function ml(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function $p({page:r,...t}){let{router:i}=L6(),s=q.useMemo(()=>w6(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?q.createElement(Wp,{page:r,matches:s,...t}):null}function Xp(r){let{manifest:t,routeModules:i}=k6(),[s,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return Bp(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function Wp({page:r,matches:t,...i}){let s=oa(),{manifest:l,routeModules:c}=k6(),{basename:f}=L6(),{loaderData:p,matches:m}=Kp(),y=q.useMemo(()=>of(r,t,m,l,s,"data"),[r,t,m,l,s]),C=q.useMemo(()=>of(r,t,m,l,s,"assets"),[r,t,m,l,s]),S=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let V=new Set,Q=!1;if(t.forEach(F=>{var J;let X=l.routes[F.route.id];!X||!X.hasLoader||(!y.some(ct=>ct.route.id===F.route.id)&&F.route.id in p&&((J=c[F.route.id])!=null&&J.shouldRevalidate)||X.hasClientLoader?Q=!0:V.add(F.route.id))}),V.size===0)return[];let z=Qp(r,f);return Q&&V.size>0&&z.searchParams.set("_routes",t.filter(F=>V.has(F.route.id)).map(F=>F.route.id).join(",")),[z.pathname+z.search]},[f,p,s,l,y,t,r,c]),T=q.useMemo(()=>qp(C,l),[C,l]),I=Xp(C);return q.createElement(q.Fragment,null,S.map(V=>q.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...i})),T.map(V=>q.createElement("link",{key:V,rel:"modulepreload",href:V,...i})),I.map(({key:V,link:Q})=>q.createElement("link",{key:V,...Q})))}function Zp(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var U6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{U6&&(window.__reactRouterVersion="7.3.0")}catch{}function Jp({basename:r,children:t,window:i}){let s=q.useRef();s.current==null&&(s.current=Bd({window:i,v5Compat:!0}));let l=s.current,[c,f]=q.useState({action:l.action,location:l.location}),p=q.useCallback(m=>{q.startTransition(()=>f(m))},[f]);return q.useLayoutEffect(()=>l.listen(p),[l,p]),q.createElement(Dp,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:l})}var z6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=q.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:y,preventScrollReset:C,viewTransition:S,...T},I){let{basename:V}=q.useContext(ni),Q=typeof y=="string"&&z6.test(y),z,F=!1;if(typeof y=="string"&&Q&&(z=y,U6))try{let b=new URL(window.location.href),D=y.startsWith("//")?new URL(b.protocol+y):new URL(y),O=rr(D.pathname,V);D.origin===b.origin&&O!=null?y=O+D.search+D.hash:F=!0}catch{$n(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=dp(y,{relative:l}),[J,ct,st]=Yp(s,T),mt=im(y,{replace:f,state:p,target:m,preventScrollReset:C,relative:l,viewTransition:S});function N(b){t&&t(b),b.defaultPrevented||mt(b)}let R=q.createElement("a",{...T,...st,href:z||X,onClick:F||c?t:N,ref:Zp(I,ct),target:m,"data-discover":!Q&&i==="render"?"true":void 0});return J&&!Q?q.createElement(q.Fragment,null,R,q.createElement($p,{page:X})):R});Qr.displayName="Link";var tm=q.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...y},C){let S=Ol(f,{relative:y.relative}),T=oa(),I=q.useContext(qc),{navigator:V,basename:Q}=q.useContext(ni),z=I!=null&&lm(S)&&p===!0,F=V.encodeLocation?V.encodeLocation(S).pathname:S.pathname,X=T.pathname,J=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(X=X.toLowerCase(),J=J?J.toLowerCase():null,F=F.toLowerCase()),J&&Q&&(J=rr(J,Q)||J);const ct=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let st=X===F||!l&&X.startsWith(F)&&X.charAt(ct)==="/",mt=J!=null&&(J===F||!l&&J.startsWith(F)&&J.charAt(F.length)==="/"),N={isActive:st,isPending:mt,isTransitioning:z},R=st?t:void 0,b;typeof s=="function"?b=s(N):b=[s,st?"active":null,mt?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(N):c;return q.createElement(Qr,{...y,"aria-current":R,className:b,ref:C,style:D,to:f,viewTransition:p},typeof m=="function"?m(N):m)});tm.displayName="NavLink";var em=q.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=gc,action:p,onSubmit:m,relative:y,preventScrollReset:C,viewTransition:S,...T},I)=>{let V=sm(),Q=om(p,{relative:y}),z=f.toLowerCase()==="get"?"get":"post",F=typeof p=="string"&&z6.test(p),X=J=>{if(m&&m(J),J.defaultPrevented)return;J.preventDefault();let ct=J.nativeEvent.submitter,st=(ct==null?void 0:ct.getAttribute("formmethod"))||f;V(ct||J.currentTarget,{fetcherKey:t,method:st,navigate:i,replace:l,state:c,relative:y,preventScrollReset:C,viewTransition:S})};return q.createElement("form",{ref:I,method:z,action:Q,onSubmit:s?m:X,...T,"data-discover":!F&&r==="render"?"true":void 0})});em.displayName="Form";function nm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P6(r){let t=q.useContext(eo);return he(t,nm(r)),t}function im(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=io(),m=oa(),y=Ol(r,{relative:c});return q.useCallback(C=>{if(Lp(C,t)){C.preventDefault();let S=i!==void 0?i:bl(m)===bl(y);p(r,{replace:S,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,p,y,i,s,t,r,l,c,f])}var rm=0,am=()=>`__${String(++rm)}__`;function sm(){let{router:r}=P6("useSubmit"),{basename:t}=q.useContext(ni),i=Sp();return q.useCallback(async(s,l={})=>{let{action:c,method:f,encType:p,formData:m,body:y}=zp(s,t);if(l.navigate===!1){let C=l.fetcherKey||am();await r.fetch(C,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:y,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:y,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function om(r,{relative:t}={}){let{basename:i}=q.useContext(ni),s=q.useContext(xi);he(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Ol(r||".",{relative:t})},f=oa();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(C=>C==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let C=p.toString();c.search=C?`?${C}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:nr([i,c.pathname])),bl(c)}function lm(r,t={}){let i=q.useContext(M6);he(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=P6("useViewTransitionState"),l=Ol(r,{relative:t.relative});if(!i.isTransitioning)return!1;let c=rr(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=rr(i.nextLocation.pathname,s)||i.nextLocation.pathname;return bc(l.pathname,f)!=null||bc(l.pathname,c)!=null}new TextEncoder;const j6=q.createContext(void 0),Wa=()=>{const r=q.useContext(j6);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},um=({children:r})=>{const[t,i]=q.useState(null),[s,l]=q.useState(!1);q.useEffect(()=>{const m=localStorage.getItem("currentUser"),y=localStorage.getItem("isAdmin");console.log("AuthContext: Loading saved user from localStorage:",m),m&&(i(m),l(y==="true"),console.log("AuthContext: User restored:",m,"Admin:",y==="true"))},[]);const p={currentUser:t,isAdmin:s,login:(m,y=!1)=>{console.log("AuthContext: Logging in user:",m,"Admin:",y),i(m),l(y),localStorage.setItem("currentUser",m),localStorage.setItem("isAdmin",y.toString()),console.log("AuthContext: User saved to localStorage:",m)},logout:()=>{console.log("AuthContext: Logging out user"),i(null),l(!1),localStorage.removeItem("currentUser"),localStorage.removeItem("isAdmin")}};return w.jsx(j6.Provider,{value:p,children:r})},$r=({bgcolor:r="rgb(94, 136, 94, 0)",boxShadow:t=!1})=>{const{currentUser:i,isAdmin:s}=Wa();return w.jsxs("div",{id:"navbar",style:{backgroundColor:r,boxShadow:t?"0 4px 8px -2px #222":"none"},children:[w.jsx("div",{className:"link",id:"homepage",children:w.jsx(Qr,{className:"a",to:"/HBWGreentrails/",children:"Home"})}),w.jsx("div",{className:"link",id:"volunteer",children:w.jsx(Qr,{className:"a",to:"/volenterpage/",children:"Volunteer!!"})}),w.jsx("div",{className:"link",id:"leaderboard",children:w.jsx(Qr,{className:"a",to:"/leaderboard/",children:"Leaderboards"})}),w.jsx("div",{className:"link",id:"santa",children:w.jsx(Qr,{className:"a",to:"/santa/",children:"🎅 Santa"})}),s&&w.jsx("div",{className:"link",id:"adddata",children:w.jsx(Qr,{className:"a",to:"/adddata/",children:"Add Event"})}),w.jsx("div",{className:"link",id:"Signup",children:w.jsx(Qr,{className:"a",to:"/signup/",children:i?`👤 ${i}`:"Sign up"})})]})},cm=""+new URL("groupme-DgGEjEd7.png",import.meta.url).href;function hm(r){const t=[],i=new Date;i.setHours(0,0,0,0);let s=new Date(r);for(s.setHours(0,0,0,0);s<i;)s.setDate(s.getDate()+14);r=s;for(let l=0;l<3;l++){const c=new Date(r);c.setDate(r.getDate()+l*14),t.push({date:c,id:l+1})}return t}function fm({nextMeetingDate:r}){const t=hm(r);return w.jsx("div",{children:t.map(i=>w.jsxs("p",{children:[i.date.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})," ","in Hang's room (510) at lunch!"]},i.id))})}const lf=()=>w.jsxs("div",{style:{backgroundColor:"rgb(17, 69, 59)"},children:[w.jsx($r,{bgcolor:"#00000000",boxShadow:!1}),w.jsx("div",{className:"header",children:w.jsx("h1",{className:"first",children:"HBW Green Trails Club"})}),w.jsxs("div",{className:"importantinfo",children:[w.jsxs("div",{className:"groupme",children:[w.jsx("a",{href:"https://groupme.com/join_group/103922254/4v3j7TI7",children:w.jsx("img",{src:cm,alt:"Join our GroupMe!",width:"200px"})}),w.jsx("p",{children:"Click here to join our GroupMe for updates on meetings and events!!"})]}),w.jsxs("div",{className:"nextmeeting",children:[w.jsx("h2",{children:"Upcoming Meetings:"}),w.jsx(fm,{nextMeetingDate:new Date("2025-12-04T12:35:00")})]})]})]}),uf=()=>w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 100 300 500",width:"100%",height:"100%",children:[w.jsx("rect",{x:"96.935",y:"583.508",width:"103.723",height:"89.44",style:{fill:"rgb(92, 60, 36)",stroke:"rgba(0, 0, 0, 0)"}}),w.jsx("path",{d:"M 151.753 331.446 L 296.742 595.399 L 6.763 595.399 L 151.753 331.446 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),w.jsx("path",{d:"M 151.812 229.395 L 261.692 461.009 L 41.931 461.009 L 151.812 229.395 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),w.jsx("path",{d:"M 152.135 182.123 L 223.661 334.201 L 80.609 334.201 L 152.135 182.123 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}})]}),cf=["#FF69B4","#FF1493","#FFB6C1","#FF69B4","#ff6f6f","#d161f7","#8a61ff","#61d7ff","#61ff8a","#ff6161","#ff61d7","#d7ff61"];function dm({children:r,flowers:t=0,grass:i=200,tileSize:s=0}){const l=q.useRef(null),c=q.useRef(null);return q.useEffect(()=>{const f=l.current,p=c.current;if(!f||!p)return;const m=f.getContext("2d");if(!m)return;let y=0,C=0;function S(){const N=p.getBoundingClientRect(),R=window.devicePixelRatio||1;y=Math.max(1,Math.floor(N.width)),C=Math.max(1,Math.floor(N.height)),f.width=Math.max(1,Math.floor(N.width*R)),f.height=Math.max(1,Math.floor(N.height*R)),f.style.width=`${N.width}px`,f.style.height=`${N.height}px`,m.setTransform(R,0,0,R,0,0),st()}function T(N,R,b,D){m.save(),m.translate(N,R);const O=Math.random()*Math.PI*2;m.rotate(O),m.fillStyle=D,m.restore()}function I(N){for(let R=0;R<N;R++){const b=Math.random()*(y+100)-50,D=Math.random()*(C+100)-50,O=Math.min(Math.max(Math.random()*26+4,4),30);T(b,D,O,`rgb(0, ${Math.floor(Math.random()*100+100)}, 0)`)}}function V(N,R,b,D,O,P){m.save(),m.translate(N,R),m.rotate(O),m.beginPath(),m.moveTo(0,0),m.lineTo(-D/2,-b),m.lineTo(D/2,-b),m.closePath(),m.fillStyle=P,m.fill(),m.restore()}function Q(N,R,b){for(let D=0;D<b;D++){const O=(Math.random()-.5)*8,P=(Math.random()-.5)*8,M=10+Math.random()*8,Wt=2+Math.random()*1.5,le=-.2+Math.random()*.4,it=["#7CB342","#8BC34A","#689F38","#76B041"],ot=it[Math.floor(Math.random()*it.length)];V(N+O,R+P,M,Wt,le,ot)}}function z(N){for(let R=0;R<N;R++){const b=Math.random()*y,D=Math.random()*C,O=Math.floor(3+Math.random()*4);Q(b,D,O)}}function F(N,R,b){m.save(),m.translate(N,R),m.fillStyle=cf[Math.floor(Math.random()*cf.length)];const D=5;for(let O=0;O<D;O++){const P=O*(2*Math.PI/D),M=Math.cos(P)*b,Wt=Math.sin(P)*b;m.beginPath(),m.arc(M,Wt,b/2,0,2*Math.PI),m.fill()}m.beginPath(),m.arc(0,0,b/2,0,2*Math.PI),m.fill(),m.restore()}function X(N){for(let R=0;R<N;R++)F(Math.random()*y,Math.random()*C,4+Math.random()*4)}function J(){m.beginPath(),m.moveTo(y/2+30,5),m.lineTo(y/2-30,5),m.lineTo(y/2,40),m.stroke(),m.closePath(),m.fill()}function ct(N,R){z(R),X(N)}function st(){m.clearRect(0,0,y,C),ct(t,i),J(),I(8)}S();const mt=new ResizeObserver(S);return mt.observe(p),()=>{mt.disconnect()}},[t,i,s]),w.jsxs("div",{ref:c,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[w.jsx("canvas",{ref:l,style:{position:"absolute",left:0,top:0,zIndex:0,pointerEvents:"none"}}),w.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}const pm=()=>w.jsxs("div",{children:[w.jsx("div",{id:"tree1",children:w.jsx(uf,{})}),w.jsx("div",{id:"tree2",children:w.jsx(uf,{})}),w.jsx("footer",{children:w.jsx(dm,{children:w.jsx("div",{id:"road"})})})]}),mm=()=>w.jsx("div",{children:w.jsx("footer",{})}),vc=()=>w.jsx(pm,{}),gm=()=>w.jsx("div",{id:"fullroad"}),Ga=({message:r,shadow:t})=>w.jsx("header",{className:"App-header",children:w.jsx("h1",{id:"GreenTrails",style:{textShadow:t?"2px 2px black":"none",color:"rgb(255, 255, 255, 1)"},children:r})}),ym=()=>{};var hf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},vm=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],f=r[i++],p=r[i++],m=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(m>>10)),t[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[i++],f=r[i++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},q6={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,p=f?r[l+1]:0,m=l+2<r.length,y=m?r[l+2]:0,C=c>>2,S=(c&3)<<4|p>>4;let T=(p&15)<<2|y>>6,I=y&63;m||(I=64,f||(T=64)),s.push(i[C],i[S],i[T],i[I])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(B6(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):vm(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const S=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||p==null||y==null||S==null)throw new _m;const T=c<<2|p>>4;if(s.push(T),y!==64){const I=p<<4&240|y>>2;if(s.push(I),S!==64){const V=y<<6&192|S;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cm=function(r){const t=B6(r);return q6.encodeByteArray(t,!0)},wc=function(r){return Cm(r).replace(/\./g,"")},Em=function(r){try{return q6.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=()=>Tm().__FIREBASE_DEFAULTS__,Sm=()=>{if(typeof process>"u"||typeof hf>"u")return;const r=hf.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},bm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Em(r[1]);return t&&JSON.parse(t)},r2=()=>{try{return ym()||Am()||Sm()||bm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},wm=r=>{var t,i;return(i=(t=r2())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},Rm=r=>{const t=wm(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),s]:[t.substring(0,i),s]},H6=()=>{var r;return(r=r2())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[wc(JSON.stringify(i)),wc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){var r;const t=(r=r2())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Vm(){return!Im()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F6(){try{return typeof indexedDB=="object"}catch{return!1}}function G6(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}function Om(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="FirebaseError";class la extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=Lm,Object.setPrototypeOf(this,la.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fc.prototype.create)}}class Fc{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?km(c,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new la(l,p,s)}}function km(r,t){return r.replace(Um,(i,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const Um=/\{\$([^}]+)}/g;function Qs(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const l of i){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(ff(c)&&ff(f)){if(!Qs(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function ff(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=1e3,Pm=2,jm=4*60*60*1e3,Bm=.5;function df(r,t=zm,i=Pm){const s=t*Math.pow(i,r),l=Math.round(Bm*s*(Math.random()-.5)*2);return Math.min(jm,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r){return r&&r._delegate?r._delegate:r}class ar{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new xm;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fm(t))try{this.getOrInitializeService({instanceIdentifier:qa})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=qa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qa){return this.instances.has(t)}getOptions(t=qa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(l)}return l}onInit(t,i){var s;const l=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hm(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=qa){return this.component?this.component.multipleInstances?t:qa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hm(r){return r===qa?void 0:r}function Fm(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new qm(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ht||(Ht={}));const Qm={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},Km=Ht.INFO,Ym={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},$m=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Ym[t];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class a2{constructor(t){this.name=t,this._logLevel=Km,this._logHandler=$m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...t),this._logHandler(this,Ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...t),this._logHandler(this,Ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...t),this._logHandler(this,Ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...t),this._logHandler(this,Ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...t),this._logHandler(this,Ht.ERROR,...t)}}const Xm=(r,t)=>t.some(i=>r instanceof i);let pf,mf;function Wm(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zm(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q6=new WeakMap,x4=new WeakMap,K6=new WeakMap,m4=new WeakMap,s2=new WeakMap;function Jm(r){const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(Xr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Q6.set(i,r)}).catch(()=>{}),s2.set(t,r),t}function tg(r){if(x4.has(r))return;const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});x4.set(r,t)}let D4={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return x4.get(r);if(t==="objectStoreNames")return r.objectStoreNames||K6.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Xr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function eg(r){D4=r(D4)}function ng(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(g4(this),t,...i);return K6.set(s,t.sort?t.sort():[t]),Xr(s)}:Zm().includes(r)?function(...t){return r.apply(g4(this),t),Xr(Q6.get(this))}:function(...t){return Xr(r.apply(g4(this),t))}}function ig(r){return typeof r=="function"?ng(r):(r instanceof IDBTransaction&&tg(r),Xm(r,Wm())?new Proxy(r,D4):r)}function Xr(r){if(r instanceof IDBRequest)return Jm(r);if(m4.has(r))return m4.get(r);const t=ig(r);return t!==r&&(m4.set(r,t),s2.set(t,r)),t}const g4=r=>s2.get(r);function Y6(r,t,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),p=Xr(f);return s&&f.addEventListener("upgradeneeded",m=>{s(Xr(f.result),m.oldVersion,m.newVersion,Xr(f.transaction),m)}),i&&f.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const rg=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],y4=new Map;function gf(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(y4.get(t))return y4.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,l=ag.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||rg.includes(i)))return;const c=async function(f,...p){const m=this.transaction(f,l?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[i](...p),l&&m.done]))[0]};return y4.set(t,c),c}eg(r=>({...r,get:(t,i,s)=>gf(t,i)||r.get(t,i,s),has:(t,i)=>!!gf(t,i)||r.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(og(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function og(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const M4="@firebase/app",yf="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new a2("@firebase/app"),lg="@firebase/app-compat",ug="@firebase/analytics-compat",cg="@firebase/analytics",hg="@firebase/app-check-compat",fg="@firebase/app-check",dg="@firebase/auth",pg="@firebase/auth-compat",mg="@firebase/database",gg="@firebase/data-connect",yg="@firebase/database-compat",vg="@firebase/functions",_g="@firebase/functions-compat",Cg="@firebase/installations",Eg="@firebase/installations-compat",Tg="@firebase/messaging",Ag="@firebase/messaging-compat",Sg="@firebase/performance",bg="@firebase/performance-compat",wg="@firebase/remote-config",Rg="@firebase/remote-config-compat",xg="@firebase/storage",Dg="@firebase/storage-compat",Mg="@firebase/firestore",Ig="@firebase/vertexai",Ng="@firebase/firestore-compat",Vg="firebase",Og="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4="[DEFAULT]",Lg={[M4]:"fire-core",[lg]:"fire-core-compat",[cg]:"fire-analytics",[ug]:"fire-analytics-compat",[fg]:"fire-app-check",[hg]:"fire-app-check-compat",[dg]:"fire-auth",[pg]:"fire-auth-compat",[mg]:"fire-rtdb",[gg]:"fire-data-connect",[yg]:"fire-rtdb-compat",[vg]:"fire-fn",[_g]:"fire-fn-compat",[Cg]:"fire-iid",[Eg]:"fire-iid-compat",[Tg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Sg]:"fire-perf",[bg]:"fire-perf-compat",[wg]:"fire-rc",[Rg]:"fire-rc-compat",[xg]:"fire-gcs",[Dg]:"fire-gcs-compat",[Mg]:"fire-fst",[Ng]:"fire-fst-compat",[Ig]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map,kg=new Map,N4=new Map;function vf(r,t){try{r.container.addComponent(t)}catch(i){sr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function ta(r){const t=r.name;if(N4.has(t))return sr.debug(`There were multiple attempts to register component ${t}.`),!1;N4.set(t,r);for(const i of Rc.values())vf(i,r);for(const i of kg.values())vf(i,r);return!0}function Ll(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Ug(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Fc("app","Firebase",zg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,i,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=Og;function $6(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:I4,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw Wr.create("bad-app-name",{appName:String(l)});if(i||(i=H6()),!i)throw Wr.create("no-options");const c=Rc.get(l);if(c){if(Qs(i,c.options)&&Qs(s,c.config))return c;throw Wr.create("duplicate-app",{appName:l})}const f=new Gm(l);for(const m of N4.values())f.addComponent(m);const p=new Pg(i,s,f);return Rc.set(l,p),p}function X6(r=I4){const t=Rc.get(r);if(!t&&r===I4&&H6())return $6();if(!t)throw Wr.create("no-app",{appName:r});return t}function Ci(r,t,i){var s;let l=(s=Lg[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const p=[`Unable to register library "${l}" with version "${t}":`];c&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sr.warn(p.join(" "));return}ta(new ar(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="firebase-heartbeat-database",qg=1,wl="firebase-heartbeat-store";let v4=null;function W6(){return v4||(v4=Y6(Bg,qg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(wl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Wr.create("idb-open",{originalErrorMessage:r.message})})),v4}async function Hg(r){try{const i=(await W6()).transaction(wl),s=await i.objectStore(wl).get(Z6(r));return await i.done,s}catch(t){if(t instanceof la)sr.warn(t.message);else{const i=Wr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sr.warn(i.message)}}}async function _f(r,t){try{const s=(await W6()).transaction(wl,"readwrite");await s.objectStore(wl).put(t,Z6(r)),await s.done}catch(i){if(i instanceof la)sr.warn(i.message);else{const s=Wr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});sr.warn(s.message)}}}function Z6(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=1024,Gg=30;class Qg{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Yg(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Cf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Gg){const f=$g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){sr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Cf(),{heartbeatsToSend:s,unsentEntries:l}=Kg(this._heartbeatsCache.heartbeats),c=wc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return sr.warn(i),""}}}function Cf(){return new Date().toISOString().substring(0,10)}function Kg(r,t=Fg){const i=[];let s=r.slice();for(const l of r){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Ef(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Ef(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Yg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F6()?G6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Hg(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return _f(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return _f(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function Ef(r){return wc(JSON.stringify({version:2,heartbeats:r})).length}function $g(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(r){ta(new ar("platform-logger",t=>new sg(t),"PRIVATE")),ta(new ar("heartbeat",t=>new Qg(t),"PRIVATE")),Ci(M4,yf,r),Ci(M4,yf,"esm2017"),Ci("fire-js","")}Xg("");var Wg="firebase",Zg="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci(Wg,Zg,"app");const J6="@firebase/installations",o2="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9=1e4,e9=`w:${o2}`,n9="FIS_v2",Jg="https://firebaseinstallations.googleapis.com/v1",ty=60*60*1e3,ey="installations",ny="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qa=new Fc(ey,ny,iy);function i9(r){return r instanceof la&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r9({projectId:r}){return`${Jg}/projects/${r}/installations`}function a9(r){return{token:r.token,requestStatus:2,expiresIn:ay(r.expiresIn),creationTime:Date.now()}}async function s9(r,t){const s=(await t.json()).error;return Qa.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function o9({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ry(r,{refreshToken:t}){const i=o9(r);return i.append("Authorization",sy(t)),i}async function l9(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ay(r){return Number(r.replace("s","000"))}function sy(r){return`${n9} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const s=r9(r),l=o9(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:i,authVersion:n9,appId:r.appId,sdkVersion:e9},p={method:"POST",headers:l,body:JSON.stringify(f)},m=await l9(()=>fetch(s,p));if(m.ok){const y=await m.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:a9(y.authToken)}}else throw await s9("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u9(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=/^[cdef][\w-]{21}$/,V4="";function cy(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=hy(r);return uy.test(i)?i:V4}catch{return V4}}function hy(r){return ly(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=new Map;function h9(r,t){const i=Gc(r);f9(i,t),fy(i,t)}function f9(r,t){const i=c9.get(r);if(i)for(const s of i)s(t)}function fy(r,t){const i=dy();i&&i.postMessage({key:r,fid:t}),py()}let Ha=null;function dy(){return!Ha&&"BroadcastChannel"in self&&(Ha=new BroadcastChannel("[Firebase] FID Change"),Ha.onmessage=r=>{f9(r.data.key,r.data.fid)}),Ha}function py(){c9.size===0&&Ha&&(Ha.close(),Ha=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="firebase-installations-database",gy=1,Ka="firebase-installations-store";let _4=null;function l2(){return _4||(_4=Y6(my,gy,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ka)}}})),_4}async function xc(r,t){const i=Gc(r),l=(await l2()).transaction(Ka,"readwrite"),c=l.objectStore(Ka),f=await c.get(i);return await c.put(t,i),await l.done,(!f||f.fid!==t.fid)&&h9(r,t.fid),t}async function d9(r){const t=Gc(r),s=(await l2()).transaction(Ka,"readwrite");await s.objectStore(Ka).delete(t),await s.done}async function Qc(r,t){const i=Gc(r),l=(await l2()).transaction(Ka,"readwrite"),c=l.objectStore(Ka),f=await c.get(i),p=t(f);return p===void 0?await c.delete(i):await c.put(p,i),await l.done,p&&(!f||f.fid!==p.fid)&&h9(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(r){let t;const i=await Qc(r.appConfig,s=>{const l=yy(s),c=vy(r,l);return t=c.registrationPromise,c.installationEntry});return i.fid===V4?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function yy(r){const t=r||{fid:cy(),registrationStatus:0};return p9(t)}function vy(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Qa.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=_y(r,i);return{installationEntry:i,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Cy(r)}:{installationEntry:t}}async function _y(r,t){try{const i=await oy(r,t);return xc(r.appConfig,i)}catch(i){throw i9(i)&&i.customData.serverCode===409?await d9(r.appConfig):await xc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function Cy(r){let t=await Tf(r.appConfig);for(;t.registrationStatus===1;)await u9(100),t=await Tf(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await u2(r);return s||i}return t}function Tf(r){return Qc(r,t=>{if(!t)throw Qa.create("installation-not-found");return p9(t)})}function p9(r){return Ey(r)?{fid:r.fid,registrationStatus:0}:r}function Ey(r){return r.registrationStatus===1&&r.registrationTime+t9<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty({appConfig:r,heartbeatServiceProvider:t},i){const s=Ay(r,i),l=ry(r,i),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:e9,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(f)},m=await l9(()=>fetch(s,p));if(m.ok){const y=await m.json();return a9(y)}else throw await s9("Generate Auth Token",m)}function Ay(r,{fid:t}){return`${r9(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(r,t=!1){let i;const s=await Qc(r.appConfig,c=>{if(!m9(c))throw Qa.create("not-registered");const f=c.authToken;if(!t&&wy(f))return c;if(f.requestStatus===1)return i=Sy(r,t),c;{if(!navigator.onLine)throw Qa.create("app-offline");const p=xy(c);return i=by(r,p),p}});return i?await i:s.authToken}async function Sy(r,t){let i=await Af(r.appConfig);for(;i.authToken.requestStatus===1;)await u9(100),i=await Af(r.appConfig);const s=i.authToken;return s.requestStatus===0?c2(r,t):s}function Af(r){return Qc(r,t=>{if(!m9(t))throw Qa.create("not-registered");const i=t.authToken;return Dy(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function by(r,t){try{const i=await Ty(r,t),s=Object.assign(Object.assign({},t),{authToken:i});return await xc(r.appConfig,s),i}catch(i){if(i9(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await d9(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xc(r.appConfig,s)}throw i}}function m9(r){return r!==void 0&&r.registrationStatus===2}function wy(r){return r.requestStatus===2&&!Ry(r)}function Ry(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+ty}function xy(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Dy(r){return r.requestStatus===1&&r.requestTime+t9<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(r){const t=r,{installationEntry:i,registrationPromise:s}=await u2(t);return s?s.catch(console.error):c2(t).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(r,t=!1){const i=r;return await Ny(i),(await c2(i,t)).token}async function Ny(r){const{registrationPromise:t}=await u2(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r){if(!r||!r.options)throw C4("App Configuration");if(!r.name)throw C4("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw C4(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function C4(r){return Qa.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g9="installations",Oy="installations-internal",Ly=r=>{const t=r.getProvider("app").getImmediate(),i=Vy(t),s=Ll(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ky=r=>{const t=r.getProvider("app").getImmediate(),i=Ll(t,g9).getImmediate();return{getId:()=>My(i),getToken:l=>Iy(i,l)}};function Uy(){ta(new ar(g9,Ly,"PUBLIC")),ta(new ar(Oy,ky,"PRIVATE"))}Uy();Ci(J6,o2);Ci(J6,o2,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="analytics",zy="firebase_id",Py="origin",jy=60*1e3,By="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h2="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new a2("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},In=new Fc("analytics","Analytics",qy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(r){if(!r.startsWith(h2)){const t=In.create("invalid-gtag-resource",{gtagURL:r});return En.warn(t.message),""}return r}function y9(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function Fy(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function Gy(r,t){const i=Fy("firebase-js-sdk-policy",{createScriptURL:Hy}),s=document.createElement("script"),l=`${h2}?l=${r}&id=${t}`;s.src=i?i==null?void 0:i.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Qy(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Ky(r,t,i,s,l,c){const f=s[l];try{if(f)await t[f];else{const m=(await y9(i)).find(y=>y.measurementId===l);m&&await t[m.appId]}}catch(p){En.error(p)}r("config",l,c)}async function Yy(r,t,i,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const p=await y9(i);for(const m of f){const y=p.find(S=>S.measurementId===m),C=y&&t[y.appId];if(C)c.push(C);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){En.error(c)}}function $y(r,t,i,s){async function l(c,...f){try{if(c==="event"){const[p,m]=f;await Yy(r,t,i,p,m)}else if(c==="config"){const[p,m]=f;await Ky(r,t,i,s,p,m)}else if(c==="consent"){const[p,m]=f;r("consent",p,m)}else if(c==="get"){const[p,m,y]=f;r("get",p,m,y)}else if(c==="set"){const[p]=f;r("set",p)}else r(c,...f)}catch(p){En.error(p)}}return l}function Xy(r,t,i,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=$y(c,r,t,i),{gtagCore:c,wrappedGtag:window[l]}}function Wy(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(h2)&&i.src.includes(r))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=30,Jy=1e3;class tv{constructor(t={},i=Jy){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const v9=new tv;function ev(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function nv(r){var t;const{appId:i,apiKey:s}=r,l={method:"GET",headers:ev(s)},c=By.replace("{app-id}",i),f=await fetch(c,l);if(f.status!==200&&f.status!==304){let p="";try{const m=await f.json();!((t=m.error)===null||t===void 0)&&t.message&&(p=m.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function iv(r,t=v9,i){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw In.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw In.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new sv;return setTimeout(async()=>{p.abort()},jy),_9({appId:s,apiKey:l,measurementId:c},f,p,t)}async function _9(r,{throttleEndTimeMillis:t,backoffCount:i},s,l=v9){var c;const{appId:f,measurementId:p}=r;try{await rv(s,t)}catch(m){if(p)return En.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:f,measurementId:p};throw m}try{const m=await nv(r);return l.deleteThrottleMetadata(f),m}catch(m){const y=m;if(!av(y)){if(l.deleteThrottleMetadata(f),p)return En.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:p};throw m}const C=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?df(i,l.intervalMillis,Zy):df(i,l.intervalMillis),S={throttleEndTimeMillis:Date.now()+C,backoffCount:i+1};return l.setThrottleMetadata(f,S),En.debug(`Calling attemptFetch again in ${C} millis`),_9(r,S,s,l)}}function rv(r,t){return new Promise((i,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(c),s(In.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function av(r){if(!(r instanceof la)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class sv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ov(r,t,i,s,l){if(l&&l.global){r("event",i,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",i,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(){if(F6())try{await G6()}catch(r){return En.warn(In.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return En.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uv(r,t,i,s,l,c,f){var p;const m=iv(r);m.then(I=>{i[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&En.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>En.error(I)),t.push(m);const y=lv().then(I=>{if(I)return s.getId()}),[C,S]=await Promise.all([m,y]);Wy(c)||Gy(c,C.measurementId),l("js",new Date);const T=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return T[Py]="firebase",T.update=!0,S!=null&&(T[zy]=S),l("config",C.measurementId,T),C.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t){this.app=t}_delete(){return delete Cl[this.app.options.appId],Promise.resolve()}}let Cl={},Sf=[];const bf={};let E4="dataLayer",hv="gtag",wf,C9,Rf=!1;function fv(){const r=[];if(Nm()&&r.push("This is a browser extension environment."),Om()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),i=In.create("invalid-analytics-context",{errorInfo:t});En.warn(i.message)}}function dv(r,t,i){fv();const s=r.options.appId;if(!s)throw In.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)En.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(Cl[s]!=null)throw In.create("already-exists",{id:s});if(!Rf){Qy(E4);const{wrappedGtag:c,gtagCore:f}=Xy(Cl,Sf,bf,E4,hv);C9=c,wf=f,Rf=!0}return Cl[s]=uv(r,Sf,bf,t,wf,E4,i),new cv(r)}function pv(r=X6()){r=bi(r);const t=Ll(r,Dc);return t.isInitialized()?t.getImmediate():mv(r)}function mv(r,t={}){const i=Ll(r,Dc);if(i.isInitialized()){const l=i.getImmediate();if(Qs(t,i.getOptions()))return l;throw In.create("already-initialized")}return i.initialize({options:t})}function gv(r,t,i,s){r=bi(r),ov(C9,Cl[r.app.options.appId],t,i,s).catch(l=>En.error(l))}const xf="@firebase/analytics",Df="0.10.12";function yv(){ta(new ar(Dc,(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return dv(s,l,i)},"PUBLIC")),ta(new ar("analytics-internal",r,"PRIVATE")),Ci(xf,Df),Ci(xf,Df,"esm2017");function r(t){try{const i=t.getProvider(Dc).getImmediate();return{logEvent:(s,l,c)=>gv(i,s,l,c)}}catch(i){throw In.create("interop-component-reg-failed",{reason:i})}}}yv();var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,E9;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(N,R){function b(){}b.prototype=R.prototype,N.D=R.prototype,N.prototype=new b,N.prototype.constructor=N,N.C=function(D,O,P){for(var M=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)M[Wt-2]=arguments[Wt];return R.prototype[O].apply(D,M)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,R,b){b||(b=0);var D=Array(16);if(typeof R=="string")for(var O=0;16>O;++O)D[O]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(O=0;16>O;++O)D[O]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=N.g[0],b=N.g[1],O=N.g[2];var P=N.g[3],M=R+(P^b&(O^P))+D[0]+3614090360&4294967295;R=b+(M<<7&4294967295|M>>>25),M=P+(O^R&(b^O))+D[1]+3905402710&4294967295,P=R+(M<<12&4294967295|M>>>20),M=O+(b^P&(R^b))+D[2]+606105819&4294967295,O=P+(M<<17&4294967295|M>>>15),M=b+(R^O&(P^R))+D[3]+3250441966&4294967295,b=O+(M<<22&4294967295|M>>>10),M=R+(P^b&(O^P))+D[4]+4118548399&4294967295,R=b+(M<<7&4294967295|M>>>25),M=P+(O^R&(b^O))+D[5]+1200080426&4294967295,P=R+(M<<12&4294967295|M>>>20),M=O+(b^P&(R^b))+D[6]+2821735955&4294967295,O=P+(M<<17&4294967295|M>>>15),M=b+(R^O&(P^R))+D[7]+4249261313&4294967295,b=O+(M<<22&4294967295|M>>>10),M=R+(P^b&(O^P))+D[8]+1770035416&4294967295,R=b+(M<<7&4294967295|M>>>25),M=P+(O^R&(b^O))+D[9]+2336552879&4294967295,P=R+(M<<12&4294967295|M>>>20),M=O+(b^P&(R^b))+D[10]+4294925233&4294967295,O=P+(M<<17&4294967295|M>>>15),M=b+(R^O&(P^R))+D[11]+2304563134&4294967295,b=O+(M<<22&4294967295|M>>>10),M=R+(P^b&(O^P))+D[12]+1804603682&4294967295,R=b+(M<<7&4294967295|M>>>25),M=P+(O^R&(b^O))+D[13]+4254626195&4294967295,P=R+(M<<12&4294967295|M>>>20),M=O+(b^P&(R^b))+D[14]+2792965006&4294967295,O=P+(M<<17&4294967295|M>>>15),M=b+(R^O&(P^R))+D[15]+1236535329&4294967295,b=O+(M<<22&4294967295|M>>>10),M=R+(O^P&(b^O))+D[1]+4129170786&4294967295,R=b+(M<<5&4294967295|M>>>27),M=P+(b^O&(R^b))+D[6]+3225465664&4294967295,P=R+(M<<9&4294967295|M>>>23),M=O+(R^b&(P^R))+D[11]+643717713&4294967295,O=P+(M<<14&4294967295|M>>>18),M=b+(P^R&(O^P))+D[0]+3921069994&4294967295,b=O+(M<<20&4294967295|M>>>12),M=R+(O^P&(b^O))+D[5]+3593408605&4294967295,R=b+(M<<5&4294967295|M>>>27),M=P+(b^O&(R^b))+D[10]+38016083&4294967295,P=R+(M<<9&4294967295|M>>>23),M=O+(R^b&(P^R))+D[15]+3634488961&4294967295,O=P+(M<<14&4294967295|M>>>18),M=b+(P^R&(O^P))+D[4]+3889429448&4294967295,b=O+(M<<20&4294967295|M>>>12),M=R+(O^P&(b^O))+D[9]+568446438&4294967295,R=b+(M<<5&4294967295|M>>>27),M=P+(b^O&(R^b))+D[14]+3275163606&4294967295,P=R+(M<<9&4294967295|M>>>23),M=O+(R^b&(P^R))+D[3]+4107603335&4294967295,O=P+(M<<14&4294967295|M>>>18),M=b+(P^R&(O^P))+D[8]+1163531501&4294967295,b=O+(M<<20&4294967295|M>>>12),M=R+(O^P&(b^O))+D[13]+2850285829&4294967295,R=b+(M<<5&4294967295|M>>>27),M=P+(b^O&(R^b))+D[2]+4243563512&4294967295,P=R+(M<<9&4294967295|M>>>23),M=O+(R^b&(P^R))+D[7]+1735328473&4294967295,O=P+(M<<14&4294967295|M>>>18),M=b+(P^R&(O^P))+D[12]+2368359562&4294967295,b=O+(M<<20&4294967295|M>>>12),M=R+(b^O^P)+D[5]+4294588738&4294967295,R=b+(M<<4&4294967295|M>>>28),M=P+(R^b^O)+D[8]+2272392833&4294967295,P=R+(M<<11&4294967295|M>>>21),M=O+(P^R^b)+D[11]+1839030562&4294967295,O=P+(M<<16&4294967295|M>>>16),M=b+(O^P^R)+D[14]+4259657740&4294967295,b=O+(M<<23&4294967295|M>>>9),M=R+(b^O^P)+D[1]+2763975236&4294967295,R=b+(M<<4&4294967295|M>>>28),M=P+(R^b^O)+D[4]+1272893353&4294967295,P=R+(M<<11&4294967295|M>>>21),M=O+(P^R^b)+D[7]+4139469664&4294967295,O=P+(M<<16&4294967295|M>>>16),M=b+(O^P^R)+D[10]+3200236656&4294967295,b=O+(M<<23&4294967295|M>>>9),M=R+(b^O^P)+D[13]+681279174&4294967295,R=b+(M<<4&4294967295|M>>>28),M=P+(R^b^O)+D[0]+3936430074&4294967295,P=R+(M<<11&4294967295|M>>>21),M=O+(P^R^b)+D[3]+3572445317&4294967295,O=P+(M<<16&4294967295|M>>>16),M=b+(O^P^R)+D[6]+76029189&4294967295,b=O+(M<<23&4294967295|M>>>9),M=R+(b^O^P)+D[9]+3654602809&4294967295,R=b+(M<<4&4294967295|M>>>28),M=P+(R^b^O)+D[12]+3873151461&4294967295,P=R+(M<<11&4294967295|M>>>21),M=O+(P^R^b)+D[15]+530742520&4294967295,O=P+(M<<16&4294967295|M>>>16),M=b+(O^P^R)+D[2]+3299628645&4294967295,b=O+(M<<23&4294967295|M>>>9),M=R+(O^(b|~P))+D[0]+4096336452&4294967295,R=b+(M<<6&4294967295|M>>>26),M=P+(b^(R|~O))+D[7]+1126891415&4294967295,P=R+(M<<10&4294967295|M>>>22),M=O+(R^(P|~b))+D[14]+2878612391&4294967295,O=P+(M<<15&4294967295|M>>>17),M=b+(P^(O|~R))+D[5]+4237533241&4294967295,b=O+(M<<21&4294967295|M>>>11),M=R+(O^(b|~P))+D[12]+1700485571&4294967295,R=b+(M<<6&4294967295|M>>>26),M=P+(b^(R|~O))+D[3]+2399980690&4294967295,P=R+(M<<10&4294967295|M>>>22),M=O+(R^(P|~b))+D[10]+4293915773&4294967295,O=P+(M<<15&4294967295|M>>>17),M=b+(P^(O|~R))+D[1]+2240044497&4294967295,b=O+(M<<21&4294967295|M>>>11),M=R+(O^(b|~P))+D[8]+1873313359&4294967295,R=b+(M<<6&4294967295|M>>>26),M=P+(b^(R|~O))+D[15]+4264355552&4294967295,P=R+(M<<10&4294967295|M>>>22),M=O+(R^(P|~b))+D[6]+2734768916&4294967295,O=P+(M<<15&4294967295|M>>>17),M=b+(P^(O|~R))+D[13]+1309151649&4294967295,b=O+(M<<21&4294967295|M>>>11),M=R+(O^(b|~P))+D[4]+4149444226&4294967295,R=b+(M<<6&4294967295|M>>>26),M=P+(b^(R|~O))+D[11]+3174756917&4294967295,P=R+(M<<10&4294967295|M>>>22),M=O+(R^(P|~b))+D[2]+718787259&4294967295,O=P+(M<<15&4294967295|M>>>17),M=b+(P^(O|~R))+D[9]+3951481745&4294967295,N.g[0]=N.g[0]+R&4294967295,N.g[1]=N.g[1]+(O+(M<<21&4294967295|M>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+P&4294967295}s.prototype.u=function(N,R){R===void 0&&(R=N.length);for(var b=R-this.blockSize,D=this.B,O=this.h,P=0;P<R;){if(O==0)for(;P<=b;)l(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<R;)if(D[O++]=N.charCodeAt(P++),O==this.blockSize){l(this,D),O=0;break}}else for(;P<R;)if(D[O++]=N[P++],O==this.blockSize){l(this,D),O=0;break}}this.h=O,this.o+=R},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var R=1;R<N.length-8;++R)N[R]=0;var b=8*this.o;for(R=N.length-8;R<N.length;++R)N[R]=b&255,b/=256;for(this.u(N),N=Array(16),R=b=0;4>R;++R)for(var D=0;32>D;D+=8)N[b++]=this.g[R]>>>D&255;return N};function c(N,R){var b=p;return Object.prototype.hasOwnProperty.call(b,N)?b[N]:b[N]=R(N)}function f(N,R){this.h=R;for(var b=[],D=!0,O=N.length-1;0<=O;O--){var P=N[O]|0;D&&P==R||(b[O]=P,D=!1)}this.g=b}var p={};function m(N){return-128<=N&&128>N?c(N,function(R){return new f([R|0],0>R?-1:0)}):new f([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return z(y(-N));for(var R=[],b=1,D=0;N>=b;D++)R[D]=N/b|0,b*=4294967296;return new f(R,0)}function C(N,R){if(N.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N.charAt(0)=="-")return z(C(N.substring(1),R));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=y(Math.pow(R,8)),D=S,O=0;O<N.length;O+=8){var P=Math.min(8,N.length-O),M=parseInt(N.substring(O,O+P),R);8>P?(P=y(Math.pow(R,P)),D=D.j(P).add(y(M))):(D=D.j(b),D=D.add(y(M)))}return D}var S=m(0),T=m(1),I=m(16777216);r=f.prototype,r.m=function(){if(Q(this))return-z(this).m();for(var N=0,R=1,b=0;b<this.g.length;b++){var D=this.i(b);N+=(0<=D?D:4294967296+D)*R,R*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(V(this))return"0";if(Q(this))return"-"+z(this).toString(N);for(var R=y(Math.pow(N,6)),b=this,D="";;){var O=ct(b,R).g;b=F(b,O.j(R));var P=((0<b.g.length?b.g[0]:b.h)>>>0).toString(N);if(b=O,V(b))return P+D;for(;6>P.length;)P="0"+P;D=P+D}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function V(N){if(N.h!=0)return!1;for(var R=0;R<N.g.length;R++)if(N.g[R]!=0)return!1;return!0}function Q(N){return N.h==-1}r.l=function(N){return N=F(this,N),Q(N)?-1:V(N)?0:1};function z(N){for(var R=N.g.length,b=[],D=0;D<R;D++)b[D]=~N.g[D];return new f(b,~N.h).add(T)}r.abs=function(){return Q(this)?z(this):this},r.add=function(N){for(var R=Math.max(this.g.length,N.g.length),b=[],D=0,O=0;O<=R;O++){var P=D+(this.i(O)&65535)+(N.i(O)&65535),M=(P>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);D=M>>>16,P&=65535,M&=65535,b[O]=M<<16|P}return new f(b,b[b.length-1]&-2147483648?-1:0)};function F(N,R){return N.add(z(R))}r.j=function(N){if(V(this)||V(N))return S;if(Q(this))return Q(N)?z(this).j(z(N)):z(z(this).j(N));if(Q(N))return z(this.j(z(N)));if(0>this.l(I)&&0>N.l(I))return y(this.m()*N.m());for(var R=this.g.length+N.g.length,b=[],D=0;D<2*R;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(var O=0;O<N.g.length;O++){var P=this.i(D)>>>16,M=this.i(D)&65535,Wt=N.i(O)>>>16,le=N.i(O)&65535;b[2*D+2*O]+=M*le,X(b,2*D+2*O),b[2*D+2*O+1]+=P*le,X(b,2*D+2*O+1),b[2*D+2*O+1]+=M*Wt,X(b,2*D+2*O+1),b[2*D+2*O+2]+=P*Wt,X(b,2*D+2*O+2)}for(D=0;D<R;D++)b[D]=b[2*D+1]<<16|b[2*D];for(D=R;D<2*R;D++)b[D]=0;return new f(b,0)};function X(N,R){for(;(N[R]&65535)!=N[R];)N[R+1]+=N[R]>>>16,N[R]&=65535,R++}function J(N,R){this.g=N,this.h=R}function ct(N,R){if(V(R))throw Error("division by zero");if(V(N))return new J(S,S);if(Q(N))return R=ct(z(N),R),new J(z(R.g),z(R.h));if(Q(R))return R=ct(N,z(R)),new J(z(R.g),R.h);if(30<N.g.length){if(Q(N)||Q(R))throw Error("slowDivide_ only works with positive integers.");for(var b=T,D=R;0>=D.l(N);)b=st(b),D=st(D);var O=mt(b,1),P=mt(D,1);for(D=mt(D,2),b=mt(b,2);!V(D);){var M=P.add(D);0>=M.l(N)&&(O=O.add(b),P=M),D=mt(D,1),b=mt(b,1)}return R=F(N,O.j(R)),new J(O,R)}for(O=S;0<=N.l(R);){for(b=Math.max(1,Math.floor(N.m()/R.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),P=y(b),M=P.j(R);Q(M)||0<M.l(N);)b-=D,P=y(b),M=P.j(R);V(P)&&(P=T),O=O.add(P),N=F(N,M)}return new J(O,N)}r.A=function(N){return ct(this,N).h},r.and=function(N){for(var R=Math.max(this.g.length,N.g.length),b=[],D=0;D<R;D++)b[D]=this.i(D)&N.i(D);return new f(b,this.h&N.h)},r.or=function(N){for(var R=Math.max(this.g.length,N.g.length),b=[],D=0;D<R;D++)b[D]=this.i(D)|N.i(D);return new f(b,this.h|N.h)},r.xor=function(N){for(var R=Math.max(this.g.length,N.g.length),b=[],D=0;D<R;D++)b[D]=this.i(D)^N.i(D);return new f(b,this.h^N.h)};function st(N){for(var R=N.g.length+1,b=[],D=0;D<R;D++)b[D]=N.i(D)<<1|N.i(D-1)>>>31;return new f(b,N.h)}function mt(N,R){var b=R>>5;R%=32;for(var D=N.g.length-b,O=[],P=0;P<D;P++)O[P]=0<R?N.i(P+b)>>>R|N.i(P+b+1)<<32-R:N.i(P+b);return new f(O,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,E9=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=C,Zr=f}).apply(typeof Mf<"u"?Mf:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T9,gl,A9,_c,O4,S9,b9,w9;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=i(this);function l(u,g){if(g)t:{var v=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var B=u[A];if(!(B in v))break t;v=v[B]}u=u[u.length-1],A=v[u],g=g(A),g!=A&&g!=null&&t(v,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var v=0,A=!1,B={next:function(){if(!A&&v<u.length){var K=v++;return{value:g(K,u[K]),done:!1}}return A=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}l("Array.prototype.values",function(u){return u||function(){return c(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function y(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function C(u,g,v){return u.call.apply(u.bind,arguments)}function S(u,g,v){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,A),u.apply(g,B)}}return function(){return u.apply(g,arguments)}}function T(u,g,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:S,T.apply(null,arguments)}function I(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function V(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(A,B,K){for(var at=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)at[Pt-2]=arguments[Pt];return g.prototype[B].apply(A,at)}}function Q(u){const g=u.length;if(0<g){const v=Array(g);for(let A=0;A<g;A++)v[A]=u[A];return v}return[]}function z(u,g){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const B=u.length||0,K=A.length||0;u.length=B+K;for(let at=0;at<K;at++)u[B+at]=A[at]}else u.push(A)}}class F{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function X(u){return/^[\s\xa0]*$/.test(u)}function J(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ct(u){return ct[" "](u),u}ct[" "]=function(){};var st=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function mt(u,g,v){for(const A in u)g.call(v,u[A],A,u)}function N(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function R(u){const g={};for(const v in u)g[v]=u[v];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,g){let v,A;for(let B=1;B<arguments.length;B++){A=arguments[B];for(v in A)u[v]=A[v];for(let K=0;K<b.length;K++)v=b[K],Object.prototype.hasOwnProperty.call(A,v)&&(u[v]=A[v])}}function O(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function P(u){p.setTimeout(()=>{throw u},0)}function M(){var u=Vt;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class Wt{constructor(){this.h=this.g=null}add(g,v){const A=le.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var le=new F(()=>new it,u=>u.reset());class it{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,dt=!1,Vt=new Wt,L=()=>{const u=p.Promise.resolve(void 0);ot=()=>{u.then(et)}};var et=()=>{for(var u;u=M();){try{u.h.call(u.g)}catch(v){P(v)}var g=le;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}dt=!1};function pt(){this.s=this.s,this.C=this.C}pt.prototype.s=!1,pt.prototype.ma=function(){this.s||(this.s=!0,this.N())},pt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};p.addEventListener("test",v,g),p.removeEventListener("test",v,g)}catch{}return u}();function Rt(u,g){if(lt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(st){t:{try{ct(g.nodeName);var B=!0;break t}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:St[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}V(Rt,lt);var St={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Ut=0;function oe(u,g,v,A,B){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=B,this.key=++Ut,this.da=this.fa=!1}function Ct(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function xt(u){this.src=u,this.g={},this.h=0}xt.prototype.add=function(u,g,v,A,B){var K=u.toString();u=this.g[K],u||(u=this.g[K]=[],this.h++);var at=ne(u,g,A,B);return-1<at?(g=u[at],v||(g.fa=!1)):(g=new oe(g,this.src,K,!!A,B),g.fa=v,u.push(g)),g};function Ft(u,g){var v=g.type;if(v in u.g){var A=u.g[v],B=Array.prototype.indexOf.call(A,g,void 0),K;(K=0<=B)&&Array.prototype.splice.call(A,B,1),K&&(Ct(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ne(u,g,v,A){for(var B=0;B<u.length;++B){var K=u[B];if(!K.da&&K.listener==g&&K.capture==!!v&&K.ha==A)return B}return-1}var ie="closure_lm_"+(1e6*Math.random()|0),Zt={};function Xt(u,g,v,A,B){if(Array.isArray(g)){for(var K=0;K<g.length;K++)Xt(u,g[K],v,A,B);return null}return v=Hl(v),u&&u[fe]?u.K(g,v,y(A)?!!A.capture:!1,B):zt(u,g,v,!1,A,B)}function zt(u,g,v,A,B,K){if(!g)throw Error("Invalid event type");var at=y(B)?!!B.capture:!!B,Pt=cr(u);if(Pt||(u[ie]=Pt=new xt(u)),v=Pt.add(g,v,A,at,K),v.proxy)return v;if(A=rt(),v.proxy=A,A.src=u,A.listener=v,u.addEventListener)ut||(B=at),B===void 0&&(B=!1),u.addEventListener(g.toString(),A,B);else if(u.attachEvent)u.attachEvent(Ke(g.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function rt(){function u(v){return g.call(u.src,u.listener,v)}const g=Di;return u}function Te(u,g,v,A,B){if(Array.isArray(g))for(var K=0;K<g.length;K++)Te(u,g[K],v,A,B);else A=y(A)?!!A.capture:!!A,v=Hl(v),u&&u[fe]?(u=u.i,g=String(g).toString(),g in u.g&&(K=u.g[g],v=ne(K,v,A,B),-1<v&&(Ct(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete u.g[g],u.h--)))):u&&(u=cr(u))&&(g=u.g[g.toString()],u=-1,g&&(u=ne(g,v,A,B)),(v=-1<u?g[u]:null)&&ye(v))}function ye(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[fe])Ft(g.i,u);else{var v=u.type,A=u.proxy;g.removeEventListener?g.removeEventListener(v,A,u.capture):g.detachEvent?g.detachEvent(Ke(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=cr(g))?(Ft(v,u),v.h==0&&(v.src=null,g[ie]=null)):Ct(u)}}}function Ke(u){return u in Zt?Zt[u]:Zt[u]="on"+u}function Di(u,g){if(u.da)u=!0;else{g=new Rt(g,this);var v=u.listener,A=u.ha||u.src;u.fa&&ye(u),u=v.call(A,g)}return u}function cr(u){return u=u[ie],u instanceof xt?u:null}var mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hl(u){return typeof u=="function"?u:(u[mn]||(u[mn]=function(g){return u.handleEvent(g)}),u[mn])}function Me(){pt.call(this),this.i=new xt(this),this.M=this,this.F=null}V(Me,pt),Me.prototype[fe]=!0,Me.prototype.removeEventListener=function(u,g,v,A){Te(this,u,g,v,A)};function Pe(u,g){var v,A=u.F;if(A)for(v=[];A;A=A.F)v.push(A);if(u=u.M,A=g.type||g,typeof g=="string")g=new lt(g,u);else if(g instanceof lt)g.target=g.target||u;else{var B=g;g=new lt(A,u),D(g,B)}if(B=!0,v)for(var K=v.length-1;0<=K;K--){var at=g.g=v[K];B=Mi(at,A,!0,g)&&B}if(at=g.g=u,B=Mi(at,A,!0,g)&&B,B=Mi(at,A,!1,g)&&B,v)for(K=0;K<v.length;K++)at=g.g=v[K],B=Mi(at,A,!1,g)&&B}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],A=0;A<v.length;A++)Ct(v[A]);delete u.g[g],u.h--}}this.F=null},Me.prototype.K=function(u,g,v,A){return this.i.add(String(u),g,!1,v,A)},Me.prototype.L=function(u,g,v,A){return this.i.add(String(u),g,!0,v,A)};function Mi(u,g,v,A){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,K=0;K<g.length;++K){var at=g[K];if(at&&!at.da&&at.capture==v){var Pt=at.listener,Ne=at.ha||at.src;at.fa&&Ft(u.i,at),B=Pt.call(Ne,A)!==!1&&B}}return B&&!A.defaultPrevented}function Fl(u,g,v){if(typeof u=="function")v&&(u=T(u,v));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:p.setTimeout(u,g||0)}function lo(u){u.g=Fl(()=>{u.g=null,u.i&&(u.i=!1,lo(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class c1 extends pt{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ha(u){pt.call(this),this.h=u,this.g={}}V(ha,pt);var hr=[];function en(u){mt(u.g,function(g,v){this.g.hasOwnProperty(v)&&ye(g)},u),u.g={}}ha.prototype.N=function(){ha.aa.N.call(this),en(this)},ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uo=p.JSON.stringify,ii=p.JSON.parse,ln=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function co(){}co.prototype.h=null;function Gl(u){return u.h||(u.h=u.i())}function Ql(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){lt.call(this,"d")}V(fr,lt);function Xn(){lt.call(this,"c")}V(Xn,lt);var Vn={},dr=null;function ts(){return dr=dr||new Me}Vn.La="serverreachability";function ho(u){lt.call(this,Vn.La,u)}V(ho,lt);function pr(u){const g=ts();Pe(g,new ho(g))}Vn.STAT_EVENT="statevent";function es(u,g){lt.call(this,Vn.STAT_EVENT,u),this.stat=g}V(es,lt);function Ae(u){const g=ts();Pe(g,new es(g,u))}Vn.Ma="timingevent";function Kl(u,g){lt.call(this,Vn.Ma,u),this.size=g}V(Kl,lt);function mr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},g)}function gr(){this.g=!0}gr.prototype.xa=function(){this.g=!1};function Yl(u,g,v,A,B,K){u.info(function(){if(u.g)if(K)for(var at="",Pt=K.split("&"),Ne=0;Ne<Pt.length;Ne++){var jt=Pt[Ne].split("=");if(1<jt.length){var qe=jt[0];jt=jt[1];var Ve=qe.split("_");at=2<=Ve.length&&Ve[1]=="type"?at+(qe+"="+jt+"&"):at+(qe+"=redacted&")}}else at=null;else at=K;return"XMLHTTP REQ ("+A+") [attempt "+B+"]: "+g+`
`+v+`
`+at})}function $l(u,g,v,A,B,K,at){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+B+"]: "+g+`
`+v+`
`+K+" "+at})}function yr(u,g,v,A){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+je(u,v)+(A?" "+A:"")})}function ai(u,g){u.info(function(){return"TIMEOUT: "+g})}gr.prototype.info=function(){};function je(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var A=v[u];if(!(2>A.length)){var B=A[1];if(Array.isArray(B)&&!(1>B.length)){var K=B[0];if(K!="noop"&&K!="stop"&&K!="close")for(var at=1;at<B.length;at++)B[at]=""}}}}return uo(v)}catch{return g}}var Ie={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fa;function ns(){}V(ns,co),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},fa=new ns;function si(u,g,v,A){this.j=u,this.i=g,this.l=v,this.R=A||1,this.U=new ha(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fo}function fo(){this.i=null,this.g="",this.h=!1}var vr={},da={};function Wn(u,g,v){u.L=1,u.v=ga(ve(g)),u.m=v,u.P=!0,Ni(u,null)}function Ni(u,g){u.F=Date.now(),de(u),u.A=ve(u.v);var v=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),Li(v.i,"t",A),u.C=0,v=u.j.J,u.h=new fo,u.g=uu(u.j,v?g:null,!u.m),0<u.O&&(u.M=new c1(T(u.Y,u,u.g),u.O)),g=u.U,v=u.g,A=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(hr[0]=B.toString()),B=hr);for(var K=0;K<B.length;K++){var at=Xt(v,B[K],A||g.handleEvent,!1,g.h||g);if(!at)break;g.g[at.key]=at}g=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),pr(),Yl(u.i,u.u,u.A,u.l,u.R,u.m)}si.prototype.ca=function(u){u=u.target;const g=this.M;g&&zn(u)==3?g.j():this.Y(u)},si.prototype.Y=function(u){try{if(u==this.g)t:{const Ve=zn(this.g);var g=this.g.Ba();const Pi=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||eu(this.g)))){this.J||Ve!=4||g==7||(g==8||0>=Pi?pr(3):pr(2)),is(this);var v=this.g.Z();this.X=v;e:if(_r(this)){var A=eu(this.g);u="";var B=A.length,K=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),An(this);var at="";break e}this.h.i=new p.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,u+=this.h.i.decode(A[g],{stream:!(K&&g==B-1)});A.length=0,this.h.g+=u,this.C=0,at=this.h.g}else at=this.g.oa();if(this.o=v==200,$l(this.i,this.u,this.A,this.l,this.R,Ve,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,Ne=this.g;if((Pt=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Pt)){var jt=Pt;break e}}jt=null}if(v=jt)yr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sn(this,v);else{this.o=!1,this.s=3,Ae(12),gn(this),An(this);break t}}if(this.P){v=!0;let Ye;for(;!this.J&&this.C<at.length;)if(Ye=Cr(this,at),Ye==da){Ve==4&&(this.s=4,Ae(14),v=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==vr){this.s=4,Ae(15),yr(this.i,this.l,at,"[Invalid Chunk]"),v=!1;break}else yr(this.i,this.l,Ye,null),Sn(this,Ye);if(_r(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||at.length!=0||this.h.h||(this.s=1,Ae(16),v=!1),this.o=this.o&&v,!v)yr(this.i,this.l,at,"[Invalid Chunked Response]"),gn(this),An(this);else if(0<at.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+at.length),Aa(qe),qe.M=!0,Ae(11))}}else yr(this.i,this.l,at,null),Sn(this,at);Ve==4&&gn(this),this.o&&!this.J&&(Ve==4?su(this.j,this):(this.o=!1,de(this)))}else g1(this.g),v==400&&0<at.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),gn(this),An(this)}}}catch{}finally{}};function _r(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Cr(u,g){var v=u.C,A=g.indexOf(`
`,v);return A==-1?da:(v=Number(g.substring(v,A)),isNaN(v)?vr:(A+=1,A+v>g.length?da:(g=g.slice(A,A+v),u.C=A+v,g)))}si.prototype.cancel=function(){this.J=!0,gn(this)};function de(u){u.S=Date.now()+u.I,po(u,u.I)}function po(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=mr(T(u.ba,u),g)}function is(u){u.B&&(p.clearTimeout(u.B),u.B=null)}si.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ai(this.i,this.A),this.L!=2&&(pr(),Ae(17)),gn(this),this.s=2,An(this)):po(this,this.S-u)};function An(u){u.j.G==0||u.J||su(u.j,u)}function gn(u){is(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,en(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function Sn(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||Er(v.h,u))){if(!u.K&&Er(v.h,u)&&v.G==3){try{var A=v.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var B=A;if(B[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)ds(v),hs(v);else break t;bo(v),Ae(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=mr(T(v.Za,v),6e3));if(1>=Xl(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else zi(v,11)}else if((u.K||v.g==u)&&ds(v),!X(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let jt=B[g];if(v.T=jt[0],jt=jt[1],v.G==2)if(jt[0]=="c"){v.K=jt[1],v.ia=jt[2];const qe=jt[3];qe!=null&&(v.la=qe,v.j.info("VER="+v.la));const Ve=jt[4];Ve!=null&&(v.Aa=Ve,v.j.info("SVER="+v.Aa));const Pi=jt[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(A=1.5*Pi,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Ye=u.g;if(Ye){const di=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var K=A.h;K.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Tr(K,K.h),K.h=null))}if(A.D){const Ro=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;Ro&&(A.ya=Ro,Gt(A.I,A.D,Ro))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var at=u;if(A.qa=lu(A,A.J?A.ia:null,A.W),at.K){On(A.h,at);var Pt=at,Ne=A.L;Ne&&(Pt.I=Ne),Pt.B&&(is(Pt),de(Pt)),A.g=at}else ru(A);0<v.i.length&&fs(v)}else jt[0]!="stop"&&jt[0]!="close"||zi(v,7);else v.G==3&&(jt[0]=="stop"||jt[0]=="close"?jt[0]=="stop"?zi(v,7):Ao(v):jt[0]!="noop"&&v.l&&v.l.ta(jt),v.v=0)}}pr(4)}catch{}}var h1=class{constructor(u,g){this.g=u,this.map=g}};function mo(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function go(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xl(u){return u.h?1:u.g?u.g.size:0}function Er(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Tr(u,g){u.g?u.g.add(g):u.h=g}function On(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}mo.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function un(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return Q(u.i)}function Wl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var g=[],v=u.length,A=0;A<v;A++)g.push(u[A]);return g}g=[],v=0;for(A in u)g[v++]=u[A];return g}function f1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const A in u)g[v++]=A;return g}}}function pa(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=f1(u),A=Wl(u),B=A.length,K=0;K<B;K++)g.call(void 0,A[K],v&&v[K],u)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rs(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var A=u[v].indexOf("="),B=null;if(0<=A){var K=u[v].substring(0,A);B=u[v].substring(A+1)}else K=u[v];g(K,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Vi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Vi){this.h=u.h,Ar(this,u.j),this.o=u.o,this.g=u.g,ma(this,u.s),this.l=u.l;var g=u.i,v=new oi;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),as(this,v),this.m=u.m}else u&&(g=String(u).match(yo))?(this.h=!1,Ar(this,g[1]||"",!0),this.o=Sr(g[2]||""),this.g=Sr(g[3]||"",!0),ma(this,g[4]),this.l=Sr(g[5]||"",!0),as(this,g[6]||"",!0),this.m=Sr(g[7]||"")):(this.h=!1,this.i=new oi(null,this.h))}Vi.prototype.toString=function(){var u=[],g=this.j;g&&u.push(Ln(g,vo,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Ln(g,vo,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Ln(v,v.charAt(0)=="/"?_o:Zl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Ln(v,m1)),u.join("")};function ve(u){return new Vi(u)}function Ar(u,g,v){u.j=v?Sr(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function ma(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function as(u,g,v){g instanceof oi?(u.i=g,Co(u.i,u.h)):(v||(g=Ln(g,p1)),u.i=new oi(g,u.h))}function Gt(u,g,v){u.i.set(g,v)}function ga(u){return Gt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sr(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ln(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,d1),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function d1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var vo=/[#\/\?@]/g,Zl=/[#\?:]/g,_o=/[#\?]/g,p1=/[#\?@]/g,m1=/#/g;function oi(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function kn(u){u.g||(u.g=new Map,u.h=0,u.i&&rs(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=oi.prototype,r.add=function(u,g){kn(this),this.i=null,u=ki(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function ss(u,g){kn(u),g=ki(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Oi(u,g){return kn(u),g=ki(u,g),u.g.has(g)}r.forEach=function(u,g){kn(this),this.g.forEach(function(v,A){v.forEach(function(B){u.call(g,B,A,this)},this)},this)},r.na=function(){kn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let A=0;A<g.length;A++){const B=u[A];for(let K=0;K<B.length;K++)v.push(g[A])}return v},r.V=function(u){kn(this);let g=[];if(typeof u=="string")Oi(this,u)&&(g=g.concat(this.g.get(ki(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},r.set=function(u,g){return kn(this),this.i=null,u=ki(this,u),Oi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function Li(u,g,v){ss(u,g),0<v.length&&(u.i=null,u.g.set(ki(u,g),Q(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var A=g[v];const K=encodeURIComponent(String(A)),at=this.V(A);for(A=0;A<at.length;A++){var B=K;at[A]!==""&&(B+="="+encodeURIComponent(String(at[A]))),u.push(B)}}return this.i=u.join("&")};function ki(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function Co(u,g){g&&!u.j&&(kn(u),u.i=null,u.g.forEach(function(v,A){var B=A.toLowerCase();A!=B&&(ss(this,A),Li(this,B,v))},u)),u.j=g}function Jl(u,g){const v=new gr;if(p.Image){const A=new Image;A.onload=I(Un,v,"TestLoadImage: loaded",!0,g,A),A.onerror=I(Un,v,"TestLoadImage: error",!1,g,A),A.onabort=I(Un,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=I(Un,v,"TestLoadImage: timeout",!1,g,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else g(!1)}function ya(u,g){const v=new gr,A=new AbortController,B=setTimeout(()=>{A.abort(),Un(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:A.signal}).then(K=>{clearTimeout(B),K.ok?Un(v,"TestPingServer: ok",!0,g):Un(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),Un(v,"TestPingServer: error",!1,g)})}function Un(u,g,v,A,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),A(v)}catch{}}function va(){this.g=new ln}function li(u,g,v){const A=v||"";try{pa(u,function(B,K){let at=B;y(B)&&(at=uo(B)),g.push(A+K+"="+encodeURIComponent(at))})}catch(B){throw g.push(A+"type="+encodeURIComponent("_badmap")),B}}function br(u){this.l=u.Ub||null,this.j=u.eb||!1}V(br,co),br.prototype.g=function(){return new Ui(this.l,this.j)},br.prototype.i=function(u){return function(){return u}}({});function Ui(u,g){Me.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Ui,Me),r=Ui.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,ci(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||p).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?ui(this):ci(this),this.readyState==3&&Eo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ui(this))},r.Qa=function(u){this.g&&(this.response=u,ui(this))},r.ga=function(){this.g&&ui(this)};function ui(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ci(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function ci(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function To(u){let g="";return mt(u,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function Be(u,g,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=To(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Gt(u,g,v))}function Yt(u){Me.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Yt,Me);var os=/^https?$/i,_a=["POST","PUT"];r=Yt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fa.g(),this.v=this.o?Gl(this.o):Gl(fa),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(K){tu(this,K);return}if(u=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var B in A)v.set(B,A[B]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const K of A.keys())v.set(K,A.get(K));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),B=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(_a,g,void 0))||A||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,at]of v)this.g.setRequestHeader(K,at);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ca(this),this.u=!0,this.g.send(u),this.u=!1}catch(K){tu(this,K)}};function tu(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,ls(u),hi(u)}function ls(u){u.A||(u.A=!0,Pe(u,"complete"),Pe(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Pe(this,"complete"),Pe(this,"abort"),hi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Yt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?us(this):this.bb())},r.bb=function(){us(this)};function us(u){if(u.h&&typeof f<"u"&&(!u.v[1]||zn(u)!=4||u.Z()!=2)){if(u.u&&zn(u)==4)Fl(u.Ea,0,u);else if(Pe(u,"readystatechange"),zn(u)==4){u.h=!1;try{const at=u.Z();t:switch(at){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var A;if(A=at===0){var B=String(u.D).match(yo)[1]||null;!B&&p.self&&p.self.location&&(B=p.self.location.protocol.slice(0,-1)),A=!os.test(B?B.toLowerCase():"")}v=A}if(v)Pe(u,"complete"),Pe(u,"success");else{u.m=6;try{var K=2<zn(u)?u.g.statusText:""}catch{K=""}u.l=K+" ["+u.Z()+"]",ls(u)}}finally{hi(u)}}}}function hi(u,g){if(u.g){Ca(u);const v=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Pe(u,"ready");try{v.onreadystatechange=A}catch{}}}function Ca(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function zn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),ii(g)}};function eu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function g1(u){const g={};u=(u.g&&2<=zn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(X(u[A]))continue;var v=O(u[A]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=g[B]||[];g[B]=K,K.push(v)}N(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ea(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function cs(u){this.Aa=0,this.i=[],this.j=new gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ea("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ea("baseRetryDelayMs",5e3,u),this.cb=Ea("retryDelaySeedMs",1e4,u),this.Wa=Ea("forwardChannelMaxRetries",2,u),this.wa=Ea("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new mo(u&&u.concurrentRequestLimit),this.Da=new va,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=cs.prototype,r.la=8,r.G=1,r.connect=function(u,g,v,A){Ae(0),this.W=u,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=lu(this,null,this.W),fs(this)};function Ao(u){if(nu(u),u.G==3){var g=u.U++,v=ve(u.I);if(Gt(v,"SID",u.K),Gt(v,"RID",g),Gt(v,"TYPE","terminate"),Ta(u,v),g=new si(u,u.j,g),g.L=2,g.v=ga(ve(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=g.v,v=!0),v||(g.g=uu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),de(g)}ou(u)}function hs(u){u.g&&(Aa(u),u.g.cancel(),u.g=null)}function nu(u){hs(u),u.u&&(p.clearTimeout(u.u),u.u=null),ds(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function fs(u){if(!go(u.h)&&!u.s){u.s=!0;var g=u.Ga;ot||L(),dt||(ot(),dt=!0),Vt.add(g,u),u.B=0}}function y1(u,g){return Xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=mr(T(u.Ga,u,g),wo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new si(this,this.j,u);let K=this.o;if(this.S&&(K?(K=R(K),D(K,this.S)):K=this.S),this.m!==null||this.O||(B.H=K,K=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=iu(this,B,g),v=ve(this.I),Gt(v,"RID",u),Gt(v,"CVER",22),this.D&&Gt(v,"X-HTTP-Session-Id",this.D),Ta(this,v),K&&(this.O?g="headers="+encodeURIComponent(String(To(K)))+"&"+g:this.m&&Be(v,this.m,K)),Tr(this.h,B),this.Ua&&Gt(v,"TYPE","init"),this.P?(Gt(v,"$req",g),Gt(v,"SID","null"),B.T=!0,Wn(B,v,null)):Wn(B,v,g),this.G=2}}else this.G==3&&(u?So(this,u):this.i.length==0||go(this.h)||So(this))};function So(u,g){var v;g?v=g.l:v=u.U++;const A=ve(u.I);Gt(A,"SID",u.K),Gt(A,"RID",v),Gt(A,"AID",u.T),Ta(u,A),u.m&&u.o&&Be(A,u.m,u.o),v=new si(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=iu(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Tr(u.h,v),Wn(v,A,g)}function Ta(u,g){u.H&&mt(u.H,function(v,A){Gt(g,A,v)}),u.l&&pa({},function(v,A){Gt(g,A,v)})}function iu(u,g,v){v=Math.min(u.i.length,v);var A=u.l?T(u.l.Na,u.l,u):null;t:{var B=u.i;let K=-1;for(;;){const at=["count="+v];K==-1?0<v?(K=B[0].g,at.push("ofs="+K)):K=0:at.push("ofs="+K);let Pt=!0;for(let Ne=0;Ne<v;Ne++){let jt=B[Ne].g;const qe=B[Ne].map;if(jt-=K,0>jt)K=Math.max(0,B[Ne].g-100),Pt=!1;else try{li(qe,at,"req"+jt+"_")}catch{A&&A(qe)}}if(Pt){A=at.join("&");break t}}}return u=u.i.splice(0,v),g.D=u,A}function ru(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;ot||L(),dt||(ot(),dt=!0),Vt.add(g,u),u.v=0}}function bo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=mr(T(u.Fa,u),wo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=mr(T(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),hs(this),au(this))};function Aa(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function au(u){u.g=new si(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=ve(u.qa);Gt(g,"RID","rpc"),Gt(g,"SID",u.K),Gt(g,"AID",u.T),Gt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&Gt(g,"TO",u.ja),Gt(g,"TYPE","xmlhttp"),Ta(u,g),u.m&&u.o&&Be(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ga(ve(g)),v.m=null,v.P=!0,Ni(v,u)}r.Za=function(){this.C!=null&&(this.C=null,hs(this),bo(this),Ae(19))};function ds(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function su(u,g){var v=null;if(u.g==g){ds(u),Aa(u),u.g=null;var A=2}else if(Er(u.h,g))v=g.D,On(u.h,g),A=1;else return;if(u.G!=0){if(g.o)if(A==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=u.B;A=ts(),Pe(A,new Kl(A,v)),fs(u)}else ru(u);else if(B=g.s,B==3||B==0&&0<g.X||!(A==1&&y1(u,g)||A==2&&bo(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),B){case 1:zi(u,5);break;case 4:zi(u,10);break;case 3:zi(u,6);break;default:zi(u,2)}}}function wo(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function zi(u,g){if(u.j.info("Error code "+g),g==2){var v=T(u.fb,u),A=u.Xa;const B=!A;A=new Vi(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ar(A,"https"),ga(A),B?Jl(A.toString(),v):ya(A.toString(),v)}else Ae(2);u.G=0,u.l&&u.l.sa(g),ou(u),nu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function ou(u){if(u.G=0,u.ka=[],u.l){const g=un(u.h);(g.length!=0||u.i.length!=0)&&(z(u.ka,g),z(u.ka,u.i),u.h.i.length=0,Q(u.i),u.i.length=0),u.l.ra()}}function lu(u,g,v){var A=v instanceof Vi?ve(v):new Vi(v);if(A.g!="")g&&(A.g=g+"."+A.g),ma(A,A.s);else{var B=p.location;A=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var K=new Vi(null);A&&Ar(K,A),g&&(K.g=g),B&&ma(K,B),v&&(K.l=v),A=K}return v=u.D,g=u.ya,v&&g&&Gt(A,v,g),Gt(A,"VER",u.la),Ta(u,A),A}function uu(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new Yt(new br({eb:v})):new Yt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cu(){}r=cu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ps(){}ps.prototype.g=function(u,g){return new cn(u,g)};function cn(u,g){Me.call(this),this.g=new cs(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!X(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!X(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new fi(this)}V(cn,Me),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Ao(this.g)},cn.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=uo(u),u=v);g.i.push(new h1(g.Ya++,u)),g.G==3&&fs(g)},cn.prototype.N=function(){this.g.l=null,delete this.j,Ao(this.g),delete this.g,cn.aa.N.call(this)};function hu(u){fr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const v in g){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}V(hu,fr);function fu(){Xn.call(this),this.status=1}V(fu,Xn);function fi(u){this.g=u}V(fi,cu),fi.prototype.ua=function(){Pe(this.g,"a")},fi.prototype.ta=function(u){Pe(this.g,new hu(u))},fi.prototype.sa=function(u){Pe(this.g,new fu)},fi.prototype.ra=function(){Pe(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,w9=function(){return new ps},b9=function(){return ts()},S9=Vn,O4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ie.NO_ERROR=0,Ie.TIMEOUT=8,Ie.HTTP_ERROR=6,_c=Ie,Ii.COMPLETE="complete",A9=Ii,Ql.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",Me.prototype.listen=Me.prototype.K,gl=Ql,Yt.prototype.listenOnce=Yt.prototype.L,Yt.prototype.getLastError=Yt.prototype.Ka,Yt.prototype.getLastErrorCode=Yt.prototype.Ba,Yt.prototype.getStatus=Yt.prototype.Z,Yt.prototype.getResponseJson=Yt.prototype.Oa,Yt.prototype.getResponseText=Yt.prototype.oa,Yt.prototype.send=Yt.prototype.ea,Yt.prototype.setWithCredentials=Yt.prototype.Ha,T9=Yt}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const If="@firebase/firestore",Nf="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new a2("@firebase/firestore");function Bs(){return Ya.logLevel}function ht(r,...t){if(Ya.logLevel<=Ht.DEBUG){const i=t.map(f2);Ya.debug(`Firestore (${ro}): ${r}`,...i)}}function or(r,...t){if(Ya.logLevel<=Ht.ERROR){const i=t.map(f2);Ya.error(`Firestore (${ro}): ${r}`,...i)}}function Ks(r,...t){if(Ya.logLevel<=Ht.WARN){const i=t.map(f2);Ya.warn(`Firestore (${ro}): ${r}`,...i)}}function f2(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r="Unexpected state"){const t=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+r;throw or(t),new Error(t)}function $t(r,t){r||Tt()}function wt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yt extends la{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(sn.UNAUTHENTICATED))}shutdown(){}}class _v{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Cv{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){$t(this.o===void 0);let s=this.i;const l=m=>this.i!==s?(s=this.i,i(m)):Promise.resolve();let c=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ir,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const m=c;t.enqueueRetryable(async()=>{await m.promise,await l(this.currentUser)})},p=m=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ir)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($t(typeof s.accessToken=="string"),new R9(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $t(t===null||typeof t=="string"),new sn(t)}}class Ev{constructor(t,i,s){this.l=t,this.h=i,this.P=s,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tv{constructor(t,i,s){this.l=t,this.h=i,this.P=s}getToken(){return Promise.resolve(new Ev(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Av{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ug(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){$t(this.o===void 0);const s=c=>{c.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ht("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Vf(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?($t(typeof i.token=="string"),this.R=i.token,new Vf(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let s=0;s<r;s++)i[s]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Sv(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<i&&(s+=t.charAt(l[c]%62))}return s}}function kt(r,t){return r<t?-1:r>t?1:0}function Ys(r,t,i){return r.length===t.length&&r.every((s,l)=>i(s,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=-62135596800,Lf=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(t){return Ue.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),s=Math.floor((t-1e3*i)*Lf);return new Ue(i,s)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new yt(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new yt(nt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<Of)throw new yt(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yt(nt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lf}_compareTo(t){return this.seconds===t.seconds?kt(this.nanoseconds,t.nanoseconds):kt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Of;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new Ue(0,0))}static max(){return new At(new Ue(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="__name__";class _i{constructor(t,i,s){i===void 0?i=0:i>t.length&&Tt(),s===void 0?s=t.length-i:s>t.length-i&&Tt(),this.segments=t,this.offset=i,this.len=s}get length(){return this.len}isEqual(t){return _i.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof _i?t.forEach(s=>{i.push(s)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,s=this.limit();i<s;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const s=Math.min(t.length,i.length);for(let l=0;l<s;l++){const c=_i.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Math.sign(t.length-i.length)}static compareSegments(t,i){const s=_i.isNumericId(t),l=_i.isNumericId(i);return s&&!l?-1:!s&&l?1:s&&l?_i.extractNumericId(t).compare(_i.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zr.fromString(t.substring(4,t.length-2))}}class ce extends _i{construct(t,i,s){return new ce(t,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const s of t){if(s.indexOf("//")>=0)throw new yt(nt.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(l=>l.length>0))}return new ce(i)}static emptyPath(){return new ce([])}}const bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends _i{construct(t,i,s){return new Je(t,i,s)}static isValidIdentifier(t){return bv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kf}static keyField(){return new Je([kf])}static fromServerFormat(t){const i=[];let s="",l=0;const c=()=>{if(s.length===0)throw new yt(nt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let f=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new yt(nt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[l+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new yt(nt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=m,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(s+=p,l++):(c(),l++)}if(c(),f)throw new yt(nt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Je(i)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(ce.fromString(t))}static fromName(t){return new _t(ce.fromString(t).popFirst(5))}static empty(){return new _t(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ce.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new ce(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=-1;function wv(r,t){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=At.fromTimestamp(s===1e9?new Ue(i+1,0):new Ue(i,s));return new ea(l,_t.empty(),t)}function Rv(r){return new ea(r.readTime,r.key,Rl)}class ea{constructor(t,i,s){this.readTime=t,this.documentKey=i,this.largestBatchId=s}static min(){return new ea(At.min(),_t.empty(),Rl)}static max(){return new ea(At.max(),_t.empty(),Rl)}}function xv(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=_t.comparator(r.documentKey,t.documentKey),i!==0?i:kt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(r){if(r.code!==nt.FAILED_PRECONDITION||r.message!==Dv)throw r;ht("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Tt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new Z((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof Z?i:Z.resolve(i)}catch(i){return Z.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):Z.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):Z.reject(i)}static resolve(t){return new Z((i,s)=>{i(t)})}static reject(t){return new Z((i,s)=>{s(t)})}static waitFor(t){return new Z((i,s)=>{let l=0,c=0,f=!1;t.forEach(p=>{++l,p.next(()=>{++c,f&&c===l&&i()},m=>s(m))}),f=!0,c===l&&i()})}static or(t){let i=Z.resolve(!1);for(const s of t)i=i.next(l=>l?Z.resolve(l):s());return i}static forEach(t,i){const s=[];return t.forEach((l,c)=>{s.push(i.call(this,l,c))}),this.waitFor(s)}static mapArray(t,i){return new Z((s,l)=>{const c=t.length,f=new Array(c);let p=0;for(let m=0;m<c;m++){const y=m;i(t[y]).next(C=>{f[y]=C,++p,p===c&&s(f)},C=>l(C))}})}static doWhile(t,i){return new Z((s,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):s()};c()})}}function Iv(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function so(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=s=>this.oe(s),this._e=s=>i.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Kc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=-1;function Yc(r){return r==null}function Mc(r){return r===0&&1/r==-1/0}function Nv(r){return typeof r=="number"&&Number.isInteger(r)&&!Mc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D9="";function Vv(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=Uf(t)),t=Ov(r.get(i),t);return Uf(t)}function Ov(r,t){let i=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case D9:i+="";break;default:i+=c}}return i}function Uf(r){return r+D9+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function ua(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function M9(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,i){this.comparator=t,this.root=i||Ze.EMPTY}insert(t,i){return new ge(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(t){return new ge(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(t){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,s)=>(t(i,s),!1))}toString(){const t=[];return this.inorderTraversal((i,s)=>(t.push(`${i}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fc(this.root,t,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fc(this.root,t,this.comparator,!0)}}class fc{constructor(t,i,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?s(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ze{constructor(t,i,s,l,c){this.key=t,this.value=i,this.color=s??Ze.RED,this.left=l??Ze.EMPTY,this.right=c??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,s,l,c){return new Ze(t??this.key,i??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,s),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let s,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Ze.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Tt();const t=this.left.check();if(t!==this.right.check())throw Tt();return t+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt()}get value(){throw Tt()}get color(){throw Tt()}get left(){throw Tt()}get right(){throw Tt()}copy(t,i,s,l,c){return this}insert(t,i,s){return new Ze(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.comparator=t,this.data=new ge(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,s)=>(t(i),!1))}forEachInRange(t,i){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Pf(this.data.getIterator())}getIteratorFrom(t){return new Pf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(s=>{i=i.add(s)}),i}isEqual(t){if(!(t instanceof ze)||this.size!==t.size)return!1;const i=this.data.getIterator(),s=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new ze(this.comparator);return i.data=t,i}}class Pf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.fields=t,t.sort(Je.comparator)}static empty(){return new Mn([])}unionWith(t){let i=new ze(Je.comparator);for(const s of this.fields)i=i.add(s);for(const s of t)i=i.add(s);return new Mn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Ys(this.fields,t.fields,(i,s)=>i.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new I9("Invalid base64 string: "+c):c}}(t);return new tn(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new tn(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return kt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const Lv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function na(r){if($t(!!r),typeof r=="string"){let t=0;const i=Lv.exec(r);if($t(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:be(r.seconds),nanos:be(r.nanos)}}function be(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ia(r){return typeof r=="string"?tn.fromBase64String(r):tn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N9="server_timestamp",V9="__type__",O9="__previous_value__",L9="__local_write_time__";function p2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[V9])===null||i===void 0?void 0:i.stringValue)===N9}function $c(r){const t=r.mapValue.fields[O9];return p2(t)?$c(t):t}function xl(r){const t=na(r.mapValue.fields[L9].timestampValue);return new Ue(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t,i,s,l,c,f,p,m,y){this.databaseId=t,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=y}}const Ic="(default)";class Dl{constructor(t,i){this.projectId=t,this.database=i||Ic}static empty(){return new Dl("","")}get isDefaultDatabase(){return this.database===Ic}isEqual(t){return t instanceof Dl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k9="__type__",Uv="__max__",dc={mapValue:{}},U9="__vector__",Nc="value";function ra(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?p2(r)?4:Pv(r)?9007199254740991:zv(r)?10:11:Tt()}function wi(r,t){if(r===t)return!0;const i=ra(r);if(i!==ra(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return xl(r).isEqual(xl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=na(l.timestampValue),p=na(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return ia(l.bytesValue).isEqual(ia(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return be(l.geoPointValue.latitude)===be(c.geoPointValue.latitude)&&be(l.geoPointValue.longitude)===be(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return be(l.integerValue)===be(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=be(l.doubleValue),p=be(c.doubleValue);return f===p?Mc(f)===Mc(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return Ys(r.arrayValue.values||[],t.arrayValue.values||[],wi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},p=c.mapValue.fields||{};if(zf(f)!==zf(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!wi(f[m],p[m])))return!1;return!0}(r,t);default:return Tt()}}function Ml(r,t){return(r.values||[]).find(i=>wi(i,t))!==void 0}function $s(r,t){if(r===t)return 0;const i=ra(r),s=ra(t);if(i!==s)return kt(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return kt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const p=be(c.integerValue||c.doubleValue),m=be(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,t);case 3:return jf(r.timestampValue,t.timestampValue);case 4:return jf(xl(r),xl(t));case 5:return kt(r.stringValue,t.stringValue);case 6:return function(c,f){const p=ia(c),m=ia(f);return p.compareTo(m)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const p=c.split("/"),m=f.split("/");for(let y=0;y<p.length&&y<m.length;y++){const C=kt(p[y],m[y]);if(C!==0)return C}return kt(p.length,m.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const p=kt(be(c.latitude),be(f.latitude));return p!==0?p:kt(be(c.longitude),be(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Bf(r.arrayValue,t.arrayValue);case 10:return function(c,f){var p,m,y,C;const S=c.fields||{},T=f.fields||{},I=(p=S[Nc])===null||p===void 0?void 0:p.arrayValue,V=(m=T[Nc])===null||m===void 0?void 0:m.arrayValue,Q=kt(((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0,((C=V==null?void 0:V.values)===null||C===void 0?void 0:C.length)||0);return Q!==0?Q:Bf(I,V)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===dc.mapValue&&f===dc.mapValue)return 0;if(c===dc.mapValue)return 1;if(f===dc.mapValue)return-1;const p=c.fields||{},m=Object.keys(p),y=f.fields||{},C=Object.keys(y);m.sort(),C.sort();for(let S=0;S<m.length&&S<C.length;++S){const T=kt(m[S],C[S]);if(T!==0)return T;const I=$s(p[m[S]],y[C[S]]);if(I!==0)return I}return kt(m.length,C.length)}(r.mapValue,t.mapValue);default:throw Tt()}}function jf(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return kt(r,t);const i=na(r),s=na(t),l=kt(i.seconds,s.seconds);return l!==0?l:kt(i.nanos,s.nanos)}function Bf(r,t){const i=r.values||[],s=t.values||[];for(let l=0;l<i.length&&l<s.length;++l){const c=$s(i[l],s[l]);if(c)return c}return kt(i.length,s.length)}function Xs(r){return L4(r)}function L4(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const s=na(i);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return ia(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return _t.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let s="[",l=!0;for(const c of i.values||[])l?l=!1:s+=",",s+=L4(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(i){const s=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${L4(i.fields[f])}`;return l+"}"}(r.mapValue):Tt()}function Cc(r){switch(ra(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=$c(r);return t?16+Cc(t):16;case 5:return 2*r.stringValue.length;case 6:return ia(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+Cc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return ua(s.fields,(c,f)=>{l+=c.length+Cc(f)}),l}(r.mapValue);default:throw Tt()}}function k4(r){return!!r&&"integerValue"in r}function m2(r){return!!r&&"arrayValue"in r}function qf(r){return!!r&&"nullValue"in r}function Hf(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ec(r){return!!r&&"mapValue"in r}function zv(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[k9])===null||i===void 0?void 0:i.stringValue)===U9}function El(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ua(r.mapValue.fields,(i,s)=>t.mapValue.fields[i]=El(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=El(r.arrayValue.values[i]);return t}return Object.assign({},r)}function Pv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Uv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this.value=t}static empty(){return new _n({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let s=0;s<t.length-1;++s)if(i=(i.mapValue.fields||{})[t.get(s)],!Ec(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=El(i)}setAll(t){let i=Je.emptyPath(),s={},l=[];t.forEach((f,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,s,l),s={},l=[],i=p.popLast()}f?s[p.lastSegment()]=El(f):l.push(p.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,s,l)}delete(t){const i=this.field(t.popLast());Ec(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return wi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=i.mapValue.fields[t.get(s)];Ec(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,s){ua(i,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new _n(El(this.value))}}function z9(r){const t=[];return ua(r.fields,(i,s)=>{const l=new Je([i]);if(Ec(s)){const c=z9(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new Mn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,i,s,l,c,f,p){this.key=t,this.documentType=i,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(t){return new on(t,0,At.min(),At.min(),At.min(),_n.empty(),0)}static newFoundDocument(t,i,s,l){return new on(t,1,i,At.min(),s,l,0)}static newNoDocument(t,i){return new on(t,2,i,At.min(),At.min(),_n.empty(),0)}static newUnknownDocument(t,i){return new on(t,3,i,At.min(),At.min(),_n.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,i){this.position=t,this.inclusive=i}}function Ff(r,t,i){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=_t.comparator(_t.fromName(f.referenceValue),i.key):s=$s(f,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gf(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!wi(r.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,i="asc"){this.field=t,this.dir=i}}function jv(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{}class ke extends P9{constructor(t,i,s){super(),this.field=t,this.op=i,this.value=s}static create(t,i,s){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,s):new qv(t,i,s):i==="array-contains"?new Gv(t,s):i==="in"?new Qv(t,s):i==="not-in"?new Kv(t,s):i==="array-contains-any"?new Yv(t,s):new ke(t,i,s)}static createKeyFieldInFilter(t,i,s){return i==="in"?new Hv(t,s):new Fv(t,s)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison($s(i,this.value)):i!==null&&ra(this.value)===ra(i)&&this.matchesComparison($s(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends P9{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new Ri(t,i)}matches(t){return j9(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function j9(r){return r.op==="and"}function B9(r){return Bv(r)&&j9(r)}function Bv(r){for(const t of r.filters)if(t instanceof Ri)return!1;return!0}function U4(r){if(r instanceof ke)return r.field.canonicalString()+r.op.toString()+Xs(r.value);if(B9(r))return r.filters.map(t=>U4(t)).join(",");{const t=r.filters.map(i=>U4(i)).join(",");return`${r.op}(${t})`}}function q9(r,t){return r instanceof ke?function(s,l){return l instanceof ke&&s.op===l.op&&s.field.isEqual(l.field)&&wi(s.value,l.value)}(r,t):r instanceof Ri?function(s,l){return l instanceof Ri&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,p)=>c&&q9(f,l.filters[p]),!0):!1}(r,t):void Tt()}function H9(r){return r instanceof ke?function(i){return`${i.field.canonicalString()} ${i.op} ${Xs(i.value)}`}(r):r instanceof Ri?function(i){return i.op.toString()+" {"+i.getFilters().map(H9).join(" ,")+"}"}(r):"Filter"}class qv extends ke{constructor(t,i,s){super(t,i,s),this.key=_t.fromName(s.referenceValue)}matches(t){const i=_t.comparator(t.key,this.key);return this.matchesComparison(i)}}class Hv extends ke{constructor(t,i){super(t,"in",i),this.keys=F9("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Fv extends ke{constructor(t,i){super(t,"not-in",i),this.keys=F9("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function F9(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(s=>_t.fromName(s.referenceValue))}class Gv extends ke{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return m2(i)&&Ml(i.arrayValue,this.value)}}class Qv extends ke{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Ml(this.value.arrayValue,i)}}class Kv extends ke{constructor(t,i){super(t,"not-in",i)}matches(t){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!Ml(this.value.arrayValue,i)}}class Yv extends ke{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!m2(i)||!i.arrayValue.values)&&i.arrayValue.values.some(s=>Ml(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(t,i=null,s=[],l=[],c=null,f=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=p,this.le=null}}function Qf(r,t=null,i=[],s=[],l=null,c=null,f=null){return new $v(r,t,i,s,l,c,f)}function g2(r){const t=wt(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(s=>U4(s)).join(","),i+="|ob:",i+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Yc(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Xs(s)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Xs(s)).join(",")),t.le=i}return t.le}function y2(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!jv(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!q9(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Gf(r.startAt,t.startAt)&&Gf(r.endAt,t.endAt)}function z4(r){return _t.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,i=null,s=[],l=[],c=null,f="F",p=null,m=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Xv(r,t,i,s,l,c,f,p){return new Xc(r,t,i,s,l,c,f,p)}function v2(r){return new Xc(r)}function Kf(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wv(r){return r.collectionGroup!==null}function Tl(r){const t=wt(r);if(t.he===null){t.he=[];const i=new Set;for(const c of t.explicitOrderBy)t.he.push(c),i.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new ze(Je.comparator);return f.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.he.push(new Oc(c,s))}),i.has(Je.keyField().canonicalString())||t.he.push(new Oc(Je.keyField(),s))}return t.he}function Ei(r){const t=wt(r);return t.Pe||(t.Pe=Zv(t,Tl(r))),t.Pe}function Zv(r,t){if(r.limitType==="F")return Qf(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Oc(l.field,c)});const i=r.endAt?new Vc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Vc(r.startAt.position,r.startAt.inclusive):null;return Qf(r.path,r.collectionGroup,t,r.filters,r.limit,i,s)}}function P4(r,t,i){return new Xc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Wc(r,t){return y2(Ei(r),Ei(t))&&r.limitType===t.limitType}function G9(r){return`${g2(Ei(r))}|lt:${r.limitType}`}function qs(r){return`Query(target=${function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(l=>H9(l)).join(", ")}]`),Yc(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map(l=>Xs(l)).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map(l=>Xs(l)).join(",")),`Target(${s})`}(Ei(r))}; limitType=${r.limitType})`}function Zc(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):_t.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of Tl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,p,m){const y=Ff(f,p,m);return f.inclusive?y<=0:y<0}(s.startAt,Tl(s),l)||s.endAt&&!function(f,p,m){const y=Ff(f,p,m);return f.inclusive?y>=0:y>0}(s.endAt,Tl(s),l))}(r,t)}function Jv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q9(r){return(t,i)=>{let s=!1;for(const l of Tl(r)){const c=t_(l,t,i);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function t_(r,t,i){const s=r.field.isKeyField()?_t.comparator(t.key,i.key):function(c,f,p){const m=f.data.field(c),y=p.data.field(c);return m!==null&&y!==null?$s(m,y):Tt()}(r.field,t,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Tt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ua(this.inner,(i,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return M9(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new ge(_t.comparator);function lr(){return e_}const K9=new ge(_t.comparator);function yl(...r){let t=K9;for(const i of r)t=t.insert(i.key,i);return t}function Y9(r){let t=K9;return r.forEach((i,s)=>t=t.insert(i,s.overlayedDocument)),t}function Fa(){return Al()}function $9(){return Al()}function Al(){return new Za(r=>r.toString(),(r,t)=>r.isEqual(t))}const n_=new ge(_t.comparator),i_=new ze(_t.comparator);function Ot(...r){let t=i_;for(const i of r)t=t.add(i);return t}const r_=new ze(kt);function a_(){return r_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(t)?"-0":t}}function X9(r){return{integerValue:""+r}}function W9(r,t){return Nv(t)?X9(t):_2(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this._=void 0}}function s_(r,t,i){return r instanceof Lc?function(l,c){const f={fields:{[V9]:{stringValue:N9},[L9]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&p2(c)&&(c=$c(c)),c&&(f.fields[O9]=c),{mapValue:f}}(i,t):r instanceof Ws?J9(r,t):r instanceof Il?t7(r,t):function(l,c){const f=Z9(l,c),p=Yf(f)+Yf(l.Ie);return k4(f)&&k4(l.Ie)?X9(p):_2(l.serializer,p)}(r,t)}function o_(r,t,i){return r instanceof Ws?J9(r,t):r instanceof Il?t7(r,t):i}function Z9(r,t){return r instanceof Nl?function(s){return k4(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Lc extends Jc{}class Ws extends Jc{constructor(t){super(),this.elements=t}}function J9(r,t){const i=e7(t);for(const s of r.elements)i.some(l=>wi(l,s))||i.push(s);return{arrayValue:{values:i}}}class Il extends Jc{constructor(t){super(),this.elements=t}}function t7(r,t){let i=e7(t);for(const s of r.elements)i=i.filter(l=>!wi(l,s));return{arrayValue:{values:i}}}class Nl extends Jc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function Yf(r){return be(r.integerValue||r.doubleValue)}function e7(r){return m2(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(t,i){this.field=t,this.transform=i}}function l_(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof Ws&&l instanceof Ws||s instanceof Il&&l instanceof Il?Ys(s.elements,l.elements,wi):s instanceof Nl&&l instanceof Nl?wi(s.Ie,l.Ie):s instanceof Lc&&l instanceof Lc}(r.transform,t.transform)}class u_{constructor(t,i){this.version=t,this.transformResults=i}}class Ti{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ti}static exists(t){return new Ti(void 0,t)}static updateTime(t){return new Ti(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class t1{}function i7(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new a7(r.key,Ti.none()):new kl(r.key,r.data,Ti.none());{const i=r.data,s=_n.empty();let l=new ze(Je.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new ca(r.key,s,new Mn(l.toArray()),Ti.none())}}function c_(r,t,i){r instanceof kl?function(l,c,f){const p=l.value.clone(),m=Xf(l.fieldTransforms,c,f.transformResults);p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,i):r instanceof ca?function(l,c,f){if(!Tc(l.precondition,c))return void c.convertToUnknownDocument(f.version);const p=Xf(l.fieldTransforms,c,f.transformResults),m=c.data;m.setAll(r7(l)),m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function Sl(r,t,i,s){return r instanceof kl?function(c,f,p,m){if(!Tc(c.precondition,f))return p;const y=c.value.clone(),C=Wf(c.fieldTransforms,m,f);return y.setAll(C),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,s):r instanceof ca?function(c,f,p,m){if(!Tc(c.precondition,f))return p;const y=Wf(c.fieldTransforms,m,f),C=f.data;return C.setAll(r7(c)),C.setAll(y),f.convertToFoundDocument(f.version,C).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(S=>S.field))}(r,t,i,s):function(c,f,p){return Tc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,i)}function h_(r,t){let i=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=Z9(s.transform,l||null);c!=null&&(i===null&&(i=_n.empty()),i.set(s.field,c))}return i||null}function $f(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Ys(s,l,(c,f)=>l_(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kl extends t1{constructor(t,i,s,l=[]){super(),this.key=t,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ca extends t1{constructor(t,i,s,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function r7(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const s=r.data.field(i);t.set(i,s)}}),t}function Xf(r,t,i){const s=new Map;$t(r.length===i.length);for(let l=0;l<i.length;l++){const c=r[l],f=c.transform,p=t.data.field(c.field);s.set(c.field,o_(f,p,i[l]))}return s}function Wf(r,t,i){const s=new Map;for(const l of r){const c=l.transform,f=i.data.field(l.field);s.set(l.field,s_(c,f,t))}return s}class a7 extends t1{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f_ extends t1{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t,i,s,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&c_(c,t,s[l])}}applyToLocalView(t,i){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(i=Sl(s,t,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(i=Sl(s,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const s=$9();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=i.has(l.key)?null:p;const m=i7(f,p);m!==null&&s.set(l.key,m),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Ot())}isEqual(t){return this.batchId===t.batchId&&Ys(this.mutations,t.mutations,(i,s)=>$f(i,s))&&Ys(this.baseMutations,t.baseMutations,(i,s)=>$f(i,s))}}class C2{constructor(t,i,s,l){this.batch=t,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(t,i,s){$t(t.mutations.length===s.length);let l=function(){return n_}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new C2(t,i,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,qt;function g_(r){switch(r){case nt.OK:return Tt();case nt.CANCELLED:case nt.UNKNOWN:case nt.DEADLINE_EXCEEDED:case nt.RESOURCE_EXHAUSTED:case nt.INTERNAL:case nt.UNAVAILABLE:case nt.UNAUTHENTICATED:return!1;case nt.INVALID_ARGUMENT:case nt.NOT_FOUND:case nt.ALREADY_EXISTS:case nt.PERMISSION_DENIED:case nt.FAILED_PRECONDITION:case nt.ABORTED:case nt.OUT_OF_RANGE:case nt.UNIMPLEMENTED:case nt.DATA_LOSS:return!0;default:return Tt()}}function s7(r){if(r===void 0)return or("GRPC error has no .code"),nt.UNKNOWN;switch(r){case De.OK:return nt.OK;case De.CANCELLED:return nt.CANCELLED;case De.UNKNOWN:return nt.UNKNOWN;case De.DEADLINE_EXCEEDED:return nt.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return nt.RESOURCE_EXHAUSTED;case De.INTERNAL:return nt.INTERNAL;case De.UNAVAILABLE:return nt.UNAVAILABLE;case De.UNAUTHENTICATED:return nt.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return nt.INVALID_ARGUMENT;case De.NOT_FOUND:return nt.NOT_FOUND;case De.ALREADY_EXISTS:return nt.ALREADY_EXISTS;case De.PERMISSION_DENIED:return nt.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return nt.FAILED_PRECONDITION;case De.ABORTED:return nt.ABORTED;case De.OUT_OF_RANGE:return nt.OUT_OF_RANGE;case De.UNIMPLEMENTED:return nt.UNIMPLEMENTED;case De.DATA_LOSS:return nt.DATA_LOSS;default:return Tt()}}(qt=De||(De={}))[qt.OK=0]="OK",qt[qt.CANCELLED=1]="CANCELLED",qt[qt.UNKNOWN=2]="UNKNOWN",qt[qt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qt[qt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qt[qt.NOT_FOUND=5]="NOT_FOUND",qt[qt.ALREADY_EXISTS=6]="ALREADY_EXISTS",qt[qt.PERMISSION_DENIED=7]="PERMISSION_DENIED",qt[qt.UNAUTHENTICATED=16]="UNAUTHENTICATED",qt[qt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qt[qt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qt[qt.ABORTED=10]="ABORTED",qt[qt.OUT_OF_RANGE=11]="OUT_OF_RANGE",qt[qt.UNIMPLEMENTED=12]="UNIMPLEMENTED",qt[qt.INTERNAL=13]="INTERNAL",qt[qt.UNAVAILABLE=14]="UNAVAILABLE",qt[qt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Zr([4294967295,4294967295],0);function Zf(r){const t=y_().encode(r),i=new E9;return i.update(t),new Uint8Array(i.digest())}function Jf(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Zr([i,s],0),new Zr([l,c],0)]}class E2{constructor(t,i,s){if(this.bitmap=t,this.padding=i,this.hashCount=s,i<0||i>=8)throw new vl(`Invalid padding: ${i}`);if(s<0)throw new vl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new vl(`Invalid hash count: ${s}`);if(t.length===0&&i!==0)throw new vl(`Invalid padding when bitmap length is 0: ${i}`);this.Ee=8*t.length-i,this.de=Zr.fromNumber(this.Ee)}Ae(t,i,s){let l=t.add(i.multiply(Zr.fromNumber(s)));return l.compare(v_)===1&&(l=new Zr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const i=Zf(t),[s,l]=Jf(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);if(!this.Re(f))return!1}return!0}static create(t,i,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new E2(c,l,i);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.Ee===0)return;const i=Zf(t),[s,l]=Jf(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);this.Ve(f)}}Ve(t){const i=Math.floor(t/8),s=t%8;this.bitmap[i]|=1<<s}}class vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(t,i,s,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,s){const l=new Map;return l.set(t,Ul.createSynthesizedTargetChangeForCurrentChange(t,i,s)),new e1(At.min(),l,new ge(kt),lr(),Ot())}}class Ul{constructor(t,i,s,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,s){return new Ul(s,i,Ot(),Ot(),Ot())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,i,s,l){this.me=t,this.removedTargetIds=i,this.key=s,this.fe=l}}class o7{constructor(t,i){this.targetId=t,this.ge=i}}class l7{constructor(t,i,s=tn.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=s,this.cause=l}}class t6{constructor(){this.pe=0,this.ye=e6(),this.we=tn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Ot(),i=Ot(),s=Ot();return this.ye.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:Tt()}}),new Ul(this.we,this.be,t,i,s)}Me(){this.Se=!1,this.ye=e6()}xe(t,i){this.Se=!0,this.ye=this.ye.insert(t,i)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,$t(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class __{constructor(t){this.ke=t,this.qe=new Map,this.Qe=lr(),this.$e=pc(),this.Ke=pc(),this.Ue=new ge(kt)}We(t){for(const i of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(i,t.fe):this.ze(i,t.key,t.fe);for(const i of t.removedTargetIds)this.ze(i,t.key,t.fe)}je(t){this.forEachTarget(t,i=>{const s=this.He(i);switch(t.state){case 0:this.Je(i)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(i);break;case 3:this.Je(i)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(i)&&(this.Ye(i),s.Ce(t.resumeToken));break;default:Tt()}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.qe.forEach((s,l)=>{this.Je(l)&&i(l)})}Ze(t){const i=t.targetId,s=t.ge.count,l=this.Xe(i);if(l){const c=l.target;if(z4(c))if(s===0){const f=new _t(c.path);this.ze(i,f,on.newNoDocument(f,At.min()))}else $t(s===1);else{const f=this.et(i);if(f!==s){const p=this.tt(t),m=p?this.nt(p,t,f):1;if(m!==0){this.Ye(i);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,y)}}}}}tt(t){const i=t.ge.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=i;let f,p;try{f=ia(s).toUint8Array()}catch(m){if(m instanceof I9)return Ks("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new E2(f,l,c)}catch(m){return Ks(m instanceof vl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.Ee===0?null:p}nt(t,i,s){return i.ge.count===s-this.st(t,i.targetId)?0:2}st(t,i){const s=this.ke.getRemoteKeysForTarget(i);let l=0;return s.forEach(c=>{const f=this.ke.it(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(p)||(this.ze(i,c,null),l++)}),l}ot(t){const i=new Map;this.qe.forEach((c,f)=>{const p=this.Xe(f);if(p){if(c.current&&z4(p.target)){const m=new _t(p.target.path);this._t(m).has(f)||this.ut(f,m)||this.ze(f,m,on.newNoDocument(m,t))}c.ve&&(i.set(f,c.Fe()),c.Me())}});let s=Ot();this.Ke.forEach((c,f)=>{let p=!0;f.forEachWhile(m=>{const y=this.Xe(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const l=new e1(t,i,this.Ue,this.Qe,s);return this.Qe=lr(),this.$e=pc(),this.Ke=pc(),this.Ue=new ge(kt),l}Ge(t,i){if(!this.Je(t))return;const s=this.ut(t,i.key)?2:0;this.He(t).xe(i.key,s),this.Qe=this.Qe.insert(i.key,i),this.$e=this.$e.insert(i.key,this._t(i.key).add(t)),this.Ke=this.Ke.insert(i.key,this.ct(i.key).add(t))}ze(t,i,s){if(!this.Je(t))return;const l=this.He(t);this.ut(t,i)?l.xe(i,1):l.Oe(i),this.Ke=this.Ke.insert(i,this.ct(i).delete(t)),this.Ke=this.Ke.insert(i,this.ct(i).add(t)),s&&(this.Qe=this.Qe.insert(i,s))}removeTarget(t){this.qe.delete(t)}et(t){const i=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let i=this.qe.get(t);return i||(i=new t6,this.qe.set(t,i)),i}ct(t){let i=this.Ke.get(t);return i||(i=new ze(kt),this.Ke=this.Ke.insert(t,i)),i}_t(t){let i=this.$e.get(t);return i||(i=new ze(kt),this.$e=this.$e.insert(t,i)),i}Je(t){const i=this.Xe(t)!==null;return i||ht("WatchChangeAggregator","Detected inactive target",t),i}Xe(t){const i=this.qe.get(t);return i&&i.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new t6),this.ke.getRemoteKeysForTarget(t).forEach(i=>{this.ze(t,i,null)})}ut(t,i){return this.ke.getRemoteKeysForTarget(t).has(i)}}function pc(){return new ge(_t.comparator)}function e6(){return new ge(_t.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},E_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T_={and:"AND",or:"OR"};class A_{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function j4(r,t){return r.useProto3Json||Yc(t)?t:{value:t}}function kc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function u7(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function S_(r,t){return kc(r,t.toTimestamp())}function Ai(r){return $t(!!r),At.fromTimestamp(function(i){const s=na(i);return new Ue(s.seconds,s.nanos)}(r))}function T2(r,t){return B4(r,t).canonicalString()}function B4(r,t){const i=function(l){return new ce(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function c7(r){const t=ce.fromString(r);return $t(m7(t)),t}function q4(r,t){return T2(r.databaseId,t.path)}function T4(r,t){const i=c7(t);if(i.get(1)!==r.databaseId.projectId)throw new yt(nt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new yt(nt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new _t(f7(i))}function h7(r,t){return T2(r.databaseId,t)}function b_(r){const t=c7(r);return t.length===4?ce.emptyPath():f7(t)}function H4(r){return new ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function f7(r){return $t(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function n6(r,t,i){return{name:q4(r,t),fields:i.value.mapValue.fields}}function w_(r,t){let i;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Tt()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,C){return y.useProto3Json?($t(C===void 0||typeof C=="string"),tn.fromBase64String(C||"")):($t(C===void 0||C instanceof Buffer||C instanceof Uint8Array),tn.fromUint8Array(C||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(y){const C=y.code===void 0?nt.UNKNOWN:s7(y.code);return new yt(C,y.message||"")}(f);i=new l7(s,l,c,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=T4(r,s.document.name),c=Ai(s.document.updateTime),f=s.document.createTime?Ai(s.document.createTime):At.min(),p=new _n({mapValue:{fields:s.document.fields}}),m=on.newFoundDocument(l,c,f,p),y=s.targetIds||[],C=s.removedTargetIds||[];i=new Ac(y,C,m.key,m)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=T4(r,s.document),c=s.readTime?Ai(s.readTime):At.min(),f=on.newNoDocument(l,c),p=s.removedTargetIds||[];i=new Ac([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=T4(r,s.document),c=s.removedTargetIds||[];i=new Ac([],c,l,null)}else{if(!("filter"in t))return Tt();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new m_(l,c),p=s.targetId;i=new o7(p,f)}}return i}function R_(r,t){let i;if(t instanceof kl)i={update:n6(r,t.key,t.value)};else if(t instanceof a7)i={delete:q4(r,t.key)};else if(t instanceof ca)i={update:n6(r,t.key,t.data),updateMask:k_(t.fieldMask)};else{if(!(t instanceof f_))return Tt();i={verify:q4(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const p=f.transform;if(p instanceof Lc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ws)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Il)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Nl)return{fieldPath:f.field.canonicalString(),increment:p.Ie};throw Tt()}(0,s))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:S_(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Tt()}(r,t.precondition)),i}function x_(r,t){return r&&r.length>0?($t(t!==void 0),r.map(i=>function(l,c){let f=l.updateTime?Ai(l.updateTime):Ai(c);return f.isEqual(At.min())&&(f=Ai(c)),new u_(f,l.transformResults||[])}(i,t))):[]}function D_(r,t){return{documents:[h7(r,t.path)]}}function M_(r,t){const i={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=h7(r,l);const c=function(y){if(y.length!==0)return p7(Ri.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(C=>function(T){return{field:Hs(T.field),direction:V_(T.dir)}}(C))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const p=j4(r,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:i,parent:l}}function I_(r){let t=b_(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){$t(s===1);const C=i.from[0];C.allDescendants?l=C.collectionId:t=t.child(C.collectionId)}let c=[];i.where&&(c=function(S){const T=d7(S);return T instanceof Ri&&B9(T)?T.getFilters():[T]}(i.where));let f=[];i.orderBy&&(f=function(S){return S.map(T=>function(V){return new Oc(Fs(V.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(i.orderBy));let p=null;i.limit&&(p=function(S){let T;return T=typeof S=="object"?S.value:S,Yc(T)?null:T}(i.limit));let m=null;i.startAt&&(m=function(S){const T=!!S.before,I=S.values||[];return new Vc(I,T)}(i.startAt));let y=null;return i.endAt&&(y=function(S){const T=!S.before,I=S.values||[];return new Vc(I,T)}(i.endAt)),Xv(t,l,f,c,p,"F",m,y)}function N_(r,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt()}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function d7(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Fs(i.unaryFilter.field);return ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Fs(i.unaryFilter.field);return ke.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Fs(i.unaryFilter.field);return ke.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Fs(i.unaryFilter.field);return ke.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Tt()}}(r):r.fieldFilter!==void 0?function(i){return ke.create(Fs(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Tt()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return Ri.create(i.compositeFilter.filters.map(s=>d7(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Tt()}}(i.compositeFilter.op))}(r):Tt()}function V_(r){return C_[r]}function O_(r){return E_[r]}function L_(r){return T_[r]}function Hs(r){return{fieldPath:r.canonicalString()}}function Fs(r){return Je.fromServerFormat(r.fieldPath)}function p7(r){return r instanceof ke?function(i){if(i.op==="=="){if(Hf(i.value))return{unaryFilter:{field:Hs(i.field),op:"IS_NAN"}};if(qf(i.value))return{unaryFilter:{field:Hs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Hf(i.value))return{unaryFilter:{field:Hs(i.field),op:"IS_NOT_NAN"}};if(qf(i.value))return{unaryFilter:{field:Hs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(i.field),op:O_(i.op),value:i.value}}}(r):r instanceof Ri?function(i){const s=i.getFilters().map(l=>p7(l));return s.length===1?s[0]:{compositeFilter:{op:L_(i.op),filters:s}}}(r):Tt()}function k_(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function m7(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,i,s,l,c=At.min(),f=At.min(),p=tn.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new Yr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.Tt=t}}function z_(r){const t=I_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?P4(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.Tn=new j_}addToCollectionParentIndex(t,i){return this.Tn.add(i),Z.resolve()}getCollectionParents(t,i){return Z.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return Z.resolve()}deleteFieldIndex(t,i){return Z.resolve()}deleteAllFieldIndexes(t){return Z.resolve()}createTargetIndexes(t,i){return Z.resolve()}getDocumentsMatchingTarget(t,i){return Z.resolve(null)}getIndexType(t,i){return Z.resolve(0)}getFieldIndexes(t,i){return Z.resolve([])}getNextCollectionGroupToUpdate(t){return Z.resolve(null)}getMinOffset(t,i){return Z.resolve(ea.min())}getMinOffsetFromCollectionGroup(t,i){return Z.resolve(ea.min())}updateCollectionGroup(t,i,s){return Z.resolve()}updateIndexEntries(t,i){return Z.resolve()}}class j_{constructor(){this.index={}}add(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i]||new ze(ce.comparator),c=!l.has(s);return this.index[i]=l.add(s),c}has(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(t){return(this.index[t]||new ze(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i6={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g7=41943040;class vn{static withCacheSize(t){return new vn(t,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(g7,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Zs(0)}static Un(){return new Zs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6="LruGarbageCollector",B_=1048576;function a6([r,t],[i,s]){const l=kt(r,i);return l===0?kt(t,s):l}class q_{constructor(t){this.Hn=t,this.buffer=new ze(a6),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();a6(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class H_{constructor(t,i,s){this.garbageCollector=t,this.asyncQueue=i,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ht(r6,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){so(i)?ht(r6,"Ignoring IndexedDB error during garbage collection: ",i):await ao(i)}await this.er(3e5)})}}class F_{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(s=>Math.floor(i/100*s))}nthSequenceNumber(t,i){if(i===0)return Z.resolve(Kc.ae);const s=new q_(i);return this.tr.forEachTarget(t,l=>s.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>s.Zn(l))).next(()=>s.maxValue)}removeTargets(t,i,s){return this.tr.removeTargets(t,i,s)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ht("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(i6)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ht("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i6):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let s,l,c,f,p,m,y;const C=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ht("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,f=Date.now(),this.nthSequenceNumber(t,l))).next(S=>(s=S,p=Date.now(),this.removeTargets(t,s,i))).next(S=>(c=S,m=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),Bs()<=Ht.DEBUG&&ht("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-C}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${c} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(y-m)+`ms
Total Duration: ${y-C}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:S})))}}function G_(r,t){return new F_(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.changes=new Za(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?Z.resolve(s):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(t,i,s,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,i){let s=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(s!==null&&Sl(s.mutation,l,Mn.empty(),Ue.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.getLocalViewOfDocuments(t,s,Ot()).next(()=>s))}getLocalViewOfDocuments(t,i,s=Ot()){const l=Fa();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,s).next(c=>{let f=yl();return c.forEach((p,m)=>{f=f.insert(p,m.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const s=Fa();return this.populateOverlays(t,s,i).next(()=>this.computeViews(t,i,s,Ot()))}populateOverlays(t,i,s){const l=[];return s.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,p)=>{i.set(f,p)})})}computeViews(t,i,s,l){let c=lr();const f=Al(),p=function(){return Al()}();return i.forEach((m,y)=>{const C=s.get(y.key);l.has(y.key)&&(C===void 0||C.mutation instanceof ca)?c=c.insert(y.key,y):C!==void 0?(f.set(y.key,C.mutation.getFieldMask()),Sl(C.mutation,y,C.mutation.getFieldMask(),Ue.now())):f.set(y.key,Mn.empty())}),this.recalculateAndSaveOverlays(t,c).next(m=>(m.forEach((y,C)=>f.set(y,C)),i.forEach((y,C)=>{var S;return p.set(y,new K_(C,(S=f.get(y))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(t,i){const s=Al();let l=new ge((f,p)=>f-p),c=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const p of f)p.keys().forEach(m=>{const y=i.get(m);if(y===null)return;let C=s.get(m)||Mn.empty();C=p.applyToLocalView(y,C),s.set(m,C);const S=(l.get(p.batchId)||Ot()).add(m);l=l.insert(p.batchId,S)})}).next(()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),y=m.key,C=m.value,S=$9();C.forEach(T=>{if(!c.has(T)){const I=i7(i.get(T),s.get(T));I!==null&&S.set(T,I),c=c.add(T)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return Z.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,i,s,l){return function(f){return _t.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Wv(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,s,l):this.getDocumentsMatchingCollectionQuery(t,i,s,l)}getNextDocuments(t,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,s.largestBatchId,l-c.size):Z.resolve(Fa());let p=Rl,m=c;return f.next(y=>Z.forEach(y,(C,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),c.get(C)?Z.resolve():this.remoteDocumentCache.getEntry(t,C).next(T=>{m=m.insert(C,T)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,m,y,Ot())).next(C=>({batchId:p,changes:Y9(C)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new _t(i)).next(s=>{let l=yl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,s,l){const c=i.collectionGroup;let f=yl();return this.indexManager.getCollectionParents(t,c).next(p=>Z.forEach(p,m=>{const y=function(S,T){return new Xc(T,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(i,m.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(C=>{C.forEach((S,T)=>{f=f.insert(S,T)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,s,c,l))).next(f=>{c.forEach((m,y)=>{const C=y.getKey();f.get(C)===null&&(f=f.insert(C,on.newInvalidDocument(C)))});let p=yl();return f.forEach((m,y)=>{const C=c.get(m);C!==void 0&&Sl(C.mutation,y,Mn.empty(),Ue.now()),Zc(i,y)&&(p=p.insert(m,y))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return Z.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Ai(l.createTime)}}(i)),Z.resolve()}getNamedQuery(t,i){return Z.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:z_(l.bundledQuery),readTime:Ai(l.readTime)}}(i)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.overlays=new ge(_t.comparator),this.Rr=new Map}getOverlay(t,i){return Z.resolve(this.overlays.get(i))}getOverlays(t,i){const s=Fa();return Z.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,i,s){return s.forEach((l,c)=>{this.Et(t,i,c)}),Z.resolve()}removeOverlaysForBatchId(t,i,s){const l=this.Rr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),Z.resolve()}getOverlaysForCollection(t,i,s){const l=Fa(),c=i.length+1,f=new _t(i.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,y=m.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&m.largestBatchId>s&&l.set(m.getKey(),m)}return Z.resolve(l)}getOverlaysForCollectionGroup(t,i,s,l){let c=new ge((y,C)=>y-C);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let C=c.get(y.largestBatchId);C===null&&(C=Fa(),c=c.insert(y.largestBatchId,C)),C.set(y.getKey(),y)}}const p=Fa(),m=c.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,C)=>p.set(y,C)),!(p.size()>=l)););return Z.resolve(p)}Et(t,i,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Rr.get(l.largestBatchId).delete(s.key);this.Rr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new p_(i,s));let c=this.Rr.get(i);c===void 0&&(c=Ot(),this.Rr.set(i,c)),this.Rr.set(i,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(t){return Z.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.Vr=new ze(Qe.mr),this.gr=new ze(Qe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const s=new Qe(t,i);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,i){t.forEach(s=>this.addReference(s,i))}removeReference(t,i){this.wr(new Qe(t,i))}br(t,i){t.forEach(s=>this.removeReference(s,i))}Sr(t){const i=new _t(new ce([])),s=new Qe(i,t),l=new Qe(i,t+1),c=[];return this.gr.forEachInRange([s,l],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new _t(new ce([])),s=new Qe(i,t),l=new Qe(i,t+1);let c=Ot();return this.gr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new Qe(t,0),s=this.Vr.firstAfterOrEqual(i);return s!==null&&t.isEqual(s.key)}}class Qe{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return _t.comparator(t.key,i.key)||kt(t.Cr,i.Cr)}static pr(t,i){return kt(t.Cr,i.Cr)||_t.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new ze(Qe.mr)}checkEmpty(t){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,s,l){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new d_(c,i,s,l);this.mutationQueue.push(f);for(const p of l)this.Mr=this.Mr.add(new Qe(p.key,c)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Z.resolve(f)}lookupMutationBatch(t,i){return Z.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const s=i+1,l=this.Nr(s),c=l<0?0:l;return Z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?d2:this.Fr-1)}getAllMutationBatches(t){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const s=new Qe(i,0),l=new Qe(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,l],f=>{const p=this.Or(f.Cr);c.push(p)}),Z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let s=new ze(kt);return i.forEach(l=>{const c=new Qe(l,0),f=new Qe(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],p=>{s=s.add(p.Cr)})}),Z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,i){const s=i.path,l=s.length+1;let c=s;_t.isDocumentKey(c)||(c=c.child(""));const f=new Qe(new _t(c),0);let p=new ze(kt);return this.Mr.forEachWhile(m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(m.Cr)),!0)},f),Z.resolve(this.Br(p))}Br(t){const i=[];return t.forEach(s=>{const l=this.Or(s);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){$t(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Z.forEach(i.mutations,l=>{const c=new Qe(l.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,i){const s=new Qe(i,0),l=this.Mr.firstAfterOrEqual(s);return Z.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Z.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t){this.kr=t,this.docs=function(){return new ge(_t.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const s=i.key,l=this.docs.get(s),c=l?l.size:0,f=this.kr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const s=this.docs.get(i);return Z.resolve(s?s.document.mutableCopy():on.newInvalidDocument(i))}getEntries(t,i){let s=lr();return i.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():on.newInvalidDocument(l))}),Z.resolve(s)}getDocumentsMatchingQuery(t,i,s,l){let c=lr();const f=i.path,p=new _t(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:y,value:{document:C}}=m.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||xv(Rv(C),s)<=0||(l.has(C.key)||Zc(i,C))&&(c=c.insert(C.key,C.mutableCopy()))}return Z.resolve(c)}getAllFromCollectionGroup(t,i,s,l){Tt()}qr(t,i){return Z.forEach(this.docs,s=>i(s))}newChangeBuffer(t){return new tC(this)}getSize(t){return Z.resolve(this.size)}}class tC extends Q_{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(s)}),Z.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t){this.persistence=t,this.Qr=new Za(i=>g2(i),y2),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.$r=0,this.Kr=new A2,this.targetCount=0,this.Ur=Zs.Kn()}forEachTarget(t,i){return this.Qr.forEach((s,l)=>i(l)),Z.resolve()}getLastRemoteSnapshotVersion(t){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Z.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(t,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.$r&&(this.$r=i),Z.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new Zs(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,Z.resolve()}updateTargetData(t,i){return this.zn(i),Z.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,Z.resolve()}removeTargets(t,i,s){let l=0;const c=[];return this.Qr.forEach((f,p)=>{p.sequenceNumber<=i&&s.get(p.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),Z.waitFor(c).next(()=>l)}getTargetCount(t){return Z.resolve(this.targetCount)}getTargetData(t,i){const s=this.Qr.get(i)||null;return Z.resolve(s)}addMatchingKeys(t,i,s){return this.Kr.yr(i,s),Z.resolve()}removeMatchingKeys(t,i,s){this.Kr.br(i,s);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),Z.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),Z.resolve()}getMatchingKeysForTargetId(t,i){const s=this.Kr.vr(i);return Z.resolve(s)}containsKey(t,i){return Z.resolve(this.Kr.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y7{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new Kc(0),this.zr=!1,this.zr=!0,this.jr=new W_,this.referenceDelegate=t(this),this.Hr=new eC(this),this.indexManager=new P_,this.remoteDocumentCache=function(l){return new J_(l)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new U_(i),this.Yr=new $_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new X_,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let s=this.Wr[t.toKey()];return s||(s=new Z_(i,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,s){ht("MemoryPersistence","Starting transaction:",t);const l=new nC(this.Gr.next());return this.referenceDelegate.Zr(),s(l).next(c=>this.referenceDelegate.Xr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}ei(t,i){return Z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,i)))}}class nC extends Mv{constructor(t){super(),this.currentSequenceNumber=t}}class S2{constructor(t){this.persistence=t,this.ti=new A2,this.ni=null}static ri(t){return new S2(t)}get ii(){if(this.ni)return this.ni;throw Tt()}addReference(t,i,s){return this.ti.addReference(s,i),this.ii.delete(s.toString()),Z.resolve()}removeReference(t,i,s){return this.ti.removeReference(s,i),this.ii.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),Z.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,s=>{const l=_t.fromPath(s);return this.si(t,l).next(c=>{c||i.removeEntry(l,At.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(s=>{s?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return Z.or([()=>Z.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Uc{constructor(t,i){this.persistence=t,this.oi=new Za(s=>Vv(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=G_(this,i)}static ri(t,i){return new Uc(t,i)}Zr(){}Xr(t){return Z.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>i.next(l=>s+l))}sr(t){let i=0;return this.rr(t,s=>{i++}).next(()=>i)}rr(t,i){return Z.forEach(this.oi,(s,l)=>this.ar(t,s,l).next(c=>c?Z.resolve():i(l)))}removeTargets(t,i,s){return this.persistence.getTargetCache().removeTargets(t,i,s)}removeOrphanedDocuments(t,i){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.qr(t,f=>this.ar(t,f,i).next(p=>{p||(s++,c.removeEntry(f,At.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),Z.resolve()}removeTarget(t,i){const s=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),Z.resolve()}removeReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),Z.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),Z.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=Cc(t.data.value)),i}ar(t,i,s){return Z.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return Z.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(t,i,s,l){this.targetId=t,this.fromCache=i,this.Hi=s,this.Ji=l}static Yi(t,i){let s=Ot(),l=Ot();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new b2(t,i.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Vm()?8:Iv(Mm())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,s,l){const c={result:null};return this.rs(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,i,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new iC;return this._s(t,i,f).next(p=>{if(c.result=p,this.Xi)return this.us(t,i,f,p.size)})}).next(()=>c.result)}us(t,i,s,l){return s.documentReadCount<this.es?(Bs()<=Ht.DEBUG&&ht("QueryEngine","SDK will not create cache indexes for query:",qs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(Bs()<=Ht.DEBUG&&ht("QueryEngine","Query:",qs(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ts*l?(Bs()<=Ht.DEBUG&&ht("QueryEngine","The SDK decides to create cache indexes for query:",qs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ei(i))):Z.resolve())}rs(t,i){if(Kf(i))return Z.resolve(null);let s=Ei(i);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=P4(i,null,"F"),s=Ei(i)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Ot(...c);return this.ns.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(m=>{const y=this.cs(i,p);return this.ls(i,y,f,m.readTime)?this.rs(t,P4(i,null,"F")):this.hs(t,y,i,m)}))})))}ss(t,i,s,l){return Kf(i)||l.isEqual(At.min())?Z.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(i,c);return this.ls(i,f,s,l)?Z.resolve(null):(Bs()<=Ht.DEBUG&&ht("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),qs(i)),this.hs(t,f,i,wv(l,Rl)).next(p=>p))})}cs(t,i){let s=new ze(Q9(t));return i.forEach((l,c)=>{Zc(t,c)&&(s=s.add(c))}),s}ls(t,i,s,l){if(t.limit===null)return!1;if(s.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}_s(t,i,s){return Bs()<=Ht.DEBUG&&ht("QueryEngine","Using full collection scan to execute query:",qs(i)),this.ns.getDocumentsMatchingQuery(t,i,ea.min(),s)}hs(t,i,s,l){return this.ns.getDocumentsMatchingQuery(t,s,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="LocalStore",aC=3e8;class sC{constructor(t,i,s,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new ge(kt),this.Is=new Za(c=>g2(c),y2),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Y_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function oC(r,t,i,s){return new sC(r,t,i,s)}async function v7(r,t){const i=wt(r);return await i.persistence.runTransaction("Handle user change","readonly",s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,i.As(t),i.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],p=[];let m=Ot();for(const y of l){f.push(y.batchId);for(const C of y.mutations)m=m.add(C.key)}for(const y of c){p.push(y.batchId);for(const C of y.mutations)m=m.add(C.key)}return i.localDocuments.getDocuments(s,m).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:p}))})})}function lC(r,t){const i=wt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,y,C){const S=y.batch,T=S.keys();let I=Z.resolve();return T.forEach(V=>{I=I.next(()=>C.getEntry(m,V)).next(Q=>{const z=y.docVersions.get(V);$t(z!==null),Q.version.compareTo(z)<0&&(S.applyToRemoteDocument(Q,y),Q.isValidDocument()&&(Q.setReadTime(y.commitVersion),C.addEntry(Q)))})}),I.next(()=>p.mutationQueue.removeMutationBatch(m,S))}(i,s,t,c).next(()=>c.apply(s)).next(()=>i.mutationQueue.performConsistencyCheck(s)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Ot();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(m=m.add(p.batch.mutations[y].key));return m}(t))).next(()=>i.localDocuments.getDocuments(s,l))})}function _7(r){const t=wt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function uC(r,t){const i=wt(r),s=t.snapshotVersion;let l=i.Ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.ds.newChangeBuffer({trackRemovals:!0});l=i.Ts;const p=[];t.targetChanges.forEach((C,S)=>{const T=l.get(S);if(!T)return;p.push(i.Hr.removeMatchingKeys(c,C.removedDocuments,S).next(()=>i.Hr.addMatchingKeys(c,C.addedDocuments,S)));let I=T.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(S)!==null?I=I.withResumeToken(tn.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):C.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(C.resumeToken,s)),l=l.insert(S,I),function(Q,z,F){return Q.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=aC?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,I,C)&&p.push(i.Hr.updateTargetData(c,I))});let m=lr(),y=Ot();if(t.documentUpdates.forEach(C=>{t.resolvedLimboDocuments.has(C)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(c,C))}),p.push(cC(c,f,t.documentUpdates).next(C=>{m=C.Vs,y=C.fs})),!s.isEqual(At.min())){const C=i.Hr.getLastRemoteSnapshotVersion(c).next(S=>i.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));p.push(C)}return Z.waitFor(p).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,m,y)).next(()=>m)}).then(c=>(i.Ts=l,c))}function cC(r,t,i){let s=Ot(),l=Ot();return i.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=lr();return i.forEach((p,m)=>{const y=c.get(p);m.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),m.isNoDocument()&&m.version.isEqual(At.min())?(t.removeEntry(p,m.readTime),f=f.insert(p,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(m),f=f.insert(p,m)):ht(w2,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",m.version)}),{Vs:f,fs:l}})}function hC(r,t){const i=wt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=d2),i.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function fC(r,t){const i=wt(r);return i.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return i.Hr.getTargetData(s,t).next(c=>c?(l=c,Z.resolve(l)):i.Hr.allocateTargetId(s).next(f=>(l=new Yr(t,f,"TargetPurposeListen",s.currentSequenceNumber),i.Hr.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=i.Ts.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(s.targetId,s),i.Is.set(t,s.targetId)),s})}async function F4(r,t,i){const s=wt(r),l=s.Ts.get(t),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!so(f))throw f;ht(w2,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(l.target)}function s6(r,t,i){const s=wt(r);let l=At.min(),c=Ot();return s.persistence.runTransaction("Execute query","readwrite",f=>function(m,y,C){const S=wt(m),T=S.Is.get(C);return T!==void 0?Z.resolve(S.Ts.get(T)):S.Hr.getTargetData(y,C)}(s,f,Ei(t)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,p.targetId).next(m=>{c=m})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,i?l:At.min(),i?c:Ot())).next(p=>(dC(s,Jv(t),p),{documents:p,gs:c})))}function dC(r,t,i){let s=r.Es.get(t)||At.min();i.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class o6{constructor(){this.activeTargetIds=a_()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pC{constructor(){this.ho=new o6,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,s){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,s){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new o6,Promise.resolve()}handleUserChange(t,i,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6="ConnectivityMonitor";class u6{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ht(l6,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ht(l6,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=null;function G4(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4="RestConnection",gC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${s}/databases/${l}`,this.wo=this.databaseId.database===Ic?`project_id=${s}`:`project_id=${s}&database_id=${l}`}bo(t,i,s,l,c){const f=G4(),p=this.So(t,i.toUriEncodedString());ht(A4,`Sending RPC '${t}' ${f}:`,p,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,l,c),this.vo(t,p,m,s).then(y=>(ht(A4,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Ks(A4,`RPC '${t}' ${f} failed with error: `,y,"url: ",p,"request:",s),y})}Co(t,i,s,l,c,f){return this.bo(t,i,s,l,c)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}So(t,i){const s=gC[t];return`${this.po}/v1/${i}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="WebChannelConnection";class _C extends yC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,s,l){const c=G4();return new Promise((f,p)=>{const m=new T9;m.setWithCredentials(!0),m.listenOnce(A9.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case _c.NO_ERROR:const C=m.getResponseJson();ht(an,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(C)),f(C);break;case _c.TIMEOUT:ht(an,`RPC '${t}' ${c} timed out`),p(new yt(nt.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const S=m.getStatus();if(ht(an,`RPC '${t}' ${c} failed with status:`,S,"response text:",m.getResponseText()),S>0){let T=m.getResponseJson();Array.isArray(T)&&(T=T[0]);const I=T==null?void 0:T.error;if(I&&I.status&&I.message){const V=function(z){const F=z.toLowerCase().replace(/_/g,"-");return Object.values(nt).indexOf(F)>=0?F:nt.UNKNOWN}(I.status);p(new yt(V,I.message))}else p(new yt(nt.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new yt(nt.UNAVAILABLE,"Connection failed."));break;default:Tt()}}finally{ht(an,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(l);ht(an,`RPC '${t}' ${c} sending request:`,l),m.send(i,"POST",y,s,15)})}Wo(t,i,s){const l=G4(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=w9(),p=b9(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,i,s),m.encodeInitMessageHeaders=!0;const C=c.join("");ht(an,`Creating RPC '${t}' stream ${l}: ${C}`,m);const S=f.createWebChannel(C,m);let T=!1,I=!1;const V=new vC({Fo:z=>{I?ht(an,`Not sending because RPC '${t}' stream ${l} is closed:`,z):(T||(ht(an,`Opening RPC '${t}' stream ${l} transport.`),S.open(),T=!0),ht(an,`RPC '${t}' stream ${l} sending:`,z),S.send(z))},Mo:()=>S.close()}),Q=(z,F,X)=>{z.listen(F,J=>{try{X(J)}catch(ct){setTimeout(()=>{throw ct},0)}})};return Q(S,gl.EventType.OPEN,()=>{I||(ht(an,`RPC '${t}' stream ${l} transport opened.`),V.Qo())}),Q(S,gl.EventType.CLOSE,()=>{I||(I=!0,ht(an,`RPC '${t}' stream ${l} transport closed`),V.Ko())}),Q(S,gl.EventType.ERROR,z=>{I||(I=!0,Ks(an,`RPC '${t}' stream ${l} transport errored:`,z),V.Ko(new yt(nt.UNAVAILABLE,"The operation could not be completed")))}),Q(S,gl.EventType.MESSAGE,z=>{var F;if(!I){const X=z.data[0];$t(!!X);const J=X,ct=(J==null?void 0:J.error)||((F=J[0])===null||F===void 0?void 0:F.error);if(ct){ht(an,`RPC '${t}' stream ${l} received error:`,ct);const st=ct.status;let mt=function(b){const D=De[b];if(D!==void 0)return s7(D)}(st),N=ct.message;mt===void 0&&(mt=nt.INTERNAL,N="Unknown error status: "+st+" with message "+ct.message),I=!0,V.Ko(new yt(mt,N)),S.close()}else ht(an,`RPC '${t}' stream ${l} received:`,X),V.Uo(X)}}),Q(p,S9.STAT_EVENT,z=>{z.stat===O4.PROXY?ht(an,`RPC '${t}' stream ${l} detected buffering proxy`):z.stat===O4.NOPROXY&&ht(an,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function S4(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(r){return new A_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C7{constructor(t,i,s=1e3,l=1.5,c=6e4){this.Ti=t,this.timerId=i,this.Go=s,this.zo=l,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-s);l>0&&ht("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6="PersistentStream";class E7{constructor(t,i,s,l,c,f,p,m){this.Ti=t,this.n_=s,this.r_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new C7(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===nt.RESOURCE_EXHAUSTED?(or(i.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===nt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.i_===i&&this.V_(s,l)},s=>{t(()=>{const l=new yt(nt.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(l)})})}V_(t,i){const s=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{s(()=>this.m_(l))}),this.stream.onMessage(l=>{s(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ht(c6,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(ht(c6,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CC extends E7{constructor(t,i,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}f_(t,i){return this.connection.Wo("Listen",t,i)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const i=w_(this.serializer,t),s=function(c){if(!("targetChange"in c))return At.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?Ai(f.readTime):At.min()}(t);return this.listener.p_(i,s)}y_(t){const i={};i.database=H4(this.serializer),i.addTarget=function(c,f){let p;const m=f.target;if(p=z4(m)?{documents:D_(c,m)}:{query:M_(c,m).ht},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=u7(c,f.resumeToken);const y=j4(c,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){p.readTime=kc(c,f.snapshotVersion.toTimestamp());const y=j4(c,f.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,t);const s=N_(this.serializer,t);s&&(i.labels=s),this.I_(i)}w_(t){const i={};i.database=H4(this.serializer),i.removeTarget=t,this.I_(i)}}class EC extends E7{constructor(t,i,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return $t(!!t.streamToken),this.lastStreamToken=t.streamToken,$t(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){$t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=x_(t.writeResults,t.commitTime),s=Ai(t.commitTime);return this.listener.v_(s,i)}C_(){const t={};t.database=H4(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(s=>R_(this.serializer,s))};this.I_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{}class AC extends TC{constructor(t,i,s,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new yt(nt.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,B4(i,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new yt(nt.UNKNOWN,c.toString())})}Co(t,i,s,l,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Co(t,B4(i,s),l,f,p,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===nt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new yt(nt.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class SC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(or(i),this.N_=!1):ht("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="RemoteStore";class bC{constructor(t,i,s,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Ja(this)&&(ht($a,"Restarting streams for network reachability change."),await async function(m){const y=wt(m);y.W_.add(4),await zl(y),y.j_.set("Unknown"),y.W_.delete(4),await i1(y)}(this))})}),this.j_=new SC(s,l)}}async function i1(r){if(Ja(r))for(const t of r.G_)await t(!0)}async function zl(r){for(const t of r.G_)await t(!1)}function T7(r,t){const i=wt(r);i.U_.has(t.targetId)||(i.U_.set(t.targetId,t),M2(i)?D2(i):oo(i).c_()&&x2(i,t))}function R2(r,t){const i=wt(r),s=oo(i);i.U_.delete(t),s.c_()&&A7(i,t),i.U_.size===0&&(s.c_()?s.P_():Ja(i)&&i.j_.set("Unknown"))}function x2(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}oo(r).y_(t)}function A7(r,t){r.H_.Ne(t),oo(r).w_(t)}function D2(r){r.H_=new __({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.j_.B_()}function M2(r){return Ja(r)&&!oo(r).u_()&&r.U_.size>0}function Ja(r){return wt(r).W_.size===0}function S7(r){r.H_=void 0}async function wC(r){r.j_.set("Online")}async function RC(r){r.U_.forEach((t,i)=>{x2(r,t)})}async function xC(r,t){S7(r),M2(r)?(r.j_.q_(t),D2(r)):r.j_.set("Unknown")}async function DC(r,t,i){if(r.j_.set("Online"),t instanceof l7&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const p of c.targetIds)l.U_.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.U_.delete(p),l.H_.removeTarget(p))}(r,t)}catch(s){ht($a,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await zc(r,s)}else if(t instanceof Ac?r.H_.We(t):t instanceof o7?r.H_.Ze(t):r.H_.je(t),!i.isEqual(At.min()))try{const s=await _7(r.localStore);i.compareTo(s)>=0&&await function(c,f){const p=c.H_.ot(f);return p.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const C=c.U_.get(y);C&&c.U_.set(y,C.withResumeToken(m.resumeToken,f))}}),p.targetMismatches.forEach((m,y)=>{const C=c.U_.get(m);if(!C)return;c.U_.set(m,C.withResumeToken(tn.EMPTY_BYTE_STRING,C.snapshotVersion)),A7(c,m);const S=new Yr(C.target,m,y,C.sequenceNumber);x2(c,S)}),c.remoteSyncer.applyRemoteEvent(p)}(r,i)}catch(s){ht($a,"Failed to raise snapshot:",s),await zc(r,s)}}async function zc(r,t,i){if(!so(t))throw t;r.W_.add(1),await zl(r),r.j_.set("Offline"),i||(i=()=>_7(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ht($a,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await i1(r)})}function b7(r,t){return t().catch(i=>zc(r,i,t))}async function r1(r){const t=wt(r),i=aa(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:d2;for(;MC(t);)try{const l=await hC(t.localStore,s);if(l===null){t.K_.length===0&&i.P_();break}s=l.batchId,IC(t,l)}catch(l){await zc(t,l)}w7(t)&&R7(t)}function MC(r){return Ja(r)&&r.K_.length<10}function IC(r,t){r.K_.push(t);const i=aa(r);i.c_()&&i.b_&&i.S_(t.mutations)}function w7(r){return Ja(r)&&!aa(r).u_()&&r.K_.length>0}function R7(r){aa(r).start()}async function NC(r){aa(r).C_()}async function VC(r){const t=aa(r);for(const i of r.K_)t.S_(i.mutations)}async function OC(r,t,i){const s=r.K_.shift(),l=C2.from(s,t,i);await b7(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await r1(r)}async function LC(r,t){t&&aa(r).b_&&await async function(s,l){if(function(f){return g_(f)&&f!==nt.ABORTED}(l.code)){const c=s.K_.shift();aa(s).h_(),await b7(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await r1(s)}}(r,t),w7(r)&&R7(r)}async function h6(r,t){const i=wt(r);i.asyncQueue.verifyOperationInProgress(),ht($a,"RemoteStore received new credentials");const s=Ja(i);i.W_.add(3),await zl(i),s&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await i1(i)}async function kC(r,t){const i=wt(r);t?(i.W_.delete(2),await i1(i)):t||(i.W_.add(2),await zl(i),i.j_.set("Unknown"))}function oo(r){return r.J_||(r.J_=function(i,s,l){const c=wt(i);return c.M_(),new CC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:wC.bind(null,r),No:RC.bind(null,r),Lo:xC.bind(null,r),p_:DC.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),M2(r)?D2(r):r.j_.set("Unknown")):(await r.J_.stop(),S7(r))})),r.J_}function aa(r){return r.Y_||(r.Y_=function(i,s,l){const c=wt(i);return c.M_(),new EC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:NC.bind(null,r),Lo:LC.bind(null,r),D_:VC.bind(null,r),v_:OC.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await r1(r)):(await r.Y_.stop(),r.K_.length>0&&(ht($a,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(t,i,s,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,s,l,c){const f=Date.now()+s,p=new I2(t,i,f,l,c);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new yt(nt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N2(r,t){if(or("AsyncQueue",`${t}: ${r}`),so(r))return new yt(nt.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{static emptySet(t){return new Gs(t.comparator)}constructor(t){this.comparator=t?(i,s)=>t(i,s)||_t.comparator(i.key,s.key):(i,s)=>_t.comparator(i.key,s.key),this.keyedMap=yl(),this.sortedSet=new ge(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,s)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof Gs)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const s=new Gs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=i,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(){this.Z_=new ge(_t.comparator)}track(t){const i=t.doc.key,s=this.Z_.get(i);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(i,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(i,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(i,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(i):t.type===1&&s.type===2?this.Z_=this.Z_.insert(i,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):Tt():this.Z_=this.Z_.insert(i,t)}X_(){const t=[];return this.Z_.inorderTraversal((i,s)=>{t.push(s)}),t}}class Js{constructor(t,i,s,l,c,f,p,m,y){this.query=t,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(t,i,s,l,c){const f=[];return i.forEach(p=>{f.push({type:0,doc:p})}),new Js(t,i,Gs.emptySet(i),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,s=t.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class zC{constructor(){this.queries=d6(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,s){const l=wt(i),c=l.queries;l.queries=d6(),c.forEach((f,p)=>{for(const m of p.ta)m.onError(s)})})(this,new yt(nt.ABORTED,"Firestore shutting down"))}}function d6(){return new Za(r=>G9(r),Wc)}async function x7(r,t){const i=wt(r);let s=3;const l=t.query;let c=i.queries.get(l);c?!c.na()&&t.ra()&&(s=2):(c=new UC,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await i.onListen(l,!0);break;case 1:c.ea=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const p=N2(f,`Initialization of query '${qs(t.query)}' failed`);return void t.onError(p)}i.queries.set(l,c),c.ta.push(t),t.sa(i.onlineState),c.ea&&t.oa(c.ea)&&V2(i)}async function D7(r,t){const i=wt(r),s=t.query;let l=3;const c=i.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?l=t.ra()?0:1:!c.na()&&t.ra()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function PC(r,t){const i=wt(r);let s=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const p of f.ta)p.oa(l)&&(s=!0);f.ea=l}}s&&V2(i)}function jC(r,t,i){const s=wt(r),l=s.queries.get(t);if(l)for(const c of l.ta)c.onError(i);s.queries.delete(t)}function V2(r){r.ia.forEach(t=>{t.next()})}var Q4,p6;(p6=Q4||(Q4={}))._a="default",p6.Cache="cache";class M7{constructor(t,i,s){this.query=t,this.aa=i,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Js(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.ua?this.la(t)&&(this.aa.next(t),i=!0):this.ha(t,this.onlineState)&&(this.Pa(t),i=!0),this.ca=t,i}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let i=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),i=!0),i}ha(t,i){if(!t.fromCache||!this.ra())return!0;const s=i!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}la(t){if(t.docChanges.length>0)return!0;const i=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}Pa(t){t=Js.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Q4.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I7{constructor(t){this.key=t}}class N7{constructor(t){this.key=t}}class BC{constructor(t,i){this.query=t,this.fa=i,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ot(),this.mutatedKeys=Ot(),this.ya=Q9(t),this.wa=new Gs(this.ya)}get ba(){return this.fa}Sa(t,i){const s=i?i.Da:new f6,l=i?i.wa:this.wa;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,p=!1;const m=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((C,S)=>{const T=l.get(C),I=Zc(this.query,S)?S:null,V=!!T&&this.mutatedKeys.has(T.key),Q=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let z=!1;T&&I?T.data.isEqual(I.data)?V!==Q&&(s.track({type:3,doc:I}),z=!0):this.va(T,I)||(s.track({type:2,doc:I}),z=!0,(m&&this.ya(I,m)>0||y&&this.ya(I,y)<0)&&(p=!0)):!T&&I?(s.track({type:0,doc:I}),z=!0):T&&!I&&(s.track({type:1,doc:T}),z=!0,(m||y)&&(p=!0)),z&&(I?(f=f.add(I),c=Q?c.add(C):c.delete(C)):(f=f.delete(C),c=c.delete(C)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const C=this.query.limitType==="F"?f.last():f.first();f=f.delete(C.key),c=c.delete(C.key),s.track({type:1,doc:C})}return{wa:f,Da:s,ls:p,mutatedKeys:c}}va(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,s,l){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((C,S)=>function(I,V){const Q=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt()}};return Q(I)-Q(V)}(C.type,S.type)||this.ya(C.doc,S.doc)),this.Ca(s),l=l!=null&&l;const p=i&&!l?this.Fa():[],m=this.pa.size===0&&this.current&&!l?1:0,y=m!==this.ga;return this.ga=m,f.length!==0||y?{snapshot:new Js(this.query,t.wa,c,f,t.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new f6,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(i=>this.fa=this.fa.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.fa=this.fa.delete(i)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Ot(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const i=[];return t.forEach(s=>{this.pa.has(s)||i.push(new N7(s))}),this.pa.forEach(s=>{t.has(s)||i.push(new I7(s))}),i}Oa(t){this.fa=t.gs,this.pa=Ot();const i=this.Sa(t.documents);return this.applyChanges(i,!0)}Na(){return Js.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const O2="SyncEngine";class qC{constructor(t,i,s){this.query=t,this.targetId=i,this.view=s}}class HC{constructor(t){this.key=t,this.Ba=!1}}class FC{constructor(t,i,s,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Za(p=>G9(p),Wc),this.qa=new Map,this.Qa=new Set,this.$a=new ge(_t.comparator),this.Ka=new Map,this.Ua=new A2,this.Wa={},this.Ga=new Map,this.za=Zs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function GC(r,t,i=!0){const s=z7(r);let l;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Na()):l=await V7(s,t,i,!0),l}async function QC(r,t){const i=z7(r);await V7(i,t,!0,!1)}async function V7(r,t,i,s){const l=await fC(r.localStore,Ei(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let p;return s&&(p=await KC(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&i&&T7(r.remoteStore,l),p}async function KC(r,t,i,s,l){r.Ha=(S,T,I)=>async function(Q,z,F,X){let J=z.view.Sa(F);J.ls&&(J=await s6(Q.localStore,z.query,!1).then(({documents:N})=>z.view.Sa(N,J)));const ct=X&&X.targetChanges.get(z.targetId),st=X&&X.targetMismatches.get(z.targetId)!=null,mt=z.view.applyChanges(J,Q.isPrimaryClient,ct,st);return g6(Q,z.targetId,mt.Ma),mt.snapshot}(r,S,T,I);const c=await s6(r.localStore,t,!0),f=new BC(t,c.gs),p=f.Sa(c.documents),m=Ul.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),y=f.applyChanges(p,r.isPrimaryClient,m);g6(r,i,y.Ma);const C=new qC(t,i,f);return r.ka.set(t,C),r.qa.has(i)?r.qa.get(i).push(t):r.qa.set(i,[t]),y.snapshot}async function YC(r,t,i){const s=wt(r),l=s.ka.get(t),c=s.qa.get(l.targetId);if(c.length>1)return s.qa.set(l.targetId,c.filter(f=>!Wc(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await F4(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),i&&R2(s.remoteStore,l.targetId),K4(s,l.targetId)}).catch(ao)):(K4(s,l.targetId),await F4(s.localStore,l.targetId,!0))}async function $C(r,t){const i=wt(r),s=i.ka.get(t),l=i.qa.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),R2(i.remoteStore,s.targetId))}async function XC(r,t,i){const s=iE(r);try{const l=await function(f,p){const m=wt(f),y=Ue.now(),C=p.reduce((I,V)=>I.add(V.key),Ot());let S,T;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let V=lr(),Q=Ot();return m.ds.getEntries(I,C).next(z=>{V=z,V.forEach((F,X)=>{X.isValidDocument()||(Q=Q.add(F))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,V)).next(z=>{S=z;const F=[];for(const X of p){const J=h_(X,S.get(X.key).overlayedDocument);J!=null&&F.push(new ca(X.key,J,z9(J.value.mapValue),Ti.exists(!0)))}return m.mutationQueue.addMutationBatch(I,y,F,p)}).next(z=>{T=z;const F=z.applyToLocalDocumentSet(S,Q);return m.documentOverlayCache.saveOverlays(I,z.batchId,F)})}).then(()=>({batchId:T.batchId,changes:Y9(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,p,m){let y=f.Wa[f.currentUser.toKey()];y||(y=new ge(kt)),y=y.insert(p,m),f.Wa[f.currentUser.toKey()]=y}(s,l.batchId,i),await Pl(s,l.changes),await r1(s.remoteStore)}catch(l){const c=N2(l,"Failed to persist write");i.reject(c)}}async function O7(r,t){const i=wt(r);try{const s=await uC(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Ka.get(c);f&&($t(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.Ba=!0:l.modifiedDocuments.size>0?$t(f.Ba):l.removedDocuments.size>0&&($t(f.Ba),f.Ba=!1))}),await Pl(i,s,t)}catch(s){await ao(s)}}function m6(r,t,i){const s=wt(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.ka.forEach((c,f)=>{const p=f.view.sa(t);p.snapshot&&l.push(p.snapshot)}),function(f,p){const m=wt(f);m.onlineState=p;let y=!1;m.queries.forEach((C,S)=>{for(const T of S.ta)T.sa(p)&&(y=!0)}),y&&V2(m)}(s.eventManager,t),l.length&&s.La.p_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function WC(r,t,i){const s=wt(r);s.sharedClientState.updateQueryState(t,"rejected",i);const l=s.Ka.get(t),c=l&&l.key;if(c){let f=new ge(_t.comparator);f=f.insert(c,on.newNoDocument(c,At.min()));const p=Ot().add(c),m=new e1(At.min(),new Map,new ge(kt),f,p);await O7(s,m),s.$a=s.$a.remove(c),s.Ka.delete(t),L2(s)}else await F4(s.localStore,t,!1).then(()=>K4(s,t,i)).catch(ao)}async function ZC(r,t){const i=wt(r),s=t.batch.batchId;try{const l=await lC(i.localStore,t);k7(i,s,null),L7(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await Pl(i,l)}catch(l){await ao(l)}}async function JC(r,t,i){const s=wt(r);try{const l=await function(f,p){const m=wt(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let C;return m.mutationQueue.lookupMutationBatch(y,p).next(S=>($t(S!==null),C=S.keys(),m.mutationQueue.removeMutationBatch(y,S))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,C,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,C)).next(()=>m.localDocuments.getDocuments(y,C))})}(s.localStore,t);k7(s,t,i),L7(s,t),s.sharedClientState.updateMutationState(t,"rejected",i),await Pl(s,l)}catch(l){await ao(l)}}function L7(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function k7(r,t,i){const s=wt(r);let l=s.Wa[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),s.Wa[s.currentUser.toKey()]=l}}function K4(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),i&&r.La.Ja(s,i);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||U7(r,s)})}function U7(r,t){r.Qa.delete(t.path.canonicalString());const i=r.$a.get(t);i!==null&&(R2(r.remoteStore,i),r.$a=r.$a.remove(t),r.Ka.delete(i),L2(r))}function g6(r,t,i){for(const s of i)s instanceof I7?(r.Ua.addReference(s.key,t),tE(r,s)):s instanceof N7?(ht(O2,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||U7(r,s.key)):Tt()}function tE(r,t){const i=t.key,s=i.path.canonicalString();r.$a.get(i)||r.Qa.has(s)||(ht(O2,"New document in limbo: "+i),r.Qa.add(s),L2(r))}function L2(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const i=new _t(ce.fromString(t)),s=r.za.next();r.Ka.set(s,new HC(i)),r.$a=r.$a.insert(i,s),T7(r.remoteStore,new Yr(Ei(v2(i.path)),s,"TargetPurposeLimboResolution",Kc.ae))}}async function Pl(r,t,i){const s=wt(r),l=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((p,m)=>{f.push(s.Ha(m,t,i).then(y=>{var C;if((y||i)&&s.isPrimaryClient){const S=y?!y.fromCache:(C=i==null?void 0:i.targetChanges.get(m.targetId))===null||C===void 0?void 0:C.current;s.sharedClientState.updateQueryState(m.targetId,S?"current":"not-current")}if(y){l.push(y);const S=b2.Yi(m.targetId,y);c.push(S)}}))}),await Promise.all(f),s.La.p_(l),await async function(m,y){const C=wt(m);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Z.forEach(y,T=>Z.forEach(T.Hi,I=>C.persistence.referenceDelegate.addReference(S,T.targetId,I)).next(()=>Z.forEach(T.Ji,I=>C.persistence.referenceDelegate.removeReference(S,T.targetId,I)))))}catch(S){if(!so(S))throw S;ht(w2,"Failed to update sequence numbers: "+S)}for(const S of y){const T=S.targetId;if(!S.fromCache){const I=C.Ts.get(T),V=I.snapshotVersion,Q=I.withLastLimboFreeSnapshotVersion(V);C.Ts=C.Ts.insert(T,Q)}}}(s.localStore,c))}async function eE(r,t){const i=wt(r);if(!i.currentUser.isEqual(t)){ht(O2,"User change. New user:",t.toKey());const s=await v7(i.localStore,t);i.currentUser=t,function(c,f){c.Ga.forEach(p=>{p.forEach(m=>{m.reject(new yt(nt.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Pl(i,s.Rs)}}function nE(r,t){const i=wt(r),s=i.Ka.get(t);if(s&&s.Ba)return Ot().add(s.key);{let l=Ot();const c=i.qa.get(t);if(!c)return l;for(const f of c){const p=i.ka.get(f);l=l.unionWith(p.view.ba)}return l}}function z7(r){const t=wt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=O7.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=WC.bind(null,t),t.La.p_=PC.bind(null,t.eventManager),t.La.Ja=jC.bind(null,t.eventManager),t}function iE(r){const t=wt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ZC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=JC.bind(null,t),t}class Pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=n1(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return oC(this.persistence,new rC,t.initialUser,this.serializer)}Xa(t){return new y7(S2.ri,this.serializer)}Za(t){return new pC}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pc.provider={build:()=>new Pc};class rE extends Pc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){$t(this.persistence.referenceDelegate instanceof Uc);const s=this.persistence.referenceDelegate.garbageCollector;return new H_(s,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new y7(s=>Uc.ri(s,i),this.serializer)}}class Y4{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>m6(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eE.bind(null,this.syncEngine),await kC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zC}()}createDatastore(t){const i=n1(t.databaseInfo.databaseId),s=function(c){return new _C(c)}(t.databaseInfo);return function(c,f,p,m){return new AC(c,f,p,m)}(t.authCredentials,t.appCheckCredentials,s,i)}createRemoteStore(t){return function(s,l,c,f,p){return new bC(s,l,c,f,p)}(this.localStore,this.datastore,t.asyncQueue,i=>m6(this.syncEngine,i,0),function(){return u6.D()?new u6:new mC}())}createSyncEngine(t,i){return function(l,c,f,p,m,y,C){const S=new FC(l,c,f,p,m,y);return C&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=wt(l);ht($a,"RemoteStore shutting down."),c.W_.add(5),await zl(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Y4.provider={build:()=>new Y4};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P7{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):or("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="FirestoreClient";class aE{constructor(t,i,s,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=sn.UNAUTHENTICATED,this.clientId=x9.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ht(sa,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ht(sa,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const s=N2(i,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function b4(r,t){r.asyncQueue.verifyOperationInProgress(),ht(sa,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let s=i.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await v7(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function y6(r,t){r.asyncQueue.verifyOperationInProgress();const i=await sE(r);ht(sa,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(s=>h6(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>h6(t.remoteStore,l)),r._onlineComponents=t}async function sE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ht(sa,"Using user provided OfflineComponentProvider");try{await b4(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===nt.FAILED_PRECONDITION||l.code===nt.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Ks("Error using user provided cache. Falling back to memory cache: "+i),await b4(r,new Pc)}}else ht(sa,"Using default OfflineComponentProvider"),await b4(r,new rE(void 0));return r._offlineComponents}async function j7(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ht(sa,"Using user provided OnlineComponentProvider"),await y6(r,r._uninitializedComponentsProvider._online)):(ht(sa,"Using default OnlineComponentProvider"),await y6(r,new Y4))),r._onlineComponents}function oE(r){return j7(r).then(t=>t.syncEngine)}async function B7(r){const t=await j7(r),i=t.eventManager;return i.onListen=GC.bind(null,t.syncEngine),i.onUnlisten=YC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=QC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=$C.bind(null,t.syncEngine),i}function lE(r,t,i={}){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,p,m,y){const C=new P7({next:T=>{C.su(),f.enqueueAndForget(()=>D7(c,S));const I=T.docs.has(p);!I&&T.fromCache?y.reject(new yt(nt.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&T.fromCache&&m&&m.source==="server"?y.reject(new yt(nt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(T)},error:T=>y.reject(T)}),S=new M7(v2(p.path),C,{includeMetadataChanges:!0,Ta:!0});return x7(c,S)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}function uE(r,t,i={}){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,p,m,y){const C=new P7({next:T=>{C.su(),f.enqueueAndForget(()=>D7(c,S)),T.fromCache&&m.source==="server"?y.reject(new yt(nt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(T)},error:T=>y.reject(T)}),S=new M7(p,C,{includeMetadataChanges:!0,Ta:!0});return x7(c,S)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q7(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H7(r,t,i){if(!i)throw new yt(nt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cE(r,t,i,s){if(t===!0&&s===!0)throw new yt(nt.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function _6(r){if(!_t.isDocumentKey(r))throw new yt(nt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function C6(r){if(_t.isDocumentKey(r))throw new yt(nt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function k2(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Tt()}function ur(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new yt(nt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=k2(r);throw new yt(nt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F7="firestore.googleapis.com",E6=!0;class T6{constructor(t){var i,s;if(t.host===void 0){if(t.ssl!==void 0)throw new yt(nt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F7,this.ssl=E6}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:E6;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=g7;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<B_)throw new yt(nt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q7((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new yt(nt.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class a1{constructor(t,i,s,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T6({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yt(nt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new yt(nt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T6(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vv;switch(s.type){case"firstParty":return new Tv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new yt(nt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=v6.get(i);s&&(ht("ComponentProvider","Removing Datastore"),v6.delete(i),s.terminate())}(this),Promise.resolve()}}function hE(r,t,i,s={}){var l;const c=(r=ur(r,a1))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${i}`;c.host!==F7&&c.host!==p&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:p,ssl:!1,emulatorOptions:s});if(!Qs(m,f)&&(r._setSettings(m),s.mockUserToken)){let y,C;if(typeof s.mockUserToken=="string")y=s.mockUserToken,C=sn.MOCK_USER;else{y=Dm(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new yt(nt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new sn(S)}r._authCredentials=new _v(new R9(y,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(t,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new s1(this.firestore,t,this._query)}}class Tn{constructor(t,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tn(this.firestore,t,this._key)}}class Jr extends s1{constructor(t,i,s){super(t,i,v2(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tn(this.firestore,null,new _t(t))}withConverter(t){return new Jr(this.firestore,t,this._path)}}function Cn(r,t,...i){if(r=bi(r),H7("collection","path",t),r instanceof a1){const s=ce.fromString(t,...i);return C6(s),new Jr(r,null,s)}{if(!(r instanceof Tn||r instanceof Jr))throw new yt(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ce.fromString(t,...i));return C6(s),new Jr(r.firestore,null,s)}}function pn(r,t,...i){if(r=bi(r),arguments.length===1&&(t=x9.newId()),H7("doc","path",t),r instanceof a1){const s=ce.fromString(t,...i);return _6(s),new Tn(r,null,new _t(s))}{if(!(r instanceof Tn||r instanceof Jr))throw new yt(nt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ce.fromString(t,...i));return _6(s),new Tn(r.firestore,r instanceof Jr?r.converter:null,new _t(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6="AsyncQueue";class S6{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new C7(this,"async_queue_retry"),this.bu=()=>{const s=S4();s&&ht(A6,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const i=S4();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=S4();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new ir;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!so(t))throw t;ht(A6,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const l=function(f){let p=f.message||"";return f.stack&&(p=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),p}(s);throw or("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(t,i,s){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=I2.createAndSchedule(this,t,i,s,c=>this.Fu(c));return this.fu.push(l),l}Du(){this.gu&&Tt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class jl extends a1{constructor(t,i,s,l){super(t,i,s,l),this.type="firestore",this._queue=new S6,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new S6(t),this._firestoreClient=void 0,await t}}}function fE(r,t){const i=typeof r=="object"?r:X6(),s=typeof r=="string"?r:Ic,l=Ll(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Rm("firestore");c&&hE(l,...c)}return l}function U2(r){if(r._terminated)throw new yt(nt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dE(r),r._firestoreClient}function dE(r){var t,i,s;const l=r._freezeSettings(),c=function(p,m,y,C){return new kv(p,m,y,C.host,C.ssl,C.experimentalForceLongPolling,C.experimentalAutoDetectLongPolling,q7(C.experimentalLongPollingOptions),C.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new aE(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this._byteString=t}static fromBase64String(t){try{return new to(tn.fromBase64String(t))}catch(i){throw new yt(nt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new to(tn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new yt(nt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new yt(nt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new yt(nt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return kt(this._lat,t._lat)||kt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=/^__.*__$/;class mE{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return this.fieldMask!==null?new ca(t,this.data,this.fieldMask,i,this.fieldTransforms):new kl(t,this.data,i,this.fieldTransforms)}}class G7{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return new ca(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function Q7(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt()}}class l1{constructor(t,i,s,l,c,f){this.settings=t,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new l1(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.$u(t),l}Ku(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return jc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Q7(this.Lu)&&pE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class gE{constructor(t,i,s){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=s||n1(t)}ju(t,i,s,l=!1){return new l1({Lu:t,methodName:i,zu:s,path:Je.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K7(r){const t=r._freezeSettings(),i=n1(r._databaseId);return new gE(r._databaseId,!!t.ignoreUndefinedProperties,i)}function yE(r,t,i,s,l,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,i,l);q2("Data must be an object, but it was:",f,s);const p=Y7(s,f);let m,y;if(c.merge)m=new Mn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const C=[];for(const S of c.mergeFields){const T=$4(t,S,i);if(!f.contains(T))throw new yt(nt.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);X7(C,T)||C.push(T)}m=new Mn(C),y=f.fieldTransforms.filter(S=>m.covers(S.field))}else m=null,y=f.fieldTransforms;return new mE(new _n(p),m,y)}class u1 extends Bl{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof u1}}function vE(r,t,i){return new l1({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class j2 extends Bl{constructor(t,i){super(t),this.Hu=i}_toFieldTransform(t){const i=vE(this,t,!0),s=this.Hu.map(c=>ql(c,i)),l=new Ws(s);return new n7(t.path,l)}isEqual(t){return t instanceof j2&&Qs(this.Hu,t.Hu)}}class B2 extends Bl{constructor(t,i){super(t),this.Ju=i}_toFieldTransform(t){const i=new Nl(t.serializer,W9(t.serializer,this.Ju));return new n7(t.path,i)}isEqual(t){return t instanceof B2&&this.Ju===t.Ju}}function _E(r,t,i,s){const l=r.ju(1,t,i);q2("Data must be an object, but it was:",l,s);const c=[],f=_n.empty();ua(s,(m,y)=>{const C=H2(t,m,i);y=bi(y);const S=l.Ku(C);if(y instanceof u1)c.push(C);else{const T=ql(y,S);T!=null&&(c.push(C),f.set(C,T))}});const p=new Mn(c);return new G7(f,p,l.fieldTransforms)}function CE(r,t,i,s,l,c){const f=r.ju(1,t,i),p=[$4(t,s,i)],m=[l];if(c.length%2!=0)throw new yt(nt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<c.length;T+=2)p.push($4(t,c[T])),m.push(c[T+1]);const y=[],C=_n.empty();for(let T=p.length-1;T>=0;--T)if(!X7(y,p[T])){const I=p[T];let V=m[T];V=bi(V);const Q=f.Ku(I);if(V instanceof u1)y.push(I);else{const z=ql(V,Q);z!=null&&(y.push(I),C.set(I,z))}}const S=new Mn(y);return new G7(C,S,f.fieldTransforms)}function ql(r,t){if($7(r=bi(r)))return q2("Unsupported field value:",t,r),Y7(r,t);if(r instanceof Bl)return function(s,l){if(!Q7(l.Lu))throw l.Wu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const p of s){let m=ql(p,l.Uu(f));m==null&&(m={nullValue:"NULL_VALUE"}),c.push(m),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=bi(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return W9(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ue.fromDate(s);return{timestampValue:kc(l.serializer,c)}}if(s instanceof Ue){const c=new Ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kc(l.serializer,c)}}if(s instanceof z2)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof to)return{bytesValue:u7(l.serializer,s._byteString)};if(s instanceof Tn){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:T2(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof P2)return function(f,p){return{mapValue:{fields:{[k9]:{stringValue:U9},[Nc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw p.Wu("VectorValues must only contain numeric values.");return _2(p.serializer,y)})}}}}}}(s,l);throw l.Wu(`Unsupported field value: ${k2(s)}`)}(r,t)}function Y7(r,t){const i={};return M9(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ua(r,(s,l)=>{const c=ql(l,t.qu(s));c!=null&&(i[s]=c)}),{mapValue:{fields:i}}}function $7(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ue||r instanceof z2||r instanceof to||r instanceof Tn||r instanceof Bl||r instanceof P2)}function q2(r,t,i){if(!$7(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const s=k2(i);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function $4(r,t,i){if((t=bi(t))instanceof o1)return t._internalPath;if(typeof t=="string")return H2(r,t);throw jc("Field path arguments must be of type string or ",r,!1,void 0,i)}const EE=new RegExp("[~\\*/\\[\\]]");function H2(r,t,i){if(t.search(EE)>=0)throw jc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new o1(...t.split("."))._internalPath}catch{throw jc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function jc(r,t,i,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(c||f)&&(m+=" (found",c&&(m+=` in field ${s}`),f&&(m+=` in document ${l}`),m+=")"),new yt(nt.INVALID_ARGUMENT,p+r+m)}function X7(r,t){return r.some(i=>i.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W7{constructor(t,i,s,l,c){this._firestore=t,this._userDataWriter=i,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Z7("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class TE extends W7{data(){return super.data()}}function Z7(r,t){return typeof t=="string"?H2(r,t):t instanceof o1?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new yt(nt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class SE{convertValue(t,i="none"){switch(ra(t)){case 0:return null;case 1:return t.booleanValue;case 2:return be(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ia(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const s={};return ua(t,(l,c)=>{s[l]=this.convertValue(c,i)}),s}convertVectorValue(t){var i,s,l;const c=(l=(s=(i=t.fields)===null||i===void 0?void 0:i[Nc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>be(f.doubleValue));return new P2(c)}convertGeoPoint(t){return new z2(be(t.latitude),be(t.longitude))}convertArray(t,i){return(t.values||[]).map(s=>this.convertValue(s,i))}convertServerTimestamp(t,i){switch(i){case"previous":const s=$c(t);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(xl(t));default:return null}}convertTimestamp(t){const i=na(t);return new Ue(i.seconds,i.nanos)}convertDocumentKey(t,i){const s=ce.fromString(t);$t(m7(s));const l=new Dl(s.get(1),s.get(3)),c=new _t(s.popFirst(5));return l.isEqual(i)||or(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(r,t,i){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class J7 extends W7{constructor(t,i,s,l,c,f){super(t,i,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const s=this._document.data.field(Z7("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class Sc extends J7{data(t={}){return super.data(t)}}class wE{constructor(t,i,s,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new _l(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(s=>{t.call(i,new Sc(this._firestore,this._userDataWriter,s.key,s,new _l(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new yt(nt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(p=>{const m=new Sc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new _l(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const m=new Sc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new _l(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,C=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),C=f.indexOf(p.doc.key)),{type:RE(p.type),doc:m,oldIndex:y,newIndex:C}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function RE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r){r=ur(r,Tn);const t=ur(r.firestore,jl);return lE(U2(t),r._key).then(i=>xE(t,r,i))}class t8 extends SE{constructor(t){super(),this.firestore=t}convertBytes(t){return new to(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Tn(this.firestore,null,i)}}function Nn(r){r=ur(r,s1);const t=ur(r.firestore,jl),i=U2(t),s=new t8(t);return AE(r._query),uE(i,r._query).then(l=>new wE(t,s,r,l))}function e8(r,t,i){r=ur(r,Tn);const s=ur(r.firestore,jl),l=bE(r.converter,t);return n8(s,[yE(K7(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,Ti.none())])}function Si(r,t,i,...s){r=ur(r,Tn);const l=ur(r.firestore,jl),c=K7(l);let f;return f=typeof(t=bi(t))=="string"||t instanceof o1?CE(c,"updateDoc",r._key,t,i,s):_E(c,"updateDoc",r._key,t),n8(l,[f.toMutation(r._key,Ti.exists(!0))])}function n8(r,t){return function(s,l){const c=new ir;return s.asyncQueue.enqueueAndForget(async()=>XC(await oE(s),l,c)),c.promise}(U2(r),t)}function xE(r,t,i){const s=i.docs.get(t._key),l=new t8(r);return new J7(r,l,t._key,s,new _l(i.hasPendingWrites,i.fromCache),t.converter)}function i8(...r){return new j2("arrayUnion",r)}function Kr(r){return new B2("increment",r)}(function(t,i=!0){(function(l){ro=l})(jg),ta(new ar("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),p=new jl(new Cv(s.getProvider("auth-internal")),new Av(f,s.getProvider("app-check-internal")),function(y,C){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new yt(nt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dl(y.options.projectId,C)}(f,l),f);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Ci(If,Nf,t),Ci(If,Nf,"esm2017")})();const DE={apiKey:"AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",authDomain:"greentrails-d6c2d.firebaseapp.com",projectId:"greentrails-d6c2d",storageBucket:"greentrails-d6c2d.firebasestorage.app",messagingSenderId:"67873180558",appId:"1:67873180558:web:d65d95fb94c483683db2df",measurementId:"G-9K66S1W7XM"},r8=$6(DE);pv(r8);const ee=fE(r8),ME=()=>{const[r,t]=q.useState([]),[i,s]=q.useState([]),[l,c]=q.useState(!0),f=io(),[p,m]=dn.useState([]),{currentUser:y}=Wa();if(q.useEffect(()=>{(async()=>{c(!0);try{const I=(await Nn(Cn(ee,"opportunities"))).docs.map(F=>({id:F.id,...F.data()})),Q=(await Nn(Cn(ee,"Users"))).docs.map(F=>({id:F.id,...F.data()}));console.log(Q),m(Q);const z=new Date;t(I.filter(F=>new Date(F.date)>z).sort((F,X)=>new Date(F.date)-new Date(X.date)))}catch(T){console.error("Error fetching opportunities:",T)}c(!1)})()},[]),l)return w.jsx("div",{className:"box",children:w.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return w.jsxs(w.Fragment,{children:[w.jsx("div",{className:"box",children:w.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})}),w.jsx("div",{className:"trunk"})]});function C(S){let T=S.currentTarget;const I=pn(ee,"opportunities",T.id);let V=y;if(!V){const z=document.getElementById(T.id+"i");z&&z.value&&(V=z.value)}if(console.log(p),!V||V==="")return;if(V==="editcode0"){console.log("edit code entered"),f("/adddata");return}const Q=r.find(z=>z.id===T.id);if(Q&&new Date(Q.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!p.some(z=>z.Name===V)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{Si(I,{signups:i8(V)}),document.getElementById(T.id+"d").textContent="So far "+r.find(z=>z.id===T.id).signups.join(", ")+", "+V+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return w.jsx("div",{children:r.map(S=>w.jsxs("div",{children:[w.jsxs("div",{className:"box",children:[w.jsx("h1",{children:S.name}),w.jsxs("p",{className:"date",children:["when: ",new Date(S.date).toLocaleDateString()]}),w.jsx("p",{children:S.description}),w.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),w.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),w.jsx("p",{}),w.jsxs("div",{children:[w.jsx("label",{children:"Sign up here with green trails:"}),w.jsx("p",{}),y?w.jsx(w.Fragment,{children:w.jsx("button",{type:"submit",id:S.id,className:"volunteer-signup-btn",onClick:T=>C(T),children:"🌲 Sign Up for This Event"})}):w.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",w.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),w.jsxs("p",{id:S.id+"d",children:["So far ",S.signups.join(", ")," will be going"]})]})]},S.id),w.jsx("div",{className:"trunk"})]}))})},IE=()=>{const[r,t]=q.useState([]),[i,s]=q.useState([]),[l,c]=q.useState(!0),f=io(),[p,m]=dn.useState([]),{currentUser:y}=Wa();if(q.useEffect(()=>{(async()=>{c(!0);try{const I=(await Nn(Cn(ee,"opportunities"))).docs.map(F=>({id:F.id,...F.data()})),Q=(await Nn(Cn(ee,"Users"))).docs.map(F=>({id:F.id,...F.data()}));console.log(Q),m(Q);const z=new Date;t(I.sort((F,X)=>new Date(F.date)-new Date(X.date)))}catch(T){console.error("Error fetching opportunities:",T)}c(!1)})()},[]),l)return w.jsx("div",{className:"box",children:w.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return w.jsx("div",{className:"box",children:w.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})});function C(S){let T=S.currentTarget;const I=pn(ee,"opportunities",T.id);let V=y;if(!V){const z=document.getElementById(T.id+"i");z&&z.value&&(V=z.value)}if(console.log(p),!V||V==="")return;if(V==="editcode0"){console.log("edit code entered"),f("/adddata");return}const Q=r.find(z=>z.id===T.id);if(Q&&new Date(Q.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!p.some(z=>z.Name===V)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{Si(I,{signups:i8(V)}),document.getElementById(T.id+"d").textContent="So far "+r.find(z=>z.id===T.id).signups.join(", ")+", "+V+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return w.jsx("div",{children:r.map(S=>w.jsxs("div",{children:[w.jsxs("div",{className:"box",children:[w.jsx("h1",{children:S.name}),w.jsxs("p",{className:"date",children:["when: ",new Date(S.date).toLocaleDateString()]}),w.jsx("p",{children:S.description}),w.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),w.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),w.jsx("p",{}),w.jsxs("div",{children:[w.jsx("label",{children:"Sign up here with green trails:"}),w.jsx("p",{}),y?w.jsx(w.Fragment,{children:w.jsx("button",{type:"submit",id:S.id,className:"volunteer-signup-btn",onClick:T=>C(T),children:"🌲 Sign Up for This Event"})}):w.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",w.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),w.jsxs("p",{id:S.id+"d",children:["So far ",S.signups.join(", ")," will be going"]})]})]},S.id),w.jsx("div",{className:"trunk"})]}))})},NE=()=>{const[r,t]=q.useState(!0);function i(){console.log("show past"),t(!r)}return w.jsxs("div",{id:"page",children:[w.jsx($r,{}),w.jsx(Ga,{message:"Upcoming Volunteer Opportunities",shadow:!0}),w.jsx("button",{id:"showpastbutton",onClick:i,children:r?"Show past opportunities":"Hide past opportunities"}),r?w.jsx(ME,{}):w.jsx(IE,{}),w.jsx(mm,{}),w.jsx(gm,{})]})},VE=()=>{const{isAdmin:r}=Wa(),t=io();return q.useEffect(()=>{r||(alert("Access denied. Admin privileges required."),t("/"))},[r,t]),r?w.jsxs("div",{className:"App-header",children:[w.jsx($r,{}),w.jsx(Ga,{message:"Add data page"}),w.jsx("input",{className:"addmoredata",id:"id",type:"text",placeholder:"id"}),w.jsx("input",{className:"addmoredata",id:"name",type:"text",placeholder:"Name"}),w.jsx("input",{className:"addmoredata",id:"date",type:"text",placeholder:"date"}),w.jsx("input",{className:"addmoredata",id:"description",type:"text",placeholder:"description"}),w.jsx("input",{className:"addmoredata",id:"link",type:"text",placeholder:"link"}),w.jsx("button",{className:"addmoredata",onClick:()=>{const i=document.getElementById("name").value,s=document.getElementById("date").value,l=document.getElementById("description").value,c=document.getElementById("link").value,f=document.getElementById("id").value;(async m=>{const y=await Nn(Cn(ee,"opportunities"));let C=!1;return y.forEach(S=>{S.id===m&&(C=!0)}),C})(f).then(m=>{if(m){alert("ID already in use. Please choose a different ID.");return}else{const y=pn(ee,"opportunities",f);e8(y,{name:i,date:s,description:l,link:c,signups:[]})}})},children:"Add opportunity"})]}):null},OE=()=>{const[r,t]=dn.useState([]),[i,s]=dn.useState([]);q.useEffect(()=>{(async()=>{try{const p=(await Nn(Cn(ee,"Users"))).docs.map(C=>({id:C.id,score:C.data().score,Name:C.data().Name}));t(p.sort((C,S)=>S.score-C.score));const y=(await Nn(Cn(ee,"opportunities"))).docs.map(C=>({id:C.id,...C.data()}));s(y)}catch(f){console.error("Error fetching leaderboard:",f)}})()},[]);function l(c){let f=0;r.forEach(p=>{i.forEach(m=>{m.signups.includes(p.id)&&(f+=1),Si(pn(ee,"Users",p.id),{score:f})}),f=0}),console.log("Done updating leaderboard")}return w.jsxs("div",{id:"events-table",children:[w.jsx("h3",{id:"events-title",children:"Events Attended"}),w.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((c,f)=>w.jsxs("div",{className:"lbentrie",children:[w.jsxs("p",{className:"place",children:[f+1,"."]}),w.jsx("p",{className:"username",children:c.Name}),w.jsx("p",{className:"userscore",children:c.score}),w.jsx("p",{className:"username",children:"  "})]},c.id)),w.jsx("button",{onClick:c=>l(),id:"",children:"Update leaderboard"})]})]})},LE=()=>{const[r,t]=dn.useState([]),[i,s]=dn.useState([]),[l,c]=dn.useState(!1);q.useEffect(()=>{(async()=>{try{const y=(await Nn(Cn(ee,"Users"))).docs.map(T=>{const I=T.data();return{id:T.id,score:I.score??0,Name:I.Name??"",meetingsAttended:I.meetingsAttended??0}});y.sort((T,I)=>{const V=T.meetingsAttended??0,Q=I.meetingsAttended??0;return Q!==V?Q-V:(I.score??0)-(T.score??0)}),t(y);const S=(await Nn(Cn(ee,"meetings"))).docs.map(T=>({id:T.id,...T.data()}));s(S)}catch(m){console.error("Error fetching leaderboard/meetings:",m)}})()},[]);async function f(p){try{c(!0);const m=await Promise.all(r.map(async y=>{const C=i.reduce((S,T)=>(Array.isArray(T.attendees)?T.attendees:[]).includes(y.Name)?S+1:S,0);return await Si(pn(ee,"Users",y.id),{meetingsAttended:C}),{...y,meetingsAttended:C}}));m.sort((y,C)=>{const S=y.meetingsAttended??0,T=C.meetingsAttended??0;return T!==S?T-S:(C.score??0)-(y.score??0)}),t(m),console.log("Done updating meetingsAttended for all users")}catch(m){console.error("Error updating meetingsAttended:",m)}finally{c(!1)}}return w.jsxs("div",{id:"events-table",children:[w.jsx("h3",{id:"events-title",children:"Meetings Attended (after 11/12)"}),w.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((p,m)=>w.jsxs("div",{className:"lbentrie",children:[w.jsxs("p",{className:"place",children:[m+1,"."]}),w.jsx("p",{className:"username",children:p.Name}),w.jsx("p",{className:"userscore",children:p.meetingsAttended??0})]},p.id)),w.jsx("button",{onClick:p=>f(),id:"",disabled:l,children:l?"Updating…":"Update meetings attendance"})]})]})},kE=()=>{const[r,t]=dn.useState([]);return q.useEffect(()=>{const i=async()=>{try{const c=(await Nn(Cn(ee,"Users"))).docs.map(f=>({id:f.id,santasPopped:f.data().santasPopped||0,Name:f.data().Name}));t(c.sort((f,p)=>p.santasPopped-f.santasPopped))}catch(l){console.error("Error fetching santa leaderboard:",l)}};i();const s=setInterval(i,5e3);return()=>clearInterval(s)},[]),w.jsxs("div",{id:"santa-table",children:[w.jsx("h3",{id:"santa-title",children:"Santas Popped"}),w.jsx("div",{id:"santa-leaderboard",className:"boardcon",children:r.map((i,s)=>w.jsxs("div",{className:"lbentrie",children:[w.jsxs("p",{className:"place",children:[s+1,"."]}),w.jsx("p",{className:"username",children:i.Name}),w.jsx("p",{className:"userscore",children:i.santasPopped}),w.jsx("p",{className:"username",children:"  "})]},i.id))})]})},UE=()=>w.jsxs("div",{children:[w.jsx(Ga,{message:"Leaderboards",shadow:!0}),w.jsx($r,{}),w.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[w.jsx(OE,{}),w.jsx(LE,{}),w.jsx(kE,{})]}),w.jsx(vc,{})]}),zE=({message:r,type:t="info",duration:i=3e3,onClose:s})=>{q.useEffect(()=>{const c=setTimeout(()=>{s()},i);return()=>clearTimeout(c)},[i,s]);const l=()=>{switch(t){case"success":return"#4CAF50";case"error":return"#f44336";case"info":default:return"#2196F3"}};return w.jsxs("div",{style:{position:"fixed",top:"80px",right:"20px",backgroundColor:l(),color:"white",padding:"16px 24px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:1e4,maxWidth:"400px",fontSize:"16px",fontWeight:"500",animation:"slideIn 0.3s ease-out",cursor:"pointer"},onClick:s,children:[r,w.jsx("style",{children:`
                    @keyframes slideIn {
                        from {
                            transform: translateX(400px);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                `})]})},PE=()=>{const[r,t]=q.useState([]);q.useEffect(()=>{const s=l=>{const{message:c,type:f}=l.detail,p=Date.now();t(m=>[...m,{id:p,message:c,type:f}])};return window.addEventListener("show-notification",s),()=>{window.removeEventListener("show-notification",s)}},[]);const i=s=>{t(l=>l.filter(c=>c.id!==s))};return w.jsx(w.Fragment,{children:r.map((s,l)=>w.jsx("div",{style:{position:"fixed",top:`${80+l*80}px`,right:"20px",zIndex:1e4+l},children:w.jsx(zE,{message:s.message,type:s.type,onClose:()=>i(s.id)})},s.id))})},ue=(r,t="info")=>{const i=new CustomEvent("show-notification",{detail:{message:r,type:t}});window.dispatchEvent(i)},jE=()=>{const[r,t]=dn.useState([]),[i,s]=dn.useState([]),[l,c]=dn.useState(!1),[f,p]=dn.useState([]),[m,y]=dn.useState(""),[C,S]=dn.useState(""),{currentUser:T,login:I,logout:V}=Wa();io(),q.useEffect(()=>{(async()=>{try{const J=(await Nn(Cn(ee,"Users"))).docs.map(ct=>ct.id);p(J.sort())}catch(X){console.error("Error fetching usernames:",X)}})()},[]);function Q(F){const X=m.trim();if(X===""){ue("Name cannot be empty. Please enter a valid name.","error");return}console.log(X),(async ct=>{const st=await Nn(Cn(ee,"Users"));let mt=!1;return st.forEach(N=>{N.id.toLowerCase()===ct.toLowerCase()&&(mt=!0)}),mt})(X).then(ct=>{if(ct){ue("Name already in use. Please choose a different name.","error");return}else{const st=pn(Cn(ee,"Users"),X);e8(st,{Name:X,score:0,santasPopped:0,isAdmin:!1,autoClickerLevel:0,spawnSpeedLevel:0}).then(()=>{ue("User created successfully! You are now logged in.","success"),I(X,!1),p([...f,X].sort()),y("")})}})}async function z(F){let X=C||m;if(X=X.trim(),X===""){ue("Name cannot be empty. Please select or enter a valid name.","error");return}try{let J=pn(ee,"Users",X),ct=await Bc(J);if(!ct.exists()){const st=await Nn(Cn(ee,"Users"));let mt=null;st.forEach(N=>{N.id.toLowerCase()===X.toLowerCase()&&(mt=N.id)}),mt&&(X=mt,J=pn(ee,"Users",X),ct=await Bc(J))}if(ct.exists()){const st=ct.data(),mt={};st&&st.santasPopped===void 0&&(mt.santasPopped=0),st&&st.isAdmin===void 0&&(mt.isAdmin=!1),st&&st.autoClickerLevel===void 0&&(mt.autoClickerLevel=0),st&&st.spawnSpeedLevel===void 0&&(mt.spawnSpeedLevel=0),Object.keys(mt).length>0&&await Si(J,mt);const N=(st==null?void 0:st.isAdmin)||!1;I(X,N),ue(`Welcome back, ${X}!`,"success")}else ue("User not found. Please sign up first.","error")}catch(J){console.error("Error logging in:",J),ue("Error logging in. Please try again.","error")}}return w.jsx("div",{children:T?w.jsxs("div",{className:"signup signup-welcome",children:[w.jsxs("h3",{children:["🌲 Welcome, ",T,"! 🌲"]}),w.jsx("p",{children:"You are currently logged in."}),w.jsxs("p",{style:{fontSize:"16px",marginTop:"20px"},children:["🎅 ",w.jsx("strong",{children:"Santa Tracking Active!"})," Click flying Santas anywhere on the site to earn points and climb the leaderboard!"]}),w.jsx("button",{onClick:()=>V(),children:"Logout"})]}):w.jsxs("div",{className:"signup",children:[w.jsx("h3",{children:l?"🔐 Login":"✨ Sign Up"}),w.jsx("p",{style:{fontSize:"16px",color:"#2d5a3d",marginBottom:"20px"},children:"🎅 Track your Santa pops and compete on the leaderboard!"}),l&&f.length>0?w.jsxs("div",{children:[w.jsx("label",{htmlFor:"userSelect",style:{display:"block",marginBottom:"8px",color:"#2d5a3d"},children:"Select your name:"}),w.jsxs("select",{id:"userSelect",value:C,onChange:F=>S(F.target.value),style:{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"4px",border:"1px solid #ccc",fontSize:"16px"},children:[w.jsx("option",{value:"",children:"-- Choose your name --"}),f.map(F=>w.jsx("option",{value:F,children:F},F))]})]}):w.jsx("input",{id:"name",type:"text",placeholder:"Enter your name",value:m,onChange:F=>y(F.target.value)}),l?w.jsx("button",{type:"submit",onClick:F=>z(),children:"Login"}):w.jsx("button",{type:"submit",onClick:F=>Q(),children:"Sign Up"}),w.jsxs("div",{className:"signup-toggle",children:[w.jsx("p",{style:{marginBottom:"10px",color:"#666"},children:l?"Don't have an account?":"Already have an account?"}),w.jsx("button",{onClick:()=>{c(!l),y(""),S("")},children:l?"Create New Account":"Login Instead"})]})]})})},BE=()=>w.jsxs("div",{children:[w.jsx(Ga,{message:"Sign Up!!",shadow:!0}),w.jsx($r,{}),w.jsx(jE,{})]}),qE=()=>{const{currentUser:r}=Wa(),[t,i]=q.useState({autoClickerLevel:0,spawnSpeedLevel:0,santaWorthLevel:0,santasPopped:0}),[s,l]=q.useState(!0),c=[10,25,50,100,200],f=[15,30,60,120,240],p=[20,40,80,160,320];q.useEffect(()=>{r?m():l(!1);const T=I=>{var z;const Q=((z=I.detail)==null?void 0:z.increment)||1;i(F=>({...F,santasPopped:F.santasPopped+Q}))};return window.addEventListener("santaPopped",T),()=>{window.removeEventListener("santaPopped",T)}},[r]);const m=async()=>{if(r)try{const T=pn(ee,"Users",r),I=await Bc(T);if(I.exists()){const V=I.data();i({autoClickerLevel:V.autoClickerLevel||0,spawnSpeedLevel:V.spawnSpeedLevel||0,santaWorthLevel:V.santaWorthLevel||0,santasPopped:V.santasPopped||0})}}catch(T){console.error("Error loading upgrades:",T)}finally{l(!1)}},y=async()=>{if(!r){ue("Please login to purchase upgrades!","error");return}const T=t.autoClickerLevel;if(T>=c.length){ue("Max level reached!","info");return}const I=c[T];if(t.santasPopped<I){ue(`Not enough santas! You need ${I} santas but only have ${t.santasPopped}.`,"error");return}try{const V=pn(ee,"Users",r);await Si(V,{santasPopped:Kr(-I),autoClickerLevel:Kr(1)}),i({...t,santasPopped:t.santasPopped-I,autoClickerLevel:t.autoClickerLevel+1}),ue(`Auto-clicker upgraded to level ${T+1}!`,"success")}catch(V){console.error("Error purchasing upgrade:",V),ue("Failed to purchase upgrade. Please try again.","error")}},C=async()=>{if(!r){ue("Please login to purchase upgrades!","error");return}const T=t.spawnSpeedLevel;if(T>=f.length){ue("Max level reached!","info");return}const I=f[T];if(t.santasPopped<I){ue(`Not enough santas! You need ${I} santas but only have ${t.santasPopped}.`,"error");return}try{const V=pn(ee,"Users",r);await Si(V,{santasPopped:Kr(-I),spawnSpeedLevel:Kr(1)}),i({...t,santasPopped:t.santasPopped-I,spawnSpeedLevel:t.spawnSpeedLevel+1}),ue(`Spawn speed upgraded to level ${T+1}!`,"success")}catch(V){console.error("Error purchasing upgrade:",V),ue("Failed to purchase upgrade. Please try again.","error")}},S=async()=>{if(!r){ue("Please login to purchase upgrades!","error");return}const T=t.santaWorthLevel;if(T>=p.length){ue("Max level reached!","info");return}const I=p[T];if(t.santasPopped<I){ue(`Not enough santas! You need ${I} santas but only have ${t.santasPopped}.`,"error");return}try{const V=pn(ee,"Users",r);await Si(V,{santasPopped:Kr(-I),santaWorthLevel:Kr(1)}),i({...t,santasPopped:t.santasPopped-I,santaWorthLevel:t.santaWorthLevel+1}),ue(`Santa worth upgraded to level ${T+1}!`,"success")}catch(V){console.error("Error purchasing upgrade:",V),ue("Failed to purchase upgrade. Please try again.","error")}};return r?s?w.jsxs("div",{children:[w.jsx(Ga,{message:"Santa Shop",shadow:!0}),w.jsx($r,{}),w.jsx("div",{style:{padding:"40px",textAlign:"center"},children:w.jsx("p",{children:"Loading..."})}),w.jsx(vc,{})]}):w.jsxs("div",{children:[w.jsx(Ga,{message:"Santa Shop",shadow:!0}),w.jsx($r,{}),w.jsxs("div",{style:{padding:"40px",maxWidth:"1400px",margin:"0 auto",minHeight:"60vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",marginTop:"20px",marginBottom:"20px"},children:[w.jsx("h2",{style:{textAlign:"center",color:"#ffffff",marginBottom:"10px",fontSize:"48px",fontWeight:"bold",textShadow:"2px 2px 4px rgba(0,0,0,0.3)"},children:"🎅 Santa Shop 🎅"}),w.jsx("p",{style:{textAlign:"center",color:"#f0f0f0",fontSize:"18px",marginBottom:"30px",fontStyle:"italic"},children:"Upgrade your Santa-catching abilities!"}),w.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"30px",borderRadius:"15px",marginBottom:"30px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #ffd700"},children:[w.jsx("h3",{style:{color:"#d32f2f",marginBottom:"20px",textAlign:"center",fontSize:"28px",fontWeight:"bold"},children:"💰 Your Stats"}),w.jsxs("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"30px"},children:[w.jsxs("div",{style:{textAlign:"center",padding:"15px 30px",backgroundColor:"#fff5f5",borderRadius:"10px",border:"2px solid #d32f2f"},children:[w.jsx("p",{style:{fontSize:"20px",marginBottom:"8px",color:"#666"},children:"🎅 Santas Available"}),w.jsx("p",{style:{fontSize:"36px",fontWeight:"bold",color:"#d32f2f",margin:0},children:t.santasPopped})]}),w.jsxs("div",{style:{textAlign:"center",padding:"15px 30px",backgroundColor:"#f0f8ff",borderRadius:"10px",border:"2px solid #2196F3"},children:[w.jsx("p",{style:{fontSize:"20px",marginBottom:"8px",color:"#666"},children:"💎 Santa Value"}),w.jsxs("p",{style:{fontSize:"36px",fontWeight:"bold",color:"#2196F3",margin:0},children:[t.santaWorthLevel+1,"x"]})]})]})]}),w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"25px"},children:[w.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #4CAF50",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[w.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#4CAF50",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.autoClickerLevel]}),w.jsx("h3",{style:{color:"#4CAF50",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"🖱️ Auto-Clicker"}),w.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Automatically clicks santas for you every few seconds! The ultimate passive income for lazy elves.",t.autoClickerLevel>0&&w.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#4CAF50",fontWeight:"bold"},children:["✓ Active: Clicking every ",Math.max(2,10-t.autoClickerLevel*2),"s"]})]}),t.autoClickerLevel<c.length?w.jsxs(w.Fragment,{children:[w.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",w.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[c[t.autoClickerLevel]," 🎅"]})]}),w.jsx("button",{onClick:y,disabled:t.santasPopped<c[t.autoClickerLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=c[t.autoClickerLevel]?"#4CAF50":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=c[t.autoClickerLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=c[t.autoClickerLevel]?"0 4px 8px rgba(76, 175, 80, 0.3)":"none"},onMouseEnter:T=>{t.santasPopped>=c[t.autoClickerLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onMouseLeave:T=>{T.currentTarget.style.transform="scale(1)"},onFocus:T=>{t.santasPopped>=c[t.autoClickerLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onBlur:T=>{T.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):w.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#e8f5e9",borderRadius:"8px"},children:w.jsx("p",{style:{color:"#4CAF50",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),w.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #2196F3",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[w.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#2196F3",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.spawnSpeedLevel]}),w.jsx("h3",{style:{color:"#2196F3",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"⚡ Spawn Speed"}),w.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Increases how often santas appear on your screen! More santas = more opportunities to click.",t.spawnSpeedLevel>0&&w.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#2196F3",fontWeight:"bold"},children:["✓ Active: Spawn time reduced by ",t.spawnSpeedLevel*20,"%"]})]}),t.spawnSpeedLevel<f.length?w.jsxs(w.Fragment,{children:[w.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",w.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[f[t.spawnSpeedLevel]," 🎅"]})]}),w.jsx("button",{onClick:C,disabled:t.santasPopped<f[t.spawnSpeedLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=f[t.spawnSpeedLevel]?"#2196F3":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=f[t.spawnSpeedLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=f[t.spawnSpeedLevel]?"0 4px 8px rgba(33, 150, 243, 0.3)":"none"},onMouseEnter:T=>{t.santasPopped>=f[t.spawnSpeedLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onMouseLeave:T=>{T.currentTarget.style.transform="scale(1)"},onFocus:T=>{t.santasPopped>=f[t.spawnSpeedLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onBlur:T=>{T.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):w.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#e3f2fd",borderRadius:"8px"},children:w.jsx("p",{style:{color:"#2196F3",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),w.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #FF9800",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[w.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#FF9800",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.santaWorthLevel]}),w.jsx("h3",{style:{color:"#FF9800",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"💎 Santa Worth"}),w.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Increases the value of each Santa you pop! Each level adds +1 to your score per click.",t.santaWorthLevel>0&&w.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#FF9800",fontWeight:"bold"},children:["✓ Active: Each santa worth ",t.santaWorthLevel+1," points"]})]}),t.santaWorthLevel<p.length?w.jsxs(w.Fragment,{children:[w.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",w.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[p[t.santaWorthLevel]," 🎅"]})]}),w.jsx("button",{onClick:S,disabled:t.santasPopped<p[t.santaWorthLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=p[t.santaWorthLevel]?"#FF9800":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=p[t.santaWorthLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=p[t.santaWorthLevel]?"0 4px 8px rgba(255, 152, 0, 0.3)":"none"},onMouseEnter:T=>{t.santasPopped>=p[t.santaWorthLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onMouseLeave:T=>{T.currentTarget.style.transform="scale(1)"},onFocus:T=>{t.santasPopped>=p[t.santaWorthLevel]&&(T.currentTarget.style.transform="scale(1.05)")},onBlur:T=>{T.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):w.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#fff3e0",borderRadius:"8px"},children:w.jsx("p",{style:{color:"#FF9800",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]})]}),w.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",marginTop:"30px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #ffd700"},children:[w.jsx("h3",{style:{color:"#d32f2f",marginBottom:"20px",fontSize:"24px",fontWeight:"bold",textAlign:"center"},children:"ℹ️ How to Play"}),w.jsxs("ol",{style:{lineHeight:"2",color:"#555",fontSize:"16px",paddingLeft:"30px"},children:[w.jsxs("li",{children:[w.jsx("strong",{children:"Click flying Santas"})," anywhere on the site to pop them and earn points!"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Spend your points"})," on upgrades to become more efficient"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Auto-clicker"})," works on ALL pages across the site automatically"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Spawn speed"})," increases how often Santas appear"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Santa worth"})," makes each click more valuable"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Pro tip:"})," Combine all three upgrades for maximum efficiency!"]})]})]})]}),w.jsx(vc,{})]}):w.jsxs("div",{children:[w.jsx(Ga,{message:"Santa Shop",shadow:!0}),w.jsx($r,{}),w.jsxs("div",{style:{padding:"40px",textAlign:"center",minHeight:"60vh",backgroundColor:"#f5f5f5"},children:[w.jsx("h2",{style:{color:"#d32f2f",marginBottom:"20px"},children:"🎅 Santa Shop"}),w.jsx("p",{style:{fontSize:"18px",color:"#666"},children:"Please login to access the Santa Shop!"})]}),w.jsx(vc,{})]})},HE=""+new URL("lowrezlogo-eSGE3ORT.png",import.meta.url).href,FE=()=>(q.useEffect(()=>{let r=document.querySelector("link[rel='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.href=HE,r.type="image/png"},[]),null),GE=encodeURIComponent(`
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 800 690" enable-background="new 0 0 800 690" xml:space="preserve">


<path fill="#B6946B" opacity="1.000000" stroke="none" 
	d="
M481.893738,618.038513 
	C481.469757,618.092346 481.045776,618.146179 480.266296,617.782349 
	C478.579773,617.264526 477.248688,617.164429 475.680176,617.061218 
	C475.023010,617.243652 474.603271,617.429199 474.183533,617.614685 
	C472.977356,617.557800 471.771210,617.500854 470.020355,616.967834 
	C468.273590,616.354370 467.071533,616.216980 465.869446,616.079590 
	C465.869446,616.079590 465.949982,616.141052 465.912933,615.816895 
	C464.410339,613.272278 463.513367,613.771606 462.997650,616.094421 
	C461.889313,616.087952 460.780945,616.081421 458.999390,615.706787 
	C454.973206,615.071655 451.620178,614.804626 448.267181,614.537598 
	C445.727936,614.378845 443.188690,614.220093 439.989014,613.695679 
	C438.200317,613.225647 437.072021,613.121338 435.943756,613.016968 
	C435.162292,613.027100 434.380798,613.037231 433.062561,612.717163 
	C431.756165,612.448547 430.986572,612.510071 430.216980,612.571655 
	C428.344177,612.529541 426.471375,612.487427 424.017273,611.957336 
	C421.565796,611.329773 419.695648,611.190125 417.825500,611.050415 
	C417.825500,611.050415 417.422668,611.214722 417.153687,610.788452 
	C414.896698,610.261902 412.908691,610.161682 410.520813,610.058105 
	C407.531982,609.837830 404.943024,609.620911 402.354034,609.403931 
	C399.785126,609.269531 397.216187,609.135132 393.974365,608.652466 
	C391.853241,607.891968 390.404999,607.479736 388.903748,606.691406 
	C386.629456,604.250977 384.613495,603.939392 382.610779,607.031311 
	C381.973480,607.062073 381.718109,607.062927 381.462708,607.063782 
	C380.180054,607.085571 378.897400,607.107300 377.004364,606.750488 
	C375.251770,606.251770 374.109528,606.131653 372.967316,606.011597 
	C372.189880,606.033386 371.412476,606.055176 370.135925,605.765747 
	C369.139679,605.533081 368.642578,605.611633 368.145508,605.690186 
	C365.647156,605.508057 363.148773,605.325867 359.986298,604.746094 
	C357.794220,604.257629 356.266235,604.166687 354.738281,604.075806 
	C353.382263,604.085449 352.026245,604.095032 350.065796,603.749512 
	C348.091675,603.402100 346.722015,603.409851 345.352325,603.417542 
	C344.429108,603.415283 343.505890,603.413025 342.007843,602.930908 
	C340.152954,602.331360 338.872864,602.211670 337.592804,602.091980 
	C335.953735,602.098572 334.314636,602.105103 332.000061,601.732788 
	C327.968597,601.081848 324.612671,600.809814 321.256744,600.537781 
	C319.057404,600.411682 316.858063,600.285522 314.057251,599.777039 
	C312.639465,599.253601 311.823151,599.112549 310.937012,598.617310 
	C309.229248,598.194397 307.591370,598.125610 305.663513,598.046387 
	C304.653717,598.217224 303.933838,598.398376 303.213959,598.579590 
	C301.360260,598.431763 299.506561,598.283936 296.990784,597.748718 
	C294.501160,597.256409 292.673615,597.151428 290.846039,597.046448 
	C289.115387,597.030457 287.384735,597.014465 284.969269,596.648682 
	C281.629333,596.016541 278.974213,595.734192 276.319092,595.451843 
	C273.752197,595.308105 271.185272,595.164307 267.990875,594.668945 
	C266.577271,594.192322 265.791138,594.067383 264.941498,593.603027 
	C263.566986,593.197815 262.255981,593.131958 260.653259,593.053406 
	C259.641174,593.231567 258.920868,593.422485 258.200562,593.613403 
	C256.352295,593.583618 254.504013,593.553772 252.094650,593.039917 
	C250.024078,592.371582 248.514618,592.187317 247.005157,592.003052 
	C246.530075,592.036133 246.055008,592.069275 245.041351,591.756653 
	C243.397934,591.484192 242.293091,591.557495 241.188232,591.630737 
	C238.988358,591.453674 236.788498,591.276611 233.960312,590.713867 
	C232.224869,590.209717 231.117737,590.091309 229.933182,589.606689 
	C227.207031,589.183167 224.558334,589.125854 221.488190,589.065063 
	C218.202774,588.733337 215.338791,588.405090 212.474792,588.076843 
	C210.521347,588.065002 208.567902,588.053101 205.930054,587.670532 
	C201.908081,587.056519 198.570496,586.813171 195.232925,586.569824 
	C193.378571,586.437561 191.524231,586.305237 189.022568,585.778992 
	C186.878021,585.268982 185.380783,585.152954 183.883545,585.036865 
	C183.883545,585.036865 183.443436,585.176758 183.192810,584.811523 
	C182.283646,584.309753 181.625107,584.173157 180.613678,584.033569 
	C178.931793,584.189941 177.602783,584.349365 176.273788,584.508789 
	C175.388672,584.509033 174.503571,584.509338 173.055298,584.026978 
	C170.577026,583.386230 168.661896,583.228149 166.746780,583.069946 
	C164.709015,583.045044 162.671265,583.020142 159.968323,582.645508 
	C158.224762,582.194153 157.146378,582.092468 156.067993,581.990845 
	C155.551315,582.005554 155.034653,582.020203 153.955048,581.679993 
	C152.648285,581.259155 151.904434,581.193237 150.995575,580.835205 
	C149.431351,578.917175 148.337799,578.587585 147.943649,581.223816 
	C147.172974,581.190918 146.402298,581.158081 144.990967,580.744141 
	C142.558090,580.245789 140.765854,580.128601 138.973633,580.011414 
	C138.528473,580.047363 138.083313,580.083252 137.254395,579.681519 
	C135.582962,579.406189 134.295273,579.568359 133.007568,579.730530 
	C132.240723,579.751343 131.473862,579.772217 130.227921,579.333252 
	C126.479935,578.068909 123.234413,577.131592 119.926399,576.549194 
	C119.052933,576.395447 117.986725,577.336304 117.009018,577.774597 
	C116.551598,577.810364 116.094177,577.846069 115.188950,577.407043 
	C111.649963,576.670593 108.558762,576.408875 105.467567,576.147156 
	C103.907211,576.172363 102.346863,576.197632 100.180847,575.835815 
	C96.757889,575.211975 93.940582,574.975281 91.123276,574.738586 
	C89.678589,574.707275 88.233910,574.675903 86.258209,574.198853 
	C82.309853,572.169128 78.892509,570.585022 75.475166,569.000854 
	C75.366623,568.243225 75.258080,567.485657 75.574326,566.282410 
	C78.124626,564.656860 80.222511,563.423340 82.382149,562.309692 
	C85.564247,560.668701 88.790367,559.113037 91.997757,557.521118 
	C92.459633,557.389648 92.921501,557.258179 94.006554,557.411011 
	C102.454842,555.724487 110.382889,554.937927 118.440552,555.607178 
	C118.564987,555.617493 118.705788,555.430664 118.838943,555.335938 
	C119.338364,555.323181 119.837791,555.310425 120.828094,555.769043 
	C126.188339,556.546997 131.057709,556.853577 135.927063,557.160156 
	C137.351410,557.165833 138.775772,557.171509 140.722076,557.639160 
	C145.469009,558.461914 149.693970,558.822571 153.918930,559.183289 
	C154.701569,559.160217 155.484207,559.137085 156.750290,559.576904 
	C159.752472,560.167358 162.271194,560.295044 164.789932,560.422668 
	C165.941330,560.408386 167.092743,560.394104 168.795990,560.854370 
	C170.754898,561.657471 172.145676,562.140076 173.571518,562.290771 
	C186.743881,563.682861 186.549026,567.031006 186.994446,551.548096 
	C187.638626,544.745728 188.282730,538.379395 189.211487,531.987793 
	C189.763092,531.350586 190.030029,530.738647 190.296967,530.126770 
	C190.278015,529.642212 190.259064,529.157654 190.683014,528.218384 
	C191.482056,524.538025 191.838196,521.312317 192.194336,518.086609 
	C192.169815,517.612366 192.145294,517.138062 192.568817,516.226562 
	C195.068680,510.758606 196.539230,505.643616 195.286377,500.133850 
	C195.297699,499.327881 195.309021,498.521881 195.780975,497.221588 
	C196.562012,494.181854 196.882431,491.636475 197.202850,489.091064 
	C197.208786,488.301514 197.214737,487.511963 197.687057,486.243713 
	C198.484146,482.531372 198.814865,479.297729 199.145599,476.064087 
	C199.143723,475.594177 199.141846,475.124268 199.582062,474.235596 
	C200.946442,471.956177 202.901642,469.872131 202.558441,468.285126 
	C201.988068,465.647522 204.922516,461.475372 200.450195,460.439789 
	C196.811890,459.597351 192.896011,459.953705 189.103210,459.778442 
	C187.338516,459.753845 185.573807,459.729218 183.260925,459.245911 
	C177.969131,457.911438 173.232330,456.992340 168.469055,456.241089 
	C168.083649,456.180328 167.516754,457.270294 167.034195,457.825531 
	C166.263733,457.849640 165.493271,457.873749 164.246277,457.434845 
	C161.255112,456.833038 158.740479,456.694244 156.225845,456.555450 
	C155.713181,456.606140 155.200531,456.656860 154.239624,456.270752 
	C152.562943,455.225311 151.334534,454.616699 150.071136,453.605713 
	C148.000366,444.611664 145.964584,436.019989 144.388062,427.296997 
	C146.996964,427.075958 149.163757,426.766296 151.293472,426.932251 
	C164.803299,427.984924 178.312881,429.056610 191.806335,430.297974 
	C200.025696,431.054169 208.203064,432.274933 216.425079,432.990875 
	C220.431717,433.339722 224.497421,433.010345 228.865570,433.103607 
	C233.582443,443.629486 237.970093,454.039764 242.522736,464.841461 
	C239.583649,464.841461 236.811203,464.687775 234.064911,464.889709 
	C231.834091,465.053741 229.634659,465.644470 227.245117,465.691010 
	C224.733490,464.647705 222.414261,463.614288 220.051697,463.503357 
	C219.428131,463.474060 218.309647,466.228333 218.032059,467.811981 
	C215.750916,480.825317 213.482666,493.843842 211.480164,506.902100 
	C210.106049,515.862732 209.162415,524.889343 207.888519,534.251221 
	C206.560715,541.589844 205.370743,548.563721 204.146271,555.900757 
	C202.074799,563.809875 202.040222,564.109741 209.553955,564.975952 
	C228.851135,567.200623 248.190521,569.056641 267.497406,571.200562 
	C296.044189,574.370605 324.571533,577.715698 353.118500,580.883728 
	C372.759338,583.063416 392.423676,585.030518 412.069885,587.162842 
	C435.511505,589.707153 458.936127,592.411133 482.387085,594.864624 
	C490.012848,595.662476 490.663818,594.645020 489.181885,586.499878 
	C489.225708,578.865906 489.096436,571.604248 489.245361,563.996704 
	C489.744934,561.856384 490.111877,560.066284 490.164886,558.267029 
	C490.635071,542.304749 491.049652,526.340820 491.795441,510.150391 
	C492.253143,504.565674 492.396027,499.207916 492.589661,493.570374 
	C492.601807,492.915466 492.563232,492.540314 492.644348,491.795471 
	C490.786987,490.785736 488.809937,490.145752 486.406281,489.426086 
	C483.643616,489.254639 481.307587,489.162903 478.753113,488.799622 
	C477.637238,488.506561 476.739716,488.485046 475.463684,488.372711 
	C474.049591,488.226135 473.014069,488.170410 471.861938,487.886169 
	C471.164276,487.725464 470.583160,487.793274 469.593811,487.835419 
	C466.111908,487.588898 463.038239,487.368042 459.729309,486.843872 
	C457.955872,486.482178 456.417755,486.423737 454.565125,486.291199 
	C453.821625,486.180389 453.392670,486.143738 453.037903,485.735962 
	C464.048004,481.219513 474.983887,477.074219 486.099304,473.223633 
	C490.583832,477.061035 494.888794,480.603760 499.132996,484.511536 
	C499.994049,486.685699 500.629944,488.734680 501.901398,490.250488 
	C504.076874,492.844177 506.650360,495.104004 509.102112,498.002380 
	C508.468933,519.228027 507.731262,539.953796 507.203064,560.684998 
	C507.150238,562.759521 508.369751,564.866394 508.778931,567.283386 
	C508.062134,568.242676 507.166565,568.854675 507.129944,569.514404 
	C506.772827,575.945129 506.559174,582.383850 506.310303,589.192078 
	C505.942993,596.984070 505.936737,597.019470 513.020142,598.272461 
	C514.970764,598.617554 516.971130,598.681396 518.948486,598.876099 
	C533.294556,600.288757 547.623291,601.923218 561.991577,603.053589 
	C576.845825,604.222229 591.738464,605.517334 606.614441,605.518860 
	C613.415405,605.519592 620.216614,602.550354 627.230347,600.664551 
	C629.148071,600.250732 630.981262,600.455383 632.538147,599.893860 
	C645.375061,595.264282 656.288269,587.714417 665.040100,577.280884 
	C667.101257,574.823669 667.974304,571.369812 669.575562,568.087280 
	C671.960999,564.181580 674.164856,560.562988 676.629578,556.890259 
	C677.084045,555.979004 677.277649,555.121948 677.376831,553.895874 
	C677.667053,552.329041 678.051758,551.131104 678.700317,549.867798 
	C679.054321,548.911072 679.144470,548.019775 679.150024,546.687012 
	C679.307678,544.793396 679.550049,543.341370 680.083374,541.716797 
	C680.220642,537.741882 680.067017,533.939575 679.688965,529.740845 
	C679.424744,527.834900 679.385010,526.325317 679.514526,524.623840 
	C679.375977,523.657288 679.068115,522.882568 678.511353,521.767456 
	C677.995789,519.528076 677.729004,517.629089 677.623047,515.460571 
	C677.656311,513.538940 677.528748,511.886841 677.314819,509.840393 
	C677.390381,508.941467 677.552368,508.436920 677.998718,507.853058 
	C678.840149,506.363190 679.397156,504.952637 680.138184,503.335083 
	C680.498108,503.072205 680.674011,503.016296 681.149658,502.939575 
	C681.945618,502.417877 682.441772,501.916992 683.221191,501.128357 
	C685.042480,500.667969 686.580505,500.495361 688.322754,500.596893 
	C690.352905,501.243713 692.178894,501.616364 694.268677,502.204407 
	C696.426147,507.806274 702.536194,510.949738 702.427490,517.442932 
	C702.390991,519.623840 702.816711,521.812439 703.022766,524.446899 
	C703.039673,527.580811 703.065125,530.265442 703.062866,533.416504 
	C703.361938,543.735779 701.663513,553.245972 698.347839,562.513123 
	C696.753845,566.968262 695.384827,571.503845 693.652710,576.197754 
	C692.613586,577.664917 691.835693,578.937317 691.057800,580.209656 
	C690.715149,580.709412 690.372559,581.209229 689.474731,581.944885 
	C686.957581,585.161499 684.995544,588.142151 683.033508,591.122803 
	C682.995056,591.301331 682.956604,591.479797 682.433105,591.914185 
	C680.966187,593.451111 679.984253,594.732239 679.002319,596.013367 
	C673.964294,600.664124 668.926331,605.314941 663.188843,610.028809 
	C660.686523,611.450317 658.883728,612.808777 657.080994,614.167297 
	C656.876343,614.343628 656.671631,614.520020 655.807129,614.860840 
	C654.460266,615.450806 653.773254,615.876282 653.086243,616.301758 
	C652.900146,616.458679 652.713989,616.615540 651.971924,616.914551 
	C650.988586,617.341064 650.561279,617.625427 650.133972,617.909912 
	C649.489014,618.297180 648.843994,618.684509 647.447876,619.072266 
	C645.491089,619.763367 644.285400,620.454102 643.079651,621.144897 
	C642.357056,621.452576 641.634399,621.760193 640.175781,622.082886 
	C638.013184,622.712463 636.586487,623.327026 635.159851,623.941650 
	C634.051758,624.328003 632.943665,624.714355 630.979248,625.072083 
	C626.828735,625.895264 623.534546,626.747192 620.240356,627.599121 
	C618.631897,627.949585 617.023438,628.300049 614.702087,628.394165 
	C609.701599,628.688049 605.413940,629.238342 601.126343,629.788574 
	C598.996521,629.870483 596.866638,629.952332 593.999512,629.671143 
	C588.628052,629.012817 583.993896,628.717468 579.359741,628.422180 
	C577.120911,628.307373 574.882080,628.192566 571.974487,627.700623 
	C568.274414,627.084473 565.243164,626.845398 562.211853,626.606323 
	C559.694458,626.454895 557.177124,626.303406 553.990112,625.753784 
	C551.511414,625.246643 549.702393,625.137756 547.893372,625.028809 
	C547.893372,625.028809 547.456726,625.194153 547.168762,624.770447 
	C544.893433,624.252136 542.906067,624.157593 540.511719,624.053467 
	C539.006653,624.048828 537.908569,624.053650 536.810425,624.058472 
	C536.368774,624.078857 535.927124,624.099243 534.913696,623.736206 
	C533.108459,623.266479 531.875061,623.179993 530.641663,623.093506 
	C528.651489,623.071472 526.661255,623.049438 523.986206,622.669800 
	C519.953613,622.061462 516.605774,621.810669 513.257996,621.559937 
	C510.374725,621.382385 507.491455,621.204895 503.952545,620.664917 
	C502.203461,620.200745 501.110016,620.098999 500.016571,619.997314 
	C500.016571,619.997314 500.016296,620.046326 499.973602,619.750732 
	C499.266205,619.324341 498.601471,619.193542 497.642395,619.055847 
	C496.627472,619.243347 495.906982,619.437683 495.186493,619.632080 
	C492.645660,619.440369 490.104828,619.248718 486.898376,618.670532 
	C484.786438,618.202209 483.340088,618.120361 481.893738,618.038513 
z"/>
<path fill="#9D7A53" opacity="1.000000" stroke="none" 
	d="
M488.967163,564.342651 
	C489.096436,571.604248 489.225708,578.865906 488.779053,586.478088 
	C482.087219,586.154419 475.970581,585.486328 469.855499,584.804749 
	C439.950043,581.471619 410.048920,578.099060 380.138367,574.812500 
	C361.625031,572.778320 343.088440,570.954224 324.578705,568.888977 
	C301.282043,566.289734 278.003632,563.527039 254.714294,560.861755 
	C241.506790,559.350281 228.293137,557.892578 215.007843,556.167847 
	C214.290497,555.953857 213.647552,555.982727 212.587830,556.031494 
	C209.507629,555.880066 206.844193,555.708801 204.180786,555.537537 
	C205.370743,548.563721 206.560715,541.589844 208.283600,534.289551 
	C211.077118,534.210999 213.337708,534.458984 216.062592,534.757935 
	C219.902084,511.531738 223.661697,488.788849 227.421295,466.045990 
	C229.634659,465.644470 231.834091,465.053741 234.064911,464.889709 
	C236.811203,464.687775 239.583649,464.841461 242.522736,464.841461 
	C237.970093,454.039764 233.582443,443.629486 228.794342,432.695923 
	C228.165665,431.202179 228.014206,430.205902 227.697876,429.265106 
	C221.429779,410.623657 217.161774,391.515289 215.267853,371.961395 
	C213.420883,352.892059 213.473297,333.830841 215.863174,314.718109 
	C218.935089,290.150665 224.878250,266.447052 234.661789,243.714447 
	C237.562500,236.974487 240.632095,230.307220 243.878143,223.038193 
	C242.005966,223.516586 240.734116,223.753326 239.521439,224.164505 
	C214.977173,232.486725 196.116638,248.515579 181.040619,268.942200 
	C153.278519,306.557281 139.946777,349.044525 140.838989,395.784668 
	C141.040649,406.348358 142.856171,416.881256 143.928802,427.428314 
	C145.964584,436.019989 148.000366,444.611664 150.042725,453.996490 
	C150.057892,455.573456 150.066467,456.357300 150.075043,457.141113 
	C150.025772,457.471283 149.865326,457.733368 149.041672,457.984589 
	C146.997101,458.027130 145.504532,458.012451 144.011993,457.997742 
	C143.670456,457.584412 143.328918,457.171082 142.951172,456.104401 
	C139.636566,447.226135 135.541611,439.223999 136.822800,429.860596 
	C136.983826,428.683777 135.677673,427.306183 135.051315,426.021606 
	C134.334625,422.694000 133.617935,419.366364 132.944061,415.193359 
	C132.974869,412.187073 133.061111,410.020386 132.935532,407.866089 
	C131.790329,388.222198 132.640060,368.672882 136.568146,349.380280 
	C141.204987,326.606628 149.381317,305.101318 160.765213,284.808380 
	C171.463562,265.737457 184.963715,248.950241 202.248413,235.569153 
	C210.323257,229.317947 219.479050,224.462982 228.144928,218.975189 
	C228.676682,218.863953 229.208450,218.752701 230.318909,218.450439 
	C232.411224,217.647781 233.924866,217.036133 235.438492,216.424469 
	C238.704315,215.650040 241.970139,214.875610 245.935303,214.069489 
	C247.421707,213.704605 248.208771,213.371414 248.995834,213.038223 
	C249.732224,212.990189 250.468628,212.942154 251.862305,213.051224 
	C256.042664,216.051834 255.134659,219.540512 253.915329,223.044556 
	C253.284378,224.857758 252.548248,226.634369 251.517761,228.576111 
	C248.562271,233.871536 245.788193,238.944016 243.363678,244.178406 
	C234.371490,263.591949 228.624313,284.066254 225.256454,305.083740 
	C221.992950,325.450012 220.970306,345.997375 222.955978,366.682037 
	C225.109863,389.119141 229.862198,410.908325 237.317322,432.131012 
	C237.779190,433.445831 239.417862,434.347229 241.362915,436.296936 
	C240.350754,400.638062 244.136246,367.499573 254.491394,335.197144 
	C256.458496,339.120575 258.087524,343.008881 259.508972,347.198456 
	C258.847931,348.722809 258.183502,349.910797 257.972992,351.174408 
	C255.312897,367.141754 251.950699,383.043823 250.354218,399.120056 
	C249.119308,411.555084 250.116226,424.211792 250.076599,437.228546 
	C250.191666,439.471893 250.334259,441.258301 250.513458,443.041016 
	C251.311813,450.982880 252.120636,458.923676 252.981888,466.942719 
	C253.038086,467.020569 253.094345,467.204163 252.861603,467.235291 
	C252.307495,467.461761 252.215012,467.734711 252.079010,468.342651 
	C249.905411,468.622925 248.004166,468.645844 246.019470,468.374451 
	C245.307831,468.749603 244.679642,469.419067 244.079956,470.516052 
	C241.022690,490.643036 237.973404,510.348389 234.829971,530.038696 
	C233.828003,536.314941 233.693314,536.480347 240.213974,537.199768 
	C259.546417,539.332947 278.904968,541.229004 298.237366,543.362610 
	C327.483704,546.590393 356.715851,549.946655 385.955383,553.236267 
	C404.943115,555.372437 423.933319,557.487183 443.035217,559.891296 
	C444.414581,560.171387 445.681122,560.171753 447.364594,560.114380 
	C452.159760,560.574280 456.537994,561.091980 461.011780,561.872803 
	C462.058533,562.136780 463.009735,562.137695 464.415253,562.092529 
	C467.553040,562.325928 470.236511,562.605286 473.050659,563.111938 
	C474.098724,563.300049 475.016052,563.260681 476.315491,563.165588 
	C477.438782,563.285156 478.180054,563.460388 479.043457,563.909790 
	C480.434784,564.147400 481.703979,564.110962 483.400757,564.030762 
	C485.541290,564.105469 487.254242,564.224060 488.967163,564.342651 
z"/>
<path fill="#DA3957" opacity="1.000000" stroke="none" 
	d="
M251.294632,207.548264 
	C251.048645,207.096298 250.802658,206.644318 250.274536,205.801849 
	C249.724014,205.192978 249.455612,204.974609 249.187210,204.756226 
	C242.897781,190.397110 236.811554,175.943878 230.223663,161.723022 
	C227.400330,155.628433 223.871796,149.782333 220.036621,144.258728 
	C216.806427,139.606461 211.729889,137.389511 205.501221,136.472885 
	C202.381866,135.295990 199.798065,134.497940 196.917145,133.465973 
	C189.453979,131.119598 182.195679,129.270218 175.155075,126.800255 
	C170.626068,125.211426 170.250198,123.259453 173.769226,120.029282 
	C179.028275,115.201927 184.700943,110.825172 190.537140,106.206139 
	C193.017029,104.527100 195.157440,102.898659 197.297836,101.270218 
	C198.368851,100.636765 199.439880,100.003311 201.021667,99.149155 
	C201.746994,98.649101 201.961533,98.369751 202.176071,98.090401 
	C223.004822,85.264870 244.591141,73.914146 267.593079,65.498444 
	C297.348969,54.611652 328.075226,49.687107 359.706879,52.774006 
	C377.373810,54.498100 393.944153,60.644958 410.546265,68.445160 
	C413.350677,70.040817 415.592468,71.318832 418.643951,73.058418 
	C416.795471,73.504677 415.914337,73.717392 414.611267,73.904922 
	C405.347382,72.913170 396.502167,71.107864 387.664276,71.143082 
	C364.565521,71.235130 343.101685,78.016617 322.968872,89.109192 
	C295.076141,104.477226 271.238708,124.129707 259.143005,154.597000 
	C252.459000,171.432983 248.270203,189.023163 257.481049,206.709869 
	C257.985016,207.677536 257.861847,208.971786 257.646576,210.168915 
	C255.273239,209.331955 253.283936,208.440109 251.294632,207.548264 
z"/>
<path fill="#D73855" opacity="1.000000" stroke="none" 
	d="
M519.018250,381.950775 
	C519.488464,383.535553 519.958740,385.120300 520.079346,387.291870 
	C518.624817,388.833862 517.519836,389.789032 516.094360,390.507690 
	C514.034180,390.562531 511.858124,390.291412 510.631287,391.243469 
	C505.565094,395.174805 500.728912,399.411530 495.917999,403.660339 
	C490.761200,408.214600 491.348083,410.413330 498.486572,412.943756 
	C500.205017,413.854919 501.618500,414.605011 503.071472,415.601807 
	C503.704834,415.967712 504.298737,416.086945 505.335754,416.151276 
	C507.856018,416.200165 509.933105,416.303925 512.123291,416.738495 
	C514.491394,416.955566 516.746277,416.841858 519.309204,416.544800 
	C520.068298,416.206909 520.519409,416.052368 521.080200,416.214325 
	C521.398987,420.362793 517.698792,424.525909 522.338684,428.357666 
	C522.594421,429.512024 522.672852,430.306244 522.509644,431.310303 
	C520.842773,432.581268 519.417664,433.642456 517.645081,434.846924 
	C516.069946,435.427002 514.755127,435.705811 513.628906,436.326569 
	C507.022552,439.967926 500.554901,443.870911 493.867523,447.353638 
	C453.550446,468.350494 410.853363,478.288025 365.377167,473.614136 
	C355.139557,472.561951 345.152496,469.072571 334.847778,466.426056 
	C333.149872,465.541077 331.654266,464.935211 330.039490,464.023193 
	C329.046478,458.306976 328.172668,452.896942 327.659790,447.560516 
	C342.932495,454.286316 358.514374,457.781311 374.874817,458.149536 
	C391.564667,458.525146 408.258850,458.315857 424.536316,454.522125 
	C440.964050,450.693390 457.621185,447.416595 473.258362,440.776733 
	C479.130493,438.283356 484.716705,435.116608 490.988983,431.978821 
	C486.103302,428.131775 482.169739,424.872040 478.024017,421.909119 
	C477.209839,421.327209 475.400055,421.505829 474.345795,421.985321 
	C450.744690,432.718353 426.257019,440.116669 400.364532,442.859863 
	C383.197113,444.678711 366.114044,445.245636 349.268097,441.070160 
	C341.106934,439.047302 333.231079,435.873322 324.911438,432.929779 
	C323.671539,422.051025 322.746277,411.463013 322.147400,400.734772 
	C324.015991,400.873566 325.614105,400.979950 327.091431,401.458923 
	C338.604309,405.191528 349.895538,409.835541 361.630768,412.608826 
	C388.772095,419.022858 416.448334,421.187225 444.288971,419.724823 
	C450.545135,419.396210 457.123077,417.632477 462.783905,414.922852 
	C481.130463,406.141144 498.122559,395.078186 513.493958,381.688446 
	C515.804565,379.675720 517.280334,379.544434 519.018250,381.950775 
z"/>
<path fill="#B4DBE5" opacity="1.000000" stroke="none" 
	d="
M141.346298,186.997238 
	C144.800369,185.893738 148.287231,184.882507 151.702194,183.668961 
	C160.931198,180.389374 169.207550,185.544464 170.950455,195.830414 
	C172.357498,204.134293 173.636383,212.459885 175.022385,221.526001 
	C174.686035,222.986664 174.452255,223.861725 173.890396,224.383499 
	C161.620331,235.778503 148.937668,246.760986 137.153854,258.636017 
	C129.967346,265.878113 124.007851,274.370880 117.771988,282.512360 
	C113.165474,288.526581 109.002632,294.880615 104.642128,301.083282 
	C101.161186,298.915131 97.779854,296.563049 94.180374,294.613770 
	C83.926865,289.061005 72.944252,290.376770 62.132206,291.969177 
	C57.591999,292.637878 53.156445,294.326904 49.769878,290.062927 
	C46.439507,285.869659 47.233379,280.924194 49.858074,276.992340 
	C53.574974,271.424408 58.235943,266.487732 62.472778,261.264496 
	C63.064053,260.535583 63.537983,259.711456 64.419060,258.640259 
	C66.129204,258.049225 67.563255,257.935547 68.829124,257.413818 
	C72.328094,255.971817 75.661491,254.074219 79.235085,252.879318 
	C84.994370,250.953583 90.979538,249.692871 96.710083,247.694641 
	C102.598961,245.641205 107.315231,242.221603 107.675415,234.951706 
	C109.030266,231.042374 110.044014,227.235275 111.283066,223.122101 
	C112.538208,220.776733 113.312424,218.550339 114.643661,216.731674 
	C119.503746,210.092178 124.549652,203.588699 129.571869,197.066681 
	C129.618210,197.099396 129.707031,197.028854 130.089233,197.023438 
	C134.168198,193.755676 139.946793,192.752625 141.346298,186.997238 
z"/>
<path fill="#D5D2D4" opacity="1.000000" stroke="none" 
	d="
M519.273804,381.759979 
	C517.280334,379.544434 515.804565,379.675720 513.493958,381.688446 
	C498.122559,395.078186 481.130463,406.141144 462.783905,414.922852 
	C457.123077,417.632477 450.545135,419.396210 444.288971,419.724823 
	C416.448334,421.187225 388.772095,419.022858 361.630768,412.608826 
	C349.895538,409.835541 338.604309,405.191528 327.091431,401.458923 
	C325.614105,400.979950 324.015991,400.873566 321.891663,400.535065 
	C320.515900,399.681030 319.834991,398.710144 318.911041,398.119476 
	C310.481384,392.730988 301.841248,387.654419 293.590424,382.007751 
	C282.066986,374.121368 272.973907,363.789764 265.085297,352.323761 
	C263.665680,350.260376 261.524536,348.693390 259.716553,346.897217 
	C258.087524,343.008881 256.458496,339.120575 254.405090,334.788330 
	C251.968002,327.403259 250.078781,320.423462 247.917908,313.528778 
	C242.790405,297.168427 243.836411,280.326691 244.188553,263.598511 
	C244.304443,258.094299 246.202118,252.612183 247.422806,247.150757 
	C248.821777,240.891800 250.373993,234.667099 251.859634,228.427505 
	C252.548248,226.634369 253.284378,224.857758 253.915329,223.044556 
	C255.134659,219.540512 256.042664,216.051834 252.222321,212.967773 
	C251.673706,211.256180 251.422379,209.785141 251.232849,207.931183 
	C253.283936,208.440109 255.273239,209.331955 257.676758,210.590149 
	C258.261475,212.762222 258.226440,214.617020 258.643616,216.363831 
	C259.626373,220.478928 259.436310,224.295090 257.822571,228.356995 
	C252.460983,241.852661 249.776291,256.036377 249.059967,270.462463 
	C247.837860,295.075409 251.938019,318.548157 263.988495,340.558380 
	C271.749084,354.733124 282.314362,366.195923 294.545898,376.233643 
	C307.842224,387.145294 322.924561,395.029297 339.203033,400.727875 
	C357.239899,407.041962 375.716919,411.191101 394.716919,413.012573 
	C401.313324,413.644958 407.934784,414.145294 414.556000,414.359558 
	C424.683838,414.687286 434.874023,415.395905 444.935486,414.618988 
	C451.170349,414.137604 457.595123,411.987579 463.275696,409.229431 
	C480.473053,400.879517 496.123505,390.056610 510.849091,377.840210 
	C526.054138,365.226074 537.670776,349.913971 546.396240,332.285553 
	C553.905029,317.115143 557.003235,300.868042 556.846558,284.169373 
	C556.709656,269.567322 553.768799,255.244965 548.707520,241.481323 
	C542.640320,224.982117 535.345337,208.967148 524.507629,195.081650 
	C514.637817,182.436218 503.963287,170.355225 492.870117,158.765656 
	C489.393372,155.133301 487.995514,152.102737 487.802673,147.316483 
	C487.600311,142.292847 486.577393,137.082047 484.784821,132.383484 
	C479.135864,117.576744 468.820404,105.955475 457.105896,95.791306 
	C446.715698,86.776207 435.514038,78.664108 421.369324,76.146141 
	C419.194702,75.759033 417.142212,74.685936 415.033234,73.930099 
	C415.914337,73.717392 416.795471,73.504677 418.643951,73.058418 
	C415.592468,71.318832 413.350677,70.040817 410.903442,68.478149 
	C418.855927,70.727463 427.353363,72.497597 435.105652,75.943886 
	C455.376007,84.955116 470.809052,99.990494 483.162628,118.051445 
	C489.039978,126.644150 493.276428,136.168488 493.230530,147.201218 
	C493.218109,150.185318 495.566864,153.613922 497.696991,156.096130 
	C506.338776,166.166306 516.467773,175.162827 523.881775,186.033005 
	C533.237122,199.749634 541.367493,214.491989 548.412476,229.547012 
	C557.630676,249.246094 562.321838,270.319550 560.820801,292.272949 
	C560.293945,299.978882 558.390686,307.590729 556.816772,315.827820 
	C556.356934,317.276489 556.196289,318.142853 556.035645,319.009216 
	C555.642700,321.051147 555.249817,323.093048 554.480591,325.601868 
	C551.404785,331.423737 548.705322,336.778717 546.005798,342.133698 
	C546.382263,342.412933 546.758728,342.692139 547.135193,342.971375 
	C549.262451,340.962555 551.389709,338.953766 553.702820,337.257141 
	C558.587646,341.701935 563.286621,345.834503 567.985657,349.967041 
	C566.121643,357.553223 560.613037,361.744995 553.515991,364.694305 
	C548.183899,361.032440 543.373291,357.619415 538.925842,354.464081 
	C533.869934,360.129211 526.827881,367.975037 519.889771,375.911652 
	C519.498596,376.359100 519.961975,377.553528 520.027588,378.400299 
	C519.861572,379.456604 519.695496,380.512878 519.273804,381.759979 
M553.757568,358.841339 
	C556.135803,356.827148 560.845398,353.803894 560.486389,352.974335 
	C558.975220,349.482880 555.950562,346.646484 553.595276,343.714203 
	C550.538269,346.516815 548.266541,348.599426 544.733887,351.838104 
	C547.783142,354.273499 550.441711,356.396820 553.757568,358.841339 
z"/>
<path fill="#B3DAE3" opacity="1.000000" stroke="none" 
	d="
M227.856934,218.675049 
	C219.479050,224.462982 210.323257,229.317947 202.248413,235.569153 
	C184.963715,248.950241 171.463562,265.737457 160.765213,284.808380 
	C149.381317,305.101318 141.204987,326.606628 136.568146,349.380280 
	C132.640060,368.672882 131.790329,388.222198 132.935532,407.866089 
	C133.061111,410.020386 132.974869,412.187073 132.822662,414.823303 
	C130.432251,412.812653 128.206055,410.326660 125.981934,407.077759 
	C125.025185,405.209503 124.066353,404.104126 123.107513,402.998779 
	C123.046967,402.596344 122.986420,402.193909 122.921074,401.101440 
	C121.254990,395.441223 119.682663,390.438019 117.859520,385.527954 
	C117.481834,384.510712 116.172523,383.839417 115.292580,383.008667 
	C115.233711,382.545990 115.174835,382.083344 115.359619,381.026978 
	C114.462204,376.626007 113.321129,372.818695 112.180054,369.011383 
	C112.135605,368.555328 112.091156,368.099304 112.334564,367.025818 
	C111.842194,361.945709 111.061966,357.483032 110.281738,353.020386 
	C110.236710,349.974182 110.191689,346.927948 110.557785,343.331085 
	C111.041908,340.220551 111.114914,337.660706 111.187927,335.100830 
	C111.187096,334.626038 111.186272,334.151245 111.587738,333.228699 
	C112.651917,330.456482 113.640450,328.159576 113.839951,325.796112 
	C113.941956,324.587646 112.630562,323.259857 112.008545,321.627197 
	C123.388481,295.915710 141.098618,275.260284 160.594971,256.025635 
	C170.701981,246.054260 180.948395,236.145737 193.734985,229.377197 
	C195.421387,228.484497 196.103500,225.694611 197.250732,223.783417 
	C202.993805,222.516571 208.708542,221.095734 214.489197,220.033569 
	C218.805008,219.240601 223.205917,218.910889 227.856934,218.675049 
z"/>
<path fill="#ECB0C0" opacity="1.000000" stroke="none" 
	d="
M111.057755,223.428192 
	C110.044014,227.235275 109.030266,231.042374 107.324242,234.845810 
	C101.566307,230.198837 96.500656,225.555511 91.331116,220.562775 
	C88.256660,216.682999 85.286102,213.152618 81.430222,208.570084 
	C80.599632,216.892883 79.951027,223.392151 79.196075,230.283051 
	C75.985977,240.708893 73.418457,251.057953 63.559647,257.126190 
	C62.067741,255.791473 60.575836,254.456757 59.046947,252.470642 
	C61.534710,247.734711 64.447906,243.835373 66.501923,239.526474 
	C70.557014,231.019775 72.610146,221.994720 71.794472,212.469894 
	C71.602112,210.223724 71.063141,208.069397 68.244049,209.729904 
	C61.898285,213.467667 55.706001,217.466003 49.451248,221.358292 
	C46.236084,220.252792 43.060059,219.011581 39.797436,218.070663 
	C33.416107,216.230316 29.068932,212.004669 28.431803,205.640289 
	C27.791178,199.240982 32.340950,194.932312 37.534252,191.888489 
	C44.241581,187.957306 51.561344,187.165176 59.173645,188.612778 
	C60.783417,188.918884 62.456226,188.893463 64.507378,189.389709 
	C63.118793,195.827774 64.622490,200.545624 69.333015,203.621048 
	C72.738106,205.844193 78.677078,205.371719 81.868279,202.623795 
	C85.967270,199.094177 87.304428,194.066772 84.885590,189.249374 
	C82.283394,184.066788 77.676552,182.354050 72.067513,183.031097 
	C72.047134,176.636139 71.621384,170.209595 72.116623,163.854813 
	C72.646774,157.052002 76.195190,151.371704 82.232155,148.276169 
	C91.034424,143.762650 100.868141,151.148285 101.922302,162.512817 
	C102.118225,164.625031 102.511047,166.719009 102.878143,169.549515 
	C98.947105,176.923691 94.950920,183.569748 90.682800,190.668060 
	C91.465294,190.921051 92.904312,191.724564 94.386101,191.813202 
	C109.783348,192.734238 124.521507,191.604065 134.928406,177.918716 
	C136.641098,180.623199 138.353806,183.327698 139.834167,186.474426 
	C137.017746,188.857925 134.285248,190.637466 131.915405,192.812210 
	C130.815598,193.821442 130.421204,195.599396 129.707031,197.028854 
	C129.707031,197.028854 129.618210,197.099396 129.297089,196.780609 
	C121.659622,197.993912 114.343277,199.526001 106.562363,201.043060 
	C100.469940,201.028030 94.842094,201.028030 87.582253,201.028030 
	C91.887711,205.009674 95.306816,208.171631 98.817474,211.655762 
	C102.958611,215.794678 107.008186,219.611435 111.057755,223.428192 
z"/>
<path fill="#8ACBD1" opacity="1.000000" stroke="none" 
	d="
M197.234741,223.394852 
	C196.103500,225.694611 195.421387,228.484497 193.734985,229.377197 
	C180.948395,236.145737 170.701981,246.054260 160.594971,256.025635 
	C141.098618,275.260284 123.388481,295.915710 111.738899,321.865051 
	C111.037819,323.199127 110.512115,323.897003 110.298500,324.680054 
	C108.212311,332.327301 106.167038,333.675171 98.857056,332.122681 
	C98.197136,331.368439 97.537224,330.614197 96.879501,329.161255 
	C96.629555,326.982513 96.377426,325.502472 96.125290,324.022400 
	C96.159935,323.297333 96.194580,322.572296 96.610168,321.369751 
	C97.634209,318.901947 98.277298,316.911652 98.920387,314.921326 
	C100.846008,310.534607 102.771622,306.147888 104.669678,301.422241 
	C109.002632,294.880615 113.165474,288.526581 117.771988,282.512360 
	C124.007851,274.370880 129.967346,265.878113 137.153854,258.636017 
	C148.937668,246.760986 161.620331,235.778503 173.890396,224.383499 
	C174.452255,223.861725 174.686035,222.986664 175.058746,221.977692 
	C179.178787,219.885605 183.251022,217.928177 187.463226,216.342514 
	C192.052734,214.614807 197.941986,217.352097 197.234741,223.394852 
z"/>
<path fill="#9F7C55" opacity="1.000000" stroke="none" 
	d="
M693.913940,576.002930 
	C695.384827,571.503845 696.753845,566.968262 698.347839,562.513123 
	C701.663513,553.245972 703.361938,543.735779 703.442444,533.432800 
	C708.552734,530.173157 713.447021,527.622620 717.831909,524.382629 
	C719.013123,523.509888 718.646851,520.542969 718.990906,518.537231 
	C716.958618,518.588806 714.710449,518.099792 712.940002,518.806885 
	C709.495483,520.182556 706.318848,522.229004 703.031250,523.997559 
	C702.816711,521.812439 702.390991,519.623840 702.427490,517.442932 
	C702.536194,510.949738 696.426147,507.806274 694.235413,501.869507 
	C692.708923,500.206299 691.479614,499.093323 690.003601,497.829163 
	C689.510071,497.384155 689.263184,497.090363 688.972412,496.469116 
	C687.921509,495.440308 686.914307,494.738953 685.595642,493.915741 
	C681.861023,491.119019 678.437927,488.444214 674.946777,485.451355 
	C674.156494,484.795593 673.434326,484.457855 672.510864,484.098145 
	C672.309692,484.076172 672.012329,483.801666 671.939453,483.467529 
	C671.090027,482.816254 670.313599,482.499115 669.235657,482.145142 
	C668.297974,481.620605 667.661743,481.132965 666.953003,480.301483 
	C665.695312,479.415558 664.510132,478.873413 663.069092,478.341553 
	C662.547302,478.149506 662.281250,477.947113 661.941284,477.411316 
	C660.416992,476.447968 658.966736,475.818024 657.181885,475.170959 
	C655.910706,474.572937 654.974060,473.991974 653.950928,473.103271 
	C651.826111,471.899872 649.787903,471.004211 647.399658,470.081360 
	C646.045959,469.470123 645.042236,468.886078 643.937256,468.004639 
	C641.799683,466.842896 639.763428,465.978607 637.419983,465.104553 
	C636.750427,464.913086 636.388123,464.731354 635.936768,464.243347 
	C632.389221,462.359741 628.930786,460.782440 625.199768,459.216797 
	C624.625977,459.037079 624.324707,458.845703 623.980835,458.399841 
	C623.312317,458.037750 622.686401,457.930145 621.704712,457.814819 
	C620.578857,457.274384 619.808716,456.741730 618.927368,455.920441 
	C616.313232,454.544617 613.810242,453.457397 610.973877,452.401031 
	C609.431458,451.882324 608.222412,451.332764 606.934204,450.446564 
	C606.061340,449.807983 605.267700,449.506042 604.153198,449.227539 
	C602.895020,448.768616 601.957581,448.286316 601.098389,447.465454 
	C604.245972,447.519897 607.634705,447.207703 610.329590,448.427856 
	C622.059692,453.738678 633.574524,459.523499 645.195190,465.078186 
	C650.814148,467.764069 656.494385,470.322021 662.146851,472.937927 
	C662.578308,473.101044 663.009705,473.264130 663.812744,473.925964 
	C669.481995,477.965942 674.811829,481.460266 680.066467,485.064301 
	C683.793274,487.620514 687.418457,490.324829 691.089050,492.963013 
	C692.658875,494.409912 694.228760,495.856781 695.930969,497.962524 
	C700.267273,505.341003 700.267273,505.341003 704.045227,505.177673 
	C701.535034,497.761536 700.777100,490.349945 704.002930,483.006073 
	C704.002930,483.006073 704.000000,483.000000 704.389160,483.000732 
	C708.648132,480.295441 712.580017,481.195679 716.524048,482.799286 
	C716.524048,482.799286 716.828064,482.825409 716.946411,483.302551 
	C719.387329,488.856873 721.709961,493.934021 724.032593,499.011200 
	C724.250427,500.176514 724.468323,501.341827 724.411621,503.189514 
	C724.217529,510.158264 724.298096,516.444641 724.378662,522.730957 
	C724.393066,523.557861 724.407532,524.384827 723.992554,525.764648 
	C723.101440,527.183350 722.508728,528.004822 722.198914,528.921814 
	C719.750671,536.167358 717.860840,543.653625 714.789246,550.620422 
	C712.240967,556.400452 708.320251,561.575317 705.007507,567.018250 
	C704.580688,567.629211 704.153870,568.240173 703.091553,568.968872 
	C701.680664,570.161072 700.905090,571.235474 700.129517,572.309875 
	C698.997009,573.482300 697.864563,574.654724 696.074829,575.922852 
	C694.916321,576.013306 694.415161,576.008118 693.913940,576.002930 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M522.751343,431.100494 
	C522.672852,430.306244 522.594421,429.512024 522.489990,427.993408 
	C521.221069,418.599579 521.860352,417.320923 529.087219,413.902130 
	C529.351990,413.776917 529.498779,413.402191 529.700562,413.143738 
	C533.108887,412.888184 536.517212,412.632629 540.218872,412.925476 
	C541.374146,419.431519 542.236145,425.389191 543.026367,431.734436 
	C538.113770,435.614410 533.950256,439.658966 531.632324,445.627930 
	C529.286194,446.438080 527.078674,446.782562 525.426025,447.927917 
	C520.784424,451.144775 516.603455,455.066986 511.817322,458.025970 
	C503.350006,463.260803 494.569305,467.988770 485.919769,472.928894 
	C474.983887,477.074219 464.048004,481.219513 452.817871,485.976685 
	C451.078766,486.525177 449.585938,486.193756 448.196899,486.442322 
	C439.910431,487.924957 431.653473,489.571594 423.376160,491.106812 
	C406.721039,494.195892 390.015961,496.074951 373.033783,494.024841 
	C361.211182,492.597565 349.424133,491.192719 338.521362,485.957916 
	C334.755737,484.149902 330.166351,483.097778 330.766846,477.169678 
	C330.865631,476.194183 328.983704,475.018066 328.265137,473.668610 
	C328.952789,471.874756 329.511688,470.368835 329.797729,468.812744 
	C330.067444,467.345734 330.049866,465.825958 330.158661,464.329346 
	C331.654266,464.935211 333.149872,465.541077 334.817688,466.896515 
	C334.881073,478.903534 335.244904,480.457703 344.774750,483.183258 
	C354.355133,485.923279 364.298035,487.745819 374.206909,488.876617 
	C382.182251,489.786774 390.401520,489.681671 398.410004,488.931824 
	C412.539459,487.609009 426.889893,486.691437 440.611572,483.381378 
	C467.898163,476.799133 493.801758,466.456238 516.483826,449.299347 
	C521.479675,445.520447 526.450073,441.707947 532.228821,437.303802 
	C528.126038,435.852325 525.691528,434.991058 523.386230,433.868530 
	C523.260803,432.771698 523.006104,431.936096 522.751343,431.100494 
M526.728271,427.613403 
	C528.248413,428.747467 529.730896,430.791718 531.295349,430.856476 
	C537.723450,431.122559 538.522583,429.606049 536.625732,422.267029 
	C535.491089,417.876984 530.482910,416.096100 527.550232,419.530701 
	C526.187927,421.126160 526.733521,424.350830 526.728271,427.613403 
z"/>
<path fill="#9D7850" opacity="1.000000" stroke="none" 
	d="
M188.926849,532.013123 
	C188.282730,538.379395 187.638626,544.745728 186.540100,551.551758 
	C184.243729,552.087097 182.401764,552.182678 180.559799,552.278198 
	C180.221634,552.308777 179.883484,552.339355 179.103516,551.992554 
	C177.122284,551.688354 175.582840,551.761536 174.043411,551.834717 
	C172.976715,551.820618 171.910004,551.806519 170.317871,551.328369 
	C167.714340,550.671143 165.636215,550.477966 163.558105,550.284790 
	C161.964813,550.240601 160.371506,550.196472 158.135712,549.790955 
	C153.703827,549.153320 149.914429,548.876953 146.125031,548.600708 
	C144.386963,548.548401 142.648911,548.496155 140.328400,548.032227 
	C136.851578,547.346924 133.957214,547.073303 131.062851,546.799683 
	C129.670456,546.762634 128.278076,546.725708 126.365715,546.276001 
	C125.073914,545.677551 124.302071,545.491760 123.530243,545.305908 
	C123.530243,545.305908 123.212517,545.244690 123.086487,544.819336 
	C122.396111,543.911194 121.831749,543.428284 121.267395,542.945374 
	C120.138947,539.618042 120.113243,536.625122 124.523277,534.793213 
	C127.897820,533.836243 130.503738,532.830566 133.109665,531.824829 
	C133.834381,531.603699 134.559082,531.382507 135.881500,531.392334 
	C138.017624,530.956055 139.556015,530.288757 141.094391,529.621338 
	C141.528381,529.489502 141.962372,529.357605 142.989258,529.474976 
	C145.725052,529.125916 147.867950,528.527649 150.010864,527.929382 
	C151.076599,527.890808 152.142319,527.852234 153.835571,528.185913 
	C157.951523,528.785522 161.439941,529.013000 164.928360,529.240417 
	C166.652725,529.289062 168.377090,529.337708 170.665802,529.833618 
	C174.805893,530.574646 178.381653,530.868469 181.957397,531.162354 
	C184.014954,531.231201 186.072495,531.300049 188.511490,531.583191 
	C188.892929,531.797546 188.926849,532.013123 188.926849,532.013123 
z"/>
<path fill="#DB3C5A" opacity="1.000000" stroke="none" 
	d="
M135.177368,177.680908 
	C124.521507,191.604065 109.783348,192.734238 94.386101,191.813202 
	C92.904312,191.724564 91.465294,190.921051 90.682800,190.668060 
	C94.950920,183.569748 98.947105,176.923691 103.016953,169.972717 
	C108.443848,164.530365 113.797089,159.392960 118.685097,154.701996 
	C125.131065,160.726517 131.342682,166.336945 137.188766,172.305405 
	C137.757202,172.885757 136.067703,175.677750 135.177368,177.680908 
z"/>
<path fill="#DB3C5A" opacity="1.000000" stroke="none" 
	d="
M49.258728,221.631897 
	C55.706001,217.466003 61.898285,213.467667 68.244049,209.729904 
	C71.063141,208.069397 71.602112,210.223724 71.794472,212.469894 
	C72.610146,221.994720 70.557014,231.019775 66.501923,239.526474 
	C64.447906,243.835373 61.534710,247.734711 58.965202,252.129211 
	C56.406116,253.584686 53.520775,256.086609 51.472973,255.526489 
	C49.007423,254.852081 47.266205,251.563156 45.188759,249.428116 
	C42.302509,246.461853 39.545498,243.346375 36.454483,240.609497 
	C33.390137,237.896271 33.819386,235.916550 36.726616,233.414917 
	C40.986706,229.749161 44.966793,225.757996 49.258728,221.631897 
z"/>
<path fill="#D9D7D8" opacity="1.000000" stroke="none" 
	d="
M197.214279,133.699905 
	C199.798065,134.497940 202.381866,135.295990 205.114349,136.437683 
	C204.004822,137.821548 202.272018,138.608826 201.561951,139.941177 
	C194.626694,152.954117 184.272293,160.723679 169.195282,160.905014 
	C153.738495,161.090912 140.860519,151.306274 135.909531,136.535965 
	C131.151962,122.342712 134.300919,110.016747 144.818863,99.865570 
	C157.638489,87.492973 178.150894,86.316933 191.892090,98.331245 
	C193.223190,99.495071 194.996582,100.153023 196.931244,101.158005 
	C195.157440,102.898659 193.017029,104.527100 190.486832,105.817551 
	C189.201065,103.968498 188.624146,102.083572 187.359604,101.004379 
	C175.108429,90.548935 152.532135,94.215683 144.034866,107.927109 
	C136.513565,120.063667 137.062180,135.613907 146.140686,145.436844 
	C155.047073,155.073547 168.204041,159.951645 182.527802,152.558884 
	C190.028595,148.687561 197.232407,143.795654 197.214279,133.699905 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M134.850601,426.247314 
	C135.677673,427.306183 136.983826,428.683777 136.822800,429.860596 
	C135.541611,439.223999 139.636566,447.226135 142.896835,455.831848 
	C126.913040,454.494446 110.940323,452.836456 94.992592,450.965515 
	C93.387566,450.777252 91.933701,449.300476 90.409683,448.421692 
	C91.856491,447.438171 93.178459,446.118103 94.770973,445.527344 
	C103.281067,442.370361 111.870270,439.427460 120.407684,436.342865 
	C124.139168,434.994659 127.758568,433.318329 131.529251,432.102264 
	C134.536682,431.132355 135.304810,429.288788 134.850601,426.247314 
z"/>
<path fill="#DF6971" opacity="1.000000" stroke="none" 
	d="
M63.715244,257.401154 
	C73.418457,251.057953 75.985977,240.708893 79.529716,230.295853 
	C81.447121,228.973251 83.025513,228.154266 84.379807,227.058334 
	C86.802750,225.097626 89.090645,222.970032 91.434998,220.912201 
	C96.500656,225.555511 101.566307,230.198837 106.983139,234.948059 
	C107.315231,242.221603 102.598961,245.641205 96.710083,247.694641 
	C90.979538,249.692871 84.994370,250.953583 79.235085,252.879318 
	C75.661491,254.074219 72.328094,255.971817 68.829124,257.413818 
	C67.563255,257.935547 66.129204,258.049225 64.463646,258.294678 
	C64.060547,258.052216 63.965694,257.864166 63.715244,257.401154 
z"/>
<path fill="#D9405E" opacity="1.000000" stroke="none" 
	d="
M520.487793,378.347412 
	C519.961975,377.553528 519.498596,376.359100 519.889771,375.911652 
	C526.827881,367.975037 533.869934,360.129211 538.925842,354.464081 
	C543.373291,357.619415 548.183899,361.032440 553.177856,364.751526 
	C544.178589,373.441132 533.813538,378.929321 520.487793,378.347412 
z"/>
<path fill="#12100E" opacity="1.000000" stroke="none" 
	d="
M568.163452,349.685608 
	C563.286621,345.834503 558.587646,341.701935 553.825378,336.856140 
	C554.926392,332.798401 556.090759,329.453857 557.255127,326.109314 
	C559.940735,327.499390 562.322083,328.323944 565.776001,327.462708 
	C568.292358,326.835236 572.674805,328.501190 574.233459,330.614105 
	C575.955444,332.948364 576.569397,337.390259 575.553162,340.130707 
	C574.254822,343.631866 570.842529,346.349060 568.163452,349.685608 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M662.012329,472.631683 
	C656.494385,470.322021 650.814148,467.764069 645.195190,465.078186 
	C633.574524,459.523499 622.059692,453.738678 610.329590,448.427856 
	C607.634705,447.207703 604.245972,447.519897 600.711975,447.487976 
	C597.241150,447.082184 593.938110,446.870911 591.280579,445.451294 
	C580.403015,439.640747 569.722473,433.461548 558.959473,427.103577 
	C559.660156,425.520233 560.370850,424.251343 561.081543,422.982483 
	C573.080017,429.412048 584.870544,436.275543 597.134216,442.151733 
	C609.937622,448.286591 623.302246,453.239960 636.219604,459.151031 
	C644.953064,463.147583 653.337341,467.907196 662.012329,472.631683 
z"/>
<path fill="#E795AF" opacity="1.000000" stroke="none" 
	d="
M71.813950,183.077576 
	C77.676552,182.354050 82.283394,184.066788 84.885590,189.249374 
	C87.304428,194.066772 85.967270,199.094177 81.868279,202.623795 
	C78.677078,205.371719 72.738106,205.844193 69.333015,203.621048 
	C64.622490,200.545624 63.118793,195.827774 64.945084,189.356613 
	C66.054459,187.653534 67.133507,186.352448 68.856979,184.988647 
	C70.024117,184.377914 70.546822,183.829880 71.069534,183.281845 
	C71.233154,183.229233 71.396774,183.176636 71.813950,183.077576 
z"/>
<path fill="#12100E" opacity="1.000000" stroke="none" 
	d="
M561.043579,422.561584 
	C560.370850,424.251343 559.660156,425.520233 558.588867,427.213013 
	C556.203796,428.586548 554.179382,429.536194 552.085327,430.074890 
	C548.741638,422.667053 549.620178,415.215515 554.155884,411.511017 
	C559.549988,413.049622 561.575684,416.758820 561.043579,422.561584 
z"/>
<path fill="#271F22" opacity="1.000000" stroke="none" 
	d="
M516.414917,390.744202 
	C517.519836,389.789032 518.624817,388.833862 520.024902,387.645386 
	C522.202332,392.321838 524.084656,397.231537 525.682129,402.614807 
	C524.284058,404.193085 523.170776,405.297821 521.773682,406.135193 
	C519.798157,400.826569 518.106567,395.785400 516.414917,390.744202 
z"/>
<path fill="#271F22" opacity="1.000000" stroke="none" 
	d="
M543.098083,431.346863 
	C542.236145,425.389191 541.374146,419.431519 540.669312,413.101868 
	C542.618042,412.176758 544.409607,411.623688 546.560852,411.547852 
	C546.934692,418.503235 546.948914,424.981354 546.579468,431.544495 
	C545.163269,431.535278 544.130676,431.441071 543.098083,431.346863 
z"/>
<path fill="#956D43" opacity="1.000000" stroke="none" 
	d="
M546.963135,431.459503 
	C546.948914,424.981354 546.934692,418.503235 546.924805,411.609467 
	C547.407898,410.750916 547.886719,410.308014 548.978882,409.764526 
	C550.110229,409.611847 550.628235,409.559753 551.146240,409.507629 
	C552.044922,410.004822 552.943665,410.501984 553.999146,411.255066 
	C549.620178,415.215515 548.741638,422.667053 552.104248,430.417297 
	C551.120056,431.780762 550.047241,432.390839 548.913330,432.761108 
	C548.617798,432.218933 548.320435,432.131897 547.693726,432.081238 
	C547.272705,431.754669 547.117920,431.607086 546.963135,431.459503 
z"/>
<path fill="#D9405E" opacity="1.000000" stroke="none" 
	d="
M522.057495,406.402588 
	C523.170776,405.297821 524.284058,404.193085 525.644287,402.956238 
	C527.106628,406.016418 528.321838,409.208618 529.618835,412.772278 
	C529.498779,413.402191 529.351990,413.776917 529.087219,413.902130 
	C521.860352,417.320923 521.221069,418.599579 522.312622,427.633301 
	C517.698792,424.525909 521.398987,420.362793 521.239319,415.890045 
	C521.544983,412.300385 521.801270,409.351501 522.057495,406.402588 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M705.322205,566.916138 
	C708.320251,561.575317 712.240967,556.400452 714.789246,550.620422 
	C717.860840,543.653625 719.750671,536.167358 722.198914,528.921814 
	C722.508728,528.004822 723.101440,527.183350 723.832825,526.151062 
	C722.334656,532.805054 721.473755,540.045654 718.560791,546.335876 
	C715.197021,553.599243 710.024231,560.024780 705.322205,566.916138 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M703.666748,483.102600 
	C700.777100,490.349945 701.535034,497.761536 704.045227,505.177673 
	C700.267273,505.341003 700.267273,505.341003 696.051392,498.262054 
	C696.904114,498.465851 697.768799,499.029022 698.992065,499.973785 
	C699.876404,500.747192 700.402100,501.139008 700.927856,501.530823 
	C700.782227,500.549561 700.636658,499.568329 700.491028,498.587067 
	C700.539001,493.291931 698.416260,487.596252 703.666748,483.102600 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M690.991394,492.641876 
	C687.418457,490.324829 683.793274,487.620514 680.066467,485.064301 
	C674.811829,481.460266 669.481995,477.965942 664.074280,474.157654 
	C672.940735,480.033966 681.917236,486.177368 690.991394,492.641876 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M180.785645,552.575806 
	C182.401764,552.182678 184.243729,552.087097 186.540039,551.987854 
	C186.549026,567.031006 186.743881,563.682861 173.571518,562.290771 
	C172.145676,562.140076 170.754898,561.657471 169.191559,561.039368 
	C172.324875,560.918884 175.612885,561.156982 178.904633,561.233337 
	C181.218353,561.287048 183.986069,562.538452 184.952805,558.781616 
	C185.886642,555.152527 184.165848,553.612854 180.785645,552.575806 
z"/>
<path fill="#B4DBE5" opacity="1.000000" stroke="none" 
	d="
M98.953629,332.476990 
	C106.167038,333.675171 108.212311,332.327301 110.298500,324.680054 
	C110.512115,323.897003 111.037819,323.199127 111.688347,322.223877 
	C112.630562,323.259857 113.941956,324.587646 113.839951,325.796112 
	C113.640450,328.159576 112.651917,330.456482 111.655502,332.878265 
	C109.561790,329.380005 108.308784,333.057007 107.295135,333.541595 
	C104.249252,334.997803 101.545410,336.310425 98.953629,332.476990 
z"/>
<path fill="#F8F5F1" opacity="1.000000" stroke="none" 
	d="
M556.845459,326.075073 
	C556.090759,329.453857 554.926392,332.798401 553.639526,336.543945 
	C551.389709,338.953766 549.262451,340.962555 547.135193,342.971375 
	C546.758728,342.692139 546.382263,342.412933 546.005798,342.133698 
	C548.705322,336.778717 551.404785,331.423737 554.445435,326.002197 
	C555.336365,325.970703 555.886047,326.005737 556.845459,326.075073 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M189.373932,460.045349 
	C192.896011,459.953705 196.811890,459.597351 200.450195,460.439789 
	C204.922516,461.475372 201.988068,465.647522 202.558441,468.285126 
	C202.901642,469.872131 200.946442,471.956177 199.707825,473.903564 
	C199.849884,470.156403 200.308243,466.322571 200.805191,462.165955 
	C196.955795,461.526581 193.300232,460.919403 189.373932,460.045349 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M118.585037,555.040283 
	C118.705788,555.430664 118.564987,555.617493 118.440552,555.607178 
	C110.382889,554.937927 102.454842,555.724487 94.367264,557.460022 
	C101.873123,553.398132 109.968857,552.769531 118.585037,555.040283 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M91.630005,557.451599 
	C88.790367,559.113037 85.564247,560.668701 82.382149,562.309692 
	C80.222511,563.423340 78.124626,564.656860 75.703125,565.913757 
	C76.912163,564.162659 78.063118,561.572266 79.999504,560.672974 
	C83.506744,559.044128 87.482246,558.423584 91.630005,557.451599 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M724.688110,522.482239 
	C724.298096,516.444641 724.217529,510.158264 724.335938,503.536835 
	C724.689087,509.545685 724.843323,515.889587 724.688110,522.482239 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M167.353302,458.051270 
	C167.516754,457.270294 168.083649,456.180328 168.469055,456.241089 
	C173.232330,456.992340 177.969131,457.911438 182.845993,459.095459 
	C177.876968,459.028107 172.774689,458.652588 167.353302,458.051270 
z"/>
<path fill="#E795AF" opacity="1.000000" stroke="none" 
	d="
M130.089233,197.023438 
	C130.421204,195.599396 130.815598,193.821442 131.915405,192.812210 
	C134.285248,190.637466 137.017746,188.857925 139.964798,186.793442 
	C140.498077,186.719772 140.668411,186.769333 141.092529,186.908051 
	C139.946793,192.752625 134.168198,193.755676 130.089233,197.023438 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M724.198120,498.715607 
	C721.709961,493.934021 719.387329,488.856873 717.028931,483.430817 
	C722.250000,486.849152 723.638000,492.475433 724.198120,498.715607 
z"/>
<path fill="#B4DBE5" opacity="1.000000" stroke="none" 
	d="
M115.257553,383.378967 
	C116.172523,383.839417 117.481834,384.510712 117.859520,385.527954 
	C119.682663,390.438019 121.254990,395.441223 122.921097,400.795929 
	C121.920364,400.035950 120.496574,399.051758 119.985184,397.717773 
	C118.225471,393.127625 116.784775,388.415131 115.257553,383.378967 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M194.996521,500.375610 
	C196.539230,505.643616 195.068680,510.758606 192.689178,515.888611 
	C193.143219,510.864380 193.924942,505.740875 194.996521,500.375610 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M579.582886,628.709717 
	C583.993896,628.717468 588.628052,629.012817 593.559204,629.538452 
	C589.172852,629.511658 584.489502,629.254456 579.582886,628.709717 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M135.636398,556.912170 
	C131.057709,556.853577 126.188339,556.546997 121.172829,555.926270 
	C125.799698,555.962891 130.572723,556.313538 135.636398,556.912170 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M601.434021,630.015625 
	C605.413940,629.238342 609.701599,628.688049 614.307922,628.274048 
	C610.331665,629.021057 606.036682,629.631897 601.434021,630.015625 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M117.368172,577.940918 
	C117.986725,577.336304 119.052933,576.395447 119.926399,576.549194 
	C123.234413,577.131592 126.479935,578.068909 129.866882,579.193420 
	C125.899063,579.044678 121.813194,578.575928 117.368172,577.940918 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M75.405930,569.339478 
	C78.892509,570.585022 82.309853,572.169128 85.853989,574.038330 
	C81.474106,574.971497 77.306496,574.842712 75.405930,569.339478 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M153.621124,558.949585 
	C149.693970,558.822571 145.469009,558.461914 141.128967,557.774292 
	C145.117035,557.870239 149.220169,558.293091 153.621124,558.949585 
z"/>
<path fill="#B4DBE5" opacity="1.000000" stroke="none" 
	d="

M146.374344,548.899658 
	C149.914429,548.876953 153.703827,549.153320 157.742645,549.715454 
	C154.202591,549.733765 150.413116,549.466187 146.374344,548.899658 
z"/>



<path fill="#B3DAE3" opacity="1.000000" stroke="none" 
	d="
M144.388062,427.296997 
	C142.856171,416.881256 141.040649,406.348358 140.838989,395.784668 
	C139.946777,349.044525 153.278519,306.557281 181.040619,268.942200 
	C196.116638,248.515579 214.977173,232.486725 239.521439,224.164505 
	C240.734116,223.753326 242.005966,223.516586 243.878143,223.038193 
	C240.632095,230.307220 237.562500,236.974487 234.661789,243.714447 
	C224.878250,266.447052 218.935089,290.150665 215.863174,314.718109 
	C213.473297,333.830841 213.420883,352.892059 215.267853,371.961395 
	C217.161774,391.515289 221.429779,410.623657 227.697876,429.265106 
	C228.014206,430.205902 228.165665,431.202179 228.465149,432.580292 
	C224.497421,433.010345 220.431717,433.339722 216.425079,432.990875 
	C208.203064,432.274933 200.025696,431.054169 191.806335,430.297974 
	C178.312881,429.056610 164.803299,427.984924 151.293472,426.932251 
	C149.163757,426.766296 146.996964,427.075958 144.388062,427.296997 
z"/>
<path fill="#9D7850" opacity="1.000000" stroke="none" 
	d="
M535.039307,516.807922 
	C535.105713,520.241882 535.254456,523.676575 535.223755,527.109680 
	C535.110718,539.746216 535.037354,552.384827 534.722412,565.016907 
	C534.637268,568.429993 535.780701,569.574280 539.158508,569.906982 
	C564.770569,572.429688 590.347900,575.312012 615.968811,577.735352 
	C634.320984,579.471191 652.029053,576.722412 669.052612,568.442871 
	C667.974304,571.369812 667.101257,574.823669 665.040100,577.280884 
	C656.288269,587.714417 645.375061,595.264282 632.538147,599.893860 
	C630.981262,600.455383 629.148071,600.250732 626.811401,600.664185 
	C617.483276,600.092468 608.786743,599.257690 600.008301,598.176270 
	C599.278015,597.987549 598.629517,598.045410 597.549805,598.121094 
	C590.364929,597.436462 583.611023,596.737305 576.857788,596.031189 
	C556.263977,593.877869 535.670532,591.721985 515.013062,589.304504 
	C514.293213,589.062561 513.637207,589.083130 512.594971,589.116699 
	C510.240814,589.026550 508.272736,588.923401 506.304688,588.820251 
	C506.559174,582.383850 506.772827,575.945129 507.129944,569.514404 
	C507.166565,568.854675 508.062134,568.242676 509.234131,567.263916 
	C512.172485,566.919250 514.435791,566.919250 518.054077,566.919250 
	C518.054077,557.055176 517.855652,547.467834 518.108459,537.892395 
	C518.374634,527.806641 519.072021,517.732239 519.911377,507.695190 
	C523.026367,510.254547 526.216675,512.457886 528.476746,515.380615 
	C530.564026,518.079895 532.331726,518.675232 535.039307,516.807922 
z"/>
<path fill="#D73855" opacity="1.000000" stroke="none" 
	d="
M531.632324,445.627930 
	C534.122742,446.062439 536.221191,446.596985 538.765503,447.614563 
	C539.113831,455.878967 536.526978,462.635376 530.579712,468.057373 
	C524.994812,466.333710 519.780762,464.713470 514.566650,463.093231 
	C514.410400,463.419495 514.254211,463.745728 514.097961,464.071991 
	C514.697144,464.743439 515.296326,465.414917 515.916626,466.464783 
	C514.871094,473.049500 504.978607,483.272430 499.193787,484.146484 
	C494.888794,480.603760 490.583832,477.061035 486.099304,473.223602 
	C494.569305,467.988770 503.350006,463.260803 511.817322,458.025970 
	C516.603455,455.066986 520.784424,451.144775 525.426025,447.927917 
	C527.078674,446.782562 529.286194,446.438080 531.632324,445.627930 
z"/>


<path fill="#514E4F" opacity="1.000000" stroke="none" 
	d="
M514.579956,500.761688 
	C512.971558,499.750366 511.363159,498.739014 509.405701,497.615875 
	C506.650360,495.104004 504.076874,492.844177 501.901398,490.250488 
	C500.629944,488.734680 499.994049,486.685699 499.132996,484.511536 
	C504.978607,483.272430 514.871094,473.049500 516.276367,466.472229 
	C521.371155,471.415558 526.127319,476.729889 530.553345,482.095581 
	C525.471558,487.152008 520.668518,492.110138 516.017151,497.206696 
	C515.209412,498.091766 515.042725,499.561829 514.579956,500.761688 
z"/>


<path fill="#B3DAE4" opacity="1.000000" stroke="none" 
	d="
M259.508972,347.198456 
	C261.524536,348.693390 263.665680,350.260376 265.085297,352.323761 
	C272.973907,363.789764 282.066986,374.121368 293.590424,382.007751 
	C301.841248,387.654419 310.481384,392.730988 318.911041,398.119476 
	C319.834991,398.710144 320.515900,399.681030 321.565277,400.675262 
	C322.746277,411.463013 323.671539,422.051025 324.845764,433.293884 
	C325.078003,434.697510 325.061310,435.446259 324.801697,436.283539 
	C324.807800,436.852661 325.056732,437.333282 325.416595,438.283997 
	C325.575287,440.365662 325.623047,441.977234 325.191956,443.474152 
	C299.849091,441.162994 274.985016,438.966461 250.120972,436.769897 
	C250.116226,424.211792 249.119308,411.555084 250.354218,399.120056 
	C251.950699,383.043823 255.312897,367.141754 257.972992,351.174408 
	C258.183502,349.910797 258.847931,348.722809 259.508972,347.198456 
z"/>
<path fill="#B3D8E1" opacity="1.000000" stroke="none" 
	d="
M251.517761,228.576111 
	C250.373993,234.667099 248.821777,240.891800 247.422806,247.150757 
	C246.202118,252.612183 244.304443,258.094299 244.188553,263.598511 
	C243.836411,280.326691 242.790405,297.168427 247.917908,313.528778 
	C250.078781,320.423462 251.968002,327.403259 254.067001,334.753235 
	C244.136246,367.499573 240.350754,400.638062 241.362915,436.296936 
	C239.417862,434.347229 237.779190,433.445831 237.317322,432.131012 
	C229.862198,410.908325 225.109863,389.119141 222.955978,366.682037 
	C220.970306,345.997375 221.992950,325.450012 225.256454,305.083740 
	C228.624313,284.066254 234.371490,263.591949 243.363678,244.178406 
	C245.788193,238.944016 248.562271,233.871536 251.517761,228.576111 
z"/>
<path fill="#B4936B" opacity="1.000000" stroke="none" 
	d="
M250.076599,437.228516 
	C274.985016,438.966461 299.849091,441.162994 325.333710,443.695221 
	C326.402466,445.182892 326.850647,446.334900 327.298828,447.486877 
	C328.172668,452.896942 329.046478,458.306976 330.039490,464.023193 
	C330.049866,465.825958 330.067444,467.345734 329.797729,468.812744 
	C329.511688,470.368835 328.952789,471.874756 328.265137,473.668610 
	C325.281158,473.663757 322.545105,473.392853 319.140442,472.824890 
	C316.601501,472.476807 314.731232,472.425781 312.860962,472.374756 
	C308.972229,472.145416 305.083496,471.916077 300.571655,471.339294 
	C298.243866,470.833862 296.539215,470.675842 294.834534,470.517822 
	C292.183258,470.351471 289.531982,470.185150 286.169342,469.740601 
	C282.308746,469.270477 279.159546,469.078583 276.010315,468.886688 
	C273.271973,468.638397 270.533661,468.390137 267.136475,467.853729 
	C264.941925,467.491180 263.406219,467.416748 261.870544,467.342346 
	C259.190948,467.184753 256.511353,467.027161 253.378723,466.867218 
	C252.120636,458.923676 251.311813,450.982880 250.513458,443.041016 
	C250.334259,441.258301 250.191666,439.471893 250.076599,437.228516 
z"/>

<path fill="#FEFEFE" opacity="1.000000" stroke="none" 
	d="
M414.611267,73.904930 
	C417.142212,74.685936 419.194702,75.759033 421.369324,76.146141 
	C435.514038,78.664108 446.715698,86.776207 457.105896,95.791306 
	C468.820404,105.955475 479.135864,117.576744 484.784821,132.383484 
	C486.577393,137.082047 487.600311,142.292847 487.802673,147.316483 
	C487.995514,152.102737 489.393372,155.133301 492.870117,158.765656 
	C503.963287,170.355225 514.637817,182.436218 524.507629,195.081650 
	C535.345337,208.967148 542.640320,224.982117 548.707520,241.481323 
	C553.768799,255.244965 556.709656,269.567322 556.846558,284.169373 
	C557.003235,300.868042 553.905029,317.115143 546.396240,332.285553 
	C537.670776,349.913971 526.054138,365.226074 510.849091,377.840210 
	C496.123505,390.056610 480.473053,400.879517 463.275696,409.229431 
	C457.595123,411.987579 451.170349,414.137604 444.935486,414.618988 
	C434.874023,415.395905 424.683838,414.687286 414.556000,414.359558 
	C407.934784,414.145294 401.313324,413.644958 394.716919,413.012573 
	C375.716919,411.191101 357.239899,407.041962 339.203033,400.727875 
	C322.924561,395.029297 307.842224,387.145294 294.545898,376.233643 
	C282.314362,366.195923 271.749084,354.733124 263.988495,340.558380 
	C251.938019,318.548157 247.837860,295.075409 249.059967,270.462463 
	C249.776291,256.036377 252.460983,241.852661 257.822571,228.356995 
	C259.436310,224.295090 259.626373,220.478928 258.643616,216.363831 
	C258.226440,214.617020 258.261475,212.762222 258.060791,210.535278 
	C257.861847,208.971786 257.985016,207.677536 257.481049,206.709869 
	C248.270203,189.023163 252.459000,171.432983 259.143005,154.597000 
	C271.238708,124.129707 295.076141,104.477226 322.968872,89.109192 
	C343.101685,78.016617 364.565521,71.235130 387.664276,71.143082 
	C396.502167,71.107864 405.347382,72.913170 414.611267,73.904930 
M306.228088,190.051208 
	C305.148438,192.675323 304.068787,195.299423 302.424103,198.324112 
	C300.256866,203.317307 297.842407,208.220184 295.978210,213.324066 
	C292.898682,221.755432 293.381775,230.329666 296.150940,238.744370 
	C298.524994,245.958344 302.630707,248.930023 310.380463,249.850739 
	C312.633423,253.316315 314.638489,256.976807 317.182953,260.213165 
	C327.301758,273.083374 340.353333,282.016571 356.639648,283.710907 
	C377.720703,285.904022 395.043671,277.296692 408.819946,261.356201 
	C409.737976,260.293976 411.066895,259.586853 412.789825,259.180145 
	C423.386810,263.341248 431.481964,261.457855 439.959717,253.018600 
	C441.531250,253.381790 443.203552,253.512985 444.658386,254.144821 
	C456.375458,259.233490 467.902374,258.623718 479.131348,252.852463 
	C497.648438,243.335403 514.145081,219.929642 506.857941,193.772736 
	C504.474335,185.216858 500.970795,177.076324 491.234375,173.138321 
	C489.474152,169.427505 487.713928,165.716690 485.866913,161.277206 
	C484.894623,158.819275 483.826843,156.393631 482.981628,153.892761 
	C482.357391,152.045776 482.264465,150.000305 481.521149,148.215561 
	C476.501709,136.163605 466.781342,131.282196 454.351868,131.071228 
	C449.584869,130.990326 444.804199,131.714706 439.376251,131.739090 
	C435.922729,130.773621 432.494995,129.701462 429.011383,128.860641 
	C411.289581,124.583199 393.729156,127.348297 376.613770,131.606735 
	C363.314148,134.915771 351.054474,141.483139 339.950470,149.753937 
	C337.662506,151.458130 335.916962,153.890488 333.214874,156.072250 
	C331.557800,156.842667 329.894318,157.599625 328.244659,158.385651 
	C314.969513,164.710861 306.004883,173.955231 306.228088,190.051208 
z"/>
<path fill="#FDFCFC" opacity="1.000000" stroke="none" 
	d="
M196.917145,133.465973 
	C197.232407,143.795654 190.028595,148.687561 182.527802,152.558884 
	C168.204041,159.951645 155.047073,155.073547 146.140686,145.436844 
	C137.062180,135.613907 136.513565,120.063667 144.034866,107.927109 
	C152.532135,94.215683 175.108429,90.548935 187.359604,101.004379 
	C188.624146,102.083572 189.201065,103.968498 190.147339,105.868149 
	C184.700943,110.825172 179.028275,115.201927 173.769226,120.029282 
	C170.250198,123.259453 170.626068,125.211426 175.155075,126.800255 
	C182.195679,129.270218 189.453979,131.119598 196.917145,133.465973 
z"/>
<path fill="#FCF9FA" opacity="1.000000" stroke="none" 
	d="
M523.257019,434.129761 
	C525.691528,434.991058 528.126038,435.852325 532.228821,437.303802 
	C526.450073,441.707947 521.479675,445.520447 516.483826,449.299347 
	C493.801758,466.456238 467.898163,476.799133 440.611572,483.381378 
	C426.889893,486.691437 412.539459,487.609009 398.410004,488.931824 
	C390.401520,489.681671 382.182251,489.786774 374.206909,488.876617 
	C364.298035,487.745819 354.355133,485.923279 344.774750,483.183258 
	C335.244904,480.457703 334.881073,478.903534 335.019989,467.175629 
	C345.152496,469.072571 355.139557,472.561951 365.377167,473.614136 
	C410.853363,478.288025 453.550446,468.350494 493.867523,447.353638 
	C500.554901,443.870911 507.022552,439.967926 513.628906,436.326569 
	C514.755127,435.705811 516.069946,435.427002 518.023560,434.941742 
	C520.252014,434.638763 521.754517,434.384277 523.257019,434.129761 
z"/>
<path fill="#0B0305" opacity="1.000000" stroke="none" 
	d="
M327.659790,447.560516 
	C326.850647,446.334900 326.402466,445.182892 325.812561,443.809845 
	C325.623047,441.977234 325.575287,440.365662 325.604858,438.165161 
	C325.469696,437.115814 325.257141,436.655426 325.044586,436.195038 
	C325.061310,435.446259 325.078003,434.697510 325.160400,433.584595 
	C333.231079,435.873322 341.106934,439.047302 349.268097,441.070160 
	C366.114044,445.245636 383.197113,444.678711 400.364532,442.859863 
	C426.257019,440.116669 450.744690,432.718353 474.345795,421.985321 
	C475.400055,421.505829 477.209839,421.327209 478.024017,421.909119 
	C482.169739,424.872040 486.103302,428.131775 490.988983,431.978821 
	C484.716705,435.116608 479.130493,438.283356 473.258362,440.776733 
	C457.621185,447.416595 440.964050,450.693390 424.536316,454.522125 
	C408.258850,458.315857 391.564667,458.525146 374.874817,458.149536 
	C358.514374,457.781311 342.932495,454.286316 327.659790,447.560516 
z"/>
<path fill="#CFC8CD" opacity="1.000000" stroke="none" 
	d="
M521.773682,406.135193 
	C521.801270,409.351501 521.544983,412.300385 521.129639,415.573547 
	C520.519409,416.052368 520.068298,416.206909 518.888428,416.396301 
	C516.371155,416.308685 514.582581,416.186218 512.948120,415.726318 
	C515.434937,413.049713 519.768494,411.308868 515.722717,406.835449 
	C514.012451,407.632782 512.476868,408.348663 510.872864,409.096466 
	C507.888794,404.623779 518.634888,401.756836 511.626770,397.160767 
	C508.011902,400.152924 504.548920,403.225220 500.861145,405.998596 
	C498.455658,407.807617 497.440002,409.873566 498.181580,412.782684 
	C491.348083,410.413330 490.761200,408.214600 495.917999,403.660339 
	C500.728912,399.411530 505.565094,395.174805 510.631287,391.243469 
	C511.858124,390.291412 514.034180,390.562531 516.094360,390.507690 
	C518.106567,395.785400 519.798157,400.826569 521.773682,406.135193 
z"/>
<path fill="#12100E" opacity="1.000000" stroke="none" 
	d="
M498.486572,412.943756 
	C497.440002,409.873566 498.455658,407.807617 500.861145,405.998596 
	C504.548920,403.225220 508.011902,400.152924 511.626770,397.160767 
	C518.634888,401.756836 507.888794,404.623779 510.872864,409.096466 
	C512.476868,408.348663 514.012451,407.632782 515.722717,406.835449 
	C519.768494,411.308868 515.434937,413.049713 512.716431,415.730255 
	C512.330750,416.071625 512.010193,416.407684 512.010193,416.407684 
	C509.933105,416.303925 507.856018,416.200165 505.192261,415.907867 
	C504.081085,415.597931 503.556519,415.476532 503.031982,415.355133 
	C501.618500,414.605011 500.205017,413.854919 498.486572,412.943756 
z"/>
<path fill="#D9405E" opacity="1.000000" stroke="none" 
	d="
M523.386230,433.868530 
	C521.754517,434.384277 520.252014,434.638763 518.371033,434.798462 
	C519.417664,433.642456 520.842773,432.581268 522.509644,431.310303 
	C523.006104,431.936096 523.260803,432.771698 523.386230,433.868530 
z"/>
<path fill="#D9405E" opacity="1.000000" stroke="none" 
	d="
M512.123291,416.738495 
	C512.010193,416.407684 512.330750,416.071625 512.562378,416.067688 
	C514.582581,416.186218 516.371155,416.308685 518.580444,416.579651 
	C516.746277,416.841858 514.491394,416.955566 512.123291,416.738495 
z"/>
<path fill="#D9405E" opacity="1.000000" stroke="none" 
	d="
M503.071472,415.601807 
	C503.556519,415.476532 504.081085,415.597931 504.749115,415.962738 
	C504.298737,416.086945 503.704834,415.967712 503.071472,415.601807 
z"/>
<path fill="#DF6971" opacity="1.000000" stroke="none" 
	d="
M111.283066,223.122101 
	C107.008186,219.611435 102.958611,215.794678 99.180069,211.532166 
	C102.038521,209.143814 104.612793,207.183380 107.217545,205.264297 
	C109.285797,203.740509 108.712502,202.386230 107.026932,201.058105 
	C114.343277,199.526001 121.659622,197.993912 129.250763,196.747894 
	C124.549652,203.588699 119.503746,210.092178 114.643661,216.731674 
	C113.312424,218.550339 112.538208,220.776733 111.283066,223.122101 
z"/>
<path fill="#FCF9FA" opacity="1.000000" stroke="none" 
	d="
M553.428955,358.680725 
	C550.441711,356.396820 547.783142,354.273499 544.733887,351.838104 
	C548.266541,348.599426 550.538269,346.516815 553.595276,343.714203 
	C555.950562,346.646484 558.975220,349.482880 560.486389,352.974335 
	C560.845398,353.803894 556.135803,356.827148 553.428955,358.680725 
z"/>
<path fill="#DB3C5A" opacity="1.000000" stroke="none" 
	d="
M106.562363,201.043060 
	C108.712502,202.386230 109.285797,203.740509 107.217545,205.264297 
	C104.612793,207.183380 102.038521,209.143814 99.088509,211.209991 
	C95.306816,208.171631 91.887711,205.009674 87.582253,201.028030 
	C94.842094,201.028030 100.469940,201.028030 106.562363,201.043060 
z"/>
<path fill="#DB3C5A" opacity="1.000000" stroke="none" 
	d="
M91.331108,220.562775 
	C89.090645,222.970032 86.802750,225.097626 84.379807,227.058334 
	C83.025513,228.154266 81.447121,228.973251 79.636063,229.904236 
	C79.951027,223.392151 80.599632,216.892883 81.430222,208.570084 
	C85.286102,213.152618 88.256660,216.682999 91.331108,220.562775 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M635.936768,464.243347 
	C632.651917,462.954010 629.278015,461.358398 625.688232,459.484009 
	C628.930786,460.782440 632.389221,462.359741 635.936768,464.243347 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M618.927368,455.920441 
	C616.591064,455.122894 614.143555,454.036713 611.501648,452.660339 
	C613.810242,453.457397 616.313232,454.544617 618.927368,455.920441 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M653.950928,473.103271 
	C652.054443,472.502808 650.071472,471.594543 647.919067,470.397430 
	C649.787903,471.004211 651.826111,471.899872 653.950928,473.103271 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M643.937256,468.004639 
	C642.044128,467.435852 640.049622,466.569702 637.891174,465.408936 
	C639.763428,465.978607 641.799683,466.842896 643.937256,468.004639 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M661.941284,477.411316 
	C660.643494,477.078644 659.271790,476.412567 657.708252,475.467285 
	C658.966736,475.818024 660.416992,476.447968 661.941284,477.411316 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M666.953003,480.301514 
	C665.907349,480.062683 664.789246,479.480042 663.497986,478.614319 
	C664.510132,478.873413 665.695312,479.415558 666.953003,480.301514 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M688.972412,496.469116 
	C688.036255,496.082367 687.056274,495.368134 685.991699,494.345764 
	C686.914307,494.738953 687.921509,495.440308 688.972412,496.469116 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M623.980835,458.399841 
	C623.481323,458.534210 622.939148,458.414032 622.228760,458.058228 
	C622.686401,457.930145 623.312317,458.037750 623.980835,458.399841 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M606.934204,450.446533 
	C606.281372,450.439728 605.549377,450.096283 604.645691,449.478455 
	C605.267700,449.506042 606.061340,449.807983 606.934204,450.446533 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M671.939453,483.467529 
	C671.301697,483.438812 670.591064,483.075958 669.708740,482.447571 
	C670.313599,482.499115 671.090027,482.816254 671.939453,483.467529 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M674.946777,485.451355 
	C674.333008,485.407013 673.651123,485.044647 672.840698,484.401245 
	C673.434326,484.457855 674.156494,484.795593 674.946777,485.451355 
z"/>
<path fill="#FCF9FA" opacity="1.000000" stroke="none" 
	d="
M526.571228,427.225159 
	C526.733521,424.350830 526.187927,421.126160 527.550232,419.530701 
	C530.482910,416.096100 535.491089,417.876984 536.625732,422.267029 
	C538.522583,429.606049 537.723450,431.122559 531.295349,430.856476 
	C529.730896,430.791718 528.248413,428.747467 526.571228,427.225159 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M548.913330,432.761108 
	C548.643677,433.034698 548.371704,432.923981 548.059326,432.464478 
	C548.320435,432.131897 548.617798,432.218933 548.913330,432.761108 
z"/>
<path fill="#FFFFFF" opacity="1.000000" stroke="none" 
	d="
M700.171875,498.856873 
	C700.636658,499.568329 700.782227,500.549561 700.927856,501.530823 
	C700.402100,501.139008 699.876404,500.747192 699.304932,500.035370 
	C699.457092,499.519135 699.654846,499.322906 700.171875,498.856873 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M276.244080,469.189636 
	C279.159546,469.078583 282.308746,469.270477 285.721497,469.735962 
	C282.815979,469.837189 279.646942,469.664886 276.244080,469.189636 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M312.995605,472.691284 
	C314.731232,472.425781 316.601501,472.476807 318.719879,472.832336 
	C317.022064,473.093842 315.076141,473.050812 312.995605,472.691284 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M261.985962,467.653687 
	C263.406219,467.416748 264.941925,467.491180 266.719849,467.861298 
	C265.341858,468.092987 263.721619,468.028992 261.985962,467.653687 
z"/>
<path fill="#D7D2D1" opacity="1.000000" stroke="none" 
	d="
M295.003998,470.834229 
	C296.539215,470.675842 298.243866,470.833862 300.130707,471.308838 
	C298.599731,471.467438 296.886597,471.309052 295.003998,470.834229 
z"/>
<path fill="#B7946C" opacity="1.000000" stroke="none" 
	d="
M578.920837,466.903595 
	C590.477478,467.665894 602.195557,467.401062 613.177612,471.947266 
	C615.142822,472.760742 617.063660,473.881836 618.712524,475.221039 
	C623.606018,479.195282 623.700806,484.538055 618.036072,487.314087 
	C611.757568,490.390869 604.828613,493.114410 597.961487,493.811920 
	C583.949768,495.235138 569.789673,495.196442 555.231079,495.376740 
	C555.137329,494.638123 555.503174,494.282745 556.237793,493.903778 
	C557.734985,491.883331 558.792419,489.841522 560.018005,487.906158 
	C560.775085,486.710571 561.788330,485.677185 562.969971,484.529510 
	C563.872498,484.887146 564.491577,485.286224 565.194580,486.042145 
	C568.839966,489.987305 570.372925,489.732117 571.603882,485.097046 
	C571.572571,484.510437 571.715881,484.223267 572.272827,483.978394 
	C572.730286,483.313416 572.893494,482.665771 573.052734,481.673279 
	C573.200256,480.898804 573.351807,480.469208 573.849976,479.893341 
	C574.365173,477.623047 574.533630,475.498962 574.719116,473.044617 
	C576.131042,470.777405 577.525940,468.840485 578.920837,466.903595 
z"/>
<path fill="#383738" opacity="1.000000" stroke="none" 
	d="
M555.869019,493.927368 
	C555.503174,494.282745 555.137329,494.638123 554.762390,495.253357 
	C550.811768,498.806213 546.537720,501.784546 543.030579,505.488892 
	C540.061462,508.624939 537.979675,512.601074 535.272217,516.506653 
	C532.331726,518.675232 530.564026,518.079895 528.476746,515.380615 
	C526.216675,512.457886 523.026367,510.254547 519.911377,507.695190 
	C518.015808,505.537750 516.450623,503.422607 514.732666,501.034576 
	C515.042725,499.561829 515.209412,498.091766 516.017151,497.206696 
	C520.668518,492.110138 525.471558,487.152008 530.743042,482.379883 
	C537.538757,489.477966 537.445251,489.323883 545.906799,484.187836 
	C547.948730,482.948395 551.263977,482.019318 553.248718,482.812225 
	C558.911255,485.074432 559.122620,485.902496 555.869019,493.927368 
z"/>
<path fill="#090807" opacity="1.000000" stroke="none" 
	d="
M565.110718,485.685303 
	C564.491577,485.286224 563.872498,484.887146 562.765503,484.243439 
	C557.513550,481.664246 552.749512,479.329651 548.038940,476.637878 
	C550.669739,470.487305 553.183289,464.663910 555.883911,458.928650 
	C556.362183,457.913025 557.619629,457.264343 558.517212,456.446228 
	C565.324463,460.369202 565.315552,460.363434 569.736877,453.527985 
	C570.366272,452.554901 570.967773,451.107544 571.862915,450.847961 
	C574.565308,450.064331 577.492310,449.175049 580.147949,449.568298 
	C581.132874,449.714142 582.421997,453.427155 582.142517,455.300018 
	C581.589722,459.003693 580.040894,462.558716 578.912354,466.539429 
	C577.525940,468.840485 576.131042,470.777405 574.380371,473.254089 
	C573.850891,475.875793 573.677124,477.957672 573.503296,480.039581 
	C573.351807,480.469208 573.200256,480.898804 572.797485,481.835815 
	C572.357117,482.894073 572.167908,483.444916 571.978638,483.995758 
	C571.715881,484.223267 571.572571,484.510437 571.296875,485.276703 
	C569.066895,485.692505 567.088806,485.688904 565.110718,485.685303 
z"/>
<path fill="#514E4F" opacity="1.000000" stroke="none" 
	d="
M558.305786,456.184631 
	C557.619629,457.264343 556.362183,457.913025 555.883911,458.928650 
	C553.183289,464.663910 550.669739,470.487305 547.668091,476.634033 
	C542.836121,475.295380 538.351440,473.771515 534.066589,471.810883 
	C532.747375,471.207306 531.973816,469.410980 530.950439,468.160767 
	C536.526978,462.635376 539.113831,455.878967 539.141541,447.768250 
	C540.644409,447.404510 542.526489,446.791138 543.735474,447.437256 
	C548.634338,450.055298 553.326172,453.060608 558.305786,456.184631 
z"/>
<path fill="#B6946B" opacity="1.000000" stroke="none" 
	d="
M600.008301,598.176270 
	C599.518066,598.468811 598.945923,598.514832 598.177490,598.332092 
	C598.629517,598.045410 599.278015,597.987549 600.008301,598.176270 
z"/>
<path fill="#B6946B" opacity="1.000000" stroke="none" 
	d="
M515.013062,589.304565 
	C514.499939,589.572937 513.922974,589.578796 513.163574,589.344238 
	C513.637207,589.083130 514.293213,589.062561 515.013062,589.304565 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M530.579712,468.057373 
	C531.973816,469.410980 532.747375,471.207306 534.066589,471.810883 
	C538.351440,473.771515 542.836121,475.295380 547.614624,476.991211 
	C552.749512,479.329651 557.513550,481.664246 562.482117,484.284912 
	C561.788330,485.677185 560.775085,486.710571 560.018005,487.906158 
	C558.792419,489.841522 557.734985,491.883331 556.237793,493.903778 
	C559.122620,485.902496 558.911255,485.074432 553.248718,482.812225 
	C551.263977,482.019318 547.948730,482.948395 545.906799,484.187836 
	C537.445251,489.323883 537.538757,489.477966 531.073242,482.328522 
	C526.127319,476.729889 521.371155,471.415558 516.255249,466.093811 
	C515.296326,465.414917 514.697144,464.743439 514.097961,464.071991 
	C514.254211,463.745728 514.410400,463.419495 514.566650,463.093231 
	C519.780762,464.713470 524.994812,466.333710 530.579712,468.057373 
z"/>
<path fill="#B4936B" opacity="1.000000" stroke="none" 
	d="
M324.801697,436.283539 
	C325.257141,436.655426 325.469696,437.115814 325.493958,437.695068 
	C325.056732,437.333282 324.807800,436.852661 324.801697,436.283539 
z"/>
<path fill="#F8E1C0" opacity="1.000000" stroke="none" 
	d="
M333.921387,155.987213 
	C335.916962,153.890488 337.662506,151.458130 339.950470,149.753937 
	C351.054474,141.483139 363.314148,134.915771 376.613770,131.606735 
	C393.729156,127.348297 411.289581,124.583199 429.011383,128.860641 
	C432.494995,129.701462 435.922729,130.773621 439.649292,132.253204 
	C436.675720,135.152359 433.379059,137.472748 430.195679,139.939392 
	C426.508545,142.796356 425.560425,147.969559 427.423187,152.172394 
	C429.577148,157.032227 433.512878,159.058502 438.379791,158.906082 
	C445.128601,158.694702 451.456238,159.215698 457.171143,163.410080 
	C459.790161,165.332306 462.983063,166.472641 465.742279,168.251602 
	C463.183044,170.810638 460.797211,173.085632 458.356506,174.970581 
	C457.745483,168.090347 453.723389,164.225250 448.281189,164.951324 
	C443.254730,165.621948 439.913025,170.165054 440.650024,175.325851 
	C441.543549,181.582428 447.678040,183.977570 455.024597,181.439972 
	C454.783142,187.573044 454.533173,193.201019 453.877075,198.839996 
	C446.655243,197.228851 439.839539,195.606689 433.017517,193.602112 
	C430.573730,183.324570 422.641663,178.936813 410.857971,180.965286 
	C397.522644,183.260849 389.047516,192.554993 388.609497,204.972290 
	C386.739166,205.602356 384.988251,205.909653 383.779144,206.887131 
	C377.394867,212.048416 371.450134,217.808167 364.763458,222.524628 
	C358.560974,226.899536 351.616577,230.222595 344.987915,233.544250 
	C346.108368,220.401733 342.287781,209.795868 331.960449,201.560669 
	C334.177704,197.378830 336.081268,193.345322 338.657684,189.800934 
	C340.924164,186.682846 343.735229,183.863647 346.697144,181.378967 
	C349.018311,179.431763 352.237396,178.548141 354.536285,176.582367 
	C361.925415,170.264038 360.389343,159.919144 351.565063,157.505112 
	C345.964569,155.973038 339.821259,156.425003 333.921387,155.987213 
M357.170380,192.519501 
	C355.036499,188.214722 351.724213,185.586014 346.814941,186.803146 
	C342.860901,187.783463 340.199829,190.606094 339.829468,194.904404 
	C339.392029,199.981796 343.421661,204.224670 348.554321,204.315460 
	C354.552032,204.421555 357.714050,200.436874 357.170380,192.519501 
z"/>
<path fill="#D7D5D7" opacity="1.000000" stroke="none" 
	d="
M344.998840,234.008820 
	C351.616577,230.222595 358.560974,226.899536 364.763458,222.524628 
	C371.450134,217.808167 377.394867,212.048416 383.779144,206.887131 
	C384.988251,205.909653 386.739166,205.602356 388.874146,205.162155 
	C389.998108,206.524994 390.488007,207.711502 390.614319,208.928268 
	C386.469910,211.821411 382.628998,214.608810 378.919647,217.561478 
	C368.032623,226.227646 357.161621,234.866440 344.000275,240.034607 
	C331.528900,244.931854 320.620148,240.229706 316.076416,227.782593 
	C315.875366,227.231842 315.490448,226.748199 315.151001,226.164230 
	C311.945648,229.259338 310.825226,237.496628 312.650635,242.019257 
	C317.779083,254.725815 326.131378,264.644135 337.761932,271.937622 
	C353.861511,282.033661 370.805115,281.457886 386.648682,273.180603 
	C402.620972,264.836090 413.630798,251.081680 418.863007,233.335495 
	C419.295410,231.869019 420.027985,230.491013 420.254211,229.949677 
	C428.983490,236.535950 436.930084,243.496323 445.796631,248.965134 
	C455.763336,255.112549 466.679718,254.072372 476.649506,248.500137 
	C494.835876,238.335602 504.769867,223.144150 503.022614,201.622543 
	C502.344482,193.269882 499.803192,185.741714 492.450409,179.485748 
	C492.249359,181.456207 491.969574,182.422043 492.084747,183.338211 
	C493.641876,195.721451 486.590973,203.603119 474.226776,204.090851 
	C460.483032,204.633011 447.120972,202.931702 433.851929,198.621246 
	C433.476257,196.852402 433.250031,195.418457 433.023834,193.984528 
	C439.839539,195.606689 446.655243,197.228851 454.278625,198.888138 
	C462.659149,198.942108 470.254761,199.327011 477.797760,198.860794 
	C483.974915,198.479034 487.845581,193.609436 487.976776,187.373550 
	C488.022247,185.212723 488.116577,183.031601 487.889740,180.891418 
	C487.554718,177.730301 488.523621,175.376862 491.396088,173.899323 
	C500.970795,177.076324 504.474335,185.216858 506.857941,193.772736 
	C514.145081,219.929642 497.648438,243.335403 479.131348,252.852463 
	C467.902374,258.623718 456.375458,259.233490 444.658386,254.144821 
	C443.203552,253.512985 441.531250,253.381790 439.486938,252.680939 
	C434.278290,248.055588 429.609619,243.686874 424.697723,239.611313 
	C424.230835,239.223877 421.703339,240.322479 421.052643,241.327133 
	C418.283386,245.602768 415.790192,250.064590 413.357117,254.545792 
	C412.686981,255.780106 412.573578,257.316711 412.204712,258.714600 
	C411.066895,259.586853 409.737976,260.293976 408.819946,261.356201 
	C395.043671,277.296692 377.720703,285.904022 356.639648,283.710907 
	C340.353333,282.016571 327.301758,273.083374 317.182953,260.213165 
	C314.638489,256.976807 312.633423,253.316315 310.211792,249.158447 
	C309.259125,245.767670 308.407623,243.086639 307.704407,240.367264 
	C305.975647,233.681793 306.924835,227.356705 311.607666,222.238007 
	C313.129700,220.574326 316.199585,219.759766 318.565643,219.751694 
	C319.362335,219.748978 320.207336,223.428421 320.965302,225.449326 
	C321.742676,227.522003 321.917511,230.075867 323.263672,231.635956 
	C329.150787,238.458664 337.272034,239.196777 344.998840,234.008820 
z"/>
<path fill="#E17EAB" opacity="1.000000" stroke="none" 
	d="
M344.987915,233.544235 
	C337.272034,239.196777 329.150787,238.458664 323.263672,231.635956 
	C321.917511,230.075867 321.742676,227.522003 320.965302,225.449326 
	C320.207336,223.428421 319.362335,219.748978 318.565643,219.751694 
	C316.199585,219.759766 313.129700,220.574326 311.607666,222.238007 
	C306.924835,227.356705 305.975647,233.681793 307.704407,240.367264 
	C308.407623,243.086639 309.259125,245.767670 310.026062,248.889771 
	C302.630707,248.930023 298.524994,245.958344 296.150940,238.744370 
	C293.381775,230.329666 292.898682,221.755432 295.978210,213.324066 
	C297.842407,208.220184 300.256866,203.317307 303.086060,198.112274 
	C305.479645,197.545273 307.211273,197.190079 309.233398,197.018768 
	C313.576233,201.893463 318.158752,205.402420 324.889130,203.840668 
	C327.259918,203.290527 329.590332,202.566360 331.939178,201.921631 
	C342.287781,209.795868 346.108368,220.401733 344.987915,233.544235 
z"/>
<path fill="#E17EAB" opacity="1.000000" stroke="none" 
	d="
M491.315247,173.518829 
	C488.523621,175.376862 487.554718,177.730301 487.889740,180.891418 
	C488.116577,183.031601 488.022247,185.212723 487.976776,187.373550 
	C487.845581,193.609436 483.974915,198.479034 477.797760,198.860794 
	C470.254761,199.327011 462.659149,198.942108 454.684753,198.877136 
	C454.533173,193.201019 454.783142,187.573044 455.084167,181.180695 
	C456.227295,178.731110 457.319366,177.045868 458.411407,175.360626 
	C460.797211,173.085632 463.183044,170.810638 466.173340,168.263214 
	C470.808563,166.527206 474.807098,164.964874 478.882507,163.638702 
	C481.174042,162.893005 483.592438,162.537277 485.953705,162.005875 
	C487.713928,165.716690 489.474152,169.427505 491.315247,173.518829 
z"/>
<path fill="#D7D5D7" opacity="1.000000" stroke="none" 
	d="
M331.960449,201.560684 
	C329.590332,202.566360 327.259918,203.290527 324.889130,203.840668 
	C318.158752,205.402420 313.576233,201.893463 309.237762,196.662445 
	C308.279053,194.044861 307.606537,191.967514 306.934021,189.890152 
	C306.004883,173.955231 314.969513,164.710861 328.244659,158.385651 
	C329.894318,157.599625 331.557800,156.842667 333.568115,156.029724 
	C339.821259,156.425003 345.964569,155.973038 351.565063,157.505112 
	C360.389343,159.919144 361.925415,170.264038 354.536285,176.582367 
	C352.237396,178.548141 349.018311,179.431763 346.697144,181.378967 
	C343.735229,183.863647 340.924164,186.682846 338.657684,189.800934 
	C336.081268,193.345322 334.177704,197.378830 331.960449,201.560684 
M324.991394,165.397079 
	C316.549622,171.328049 310.767487,178.626541 311.935608,189.768906 
	C312.454041,194.714157 315.309967,198.448242 320.235870,199.560501 
	C324.990540,200.634125 328.595917,198.284637 330.546051,194.440582 
	C334.737823,186.177841 339.404999,178.873230 348.733795,175.322540 
	C352.084839,174.047104 355.486267,170.478638 353.773376,166.194977 
	C352.885071,163.973511 349.818329,161.792450 347.346313,161.189545 
	C339.702240,159.325104 332.305511,160.645782 324.991394,165.397079 
z"/>
<path fill="#D7D5D7" opacity="1.000000" stroke="none" 
	d="
M485.910309,161.641541 
	C483.592438,162.537277 481.174042,162.893005 478.882507,163.638702 
	C474.807098,164.964874 470.808563,166.527206 466.346802,167.979156 
	C462.983063,166.472641 459.790161,165.332306 457.171143,163.410080 
	C451.456238,159.215698 445.128601,158.694702 438.379791,158.906082 
	C433.512878,159.058502 429.577148,157.032227 427.423187,152.172394 
	C425.560425,147.969559 426.508545,142.796356 430.195679,139.939392 
	C433.379059,137.472748 436.675720,135.152359 439.976013,132.419724 
	C444.804199,131.714706 449.584869,130.990326 454.351868,131.071228 
	C466.781342,131.282196 476.501709,136.163605 481.521149,148.215561 
	C482.264465,150.000305 482.357391,152.045776 482.981628,153.892761 
	C483.826843,156.393631 484.894623,158.819275 485.910309,161.641541 
M460.793793,136.102142 
	C451.958862,135.526184 443.023438,135.045578 435.756439,141.284714 
	C433.581329,143.152161 431.435852,146.319489 431.366699,148.946289 
	C431.317474,150.815109 434.587097,153.027237 436.737823,154.586487 
	C437.762512,155.329407 439.661469,155.153992 441.112000,154.973389 
	C448.238861,154.085999 454.558868,155.935242 460.303864,160.147705 
	C461.485046,161.013779 463.039429,161.378052 464.199432,162.264557 
	C468.137329,165.273819 471.681030,164.103836 475.015686,161.340302 
	C478.424530,158.515289 478.614319,154.801224 477.432739,150.873352 
	C475.037537,142.911026 468.936676,138.954773 460.793793,136.102142 
z"/>
<path fill="#E17EAB" opacity="1.000000" stroke="none" 
	d="
M412.497253,258.947388 
	C412.573578,257.316711 412.686981,255.780106 413.357117,254.545792 
	C415.790192,250.064590 418.283386,245.602768 421.052643,241.327133 
	C421.703339,240.322479 424.230835,239.223877 424.697723,239.611313 
	C429.609619,243.686874 434.278290,248.055588 439.085938,252.694336 
	C431.481964,261.457855 423.386810,263.341248 412.497253,258.947388 
z"/>
<path fill="#F8E1C0" opacity="1.000000" stroke="none" 
	d="
M306.581055,189.970673 
	C307.606537,191.967514 308.279053,194.044861 308.947266,196.478546 
	C307.211273,197.190079 305.479645,197.545273 303.368591,197.911987 
	C304.068787,195.299423 305.148438,192.675323 306.581055,189.970673 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M565.194580,486.042145 
	C567.088806,485.688904 569.066895,485.692505 571.352051,485.516479 
	C570.372925,489.732117 568.839966,489.987305 565.194580,486.042145 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M573.849976,479.893341 
	C573.677124,477.957672 573.850891,475.875793 574.363403,473.584412 
	C574.533630,475.498962 574.365173,477.623047 573.849976,479.893341 
z"/>
<path fill="#A68561" opacity="1.000000" stroke="none" 
	d="
M572.272827,483.978394 
	C572.167908,483.444916 572.357117,482.894073 572.801514,482.180664 
	C572.893494,482.665771 572.730286,483.313416 572.272827,483.978394 
z"/>
<path fill="#F3CDDF" opacity="1.000000" stroke="none" 
	d="
M390.977875,208.898026 
	C390.488007,207.711502 389.998108,206.524994 389.243530,205.148590 
	C389.047516,192.554993 397.522644,183.260849 410.857971,180.965286 
	C422.641663,178.936813 430.573730,183.324570 433.017517,193.602112 
	C433.250031,195.418457 433.476257,196.852402 433.845886,199.017792 
	C431.921753,203.536514 430.691284,208.294540 427.632446,210.932220 
	C417.755981,219.448898 402.295258,218.234314 390.977875,208.898026 
z"/>
<path fill="#12100E" opacity="1.000000" stroke="none" 
	d="
M458.356506,174.970581 
	C457.319366,177.045868 456.227295,178.731110 455.075684,180.675629 
	C447.678040,183.977570 441.543549,181.582428 440.650024,175.325851 
	C439.913025,170.165054 443.254730,165.621948 448.281189,164.951324 
	C453.723389,164.225250 457.745483,168.090347 458.356506,174.970581 
z"/>
<path fill="#12100E" opacity="1.000000" stroke="none" 
	d="
M357.245605,192.893799 
	C357.714050,200.436874 354.552032,204.421555 348.554321,204.315460 
	C343.421661,204.224670 339.392029,199.981796 339.829468,194.904404 
	C340.199829,190.606094 342.860901,187.783463 346.814941,186.803146 
	C351.724213,185.586014 355.036499,188.214722 357.245605,192.893799 
z"/>
<path fill="#FEFEFE" opacity="1.000000" stroke="none" 
	d="
M390.614319,208.928268 
	C402.295258,218.234314 417.755981,219.448898 427.632446,210.932220 
	C430.691284,208.294540 431.921753,203.536514 433.995361,199.352722 
	C447.120972,202.931702 460.483032,204.633011 474.226776,204.090851 
	C486.590973,203.603119 493.641876,195.721451 492.084747,183.338211 
	C491.969574,182.422043 492.249359,181.456207 492.450409,179.485748 
	C499.803192,185.741714 502.344482,193.269882 503.022614,201.622543 
	C504.769867,223.144150 494.835876,238.335602 476.649506,248.500137 
	C466.679718,254.072372 455.763336,255.112549 445.796631,248.965134 
	C436.930084,243.496323 428.983490,236.535950 420.254211,229.949677 
	C420.027985,230.491013 419.295410,231.869019 418.863007,233.335495 
	C413.630798,251.081680 402.620972,264.836090 386.648682,273.180603 
	C370.805115,281.457886 353.861511,282.033661 337.761932,271.937622 
	C326.131378,264.644135 317.779083,254.725815 312.650635,242.019257 
	C310.825226,237.496628 311.945648,229.259338 315.151001,226.164230 
	C315.490448,226.748199 315.875366,227.231842 316.076416,227.782593 
	C320.620148,240.229706 331.528900,244.931854 344.000275,240.034607 
	C357.161621,234.866440 368.032623,226.227646 378.919647,217.561478 
	C382.628998,214.608810 386.469910,211.821411 390.614319,208.928268 
z"/>
<path fill="#FDFCFC" opacity="1.000000" stroke="none" 
	d="
M325.279785,165.166840 
	C332.305511,160.645782 339.702240,159.325104 347.346313,161.189545 
	C349.818329,161.792450 352.885071,163.973511 353.773376,166.194977 
	C355.486267,170.478638 352.084839,174.047104 348.733795,175.322540 
	C339.404999,178.873230 334.737823,186.177841 330.546051,194.440582 
	C328.595917,198.284637 324.990540,200.634125 320.235870,199.560501 
	C315.309967,198.448242 312.454041,194.714157 311.935608,189.768906 
	C310.767487,178.626541 316.549622,171.328049 325.279785,165.166840 
z"/>
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
	d="
M461.200317,136.227921 
	C468.936676,138.954773 475.037537,142.911026 477.432739,150.873352 
	C478.614319,154.801224 478.424530,158.515289 475.015686,161.340302 
	C471.681030,164.103836 468.137329,165.273819 464.199432,162.264557 
	C463.039429,161.378052 461.485046,161.013779 460.303864,160.147705 
	C454.558868,155.935242 448.238861,154.085999 441.112000,154.973389 
	C439.661469,155.153992 437.762512,155.329407 436.737823,154.586487 
	C434.587097,153.027237 431.317474,150.815109 431.366699,148.946289 
	C431.435852,146.319489 433.581329,143.152161 435.756439,141.284714 
	C443.023438,135.045578 451.958862,135.526184 461.200317,136.227921 
z"/>
</svg>
        `);function QE({particleCount:r=120,speed:t=1,size:i=3,color:s="#FFF",zIndex:l=9999}){const S=q.useRef(null),T=q.useRef(null),I=q.useRef([]),V=q.useRef(1),Q=q.useRef(null),z=q.useRef([]),F=q.useRef(null),X=q.useRef(null),J=q.useRef([]),{currentUser:ct}=Wa(),st=q.useRef(ct),[mt,N]=q.useState(0),[R,b]=q.useState(0),[D,O]=q.useState(0),P=q.useRef(0),M=q.useRef(0),Wt=q.useRef(0);q.useEffect(()=>{st.current=ct,console.log("Snow: currentUser updated to:",ct),ct?le():(N(0),b(0),O(0),P.current=0,M.current=0,Wt.current=0)},[ct]),q.useEffect(()=>{P.current=mt,M.current=R,Wt.current=D},[mt,R,D]);const le=async()=>{if(ct)try{const it=pn(ee,"Users",ct),ot=await Bc(it);if(ot.exists()){const dt=ot.data(),Vt=dt.autoClickerLevel||0,L=dt.spawnSpeedLevel||0,et=dt.santaWorthLevel||0;N(Vt),b(L),O(et),console.log("Loaded upgrades:",{autoLevel:Vt,spawnLevel:L,worthLevel:et})}}catch(it){console.error("Error loading upgrades:",it)}};return q.useEffect(()=>{const it=S.current;if(!it)return;const ot=it.getContext("2d");if(!ot)return;const dt=new Image;dt.src=`data:image/svg+xml;charset=utf-8,${GE}`,Q.current=dt;const Vt=()=>{const Ct=window.devicePixelRatio||1;V.current=Ct;const xt=window.innerWidth,Ft=window.innerHeight;it.style.width=`${xt}px`,it.style.height=`${Ft}px`,it.width=Math.round(xt*Ct),it.height=Math.round(Ft*Ct),ot.setTransform(Ct,0,0,Ct,0,0)},L=()=>{const Ct=it.width/V.current,xt=it.height/V.current,Ft=[];for(let ne=0;ne<r;ne++){const ie=Math.random()*i+Math.random()*(i/2);Ft.push({x:Math.random()*Ct,y:Math.random()*xt,r:ie,vx:(Math.random()-.5)*.6,vy:(.5+Math.random()*.9)*t,o:.5+Math.random()*.8,swing:Math.random()*20,phase:Math.random()*Math.PI*2})}I.current=Ft};let et=performance.now();const pt=Ct=>{const xt=(Ct-et)/16.6667;et=Ct;const Ft=it.width/V.current,ne=it.height/V.current;ot.clearRect(0,0,Ft,ne);const ie=I.current;for(let zt=0;zt<ie.length;zt++){const rt=ie[zt];rt.phase+=.02*xt,rt.x+=rt.vx*xt+Math.sin(rt.phase)*(rt.swing*.01)*xt,rt.y+=rt.vy*xt,rt.y-rt.r>ne&&(rt.y=-rt.r,rt.x=Math.random()*Ft),rt.x-rt.r>Ft&&(rt.x=-rt.r),rt.x+rt.r<0&&(rt.x=Ft+rt.r),ot.globalAlpha=rt.o;const Te=ot.createRadialGradient(rt.x,rt.y,0,rt.x,rt.y,rt.r*1.8);Te.addColorStop(0,s),Te.addColorStop(1,"rgba(255,255,255,0)"),ot.fillStyle=Te,ot.beginPath(),ot.arc(rt.x,rt.y,rt.r,0,Math.PI*2),ot.fill()}ot.globalAlpha=1;const Zt=z.current;for(let zt=Zt.length-1;zt>=0;zt--){const rt=Zt[zt];rt.x+=rt.vx*xt;const Te=Math.sin(Ct/400+rt.x*.02)*6*rt.scale,ye=rt.x,Ke=rt.y+Te;Q.current&&Q.current.complete?(ot.save(),ot.translate(ye,Ke),rt.dir===-1&&ot.scale(-1,1),ot.drawImage(Q.current,-rt.w/2,-rt.h/2,rt.w,rt.h),ot.restore()):(ot.fillStyle="#e74c3c",ot.fillRect(ye-rt.w/2,Ke-rt.h/2,rt.w,rt.h)),rt.dir===1&&rt.x-rt.w/2>Ft+50&&Zt.splice(zt,1),rt.dir===-1&&rt.x+rt.w/2<-50&&Zt.splice(zt,1)}const Xt=J.current;for(let zt=Xt.length-1;zt>=0;zt--){const rt=Xt[zt];rt.vy+=.06*xt,rt.vx*=.995,rt.vy*=.999,rt.x+=rt.vx*xt,rt.y+=rt.vy*xt,rt.life-=1*xt;const Te=Math.max(0,rt.life/rt.maxLife);ot.globalAlpha=Te;const ye=ot.createRadialGradient(rt.x,rt.y,0,rt.x,rt.y,rt.r*2.5);ye.addColorStop(0,rt.color),ye.addColorStop(.6,"rgba(255,255,255,0.2)"),ye.addColorStop(1,"rgba(255,255,255,0)"),ot.fillStyle=ye,ot.beginPath(),ot.arc(rt.x,rt.y,rt.r,0,Math.PI*2),ot.fill(),rt.life<=0&&Xt.splice(zt,1)}ot.globalAlpha=1,T.current=requestAnimationFrame(pt)},lt=()=>{const Ct=it.width/V.current,xt=it.height/V.current,Ft=Math.random()>.5?1:-1,ne=Ft===1?-60:Ct+60,ie=100,Zt=ie+(xt-ie)*Math.random(),Xt=.6+Math.random()*.8,zt=120,rt=60,Te=(2+Math.random()*2)*(Ft===1?1:-1)*Math.max(.5,t),ye={x:ne,y:Zt,vx:Te,scale:Xt,dir:Ft,w:zt*Xt,h:rt*Xt};z.current.push(ye)},ut=(Ct,xt,Ft)=>{const ne=30+Math.round(Math.random()*20),ie=[];for(let Zt=0;Zt<ne;Zt++){const Xt=Math.random()*Math.PI*2,zt=1+Math.random()*4,rt=Math.cos(Xt)*zt*(.6+Math.random()*1.4),Te=Math.sin(Xt)*zt*(.6+Math.random()*1.4)-Math.random()*1.5,ye=1+Math.random()*3,Ke=30+Math.random()*40,Di=Ft||"#e74c3c";ie.push({x:Ct,y:xt,vx:rt,vy:Te,r:ye,life:Ke,maxLife:Ke,color:Di})}J.current.push(...ie)},Rt=Ct=>{const xt=it.getBoundingClientRect(),Ft=Ct.clientX-xt.left,ne=Ct.clientY-xt.top,ie=z.current,Zt=st.current;console.log("Santa click detected. Current user:",Zt);for(let Xt=ie.length-1;Xt>=0;Xt--){const zt=ie[Xt],rt=Ft-zt.x,Te=ne-zt.y,ye=Math.max(zt.w,zt.h)*.6;if(rt*rt+Te*Te<=ye*ye){if(ut(zt.x,zt.y,"#ffb347"),ie.splice(Xt,1),Zt){console.log("User is logged in, incrementing santa count for:",Zt);const Ke=Wt.current+1;console.log("Santa worth multiplier:",Ke);try{const Di=pn(ee,"Users",Zt);Si(Di,{santasPopped:Kr(Ke)}).then(()=>{console.log(`Santa popped! Count incremented by ${Ke} for ${Zt}`),window.dispatchEvent(new CustomEvent("santaPopped",{detail:{increment:Ke}}))}).catch(cr=>{console.error("Error updating santa count:",cr),ue(`Failed to save Santa pop. Error: ${cr.message}`,"error")})}catch(Di){console.error("Error creating update:",Di)}}else console.log("No user logged in - santa pop not tracked"),sessionStorage.getItem("loginReminderShown")||(ue("🎅 Login required! Go to the Sign Up page to login or create an account, then your Santa pops will be tracked on the leaderboard!","info"),sessionStorage.setItem("loginReminderShown","true"));break}}};Vt(),L(),T.current=requestAnimationFrame(pt);const St=M.current,fe=Math.max(1e3,5e3*Math.pow(.8,St));console.log("Santa spawn interval:",fe,"ms (level",St,")"),F.current=window.setInterval(lt,fe);const Ut=window.setTimeout(lt,1e3);if(P.current>0){const Ct=Math.max(2e3,1e4-P.current*2e3);console.log("Auto-clicker active! Interval:",Ct,"ms (level",P.current,")"),X.current=window.setInterval(()=>{const xt=z.current;if(xt.length>0&&st.current){const Ft=Math.floor(Math.random()*xt.length),ne=xt[Ft];ut(ne.x,ne.y,"#4CAF50"),xt.splice(Ft,1);const ie=st.current,Zt=Wt.current+1;if(ie)try{const Xt=pn(ee,"Users",ie);Si(Xt,{santasPopped:Kr(Zt)}).then(()=>{console.log(`Auto-clicked santa for ${ie} (worth: ${Zt})`),window.dispatchEvent(new CustomEvent("santaPopped",{detail:{increment:Zt}}))}).catch(zt=>{console.error("Error updating santa count:",zt)})}catch(Xt){console.error("Error with auto-click:",Xt)}}},Ct)}const oe=()=>{Vt(),L(),z.current=[]};return window.addEventListener("resize",oe),window.addEventListener("click",Rt),()=>{T.current&&cancelAnimationFrame(T.current),F.current&&clearInterval(F.current),X.current&&clearInterval(X.current),window.clearTimeout(Ut),window.removeEventListener("resize",oe),window.removeEventListener("click",Rt)}},[r,t,i,s,mt,R,D]),w.jsx("canvas",{ref:S,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:l},"aria-hidden":!0})}const KE=()=>(q.useRef(null),q.useRef(null),q.useRef(null),q.useRef(!1),q.useRef(null),q.useEffect(()=>{},[]),null),YE=()=>w.jsx(um,{children:w.jsxs("div",{className:"App",children:[w.jsx(FE,{}),w.jsx(QE,{}),w.jsx(KE,{}),w.jsx(PE,{}),w.jsx(Jp,{children:w.jsxs(Mp,{children:[w.jsx(er,{path:"*",element:w.jsx(xp,{to:"/",replace:!0})}),w.jsx(er,{path:"/",element:w.jsx(lf,{})}),w.jsx(er,{path:"/greentrails/*",element:w.jsx(lf,{})}),w.jsx(er,{path:"/volenterpage/*",element:w.jsx(NE,{})}),w.jsx(er,{path:"/adddata/*",element:w.jsx(VE,{})}),w.jsx(er,{path:"/leaderboard/*",element:w.jsx(UE,{})}),w.jsx(er,{path:"/signup/*",element:w.jsx(BE,{})}),w.jsx(er,{path:"/santa/*",element:w.jsx(qE,{})})]})})]})});Pd.createRoot(document.getElementById("root")).render(w.jsx(dn.StrictMode,{children:w.jsx(YE,{})}));
