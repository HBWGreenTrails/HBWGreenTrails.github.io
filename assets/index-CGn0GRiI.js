(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function b6(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var o4={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G3;function D8(){if(G3)return yl;G3=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var Q3;function M8(){return Q3||(Q3=1,o4.exports=D8()),o4.exports}var T=M8(),l4={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K3;function I8(){if(K3)return It;K3=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=b&&L[b]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,$={};function z(L,it,dt){this.props=L,this.context=it,this.refs=$,this.updater=dt||N}z.prototype.isReactComponent={},z.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function G(){}G.prototype=z.prototype;function O(L,it,dt){this.props=L,this.context=it,this.refs=$,this.updater=dt||N}var K=O.prototype=new G;K.constructor=O,k(K,z.prototype),K.isPureReactComponent=!0;var nt=Array.isArray,at={H:null,A:null,T:null,S:null},ht=Object.prototype.hasOwnProperty;function I(L,it,dt,lt,ut,St){return dt=St.ref,{$$typeof:r,type:L,key:it,ref:dt!==void 0?dt:null,props:St}}function R(L,it){return I(L.type,it,void 0,void 0,void 0,L.props)}function S(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(dt){return it[dt]})}var V=/\/+/g;function j(L,it){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):it.toString(36)}function M(){}function ae(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(M,M):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function se(L,it,dt,lt,ut){var St=typeof L;(St==="undefined"||St==="boolean")&&(L=null);var bt=!1;if(L===null)bt=!0;else switch(St){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(L.$$typeof){case r:case t:bt=!0;break;case _:return bt=L._init,se(bt(L._payload),it,dt,lt,ut)}}if(bt)return ut=ut(L),bt=lt===""?"."+j(L,0):lt,nt(ut)?(dt="",bt!=null&&(dt=bt.replace(V,"$&/")+"/"),se(ut,it,dt,"",function(de){return de})):ut!=null&&(S(ut)&&(ut=R(ut,dt+(ut.key==null||L&&L.key===ut.key?"":(""+ut.key).replace(V,"$&/")+"/")+bt)),it.push(ut)),1;bt=0;var fe=lt===""?".":lt+":";if(nt(L))for(var kt=0;kt<L.length;kt++)lt=L[kt],St=fe+j(lt,kt),bt+=se(lt,it,dt,St,ut);else if(kt=w(L),typeof kt=="function")for(L=kt.call(L),kt=0;!(lt=L.next()).done;)lt=lt.value,St=fe+j(lt,kt++),bt+=se(lt,it,dt,St,ut);else if(St==="object"){if(typeof L.then=="function")return se(ae(L),it,dt,lt,ut);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return bt}function ot(L,it,dt){if(L==null)return L;var lt=[],ut=0;return se(L,lt,"","",function(St){return it.call(dt,St,ut++)}),lt}function vt(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(dt){(L._status===0||L._status===-1)&&(L._status=1,L._result=dt)},function(dt){(L._status===0||L._status===-1)&&(L._status=2,L._result=dt)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Bt(){}return It.Children={map:ot,forEach:function(L,it,dt){ot(L,function(){it.apply(this,arguments)},dt)},count:function(L){var it=0;return ot(L,function(){it++}),it},toArray:function(L){return ot(L,function(it){return it})||[]},only:function(L){if(!S(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},It.Component=z,It.Fragment=i,It.Profiler=l,It.PureComponent=O,It.StrictMode=s,It.Suspense=m,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at,It.act=function(){throw Error("act(...) is not supported in production builds of React.")},It.cache=function(L){return function(){return L.apply(null,arguments)}},It.cloneElement=function(L,it,dt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var lt=k({},L.props),ut=L.key,St=void 0;if(it!=null)for(bt in it.ref!==void 0&&(St=void 0),it.key!==void 0&&(ut=""+it.key),it)!ht.call(it,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&it.ref===void 0||(lt[bt]=it[bt]);var bt=arguments.length-2;if(bt===1)lt.children=dt;else if(1<bt){for(var fe=Array(bt),kt=0;kt<bt;kt++)fe[kt]=arguments[kt+2];lt.children=fe}return I(L.type,ut,void 0,void 0,St,lt)},It.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},It.createElement=function(L,it,dt){var lt,ut={},St=null;if(it!=null)for(lt in it.key!==void 0&&(St=""+it.key),it)ht.call(it,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(ut[lt]=it[lt]);var bt=arguments.length-2;if(bt===1)ut.children=dt;else if(1<bt){for(var fe=Array(bt),kt=0;kt<bt;kt++)fe[kt]=arguments[kt+2];ut.children=fe}if(L&&L.defaultProps)for(lt in bt=L.defaultProps,bt)ut[lt]===void 0&&(ut[lt]=bt[lt]);return I(L,St,void 0,void 0,null,ut)},It.createRef=function(){return{current:null}},It.forwardRef=function(L){return{$$typeof:p,render:L}},It.isValidElement=S,It.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:vt}},It.memo=function(L,it){return{$$typeof:y,type:L,compare:it===void 0?null:it}},It.startTransition=function(L){var it=at.T,dt={};at.T=dt;try{var lt=L(),ut=at.S;ut!==null&&ut(dt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Bt,mt)}catch(St){mt(St)}finally{at.T=it}},It.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()},It.use=function(L){return at.H.use(L)},It.useActionState=function(L,it,dt){return at.H.useActionState(L,it,dt)},It.useCallback=function(L,it){return at.H.useCallback(L,it)},It.useContext=function(L){return at.H.useContext(L)},It.useDebugValue=function(){},It.useDeferredValue=function(L,it){return at.H.useDeferredValue(L,it)},It.useEffect=function(L,it){return at.H.useEffect(L,it)},It.useId=function(){return at.H.useId()},It.useImperativeHandle=function(L,it,dt){return at.H.useImperativeHandle(L,it,dt)},It.useInsertionEffect=function(L,it){return at.H.useInsertionEffect(L,it)},It.useLayoutEffect=function(L,it){return at.H.useLayoutEffect(L,it)},It.useMemo=function(L,it){return at.H.useMemo(L,it)},It.useOptimistic=function(L,it){return at.H.useOptimistic(L,it)},It.useReducer=function(L,it,dt){return at.H.useReducer(L,it,dt)},It.useRef=function(L){return at.H.useRef(L)},It.useState=function(L){return at.H.useState(L)},It.useSyncExternalStore=function(L,it,dt){return at.H.useSyncExternalStore(L,it,dt)},It.useTransition=function(){return at.H.useTransition()},It.version="19.0.0",It}var Y3;function X4(){return Y3||(Y3=1,l4.exports=I8()),l4.exports}var H=X4();const Cn=b6(H);var u4={exports:{}},vl={},c4={exports:{}},h4={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $3;function N8(){return $3||($3=1,function(r){function t(ot,vt){var mt=ot.length;ot.push(vt);t:for(;0<mt;){var Bt=mt-1>>>1,L=ot[Bt];if(0<l(L,vt))ot[Bt]=vt,ot[mt]=L,mt=Bt;else break t}}function i(ot){return ot.length===0?null:ot[0]}function s(ot){if(ot.length===0)return null;var vt=ot[0],mt=ot.pop();if(mt!==vt){ot[0]=mt;t:for(var Bt=0,L=ot.length,it=L>>>1;Bt<it;){var dt=2*(Bt+1)-1,lt=ot[dt],ut=dt+1,St=ot[ut];if(0>l(lt,mt))ut<L&&0>l(St,lt)?(ot[Bt]=St,ot[ut]=mt,Bt=ut):(ot[Bt]=lt,ot[dt]=mt,Bt=dt);else if(ut<L&&0>l(St,mt))ot[Bt]=St,ot[ut]=mt,Bt=ut;else break t}}return vt}function l(ot,vt){var mt=ot.sortIndex-vt.sortIndex;return mt!==0?mt:ot.id-vt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],y=[],_=1,b=null,w=3,N=!1,k=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function K(ot){for(var vt=i(y);vt!==null;){if(vt.callback===null)s(y);else if(vt.startTime<=ot)s(y),vt.sortIndex=vt.expirationTime,t(m,vt);else break;vt=i(y)}}function nt(ot){if($=!1,K(ot),!k)if(i(m)!==null)k=!0,ae();else{var vt=i(y);vt!==null&&se(nt,vt.startTime-ot)}}var at=!1,ht=-1,I=5,R=-1;function S(){return!(r.unstable_now()-R<I)}function D(){if(at){var ot=r.unstable_now();R=ot;var vt=!0;try{t:{k=!1,$&&($=!1,G(ht),ht=-1),N=!0;var mt=w;try{e:{for(K(ot),b=i(m);b!==null&&!(b.expirationTime>ot&&S());){var Bt=b.callback;if(typeof Bt=="function"){b.callback=null,w=b.priorityLevel;var L=Bt(b.expirationTime<=ot);if(ot=r.unstable_now(),typeof L=="function"){b.callback=L,K(ot),vt=!0;break e}b===i(m)&&s(m),K(ot)}else s(m);b=i(m)}if(b!==null)vt=!0;else{var it=i(y);it!==null&&se(nt,it.startTime-ot),vt=!1}}break t}finally{b=null,w=mt,N=!1}vt=void 0}}finally{vt?V():at=!1}}}var V;if(typeof O=="function")V=function(){O(D)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,M=j.port2;j.port1.onmessage=D,V=function(){M.postMessage(null)}}else V=function(){z(D,0)};function ae(){at||(at=!0,V())}function se(ot,vt){ht=z(function(){ot(r.unstable_now())},vt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ot){ot.callback=null},r.unstable_continueExecution=function(){k||N||(k=!0,ae())},r.unstable_forceFrameRate=function(ot){0>ot||125<ot?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<ot?Math.floor(1e3/ot):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(ot){switch(w){case 1:case 2:case 3:var vt=3;break;default:vt=w}var mt=w;w=vt;try{return ot()}finally{w=mt}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ot,vt){switch(ot){case 1:case 2:case 3:case 4:case 5:break;default:ot=3}var mt=w;w=ot;try{return vt()}finally{w=mt}},r.unstable_scheduleCallback=function(ot,vt,mt){var Bt=r.unstable_now();switch(typeof mt=="object"&&mt!==null?(mt=mt.delay,mt=typeof mt=="number"&&0<mt?Bt+mt:Bt):mt=Bt,ot){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=mt+L,ot={id:_++,callback:vt,priorityLevel:ot,startTime:mt,expirationTime:L,sortIndex:-1},mt>Bt?(ot.sortIndex=mt,t(y,ot),i(m)===null&&ot===i(y)&&($?(G(ht),ht=-1):$=!0,se(nt,mt-Bt))):(ot.sortIndex=L,t(m,ot),k||N||(k=!0,ae())),ot},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(ot){var vt=w;return function(){var mt=w;w=vt;try{return ot.apply(this,arguments)}finally{w=mt}}}}(h4)),h4}var X3;function V8(){return X3||(X3=1,c4.exports=N8()),c4.exports}var f4={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W3;function L8(){if(W3)return hn;W3=1;var r=X4();function t(m){var y="https://react.dev/errors/"+m;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,y,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:y,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,y){if(m==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hn.createPortal=function(m,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(m,y,null,_)},hn.flushSync=function(m){var y=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=y,s.p=_,s.d.f()}},hn.preconnect=function(m,y){typeof m=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(m,y))},hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},hn.preinit=function(m,y){if(typeof m=="string"&&y&&typeof y.as=="string"){var _=y.as,b=p(_,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,N=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?s.d.S(m,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:N}):_==="script"&&s.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:N,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},hn.preinitModule=function(m,y){if(typeof m=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=p(y.as,y.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(m)},hn.preload=function(m,y){if(typeof m=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,b=p(_,y.crossOrigin);s.d.L(m,_,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},hn.preloadModule=function(m,y){if(typeof m=="string")if(y){var _=p(y.as,y.crossOrigin);s.d.m(m,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(m)},hn.requestFormReset=function(m){s.d.r(m)},hn.unstable_batchedUpdates=function(m,y){return m(y)},hn.useFormState=function(m,y,_){return f.H.useFormState(m,y,_)},hn.useFormStatus=function(){return f.H.useHostTransitionStatus()},hn.version="19.0.0",hn}var Z3;function O8(){if(Z3)return f4.exports;Z3=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),f4.exports=L8(),f4.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J3;function k8(){if(J3)return vl;J3=1;var r=V8(),t=X4(),i=O8();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),nt=Symbol.for("react.memo_cache_sentinel"),at=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=at&&e[at]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function R(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case p:return"Portal";case _:return"Profiler";case y:return"StrictMode";case $:return"Suspense";case z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case N:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:R(e.type)||"Memo";case O:n=e._payload,e=e._init;try{return R(e(n))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.assign,V,j;function M(e){if(V===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);V=n&&n[1]||"",j=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+e+j}var ae=!1;function se(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var tt=function(){throw Error()};if(Object.defineProperty(tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(tt,[])}catch(X){var Q=X}Reflect.construct(e,[],tt)}else{try{tt.call()}catch(X){Q=X}e.call(tt.prototype)}}else{try{throw Error()}catch(X){Q=X}(tt=e())&&typeof tt.catch=="function"&&tt.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),C=d[0],E=d[1];if(C&&E){var x=C.split(`
`),P=E.split(`
`);for(h=o=0;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(o===x.length||h===P.length)for(o=x.length-1,h=P.length-1;1<=o&&0<=h&&x[o]!==P[h];)h--;for(;1<=o&&0<=h;o--,h--)if(x[o]!==P[h]){if(o!==1||h!==1)do if(o--,h--,0>h||x[o]!==P[h]){var W=`
`+x[o].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=o&&0<=h);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?M(a):""}function ot(e){switch(e.tag){case 26:case 27:case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function vt(e){try{var n="";do n+=ot(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function mt(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Bt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(mt(e)!==e)throw Error(s(188))}function it(e){var n=e.alternate;if(!n){if(n=mt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return L(h),e;if(d===o)return L(h),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var C=!1,E=h.child;E;){if(E===a){C=!0,a=h,o=d;break}if(E===o){C=!0,o=h,a=d;break}E=E.sibling}if(!C){for(E=d.child;E;){if(E===a){C=!0,a=d,o=h;break}if(E===o){C=!0,o=d,a=h;break}E=E.sibling}if(!C)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function dt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=dt(e),n!==null)return n;e=e.sibling}return null}var lt=Array.isArray,ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St={pending:!1,data:null,method:null,action:null},bt=[],fe=-1;function kt(e){return{current:e}}function de(e){0>fe||(e.current=bt[fe],bt[fe]=null,fe--)}function Yt(e,n){fe++,bt[fe]=e.current,e.current=n}var Pt=kt(null),Tt=kt(null),ee=kt(null),Ze=kt(null);function un(e,n){switch(Yt(ee,n),Yt(Tt,e),Yt(Pt,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?_3(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=_3(e),n=E3(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}de(Pt),Yt(Pt,n)}function Je(){de(Pt),de(Tt),de(ee)}function ai(e){e.memoizedState!==null&&Yt(Ze,e);var n=Pt.current,a=E3(n,e.type);n!==a&&(Yt(Tt,e),Yt(Pt,a))}function jn(e){Tt.current===e&&(de(Pt),de(Tt)),Ze.current===e&&(de(Ze),fl._currentValue=St)}var Bn=Object.prototype.hasOwnProperty,di=r.unstable_scheduleCallback,Pi=r.unstable_cancelCallback,os=r.unstable_shouldYield,ya=r.unstable_requestPaint,tn=r.unstable_now,oe=r.unstable_getCurrentPriorityLevel,At=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,le=r.unstable_NormalPriority,be=r.unstable_LowPriority,he=r.unstable_IdlePriority,we=r.log,Dt=r.unstable_setDisableYieldValue,rt=null,Kt=null;function Me(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(rt,e,void 0,(e.current.flags&128)===128)}catch{}}function Ie(e){if(typeof we=="function"&&Dt(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(rt,e)}catch{}}var _e=Math.clz32?Math.clz32:vr,pi=Math.log,va=Math.LN2;function vr(e){return e>>>=0,e===0?32:31-(pi(e)/va|0)|0}var xn=128,Cr=4194304;function si(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hn(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,h=e.suspendedLanes,d=e.pingedLanes,C=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?o=si(a):(d&=E,d!==0?o=si(d):e||(C=E&~C,C!==0&&(o=si(C))))):(E=a&~h,E!==0?o=si(E):d!==0?o=si(d):e||(C=a&~C,C!==0&&(o=si(C)))),o===0?0:n!==0&&n!==o&&(n&h)===0&&(h=o&-o,C=n&-n,h>=C||h===32&&(C&4194176)!==0)?n:o}function _r(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ls(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=xn;return xn<<=1,(xn&4194176)===0&&(xn=128),e}function Er(){var e=Cr;return Cr<<=1,(Cr&62914560)===0&&(Cr=4194304),e}function us(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Re(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,n,a,o,h,d){var C=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,x=e.expirationTimes,P=e.hiddenUpdates;for(a=C&~a;0<a;){var W=31-_e(a),tt=1<<W;E[W]=0,x[W]=-1;var Q=P[W];if(Q!==null)for(P[W]=null,W=0;W<Q.length;W++){var X=Q[W];X!==null&&(X.lane&=-536870913)}a&=~tt}o!==0&&Tr(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(C&~n))}function Tr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-_e(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Ar(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-_e(a),h=1<<o;h&n|e[o]&n&&(e[o]|=n),a&=~h}}function $l(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xl(){var e=ut.p;return e!==0?e:(e=window.event,e===void 0?32:z3(e.type))}function Sr(e,n){var a=ut.p;try{return ut.p=e,n()}finally{ut.p=a}}var mi=Math.random().toString(36).slice(2),Fe="__reactFiber$"+mi,ke="__reactProps$"+mi,zi="__reactContainer$"+mi,Ca="__reactEvents$"+mi,cs="__reactListeners$"+mi,gi="__reactHandles$"+mi,vo="__reactResources$"+mi,br="__reactMarker$"+mi;function _a(e){delete e[Fe],delete e[ke],delete e[Ca],delete e[cs],delete e[gi]}function oi(e){var n=e[Fe];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[Fe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=S3(e);e!==null;){if(a=e[Fe])return a;e=S3(e)}return n}e=a,a=e.parentNode}return null}function ji(e){if(e=e[Fe]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function wr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Rr(e){var n=e[vo];return n||(n=e[vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ge(e){e[br]=!0}var Co=new Set,hs={};function Dn(e,n){_n(e,n),_n(e+"Capture",n)}function _n(e,n){for(hs[e]=n,e=0;e<n.length;e++)Co.add(n[e])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Eo={};function Wl(e){return Bn.call(Eo,e)?!0:Bn.call(_o,e)?!1:h0.test(e)?Eo[e]=!0:(_o[e]=!0,!1)}function xr(e,n,a){if(Wl(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function mn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function f0(e){var n=Zl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(C){o=""+C,d.call(this,C)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(C){o=""+C},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ea(e){e._valueTracker||(e._valueTracker=f0(e))}function To(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Zl(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bi=/[\n"\\]/g;function Ee(e){return e.replace(Bi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mr(e,n,a,o,h,d,C,E){e.name="",C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.type=C:e.removeAttribute("type"),n!=null?C==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+mn(n)):e.value!==""+mn(n)&&(e.value=""+mn(n)):C!=="submit"&&C!=="reset"||e.removeAttribute("value"),n!=null?ds(e,C,mn(n)):a!=null?ds(e,C,mn(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+mn(E):e.removeAttribute("name")}function Ta(e,n,a,o,h,d,C,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+mn(a):"",n=n!=null?""+mn(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"&&(e.name=C)}function ds(e,n,a){n==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $t(e,n,a,o){if(e=e.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=n.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+mn(a),n=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function Aa(e,n,a){if(n!=null&&(n=""+mn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+mn(a):""}function Ir(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=mn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ao(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||d0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jl(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&Ao(e,h,o)}else for(var d in n)n.hasOwnProperty(d)&&Ao(e,d,n[d])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var p0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return m0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gn=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,qi=null;function Fi(e){var n=ji(e);if(n&&(e=n.stateNode)){var a=e[ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var h=o[ke]||null;if(!h)throw Error(s(90));Mr(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&To(o)}break t;case"textarea":Aa(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$t(e,!!a.multiple,n,!1)}}}var bo=!1;function tu(e,n,a){if(bo)return e(n,a);bo=!0;try{var o=e(n);return o}finally{if(bo=!1,(Hi!==null||qi!==null)&&(Gu(),Hi&&(n=Hi,e=qi,qi=Hi=null,Fi(n),e)))for(n=0;n<e.length;n++)Fi(e[n])}}function Sa(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qn=!1;if(Mn)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Qn=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Qn=!1}var vi=null,Nr=null,Gi=null;function wo(){if(Gi)return Gi;var e,n=Nr,a=n.length,o,h="value"in vi?vi.value:vi.textContent,d=h.length;for(e=0;e<a&&n[e]===h[e];e++);var C=a-e;for(o=1;o<=C&&n[a-o]===h[d-o];o++);return Gi=h.slice(e,1<o?1-o:void 0)}function Ci(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Ro(){return!1}function Ge(e){function n(a,o,h,d,C){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=C,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_i:Ro,this.isPropagationStopped=Ro,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=Ge(Jt),wa=D({},Jt,{view:0,detail:0}),eu=Ge(wa),gs,ys,Ei,Ra=D({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(gs=e.screenX-Ei.screenX,ys=e.screenY-Ei.screenY):ys=gs=0,Ei=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),Kn=Ge(Ra),nu=D({},Ra,{dataTransfer:0}),g0=Ge(nu),xa=D({},wa,{relatedTarget:0}),vs=Ge(xa),xo=D({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Cs=Ge(xo),iu=D({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_s=Ge(iu),y0=D({},Jt,{data:0}),Do=Ge(y0),Da={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=au[e])?!!n[e]:!1}function Ma(){return Mo}var su=D({},wa,{key:function(e){if(e.key){var n=Da[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Es=Ge(su),ou=D({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Io=Ge(ou),Qi=D({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),lu=Ge(Qi),uu=D({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),cu=Ge(uu),hu=D({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ts=Ge(hu),gn=D({},Jt,{newState:0,oldState:0}),fu=Ge(gn),du=[9,13,27,32],Ti=Mn&&"CompositionEvent"in window,u=null;Mn&&"documentMode"in document&&(u=document.documentMode);var g=Mn&&"TextEvent"in window&&!u,v=Mn&&(!Ti||u&&8<u&&11>=u),A=" ",q=!1;function Y(e,n){switch(e){case"keyup":return du.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function st(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Ue(e,n){switch(e){case"compositionend":return st(n);case"keypress":return n.which!==32?null:(q=!0,A);case"textInput":return e=n.data,e===A&&q?null:e;default:return null}}function qt(e,n){if(Ht)return e==="compositionend"||!Ti&&Y(e,n)?(e=wo(),Gi=Nr=vi=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var Qe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pe(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qe[e.type]:n==="textarea"}function Ki(e,n,a,o){Hi?qi?qi.push(o):qi=[o]:Hi=o,n=Xu(n,"onChange"),0<n.length&&(a=new ms("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var en=null,Ai=null;function No(e){m3(e,0)}function pu(e){var n=wr(e);if(To(n))return e}function F2(e,n){if(e==="change")return n}var G2=!1;if(Mn){var v0;if(Mn){var C0="oninput"in document;if(!C0){var Q2=document.createElement("div");Q2.setAttribute("oninput","return;"),C0=typeof Q2.oninput=="function"}v0=C0}else v0=!1;G2=v0&&(!document.documentMode||9<document.documentMode)}function K2(){en&&(en.detachEvent("onpropertychange",Y2),Ai=en=null)}function Y2(e){if(e.propertyName==="value"&&pu(Ai)){var n=[];Ki(n,Ai,e,ps(e)),tu(No,n)}}function ad(e,n,a){e==="focusin"?(K2(),en=n,Ai=a,en.attachEvent("onpropertychange",Y2)):e==="focusout"&&K2()}function sd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pu(Ai)}function od(e,n){if(e==="click")return pu(n)}function ld(e,n){if(e==="input"||e==="change")return pu(n)}function ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:ud;function Vo(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Bn.call(n,h)||!In(e[h],n[h]))return!1}return!0}function $2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X2(e,n){var a=$2(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$2(a)}}function W2(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?W2(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Z2(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fs(e.document)}return n}function _0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cd(e,n){var a=Z2(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&W2(n.ownerDocument.documentElement,n)){if(o!==null&&_0(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=n.textContent.length,d=Math.min(o.start,h);o=o.end===void 0?d:Math.min(o.end,h),!a.extend&&d>o&&(h=o,o=d,d=h),h=X2(n,d);var C=X2(n,o);h&&C&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==C.node||a.focusOffset!==C.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(C.node,C.offset)):(e.setEnd(C.node,C.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var hd=Mn&&"documentMode"in document&&11>=document.documentMode,As=null,E0=null,Lo=null,T0=!1;function J2(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;T0||As==null||As!==fs(o)||(o=As,"selectionStart"in o&&_0(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Lo&&Vo(Lo,o)||(Lo=o,o=Xu(E0,"onSelect"),0<o.length&&(n=new ms("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=As)))}function Ia(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ss={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},A0={},t5={};Mn&&(t5=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Na(e){if(A0[e])return A0[e];if(!Ss[e])return e;var n=Ss[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in t5)return A0[e]=n[a];return e}var e5=Na("animationend"),n5=Na("animationiteration"),i5=Na("animationstart"),fd=Na("transitionrun"),dd=Na("transitionstart"),pd=Na("transitioncancel"),r5=Na("transitionend"),a5=new Map,s5="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(e,n){a5.set(e,n),Dn(n,[e])}var Yn=[],bs=0,S0=0;function mu(){for(var e=bs,n=S0=bs=0;n<e;){var a=Yn[n];Yn[n++]=null;var o=Yn[n];Yn[n++]=null;var h=Yn[n];Yn[n++]=null;var d=Yn[n];if(Yn[n++]=null,o!==null&&h!==null){var C=o.pending;C===null?h.next=h:(h.next=C.next,C.next=h),o.pending=h}d!==0&&o5(a,h,d)}}function gu(e,n,a,o){Yn[bs++]=e,Yn[bs++]=n,Yn[bs++]=a,Yn[bs++]=o,S0|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function b0(e,n,a,o){return gu(e,n,a,o),yu(e)}function Vr(e,n){return gu(e,null,null,n),yu(e)}function o5(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&n!==null&&e.tag===3&&(d=e.stateNode,h=31-_e(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[n]:e.push(n),n.lane=a|536870912)}function yu(e){if(50<al)throw al=0,I1=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ws={},l5=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=l5.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},l5.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var Rs=[],xs=0,vu=null,Cu=0,Xn=[],Wn=0,Va=null,Yi=1,$i="";function La(e,n){Rs[xs++]=Cu,Rs[xs++]=vu,vu=e,Cu=n}function u5(e,n,a){Xn[Wn++]=Yi,Xn[Wn++]=$i,Xn[Wn++]=Va,Va=e;var o=Yi;e=$i;var h=32-_e(o)-1;o&=~(1<<h),a+=1;var d=32-_e(n)+h;if(30<d){var C=h-h%5;d=(o&(1<<C)-1).toString(32),o>>=C,h-=C,Yi=1<<32-_e(n)+h|a<<h|o,$i=d+e}else Yi=1<<d|a<<h|o,$i=e}function w0(e){e.return!==null&&(La(e,1),u5(e,1,0))}function R0(e){for(;e===vu;)vu=Rs[--xs],Rs[xs]=null,Cu=Rs[--xs],Rs[xs]=null;for(;e===Va;)Va=Xn[--Wn],Xn[Wn]=null,$i=Xn[--Wn],Xn[Wn]=null,Yi=Xn[--Wn],Xn[Wn]=null}var yn=null,nn=null,Xt=!1,ui=null,Si=!1,x0=Error(s(519));function Oa(e){var n=Error(s(418,""));throw Uo($n(n,e)),x0}function c5(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Fe]=e,n[ke]=o,a){case"dialog":zt("cancel",n),zt("close",n);break;case"iframe":case"object":case"embed":zt("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)zt(ol[a],n);break;case"source":zt("error",n);break;case"img":case"image":case"link":zt("error",n),zt("load",n);break;case"details":zt("toggle",n);break;case"input":zt("invalid",n),Ta(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ea(n);break;case"select":zt("invalid",n);break;case"textarea":zt("invalid",n),Ir(n,o.value,o.defaultValue,o.children),Ea(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C3(n.textContent,a)?(o.popover!=null&&(zt("beforetoggle",n),zt("toggle",n)),o.onScroll!=null&&zt("scroll",n),o.onScrollEnd!=null&&zt("scrollend",n),o.onClick!=null&&(n.onclick=Wu),n=!0):n=!1,n||Oa(e)}function h5(e){for(yn=e.return;yn;)switch(yn.tag){case 3:case 27:Si=!0;return;case 5:case 13:Si=!1;return;default:yn=yn.return}}function Oo(e){if(e!==yn)return!1;if(!Xt)return h5(e),Xt=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Y1(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&nn&&Oa(e),h5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){nn=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}nn=null}}else nn=yn?hi(e.stateNode.nextSibling):null;return!0}function ko(){nn=yn=null,Xt=!1}function Uo(e){ui===null?ui=[e]:ui.push(e)}var Po=Error(s(460)),f5=Error(s(474)),D0={then:function(){}};function d5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _u(){}function p5(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_u,_u),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Po?Error(s(483)):e;default:if(typeof n.status=="string")n.then(_u,_u);else{if(e=ue,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Po?Error(s(483)):e}throw zo=n,Po}}var zo=null;function m5(){if(zo===null)throw Error(s(459));var e=zo;return zo=null,e}var Ds=null,jo=0;function Eu(e){var n=jo;return jo+=1,Ds===null&&(Ds=[]),p5(Ds,e,n)}function Bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tu(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function g5(e){var n=e._init;return n(e._payload)}function y5(e){function n(B,U){if(e){var F=B.deletions;F===null?(B.deletions=[U],B.flags|=16):F.push(U)}}function a(B,U){if(!e)return null;for(;U!==null;)n(B,U),U=U.sibling;return null}function o(B){for(var U=new Map;B!==null;)B.key!==null?U.set(B.key,B):U.set(B.index,B),B=B.sibling;return U}function h(B,U){return B=Gr(B,U),B.index=0,B.sibling=null,B}function d(B,U,F){return B.index=F,e?(F=B.alternate,F!==null?(F=F.index,F<U?(B.flags|=33554434,U):F):(B.flags|=33554434,U)):(B.flags|=1048576,U)}function C(B){return e&&B.alternate===null&&(B.flags|=33554434),B}function E(B,U,F,Z){return U===null||U.tag!==6?(U=A1(F,B.mode,Z),U.return=B,U):(U=h(U,F),U.return=B,U)}function x(B,U,F,Z){var ft=F.type;return ft===m?W(B,U,F.props.children,Z,F.key):U!==null&&(U.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===O&&g5(ft)===U.type)?(U=h(U,F.props),Bo(U,F),U.return=B,U):(U=ju(F.type,F.key,F.props,null,B.mode,Z),Bo(U,F),U.return=B,U)}function P(B,U,F,Z){return U===null||U.tag!==4||U.stateNode.containerInfo!==F.containerInfo||U.stateNode.implementation!==F.implementation?(U=S1(F,B.mode,Z),U.return=B,U):(U=h(U,F.children||[]),U.return=B,U)}function W(B,U,F,Z,ft){return U===null||U.tag!==7?(U=Ga(F,B.mode,Z,ft),U.return=B,U):(U=h(U,F),U.return=B,U)}function tt(B,U,F){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=A1(""+U,B.mode,F),U.return=B,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case f:return F=ju(U.type,U.key,U.props,null,B.mode,F),Bo(F,U),F.return=B,F;case p:return U=S1(U,B.mode,F),U.return=B,U;case O:var Z=U._init;return U=Z(U._payload),tt(B,U,F)}if(lt(U)||ht(U))return U=Ga(U,B.mode,F,null),U.return=B,U;if(typeof U.then=="function")return tt(B,Eu(U),F);if(U.$$typeof===N)return tt(B,Uu(B,U),F);Tu(B,U)}return null}function Q(B,U,F,Z){var ft=U!==null?U.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return ft!==null?null:E(B,U,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case f:return F.key===ft?x(B,U,F,Z):null;case p:return F.key===ft?P(B,U,F,Z):null;case O:return ft=F._init,F=ft(F._payload),Q(B,U,F,Z)}if(lt(F)||ht(F))return ft!==null?null:W(B,U,F,Z,null);if(typeof F.then=="function")return Q(B,U,Eu(F),Z);if(F.$$typeof===N)return Q(B,U,Uu(B,F),Z);Tu(B,F)}return null}function X(B,U,F,Z,ft){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return B=B.get(F)||null,E(U,B,""+Z,ft);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case f:return B=B.get(Z.key===null?F:Z.key)||null,x(U,B,Z,ft);case p:return B=B.get(Z.key===null?F:Z.key)||null,P(U,B,Z,ft);case O:var Lt=Z._init;return Z=Lt(Z._payload),X(B,U,F,Z,ft)}if(lt(Z)||ht(Z))return B=B.get(F)||null,W(U,B,Z,ft,null);if(typeof Z.then=="function")return X(B,U,F,Eu(Z),ft);if(Z.$$typeof===N)return X(B,U,F,Uu(U,Z),ft);Tu(U,Z)}return null}function pt(B,U,F,Z){for(var ft=null,Lt=null,yt=U,_t=U=0,$e=null;yt!==null&&_t<F.length;_t++){yt.index>_t?($e=yt,yt=null):$e=yt.sibling;var Wt=Q(B,yt,F[_t],Z);if(Wt===null){yt===null&&(yt=$e);break}e&&yt&&Wt.alternate===null&&n(B,yt),U=d(Wt,U,_t),Lt===null?ft=Wt:Lt.sibling=Wt,Lt=Wt,yt=$e}if(_t===F.length)return a(B,yt),Xt&&La(B,_t),ft;if(yt===null){for(;_t<F.length;_t++)yt=tt(B,F[_t],Z),yt!==null&&(U=d(yt,U,_t),Lt===null?ft=yt:Lt.sibling=yt,Lt=yt);return Xt&&La(B,_t),ft}for(yt=o(yt);_t<F.length;_t++)$e=X(yt,B,_t,F[_t],Z),$e!==null&&(e&&$e.alternate!==null&&yt.delete($e.key===null?_t:$e.key),U=d($e,U,_t),Lt===null?ft=$e:Lt.sibling=$e,Lt=$e);return e&&yt.forEach(function(Zr){return n(B,Zr)}),Xt&&La(B,_t),ft}function Rt(B,U,F,Z){if(F==null)throw Error(s(151));for(var ft=null,Lt=null,yt=U,_t=U=0,$e=null,Wt=F.next();yt!==null&&!Wt.done;_t++,Wt=F.next()){yt.index>_t?($e=yt,yt=null):$e=yt.sibling;var Zr=Q(B,yt,Wt.value,Z);if(Zr===null){yt===null&&(yt=$e);break}e&&yt&&Zr.alternate===null&&n(B,yt),U=d(Zr,U,_t),Lt===null?ft=Zr:Lt.sibling=Zr,Lt=Zr,yt=$e}if(Wt.done)return a(B,yt),Xt&&La(B,_t),ft;if(yt===null){for(;!Wt.done;_t++,Wt=F.next())Wt=tt(B,Wt.value,Z),Wt!==null&&(U=d(Wt,U,_t),Lt===null?ft=Wt:Lt.sibling=Wt,Lt=Wt);return Xt&&La(B,_t),ft}for(yt=o(yt);!Wt.done;_t++,Wt=F.next())Wt=X(yt,B,_t,Wt.value,Z),Wt!==null&&(e&&Wt.alternate!==null&&yt.delete(Wt.key===null?_t:Wt.key),U=d(Wt,U,_t),Lt===null?ft=Wt:Lt.sibling=Wt,Lt=Wt);return e&&yt.forEach(function(x8){return n(B,x8)}),Xt&&La(B,_t),ft}function Se(B,U,F,Z){if(typeof F=="object"&&F!==null&&F.type===m&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case f:t:{for(var ft=F.key;U!==null;){if(U.key===ft){if(ft=F.type,ft===m){if(U.tag===7){a(B,U.sibling),Z=h(U,F.props.children),Z.return=B,B=Z;break t}}else if(U.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===O&&g5(ft)===U.type){a(B,U.sibling),Z=h(U,F.props),Bo(Z,F),Z.return=B,B=Z;break t}a(B,U);break}else n(B,U);U=U.sibling}F.type===m?(Z=Ga(F.props.children,B.mode,Z,F.key),Z.return=B,B=Z):(Z=ju(F.type,F.key,F.props,null,B.mode,Z),Bo(Z,F),Z.return=B,B=Z)}return C(B);case p:t:{for(ft=F.key;U!==null;){if(U.key===ft)if(U.tag===4&&U.stateNode.containerInfo===F.containerInfo&&U.stateNode.implementation===F.implementation){a(B,U.sibling),Z=h(U,F.children||[]),Z.return=B,B=Z;break t}else{a(B,U);break}else n(B,U);U=U.sibling}Z=S1(F,B.mode,Z),Z.return=B,B=Z}return C(B);case O:return ft=F._init,F=ft(F._payload),Se(B,U,F,Z)}if(lt(F))return pt(B,U,F,Z);if(ht(F)){if(ft=ht(F),typeof ft!="function")throw Error(s(150));return F=ft.call(F),Rt(B,U,F,Z)}if(typeof F.then=="function")return Se(B,U,Eu(F),Z);if(F.$$typeof===N)return Se(B,U,Uu(B,F),Z);Tu(B,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,U!==null&&U.tag===6?(a(B,U.sibling),Z=h(U,F),Z.return=B,B=Z):(a(B,U),Z=A1(F,B.mode,Z),Z.return=B,B=Z),C(B)):a(B,U)}return function(B,U,F,Z){try{jo=0;var ft=Se(B,U,F,Z);return Ds=null,ft}catch(yt){if(yt===Po)throw yt;var Lt=ei(29,yt,null,B.mode);return Lt.lanes=Z,Lt.return=B,Lt}finally{}}}var ka=y5(!0),v5=y5(!1),Ms=kt(null),Au=kt(0);function C5(e,n){e=sr,Yt(Au,e),Yt(Ms,n),sr=e|n.baseLanes}function M0(){Yt(Au,sr),Yt(Ms,Ms.current)}function I0(){sr=Au.current,de(Ms),de(Au)}var Zn=kt(null),bi=null;function Lr(e){var n=e.alternate;Yt(ze,ze.current&1),Yt(Zn,e),bi===null&&(n===null||Ms.current!==null||n.memoizedState!==null)&&(bi=e)}function _5(e){if(e.tag===22){if(Yt(ze,ze.current),Yt(Zn,e),bi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(bi=e)}}else Or()}function Or(){Yt(ze,ze.current),Yt(Zn,Zn.current)}function Xi(e){de(Zn),bi===e&&(bi=null),de(ze)}var ze=kt(0);function Su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var md=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gd=r.unstable_scheduleCallback,yd=r.unstable_NormalPriority,je={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function N0(){return{controller:new md,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&gd(yd,function(){e.controller.abort()})}var qo=null,V0=0,Is=0,Ns=null;function vd(e,n){if(qo===null){var a=qo=[];V0=0,Is=z1(),Ns={status:"pending",value:void 0,then:function(o){a.push(o)}}}return V0++,n.then(E5,E5),n}function E5(){if(--V0===0&&qo!==null){Ns!==null&&(Ns.status="fulfilled");var e=qo;qo=null,Is=0,Ns=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cd(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var T5=S.S;S.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&vd(e,n),T5!==null&&T5(e,n)};var Ua=kt(null);function L0(){var e=Ua.current;return e!==null?e:ue.pooledCache}function bu(e,n){n===null?Yt(Ua,Ua.current):Yt(Ua,n.pool)}function A5(){var e=L0();return e===null?null:{parent:je._currentValue,pool:e}}var kr=0,Vt=null,ne=null,Ne=null,wu=!1,Vs=!1,Pa=!1,Ru=0,Fo=0,Ls=null,_d=0;function xe(){throw Error(s(321))}function O0(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!In(e[a],n[a]))return!1;return!0}function k0(e,n,a,o,h,d){return kr=d,Vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=e===null||e.memoizedState===null?za:Ur,Pa=!1,d=a(o,h),Pa=!1,Vs&&(d=b5(n,a,o,h)),S5(e),d}function S5(e){S.H=wi;var n=ne!==null&&ne.next!==null;if(kr=0,Ne=ne=Vt=null,wu=!1,Fo=0,Ls=null,n)throw Error(s(300));e===null||Ke||(e=e.dependencies,e!==null&&ku(e)&&(Ke=!0))}function b5(e,n,a,o){Vt=e;var h=0;do{if(Vs&&(Ls=null),Fo=0,Vs=!1,25<=h)throw Error(s(301));if(h+=1,Ne=ne=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=ja,d=n(a,o)}while(Vs);return d}function Ed(){var e=S.H,n=e.useState()[0];return n=typeof n.then=="function"?Go(n):n,e=e.useState()[0],(ne!==null?ne.memoizedState:null)!==e&&(Vt.flags|=1024),n}function U0(){var e=Ru!==0;return Ru=0,e}function P0(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function z0(e){if(wu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wu=!1}kr=0,Ne=ne=Vt=null,Vs=!1,Fo=Ru=0,Ls=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Vt.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ve(){if(ne===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=Ne===null?Vt.memoizedState:Ne.next;if(n!==null)Ne=n,ne=e;else{if(e===null)throw Vt.alternate===null?Error(s(467)):Error(s(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},Ne===null?Vt.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}var xu;xu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Go(e){var n=Fo;return Fo+=1,Ls===null&&(Ls=[]),e=p5(Ls,e,n),n=Vt,(Ne===null?n.memoizedState:Ne.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?za:Ur),e}function Du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===N)return cn(e)}throw Error(s(438,String(e)))}function j0(e){var n=null,a=Vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xu(),Vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=nt;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Mu(e){var n=Ve();return B0(n,ne,e)}function B0(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var C=h.next;h.next=d.next,d.next=C}n.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var E=C=null,x=null,P=n,W=!1;do{var tt=P.lane&-536870913;if(tt!==P.lane?(Ft&tt)===tt:(kr&tt)===tt){var Q=P.revertLane;if(Q===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),tt===Is&&(W=!0);else if((kr&Q)===Q){P=P.next,Q===Is&&(W=!0);continue}else tt={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},x===null?(E=x=tt,C=d):x=x.next=tt,Vt.lanes|=Q,Qr|=Q;tt=P.action,Pa&&a(d,tt),d=P.hasEagerState?P.eagerState:a(d,tt)}else Q={lane:tt,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},x===null?(E=x=Q,C=d):x=x.next=Q,Vt.lanes|=tt,Qr|=tt;P=P.next}while(P!==null&&P!==n);if(x===null?C=d:x.next=E,!In(d,e.memoizedState)&&(Ke=!0,W&&(a=Ns,a!==null)))throw a;e.memoizedState=d,e.baseState=C,e.baseQueue=x,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function H0(e){var n=Ve(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=n.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do d=e(d,C.action),C=C.next;while(C!==h);In(d,n.memoizedState)||(Ke=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function w5(e,n,a){var o=Vt,h=Ve(),d=Xt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var C=!In((ne||h).memoizedState,a);if(C&&(h.memoizedState=a,Ke=!0),h=h.queue,G0(D5.bind(null,o,h,e),[e]),h.getSnapshot!==n||C||Ne!==null&&Ne.memoizedState.tag&1){if(o.flags|=2048,Os(9,x5.bind(null,o,h,a,n),{destroy:void 0},null),ue===null)throw Error(s(349));d||(kr&60)!==0||R5(o,n,a)}return a}function R5(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Vt.updateQueue,n===null?(n=xu(),Vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function x5(e,n,a,o){n.value=a,n.getSnapshot=o,M5(n)&&I5(e)}function D5(e,n,a){return a(function(){M5(n)&&I5(e)})}function M5(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!In(e,a)}catch{return!0}}function I5(e){var n=Vr(e,2);n!==null&&vn(n,e,2)}function q0(e){var n=En();if(typeof e=="function"){var a=e;if(e=a(),Pa){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function N5(e,n,a,o){return e.baseState=a,B0(e,ne,typeof o=="function"?o:Wi)}function Td(e,n,a,o,h){if(Vu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(C){d.listeners.push(C)}};S.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,V5(n,d)):(d.next=a.next,n.pending=a.next=d)}}function V5(e,n){var a=n.action,o=n.payload,h=e.state;if(n.isTransition){var d=S.T,C={};S.T=C;try{var E=a(h,o),x=S.S;x!==null&&x(C,E),L5(e,n,E)}catch(P){F0(e,n,P)}finally{S.T=d}}else try{d=a(h,o),L5(e,n,d)}catch(P){F0(e,n,P)}}function L5(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){O5(e,n,o)},function(o){return F0(e,n,o)}):O5(e,n,a)}function O5(e,n,a){n.status="fulfilled",n.value=a,k5(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,V5(e,a)))}function F0(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,k5(n),n=n.next;while(n!==o)}e.action=null}function k5(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function U5(e,n){return n}function P5(e,n){if(Xt){var a=ue.formState;if(a!==null){t:{var o=Vt;if(Xt){if(nn){e:{for(var h=nn,d=Si;h.nodeType!==8;){if(!d){h=null;break e}if(h=hi(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){nn=hi(h.nextSibling),o=h.data==="F!";break t}}Oa(o)}o=!1}o&&(n=a[0])}}return a=En(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U5,lastRenderedState:n},a.queue=o,a=nh.bind(null,Vt,o),o.dispatch=a,o=q0(!1),d=X0.bind(null,Vt,!1,o.queue),o=En(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,a=Td.bind(null,Vt,h,d,a),h.dispatch=a,o.memoizedState=e,[n,a,!1]}function z5(e){var n=Ve();return j5(n,ne,e)}function j5(e,n,a){n=B0(e,n,U5)[0],e=Mu(Wi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Go(n):n;var o=Ve(),h=o.queue,d=h.dispatch;return a!==o.memoizedState&&(Vt.flags|=2048,Os(9,Ad.bind(null,h,a),{destroy:void 0},null)),[n,d,e]}function Ad(e,n){e.action=n}function B5(e){var n=Ve(),a=ne;if(a!==null)return j5(n,a,e);Ve(),n=n.memoizedState,a=Ve();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Os(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=Vt.updateQueue,n===null&&(n=xu(),Vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function H5(){return Ve().memoizedState}function Iu(e,n,a,o){var h=En();Vt.flags|=e,h.memoizedState=Os(1|n,a,{destroy:void 0},o===void 0?null:o)}function Nu(e,n,a,o){var h=Ve();o=o===void 0?null:o;var d=h.memoizedState.inst;ne!==null&&o!==null&&O0(o,ne.memoizedState.deps)?h.memoizedState=Os(n,a,d,o):(Vt.flags|=e,h.memoizedState=Os(1|n,a,d,o))}function q5(e,n){Iu(8390656,8,e,n)}function G0(e,n){Nu(2048,8,e,n)}function F5(e,n){return Nu(4,2,e,n)}function G5(e,n){return Nu(4,4,e,n)}function Q5(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K5(e,n,a){a=a!=null?a.concat([e]):null,Nu(4,4,Q5.bind(null,n,e),a)}function Q0(){}function Y5(e,n){var a=Ve();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&O0(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $5(e,n){var a=Ve();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&O0(n,o[1]))return o[0];if(o=e(),Pa){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function K0(e,n,a){return a===void 0||(kr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Wh(),Vt.lanes|=e,Qr|=e,a)}function X5(e,n,a,o){return In(a,n)?a:Ms.current!==null?(e=K0(e,a,o),In(e,n)||(Ke=!0),e):(kr&42)===0?(Ke=!0,e.memoizedState=a):(e=Wh(),Vt.lanes|=e,Qr|=e,n)}function W5(e,n,a,o,h){var d=ut.p;ut.p=d!==0&&8>d?d:8;var C=S.T,E={};S.T=E,X0(e,!1,n,a);try{var x=h(),P=S.S;if(P!==null&&P(E,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=Cd(x,o);Qo(e,n,W,On(e))}else Qo(e,n,o,On(e))}catch(tt){Qo(e,n,{then:function(){},status:"rejected",reason:tt},On())}finally{ut.p=d,S.T=C}}function Sd(){}function Y0(e,n,a,o){if(e.tag!==5)throw Error(s(476));var h=Z5(e).queue;W5(e,h,n,St,a===null?Sd:function(){return J5(e),a(o)})}function Z5(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:St,baseState:St,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:St},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function J5(e){var n=Z5(e).next.queue;Qo(e,n,{},On())}function $0(){return cn(fl)}function th(){return Ve().memoizedState}function eh(){return Ve().memoizedState}function bd(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=On();e=jr(a);var o=Br(n,e,a);o!==null&&(vn(o,n,a),$o(o,n,a)),n={cache:N0()},e.payload=n;return}n=n.return}}function wd(e,n,a){var o=On();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vu(e)?ih(n,a):(a=b0(e,n,a,o),a!==null&&(vn(a,e,o),rh(a,n,o)))}function nh(e,n,a){var o=On();Qo(e,n,a,o)}function Qo(e,n,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))ih(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var C=n.lastRenderedState,E=d(C,a);if(h.hasEagerState=!0,h.eagerState=E,In(E,C))return gu(e,n,h,0),ue===null&&mu(),!1}catch{}finally{}if(a=b0(e,n,h,o),a!==null)return vn(a,e,o),rh(a,n,o),!0}return!1}function X0(e,n,a,o){if(o={lane:2,revertLane:z1(),action:o,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(n)throw Error(s(479))}else n=b0(e,a,o,2),n!==null&&vn(n,e,2)}function Vu(e){var n=e.alternate;return e===Vt||n!==null&&n===Vt}function ih(e,n){Vs=wu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function rh(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ar(e,a)}}var wi={readContext:cn,use:Du,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe};wi.useCacheRefresh=xe,wi.useMemoCache=xe,wi.useHostTransitionStatus=xe,wi.useFormState=xe,wi.useActionState=xe,wi.useOptimistic=xe;var za={readContext:cn,use:Du,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:q5,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Iu(4194308,4,Q5.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Iu(4194308,4,e,n)},useInsertionEffect:function(e,n){Iu(4,2,e,n)},useMemo:function(e,n){var a=En();n=n===void 0?null:n;var o=e();if(Pa){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=En();if(a!==void 0){var h=a(n);if(Pa){Ie(!0);try{a(n)}finally{Ie(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=wd.bind(null,Vt,e),[o.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:function(e){e=q0(e);var n=e.queue,a=nh.bind(null,Vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Q0,useDeferredValue:function(e,n){var a=En();return K0(a,e,n)},useTransition:function(){var e=q0(!1);return e=W5.bind(null,Vt,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Vt,h=En();if(Xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ue===null)throw Error(s(349));(Ft&60)!==0||R5(o,n,a)}h.memoizedState=a;var d={value:a,getSnapshot:n};return h.queue=d,q5(D5.bind(null,o,d,e),[e]),o.flags|=2048,Os(9,x5.bind(null,o,d,a,n),{destroy:void 0},null),a},useId:function(){var e=En(),n=ue.identifierPrefix;if(Xt){var a=$i,o=Yi;a=(o&~(1<<32-_e(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ru++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=_d++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return En().memoizedState=bd.bind(null,Vt)}};za.useMemoCache=j0,za.useHostTransitionStatus=$0,za.useFormState=P5,za.useActionState=P5,za.useOptimistic=function(e){var n=En();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=X0.bind(null,Vt,!0,a),a.dispatch=n,[e,n]};var Ur={readContext:cn,use:Du,useCallback:Y5,useContext:cn,useEffect:G0,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:Mu,useRef:H5,useState:function(){return Mu(Wi)},useDebugValue:Q0,useDeferredValue:function(e,n){var a=Ve();return X5(a,ne.memoizedState,e,n)},useTransition:function(){var e=Mu(Wi)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Go(e),n]},useSyncExternalStore:w5,useId:th};Ur.useCacheRefresh=eh,Ur.useMemoCache=j0,Ur.useHostTransitionStatus=$0,Ur.useFormState=z5,Ur.useActionState=z5,Ur.useOptimistic=function(e,n){var a=Ve();return N5(a,ne,e,n)};var ja={readContext:cn,use:Du,useCallback:Y5,useContext:cn,useEffect:G0,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:H0,useRef:H5,useState:function(){return H0(Wi)},useDebugValue:Q0,useDeferredValue:function(e,n){var a=Ve();return ne===null?K0(a,e,n):X5(a,ne.memoizedState,e,n)},useTransition:function(){var e=H0(Wi)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Go(e),n]},useSyncExternalStore:w5,useId:th};ja.useCacheRefresh=eh,ja.useMemoCache=j0,ja.useHostTransitionStatus=$0,ja.useFormState=B5,ja.useActionState=B5,ja.useOptimistic=function(e,n){var a=Ve();return ne!==null?N5(a,ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function W0(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:D({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Z0={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=On(),h=jr(o);h.payload=n,a!=null&&(h.callback=a),n=Br(e,h,o),n!==null&&(vn(n,e,o),$o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=On(),h=jr(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Br(e,h,o),n!==null&&(vn(n,e,o),$o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=On(),o=jr(a);o.tag=2,n!=null&&(o.callback=n),n=Br(e,o,a),n!==null&&(vn(n,e,a),$o(n,e,a))}};function ah(e,n,a,o,h,d,C){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,C):n.prototype&&n.prototype.isPureReactComponent?!Vo(a,o)||!Vo(h,d):!0}function sh(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Z0.enqueueReplaceState(n,n.state,null)}function Ba(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=D({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function oh(e){Lu(e)}function lh(e){console.error(e)}function uh(e){Lu(e)}function Ou(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ch(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function J0(e,n,a){return a=jr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ou(e,n)},a}function hh(e){return e=jr(e),e.tag=3,e}function fh(e,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){ch(n,a,o)}}var C=a.stateNode;C!==null&&typeof C.componentDidCatch=="function"&&(e.callback=function(){ch(n,a,o),typeof h!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Rd(e,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yo(n,a,h,!0),a=Zn.current,a!==null){switch(a.tag){case 13:return bi===null?L1():a.alternate===null&&Ae===0&&(Ae=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===D0?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),k1(e,o,h)),!1;case 22:return a.flags|=65536,o===D0?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),k1(e,o,h)),!1}throw Error(s(435,a.tag))}return k1(e,o,h),L1(),!1}if(Xt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==x0&&(e=Error(s(422),{cause:o}),Uo($n(e,a)))):(o!==x0&&(n=Error(s(423),{cause:o}),Uo($n(n,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=$n(o,a),h=J0(e.stateNode,o,h),p1(e,h),Ae!==4&&(Ae=2)),!1;var d=Error(s(520),{cause:o});if(d=$n(d,a),il===null?il=[d]:il.push(d),Ae!==4&&(Ae=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=J0(a.stateNode,o,e),p1(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Kr===null||!Kr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=hh(h),fh(h,e,a,o),p1(a,h),!1}a=a.return}while(a!==null);return!1}var dh=Error(s(461)),Ke=!1;function rn(e,n,a,o){n.child=e===null?v5(n,null,a,o):ka(n,e.child,a,o)}function ph(e,n,a,o,h){a=a.render;var d=n.ref;if("ref"in o){var C={};for(var E in o)E!=="ref"&&(C[E]=o[E])}else C=o;return qa(n),o=k0(e,n,a,C,d,h),E=U0(),e!==null&&!Ke?(P0(e,n,h),Zi(e,n,h)):(Xt&&E&&w0(n),n.flags|=1,rn(e,n,o,h),n.child)}function mh(e,n,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!T1(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,gh(e,n,d,o,h)):(e=ju(a.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!l1(e,h)){var C=d.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(C,o)&&e.ref===n.ref)return Zi(e,n,h)}return n.flags|=1,e=Gr(d,o),e.ref=n.ref,e.return=n,n.child=e}function gh(e,n,a,o,h){if(e!==null){var d=e.memoizedProps;if(Vo(d,o)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=o=d,l1(e,h))(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,Zi(e,n,h)}return t1(e,n,a,o,h)}function yh(e,n,a){var o=n.pendingProps,h=o.children,d=(n.stateNode._pendingVisibility&2)!==0,C=e!==null?e.memoizedState:null;if(Ko(e,n),o.mode==="hidden"||d){if((n.flags&128)!==0){if(o=C!==null?C.baseLanes|a:a,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return vh(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(n,C!==null?C.cachePool:null),C!==null?C5(n,C):M0(),_5(n);else return n.lanes=n.childLanes=536870912,vh(e,n,C!==null?C.baseLanes|a:a,a)}else C!==null?(bu(n,C.cachePool),C5(n,C),Or(),n.memoizedState=null):(e!==null&&bu(n,null),M0(),Or());return rn(e,n,h,a),n.child}function vh(e,n,a,o){var h=L0();return h=h===null?null:{parent:je._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&bu(n,null),M0(),_5(n),e!==null&&Yo(e,n,o,!0),null}function Ko(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function t1(e,n,a,o,h){return qa(n),a=k0(e,n,a,o,void 0,h),o=U0(),e!==null&&!Ke?(P0(e,n,h),Zi(e,n,h)):(Xt&&o&&w0(n),n.flags|=1,rn(e,n,a,h),n.child)}function Ch(e,n,a,o,h,d){return qa(n),n.updateQueue=null,a=b5(n,o,a,h),S5(e),o=U0(),e!==null&&!Ke?(P0(e,n,d),Zi(e,n,d)):(Xt&&o&&w0(n),n.flags|=1,rn(e,n,a,d),n.child)}function _h(e,n,a,o,h){if(qa(n),n.stateNode===null){var d=ws,C=a.contextType;typeof C=="object"&&C!==null&&(d=cn(C)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Z0,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},f1(n),C=a.contextType,d.context=typeof C=="object"&&C!==null?cn(C):ws,d.state=n.memoizedState,C=a.getDerivedStateFromProps,typeof C=="function"&&(W0(n,a,C,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(C=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),C!==d.state&&Z0.enqueueReplaceState(d,d.state,null),Wo(n,o,d,h),Xo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,x=Ba(a,E);d.props=x;var P=d.context,W=a.contextType;C=ws,typeof W=="object"&&W!==null&&(C=cn(W));var tt=a.getDerivedStateFromProps;W=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,W||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||P!==C)&&sh(n,d,o,C),zr=!1;var Q=n.memoizedState;d.state=Q,Wo(n,o,d,h),Xo(),P=n.memoizedState,E||Q!==P||zr?(typeof tt=="function"&&(W0(n,a,tt,o),P=n.memoizedState),(x=zr||ah(n,a,x,o,Q,P,C))?(W||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=P),d.props=o,d.state=P,d.context=C,o=x):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,d1(e,n),C=n.memoizedProps,W=Ba(a,C),d.props=W,tt=n.pendingProps,Q=d.context,P=a.contextType,x=ws,typeof P=="object"&&P!==null&&(x=cn(P)),E=a.getDerivedStateFromProps,(P=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C!==tt||Q!==x)&&sh(n,d,o,x),zr=!1,Q=n.memoizedState,d.state=Q,Wo(n,o,d,h),Xo();var X=n.memoizedState;C!==tt||Q!==X||zr||e!==null&&e.dependencies!==null&&ku(e.dependencies)?(typeof E=="function"&&(W0(n,a,E,o),X=n.memoizedState),(W=zr||ah(n,a,W,o,Q,X,x)||e!==null&&e.dependencies!==null&&ku(e.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,X,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,X,x)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||C===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=X),d.props=o,d.state=X,d.context=x,o=W):(typeof d.componentDidUpdate!="function"||C===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ko(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ka(n,e.child,null,h),n.child=ka(n,null,a,h)):rn(e,n,a,h),n.memoizedState=d.state,e=n.child):e=Zi(e,n,h),e}function Eh(e,n,a,o){return ko(),n.flags|=256,rn(e,n,a,o),n.child}var e1={dehydrated:null,treeContext:null,retryLane:0};function n1(e){return{baseLanes:e,cachePool:A5()}}function i1(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function Th(e,n,a){var o=n.pendingProps,h=!1,d=(n.flags&128)!==0,C;if((C=d)||(C=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),C&&(h=!0,n.flags&=-129),C=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xt){if(h?Lr(n):Or(),Xt){var E=nn,x;if(x=E){t:{for(x=E,E=Si;x.nodeType!==8;){if(!E){E=null;break t}if(x=hi(x.nextSibling),x===null){E=null;break t}}E=x}E!==null?(n.memoizedState={dehydrated:E,treeContext:Va!==null?{id:Yi,overflow:$i}:null,retryLane:536870912},x=ei(18,null,null,0),x.stateNode=E,x.return=n,n.child=x,yn=n,nn=null,x=!0):x=!1}x||Oa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Xi(n)}return E=o.children,o=o.fallback,h?(Or(),h=n.mode,E=a1({mode:"hidden",children:E},h),o=Ga(o,h,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,h=n.child,h.memoizedState=n1(a),h.childLanes=i1(e,C,a),n.memoizedState=e1,o):(Lr(n),r1(n,E))}if(x=e.memoizedState,x!==null&&(E=x.dehydrated,E!==null)){if(d)n.flags&256?(Lr(n),n.flags&=-257,n=s1(e,n,a)):n.memoizedState!==null?(Or(),n.child=e.child,n.flags|=128,n=null):(Or(),h=o.fallback,E=n.mode,o=a1({mode:"visible",children:o.children},E),h=Ga(h,E,a,null),h.flags|=2,o.return=n,h.return=n,o.sibling=h,n.child=o,ka(n,e.child,null,a),o=n.child,o.memoizedState=n1(a),o.childLanes=i1(e,C,a),n.memoizedState=e1,n=h);else if(Lr(n),E.data==="$!"){if(C=E.nextSibling&&E.nextSibling.dataset,C)var P=C.dgst;C=P,o=Error(s(419)),o.stack="",o.digest=C,Uo({value:o,source:null,stack:null}),n=s1(e,n,a)}else if(Ke||Yo(e,n,a,!1),C=(a&e.childLanes)!==0,Ke||C){if(C=ue,C!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(C.suspendedLanes|a))!==0?0:o,o!==0&&o!==x.retryLane)throw x.retryLane=o,Vr(e,o),vn(C,e,o),dh}E.data==="$?"||L1(),n=s1(e,n,a)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=Hd.bind(null,e),E._reactRetry=n,n=null):(e=x.treeContext,nn=hi(E.nextSibling),yn=n,Xt=!0,ui=null,Si=!1,e!==null&&(Xn[Wn++]=Yi,Xn[Wn++]=$i,Xn[Wn++]=Va,Yi=e.id,$i=e.overflow,Va=n),n=r1(n,o.children),n.flags|=4096);return n}return h?(Or(),h=o.fallback,E=n.mode,x=e.child,P=x.sibling,o=Gr(x,{mode:"hidden",children:o.children}),o.subtreeFlags=x.subtreeFlags&31457280,P!==null?h=Gr(P,h):(h=Ga(h,E,a,null),h.flags|=2),h.return=n,o.return=n,o.sibling=h,n.child=o,o=h,h=n.child,E=e.child.memoizedState,E===null?E=n1(a):(x=E.cachePool,x!==null?(P=je._currentValue,x=x.parent!==P?{parent:P,pool:P}:x):x=A5(),E={baseLanes:E.baseLanes|a,cachePool:x}),h.memoizedState=E,h.childLanes=i1(e,C,a),n.memoizedState=e1,o):(Lr(n),a=e.child,e=a.sibling,a=Gr(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(C=n.deletions,C===null?(n.deletions=[e],n.flags|=16):C.push(e)),n.child=a,n.memoizedState=null,a)}function r1(e,n){return n=a1({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function a1(e,n){return Yh(e,n,0,null)}function s1(e,n,a){return ka(n,e.child,null,a),e=r1(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ah(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),c1(e.return,n,a)}function o1(e,n,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function Sh(e,n,a){var o=n.pendingProps,h=o.revealOrder,d=o.tail;if(rn(e,n,o.children,a),o=ze.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ah(e,a,n);else if(e.tag===19)Ah(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Yt(ze,o),h){case"forwards":for(a=n.child,h=null;a!==null;)e=a.alternate,e!==null&&Su(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),o1(n,!1,h,a,d);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&Su(e)===null){n.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}o1(n,!0,a,null,d);break;case"together":o1(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Qr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Yo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gr(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gr(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function l1(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ku(e)))}function xd(e,n,a){switch(n.tag){case 3:un(n,n.stateNode.containerInfo),Pr(n,je,e.memoizedState.cache),ko();break;case 27:case 5:ai(n);break;case 4:un(n,n.stateNode.containerInfo);break;case 10:Pr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Lr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Th(e,n,a):(Lr(n),e=Zi(e,n,a),e!==null?e.sibling:null);Lr(n);break;case 19:var h=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yo(e,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return Sh(e,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Yt(ze,ze.current),o)break;return null;case 22:case 23:return n.lanes=0,yh(e,n,a);case 24:Pr(n,je,e.memoizedState.cache)}return Zi(e,n,a)}function bh(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ke=!0;else{if(!l1(e,a)&&(n.flags&128)===0)return Ke=!1,xd(e,n,a);Ke=(e.flags&131072)!==0}else Ke=!1,Xt&&(n.flags&1048576)!==0&&u5(n,Cu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,h=o._init;if(o=h(o._payload),n.type=o,typeof o=="function")T1(o)?(e=Ba(o,e),n.tag=1,n=_h(null,n,o,e,a)):(n.tag=0,n=t1(null,n,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===k){n.tag=11,n=ph(null,n,o,e,a);break t}else if(h===G){n.tag=14,n=mh(null,n,o,e,a);break t}}throw n=R(o)||o,Error(s(306,n,""))}}return n;case 0:return t1(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Ba(o,n.pendingProps),_h(e,n,o,h,a);case 3:t:{if(un(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;h=n.memoizedState,o=h.element,d1(e,n),Wo(n,d,null,a);var C=n.memoizedState;if(d=C.cache,Pr(n,je,d),d!==h.cache&&h1(n,[je],a,!0),Xo(),d=C.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:C.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Eh(e,n,d,a);break t}else if(d!==o){o=$n(Error(s(424)),n),Uo(o),n=Eh(e,n,d,a);break t}else for(nn=hi(n.stateNode.containerInfo.firstChild),yn=n,Xt=!0,ui=null,Si=!0,a=v5(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),d===o){n=Zi(e,n,a);break t}rn(e,n,d,a)}n=n.child}return n;case 26:return Ko(e,n),e===null?(a=x3(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xt||(a=n.type,e=n.pendingProps,o=Zu(ee.current).createElement(a),o[Fe]=n,o[ke]=e,an(o,a,e),ge(o),n.stateNode=o):n.memoizedState=x3(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ai(n),e===null&&Xt&&(o=n.stateNode=b3(n.type,n.pendingProps,ee.current),yn=n,Si=!0,nn=hi(o.firstChild)),o=n.pendingProps.children,e!==null||Xt?rn(e,n,o,a):n.child=ka(n,null,o,a),Ko(e,n),n.child;case 5:return e===null&&Xt&&((h=o=nn)&&(o=r8(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,yn=n,nn=hi(o.firstChild),Si=!1,h=!0):h=!1),h||Oa(n)),ai(n),h=n.type,d=n.pendingProps,C=e!==null?e.memoizedProps:null,o=d.children,Y1(h,d)?o=null:C!==null&&Y1(h,C)&&(n.flags|=32),n.memoizedState!==null&&(h=k0(e,n,Ed,null,null,a),fl._currentValue=h),Ko(e,n),rn(e,n,o,a),n.child;case 6:return e===null&&Xt&&((e=a=nn)&&(a=a8(a,n.pendingProps,Si),a!==null?(n.stateNode=a,yn=n,nn=null,e=!0):e=!1),e||Oa(n)),null;case 13:return Th(e,n,a);case 4:return un(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ka(n,null,o,a):rn(e,n,o,a),n.child;case 11:return ph(e,n,n.type,n.pendingProps,a);case 7:return rn(e,n,n.pendingProps,a),n.child;case 8:return rn(e,n,n.pendingProps.children,a),n.child;case 12:return rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pr(n,n.type,o.value),rn(e,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,qa(n),h=cn(h),o=o(h),n.flags|=1,rn(e,n,o,a),n.child;case 14:return mh(e,n,n.type,n.pendingProps,a);case 15:return gh(e,n,n.type,n.pendingProps,a);case 19:return Sh(e,n,a);case 22:return yh(e,n,a);case 24:return qa(n),o=cn(je),e===null?(h=L0(),h===null&&(h=ue,d=N0(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),n.memoizedState={parent:o,cache:h},f1(n),Pr(n,je,h)):((e.lanes&a)!==0&&(d1(e,n),Wo(n,null,null,a),Xo()),h=e.memoizedState,d=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Pr(n,je,o)):(o=d.cache,Pr(n,je,o),o!==h.cache&&h1(n,[je],a,!0))),rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var u1=kt(null),Ha=null,Ji=null;function Pr(e,n,a){Yt(u1,n._currentValue),n._currentValue=a}function tr(e){e._currentValue=u1.current,de(u1)}function c1(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function h1(e,n,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var C=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var x=0;x<n.length;x++)if(E.context===n[x]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),c1(d.return,a,e),o||(C=null);break t}d=E.next}}else if(h.tag===18){if(C=h.return,C===null)throw Error(s(341));C.lanes|=a,d=C.alternate,d!==null&&(d.lanes|=a),c1(C,a,e),C=null}else C=h.child;if(C!==null)C.return=h;else for(C=h;C!==null;){if(C===e){C=null;break}if(h=C.sibling,h!==null){h.return=C.return,C=h;break}C=C.return}h=C}}function Yo(e,n,a,o){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var C=h.alternate;if(C===null)throw Error(s(387));if(C=C.memoizedProps,C!==null){var E=h.type;In(h.pendingProps.value,C.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ze.current){if(C=h.alternate,C===null)throw Error(s(387));C.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(fl):e=[fl])}h=h.return}e!==null&&h1(n,e,a,o),n.flags|=262144}function ku(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ha=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return wh(Ha,e)}function Uu(e,n){return Ha===null&&qa(e),wh(e,n)}function wh(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var zr=!1;function f1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function d1(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Br(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ve&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=yu(e),o5(e,null,a),n}return gu(e,o,n,a),yu(e)}function $o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ar(e,a)}}function p1(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var C={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=C:d=d.next=C,a=a.next}while(a!==null);d===null?h=d=n:d=d.next=n}else h=d=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var m1=!1;function Xo(){if(m1){var e=Ns;if(e!==null)throw e}}function Wo(e,n,a,o){m1=!1;var h=e.updateQueue;zr=!1;var d=h.firstBaseUpdate,C=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var x=E,P=x.next;x.next=null,C===null?d=P:C.next=P,C=x;var W=e.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==C&&(E===null?W.firstBaseUpdate=P:E.next=P,W.lastBaseUpdate=x))}if(d!==null){var tt=h.baseState;C=0,W=P=x=null,E=d;do{var Q=E.lane&-536870913,X=Q!==E.lane;if(X?(Ft&Q)===Q:(o&Q)===Q){Q!==0&&Q===Is&&(m1=!0),W!==null&&(W=W.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var pt=e,Rt=E;Q=n;var Se=a;switch(Rt.tag){case 1:if(pt=Rt.payload,typeof pt=="function"){tt=pt.call(Se,tt,Q);break t}tt=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=Rt.payload,Q=typeof pt=="function"?pt.call(Se,tt,Q):pt,Q==null)break t;tt=D({},tt,Q);break t;case 2:zr=!0}}Q=E.callback,Q!==null&&(e.flags|=64,X&&(e.flags|=8192),X=h.callbacks,X===null?h.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(P=W=X,x=tt):W=W.next=X,C|=Q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;X=E,E=X.next,X.next=null,h.lastBaseUpdate=X,h.shared.pending=null}}while(!0);W===null&&(x=tt),h.baseState=x,h.firstBaseUpdate=P,h.lastBaseUpdate=W,d===null&&(h.shared.lanes=0),Qr|=C,e.lanes=C,e.memoizedState=tt}}function Rh(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function xh(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rh(a[e],n)}function Zo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,C=a.inst;o=d(),C.destroy=o}a=a.next}while(a!==h)}}catch(E){re(n,n.return,E)}}function Hr(e,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var C=o.inst,E=C.destroy;if(E!==void 0){C.destroy=void 0,h=n;var x=a;try{E()}catch(P){re(h,x,P)}}}o=o.next}while(o!==d)}}catch(P){re(n,n.return,P)}}function Dh(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xh(n,a)}catch(o){re(e,e.return,o)}}}function Mh(e,n,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){re(e,n,o)}}function Fa(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=o;break;default:h=o}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){re(e,n,d)}}function Nn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){re(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){re(e,n,h)}else a.current=null}function Ih(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){re(e,e.return,h)}}function Nh(e,n,a){try{var o=e.stateNode;Jd(o,e.type,a,n),o[ke]=n}catch(h){re(e,e.return,h)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function g1(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function y1(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(y1(e,n,a),e=e.sibling;e!==null;)y1(e,n,a),e=e.sibling}function Pu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Pu(e,n,a),e=e.sibling;e!==null;)Pu(e,n,a),e=e.sibling}var er=!1,Te=!1,v1=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,Ye=null,Oh=!1;function Dd(e,n){if(e=e.containerInfo,Q1=rc,e=Z2(e),_0(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var C=0,E=-1,x=-1,P=0,W=0,tt=e,Q=null;e:for(;;){for(var X;tt!==a||h!==0&&tt.nodeType!==3||(E=C+h),tt!==d||o!==0&&tt.nodeType!==3||(x=C+o),tt.nodeType===3&&(C+=tt.nodeValue.length),(X=tt.firstChild)!==null;)Q=tt,tt=X;for(;;){if(tt===e)break e;if(Q===a&&++P===h&&(E=C),Q===d&&++W===o&&(x=C),(X=tt.nextSibling)!==null)break;tt=Q,Q=tt.parentNode}tt=X}a=E===-1||x===-1?null:{start:E,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(K1={focusedElem:e,selectionRange:a},rc=!1,Ye=n;Ye!==null;)if(n=Ye,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ye=e;else for(;Ye!==null;){switch(n=Ye,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var pt=Ba(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(pt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Rt){re(a,a.return,Rt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)W1(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":W1(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ye=e;break}Ye=n.return}return pt=Oh,Oh=!1,pt}function kh(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ir(e,a),o&4&&Zo(5,a);break;case 1:if(ir(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){re(a,a.return,E)}else{var h=Ba(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){re(a,a.return,E)}}o&64&&Dh(a),o&512&&Fa(a,a.return);break;case 3:if(ir(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{xh(o,e)}catch(E){re(a,a.return,E)}}break;case 26:ir(e,a),o&512&&Fa(a,a.return);break;case 27:case 5:ir(e,a),n===null&&o&4&&Ih(a),o&512&&Fa(a,a.return);break;case 12:ir(e,a);break;case 13:ir(e,a),o&4&&zh(e,a);break;case 22:if(h=a.memoizedState!==null||er,!h){n=n!==null&&n.memoizedState!==null||Te;var d=er,C=Te;er=h,(Te=n)&&!C?qr(e,a,(a.subtreeFlags&8772)!==0):ir(e,a),er=d,Te=C}o&512&&(a.memoizedProps.mode==="manual"?Fa(a,a.return):Nn(a,a.return));break;default:ir(e,a)}}function Uh(e){var n=e.alternate;n!==null&&(e.alternate=null,Uh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_a(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Vn=!1;function nr(e,n,a){for(a=a.child;a!==null;)Ph(e,n,a),a=a.sibling}function Ph(e,n,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 26:Te||Nn(a,n),nr(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Nn(a,n);var o=Le,h=Vn;for(Le=a.stateNode,nr(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);_a(a),Le=o,Vn=h;break;case 5:Te||Nn(a,n);case 6:h=Le;var d=Vn;if(Le=null,nr(e,n,a),Le=h,Vn=d,Le!==null)if(Vn)try{e=Le,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(C){re(a,n,C)}else try{Le.removeChild(a.stateNode)}catch(C){re(a,n,C)}break;case 18:Le!==null&&(Vn?(n=Le,a=a.stateNode,n.nodeType===8?X1(n.parentNode,a):n.nodeType===1&&X1(n,a),gl(n)):X1(Le,a.stateNode));break;case 4:o=Le,h=Vn,Le=a.stateNode.containerInfo,Vn=!0,nr(e,n,a),Le=o,Vn=h;break;case 0:case 11:case 14:case 15:Te||Hr(2,a,n),Te||Hr(4,a,n),nr(e,n,a);break;case 1:Te||(Nn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mh(a,n,o)),nr(e,n,a);break;case 21:nr(e,n,a);break;case 22:Te||Nn(a,n),Te=(o=Te)||a.memoizedState!==null,nr(e,n,a),Te=o;break;default:nr(e,n,a)}}function zh(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gl(e)}catch(a){re(n,n.return,a)}}function Md(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lh),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lh),n;default:throw Error(s(435,e.tag))}}function C1(e,n){var a=Md(e);n.forEach(function(o){var h=qd.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,C=n,E=C;t:for(;E!==null;){switch(E.tag){case 27:case 5:Le=E.stateNode,Vn=!1;break t;case 3:Le=E.stateNode.containerInfo,Vn=!0;break t;case 4:Le=E.stateNode.containerInfo,Vn=!0;break t}E=E.return}if(Le===null)throw Error(s(160));Ph(d,C,h),Le=null,Vn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)jh(n,e),n=n.sibling}var ci=null;function jh(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),ti(e),o&4&&(Hr(3,e,e.return),Zo(3,e),Hr(5,e,e.return));break;case 1:Jn(n,e),ti(e),o&512&&(Te||a===null||Nn(a,a.return)),o&64&&er&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=ci;if(Jn(n,e),ti(e),o&512&&(Te||a===null||Nn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[br]||d[Fe]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),an(d,o,a),d[Fe]=e,ge(d),o=d;break t;case"link":var C=I3("link","href",h).get(o+(a.href||""));if(C){for(var E=0;E<C.length;E++)if(d=C[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){C.splice(E,1);break e}}d=h.createElement(o),an(d,o,a),h.head.appendChild(d);break;case"meta":if(C=I3("meta","content",h).get(o+(a.content||""))){for(E=0;E<C.length;E++)if(d=C[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){C.splice(E,1);break e}}d=h.createElement(o),an(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Fe]=e,ge(d),o=d}e.stateNode=o}else N3(h,e.type,e.stateNode);else e.stateNode=M3(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?N3(h,e.type,e.stateNode):M3(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nh(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var x=h.firstChild;x;){var P=x.nextSibling,W=x.nodeName;x[br]||W==="HEAD"||W==="BODY"||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&x.rel.toLowerCase()==="stylesheet"||h.removeChild(x),x=P}for(var tt=e.type,Q=h.attributes;Q.length;)h.removeAttributeNode(Q[0]);an(h,tt,d),h[Fe]=e,h[ke]=d}catch(pt){re(e,e.return,pt)}}case 5:if(Jn(n,e),ti(e),o&512&&(Te||a===null||Nn(a,a.return)),e.flags&32){h=e.stateNode;try{Fn(h,"")}catch(pt){re(e,e.return,pt)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Nh(e,h,a!==null?a.memoizedProps:h)),o&1024&&(v1=!0);break;case 6:if(Jn(n,e),ti(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(pt){re(e,e.return,pt)}}break;case 3:if(ec=null,h=ci,ci=Ju(n.containerInfo),Jn(n,e),ci=h,ti(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gl(n.containerInfo)}catch(pt){re(e,e.return,pt)}v1&&(v1=!1,Bh(e));break;case 4:o=ci,ci=Ju(e.stateNode.containerInfo),Jn(n,e),ti(e),ci=o;break;case 12:Jn(n,e),ti(e);break;case 13:Jn(n,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(x1=tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,C1(e,o)));break;case 22:if(o&512&&(Te||a===null||Nn(a,a.return)),x=e.memoizedState!==null,P=a!==null&&a.memoizedState!==null,W=er,tt=Te,er=W||x,Te=tt||P,Jn(n,e),Te=tt,er=W,ti(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=x?n._visibility&-2:n._visibility|1,x&&(n=er||Te,a===null||P||n||ks(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){P=a=n;try{if(h=P.stateNode,x)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{C=P.stateNode,E=P.memoizedProps.style;var X=E!=null&&E.hasOwnProperty("display")?E.display:null;C.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(pt){re(P,P.return,pt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=x?"":P.memoizedProps}catch(pt){re(P,P.return,pt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,C1(e,a))));break;case 19:Jn(n,e),ti(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,C1(e,o)));break;case 21:break;default:Jn(n,e),ti(e)}}function ti(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Vh(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var h=o.stateNode,d=g1(e);Pu(e,d,h);break;case 5:var C=o.stateNode;o.flags&32&&(Fn(C,""),o.flags&=-33);var E=g1(e);Pu(e,E,C);break;case 3:case 4:var x=o.stateNode.containerInfo,P=g1(e);y1(e,P,x);break;default:throw Error(s(161))}}}catch(W){re(e,e.return,W)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bh(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ir(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kh(e,n.alternate,n),n=n.sibling}function ks(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Hr(4,n,n.return),ks(n);break;case 1:Nn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mh(n,n.return,a),ks(n);break;case 26:case 27:case 5:Nn(n,n.return),ks(n);break;case 22:Nn(n,n.return),n.memoizedState===null&&ks(n);break;default:ks(n)}e=e.sibling}}function qr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,d=n,C=d.flags;switch(d.tag){case 0:case 11:case 15:qr(h,d,a),Zo(4,d);break;case 1:if(qr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){re(o,o.return,P)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)Rh(x[h],E)}catch(P){re(o,o.return,P)}}a&&C&64&&Dh(d),Fa(d,d.return);break;case 26:case 27:case 5:qr(h,d,a),a&&o===null&&C&4&&Ih(d),Fa(d,d.return);break;case 12:qr(h,d,a);break;case 13:qr(h,d,a),a&&C&4&&zh(h,d);break;case 22:d.memoizedState===null&&qr(h,d,a),Fa(d,d.return);break;default:qr(h,d,a)}n=n.sibling}}function _1(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function E1(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function Fr(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hh(e,n,a,o),n=n.sibling}function Hh(e,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Fr(e,n,a,o),h&2048&&Zo(9,n);break;case 3:Fr(e,n,a,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e)));break;case 12:if(h&2048){Fr(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,C=d.id,E=d.onPostCommit;typeof E=="function"&&E(C,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){re(n,n.return,x)}}else Fr(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Fr(e,n,a,o):Jo(e,n):d._visibility&4?Fr(e,n,a,o):(d._visibility|=4,Us(e,n,a,o,(n.subtreeFlags&10256)!==0)),h&2048&&_1(n.alternate,n);break;case 24:Fr(e,n,a,o),h&2048&&E1(n.alternate,n);break;default:Fr(e,n,a,o)}}function Us(e,n,a,o,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,C=n,E=a,x=o,P=C.flags;switch(C.tag){case 0:case 11:case 15:Us(d,C,E,x,h),Zo(8,C);break;case 23:break;case 22:var W=C.stateNode;C.memoizedState!==null?W._visibility&4?Us(d,C,E,x,h):Jo(d,C):(W._visibility|=4,Us(d,C,E,x,h)),h&&P&2048&&_1(C.alternate,C);break;case 24:Us(d,C,E,x,h),h&&P&2048&&E1(C.alternate,C);break;default:Us(d,C,E,x,h)}n=n.sibling}}function Jo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,h=o.flags;switch(o.tag){case 22:Jo(a,o),h&2048&&_1(o.alternate,o);break;case 24:Jo(a,o),h&2048&&E1(o.alternate,o);break;default:Jo(a,o)}n=n.sibling}}var tl=8192;function Ps(e){if(e.subtreeFlags&tl)for(e=e.child;e!==null;)qh(e),e=e.sibling}function qh(e){switch(e.tag){case 26:Ps(e),e.flags&tl&&e.memoizedState!==null&&v8(ci,e.memoizedState,e.memoizedProps);break;case 5:Ps(e);break;case 3:case 4:var n=ci;ci=Ju(e.stateNode.containerInfo),Ps(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=tl,tl=16777216,Ps(e),tl=n):Ps(e));break;default:Ps(e)}}function Fh(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function el(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ye=o,Qh(o,e)}Fh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gh(e),e=e.sibling}function Gh(e){switch(e.tag){case 0:case 11:case 15:el(e),e.flags&2048&&Hr(9,e,e.return);break;case 3:el(e);break;case 12:el(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,zu(e)):el(e);break;default:el(e)}}function zu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ye=o,Qh(o,e)}Fh(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Hr(8,n,n.return),zu(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,zu(n));break;default:zu(n)}e=e.sibling}}function Qh(e,n){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:Hr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ye=o;else t:for(a=e;Ye!==null;){o=Ye;var h=o.sibling,d=o.return;if(Uh(o),o===a){Ye=null;break t}if(h!==null){h.return=d,Ye=h;break t}Ye=d}}}function Id(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new Id(e,n,a,o)}function T1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gr(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kh(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ju(e,n,a,o,h,d){var C=0;if(o=e,typeof e=="function")T1(e)&&(C=1);else if(typeof e=="string")C=g8(e,a,Pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return Ga(a.children,h,d,n);case y:C=8,h|=24;break;case _:return e=ei(12,a,n,h|2),e.elementType=_,e.lanes=d,e;case $:return e=ei(13,a,n,h),e.elementType=$,e.lanes=d,e;case z:return e=ei(19,a,n,h),e.elementType=z,e.lanes=d,e;case K:return Yh(a,h,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case b:case N:C=10;break t;case w:C=9;break t;case k:C=11;break t;case G:C=14;break t;case O:C=16,o=null;break t}C=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(C,a,n,h),n.elementType=e,n.type=o,n.lanes=d,n}function Ga(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function Yh(e,n,a,o){e=ei(22,e,o,n),e.elementType=K,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var C=Vr(d,2);C!==null&&(h._pendingVisibility|=2,vn(C,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var C=Vr(d,2);C!==null&&(h._pendingVisibility&=-3,vn(C,d,2))}}};return e.stateNode=h,e}function A1(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function S1(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rr(e){e.flags|=4}function $h(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V3(n)){if(n=Zn.current,n!==null&&((Ft&4194176)===Ft?bi!==null:(Ft&62914560)!==Ft&&(Ft&536870912)===0||n!==bi))throw zo=D0,f5;e.flags|=8192}}function Bu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Er():536870912,e.lanes|=n,js|=n)}function nl(e,n){if(!Xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&31457280,o|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Nd(e,n,a){var o=n.pendingProps;switch(R0(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(n),null;case 1:return ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),tr(je),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Oo(n)?rr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ui!==null&&(N1(ui),ui=null))),ye(n),null;case 26:return a=n.memoizedState,e===null?(rr(n),a!==null?(ye(n),$h(n,a)):(ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(rr(n),ye(n),$h(n,a)):(ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&rr(n),ye(n),n.flags&=-16777217),null;case 27:jn(n),a=ee.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&rr(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ye(n),null}e=Pt.current,Oo(n)?c5(n):(e=b3(h,o,a),n.stateNode=e,rr(n))}return ye(n),null;case 5:if(jn(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&rr(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ye(n),null}if(e=Pt.current,Oo(n))c5(n);else{switch(h=Zu(ee.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Fe]=n,e[ke]=o;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(an(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&rr(n)}}return ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&rr(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ee.current,Oo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,h=yn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Fe]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C3(e.nodeValue,a)),e||Oa(n)}else e=Zu(e).createTextNode(o),e[Fe]=n,n.stateNode=e}return ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Oo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Fe]=n}else ko(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ye(n),h=!1}else ui!==null&&(N1(ui),ui=null),h=!0;if(!h)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Bu(n,n.updateQueue),ye(n),null;case 4:return Je(),e===null&&q1(n.stateNode.containerInfo),ye(n),null;case 10:return tr(n.type),ye(n),null;case 19:if(de(ze),h=n.memoizedState,h===null)return ye(n),null;if(o=(n.flags&128)!==0,d=h.rendering,d===null)if(o)nl(h,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Su(e),d!==null){for(n.flags|=128,nl(h,!1),e=d.updateQueue,n.updateQueue=e,Bu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kh(a,e),a=a.sibling;return Yt(ze,ze.current&1|2),n.child}e=e.sibling}h.tail!==null&&tn()>Hu&&(n.flags|=128,o=!0,nl(h,!1),n.lanes=4194304)}else{if(!o)if(e=Su(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Bu(n,e),nl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Xt)return ye(n),null}else 2*tn()-h.renderingStartTime>Hu&&a!==536870912&&(n.flags|=128,o=!0,nl(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=tn(),n.sibling=null,e=ze.current,Yt(ze,o?e&1|2:e&1),n):(ye(n),null);case 22:case 23:return Xi(n),I0(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ye(n),n.subtreeFlags&6&&(n.flags|=8192)):ye(n),a=n.updateQueue,a!==null&&Bu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&de(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),tr(je),ye(n),null;case 25:return null}throw Error(s(156,n.tag))}function Vd(e,n){switch(R0(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tr(je),Je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return jn(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ko()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(ze),null;case 4:return Je(),null;case 10:return tr(n.type),null;case 22:case 23:return Xi(n),I0(),e!==null&&de(Ua),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return tr(je),null;case 25:return null;default:return null}}function Xh(e,n){switch(R0(n),n.tag){case 3:tr(je),Je();break;case 26:case 27:case 5:jn(n);break;case 4:Je();break;case 13:Xi(n);break;case 19:de(ze);break;case 10:tr(n.type);break;case 22:case 23:Xi(n),I0(),e!==null&&de(Ua);break;case 24:tr(je)}}var Ld={getCacheForType:function(e){var n=cn(je),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Od=typeof WeakMap=="function"?WeakMap:Map,ve=0,ue=null,Ot=null,Ft=0,ce=0,Ln=null,ar=!1,zs=!1,b1=!1,sr=0,Ae=0,Qr=0,Qa=0,w1=0,ni=0,js=0,il=null,Ri=null,R1=!1,x1=0,Hu=1/0,qu=null,Kr=null,Fu=!1,Ka=null,rl=0,D1=0,M1=null,al=0,I1=null;function On(){if((ve&2)!==0&&Ft!==0)return Ft&-Ft;if(S.T!==null){var e=Is;return e!==0?e:z1()}return Xl()}function Wh(){ni===0&&(ni=(Ft&536870912)===0||Xt?yo():536870912);var e=Zn.current;return e!==null&&(e.flags|=32),ni}function vn(e,n,a){(e===ue&&ce===2||e.cancelPendingCommit!==null)&&(Bs(e,0),or(e,Ft,ni,!1)),Re(e,a),((ve&2)===0||e!==ue)&&(e===ue&&((ve&2)===0&&(Qa|=a),Ae===4&&or(e,Ft,ni,!1)),xi(e))}function Zh(e,n,a){if((ve&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||_r(e,n),h=o?Pd(e,n):O1(e,n,!0),d=o;do{if(h===0){zs&&!o&&or(e,n,0,!1);break}else if(h===6)or(e,n,0,!ar);else{if(a=e.current.alternate,d&&!kd(a)){h=O1(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var C=0;else C=e.pendingLanes&-536870913,C=C!==0?C:C&536870912?536870912:0;if(C!==0){n=C;t:{var E=e;h=il;var x=E.current.memoizedState.isDehydrated;if(x&&(Bs(E,C).flags|=256),C=O1(E,C,!1),C!==2){if(b1&&!x){E.errorRecoveryDisabledLanes|=d,Qa|=d,h=4;break t}d=Ri,Ri=h,d!==null&&N1(d)}h=C}if(d=!1,h!==2)continue}}if(h===1){Bs(e,0),or(e,n,0,!0);break}t:{switch(o=e,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){or(o,n,ni,!ar);break t}break;case 2:Ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(d=x1+300-tn(),10<d)){if(or(o,n,ni,!ar),Hn(o,0)!==0)break t;o.timeoutHandle=T3(Jh.bind(null,o,a,Ri,qu,R1,n,ni,Qa,js,ar,2,-0,0),d);break t}Jh(o,a,Ri,qu,R1,n,ni,Qa,js,ar,0,-0,0)}}break}while(!0);xi(e)}function N1(e){Ri===null?Ri=e:Ri.push.apply(Ri,e)}function Jh(e,n,a,o,h,d,C,E,x,P,W,tt,Q){var X=n.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:y8},qh(n),n=C8(),n!==null)){e.cancelPendingCommit=n(s3.bind(null,e,a,o,h,C,E,x,1,tt,Q)),or(e,d,C,!P);return}s3(e,a,o,h,C,E,x,W,tt,Q)}function kd(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!In(d(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(e,n,a,o){n&=~w1,n&=~Qa,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var d=31-_e(h),C=1<<d;o[d]=-1,h&=~C}a!==0&&Tr(e,a,n)}function Gu(){return(ve&6)===0?(sl(0),!1):!0}function V1(){if(Ot!==null){if(ce===0)var e=Ot.return;else e=Ot,Ji=Ha=null,z0(e),Ds=null,jo=0,e=Ot;for(;e!==null;)Xh(e.alternate,e),e=e.return;Ot=null}}function Bs(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,e8(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),V1(),ue=e,Ot=a=Gr(e.current,null),Ft=n,ce=0,Ln=null,ar=!1,zs=_r(e,n),b1=!1,js=ni=w1=Qa=Qr=Ae=0,Ri=il=null,R1=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-_e(o),d=1<<h;n|=e[h],o&=~d}return sr=n,mu(),a}function t3(e,n){Vt=null,S.H=wi,n===Po?(n=m5(),ce=3):n===f5?(n=m5(),ce=4):ce=n===dh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ln=n,Ot===null&&(Ae=1,Ou(e,$n(n,e.current)))}function e3(){var e=S.H;return S.H=wi,e===null?wi:e}function n3(){var e=S.A;return S.A=Ld,e}function L1(){Ae=4,ar||(Ft&4194176)!==Ft&&Zn.current!==null||(zs=!0),(Qr&134217727)===0&&(Qa&134217727)===0||ue===null||or(ue,Ft,ni,!1)}function O1(e,n,a){var o=ve;ve|=2;var h=e3(),d=n3();(ue!==e||Ft!==n)&&(qu=null,Bs(e,n)),n=!1;var C=Ae;t:do try{if(ce!==0&&Ot!==null){var E=Ot,x=Ln;switch(ce){case 8:V1(),C=6;break t;case 3:case 2:case 6:Zn.current===null&&(n=!0);var P=ce;if(ce=0,Ln=null,Hs(e,E,x,P),a&&zs){C=0;break t}break;default:P=ce,ce=0,Ln=null,Hs(e,E,x,P)}}Ud(),C=Ae;break}catch(W){t3(e,W)}while(!0);return n&&e.shellSuspendCounter++,Ji=Ha=null,ve=o,S.H=h,S.A=d,Ot===null&&(ue=null,Ft=0,mu()),C}function Ud(){for(;Ot!==null;)i3(Ot)}function Pd(e,n){var a=ve;ve|=2;var o=e3(),h=n3();ue!==e||Ft!==n?(qu=null,Hu=tn()+500,Bs(e,n)):zs=_r(e,n);t:do try{if(ce!==0&&Ot!==null){n=Ot;var d=Ln;e:switch(ce){case 1:ce=0,Ln=null,Hs(e,n,d,1);break;case 2:if(d5(d)){ce=0,Ln=null,r3(n);break}n=function(){ce===2&&ue===e&&(ce=7),xi(e)},d.then(n,n);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:d5(d)?(ce=0,Ln=null,r3(n)):(ce=0,Ln=null,Hs(e,n,d,7));break;case 5:var C=null;switch(Ot.tag){case 26:C=Ot.memoizedState;case 5:case 27:var E=Ot;if(!C||V3(C)){ce=0,Ln=null;var x=E.sibling;if(x!==null)Ot=x;else{var P=E.return;P!==null?(Ot=P,Qu(P)):Ot=null}break e}}ce=0,Ln=null,Hs(e,n,d,5);break;case 6:ce=0,Ln=null,Hs(e,n,d,6);break;case 8:V1(),Ae=6;break t;default:throw Error(s(462))}}zd();break}catch(W){t3(e,W)}while(!0);return Ji=Ha=null,S.H=o,S.A=h,ve=a,Ot!==null?0:(ue=null,Ft=0,mu(),Ae)}function zd(){for(;Ot!==null&&!os();)i3(Ot)}function i3(e){var n=bh(e.alternate,e,sr);e.memoizedProps=e.pendingProps,n===null?Qu(e):Ot=n}function r3(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ch(a,n,n.pendingProps,n.type,void 0,Ft);break;case 11:n=Ch(a,n,n.pendingProps,n.type.render,n.ref,Ft);break;case 5:z0(n);default:Xh(a,n),n=Ot=Kh(n,sr),n=bh(a,n,sr)}e.memoizedProps=e.pendingProps,n===null?Qu(e):Ot=n}function Hs(e,n,a,o){Ji=Ha=null,z0(n),Ds=null,jo=0;var h=n.return;try{if(Rd(e,h,n,a,Ft)){Ae=1,Ou(e,$n(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;Ae=1,Ou(e,$n(a,e.current)),Ot=null;return}n.flags&32768?(Xt||o===1?e=!0:zs||(Ft&536870912)!==0?e=!1:(ar=e=!0,(o===2||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),a3(n,e)):Qu(n)}function Qu(e){var n=e;do{if((n.flags&32768)!==0){a3(n,ar);return}e=n.return;var a=Nd(n.alternate,n,sr);if(a!==null){Ot=a;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=e}while(n!==null);Ae===0&&(Ae=5)}function a3(e,n){do{var a=Vd(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);Ae=6,Ot=null}function s3(e,n,a,o,h,d,C,E,x,P){var W=S.T,tt=ut.p;try{ut.p=2,S.T=null,jd(e,n,a,o,tt,h,d,C,E,x,P)}finally{S.T=W,ut.p=tt}}function jd(e,n,a,o,h,d,C,E){do qs();while(Ka!==null);if((ve&6)!==0)throw Error(s(327));var x=e.finishedWork;if(o=e.finishedLanes,x===null)return null;if(e.finishedWork=null,e.finishedLanes=0,x===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var P=x.lanes|x.childLanes;if(P|=S0,Yl(e,o,P,d,C,E),e===ue&&(Ot=ue=null,Ft=0),(x.subtreeFlags&10256)===0&&(x.flags&10256)===0||Fu||(Fu=!0,D1=P,M1=a,Fd(le,function(){return qs(),null})),a=(x.flags&15990)!==0,(x.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=ut.p,ut.p=2,C=ve,ve|=4,Dd(e,x),jh(x,e),cd(K1,e.containerInfo),rc=!!Q1,K1=Q1=null,e.current=x,kh(e,x.alternate,x),ya(),ve=C,ut.p=d,S.T=a):e.current=x,Fu?(Fu=!1,Ka=e,rl=o):o3(e,P),P=e.pendingLanes,P===0&&(Kr=null),Me(x.stateNode),xi(e),n!==null)for(h=e.onRecoverableError,x=0;x<n.length;x++)P=n[x],h(P.value,{componentStack:P.stack});return(rl&3)!==0&&qs(),P=e.pendingLanes,(o&4194218)!==0&&(P&42)!==0?e===I1?al++:(al=0,I1=e):al=0,sl(0),null}function o3(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function qs(){if(Ka!==null){var e=Ka,n=D1;D1=0;var a=$l(rl),o=S.T,h=ut.p;try{if(ut.p=32>a?32:a,S.T=null,Ka===null)var d=!1;else{a=M1,M1=null;var C=Ka,E=rl;if(Ka=null,rl=0,(ve&6)!==0)throw Error(s(331));var x=ve;if(ve|=4,Gh(C.current),Hh(C,C.current,E,a),ve=x,sl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(rt,C)}catch{}d=!0}return d}finally{ut.p=h,S.T=o,o3(e,n)}}return!1}function l3(e,n,a){n=$n(a,n),n=J0(e.stateNode,n,2),e=Br(e,n,2),e!==null&&(Re(e,2),xi(e))}function re(e,n,a){if(e.tag===3)l3(e,e,a);else for(;n!==null;){if(n.tag===3){l3(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kr===null||!Kr.has(o))){e=$n(a,e),a=hh(2),o=Br(n,a,2),o!==null&&(fh(a,o,n,e),Re(o,2),xi(o));break}}n=n.return}}function k1(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Od;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(b1=!0,h.add(a),e=Bd.bind(null,e,n,a),n.then(e,e))}function Bd(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ue===e&&(Ft&a)===a&&(Ae===4||Ae===3&&(Ft&62914560)===Ft&&300>tn()-x1?(ve&2)===0&&Bs(e,0):w1|=a,js===Ft&&(js=0)),xi(e)}function u3(e,n){n===0&&(n=Er()),e=Vr(e,n),e!==null&&(Re(e,n),xi(e))}function Hd(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),u3(e,a)}function qd(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),u3(e,a)}function Fd(e,n){return di(e,n)}var Ku=null,Fs=null,U1=!1,Yu=!1,P1=!1,Ya=0;function xi(e){e!==Fs&&e.next===null&&(Fs===null?Ku=Fs=e:Fs=Fs.next=e),Yu=!0,U1||(U1=!0,Qd(Gd))}function sl(e,n){if(!P1&&Yu){P1=!0;do for(var a=!1,o=Ku;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var C=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-_e(42|e)+1)-1,d&=h&~(C&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,f3(o,d))}else d=Ft,d=Hn(o,o===ue?d:0),(d&3)===0||_r(o,d)||(a=!0,f3(o,d));o=o.next}while(a);P1=!1}}function Gd(){Yu=U1=!1;var e=0;Ya!==0&&(t8()&&(e=Ya),Ya=0);for(var n=tn(),a=null,o=Ku;o!==null;){var h=o.next,d=c3(o,n);d===0?(o.next=null,a===null?Ku=h:a.next=h,h===null&&(Fs=a)):(a=o,(e!==0||(d&3)!==0)&&(Yu=!0)),o=h}sl(e)}function c3(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var C=31-_e(d),E=1<<C,x=h[C];x===-1?((E&a)===0||(E&o)!==0)&&(h[C]=ls(E,n)):x<=n&&(e.expiredLanes|=E),d&=~E}if(n=ue,a=Ft,a=Hn(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&ce===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Pi(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_r(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Pi(o),$l(a)){case 2:case 8:a=Mt;break;case 32:a=le;break;case 268435456:a=he;break;default:a=le}return o=h3.bind(null,e),a=di(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Pi(o),e.callbackPriority=2,e.callbackNode=null,2}function h3(e,n){var a=e.callbackNode;if(qs()&&e.callbackNode!==a)return null;var o=Ft;return o=Hn(e,e===ue?o:0),o===0?null:(Zh(e,o,n),c3(e,tn()),e.callbackNode!=null&&e.callbackNode===a?h3.bind(null,e):null)}function f3(e,n){if(qs())return null;Zh(e,n,!0)}function Qd(e){n8(function(){(ve&6)!==0?di(At,e):e()})}function z1(){return Ya===0&&(Ya=yo()),Ya}function d3(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function p3(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Kd(e,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var d=d3((h[ke]||null).action),C=o.submitter;C&&(n=(n=C[ke]||null)?d3(n.formAction):C.getAttribute("formAction"),n!==null&&(d=n,C=null));var E=new ms("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var x=C?p3(h,C):new FormData(h);Y0(a,{pending:!0,data:x,method:h.method,action:d},null,x)}}else typeof d=="function"&&(E.preventDefault(),x=C?p3(h,C):new FormData(h),Y0(a,{pending:!0,data:x,method:h.method,action:d},d,x))},currentTarget:h}]})}}for(var j1=0;j1<s5.length;j1++){var B1=s5[j1],Yd=B1.toLowerCase(),$d=B1[0].toUpperCase()+B1.slice(1);li(Yd,"on"+$d)}li(e5,"onAnimationEnd"),li(n5,"onAnimationIteration"),li(i5,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(fd,"onTransitionRun"),li(dd,"onTransitionStart"),li(pd,"onTransitionCancel"),li(r5,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function m3(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var C=o.length-1;0<=C;C--){var E=o[C],x=E.instance,P=E.currentTarget;if(E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch(W){Lu(W)}h.currentTarget=null,d=x}else for(C=0;C<o.length;C++){if(E=o[C],x=E.instance,P=E.currentTarget,E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch(W){Lu(W)}h.currentTarget=null,d=x}}}}function zt(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(g3(n,e,2,!1),a.add(o))}function H1(e,n,a){var o=0;n&&(o|=4),g3(a,e,o,n)}var $u="_reactListening"+Math.random().toString(36).slice(2);function q1(e){if(!e[$u]){e[$u]=!0,Co.forEach(function(a){a!=="selectionchange"&&(Xd.has(a)||H1(a,!1,e),H1(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$u]||(n[$u]=!0,H1("selectionchange",!1,n))}}function g3(e,n,a,o){switch(z3(n)){case 2:var h=T8;break;case 8:h=A8;break;default:h=n4}a=h.bind(null,n,a,e),h=void 0,!Qn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,a,{capture:!0,passive:h}):e.addEventListener(n,a,!0):h!==void 0?e.addEventListener(n,a,{passive:h}):e.addEventListener(n,a,!1)}function F1(e,n,a,o,h){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var C=o.tag;if(C===3||C===4){var E=o.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(C===4)for(C=o.return;C!==null;){var x=C.tag;if((x===3||x===4)&&(x=C.stateNode.containerInfo,x===h||x.nodeType===8&&x.parentNode===h))return;C=C.return}for(;E!==null;){if(C=oi(E),C===null)return;if(x=C.tag,x===5||x===6||x===26||x===27){o=d=C;continue t}E=E.parentNode}}o=o.return}tu(function(){var P=d,W=ps(a),tt=[];t:{var Q=a5.get(e);if(Q!==void 0){var X=ms,pt=e;switch(e){case"keypress":if(Ci(a)===0)break t;case"keydown":case"keyup":X=Es;break;case"focusin":pt="focus",X=vs;break;case"focusout":pt="blur",X=vs;break;case"beforeblur":case"afterblur":X=vs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=lu;break;case e5:case n5:case i5:X=Cs;break;case r5:X=cu;break;case"scroll":case"scrollend":X=eu;break;case"wheel":X=Ts;break;case"copy":case"cut":case"paste":X=_s;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Io;break;case"toggle":case"beforetoggle":X=fu}var Rt=(n&4)!==0,Se=!Rt&&(e==="scroll"||e==="scrollend"),B=Rt?Q!==null?Q+"Capture":null:Q;Rt=[];for(var U=P,F;U!==null;){var Z=U;if(F=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||F===null||B===null||(Z=Sa(U,B),Z!=null&&Rt.push(ll(U,Z,F))),Se)break;U=U.return}0<Rt.length&&(Q=new X(Q,pt,null,a,W),tt.push({event:Q,listeners:Rt}))}}if((n&7)===0){t:{if(Q=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",Q&&a!==Gn&&(pt=a.relatedTarget||a.fromElement)&&(oi(pt)||pt[zi]))break t;if((X||Q)&&(Q=W.window===W?W:(Q=W.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(pt=a.relatedTarget||a.toElement,X=P,pt=pt?oi(pt):null,pt!==null&&(Se=mt(pt),Rt=pt.tag,pt!==Se||Rt!==5&&Rt!==27&&Rt!==6)&&(pt=null)):(X=null,pt=P),X!==pt)){if(Rt=Kn,Z="onMouseLeave",B="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Rt=Io,Z="onPointerLeave",B="onPointerEnter",U="pointer"),Se=X==null?Q:wr(X),F=pt==null?Q:wr(pt),Q=new Rt(Z,U+"leave",X,a,W),Q.target=Se,Q.relatedTarget=F,Z=null,oi(W)===P&&(Rt=new Rt(B,U+"enter",pt,a,W),Rt.target=F,Rt.relatedTarget=Se,Z=Rt),Se=Z,X&&pt)e:{for(Rt=X,B=pt,U=0,F=Rt;F;F=Gs(F))U++;for(F=0,Z=B;Z;Z=Gs(Z))F++;for(;0<U-F;)Rt=Gs(Rt),U--;for(;0<F-U;)B=Gs(B),F--;for(;U--;){if(Rt===B||B!==null&&Rt===B.alternate)break e;Rt=Gs(Rt),B=Gs(B)}Rt=null}else Rt=null;X!==null&&y3(tt,Q,X,Rt,!1),pt!==null&&Se!==null&&y3(tt,Se,pt,Rt,!0)}}t:{if(Q=P?wr(P):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var ft=F2;else if(Pe(Q))if(G2)ft=ld;else{ft=sd;var Lt=ad}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?P&&So(P.elementType)&&(ft=F2):ft=od;if(ft&&(ft=ft(e,P))){Ki(tt,ft,a,W);break t}Lt&&Lt(e,Q,P),e==="focusout"&&P&&Q.type==="number"&&P.memoizedProps.value!=null&&ds(Q,"number",Q.value)}switch(Lt=P?wr(P):window,e){case"focusin":(Pe(Lt)||Lt.contentEditable==="true")&&(As=Lt,E0=P,Lo=null);break;case"focusout":Lo=E0=As=null;break;case"mousedown":T0=!0;break;case"contextmenu":case"mouseup":case"dragend":T0=!1,J2(tt,a,W);break;case"selectionchange":if(hd)break;case"keydown":case"keyup":J2(tt,a,W)}var yt;if(Ti)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Ht?Y(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(v&&a.locale!=="ko"&&(Ht||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ht&&(yt=wo()):(vi=W,Nr="value"in vi?vi.value:vi.textContent,Ht=!0)),Lt=Xu(P,_t),0<Lt.length&&(_t=new Do(_t,e,null,a,W),tt.push({event:_t,listeners:Lt}),yt?_t.data=yt:(yt=st(a),yt!==null&&(_t.data=yt)))),(yt=g?Ue(e,a):qt(e,a))&&(_t=Xu(P,"onBeforeInput"),0<_t.length&&(Lt=new Do("onBeforeInput","beforeinput",null,a,W),tt.push({event:Lt,listeners:_t}),Lt.data=yt)),Kd(tt,e,P,a,W)}m3(tt,n)})}function ll(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xu(e,n){for(var a=n+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Sa(e,a),h!=null&&o.unshift(ll(e,h,d)),h=Sa(e,n),h!=null&&o.push(ll(e,h,d))),e=e.return}return o}function Gs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y3(e,n,a,o,h){for(var d=n._reactName,C=[];a!==null&&a!==o;){var E=a,x=E.alternate,P=E.stateNode;if(E=E.tag,x!==null&&x===o)break;E!==5&&E!==26&&E!==27||P===null||(x=P,h?(P=Sa(a,d),P!=null&&C.unshift(ll(a,P,x))):h||(P=Sa(a,d),P!=null&&C.push(ll(a,P,x)))),a=a.return}C.length!==0&&e.push({event:n,listeners:C})}var Wd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function v3(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Zd,"")}function C3(e,n){return n=v3(n),v3(e)===n}function Wu(){}function ie(e,n,a,o,h,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Fn(e,""+o);break;case"className":Dr(e,"class",o);break;case"tabIndex":Dr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dr(e,a,o);break;case"style":Jl(e,o,d);break;case"data":if(n!=="object"){Dr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yi(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ie(e,n,"name",h.name,h,null),ie(e,n,"formEncType",h.formEncType,h,null),ie(e,n,"formMethod",h.formMethod,h,null),ie(e,n,"formTarget",h.formTarget,h,null)):(ie(e,n,"encType",h.encType,h,null),ie(e,n,"method",h.method,h,null),ie(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=yi(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wu);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=yi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":zt("beforetoggle",e),zt("toggle",e),xr(e,"popover",o);break;case"xlinkActuate":qn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=p0.get(a)||a,xr(e,a,o))}}function G1(e,n,a,o,h,d){switch(a){case"style":Jl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Fn(e,o):(typeof o=="number"||typeof o=="bigint")&&Fn(e,""+o);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),d=e[ke]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xr(e,a,o)}}}function an(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",e),zt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var C=a[d];if(C!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ie(e,n,d,C,a,null)}}h&&ie(e,n,"srcSet",a.srcSet,a,null),o&&ie(e,n,"src",a.src,a,null);return;case"input":zt("invalid",e);var E=d=C=h=null,x=null,P=null;for(o in a)if(a.hasOwnProperty(o)){var W=a[o];if(W!=null)switch(o){case"name":h=W;break;case"type":C=W;break;case"checked":x=W;break;case"defaultChecked":P=W;break;case"value":d=W;break;case"defaultValue":E=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:ie(e,n,o,W,a,null)}}Ta(e,d,E,x,P,C,h,!1),Ea(e);return;case"select":zt("invalid",e),o=C=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":C=E;break;case"multiple":o=E;default:ie(e,n,h,E,a,null)}n=d,a=C,e.multiple=!!o,n!=null?$t(e,!!o,n,!1):a!=null&&$t(e,!!o,a,!0);return;case"textarea":zt("invalid",e),d=h=o=null;for(C in a)if(a.hasOwnProperty(C)&&(E=a[C],E!=null))switch(C){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ie(e,n,C,E,a,null)}Ir(e,o,h,d),Ea(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ie(e,n,x,o,a,null)}return;case"dialog":zt("cancel",e),zt("close",e);break;case"iframe":case"object":zt("load",e);break;case"video":case"audio":for(o=0;o<ol.length;o++)zt(ol[o],e);break;case"image":zt("error",e),zt("load",e);break;case"details":zt("toggle",e);break;case"embed":case"source":case"link":zt("error",e),zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ie(e,n,P,o,a,null)}return;default:if(So(n)){for(W in a)a.hasOwnProperty(W)&&(o=a[W],o!==void 0&&G1(e,n,W,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&ie(e,n,E,o,a,null))}function Jd(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,C=null,E=null,x=null,P=null,W=null;for(X in a){var tt=a[X];if(a.hasOwnProperty(X)&&tt!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":x=tt;default:o.hasOwnProperty(X)||ie(e,n,X,null,o,tt)}}for(var Q in o){var X=o[Q];if(tt=a[Q],o.hasOwnProperty(Q)&&(X!=null||tt!=null))switch(Q){case"type":d=X;break;case"name":h=X;break;case"checked":P=X;break;case"defaultChecked":W=X;break;case"value":C=X;break;case"defaultValue":E=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:X!==tt&&ie(e,n,Q,X,o,tt)}}Mr(e,C,E,x,P,W,d,h);return;case"select":X=C=E=Q=null;for(d in a)if(x=a[d],a.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":X=x;default:o.hasOwnProperty(d)||ie(e,n,d,null,o,x)}for(h in o)if(d=o[h],x=a[h],o.hasOwnProperty(h)&&(d!=null||x!=null))switch(h){case"value":Q=d;break;case"defaultValue":E=d;break;case"multiple":C=d;default:d!==x&&ie(e,n,h,d,o,x)}n=E,a=C,o=X,Q!=null?$t(e,!!a,Q,!1):!!o!=!!a&&(n!=null?$t(e,!!a,n,!0):$t(e,!!a,a?[]:"",!1));return;case"textarea":X=Q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ie(e,n,E,null,o,h)}for(C in o)if(h=o[C],d=a[C],o.hasOwnProperty(C)&&(h!=null||d!=null))switch(C){case"value":Q=h;break;case"defaultValue":X=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&ie(e,n,C,h,o,d)}Aa(e,Q,X);return;case"option":for(var pt in a)if(Q=a[pt],a.hasOwnProperty(pt)&&Q!=null&&!o.hasOwnProperty(pt))switch(pt){case"selected":e.selected=!1;break;default:ie(e,n,pt,null,o,Q)}for(x in o)if(Q=o[x],X=a[x],o.hasOwnProperty(x)&&Q!==X&&(Q!=null||X!=null))switch(x){case"selected":e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:ie(e,n,x,Q,o,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Rt in a)Q=a[Rt],a.hasOwnProperty(Rt)&&Q!=null&&!o.hasOwnProperty(Rt)&&ie(e,n,Rt,null,o,Q);for(P in o)if(Q=o[P],X=a[P],o.hasOwnProperty(P)&&Q!==X&&(Q!=null||X!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:ie(e,n,P,Q,o,X)}return;default:if(So(n)){for(var Se in a)Q=a[Se],a.hasOwnProperty(Se)&&Q!==void 0&&!o.hasOwnProperty(Se)&&G1(e,n,Se,void 0,o,Q);for(W in o)Q=o[W],X=a[W],!o.hasOwnProperty(W)||Q===X||Q===void 0&&X===void 0||G1(e,n,W,Q,o,X);return}}for(var B in a)Q=a[B],a.hasOwnProperty(B)&&Q!=null&&!o.hasOwnProperty(B)&&ie(e,n,B,null,o,Q);for(tt in o)Q=o[tt],X=a[tt],!o.hasOwnProperty(tt)||Q===X||Q==null&&X==null||ie(e,n,tt,Q,o,X)}var Q1=null,K1=null;function Zu(e){return e.nodeType===9?e:e.ownerDocument}function _3(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E3(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Y1(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $1=null;function t8(){var e=window.event;return e&&e.type==="popstate"?e===$1?!1:($1=e,!0):($1=null,!1)}var T3=typeof setTimeout=="function"?setTimeout:void 0,e8=typeof clearTimeout=="function"?clearTimeout:void 0,A3=typeof Promise=="function"?Promise:void 0,n8=typeof queueMicrotask=="function"?queueMicrotask:typeof A3<"u"?function(e){return A3.resolve(null).then(e).catch(i8)}:T3;function i8(e){setTimeout(function(){throw e})}function X1(e,n){var a=n,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(o===0){e.removeChild(h),gl(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=h}while(a);gl(n)}function W1(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":W1(a),_a(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function r8(e,n,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[br])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function a8(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function S3(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function b3(e,n,a){switch(n=Zu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ii=new Map,w3=new Set;function Ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var lr=ut.d;ut.d={f:s8,r:o8,D:l8,C:u8,L:c8,m:h8,X:d8,S:f8,M:p8};function s8(){var e=lr.f(),n=Gu();return e||n}function o8(e){var n=ji(e);n!==null&&n.tag===5&&n.type==="form"?J5(n):lr.r(e)}var Qs=typeof document>"u"?null:document;function R3(e,n,a){var o=Qs;if(o&&typeof n=="string"&&n){var h=Ee(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),w3.has(h)||(w3.add(h),e={rel:e,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),an(n,"link",e),ge(n),o.head.appendChild(n)))}}function l8(e){lr.D(e),R3("dns-prefetch",e,null)}function u8(e,n){lr.C(e,n),R3("preconnect",e,n)}function c8(e,n,a){lr.L(e,n,a);var o=Qs;if(o&&e&&n){var h='link[rel="preload"][as="'+Ee(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Ee(a.imageSizes)+'"]')):h+='[href="'+Ee(e)+'"]';var d=h;switch(n){case"style":d=Ks(e);break;case"script":d=Ys(e)}ii.has(d)||(e=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(d,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(ul(d))||n==="script"&&o.querySelector(cl(d))||(n=o.createElement("link"),an(n,"link",e),ge(n),o.head.appendChild(n)))}}function h8(e,n){lr.m(e,n);var a=Qs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+Ee(o)+'"][href="'+Ee(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ys(e)}if(!ii.has(d)&&(e=D({rel:"modulepreload",href:e},n),ii.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(d)))return}o=a.createElement("link"),an(o,"link",e),ge(o),a.head.appendChild(o)}}}function f8(e,n,a){lr.S(e,n,a);var o=Qs;if(o&&e){var h=Rr(o).hoistableStyles,d=Ks(e);n=n||"default";var C=h.get(d);if(!C){var E={loading:0,preload:null};if(C=o.querySelector(ul(d)))E.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(d))&&Z1(e,a);var x=C=o.createElement("link");ge(x),an(x,"link",e),x._p=new Promise(function(P,W){x.onload=P,x.onerror=W}),x.addEventListener("load",function(){E.loading|=1}),x.addEventListener("error",function(){E.loading|=2}),E.loading|=4,tc(C,n,o)}C={type:"stylesheet",instance:C,count:1,state:E},h.set(d,C)}}}function d8(e,n){lr.X(e,n);var a=Qs;if(a&&e){var o=Rr(a).hoistableScripts,h=Ys(e),d=o.get(h);d||(d=a.querySelector(cl(h)),d||(e=D({src:e,async:!0},n),(n=ii.get(h))&&J1(e,n),d=a.createElement("script"),ge(d),an(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function p8(e,n){lr.M(e,n);var a=Qs;if(a&&e){var o=Rr(a).hoistableScripts,h=Ys(e),d=o.get(h);d||(d=a.querySelector(cl(h)),d||(e=D({src:e,async:!0,type:"module"},n),(n=ii.get(h))&&J1(e,n),d=a.createElement("script"),ge(d),an(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function x3(e,n,a,o){var h=(h=ee.current)?Ju(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ks(a.href),a=Rr(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ks(a.href);var d=Rr(h).hoistableStyles,C=d.get(e);if(C||(h=h.ownerDocument||h,C={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,C),(d=h.querySelector(ul(e)))&&!d._p&&(C.instance=d,C.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),d||m8(h,e,a,C.state))),n&&o===null)throw Error(s(528,""));return C}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ys(a),a=Rr(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ks(e){return'href="'+Ee(e)+'"'}function ul(e){return'link[rel="stylesheet"]['+e+"]"}function D3(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function m8(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),an(n,"link",a),ge(n),e.head.appendChild(n))}function Ys(e){return'[src="'+Ee(e)+'"]'}function cl(e){return"script[async]"+e}function M3(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(o)return n.instance=o,ge(o),o;var h=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ge(o),an(o,"style",h),tc(o,a.precedence,e),n.instance=o;case"stylesheet":h=Ks(a.href);var d=e.querySelector(ul(h));if(d)return n.state.loading|=4,n.instance=d,ge(d),d;o=D3(a),(h=ii.get(h))&&Z1(o,h),d=(e.ownerDocument||e).createElement("link"),ge(d);var C=d;return C._p=new Promise(function(E,x){C.onload=E,C.onerror=x}),an(d,"link",o),n.state.loading|=4,tc(d,a.precedence,e),n.instance=d;case"script":return d=Ys(a.src),(h=e.querySelector(cl(d)))?(n.instance=h,ge(h),h):(o=a,(h=ii.get(d))&&(o=D({},a),J1(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),ge(h),an(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tc(o,a.precedence,e));return n.instance}function tc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,C=0;C<o.length;C++){var E=o[C];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Z1(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function J1(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ec=null;function I3(e,n,a){if(ec===null){var o=new Map,h=ec=new Map;h.set(a,o)}else h=ec,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[br]||d[Fe]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var C=d.getAttribute(n)||"";C=e+C;var E=o.get(C);E?E.push(d):o.set(C,[d])}}return o}function N3(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function g8(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function V3(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function y8(){}function v8(e,n,a){if(hl===null)throw Error(s(475));var o=hl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Ks(a.href),d=e.querySelector(ul(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=nc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,ge(d);return}d=e.ownerDocument||e,a=D3(a),(h=ii.get(h))&&Z1(a,h),d=d.createElement("link"),ge(d);var C=d;C._p=new Promise(function(E,x){C.onload=E,C.onerror=x}),an(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=nc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function C8(){if(hl===null)throw Error(s(475));var e=hl;return e.stylesheets&&e.count===0&&t4(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&t4(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function nc(){if(this.count--,this.count===0){if(this.stylesheets)t4(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ic=null;function t4(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ic=new Map,n.forEach(_8,e),ic=null,nc.call(e))}function _8(e,n){if(!(n.state.loading&4)){var a=ic.get(e);if(a)var o=a.get(null);else{a=new Map,ic.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var C=h[d];(C.nodeName==="LINK"||C.getAttribute("media")!=="not all")&&(a.set(C.dataset.precedence,C),o=C)}o&&a.set(null,o)}h=n.instance,C=h.getAttribute("data-precedence"),d=a.get(C)||o,d===o&&a.set(null,h),a.set(C,h),this.count++,o=nc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var fl={$$typeof:N,Provider:null,Consumer:null,_currentValue:St,_currentValue2:St,_threadCount:0};function E8(e,n,a,o,h,d,C,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.hiddenUpdates=us(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=C,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function L3(e,n,a,o,h,d,C,E,x,P,W,tt){return e=new E8(e,n,a,C,E,x,P,tt),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),e.current=d,d.stateNode=e,n=N0(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},f1(d),e}function O3(e){return e?(e=ws,e):ws}function k3(e,n,a,o,h,d){h=O3(h),o.context===null?o.context=h:o.pendingContext=h,o=jr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Br(e,o,n),a!==null&&(vn(a,e,n),$o(a,e,n))}function U3(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function e4(e,n){U3(e,n),(e=e.alternate)&&U3(e,n)}function P3(e){if(e.tag===13){var n=Vr(e,67108864);n!==null&&vn(n,e,67108864),e4(e,67108864)}}var rc=!0;function T8(e,n,a,o){var h=S.T;S.T=null;var d=ut.p;try{ut.p=2,n4(e,n,a,o)}finally{ut.p=d,S.T=h}}function A8(e,n,a,o){var h=S.T;S.T=null;var d=ut.p;try{ut.p=8,n4(e,n,a,o)}finally{ut.p=d,S.T=h}}function n4(e,n,a,o){if(rc){var h=i4(o);if(h===null)F1(e,n,o,ac,a),j3(e,o);else if(b8(h,e,n,a,o))o.stopPropagation();else if(j3(e,o),n&4&&-1<S8.indexOf(e)){for(;h!==null;){var d=ji(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var C=si(d.pendingLanes);if(C!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;C;){var x=1<<31-_e(C);E.entanglements[1]|=x,C&=~x}xi(d),(ve&6)===0&&(Hu=tn()+500,sl(0))}}break;case 13:E=Vr(d,2),E!==null&&vn(E,d,2),Gu(),e4(d,2)}if(d=i4(o),d===null&&F1(e,n,o,ac,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else F1(e,n,o,null,a)}}function i4(e){return e=ps(e),r4(e)}var ac=null;function r4(e){if(ac=null,e=oi(e),e!==null){var n=mt(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=Bt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function z3(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case At:return 2;case Mt:return 8;case le:case be:return 32;case he:return 268435456;default:return 32}default:return 32}}var a4=!1,Yr=null,$r=null,Xr=null,dl=new Map,pl=new Map,Wr=[],S8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j3(e,n){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(n.pointerId)}}function ml(e,n,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},n!==null&&(n=ji(n),n!==null&&P3(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function b8(e,n,a,o,h){switch(n){case"focusin":return Yr=ml(Yr,e,n,a,o,h),!0;case"dragenter":return $r=ml($r,e,n,a,o,h),!0;case"mouseover":return Xr=ml(Xr,e,n,a,o,h),!0;case"pointerover":var d=h.pointerId;return dl.set(d,ml(dl.get(d)||null,e,n,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,pl.set(d,ml(pl.get(d)||null,e,n,a,o,h)),!0}return!1}function B3(e){var n=oi(e.target);if(n!==null){var a=mt(n);if(a!==null){if(n=a.tag,n===13){if(n=Bt(a),n!==null){e.blockedOn=n,Sr(e.priority,function(){if(a.tag===13){var o=On(),h=Vr(a,o);h!==null&&vn(h,a,o),e4(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=i4(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gn=o,a.target.dispatchEvent(o),Gn=null}else return n=ji(a),n!==null&&P3(n),e.blockedOn=a,!1;n.shift()}return!0}function H3(e,n,a){sc(e)&&a.delete(n)}function w8(){a4=!1,Yr!==null&&sc(Yr)&&(Yr=null),$r!==null&&sc($r)&&($r=null),Xr!==null&&sc(Xr)&&(Xr=null),dl.forEach(H3),pl.forEach(H3)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,a4||(a4=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,w8)))}var lc=null;function q3(e){lc!==e&&(lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(r4(o||a)===null)continue;break}var d=ji(a);d!==null&&(e.splice(n,3),n-=3,Y0(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function gl(e){function n(x){return oc(x,e)}Yr!==null&&oc(Yr,e),$r!==null&&oc($r,e),Xr!==null&&oc(Xr,e),dl.forEach(n),pl.forEach(n);for(var a=0;a<Wr.length;a++){var o=Wr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wr.length&&(a=Wr[0],a.blockedOn===null);)B3(a),a.blockedOn===null&&Wr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],C=h[ke]||null;if(typeof d=="function")C||q3(a);else if(C){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,C=d[ke]||null)E=C.formAction;else if(r4(h)!==null)continue}else E=C.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),q3(a)}}}function s4(e){this._internalRoot=e}uc.prototype.render=s4.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=On();k3(a,o,e,n,null,null)},uc.prototype.unmount=s4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&qs(),k3(e.current,2,null,e,null,null),Gu(),n[zi]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wr.length&&n!==0&&n<Wr[a].priority;a++);Wr.splice(a,0,e),a===0&&B3(e)}};var F3=t.version;if(F3!=="19.0.0")throw Error(s(527,F3,"19.0.0"));ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=it(n),e=e!==null?dt(e):null,e=e===null?null:e.stateNode,e};var R8={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:oi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{rt=cc.inject(R8),Kt=cc}catch{}}return vl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",h=oh,d=lh,C=uh,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(C=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=L3(e,1,!1,null,null,a,o,h,d,C,E,null),e[zi]=n.current,q1(e.nodeType===8?e.parentNode:e),new s4(n)},vl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=oh,C=lh,E=uh,x=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(C=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),n=L3(e,1,!0,n,a??null,o,h,d,C,E,x,P),n.context=O3(null),a=n.current,o=On(),h=jr(o),h.callback=null,Br(a,h,o),n.current.lanes=o,Re(n,o),xi(n),e[zi]=n.current,q1(e),new uc(n)},vl.version="19.0.0",vl}var tf;function U8(){if(tf)return u4.exports;tf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),u4.exports=k8(),u4.exports}var P8=U8();const z8=b6(P8);var Cl={},ef;function j8(){if(ef)return Cl;ef=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.parse=f,Cl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function f(w,N){const k=new c,$=w.length;if($<2)return k;const z=(N==null?void 0:N.decode)||_;let G=0;do{const O=w.indexOf("=",G);if(O===-1)break;const K=w.indexOf(";",G),nt=K===-1?$:K;if(O>nt){G=w.lastIndexOf(";",O-1)+1;continue}const at=p(w,G,O),ht=m(w,O,at),I=w.slice(at,ht);if(k[I]===void 0){let R=p(w,O+1,nt),S=m(w,nt,R);const D=z(w.slice(R,S));k[I]=D}G=nt+1}while(G<$);return k}function p(w,N,k){do{const $=w.charCodeAt(N);if($!==32&&$!==9)return N}while(++N<k);return k}function m(w,N,k){for(;N>k;){const $=w.charCodeAt(--N);if($!==32&&$!==9)return N+1}return k}function y(w,N,k){const $=(k==null?void 0:k.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const z=$(N);if(!t.test(z))throw new TypeError(`argument val is invalid: ${N}`);let G=w+"="+z;if(!k)return G;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);G+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);G+="; Domain="+k.domain}if(k.path){if(!s.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);G+="; Path="+k.path}if(k.expires){if(!b(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);G+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(G+="; HttpOnly"),k.secure&&(G+="; Secure"),k.partitioned&&(G+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return G}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return l.call(w)==="[object Date]"}return Cl}j8();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nf="popstate";function B8(r={}){function t(l,c){let{pathname:f="/",search:p="",hash:m=""}=is(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),w4("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,y=m.indexOf("#");p=y===-1?m:m.slice(0,y)}return p+"#"+(typeof c=="string"?c:Ml(c))}function s(l,c){ri(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return q8(t,i,s,r)}function me(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function ri(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H8(){return Math.random().toString(36).substring(2,10)}function rf(r,t){return{usr:r.state,key:r.key,idx:t}}function w4(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?is(t):t,state:i,key:t&&t.key||s||H8()}}function Ml({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function is(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function q8(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,y=_();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function _(){return(f.state||{idx:null}).idx}function b(){p="POP";let z=_(),G=z==null?null:z-y;y=z,m&&m({action:p,location:$.location,delta:G})}function w(z,G){p="PUSH";let O=w4($.location,z,G);i&&i(O,z),y=_()+1;let K=rf(O,y),nt=$.createHref(O);try{f.pushState(K,"",nt)}catch(at){if(at instanceof DOMException&&at.name==="DataCloneError")throw at;l.location.assign(nt)}c&&m&&m({action:p,location:$.location,delta:1})}function N(z,G){p="REPLACE";let O=w4($.location,z,G);i&&i(O,z),y=_();let K=rf(O,y),nt=$.createHref(O);f.replaceState(K,"",nt),c&&m&&m({action:p,location:$.location,delta:0})}function k(z){let G=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof z=="string"?z:Ml(z);return O=O.replace(/ $/,"%20"),me(G,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,G)}let $={get action(){return p},get location(){return r(l,f)},listen(z){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(nf,b),m=z,()=>{l.removeEventListener(nf,b),m=null}},createHref(z){return t(l,z)},createURL:k,encodeLocation(z){let G=k(z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:N,go(z){return f.go(z)}};return $}function w6(r,t,i="/"){return F8(r,t,i,!1)}function F8(r,t,i,s){let l=typeof t=="string"?is(t):t,c=fr(l.pathname||"/",i);if(c==null)return null;let f=R6(r);G8(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let y=np(c);p=tp(f[m],y,s)}return p}function R6(r,t=[],i=[],s=""){let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(me(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let y=cr([s,m.relativePath]),_=i.concat(m);c.children&&c.children.length>0&&(me(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),R6(c.children,t,_,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:Z8(y,c.index),routesMeta:_})};return r.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of x6(c.path))l(c,f,m)}),t}function x6(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=x6(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function G8(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:J8(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Q8=/^:[\w-]+$/,K8=3,Y8=2,$8=1,X8=10,W8=-2,af=r=>r==="*";function Z8(r,t){let i=r.split("/"),s=i.length;return i.some(af)&&(s+=W8),t&&(s+=Y8),i.filter(l=>!af(l)).reduce((l,c)=>l+(Q8.test(c)?K8:c===""?$8:X8),s)}function J8(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function tp(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,_=c==="/"?t:t.slice(c.length)||"/",b=wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},_),w=m.route;if(!b&&y&&i&&!s[s.length-1].route.index&&(b=wc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:cr([c,b.pathname]),pathnameBase:sp(cr([c,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(c=cr([c,b.pathnameBase]))}return f}function wc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=ep(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((y,{paramName:_,isOptional:b},w)=>{if(_==="*"){let k=p[w]||"";f=c.slice(0,c.length-k.length).replace(/(.)\/+$/,"$1")}const N=p[w];return b&&!N?y[_]=void 0:y[_]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function ep(r,t=!1,i=!0){ri(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function np(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ri(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function fr(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function ip(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?is(r):r;return{pathname:i?i.startsWith("/")?i:rp(i,t):t,search:op(s),hash:lp(l)}}function rp(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function d4(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ap(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function W4(r){let t=ap(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Z4(r,t,i,s=!1){let l;typeof r=="string"?l=is(r):(l={...r},me(!l.pathname||!l.pathname.includes("?"),d4("?","pathname","search",l)),me(!l.pathname||!l.pathname.includes("#"),d4("#","pathname","hash",l)),me(!l.search||!l.search.includes("#"),d4("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let b=t.length-1;if(!s&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),b-=1;l.pathname=w.join("/")}p=b>=0?t[b]:"/"}let m=ip(l,p),y=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(y||_)&&(m.pathname+="/"),m}var cr=r=>r.join("/").replace(/\/\/+/g,"/"),sp=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),op=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lp=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function up(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var D6=["POST","PUT","PATCH","DELETE"];new Set(D6);var cp=["GET",...D6];new Set(cp);var uo=H.createContext(null);uo.displayName="DataRouter";var qc=H.createContext(null);qc.displayName="DataRouterState";var M6=H.createContext({isTransitioning:!1});M6.displayName="ViewTransition";var hp=H.createContext(new Map);hp.displayName="Fetchers";var fp=H.createContext(null);fp.displayName="Await";var fi=H.createContext(null);fi.displayName="Navigation";var Pl=H.createContext(null);Pl.displayName="Location";var Ui=H.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var J4=H.createContext(null);J4.displayName="RouteError";function dp(r,{relative:t}={}){me(co(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=H.useContext(fi),{hash:l,pathname:c,search:f}=zl(r,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:cr([i,c])),s.createHref({pathname:p,search:f,hash:l})}function co(){return H.useContext(Pl)!=null}function da(){return me(co(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Pl).location}var I6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function N6(r){H.useContext(fi).static||H.useLayoutEffect(r)}function ho(){let{isDataRoute:r}=H.useContext(Ui);return r?wp():pp()}function pp(){me(co(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(uo),{basename:t,navigator:i}=H.useContext(fi),{matches:s}=H.useContext(Ui),{pathname:l}=da(),c=JSON.stringify(W4(s)),f=H.useRef(!1);return N6(()=>{f.current=!0}),H.useCallback((m,y={})=>{if(ri(f.current,I6),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=Z4(m,JSON.parse(c),l,y.relative==="path");r==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:cr([t,_.pathname])),(y.replace?i.replace:i.push)(_,y.state,y)},[t,i,c,l,r])}H.createContext(null);function zl(r,{relative:t}={}){let{matches:i}=H.useContext(Ui),{pathname:s}=da(),l=JSON.stringify(W4(i));return H.useMemo(()=>Z4(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function mp(r,t){return V6(r,t)}function V6(r,t,i,s){var O;me(co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=H.useContext(fi),{matches:f}=H.useContext(Ui),p=f[f.length-1],m=p?p.params:{},y=p?p.pathname:"/",_=p?p.pathnameBase:"/",b=p&&p.route;{let K=b&&b.path||"";L6(y,!b||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=da(),N;if(t){let K=typeof t=="string"?is(t):t;me(_==="/"||((O=K.pathname)==null?void 0:O.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),N=K}else N=w;let k=N.pathname||"/",$=k;if(_!=="/"){let K=_.replace(/^\//,"").split("/");$="/"+k.replace(/^\//,"").split("/").slice(K.length).join("/")}let z=!c&&i&&i.matches&&i.matches.length>0?i.matches:w6(r,{pathname:$});ri(b||z!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),ri(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=_p(z&&z.map(K=>Object.assign({},K,{params:Object.assign({},m,K.params),pathname:cr([_,l.encodeLocation?l.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:cr([_,l.encodeLocation?l.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),f,i,s);return t&&G?H.createElement(Pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},G):G}function gp(){let r=bp(),t=up(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:c},"ErrorBoundary")," or"," ",H.createElement("code",{style:c},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},t),i?H.createElement("pre",{style:l},i):null,f)}var yp=H.createElement(gp,null),vp=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?H.createElement(Ui.Provider,{value:this.props.routeContext},H.createElement(J4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cp({routeContext:r,match:t,children:i}){let s=H.useContext(uo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),H.createElement(Ui.Provider,{value:r},i)}function _p(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);me(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,p=-1;if(i)for(let m=0;m<l.length;m++){let y=l[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=m),y.route.id){let{loaderData:_,errors:b}=i,w=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||w){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((m,y,_)=>{let b,w=!1,N=null,k=null;i&&(b=c&&y.route.id?c[y.route.id]:void 0,N=y.route.errorElement||yp,f&&(p<0&&_===0?(L6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):p===_&&(w=!0,k=y.route.hydrateFallbackElement||null)));let $=t.concat(l.slice(0,_+1)),z=()=>{let G;return b?G=N:w?G=k:y.route.Component?G=H.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=m,H.createElement(Cp,{match:y,routeContext:{outlet:m,matches:$,isDataRoute:i!=null},children:G})};return i&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?H.createElement(vp,{location:i.location,revalidation:i.revalidation,component:N,error:b,children:z(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):z()},null)}function t2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(r){let t=H.useContext(uo);return me(t,t2(r)),t}function Tp(r){let t=H.useContext(qc);return me(t,t2(r)),t}function Ap(r){let t=H.useContext(Ui);return me(t,t2(r)),t}function e2(r){let t=Ap(r),i=t.matches[t.matches.length-1];return me(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Sp(){return e2("useRouteId")}function bp(){var s;let r=H.useContext(J4),t=Tp("useRouteError"),i=e2("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function wp(){let{router:r}=Ep("useNavigate"),t=e2("useNavigate"),i=H.useRef(!1);return N6(()=>{i.current=!0}),H.useCallback(async(l,c={})=>{ri(i.current,I6),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var sf={};function L6(r,t,i){!t&&!sf[r]&&(sf[r]=!0,ri(!1,i))}H.memo(Rp);function Rp({routes:r,future:t,state:i}){return V6(r,void 0,i,t)}function xp({to:r,replace:t,state:i,relative:s}){me(co(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=H.useContext(fi);ri(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=H.useContext(Ui),{pathname:f}=da(),p=ho(),m=Z4(r,W4(c),f,s==="path"),y=JSON.stringify(m);return H.useEffect(()=>{p(JSON.parse(y),{replace:t,state:i,relative:s})},[p,y,s,t,i]),null}function ur(r){me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dp({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){me(!co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=H.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=is(i));let{pathname:m="/",search:y="",hash:_="",state:b=null,key:w="default"}=i,N=H.useMemo(()=>{let k=fr(m,f);return k==null?null:{location:{pathname:k,search:y,hash:_,state:b,key:w},navigationType:s}},[f,m,y,_,b,w,s]);return ri(N!=null,`<Router basename="${f}"> is not able to match the URL "${m}${y}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:H.createElement(fi.Provider,{value:p},H.createElement(Pl.Provider,{children:t,value:N}))}function Mp({children:r,location:t}){return mp(R4(r),t)}function R4(r,t=[]){let i=[];return H.Children.forEach(r,(s,l)=>{if(!H.isValidElement(s))return;let c=[...t,l];if(s.type===H.Fragment){i.push.apply(i,R4(s.props.children,c));return}me(s.type===ur,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=R4(s.props.children,c)),i.push(f)}),i}var yc="get",vc="application/x-www-form-urlencoded";function Fc(r){return r!=null&&typeof r.tagName=="string"}function Ip(r){return Fc(r)&&r.tagName.toLowerCase()==="button"}function Np(r){return Fc(r)&&r.tagName.toLowerCase()==="form"}function Vp(r){return Fc(r)&&r.tagName.toLowerCase()==="input"}function Lp(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Op(r,t){return r.button===0&&(!t||t==="_self")&&!Lp(r)}var hc=null;function kp(){if(hc===null)try{new FormData(document.createElement("form"),0),hc=!1}catch{hc=!0}return hc}var Up=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function p4(r){return r!=null&&!Up.has(r)?(ri(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vc}"`),null):r}function Pp(r,t){let i,s,l,c,f;if(Np(r)){let p=r.getAttribute("action");s=p?fr(p,t):null,i=r.getAttribute("method")||yc,l=p4(r.getAttribute("enctype"))||vc,c=new FormData(r)}else if(Ip(r)||Vp(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?fr(m,t):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||yc,l=p4(r.getAttribute("formenctype"))||p4(p.getAttribute("enctype"))||vc,c=new FormData(p,r),!kp()){let{name:y,type:_,value:b}=r;if(_==="image"){let w=y?`${y}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else y&&c.append(y,b)}}else{if(Fc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=yc,s=null,l=vc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function n2(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function zp(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jp(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Bp(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await zp(c,i);return f.links?f.links():[]}return[]}));return Gp(s.flat(1).filter(jp).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function of(r,t,i,s,l,c){let f=(m,y)=>i[y]?m.route.id!==i[y].route.id:!0,p=(m,y)=>{var _;return i[y].pathname!==m.pathname||((_=i[y].route.path)==null?void 0:_.endsWith("*"))&&i[y].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,y)=>f(m,y)||p(m,y)):c==="data"?t.filter((m,y)=>{var b;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,y)||p(m,y))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Hp(r,t,{includeHydrateFallback:i}={}){return qp(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function qp(r){return[...new Set(r)]}function Fp(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function Gp(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(Fp(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Qp(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&fr(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function O6(){let r=H.useContext(uo);return n2(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Kp(){let r=H.useContext(qc);return n2(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var i2=H.createContext(void 0);i2.displayName="FrameworkContext";function k6(){let r=H.useContext(i2);return n2(r,"You must render this element inside a <HydratedRouter> element"),r}function Yp(r,t){let i=H.useContext(i2),[s,l]=H.useState(!1),[c,f]=H.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:y,onMouseLeave:_,onTouchStart:b}=t,w=H.useRef(null);H.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let $=G=>{G.forEach(O=>{f(O.isIntersecting)})},z=new IntersectionObserver($,{threshold:.5});return w.current&&z.observe(w.current),()=>{z.disconnect()}}},[r]),H.useEffect(()=>{if(s){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[s]);let N=()=>{l(!0)},k=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,w,{}]:[c,w,{onFocus:_l(p,N),onBlur:_l(m,k),onMouseEnter:_l(y,N),onMouseLeave:_l(_,k),onTouchStart:_l(b,N)}]:[!1,w,{}]}function _l(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function $p({page:r,...t}){let{router:i}=O6(),s=H.useMemo(()=>w6(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?H.createElement(Wp,{page:r,matches:s,...t}):null}function Xp(r){let{manifest:t,routeModules:i}=k6(),[s,l]=H.useState([]);return H.useEffect(()=>{let c=!1;return Bp(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function Wp({page:r,matches:t,...i}){let s=da(),{manifest:l,routeModules:c}=k6(),{basename:f}=O6(),{loaderData:p,matches:m}=Kp(),y=H.useMemo(()=>of(r,t,m,l,s,"data"),[r,t,m,l,s]),_=H.useMemo(()=>of(r,t,m,l,s,"assets"),[r,t,m,l,s]),b=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let k=new Set,$=!1;if(t.forEach(G=>{var K;let O=l.routes[G.route.id];!O||!O.hasLoader||(!y.some(nt=>nt.route.id===G.route.id)&&G.route.id in p&&((K=c[G.route.id])!=null&&K.shouldRevalidate)||O.hasClientLoader?$=!0:k.add(G.route.id))}),k.size===0)return[];let z=Qp(r,f);return $&&k.size>0&&z.searchParams.set("_routes",t.filter(G=>k.has(G.route.id)).map(G=>G.route.id).join(",")),[z.pathname+z.search]},[f,p,s,l,y,t,r,c]),w=H.useMemo(()=>Hp(_,l),[_,l]),N=Xp(_);return H.createElement(H.Fragment,null,b.map(k=>H.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...i})),w.map(k=>H.createElement("link",{key:k,rel:"modulepreload",href:k,...i})),N.map(({key:k,link:$})=>H.createElement("link",{key:k,...$})))}function Zp(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var U6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{U6&&(window.__reactRouterVersion="7.3.0")}catch{}function Jp({basename:r,children:t,window:i}){let s=H.useRef();s.current==null&&(s.current=B8({window:i,v5Compat:!0}));let l=s.current,[c,f]=H.useState({action:l.action,location:l.location}),p=H.useCallback(m=>{H.startTransition(()=>f(m))},[f]);return H.useLayoutEffect(()=>l.listen(p),[l,p]),H.createElement(Dp,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:l})}var P6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jr=H.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:m,to:y,preventScrollReset:_,viewTransition:b,...w},N){let{basename:k}=H.useContext(fi),$=typeof y=="string"&&P6.test(y),z,G=!1;if(typeof y=="string"&&$&&(z=y,U6))try{let S=new URL(window.location.href),D=y.startsWith("//")?new URL(S.protocol+y):new URL(y),V=fr(D.pathname,k);D.origin===S.origin&&V!=null?y=V+D.search+D.hash:G=!0}catch{ri(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=dp(y,{relative:l}),[K,nt,at]=Yp(s,w),ht=im(y,{replace:f,state:p,target:m,preventScrollReset:_,relative:l,viewTransition:b});function I(S){t&&t(S),S.defaultPrevented||ht(S)}let R=H.createElement("a",{...w,...at,href:z||O,onClick:G||c?t:I,ref:Zp(N,nt),target:m,"data-discover":!$&&i==="render"?"true":void 0});return K&&!$?H.createElement(H.Fragment,null,R,H.createElement($p,{page:O})):R});Jr.displayName="Link";var tm=H.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...y},_){let b=zl(f,{relative:y.relative}),w=da(),N=H.useContext(qc),{navigator:k,basename:$}=H.useContext(fi),z=N!=null&&lm(b)&&p===!0,G=k.encodeLocation?k.encodeLocation(b).pathname:b.pathname,O=w.pathname,K=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;i||(O=O.toLowerCase(),K=K?K.toLowerCase():null,G=G.toLowerCase()),K&&$&&(K=fr(K,$)||K);const nt=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let at=O===G||!l&&O.startsWith(G)&&O.charAt(nt)==="/",ht=K!=null&&(K===G||!l&&K.startsWith(G)&&K.charAt(G.length)==="/"),I={isActive:at,isPending:ht,isTransitioning:z},R=at?t:void 0,S;typeof s=="function"?S=s(I):S=[s,at?"active":null,ht?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(I):c;return H.createElement(Jr,{...y,"aria-current":R,className:S,ref:_,style:D,to:f,viewTransition:p},typeof m=="function"?m(I):m)});tm.displayName="NavLink";var em=H.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=yc,action:p,onSubmit:m,relative:y,preventScrollReset:_,viewTransition:b,...w},N)=>{let k=sm(),$=om(p,{relative:y}),z=f.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&P6.test(p),O=K=>{if(m&&m(K),K.defaultPrevented)return;K.preventDefault();let nt=K.nativeEvent.submitter,at=(nt==null?void 0:nt.getAttribute("formmethod"))||f;k(nt||K.currentTarget,{fetcherKey:t,method:at,navigate:i,replace:l,state:c,relative:y,preventScrollReset:_,viewTransition:b})};return H.createElement("form",{ref:N,method:z,action:$,onSubmit:s?m:O,...w,"data-discover":!G&&r==="render"?"true":void 0})});em.displayName="Form";function nm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z6(r){let t=H.useContext(uo);return me(t,nm(r)),t}function im(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let p=ho(),m=da(),y=zl(r,{relative:c});return H.useCallback(_=>{if(Op(_,t)){_.preventDefault();let b=i!==void 0?i:Ml(m)===Ml(y);p(r,{replace:b,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,p,y,i,s,t,r,l,c,f])}var rm=0,am=()=>`__${String(++rm)}__`;function sm(){let{router:r}=z6("useSubmit"),{basename:t}=H.useContext(fi),i=Sp();return H.useCallback(async(s,l={})=>{let{action:c,method:f,encType:p,formData:m,body:y}=Pp(s,t);if(l.navigate===!1){let _=l.fetcherKey||am();await r.fetch(_,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:y,formMethod:l.method||f,formEncType:l.encType||p,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:y,formMethod:l.method||f,formEncType:l.encType||p,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function om(r,{relative:t}={}){let{basename:i}=H.useContext(fi),s=H.useContext(Ui);me(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...zl(r||".",{relative:t})},f=da();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let _=p.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:cr([i,c.pathname])),Ml(c)}function lm(r,t={}){let i=H.useContext(M6);me(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=z6("useViewTransitionState"),l=zl(r,{relative:t.relative});if(!i.isTransitioning)return!1;let c=fr(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=fr(i.nextLocation.pathname,s)||i.nextLocation.pathname;return wc(l.pathname,f)!=null||wc(l.pathname,c)!=null}new TextEncoder;const j6=H.createContext(void 0),rs=()=>{const r=H.useContext(j6);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},um=({children:r})=>{const[t,i]=H.useState(null),[s,l]=H.useState(!1);H.useEffect(()=>{const m=localStorage.getItem("currentUser"),y=localStorage.getItem("isAdmin");console.log("AuthContext: Loading saved user from localStorage:",m),m&&(i(m),l(y==="true"),console.log("AuthContext: User restored:",m,"Admin:",y==="true"))},[]);const p={currentUser:t,isAdmin:s,login:(m,y=!1)=>{console.log("AuthContext: Logging in user:",m,"Admin:",y),i(m),l(y),localStorage.setItem("currentUser",m),localStorage.setItem("isAdmin",y.toString()),console.log("AuthContext: User saved to localStorage:",m)},logout:()=>{console.log("AuthContext: Logging out user"),i(null),l(!1),localStorage.removeItem("currentUser"),localStorage.removeItem("isAdmin")}};return T.jsx(j6.Provider,{value:p,children:r})},ea=({bgcolor:r="rgb(94, 136, 94, 0)",boxShadow:t=!1})=>{const{currentUser:i,isAdmin:s}=rs();return T.jsxs("div",{id:"navbar",style:{backgroundColor:r,boxShadow:t?"0 4px 8px -2px #222":"none"},children:[T.jsx("div",{className:"link",id:"homepage",children:T.jsx(Jr,{className:"a",to:"/HBWGreentrails/",children:"Home"})}),T.jsx("div",{className:"link",id:"volunteer",children:T.jsx(Jr,{className:"a",to:"/volenterpage/",children:"Volunteer!!"})}),T.jsx("div",{className:"link",id:"leaderboard",children:T.jsx(Jr,{className:"a",to:"/leaderboard/",children:"Leaderboards"})}),T.jsx("div",{className:"link",id:"santa",children:T.jsx(Jr,{className:"a",to:"/santa/",children:"🎅 Santa"})}),s&&T.jsx("div",{className:"link",id:"adddata",children:T.jsx(Jr,{className:"a",to:"/adddata/",children:"Add Event"})}),T.jsx("div",{className:"link",id:"Signup",children:T.jsx(Jr,{className:"a",to:"/signup/",children:i?`👤 ${i}`:"Sign up"})})]})},cm=""+new URL("groupme-DgGEjEd7.png",import.meta.url).href;function hm(r){const t=[],i=new Date;i.setHours(0,0,0,0);let s=new Date(r);for(s.setHours(0,0,0,0);s<i;)s.setDate(s.getDate()+14);r=s;for(let l=0;l<3;l++){const c=new Date(r);c.setDate(r.getDate()+l*14),t.push({date:c,id:l+1})}return t}function fm({nextMeetingDate:r}){const t=hm(r);return T.jsx("div",{children:t.map(i=>T.jsxs("p",{children:[i.date.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})," ","in Hang's room (510) at lunch!"]},i.id))})}const lf=()=>T.jsxs("div",{style:{backgroundColor:"rgb(17, 69, 59)"},children:[T.jsx(ea,{bgcolor:"#00000000",boxShadow:!1}),T.jsx("div",{className:"header",children:T.jsx("h1",{className:"first",children:"HBW Green Trails Club"})}),T.jsxs("div",{className:"importantinfo",children:[T.jsxs("div",{className:"groupme",children:[T.jsx("a",{href:"https://groupme.com/join_group/103922254/4v3j7TI7",children:T.jsx("img",{src:cm,alt:"Join our GroupMe!",width:"200px"})}),T.jsx("p",{children:"Click here to join our GroupMe for updates on meetings and events!!"})]}),T.jsxs("div",{className:"nextmeeting",children:[T.jsx("h2",{children:"Upcoming Meetings:"}),T.jsx(fm,{nextMeetingDate:new Date("2025-12-04T12:35:00")})]})]})]}),uf=()=>T.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 100 300 500",width:"100%",height:"100%",children:[T.jsx("rect",{x:"96.935",y:"583.508",width:"103.723",height:"89.44",style:{fill:"rgb(92, 60, 36)",stroke:"rgba(0, 0, 0, 0)"}}),T.jsx("path",{d:"M 151.753 331.446 L 296.742 595.399 L 6.763 595.399 L 151.753 331.446 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),T.jsx("path",{d:"M 151.812 229.395 L 261.692 461.009 L 41.931 461.009 L 151.812 229.395 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),T.jsx("path",{d:"M 152.135 182.123 L 223.661 334.201 L 80.609 334.201 L 152.135 182.123 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}})]}),cf=["#FF69B4","#FF1493","#FFB6C1","#FF69B4","#ff6f6f","#d161f7","#8a61ff","#61d7ff","#61ff8a","#ff6161","#ff61d7","#d7ff61"];function dm({children:r,flowers:t=0,grass:i=200,tileSize:s=0}){const l=H.useRef(null),c=H.useRef(null);return H.useEffect(()=>{const f=l.current,p=c.current;if(!f||!p)return;const m=f.getContext("2d");if(!m)return;let y=0,_=0;function b(){const I=p.getBoundingClientRect(),R=window.devicePixelRatio||1;y=Math.max(1,Math.floor(I.width)),_=Math.max(1,Math.floor(I.height)),f.width=Math.max(1,Math.floor(I.width*R)),f.height=Math.max(1,Math.floor(I.height*R)),f.style.width=`${I.width}px`,f.style.height=`${I.height}px`,m.setTransform(R,0,0,R,0,0),at()}function w(I,R,S,D){m.save(),m.translate(I,R);const V=Math.random()*Math.PI*2;m.rotate(V),m.fillStyle=D,m.restore()}function N(I){for(let R=0;R<I;R++){const S=Math.random()*(y+100)-50,D=Math.random()*(_+100)-50,V=Math.min(Math.max(Math.random()*26+4,4),30);w(S,D,V,`rgb(0, ${Math.floor(Math.random()*100+100)}, 0)`)}}function k(I,R,S,D,V,j){m.save(),m.translate(I,R),m.rotate(V),m.beginPath(),m.moveTo(0,0),m.lineTo(-D/2,-S),m.lineTo(D/2,-S),m.closePath(),m.fillStyle=j,m.fill(),m.restore()}function $(I,R,S){for(let D=0;D<S;D++){const V=(Math.random()-.5)*8,j=(Math.random()-.5)*8,M=10+Math.random()*8,ae=2+Math.random()*1.5,se=-.2+Math.random()*.4,ot=["#7CB342","#8BC34A","#689F38","#76B041"],vt=ot[Math.floor(Math.random()*ot.length)];k(I+V,R+j,M,ae,se,vt)}}function z(I){for(let R=0;R<I;R++){const S=Math.random()*y,D=Math.random()*_,V=Math.floor(3+Math.random()*4);$(S,D,V)}}function G(I,R,S){m.save(),m.translate(I,R),m.fillStyle=cf[Math.floor(Math.random()*cf.length)];const D=5;for(let V=0;V<D;V++){const j=V*(2*Math.PI/D),M=Math.cos(j)*S,ae=Math.sin(j)*S;m.beginPath(),m.arc(M,ae,S/2,0,2*Math.PI),m.fill()}m.beginPath(),m.arc(0,0,S/2,0,2*Math.PI),m.fill(),m.restore()}function O(I){for(let R=0;R<I;R++)G(Math.random()*y,Math.random()*_,4+Math.random()*4)}function K(){m.beginPath(),m.moveTo(y/2+30,5),m.lineTo(y/2-30,5),m.lineTo(y/2,40),m.stroke(),m.closePath(),m.fill()}function nt(I,R){z(R),O(I)}function at(){m.clearRect(0,0,y,_),nt(t,i),K(),N(8)}b();const ht=new ResizeObserver(b);return ht.observe(p),()=>{ht.disconnect()}},[t,i,s]),T.jsxs("div",{ref:c,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[T.jsx("canvas",{ref:l,style:{position:"absolute",left:0,top:0,zIndex:0,pointerEvents:"none"}}),T.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}const pm=()=>T.jsxs("div",{children:[T.jsx("div",{id:"tree1",children:T.jsx(uf,{})}),T.jsx("div",{id:"tree2",children:T.jsx(uf,{})}),T.jsx("footer",{children:T.jsx(dm,{children:T.jsx("div",{id:"road"})})})]}),mm=()=>T.jsx("div",{children:T.jsx("footer",{})}),Cc=()=>T.jsx(pm,{}),gm=()=>T.jsx("div",{id:"fullroad"}),Za=({message:r,shadow:t})=>T.jsx("header",{className:"App-header",children:T.jsx("h1",{id:"GreenTrails",style:{textShadow:t?"2px 2px black":"none",color:"rgb(255, 255, 255, 1)"},children:r})}),ym=()=>{};var hf={};/**
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
 */const B6=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},vm=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],f=r[i++],p=r[i++],m=((l&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(m>>10)),t[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[i++],f=r[i++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},H6={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,p=f?r[l+1]:0,m=l+2<r.length,y=m?r[l+2]:0,_=c>>2,b=(c&3)<<4|p>>4;let w=(p&15)<<2|y>>6,N=y&63;m||(N=64,f||(w=64)),s.push(i[_],i[b],i[w],i[N])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(B6(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):vm(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const b=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||p==null||y==null||b==null)throw new Cm;const w=c<<2|p>>4;if(s.push(w),y!==64){const N=p<<4&240|y>>2;if(s.push(N),b!==64){const k=y<<6&192|b;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Cm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(r){const t=B6(r);return H6.encodeByteArray(t,!0)},Rc=function(r){return _m(r).replace(/\./g,"")},Em=function(r){try{return H6.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Am=()=>Tm().__FIREBASE_DEFAULTS__,Sm=()=>{if(typeof process>"u"||typeof hf>"u")return;const r=hf.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},bm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Em(r[1]);return t&&JSON.parse(t)},r2=()=>{try{return ym()||Am()||Sm()||bm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},wm=r=>{var t,i;return(i=(t=r2())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},Rm=r=>{const t=wm(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),s]:[t.substring(0,i),s]},q6=()=>{var r;return(r=r2())===null||r===void 0?void 0:r.config};/**
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
 */function Dm(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Rc(JSON.stringify(i)),Rc(JSON.stringify(f)),""].join(".")}/**
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
 */function Mm(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Im(){var r;const t=(r=r2())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Vm(){return!Im()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function F6(){try{return typeof indexedDB=="object"}catch{return!1}}function G6(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}function Lm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Om="FirebaseError";class pa extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=Om,Object.setPrototypeOf(this,pa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gc.prototype.create)}}class Gc{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?km(c,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new pa(l,p,s)}}function km(r,t){return r.replace(Um,(i,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const Um=/\{\$([^}]+)}/g;function to(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const l of i){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(ff(c)&&ff(f)){if(!to(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function ff(r){return r!==null&&typeof r=="object"}/**
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
 */const Pm=1e3,zm=2,jm=4*60*60*1e3,Bm=.5;function df(r,t=Pm,i=zm){const s=t*Math.pow(i,r),l=Math.round(Bm*s*(Math.random()-.5)*2);return Math.min(jm,s+l)}/**
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
 */function Li(r){return r&&r._delegate?r._delegate:r}class dr{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $a="[DEFAULT]";/**
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
 */class Hm{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new xm;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fm(t))try{this.getOrInitializeService({instanceIdentifier:$a})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=$a){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$a){return this.instances.has(t)}getOptions(t=$a){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(l)}return l}onInit(t,i){var s;const l=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qm(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=$a){return this.component?this.component.multipleInstances?t:$a:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(r){return r===$a?void 0:r}function Fm(r){return r.instantiationMode==="EAGER"}/**
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
 */class Gm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Hm(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Qt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Qt||(Qt={}));const Qm={debug:Qt.DEBUG,verbose:Qt.VERBOSE,info:Qt.INFO,warn:Qt.WARN,error:Qt.ERROR,silent:Qt.SILENT},Km=Qt.INFO,Ym={[Qt.DEBUG]:"log",[Qt.VERBOSE]:"log",[Qt.INFO]:"info",[Qt.WARN]:"warn",[Qt.ERROR]:"error"},$m=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Ym[t];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class a2{constructor(t){this.name=t,this._logLevel=Km,this._logHandler=$m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Qt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Qt.DEBUG,...t),this._logHandler(this,Qt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Qt.VERBOSE,...t),this._logHandler(this,Qt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Qt.INFO,...t),this._logHandler(this,Qt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Qt.WARN,...t),this._logHandler(this,Qt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Qt.ERROR,...t),this._logHandler(this,Qt.ERROR,...t)}}const Xm=(r,t)=>t.some(i=>r instanceof i);let pf,mf;function Wm(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zm(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q6=new WeakMap,x4=new WeakMap,K6=new WeakMap,m4=new WeakMap,s2=new WeakMap;function Jm(r){const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(na(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Q6.set(i,r)}).catch(()=>{}),s2.set(t,r),t}function tg(r){if(x4.has(r))return;const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});x4.set(r,t)}let D4={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return x4.get(r);if(t==="objectStoreNames")return r.objectStoreNames||K6.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return na(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function eg(r){D4=r(D4)}function ng(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(g4(this),t,...i);return K6.set(s,t.sort?t.sort():[t]),na(s)}:Zm().includes(r)?function(...t){return r.apply(g4(this),t),na(Q6.get(this))}:function(...t){return na(r.apply(g4(this),t))}}function ig(r){return typeof r=="function"?ng(r):(r instanceof IDBTransaction&&tg(r),Xm(r,Wm())?new Proxy(r,D4):r)}function na(r){if(r instanceof IDBRequest)return Jm(r);if(m4.has(r))return m4.get(r);const t=ig(r);return t!==r&&(m4.set(r,t),s2.set(t,r)),t}const g4=r=>s2.get(r);function Y6(r,t,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),p=na(f);return s&&f.addEventListener("upgradeneeded",m=>{s(na(f.result),m.oldVersion,m.newVersion,na(f.transaction),m)}),i&&f.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const rg=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],y4=new Map;function gf(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(y4.get(t))return y4.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,l=ag.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||rg.includes(i)))return;const c=async function(f,...p){const m=this.transaction(f,l?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[i](...p),l&&m.done]))[0]};return y4.set(t,c),c}eg(r=>({...r,get:(t,i,s)=>gf(t,i)||r.get(t,i,s),has:(t,i)=>!!gf(t,i)||r.has(t,i)}));/**
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
 */const pr=new a2("@firebase/app"),lg="@firebase/app-compat",ug="@firebase/analytics-compat",cg="@firebase/analytics",hg="@firebase/app-check-compat",fg="@firebase/app-check",dg="@firebase/auth",pg="@firebase/auth-compat",mg="@firebase/database",gg="@firebase/data-connect",yg="@firebase/database-compat",vg="@firebase/functions",Cg="@firebase/functions-compat",_g="@firebase/installations",Eg="@firebase/installations-compat",Tg="@firebase/messaging",Ag="@firebase/messaging-compat",Sg="@firebase/performance",bg="@firebase/performance-compat",wg="@firebase/remote-config",Rg="@firebase/remote-config-compat",xg="@firebase/storage",Dg="@firebase/storage-compat",Mg="@firebase/firestore",Ig="@firebase/vertexai",Ng="@firebase/firestore-compat",Vg="firebase",Lg="11.4.0";/**
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
 */const I4="[DEFAULT]",Og={[M4]:"fire-core",[lg]:"fire-core-compat",[cg]:"fire-analytics",[ug]:"fire-analytics-compat",[fg]:"fire-app-check",[hg]:"fire-app-check-compat",[dg]:"fire-auth",[pg]:"fire-auth-compat",[mg]:"fire-rtdb",[gg]:"fire-data-connect",[yg]:"fire-rtdb-compat",[vg]:"fire-fn",[Cg]:"fire-fn-compat",[_g]:"fire-iid",[Eg]:"fire-iid-compat",[Tg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Sg]:"fire-perf",[bg]:"fire-perf-compat",[wg]:"fire-rc",[Rg]:"fire-rc-compat",[xg]:"fire-gcs",[Dg]:"fire-gcs-compat",[Mg]:"fire-fst",[Ng]:"fire-fst-compat",[Ig]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const xc=new Map,kg=new Map,N4=new Map;function vf(r,t){try{r.container.addComponent(t)}catch(i){pr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function sa(r){const t=r.name;if(N4.has(t))return pr.debug(`There were multiple attempts to register component ${t}.`),!1;N4.set(t,r);for(const i of xc.values())vf(i,r);for(const i of kg.values())vf(i,r);return!0}function jl(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Ug(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Pg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ia=new Gc("app","Firebase",Pg);/**
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
 */class zg{constructor(t,i,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}/**
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
 */const jg=Lg;function $6(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:I4,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw ia.create("bad-app-name",{appName:String(l)});if(i||(i=q6()),!i)throw ia.create("no-options");const c=xc.get(l);if(c){if(to(i,c.options)&&to(s,c.config))return c;throw ia.create("duplicate-app",{appName:l})}const f=new Gm(l);for(const m of N4.values())f.addComponent(m);const p=new zg(i,s,f);return xc.set(l,p),p}function X6(r=I4){const t=xc.get(r);if(!t&&r===I4&&q6())return $6();if(!t)throw ia.create("no-app",{appName:r});return t}function Mi(r,t,i){var s;let l=(s=Og[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const p=[`Unable to register library "${l}" with version "${t}":`];c&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pr.warn(p.join(" "));return}sa(new dr(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const Bg="firebase-heartbeat-database",Hg=1,Il="firebase-heartbeat-store";let v4=null;function W6(){return v4||(v4=Y6(Bg,Hg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(i){console.warn(i)}}}}).catch(r=>{throw ia.create("idb-open",{originalErrorMessage:r.message})})),v4}async function qg(r){try{const i=(await W6()).transaction(Il),s=await i.objectStore(Il).get(Z6(r));return await i.done,s}catch(t){if(t instanceof pa)pr.warn(t.message);else{const i=ia.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pr.warn(i.message)}}}async function Cf(r,t){try{const s=(await W6()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,Z6(r)),await s.done}catch(i){if(i instanceof pa)pr.warn(i.message);else{const s=ia.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});pr.warn(s.message)}}}function Z6(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Fg=1024,Gg=30;class Qg{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Yg(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=_f();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Gg){const f=$g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=_f(),{heartbeatsToSend:s,unsentEntries:l}=Kg(this._heartbeatsCache.heartbeats),c=Rc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return pr.warn(i),""}}}function _f(){return new Date().toISOString().substring(0,10)}function Kg(r,t=Fg){const i=[];let s=r.slice();for(const l of r){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),Ef(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Ef(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Yg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return F6()?G6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await qg(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function Ef(r){return Rc(JSON.stringify({version:2,heartbeats:r})).length}function $g(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
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
 */function Xg(r){sa(new dr("platform-logger",t=>new sg(t),"PRIVATE")),sa(new dr("heartbeat",t=>new Qg(t),"PRIVATE")),Mi(M4,yf,r),Mi(M4,yf,"esm2017"),Mi("fire-js","")}Xg("");var Wg="firebase",Zg="11.4.0";/**
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
 */Mi(Wg,Zg,"app");const J6="@firebase/installations",o2="0.6.13";/**
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
 */const iy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ja=new Gc(ey,ny,iy);function i9(r){return r instanceof pa&&r.code.includes("request-failed")}/**
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
 */function r9({projectId:r}){return`${Jg}/projects/${r}/installations`}function a9(r){return{token:r.token,requestStatus:2,expiresIn:ay(r.expiresIn),creationTime:Date.now()}}async function s9(r,t){const s=(await t.json()).error;return Ja.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function o9({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ry(r,{refreshToken:t}){const i=o9(r);return i.append("Authorization",sy(t)),i}async function l9(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ay(r){return Number(r.replace("s","000"))}function sy(r){return`${n9} ${r}`}/**
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
 */function Qc(r){return`${r.appName}!${r.appId}`}/**
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
 */const c9=new Map;function h9(r,t){const i=Qc(r);f9(i,t),fy(i,t)}function f9(r,t){const i=c9.get(r);if(i)for(const s of i)s(t)}function fy(r,t){const i=dy();i&&i.postMessage({key:r,fid:t}),py()}let Xa=null;function dy(){return!Xa&&"BroadcastChannel"in self&&(Xa=new BroadcastChannel("[Firebase] FID Change"),Xa.onmessage=r=>{f9(r.data.key,r.data.fid)}),Xa}function py(){c9.size===0&&Xa&&(Xa.close(),Xa=null)}/**
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
 */const my="firebase-installations-database",gy=1,ts="firebase-installations-store";let C4=null;function l2(){return C4||(C4=Y6(my,gy,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ts)}}})),C4}async function Dc(r,t){const i=Qc(r),l=(await l2()).transaction(ts,"readwrite"),c=l.objectStore(ts),f=await c.get(i);return await c.put(t,i),await l.done,(!f||f.fid!==t.fid)&&h9(r,t.fid),t}async function d9(r){const t=Qc(r),s=(await l2()).transaction(ts,"readwrite");await s.objectStore(ts).delete(t),await s.done}async function Kc(r,t){const i=Qc(r),l=(await l2()).transaction(ts,"readwrite"),c=l.objectStore(ts),f=await c.get(i),p=t(f);return p===void 0?await c.delete(i):await c.put(p,i),await l.done,p&&(!f||f.fid!==p.fid)&&h9(r,p.fid),p}/**
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
 */async function u2(r){let t;const i=await Kc(r.appConfig,s=>{const l=yy(s),c=vy(r,l);return t=c.registrationPromise,c.installationEntry});return i.fid===V4?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function yy(r){const t=r||{fid:cy(),registrationStatus:0};return p9(t)}function vy(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ja.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Cy(r,i);return{installationEntry:i,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_y(r)}:{installationEntry:t}}async function Cy(r,t){try{const i=await oy(r,t);return Dc(r.appConfig,i)}catch(i){throw i9(i)&&i.customData.serverCode===409?await d9(r.appConfig):await Dc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function _y(r){let t=await Tf(r.appConfig);for(;t.registrationStatus===1;)await u9(100),t=await Tf(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await u2(r);return s||i}return t}function Tf(r){return Kc(r,t=>{if(!t)throw Ja.create("installation-not-found");return p9(t)})}function p9(r){return Ey(r)?{fid:r.fid,registrationStatus:0}:r}function Ey(r){return r.registrationStatus===1&&r.registrationTime+t9<Date.now()}/**
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
 */async function c2(r,t=!1){let i;const s=await Kc(r.appConfig,c=>{if(!m9(c))throw Ja.create("not-registered");const f=c.authToken;if(!t&&wy(f))return c;if(f.requestStatus===1)return i=Sy(r,t),c;{if(!navigator.onLine)throw Ja.create("app-offline");const p=xy(c);return i=by(r,p),p}});return i?await i:s.authToken}async function Sy(r,t){let i=await Af(r.appConfig);for(;i.authToken.requestStatus===1;)await u9(100),i=await Af(r.appConfig);const s=i.authToken;return s.requestStatus===0?c2(r,t):s}function Af(r){return Kc(r,t=>{if(!m9(t))throw Ja.create("not-registered");const i=t.authToken;return Dy(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function by(r,t){try{const i=await Ty(r,t),s=Object.assign(Object.assign({},t),{authToken:i});return await Dc(r.appConfig,s),i}catch(i){if(i9(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await d9(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Dc(r.appConfig,s)}throw i}}function m9(r){return r!==void 0&&r.registrationStatus===2}function wy(r){return r.requestStatus===2&&!Ry(r)}function Ry(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+ty}function xy(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function Dy(r){return r.requestStatus===1&&r.requestTime+t9<Date.now()}/**
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
 */function Vy(r){if(!r||!r.options)throw _4("App Configuration");if(!r.name)throw _4("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw _4(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function _4(r){return Ja.create("missing-app-config-values",{valueName:r})}/**
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
 */const g9="installations",Ly="installations-internal",Oy=r=>{const t=r.getProvider("app").getImmediate(),i=Vy(t),s=jl(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ky=r=>{const t=r.getProvider("app").getImmediate(),i=jl(t,g9).getImmediate();return{getId:()=>My(i),getToken:l=>Iy(i,l)}};function Uy(){sa(new dr(g9,Oy,"PUBLIC")),sa(new dr(Ly,ky,"PRIVATE"))}Uy();Mi(J6,o2);Mi(J6,o2,"esm2017");/**
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
 */const Mc="analytics",Py="firebase_id",zy="origin",jy=60*1e3,By="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h2="https://www.googletagmanager.com/gtag/js";/**
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
 */const wn=new a2("@firebase/analytics");/**
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
 */const Hy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pn=new Gc("analytics","Analytics",Hy);/**
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
 */function qy(r){if(!r.startsWith(h2)){const t=Pn.create("invalid-gtag-resource",{gtagURL:r});return wn.warn(t.message),""}return r}function y9(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function Fy(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function Gy(r,t){const i=Fy("firebase-js-sdk-policy",{createScriptURL:qy}),s=document.createElement("script"),l=`${h2}?l=${r}&id=${t}`;s.src=i?i==null?void 0:i.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Qy(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Ky(r,t,i,s,l,c){const f=s[l];try{if(f)await t[f];else{const m=(await y9(i)).find(y=>y.measurementId===l);m&&await t[m.appId]}}catch(p){wn.error(p)}r("config",l,c)}async function Yy(r,t,i,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const p=await y9(i);for(const m of f){const y=p.find(b=>b.measurementId===m),_=y&&t[y.appId];if(_)c.push(_);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){wn.error(c)}}function $y(r,t,i,s){async function l(c,...f){try{if(c==="event"){const[p,m]=f;await Yy(r,t,i,p,m)}else if(c==="config"){const[p,m]=f;await Ky(r,t,i,s,p,m)}else if(c==="consent"){const[p,m]=f;r("consent",p,m)}else if(c==="get"){const[p,m,y]=f;r("get",p,m,y)}else if(c==="set"){const[p]=f;r("set",p)}else r(c,...f)}catch(p){wn.error(p)}}return l}function Xy(r,t,i,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=$y(c,r,t,i),{gtagCore:c,wrappedGtag:window[l]}}function Wy(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(h2)&&i.src.includes(r))return i;return null}/**
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
 */const Zy=30,Jy=1e3;class tv{constructor(t={},i=Jy){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const v9=new tv;function ev(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function nv(r){var t;const{appId:i,apiKey:s}=r,l={method:"GET",headers:ev(s)},c=By.replace("{app-id}",i),f=await fetch(c,l);if(f.status!==200&&f.status!==304){let p="";try{const m=await f.json();!((t=m.error)===null||t===void 0)&&t.message&&(p=m.error.message)}catch{}throw Pn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:p})}return f.json()}async function iv(r,t=v9,i){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw Pn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw Pn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new sv;return setTimeout(async()=>{p.abort()},jy),C9({appId:s,apiKey:l,measurementId:c},f,p,t)}async function C9(r,{throttleEndTimeMillis:t,backoffCount:i},s,l=v9){var c;const{appId:f,measurementId:p}=r;try{await rv(s,t)}catch(m){if(p)return wn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:f,measurementId:p};throw m}try{const m=await nv(r);return l.deleteThrottleMetadata(f),m}catch(m){const y=m;if(!av(y)){if(l.deleteThrottleMetadata(f),p)return wn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:p};throw m}const _=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?df(i,l.intervalMillis,Zy):df(i,l.intervalMillis),b={throttleEndTimeMillis:Date.now()+_,backoffCount:i+1};return l.setThrottleMetadata(f,b),wn.debug(`Calling attemptFetch again in ${_} millis`),C9(r,b,s,l)}}function rv(r,t){return new Promise((i,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(c),s(Pn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function av(r){if(!(r instanceof pa)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class sv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ov(r,t,i,s,l){if(l&&l.global){r("event",i,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",i,f)}}/**
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
 */async function lv(){if(F6())try{await G6()}catch(r){return wn.warn(Pn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return wn.warn(Pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uv(r,t,i,s,l,c,f){var p;const m=iv(r);m.then(N=>{i[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&wn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>wn.error(N)),t.push(m);const y=lv().then(N=>{if(N)return s.getId()}),[_,b]=await Promise.all([m,y]);Wy(c)||Gy(c,_.measurementId),l("js",new Date);const w=(p=f==null?void 0:f.config)!==null&&p!==void 0?p:{};return w[zy]="firebase",w.update=!0,b!=null&&(w[Py]=b),l("config",_.measurementId,w),_.measurementId}/**
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
 */class cv{constructor(t){this.app=t}_delete(){return delete bl[this.app.options.appId],Promise.resolve()}}let bl={},Sf=[];const bf={};let E4="dataLayer",hv="gtag",wf,_9,Rf=!1;function fv(){const r=[];if(Nm()&&r.push("This is a browser extension environment."),Lm()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),i=Pn.create("invalid-analytics-context",{errorInfo:t});wn.warn(i.message)}}function dv(r,t,i){fv();const s=r.options.appId;if(!s)throw Pn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)wn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pn.create("no-api-key");if(bl[s]!=null)throw Pn.create("already-exists",{id:s});if(!Rf){Qy(E4);const{wrappedGtag:c,gtagCore:f}=Xy(bl,Sf,bf,E4,hv);_9=c,wf=f,Rf=!0}return bl[s]=uv(r,Sf,bf,t,wf,E4,i),new cv(r)}function pv(r=X6()){r=Li(r);const t=jl(r,Mc);return t.isInitialized()?t.getImmediate():mv(r)}function mv(r,t={}){const i=jl(r,Mc);if(i.isInitialized()){const l=i.getImmediate();if(to(t,i.getOptions()))return l;throw Pn.create("already-initialized")}return i.initialize({options:t})}function gv(r,t,i,s){r=Li(r),ov(_9,bl[r.app.options.appId],t,i,s).catch(l=>wn.error(l))}const xf="@firebase/analytics",Df="0.10.12";function yv(){sa(new dr(Mc,(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return dv(s,l,i)},"PUBLIC")),sa(new dr("analytics-internal",r,"PRIVATE")),Mi(xf,Df),Mi(xf,Df,"esm2017");function r(t){try{const i=t.getProvider(Mc).getImmediate();return{logEvent:(s,l,c)=>gv(i,s,l,c)}}catch(i){throw Pn.create("interop-component-reg-failed",{reason:i})}}}yv();var Mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,E9;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,R){function S(){}S.prototype=R.prototype,I.D=R.prototype,I.prototype=new S,I.prototype.constructor=I,I.C=function(D,V,j){for(var M=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)M[ae-2]=arguments[ae];return R.prototype[V].apply(D,M)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(I,R,S){S||(S=0);var D=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)D[V]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(V=0;16>V;++V)D[V]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=I.g[0],S=I.g[1],V=I.g[2];var j=I.g[3],M=R+(j^S&(V^j))+D[0]+3614090360&4294967295;R=S+(M<<7&4294967295|M>>>25),M=j+(V^R&(S^V))+D[1]+3905402710&4294967295,j=R+(M<<12&4294967295|M>>>20),M=V+(S^j&(R^S))+D[2]+606105819&4294967295,V=j+(M<<17&4294967295|M>>>15),M=S+(R^V&(j^R))+D[3]+3250441966&4294967295,S=V+(M<<22&4294967295|M>>>10),M=R+(j^S&(V^j))+D[4]+4118548399&4294967295,R=S+(M<<7&4294967295|M>>>25),M=j+(V^R&(S^V))+D[5]+1200080426&4294967295,j=R+(M<<12&4294967295|M>>>20),M=V+(S^j&(R^S))+D[6]+2821735955&4294967295,V=j+(M<<17&4294967295|M>>>15),M=S+(R^V&(j^R))+D[7]+4249261313&4294967295,S=V+(M<<22&4294967295|M>>>10),M=R+(j^S&(V^j))+D[8]+1770035416&4294967295,R=S+(M<<7&4294967295|M>>>25),M=j+(V^R&(S^V))+D[9]+2336552879&4294967295,j=R+(M<<12&4294967295|M>>>20),M=V+(S^j&(R^S))+D[10]+4294925233&4294967295,V=j+(M<<17&4294967295|M>>>15),M=S+(R^V&(j^R))+D[11]+2304563134&4294967295,S=V+(M<<22&4294967295|M>>>10),M=R+(j^S&(V^j))+D[12]+1804603682&4294967295,R=S+(M<<7&4294967295|M>>>25),M=j+(V^R&(S^V))+D[13]+4254626195&4294967295,j=R+(M<<12&4294967295|M>>>20),M=V+(S^j&(R^S))+D[14]+2792965006&4294967295,V=j+(M<<17&4294967295|M>>>15),M=S+(R^V&(j^R))+D[15]+1236535329&4294967295,S=V+(M<<22&4294967295|M>>>10),M=R+(V^j&(S^V))+D[1]+4129170786&4294967295,R=S+(M<<5&4294967295|M>>>27),M=j+(S^V&(R^S))+D[6]+3225465664&4294967295,j=R+(M<<9&4294967295|M>>>23),M=V+(R^S&(j^R))+D[11]+643717713&4294967295,V=j+(M<<14&4294967295|M>>>18),M=S+(j^R&(V^j))+D[0]+3921069994&4294967295,S=V+(M<<20&4294967295|M>>>12),M=R+(V^j&(S^V))+D[5]+3593408605&4294967295,R=S+(M<<5&4294967295|M>>>27),M=j+(S^V&(R^S))+D[10]+38016083&4294967295,j=R+(M<<9&4294967295|M>>>23),M=V+(R^S&(j^R))+D[15]+3634488961&4294967295,V=j+(M<<14&4294967295|M>>>18),M=S+(j^R&(V^j))+D[4]+3889429448&4294967295,S=V+(M<<20&4294967295|M>>>12),M=R+(V^j&(S^V))+D[9]+568446438&4294967295,R=S+(M<<5&4294967295|M>>>27),M=j+(S^V&(R^S))+D[14]+3275163606&4294967295,j=R+(M<<9&4294967295|M>>>23),M=V+(R^S&(j^R))+D[3]+4107603335&4294967295,V=j+(M<<14&4294967295|M>>>18),M=S+(j^R&(V^j))+D[8]+1163531501&4294967295,S=V+(M<<20&4294967295|M>>>12),M=R+(V^j&(S^V))+D[13]+2850285829&4294967295,R=S+(M<<5&4294967295|M>>>27),M=j+(S^V&(R^S))+D[2]+4243563512&4294967295,j=R+(M<<9&4294967295|M>>>23),M=V+(R^S&(j^R))+D[7]+1735328473&4294967295,V=j+(M<<14&4294967295|M>>>18),M=S+(j^R&(V^j))+D[12]+2368359562&4294967295,S=V+(M<<20&4294967295|M>>>12),M=R+(S^V^j)+D[5]+4294588738&4294967295,R=S+(M<<4&4294967295|M>>>28),M=j+(R^S^V)+D[8]+2272392833&4294967295,j=R+(M<<11&4294967295|M>>>21),M=V+(j^R^S)+D[11]+1839030562&4294967295,V=j+(M<<16&4294967295|M>>>16),M=S+(V^j^R)+D[14]+4259657740&4294967295,S=V+(M<<23&4294967295|M>>>9),M=R+(S^V^j)+D[1]+2763975236&4294967295,R=S+(M<<4&4294967295|M>>>28),M=j+(R^S^V)+D[4]+1272893353&4294967295,j=R+(M<<11&4294967295|M>>>21),M=V+(j^R^S)+D[7]+4139469664&4294967295,V=j+(M<<16&4294967295|M>>>16),M=S+(V^j^R)+D[10]+3200236656&4294967295,S=V+(M<<23&4294967295|M>>>9),M=R+(S^V^j)+D[13]+681279174&4294967295,R=S+(M<<4&4294967295|M>>>28),M=j+(R^S^V)+D[0]+3936430074&4294967295,j=R+(M<<11&4294967295|M>>>21),M=V+(j^R^S)+D[3]+3572445317&4294967295,V=j+(M<<16&4294967295|M>>>16),M=S+(V^j^R)+D[6]+76029189&4294967295,S=V+(M<<23&4294967295|M>>>9),M=R+(S^V^j)+D[9]+3654602809&4294967295,R=S+(M<<4&4294967295|M>>>28),M=j+(R^S^V)+D[12]+3873151461&4294967295,j=R+(M<<11&4294967295|M>>>21),M=V+(j^R^S)+D[15]+530742520&4294967295,V=j+(M<<16&4294967295|M>>>16),M=S+(V^j^R)+D[2]+3299628645&4294967295,S=V+(M<<23&4294967295|M>>>9),M=R+(V^(S|~j))+D[0]+4096336452&4294967295,R=S+(M<<6&4294967295|M>>>26),M=j+(S^(R|~V))+D[7]+1126891415&4294967295,j=R+(M<<10&4294967295|M>>>22),M=V+(R^(j|~S))+D[14]+2878612391&4294967295,V=j+(M<<15&4294967295|M>>>17),M=S+(j^(V|~R))+D[5]+4237533241&4294967295,S=V+(M<<21&4294967295|M>>>11),M=R+(V^(S|~j))+D[12]+1700485571&4294967295,R=S+(M<<6&4294967295|M>>>26),M=j+(S^(R|~V))+D[3]+2399980690&4294967295,j=R+(M<<10&4294967295|M>>>22),M=V+(R^(j|~S))+D[10]+4293915773&4294967295,V=j+(M<<15&4294967295|M>>>17),M=S+(j^(V|~R))+D[1]+2240044497&4294967295,S=V+(M<<21&4294967295|M>>>11),M=R+(V^(S|~j))+D[8]+1873313359&4294967295,R=S+(M<<6&4294967295|M>>>26),M=j+(S^(R|~V))+D[15]+4264355552&4294967295,j=R+(M<<10&4294967295|M>>>22),M=V+(R^(j|~S))+D[6]+2734768916&4294967295,V=j+(M<<15&4294967295|M>>>17),M=S+(j^(V|~R))+D[13]+1309151649&4294967295,S=V+(M<<21&4294967295|M>>>11),M=R+(V^(S|~j))+D[4]+4149444226&4294967295,R=S+(M<<6&4294967295|M>>>26),M=j+(S^(R|~V))+D[11]+3174756917&4294967295,j=R+(M<<10&4294967295|M>>>22),M=V+(R^(j|~S))+D[2]+718787259&4294967295,V=j+(M<<15&4294967295|M>>>17),M=S+(j^(V|~R))+D[9]+3951481745&4294967295,I.g[0]=I.g[0]+R&4294967295,I.g[1]=I.g[1]+(V+(M<<21&4294967295|M>>>11))&4294967295,I.g[2]=I.g[2]+V&4294967295,I.g[3]=I.g[3]+j&4294967295}s.prototype.u=function(I,R){R===void 0&&(R=I.length);for(var S=R-this.blockSize,D=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=S;)l(this,I,j),j+=this.blockSize;if(typeof I=="string"){for(;j<R;)if(D[V++]=I.charCodeAt(j++),V==this.blockSize){l(this,D),V=0;break}}else for(;j<R;)if(D[V++]=I[j++],V==this.blockSize){l(this,D),V=0;break}}this.h=V,this.o+=R},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var R=1;R<I.length-8;++R)I[R]=0;var S=8*this.o;for(R=I.length-8;R<I.length;++R)I[R]=S&255,S/=256;for(this.u(I),I=Array(16),R=S=0;4>R;++R)for(var D=0;32>D;D+=8)I[S++]=this.g[R]>>>D&255;return I};function c(I,R){var S=p;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=R(I)}function f(I,R){this.h=R;for(var S=[],D=!0,V=I.length-1;0<=V;V--){var j=I[V]|0;D&&j==R||(S[V]=j,D=!1)}this.g=S}var p={};function m(I){return-128<=I&&128>I?c(I,function(R){return new f([R|0],0>R?-1:0)}):new f([I|0],0>I?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return b;if(0>I)return z(y(-I));for(var R=[],S=1,D=0;I>=S;D++)R[D]=I/S|0,S*=4294967296;return new f(R,0)}function _(I,R){if(I.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(I.charAt(0)=="-")return z(_(I.substring(1),R));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(R,8)),D=b,V=0;V<I.length;V+=8){var j=Math.min(8,I.length-V),M=parseInt(I.substring(V,V+j),R);8>j?(j=y(Math.pow(R,j)),D=D.j(j).add(y(M))):(D=D.j(S),D=D.add(y(M)))}return D}var b=m(0),w=m(1),N=m(16777216);r=f.prototype,r.m=function(){if($(this))return-z(this).m();for(var I=0,R=1,S=0;S<this.g.length;S++){var D=this.i(S);I+=(0<=D?D:4294967296+D)*R,R*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if($(this))return"-"+z(this).toString(I);for(var R=y(Math.pow(I,6)),S=this,D="";;){var V=nt(S,R).g;S=G(S,V.j(R));var j=((0<S.g.length?S.g[0]:S.h)>>>0).toString(I);if(S=V,k(S))return j+D;for(;6>j.length;)j="0"+j;D=j+D}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var R=0;R<I.g.length;R++)if(I.g[R]!=0)return!1;return!0}function $(I){return I.h==-1}r.l=function(I){return I=G(this,I),$(I)?-1:k(I)?0:1};function z(I){for(var R=I.g.length,S=[],D=0;D<R;D++)S[D]=~I.g[D];return new f(S,~I.h).add(w)}r.abs=function(){return $(this)?z(this):this},r.add=function(I){for(var R=Math.max(this.g.length,I.g.length),S=[],D=0,V=0;V<=R;V++){var j=D+(this.i(V)&65535)+(I.i(V)&65535),M=(j>>>16)+(this.i(V)>>>16)+(I.i(V)>>>16);D=M>>>16,j&=65535,M&=65535,S[V]=M<<16|j}return new f(S,S[S.length-1]&-2147483648?-1:0)};function G(I,R){return I.add(z(R))}r.j=function(I){if(k(this)||k(I))return b;if($(this))return $(I)?z(this).j(z(I)):z(z(this).j(I));if($(I))return z(this.j(z(I)));if(0>this.l(N)&&0>I.l(N))return y(this.m()*I.m());for(var R=this.g.length+I.g.length,S=[],D=0;D<2*R;D++)S[D]=0;for(D=0;D<this.g.length;D++)for(var V=0;V<I.g.length;V++){var j=this.i(D)>>>16,M=this.i(D)&65535,ae=I.i(V)>>>16,se=I.i(V)&65535;S[2*D+2*V]+=M*se,O(S,2*D+2*V),S[2*D+2*V+1]+=j*se,O(S,2*D+2*V+1),S[2*D+2*V+1]+=M*ae,O(S,2*D+2*V+1),S[2*D+2*V+2]+=j*ae,O(S,2*D+2*V+2)}for(D=0;D<R;D++)S[D]=S[2*D+1]<<16|S[2*D];for(D=R;D<2*R;D++)S[D]=0;return new f(S,0)};function O(I,R){for(;(I[R]&65535)!=I[R];)I[R+1]+=I[R]>>>16,I[R]&=65535,R++}function K(I,R){this.g=I,this.h=R}function nt(I,R){if(k(R))throw Error("division by zero");if(k(I))return new K(b,b);if($(I))return R=nt(z(I),R),new K(z(R.g),z(R.h));if($(R))return R=nt(I,z(R)),new K(z(R.g),R.h);if(30<I.g.length){if($(I)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var S=w,D=R;0>=D.l(I);)S=at(S),D=at(D);var V=ht(S,1),j=ht(D,1);for(D=ht(D,2),S=ht(S,2);!k(D);){var M=j.add(D);0>=M.l(I)&&(V=V.add(S),j=M),D=ht(D,1),S=ht(S,1)}return R=G(I,V.j(R)),new K(V,R)}for(V=b;0<=I.l(R);){for(S=Math.max(1,Math.floor(I.m()/R.m())),D=Math.ceil(Math.log(S)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),j=y(S),M=j.j(R);$(M)||0<M.l(I);)S-=D,j=y(S),M=j.j(R);k(j)&&(j=w),V=V.add(j),I=G(I,M)}return new K(V,I)}r.A=function(I){return nt(this,I).h},r.and=function(I){for(var R=Math.max(this.g.length,I.g.length),S=[],D=0;D<R;D++)S[D]=this.i(D)&I.i(D);return new f(S,this.h&I.h)},r.or=function(I){for(var R=Math.max(this.g.length,I.g.length),S=[],D=0;D<R;D++)S[D]=this.i(D)|I.i(D);return new f(S,this.h|I.h)},r.xor=function(I){for(var R=Math.max(this.g.length,I.g.length),S=[],D=0;D<R;D++)S[D]=this.i(D)^I.i(D);return new f(S,this.h^I.h)};function at(I){for(var R=I.g.length+1,S=[],D=0;D<R;D++)S[D]=I.i(D)<<1|I.i(D-1)>>>31;return new f(S,I.h)}function ht(I,R){var S=R>>5;R%=32;for(var D=I.g.length-S,V=[],j=0;j<D;j++)V[j]=0<R?I.i(j+S)>>>R|I.i(j+S+1)<<32-R:I.i(j+S);return new f(V,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,E9=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=_,ra=f}).apply(typeof Mf<"u"?Mf:typeof self<"u"?self:typeof window<"u"?window:{});var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T9,El,A9,_c,L4,S9,b9,w9;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof fc=="object"&&fc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=i(this);function l(u,g){if(g)t:{var v=s;u=u.split(".");for(var A=0;A<u.length-1;A++){var q=u[A];if(!(q in v))break t;v=v[q]}u=u[u.length-1],A=v[u],g=g(A),g!=A&&g!=null&&t(v,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var v=0,A=!1,q={next:function(){if(!A&&v<u.length){var Y=v++;return{value:g(Y,u[Y]),done:!1}}return A=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}l("Array.prototype.values",function(u){return u||function(){return c(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function y(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function _(u,g,v){return u.call.apply(u.bind,arguments)}function b(u,g,v){if(!u)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,A),u.apply(g,q)}}return function(){return u.apply(g,arguments)}}function w(u,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:b,w.apply(null,arguments)}function N(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),u.apply(this,A)}}function k(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(A,q,Y){for(var st=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)st[Ht-2]=arguments[Ht];return g.prototype[q].apply(A,st)}}function $(u){const g=u.length;if(0<g){const v=Array(g);for(let A=0;A<g;A++)v[A]=u[A];return v}return[]}function z(u,g){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const q=u.length||0,Y=A.length||0;u.length=q+Y;for(let st=0;st<Y;st++)u[q+st]=A[st]}else u.push(A)}}class G{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function O(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function nt(u){return nt[" "](u),u}nt[" "]=function(){};var at=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ht(u,g,v){for(const A in u)g.call(v,u[A],A,u)}function I(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function R(u){const g={};for(const v in u)g[v]=u[v];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(u,g){let v,A;for(let q=1;q<arguments.length;q++){A=arguments[q];for(v in A)u[v]=A[v];for(let Y=0;Y<S.length;Y++)v=S[Y],Object.prototype.hasOwnProperty.call(A,v)&&(u[v]=A[v])}}function V(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function j(u){p.setTimeout(()=>{throw u},0)}function M(){var u=Bt;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class ae{constructor(){this.h=this.g=null}add(g,v){const A=se.get();A.set(g,v),this.h?this.h.next=A:this.g=A,this.h=A}}var se=new G(()=>new ot,u=>u.reset());class ot{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,mt=!1,Bt=new ae,L=()=>{const u=p.Promise.resolve(void 0);vt=()=>{u.then(it)}};var it=()=>{for(var u;u=M();){try{u.h.call(u.g)}catch(v){j(v)}var g=se;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}mt=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};p.addEventListener("test",v,g),p.removeEventListener("test",v,g)}catch{}return u}();function St(u,g){if(lt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,A=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(at){t:{try{nt(g.nodeName);var q=!0;break t}catch{}q=!1}q||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:bt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&St.aa.h.call(this)}}k(St,lt);var bt={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),kt=0;function de(u,g,v,A,q){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!A,this.ha=q,this.key=++kt,this.da=this.fa=!1}function Yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Pt(u){this.src=u,this.g={},this.h=0}Pt.prototype.add=function(u,g,v,A,q){var Y=u.toString();u=this.g[Y],u||(u=this.g[Y]=[],this.h++);var st=ee(u,g,A,q);return-1<st?(g=u[st],v||(g.fa=!1)):(g=new de(g,this.src,Y,!!A,q),g.fa=v,u.push(g)),g};function Tt(u,g){var v=g.type;if(v in u.g){var A=u.g[v],q=Array.prototype.indexOf.call(A,g,void 0),Y;(Y=0<=q)&&Array.prototype.splice.call(A,q,1),Y&&(Yt(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function ee(u,g,v,A){for(var q=0;q<u.length;++q){var Y=u[q];if(!Y.da&&Y.listener==g&&Y.capture==!!v&&Y.ha==A)return q}return-1}var Ze="closure_lm_"+(1e6*Math.random()|0),un={};function Je(u,g,v,A,q){if(Array.isArray(g)){for(var Y=0;Y<g.length;Y++)Je(u,g[Y],v,A,q);return null}return v=oe(v),u&&u[fe]?u.K(g,v,y(A)?!!A.capture:!1,q):ai(u,g,v,!1,A,q)}function ai(u,g,v,A,q,Y){if(!g)throw Error("Invalid event type");var st=y(q)?!!q.capture:!!q,Ht=ya(u);if(Ht||(u[Ze]=Ht=new Pt(u)),v=Ht.add(g,v,A,st,Y),v.proxy)return v;if(A=jn(),v.proxy=A,A.src=u,A.listener=v,u.addEventListener)ut||(q=st),q===void 0&&(q=!1),u.addEventListener(g.toString(),A,q);else if(u.attachEvent)u.attachEvent(Pi(g.toString()),A);else if(u.addListener&&u.removeListener)u.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function jn(){function u(v){return g.call(u.src,u.listener,v)}const g=os;return u}function Bn(u,g,v,A,q){if(Array.isArray(g))for(var Y=0;Y<g.length;Y++)Bn(u,g[Y],v,A,q);else A=y(A)?!!A.capture:!!A,v=oe(v),u&&u[fe]?(u=u.i,g=String(g).toString(),g in u.g&&(Y=u.g[g],v=ee(Y,v,A,q),-1<v&&(Yt(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete u.g[g],u.h--)))):u&&(u=ya(u))&&(g=u.g[g.toString()],u=-1,g&&(u=ee(g,v,A,q)),(v=-1<u?g[u]:null)&&di(v))}function di(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[fe])Tt(g.i,u);else{var v=u.type,A=u.proxy;g.removeEventListener?g.removeEventListener(v,A,u.capture):g.detachEvent?g.detachEvent(Pi(v),A):g.addListener&&g.removeListener&&g.removeListener(A),(v=ya(g))?(Tt(v,u),v.h==0&&(v.src=null,g[Ze]=null)):Yt(u)}}}function Pi(u){return u in un?un[u]:un[u]="on"+u}function os(u,g){if(u.da)u=!0;else{g=new St(g,this);var v=u.listener,A=u.ha||u.src;u.fa&&di(u),u=v.call(A,g)}return u}function ya(u){return u=u[Ze],u instanceof Pt?u:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(u){return typeof u=="function"?u:(u[tn]||(u[tn]=function(g){return u.handleEvent(g)}),u[tn])}function At(){dt.call(this),this.i=new Pt(this),this.M=this,this.F=null}k(At,dt),At.prototype[fe]=!0,At.prototype.removeEventListener=function(u,g,v,A){Bn(this,u,g,v,A)};function Mt(u,g){var v,A=u.F;if(A)for(v=[];A;A=A.F)v.push(A);if(u=u.M,A=g.type||g,typeof g=="string")g=new lt(g,u);else if(g instanceof lt)g.target=g.target||u;else{var q=g;g=new lt(A,u),D(g,q)}if(q=!0,v)for(var Y=v.length-1;0<=Y;Y--){var st=g.g=v[Y];q=le(st,A,!0,g)&&q}if(st=g.g=u,q=le(st,A,!0,g)&&q,q=le(st,A,!1,g)&&q,v)for(Y=0;Y<v.length;Y++)st=g.g=v[Y],q=le(st,A,!1,g)&&q}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],A=0;A<v.length;A++)Yt(v[A]);delete u.g[g],u.h--}}this.F=null},At.prototype.K=function(u,g,v,A){return this.i.add(String(u),g,!1,v,A)},At.prototype.L=function(u,g,v,A){return this.i.add(String(u),g,!0,v,A)};function le(u,g,v,A){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var q=!0,Y=0;Y<g.length;++Y){var st=g[Y];if(st&&!st.da&&st.capture==v){var Ht=st.listener,Ue=st.ha||st.src;st.fa&&Tt(u.i,st),q=Ht.call(Ue,A)!==!1&&q}}return q&&!A.defaultPrevented}function be(u,g,v){if(typeof u=="function")v&&(u=w(u,v));else if(u&&typeof u.handleEvent=="function")u=w(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:p.setTimeout(u,g||0)}function he(u){u.g=be(()=>{u.g=null,u.i&&(u.i=!1,he(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class we extends dt{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:he(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(u){dt.call(this),this.h=u,this.g={}}k(Dt,dt);var rt=[];function Kt(u){ht(u.g,function(g,v){this.g.hasOwnProperty(v)&&di(g)},u),u.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),Kt(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Me=p.JSON.stringify,Ie=p.JSON.parse,_e=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function pi(){}pi.prototype.h=null;function va(u){return u.h||(u.h=u.i())}function vr(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cr(){lt.call(this,"d")}k(Cr,lt);function si(){lt.call(this,"c")}k(si,lt);var Hn={},_r=null;function ls(){return _r=_r||new At}Hn.La="serverreachability";function yo(u){lt.call(this,Hn.La,u)}k(yo,lt);function Er(u){const g=ls();Mt(g,new yo(g))}Hn.STAT_EVENT="statevent";function us(u,g){lt.call(this,Hn.STAT_EVENT,u),this.stat=g}k(us,lt);function Re(u){const g=ls();Mt(g,new us(g,u))}Hn.Ma="timingevent";function Yl(u,g){lt.call(this,Hn.Ma,u),this.size=g}k(Yl,lt);function Tr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},g)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function $l(u,g,v,A,q,Y){u.info(function(){if(u.g)if(Y)for(var st="",Ht=Y.split("&"),Ue=0;Ue<Ht.length;Ue++){var qt=Ht[Ue].split("=");if(1<qt.length){var Qe=qt[0];qt=qt[1];var Pe=Qe.split("_");st=2<=Pe.length&&Pe[1]=="type"?st+(Qe+"="+qt+"&"):st+(Qe+"=redacted&")}}else st=null;else st=Y;return"XMLHTTP REQ ("+A+") [attempt "+q+"]: "+g+`
`+v+`
`+st})}function Xl(u,g,v,A,q,Y,st){u.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+q+"]: "+g+`
`+v+`
`+Y+" "+st})}function Sr(u,g,v,A){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Fe(u,v)+(A?" "+A:"")})}function mi(u,g){u.info(function(){return"TIMEOUT: "+g})}Ar.prototype.info=function(){};function Fe(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var A=v[u];if(!(2>A.length)){var q=A[1];if(Array.isArray(q)&&!(1>q.length)){var Y=q[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var st=1;st<q.length;st++)q[st]=""}}}}return Me(v)}catch{return g}}var ke={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function cs(){}k(cs,pi),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},Ca=new cs;function gi(u,g,v,A){this.j=u,this.i=g,this.l=v,this.R=A||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}var br={},_a={};function oi(u,g,v){u.L=1,u.v=Aa(Ee(g)),u.m=v,u.P=!0,ji(u,null)}function ji(u,g){u.F=Date.now(),ge(u),u.A=Ee(u.v);var v=u.A,A=u.R;Array.isArray(A)||(A=[String(A)]),qi(v.i,"t",A),u.C=0,v=u.j.J,u.h=new vo,u.g=cu(u.j,v?g:null,!u.m),0<u.O&&(u.M=new we(w(u.Y,u,u.g),u.O)),g=u.U,v=u.g,A=u.ca;var q="readystatechange";Array.isArray(q)||(q&&(rt[0]=q.toString()),q=rt);for(var Y=0;Y<q.length;Y++){var st=Je(v,q[Y],A||g.handleEvent,!1,g.h||g);if(!st)break;g.g[st.key]=st}g=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),Er(),$l(u.i,u.u,u.A,u.l,u.R,u.m)}gi.prototype.ca=function(u){u=u.target;const g=this.M;g&&Kn(u)==3?g.j():this.Y(u)},gi.prototype.Y=function(u){try{if(u==this.g)t:{const Pe=Kn(this.g);var g=this.g.Ba();const Ki=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||nu(this.g)))){this.J||Pe!=4||g==7||(g==8||0>=Ki?Er(3):Er(2)),hs(this);var v=this.g.Z();this.X=v;e:if(wr(this)){var A=nu(this.g);u="";var q=A.length,Y=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Dn(this);var st="";break e}this.h.i=new p.TextDecoder}for(g=0;g<q;g++)this.h.h=!0,u+=this.h.i.decode(A[g],{stream:!(Y&&g==q-1)});A.length=0,this.h.g+=u,this.C=0,st=this.h.g}else st=this.g.oa();if(this.o=v==200,Xl(this.i,this.u,this.A,this.l,this.R,Pe,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Ht,Ue=this.g;if((Ht=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ht)){var qt=Ht;break e}}qt=null}if(v=qt)Sr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mn(this,v);else{this.o=!1,this.s=3,Re(12),_n(this),Dn(this);break t}}if(this.P){v=!0;let en;for(;!this.J&&this.C<st.length;)if(en=Rr(this,st),en==_a){Pe==4&&(this.s=4,Re(14),v=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==br){this.s=4,Re(15),Sr(this.i,this.l,st,"[Invalid Chunk]"),v=!1;break}else Sr(this.i,this.l,en,null),Mn(this,en);if(wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||st.length!=0||this.h.h||(this.s=1,Re(16),v=!1),this.o=this.o&&v,!v)Sr(this.i,this.l,st,"[Invalid Chunked Response]"),_n(this),Dn(this);else if(0<st.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+st.length),Ma(Qe),Qe.M=!0,Re(11))}}else Sr(this.i,this.l,st,null),Mn(this,st);Pe==4&&_n(this),this.o&&!this.J&&(Pe==4?ou(this.j,this):(this.o=!1,ge(this)))}else g0(this.g),v==400&&0<st.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),_n(this),Dn(this)}}}catch{}finally{}};function wr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Rr(u,g){var v=u.C,A=g.indexOf(`
`,v);return A==-1?_a:(v=Number(g.substring(v,A)),isNaN(v)?br:(A+=1,A+v>g.length?_a:(g=g.slice(A,A+v),u.C=A+v,g)))}gi.prototype.cancel=function(){this.J=!0,_n(this)};function ge(u){u.S=Date.now()+u.I,Co(u,u.I)}function Co(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tr(w(u.ba,u),g)}function hs(u){u.B&&(p.clearTimeout(u.B),u.B=null)}gi.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(mi(this.i,this.A),this.L!=2&&(Er(),Re(17)),_n(this),this.s=2,Dn(this)):Co(this,this.S-u)};function Dn(u){u.j.G==0||u.J||ou(u.j,u)}function _n(u){hs(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,Kt(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function Mn(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||xr(v.h,u))){if(!u.K&&xr(v.h,u)&&v.G==3){try{var A=v.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var q=A;if(q[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Es(v),Cs(v);else break t;Mo(v),Re(18)}}else v.za=q[1],0<v.za-v.T&&37500>q[2]&&v.F&&v.v==0&&!v.C&&(v.C=Tr(w(v.Za,v),6e3));if(1>=Wl(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Qi(v,11)}else if((u.K||v.g==u)&&Es(v),!O(g))for(q=v.Da.g.parse(g),g=0;g<q.length;g++){let qt=q[g];if(v.T=qt[0],qt=qt[1],v.G==2)if(qt[0]=="c"){v.K=qt[1],v.ia=qt[2];const Qe=qt[3];Qe!=null&&(v.la=Qe,v.j.info("VER="+v.la));const Pe=qt[4];Pe!=null&&(v.Aa=Pe,v.j.info("SVER="+v.Aa));const Ki=qt[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(A=1.5*Ki,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const en=u.g;if(en){const Ai=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var Y=A.h;Y.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Dr(Y,Y.h),Y.h=null))}if(A.D){const No=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(A.ya=No,$t(A.I,A.D,No))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var st=u;if(A.qa=uu(A,A.J?A.ia:null,A.W),st.K){qn(A.h,st);var Ht=st,Ue=A.L;Ue&&(Ht.I=Ue),Ht.B&&(hs(Ht),ge(Ht)),A.g=st}else au(A);0<v.i.length&&_s(v)}else qt[0]!="stop"&&qt[0]!="close"||Qi(v,7);else v.G==3&&(qt[0]=="stop"||qt[0]=="close"?qt[0]=="stop"?Qi(v,7):xo(v):qt[0]!="noop"&&v.l&&v.l.ta(qt),v.v=0)}}Er(4)}catch{}}var h0=class{constructor(u,g){this.g=u,this.map=g}};function _o(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Wl(u){return u.h?1:u.g?u.g.size:0}function xr(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Dr(u,g){u.g?u.g.add(g):u.h=g}function qn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}_o.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function mn(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return $(u.i)}function Zl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var g=[],v=u.length,A=0;A<v;A++)g.push(u[A]);return g}g=[],v=0;for(A in u)g[v++]=u[A];return g}function f0(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const A in u)g[v++]=A;return g}}}function Ea(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=f0(u),A=Zl(u),q=A.length,Y=0;Y<q;Y++)g.call(void 0,A[Y],v&&v[Y],u)}var To=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fs(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var A=u[v].indexOf("="),q=null;if(0<=A){var Y=u[v].substring(0,A);q=u[v].substring(A+1)}else Y=u[v];g(Y,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function Bi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Bi){this.h=u.h,Mr(this,u.j),this.o=u.o,this.g=u.g,Ta(this,u.s),this.l=u.l;var g=u.i,v=new yi;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),ds(this,v),this.m=u.m}else u&&(g=String(u).match(To))?(this.h=!1,Mr(this,g[1]||"",!0),this.o=Ir(g[2]||""),this.g=Ir(g[3]||"",!0),Ta(this,g[4]),this.l=Ir(g[5]||"",!0),ds(this,g[6]||"",!0),this.m=Ir(g[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}Bi.prototype.toString=function(){var u=[],g=this.j;g&&u.push(Fn(g,Ao,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Fn(g,Ao,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Fn(v,v.charAt(0)=="/"?So:Jl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Fn(v,m0)),u.join("")};function Ee(u){return new Bi(u)}function Mr(u,g,v){u.j=v?Ir(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Ta(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function ds(u,g,v){g instanceof yi?(u.i=g,bo(u.i,u.h)):(v||(g=Fn(g,p0)),u.i=new yi(g,u.h))}function $t(u,g,v){u.i.set(g,v)}function Aa(u){return $t(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ir(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Fn(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,d0),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function d0(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ao=/[#\/\?@]/g,Jl=/[#\?:]/g,So=/[#\?]/g,p0=/[#\?@]/g,m0=/#/g;function yi(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Gn(u){u.g||(u.g=new Map,u.h=0,u.i&&fs(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=yi.prototype,r.add=function(u,g){Gn(this),this.i=null,u=Fi(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function ps(u,g){Gn(u),g=Fi(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Hi(u,g){return Gn(u),g=Fi(u,g),u.g.has(g)}r.forEach=function(u,g){Gn(this),this.g.forEach(function(v,A){v.forEach(function(q){u.call(g,q,A,this)},this)},this)},r.na=function(){Gn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let A=0;A<g.length;A++){const q=u[A];for(let Y=0;Y<q.length;Y++)v.push(g[A])}return v},r.V=function(u){Gn(this);let g=[];if(typeof u=="string")Hi(this,u)&&(g=g.concat(this.g.get(Fi(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},r.set=function(u,g){return Gn(this),this.i=null,u=Fi(this,u),Hi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function qi(u,g,v){ps(u,g),0<v.length&&(u.i=null,u.g.set(Fi(u,g),$(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var A=g[v];const Y=encodeURIComponent(String(A)),st=this.V(A);for(A=0;A<st.length;A++){var q=Y;st[A]!==""&&(q+="="+encodeURIComponent(String(st[A]))),u.push(q)}}return this.i=u.join("&")};function Fi(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function bo(u,g){g&&!u.j&&(Gn(u),u.i=null,u.g.forEach(function(v,A){var q=A.toLowerCase();A!=q&&(ps(this,A),qi(this,q,v))},u)),u.j=g}function tu(u,g){const v=new Ar;if(p.Image){const A=new Image;A.onload=N(Qn,v,"TestLoadImage: loaded",!0,g,A),A.onerror=N(Qn,v,"TestLoadImage: error",!1,g,A),A.onabort=N(Qn,v,"TestLoadImage: abort",!1,g,A),A.ontimeout=N(Qn,v,"TestLoadImage: timeout",!1,g,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=u}else g(!1)}function Sa(u,g){const v=new Ar,A=new AbortController,q=setTimeout(()=>{A.abort(),Qn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:A.signal}).then(Y=>{clearTimeout(q),Y.ok?Qn(v,"TestPingServer: ok",!0,g):Qn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(q),Qn(v,"TestPingServer: error",!1,g)})}function Qn(u,g,v,A,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),A(v)}catch{}}function ba(){this.g=new _e}function vi(u,g,v){const A=v||"";try{Ea(u,function(q,Y){let st=q;y(q)&&(st=Me(q)),g.push(A+Y+"="+encodeURIComponent(st))})}catch(q){throw g.push(A+"type="+encodeURIComponent("_badmap")),q}}function Nr(u){this.l=u.Ub||null,this.j=u.eb||!1}k(Nr,pi),Nr.prototype.g=function(){return new Gi(this.l,this.j)},Nr.prototype.i=function(u){return function(){return u}}({});function Gi(u,g){At.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Gi,At),r=Gi.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,_i(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||p).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function wo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Ci(this):_i(this),this.readyState==3&&wo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Ci(this))},r.Qa=function(u){this.g&&(this.response=u,Ci(this))},r.ga=function(){this.g&&Ci(this)};function Ci(u){u.readyState=4,u.l=null,u.j=null,u.v=null,_i(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function _i(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ro(u){let g="";return ht(u,function(v,A){g+=A,g+=":",g+=v,g+=`\r
`}),g}function Ge(u,g,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=Ro(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):$t(u,g,v))}function Jt(u){At.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Jt,At);var ms=/^https?$/i,wa=["POST","PUT"];r=Jt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?va(this.o):va(Ca),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(Y){eu(this,Y);return}if(u=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var q in A)v.set(q,A[q]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Y of A.keys())v.set(Y,A.get(Y));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),q=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(wa,g,void 0))||A||q||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,st]of v)this.g.setRequestHeader(Y,st);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ra(this),this.u=!0,this.g.send(u),this.u=!1}catch(Y){eu(this,Y)}};function eu(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,gs(u),Ei(u)}function gs(u){u.A||(u.A=!0,Mt(u,"complete"),Mt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Mt(this,"complete"),Mt(this,"abort"),Ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Jt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ys(this):this.bb())},r.bb=function(){ys(this)};function ys(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Kn(u)!=4||u.Z()!=2)){if(u.u&&Kn(u)==4)be(u.Ea,0,u);else if(Mt(u,"readystatechange"),Kn(u)==4){u.h=!1;try{const st=u.Z();t:switch(st){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var A;if(A=st===0){var q=String(u.D).match(To)[1]||null;!q&&p.self&&p.self.location&&(q=p.self.location.protocol.slice(0,-1)),A=!ms.test(q?q.toLowerCase():"")}v=A}if(v)Mt(u,"complete"),Mt(u,"success");else{u.m=6;try{var Y=2<Kn(u)?u.g.statusText:""}catch{Y=""}u.l=Y+" ["+u.Z()+"]",gs(u)}}finally{Ei(u)}}}}function Ei(u,g){if(u.g){Ra(u);const v=u.g,A=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Mt(u,"ready");try{v.onreadystatechange=A}catch{}}}function Ra(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Ie(g)}};function nu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function g0(u){const g={};u=(u.g&&2<=Kn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<u.length;A++){if(O(u[A]))continue;var v=V(u[A]);const q=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=g[q]||[];g[q]=Y,Y.push(v)}I(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xa(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function vs(u){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xa("baseRetryDelayMs",5e3,u),this.cb=xa("retryDelaySeedMs",1e4,u),this.Wa=xa("forwardChannelMaxRetries",2,u),this.wa=xa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new _o(u&&u.concurrentRequestLimit),this.Da=new ba,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=vs.prototype,r.la=8,r.G=1,r.connect=function(u,g,v,A){Re(0),this.W=u,this.H=g||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=uu(this,null,this.W),_s(this)};function xo(u){if(iu(u),u.G==3){var g=u.U++,v=Ee(u.I);if($t(v,"SID",u.K),$t(v,"RID",g),$t(v,"TYPE","terminate"),Da(u,v),g=new gi(u,u.j,g),g.L=2,g.v=Aa(Ee(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=g.v,v=!0),v||(g.g=cu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ge(g)}lu(u)}function Cs(u){u.g&&(Ma(u),u.g.cancel(),u.g=null)}function iu(u){Cs(u),u.u&&(p.clearTimeout(u.u),u.u=null),Es(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function _s(u){if(!Eo(u.h)&&!u.s){u.s=!0;var g=u.Ga;vt||L(),mt||(vt(),mt=!0),Bt.add(g,u),u.B=0}}function y0(u,g){return Wl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tr(w(u.Ga,u,g),Io(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const q=new gi(this,this.j,u);let Y=this.o;if(this.S&&(Y?(Y=R(Y),D(Y,this.S)):Y=this.S),this.m!==null||this.O||(q.H=Y,Y=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=ru(this,q,g),v=Ee(this.I),$t(v,"RID",u),$t(v,"CVER",22),this.D&&$t(v,"X-HTTP-Session-Id",this.D),Da(this,v),Y&&(this.O?g="headers="+encodeURIComponent(String(Ro(Y)))+"&"+g:this.m&&Ge(v,this.m,Y)),Dr(this.h,q),this.Ua&&$t(v,"TYPE","init"),this.P?($t(v,"$req",g),$t(v,"SID","null"),q.T=!0,oi(q,v,null)):oi(q,v,g),this.G=2}}else this.G==3&&(u?Do(this,u):this.i.length==0||Eo(this.h)||Do(this))};function Do(u,g){var v;g?v=g.l:v=u.U++;const A=Ee(u.I);$t(A,"SID",u.K),$t(A,"RID",v),$t(A,"AID",u.T),Da(u,A),u.m&&u.o&&Ge(A,u.m,u.o),v=new gi(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=ru(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Dr(u.h,v),oi(v,A,g)}function Da(u,g){u.H&&ht(u.H,function(v,A){$t(g,A,v)}),u.l&&Ea({},function(v,A){$t(g,A,v)})}function ru(u,g,v){v=Math.min(u.i.length,v);var A=u.l?w(u.l.Na,u.l,u):null;t:{var q=u.i;let Y=-1;for(;;){const st=["count="+v];Y==-1?0<v?(Y=q[0].g,st.push("ofs="+Y)):Y=0:st.push("ofs="+Y);let Ht=!0;for(let Ue=0;Ue<v;Ue++){let qt=q[Ue].g;const Qe=q[Ue].map;if(qt-=Y,0>qt)Y=Math.max(0,q[Ue].g-100),Ht=!1;else try{vi(Qe,st,"req"+qt+"_")}catch{A&&A(Qe)}}if(Ht){A=st.join("&");break t}}}return u=u.i.splice(0,v),g.D=u,A}function au(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;vt||L(),mt||(vt(),mt=!0),Bt.add(g,u),u.v=0}}function Mo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tr(w(u.Fa,u),Io(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tr(w(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),Cs(this),su(this))};function Ma(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function su(u){u.g=new gi(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=Ee(u.qa);$t(g,"RID","rpc"),$t(g,"SID",u.K),$t(g,"AID",u.T),$t(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&$t(g,"TO",u.ja),$t(g,"TYPE","xmlhttp"),Da(u,g),u.m&&u.o&&Ge(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Aa(Ee(g)),v.m=null,v.P=!0,ji(v,u)}r.Za=function(){this.C!=null&&(this.C=null,Cs(this),Mo(this),Re(19))};function Es(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function ou(u,g){var v=null;if(u.g==g){Es(u),Ma(u),u.g=null;var A=2}else if(xr(u.h,g))v=g.D,qn(u.h,g),A=1;else return;if(u.G!=0){if(g.o)if(A==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var q=u.B;A=ls(),Mt(A,new Yl(A,v)),_s(u)}else au(u);else if(q=g.s,q==3||q==0&&0<g.X||!(A==1&&y0(u,g)||A==2&&Mo(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),q){case 1:Qi(u,5);break;case 4:Qi(u,10);break;case 3:Qi(u,6);break;default:Qi(u,2)}}}function Io(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function Qi(u,g){if(u.j.info("Error code "+g),g==2){var v=w(u.fb,u),A=u.Xa;const q=!A;A=new Bi(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Mr(A,"https"),Aa(A),q?tu(A.toString(),v):Sa(A.toString(),v)}else Re(2);u.G=0,u.l&&u.l.sa(g),lu(u),iu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function lu(u){if(u.G=0,u.ka=[],u.l){const g=mn(u.h);(g.length!=0||u.i.length!=0)&&(z(u.ka,g),z(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function uu(u,g,v){var A=v instanceof Bi?Ee(v):new Bi(v);if(A.g!="")g&&(A.g=g+"."+A.g),Ta(A,A.s);else{var q=p.location;A=q.protocol,g=g?g+"."+q.hostname:q.hostname,q=+q.port;var Y=new Bi(null);A&&Mr(Y,A),g&&(Y.g=g),q&&Ta(Y,q),v&&(Y.l=v),A=Y}return v=u.D,g=u.ya,v&&g&&$t(A,v,g),$t(A,"VER",u.la),Da(u,A),A}function cu(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new Jt(new Nr({eb:v})):new Jt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function hu(){}r=hu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ts(){}Ts.prototype.g=function(u,g){return new gn(u,g)};function gn(u,g){At.call(this),this.g=new vs(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!O(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!O(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new Ti(this)}k(gn,At),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){xo(this.g)},gn.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Me(u),u=v);g.i.push(new h0(g.Ya++,u)),g.G==3&&_s(g)},gn.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,gn.aa.N.call(this)};function fu(u){Cr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const v in g){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}k(fu,Cr);function du(){si.call(this),this.status=1}k(du,si);function Ti(u){this.g=u}k(Ti,hu),Ti.prototype.ua=function(){Mt(this.g,"a")},Ti.prototype.ta=function(u){Mt(this.g,new fu(u))},Ti.prototype.sa=function(u){Mt(this.g,new du)},Ti.prototype.ra=function(){Mt(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,w9=function(){return new Ts},b9=function(){return ls()},S9=Hn,L4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ke.NO_ERROR=0,ke.TIMEOUT=8,ke.HTTP_ERROR=6,_c=ke,zi.COMPLETE="complete",A9=zi,vr.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",At.prototype.listen=At.prototype.K,El=vr,Jt.prototype.listenOnce=Jt.prototype.L,Jt.prototype.getLastError=Jt.prototype.Ka,Jt.prototype.getLastErrorCode=Jt.prototype.Ba,Jt.prototype.getStatus=Jt.prototype.Z,Jt.prototype.getResponseJson=Jt.prototype.Oa,Jt.prototype.getResponseText=Jt.prototype.oa,Jt.prototype.send=Jt.prototype.ea,Jt.prototype.setWithCredentials=Jt.prototype.Ha,T9=Jt}).apply(typeof fc<"u"?fc:typeof self<"u"?self:typeof window<"u"?window:{});const If="@firebase/firestore",Nf="4.7.9";/**
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
 */class dn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
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
 */let fo="11.4.0";/**
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
 */const es=new a2("@firebase/firestore");function $s(){return es.logLevel}function ct(r,...t){if(es.logLevel<=Qt.DEBUG){const i=t.map(f2);es.debug(`Firestore (${fo}): ${r}`,...i)}}function mr(r,...t){if(es.logLevel<=Qt.ERROR){const i=t.map(f2);es.error(`Firestore (${fo}): ${r}`,...i)}}function eo(r,...t){if(es.logLevel<=Qt.WARN){const i=t.map(f2);es.warn(`Firestore (${fo}): ${r}`,...i)}}function f2(r){if(typeof r=="string")return r;try{/**
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
 */function Et(r="Unexpected state"){const t=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+r;throw mr(t),new Error(t)}function te(r,t){r||Et()}function xt(r,t){return r}/**
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
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gt extends pa{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
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
 */class R9{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(dn.UNAUTHENTICATED))}shutdown(){}}class Cv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class _v{constructor(t){this.t=t,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){te(this.o===void 0);let s=this.i;const l=m=>this.i!==s?(s=this.i,i(m)):Promise.resolve();let c=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new hr,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const m=c;t.enqueueRetryable(async()=>{await m.promise,await l(this.currentUser)})},p=m=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new hr)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string"),new R9(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return te(t===null||typeof t=="string"),new dn(t)}}class Ev{constructor(t,i,s){this.l=t,this.h=i,this.P=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tv{constructor(t,i,s){this.l=t,this.h=i,this.P=s}getToken(){return Promise.resolve(new Ev(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Av{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ug(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){te(this.o===void 0);const s=c=>{c.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ct("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Vf(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(te(typeof i.token=="string"),this.R=i.token,new Vf(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class x9{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Sv(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<i&&(s+=t.charAt(l[c]%62))}return s}}function jt(r,t){return r<t?-1:r>t?1:0}function no(r,t,i){return r.length===t.length&&r.every((s,l)=>i(s,t[l]))}/**
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
 */const Lf=-62135596800,Of=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(t){return He.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),s=Math.floor((t-1e3*i)*Of);return new He(i,s)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new gt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new gt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<Lf)throw new gt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new gt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Of}_compareTo(t){return this.seconds===t.seconds?jt(this.nanoseconds,t.nanoseconds):jt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Lf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class wt{static fromTimestamp(t){return new wt(t)}static min(){return new wt(new He(0,0))}static max(){return new wt(new He(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kf="__name__";class Di{constructor(t,i,s){i===void 0?i=0:i>t.length&&Et(),s===void 0?s=t.length-i:s>t.length-i&&Et(),this.segments=t,this.offset=i,this.len=s}get length(){return this.len}isEqual(t){return Di.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof Di?t.forEach(s=>{i.push(s)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,s=this.limit();i<s;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const s=Math.min(t.length,i.length);for(let l=0;l<s;l++){const c=Di.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Math.sign(t.length-i.length)}static compareSegments(t,i){const s=Di.isNumericId(t),l=Di.isNumericId(i);return s&&!l?-1:!s&&l?1:s&&l?Di.extractNumericId(t).compare(Di.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ra.fromString(t.substring(4,t.length-2))}}class pe extends Di{construct(t,i,s){return new pe(t,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const s of t){if(s.indexOf("//")>=0)throw new gt(et.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(l=>l.length>0))}return new pe(i)}static emptyPath(){return new pe([])}}const bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends Di{construct(t,i,s){return new on(t,i,s)}static isValidIdentifier(t){return bv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kf}static keyField(){return new on([kf])}static fromServerFormat(t){const i=[];let s="",l=0;const c=()=>{if(s.length===0)throw new gt(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let f=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new gt(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[l+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new gt(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=m,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(s+=p,l++):(c(),l++)}if(c(),f)throw new gt(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new on(i)}static emptyPath(){return new on([])}}/**
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
 */class Ct{constructor(t){this.path=t}static fromPath(t){return new Ct(pe.fromString(t))}static fromName(t){return new Ct(pe.fromString(t).popFirst(5))}static empty(){return new Ct(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return pe.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ct(new pe(t.slice()))}}/**
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
 */const Nl=-1;function wv(r,t){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=wt.fromTimestamp(s===1e9?new He(i+1,0):new He(i,s));return new oa(l,Ct.empty(),t)}function Rv(r){return new oa(r.readTime,r.key,Nl)}class oa{constructor(t,i,s){this.readTime=t,this.documentKey=i,this.largestBatchId=s}static min(){return new oa(wt.min(),Ct.empty(),Nl)}static max(){return new oa(wt.max(),Ct.empty(),Nl)}}function xv(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=Ct.comparator(r.documentKey,t.documentKey),i!==0?i:jt(r.largestBatchId,t.largestBatchId))}/**
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
 */async function po(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==Dv)throw r;ct("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new J((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof J?i:J.resolve(i)}catch(i){return J.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):J.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):J.reject(i)}static resolve(t){return new J((i,s)=>{i(t)})}static reject(t){return new J((i,s)=>{s(t)})}static waitFor(t){return new J((i,s)=>{let l=0,c=0,f=!1;t.forEach(p=>{++l,p.next(()=>{++c,f&&c===l&&i()},m=>s(m))}),f=!0,c===l&&i()})}static or(t){let i=J.resolve(!1);for(const s of t)i=i.next(l=>l?J.resolve(l):s());return i}static forEach(t,i){const s=[];return t.forEach((l,c)=>{s.push(i.call(this,l,c))}),this.waitFor(s)}static mapArray(t,i){return new J((s,l)=>{const c=t.length,f=new Array(c);let p=0;for(let m=0;m<c;m++){const y=m;i(t[y]).next(_=>{f[y]=_,++p,p===c&&s(f)},_=>l(_))}})}static doWhile(t,i){return new J((s,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):s()};c()})}}function Iv(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function mo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Yc{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=s=>this.oe(s),this._e=s=>i.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Yc.ae=-1;/**
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
 */const d2=-1;function $c(r){return r==null}function Ic(r){return r===0&&1/r==-1/0}function Nv(r){return typeof r=="number"&&Number.isInteger(r)&&!Ic(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const D9="";function Vv(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=Uf(t)),t=Lv(r.get(i),t);return Uf(t)}function Lv(r,t){let i=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case D9:i+="";break;default:i+=c}}return i}function Uf(r){return r+D9+""}/**
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
 */function Pf(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function ma(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function M9(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Ce{constructor(t,i){this.comparator=t,this.root=i||sn.EMPTY}insert(t,i){return new Ce(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,sn.BLACK,null,null))}remove(t){return new Ce(this.comparator,this.root.remove(t,this.comparator).copy(null,null,sn.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(t){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,s)=>(t(i,s),!1))}toString(){const t=[];return this.inorderTraversal((i,s)=>(t.push(`${i}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dc(this.root,t,this.comparator,!0)}}class dc{constructor(t,i,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?s(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class sn{constructor(t,i,s,l,c){this.key=t,this.value=i,this.color=s??sn.RED,this.left=l??sn.EMPTY,this.right=c??sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,s,l,c){return new sn(t??this.key,i??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,s),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let s,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return sn.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Et();const t=this.left.check();if(t!==this.right.check())throw Et();return t+(this.isRed()?0:1)}}sn.EMPTY=null,sn.RED=!0,sn.BLACK=!1;sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Et()}get value(){throw Et()}get color(){throw Et()}get left(){throw Et()}get right(){throw Et()}copy(t,i,s,l,c){return this}insert(t,i,s){return new sn(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(t){this.comparator=t,this.data=new Ce(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,s)=>(t(i),!1))}forEachInRange(t,i){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new zf(this.data.getIterator())}getIteratorFrom(t){return new zf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(s=>{i=i.add(s)}),i}isEqual(t){if(!(t instanceof qe)||this.size!==t.size)return!1;const i=this.data.getIterator(),s=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new qe(this.comparator);return i.data=t,i}}class zf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(t){this.fields=t,t.sort(on.comparator)}static empty(){return new Un([])}unionWith(t){let i=new qe(on.comparator);for(const s of this.fields)i=i.add(s);for(const s of t)i=i.add(s);return new Un(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return no(this.fields,t.fields,(i,s)=>i.isEqual(s))}}/**
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
 */class ln{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new I9("Invalid base64 string: "+c):c}}(t);return new ln(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new ln(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return jt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const Ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function la(r){if(te(!!r),typeof r=="string"){let t=0;const i=Ov.exec(r);if(te(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:De(r.seconds),nanos:De(r.nanos)}}function De(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ua(r){return typeof r=="string"?ln.fromBase64String(r):ln.fromUint8Array(r)}/**
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
 */const N9="server_timestamp",V9="__type__",L9="__previous_value__",O9="__local_write_time__";function p2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[V9])===null||i===void 0?void 0:i.stringValue)===N9}function Xc(r){const t=r.mapValue.fields[L9];return p2(t)?Xc(t):t}function Vl(r){const t=la(r.mapValue.fields[O9].timestampValue);return new He(t.seconds,t.nanos)}/**
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
 */class kv{constructor(t,i,s,l,c,f,p,m,y){this.databaseId=t,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=y}}const Nc="(default)";class Ll{constructor(t,i){this.projectId=t,this.database=i||Nc}static empty(){return new Ll("","")}get isDefaultDatabase(){return this.database===Nc}isEqual(t){return t instanceof Ll&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const k9="__type__",Uv="__max__",pc={mapValue:{}},U9="__vector__",Vc="value";function ca(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?p2(r)?4:zv(r)?9007199254740991:Pv(r)?10:11:Et()}function Oi(r,t){if(r===t)return!0;const i=ca(r);if(i!==ca(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vl(r).isEqual(Vl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=la(l.timestampValue),p=la(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return ua(l.bytesValue).isEqual(ua(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return De(l.geoPointValue.latitude)===De(c.geoPointValue.latitude)&&De(l.geoPointValue.longitude)===De(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return De(l.integerValue)===De(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=De(l.doubleValue),p=De(c.doubleValue);return f===p?Ic(f)===Ic(p):isNaN(f)&&isNaN(p)}return!1}(r,t);case 9:return no(r.arrayValue.values||[],t.arrayValue.values||[],Oi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},p=c.mapValue.fields||{};if(Pf(f)!==Pf(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!Oi(f[m],p[m])))return!1;return!0}(r,t);default:return Et()}}function Ol(r,t){return(r.values||[]).find(i=>Oi(i,t))!==void 0}function io(r,t){if(r===t)return 0;const i=ca(r),s=ca(t);if(i!==s)return jt(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return jt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const p=De(c.integerValue||c.doubleValue),m=De(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,t);case 3:return jf(r.timestampValue,t.timestampValue);case 4:return jf(Vl(r),Vl(t));case 5:return jt(r.stringValue,t.stringValue);case 6:return function(c,f){const p=ua(c),m=ua(f);return p.compareTo(m)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const p=c.split("/"),m=f.split("/");for(let y=0;y<p.length&&y<m.length;y++){const _=jt(p[y],m[y]);if(_!==0)return _}return jt(p.length,m.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const p=jt(De(c.latitude),De(f.latitude));return p!==0?p:jt(De(c.longitude),De(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Bf(r.arrayValue,t.arrayValue);case 10:return function(c,f){var p,m,y,_;const b=c.fields||{},w=f.fields||{},N=(p=b[Vc])===null||p===void 0?void 0:p.arrayValue,k=(m=w[Vc])===null||m===void 0?void 0:m.arrayValue,$=jt(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return $!==0?$:Bf(N,k)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===pc.mapValue&&f===pc.mapValue)return 0;if(c===pc.mapValue)return 1;if(f===pc.mapValue)return-1;const p=c.fields||{},m=Object.keys(p),y=f.fields||{},_=Object.keys(y);m.sort(),_.sort();for(let b=0;b<m.length&&b<_.length;++b){const w=jt(m[b],_[b]);if(w!==0)return w;const N=io(p[m[b]],y[_[b]]);if(N!==0)return N}return jt(m.length,_.length)}(r.mapValue,t.mapValue);default:throw Et()}}function jf(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return jt(r,t);const i=la(r),s=la(t),l=jt(i.seconds,s.seconds);return l!==0?l:jt(i.nanos,s.nanos)}function Bf(r,t){const i=r.values||[],s=t.values||[];for(let l=0;l<i.length&&l<s.length;++l){const c=io(i[l],s[l]);if(c)return c}return jt(i.length,s.length)}function ro(r){return O4(r)}function O4(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const s=la(i);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return ua(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return Ct.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let s="[",l=!0;for(const c of i.values||[])l?l=!1:s+=",",s+=O4(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(i){const s=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${O4(i.fields[f])}`;return l+"}"}(r.mapValue):Et()}function Ec(r){switch(ca(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xc(r);return t?16+Ec(t):16;case 5:return 2*r.stringValue.length;case 6:return ua(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+Ec(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return ma(s.fields,(c,f)=>{l+=c.length+Ec(f)}),l}(r.mapValue);default:throw Et()}}function k4(r){return!!r&&"integerValue"in r}function m2(r){return!!r&&"arrayValue"in r}function Hf(r){return!!r&&"nullValue"in r}function qf(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Tc(r){return!!r&&"mapValue"in r}function Pv(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[k9])===null||i===void 0?void 0:i.stringValue)===U9}function wl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ma(r.mapValue.fields,(i,s)=>t.mapValue.fields[i]=wl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=wl(r.arrayValue.values[i]);return t}return Object.assign({},r)}function zv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Uv}/**
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
 */class Sn{constructor(t){this.value=t}static empty(){return new Sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let s=0;s<t.length-1;++s)if(i=(i.mapValue.fields||{})[t.get(s)],!Tc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=wl(i)}setAll(t){let i=on.emptyPath(),s={},l=[];t.forEach((f,p)=>{if(!i.isImmediateParentOf(p)){const m=this.getFieldsMap(i);this.applyChanges(m,s,l),s={},l=[],i=p.popLast()}f?s[p.lastSegment()]=wl(f):l.push(p.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,s,l)}delete(t){const i=this.field(t.popLast());Tc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Oi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=i.mapValue.fields[t.get(s)];Tc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,s){ma(i,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new Sn(wl(this.value))}}function P9(r){const t=[];return ma(r.fields,(i,s)=>{const l=new on([i]);if(Tc(s)){const c=P9(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new Un(t)}/**
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
 */class pn{constructor(t,i,s,l,c,f,p){this.key=t,this.documentType=i,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(t){return new pn(t,0,wt.min(),wt.min(),wt.min(),Sn.empty(),0)}static newFoundDocument(t,i,s,l){return new pn(t,1,i,wt.min(),s,l,0)}static newNoDocument(t,i){return new pn(t,2,i,wt.min(),wt.min(),Sn.empty(),0)}static newUnknownDocument(t,i){return new pn(t,3,i,wt.min(),wt.min(),Sn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(t,i){this.position=t,this.inclusive=i}}function Ff(r,t,i){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=Ct.comparator(Ct.fromName(f.referenceValue),i.key):s=io(f,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gf(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Oi(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class z9{}class Be extends z9{constructor(t,i,s){super(),this.field=t,this.op=i,this.value=s}static create(t,i,s){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,s):new Hv(t,i,s):i==="array-contains"?new Gv(t,s):i==="in"?new Qv(t,s):i==="not-in"?new Kv(t,s):i==="array-contains-any"?new Yv(t,s):new Be(t,i,s)}static createKeyFieldInFilter(t,i,s){return i==="in"?new qv(t,s):new Fv(t,s)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(io(i,this.value)):i!==null&&ca(this.value)===ca(i)&&this.matchesComparison(io(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ki extends z9{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new ki(t,i)}matches(t){return j9(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function j9(r){return r.op==="and"}function B9(r){return Bv(r)&&j9(r)}function Bv(r){for(const t of r.filters)if(t instanceof ki)return!1;return!0}function U4(r){if(r instanceof Be)return r.field.canonicalString()+r.op.toString()+ro(r.value);if(B9(r))return r.filters.map(t=>U4(t)).join(",");{const t=r.filters.map(i=>U4(i)).join(",");return`${r.op}(${t})`}}function H9(r,t){return r instanceof Be?function(s,l){return l instanceof Be&&s.op===l.op&&s.field.isEqual(l.field)&&Oi(s.value,l.value)}(r,t):r instanceof ki?function(s,l){return l instanceof ki&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,p)=>c&&H9(f,l.filters[p]),!0):!1}(r,t):void Et()}function q9(r){return r instanceof Be?function(i){return`${i.field.canonicalString()} ${i.op} ${ro(i.value)}`}(r):r instanceof ki?function(i){return i.op.toString()+" {"+i.getFilters().map(q9).join(" ,")+"}"}(r):"Filter"}class Hv extends Be{constructor(t,i,s){super(t,i,s),this.key=Ct.fromName(s.referenceValue)}matches(t){const i=Ct.comparator(t.key,this.key);return this.matchesComparison(i)}}class qv extends Be{constructor(t,i){super(t,"in",i),this.keys=F9("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Fv extends Be{constructor(t,i){super(t,"not-in",i),this.keys=F9("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function F9(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(s=>Ct.fromName(s.referenceValue))}class Gv extends Be{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return m2(i)&&Ol(i.arrayValue,this.value)}}class Qv extends Be{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Ol(this.value.arrayValue,i)}}class Kv extends Be{constructor(t,i){super(t,"not-in",i)}matches(t){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!Ol(this.value.arrayValue,i)}}class Yv extends Be{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!m2(i)||!i.arrayValue.values)&&i.arrayValue.values.some(s=>Ol(this.value.arrayValue,s))}}/**
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
 */class $v{constructor(t,i=null,s=[],l=[],c=null,f=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=p,this.le=null}}function Qf(r,t=null,i=[],s=[],l=null,c=null,f=null){return new $v(r,t,i,s,l,c,f)}function g2(r){const t=xt(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(s=>U4(s)).join(","),i+="|ob:",i+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),$c(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>ro(s)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>ro(s)).join(",")),t.le=i}return t.le}function y2(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!jv(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!H9(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Gf(r.startAt,t.startAt)&&Gf(r.endAt,t.endAt)}function P4(r){return Ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wc{constructor(t,i=null,s=[],l=[],c=null,f="F",p=null,m=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Xv(r,t,i,s,l,c,f,p){return new Wc(r,t,i,s,l,c,f,p)}function v2(r){return new Wc(r)}function Kf(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Wv(r){return r.collectionGroup!==null}function Rl(r){const t=xt(r);if(t.he===null){t.he=[];const i=new Set;for(const c of t.explicitOrderBy)t.he.push(c),i.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new qe(on.comparator);return f.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.he.push(new Oc(c,s))}),i.has(on.keyField().canonicalString())||t.he.push(new Oc(on.keyField(),s))}return t.he}function Ii(r){const t=xt(r);return t.Pe||(t.Pe=Zv(t,Rl(r))),t.Pe}function Zv(r,t){if(r.limitType==="F")return Qf(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Oc(l.field,c)});const i=r.endAt?new Lc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Lc(r.startAt.position,r.startAt.inclusive):null;return Qf(r.path,r.collectionGroup,t,r.filters,r.limit,i,s)}}function z4(r,t,i){return new Wc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Zc(r,t){return y2(Ii(r),Ii(t))&&r.limitType===t.limitType}function G9(r){return`${g2(Ii(r))}|lt:${r.limitType}`}function Xs(r){return`Query(target=${function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(l=>q9(l)).join(", ")}]`),$c(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map(l=>ro(l)).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map(l=>ro(l)).join(",")),`Target(${s})`}(Ii(r))}; limitType=${r.limitType})`}function Jc(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):Ct.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of Rl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,p,m){const y=Ff(f,p,m);return f.inclusive?y<=0:y<0}(s.startAt,Rl(s),l)||s.endAt&&!function(f,p,m){const y=Ff(f,p,m);return f.inclusive?y>=0:y>0}(s.endAt,Rl(s),l))}(r,t)}function Jv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q9(r){return(t,i)=>{let s=!1;for(const l of Rl(r)){const c=tC(l,t,i);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function tC(r,t,i){const s=r.field.isKeyField()?Ct.comparator(t.key,i.key):function(c,f,p){const m=f.data.field(c),y=p.data.field(c);return m!==null&&y!==null?io(m,y):Et()}(r.field,t,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Et()}}/**
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
 */class as{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ma(this.inner,(i,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return M9(this.inner)}size(){return this.innerSize}}/**
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
 */const eC=new Ce(Ct.comparator);function gr(){return eC}const K9=new Ce(Ct.comparator);function Tl(...r){let t=K9;for(const i of r)t=t.insert(i.key,i);return t}function Y9(r){let t=K9;return r.forEach((i,s)=>t=t.insert(i,s.overlayedDocument)),t}function Wa(){return xl()}function $9(){return xl()}function xl(){return new as(r=>r.toString(),(r,t)=>r.isEqual(t))}const nC=new Ce(Ct.comparator),iC=new qe(Ct.comparator);function Ut(...r){let t=iC;for(const i of r)t=t.add(i);return t}const rC=new qe(jt);function aC(){return rC}/**
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
 */function C2(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(t)?"-0":t}}function X9(r){return{integerValue:""+r}}function W9(r,t){return Nv(t)?X9(t):C2(r,t)}/**
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
 */class t0{constructor(){this._=void 0}}function sC(r,t,i){return r instanceof kc?function(l,c){const f={fields:{[V9]:{stringValue:N9},[O9]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&p2(c)&&(c=Xc(c)),c&&(f.fields[L9]=c),{mapValue:f}}(i,t):r instanceof ao?J9(r,t):r instanceof kl?t7(r,t):function(l,c){const f=Z9(l,c),p=Yf(f)+Yf(l.Ie);return k4(f)&&k4(l.Ie)?X9(p):C2(l.serializer,p)}(r,t)}function oC(r,t,i){return r instanceof ao?J9(r,t):r instanceof kl?t7(r,t):i}function Z9(r,t){return r instanceof Ul?function(s){return k4(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class kc extends t0{}class ao extends t0{constructor(t){super(),this.elements=t}}function J9(r,t){const i=e7(t);for(const s of r.elements)i.some(l=>Oi(l,s))||i.push(s);return{arrayValue:{values:i}}}class kl extends t0{constructor(t){super(),this.elements=t}}function t7(r,t){let i=e7(t);for(const s of r.elements)i=i.filter(l=>!Oi(l,s));return{arrayValue:{values:i}}}class Ul extends t0{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function Yf(r){return De(r.integerValue||r.doubleValue)}function e7(r){return m2(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class n7{constructor(t,i){this.field=t,this.transform=i}}function lC(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof ao&&l instanceof ao||s instanceof kl&&l instanceof kl?no(s.elements,l.elements,Oi):s instanceof Ul&&l instanceof Ul?Oi(s.Ie,l.Ie):s instanceof kc&&l instanceof kc}(r.transform,t.transform)}class uC{constructor(t,i){this.version=t,this.transformResults=i}}class Ni{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ni}static exists(t){return new Ni(void 0,t)}static updateTime(t){return new Ni(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ac(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class e0{}function i7(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new a7(r.key,Ni.none()):new Bl(r.key,r.data,Ni.none());{const i=r.data,s=Sn.empty();let l=new qe(on.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new ga(r.key,s,new Un(l.toArray()),Ni.none())}}function cC(r,t,i){r instanceof Bl?function(l,c,f){const p=l.value.clone(),m=Xf(l.fieldTransforms,c,f.transformResults);p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,i):r instanceof ga?function(l,c,f){if(!Ac(l.precondition,c))return void c.convertToUnknownDocument(f.version);const p=Xf(l.fieldTransforms,c,f.transformResults),m=c.data;m.setAll(r7(l)),m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function Dl(r,t,i,s){return r instanceof Bl?function(c,f,p,m){if(!Ac(c.precondition,f))return p;const y=c.value.clone(),_=Wf(c.fieldTransforms,m,f);return y.setAll(_),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,s):r instanceof ga?function(c,f,p,m){if(!Ac(c.precondition,f))return p;const y=Wf(c.fieldTransforms,m,f),_=f.data;return _.setAll(r7(c)),_.setAll(y),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(b=>b.field))}(r,t,i,s):function(c,f,p){return Ac(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p}(r,t,i)}function hC(r,t){let i=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=Z9(s.transform,l||null);c!=null&&(i===null&&(i=Sn.empty()),i.set(s.field,c))}return i||null}function $f(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&no(s,l,(c,f)=>lC(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Bl extends e0{constructor(t,i,s,l=[]){super(),this.key=t,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ga extends e0{constructor(t,i,s,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function r7(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const s=r.data.field(i);t.set(i,s)}}),t}function Xf(r,t,i){const s=new Map;te(r.length===i.length);for(let l=0;l<i.length;l++){const c=r[l],f=c.transform,p=t.data.field(c.field);s.set(c.field,oC(f,p,i[l]))}return s}function Wf(r,t,i){const s=new Map;for(const l of r){const c=l.transform,f=i.data.field(l.field);s.set(l.field,sC(c,f,t))}return s}class a7 extends e0{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fC extends e0{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dC{constructor(t,i,s,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&cC(c,t,s[l])}}applyToLocalView(t,i){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(i=Dl(s,t,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(i=Dl(s,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const s=$9();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=i.has(l.key)?null:p;const m=i7(f,p);m!==null&&s.set(l.key,m),f.isValidDocument()||f.convertToNoDocument(wt.min())}),s}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Ut())}isEqual(t){return this.batchId===t.batchId&&no(this.mutations,t.mutations,(i,s)=>$f(i,s))&&no(this.baseMutations,t.baseMutations,(i,s)=>$f(i,s))}}class _2{constructor(t,i,s,l){this.batch=t,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(t,i,s){te(t.mutations.length===s.length);let l=function(){return nC}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new _2(t,i,s,l)}}/**
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
 */class pC{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class mC{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var Oe,Gt;function gC(r){switch(r){case et.OK:return Et();case et.CANCELLED:case et.UNKNOWN:case et.DEADLINE_EXCEEDED:case et.RESOURCE_EXHAUSTED:case et.INTERNAL:case et.UNAVAILABLE:case et.UNAUTHENTICATED:return!1;case et.INVALID_ARGUMENT:case et.NOT_FOUND:case et.ALREADY_EXISTS:case et.PERMISSION_DENIED:case et.FAILED_PRECONDITION:case et.ABORTED:case et.OUT_OF_RANGE:case et.UNIMPLEMENTED:case et.DATA_LOSS:return!0;default:return Et()}}function s7(r){if(r===void 0)return mr("GRPC error has no .code"),et.UNKNOWN;switch(r){case Oe.OK:return et.OK;case Oe.CANCELLED:return et.CANCELLED;case Oe.UNKNOWN:return et.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return et.INTERNAL;case Oe.UNAVAILABLE:return et.UNAVAILABLE;case Oe.UNAUTHENTICATED:return et.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case Oe.NOT_FOUND:return et.NOT_FOUND;case Oe.ALREADY_EXISTS:return et.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return et.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case Oe.ABORTED:return et.ABORTED;case Oe.OUT_OF_RANGE:return et.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return et.UNIMPLEMENTED;case Oe.DATA_LOSS:return et.DATA_LOSS;default:return Et()}}(Gt=Oe||(Oe={}))[Gt.OK=0]="OK",Gt[Gt.CANCELLED=1]="CANCELLED",Gt[Gt.UNKNOWN=2]="UNKNOWN",Gt[Gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Gt[Gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Gt[Gt.NOT_FOUND=5]="NOT_FOUND",Gt[Gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Gt[Gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Gt[Gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Gt[Gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Gt[Gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Gt[Gt.ABORTED=10]="ABORTED",Gt[Gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Gt[Gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Gt[Gt.INTERNAL=13]="INTERNAL",Gt[Gt.UNAVAILABLE=14]="UNAVAILABLE",Gt[Gt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yC(){return new TextEncoder}/**
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
 */const vC=new ra([4294967295,4294967295],0);function Zf(r){const t=yC().encode(r),i=new E9;return i.update(t),new Uint8Array(i.digest())}function Jf(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new ra([i,s],0),new ra([l,c],0)]}class E2{constructor(t,i,s){if(this.bitmap=t,this.padding=i,this.hashCount=s,i<0||i>=8)throw new Al(`Invalid padding: ${i}`);if(s<0)throw new Al(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${s}`);if(t.length===0&&i!==0)throw new Al(`Invalid padding when bitmap length is 0: ${i}`);this.Ee=8*t.length-i,this.de=ra.fromNumber(this.Ee)}Ae(t,i,s){let l=t.add(i.multiply(ra.fromNumber(s)));return l.compare(vC)===1&&(l=new ra([l.getBits(0),l.getBits(1)],0)),l.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const i=Zf(t),[s,l]=Jf(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);if(!this.Re(f))return!1}return!0}static create(t,i,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new E2(c,l,i);return s.forEach(p=>f.insert(p)),f}insert(t){if(this.Ee===0)return;const i=Zf(t),[s,l]=Jf(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);this.Ve(f)}}Ve(t){const i=Math.floor(t/8),s=t%8;this.bitmap[i]|=1<<s}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class n0{constructor(t,i,s,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,s){const l=new Map;return l.set(t,Hl.createSynthesizedTargetChangeForCurrentChange(t,i,s)),new n0(wt.min(),l,new Ce(jt),gr(),Ut())}}class Hl{constructor(t,i,s,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,s){return new Hl(s,i,Ut(),Ut(),Ut())}}/**
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
 */class Sc{constructor(t,i,s,l){this.me=t,this.removedTargetIds=i,this.key=s,this.fe=l}}class o7{constructor(t,i){this.targetId=t,this.ge=i}}class l7{constructor(t,i,s=ln.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=s,this.cause=l}}class t6{constructor(){this.pe=0,this.ye=e6(),this.we=ln.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Ut(),i=Ut(),s=Ut();return this.ye.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:Et()}}),new Hl(this.we,this.be,t,i,s)}Me(){this.Se=!1,this.ye=e6()}xe(t,i){this.Se=!0,this.ye=this.ye.insert(t,i)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,te(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class CC{constructor(t){this.ke=t,this.qe=new Map,this.Qe=gr(),this.$e=mc(),this.Ke=mc(),this.Ue=new Ce(jt)}We(t){for(const i of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(i,t.fe):this.ze(i,t.key,t.fe);for(const i of t.removedTargetIds)this.ze(i,t.key,t.fe)}je(t){this.forEachTarget(t,i=>{const s=this.He(i);switch(t.state){case 0:this.Je(i)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(i);break;case 3:this.Je(i)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(i)&&(this.Ye(i),s.Ce(t.resumeToken));break;default:Et()}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.qe.forEach((s,l)=>{this.Je(l)&&i(l)})}Ze(t){const i=t.targetId,s=t.ge.count,l=this.Xe(i);if(l){const c=l.target;if(P4(c))if(s===0){const f=new Ct(c.path);this.ze(i,f,pn.newNoDocument(f,wt.min()))}else te(s===1);else{const f=this.et(i);if(f!==s){const p=this.tt(t),m=p?this.nt(p,t,f):1;if(m!==0){this.Ye(i);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,y)}}}}}tt(t){const i=t.ge.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=i;let f,p;try{f=ua(s).toUint8Array()}catch(m){if(m instanceof I9)return eo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new E2(f,l,c)}catch(m){return eo(m instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.Ee===0?null:p}nt(t,i,s){return i.ge.count===s-this.st(t,i.targetId)?0:2}st(t,i){const s=this.ke.getRemoteKeysForTarget(i);let l=0;return s.forEach(c=>{const f=this.ke.it(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(p)||(this.ze(i,c,null),l++)}),l}ot(t){const i=new Map;this.qe.forEach((c,f)=>{const p=this.Xe(f);if(p){if(c.current&&P4(p.target)){const m=new Ct(p.target.path);this._t(m).has(f)||this.ut(f,m)||this.ze(f,m,pn.newNoDocument(m,t))}c.ve&&(i.set(f,c.Fe()),c.Me())}});let s=Ut();this.Ke.forEach((c,f)=>{let p=!0;f.forEachWhile(m=>{const y=this.Xe(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const l=new n0(t,i,this.Ue,this.Qe,s);return this.Qe=gr(),this.$e=mc(),this.Ke=mc(),this.Ue=new Ce(jt),l}Ge(t,i){if(!this.Je(t))return;const s=this.ut(t,i.key)?2:0;this.He(t).xe(i.key,s),this.Qe=this.Qe.insert(i.key,i),this.$e=this.$e.insert(i.key,this._t(i.key).add(t)),this.Ke=this.Ke.insert(i.key,this.ct(i.key).add(t))}ze(t,i,s){if(!this.Je(t))return;const l=this.He(t);this.ut(t,i)?l.xe(i,1):l.Oe(i),this.Ke=this.Ke.insert(i,this.ct(i).delete(t)),this.Ke=this.Ke.insert(i,this.ct(i).add(t)),s&&(this.Qe=this.Qe.insert(i,s))}removeTarget(t){this.qe.delete(t)}et(t){const i=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let i=this.qe.get(t);return i||(i=new t6,this.qe.set(t,i)),i}ct(t){let i=this.Ke.get(t);return i||(i=new qe(jt),this.Ke=this.Ke.insert(t,i)),i}_t(t){let i=this.$e.get(t);return i||(i=new qe(jt),this.$e=this.$e.insert(t,i)),i}Je(t){const i=this.Xe(t)!==null;return i||ct("WatchChangeAggregator","Detected inactive target",t),i}Xe(t){const i=this.qe.get(t);return i&&i.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new t6),this.ke.getRemoteKeysForTarget(t).forEach(i=>{this.ze(t,i,null)})}ut(t,i){return this.ke.getRemoteKeysForTarget(t).has(i)}}function mc(){return new Ce(Ct.comparator)}function e6(){return new Ce(Ct.comparator)}const _C={asc:"ASCENDING",desc:"DESCENDING"},EC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TC={and:"AND",or:"OR"};class AC{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function j4(r,t){return r.useProto3Json||$c(t)?t:{value:t}}function Uc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function u7(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function SC(r,t){return Uc(r,t.toTimestamp())}function Vi(r){return te(!!r),wt.fromTimestamp(function(i){const s=la(i);return new He(s.seconds,s.nanos)}(r))}function T2(r,t){return B4(r,t).canonicalString()}function B4(r,t){const i=function(l){return new pe(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function c7(r){const t=pe.fromString(r);return te(m7(t)),t}function H4(r,t){return T2(r.databaseId,t.path)}function T4(r,t){const i=c7(t);if(i.get(1)!==r.databaseId.projectId)throw new gt(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new gt(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new Ct(f7(i))}function h7(r,t){return T2(r.databaseId,t)}function bC(r){const t=c7(r);return t.length===4?pe.emptyPath():f7(t)}function q4(r){return new pe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function f7(r){return te(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function n6(r,t,i){return{name:H4(r,t),fields:i.value.mapValue.fields}}function wC(r,t){let i;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Et()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,_){return y.useProto3Json?(te(_===void 0||typeof _=="string"),ln.fromBase64String(_||"")):(te(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ln.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&function(y){const _=y.code===void 0?et.UNKNOWN:s7(y.code);return new gt(_,y.message||"")}(f);i=new l7(s,l,c,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=T4(r,s.document.name),c=Vi(s.document.updateTime),f=s.document.createTime?Vi(s.document.createTime):wt.min(),p=new Sn({mapValue:{fields:s.document.fields}}),m=pn.newFoundDocument(l,c,f,p),y=s.targetIds||[],_=s.removedTargetIds||[];i=new Sc(y,_,m.key,m)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=T4(r,s.document),c=s.readTime?Vi(s.readTime):wt.min(),f=pn.newNoDocument(l,c),p=s.removedTargetIds||[];i=new Sc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=T4(r,s.document),c=s.removedTargetIds||[];i=new Sc([],c,l,null)}else{if(!("filter"in t))return Et();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new mC(l,c),p=s.targetId;i=new o7(p,f)}}return i}function RC(r,t){let i;if(t instanceof Bl)i={update:n6(r,t.key,t.value)};else if(t instanceof a7)i={delete:H4(r,t.key)};else if(t instanceof ga)i={update:n6(r,t.key,t.data),updateMask:kC(t.fieldMask)};else{if(!(t instanceof fC))return Et();i={verify:H4(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const p=f.transform;if(p instanceof kc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ao)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof kl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Ul)return{fieldPath:f.field.canonicalString(),increment:p.Ie};throw Et()}(0,s))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:SC(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Et()}(r,t.precondition)),i}function xC(r,t){return r&&r.length>0?(te(t!==void 0),r.map(i=>function(l,c){let f=l.updateTime?Vi(l.updateTime):Vi(c);return f.isEqual(wt.min())&&(f=Vi(c)),new uC(f,l.transformResults||[])}(i,t))):[]}function DC(r,t){return{documents:[h7(r,t.path)]}}function MC(r,t){const i={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=h7(r,l);const c=function(y){if(y.length!==0)return p7(ki.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(_=>function(w){return{field:Ws(w.field),direction:VC(w.dir)}}(_))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const p=j4(r,t.limit);return p!==null&&(i.structuredQuery.limit=p),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:i,parent:l}}function IC(r){let t=bC(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){te(s===1);const _=i.from[0];_.allDescendants?l=_.collectionId:t=t.child(_.collectionId)}let c=[];i.where&&(c=function(b){const w=d7(b);return w instanceof ki&&B9(w)?w.getFilters():[w]}(i.where));let f=[];i.orderBy&&(f=function(b){return b.map(w=>function(k){return new Oc(Zs(k.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(i.orderBy));let p=null;i.limit&&(p=function(b){let w;return w=typeof b=="object"?b.value:b,$c(w)?null:w}(i.limit));let m=null;i.startAt&&(m=function(b){const w=!!b.before,N=b.values||[];return new Lc(N,w)}(i.startAt));let y=null;return i.endAt&&(y=function(b){const w=!b.before,N=b.values||[];return new Lc(N,w)}(i.endAt)),Xv(t,l,f,c,p,"F",m,y)}function NC(r,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Et()}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function d7(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Zs(i.unaryFilter.field);return Be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Zs(i.unaryFilter.field);return Be.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Zs(i.unaryFilter.field);return Be.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Zs(i.unaryFilter.field);return Be.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Et()}}(r):r.fieldFilter!==void 0?function(i){return Be.create(Zs(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Et()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return ki.create(i.compositeFilter.filters.map(s=>d7(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Et()}}(i.compositeFilter.op))}(r):Et()}function VC(r){return _C[r]}function LC(r){return EC[r]}function OC(r){return TC[r]}function Ws(r){return{fieldPath:r.canonicalString()}}function Zs(r){return on.fromServerFormat(r.fieldPath)}function p7(r){return r instanceof Be?function(i){if(i.op==="=="){if(qf(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NAN"}};if(Hf(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(qf(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NOT_NAN"}};if(Hf(i.value))return{unaryFilter:{field:Ws(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(i.field),op:LC(i.op),value:i.value}}}(r):r instanceof ki?function(i){const s=i.getFilters().map(l=>p7(l));return s.length===1?s[0]:{compositeFilter:{op:OC(i.op),filters:s}}}(r):Et()}function kC(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function m7(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ta{constructor(t,i,s,l,c=wt.min(),f=wt.min(),p=ln.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new ta(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class UC{constructor(t){this.Tt=t}}function PC(r){const t=IC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?z4(t,t.limit,"L"):t}/**
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
 */class zC{constructor(){this.Tn=new jC}addToCollectionParentIndex(t,i){return this.Tn.add(i),J.resolve()}getCollectionParents(t,i){return J.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return J.resolve()}deleteFieldIndex(t,i){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,i){return J.resolve()}getDocumentsMatchingTarget(t,i){return J.resolve(null)}getIndexType(t,i){return J.resolve(0)}getFieldIndexes(t,i){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,i){return J.resolve(oa.min())}getMinOffsetFromCollectionGroup(t,i){return J.resolve(oa.min())}updateCollectionGroup(t,i,s){return J.resolve()}updateIndexEntries(t,i){return J.resolve()}}class jC{constructor(){this.index={}}add(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i]||new qe(pe.comparator),c=!l.has(s);return this.index[i]=l.add(s),c}has(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(t){return(this.index[t]||new qe(pe.comparator)).toArray()}}/**
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
 */const i6={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g7=41943040;class An{static withCacheSize(t){return new An(t,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
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
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(g7,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
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
 */class so{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new so(0)}static Un(){return new so(-1)}}/**
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
 */const r6="LruGarbageCollector",BC=1048576;function a6([r,t],[i,s]){const l=jt(r,i);return l===0?jt(t,s):l}class HC{constructor(t){this.Hn=t,this.buffer=new qe(a6),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();a6(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class qC{constructor(t,i,s){this.garbageCollector=t,this.asyncQueue=i,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ct(r6,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){mo(i)?ct(r6,"Ignoring IndexedDB error during garbage collection: ",i):await po(i)}await this.er(3e5)})}}class FC{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(s=>Math.floor(i/100*s))}nthSequenceNumber(t,i){if(i===0)return J.resolve(Yc.ae);const s=new HC(i);return this.tr.forEachTarget(t,l=>s.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>s.Zn(l))).next(()=>s.maxValue)}removeTargets(t,i,s){return this.tr.removeTargets(t,i,s)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(i6)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i6):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let s,l,c,f,p,m,y;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),l=this.params.maximumSequenceNumbersToCollect):l=b,f=Date.now(),this.nthSequenceNumber(t,l))).next(b=>(s=b,p=Date.now(),this.removeTargets(t,s,i))).next(b=>(c=b,m=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(y=Date.now(),$s()<=Qt.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${c} targets in `+(m-p)+`ms
	Removed ${b} documents in `+(y-m)+`ms
Total Duration: ${y-_}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:b})))}}function GC(r,t){return new FC(r,t)}/**
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
 */class QC{constructor(){this.changes=new as(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,pn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?J.resolve(s):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class KC{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class YC{constructor(t,i,s,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,i){let s=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(s!==null&&Dl(s.mutation,l,Un.empty(),He.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.getLocalViewOfDocuments(t,s,Ut()).next(()=>s))}getLocalViewOfDocuments(t,i,s=Ut()){const l=Wa();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,s).next(c=>{let f=Tl();return c.forEach((p,m)=>{f=f.insert(p,m.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const s=Wa();return this.populateOverlays(t,s,i).next(()=>this.computeViews(t,i,s,Ut()))}populateOverlays(t,i,s){const l=[];return s.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,p)=>{i.set(f,p)})})}computeViews(t,i,s,l){let c=gr();const f=xl(),p=function(){return xl()}();return i.forEach((m,y)=>{const _=s.get(y.key);l.has(y.key)&&(_===void 0||_.mutation instanceof ga)?c=c.insert(y.key,y):_!==void 0?(f.set(y.key,_.mutation.getFieldMask()),Dl(_.mutation,y,_.mutation.getFieldMask(),He.now())):f.set(y.key,Un.empty())}),this.recalculateAndSaveOverlays(t,c).next(m=>(m.forEach((y,_)=>f.set(y,_)),i.forEach((y,_)=>{var b;return p.set(y,new KC(_,(b=f.get(y))!==null&&b!==void 0?b:null))}),p))}recalculateAndSaveOverlays(t,i){const s=xl();let l=new Ce((f,p)=>f-p),c=Ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const p of f)p.keys().forEach(m=>{const y=i.get(m);if(y===null)return;let _=s.get(m)||Un.empty();_=p.applyToLocalView(y,_),s.set(m,_);const b=(l.get(p.batchId)||Ut()).add(m);l=l.insert(p.batchId,b)})}).next(()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),y=m.key,_=m.value,b=$9();_.forEach(w=>{if(!c.has(w)){const N=i7(i.get(w),s.get(w));N!==null&&b.set(w,N),c=c.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,b))}return J.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,i,s,l){return function(f){return Ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Wv(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,s,l):this.getDocumentsMatchingCollectionQuery(t,i,s,l)}getNextDocuments(t,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,s.largestBatchId,l-c.size):J.resolve(Wa());let p=Nl,m=c;return f.next(y=>J.forEach(y,(_,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),c.get(_)?J.resolve():this.remoteDocumentCache.getEntry(t,_).next(w=>{m=m.insert(_,w)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,m,y,Ut())).next(_=>({batchId:p,changes:Y9(_)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new Ct(i)).next(s=>{let l=Tl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,s,l){const c=i.collectionGroup;let f=Tl();return this.indexManager.getCollectionParents(t,c).next(p=>J.forEach(p,m=>{const y=function(b,w){return new Wc(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(i,m.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(_=>{_.forEach((b,w)=>{f=f.insert(b,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,s,c,l))).next(f=>{c.forEach((m,y)=>{const _=y.getKey();f.get(_)===null&&(f=f.insert(_,pn.newInvalidDocument(_)))});let p=Tl();return f.forEach((m,y)=>{const _=c.get(m);_!==void 0&&Dl(_.mutation,y,Un.empty(),He.now()),Jc(i,y)&&(p=p.insert(m,y))}),p})}}/**
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
 */class $C{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return J.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Vi(l.createTime)}}(i)),J.resolve()}getNamedQuery(t,i){return J.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:PC(l.bundledQuery),readTime:Vi(l.readTime)}}(i)),J.resolve()}}/**
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
 */class XC{constructor(){this.overlays=new Ce(Ct.comparator),this.Rr=new Map}getOverlay(t,i){return J.resolve(this.overlays.get(i))}getOverlays(t,i){const s=Wa();return J.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,i,s){return s.forEach((l,c)=>{this.Et(t,i,c)}),J.resolve()}removeOverlaysForBatchId(t,i,s){const l=this.Rr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),J.resolve()}getOverlaysForCollection(t,i,s){const l=Wa(),c=i.length+1,f=new Ct(i.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,y=m.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&m.largestBatchId>s&&l.set(m.getKey(),m)}return J.resolve(l)}getOverlaysForCollectionGroup(t,i,s,l){let c=new Ce((y,_)=>y-_);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let _=c.get(y.largestBatchId);_===null&&(_=Wa(),c=c.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const p=Wa(),m=c.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,_)=>p.set(y,_)),!(p.size()>=l)););return J.resolve(p)}Et(t,i,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Rr.get(l.largestBatchId).delete(s.key);this.Rr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new pC(i,s));let c=this.Rr.get(i);c===void 0&&(c=Ut(),this.Rr.set(i,c)),this.Rr.set(i,c.add(s.key))}}/**
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
 */class WC{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,J.resolve()}}/**
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
 */class A2{constructor(){this.Vr=new qe(Xe.mr),this.gr=new qe(Xe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const s=new Xe(t,i);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,i){t.forEach(s=>this.addReference(s,i))}removeReference(t,i){this.wr(new Xe(t,i))}br(t,i){t.forEach(s=>this.removeReference(s,i))}Sr(t){const i=new Ct(new pe([])),s=new Xe(i,t),l=new Xe(i,t+1),c=[];return this.gr.forEachInRange([s,l],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new Ct(new pe([])),s=new Xe(i,t),l=new Xe(i,t+1);let c=Ut();return this.gr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new Xe(t,0),s=this.Vr.firstAfterOrEqual(i);return s!==null&&t.isEqual(s.key)}}class Xe{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return Ct.comparator(t.key,i.key)||jt(t.Cr,i.Cr)}static pr(t,i){return jt(t.Cr,i.Cr)||Ct.comparator(t.key,i.key)}}/**
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
 */class ZC{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new qe(Xe.mr)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,s,l){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new dC(c,i,s,l);this.mutationQueue.push(f);for(const p of l)this.Mr=this.Mr.add(new Xe(p.key,c)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return J.resolve(f)}lookupMutationBatch(t,i){return J.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const s=i+1,l=this.Nr(s),c=l<0?0:l;return J.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?d2:this.Fr-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const s=new Xe(i,0),l=new Xe(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,l],f=>{const p=this.Or(f.Cr);c.push(p)}),J.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let s=new qe(jt);return i.forEach(l=>{const c=new Xe(l,0),f=new Xe(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],p=>{s=s.add(p.Cr)})}),J.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,i){const s=i.path,l=s.length+1;let c=s;Ct.isDocumentKey(c)||(c=c.child(""));const f=new Xe(new Ct(c),0);let p=new qe(jt);return this.Mr.forEachWhile(m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(m.Cr)),!0)},f),J.resolve(this.Br(p))}Br(t){const i=[];return t.forEach(s=>{const l=this.Or(s);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){te(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return J.forEach(i.mutations,l=>{const c=new Xe(l.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,i){const s=new Xe(i,0),l=this.Mr.firstAfterOrEqual(s);return J.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class JC{constructor(t){this.kr=t,this.docs=function(){return new Ce(Ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const s=i.key,l=this.docs.get(s),c=l?l.size:0,f=this.kr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const s=this.docs.get(i);return J.resolve(s?s.document.mutableCopy():pn.newInvalidDocument(i))}getEntries(t,i){let s=gr();return i.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():pn.newInvalidDocument(l))}),J.resolve(s)}getDocumentsMatchingQuery(t,i,s,l){let c=gr();const f=i.path,p=new Ct(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:y,value:{document:_}}=m.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||xv(Rv(_),s)<=0||(l.has(_.key)||Jc(i,_))&&(c=c.insert(_.key,_.mutableCopy()))}return J.resolve(c)}getAllFromCollectionGroup(t,i,s,l){Et()}qr(t,i){return J.forEach(this.docs,s=>i(s))}newChangeBuffer(t){return new t_(this)}getSize(t){return J.resolve(this.size)}}class t_ extends QC{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(s)}),J.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
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
 */class e_{constructor(t){this.persistence=t,this.Qr=new as(i=>g2(i),y2),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new A2,this.targetCount=0,this.Ur=so.Kn()}forEachTarget(t,i){return this.Qr.forEach((s,l)=>i(l)),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.$r&&(this.$r=i),J.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new so(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,J.resolve()}updateTargetData(t,i){return this.zn(i),J.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,i,s){let l=0;const c=[];return this.Qr.forEach((f,p)=>{p.sequenceNumber<=i&&s.get(p.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),J.waitFor(c).next(()=>l)}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,i){const s=this.Qr.get(i)||null;return J.resolve(s)}addMatchingKeys(t,i,s){return this.Kr.yr(i,s),J.resolve()}removeMatchingKeys(t,i,s){this.Kr.br(i,s);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),J.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),J.resolve()}getMatchingKeysForTargetId(t,i){const s=this.Kr.vr(i);return J.resolve(s)}containsKey(t,i){return J.resolve(this.Kr.containsKey(i))}}/**
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
 */class y7{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new Yc(0),this.zr=!1,this.zr=!0,this.jr=new WC,this.referenceDelegate=t(this),this.Hr=new e_(this),this.indexManager=new zC,this.remoteDocumentCache=function(l){return new JC(l)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new UC(i),this.Yr=new $C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new XC,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let s=this.Wr[t.toKey()];return s||(s=new ZC(i,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,s){ct("MemoryPersistence","Starting transaction:",t);const l=new n_(this.Gr.next());return this.referenceDelegate.Zr(),s(l).next(c=>this.referenceDelegate.Xr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}ei(t,i){return J.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,i)))}}class n_ extends Mv{constructor(t){super(),this.currentSequenceNumber=t}}class S2{constructor(t){this.persistence=t,this.ti=new A2,this.ni=null}static ri(t){return new S2(t)}get ii(){if(this.ni)return this.ni;throw Et()}addReference(t,i,s){return this.ti.addReference(s,i),this.ii.delete(s.toString()),J.resolve()}removeReference(t,i,s){return this.ti.removeReference(s,i),this.ii.add(s.toString()),J.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),J.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,s=>{const l=Ct.fromPath(s);return this.si(t,l).next(c=>{c||i.removeEntry(l,wt.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(s=>{s?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return J.or([()=>J.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Pc{constructor(t,i){this.persistence=t,this.oi=new as(s=>Vv(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=GC(this,i)}static ri(t,i){return new Pc(t,i)}Zr(){}Xr(t){return J.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>i.next(l=>s+l))}sr(t){let i=0;return this.rr(t,s=>{i++}).next(()=>i)}rr(t,i){return J.forEach(this.oi,(s,l)=>this.ar(t,s,l).next(c=>c?J.resolve():i(l)))}removeTargets(t,i,s){return this.persistence.getTargetCache().removeTargets(t,i,s)}removeOrphanedDocuments(t,i){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.qr(t,f=>this.ar(t,f,i).next(p=>{p||(s++,c.removeEntry(f,wt.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),J.resolve()}removeTarget(t,i){const s=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),J.resolve()}removeReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),J.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=Ec(t.data.value)),i}ar(t,i,s){return J.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return J.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class b2{constructor(t,i,s,l){this.targetId=t,this.fromCache=i,this.Hi=s,this.Ji=l}static Yi(t,i){let s=Ut(),l=Ut();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new b2(t,i.fromCache,s,l)}}/**
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
 */class i_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class r_{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Vm()?8:Iv(Mm())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,s,l){const c={result:null};return this.rs(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,i,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new i_;return this._s(t,i,f).next(p=>{if(c.result=p,this.Xi)return this.us(t,i,f,p.size)})}).next(()=>c.result)}us(t,i,s,l){return s.documentReadCount<this.es?($s()<=Qt.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",Xs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):($s()<=Qt.DEBUG&&ct("QueryEngine","Query:",Xs(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ts*l?($s()<=Qt.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",Xs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ii(i))):J.resolve())}rs(t,i){if(Kf(i))return J.resolve(null);let s=Ii(i);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=z4(i,null,"F"),s=Ii(i)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Ut(...c);return this.ns.getDocuments(t,f).next(p=>this.indexManager.getMinOffset(t,s).next(m=>{const y=this.cs(i,p);return this.ls(i,y,f,m.readTime)?this.rs(t,z4(i,null,"F")):this.hs(t,y,i,m)}))})))}ss(t,i,s,l){return Kf(i)||l.isEqual(wt.min())?J.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(i,c);return this.ls(i,f,s,l)?J.resolve(null):($s()<=Qt.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Xs(i)),this.hs(t,f,i,wv(l,Nl)).next(p=>p))})}cs(t,i){let s=new qe(Q9(t));return i.forEach((l,c)=>{Jc(t,c)&&(s=s.add(c))}),s}ls(t,i,s,l){if(t.limit===null)return!1;if(s.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}_s(t,i,s){return $s()<=Qt.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",Xs(i)),this.ns.getDocumentsMatchingQuery(t,i,oa.min(),s)}hs(t,i,s,l){return this.ns.getDocumentsMatchingQuery(t,s,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const w2="LocalStore",a_=3e8;class s_{constructor(t,i,s,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new Ce(jt),this.Is=new as(c=>g2(c),y2),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new YC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function o_(r,t,i,s){return new s_(r,t,i,s)}async function v7(r,t){const i=xt(r);return await i.persistence.runTransaction("Handle user change","readonly",s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,i.As(t),i.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],p=[];let m=Ut();for(const y of l){f.push(y.batchId);for(const _ of y.mutations)m=m.add(_.key)}for(const y of c){p.push(y.batchId);for(const _ of y.mutations)m=m.add(_.key)}return i.localDocuments.getDocuments(s,m).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:p}))})})}function l_(r,t){const i=xt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,y,_){const b=y.batch,w=b.keys();let N=J.resolve();return w.forEach(k=>{N=N.next(()=>_.getEntry(m,k)).next($=>{const z=y.docVersions.get(k);te(z!==null),$.version.compareTo(z)<0&&(b.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),_.addEntry($)))})}),N.next(()=>p.mutationQueue.removeMutationBatch(m,b))}(i,s,t,c).next(()=>c.apply(s)).next(()=>i.mutationQueue.performConsistencyCheck(s)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Ut();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(m=m.add(p.batch.mutations[y].key));return m}(t))).next(()=>i.localDocuments.getDocuments(s,l))})}function C7(r){const t=xt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function u_(r,t){const i=xt(r),s=t.snapshotVersion;let l=i.Ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.ds.newChangeBuffer({trackRemovals:!0});l=i.Ts;const p=[];t.targetChanges.forEach((_,b)=>{const w=l.get(b);if(!w)return;p.push(i.Hr.removeMatchingKeys(c,_.removedDocuments,b).next(()=>i.Hr.addMatchingKeys(c,_.addedDocuments,b)));let N=w.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(b)!==null?N=N.withResumeToken(ln.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,s)),l=l.insert(b,N),function($,z,G){return $.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=a_?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(w,N,_)&&p.push(i.Hr.updateTargetData(c,N))});let m=gr(),y=Ut();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(c,_))}),p.push(c_(c,f,t.documentUpdates).next(_=>{m=_.Vs,y=_.fs})),!s.isEqual(wt.min())){const _=i.Hr.getLastRemoteSnapshotVersion(c).next(b=>i.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));p.push(_)}return J.waitFor(p).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,m,y)).next(()=>m)}).then(c=>(i.Ts=l,c))}function c_(r,t,i){let s=Ut(),l=Ut();return i.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=gr();return i.forEach((p,m)=>{const y=c.get(p);m.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),m.isNoDocument()&&m.version.isEqual(wt.min())?(t.removeEntry(p,m.readTime),f=f.insert(p,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(m),f=f.insert(p,m)):ct(w2,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",m.version)}),{Vs:f,fs:l}})}function h_(r,t){const i=xt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=d2),i.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function f_(r,t){const i=xt(r);return i.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return i.Hr.getTargetData(s,t).next(c=>c?(l=c,J.resolve(l)):i.Hr.allocateTargetId(s).next(f=>(l=new ta(t,f,"TargetPurposeListen",s.currentSequenceNumber),i.Hr.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=i.Ts.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(s.targetId,s),i.Is.set(t,s.targetId)),s})}async function F4(r,t,i){const s=xt(r),l=s.Ts.get(t),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!mo(f))throw f;ct(w2,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(l.target)}function s6(r,t,i){const s=xt(r);let l=wt.min(),c=Ut();return s.persistence.runTransaction("Execute query","readwrite",f=>function(m,y,_){const b=xt(m),w=b.Is.get(_);return w!==void 0?J.resolve(b.Ts.get(w)):b.Hr.getTargetData(y,_)}(s,f,Ii(t)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,p.targetId).next(m=>{c=m})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,i?l:wt.min(),i?c:Ut())).next(p=>(d_(s,Jv(t),p),{documents:p,gs:c})))}function d_(r,t,i){let s=r.Es.get(t)||wt.min();i.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class o6{constructor(){this.activeTargetIds=aC()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class p_{constructor(){this.ho=new o6,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,s){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,s){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new o6,Promise.resolve()}handleUserChange(t,i,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class m_{To(t){}shutdown(){}}/**
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
 */const l6="ConnectivityMonitor";class u6{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ct(l6,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ct(l6,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gc=null;function G4(){return gc===null?gc=function(){return 268435456+Math.round(2147483648*Math.random())}():gc++,"0x"+gc.toString(16)}/**
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
 */const A4="RestConnection",g_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y_{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${s}/databases/${l}`,this.wo=this.databaseId.database===Nc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}bo(t,i,s,l,c){const f=G4(),p=this.So(t,i.toUriEncodedString());ct(A4,`Sending RPC '${t}' ${f}:`,p,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,l,c),this.vo(t,p,m,s).then(y=>(ct(A4,`Received RPC '${t}' ${f}: `,y),y),y=>{throw eo(A4,`RPC '${t}' ${f} failed with error: `,y,"url: ",p,"request:",s),y})}Co(t,i,s,l,c,f){return this.bo(t,i,s,l,c)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}So(t,i){const s=g_[t];return`${this.po}/v1/${i}:${s}`}terminate(){}}/**
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
 */class v_{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const fn="WebChannelConnection";class C_ extends y_{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,s,l){const c=G4();return new Promise((f,p)=>{const m=new T9;m.setWithCredentials(!0),m.listenOnce(A9.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case _c.NO_ERROR:const _=m.getResponseJson();ct(fn,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(_)),f(_);break;case _c.TIMEOUT:ct(fn,`RPC '${t}' ${c} timed out`),p(new gt(et.DEADLINE_EXCEEDED,"Request time out"));break;case _c.HTTP_ERROR:const b=m.getStatus();if(ct(fn,`RPC '${t}' ${c} failed with status:`,b,"response text:",m.getResponseText()),b>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const k=function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(G)>=0?G:et.UNKNOWN}(N.status);p(new gt(k,N.message))}else p(new gt(et.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new gt(et.UNAVAILABLE,"Connection failed."));break;default:Et()}}finally{ct(fn,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(l);ct(fn,`RPC '${t}' ${c} sending request:`,l),m.send(i,"POST",y,s,15)})}Wo(t,i,s){const l=G4(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=w9(),p=b9(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,i,s),m.encodeInitMessageHeaders=!0;const _=c.join("");ct(fn,`Creating RPC '${t}' stream ${l}: ${_}`,m);const b=f.createWebChannel(_,m);let w=!1,N=!1;const k=new v_({Fo:z=>{N?ct(fn,`Not sending because RPC '${t}' stream ${l} is closed:`,z):(w||(ct(fn,`Opening RPC '${t}' stream ${l} transport.`),b.open(),w=!0),ct(fn,`RPC '${t}' stream ${l} sending:`,z),b.send(z))},Mo:()=>b.close()}),$=(z,G,O)=>{z.listen(G,K=>{try{O(K)}catch(nt){setTimeout(()=>{throw nt},0)}})};return $(b,El.EventType.OPEN,()=>{N||(ct(fn,`RPC '${t}' stream ${l} transport opened.`),k.Qo())}),$(b,El.EventType.CLOSE,()=>{N||(N=!0,ct(fn,`RPC '${t}' stream ${l} transport closed`),k.Ko())}),$(b,El.EventType.ERROR,z=>{N||(N=!0,eo(fn,`RPC '${t}' stream ${l} transport errored:`,z),k.Ko(new gt(et.UNAVAILABLE,"The operation could not be completed")))}),$(b,El.EventType.MESSAGE,z=>{var G;if(!N){const O=z.data[0];te(!!O);const K=O,nt=(K==null?void 0:K.error)||((G=K[0])===null||G===void 0?void 0:G.error);if(nt){ct(fn,`RPC '${t}' stream ${l} received error:`,nt);const at=nt.status;let ht=function(S){const D=Oe[S];if(D!==void 0)return s7(D)}(at),I=nt.message;ht===void 0&&(ht=et.INTERNAL,I="Unknown error status: "+at+" with message "+nt.message),N=!0,k.Ko(new gt(ht,I)),b.close()}else ct(fn,`RPC '${t}' stream ${l} received:`,O),k.Uo(O)}}),$(p,S9.STAT_EVENT,z=>{z.stat===L4.PROXY?ct(fn,`RPC '${t}' stream ${l} detected buffering proxy`):z.stat===L4.NOPROXY&&ct(fn,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function S4(){return typeof document<"u"?document:null}/**
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
 */function i0(r){return new AC(r,!0)}/**
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
 */class _7{constructor(t,i,s=1e3,l=1.5,c=6e4){this.Ti=t,this.timerId=i,this.Go=s,this.zo=l,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-s);l>0&&ct("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const c6="PersistentStream";class E7{constructor(t,i,s,l,c,f,p,m){this.Ti=t,this.n_=s,this.r_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new _7(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===et.RESOURCE_EXHAUSTED?(mr(i.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.i_===i&&this.V_(s,l)},s=>{t(()=>{const l=new gt(et.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(l)})})}V_(t,i){const s=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{s(()=>this.m_(l))}),this.stream.onMessage(l=>{s(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ct(c6,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(ct(c6,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class __ extends E7{constructor(t,i,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}f_(t,i){return this.connection.Wo("Listen",t,i)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const i=wC(this.serializer,t),s=function(c){if(!("targetChange"in c))return wt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?wt.min():f.readTime?Vi(f.readTime):wt.min()}(t);return this.listener.p_(i,s)}y_(t){const i={};i.database=q4(this.serializer),i.addTarget=function(c,f){let p;const m=f.target;if(p=P4(m)?{documents:DC(c,m)}:{query:MC(c,m).ht},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=u7(c,f.resumeToken);const y=j4(c,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(wt.min())>0){p.readTime=Uc(c,f.snapshotVersion.toTimestamp());const y=j4(c,f.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,t);const s=NC(this.serializer,t);s&&(i.labels=s),this.I_(i)}w_(t){const i={};i.database=q4(this.serializer),i.removeTarget=t,this.I_(i)}}class E_ extends E7{constructor(t,i,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return te(!!t.streamToken),this.lastStreamToken=t.streamToken,te(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){te(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=xC(t.writeResults,t.commitTime),s=Vi(t.commitTime);return this.listener.v_(s,i)}C_(){const t={};t.database=q4(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(s=>RC(this.serializer,s))};this.I_(i)}}/**
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
 */class T_{}class A_ extends T_{constructor(t,i,s,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new gt(et.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,B4(i,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new gt(et.UNKNOWN,c.toString())})}Co(t,i,s,l,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.Co(t,B4(i,s),l,f,p,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new gt(et.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class S_{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(mr(i),this.N_=!1):ct("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ns="RemoteStore";class b_{constructor(t,i,s,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{ss(this)&&(ct(ns,"Restarting streams for network reachability change."),await async function(m){const y=xt(m);y.W_.add(4),await ql(y),y.j_.set("Unknown"),y.W_.delete(4),await r0(y)}(this))})}),this.j_=new S_(s,l)}}async function r0(r){if(ss(r))for(const t of r.G_)await t(!0)}async function ql(r){for(const t of r.G_)await t(!1)}function T7(r,t){const i=xt(r);i.U_.has(t.targetId)||(i.U_.set(t.targetId,t),M2(i)?D2(i):go(i).c_()&&x2(i,t))}function R2(r,t){const i=xt(r),s=go(i);i.U_.delete(t),s.c_()&&A7(i,t),i.U_.size===0&&(s.c_()?s.P_():ss(i)&&i.j_.set("Unknown"))}function x2(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wt.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}go(r).y_(t)}function A7(r,t){r.H_.Ne(t),go(r).w_(t)}function D2(r){r.H_=new CC({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),go(r).start(),r.j_.B_()}function M2(r){return ss(r)&&!go(r).u_()&&r.U_.size>0}function ss(r){return xt(r).W_.size===0}function S7(r){r.H_=void 0}async function w_(r){r.j_.set("Online")}async function R_(r){r.U_.forEach((t,i)=>{x2(r,t)})}async function x_(r,t){S7(r),M2(r)?(r.j_.q_(t),D2(r)):r.j_.set("Unknown")}async function D_(r,t,i){if(r.j_.set("Online"),t instanceof l7&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const p of c.targetIds)l.U_.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.U_.delete(p),l.H_.removeTarget(p))}(r,t)}catch(s){ct(ns,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await zc(r,s)}else if(t instanceof Sc?r.H_.We(t):t instanceof o7?r.H_.Ze(t):r.H_.je(t),!i.isEqual(wt.min()))try{const s=await C7(r.localStore);i.compareTo(s)>=0&&await function(c,f){const p=c.H_.ot(f);return p.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const _=c.U_.get(y);_&&c.U_.set(y,_.withResumeToken(m.resumeToken,f))}}),p.targetMismatches.forEach((m,y)=>{const _=c.U_.get(m);if(!_)return;c.U_.set(m,_.withResumeToken(ln.EMPTY_BYTE_STRING,_.snapshotVersion)),A7(c,m);const b=new ta(_.target,m,y,_.sequenceNumber);x2(c,b)}),c.remoteSyncer.applyRemoteEvent(p)}(r,i)}catch(s){ct(ns,"Failed to raise snapshot:",s),await zc(r,s)}}async function zc(r,t,i){if(!mo(t))throw t;r.W_.add(1),await ql(r),r.j_.set("Offline"),i||(i=()=>C7(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ct(ns,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await r0(r)})}function b7(r,t){return t().catch(i=>zc(r,i,t))}async function a0(r){const t=xt(r),i=ha(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:d2;for(;M_(t);)try{const l=await h_(t.localStore,s);if(l===null){t.K_.length===0&&i.P_();break}s=l.batchId,I_(t,l)}catch(l){await zc(t,l)}w7(t)&&R7(t)}function M_(r){return ss(r)&&r.K_.length<10}function I_(r,t){r.K_.push(t);const i=ha(r);i.c_()&&i.b_&&i.S_(t.mutations)}function w7(r){return ss(r)&&!ha(r).u_()&&r.K_.length>0}function R7(r){ha(r).start()}async function N_(r){ha(r).C_()}async function V_(r){const t=ha(r);for(const i of r.K_)t.S_(i.mutations)}async function L_(r,t,i){const s=r.K_.shift(),l=_2.from(s,t,i);await b7(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await a0(r)}async function O_(r,t){t&&ha(r).b_&&await async function(s,l){if(function(f){return gC(f)&&f!==et.ABORTED}(l.code)){const c=s.K_.shift();ha(s).h_(),await b7(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await a0(s)}}(r,t),w7(r)&&R7(r)}async function h6(r,t){const i=xt(r);i.asyncQueue.verifyOperationInProgress(),ct(ns,"RemoteStore received new credentials");const s=ss(i);i.W_.add(3),await ql(i),s&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await r0(i)}async function k_(r,t){const i=xt(r);t?(i.W_.delete(2),await r0(i)):t||(i.W_.add(2),await ql(i),i.j_.set("Unknown"))}function go(r){return r.J_||(r.J_=function(i,s,l){const c=xt(i);return c.M_(),new __(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:w_.bind(null,r),No:R_.bind(null,r),Lo:x_.bind(null,r),p_:D_.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),M2(r)?D2(r):r.j_.set("Unknown")):(await r.J_.stop(),S7(r))})),r.J_}function ha(r){return r.Y_||(r.Y_=function(i,s,l){const c=xt(i);return c.M_(),new E_(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:N_.bind(null,r),Lo:O_.bind(null,r),D_:V_.bind(null,r),v_:L_.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await a0(r)):(await r.Y_.stop(),r.K_.length>0&&(ct(ns,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class I2{constructor(t,i,s,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,s,l,c){const f=Date.now()+s,p=new I2(t,i,f,l,c);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new gt(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N2(r,t){if(mr("AsyncQueue",`${t}: ${r}`),mo(r))return new gt(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Js{static emptySet(t){return new Js(t.comparator)}constructor(t){this.comparator=t?(i,s)=>t(i,s)||Ct.comparator(i.key,s.key):(i,s)=>Ct.comparator(i.key,s.key),this.keyedMap=Tl(),this.sortedSet=new Ce(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,s)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof Js)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const s=new Js;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=i,s}}/**
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
 */class f6{constructor(){this.Z_=new Ce(Ct.comparator)}track(t){const i=t.doc.key,s=this.Z_.get(i);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(i,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(i,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(i,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(i):t.type===1&&s.type===2?this.Z_=this.Z_.insert(i,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):Et():this.Z_=this.Z_.insert(i,t)}X_(){const t=[];return this.Z_.inorderTraversal((i,s)=>{t.push(s)}),t}}class oo{constructor(t,i,s,l,c,f,p,m,y){this.query=t,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(t,i,s,l,c){const f=[];return i.forEach(p=>{f.push({type:0,doc:p})}),new oo(t,i,Js.emptySet(i),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,s=t.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class U_{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class P_{constructor(){this.queries=d6(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,s){const l=xt(i),c=l.queries;l.queries=d6(),c.forEach((f,p)=>{for(const m of p.ta)m.onError(s)})})(this,new gt(et.ABORTED,"Firestore shutting down"))}}function d6(){return new as(r=>G9(r),Zc)}async function x7(r,t){const i=xt(r);let s=3;const l=t.query;let c=i.queries.get(l);c?!c.na()&&t.ra()&&(s=2):(c=new U_,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await i.onListen(l,!0);break;case 1:c.ea=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const p=N2(f,`Initialization of query '${Xs(t.query)}' failed`);return void t.onError(p)}i.queries.set(l,c),c.ta.push(t),t.sa(i.onlineState),c.ea&&t.oa(c.ea)&&V2(i)}async function D7(r,t){const i=xt(r),s=t.query;let l=3;const c=i.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?l=t.ra()?0:1:!c.na()&&t.ra()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function z_(r,t){const i=xt(r);let s=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const p of f.ta)p.oa(l)&&(s=!0);f.ea=l}}s&&V2(i)}function j_(r,t,i){const s=xt(r),l=s.queries.get(t);if(l)for(const c of l.ta)c.onError(i);s.queries.delete(t)}function V2(r){r.ia.forEach(t=>{t.next()})}var Q4,p6;(p6=Q4||(Q4={}))._a="default",p6.Cache="cache";class M7{constructor(t,i,s){this.query=t,this.aa=i,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new oo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.ua?this.la(t)&&(this.aa.next(t),i=!0):this.ha(t,this.onlineState)&&(this.Pa(t),i=!0),this.ca=t,i}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let i=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),i=!0),i}ha(t,i){if(!t.fromCache||!this.ra())return!0;const s=i!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}la(t){if(t.docChanges.length>0)return!0;const i=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}Pa(t){t=oo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Q4.Cache}}/**
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
 */class I7{constructor(t){this.key=t}}class N7{constructor(t){this.key=t}}class B_{constructor(t,i){this.query=t,this.fa=i,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ut(),this.mutatedKeys=Ut(),this.ya=Q9(t),this.wa=new Js(this.ya)}get ba(){return this.fa}Sa(t,i){const s=i?i.Da:new f6,l=i?i.wa:this.wa;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,p=!1;const m=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((_,b)=>{const w=l.get(_),N=Jc(this.query,b)?b:null,k=!!w&&this.mutatedKeys.has(w.key),$=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let z=!1;w&&N?w.data.isEqual(N.data)?k!==$&&(s.track({type:3,doc:N}),z=!0):this.va(w,N)||(s.track({type:2,doc:N}),z=!0,(m&&this.ya(N,m)>0||y&&this.ya(N,y)<0)&&(p=!0)):!w&&N?(s.track({type:0,doc:N}),z=!0):w&&!N&&(s.track({type:1,doc:w}),z=!0,(m||y)&&(p=!0)),z&&(N?(f=f.add(N),c=$?c.add(_):c.delete(_)):(f=f.delete(_),c=c.delete(_)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),c=c.delete(_.key),s.track({type:1,doc:_})}return{wa:f,Da:s,ls:p,mutatedKeys:c}}va(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,s,l){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((_,b)=>function(N,k){const $=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Et()}};return $(N)-$(k)}(_.type,b.type)||this.ya(_.doc,b.doc)),this.Ca(s),l=l!=null&&l;const p=i&&!l?this.Fa():[],m=this.pa.size===0&&this.current&&!l?1:0,y=m!==this.ga;return this.ga=m,f.length!==0||y?{snapshot:new oo(this.query,t.wa,c,f,t.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new f6,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(i=>this.fa=this.fa.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.fa=this.fa.delete(i)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Ut(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const i=[];return t.forEach(s=>{this.pa.has(s)||i.push(new N7(s))}),this.pa.forEach(s=>{t.has(s)||i.push(new I7(s))}),i}Oa(t){this.fa=t.gs,this.pa=Ut();const i=this.Sa(t.documents);return this.applyChanges(i,!0)}Na(){return oo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const L2="SyncEngine";class H_{constructor(t,i,s){this.query=t,this.targetId=i,this.view=s}}class q_{constructor(t){this.key=t,this.Ba=!1}}class F_{constructor(t,i,s,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new as(p=>G9(p),Zc),this.qa=new Map,this.Qa=new Set,this.$a=new Ce(Ct.comparator),this.Ka=new Map,this.Ua=new A2,this.Wa={},this.Ga=new Map,this.za=so.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function G_(r,t,i=!0){const s=P7(r);let l;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Na()):l=await V7(s,t,i,!0),l}async function Q_(r,t){const i=P7(r);await V7(i,t,!0,!1)}async function V7(r,t,i,s){const l=await f_(r.localStore,Ii(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let p;return s&&(p=await K_(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&i&&T7(r.remoteStore,l),p}async function K_(r,t,i,s,l){r.Ha=(b,w,N)=>async function($,z,G,O){let K=z.view.Sa(G);K.ls&&(K=await s6($.localStore,z.query,!1).then(({documents:I})=>z.view.Sa(I,K)));const nt=O&&O.targetChanges.get(z.targetId),at=O&&O.targetMismatches.get(z.targetId)!=null,ht=z.view.applyChanges(K,$.isPrimaryClient,nt,at);return g6($,z.targetId,ht.Ma),ht.snapshot}(r,b,w,N);const c=await s6(r.localStore,t,!0),f=new B_(t,c.gs),p=f.Sa(c.documents),m=Hl.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),y=f.applyChanges(p,r.isPrimaryClient,m);g6(r,i,y.Ma);const _=new H_(t,i,f);return r.ka.set(t,_),r.qa.has(i)?r.qa.get(i).push(t):r.qa.set(i,[t]),y.snapshot}async function Y_(r,t,i){const s=xt(r),l=s.ka.get(t),c=s.qa.get(l.targetId);if(c.length>1)return s.qa.set(l.targetId,c.filter(f=>!Zc(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await F4(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),i&&R2(s.remoteStore,l.targetId),K4(s,l.targetId)}).catch(po)):(K4(s,l.targetId),await F4(s.localStore,l.targetId,!0))}async function $_(r,t){const i=xt(r),s=i.ka.get(t),l=i.qa.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),R2(i.remoteStore,s.targetId))}async function X_(r,t,i){const s=iE(r);try{const l=await function(f,p){const m=xt(f),y=He.now(),_=p.reduce((N,k)=>N.add(k.key),Ut());let b,w;return m.persistence.runTransaction("Locally write mutations","readwrite",N=>{let k=gr(),$=Ut();return m.ds.getEntries(N,_).next(z=>{k=z,k.forEach((G,O)=>{O.isValidDocument()||($=$.add(G))})}).next(()=>m.localDocuments.getOverlayedDocuments(N,k)).next(z=>{b=z;const G=[];for(const O of p){const K=hC(O,b.get(O.key).overlayedDocument);K!=null&&G.push(new ga(O.key,K,P9(K.value.mapValue),Ni.exists(!0)))}return m.mutationQueue.addMutationBatch(N,y,G,p)}).next(z=>{w=z;const G=z.applyToLocalDocumentSet(b,$);return m.documentOverlayCache.saveOverlays(N,z.batchId,G)})}).then(()=>({batchId:w.batchId,changes:Y9(b)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,p,m){let y=f.Wa[f.currentUser.toKey()];y||(y=new Ce(jt)),y=y.insert(p,m),f.Wa[f.currentUser.toKey()]=y}(s,l.batchId,i),await Fl(s,l.changes),await a0(s.remoteStore)}catch(l){const c=N2(l,"Failed to persist write");i.reject(c)}}async function L7(r,t){const i=xt(r);try{const s=await u_(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Ka.get(c);f&&(te(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.Ba=!0:l.modifiedDocuments.size>0?te(f.Ba):l.removedDocuments.size>0&&(te(f.Ba),f.Ba=!1))}),await Fl(i,s,t)}catch(s){await po(s)}}function m6(r,t,i){const s=xt(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.ka.forEach((c,f)=>{const p=f.view.sa(t);p.snapshot&&l.push(p.snapshot)}),function(f,p){const m=xt(f);m.onlineState=p;let y=!1;m.queries.forEach((_,b)=>{for(const w of b.ta)w.sa(p)&&(y=!0)}),y&&V2(m)}(s.eventManager,t),l.length&&s.La.p_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function W_(r,t,i){const s=xt(r);s.sharedClientState.updateQueryState(t,"rejected",i);const l=s.Ka.get(t),c=l&&l.key;if(c){let f=new Ce(Ct.comparator);f=f.insert(c,pn.newNoDocument(c,wt.min()));const p=Ut().add(c),m=new n0(wt.min(),new Map,new Ce(jt),f,p);await L7(s,m),s.$a=s.$a.remove(c),s.Ka.delete(t),O2(s)}else await F4(s.localStore,t,!1).then(()=>K4(s,t,i)).catch(po)}async function Z_(r,t){const i=xt(r),s=t.batch.batchId;try{const l=await l_(i.localStore,t);k7(i,s,null),O7(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await Fl(i,l)}catch(l){await po(l)}}async function J_(r,t,i){const s=xt(r);try{const l=await function(f,p){const m=xt(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let _;return m.mutationQueue.lookupMutationBatch(y,p).next(b=>(te(b!==null),_=b.keys(),m.mutationQueue.removeMutationBatch(y,b))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,_,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_)).next(()=>m.localDocuments.getDocuments(y,_))})}(s.localStore,t);k7(s,t,i),O7(s,t),s.sharedClientState.updateMutationState(t,"rejected",i),await Fl(s,l)}catch(l){await po(l)}}function O7(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function k7(r,t,i){const s=xt(r);let l=s.Wa[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),s.Wa[s.currentUser.toKey()]=l}}function K4(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),i&&r.La.Ja(s,i);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||U7(r,s)})}function U7(r,t){r.Qa.delete(t.path.canonicalString());const i=r.$a.get(t);i!==null&&(R2(r.remoteStore,i),r.$a=r.$a.remove(t),r.Ka.delete(i),O2(r))}function g6(r,t,i){for(const s of i)s instanceof I7?(r.Ua.addReference(s.key,t),tE(r,s)):s instanceof N7?(ct(L2,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||U7(r,s.key)):Et()}function tE(r,t){const i=t.key,s=i.path.canonicalString();r.$a.get(i)||r.Qa.has(s)||(ct(L2,"New document in limbo: "+i),r.Qa.add(s),O2(r))}function O2(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const i=new Ct(pe.fromString(t)),s=r.za.next();r.Ka.set(s,new q_(i)),r.$a=r.$a.insert(i,s),T7(r.remoteStore,new ta(Ii(v2(i.path)),s,"TargetPurposeLimboResolution",Yc.ae))}}async function Fl(r,t,i){const s=xt(r),l=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((p,m)=>{f.push(s.Ha(m,t,i).then(y=>{var _;if((y||i)&&s.isPrimaryClient){const b=y?!y.fromCache:(_=i==null?void 0:i.targetChanges.get(m.targetId))===null||_===void 0?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(y){l.push(y);const b=b2.Yi(m.targetId,y);c.push(b)}}))}),await Promise.all(f),s.La.p_(l),await async function(m,y){const _=xt(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>J.forEach(y,w=>J.forEach(w.Hi,N=>_.persistence.referenceDelegate.addReference(b,w.targetId,N)).next(()=>J.forEach(w.Ji,N=>_.persistence.referenceDelegate.removeReference(b,w.targetId,N)))))}catch(b){if(!mo(b))throw b;ct(w2,"Failed to update sequence numbers: "+b)}for(const b of y){const w=b.targetId;if(!b.fromCache){const N=_.Ts.get(w),k=N.snapshotVersion,$=N.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(w,$)}}}(s.localStore,c))}async function eE(r,t){const i=xt(r);if(!i.currentUser.isEqual(t)){ct(L2,"User change. New user:",t.toKey());const s=await v7(i.localStore,t);i.currentUser=t,function(c,f){c.Ga.forEach(p=>{p.forEach(m=>{m.reject(new gt(et.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fl(i,s.Rs)}}function nE(r,t){const i=xt(r),s=i.Ka.get(t);if(s&&s.Ba)return Ut().add(s.key);{let l=Ut();const c=i.qa.get(t);if(!c)return l;for(const f of c){const p=i.ka.get(f);l=l.unionWith(p.view.ba)}return l}}function P7(r){const t=xt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=L7.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=W_.bind(null,t),t.La.p_=z_.bind(null,t.eventManager),t.La.Ja=j_.bind(null,t.eventManager),t}function iE(r){const t=xt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Z_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=J_.bind(null,t),t}class jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=i0(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return o_(this.persistence,new r_,t.initialUser,this.serializer)}Xa(t){return new y7(S2.ri,this.serializer)}Za(t){return new p_}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jc.provider={build:()=>new jc};class rE extends jc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){te(this.persistence.referenceDelegate instanceof Pc);const s=this.persistence.referenceDelegate.garbageCollector;return new qC(s,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new y7(s=>Pc.ri(s,i),this.serializer)}}class Y4{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>m6(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eE.bind(null,this.syncEngine),await k_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new P_}()}createDatastore(t){const i=i0(t.databaseInfo.databaseId),s=function(c){return new C_(c)}(t.databaseInfo);return function(c,f,p,m){return new A_(c,f,p,m)}(t.authCredentials,t.appCheckCredentials,s,i)}createRemoteStore(t){return function(s,l,c,f,p){return new b_(s,l,c,f,p)}(this.localStore,this.datastore,t.asyncQueue,i=>m6(this.syncEngine,i,0),function(){return u6.D()?new u6:new m_}())}createSyncEngine(t,i){return function(l,c,f,p,m,y,_){const b=new F_(l,c,f,p,m,y);return _&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=xt(l);ct(ns,"RemoteStore shutting down."),c.W_.add(5),await ql(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Y4.provider={build:()=>new Y4};/**
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
 */class z7{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):mr("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
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
 */const fa="FirestoreClient";class aE{constructor(t,i,s,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=dn.UNAUTHENTICATED,this.clientId=x9.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ct(fa,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ct(fa,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const s=N2(i,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function b4(r,t){r.asyncQueue.verifyOperationInProgress(),ct(fa,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let s=i.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await v7(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function y6(r,t){r.asyncQueue.verifyOperationInProgress();const i=await sE(r);ct(fa,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(s=>h6(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>h6(t.remoteStore,l)),r._onlineComponents=t}async function sE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ct(fa,"Using user provided OfflineComponentProvider");try{await b4(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===et.FAILED_PRECONDITION||l.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;eo("Error using user provided cache. Falling back to memory cache: "+i),await b4(r,new jc)}}else ct(fa,"Using default OfflineComponentProvider"),await b4(r,new rE(void 0));return r._offlineComponents}async function j7(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ct(fa,"Using user provided OnlineComponentProvider"),await y6(r,r._uninitializedComponentsProvider._online)):(ct(fa,"Using default OnlineComponentProvider"),await y6(r,new Y4))),r._onlineComponents}function oE(r){return j7(r).then(t=>t.syncEngine)}async function B7(r){const t=await j7(r),i=t.eventManager;return i.onListen=G_.bind(null,t.syncEngine),i.onUnlisten=Y_.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=Q_.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=$_.bind(null,t.syncEngine),i}function lE(r,t,i={}){const s=new hr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,p,m,y){const _=new z7({next:w=>{_.su(),f.enqueueAndForget(()=>D7(c,b));const N=w.docs.has(p);!N&&w.fromCache?y.reject(new gt(et.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&w.fromCache&&m&&m.source==="server"?y.reject(new gt(et.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new M7(v2(p.path),_,{includeMetadataChanges:!0,Ta:!0});return x7(c,b)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}function uE(r,t,i={}){const s=new hr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,p,m,y){const _=new z7({next:w=>{_.su(),f.enqueueAndForget(()=>D7(c,b)),w.fromCache&&m.source==="server"?y.reject(new gt(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new M7(p,_,{includeMetadataChanges:!0,Ta:!0});return x7(c,b)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}/**
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
 */function H7(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */function q7(r,t,i){if(!i)throw new gt(et.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cE(r,t,i,s){if(t===!0&&s===!0)throw new gt(et.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function C6(r){if(!Ct.isDocumentKey(r))throw new gt(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function _6(r){if(Ct.isDocumentKey(r))throw new gt(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function k2(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Et()}function yr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new gt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=k2(r);throw new gt(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */const F7="firestore.googleapis.com",E6=!0;class T6{constructor(t){var i,s;if(t.host===void 0){if(t.ssl!==void 0)throw new gt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F7,this.ssl=E6}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:E6;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=g7;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<BC)throw new gt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H7((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new gt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new gt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new gt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class s0{constructor(t,i,s,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T6({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new gt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new gt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T6(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vv;switch(s.type){case"firstParty":return new Tv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new gt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=v6.get(i);s&&(ct("ComponentProvider","Removing Datastore"),v6.delete(i),s.terminate())}(this),Promise.resolve()}}function hE(r,t,i,s={}){var l;const c=(r=yr(r,s0))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${i}`;c.host!==F7&&c.host!==p&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},c),{host:p,ssl:!1,emulatorOptions:s});if(!to(m,f)&&(r._setSettings(m),s.mockUserToken)){let y,_;if(typeof s.mockUserToken=="string")y=s.mockUserToken,_=dn.MOCK_USER;else{y=Dm(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new gt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new dn(b)}r._authCredentials=new Cv(new R9(y,_))}}/**
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
 */class o0{constructor(t,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new o0(this.firestore,t,this._query)}}class Rn{constructor(t,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rn(this.firestore,t,this._key)}}class aa extends o0{constructor(t,i,s){super(t,i,v2(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rn(this.firestore,null,new Ct(t))}withConverter(t){return new aa(this.firestore,t,this._path)}}function bn(r,t,...i){if(r=Li(r),q7("collection","path",t),r instanceof s0){const s=pe.fromString(t,...i);return _6(s),new aa(r,null,s)}{if(!(r instanceof Rn||r instanceof aa))throw new gt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(pe.fromString(t,...i));return _6(s),new aa(r.firestore,null,s)}}function We(r,t,...i){if(r=Li(r),arguments.length===1&&(t=x9.newId()),q7("doc","path",t),r instanceof s0){const s=pe.fromString(t,...i);return C6(s),new Rn(r,null,new Ct(s))}{if(!(r instanceof Rn||r instanceof aa))throw new gt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(pe.fromString(t,...i));return C6(s),new Rn(r.firestore,r instanceof aa?r.converter:null,new Ct(s))}}/**
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
 */const A6="AsyncQueue";class S6{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new _7(this,"async_queue_retry"),this.bu=()=>{const s=S4();s&&ct(A6,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const i=S4();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=S4();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new hr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!mo(t))throw t;ct(A6,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const l=function(f){let p=f.message||"";return f.stack&&(p=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),p}(s);throw mr("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(t,i,s){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=I2.createAndSchedule(this,t,i,s,c=>this.Fu(c));return this.fu.push(l),l}Du(){this.gu&&Et()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class Gl extends s0{constructor(t,i,s,l){super(t,i,s,l),this.type="firestore",this._queue=new S6,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new S6(t),this._firestoreClient=void 0,await t}}}function fE(r,t){const i=typeof r=="object"?r:X6(),s=typeof r=="string"?r:Nc,l=jl(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Rm("firestore");c&&hE(l,...c)}return l}function U2(r){if(r._terminated)throw new gt(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dE(r),r._firestoreClient}function dE(r){var t,i,s;const l=r._freezeSettings(),c=function(p,m,y,_){return new kv(p,m,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,H7(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new aE(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class lo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lo(ln.fromBase64String(t))}catch(i){throw new gt(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new lo(ln.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class l0{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new gt(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ql{constructor(t){this._methodName=t}}/**
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
 */class P2{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new gt(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new gt(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return jt(this._lat,t._lat)||jt(this._long,t._long)}}/**
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
 */class z2{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const pE=/^__.*__$/;class mE{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return this.fieldMask!==null?new ga(t,this.data,this.fieldMask,i,this.fieldTransforms):new Bl(t,this.data,i,this.fieldTransforms)}}class G7{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return new ga(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function Q7(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Et()}}class u0{constructor(t,i,s,l,c,f){this.settings=t,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new u0(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.$u(t),l}Ku(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Bc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Q7(this.Lu)&&pE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class gE{constructor(t,i,s){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=s||i0(t)}ju(t,i,s,l=!1){return new u0({Lu:t,methodName:i,zu:s,path:on.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K7(r){const t=r._freezeSettings(),i=i0(r._databaseId);return new gE(r._databaseId,!!t.ignoreUndefinedProperties,i)}function yE(r,t,i,s,l,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,i,l);H2("Data must be an object, but it was:",f,s);const p=Y7(s,f);let m,y;if(c.merge)m=new Un(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const _=[];for(const b of c.mergeFields){const w=$4(t,b,i);if(!f.contains(w))throw new gt(et.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);X7(_,w)||_.push(w)}m=new Un(_),y=f.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,y=f.fieldTransforms;return new mE(new Sn(p),m,y)}class c0 extends Ql{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof c0}}function vE(r,t,i){return new u0({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class j2 extends Ql{constructor(t,i){super(t),this.Hu=i}_toFieldTransform(t){const i=vE(this,t,!0),s=this.Hu.map(c=>Kl(c,i)),l=new ao(s);return new n7(t.path,l)}isEqual(t){return t instanceof j2&&to(this.Hu,t.Hu)}}class B2 extends Ql{constructor(t,i){super(t),this.Ju=i}_toFieldTransform(t){const i=new Ul(t.serializer,W9(t.serializer,this.Ju));return new n7(t.path,i)}isEqual(t){return t instanceof B2&&this.Ju===t.Ju}}function CE(r,t,i,s){const l=r.ju(1,t,i);H2("Data must be an object, but it was:",l,s);const c=[],f=Sn.empty();ma(s,(m,y)=>{const _=q2(t,m,i);y=Li(y);const b=l.Ku(_);if(y instanceof c0)c.push(_);else{const w=Kl(y,b);w!=null&&(c.push(_),f.set(_,w))}});const p=new Un(c);return new G7(f,p,l.fieldTransforms)}function _E(r,t,i,s,l,c){const f=r.ju(1,t,i),p=[$4(t,s,i)],m=[l];if(c.length%2!=0)throw new gt(et.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<c.length;w+=2)p.push($4(t,c[w])),m.push(c[w+1]);const y=[],_=Sn.empty();for(let w=p.length-1;w>=0;--w)if(!X7(y,p[w])){const N=p[w];let k=m[w];k=Li(k);const $=f.Ku(N);if(k instanceof c0)y.push(N);else{const z=Kl(k,$);z!=null&&(y.push(N),_.set(N,z))}}const b=new Un(y);return new G7(_,b,f.fieldTransforms)}function Kl(r,t){if($7(r=Li(r)))return H2("Unsupported field value:",t,r),Y7(r,t);if(r instanceof Ql)return function(s,l){if(!Q7(l.Lu))throw l.Wu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const p of s){let m=Kl(p,l.Uu(f));m==null&&(m={nullValue:"NULL_VALUE"}),c.push(m),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=Li(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return W9(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=He.fromDate(s);return{timestampValue:Uc(l.serializer,c)}}if(s instanceof He){const c=new He(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uc(l.serializer,c)}}if(s instanceof P2)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof lo)return{bytesValue:u7(l.serializer,s._byteString)};if(s instanceof Rn){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:T2(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof z2)return function(f,p){return{mapValue:{fields:{[k9]:{stringValue:U9},[Vc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw p.Wu("VectorValues must only contain numeric values.");return C2(p.serializer,y)})}}}}}}(s,l);throw l.Wu(`Unsupported field value: ${k2(s)}`)}(r,t)}function Y7(r,t){const i={};return M9(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ma(r,(s,l)=>{const c=Kl(l,t.qu(s));c!=null&&(i[s]=c)}),{mapValue:{fields:i}}}function $7(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof He||r instanceof P2||r instanceof lo||r instanceof Rn||r instanceof Ql||r instanceof z2)}function H2(r,t,i){if(!$7(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const s=k2(i);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function $4(r,t,i){if((t=Li(t))instanceof l0)return t._internalPath;if(typeof t=="string")return q2(r,t);throw Bc("Field path arguments must be of type string or ",r,!1,void 0,i)}const EE=new RegExp("[~\\*/\\[\\]]");function q2(r,t,i){if(t.search(EE)>=0)throw Bc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new l0(...t.split("."))._internalPath}catch{throw Bc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Bc(r,t,i,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(c||f)&&(m+=" (found",c&&(m+=` in field ${s}`),f&&(m+=` in document ${l}`),m+=")"),new gt(et.INVALID_ARGUMENT,p+r+m)}function X7(r,t){return r.some(i=>i.isEqual(t))}/**
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
 */class W7{constructor(t,i,s,l,c){this._firestore=t,this._userDataWriter=i,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Z7("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class TE extends W7{data(){return super.data()}}function Z7(r,t){return typeof t=="string"?q2(r,t):t instanceof l0?t._internalPath:t._delegate._internalPath}/**
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
 */function AE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new gt(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class SE{convertValue(t,i="none"){switch(ca(t)){case 0:return null;case 1:return t.booleanValue;case 2:return De(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(ua(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Et()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const s={};return ma(t,(l,c)=>{s[l]=this.convertValue(c,i)}),s}convertVectorValue(t){var i,s,l;const c=(l=(s=(i=t.fields)===null||i===void 0?void 0:i[Vc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>De(f.doubleValue));return new z2(c)}convertGeoPoint(t){return new P2(De(t.latitude),De(t.longitude))}convertArray(t,i){return(t.values||[]).map(s=>this.convertValue(s,i))}convertServerTimestamp(t,i){switch(i){case"previous":const s=Xc(t);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(Vl(t));default:return null}}convertTimestamp(t){const i=la(t);return new He(i.seconds,i.nanos)}convertDocumentKey(t,i){const s=pe.fromString(t);te(m7(s));const l=new Ll(s.get(1),s.get(3)),c=new Ct(s.popFirst(5));return l.isEqual(i)||mr(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */class Sl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class J7 extends W7{constructor(t,i,s,l,c,f){super(t,i,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const s=this._document.data.field(Z7("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class bc extends J7{data(t={}){return super.data(t)}}class wE{constructor(t,i,s,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new Sl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(s=>{t.call(i,new bc(this._firestore,this._userDataWriter,s.key,s,new Sl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new gt(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(p=>{const m=new bc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Sl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const m=new bc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Sl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,_=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),_=f.indexOf(p.doc.key)),{type:RE(p.type),doc:m,oldIndex:y,newIndex:_}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function RE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Et()}}/**
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
 */function Hc(r){r=yr(r,Rn);const t=yr(r.firestore,Gl);return lE(U2(t),r._key).then(i=>xE(t,r,i))}class td extends SE{constructor(t){super(),this.firestore=t}convertBytes(t){return new lo(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new Rn(this.firestore,null,i)}}function zn(r){r=yr(r,o0);const t=yr(r.firestore,Gl),i=U2(t),s=new td(t);return AE(r._query),uE(i,r._query).then(l=>new wE(t,s,r,l))}function ed(r,t,i){r=yr(r,Rn);const s=yr(r.firestore,Gl),l=bE(r.converter,t);return nd(s,[yE(K7(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,Ni.none())])}function kn(r,t,i,...s){r=yr(r,Rn);const l=yr(r.firestore,Gl),c=K7(l);let f;return f=typeof(t=Li(t))=="string"||t instanceof l0?_E(c,"updateDoc",r._key,t,i,s):CE(c,"updateDoc",r._key,t),nd(l,[f.toMutation(r._key,Ni.exists(!0))])}function nd(r,t){return function(s,l){const c=new hr;return s.asyncQueue.enqueueAndForget(async()=>X_(await oE(s),l,c)),c.promise}(U2(r),t)}function xE(r,t,i){const s=i.docs.get(t._key),l=new td(r);return new J7(r,l,t._key,s,new Sl(i.hasPendingWrites,i.fromCache),t.converter)}function id(...r){return new j2("arrayUnion",r)}function Tn(r){return new B2("increment",r)}(function(t,i=!0){(function(l){fo=l})(jg),sa(new dr("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),p=new Gl(new _v(s.getProvider("auth-internal")),new Av(f,s.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new gt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ll(y.options.projectId,_)}(f,l),f);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Mi(If,Nf,t),Mi(If,Nf,"esm2017")})();const DE={apiKey:"AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",authDomain:"greentrails-d6c2d.firebaseapp.com",projectId:"greentrails-d6c2d",storageBucket:"greentrails-d6c2d.firebasestorage.app",messagingSenderId:"67873180558",appId:"1:67873180558:web:d65d95fb94c483683db2df",measurementId:"G-9K66S1W7XM"},rd=$6(DE);pv(rd);const Zt=fE(rd),ME=()=>{const[r,t]=H.useState([]),[i,s]=H.useState([]),[l,c]=H.useState(!0),f=ho(),[p,m]=Cn.useState([]),{currentUser:y}=rs();if(H.useEffect(()=>{(async()=>{c(!0);try{const N=(await zn(bn(Zt,"opportunities"))).docs.map(G=>({id:G.id,...G.data()})),$=(await zn(bn(Zt,"Users"))).docs.map(G=>({id:G.id,...G.data()}));console.log($),m($);const z=new Date;t(N.filter(G=>new Date(G.date)>z).sort((G,O)=>new Date(G.date)-new Date(O.date)))}catch(w){console.error("Error fetching opportunities:",w)}c(!1)})()},[]),l)return T.jsx("div",{className:"box",children:T.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"box",children:T.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})}),T.jsx("div",{className:"trunk"})]});function _(b){let w=b.currentTarget;const N=We(Zt,"opportunities",w.id);let k=y;if(!k){const z=document.getElementById(w.id+"i");z&&z.value&&(k=z.value)}if(console.log(p),!k||k==="")return;if(k==="editcode0"){console.log("edit code entered"),f("/adddata");return}const $=r.find(z=>z.id===w.id);if($&&new Date($.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!p.some(z=>z.Name===k)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{kn(N,{signups:id(k)}),document.getElementById(w.id+"d").textContent="So far "+r.find(z=>z.id===w.id).signups.join(", ")+", "+k+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return T.jsx("div",{children:r.map(b=>T.jsxs("div",{children:[T.jsxs("div",{className:"box",children:[T.jsx("h1",{children:b.name}),T.jsxs("p",{className:"date",children:["when: ",new Date(b.date).toLocaleDateString()]}),T.jsx("p",{children:b.description}),T.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),T.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),T.jsx("p",{}),T.jsxs("div",{children:[T.jsx("label",{children:"Sign up here with green trails:"}),T.jsx("p",{}),y?T.jsx(T.Fragment,{children:T.jsx("button",{type:"submit",id:b.id,className:"volunteer-signup-btn",onClick:w=>_(w),children:"🌲 Sign Up for This Event"})}):T.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",T.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),T.jsxs("p",{id:b.id+"d",children:["So far ",b.signups.join(", ")," will be going"]})]})]},b.id),T.jsx("div",{className:"trunk"})]}))})},IE=()=>{const[r,t]=H.useState([]),[i,s]=H.useState([]),[l,c]=H.useState(!0),f=ho(),[p,m]=Cn.useState([]),{currentUser:y}=rs();if(H.useEffect(()=>{(async()=>{c(!0);try{const N=(await zn(bn(Zt,"opportunities"))).docs.map(G=>({id:G.id,...G.data()})),$=(await zn(bn(Zt,"Users"))).docs.map(G=>({id:G.id,...G.data()}));console.log($),m($);const z=new Date;t(N.sort((G,O)=>new Date(G.date)-new Date(O.date)))}catch(w){console.error("Error fetching opportunities:",w)}c(!1)})()},[]),l)return T.jsx("div",{className:"box",children:T.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return T.jsx("div",{className:"box",children:T.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})});function _(b){let w=b.currentTarget;const N=We(Zt,"opportunities",w.id);let k=y;if(!k){const z=document.getElementById(w.id+"i");z&&z.value&&(k=z.value)}if(console.log(p),!k||k==="")return;if(k==="editcode0"){console.log("edit code entered"),f("/adddata");return}const $=r.find(z=>z.id===w.id);if($&&new Date($.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!p.some(z=>z.Name===k)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{kn(N,{signups:id(k)}),document.getElementById(w.id+"d").textContent="So far "+r.find(z=>z.id===w.id).signups.join(", ")+", "+k+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return T.jsx("div",{children:r.map(b=>T.jsxs("div",{children:[T.jsxs("div",{className:"box",children:[T.jsx("h1",{children:b.name}),T.jsxs("p",{className:"date",children:["when: ",new Date(b.date).toLocaleDateString()]}),T.jsx("p",{children:b.description}),T.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),T.jsx("a",{href:b.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),T.jsx("p",{}),T.jsxs("div",{children:[T.jsx("label",{children:"Sign up here with green trails:"}),T.jsx("p",{}),y?T.jsx(T.Fragment,{children:T.jsx("button",{type:"submit",id:b.id,className:"volunteer-signup-btn",onClick:w=>_(w),children:"🌲 Sign Up for This Event"})}):T.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",T.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),T.jsxs("p",{id:b.id+"d",children:["So far ",b.signups.join(", ")," will be going"]})]})]},b.id),T.jsx("div",{className:"trunk"})]}))})},NE=()=>{const[r,t]=H.useState(!0);function i(){console.log("show past"),t(!r)}return T.jsxs("div",{id:"page",children:[T.jsx(ea,{}),T.jsx(Za,{message:"Upcoming Volunteer Opportunities",shadow:!0}),T.jsx("button",{id:"showpastbutton",onClick:i,children:r?"Show past opportunities":"Hide past opportunities"}),r?T.jsx(ME,{}):T.jsx(IE,{}),T.jsx(mm,{}),T.jsx(gm,{})]})},VE=()=>{const{isAdmin:r}=rs(),t=ho();return H.useEffect(()=>{r||(alert("Access denied. Admin privileges required."),t("/"))},[r,t]),r?T.jsxs("div",{className:"App-header",children:[T.jsx(ea,{}),T.jsx(Za,{message:"Add data page"}),T.jsx("input",{className:"addmoredata",id:"id",type:"text",placeholder:"id"}),T.jsx("input",{className:"addmoredata",id:"name",type:"text",placeholder:"Name"}),T.jsx("input",{className:"addmoredata",id:"date",type:"text",placeholder:"date"}),T.jsx("input",{className:"addmoredata",id:"description",type:"text",placeholder:"description"}),T.jsx("input",{className:"addmoredata",id:"link",type:"text",placeholder:"link"}),T.jsx("button",{className:"addmoredata",onClick:()=>{const i=document.getElementById("name").value,s=document.getElementById("date").value,l=document.getElementById("description").value,c=document.getElementById("link").value,f=document.getElementById("id").value;(async m=>{const y=await zn(bn(Zt,"opportunities"));let _=!1;return y.forEach(b=>{b.id===m&&(_=!0)}),_})(f).then(m=>{if(m){alert("ID already in use. Please choose a different ID.");return}else{const y=We(Zt,"opportunities",f);ed(y,{name:i,date:s,description:l,link:c,signups:[]})}})},children:"Add opportunity"})]}):null},LE=()=>{const[r,t]=Cn.useState([]),[i,s]=Cn.useState([]);H.useEffect(()=>{(async()=>{try{const p=(await zn(bn(Zt,"Users"))).docs.map(_=>({id:_.id,score:_.data().score,Name:_.data().Name}));t(p.sort((_,b)=>b.score-_.score));const y=(await zn(bn(Zt,"opportunities"))).docs.map(_=>({id:_.id,..._.data()}));s(y)}catch(f){console.error("Error fetching leaderboard:",f)}})()},[]);function l(c){let f=0;r.forEach(p=>{i.forEach(m=>{m.signups.includes(p.id)&&(f+=1),kn(We(Zt,"Users",p.id),{score:f})}),f=0}),console.log("Done updating leaderboard")}return T.jsxs("div",{id:"events-table",children:[T.jsx("h3",{id:"events-title",children:"Events Attended"}),T.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((c,f)=>T.jsxs("div",{className:"lbentrie",children:[T.jsxs("p",{className:"place",children:[f+1,"."]}),T.jsx("p",{className:"username",children:c.Name}),T.jsx("p",{className:"userscore",children:c.score}),T.jsx("p",{className:"username",children:"  "})]},c.id)),T.jsx("button",{onClick:c=>l(),id:"",children:"Update leaderboard"})]})]})},OE=()=>{const[r,t]=Cn.useState([]),[i,s]=Cn.useState([]),[l,c]=Cn.useState(!1);H.useEffect(()=>{(async()=>{try{const y=(await zn(bn(Zt,"Users"))).docs.map(w=>{const N=w.data();return{id:w.id,score:N.score??0,Name:N.Name??"",meetingsAttended:N.meetingsAttended??0}});y.sort((w,N)=>{const k=w.meetingsAttended??0,$=N.meetingsAttended??0;return $!==k?$-k:(N.score??0)-(w.score??0)}),t(y);const b=(await zn(bn(Zt,"meetings"))).docs.map(w=>({id:w.id,...w.data()}));s(b)}catch(m){console.error("Error fetching leaderboard/meetings:",m)}})()},[]);async function f(p){try{c(!0);const m=await Promise.all(r.map(async y=>{const _=i.reduce((b,w)=>(Array.isArray(w.attendees)?w.attendees:[]).includes(y.Name)?b+1:b,0);return await kn(We(Zt,"Users",y.id),{meetingsAttended:_}),{...y,meetingsAttended:_}}));m.sort((y,_)=>{const b=y.meetingsAttended??0,w=_.meetingsAttended??0;return w!==b?w-b:(_.score??0)-(y.score??0)}),t(m),console.log("Done updating meetingsAttended for all users")}catch(m){console.error("Error updating meetingsAttended:",m)}finally{c(!1)}}return T.jsxs("div",{id:"events-table",children:[T.jsx("h3",{id:"events-title",children:"Meetings Attended (after 11/12)"}),T.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((p,m)=>T.jsxs("div",{className:"lbentrie",children:[T.jsxs("p",{className:"place",children:[m+1,"."]}),T.jsx("p",{className:"username",children:p.Name}),T.jsx("p",{className:"userscore",children:p.meetingsAttended??0})]},p.id)),T.jsx("button",{onClick:p=>f(),id:"",disabled:l,children:l?"Updating…":"Update meetings attendance"})]})]})},kE=()=>{const[r,t]=Cn.useState([]);return H.useEffect(()=>{const i=async()=>{try{const c=(await zn(bn(Zt,"Users"))).docs.map(f=>({id:f.id,santasPopped:f.data().santasPopped||0,Name:f.data().Name}));t(c.sort((f,p)=>p.santasPopped-f.santasPopped))}catch(l){console.error("Error fetching santa leaderboard:",l)}};i();const s=setInterval(i,5e3);return()=>clearInterval(s)},[]),T.jsxs("div",{id:"santa-table",children:[T.jsx("h3",{id:"santa-title",children:"Santas Popped"}),T.jsx("div",{id:"santa-leaderboard",className:"boardcon",children:r.map((i,s)=>T.jsxs("div",{className:"lbentrie",children:[T.jsxs("p",{className:"place",children:[s+1,"."]}),T.jsx("p",{className:"username",children:i.Name}),T.jsx("p",{className:"userscore",children:i.santasPopped}),T.jsx("p",{className:"username",children:"  "})]},i.id))})]})},UE=()=>T.jsxs("div",{children:[T.jsx(Za,{message:"Leaderboards",shadow:!0}),T.jsx(ea,{}),T.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[T.jsx(LE,{}),T.jsx(OE,{}),T.jsx(kE,{})]}),T.jsx(Cc,{})]}),PE=({message:r,type:t="info",duration:i=3e3,onClose:s})=>{H.useEffect(()=>{const c=setTimeout(()=>{s()},i);return()=>clearTimeout(c)},[i,s]);const l=()=>{switch(t){case"success":return"#4CAF50";case"error":return"#f44336";case"info":default:return"#2196F3"}};return T.jsxs("div",{style:{position:"fixed",top:"80px",right:"20px",backgroundColor:l(),color:"white",padding:"16px 24px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:1e4,maxWidth:"400px",fontSize:"16px",fontWeight:"500",animation:"slideIn 0.3s ease-out",cursor:"pointer"},onClick:s,children:[r,T.jsx("style",{children:`
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
                `})]})},zE=()=>{const[r,t]=H.useState([]);H.useEffect(()=>{const s=l=>{const{message:c,type:f}=l.detail,p=Date.now();t(m=>[...m,{id:p,message:c,type:f}])};return window.addEventListener("show-notification",s),()=>{window.removeEventListener("show-notification",s)}},[]);const i=s=>{t(l=>l.filter(c=>c.id!==s))};return T.jsx(T.Fragment,{children:r.map((s,l)=>T.jsx("div",{style:{position:"fixed",top:`${80+l*80}px`,right:"20px",zIndex:1e4+l},children:T.jsx(PE,{message:s.message,type:s.type,onClose:()=>i(s.id)})},s.id))})},Nt=(r,t="info")=>{const i=new CustomEvent("show-notification",{detail:{message:r,type:t}});window.dispatchEvent(i)},jE=()=>{const[r,t]=Cn.useState([]),[i,s]=Cn.useState([]),[l,c]=Cn.useState(!0),[f,p]=Cn.useState([]),[m,y]=Cn.useState(""),[_,b]=Cn.useState(""),{currentUser:w,login:N,logout:k}=rs();ho(),H.useEffect(()=>{(async()=>{try{const K=(await zn(bn(Zt,"Users"))).docs.map(nt=>nt.id);p(K.sort())}catch(O){console.error("Error fetching usernames:",O)}})()},[]);function $(G){const O=m.trim();if(O===""){Nt("Name cannot be empty. Please enter a valid name.","error");return}console.log(O),(async nt=>{const at=await zn(bn(Zt,"Users"));let ht=!1;return at.forEach(I=>{I.id.toLowerCase()===nt.toLowerCase()&&(ht=!0)}),ht})(O).then(nt=>{if(nt){Nt("Name already in use. Please choose a different name.","error");return}else{const at=We(bn(Zt,"Users"),O);ed(at,{Name:O,score:0,santasPopped:0,isAdmin:!1,autoClickerLevel:0,spawnSpeedLevel:0,santaWorthLevel:0,luckyClickLevel:0,goldRushLevel:0,clickMultiplierLevel:0}).then(()=>{Nt("User created successfully! You are now logged in.","success"),N(O,!1),p([...f,O].sort()),y("")})}})}async function z(G){let O=_||m;if(O=O.trim(),O===""){Nt("Name cannot be empty. Please select or enter a valid name.","error");return}try{let K=We(Zt,"Users",O),nt=await Hc(K);if(!nt.exists()){const at=await zn(bn(Zt,"Users"));let ht=null;at.forEach(I=>{I.id.toLowerCase()===O.toLowerCase()&&(ht=I.id)}),ht&&(O=ht,K=We(Zt,"Users",O),nt=await Hc(K))}if(nt.exists()){const at=nt.data(),ht={};at&&at.santasPopped===void 0&&(ht.santasPopped=0),at&&at.isAdmin===void 0&&(ht.isAdmin=!1),at&&at.autoClickerLevel===void 0&&(ht.autoClickerLevel=0),at&&at.spawnSpeedLevel===void 0&&(ht.spawnSpeedLevel=0),at&&at.santaWorthLevel===void 0&&(ht.santaWorthLevel=0),at&&at.luckyClickLevel===void 0&&(ht.luckyClickLevel=0),at&&at.goldRushLevel===void 0&&(ht.goldRushLevel=0),at&&at.clickMultiplierLevel===void 0&&(ht.clickMultiplierLevel=0),Object.keys(ht).length>0&&await kn(K,ht);const I=(at==null?void 0:at.isAdmin)||!1;N(O,I),Nt(`Welcome back, ${O}!`,"success")}else Nt("User not found. Please sign up first.","error")}catch(K){console.error("Error logging in:",K),Nt("Error logging in. Please try again.","error")}}return T.jsx("div",{children:w?T.jsxs("div",{className:"signup signup-welcome",children:[T.jsxs("h3",{children:["🌲 Welcome, ",w,"! 🌲"]}),T.jsx("p",{children:"You are currently logged in."}),T.jsxs("p",{style:{fontSize:"16px",marginTop:"20px"},children:["🎅 ",T.jsx("strong",{children:"Santa Tracking Active!"})," Click flying Santas anywhere on the site to earn points and climb the leaderboard!"]}),T.jsx("button",{onClick:()=>k(),children:"Logout"})]}):T.jsxs("div",{className:"signup",children:[T.jsx("h3",{children:l?"🔐 Login":"✨ Sign Up"}),T.jsx("p",{style:{fontSize:"16px",color:"#2d5a3d",marginBottom:"20px"},children:"🎅 Track your Santa pops and compete on the leaderboard!"}),l&&f.length>0?T.jsxs("div",{children:[T.jsx("label",{htmlFor:"userSelect",style:{display:"block",marginBottom:"8px",color:"#2d5a3d"},children:"Select your name:"}),T.jsxs("select",{id:"userSelect",value:_,onChange:G=>b(G.target.value),style:{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"4px",border:"1px solid #ccc",fontSize:"16px"},children:[T.jsx("option",{value:"",children:"-- Choose your name --"}),f.map(G=>T.jsx("option",{value:G,children:G},G))]})]}):T.jsx("input",{id:"name",type:"text",placeholder:"Enter your name",value:m,onChange:G=>y(G.target.value)}),l?T.jsx("button",{type:"submit",onClick:G=>z(),children:"Login"}):T.jsx("button",{type:"submit",onClick:G=>$(),children:"Sign Up"}),T.jsxs("div",{className:"signup-toggle",children:[T.jsx("p",{style:{marginBottom:"10px",color:"#666"},children:l?"Don't have an account?":"Already have an account?"}),T.jsx("button",{onClick:()=>{c(!l),y(""),b("")},children:l?"Create New Account":"Login Instead"})]})]})})},BE=()=>T.jsxs("div",{children:[T.jsx(Za,{message:"Sign Up!!",shadow:!0}),T.jsx(ea,{}),T.jsx(jE,{})]}),HE=()=>{const{currentUser:r}=rs(),[t,i]=H.useState({autoClickerLevel:0,spawnSpeedLevel:0,santaWorthLevel:0,santasPopped:0,luckyClickLevel:0,goldRushLevel:0,clickMultiplierLevel:0}),[s,l]=H.useState(!0),c=[10,25,50,100,200,400,800,1600,3200,6400],f=[15,30,60,120,240,480,960,1920,3840,7680],p=[20,40,80,160,320,640,1280,2560,5120,10240],m=[30,75,150,300,600,1200,2400,4800,9600,19200],y=[50,125,250,500,1e3,2e3,4e3,8e3,16e3,32e3],_=[100,250,500,1e3,2e3,4e3,8e3,16e3,32e3,64e3];H.useEffect(()=>{r?b():l(!1);const O=K=>{var ht;const at=((ht=K.detail)==null?void 0:ht.increment)||1;i(I=>({...I,santasPopped:I.santasPopped+at}))};return window.addEventListener("santaPopped",O),()=>{window.removeEventListener("santaPopped",O)}},[r]);const b=async()=>{if(r)try{const O=We(Zt,"Users",r),K=await Hc(O);if(K.exists()){const nt=K.data();i({autoClickerLevel:nt.autoClickerLevel||0,spawnSpeedLevel:nt.spawnSpeedLevel||0,santaWorthLevel:nt.santaWorthLevel||0,santasPopped:nt.santasPopped||0,luckyClickLevel:nt.luckyClickLevel||0,goldRushLevel:nt.goldRushLevel||0,clickMultiplierLevel:nt.clickMultiplierLevel||0})}}catch(O){console.error("Error loading upgrades:",O)}finally{l(!1)}},w=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.autoClickerLevel;if(O>=c.length){Nt("Max level reached!","info");return}const K=c[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),autoClickerLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,autoClickerLevel:t.autoClickerLevel+1}),Nt(`Auto-clicker upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}},N=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.spawnSpeedLevel;if(O>=f.length){Nt("Max level reached!","info");return}const K=f[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),spawnSpeedLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,spawnSpeedLevel:t.spawnSpeedLevel+1}),Nt(`Spawn speed upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}},k=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.santaWorthLevel;if(O>=p.length){Nt("Max level reached!","info");return}const K=p[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),santaWorthLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,santaWorthLevel:t.santaWorthLevel+1}),Nt(`Santa worth upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}},$=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.luckyClickLevel;if(O>=m.length){Nt("Max level reached!","info");return}const K=m[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),luckyClickLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,luckyClickLevel:t.luckyClickLevel+1}),Nt(`Lucky click upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}},z=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.goldRushLevel;if(O>=y.length){Nt("Max level reached!","info");return}const K=y[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),goldRushLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,goldRushLevel:t.goldRushLevel+1}),Nt(`Gold rush upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}},G=async()=>{if(!r){Nt("Please login to purchase upgrades!","error");return}const O=t.clickMultiplierLevel;if(O>=_.length){Nt("Max level reached!","info");return}const K=_[O];if(t.santasPopped<K){Nt(`Not enough santas! You need ${K} santas but only have ${t.santasPopped}.`,"error");return}try{const nt=We(Zt,"Users",r);await kn(nt,{santasPopped:Tn(-K),clickMultiplierLevel:Tn(1)}),i({...t,santasPopped:t.santasPopped-K,clickMultiplierLevel:t.clickMultiplierLevel+1}),Nt(`Click multiplier upgraded to level ${O+1}!`,"success")}catch(nt){console.error("Error purchasing upgrade:",nt),Nt("Failed to purchase upgrade. Please try again.","error")}};return r?s?T.jsxs("div",{children:[T.jsx(Za,{message:"Santa Shop",shadow:!0}),T.jsx(ea,{}),T.jsx("div",{style:{padding:"40px",textAlign:"center"},children:T.jsx("p",{children:"Loading..."})}),T.jsx(Cc,{})]}):T.jsxs("div",{children:[T.jsx(Za,{message:"Santa Shop",shadow:!0}),T.jsx(ea,{}),T.jsxs("div",{style:{padding:"40px",maxWidth:"1400px",margin:"0 auto",minHeight:"60vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",marginTop:"20px",marginBottom:"20px"},children:[T.jsx("h2",{style:{textAlign:"center",color:"#ffffff",marginBottom:"10px",fontSize:"48px",fontWeight:"bold",textShadow:"2px 2px 4px rgba(0,0,0,0.3)"},children:"🎅 Santa Shop 🎅"}),T.jsx("p",{style:{textAlign:"center",color:"#f0f0f0",fontSize:"18px",marginBottom:"30px",fontStyle:"italic"},children:"Upgrade your Santa-catching abilities!"}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"30px",borderRadius:"15px",marginBottom:"30px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #ffd700"},children:[T.jsx("h3",{style:{color:"#d32f2f",marginBottom:"20px",textAlign:"center",fontSize:"28px",fontWeight:"bold"},children:"💰 Your Stats"}),T.jsxs("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"30px"},children:[T.jsxs("div",{style:{textAlign:"center",padding:"15px 30px",backgroundColor:"#fff5f5",borderRadius:"10px",border:"2px solid #d32f2f"},children:[T.jsx("p",{style:{fontSize:"20px",marginBottom:"8px",color:"#666"},children:"🎅 Santas Available"}),T.jsx("p",{style:{fontSize:"36px",fontWeight:"bold",color:"#d32f2f",margin:0},children:t.santasPopped})]}),T.jsxs("div",{style:{textAlign:"center",padding:"15px 30px",backgroundColor:"#f0f8ff",borderRadius:"10px",border:"2px solid #2196F3"},children:[T.jsx("p",{style:{fontSize:"20px",marginBottom:"8px",color:"#666"},children:"💎 Santa Value"}),T.jsxs("p",{style:{fontSize:"36px",fontWeight:"bold",color:"#2196F3",margin:0},children:[t.santaWorthLevel+1,"x"]})]})]})]}),T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"25px"},children:[T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #4CAF50",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#4CAF50",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.autoClickerLevel,"/",c.length]}),T.jsx("h3",{style:{color:"#4CAF50",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"🖱️ Auto-Clicker"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Automatically clicks santas for you every few seconds! The ultimate passive income for lazy elves.",t.autoClickerLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#4CAF50",fontWeight:"bold"},children:["✓ Active: Clicking every ",Math.max(2,10-t.autoClickerLevel*2),"s"]})]}),t.autoClickerLevel<c.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[c[t.autoClickerLevel]," 🎅"]})]}),T.jsx("button",{onClick:w,disabled:t.santasPopped<c[t.autoClickerLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=c[t.autoClickerLevel]?"#4CAF50":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=c[t.autoClickerLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=c[t.autoClickerLevel]?"0 4px 8px rgba(76, 175, 80, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=c[t.autoClickerLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=c[t.autoClickerLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#e8f5e9",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#4CAF50",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #2196F3",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#2196F3",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.spawnSpeedLevel,"/",f.length]}),T.jsx("h3",{style:{color:"#2196F3",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"⚡ Spawn Speed"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Increases how often santas appear on your screen! More santas = more opportunities to click.",t.spawnSpeedLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#2196F3",fontWeight:"bold"},children:["✓ Active: Spawn time reduced by ",t.spawnSpeedLevel*20,"%"]})]}),t.spawnSpeedLevel<f.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[f[t.spawnSpeedLevel]," 🎅"]})]}),T.jsx("button",{onClick:N,disabled:t.santasPopped<f[t.spawnSpeedLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=f[t.spawnSpeedLevel]?"#2196F3":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=f[t.spawnSpeedLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=f[t.spawnSpeedLevel]?"0 4px 8px rgba(33, 150, 243, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=f[t.spawnSpeedLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=f[t.spawnSpeedLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#e3f2fd",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#2196F3",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #FF9800",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#FF9800",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.santaWorthLevel,"/",p.length]}),T.jsx("h3",{style:{color:"#FF9800",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"💎 Santa Worth"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Increases the value of each Santa you pop! Each level adds +1 to your score per click.",t.santaWorthLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#FF9800",fontWeight:"bold"},children:["✓ Active: Each santa worth ",t.santaWorthLevel+1," points"]})]}),t.santaWorthLevel<p.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[p[t.santaWorthLevel]," 🎅"]})]}),T.jsx("button",{onClick:k,disabled:t.santasPopped<p[t.santaWorthLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=p[t.santaWorthLevel]?"#FF9800":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=p[t.santaWorthLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=p[t.santaWorthLevel]?"0 4px 8px rgba(255, 152, 0, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=p[t.santaWorthLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=p[t.santaWorthLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#fff3e0",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#FF9800",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #9C27B0",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#9C27B0",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.luckyClickLevel,"/",m.length]}),T.jsx("h3",{style:{color:"#9C27B0",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"🍀 Lucky Click"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Gives you a chance to get double points on each click! Feeling lucky?",t.luckyClickLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#9C27B0",fontWeight:"bold"},children:["✓ Active: ",t.luckyClickLevel*5,"% chance for 2x points"]})]}),t.luckyClickLevel<m.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[m[t.luckyClickLevel]," 🎅"]})]}),T.jsx("button",{onClick:$,disabled:t.santasPopped<m[t.luckyClickLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=m[t.luckyClickLevel]?"#9C27B0":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=m[t.luckyClickLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=m[t.luckyClickLevel]?"0 4px 8px rgba(156, 39, 176, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=m[t.luckyClickLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=m[t.luckyClickLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#f3e5f5",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#9C27B0",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #FFD700",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#FFD700",color:"#333",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.goldRushLevel,"/",y.length]}),T.jsx("h3",{style:{color:"#DAA520",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"🌟 Gold Rush"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Occasionally spawn golden santas worth 5x normal points! Strike gold!",t.goldRushLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#DAA520",fontWeight:"bold"},children:["✓ Active: ",t.goldRushLevel*3,"% chance for golden santa"]})]}),t.goldRushLevel<y.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[y[t.goldRushLevel]," 🎅"]})]}),T.jsx("button",{onClick:z,disabled:t.santasPopped<y[t.goldRushLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=y[t.goldRushLevel]?"#FFD700":"#ccc",color:"#333",border:"none",borderRadius:"8px",cursor:t.santasPopped>=y[t.goldRushLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=y[t.goldRushLevel]?"0 4px 8px rgba(255, 215, 0, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=y[t.goldRushLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=y[t.goldRushLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#fffbea",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#DAA520",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #E91E63",transition:"transform 0.2s",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{position:"absolute",top:"10px",right:"10px",backgroundColor:"#E91E63",color:"white",padding:"5px 15px",borderRadius:"20px",fontSize:"14px",fontWeight:"bold"},children:["Level ",t.clickMultiplierLevel,"/",_.length]}),T.jsx("h3",{style:{color:"#E91E63",marginBottom:"15px",fontSize:"28px",fontWeight:"bold"},children:"⚡ Click Multiplier"}),T.jsxs("p",{style:{marginBottom:"15px",color:"#555",lineHeight:"1.6",minHeight:"80px"},children:["Multiplies all your clicks! The ultimate power-up for serious santa hunters.",t.clickMultiplierLevel>0&&T.jsxs("span",{style:{display:"block",marginTop:"10px",color:"#E91E63",fontWeight:"bold"},children:["✓ Active: ",(1+t.clickMultiplierLevel*.1).toFixed(1),"x multiplier"]})]}),t.clickMultiplierLevel<_.length?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{fontSize:"20px",marginBottom:"20px",textAlign:"center"},children:["Cost: ",T.jsxs("strong",{style:{color:"#d32f2f",fontSize:"24px"},children:[_[t.clickMultiplierLevel]," 🎅"]})]}),T.jsx("button",{onClick:G,disabled:t.santasPopped<_[t.clickMultiplierLevel],style:{padding:"15px 25px",fontSize:"18px",fontWeight:"bold",backgroundColor:t.santasPopped>=_[t.clickMultiplierLevel]?"#E91E63":"#ccc",color:"white",border:"none",borderRadius:"8px",cursor:t.santasPopped>=_[t.clickMultiplierLevel]?"pointer":"not-allowed",width:"100%",transition:"all 0.3s",boxShadow:t.santasPopped>=_[t.clickMultiplierLevel]?"0 4px 8px rgba(233, 30, 99, 0.3)":"none"},onMouseEnter:O=>{t.santasPopped>=_[t.clickMultiplierLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onMouseLeave:O=>{O.currentTarget.style.transform="scale(1)"},onFocus:O=>{t.santasPopped>=_[t.clickMultiplierLevel]&&(O.currentTarget.style.transform="scale(1.05)")},onBlur:O=>{O.currentTarget.style.transform="scale(1)"},children:"⬆️ Upgrade Now"})]}):T.jsx("div",{style:{textAlign:"center",padding:"20px",backgroundColor:"#fce4ec",borderRadius:"8px"},children:T.jsx("p",{style:{color:"#E91E63",fontWeight:"bold",fontSize:"20px",margin:0},children:"✓ MAX LEVEL REACHED!"})})]})]}),T.jsxs("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",padding:"25px",borderRadius:"15px",marginTop:"30px",boxShadow:"0 8px 16px rgba(0,0,0,0.2)",border:"3px solid #ffd700"},children:[T.jsx("h3",{style:{color:"#d32f2f",marginBottom:"20px",fontSize:"24px",fontWeight:"bold",textAlign:"center"},children:"ℹ️ How to Play"}),T.jsxs("ol",{style:{lineHeight:"2",color:"#555",fontSize:"16px",paddingLeft:"30px"},children:[T.jsxs("li",{children:[T.jsx("strong",{children:"Click flying Santas"})," anywhere on the site to pop them and earn points!"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Spend your points"})," on upgrades to become more efficient"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Auto-clicker"})," works on ALL pages across the site automatically"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Spawn speed"})," increases how often Santas appear"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Santa worth"})," makes each click more valuable"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Lucky click"})," gives you a chance for double points"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Gold rush"})," spawns special golden santas worth 5x points"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Click multiplier"})," boosts all your clicks exponentially"]}),T.jsxs("li",{children:[T.jsx("strong",{children:"Pro tip:"})," Combine all upgrades for maximum efficiency!"]})]})]})]}),T.jsx(Cc,{})]}):T.jsxs("div",{children:[T.jsx(Za,{message:"Santa Shop",shadow:!0}),T.jsx(ea,{}),T.jsxs("div",{style:{padding:"40px",textAlign:"center",minHeight:"60vh",backgroundColor:"#f5f5f5"},children:[T.jsx("h2",{style:{color:"#d32f2f",marginBottom:"20px"},children:"🎅 Santa Shop"}),T.jsx("p",{style:{fontSize:"18px",color:"#666"},children:"Please login to access the Santa Shop!"})]}),T.jsx(Cc,{})]})},qE=""+new URL("lowrezlogo-eSGE3ORT.png",import.meta.url).href,FE=()=>(H.useEffect(()=>{let r=document.querySelector("link[rel='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.href=qE,r.type="image/png"},[]),null),GE=encodeURIComponent(`
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
        `);function QE({particleCount:r=120,speed:t=1,size:i=3,color:s="#FFF",zIndex:l=9999}){const z=H.useRef(null),G=H.useRef(null),O=H.useRef([]),K=H.useRef(1),nt=H.useRef(null),at=H.useRef([]),ht=H.useRef(null),I=H.useRef(null),R=H.useRef([]),{currentUser:S}=rs(),D=H.useRef(S),[V,j]=H.useState(0),[M,ae]=H.useState(0),[se,ot]=H.useState(0),[vt,mt]=H.useState(0),[Bt,L]=H.useState(0),[it,dt]=H.useState(0),lt=H.useRef(0),ut=H.useRef(0),St=H.useRef(0),bt=H.useRef(0),fe=H.useRef(0),kt=H.useRef(0);H.useEffect(()=>{D.current=S,console.log("Snow: currentUser updated to:",S),S?de():(j(0),ae(0),ot(0),mt(0),L(0),dt(0),lt.current=0,ut.current=0,St.current=0,bt.current=0,fe.current=0,kt.current=0)},[S]),H.useEffect(()=>{lt.current=V,ut.current=M,St.current=se,bt.current=vt,fe.current=Bt,kt.current=it},[V,M,se,vt,Bt,it]);const de=async()=>{if(S)try{const Pt=We(Zt,"Users",S),Tt=await Hc(Pt);if(Tt.exists()){const ee=Tt.data(),Ze=ee.autoClickerLevel||0,un=ee.spawnSpeedLevel||0,Je=ee.santaWorthLevel||0,ai=ee.luckyClickLevel||0,jn=ee.goldRushLevel||0,Bn=ee.clickMultiplierLevel||0;j(Ze),ae(un),ot(Je),mt(ai),L(jn),dt(Bn),console.log("Loaded upgrades:",{autoLevel:Ze,spawnLevel:un,worthLevel:Je,luckyLevel:ai,goldLevel:jn,multiplierLevel:Bn})}}catch(Pt){console.error("Error loading upgrades:",Pt)}},Yt=(Pt,Tt)=>{let ee=Pt,Ze=!1;Tt&&(ee*=5);const un=bt.current*.05;Math.random()<un&&(ee*=2,Ze=!0);const Je=1+kt.current*.1;return ee=Math.round(ee*Je),{points:ee,isLucky:Ze}};return H.useEffect(()=>{const Pt=z.current;if(!Pt)return;const Tt=Pt.getContext("2d");if(!Tt)return;const ee=new Image;ee.src=`data:image/svg+xml;charset=utf-8,${GE}`,nt.current=ee;const Ze=()=>{const oe=window.devicePixelRatio||1;K.current=oe;const At=window.innerWidth,Mt=window.innerHeight;Pt.style.width=`${At}px`,Pt.style.height=`${Mt}px`,Pt.width=Math.round(At*oe),Pt.height=Math.round(Mt*oe),Tt.setTransform(oe,0,0,oe,0,0)},un=()=>{const oe=Pt.width/K.current,At=Pt.height/K.current,Mt=[];for(let le=0;le<r;le++){const be=Math.random()*i+Math.random()*(i/2);Mt.push({x:Math.random()*oe,y:Math.random()*At,r:be,vx:(Math.random()-.5)*.6,vy:(.5+Math.random()*.9)*t,o:.5+Math.random()*.8,swing:Math.random()*20,phase:Math.random()*Math.PI*2})}O.current=Mt};let Je=performance.now();const ai=oe=>{const At=(oe-Je)/16.6667;Je=oe;const Mt=Pt.width/K.current,le=Pt.height/K.current;Tt.clearRect(0,0,Mt,le);const be=O.current;for(let Dt=0;Dt<be.length;Dt++){const rt=be[Dt];rt.phase+=.02*At,rt.x+=rt.vx*At+Math.sin(rt.phase)*(rt.swing*.01)*At,rt.y+=rt.vy*At,rt.y-rt.r>le&&(rt.y=-rt.r,rt.x=Math.random()*Mt),rt.x-rt.r>Mt&&(rt.x=-rt.r),rt.x+rt.r<0&&(rt.x=Mt+rt.r),Tt.globalAlpha=rt.o;const Kt=Tt.createRadialGradient(rt.x,rt.y,0,rt.x,rt.y,rt.r*1.8);Kt.addColorStop(0,s),Kt.addColorStop(1,"rgba(255,255,255,0)"),Tt.fillStyle=Kt,Tt.beginPath(),Tt.arc(rt.x,rt.y,rt.r,0,Math.PI*2),Tt.fill()}Tt.globalAlpha=1;const he=at.current;for(let Dt=he.length-1;Dt>=0;Dt--){const rt=he[Dt];rt.x+=rt.vx*At;const Kt=Math.sin(oe/400+rt.x*.02)*6*rt.scale,Me=rt.x,Ie=rt.y+Kt;nt.current&&nt.current.complete?(Tt.save(),Tt.translate(Me,Ie),rt.dir===-1&&Tt.scale(-1,1),rt.isGolden&&(Tt.shadowColor="#FFD700",Tt.shadowBlur=20,Tt.globalAlpha=1,Tt.filter="sepia(1) saturate(3) hue-rotate(10deg) brightness(1.3)"),Tt.drawImage(nt.current,-rt.w/2,-rt.h/2,rt.w,rt.h),Tt.filter="none",Tt.shadowColor="transparent",Tt.shadowBlur=0,Tt.restore()):(Tt.fillStyle=rt.isGolden?"#FFD700":"#e74c3c",Tt.fillRect(Me-rt.w/2,Ie-rt.h/2,rt.w,rt.h)),rt.dir===1&&rt.x-rt.w/2>Mt+50&&he.splice(Dt,1),rt.dir===-1&&rt.x+rt.w/2<-50&&he.splice(Dt,1)}const we=R.current;for(let Dt=we.length-1;Dt>=0;Dt--){const rt=we[Dt];rt.vy+=.06*At,rt.vx*=.995,rt.vy*=.999,rt.x+=rt.vx*At,rt.y+=rt.vy*At,rt.life-=1*At;const Kt=Math.max(0,rt.life/rt.maxLife);Tt.globalAlpha=Kt;const Me=Tt.createRadialGradient(rt.x,rt.y,0,rt.x,rt.y,rt.r*2.5);Me.addColorStop(0,rt.color),Me.addColorStop(.6,"rgba(255,255,255,0.2)"),Me.addColorStop(1,"rgba(255,255,255,0)"),Tt.fillStyle=Me,Tt.beginPath(),Tt.arc(rt.x,rt.y,rt.r,0,Math.PI*2),Tt.fill(),rt.life<=0&&we.splice(Dt,1)}Tt.globalAlpha=1,G.current=requestAnimationFrame(ai)},jn=()=>{const oe=Pt.width/K.current,At=Pt.height/K.current,Mt=Math.random()>.5?1:-1,le=Mt===1?-60:oe+60,be=100,he=be+(At-be)*Math.random(),we=.6+Math.random()*.8,Dt=120,rt=60,Kt=(2+Math.random()*2)*(Mt===1?1:-1)*Math.max(.5,t),Me=fe.current*.03,Ie=Math.random()<Me,_e={x:le,y:he,vx:Kt,scale:we,dir:Mt,w:Dt*we,h:rt*we,isGolden:Ie};at.current.push(_e)},Bn=(oe,At,Mt)=>{const le=30+Math.round(Math.random()*20),be=[];for(let he=0;he<le;he++){const we=Math.random()*Math.PI*2,Dt=1+Math.random()*4,rt=Math.cos(we)*Dt*(.6+Math.random()*1.4),Kt=Math.sin(we)*Dt*(.6+Math.random()*1.4)-Math.random()*1.5,Me=1+Math.random()*3,Ie=30+Math.random()*40,_e=Mt||"#e74c3c";be.push({x:oe,y:At,vx:rt,vy:Kt,r:Me,life:Ie,maxLife:Ie,color:_e})}R.current.push(...be)},di=oe=>{const At=Pt.getBoundingClientRect(),Mt=oe.clientX-At.left,le=oe.clientY-At.top,be=at.current,he=D.current;console.log("Santa click detected. Current user:",he);for(let we=be.length-1;we>=0;we--){const Dt=be[we],rt=Mt-Dt.x,Kt=le-Dt.y,Me=Math.max(Dt.w,Dt.h)*.6;if(rt*rt+Kt*Kt<=Me*Me){const Ie=Dt.isGolden?"#FFD700":"#ffb347";if(Bn(Dt.x,Dt.y,Ie),be.splice(we,1),he){console.log("User is logged in, incrementing santa count for:",he);const _e=St.current+1,{points:pi,isLucky:va}=Yt(_e,Dt.isGolden);Dt.isGolden&&console.log("Golden santa clicked! 5x multiplier applied"),va&&(console.log("Lucky click! 2x multiplier applied"),Nt("🍀 Lucky Click! Double points!","success")),console.log("Total points for this click:",pi,{baseWorth:_e,isGolden:Dt.isGolden,isLucky:va});try{const vr=We(Zt,"Users",he);kn(vr,{santasPopped:Tn(pi)}).then(()=>{console.log(`Santa popped! Count incremented by ${pi} for ${he}`),window.dispatchEvent(new CustomEvent("santaPopped",{detail:{increment:pi}}))}).catch(xn=>{console.error("Error updating santa count:",xn),Nt(`Failed to save Santa pop. Error: ${xn.message}`,"error")})}catch(vr){console.error("Error creating update:",vr)}}else console.log("No user logged in - santa pop not tracked"),sessionStorage.getItem("loginReminderShown")||(Nt("🎅 Login required! Go to the Sign Up page to login or create an account, then your Santa pops will be tracked on the leaderboard!","info"),sessionStorage.setItem("loginReminderShown","true"));break}}};Ze(),un(),G.current=requestAnimationFrame(ai);const Pi=ut.current,os=Math.max(1e3,5e3*Math.pow(.8,Pi));console.log("Santa spawn interval:",os,"ms (level",Pi,")"),ht.current=window.setInterval(jn,os);const ya=window.setTimeout(jn,1e3);if(lt.current>0){const oe=Math.max(2e3,1e4-lt.current*2e3);console.log("Auto-clicker active! Interval:",oe,"ms (level",lt.current,")"),I.current=window.setInterval(()=>{const At=at.current;if(At.length>0&&D.current){const Mt=Math.floor(Math.random()*At.length),le=At[Mt],be=le.isGolden?"#FFD700":"#4CAF50";Bn(le.x,le.y,be),At.splice(Mt,1);const he=D.current,we=St.current+1,{points:Dt}=Yt(we,le.isGolden);if(he)try{const rt=We(Zt,"Users",he);kn(rt,{santasPopped:Tn(Dt)}).then(()=>{console.log(`Auto-clicked santa for ${he} (worth: ${Dt})`),window.dispatchEvent(new CustomEvent("santaPopped",{detail:{increment:Dt}}))}).catch(Kt=>{console.error("Error updating santa count:",Kt)})}catch(rt){console.error("Error with auto-click:",rt)}}},oe)}const tn=()=>{Ze(),un(),at.current=[]};return window.addEventListener("resize",tn),window.addEventListener("click",di),()=>{G.current&&cancelAnimationFrame(G.current),ht.current&&clearInterval(ht.current),I.current&&clearInterval(I.current),window.clearTimeout(ya),window.removeEventListener("resize",tn),window.removeEventListener("click",di)}},[r,t,i,s,V,M,se,vt,Bt,it]),T.jsx("canvas",{ref:z,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:l},"aria-hidden":!0})}const KE=()=>(H.useRef(null),H.useRef(null),H.useRef(null),H.useRef(!1),H.useRef(null),H.useEffect(()=>{},[]),null),YE=()=>T.jsx(um,{children:T.jsxs("div",{className:"App",children:[T.jsx(FE,{}),T.jsx(QE,{}),T.jsx(KE,{}),T.jsx(zE,{}),T.jsx(Jp,{children:T.jsxs(Mp,{children:[T.jsx(ur,{path:"*",element:T.jsx(xp,{to:"/",replace:!0})}),T.jsx(ur,{path:"/",element:T.jsx(lf,{})}),T.jsx(ur,{path:"/greentrails/*",element:T.jsx(lf,{})}),T.jsx(ur,{path:"/volenterpage/*",element:T.jsx(NE,{})}),T.jsx(ur,{path:"/adddata/*",element:T.jsx(VE,{})}),T.jsx(ur,{path:"/leaderboard/*",element:T.jsx(UE,{})}),T.jsx(ur,{path:"/signup/*",element:T.jsx(BE,{})}),T.jsx(ur,{path:"/santa/*",element:T.jsx(HE,{})})]})})]})});z8.createRoot(document.getElementById("root")).render(T.jsx(Cn.StrictMode,{children:T.jsx(YE,{})}));
