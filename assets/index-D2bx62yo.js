(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function yf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var n4={exports:{}},io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L6;function dd(){if(L6)return io;L6=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return io.Fragment=t,io.jsx=i,io.jsxs=i,io}var z6;function md(){return z6||(z6=1,n4.exports=dd()),n4.exports}var j=md(),i4={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P6;function pd(){if(P6)return bt;P6=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),S=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,F={};function B(O,nt,dt){this.props=O,this.context=nt,this.refs=F,this.updater=dt||I}B.prototype.isReactComponent={},B.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=B.prototype;function rt(O,nt,dt){this.props=O,this.context=nt,this.refs=F,this.updater=dt||I}var it=rt.prototype=new $;it.constructor=rt,N(it,B.prototype),it.isPureReactComponent=!0;var gt=Array.isArray,ht={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function V(O,nt,dt,lt,ot,Dt){return dt=Dt.ref,{$$typeof:r,type:O,key:nt,ref:dt!==void 0?dt:null,props:Dt}}function b(O,nt){return V(O.type,nt,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function w(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(dt){return nt[dt]})}var x=/\/+/g;function L(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?w(""+O.key):nt.toString(36)}function M(){}function wt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(M,M):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,nt,dt,lt,ot){var Dt=typeof O;(Dt==="undefined"||Dt==="boolean")&&(O=null);var St=!1;if(O===null)St=!0;else switch(Dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(O.$$typeof){case r:case t:St=!0;break;case C:return St=O._init,It(St(O._payload),nt,dt,lt,ot)}}if(St)return ot=ot(O),St=lt===""?"."+L(O,0):lt,gt(ot)?(dt="",St!=null&&(dt=St.replace(x,"$&/")+"/"),It(ot,nt,dt,"",function(ae){return ae})):ot!=null&&(A(ot)&&(ot=b(ot,dt+(ot.key==null||O&&O.key===ot.key?"":(""+ot.key).replace(x,"$&/")+"/")+St)),nt.push(ot)),1;St=0;var de=lt===""?".":lt+":";if(gt(O))for(var jt=0;jt<O.length;jt++)lt=O[jt],Dt=de+L(lt,jt),St+=It(lt,nt,dt,Dt,ot);else if(jt=R(O),typeof jt=="function")for(O=jt.call(O),jt=0;!(lt=O.next()).done;)lt=lt.value,Dt=de+L(lt,jt++),St+=It(lt,nt,dt,Dt,ot);else if(Dt==="object"){if(typeof O.then=="function")return It(wt(O),nt,dt,lt,ot);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function tt(O,nt,dt){if(O==null)return O;var lt=[],ot=0;return It(O,lt,"","",function(Dt){return nt.call(dt,Dt,ot++)}),lt}function K(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(dt){(O._status===0||O._status===-1)&&(O._status=1,O._result=dt)},function(dt){(O._status===0||O._status===-1)&&(O._status=2,O._result=dt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var st=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Rt(){}return bt.Children={map:tt,forEach:function(O,nt,dt){tt(O,function(){nt.apply(this,arguments)},dt)},count:function(O){var nt=0;return tt(O,function(){nt++}),nt},toArray:function(O){return tt(O,function(nt){return nt})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},bt.Component=B,bt.Fragment=i,bt.Profiler=o,bt.PureComponent=rt,bt.StrictMode=s,bt.Suspense=p,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ht,bt.act=function(){throw Error("act(...) is not supported in production builds of React.")},bt.cache=function(O){return function(){return O.apply(null,arguments)}},bt.cloneElement=function(O,nt,dt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var lt=N({},O.props),ot=O.key,Dt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(Dt=void 0),nt.key!==void 0&&(ot=""+nt.key),nt)!Ct.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(lt[St]=nt[St]);var St=arguments.length-2;if(St===1)lt.children=dt;else if(1<St){for(var de=Array(St),jt=0;jt<St;jt++)de[jt]=arguments[jt+2];lt.children=de}return V(O.type,ot,void 0,void 0,Dt,lt)},bt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},bt.createElement=function(O,nt,dt){var lt,ot={},Dt=null;if(nt!=null)for(lt in nt.key!==void 0&&(Dt=""+nt.key),nt)Ct.call(nt,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(ot[lt]=nt[lt]);var St=arguments.length-2;if(St===1)ot.children=dt;else if(1<St){for(var de=Array(St),jt=0;jt<St;jt++)de[jt]=arguments[jt+2];ot.children=de}if(O&&O.defaultProps)for(lt in St=O.defaultProps,St)ot[lt]===void 0&&(ot[lt]=St[lt]);return V(O,Dt,void 0,void 0,null,ot)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(O){return{$$typeof:m,render:O}},bt.isValidElement=A,bt.lazy=function(O){return{$$typeof:C,_payload:{_status:-1,_result:O},_init:K}},bt.memo=function(O,nt){return{$$typeof:y,type:O,compare:nt===void 0?null:nt}},bt.startTransition=function(O){var nt=ht.T,dt={};ht.T=dt;try{var lt=O(),ot=ht.S;ot!==null&&ot(dt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Rt,st)}catch(Dt){st(Dt)}finally{ht.T=nt}},bt.unstable_useCacheRefresh=function(){return ht.H.useCacheRefresh()},bt.use=function(O){return ht.H.use(O)},bt.useActionState=function(O,nt,dt){return ht.H.useActionState(O,nt,dt)},bt.useCallback=function(O,nt){return ht.H.useCallback(O,nt)},bt.useContext=function(O){return ht.H.useContext(O)},bt.useDebugValue=function(){},bt.useDeferredValue=function(O,nt){return ht.H.useDeferredValue(O,nt)},bt.useEffect=function(O,nt){return ht.H.useEffect(O,nt)},bt.useId=function(){return ht.H.useId()},bt.useImperativeHandle=function(O,nt,dt){return ht.H.useImperativeHandle(O,nt,dt)},bt.useInsertionEffect=function(O,nt){return ht.H.useInsertionEffect(O,nt)},bt.useLayoutEffect=function(O,nt){return ht.H.useLayoutEffect(O,nt)},bt.useMemo=function(O,nt){return ht.H.useMemo(O,nt)},bt.useOptimistic=function(O,nt){return ht.H.useOptimistic(O,nt)},bt.useReducer=function(O,nt,dt){return ht.H.useReducer(O,nt,dt)},bt.useRef=function(O){return ht.H.useRef(O)},bt.useState=function(O){return ht.H.useState(O)},bt.useSyncExternalStore=function(O,nt,dt){return ht.H.useSyncExternalStore(O,nt,dt)},bt.useTransition=function(){return ht.H.useTransition()},bt.version="19.0.0",bt}var B6;function G4(){return B6||(B6=1,i4.exports=pd()),i4.exports}var Q=G4();const li=yf(Q);var r4={exports:{}},ro={},a4={exports:{}},s4={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j6;function gd(){return j6||(j6=1,function(r){function t(tt,K){var st=tt.length;tt.push(K);t:for(;0<st;){var Rt=st-1>>>1,O=tt[Rt];if(0<o(O,K))tt[Rt]=K,tt[st]=O,st=Rt;else break t}}function i(tt){return tt.length===0?null:tt[0]}function s(tt){if(tt.length===0)return null;var K=tt[0],st=tt.pop();if(st!==K){tt[0]=st;t:for(var Rt=0,O=tt.length,nt=O>>>1;Rt<nt;){var dt=2*(Rt+1)-1,lt=tt[dt],ot=dt+1,Dt=tt[ot];if(0>o(lt,st))ot<O&&0>o(Dt,lt)?(tt[Rt]=Dt,tt[ot]=st,Rt=ot):(tt[Rt]=lt,tt[dt]=st,Rt=dt);else if(ot<O&&0>o(Dt,st))tt[Rt]=Dt,tt[ot]=st,Rt=ot;else break t}}return K}function o(tt,K){var st=tt.sortIndex-K.sortIndex;return st!==0?st:tt.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],C=1,S=null,R=3,I=!1,N=!1,F=!1,B=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function it(tt){for(var K=i(y);K!==null;){if(K.callback===null)s(y);else if(K.startTime<=tt)s(y),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(y)}}function gt(tt){if(F=!1,it(tt),!N)if(i(p)!==null)N=!0,wt();else{var K=i(y);K!==null&&It(gt,K.startTime-tt)}}var ht=!1,Ct=-1,V=5,b=-1;function A(){return!(r.unstable_now()-b<V)}function w(){if(ht){var tt=r.unstable_now();b=tt;var K=!0;try{t:{N=!1,F&&(F=!1,$(Ct),Ct=-1),I=!0;var st=R;try{e:{for(it(tt),S=i(p);S!==null&&!(S.expirationTime>tt&&A());){var Rt=S.callback;if(typeof Rt=="function"){S.callback=null,R=S.priorityLevel;var O=Rt(S.expirationTime<=tt);if(tt=r.unstable_now(),typeof O=="function"){S.callback=O,it(tt),K=!0;break e}S===i(p)&&s(p),it(tt)}else s(p);S=i(p)}if(S!==null)K=!0;else{var nt=i(y);nt!==null&&It(gt,nt.startTime-tt),K=!1}}break t}finally{S=null,R=st,I=!1}K=void 0}}finally{K?x():ht=!1}}}var x;if(typeof rt=="function")x=function(){rt(w)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,M=L.port2;L.port1.onmessage=w,x=function(){M.postMessage(null)}}else x=function(){B(w,0)};function wt(){ht||(ht=!0,x())}function It(tt,K){Ct=B(function(){tt(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(tt){tt.callback=null},r.unstable_continueExecution=function(){N||I||(N=!0,wt())},r.unstable_forceFrameRate=function(tt){0>tt||125<tt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<tt?Math.floor(1e3/tt):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(tt){switch(R){case 1:case 2:case 3:var K=3;break;default:K=R}var st=R;R=K;try{return tt()}finally{R=st}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(tt,K){switch(tt){case 1:case 2:case 3:case 4:case 5:break;default:tt=3}var st=R;R=tt;try{return K()}finally{R=st}},r.unstable_scheduleCallback=function(tt,K,st){var Rt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?Rt+st:Rt):st=Rt,tt){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=st+O,tt={id:C++,callback:K,priorityLevel:tt,startTime:st,expirationTime:O,sortIndex:-1},st>Rt?(tt.sortIndex=st,t(y,tt),i(p)===null&&tt===i(y)&&(F?($(Ct),Ct=-1):F=!0,It(gt,st-Rt))):(tt.sortIndex=O,t(p,tt),N||I||(N=!0,wt())),tt},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(tt){var K=R;return function(){var st=R;R=K;try{return tt.apply(this,arguments)}finally{R=st}}}}(s4)),s4}var q6;function yd(){return q6||(q6=1,a4.exports=gd()),a4.exports}var l4={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H6;function vd(){if(H6)return Fe;H6=1;var r=G4();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)y+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,C){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:C}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fe.createPortal=function(p,y){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,C)},Fe.flushSync=function(p){var y=f.T,C=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=C,s.d.f()}},Fe.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Fe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Fe.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var C=y.as,S=m(C,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,I=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;C==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:R,fetchPriority:I}):C==="script"&&s.d.X(p,{crossOrigin:S,integrity:R,fetchPriority:I,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fe.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var C=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Fe.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var C=y.as,S=m(C,y.crossOrigin);s.d.L(p,C,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fe.preloadModule=function(p,y){if(typeof p=="string")if(y){var C=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Fe.requestFormReset=function(p){s.d.r(p)},Fe.unstable_batchedUpdates=function(p,y){return p(y)},Fe.useFormState=function(p,y,C){return f.H.useFormState(p,y,C)},Fe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fe.version="19.0.0",Fe}var F6;function _d(){if(F6)return l4.exports;F6=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),l4.exports=vd(),l4.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G6;function Cd(){if(G6)return ro;G6=1;var r=yd(),t=G4(),i=_d();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),I=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),it=Symbol.for("react.offscreen"),gt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Ct(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case m:return"Portal";case C:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I:return(e.displayName||"Context")+".Provider";case R:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:b(e.type)||"Memo";case rt:n=e._payload,e=e._init;try{return b(e(n))}catch{}}return null}var A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=Object.assign,x,L;function M(e){if(x===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x+e+L}var wt=!1;function It(e,n){if(!e||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var H=Y}Reflect.construct(e,[],J)}else{try{J.call()}catch(Y){H=Y}e.call(J.prototype)}}else{try{throw Error()}catch(Y){H=Y}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&H&&typeof Y.stack=="string")return[Y.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var D=_.split(`
`),U=E.split(`
`);for(h=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(l===D.length||h===U.length)for(l=D.length-1,h=U.length-1;1<=l&&0<=h&&D[l]!==U[h];)h--;for(;1<=l&&0<=h;l--,h--)if(D[l]!==U[h]){if(l!==1||h!==1)do if(l--,h--,0>h||D[l]!==U[h]){var X=`
`+D[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=h);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?M(a):""}function tt(e){switch(e.tag){case 26:case 27:case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 15:return e=It(e.type,!1),e;case 11:return e=It(e.type.render,!1),e;case 1:return e=It(e.type,!0),e;default:return""}}function K(e){try{var n="";do n+=tt(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function st(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Rt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function O(e){if(st(e)!==e)throw Error(s(188))}function nt(e){var n=e.alternate;if(!n){if(n=st(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,l=n;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),e;if(d===l)return O(h),n;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,l=d;break}if(E===l){_=!0,l=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=h;break}if(E===l){_=!0,l=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function dt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=dt(e),n!==null)return n;e=e.sibling}return null}var lt=Array.isArray,ot=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt={pending:!1,data:null,method:null,action:null},St=[],de=-1;function jt(e){return{current:e}}function ae(e){0>de||(e.current=St[de],St[de]=null,de--)}function Kt(e,n){de++,St[de]=e.current,e.current=n}var $e=jt(null),yi=jt(null),vn=jt(null),Xi=jt(null);function Zi(e,n){switch(Kt(vn,n),Kt(yi,e),Kt($e,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?f6(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=f6(e),n=d6(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae($e),Kt($e,n)}function vi(){ae($e),ae(yi),ae(vn)}function Ws(e){e.memoizedState!==null&&Kt(Xi,e);var n=$e.current,a=d6(n,e.type);n!==a&&(Kt(yi,e),Kt($e,a))}function Ba(e){yi.current===e&&(ae($e),ae(yi)),Xi.current===e&&(ae(Xi),Wl._currentValue=Dt)}var ja=Object.prototype.hasOwnProperty,Zr=r.unstable_scheduleCallback,qa=r.unstable_cancelCallback,r1=r.unstable_shouldYield,Js=r.unstable_requestPaint,en=r.unstable_now,Vo=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Re=r.unstable_UserBlockingPriority,_i=r.unstable_NormalPriority,No=r.unstable_LowPriority,tl=r.unstable_IdlePriority,a1=r.log,Wr=r.unstable_setDisableYieldValue,Wi=null,qe=null;function el(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}function Fn(e){if(typeof a1=="function"&&Wr(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(Wi,e)}catch{}}var Xe=Math.clz32?Math.clz32:ko,nl=Math.log,Oo=Math.LN2;function ko(e){return e>>>=0,e===0?32:31-(nl(e)/Oo|0)|0}var Gn=128,Ji=4194304;function Un(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,h=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?l=Un(a):(d&=E,d!==0?l=Un(d):e||(_=E&~_,_!==0&&(l=Un(_))))):(E=a&~h,E!==0?l=Un(E):d!==0?l=Un(d):e||(_=a&~_,_!==0&&(l=Un(_)))),l===0?0:n!==0&&n!==l&&(n&h)===0&&(h=l&-l,_=n&-n,h>=_||h===32&&(_&4194176)!==0)?n:l}function tr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ha(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function il(){var e=Gn;return Gn<<=1,(Gn&4194176)===0&&(Gn=128),e}function er(){var e=Ji;return Ji<<=1,(Ji&62914560)===0&&(Ji=4194304),e}function Fa(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ce(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uo(e,n,a,l,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,D=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var X=31-Xe(a),J=1<<X;E[X]=0,D[X]=-1;var H=U[X];if(H!==null)for(U[X]=null,X=0;X<H.length;X++){var Y=H[X];Y!==null&&(Y.lane&=-536870913)}a&=~J}l!==0&&nr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~n))}function nr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Xe(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194218}function ir(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Xe(a),h=1<<l;h&n|e[l]&n&&(e[l]|=n),a&=~h}}function Lo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zo(){var e=ot.p;return e!==0?e:(e=window.event,e===void 0?32:x6(e.type))}function rr(e,n){var a=ot.p;try{return ot.p=e,n()}finally{ot.p=a}}var Qn=Math.random().toString(36).slice(2),De="__reactFiber$"+Qn,_e="__reactProps$"+Qn,Ci="__reactContainer$"+Qn,Jr="__reactEvents$"+Qn,Ga="__reactListeners$"+Qn,Kn="__reactHandles$"+Qn,rl="__reactResources$"+Qn,ar="__reactMarker$"+Qn;function ta(e){delete e[De],delete e[_e],delete e[Jr],delete e[Ga],delete e[Kn]}function Ln(e){var n=e[De];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[De]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=g6(e);e!==null;){if(a=e[De])return a;e=g6(e)}return n}e=a,a=e.parentNode}return null}function Ei(e){if(e=e[De]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function sr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function lr(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ee(e){e[ar]=!0}var al=new Set,Qa={};function on(e,n){nn(e,n),nn(e+"Capture",n)}function nn(e,n){for(Qa[e]=n,e=0;e<n.length;e++)al.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sl={},ll={};function Po(e){return ja.call(ll,e)?!0:ja.call(sl,e)?!1:s1.test(e)?ll[e]=!0:(sl[e]=!0,!1)}function or(e,n,a){if(Po(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ur(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Cn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function l1(e){var n=Bo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ea(e){e._valueTracker||(e._valueTracker=l1(e))}function ol(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=Bo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ti=/[\n"\\]/g;function se(e){return e.replace(Ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cr(e,n,a,l,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ze(n)):e.value!==""+Ze(n)&&(e.value=""+Ze(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Ya(e,_,Ze(n)):a!=null?Ya(e,_,Ze(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ze(E):e.removeAttribute("name")}function na(e,n,a,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function Ya(e,n,a){n==="number"&&Ka(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qt(e,n,a,l){if(e=e.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=n.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function ia(e,n,a){if(n!=null&&(n=""+Ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ze(a):""}function hr(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(s(92));if(lt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Ze(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function En(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var o1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ul(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||o1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function jo(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in n)l=n[h],n.hasOwnProperty(h)&&a[h]!==l&&ul(e,h,l)}else for(var d in n)n.hasOwnProperty(d)&&ul(e,d,n[d])}function cl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(e){return c1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tn=null;function $a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Si=null;function bi(e){var n=Ei(e);if(n&&(e=n.stateNode)){var a=e[_e]||null;t:switch(e=n.stateNode,n.type){case"input":if(cr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var h=l[_e]||null;if(!h)throw Error(s(90));cr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&ol(l)}break t;case"textarea":ia(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qt(e,!!a.multiple,n,!1)}}}var hl=!1;function qo(e,n,a){if(hl)return e(n,a);hl=!0;try{var l=e(n);return l}finally{if(hl=!1,(Ai!==null||Si!==null)&&(Nu(),Ai&&(n=Ai,e=Si,Si=Ai=null,bi(n),e)))for(n=0;n<e.length;n++)bi(e[n])}}function ra(e,n){var a=e.stateNode;if(a===null)return null;var l=a[_e]||null;if(l===null)return null;a=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var An=!1;if(un)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){An=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{An=!1}var $n=null,fr=null,wi=null;function fl(){if(wi)return wi;var e,n=fr,a=n.length,l,h="value"in $n?$n.value:$n.textContent,d=h.length;for(e=0;e<a&&n[e]===h[e];e++);var _=a-e;for(l=1;l<=_&&n[a-l]===h[d-l];l++);return wi=h.slice(e,1<l?1-l:void 0)}function Xn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function dl(){return!1}function Me(e){function n(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zn:dl,this.isPropagationStopped=dl,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=Me(Gt),sa=w({},Gt,{view:0,detail:0}),Ho=Me(sa),Za,Wa,Wn,la=w({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(Za=e.screenX-Wn.screenX,Wa=e.screenY-Wn.screenY):Wa=Za=0,Wn=e),Za)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),Sn=Me(la),Fo=w({},la,{dataTransfer:0}),h1=Me(Fo),oa=w({},sa,{relatedTarget:0}),Ja=Me(oa),ml=w({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),ts=Me(ml),Go=w({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),es=Me(Go),f1=w({},Gt,{data:0}),pl=Me(f1),ua={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ko={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ko[e])?!!n[e]:!1}function ca(){return gl}var Yo=w({},sa,{key:function(e){if(e.key){var n=ua[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?Xn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ns=Me(Yo),$o=w({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yl=Me($o),Ri=w({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Xo=Me(Ri),Zo=w({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wo=Me(Zo),Jo=w({},la,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),is=Me(Jo),We=w({},Gt,{newState:0,oldState:0}),tu=Me(We),eu=[9,13,27,32],Jn=un&&"CompositionEvent"in window,u=null;un&&"documentMode"in document&&(u=document.documentMode);var g=un&&"TextEvent"in window&&!u,v=un&&(!Jn||u&&8<u&&11>=u),T=" ",P=!1;function G(e,n){switch(e){case"keyup":return eu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function at(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Ce(e,n){switch(e){case"compositionend":return at(n);case"keypress":return n.which!==32?null:(P=!0,T);case"textInput":return e=n.data,e===T&&P?null:e;default:return null}}function Lt(e,n){if(Ut)return e==="compositionend"||!Jn&&G(e,n)?(e=fl(),wi=fr=$n=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var Ie={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ie[e.type]:n==="textarea"}function Di(e,n,a,l){Ai?Si?Si.push(l):Si=[l]:Ai=l,n=zu(n,"onChange"),0<n.length&&(a=new Xa("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var ke=null,ti=null;function vl(e){l6(e,0)}function nu(e){var n=sr(e);if(ol(n))return e}function U2(e,n){if(e==="change")return n}var L2=!1;if(un){var d1;if(un){var m1="oninput"in document;if(!m1){var z2=document.createElement("div");z2.setAttribute("oninput","return;"),m1=typeof z2.oninput=="function"}d1=m1}else d1=!1;L2=d1&&(!document.documentMode||9<document.documentMode)}function P2(){ke&&(ke.detachEvent("onpropertychange",B2),ti=ke=null)}function B2(e){if(e.propertyName==="value"&&nu(ti)){var n=[];Di(n,ti,e,$a(e)),qo(vl,n)}}function H7(e,n,a){e==="focusin"?(P2(),ke=n,ti=a,ke.attachEvent("onpropertychange",B2)):e==="focusout"&&P2()}function F7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(ti)}function G7(e,n){if(e==="click")return nu(n)}function Q7(e,n){if(e==="input"||e==="change")return nu(n)}function K7(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var cn=typeof Object.is=="function"?Object.is:K7;function _l(e,n){if(cn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ja.call(n,h)||!cn(e[h],n[h]))return!1}return!0}function j2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function q2(e,n){var a=j2(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=j2(a)}}function H2(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?H2(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function F2(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ka(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ka(e.document)}return n}function p1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Y7(e,n){var a=F2(n);n=e.focusedElem;var l=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&H2(n.ownerDocument.documentElement,n)){if(l!==null&&p1(n)){if(e=l.start,a=l.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=n.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=q2(n,d);var _=q2(n,l);h&&_&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==_.node||a.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(e),a.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var $7=un&&"documentMode"in document&&11>=document.documentMode,rs=null,g1=null,Cl=null,y1=!1;function G2(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;y1||rs==null||rs!==Ka(l)||(l=rs,"selectionStart"in l&&p1(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cl&&_l(Cl,l)||(Cl=l,l=zu(g1,"onSelect"),0<l.length&&(n=new Xa("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=rs)))}function ha(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var as={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionrun:ha("Transition","TransitionRun"),transitionstart:ha("Transition","TransitionStart"),transitioncancel:ha("Transition","TransitionCancel"),transitionend:ha("Transition","TransitionEnd")},v1={},Q2={};un&&(Q2=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function fa(e){if(v1[e])return v1[e];if(!as[e])return e;var n=as[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Q2)return v1[e]=n[a];return e}var K2=fa("animationend"),Y2=fa("animationiteration"),$2=fa("animationstart"),X7=fa("transitionrun"),Z7=fa("transitionstart"),W7=fa("transitioncancel"),X2=fa("transitionend"),Z2=new Map,W2="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function zn(e,n){Z2.set(e,n),on(n,[e])}var bn=[],ss=0,_1=0;function iu(){for(var e=ss,n=_1=ss=0;n<e;){var a=bn[n];bn[n++]=null;var l=bn[n];bn[n++]=null;var h=bn[n];bn[n++]=null;var d=bn[n];if(bn[n++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&J2(a,h,d)}}function ru(e,n,a,l){bn[ss++]=e,bn[ss++]=n,bn[ss++]=a,bn[ss++]=l,_1|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function C1(e,n,a,l){return ru(e,n,a,l),au(e)}function dr(e,n){return ru(e,null,null,n),au(e)}function J2(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&n!==null&&e.tag===3&&(d=e.stateNode,h=31-Xe(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[n]:e.push(n),n.lane=a|536870912)}function au(e){if(50<Gl)throw Gl=0,w0=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ls={},t5=new WeakMap;function wn(e,n){if(typeof e=="object"&&e!==null){var a=t5.get(e);return a!==void 0?a:(n={value:e,source:n,stack:K(n)},t5.set(e,n),n)}return{value:e,source:n,stack:K(n)}}var os=[],us=0,su=null,lu=0,Rn=[],Dn=0,da=null,Mi=1,Ii="";function ma(e,n){os[us++]=lu,os[us++]=su,su=e,lu=n}function e5(e,n,a){Rn[Dn++]=Mi,Rn[Dn++]=Ii,Rn[Dn++]=da,da=e;var l=Mi;e=Ii;var h=32-Xe(l)-1;l&=~(1<<h),a+=1;var d=32-Xe(n)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Mi=1<<32-Xe(n)+h|a<<h|l,Ii=d+e}else Mi=1<<d|a<<h|l,Ii=e}function E1(e){e.return!==null&&(ma(e,1),e5(e,1,0))}function T1(e){for(;e===su;)su=os[--us],os[us]=null,lu=os[--us],os[us]=null;for(;e===da;)da=Rn[--Dn],Rn[Dn]=null,Ii=Rn[--Dn],Rn[Dn]=null,Mi=Rn[--Dn],Rn[Dn]=null}var Je=null,Ue=null,Ht=!1,Pn=null,ei=!1,A1=Error(s(519));function pa(e){var n=Error(s(418,""));throw Al(wn(n,e)),A1}function n5(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[De]=e,n[_e]=l,a){case"dialog":Ot("cancel",n),Ot("close",n);break;case"iframe":case"object":case"embed":Ot("load",n);break;case"video":case"audio":for(a=0;a<Kl.length;a++)Ot(Kl[a],n);break;case"source":Ot("error",n);break;case"img":case"image":case"link":Ot("error",n),Ot("load",n);break;case"details":Ot("toggle",n);break;case"input":Ot("invalid",n),na(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ea(n);break;case"select":Ot("invalid",n);break;case"textarea":Ot("invalid",n),hr(n,l.value,l.defaultValue,l.children),ea(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||h6(n.textContent,a)?(l.popover!=null&&(Ot("beforetoggle",n),Ot("toggle",n)),l.onScroll!=null&&Ot("scroll",n),l.onScrollEnd!=null&&Ot("scrollend",n),l.onClick!=null&&(n.onclick=Pu),n=!0):n=!1,n||pa(e)}function i5(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:ei=!0;return;case 5:case 13:ei=!1;return;default:Je=Je.return}}function El(e){if(e!==Je)return!1;if(!Ht)return i5(e),Ht=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||H0(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Ue&&pa(e),i5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ue=jn(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ue=null}}else Ue=Je?jn(e.stateNode.nextSibling):null;return!0}function Tl(){Ue=Je=null,Ht=!1}function Al(e){Pn===null?Pn=[e]:Pn.push(e)}var Sl=Error(s(460)),r5=Error(s(474)),S1={then:function(){}};function a5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ou(){}function s5(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ou,ou),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(s(483)):e;default:if(typeof n.status=="string")n.then(ou,ou);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=l}},function(l){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Sl?Error(s(483)):e}throw bl=n,Sl}}var bl=null;function l5(){if(bl===null)throw Error(s(459));var e=bl;return bl=null,e}var cs=null,wl=0;function uu(e){var n=wl;return wl+=1,cs===null&&(cs=[]),s5(cs,e,n)}function Rl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cu(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function o5(e){var n=e._init;return n(e._payload)}function u5(e){function n(z,k){if(e){var q=z.deletions;q===null?(z.deletions=[k],z.flags|=16):q.push(k)}}function a(z,k){if(!e)return null;for(;k!==null;)n(z,k),k=k.sibling;return null}function l(z){for(var k=new Map;z!==null;)z.key!==null?k.set(z.key,z):k.set(z.index,z),z=z.sibling;return k}function h(z,k){return z=br(z,k),z.index=0,z.sibling=null,z}function d(z,k,q){return z.index=q,e?(q=z.alternate,q!==null?(q=q.index,q<k?(z.flags|=33554434,k):q):(z.flags|=33554434,k)):(z.flags|=1048576,k)}function _(z){return e&&z.alternate===null&&(z.flags|=33554434),z}function E(z,k,q,Z){return k===null||k.tag!==6?(k=v0(q,z.mode,Z),k.return=z,k):(k=h(k,q),k.return=z,k)}function D(z,k,q,Z){var ct=q.type;return ct===p?X(z,k,q.props.children,Z,q.key):k!==null&&(k.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===rt&&o5(ct)===k.type)?(k=h(k,q.props),Rl(k,q),k.return=z,k):(k=Du(q.type,q.key,q.props,null,z.mode,Z),Rl(k,q),k.return=z,k)}function U(z,k,q,Z){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=_0(q,z.mode,Z),k.return=z,k):(k=h(k,q.children||[]),k.return=z,k)}function X(z,k,q,Z,ct){return k===null||k.tag!==7?(k=ba(q,z.mode,Z,ct),k.return=z,k):(k=h(k,q),k.return=z,k)}function J(z,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=v0(""+k,z.mode,q),k.return=z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case f:return q=Du(k.type,k.key,k.props,null,z.mode,q),Rl(q,k),q.return=z,q;case m:return k=_0(k,z.mode,q),k.return=z,k;case rt:var Z=k._init;return k=Z(k._payload),J(z,k,q)}if(lt(k)||Ct(k))return k=ba(k,z.mode,q,null),k.return=z,k;if(typeof k.then=="function")return J(z,uu(k),q);if(k.$$typeof===I)return J(z,bu(z,k),q);cu(z,k)}return null}function H(z,k,q,Z){var ct=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ct!==null?null:E(z,k,""+q,Z);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case f:return q.key===ct?D(z,k,q,Z):null;case m:return q.key===ct?U(z,k,q,Z):null;case rt:return ct=q._init,q=ct(q._payload),H(z,k,q,Z)}if(lt(q)||Ct(q))return ct!==null?null:X(z,k,q,Z,null);if(typeof q.then=="function")return H(z,k,uu(q),Z);if(q.$$typeof===I)return H(z,k,bu(z,q),Z);cu(z,q)}return null}function Y(z,k,q,Z,ct){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(q)||null,E(k,z,""+Z,ct);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case f:return z=z.get(Z.key===null?q:Z.key)||null,D(k,z,Z,ct);case m:return z=z.get(Z.key===null?q:Z.key)||null,U(k,z,Z,ct);case rt:var xt=Z._init;return Z=xt(Z._payload),Y(z,k,q,Z,ct)}if(lt(Z)||Ct(Z))return z=z.get(q)||null,X(k,z,Z,ct,null);if(typeof Z.then=="function")return Y(z,k,q,uu(Z),ct);if(Z.$$typeof===I)return Y(z,k,q,bu(k,Z),ct);cu(k,Z)}return null}function ft(z,k,q,Z){for(var ct=null,xt=null,mt=k,vt=k=0,Ne=null;mt!==null&&vt<q.length;vt++){mt.index>vt?(Ne=mt,mt=null):Ne=mt.sibling;var Ft=H(z,mt,q[vt],Z);if(Ft===null){mt===null&&(mt=Ne);break}e&&mt&&Ft.alternate===null&&n(z,mt),k=d(Ft,k,vt),xt===null?ct=Ft:xt.sibling=Ft,xt=Ft,mt=Ne}if(vt===q.length)return a(z,mt),Ht&&ma(z,vt),ct;if(mt===null){for(;vt<q.length;vt++)mt=J(z,q[vt],Z),mt!==null&&(k=d(mt,k,vt),xt===null?ct=mt:xt.sibling=mt,xt=mt);return Ht&&ma(z,vt),ct}for(mt=l(mt);vt<q.length;vt++)Ne=Y(mt,z,vt,q[vt],Z),Ne!==null&&(e&&Ne.alternate!==null&&mt.delete(Ne.key===null?vt:Ne.key),k=d(Ne,k,vt),xt===null?ct=Ne:xt.sibling=Ne,xt=Ne);return e&&mt.forEach(function(Vr){return n(z,Vr)}),Ht&&ma(z,vt),ct}function Tt(z,k,q,Z){if(q==null)throw Error(s(151));for(var ct=null,xt=null,mt=k,vt=k=0,Ne=null,Ft=q.next();mt!==null&&!Ft.done;vt++,Ft=q.next()){mt.index>vt?(Ne=mt,mt=null):Ne=mt.sibling;var Vr=H(z,mt,Ft.value,Z);if(Vr===null){mt===null&&(mt=Ne);break}e&&mt&&Vr.alternate===null&&n(z,mt),k=d(Vr,k,vt),xt===null?ct=Vr:xt.sibling=Vr,xt=Vr,mt=Ne}if(Ft.done)return a(z,mt),Ht&&ma(z,vt),ct;if(mt===null){for(;!Ft.done;vt++,Ft=q.next())Ft=J(z,Ft.value,Z),Ft!==null&&(k=d(Ft,k,vt),xt===null?ct=Ft:xt.sibling=Ft,xt=Ft);return Ht&&ma(z,vt),ct}for(mt=l(mt);!Ft.done;vt++,Ft=q.next())Ft=Y(mt,z,vt,Ft.value,Z),Ft!==null&&(e&&Ft.alternate!==null&&mt.delete(Ft.key===null?vt:Ft.key),k=d(Ft,k,vt),xt===null?ct=Ft:xt.sibling=Ft,xt=Ft);return e&&mt.forEach(function(fd){return n(z,fd)}),Ht&&ma(z,vt),ct}function ue(z,k,q,Z){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case f:t:{for(var ct=q.key;k!==null;){if(k.key===ct){if(ct=q.type,ct===p){if(k.tag===7){a(z,k.sibling),Z=h(k,q.props.children),Z.return=z,z=Z;break t}}else if(k.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===rt&&o5(ct)===k.type){a(z,k.sibling),Z=h(k,q.props),Rl(Z,q),Z.return=z,z=Z;break t}a(z,k);break}else n(z,k);k=k.sibling}q.type===p?(Z=ba(q.props.children,z.mode,Z,q.key),Z.return=z,z=Z):(Z=Du(q.type,q.key,q.props,null,z.mode,Z),Rl(Z,q),Z.return=z,z=Z)}return _(z);case m:t:{for(ct=q.key;k!==null;){if(k.key===ct)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){a(z,k.sibling),Z=h(k,q.children||[]),Z.return=z,z=Z;break t}else{a(z,k);break}else n(z,k);k=k.sibling}Z=_0(q,z.mode,Z),Z.return=z,z=Z}return _(z);case rt:return ct=q._init,q=ct(q._payload),ue(z,k,q,Z)}if(lt(q))return ft(z,k,q,Z);if(Ct(q)){if(ct=Ct(q),typeof ct!="function")throw Error(s(150));return q=ct.call(q),Tt(z,k,q,Z)}if(typeof q.then=="function")return ue(z,k,uu(q),Z);if(q.$$typeof===I)return ue(z,k,bu(z,q),Z);cu(z,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(a(z,k.sibling),Z=h(k,q),Z.return=z,z=Z):(a(z,k),Z=v0(q,z.mode,Z),Z.return=z,z=Z),_(z)):a(z,k)}return function(z,k,q,Z){try{wl=0;var ct=ue(z,k,q,Z);return cs=null,ct}catch(mt){if(mt===Sl)throw mt;var xt=Vn(29,mt,null,z.mode);return xt.lanes=Z,xt.return=z,xt}finally{}}}var ga=u5(!0),c5=u5(!1),hs=jt(null),hu=jt(0);function h5(e,n){e=ji,Kt(hu,e),Kt(hs,n),ji=e|n.baseLanes}function b1(){Kt(hu,ji),Kt(hs,hs.current)}function w1(){ji=hu.current,ae(hs),ae(hu)}var Mn=jt(null),ni=null;function mr(e){var n=e.alternate;Kt(Te,Te.current&1),Kt(Mn,e),ni===null&&(n===null||hs.current!==null||n.memoizedState!==null)&&(ni=e)}function f5(e){if(e.tag===22){if(Kt(Te,Te.current),Kt(Mn,e),ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ni=e)}}else pr()}function pr(){Kt(Te,Te.current),Kt(Mn,Mn.current)}function xi(e){ae(Mn),ni===e&&(ni=null),ae(Te)}var Te=jt(0);function fu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var J7=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},t8=r.unstable_scheduleCallback,e8=r.unstable_NormalPriority,Ae={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function R1(){return{controller:new J7,data:new Map,refCount:0}}function Dl(e){e.refCount--,e.refCount===0&&t8(e8,function(){e.controller.abort()})}var Ml=null,D1=0,fs=0,ds=null;function n8(e,n){if(Ml===null){var a=Ml=[];D1=0,fs=O0(),ds={status:"pending",value:void 0,then:function(l){a.push(l)}}}return D1++,n.then(d5,d5),n}function d5(){if(--D1===0&&Ml!==null){ds!==null&&(ds.status="fulfilled");var e=Ml;Ml=null,fs=0,ds=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function i8(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var m5=A.S;A.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&n8(e,n),m5!==null&&m5(e,n)};var ya=jt(null);function M1(){var e=ya.current;return e!==null?e:Zt.pooledCache}function du(e,n){n===null?Kt(ya,ya.current):Kt(ya,n.pool)}function p5(){var e=M1();return e===null?null:{parent:Ae._currentValue,pool:e}}var gr=0,Mt=null,Yt=null,me=null,mu=!1,ms=!1,va=!1,pu=0,Il=0,ps=null,r8=0;function he(){throw Error(s(321))}function I1(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!cn(e[a],n[a]))return!1;return!0}function x1(e,n,a,l,h,d){return gr=d,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?_a:yr,va=!1,d=a(l,h),va=!1,ms&&(d=y5(n,a,l,h)),g5(e),d}function g5(e){A.H=ii;var n=Yt!==null&&Yt.next!==null;if(gr=0,me=Yt=Mt=null,mu=!1,Il=0,ps=null,n)throw Error(s(300));e===null||xe||(e=e.dependencies,e!==null&&Su(e)&&(xe=!0))}function y5(e,n,a,l){Mt=e;var h=0;do{if(ms&&(ps=null),Il=0,ms=!1,25<=h)throw Error(s(301));if(h+=1,me=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}A.H=Ca,d=n(a,l)}while(ms);return d}function a8(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?xl(n):n,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Mt.flags|=1024),n}function V1(){var e=pu!==0;return pu=0,e}function N1(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function O1(e){if(mu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}mu=!1}gr=0,me=Yt=Mt=null,ms=!1,Il=pu=0,ps=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Mt.memoizedState=me=e:me=me.next=e,me}function pe(){if(Yt===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var n=me===null?Mt.memoizedState:me.next;if(n!==null)me=n,Yt=e;else{if(e===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},me===null?Mt.memoizedState=me=e:me=me.next=e}return me}var gu;gu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function xl(e){var n=Il;return Il+=1,ps===null&&(ps=[]),e=s5(ps,e,n),n=Mt,(me===null?n.memoizedState:me.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?_a:yr),e}function yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xl(e);if(e.$$typeof===I)return He(e)}throw Error(s(438,String(e)))}function k1(e){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gu(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=gt;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function vu(e){var n=pe();return U1(n,Yt,e)}function U1(e,n,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}n.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var E=_=null,D=null,U=n,X=!1;do{var J=U.lane&-536870913;if(J!==U.lane?(zt&J)===J:(gr&J)===J){var H=U.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),J===fs&&(X=!0);else if((gr&H)===H){U=U.next,H===fs&&(X=!0);continue}else J={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(E=D=J,_=d):D=D.next=J,Mt.lanes|=H,wr|=H;J=U.action,va&&a(d,J),d=U.hasEagerState?U.eagerState:a(d,J)}else H={lane:J,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(E=D=H,_=d):D=D.next=H,Mt.lanes|=J,wr|=J;U=U.next}while(U!==null&&U!==n);if(D===null?_=d:D.next=E,!cn(d,e.memoizedState)&&(xe=!0,X&&(a=ds,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=D,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function L1(e){var n=pe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=n.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);cn(d,n.memoizedState)||(xe=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,l]}function v5(e,n,a){var l=Mt,h=pe(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!cn((Yt||h).memoizedState,a);if(_&&(h.memoizedState=a,xe=!0),h=h.queue,B1(E5.bind(null,l,h,e),[e]),h.getSnapshot!==n||_||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,gs(9,C5.bind(null,l,h,a,n),{destroy:void 0},null),Zt===null)throw Error(s(349));d||(gr&60)!==0||_5(l,n,a)}return a}function _5(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=gu(),Mt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function C5(e,n,a,l){n.value=a,n.getSnapshot=l,T5(n)&&A5(e)}function E5(e,n,a){return a(function(){T5(n)&&A5(e)})}function T5(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!cn(e,a)}catch{return!0}}function A5(e){var n=dr(e,2);n!==null&&tn(n,e,2)}function z1(e){var n=rn();if(typeof e=="function"){var a=e;if(e=a(),va){Fn(!0);try{a()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function S5(e,n,a,l){return e.baseState=a,U1(e,Yt,typeof l=="function"?l:Vi)}function s8(e,n,a,l,h){if(Eu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};A.T!==null?a(!0):d.isTransition=!1,l(d),a=n.pending,a===null?(d.next=n.pending=d,b5(n,d)):(d.next=a.next,n.pending=a.next=d)}}function b5(e,n){var a=n.action,l=n.payload,h=e.state;if(n.isTransition){var d=A.T,_={};A.T=_;try{var E=a(h,l),D=A.S;D!==null&&D(_,E),w5(e,n,E)}catch(U){P1(e,n,U)}finally{A.T=d}}else try{d=a(h,l),w5(e,n,d)}catch(U){P1(e,n,U)}}function w5(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){R5(e,n,l)},function(l){return P1(e,n,l)}):R5(e,n,a)}function R5(e,n,a){n.status="fulfilled",n.value=a,D5(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,b5(e,a)))}function P1(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,D5(n),n=n.next;while(n!==l)}e.action=null}function D5(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function M5(e,n){return n}function I5(e,n){if(Ht){var a=Zt.formState;if(a!==null){t:{var l=Mt;if(Ht){if(Ue){e:{for(var h=Ue,d=ei;h.nodeType!==8;){if(!d){h=null;break e}if(h=jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Ue=jn(h.nextSibling),l=h.data==="F!";break t}}pa(l)}l=!1}l&&(n=a[0])}}return a=rn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:M5,lastRenderedState:n},a.queue=l,a=Y5.bind(null,Mt,l),l.dispatch=a,l=z1(!1),d=G1.bind(null,Mt,!1,l.queue),l=rn(),h={state:n,dispatch:null,action:e,pending:null},l.queue=h,a=s8.bind(null,Mt,h,d,a),h.dispatch=a,l.memoizedState=e,[n,a,!1]}function x5(e){var n=pe();return V5(n,Yt,e)}function V5(e,n,a){n=U1(e,n,M5)[0],e=vu(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?xl(n):n;var l=pe(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Mt.flags|=2048,gs(9,l8.bind(null,h,a),{destroy:void 0},null)),[n,d,e]}function l8(e,n){e.action=n}function N5(e){var n=pe(),a=Yt;if(a!==null)return V5(n,a,e);pe(),n=n.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function gs(e,n,a,l){return e={tag:e,create:n,inst:a,deps:l,next:null},n=Mt.updateQueue,n===null&&(n=gu(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function O5(){return pe().memoizedState}function _u(e,n,a,l){var h=rn();Mt.flags|=e,h.memoizedState=gs(1|n,a,{destroy:void 0},l===void 0?null:l)}function Cu(e,n,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&I1(l,Yt.memoizedState.deps)?h.memoizedState=gs(n,a,d,l):(Mt.flags|=e,h.memoizedState=gs(1|n,a,d,l))}function k5(e,n){_u(8390656,8,e,n)}function B1(e,n){Cu(2048,8,e,n)}function U5(e,n){return Cu(4,2,e,n)}function L5(e,n){return Cu(4,4,e,n)}function z5(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function P5(e,n,a){a=a!=null?a.concat([e]):null,Cu(4,4,z5.bind(null,n,e),a)}function j1(){}function B5(e,n){var a=pe();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&I1(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function j5(e,n){var a=pe();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&I1(n,l[1]))return l[0];if(l=e(),va){Fn(!0);try{e()}finally{Fn(!1)}}return a.memoizedState=[l,n],l}function q1(e,n,a){return a===void 0||(gr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=H3(),Mt.lanes|=e,wr|=e,a)}function q5(e,n,a,l){return cn(a,n)?a:hs.current!==null?(e=q1(e,a,l),cn(e,n)||(xe=!0),e):(gr&42)===0?(xe=!0,e.memoizedState=a):(e=H3(),Mt.lanes|=e,wr|=e,n)}function H5(e,n,a,l,h){var d=ot.p;ot.p=d!==0&&8>d?d:8;var _=A.T,E={};A.T=E,G1(e,!1,n,a);try{var D=h(),U=A.S;if(U!==null&&U(E,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var X=i8(D,l);Vl(e,n,X,mn(e))}else Vl(e,n,l,mn(e))}catch(J){Vl(e,n,{then:function(){},status:"rejected",reason:J},mn())}finally{ot.p=d,A.T=_}}function o8(){}function H1(e,n,a,l){if(e.tag!==5)throw Error(s(476));var h=F5(e).queue;H5(e,h,n,Dt,a===null?o8:function(){return G5(e),a(l)})}function F5(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Dt,baseState:Dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function G5(e){var n=F5(e).next.queue;Vl(e,n,{},mn())}function F1(){return He(Wl)}function Q5(){return pe().memoizedState}function K5(){return pe().memoizedState}function u8(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mn();e=Cr(a);var l=Er(n,e,a);l!==null&&(tn(l,n,a),kl(l,n,a)),n={cache:R1()},e.payload=n;return}n=n.return}}function c8(e,n,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Eu(e)?$5(n,a):(a=C1(e,n,a,l),a!==null&&(tn(a,e,l),X5(a,n,l)))}function Y5(e,n,a){var l=mn();Vl(e,n,a,l)}function Vl(e,n,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))$5(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,cn(E,_))return ru(e,n,h,0),Zt===null&&iu(),!1}catch{}finally{}if(a=C1(e,n,h,l),a!==null)return tn(a,e,l),X5(a,n,l),!0}return!1}function G1(e,n,a,l){if(l={lane:2,revertLane:O0(),action:l,hasEagerState:!1,eagerState:null,next:null},Eu(e)){if(n)throw Error(s(479))}else n=C1(e,a,l,2),n!==null&&tn(n,e,2)}function Eu(e){var n=e.alternate;return e===Mt||n!==null&&n===Mt}function $5(e,n){ms=mu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function X5(e,n,a){if((a&4194176)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ir(e,a)}}var ii={readContext:He,use:yu,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he};ii.useCacheRefresh=he,ii.useMemoCache=he,ii.useHostTransitionStatus=he,ii.useFormState=he,ii.useActionState=he,ii.useOptimistic=he;var _a={readContext:He,use:yu,useCallback:function(e,n){return rn().memoizedState=[e,n===void 0?null:n],e},useContext:He,useEffect:k5,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_u(4194308,4,z5.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _u(4194308,4,e,n)},useInsertionEffect:function(e,n){_u(4,2,e,n)},useMemo:function(e,n){var a=rn();n=n===void 0?null:n;var l=e();if(va){Fn(!0);try{e()}finally{Fn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=rn();if(a!==void 0){var h=a(n);if(va){Fn(!0);try{a(n)}finally{Fn(!1)}}}else h=n;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=c8.bind(null,Mt,e),[l.memoizedState,e]},useRef:function(e){var n=rn();return e={current:e},n.memoizedState=e},useState:function(e){e=z1(e);var n=e.queue,a=Y5.bind(null,Mt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:j1,useDeferredValue:function(e,n){var a=rn();return q1(a,e,n)},useTransition:function(){var e=z1(!1);return e=H5.bind(null,Mt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Mt,h=rn();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(zt&60)!==0||_5(l,n,a)}h.memoizedState=a;var d={value:a,getSnapshot:n};return h.queue=d,k5(E5.bind(null,l,d,e),[e]),l.flags|=2048,gs(9,C5.bind(null,l,d,a,n),{destroy:void 0},null),a},useId:function(){var e=rn(),n=Zt.identifierPrefix;if(Ht){var a=Ii,l=Mi;a=(l&~(1<<32-Xe(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=pu++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=r8++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return rn().memoizedState=u8.bind(null,Mt)}};_a.useMemoCache=k1,_a.useHostTransitionStatus=F1,_a.useFormState=I5,_a.useActionState=I5,_a.useOptimistic=function(e){var n=rn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=G1.bind(null,Mt,!0,a),a.dispatch=n,[e,n]};var yr={readContext:He,use:yu,useCallback:B5,useContext:He,useEffect:B1,useImperativeHandle:P5,useInsertionEffect:U5,useLayoutEffect:L5,useMemo:j5,useReducer:vu,useRef:O5,useState:function(){return vu(Vi)},useDebugValue:j1,useDeferredValue:function(e,n){var a=pe();return q5(a,Yt.memoizedState,e,n)},useTransition:function(){var e=vu(Vi)[0],n=pe().memoizedState;return[typeof e=="boolean"?e:xl(e),n]},useSyncExternalStore:v5,useId:Q5};yr.useCacheRefresh=K5,yr.useMemoCache=k1,yr.useHostTransitionStatus=F1,yr.useFormState=x5,yr.useActionState=x5,yr.useOptimistic=function(e,n){var a=pe();return S5(a,Yt,e,n)};var Ca={readContext:He,use:yu,useCallback:B5,useContext:He,useEffect:B1,useImperativeHandle:P5,useInsertionEffect:U5,useLayoutEffect:L5,useMemo:j5,useReducer:L1,useRef:O5,useState:function(){return L1(Vi)},useDebugValue:j1,useDeferredValue:function(e,n){var a=pe();return Yt===null?q1(a,e,n):q5(a,Yt.memoizedState,e,n)},useTransition:function(){var e=L1(Vi)[0],n=pe().memoizedState;return[typeof e=="boolean"?e:xl(e),n]},useSyncExternalStore:v5,useId:Q5};Ca.useCacheRefresh=K5,Ca.useMemoCache=k1,Ca.useHostTransitionStatus=F1,Ca.useFormState=N5,Ca.useActionState=N5,Ca.useOptimistic=function(e,n){var a=pe();return Yt!==null?S5(a,Yt,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Q1(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:w({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var K1={isMounted:function(e){return(e=e._reactInternals)?st(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var l=mn(),h=Cr(l);h.payload=n,a!=null&&(h.callback=a),n=Er(e,h,l),n!==null&&(tn(n,e,l),kl(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=mn(),h=Cr(l);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Er(e,h,l),n!==null&&(tn(n,e,l),kl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mn(),l=Cr(a);l.tag=2,n!=null&&(l.callback=n),n=Er(e,l,a),n!==null&&(tn(n,e,a),kl(n,e,a))}};function Z5(e,n,a,l,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):n.prototype&&n.prototype.isPureReactComponent?!_l(a,l)||!_l(h,d):!0}function W5(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&K1.enqueueReplaceState(n,n.state,null)}function Ea(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=w({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function J5(e){Tu(e)}function t3(e){console.error(e)}function e3(e){Tu(e)}function Au(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function n3(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Y1(e,n,a){return a=Cr(a),a.tag=3,a.payload={element:null},a.callback=function(){Au(e,n)},a}function i3(e){return e=Cr(e),e.tag=3,e}function r3(e,n,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){n3(n,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){n3(n,a,l),typeof h!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function h8(e,n,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ol(n,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return ni===null?M0():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===S1?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),x0(e,l,h)),!1;case 22:return a.flags|=65536,l===S1?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),x0(e,l,h)),!1}throw Error(s(435,a.tag))}return x0(e,l,h),M0(),!1}if(Ht)return n=Mn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,l!==A1&&(e=Error(s(422),{cause:l}),Al(wn(e,a)))):(l!==A1&&(n=Error(s(423),{cause:l}),Al(wn(n,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=Y1(e.stateNode,l,h),u0(e,h),oe!==4&&(oe=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),Hl===null?Hl=[d]:Hl.push(d),oe!==4&&(oe=2),n===null)return!0;l=wn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Y1(a.stateNode,l,e),u0(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Rr===null||!Rr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=i3(h),r3(h,e,a,l),u0(a,h),!1}a=a.return}while(a!==null);return!1}var a3=Error(s(461)),xe=!1;function Le(e,n,a,l){n.child=e===null?c5(n,null,a,l):ga(n,e.child,a,l)}function s3(e,n,a,l,h){a=a.render;var d=n.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Aa(n),l=x1(e,n,a,_,d,h),E=V1(),e!==null&&!xe?(N1(e,n,h),Ni(e,n,h)):(Ht&&E&&E1(n),n.flags|=1,Le(e,n,l,h),n.child)}function l3(e,n,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!y0(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,o3(e,n,d,l,h)):(e=Du(a.type,null,l,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!i0(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:_l,a(_,l)&&e.ref===n.ref)return Ni(e,n,h)}return n.flags|=1,e=br(d,l),e.ref=n.ref,e.return=n,n.child=e}function o3(e,n,a,l,h){if(e!==null){var d=e.memoizedProps;if(_l(d,l)&&e.ref===n.ref)if(xe=!1,n.pendingProps=l=d,i0(e,h))(e.flags&131072)!==0&&(xe=!0);else return n.lanes=e.lanes,Ni(e,n,h)}return $1(e,n,a,l,h)}function u3(e,n,a){var l=n.pendingProps,h=l.children,d=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(Nl(e,n),l.mode==="hidden"||d){if((n.flags&128)!==0){if(l=_!==null?_.baseLanes|a:a,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~l}else n.childLanes=0,n.child=null;return c3(e,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&du(n,_!==null?_.cachePool:null),_!==null?h5(n,_):b1(),f5(n);else return n.lanes=n.childLanes=536870912,c3(e,n,_!==null?_.baseLanes|a:a,a)}else _!==null?(du(n,_.cachePool),h5(n,_),pr(),n.memoizedState=null):(e!==null&&du(n,null),b1(),pr());return Le(e,n,h,a),n.child}function c3(e,n,a,l){var h=M1();return h=h===null?null:{parent:Ae._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&du(n,null),b1(),f5(n),e!==null&&Ol(e,n,l,!0),null}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function $1(e,n,a,l,h){return Aa(n),a=x1(e,n,a,l,void 0,h),l=V1(),e!==null&&!xe?(N1(e,n,h),Ni(e,n,h)):(Ht&&l&&E1(n),n.flags|=1,Le(e,n,a,h),n.child)}function h3(e,n,a,l,h,d){return Aa(n),n.updateQueue=null,a=y5(n,l,a,h),g5(e),l=V1(),e!==null&&!xe?(N1(e,n,d),Ni(e,n,d)):(Ht&&l&&E1(n),n.flags|=1,Le(e,n,a,d),n.child)}function f3(e,n,a,l,h){if(Aa(n),n.stateNode===null){var d=ls,_=a.contextType;typeof _=="object"&&_!==null&&(d=He(_)),d=new a(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=K1,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},l0(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?He(_):ls,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Q1(n,a,_,l),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&K1.enqueueReplaceState(d,d.state,null),Ll(n,l,d,h),Ul(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,D=Ea(a,E);d.props=D;var U=d.context,X=a.contextType;_=ls,typeof X=="object"&&X!==null&&(_=He(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||U!==_)&&W5(n,d,l,_),_r=!1;var H=n.memoizedState;d.state=H,Ll(n,l,d,h),Ul(),U=n.memoizedState,E||H!==U||_r?(typeof J=="function"&&(Q1(n,a,J,l),U=n.memoizedState),(D=_r||Z5(n,a,D,l,H,U,_))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=U),d.props=l,d.state=U,d.context=_,l=D):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,o0(e,n),_=n.memoizedProps,X=Ea(a,_),d.props=X,J=n.pendingProps,H=d.context,U=a.contextType,D=ls,typeof U=="object"&&U!==null&&(D=He(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||H!==D)&&W5(n,d,l,D),_r=!1,H=n.memoizedState,d.state=H,Ll(n,l,d,h),Ul();var Y=n.memoizedState;_!==J||H!==Y||_r||e!==null&&e.dependencies!==null&&Su(e.dependencies)?(typeof E=="function"&&(Q1(n,a,E,l),Y=n.memoizedState),(X=_r||Z5(n,a,X,l,H,Y,D)||e!==null&&e.dependencies!==null&&Su(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Y,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Y,D)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Y),d.props=l,d.state=Y,d.context=D,l=X):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),l=!1)}return d=l,Nl(e,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&l?(n.child=ga(n,e.child,null,h),n.child=ga(n,null,a,h)):Le(e,n,a,h),n.memoizedState=d.state,e=n.child):e=Ni(e,n,h),e}function d3(e,n,a,l){return Tl(),n.flags|=256,Le(e,n,a,l),n.child}var X1={dehydrated:null,treeContext:null,retryLane:0};function Z1(e){return{baseLanes:e,cachePool:p5()}}function W1(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Nn),e}function m3(e,n,a){var l=n.pendingProps,h=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ht){if(h?mr(n):pr(),Ht){var E=Ue,D;if(D=E){t:{for(D=E,E=ei;D.nodeType!==8;){if(!E){E=null;break t}if(D=jn(D.nextSibling),D===null){E=null;break t}}E=D}E!==null?(n.memoizedState={dehydrated:E,treeContext:da!==null?{id:Mi,overflow:Ii}:null,retryLane:536870912},D=Vn(18,null,null,0),D.stateNode=E,D.return=n,n.child=D,Je=n,Ue=null,D=!0):D=!1}D||pa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;xi(n)}return E=l.children,l=l.fallback,h?(pr(),h=n.mode,E=t0({mode:"hidden",children:E},h),l=ba(l,h,a,null),E.return=n,l.return=n,E.sibling=l,n.child=E,h=n.child,h.memoizedState=Z1(a),h.childLanes=W1(e,_,a),n.memoizedState=X1,l):(mr(n),J1(n,E))}if(D=e.memoizedState,D!==null&&(E=D.dehydrated,E!==null)){if(d)n.flags&256?(mr(n),n.flags&=-257,n=e0(e,n,a)):n.memoizedState!==null?(pr(),n.child=e.child,n.flags|=128,n=null):(pr(),h=l.fallback,E=n.mode,l=t0({mode:"visible",children:l.children},E),h=ba(h,E,a,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,ga(n,e.child,null,a),l=n.child,l.memoizedState=Z1(a),l.childLanes=W1(e,_,a),n.memoizedState=X1,n=h);else if(mr(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var U=_.dgst;_=U,l=Error(s(419)),l.stack="",l.digest=_,Al({value:l,source:null,stack:null}),n=e0(e,n,a)}else if(xe||Ol(e,n,a,!1),_=(a&e.childLanes)!==0,xe||_){if(_=Zt,_!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==D.retryLane)throw D.retryLane=l,dr(e,l),tn(_,e,l),a3}E.data==="$?"||M0(),n=e0(e,n,a)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=w8.bind(null,e),E._reactRetry=n,n=null):(e=D.treeContext,Ue=jn(E.nextSibling),Je=n,Ht=!0,Pn=null,ei=!1,e!==null&&(Rn[Dn++]=Mi,Rn[Dn++]=Ii,Rn[Dn++]=da,Mi=e.id,Ii=e.overflow,da=n),n=J1(n,l.children),n.flags|=4096);return n}return h?(pr(),h=l.fallback,E=n.mode,D=e.child,U=D.sibling,l=br(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&31457280,U!==null?h=br(U,h):(h=ba(h,E,a,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,E=e.child.memoizedState,E===null?E=Z1(a):(D=E.cachePool,D!==null?(U=Ae._currentValue,D=D.parent!==U?{parent:U,pool:U}:D):D=p5(),E={baseLanes:E.baseLanes|a,cachePool:D}),h.memoizedState=E,h.childLanes=W1(e,_,a),n.memoizedState=X1,l):(mr(n),a=e.child,e=a.sibling,a=br(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function J1(e,n){return n=t0({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function t0(e,n){return B3(e,n,0,null)}function e0(e,n,a){return ga(n,e.child,null,a),e=J1(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function p3(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),a0(e.return,n,a)}function n0(e,n,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function g3(e,n,a){var l=n.pendingProps,h=l.revealOrder,d=l.tail;if(Le(e,n,l.children,a),l=Te.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p3(e,a,n);else if(e.tag===19)p3(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Kt(Te,l),h){case"forwards":for(a=n.child,h=null;a!==null;)e=a.alternate,e!==null&&fu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),n0(n,!1,h,a,d);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&fu(e)===null){n.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}n0(n,!0,a,null,d);break;case"together":n0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ni(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ol(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=br(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=br(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function i0(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Su(e)))}function f8(e,n,a){switch(n.tag){case 3:Zi(n,n.stateNode.containerInfo),vr(n,Ae,e.memoizedState.cache),Tl();break;case 27:case 5:Ws(n);break;case 4:Zi(n,n.stateNode.containerInfo);break;case 10:vr(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(mr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?m3(e,n,a):(mr(n),e=Ni(e,n,a),e!==null?e.sibling:null);mr(n);break;case 19:var h=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ol(e,n,a,!1),l=(a&n.childLanes)!==0),h){if(l)return g3(e,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(Te,Te.current),l)break;return null;case 22:case 23:return n.lanes=0,u3(e,n,a);case 24:vr(n,Ae,e.memoizedState.cache)}return Ni(e,n,a)}function y3(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xe=!0;else{if(!i0(e,a)&&(n.flags&128)===0)return xe=!1,f8(e,n,a);xe=(e.flags&131072)!==0}else xe=!1,Ht&&(n.flags&1048576)!==0&&e5(n,lu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var l=n.elementType,h=l._init;if(l=h(l._payload),n.type=l,typeof l=="function")y0(l)?(e=Ea(l,e),n.tag=1,n=f3(null,n,l,e,a)):(n.tag=0,n=$1(null,n,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===N){n.tag=11,n=s3(null,n,l,e,a);break t}else if(h===$){n.tag=14,n=l3(null,n,l,e,a);break t}}throw n=b(l)||l,Error(s(306,n,""))}}return n;case 0:return $1(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,h=Ea(l,n.pendingProps),f3(e,n,l,h,a);case 3:t:{if(Zi(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;h=n.memoizedState,l=h.element,o0(e,n),Ll(n,d,null,a);var _=n.memoizedState;if(d=_.cache,vr(n,Ae,d),d!==h.cache&&s0(n,[Ae],a,!0),Ul(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=d3(e,n,d,a);break t}else if(d!==l){l=wn(Error(s(424)),n),Al(l),n=d3(e,n,d,a);break t}else for(Ue=jn(n.stateNode.containerInfo.firstChild),Je=n,Ht=!0,Pn=null,ei=!0,a=c5(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Tl(),d===l){n=Ni(e,n,a);break t}Le(e,n,d,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=C6(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ht||(a=n.type,e=n.pendingProps,l=Bu(vn.current).createElement(a),l[De]=n,l[_e]=e,ze(l,a,e),ee(l),n.stateNode=l):n.memoizedState=C6(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ws(n),e===null&&Ht&&(l=n.stateNode=y6(n.type,n.pendingProps,vn.current),Je=n,ei=!0,Ue=jn(l.firstChild)),l=n.pendingProps.children,e!==null||Ht?Le(e,n,l,a):n.child=ga(n,null,l,a),Nl(e,n),n.child;case 5:return e===null&&Ht&&((h=l=Ue)&&(l=q8(l,n.type,n.pendingProps,ei),l!==null?(n.stateNode=l,Je=n,Ue=jn(l.firstChild),ei=!1,h=!0):h=!1),h||pa(n)),Ws(n),h=n.type,d=n.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,H0(h,d)?l=null:_!==null&&H0(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=x1(e,n,a8,null,null,a),Wl._currentValue=h),Nl(e,n),Le(e,n,l,a),n.child;case 6:return e===null&&Ht&&((e=a=Ue)&&(a=H8(a,n.pendingProps,ei),a!==null?(n.stateNode=a,Je=n,Ue=null,e=!0):e=!1),e||pa(n)),null;case 13:return m3(e,n,a);case 4:return Zi(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ga(n,null,l,a):Le(e,n,l,a),n.child;case 11:return s3(e,n,n.type,n.pendingProps,a);case 7:return Le(e,n,n.pendingProps,a),n.child;case 8:return Le(e,n,n.pendingProps.children,a),n.child;case 12:return Le(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,vr(n,n.type,l.value),Le(e,n,l.children,a),n.child;case 9:return h=n.type._context,l=n.pendingProps.children,Aa(n),h=He(h),l=l(h),n.flags|=1,Le(e,n,l,a),n.child;case 14:return l3(e,n,n.type,n.pendingProps,a);case 15:return o3(e,n,n.type,n.pendingProps,a);case 19:return g3(e,n,a);case 22:return u3(e,n,a);case 24:return Aa(n),l=He(Ae),e===null?(h=M1(),h===null&&(h=Zt,d=R1(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),n.memoizedState={parent:l,cache:h},l0(n),vr(n,Ae,h)):((e.lanes&a)!==0&&(o0(e,n),Ll(n,null,null,a),Ul()),h=e.memoizedState,d=n.memoizedState,h.parent!==l?(h={parent:l,cache:l},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),vr(n,Ae,l)):(l=d.cache,vr(n,Ae,l),l!==h.cache&&s0(n,[Ae],a,!0))),Le(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var r0=jt(null),Ta=null,Oi=null;function vr(e,n,a){Kt(r0,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=r0.current,ae(r0)}function a0(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function s0(e,n,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var D=0;D<n.length;D++)if(E.context===n[D]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),a0(d.return,a,e),l||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),a0(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Ol(e,n,a,l){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;cn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===Xi.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Wl):e=[Wl])}h=h.return}e!==null&&s0(n,e,a,l),n.flags|=262144}function Su(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){Ta=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return v3(Ta,e)}function bu(e,n){return Ta===null&&Aa(e),v3(e,n)}function v3(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(e===null)throw Error(s(308));Oi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Oi=Oi.next=n;return a}var _r=!1;function l0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function o0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Er(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ie&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,n=au(e),J2(e,null,a),n}return ru(e,l,n,a),au(e)}function kl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,ir(e,a)}}function u0(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=n:d=d.next=n}else h=d=n;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var c0=!1;function Ul(){if(c0){var e=ds;if(e!==null)throw e}}function Ll(e,n,a,l){c0=!1;var h=e.updateQueue;_r=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var D=E,U=D.next;D.next=null,_===null?d=U:_.next=U,_=D;var X=e.alternate;X!==null&&(X=X.updateQueue,E=X.lastBaseUpdate,E!==_&&(E===null?X.firstBaseUpdate=U:E.next=U,X.lastBaseUpdate=D))}if(d!==null){var J=h.baseState;_=0,X=U=D=null,E=d;do{var H=E.lane&-536870913,Y=H!==E.lane;if(Y?(zt&H)===H:(l&H)===H){H!==0&&H===fs&&(c0=!0),X!==null&&(X=X.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ft=e,Tt=E;H=n;var ue=a;switch(Tt.tag){case 1:if(ft=Tt.payload,typeof ft=="function"){J=ft.call(ue,J,H);break t}J=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=Tt.payload,H=typeof ft=="function"?ft.call(ue,J,H):ft,H==null)break t;J=w({},J,H);break t;case 2:_r=!0}}H=E.callback,H!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[H]:Y.push(H))}else Y={lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},X===null?(U=X=Y,D=J):X=X.next=Y,_|=H;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;Y=E,E=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(D=J),h.baseState=D,h.firstBaseUpdate=U,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),wr|=_,e.lanes=_,e.memoizedState=J}}function _3(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function C3(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_3(a[e],n)}function zl(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(E){Xt(n,n.return,E)}}function Tr(e,n,a){try{var l=n.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var D=a;try{E()}catch(U){Xt(h,D,U)}}}l=l.next}while(l!==d)}}catch(U){Xt(n,n.return,U)}}function E3(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{C3(n,a)}catch(l){Xt(e,e.return,l)}}}function T3(e,n,a){a.props=Ea(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Xt(e,n,l)}}function Sa(e,n){try{var a=e.ref;if(a!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Xt(e,n,d)}}function hn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xt(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,n,h)}else a.current=null}function A3(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function S3(e,n,a){try{var l=e.stateNode;L8(l,e.type,a,n),l[_e]=n}catch(h){Xt(e,e.return,h)}}function b3(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function h0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||b3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function f0(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pu));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(f0(e,n,a),e=e.sibling;e!==null;)f0(e,n,a),e=e.sibling}function wu(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(wu(e,n,a),e=e.sibling;e!==null;)wu(e,n,a),e=e.sibling}var Ui=!1,le=!1,d0=!1,w3=typeof WeakSet=="function"?WeakSet:Set,Ve=null,R3=!1;function d8(e,n){if(e=e.containerInfo,j0=Qu,e=F2(e),p1(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,D=-1,U=0,X=0,J=e,H=null;e:for(;;){for(var Y;J!==a||h!==0&&J.nodeType!==3||(E=_+h),J!==d||l!==0&&J.nodeType!==3||(D=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(Y=J.firstChild)!==null;)H=J,J=Y;for(;;){if(J===e)break e;if(H===a&&++U===h&&(E=_),H===d&&++X===l&&(D=_),(Y=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=Y}a=E===-1||D===-1?null:{start:E,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(q0={focusedElem:e,selectionRange:a},Qu=!1,Ve=n;Ve!==null;)if(n=Ve,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ve=e;else for(;Ve!==null;){switch(n=Ve,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ft=Ea(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(ft,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Tt){Xt(a,a.return,Tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Q0(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Q0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ve=e;break}Ve=n.return}return ft=R3,R3=!1,ft}function D3(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a),l&4&&zl(5,a);break;case 1:if(zi(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){Xt(a,a.return,E)}else{var h=Ea(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xt(a,a.return,E)}}l&64&&E3(a),l&512&&Sa(a,a.return);break;case 3:if(zi(e,a),l&64&&(l=a.updateQueue,l!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{C3(l,e)}catch(E){Xt(a,a.return,E)}}break;case 26:zi(e,a),l&512&&Sa(a,a.return);break;case 27:case 5:zi(e,a),n===null&&l&4&&A3(a),l&512&&Sa(a,a.return);break;case 12:zi(e,a);break;case 13:zi(e,a),l&4&&x3(e,a);break;case 22:if(h=a.memoizedState!==null||Ui,!h){n=n!==null&&n.memoizedState!==null||le;var d=Ui,_=le;Ui=h,(le=n)&&!_?Ar(e,a,(a.subtreeFlags&8772)!==0):zi(e,a),Ui=d,le=_}l&512&&(a.memoizedProps.mode==="manual"?Sa(a,a.return):hn(a,a.return));break;default:zi(e,a)}}function M3(e){var n=e.alternate;n!==null&&(e.alternate=null,M3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ta(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,fn=!1;function Li(e,n,a){for(a=a.child;a!==null;)I3(e,n,a),a=a.sibling}function I3(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Wi,a)}catch{}switch(a.tag){case 26:le||hn(a,n),Li(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:le||hn(a,n);var l=ge,h=fn;for(ge=a.stateNode,Li(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ta(a),ge=l,fn=h;break;case 5:le||hn(a,n);case 6:h=ge;var d=fn;if(ge=null,Li(e,n,a),ge=h,fn=d,ge!==null)if(fn)try{e=ge,l=a.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(_){Xt(a,n,_)}else try{ge.removeChild(a.stateNode)}catch(_){Xt(a,n,_)}break;case 18:ge!==null&&(fn?(n=ge,a=a.stateNode,n.nodeType===8?G0(n.parentNode,a):n.nodeType===1&&G0(n,a),no(n)):G0(ge,a.stateNode));break;case 4:l=ge,h=fn,ge=a.stateNode.containerInfo,fn=!0,Li(e,n,a),ge=l,fn=h;break;case 0:case 11:case 14:case 15:le||Tr(2,a,n),le||Tr(4,a,n),Li(e,n,a);break;case 1:le||(hn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&T3(a,n,l)),Li(e,n,a);break;case 21:Li(e,n,a);break;case 22:le||hn(a,n),le=(l=le)||a.memoizedState!==null,Li(e,n,a),le=l;break;default:Li(e,n,a)}}function x3(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{no(e)}catch(a){Xt(n,n.return,a)}}function m8(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new w3),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new w3),n;default:throw Error(s(435,e.tag))}}function m0(e,n){var a=m8(e);n.forEach(function(l){var h=R8.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function In(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:ge=E.stateNode,fn=!1;break t;case 3:ge=E.stateNode.containerInfo,fn=!0;break t;case 4:ge=E.stateNode.containerInfo,fn=!0;break t}E=E.return}if(ge===null)throw Error(s(160));I3(d,_,h),ge=null,fn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)V3(n,e),n=n.sibling}var Bn=null;function V3(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),xn(e),l&4&&(Tr(3,e,e.return),zl(3,e),Tr(5,e,e.return));break;case 1:In(n,e),xn(e),l&512&&(le||a===null||hn(a,a.return)),l&64&&Ui&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(In(n,e),xn(e),l&512&&(le||a===null||hn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ar]||d[De]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),ze(d,l,a),d[De]=e,ee(d),l=d;break t;case"link":var _=A6("link","href",h).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;case"meta":if(_=A6("meta","content",h).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[De]=e,ee(d),l=d}e.stateNode=l}else S6(h,e.type,e.stateNode);else e.stateNode=T6(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?S6(h,e.type,e.stateNode):T6(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&S3(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var D=h.firstChild;D;){var U=D.nextSibling,X=D.nodeName;D[ar]||X==="HEAD"||X==="BODY"||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&D.rel.toLowerCase()==="stylesheet"||h.removeChild(D),D=U}for(var J=e.type,H=h.attributes;H.length;)h.removeAttributeNode(H[0]);ze(h,J,d),h[De]=e,h[_e]=d}catch(ft){Xt(e,e.return,ft)}}case 5:if(In(n,e),xn(e),l&512&&(le||a===null||hn(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(ft){Xt(e,e.return,ft)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,S3(e,h,a!==null?a.memoizedProps:h)),l&1024&&(d0=!0);break;case 6:if(In(n,e),xn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ft){Xt(e,e.return,ft)}}break;case 3:if(Hu=null,h=Bn,Bn=ju(n.containerInfo),In(n,e),Bn=h,xn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{no(n.containerInfo)}catch(ft){Xt(e,e.return,ft)}d0&&(d0=!1,N3(e));break;case 4:l=Bn,Bn=ju(e.stateNode.containerInfo),In(n,e),xn(e),Bn=l;break;case 12:In(n,e),xn(e);break;case 13:In(n,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(A0=en()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,m0(e,l)));break;case 22:if(l&512&&(le||a===null||hn(a,a.return)),D=e.memoizedState!==null,U=a!==null&&a.memoizedState!==null,X=Ui,J=le,Ui=X||D,le=J||U,In(n,e),le=J,Ui=X,xn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,l&8192&&(n._visibility=D?n._visibility&-2:n._visibility|1,D&&(n=Ui||le,a===null||U||n||ys(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){U=a=n;try{if(h=U.stateNode,D)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=U.stateNode,E=U.memoizedProps.style;var Y=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(ft){Xt(U,U.return,ft)}}}else if(n.tag===6){if(a===null){U=n;try{U.stateNode.nodeValue=D?"":U.memoizedProps}catch(ft){Xt(U,U.return,ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,m0(e,a))));break;case 19:In(n,e),xn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,m0(e,l)));break;case 21:break;default:In(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(b3(a)){var l=a;break t}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=h0(e);wu(e,d,h);break;case 5:var _=l.stateNode;l.flags&32&&(En(_,""),l.flags&=-33);var E=h0(e);wu(e,E,_);break;case 3:case 4:var D=l.stateNode.containerInfo,U=h0(e);f0(e,U,D);break;default:throw Error(s(161))}}}catch(X){Xt(e,e.return,X)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function N3(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;N3(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)D3(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Tr(4,n,n.return),ys(n);break;case 1:hn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&T3(n,n.return,a),ys(n);break;case 26:case 27:case 5:hn(n,n.return),ys(n);break;case 22:hn(n,n.return),n.memoizedState===null&&ys(n);break;default:ys(n)}e=e.sibling}}function Ar(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,h=e,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:Ar(h,d,a),zl(4,d);break;case 1:if(Ar(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Xt(l,l.return,U)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)_3(D[h],E)}catch(U){Xt(l,l.return,U)}}a&&_&64&&E3(d),Sa(d,d.return);break;case 26:case 27:case 5:Ar(h,d,a),a&&l===null&&_&4&&A3(d),Sa(d,d.return);break;case 12:Ar(h,d,a);break;case 13:Ar(h,d,a),a&&_&4&&x3(h,d);break;case 22:d.memoizedState===null&&Ar(h,d,a),Sa(d,d.return);break;default:Ar(h,d,a)}n=n.sibling}}function p0(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Dl(a))}function g0(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dl(e))}function Sr(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O3(e,n,a,l),n=n.sibling}function O3(e,n,a,l){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Sr(e,n,a,l),h&2048&&zl(9,n);break;case 3:Sr(e,n,a,l),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Dl(e)));break;case 12:if(h&2048){Sr(e,n,a,l),e=n.stateNode;try{var d=n.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){Xt(n,n.return,D)}}else Sr(e,n,a,l);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Sr(e,n,a,l):Pl(e,n):d._visibility&4?Sr(e,n,a,l):(d._visibility|=4,vs(e,n,a,l,(n.subtreeFlags&10256)!==0)),h&2048&&p0(n.alternate,n);break;case 24:Sr(e,n,a,l),h&2048&&g0(n.alternate,n);break;default:Sr(e,n,a,l)}}function vs(e,n,a,l,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,_=n,E=a,D=l,U=_.flags;switch(_.tag){case 0:case 11:case 15:vs(d,_,E,D,h),zl(8,_);break;case 23:break;case 22:var X=_.stateNode;_.memoizedState!==null?X._visibility&4?vs(d,_,E,D,h):Pl(d,_):(X._visibility|=4,vs(d,_,E,D,h)),h&&U&2048&&p0(_.alternate,_);break;case 24:vs(d,_,E,D,h),h&&U&2048&&g0(_.alternate,_);break;default:vs(d,_,E,D,h)}n=n.sibling}}function Pl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,h=l.flags;switch(l.tag){case 22:Pl(a,l),h&2048&&p0(l.alternate,l);break;case 24:Pl(a,l),h&2048&&g0(l.alternate,l);break;default:Pl(a,l)}n=n.sibling}}var Bl=8192;function _s(e){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)k3(e),e=e.sibling}function k3(e){switch(e.tag){case 26:_s(e),e.flags&Bl&&e.memoizedState!==null&&nd(Bn,e.memoizedState,e.memoizedProps);break;case 5:_s(e);break;case 3:case 4:var n=Bn;Bn=ju(e.stateNode.containerInfo),_s(e),Bn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bl,Bl=16777216,_s(e),Bl=n):_s(e));break;default:_s(e)}}function U3(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Ve=l,z3(l,e)}U3(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L3(e),e=e.sibling}function L3(e){switch(e.tag){case 0:case 11:case 15:jl(e),e.flags&2048&&Tr(9,e,e.return);break;case 3:jl(e);break;case 12:jl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Ru(e)):jl(e);break;default:jl(e)}}function Ru(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Ve=l,z3(l,e)}U3(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Tr(8,n,n.return),Ru(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Ru(n));break;default:Ru(n)}e=e.sibling}}function z3(e,n){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Dl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else t:for(a=e;Ve!==null;){l=Ve;var h=l.sibling,d=l.return;if(M3(l),l===a){Ve=null;break t}if(h!==null){h.return=d,Ve=h;break t}Ve=d}}}function p8(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,n,a,l){return new p8(e,n,a,l)}function y0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function br(e,n){var a=e.alternate;return a===null?(a=Vn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function P3(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Du(e,n,a,l,h,d){var _=0;if(l=e,typeof e=="function")y0(e)&&(_=1);else if(typeof e=="string")_=td(e,a,$e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ba(a.children,h,d,n);case y:_=8,h|=24;break;case C:return e=Vn(12,a,n,h|2),e.elementType=C,e.lanes=d,e;case F:return e=Vn(13,a,n,h),e.elementType=F,e.lanes=d,e;case B:return e=Vn(19,a,n,h),e.elementType=B,e.lanes=d,e;case it:return B3(a,h,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case I:_=10;break t;case R:_=9;break t;case N:_=11;break t;case $:_=14;break t;case rt:_=16,l=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Vn(_,a,n,h),n.elementType=e,n.type=l,n.lanes=d,n}function ba(e,n,a,l){return e=Vn(7,e,l,n),e.lanes=a,e}function B3(e,n,a,l){e=Vn(22,e,l,n),e.elementType=it,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var _=dr(d,2);_!==null&&(h._pendingVisibility|=2,tn(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var _=dr(d,2);_!==null&&(h._pendingVisibility&=-3,tn(_,d,2))}}};return e.stateNode=h,e}function v0(e,n,a){return e=Vn(6,e,null,n),e.lanes=a,e}function _0(e,n,a){return n=Vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pi(e){e.flags|=4}function j3(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b6(n)){if(n=Mn.current,n!==null&&((zt&4194176)===zt?ni!==null:(zt&62914560)!==zt&&(zt&536870912)===0||n!==ni))throw bl=S1,r5;e.flags|=8192}}function Mu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?er():536870912,e.lanes|=n,Es|=n)}function ql(e,n){if(!Ht)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function g8(e,n,a){var l=n.pendingProps;switch(T1(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ne(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ki(Ae),vi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(El(n)?Pi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pn!==null&&(R0(Pn),Pn=null))),ne(n),null;case 26:return a=n.memoizedState,e===null?(Pi(n),a!==null?(ne(n),j3(n,a)):(ne(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Pi(n),ne(n),j3(n,a)):(ne(n),n.flags&=-16777217):(e.memoizedProps!==l&&Pi(n),ne(n),n.flags&=-16777217),null;case 27:Ba(n),a=vn.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return ne(n),null}e=$e.current,El(n)?n5(n):(e=y6(h,l,a),n.stateNode=e,Pi(n))}return ne(n),null;case 5:if(Ba(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return ne(n),null}if(e=$e.current,El(n))n5(n);else{switch(h=Bu(vn.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[De]=n,e[_e]=l;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Pi(n)}}return ne(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Pi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=vn.current,El(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[De]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||h6(e.nodeValue,a)),e||pa(n)}else e=Bu(e).createTextNode(l),e[De]=n,n.stateNode=e}return ne(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=El(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[De]=n}else Tl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ne(n),h=!1}else Pn!==null&&(R0(Pn),Pn=null),h=!0;if(!h)return n.flags&256?(xi(n),n):(xi(n),null)}if(xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=n.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Mu(n,n.updateQueue),ne(n),null;case 4:return vi(),e===null&&z0(n.stateNode.containerInfo),ne(n),null;case 10:return ki(n.type),ne(n),null;case 19:if(ae(Te),h=n.memoizedState,h===null)return ne(n),null;if(l=(n.flags&128)!==0,d=h.rendering,d===null)if(l)ql(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=fu(e),d!==null){for(n.flags|=128,ql(h,!1),e=d.updateQueue,n.updateQueue=e,Mu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)P3(a,e),a=a.sibling;return Kt(Te,Te.current&1|2),n.child}e=e.sibling}h.tail!==null&&en()>Iu&&(n.flags|=128,l=!0,ql(h,!1),n.lanes=4194304)}else{if(!l)if(e=fu(d),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Mu(n,e),ql(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return ne(n),null}else 2*en()-h.renderingStartTime>Iu&&a!==536870912&&(n.flags|=128,l=!0,ql(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=en(),n.sibling=null,e=Te.current,Kt(Te,l?e&1|2:e&1),n):(ne(n),null);case 22:case 23:return xi(n),w1(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),a=n.updateQueue,a!==null&&Mu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&ae(ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(Ae),ne(n),null;case 25:return null}throw Error(s(156,n.tag))}function y8(e,n){switch(T1(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(Ae),vi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ba(n),null;case 13:if(xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(Te),null;case 4:return vi(),null;case 10:return ki(n.type),null;case 22:case 23:return xi(n),w1(),e!==null&&ae(ya),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(Ae),null;case 25:return null;default:return null}}function q3(e,n){switch(T1(n),n.tag){case 3:ki(Ae),vi();break;case 26:case 27:case 5:Ba(n);break;case 4:vi();break;case 13:xi(n);break;case 19:ae(Te);break;case 10:ki(n.type);break;case 22:case 23:xi(n),w1(),e!==null&&ae(ya);break;case 24:ki(Ae)}}var v8={getCacheForType:function(e){var n=He(Ae),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},_8=typeof WeakMap=="function"?WeakMap:Map,ie=0,Zt=null,Vt=null,zt=0,Wt=0,dn=null,Bi=!1,Cs=!1,C0=!1,ji=0,oe=0,wr=0,wa=0,E0=0,Nn=0,Es=0,Hl=null,ri=null,T0=!1,A0=0,Iu=1/0,xu=null,Rr=null,Vu=!1,Ra=null,Fl=0,S0=0,b0=null,Gl=0,w0=null;function mn(){if((ie&2)!==0&&zt!==0)return zt&-zt;if(A.T!==null){var e=fs;return e!==0?e:O0()}return zo()}function H3(){Nn===0&&(Nn=(zt&536870912)===0||Ht?il():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Nn}function tn(e,n,a){(e===Zt&&Wt===2||e.cancelPendingCommit!==null)&&(Ts(e,0),qi(e,zt,Nn,!1)),ce(e,a),((ie&2)===0||e!==Zt)&&(e===Zt&&((ie&2)===0&&(wa|=a),oe===4&&qi(e,zt,Nn,!1)),ai(e))}function F3(e,n,a){if((ie&6)!==0)throw Error(s(327));var l=!a&&(n&60)===0&&(n&e.expiredLanes)===0||tr(e,n),h=l?T8(e,n):I0(e,n,!0),d=l;do{if(h===0){Cs&&!l&&qi(e,n,0,!1);break}else if(h===6)qi(e,n,0,!Bi);else{if(a=e.current.alternate,d&&!C8(a)){h=I0(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;h=Hl;var D=E.current.memoizedState.isDehydrated;if(D&&(Ts(E,_).flags|=256),_=I0(E,_,!1),_!==2){if(C0&&!D){E.errorRecoveryDisabledLanes|=d,wa|=d,h=4;break t}d=ri,ri=h,d!==null&&R0(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){Ts(e,0),qi(e,n,0,!0);break}t:{switch(l=e,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){qi(l,n,Nn,!Bi);break t}break;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=n,(n&62914560)===n&&(d=A0+300-en(),10<d)){if(qi(l,n,Nn,!Bi),_n(l,0)!==0)break t;l.timeoutHandle=m6(G3.bind(null,l,a,ri,xu,T0,n,Nn,wa,Es,Bi,2,-0,0),d);break t}G3(l,a,ri,xu,T0,n,Nn,wa,Es,Bi,0,-0,0)}}break}while(!0);ai(e)}function R0(e){ri===null?ri=e:ri.push.apply(ri,e)}function G3(e,n,a,l,h,d,_,E,D,U,X,J,H){var Y=n.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(Zl={stylesheets:null,count:0,unsuspend:ed},k3(n),n=id(),n!==null)){e.cancelPendingCommit=n(W3.bind(null,e,a,l,h,_,E,D,1,J,H)),qi(e,d,_,!U);return}W3(e,a,l,h,_,E,D,X,J,H)}function C8(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!cn(d(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,l){n&=~E0,n&=~wa,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var h=n;0<h;){var d=31-Xe(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&nr(e,a,n)}function Nu(){return(ie&6)===0?(Ql(0),!1):!0}function D0(){if(Vt!==null){if(Wt===0)var e=Vt.return;else e=Vt,Oi=Ta=null,O1(e),cs=null,wl=0,e=Vt;for(;e!==null;)q3(e.alternate,e),e=e.return;Vt=null}}function Ts(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,P8(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),D0(),Zt=e,Vt=a=br(e.current,null),zt=n,Wt=0,dn=null,Bi=!1,Cs=tr(e,n),C0=!1,Es=Nn=E0=wa=wr=oe=0,ri=Hl=null,T0=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var h=31-Xe(l),d=1<<h;n|=e[h],l&=~d}return ji=n,iu(),a}function Q3(e,n){Mt=null,A.H=ii,n===Sl?(n=l5(),Wt=3):n===r5?(n=l5(),Wt=4):Wt=n===a3?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,dn=n,Vt===null&&(oe=1,Au(e,wn(n,e.current)))}function K3(){var e=A.H;return A.H=ii,e===null?ii:e}function Y3(){var e=A.A;return A.A=v8,e}function M0(){oe=4,Bi||(zt&4194176)!==zt&&Mn.current!==null||(Cs=!0),(wr&134217727)===0&&(wa&134217727)===0||Zt===null||qi(Zt,zt,Nn,!1)}function I0(e,n,a){var l=ie;ie|=2;var h=K3(),d=Y3();(Zt!==e||zt!==n)&&(xu=null,Ts(e,n)),n=!1;var _=oe;t:do try{if(Wt!==0&&Vt!==null){var E=Vt,D=dn;switch(Wt){case 8:D0(),_=6;break t;case 3:case 2:case 6:Mn.current===null&&(n=!0);var U=Wt;if(Wt=0,dn=null,As(e,E,D,U),a&&Cs){_=0;break t}break;default:U=Wt,Wt=0,dn=null,As(e,E,D,U)}}E8(),_=oe;break}catch(X){Q3(e,X)}while(!0);return n&&e.shellSuspendCounter++,Oi=Ta=null,ie=l,A.H=h,A.A=d,Vt===null&&(Zt=null,zt=0,iu()),_}function E8(){for(;Vt!==null;)$3(Vt)}function T8(e,n){var a=ie;ie|=2;var l=K3(),h=Y3();Zt!==e||zt!==n?(xu=null,Iu=en()+500,Ts(e,n)):Cs=tr(e,n);t:do try{if(Wt!==0&&Vt!==null){n=Vt;var d=dn;e:switch(Wt){case 1:Wt=0,dn=null,As(e,n,d,1);break;case 2:if(a5(d)){Wt=0,dn=null,X3(n);break}n=function(){Wt===2&&Zt===e&&(Wt=7),ai(e)},d.then(n,n);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:a5(d)?(Wt=0,dn=null,X3(n)):(Wt=0,dn=null,As(e,n,d,7));break;case 5:var _=null;switch(Vt.tag){case 26:_=Vt.memoizedState;case 5:case 27:var E=Vt;if(!_||b6(_)){Wt=0,dn=null;var D=E.sibling;if(D!==null)Vt=D;else{var U=E.return;U!==null?(Vt=U,Ou(U)):Vt=null}break e}}Wt=0,dn=null,As(e,n,d,5);break;case 6:Wt=0,dn=null,As(e,n,d,6);break;case 8:D0(),oe=6;break t;default:throw Error(s(462))}}A8();break}catch(X){Q3(e,X)}while(!0);return Oi=Ta=null,A.H=l,A.A=h,ie=a,Vt!==null?0:(Zt=null,zt=0,iu(),oe)}function A8(){for(;Vt!==null&&!r1();)$3(Vt)}function $3(e){var n=y3(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?Ou(e):Vt=n}function X3(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=h3(a,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=h3(a,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:O1(n);default:q3(a,n),n=Vt=P3(n,ji),n=y3(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?Ou(e):Vt=n}function As(e,n,a,l){Oi=Ta=null,O1(n),cs=null,wl=0;var h=n.return;try{if(h8(e,h,n,a,zt)){oe=1,Au(e,wn(a,e.current)),Vt=null;return}}catch(d){if(h!==null)throw Vt=h,d;oe=1,Au(e,wn(a,e.current)),Vt=null;return}n.flags&32768?(Ht||l===1?e=!0:Cs||(zt&536870912)!==0?e=!1:(Bi=e=!0,(l===2||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Z3(n,e)):Ou(n)}function Ou(e){var n=e;do{if((n.flags&32768)!==0){Z3(n,Bi);return}e=n.return;var a=g8(n.alternate,n,ji);if(a!==null){Vt=a;return}if(n=n.sibling,n!==null){Vt=n;return}Vt=n=e}while(n!==null);oe===0&&(oe=5)}function Z3(e,n){do{var a=y8(e.alternate,e);if(a!==null){a.flags&=32767,Vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=a}while(e!==null);oe=6,Vt=null}function W3(e,n,a,l,h,d,_,E,D,U){var X=A.T,J=ot.p;try{ot.p=2,A.T=null,S8(e,n,a,l,J,h,d,_,E,D,U)}finally{A.T=X,ot.p=J}}function S8(e,n,a,l,h,d,_,E){do Ss();while(Ra!==null);if((ie&6)!==0)throw Error(s(327));var D=e.finishedWork;if(l=e.finishedLanes,D===null)return null;if(e.finishedWork=null,e.finishedLanes=0,D===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var U=D.lanes|D.childLanes;if(U|=_1,Uo(e,l,U,d,_,E),e===Zt&&(Vt=Zt=null,zt=0),(D.subtreeFlags&10256)===0&&(D.flags&10256)===0||Vu||(Vu=!0,S0=U,b0=a,D8(_i,function(){return Ss(),null})),a=(D.flags&15990)!==0,(D.subtreeFlags&15990)!==0||a?(a=A.T,A.T=null,d=ot.p,ot.p=2,_=ie,ie|=4,d8(e,D),V3(D,e),Y7(q0,e.containerInfo),Qu=!!j0,q0=j0=null,e.current=D,D3(e,D.alternate,D),Js(),ie=_,ot.p=d,A.T=a):e.current=D,Vu?(Vu=!1,Ra=e,Fl=l):J3(e,U),U=e.pendingLanes,U===0&&(Rr=null),el(D.stateNode),ai(e),n!==null)for(h=e.onRecoverableError,D=0;D<n.length;D++)U=n[D],h(U.value,{componentStack:U.stack});return(Fl&3)!==0&&Ss(),U=e.pendingLanes,(l&4194218)!==0&&(U&42)!==0?e===w0?Gl++:(Gl=0,w0=e):Gl=0,Ql(0),null}function J3(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Dl(n)))}function Ss(){if(Ra!==null){var e=Ra,n=S0;S0=0;var a=Lo(Fl),l=A.T,h=ot.p;try{if(ot.p=32>a?32:a,A.T=null,Ra===null)var d=!1;else{a=b0,b0=null;var _=Ra,E=Fl;if(Ra=null,Fl=0,(ie&6)!==0)throw Error(s(331));var D=ie;if(ie|=4,L3(_.current),O3(_,_.current,E,a),ie=D,Ql(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Wi,_)}catch{}d=!0}return d}finally{ot.p=h,A.T=l,J3(e,n)}}return!1}function t6(e,n,a){n=wn(a,n),n=Y1(e.stateNode,n,2),e=Er(e,n,2),e!==null&&(ce(e,2),ai(e))}function Xt(e,n,a){if(e.tag===3)t6(e,e,a);else for(;n!==null;){if(n.tag===3){t6(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){e=wn(a,e),a=i3(2),l=Er(n,a,2),l!==null&&(r3(a,l,n,e),ce(l,2),ai(l));break}}n=n.return}}function x0(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new _8;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(a)||(C0=!0,h.add(a),e=b8.bind(null,e,n,a),n.then(e,e))}function b8(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(zt&a)===a&&(oe===4||oe===3&&(zt&62914560)===zt&&300>en()-A0?(ie&2)===0&&Ts(e,0):E0|=a,Es===zt&&(Es=0)),ai(e)}function e6(e,n){n===0&&(n=er()),e=dr(e,n),e!==null&&(ce(e,n),ai(e))}function w8(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e6(e,a)}function R8(e,n){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),e6(e,a)}function D8(e,n){return Zr(e,n)}var ku=null,bs=null,V0=!1,Uu=!1,N0=!1,Da=0;function ai(e){e!==bs&&e.next===null&&(bs===null?ku=bs=e:bs=bs.next=e),Uu=!0,V0||(V0=!0,I8(M8))}function Ql(e,n){if(!N0&&Uu){N0=!0;do for(var a=!1,l=ku;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Xe(42|e)+1)-1,d&=h&~(_&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,r6(l,d))}else d=zt,d=_n(l,l===Zt?d:0),(d&3)===0||tr(l,d)||(a=!0,r6(l,d));l=l.next}while(a);N0=!1}}function M8(){Uu=V0=!1;var e=0;Da!==0&&(z8()&&(e=Da),Da=0);for(var n=en(),a=null,l=ku;l!==null;){var h=l.next,d=n6(l,n);d===0?(l.next=null,a===null?ku=h:a.next=h,h===null&&(bs=a)):(a=l,(e!==0||(d&3)!==0)&&(Uu=!0)),l=h}Ql(e)}function n6(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-Xe(d),E=1<<_,D=h[_];D===-1?((E&a)===0||(E&l)!==0)&&(h[_]=Ha(E,n)):D<=n&&(e.expiredLanes|=E),d&=~E}if(n=Zt,a=zt,a=_n(e,e===n?a:0),l=e.callbackNode,a===0||e===n&&Wt===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qa(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||tr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&qa(l),Lo(a)){case 2:case 8:a=Re;break;case 32:a=_i;break;case 268435456:a=tl;break;default:a=_i}return l=i6.bind(null,e),a=Zr(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&qa(l),e.callbackPriority=2,e.callbackNode=null,2}function i6(e,n){var a=e.callbackNode;if(Ss()&&e.callbackNode!==a)return null;var l=zt;return l=_n(e,e===Zt?l:0),l===0?null:(F3(e,l,n),n6(e,en()),e.callbackNode!=null&&e.callbackNode===a?i6.bind(null,e):null)}function r6(e,n){if(Ss())return null;F3(e,n,!0)}function I8(e){B8(function(){(ie&6)!==0?Zr(ve,e):e()})}function O0(){return Da===0&&(Da=il()),Da}function a6(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yn(""+e)}function s6(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function x8(e,n,a,l,h){if(n==="submit"&&a&&a.stateNode===h){var d=a6((h[_e]||null).action),_=l.submitter;_&&(n=(n=_[_e]||null)?a6(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var E=new Xa("action","action",null,l,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Da!==0){var D=_?s6(h,_):new FormData(h);H1(a,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(E.preventDefault(),D=_?s6(h,_):new FormData(h),H1(a,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var k0=0;k0<W2.length;k0++){var U0=W2[k0],V8=U0.toLowerCase(),N8=U0[0].toUpperCase()+U0.slice(1);zn(V8,"on"+N8)}zn(K2,"onAnimationEnd"),zn(Y2,"onAnimationIteration"),zn($2,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(X7,"onTransitionRun"),zn(Z7,"onTransitionStart"),zn(W7,"onTransitionCancel"),zn(X2,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl));function l6(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(n)for(var _=l.length-1;0<=_;_--){var E=l[_],D=E.instance,U=E.currentTarget;if(E=E.listener,D!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(X){Tu(X)}h.currentTarget=null,d=D}else for(_=0;_<l.length;_++){if(E=l[_],D=E.instance,U=E.currentTarget,E=E.listener,D!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(X){Tu(X)}h.currentTarget=null,d=D}}}}function Ot(e,n){var a=n[Jr];a===void 0&&(a=n[Jr]=new Set);var l=e+"__bubble";a.has(l)||(o6(n,e,2,!1),a.add(l))}function L0(e,n,a){var l=0;n&&(l|=4),o6(a,e,l,n)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function z0(e){if(!e[Lu]){e[Lu]=!0,al.forEach(function(a){a!=="selectionchange"&&(O8.has(a)||L0(a,!1,e),L0(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lu]||(n[Lu]=!0,L0("selectionchange",!1,n))}}function o6(e,n,a,l){switch(x6(n)){case 2:var h=sd;break;case 8:h=ld;break;default:h=Z0}a=h.bind(null,n,a,e),h=void 0,!An||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(n,a,{capture:!0,passive:h}):e.addEventListener(n,a,!0):h!==void 0?e.addEventListener(n,a,{passive:h}):e.addEventListener(n,a,!1)}function P0(e,n,a,l,h){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(_===4)for(_=l.return;_!==null;){var D=_.tag;if((D===3||D===4)&&(D=_.stateNode.containerInfo,D===h||D.nodeType===8&&D.parentNode===h))return;_=_.return}for(;E!==null;){if(_=Ln(E),_===null)return;if(D=_.tag,D===5||D===6||D===26||D===27){l=d=_;continue t}E=E.parentNode}}l=l.return}qo(function(){var U=d,X=$a(a),J=[];t:{var H=Z2.get(e);if(H!==void 0){var Y=Xa,ft=e;switch(e){case"keypress":if(Xn(a)===0)break t;case"keydown":case"keyup":Y=ns;break;case"focusin":ft="focus",Y=Ja;break;case"focusout":ft="blur",Y=Ja;break;case"beforeblur":case"afterblur":Y=Ja;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=h1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Xo;break;case K2:case Y2:case $2:Y=ts;break;case X2:Y=Wo;break;case"scroll":case"scrollend":Y=Ho;break;case"wheel":Y=is;break;case"copy":case"cut":case"paste":Y=es;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=yl;break;case"toggle":case"beforetoggle":Y=tu}var Tt=(n&4)!==0,ue=!Tt&&(e==="scroll"||e==="scrollend"),z=Tt?H!==null?H+"Capture":null:H;Tt=[];for(var k=U,q;k!==null;){var Z=k;if(q=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||q===null||z===null||(Z=ra(k,z),Z!=null&&Tt.push(Yl(k,Z,q))),ue)break;k=k.return}0<Tt.length&&(H=new Y(H,ft,null,a,X),J.push({event:H,listeners:Tt}))}}if((n&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",H&&a!==Tn&&(ft=a.relatedTarget||a.fromElement)&&(Ln(ft)||ft[Ci]))break t;if((Y||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,Y?(ft=a.relatedTarget||a.toElement,Y=U,ft=ft?Ln(ft):null,ft!==null&&(ue=st(ft),Tt=ft.tag,ft!==ue||Tt!==5&&Tt!==27&&Tt!==6)&&(ft=null)):(Y=null,ft=U),Y!==ft)){if(Tt=Sn,Z="onMouseLeave",z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Tt=yl,Z="onPointerLeave",z="onPointerEnter",k="pointer"),ue=Y==null?H:sr(Y),q=ft==null?H:sr(ft),H=new Tt(Z,k+"leave",Y,a,X),H.target=ue,H.relatedTarget=q,Z=null,Ln(X)===U&&(Tt=new Tt(z,k+"enter",ft,a,X),Tt.target=q,Tt.relatedTarget=ue,Z=Tt),ue=Z,Y&&ft)e:{for(Tt=Y,z=ft,k=0,q=Tt;q;q=ws(q))k++;for(q=0,Z=z;Z;Z=ws(Z))q++;for(;0<k-q;)Tt=ws(Tt),k--;for(;0<q-k;)z=ws(z),q--;for(;k--;){if(Tt===z||z!==null&&Tt===z.alternate)break e;Tt=ws(Tt),z=ws(z)}Tt=null}else Tt=null;Y!==null&&u6(J,H,Y,Tt,!1),ft!==null&&ue!==null&&u6(J,ue,ft,Tt,!0)}}t:{if(H=U?sr(U):window,Y=H.nodeName&&H.nodeName.toLowerCase(),Y==="select"||Y==="input"&&H.type==="file")var ct=U2;else if(Ee(H))if(L2)ct=Q7;else{ct=F7;var xt=H7}else Y=H.nodeName,!Y||Y.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&cl(U.elementType)&&(ct=U2):ct=G7;if(ct&&(ct=ct(e,U))){Di(J,ct,a,X);break t}xt&&xt(e,H,U),e==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&Ya(H,"number",H.value)}switch(xt=U?sr(U):window,e){case"focusin":(Ee(xt)||xt.contentEditable==="true")&&(rs=xt,g1=U,Cl=null);break;case"focusout":Cl=g1=rs=null;break;case"mousedown":y1=!0;break;case"contextmenu":case"mouseup":case"dragend":y1=!1,G2(J,a,X);break;case"selectionchange":if($7)break;case"keydown":case"keyup":G2(J,a,X)}var mt;if(Jn)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Ut?G(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(v&&a.locale!=="ko"&&(Ut||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ut&&(mt=fl()):($n=X,fr="value"in $n?$n.value:$n.textContent,Ut=!0)),xt=zu(U,vt),0<xt.length&&(vt=new pl(vt,e,null,a,X),J.push({event:vt,listeners:xt}),mt?vt.data=mt:(mt=at(a),mt!==null&&(vt.data=mt)))),(mt=g?Ce(e,a):Lt(e,a))&&(vt=zu(U,"onBeforeInput"),0<vt.length&&(xt=new pl("onBeforeInput","beforeinput",null,a,X),J.push({event:xt,listeners:vt}),xt.data=mt)),x8(J,e,U,a,X)}l6(J,n)})}function Yl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zu(e,n){for(var a=n+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ra(e,a),h!=null&&l.unshift(Yl(e,h,d)),h=ra(e,n),h!=null&&l.push(Yl(e,h,d))),e=e.return}return l}function ws(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function u6(e,n,a,l,h){for(var d=n._reactName,_=[];a!==null&&a!==l;){var E=a,D=E.alternate,U=E.stateNode;if(E=E.tag,D!==null&&D===l)break;E!==5&&E!==26&&E!==27||U===null||(D=U,h?(U=ra(a,d),U!=null&&_.unshift(Yl(a,U,D))):h||(U=ra(a,d),U!=null&&_.push(Yl(a,U,D)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var k8=/\r\n?/g,U8=/\u0000|\uFFFD/g;function c6(e){return(typeof e=="string"?e:""+e).replace(k8,`
`).replace(U8,"")}function h6(e,n){return n=c6(n),c6(e)===n}function Pu(){}function $t(e,n,a,l,h,d){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||En(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&En(e,""+l);break;case"className":ur(e,"class",l);break;case"tabIndex":ur(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ur(e,a,l);break;case"style":jo(e,l,d);break;case"data":if(n!=="object"){ur(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Yn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&$t(e,n,"name",h.name,h,null),$t(e,n,"formEncType",h.formEncType,h,null),$t(e,n,"formMethod",h.formMethod,h,null),$t(e,n,"formTarget",h.formTarget,h,null)):($t(e,n,"encType",h.encType,h,null),$t(e,n,"method",h.method,h,null),$t(e,n,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Yn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Pu);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Yn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ot("beforetoggle",e),Ot("toggle",e),or(e,"popover",l);break;case"xlinkActuate":Cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":or(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u1.get(a)||a,or(e,a,l))}}function B0(e,n,a,l,h,d){switch(a){case"style":jo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?En(e,l):(typeof l=="number"||typeof l=="bigint")&&En(e,""+l);break;case"onScroll":l!=null&&Ot("scroll",e);break;case"onScrollEnd":l!=null&&Ot("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qa.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),d=e[_e]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):or(e,a,l)}}}function ze(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",e),Ot("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,d,_,a,null)}}h&&$t(e,n,"srcSet",a.srcSet,a,null),l&&$t(e,n,"src",a.src,a,null);return;case"input":Ot("invalid",e);var E=d=_=h=null,D=null,U=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":_=X;break;case"checked":D=X;break;case"defaultChecked":U=X;break;case"value":d=X;break;case"defaultValue":E=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:$t(e,n,l,X,a,null)}}na(e,d,E,D,U,_,h,!1),ea(e);return;case"select":Ot("invalid",e),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:$t(e,n,h,E,a,null)}n=d,a=_,e.multiple=!!l,n!=null?qt(e,!!l,n,!1):a!=null&&qt(e,!!l,a,!0);return;case"textarea":Ot("invalid",e),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$t(e,n,_,E,a,null)}hr(e,l,h,d),ea(e);return;case"option":for(D in a)if(a.hasOwnProperty(D)&&(l=a[D],l!=null))switch(D){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,n,D,l,a,null)}return;case"dialog":Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":Ot("load",e);break;case"video":case"audio":for(l=0;l<Kl.length;l++)Ot(Kl[l],e);break;case"image":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"embed":case"source":case"link":Ot("error",e),Ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(l=a[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,U,l,a,null)}return;default:if(cl(n)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&B0(e,n,X,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&$t(e,n,E,l,a,null))}function L8(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,D=null,U=null,X=null;for(Y in a){var J=a[Y];if(a.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=J;default:l.hasOwnProperty(Y)||$t(e,n,Y,null,l,J)}}for(var H in l){var Y=l[H];if(J=a[H],l.hasOwnProperty(H)&&(Y!=null||J!=null))switch(H){case"type":d=Y;break;case"name":h=Y;break;case"checked":U=Y;break;case"defaultChecked":X=Y;break;case"value":_=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Y!==J&&$t(e,n,H,Y,l,J)}}cr(e,_,E,D,U,X,d,h);return;case"select":Y=_=E=H=null;for(d in a)if(D=a[d],a.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":Y=D;default:l.hasOwnProperty(d)||$t(e,n,d,null,l,D)}for(h in l)if(d=l[h],D=a[h],l.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":H=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==D&&$t(e,n,h,d,l,D)}n=E,a=_,l=Y,H!=null?qt(e,!!a,H,!1):!!l!=!!a&&(n!=null?qt(e,!!a,n,!0):qt(e,!!a,a?[]:"",!1));return;case"textarea":Y=H=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$t(e,n,E,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":H=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,n,_,h,l,d)}ia(e,H,Y);return;case"option":for(var ft in a)if(H=a[ft],a.hasOwnProperty(ft)&&H!=null&&!l.hasOwnProperty(ft))switch(ft){case"selected":e.selected=!1;break;default:$t(e,n,ft,null,l,H)}for(D in l)if(H=l[D],Y=a[D],l.hasOwnProperty(D)&&H!==Y&&(H!=null||Y!=null))switch(D){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:$t(e,n,D,H,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Tt in a)H=a[Tt],a.hasOwnProperty(Tt)&&H!=null&&!l.hasOwnProperty(Tt)&&$t(e,n,Tt,null,l,H);for(U in l)if(H=l[U],Y=a[U],l.hasOwnProperty(U)&&H!==Y&&(H!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,n));break;default:$t(e,n,U,H,l,Y)}return;default:if(cl(n)){for(var ue in a)H=a[ue],a.hasOwnProperty(ue)&&H!==void 0&&!l.hasOwnProperty(ue)&&B0(e,n,ue,void 0,l,H);for(X in l)H=l[X],Y=a[X],!l.hasOwnProperty(X)||H===Y||H===void 0&&Y===void 0||B0(e,n,X,H,l,Y);return}}for(var z in a)H=a[z],a.hasOwnProperty(z)&&H!=null&&!l.hasOwnProperty(z)&&$t(e,n,z,null,l,H);for(J in l)H=l[J],Y=a[J],!l.hasOwnProperty(J)||H===Y||H==null&&Y==null||$t(e,n,J,H,l,Y)}var j0=null,q0=null;function Bu(e){return e.nodeType===9?e:e.ownerDocument}function f6(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d6(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function H0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var F0=null;function z8(){var e=window.event;return e&&e.type==="popstate"?e===F0?!1:(F0=e,!0):(F0=null,!1)}var m6=typeof setTimeout=="function"?setTimeout:void 0,P8=typeof clearTimeout=="function"?clearTimeout:void 0,p6=typeof Promise=="function"?Promise:void 0,B8=typeof queueMicrotask=="function"?queueMicrotask:typeof p6<"u"?function(e){return p6.resolve(null).then(e).catch(j8)}:m6;function j8(e){setTimeout(function(){throw e})}function G0(e,n){var a=n,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){e.removeChild(h),no(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);no(n)}function Q0(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Q0(a),ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function q8(e,n,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function H8(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=jn(e.nextSibling),e===null))return null;return e}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function g6(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function y6(e,n,a){switch(n=Bu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var On=new Map,v6=new Set;function ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Hi=ot.d;ot.d={f:F8,r:G8,D:Q8,C:K8,L:Y8,m:$8,X:Z8,S:X8,M:W8};function F8(){var e=Hi.f(),n=Nu();return e||n}function G8(e){var n=Ei(e);n!==null&&n.tag===5&&n.type==="form"?G5(n):Hi.r(e)}var Rs=typeof document>"u"?null:document;function _6(e,n,a){var l=Rs;if(l&&typeof n=="string"&&n){var h=se(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),v6.has(h)||(v6.add(h),e={rel:e,crossOrigin:a,href:n},l.querySelector(h)===null&&(n=l.createElement("link"),ze(n,"link",e),ee(n),l.head.appendChild(n)))}}function Q8(e){Hi.D(e),_6("dns-prefetch",e,null)}function K8(e,n){Hi.C(e,n),_6("preconnect",e,n)}function Y8(e,n,a){Hi.L(e,n,a);var l=Rs;if(l&&e&&n){var h='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+se(a.imageSizes)+'"]')):h+='[href="'+se(e)+'"]';var d=h;switch(n){case"style":d=Ds(e);break;case"script":d=Ms(e)}On.has(d)||(e=w({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),On.set(d,e),l.querySelector(h)!==null||n==="style"&&l.querySelector($l(d))||n==="script"&&l.querySelector(Xl(d))||(n=l.createElement("link"),ze(n,"link",e),ee(n),l.head.appendChild(n)))}}function $8(e,n){Hi.m(e,n);var a=Rs;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ms(e)}if(!On.has(d)&&(e=w({rel:"modulepreload",href:e},n),On.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xl(d)))return}l=a.createElement("link"),ze(l,"link",e),ee(l),a.head.appendChild(l)}}}function X8(e,n,a){Hi.S(e,n,a);var l=Rs;if(l&&e){var h=lr(l).hoistableStyles,d=Ds(e);n=n||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector($l(d)))E.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},a),(a=On.get(d))&&K0(e,a);var D=_=l.createElement("link");ee(D),ze(D,"link",e),D._p=new Promise(function(U,X){D.onload=U,D.onerror=X}),D.addEventListener("load",function(){E.loading|=1}),D.addEventListener("error",function(){E.loading|=2}),E.loading|=4,qu(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function Z8(e,n){Hi.X(e,n);var a=Rs;if(a&&e){var l=lr(a).hoistableScripts,h=Ms(e),d=l.get(h);d||(d=a.querySelector(Xl(h)),d||(e=w({src:e,async:!0},n),(n=On.get(h))&&Y0(e,n),d=a.createElement("script"),ee(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function W8(e,n){Hi.M(e,n);var a=Rs;if(a&&e){var l=lr(a).hoistableScripts,h=Ms(e),d=l.get(h);d||(d=a.querySelector(Xl(h)),d||(e=w({src:e,async:!0,type:"module"},n),(n=On.get(h))&&Y0(e,n),d=a.createElement("script"),ee(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function C6(e,n,a,l){var h=(h=vn.current)?ju(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ds(a.href),a=lr(h).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ds(a.href);var d=lr(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector($l(e)))&&!d._p&&(_.instance=d,_.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),d||J8(h,e,a,_.state))),n&&l===null)throw Error(s(528,""));return _}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ms(a),a=lr(h).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ds(e){return'href="'+se(e)+'"'}function $l(e){return'link[rel="stylesheet"]['+e+"]"}function E6(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function J8(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ze(n,"link",a),ee(n),e.head.appendChild(n))}function Ms(e){return'[src="'+se(e)+'"]'}function Xl(e){return"script[async]"+e}function T6(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(l)return n.instance=l,ee(l),l;var h=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ee(l),ze(l,"style",h),qu(l,a.precedence,e),n.instance=l;case"stylesheet":h=Ds(a.href);var d=e.querySelector($l(h));if(d)return n.state.loading|=4,n.instance=d,ee(d),d;l=E6(a),(h=On.get(h))&&K0(l,h),d=(e.ownerDocument||e).createElement("link"),ee(d);var _=d;return _._p=new Promise(function(E,D){_.onload=E,_.onerror=D}),ze(d,"link",l),n.state.loading|=4,qu(d,a.precedence,e),n.instance=d;case"script":return d=Ms(a.src),(h=e.querySelector(Xl(d)))?(n.instance=h,ee(h),h):(l=a,(h=On.get(d))&&(l=w({},a),Y0(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ee(h),ze(h,"link",l),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,qu(l,a.precedence,e));return n.instance}function qu(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function K0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Y0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hu=null;function A6(e,n,a){if(Hu===null){var l=new Map,h=Hu=new Map;h.set(a,l)}else h=Hu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ar]||d[De]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=e+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function S6(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function td(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b6(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Zl=null;function ed(){}function nd(e,n,a){if(Zl===null)throw Error(s(475));var l=Zl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Ds(a.href),d=e.querySelector($l(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Fu.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=d,ee(d);return}d=e.ownerDocument||e,a=E6(a),(h=On.get(h))&&K0(a,h),d=d.createElement("link"),ee(d);var _=d;_._p=new Promise(function(E,D){_.onload=E,_.onerror=D}),ze(d,"link",a),n.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Fu.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function id(){if(Zl===null)throw Error(s(475));var e=Zl;return e.stylesheets&&e.count===0&&$0(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&$0(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Fu(){if(this.count--,this.count===0){if(this.stylesheets)$0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gu=null;function $0(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gu=new Map,n.forEach(rd,e),Gu=null,Fu.call(e))}function rd(e,n){if(!(n.state.loading&4)){var a=Gu.get(e);if(a)var l=a.get(null);else{a=new Map,Gu.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=n.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Fu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var Wl={$$typeof:I,Provider:null,Consumer:null,_currentValue:Dt,_currentValue2:Dt,_threadCount:0};function ad(e,n,a,l,h,d,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fa(0),this.hiddenUpdates=Fa(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function w6(e,n,a,l,h,d,_,E,D,U,X,J){return e=new ad(e,n,a,_,E,D,U,J),n=1,d===!0&&(n|=24),d=Vn(3,null,null,n),e.current=d,d.stateNode=e,n=R1(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:n},l0(d),e}function R6(e){return e?(e=ls,e):ls}function D6(e,n,a,l,h,d){h=R6(h),l.context===null?l.context=h:l.pendingContext=h,l=Cr(n),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Er(e,l,n),a!==null&&(tn(a,e,n),kl(a,e,n))}function M6(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function X0(e,n){M6(e,n),(e=e.alternate)&&M6(e,n)}function I6(e){if(e.tag===13){var n=dr(e,67108864);n!==null&&tn(n,e,67108864),X0(e,67108864)}}var Qu=!0;function sd(e,n,a,l){var h=A.T;A.T=null;var d=ot.p;try{ot.p=2,Z0(e,n,a,l)}finally{ot.p=d,A.T=h}}function ld(e,n,a,l){var h=A.T;A.T=null;var d=ot.p;try{ot.p=8,Z0(e,n,a,l)}finally{ot.p=d,A.T=h}}function Z0(e,n,a,l){if(Qu){var h=W0(l);if(h===null)P0(e,n,l,Ku,a),V6(e,l);else if(ud(h,e,n,a,l))l.stopPropagation();else if(V6(e,l),n&4&&-1<od.indexOf(e)){for(;h!==null;){var d=Ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Un(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var D=1<<31-Xe(_);E.entanglements[1]|=D,_&=~D}ai(d),(ie&6)===0&&(Iu=en()+500,Ql(0))}}break;case 13:E=dr(d,2),E!==null&&tn(E,d,2),Nu(),X0(d,2)}if(d=W0(l),d===null&&P0(e,n,l,Ku,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else P0(e,n,l,null,a)}}function W0(e){return e=$a(e),J0(e)}var Ku=null;function J0(e){if(Ku=null,e=Ln(e),e!==null){var n=st(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=Rt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ku=e,null}function x6(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vo()){case ve:return 2;case Re:return 8;case _i:case No:return 32;case tl:return 268435456;default:return 32}default:return 32}}var t4=!1,Dr=null,Mr=null,Ir=null,Jl=new Map,to=new Map,xr=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V6(e,n){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Jl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(n.pointerId)}}function eo(e,n,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},n!==null&&(n=Ei(n),n!==null&&I6(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function ud(e,n,a,l,h){switch(n){case"focusin":return Dr=eo(Dr,e,n,a,l,h),!0;case"dragenter":return Mr=eo(Mr,e,n,a,l,h),!0;case"mouseover":return Ir=eo(Ir,e,n,a,l,h),!0;case"pointerover":var d=h.pointerId;return Jl.set(d,eo(Jl.get(d)||null,e,n,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,to.set(d,eo(to.get(d)||null,e,n,a,l,h)),!0}return!1}function N6(e){var n=Ln(e.target);if(n!==null){var a=st(n);if(a!==null){if(n=a.tag,n===13){if(n=Rt(a),n!==null){e.blockedOn=n,rr(e.priority,function(){if(a.tag===13){var l=mn(),h=dr(a,l);h!==null&&tn(h,a,l),X0(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=W0(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Tn=l,a.target.dispatchEvent(l),Tn=null}else return n=Ei(a),n!==null&&I6(n),e.blockedOn=a,!1;n.shift()}return!0}function O6(e,n,a){Yu(e)&&a.delete(n)}function cd(){t4=!1,Dr!==null&&Yu(Dr)&&(Dr=null),Mr!==null&&Yu(Mr)&&(Mr=null),Ir!==null&&Yu(Ir)&&(Ir=null),Jl.forEach(O6),to.forEach(O6)}function $u(e,n){e.blockedOn===n&&(e.blockedOn=null,t4||(t4=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cd)))}var Xu=null;function k6(e){Xu!==e&&(Xu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Xu===e&&(Xu=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],h=e[n+2];if(typeof l!="function"){if(J0(l||a)===null)continue;break}var d=Ei(a);d!==null&&(e.splice(n,3),n-=3,H1(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function no(e){function n(D){return $u(D,e)}Dr!==null&&$u(Dr,e),Mr!==null&&$u(Mr,e),Ir!==null&&$u(Ir,e),Jl.forEach(n),to.forEach(n);for(var a=0;a<xr.length;a++){var l=xr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)N6(a),a.blockedOn===null&&xr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[_e]||null;if(typeof d=="function")_||k6(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[_e]||null)E=_.formAction;else if(J0(h)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),k6(a)}}}function e4(e){this._internalRoot=e}Zu.prototype.render=e4.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,l=mn();D6(a,l,e,n,null,null)},Zu.prototype.unmount=e4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ss(),D6(e.current,2,null,e,null,null),Nu(),n[Ci]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var n=zo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<xr.length&&n!==0&&n<xr[a].priority;a++);xr.splice(a,0,e),a===0&&N6(e)}};var U6=t.version;if(U6!=="19.0.0")throw Error(s(527,U6,"19.0.0"));ot.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=nt(n),e=e!==null?dt(e):null,e=e===null?null:e.stateNode,e};var hd={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ln,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Wi=Wu.inject(hd),qe=Wu}catch{}}return ro.createRoot=function(e,n){if(!o(e))throw Error(s(299));var a=!1,l="",h=J5,d=t3,_=e3,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=w6(e,1,!1,null,null,a,l,h,d,_,E,null),e[Ci]=n.current,z0(e.nodeType===8?e.parentNode:e),new e4(n)},ro.hydrateRoot=function(e,n,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=J5,_=t3,E=e3,D=null,U=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks),a.formState!==void 0&&(U=a.formState)),n=w6(e,1,!0,n,a??null,l,h,d,_,E,D,U),n.context=R6(null),a=n.current,l=mn(),h=Cr(l),h.callback=null,Er(a,h,l),n.current.lanes=l,ce(n,l),ai(n),e[Ci]=n.current,z0(e),new Zu(n)},ro.version="19.0.0",ro}var Q6;function Ed(){if(Q6)return r4.exports;Q6=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),r4.exports=Cd(),r4.exports}var Td=Ed();const Ad=yf(Td);var ao={},K6;function Sd(){if(K6)return ao;K6=1,Object.defineProperty(ao,"__esModule",{value:!0}),ao.parse=f,ao.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function f(R,I){const N=new c,F=R.length;if(F<2)return N;const B=(I==null?void 0:I.decode)||C;let $=0;do{const rt=R.indexOf("=",$);if(rt===-1)break;const it=R.indexOf(";",$),gt=it===-1?F:it;if(rt>gt){$=R.lastIndexOf(";",rt-1)+1;continue}const ht=m(R,$,rt),Ct=p(R,rt,ht),V=R.slice(ht,Ct);if(N[V]===void 0){let b=m(R,rt+1,gt),A=p(R,gt,b);const w=B(R.slice(b,A));N[V]=w}$=gt+1}while($<F);return N}function m(R,I,N){do{const F=R.charCodeAt(I);if(F!==32&&F!==9)return I}while(++I<N);return N}function p(R,I,N){for(;I>N;){const F=R.charCodeAt(--I);if(F!==32&&F!==9)return I+1}return N}function y(R,I,N){const F=(N==null?void 0:N.encode)||encodeURIComponent;if(!r.test(R))throw new TypeError(`argument name is invalid: ${R}`);const B=F(I);if(!t.test(B))throw new TypeError(`argument val is invalid: ${I}`);let $=R+"="+B;if(!N)return $;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);$+="; Max-Age="+N.maxAge}if(N.domain){if(!i.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);$+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);$+="; Path="+N.path}if(N.expires){if(!S(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);$+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&($+="; HttpOnly"),N.secure&&($+="; Secure"),N.partitioned&&($+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return $}function C(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function S(R){return o.call(R)==="[object Date]"}return ao}Sd();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Y6="popstate";function bd(r={}){function t(o,c){let{pathname:f="/",search:m="",hash:p=""}=La(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),E4("",{pathname:f,search:m,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(o,c){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof c=="string"?c:go(c))}function s(o,c){kn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Rd(t,i,s,r)}function te(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function kn(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wd(){return Math.random().toString(36).substring(2,10)}function $6(r,t){return{usr:r.state,key:r.key,idx:t}}function E4(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?La(t):t,state:i,key:t&&t.key||s||wd()}}function go({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function La(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function Rd(r,t,i,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,f=o.history,m="POP",p=null,y=C();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function C(){return(f.state||{idx:null}).idx}function S(){m="POP";let B=C(),$=B==null?null:B-y;y=B,p&&p({action:m,location:F.location,delta:$})}function R(B,$){m="PUSH";let rt=E4(F.location,B,$);i&&i(rt,B),y=C()+1;let it=$6(rt,y),gt=F.createHref(rt);try{f.pushState(it,"",gt)}catch(ht){if(ht instanceof DOMException&&ht.name==="DataCloneError")throw ht;o.location.assign(gt)}c&&p&&p({action:m,location:F.location,delta:1})}function I(B,$){m="REPLACE";let rt=E4(F.location,B,$);i&&i(rt,B),y=C();let it=$6(rt,y),gt=F.createHref(rt);f.replaceState(it,"",gt),c&&p&&p({action:m,location:F.location,delta:0})}function N(B){let $=o.location.origin!=="null"?o.location.origin:o.location.href,rt=typeof B=="string"?B:go(B);return rt=rt.replace(/ $/,"%20"),te($,`No window.location.(origin|href) available to create URL for href: ${rt}`),new URL(rt,$)}let F={get action(){return m},get location(){return r(o,f)},listen(B){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Y6,S),p=B,()=>{o.removeEventListener(Y6,S),p=null}},createHref(B){return t(o,B)},createURL:N,encodeLocation(B){let $=N(B);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:R,replace:I,go(B){return f.go(B)}};return F}function vf(r,t,i="/"){return Dd(r,t,i,!1)}function Dd(r,t,i,s){let o=typeof t=="string"?La(t):t,c=Gi(o.pathname||"/",i);if(c==null)return null;let f=_f(r);Md(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=Bd(c);m=zd(f[p],y,s)}return m}function _f(r,t=[],i=[],s=""){let o=(c,f,m)=>{let p={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(te(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Fi([s,p.relativePath]),C=i.concat(p);c.children&&c.children.length>0&&(te(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),_f(c.children,t,C,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:Ud(y,c.index),routesMeta:C})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))o(c,f);else for(let p of Cf(c.path))o(c,f,p)}),t}function Cf(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let f=Cf(s.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Md(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:Ld(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Id=/^:[\w-]+$/,xd=3,Vd=2,Nd=1,Od=10,kd=-2,X6=r=>r==="*";function Ud(r,t){let i=r.split("/"),s=i.length;return i.some(X6)&&(s+=kd),t&&(s+=Vd),i.filter(o=>!X6(o)).reduce((o,c)=>o+(Id.test(c)?xd:c===""?Nd:Od),s)}function Ld(r,t){return r.length===t.length&&r.slice(0,-1).every((s,o)=>s===t[o])?r[r.length-1]-t[t.length-1]:0}function zd(r,t,i=!1){let{routesMeta:s}=r,o={},c="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,C=c==="/"?t:t.slice(c.length)||"/",S=mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},C),R=p.route;if(!S&&y&&i&&!s[s.length-1].route.index&&(S=mc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},C)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:Fi([c,S.pathname]),pathnameBase:Fd(Fi([c,S.pathnameBase])),route:R}),S.pathnameBase!=="/"&&(c=Fi([c,S.pathnameBase]))}return f}function mc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Pd(r.path,r.caseSensitive,r.end),o=t.match(i);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:C,isOptional:S},R)=>{if(C==="*"){let N=m[R]||"";f=c.slice(0,c.length-N.length).replace(/(.)\/+$/,"$1")}const I=m[R];return S&&!I?y[C]=void 0:y[C]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function Pd(r,t=!1,i=!0){kn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function Bd(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Gi(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function jd(r,t="/"){let{pathname:i,search:s="",hash:o=""}=typeof r=="string"?La(r):r;return{pathname:i?i.startsWith("/")?i:qd(i,t):t,search:Gd(s),hash:Qd(o)}}function qd(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function o4(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hd(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Q4(r){let t=Hd(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function K4(r,t,i,s=!1){let o;typeof r=="string"?o=La(r):(o={...r},te(!o.pathname||!o.pathname.includes("?"),o4("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),o4("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),o4("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,m;if(f==null)m=i;else{let S=t.length-1;if(!s&&f.startsWith("..")){let R=f.split("/");for(;R[0]==="..";)R.shift(),S-=1;o.pathname=R.join("/")}m=S>=0?t[S]:"/"}let p=jd(o,m),y=f&&f!=="/"&&f.endsWith("/"),C=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(y||C)&&(p.pathname+="/"),p}var Fi=r=>r.join("/").replace(/\/\/+/g,"/"),Fd=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Gd=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Qd=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Kd(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Ef=["POST","PUT","PATCH","DELETE"];new Set(Ef);var Yd=["GET",...Ef];new Set(Yd);var Gs=Q.createContext(null);Gs.displayName="DataRouter";var xc=Q.createContext(null);xc.displayName="DataRouterState";var Tf=Q.createContext({isTransitioning:!1});Tf.displayName="ViewTransition";var $d=Q.createContext(new Map);$d.displayName="Fetchers";var Xd=Q.createContext(null);Xd.displayName="Await";var Hn=Q.createContext(null);Hn.displayName="Navigation";var Ao=Q.createContext(null);Ao.displayName="Location";var gi=Q.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Y4=Q.createContext(null);Y4.displayName="RouteError";function Zd(r,{relative:t}={}){te(Qs(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Q.useContext(Hn),{hash:o,pathname:c,search:f}=So(r,{relative:t}),m=c;return i!=="/"&&(m=c==="/"?i:Fi([i,c])),s.createHref({pathname:m,search:f,hash:o})}function Qs(){return Q.useContext(Ao)!=null}function Kr(){return te(Qs(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(Ao).location}var Af="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sf(r){Q.useContext(Hn).static||Q.useLayoutEffect(r)}function Vc(){let{isDataRoute:r}=Q.useContext(gi);return r?cm():Wd()}function Wd(){te(Qs(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(Gs),{basename:t,navigator:i}=Q.useContext(Hn),{matches:s}=Q.useContext(gi),{pathname:o}=Kr(),c=JSON.stringify(Q4(s)),f=Q.useRef(!1);return Sf(()=>{f.current=!0}),Q.useCallback((p,y={})=>{if(kn(f.current,Af),!f.current)return;if(typeof p=="number"){i.go(p);return}let C=K4(p,JSON.parse(c),o,y.relative==="path");r==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:Fi([t,C.pathname])),(y.replace?i.replace:i.push)(C,y.state,y)},[t,i,c,o,r])}Q.createContext(null);function So(r,{relative:t}={}){let{matches:i}=Q.useContext(gi),{pathname:s}=Kr(),o=JSON.stringify(Q4(i));return Q.useMemo(()=>K4(r,JSON.parse(o),s,t==="path"),[r,o,s,t])}function Jd(r,t){return bf(r,t)}function bf(r,t,i,s){var rt;te(Qs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:c}=Q.useContext(Hn),{matches:f}=Q.useContext(gi),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",C=m?m.pathnameBase:"/",S=m&&m.route;{let it=S&&S.path||"";wf(y,!S||it.endsWith("*")||it.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${it}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${it}"> to <Route path="${it==="/"?"*":`${it}/*`}">.`)}let R=Kr(),I;if(t){let it=typeof t=="string"?La(t):t;te(C==="/"||((rt=it.pathname)==null?void 0:rt.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${it.pathname}" was given in the \`location\` prop.`),I=it}else I=R;let N=I.pathname||"/",F=N;if(C!=="/"){let it=C.replace(/^\//,"").split("/");F="/"+N.replace(/^\//,"").split("/").slice(it.length).join("/")}let B=!c&&i&&i.matches&&i.matches.length>0?i.matches:vf(r,{pathname:F});kn(S||B!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),kn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=rm(B&&B.map(it=>Object.assign({},it,{params:Object.assign({},p,it.params),pathname:Fi([C,o.encodeLocation?o.encodeLocation(it.pathname).pathname:it.pathname]),pathnameBase:it.pathnameBase==="/"?C:Fi([C,o.encodeLocation?o.encodeLocation(it.pathnameBase).pathname:it.pathnameBase])})),f,i,s);return t&&$?Q.createElement(Ao.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},$):$}function tm(){let r=um(),t=Kd(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},t),i?Q.createElement("pre",{style:o},i):null,f)}var em=Q.createElement(tm,null),nm=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?Q.createElement(gi.Provider,{value:this.props.routeContext},Q.createElement(Y4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function im({routeContext:r,match:t,children:i}){let s=Q.useContext(Gs);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(gi.Provider,{value:r},i)}function rm(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let o=r,c=i==null?void 0:i.errors;if(c!=null){let p=o.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);te(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(i)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:C,errors:S}=i,R=y.route.loader&&!C.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||R){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,C)=>{let S,R=!1,I=null,N=null;i&&(S=c&&y.route.id?c[y.route.id]:void 0,I=y.route.errorElement||em,f&&(m<0&&C===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,N=null):m===C&&(R=!0,N=y.route.hydrateFallbackElement||null)));let F=t.concat(o.slice(0,C+1)),B=()=>{let $;return S?$=I:R?$=N:y.route.Component?$=Q.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,Q.createElement(im,{match:y,routeContext:{outlet:p,matches:F,isDataRoute:i!=null},children:$})};return i&&(y.route.ErrorBoundary||y.route.errorElement||C===0)?Q.createElement(nm,{location:i.location,revalidation:i.revalidation,component:I,error:S,children:B(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):B()},null)}function $4(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function am(r){let t=Q.useContext(Gs);return te(t,$4(r)),t}function sm(r){let t=Q.useContext(xc);return te(t,$4(r)),t}function lm(r){let t=Q.useContext(gi);return te(t,$4(r)),t}function X4(r){let t=lm(r),i=t.matches[t.matches.length-1];return te(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function om(){return X4("useRouteId")}function um(){var s;let r=Q.useContext(Y4),t=sm("useRouteError"),i=X4("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function cm(){let{router:r}=am("useNavigate"),t=X4("useNavigate"),i=Q.useRef(!1);return Sf(()=>{i.current=!0}),Q.useCallback(async(o,c={})=>{kn(i.current,Af),i.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:t,...c}))},[r,t])}var Z6={};function wf(r,t,i){!t&&!Z6[r]&&(Z6[r]=!0,kn(!1,i))}Q.memo(hm);function hm({routes:r,future:t,state:i}){return bf(r,void 0,i,t)}function fm({to:r,replace:t,state:i,relative:s}){te(Qs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=Q.useContext(Hn);kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=Q.useContext(gi),{pathname:f}=Kr(),m=Vc(),p=K4(r,Q4(c),f,s==="path"),y=JSON.stringify(p);return Q.useEffect(()=>{m(JSON.parse(y),{replace:t,state:i,relative:s})},[m,y,s,t,i]),null}function Nr(r){te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dm({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:o,static:c=!1}){te(!Qs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof i=="string"&&(i=La(i));let{pathname:p="/",search:y="",hash:C="",state:S=null,key:R="default"}=i,I=Q.useMemo(()=>{let N=Gi(p,f);return N==null?null:{location:{pathname:N,search:y,hash:C,state:S,key:R},navigationType:s}},[f,p,y,C,S,R,s]);return kn(I!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${C}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:Q.createElement(Hn.Provider,{value:m},Q.createElement(Ao.Provider,{children:t,value:I}))}function mm({children:r,location:t}){return Jd(T4(r),t)}function T4(r,t=[]){let i=[];return Q.Children.forEach(r,(s,o)=>{if(!Q.isValidElement(s))return;let c=[...t,o];if(s.type===Q.Fragment){i.push.apply(i,T4(s.props.children,c));return}te(s.type===Nr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),te(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=T4(s.props.children,c)),i.push(f)}),i}var sc="get",lc="application/x-www-form-urlencoded";function Nc(r){return r!=null&&typeof r.tagName=="string"}function pm(r){return Nc(r)&&r.tagName.toLowerCase()==="button"}function gm(r){return Nc(r)&&r.tagName.toLowerCase()==="form"}function ym(r){return Nc(r)&&r.tagName.toLowerCase()==="input"}function vm(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function _m(r,t){return r.button===0&&(!t||t==="_self")&&!vm(r)}var Ju=null;function Cm(){if(Ju===null)try{new FormData(document.createElement("form"),0),Ju=!1}catch{Ju=!0}return Ju}var Em=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function u4(r){return r!=null&&!Em.has(r)?(kn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):r}function Tm(r,t){let i,s,o,c,f;if(gm(r)){let m=r.getAttribute("action");s=m?Gi(m,t):null,i=r.getAttribute("method")||sc,o=u4(r.getAttribute("enctype"))||lc,c=new FormData(r)}else if(pm(r)||ym(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?Gi(p,t):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||sc,o=u4(r.getAttribute("formenctype"))||u4(m.getAttribute("enctype"))||lc,c=new FormData(m,r),!Cm()){let{name:y,type:C,value:S}=r;if(C==="image"){let R=y?`${y}.`:"";c.append(`${R}x`,"0"),c.append(`${R}y`,"0")}else y&&c.append(y,S)}}else{if(Nc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=sc,s=null,o=lc,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:o,formData:c,body:f}}function Z4(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Am(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sm(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function bm(r,t,i){let s=await Promise.all(r.map(async o=>{let c=t.routes[o.route.id];if(c){let f=await Am(c,i);return f.links?f.links():[]}return[]}));return Mm(s.flat(1).filter(Sm).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function W6(r,t,i,s,o,c){let f=(p,y)=>i[y]?p.route.id!==i[y].route.id:!0,m=(p,y)=>{var C;return i[y].pathname!==p.pathname||((C=i[y].route.path)==null?void 0:C.endsWith("*"))&&i[y].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,y)=>f(p,y)||m(p,y)):c==="data"?t.filter((p,y)=>{var S;let C=s.routes[p.route.id];if(!C||!C.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=i[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function wm(r,t,{includeHydrateFallback:i}={}){return Rm(r.map(s=>{let o=t.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Rm(r){return[...new Set(r)]}function Dm(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function Mm(r,t){let i=new Set;return new Set(t),r.reduce((s,o)=>{let c=JSON.stringify(Dm(o));return i.has(c)||(i.add(c),s.push({key:c,link:o})),s},[])}function Im(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&Gi(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Rf(){let r=Q.useContext(Gs);return Z4(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function xm(){let r=Q.useContext(xc);return Z4(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var W4=Q.createContext(void 0);W4.displayName="FrameworkContext";function Df(){let r=Q.useContext(W4);return Z4(r,"You must render this element inside a <HydratedRouter> element"),r}function Vm(r,t){let i=Q.useContext(W4),[s,o]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:C,onTouchStart:S}=t,R=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let F=$=>{$.forEach(rt=>{f(rt.isIntersecting)})},B=new IntersectionObserver(F,{threshold:.5});return R.current&&B.observe(R.current),()=>{B.disconnect()}}},[r]),Q.useEffect(()=>{if(s){let F=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(F)}}},[s]);let I=()=>{o(!0)},N=()=>{o(!1),f(!1)};return i?r!=="intent"?[c,R,{}]:[c,R,{onFocus:so(m,I),onBlur:so(p,N),onMouseEnter:so(y,I),onMouseLeave:so(C,N),onTouchStart:so(S,I)}]:[!1,R,{}]}function so(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function Nm({page:r,...t}){let{router:i}=Rf(),s=Q.useMemo(()=>vf(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?Q.createElement(km,{page:r,matches:s,...t}):null}function Om(r){let{manifest:t,routeModules:i}=Df(),[s,o]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return bm(r,t,i).then(f=>{c||o(f)}),()=>{c=!0}},[r,t,i]),s}function km({page:r,matches:t,...i}){let s=Kr(),{manifest:o,routeModules:c}=Df(),{basename:f}=Rf(),{loaderData:m,matches:p}=xm(),y=Q.useMemo(()=>W6(r,t,p,o,s,"data"),[r,t,p,o,s]),C=Q.useMemo(()=>W6(r,t,p,o,s,"assets"),[r,t,p,o,s]),S=Q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let N=new Set,F=!1;if(t.forEach($=>{var it;let rt=o.routes[$.route.id];!rt||!rt.hasLoader||(!y.some(gt=>gt.route.id===$.route.id)&&$.route.id in m&&((it=c[$.route.id])!=null&&it.shouldRevalidate)||rt.hasClientLoader?F=!0:N.add($.route.id))}),N.size===0)return[];let B=Im(r,f);return F&&N.size>0&&B.searchParams.set("_routes",t.filter($=>N.has($.route.id)).map($=>$.route.id).join(",")),[B.pathname+B.search]},[f,m,s,o,y,t,r,c]),R=Q.useMemo(()=>wm(C,o),[C,o]),I=Om(C);return Q.createElement(Q.Fragment,null,S.map(N=>Q.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...i})),R.map(N=>Q.createElement("link",{key:N,rel:"modulepreload",href:N,...i})),I.map(({key:N,link:F})=>Q.createElement("link",{key:N,...F})))}function Um(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Mf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mf&&(window.__reactRouterVersion="7.3.0")}catch{}function Lm({basename:r,children:t,window:i}){let s=Q.useRef();s.current==null&&(s.current=bd({window:i,v5Compat:!0}));let o=s.current,[c,f]=Q.useState({action:o.action,location:o.location}),m=Q.useCallback(p=>{Q.startTransition(()=>f(p))},[f]);return Q.useLayoutEffect(()=>o.listen(m),[o,m]),Q.createElement(dm,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:o})}var If=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Os=Q.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:o,reloadDocument:c,replace:f,state:m,target:p,to:y,preventScrollReset:C,viewTransition:S,...R},I){let{basename:N}=Q.useContext(Hn),F=typeof y=="string"&&If.test(y),B,$=!1;if(typeof y=="string"&&F&&(B=y,Mf))try{let A=new URL(window.location.href),w=y.startsWith("//")?new URL(A.protocol+y):new URL(y),x=Gi(w.pathname,N);w.origin===A.origin&&x!=null?y=x+w.search+w.hash:$=!0}catch{kn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let rt=Zd(y,{relative:o}),[it,gt,ht]=Vm(s,R),Ct=jm(y,{replace:f,state:m,target:p,preventScrollReset:C,relative:o,viewTransition:S});function V(A){t&&t(A),A.defaultPrevented||Ct(A)}let b=Q.createElement("a",{...R,...ht,href:B||rt,onClick:$||c?t:V,ref:Um(I,gt),target:p,"data-discover":!F&&i==="render"?"true":void 0});return it&&!F?Q.createElement(Q.Fragment,null,b,Q.createElement(Nm,{page:rt})):b});Os.displayName="Link";var zm=Q.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:f,viewTransition:m,children:p,...y},C){let S=So(f,{relative:y.relative}),R=Kr(),I=Q.useContext(xc),{navigator:N,basename:F}=Q.useContext(Hn),B=I!=null&&Qm(S)&&m===!0,$=N.encodeLocation?N.encodeLocation(S).pathname:S.pathname,rt=R.pathname,it=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(rt=rt.toLowerCase(),it=it?it.toLowerCase():null,$=$.toLowerCase()),it&&F&&(it=Gi(it,F)||it);const gt=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ht=rt===$||!o&&rt.startsWith($)&&rt.charAt(gt)==="/",Ct=it!=null&&(it===$||!o&&it.startsWith($)&&it.charAt($.length)==="/"),V={isActive:ht,isPending:Ct,isTransitioning:B},b=ht?t:void 0,A;typeof s=="function"?A=s(V):A=[s,ht?"active":null,Ct?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(V):c;return Q.createElement(Os,{...y,"aria-current":b,className:A,ref:C,style:w,to:f,viewTransition:m},typeof p=="function"?p(V):p)});zm.displayName="NavLink";var Pm=Q.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:o,state:c,method:f=sc,action:m,onSubmit:p,relative:y,preventScrollReset:C,viewTransition:S,...R},I)=>{let N=Fm(),F=Gm(m,{relative:y}),B=f.toLowerCase()==="get"?"get":"post",$=typeof m=="string"&&If.test(m),rt=it=>{if(p&&p(it),it.defaultPrevented)return;it.preventDefault();let gt=it.nativeEvent.submitter,ht=(gt==null?void 0:gt.getAttribute("formmethod"))||f;N(gt||it.currentTarget,{fetcherKey:t,method:ht,navigate:i,replace:o,state:c,relative:y,preventScrollReset:C,viewTransition:S})};return Q.createElement("form",{ref:I,method:B,action:F,onSubmit:s?p:rt,...R,"data-discover":!$&&r==="render"?"true":void 0})});Pm.displayName="Form";function Bm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xf(r){let t=Q.useContext(Gs);return te(t,Bm(r)),t}function jm(r,{target:t,replace:i,state:s,preventScrollReset:o,relative:c,viewTransition:f}={}){let m=Vc(),p=Kr(),y=So(r,{relative:c});return Q.useCallback(C=>{if(_m(C,t)){C.preventDefault();let S=i!==void 0?i:go(p)===go(y);m(r,{replace:S,state:s,preventScrollReset:o,relative:c,viewTransition:f})}},[p,m,y,i,s,t,r,o,c,f])}var qm=0,Hm=()=>`__${String(++qm)}__`;function Fm(){let{router:r}=xf("useSubmit"),{basename:t}=Q.useContext(Hn),i=om();return Q.useCallback(async(s,o={})=>{let{action:c,method:f,encType:m,formData:p,body:y}=Tm(s,t);if(o.navigate===!1){let C=o.fetcherKey||Hm();await r.fetch(C,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,t,i])}function Gm(r,{relative:t}={}){let{basename:i}=Q.useContext(Hn),s=Q.useContext(gi);te(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...So(r||".",{relative:t})},f=Kr();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(C=>C==="")){m.delete("index"),p.filter(S=>S).forEach(S=>m.append("index",S));let C=m.toString();c.search=C?`?${C}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Fi([i,c.pathname])),go(c)}function Qm(r,t={}){let i=Q.useContext(Tf);te(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=xf("useViewTransitionState"),o=So(r,{relative:t.relative});if(!i.isTransitioning)return!1;let c=Gi(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Gi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return mc(o.pathname,f)!=null||mc(o.pathname,c)!=null}new TextEncoder;const bo=({bgcolor:r="rgb(94, 136, 94, 0)",boxShadow:t=!1})=>j.jsxs("div",{id:"navbar",style:{backgroundColor:r,boxShadow:t?"0 4px 8px -2px #222":"none"},children:[j.jsx("div",{className:"link",id:"homepage",children:j.jsx(Os,{className:"a",to:"/HBWGreentrails/",children:"Home"})}),j.jsx("div",{className:"link",id:"volunteer",children:j.jsx(Os,{className:"a",to:"/volenterpage/",children:"Volunteer!!"})}),j.jsx("div",{className:"link",id:"leaderboard",children:j.jsx(Os,{className:"a",to:"/leaderboard/",children:"Leaderboards"})}),j.jsx("div",{className:"link",id:"Signup",children:j.jsx(Os,{className:"a",to:"/signup/",children:"Sign up"})})]}),Km=""+new URL("groupme-DgGEjEd7.png",import.meta.url).href;function Ym(r){const t=[],i=new Date;i.setHours(0,0,0,0);let s=new Date(r);for(s.setHours(0,0,0,0);s<i;)s.setDate(s.getDate()+14);r=s;for(let o=0;o<3;o++){const c=new Date(r);c.setDate(r.getDate()+o*14),t.push({date:c,id:o+1})}return t}function $m({nextMeetingDate:r}){const t=Ym(r);return j.jsx("div",{children:t.map(i=>j.jsxs("p",{children:[i.date.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})," ","in Hang's room (510) at lunch!"]},i.id))})}const J6=()=>j.jsxs("div",{style:{backgroundColor:"rgb(17, 69, 59)"},children:[j.jsx(bo,{bgcolor:"#00000000",boxShadow:!1}),j.jsx("div",{className:"header",children:j.jsx("h1",{className:"first",children:"HBW Green Trails Club"})}),j.jsxs("div",{className:"importantinfo",children:[j.jsxs("div",{className:"groupme",children:[j.jsx("a",{href:"https://groupme.com/join_group/103922254/4v3j7TI7",children:j.jsx("img",{src:Km,alt:"Join our GroupMe!",width:"200px"})}),j.jsx("p",{children:"Click here to join our GroupMe for updates on meetings and events!!"})]}),j.jsxs("div",{className:"nextmeeting",children:[j.jsx("h2",{children:"Upcoming Meetings:"}),j.jsx($m,{nextMeetingDate:new Date("2025-11-13T12:35:00")})]})]})]}),th=()=>j.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 100 300 500",width:"100%",height:"100%",children:[j.jsx("rect",{x:"96.935",y:"583.508",width:"103.723",height:"89.44",style:{fill:"rgb(92, 60, 36)",stroke:"rgba(0, 0, 0, 0)"}}),j.jsx("path",{d:"M 151.753 331.446 L 296.742 595.399 L 6.763 595.399 L 151.753 331.446 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),j.jsx("path",{d:"M 151.812 229.395 L 261.692 461.009 L 41.931 461.009 L 151.812 229.395 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),j.jsx("path",{d:"M 152.135 182.123 L 223.661 334.201 L 80.609 334.201 L 152.135 182.123 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}})]}),eh=["#FF69B4","#FF1493","#FFB6C1","#FF69B4","#ff6f6f","#d161f7","#8a61ff","#61d7ff","#61ff8a","#ff6161","#ff61d7","#d7ff61"];function Xm({children:r,flowers:t=0,grass:i=200,tileSize:s=0}){const o=Q.useRef(null),c=Q.useRef(null);return Q.useEffect(()=>{const f=o.current,m=c.current;if(!f||!m)return;const p=f.getContext("2d");if(!p)return;let y=0,C=0;function S(){const V=m.getBoundingClientRect(),b=window.devicePixelRatio||1;y=Math.max(1,Math.floor(V.width)),C=Math.max(1,Math.floor(V.height)),f.width=Math.max(1,Math.floor(V.width*b)),f.height=Math.max(1,Math.floor(V.height*b)),f.style.width=`${V.width}px`,f.style.height=`${V.height}px`,p.setTransform(b,0,0,b,0,0),ht()}function R(V,b,A,w){p.save(),p.translate(V,b);const x=Math.random()*Math.PI*2;p.rotate(x),p.fillStyle=w,p.restore()}function I(V){for(let b=0;b<V;b++){const A=Math.random()*(y+100)-50,w=Math.random()*(C+100)-50,x=Math.min(Math.max(Math.random()*26+4,4),30);R(A,w,x,`rgb(0, ${Math.floor(Math.random()*100+100)}, 0)`)}}function N(V,b,A,w,x,L){p.save(),p.translate(V,b),p.rotate(x),p.beginPath(),p.moveTo(0,0),p.lineTo(-w/2,-A),p.lineTo(w/2,-A),p.closePath(),p.fillStyle=L,p.fill(),p.restore()}function F(V,b,A){for(let w=0;w<A;w++){const x=(Math.random()-.5)*8,L=(Math.random()-.5)*8,M=10+Math.random()*8,wt=2+Math.random()*1.5,It=-.2+Math.random()*.4,tt=["#7CB342","#8BC34A","#689F38","#76B041"],K=tt[Math.floor(Math.random()*tt.length)];N(V+x,b+L,M,wt,It,K)}}function B(V){for(let b=0;b<V;b++){const A=Math.random()*y,w=Math.random()*C,x=Math.floor(3+Math.random()*4);F(A,w,x)}}function $(V,b,A){p.save(),p.translate(V,b),p.fillStyle=eh[Math.floor(Math.random()*eh.length)];const w=5;for(let x=0;x<w;x++){const L=x*(2*Math.PI/w),M=Math.cos(L)*A,wt=Math.sin(L)*A;p.beginPath(),p.arc(M,wt,A/2,0,2*Math.PI),p.fill()}p.beginPath(),p.arc(0,0,A/2,0,2*Math.PI),p.fill(),p.restore()}function rt(V){for(let b=0;b<V;b++)$(Math.random()*y,Math.random()*C,4+Math.random()*4)}function it(){p.beginPath(),p.moveTo(y/2+30,5),p.lineTo(y/2-30,5),p.lineTo(y/2,40),p.stroke(),p.closePath(),p.fill()}function gt(V,b){B(b),rt(V)}function ht(){p.clearRect(0,0,y,C),gt(t,i),it(),I(8)}S();const Ct=new ResizeObserver(S);return Ct.observe(m),()=>{Ct.disconnect()}},[t,i,s]),j.jsxs("div",{ref:c,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[j.jsx("canvas",{ref:o,style:{position:"absolute",left:0,top:0,zIndex:0,pointerEvents:"none"}}),j.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}const Zm=()=>j.jsxs("div",{children:[j.jsx("div",{id:"tree1",children:j.jsx(th,{})}),j.jsx("div",{id:"tree2",children:j.jsx(th,{})}),j.jsx("footer",{children:j.jsx(Xm,{children:j.jsx("div",{id:"road"})})})]}),Wm=()=>j.jsx("div",{children:j.jsx("footer",{})}),Jm=()=>j.jsx(Zm,{}),tp=()=>j.jsx("div",{id:"fullroad"}),Oc=({message:r,shadow:t})=>j.jsx("header",{className:"App-header",children:j.jsx("h1",{id:"GreenTrails",style:{textShadow:t?"2px 2px black":"none",color:"rgb(255, 255, 255, 1)"},children:r})}),ep=()=>{};var nh={};/**
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
 */const Vf=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},np=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const o=r[i++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[i++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[i++],f=r[i++],m=r[i++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[i++],f=r[i++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return t.join("")},Nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,C=c>>2,S=(c&3)<<4|m>>4;let R=(m&15)<<2|y>>6,I=y&63;p||(I=64,f||(R=64)),s.push(i[C],i[S],i[R],i[I])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Vf(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):np(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=i[r.charAt(o++)],m=o<r.length?i[r.charAt(o)]:0;++o;const y=o<r.length?i[r.charAt(o)]:64;++o;const S=o<r.length?i[r.charAt(o)]:64;if(++o,c==null||m==null||y==null||S==null)throw new ip;const R=c<<2|m>>4;if(s.push(R),y!==64){const I=m<<4&240|y>>2;if(s.push(I),S!==64){const N=y<<6&192|S;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rp=function(r){const t=Vf(r);return Nf.encodeByteArray(t,!0)},pc=function(r){return rp(r).replace(/\./g,"")},ap=function(r){try{return Nf.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lp=()=>sp().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof nh>"u")return;const r=nh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},up=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&ap(r[1]);return t&&JSON.parse(t)},J4=()=>{try{return ep()||lp()||op()||up()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},cp=r=>{var t,i;return(i=(t=J4())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},hp=r=>{const t=cp(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),s]:[t.substring(0,i),s]},Of=()=>{var r;return(r=J4())===null||r===void 0?void 0:r.config};/**
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
 */class fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,s))}}}/**
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
 */function dp(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[pc(JSON.stringify(i)),pc(JSON.stringify(f)),""].join(".")}/**
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
 */function mp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pp(){var r;const t=(r=J4())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yp(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Uf(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}function vp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _p="FirebaseError";class Yr extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=_p,Object.setPrototypeOf(this,Yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kc.prototype.create)}}class kc{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],f=c?Cp(c,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Yr(o,m,s)}}function Cp(r,t){return r.replace(Ep,(i,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const Ep=/\{\$([^}]+)}/g;function Us(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const o of i){if(!s.includes(o))return!1;const c=r[o],f=t[o];if(ih(c)&&ih(f)){if(!Us(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!i.includes(o))return!1;return!0}function ih(r){return r!==null&&typeof r=="object"}/**
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
 */const Tp=1e3,Ap=2,Sp=4*60*60*1e3,bp=.5;function rh(r,t=Tp,i=Ap){const s=t*Math.pow(i,r),o=Math.round(bp*s*(Math.random()-.5)*2);return Math.min(Sp,s+o)}/**
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
 */function fi(r){return r&&r._delegate?r._delegate:r}class Qi{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ma="[DEFAULT]";/**
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
 */class wp{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new fp;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dp(t))try{this.getOrInitializeService({instanceIdentifier:Ma})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=Ma){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ma){return this.instances.has(t)}getOptions(t=Ma){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&f.resolve(o)}return o}onInit(t,i){var s;const o=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&t(f,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const o of s)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ma){return this.component?this.component.multipleInstances?t:Ma:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(r){return r===Ma?void 0:r}function Dp(r){return r.instantiationMode==="EAGER"}/**
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
 */class Mp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new wp(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Bt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Bt||(Bt={}));const Ip={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},xp=Bt.INFO,Vp={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},Np=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=Vp[t];if(o)console[o](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class t2{constructor(t){this.name=t,this._logLevel=xp,this._logHandler=Np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ip[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const Op=(r,t)=>t.some(i=>r instanceof i);let ah,sh;function kp(){return ah||(ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,A4=new WeakMap,zf=new WeakMap,c4=new WeakMap,e2=new WeakMap;function Lp(r){const t=new Promise((i,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(kr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Lf.set(i,r)}).catch(()=>{}),e2.set(t,r),t}function zp(r){if(A4.has(r))return;const t=new Promise((i,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});A4.set(r,t)}let S4={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return A4.get(r);if(t==="objectStoreNames")return r.objectStoreNames||zf.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return kr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Pp(r){S4=r(S4)}function Bp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(h4(this),t,...i);return zf.set(s,t.sort?t.sort():[t]),kr(s)}:Up().includes(r)?function(...t){return r.apply(h4(this),t),kr(Lf.get(this))}:function(...t){return kr(r.apply(h4(this),t))}}function jp(r){return typeof r=="function"?Bp(r):(r instanceof IDBTransaction&&zp(r),Op(r,kp())?new Proxy(r,S4):r)}function kr(r){if(r instanceof IDBRequest)return Lp(r);if(c4.has(r))return c4.get(r);const t=jp(r);return t!==r&&(c4.set(r,t),e2.set(t,r)),t}const h4=r=>e2.get(r);function Pf(r,t,{blocked:i,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,t),m=kr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(kr(f.result),p.oldVersion,p.newVersion,kr(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const qp=["get","getKey","getAll","getAllKeys","count"],Hp=["put","add","delete","clear"],f4=new Map;function lh(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(f4.get(t))return f4.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,o=Hp.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(o||qp.includes(i)))return;const c=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),o&&p.done]))[0]};return f4.set(t,c),c}Pp(r=>({...r,get:(t,i,s)=>lh(t,i)||r.get(t,i,s),has:(t,i)=>!!lh(t,i)||r.has(t,i)}));/**
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
 */class Fp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Gp(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function Gp(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const b4="@firebase/app",oh="0.11.2";/**
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
 */const Ki=new t2("@firebase/app"),Qp="@firebase/app-compat",Kp="@firebase/analytics-compat",Yp="@firebase/analytics",$p="@firebase/app-check-compat",Xp="@firebase/app-check",Zp="@firebase/auth",Wp="@firebase/auth-compat",Jp="@firebase/database",tg="@firebase/data-connect",eg="@firebase/database-compat",ng="@firebase/functions",ig="@firebase/functions-compat",rg="@firebase/installations",ag="@firebase/installations-compat",sg="@firebase/messaging",lg="@firebase/messaging-compat",og="@firebase/performance",ug="@firebase/performance-compat",cg="@firebase/remote-config",hg="@firebase/remote-config-compat",fg="@firebase/storage",dg="@firebase/storage-compat",mg="@firebase/firestore",pg="@firebase/vertexai",gg="@firebase/firestore-compat",yg="firebase",vg="11.4.0";/**
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
 */const w4="[DEFAULT]",_g={[b4]:"fire-core",[Qp]:"fire-core-compat",[Yp]:"fire-analytics",[Kp]:"fire-analytics-compat",[Xp]:"fire-app-check",[$p]:"fire-app-check-compat",[Zp]:"fire-auth",[Wp]:"fire-auth-compat",[Jp]:"fire-rtdb",[tg]:"fire-data-connect",[eg]:"fire-rtdb-compat",[ng]:"fire-fn",[ig]:"fire-fn-compat",[rg]:"fire-iid",[ag]:"fire-iid-compat",[sg]:"fire-fcm",[lg]:"fire-fcm-compat",[og]:"fire-perf",[ug]:"fire-perf-compat",[cg]:"fire-rc",[hg]:"fire-rc-compat",[fg]:"fire-gcs",[dg]:"fire-gcs-compat",[mg]:"fire-fst",[gg]:"fire-fst-compat",[pg]:"fire-vertex","fire-js":"fire-js",[yg]:"fire-js-all"};/**
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
 */const gc=new Map,Cg=new Map,R4=new Map;function uh(r,t){try{r.container.addComponent(t)}catch(i){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function Br(r){const t=r.name;if(R4.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;R4.set(t,r);for(const i of gc.values())uh(i,r);for(const i of Cg.values())uh(i,r);return!0}function wo(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Eg(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new kc("app","Firebase",Tg);/**
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
 */class Ag{constructor(t,i,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Sg=vg;function Bf(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:w4,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Ur.create("bad-app-name",{appName:String(o)});if(i||(i=Of()),!i)throw Ur.create("no-options");const c=gc.get(o);if(c){if(Us(i,c.options)&&Us(s,c.config))return c;throw Ur.create("duplicate-app",{appName:o})}const f=new Mp(o);for(const p of R4.values())f.addComponent(p);const m=new Ag(i,s,f);return gc.set(o,m),m}function jf(r=w4){const t=gc.get(r);if(!t&&r===w4&&Of())return Bf();if(!t)throw Ur.create("no-app",{appName:r});return t}function oi(r,t,i){var s;let o=(s=_g[r])!==null&&s!==void 0?s:r;i&&(o+=`-${i}`);const c=o.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const m=[`Unable to register library "${o}" with version "${t}":`];c&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ki.warn(m.join(" "));return}Br(new Qi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const bg="firebase-heartbeat-database",wg=1,yo="firebase-heartbeat-store";let d4=null;function qf(){return d4||(d4=Pf(bg,wg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(yo)}catch(i){console.warn(i)}}}}).catch(r=>{throw Ur.create("idb-open",{originalErrorMessage:r.message})})),d4}async function Rg(r){try{const i=(await qf()).transaction(yo),s=await i.objectStore(yo).get(Hf(r));return await i.done,s}catch(t){if(t instanceof Yr)Ki.warn(t.message);else{const i=Ur.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(i.message)}}}async function ch(r,t){try{const s=(await qf()).transaction(yo,"readwrite");await s.objectStore(yo).put(t,Hf(r)),await s.done}catch(i){if(i instanceof Yr)Ki.warn(i.message);else{const s=Ur.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Ki.warn(s.message)}}}function Hf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Dg=1024,Mg=30;class Ig{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Vg(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=hh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Mg){const f=Ng(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ki.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=hh(),{heartbeatsToSend:s,unsentEntries:o}=xg(this._heartbeatsCache.heartbeats),c=pc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Ki.warn(i),""}}}function hh(){return new Date().toISOString().substring(0,10)}function xg(r,t=Dg){const i=[];let s=r.slice();for(const o of r){const c=i.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),fh(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),fh(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Vg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kf()?Uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Rg(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ch(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ch(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function fh(r){return pc(JSON.stringify({version:2,heartbeats:r})).length}function Ng(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
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
 */function Og(r){Br(new Qi("platform-logger",t=>new Fp(t),"PRIVATE")),Br(new Qi("heartbeat",t=>new Ig(t),"PRIVATE")),oi(b4,oh,r),oi(b4,oh,"esm2017"),oi("fire-js","")}Og("");var kg="firebase",Ug="11.4.0";/**
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
 */oi(kg,Ug,"app");const Ff="@firebase/installations",n2="0.6.13";/**
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
 */const Gf=1e4,Qf=`w:${n2}`,Kf="FIS_v2",Lg="https://firebaseinstallations.googleapis.com/v1",zg=60*60*1e3,Pg="installations",Bg="Installations";/**
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
 */const jg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Va=new kc(Pg,Bg,jg);function Yf(r){return r instanceof Yr&&r.code.includes("request-failed")}/**
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
 */function $f({projectId:r}){return`${Lg}/projects/${r}/installations`}function Xf(r){return{token:r.token,requestStatus:2,expiresIn:Hg(r.expiresIn),creationTime:Date.now()}}async function Zf(r,t){const s=(await t.json()).error;return Va.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Wf({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function qg(r,{refreshToken:t}){const i=Wf(r);return i.append("Authorization",Fg(t)),i}async function Jf(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Hg(r){return Number(r.replace("s","000"))}function Fg(r){return`${Kf} ${r}`}/**
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
 */async function Gg({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const s=$f(r),o=Wf(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:i,authVersion:Kf,appId:r.appId,sdkVersion:Qf},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await Jf(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:Xf(y.authToken)}}else throw await Zf("Create Installation",p)}/**
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
 */function t9(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function Qg(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kg=/^[cdef][\w-]{21}$/,D4="";function Yg(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=$g(r);return Kg.test(i)?i:D4}catch{return D4}}function $g(r){return Qg(r).substr(0,22)}/**
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
 */function Uc(r){return`${r.appName}!${r.appId}`}/**
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
 */const e9=new Map;function n9(r,t){const i=Uc(r);i9(i,t),Xg(i,t)}function i9(r,t){const i=e9.get(r);if(i)for(const s of i)s(t)}function Xg(r,t){const i=Zg();i&&i.postMessage({key:r,fid:t}),Wg()}let Ia=null;function Zg(){return!Ia&&"BroadcastChannel"in self&&(Ia=new BroadcastChannel("[Firebase] FID Change"),Ia.onmessage=r=>{i9(r.data.key,r.data.fid)}),Ia}function Wg(){e9.size===0&&Ia&&(Ia.close(),Ia=null)}/**
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
 */const Jg="firebase-installations-database",ty=1,Na="firebase-installations-store";let m4=null;function i2(){return m4||(m4=Pf(Jg,ty,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Na)}}})),m4}async function yc(r,t){const i=Uc(r),o=(await i2()).transaction(Na,"readwrite"),c=o.objectStore(Na),f=await c.get(i);return await c.put(t,i),await o.done,(!f||f.fid!==t.fid)&&n9(r,t.fid),t}async function r9(r){const t=Uc(r),s=(await i2()).transaction(Na,"readwrite");await s.objectStore(Na).delete(t),await s.done}async function Lc(r,t){const i=Uc(r),o=(await i2()).transaction(Na,"readwrite"),c=o.objectStore(Na),f=await c.get(i),m=t(f);return m===void 0?await c.delete(i):await c.put(m,i),await o.done,m&&(!f||f.fid!==m.fid)&&n9(r,m.fid),m}/**
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
 */async function r2(r){let t;const i=await Lc(r.appConfig,s=>{const o=ey(s),c=ny(r,o);return t=c.registrationPromise,c.installationEntry});return i.fid===D4?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function ey(r){const t=r||{fid:Yg(),registrationStatus:0};return a9(t)}function ny(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Va.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=iy(r,i);return{installationEntry:i,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ry(r)}:{installationEntry:t}}async function iy(r,t){try{const i=await Gg(r,t);return yc(r.appConfig,i)}catch(i){throw Yf(i)&&i.customData.serverCode===409?await r9(r.appConfig):await yc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function ry(r){let t=await dh(r.appConfig);for(;t.registrationStatus===1;)await t9(100),t=await dh(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await r2(r);return s||i}return t}function dh(r){return Lc(r,t=>{if(!t)throw Va.create("installation-not-found");return a9(t)})}function a9(r){return ay(r)?{fid:r.fid,registrationStatus:0}:r}function ay(r){return r.registrationStatus===1&&r.registrationTime+Gf<Date.now()}/**
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
 */async function sy({appConfig:r,heartbeatServiceProvider:t},i){const s=ly(r,i),o=qg(r,i),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:Qf,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await Jf(()=>fetch(s,m));if(p.ok){const y=await p.json();return Xf(y)}else throw await Zf("Generate Auth Token",p)}function ly(r,{fid:t}){return`${$f(r)}/${t}/authTokens:generate`}/**
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
 */async function a2(r,t=!1){let i;const s=await Lc(r.appConfig,c=>{if(!s9(c))throw Va.create("not-registered");const f=c.authToken;if(!t&&cy(f))return c;if(f.requestStatus===1)return i=oy(r,t),c;{if(!navigator.onLine)throw Va.create("app-offline");const m=fy(c);return i=uy(r,m),m}});return i?await i:s.authToken}async function oy(r,t){let i=await mh(r.appConfig);for(;i.authToken.requestStatus===1;)await t9(100),i=await mh(r.appConfig);const s=i.authToken;return s.requestStatus===0?a2(r,t):s}function mh(r){return Lc(r,t=>{if(!s9(t))throw Va.create("not-registered");const i=t.authToken;return dy(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function uy(r,t){try{const i=await sy(r,t),s=Object.assign(Object.assign({},t),{authToken:i});return await yc(r.appConfig,s),i}catch(i){if(Yf(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await r9(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await yc(r.appConfig,s)}throw i}}function s9(r){return r!==void 0&&r.registrationStatus===2}function cy(r){return r.requestStatus===2&&!hy(r)}function hy(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+zg}function fy(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function dy(r){return r.requestStatus===1&&r.requestTime+Gf<Date.now()}/**
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
 */async function my(r){const t=r,{installationEntry:i,registrationPromise:s}=await r2(t);return s?s.catch(console.error):a2(t).catch(console.error),i.fid}/**
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
 */async function py(r,t=!1){const i=r;return await gy(i),(await a2(i,t)).token}async function gy(r){const{registrationPromise:t}=await r2(r);t&&await t}/**
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
 */function yy(r){if(!r||!r.options)throw p4("App Configuration");if(!r.name)throw p4("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw p4(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function p4(r){return Va.create("missing-app-config-values",{valueName:r})}/**
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
 */const l9="installations",vy="installations-internal",_y=r=>{const t=r.getProvider("app").getImmediate(),i=yy(t),s=wo(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Cy=r=>{const t=r.getProvider("app").getImmediate(),i=wo(t,l9).getImmediate();return{getId:()=>my(i),getToken:o=>py(i,o)}};function Ey(){Br(new Qi(l9,_y,"PUBLIC")),Br(new Qi(vy,Cy,"PRIVATE"))}Ey();oi(Ff,n2);oi(Ff,n2,"esm2017");/**
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
 */const vc="analytics",Ty="firebase_id",Ay="origin",Sy=60*1e3,by="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",s2="https://www.googletagmanager.com/gtag/js";/**
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
 */const ln=new t2("@firebase/analytics");/**
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
 */const wy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new kc("analytics","Analytics",wy);/**
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
 */function Ry(r){if(!r.startsWith(s2)){const t=gn.create("invalid-gtag-resource",{gtagURL:r});return ln.warn(t.message),""}return r}function o9(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function Dy(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function My(r,t){const i=Dy("firebase-js-sdk-policy",{createScriptURL:Ry}),s=document.createElement("script"),o=`${s2}?l=${r}&id=${t}`;s.src=i?i==null?void 0:i.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Iy(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function xy(r,t,i,s,o,c){const f=s[o];try{if(f)await t[f];else{const p=(await o9(i)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){ln.error(m)}r("config",o,c)}async function Vy(r,t,i,s,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await o9(i);for(const p of f){const y=m.find(S=>S.measurementId===p),C=y&&t[y.appId];if(C)c.push(C);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,o||{})}catch(c){ln.error(c)}}function Ny(r,t,i,s){async function o(c,...f){try{if(c==="event"){const[m,p]=f;await Vy(r,t,i,m,p)}else if(c==="config"){const[m,p]=f;await xy(r,t,i,s,m,p)}else if(c==="consent"){const[m,p]=f;r("consent",m,p)}else if(c==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(c==="set"){const[m]=f;r("set",m)}else r(c,...f)}catch(m){ln.error(m)}}return o}function Oy(r,t,i,s,o){let c=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=Ny(c,r,t,i),{gtagCore:c,wrappedGtag:window[o]}}function ky(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(s2)&&i.src.includes(r))return i;return null}/**
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
 */const Uy=30,Ly=1e3;class zy{constructor(t={},i=Ly){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const u9=new zy;function Py(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function By(r){var t;const{appId:i,apiKey:s}=r,o={method:"GET",headers:Py(s)},c=by.replace("{app-id}",i),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function jy(r,t=u9,i){const{appId:s,apiKey:o,measurementId:c}=r.options;if(!s)throw gn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:s};throw gn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new Fy;return setTimeout(async()=>{m.abort()},Sy),c9({appId:s,apiKey:o,measurementId:c},f,m,t)}async function c9(r,{throttleEndTimeMillis:t,backoffCount:i},s,o=u9){var c;const{appId:f,measurementId:m}=r;try{await qy(s,t)}catch(p){if(m)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await By(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!Hy(y)){if(o.deleteThrottleMetadata(f),m)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const C=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?rh(i,o.intervalMillis,Uy):rh(i,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+C,backoffCount:i+1};return o.setThrottleMetadata(f,S),ln.debug(`Calling attemptFetch again in ${C} millis`),c9(r,S,s,o)}}function qy(r,t){return new Promise((i,s)=>{const o=Math.max(t-Date.now(),0),c=setTimeout(i,o);r.addEventListener(()=>{clearTimeout(c),s(gn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Hy(r){if(!(r instanceof Yr)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class Fy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Gy(r,t,i,s,o){if(o&&o.global){r("event",i,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",i,f)}}/**
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
 */async function Qy(){if(kf())try{await Uf()}catch(r){return ln.warn(gn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return ln.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ky(r,t,i,s,o,c,f){var m;const p=jy(r);p.then(I=>{i[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>ln.error(I)),t.push(p);const y=Qy().then(I=>{if(I)return s.getId()}),[C,S]=await Promise.all([p,y]);ky(c)||My(c,C.measurementId),o("js",new Date);const R=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return R[Ay]="firebase",R.update=!0,S!=null&&(R[Ty]=S),o("config",C.measurementId,R),C.measurementId}/**
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
 */class Yy{constructor(t){this.app=t}_delete(){return delete co[this.app.options.appId],Promise.resolve()}}let co={},ph=[];const gh={};let g4="dataLayer",$y="gtag",yh,h9,vh=!1;function Xy(){const r=[];if(gp()&&r.push("This is a browser extension environment."),vp()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),i=gn.create("invalid-analytics-context",{errorInfo:t});ln.warn(i.message)}}function Zy(r,t,i){Xy();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(co[s]!=null)throw gn.create("already-exists",{id:s});if(!vh){Iy(g4);const{wrappedGtag:c,gtagCore:f}=Oy(co,ph,gh,g4,$y);h9=c,yh=f,vh=!0}return co[s]=Ky(r,ph,gh,t,yh,g4,i),new Yy(r)}function Wy(r=jf()){r=fi(r);const t=wo(r,vc);return t.isInitialized()?t.getImmediate():Jy(r)}function Jy(r,t={}){const i=wo(r,vc);if(i.isInitialized()){const o=i.getImmediate();if(Us(t,i.getOptions()))return o;throw gn.create("already-initialized")}return i.initialize({options:t})}function tv(r,t,i,s){r=fi(r),Gy(h9,co[r.app.options.appId],t,i,s).catch(o=>ln.error(o))}const _h="@firebase/analytics",Ch="0.10.12";function ev(){Br(new Qi(vc,(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return Zy(s,o,i)},"PUBLIC")),Br(new Qi("analytics-internal",r,"PRIVATE")),oi(_h,Ch),oi(_h,Ch,"esm2017");function r(t){try{const i=t.getProvider(vc).getImmediate();return{logEvent:(s,o,c)=>tv(i,s,o,c)}}catch(i){throw gn.create("interop-component-reg-failed",{reason:i})}}}ev();var Eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,f9;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,b){function A(){}A.prototype=b.prototype,V.D=b.prototype,V.prototype=new A,V.prototype.constructor=V,V.C=function(w,x,L){for(var M=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)M[wt-2]=arguments[wt];return b.prototype[x].apply(w,M)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,b,A){A||(A=0);var w=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)w[x]=b.charCodeAt(A++)|b.charCodeAt(A++)<<8|b.charCodeAt(A++)<<16|b.charCodeAt(A++)<<24;else for(x=0;16>x;++x)w[x]=b[A++]|b[A++]<<8|b[A++]<<16|b[A++]<<24;b=V.g[0],A=V.g[1],x=V.g[2];var L=V.g[3],M=b+(L^A&(x^L))+w[0]+3614090360&4294967295;b=A+(M<<7&4294967295|M>>>25),M=L+(x^b&(A^x))+w[1]+3905402710&4294967295,L=b+(M<<12&4294967295|M>>>20),M=x+(A^L&(b^A))+w[2]+606105819&4294967295,x=L+(M<<17&4294967295|M>>>15),M=A+(b^x&(L^b))+w[3]+3250441966&4294967295,A=x+(M<<22&4294967295|M>>>10),M=b+(L^A&(x^L))+w[4]+4118548399&4294967295,b=A+(M<<7&4294967295|M>>>25),M=L+(x^b&(A^x))+w[5]+1200080426&4294967295,L=b+(M<<12&4294967295|M>>>20),M=x+(A^L&(b^A))+w[6]+2821735955&4294967295,x=L+(M<<17&4294967295|M>>>15),M=A+(b^x&(L^b))+w[7]+4249261313&4294967295,A=x+(M<<22&4294967295|M>>>10),M=b+(L^A&(x^L))+w[8]+1770035416&4294967295,b=A+(M<<7&4294967295|M>>>25),M=L+(x^b&(A^x))+w[9]+2336552879&4294967295,L=b+(M<<12&4294967295|M>>>20),M=x+(A^L&(b^A))+w[10]+4294925233&4294967295,x=L+(M<<17&4294967295|M>>>15),M=A+(b^x&(L^b))+w[11]+2304563134&4294967295,A=x+(M<<22&4294967295|M>>>10),M=b+(L^A&(x^L))+w[12]+1804603682&4294967295,b=A+(M<<7&4294967295|M>>>25),M=L+(x^b&(A^x))+w[13]+4254626195&4294967295,L=b+(M<<12&4294967295|M>>>20),M=x+(A^L&(b^A))+w[14]+2792965006&4294967295,x=L+(M<<17&4294967295|M>>>15),M=A+(b^x&(L^b))+w[15]+1236535329&4294967295,A=x+(M<<22&4294967295|M>>>10),M=b+(x^L&(A^x))+w[1]+4129170786&4294967295,b=A+(M<<5&4294967295|M>>>27),M=L+(A^x&(b^A))+w[6]+3225465664&4294967295,L=b+(M<<9&4294967295|M>>>23),M=x+(b^A&(L^b))+w[11]+643717713&4294967295,x=L+(M<<14&4294967295|M>>>18),M=A+(L^b&(x^L))+w[0]+3921069994&4294967295,A=x+(M<<20&4294967295|M>>>12),M=b+(x^L&(A^x))+w[5]+3593408605&4294967295,b=A+(M<<5&4294967295|M>>>27),M=L+(A^x&(b^A))+w[10]+38016083&4294967295,L=b+(M<<9&4294967295|M>>>23),M=x+(b^A&(L^b))+w[15]+3634488961&4294967295,x=L+(M<<14&4294967295|M>>>18),M=A+(L^b&(x^L))+w[4]+3889429448&4294967295,A=x+(M<<20&4294967295|M>>>12),M=b+(x^L&(A^x))+w[9]+568446438&4294967295,b=A+(M<<5&4294967295|M>>>27),M=L+(A^x&(b^A))+w[14]+3275163606&4294967295,L=b+(M<<9&4294967295|M>>>23),M=x+(b^A&(L^b))+w[3]+4107603335&4294967295,x=L+(M<<14&4294967295|M>>>18),M=A+(L^b&(x^L))+w[8]+1163531501&4294967295,A=x+(M<<20&4294967295|M>>>12),M=b+(x^L&(A^x))+w[13]+2850285829&4294967295,b=A+(M<<5&4294967295|M>>>27),M=L+(A^x&(b^A))+w[2]+4243563512&4294967295,L=b+(M<<9&4294967295|M>>>23),M=x+(b^A&(L^b))+w[7]+1735328473&4294967295,x=L+(M<<14&4294967295|M>>>18),M=A+(L^b&(x^L))+w[12]+2368359562&4294967295,A=x+(M<<20&4294967295|M>>>12),M=b+(A^x^L)+w[5]+4294588738&4294967295,b=A+(M<<4&4294967295|M>>>28),M=L+(b^A^x)+w[8]+2272392833&4294967295,L=b+(M<<11&4294967295|M>>>21),M=x+(L^b^A)+w[11]+1839030562&4294967295,x=L+(M<<16&4294967295|M>>>16),M=A+(x^L^b)+w[14]+4259657740&4294967295,A=x+(M<<23&4294967295|M>>>9),M=b+(A^x^L)+w[1]+2763975236&4294967295,b=A+(M<<4&4294967295|M>>>28),M=L+(b^A^x)+w[4]+1272893353&4294967295,L=b+(M<<11&4294967295|M>>>21),M=x+(L^b^A)+w[7]+4139469664&4294967295,x=L+(M<<16&4294967295|M>>>16),M=A+(x^L^b)+w[10]+3200236656&4294967295,A=x+(M<<23&4294967295|M>>>9),M=b+(A^x^L)+w[13]+681279174&4294967295,b=A+(M<<4&4294967295|M>>>28),M=L+(b^A^x)+w[0]+3936430074&4294967295,L=b+(M<<11&4294967295|M>>>21),M=x+(L^b^A)+w[3]+3572445317&4294967295,x=L+(M<<16&4294967295|M>>>16),M=A+(x^L^b)+w[6]+76029189&4294967295,A=x+(M<<23&4294967295|M>>>9),M=b+(A^x^L)+w[9]+3654602809&4294967295,b=A+(M<<4&4294967295|M>>>28),M=L+(b^A^x)+w[12]+3873151461&4294967295,L=b+(M<<11&4294967295|M>>>21),M=x+(L^b^A)+w[15]+530742520&4294967295,x=L+(M<<16&4294967295|M>>>16),M=A+(x^L^b)+w[2]+3299628645&4294967295,A=x+(M<<23&4294967295|M>>>9),M=b+(x^(A|~L))+w[0]+4096336452&4294967295,b=A+(M<<6&4294967295|M>>>26),M=L+(A^(b|~x))+w[7]+1126891415&4294967295,L=b+(M<<10&4294967295|M>>>22),M=x+(b^(L|~A))+w[14]+2878612391&4294967295,x=L+(M<<15&4294967295|M>>>17),M=A+(L^(x|~b))+w[5]+4237533241&4294967295,A=x+(M<<21&4294967295|M>>>11),M=b+(x^(A|~L))+w[12]+1700485571&4294967295,b=A+(M<<6&4294967295|M>>>26),M=L+(A^(b|~x))+w[3]+2399980690&4294967295,L=b+(M<<10&4294967295|M>>>22),M=x+(b^(L|~A))+w[10]+4293915773&4294967295,x=L+(M<<15&4294967295|M>>>17),M=A+(L^(x|~b))+w[1]+2240044497&4294967295,A=x+(M<<21&4294967295|M>>>11),M=b+(x^(A|~L))+w[8]+1873313359&4294967295,b=A+(M<<6&4294967295|M>>>26),M=L+(A^(b|~x))+w[15]+4264355552&4294967295,L=b+(M<<10&4294967295|M>>>22),M=x+(b^(L|~A))+w[6]+2734768916&4294967295,x=L+(M<<15&4294967295|M>>>17),M=A+(L^(x|~b))+w[13]+1309151649&4294967295,A=x+(M<<21&4294967295|M>>>11),M=b+(x^(A|~L))+w[4]+4149444226&4294967295,b=A+(M<<6&4294967295|M>>>26),M=L+(A^(b|~x))+w[11]+3174756917&4294967295,L=b+(M<<10&4294967295|M>>>22),M=x+(b^(L|~A))+w[2]+718787259&4294967295,x=L+(M<<15&4294967295|M>>>17),M=A+(L^(x|~b))+w[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(x+(M<<21&4294967295|M>>>11))&4294967295,V.g[2]=V.g[2]+x&4294967295,V.g[3]=V.g[3]+L&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var A=b-this.blockSize,w=this.B,x=this.h,L=0;L<b;){if(x==0)for(;L<=A;)o(this,V,L),L+=this.blockSize;if(typeof V=="string"){for(;L<b;)if(w[x++]=V.charCodeAt(L++),x==this.blockSize){o(this,w),x=0;break}}else for(;L<b;)if(w[x++]=V[L++],x==this.blockSize){o(this,w),x=0;break}}this.h=x,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var A=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=A&255,A/=256;for(this.u(V),V=Array(16),b=A=0;4>b;++b)for(var w=0;32>w;w+=8)V[A++]=this.g[b]>>>w&255;return V};function c(V,b){var A=m;return Object.prototype.hasOwnProperty.call(A,V)?A[V]:A[V]=b(V)}function f(V,b){this.h=b;for(var A=[],w=!0,x=V.length-1;0<=x;x--){var L=V[x]|0;w&&L==b||(A[x]=L,w=!1)}this.g=A}var m={};function p(V){return-128<=V&&128>V?c(V,function(b){return new f([b|0],0>b?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return S;if(0>V)return B(y(-V));for(var b=[],A=1,w=0;V>=A;w++)b[w]=V/A|0,A*=4294967296;return new f(b,0)}function C(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return B(C(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(b,8)),w=S,x=0;x<V.length;x+=8){var L=Math.min(8,V.length-x),M=parseInt(V.substring(x,x+L),b);8>L?(L=y(Math.pow(b,L)),w=w.j(L).add(y(M))):(w=w.j(A),w=w.add(y(M)))}return w}var S=p(0),R=p(1),I=p(16777216);r=f.prototype,r.m=function(){if(F(this))return-B(this).m();for(var V=0,b=1,A=0;A<this.g.length;A++){var w=this.i(A);V+=(0<=w?w:4294967296+w)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(N(this))return"0";if(F(this))return"-"+B(this).toString(V);for(var b=y(Math.pow(V,6)),A=this,w="";;){var x=gt(A,b).g;A=$(A,x.j(b));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(V);if(A=x,N(A))return L+w;for(;6>L.length;)L="0"+L;w=L+w}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function N(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function F(V){return V.h==-1}r.l=function(V){return V=$(this,V),F(V)?-1:N(V)?0:1};function B(V){for(var b=V.g.length,A=[],w=0;w<b;w++)A[w]=~V.g[w];return new f(A,~V.h).add(R)}r.abs=function(){return F(this)?B(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],w=0,x=0;x<=b;x++){var L=w+(this.i(x)&65535)+(V.i(x)&65535),M=(L>>>16)+(this.i(x)>>>16)+(V.i(x)>>>16);w=M>>>16,L&=65535,M&=65535,A[x]=M<<16|L}return new f(A,A[A.length-1]&-2147483648?-1:0)};function $(V,b){return V.add(B(b))}r.j=function(V){if(N(this)||N(V))return S;if(F(this))return F(V)?B(this).j(B(V)):B(B(this).j(V));if(F(V))return B(this.j(B(V)));if(0>this.l(I)&&0>V.l(I))return y(this.m()*V.m());for(var b=this.g.length+V.g.length,A=[],w=0;w<2*b;w++)A[w]=0;for(w=0;w<this.g.length;w++)for(var x=0;x<V.g.length;x++){var L=this.i(w)>>>16,M=this.i(w)&65535,wt=V.i(x)>>>16,It=V.i(x)&65535;A[2*w+2*x]+=M*It,rt(A,2*w+2*x),A[2*w+2*x+1]+=L*It,rt(A,2*w+2*x+1),A[2*w+2*x+1]+=M*wt,rt(A,2*w+2*x+1),A[2*w+2*x+2]+=L*wt,rt(A,2*w+2*x+2)}for(w=0;w<b;w++)A[w]=A[2*w+1]<<16|A[2*w];for(w=b;w<2*b;w++)A[w]=0;return new f(A,0)};function rt(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function it(V,b){this.g=V,this.h=b}function gt(V,b){if(N(b))throw Error("division by zero");if(N(V))return new it(S,S);if(F(V))return b=gt(B(V),b),new it(B(b.g),B(b.h));if(F(b))return b=gt(V,B(b)),new it(B(b.g),b.h);if(30<V.g.length){if(F(V)||F(b))throw Error("slowDivide_ only works with positive integers.");for(var A=R,w=b;0>=w.l(V);)A=ht(A),w=ht(w);var x=Ct(A,1),L=Ct(w,1);for(w=Ct(w,2),A=Ct(A,2);!N(w);){var M=L.add(w);0>=M.l(V)&&(x=x.add(A),L=M),w=Ct(w,1),A=Ct(A,1)}return b=$(V,x.j(b)),new it(x,b)}for(x=S;0<=V.l(b);){for(A=Math.max(1,Math.floor(V.m()/b.m())),w=Math.ceil(Math.log(A)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),L=y(A),M=L.j(b);F(M)||0<M.l(V);)A-=w,L=y(A),M=L.j(b);N(L)&&(L=R),x=x.add(L),V=$(V,M)}return new it(x,V)}r.A=function(V){return gt(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],w=0;w<b;w++)A[w]=this.i(w)&V.i(w);return new f(A,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],w=0;w<b;w++)A[w]=this.i(w)|V.i(w);return new f(A,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],w=0;w<b;w++)A[w]=this.i(w)^V.i(w);return new f(A,this.h^V.h)};function ht(V){for(var b=V.g.length+1,A=[],w=0;w<b;w++)A[w]=V.i(w)<<1|V.i(w-1)>>>31;return new f(A,V.h)}function Ct(V,b){var A=b>>5;b%=32;for(var w=V.g.length-A,x=[],L=0;L<w;L++)x[L]=0<b?V.i(L+A)>>>b|V.i(L+A+1)<<32-b:V.i(L+A);return new f(x,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,f9=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=C,Lr=f}).apply(typeof Eh<"u"?Eh:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var d9,lo,m9,oc,M4,p9,g9,y9;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=i(this);function o(u,g){if(g)t:{var v=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var P=u[T];if(!(P in v))break t;v=v[P]}u=u[u.length-1],T=v[u],g=g(T),g!=T&&g!=null&&t(v,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var v=0,T=!1,P={next:function(){if(!T&&v<u.length){var G=v++;return{value:g(G,u[G]),done:!1}}return T=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(u){return u||function(){return c(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function y(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function C(u,g,v){return u.call.apply(u.bind,arguments)}function S(u,g,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,T),u.apply(g,P)}}return function(){return u.apply(g,arguments)}}function R(u,g,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:S,R.apply(null,arguments)}function I(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function N(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,P,G){for(var at=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)at[Ut-2]=arguments[Ut];return g.prototype[P].apply(T,at)}}function F(u){const g=u.length;if(0<g){const v=Array(g);for(let T=0;T<g;T++)v[T]=u[T];return v}return[]}function B(u,g){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const P=u.length||0,G=T.length||0;u.length=P+G;for(let at=0;at<G;at++)u[P+at]=T[at]}else u.push(T)}}class ${constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function rt(u){return/^[\s\xa0]*$/.test(u)}function it(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function gt(u){return gt[" "](u),u}gt[" "]=function(){};var ht=it().indexOf("Gecko")!=-1&&!(it().toLowerCase().indexOf("webkit")!=-1&&it().indexOf("Edge")==-1)&&!(it().indexOf("Trident")!=-1||it().indexOf("MSIE")!=-1)&&it().indexOf("Edge")==-1;function Ct(u,g,v){for(const T in u)g.call(v,u[T],T,u)}function V(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function b(u){const g={};for(const v in u)g[v]=u[v];return g}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(u,g){let v,T;for(let P=1;P<arguments.length;P++){T=arguments[P];for(v in T)u[v]=T[v];for(let G=0;G<A.length;G++)v=A[G],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function x(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function L(u){m.setTimeout(()=>{throw u},0)}function M(){var u=Rt;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class wt{constructor(){this.h=this.g=null}add(g,v){const T=It.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var It=new $(()=>new tt,u=>u.reset());class tt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let K,st=!1,Rt=new wt,O=()=>{const u=m.Promise.resolve(void 0);K=()=>{u.then(nt)}};var nt=()=>{for(var u;u=M();){try{u.h.call(u.g)}catch(v){L(v)}var g=It;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}st=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return u}();function Dt(u,g){if(lt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(ht){t:{try{gt(g.nodeName);var P=!0;break t}catch{}P=!1}P||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:St[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Dt.aa.h.call(this)}}N(Dt,lt);var St={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),jt=0;function ae(u,g,v,T,P){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=P,this.key=++jt,this.da=this.fa=!1}function Kt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function $e(u){this.src=u,this.g={},this.h=0}$e.prototype.add=function(u,g,v,T,P){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var at=vn(u,g,T,P);return-1<at?(g=u[at],v||(g.fa=!1)):(g=new ae(g,this.src,G,!!T,P),g.fa=v,u.push(g)),g};function yi(u,g){var v=g.type;if(v in u.g){var T=u.g[v],P=Array.prototype.indexOf.call(T,g,void 0),G;(G=0<=P)&&Array.prototype.splice.call(T,P,1),G&&(Kt(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function vn(u,g,v,T){for(var P=0;P<u.length;++P){var G=u[P];if(!G.da&&G.listener==g&&G.capture==!!v&&G.ha==T)return P}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),Zi={};function vi(u,g,v,T,P){if(Array.isArray(g)){for(var G=0;G<g.length;G++)vi(u,g[G],v,T,P);return null}return v=Vo(v),u&&u[de]?u.K(g,v,y(T)?!!T.capture:!1,P):Ws(u,g,v,!1,T,P)}function Ws(u,g,v,T,P,G){if(!g)throw Error("Invalid event type");var at=y(P)?!!P.capture:!!P,Ut=Js(u);if(Ut||(u[Xi]=Ut=new $e(u)),v=Ut.add(g,v,T,at,G),v.proxy)return v;if(T=Ba(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)ot||(P=at),P===void 0&&(P=!1),u.addEventListener(g.toString(),T,P);else if(u.attachEvent)u.attachEvent(qa(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ba(){function u(v){return g.call(u.src,u.listener,v)}const g=r1;return u}function ja(u,g,v,T,P){if(Array.isArray(g))for(var G=0;G<g.length;G++)ja(u,g[G],v,T,P);else T=y(T)?!!T.capture:!!T,v=Vo(v),u&&u[de]?(u=u.i,g=String(g).toString(),g in u.g&&(G=u.g[g],v=vn(G,v,T,P),-1<v&&(Kt(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete u.g[g],u.h--)))):u&&(u=Js(u))&&(g=u.g[g.toString()],u=-1,g&&(u=vn(g,v,T,P)),(v=-1<u?g[u]:null)&&Zr(v))}function Zr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[de])yi(g.i,u);else{var v=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(v,T,u.capture):g.detachEvent?g.detachEvent(qa(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=Js(g))?(yi(v,u),v.h==0&&(v.src=null,g[Xi]=null)):Kt(u)}}}function qa(u){return u in Zi?Zi[u]:Zi[u]="on"+u}function r1(u,g){if(u.da)u=!0;else{g=new Dt(g,this);var v=u.listener,T=u.ha||u.src;u.fa&&Zr(u),u=v.call(T,g)}return u}function Js(u){return u=u[Xi],u instanceof $e?u:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(u){return typeof u=="function"?u:(u[en]||(u[en]=function(g){return u.handleEvent(g)}),u[en])}function ve(){dt.call(this),this.i=new $e(this),this.M=this,this.F=null}N(ve,dt),ve.prototype[de]=!0,ve.prototype.removeEventListener=function(u,g,v,T){ja(this,u,g,v,T)};function Re(u,g){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new lt(g,u);else if(g instanceof lt)g.target=g.target||u;else{var P=g;g=new lt(T,u),w(g,P)}if(P=!0,v)for(var G=v.length-1;0<=G;G--){var at=g.g=v[G];P=_i(at,T,!0,g)&&P}if(at=g.g=u,P=_i(at,T,!0,g)&&P,P=_i(at,T,!1,g)&&P,v)for(G=0;G<v.length;G++)at=g.g=v[G],P=_i(at,T,!1,g)&&P}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],T=0;T<v.length;T++)Kt(v[T]);delete u.g[g],u.h--}}this.F=null},ve.prototype.K=function(u,g,v,T){return this.i.add(String(u),g,!1,v,T)},ve.prototype.L=function(u,g,v,T){return this.i.add(String(u),g,!0,v,T)};function _i(u,g,v,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var P=!0,G=0;G<g.length;++G){var at=g[G];if(at&&!at.da&&at.capture==v){var Ut=at.listener,Ce=at.ha||at.src;at.fa&&yi(u.i,at),P=Ut.call(Ce,T)!==!1&&P}}return P&&!T.defaultPrevented}function No(u,g,v){if(typeof u=="function")v&&(u=R(u,v));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(u,g||0)}function tl(u){u.g=No(()=>{u.g=null,u.i&&(u.i=!1,tl(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class a1 extends dt{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:tl(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){dt.call(this),this.h=u,this.g={}}N(Wr,dt);var Wi=[];function qe(u){Ct(u.g,function(g,v){this.g.hasOwnProperty(v)&&Zr(g)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),qe(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=m.JSON.stringify,Fn=m.JSON.parse,Xe=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function nl(){}nl.prototype.h=null;function Oo(u){return u.h||(u.h=u.i())}function ko(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ji(){lt.call(this,"d")}N(Ji,lt);function Un(){lt.call(this,"c")}N(Un,lt);var _n={},tr=null;function Ha(){return tr=tr||new ve}_n.La="serverreachability";function il(u){lt.call(this,_n.La,u)}N(il,lt);function er(u){const g=Ha();Re(g,new il(g))}_n.STAT_EVENT="statevent";function Fa(u,g){lt.call(this,_n.STAT_EVENT,u),this.stat=g}N(Fa,lt);function ce(u){const g=Ha();Re(g,new Fa(g,u))}_n.Ma="timingevent";function Uo(u,g){lt.call(this,_n.Ma,u),this.size=g}N(Uo,lt);function nr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},g)}function ir(){this.g=!0}ir.prototype.xa=function(){this.g=!1};function Lo(u,g,v,T,P,G){u.info(function(){if(u.g)if(G)for(var at="",Ut=G.split("&"),Ce=0;Ce<Ut.length;Ce++){var Lt=Ut[Ce].split("=");if(1<Lt.length){var Ie=Lt[0];Lt=Lt[1];var Ee=Ie.split("_");at=2<=Ee.length&&Ee[1]=="type"?at+(Ie+"="+Lt+"&"):at+(Ie+"=redacted&")}}else at=null;else at=G;return"XMLHTTP REQ ("+T+") [attempt "+P+"]: "+g+`
`+v+`
`+at})}function zo(u,g,v,T,P,G,at){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+P+"]: "+g+`
`+v+`
`+G+" "+at})}function rr(u,g,v,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+De(u,v)+(T?" "+T:"")})}function Qn(u,g){u.info(function(){return"TIMEOUT: "+g})}ir.prototype.info=function(){};function De(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var P=T[1];if(Array.isArray(P)&&!(1>P.length)){var G=P[0];if(G!="noop"&&G!="stop"&&G!="close")for(var at=1;at<P.length;at++)P[at]=""}}}}return el(v)}catch{return g}}var _e={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function Ga(){}N(Ga,nl),Ga.prototype.g=function(){return new XMLHttpRequest},Ga.prototype.i=function(){return{}},Jr=new Ga;function Kn(u,g,v,T){this.j=u,this.i=g,this.l=v,this.R=T||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var ar={},ta={};function Ln(u,g,v){u.L=1,u.v=ia(se(g)),u.m=v,u.P=!0,Ei(u,null)}function Ei(u,g){u.F=Date.now(),ee(u),u.A=se(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Si(v.i,"t",T),u.C=0,v=u.j.J,u.h=new rl,u.g=Wo(u.j,v?g:null,!u.m),0<u.O&&(u.M=new a1(R(u.Y,u,u.g),u.O)),g=u.U,v=u.g,T=u.ca;var P="readystatechange";Array.isArray(P)||(P&&(Wi[0]=P.toString()),P=Wi);for(var G=0;G<P.length;G++){var at=vi(v,P[G],T||g.handleEvent,!1,g.h||g);if(!at)break;g.g[at.key]=at}g=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),er(),Lo(u.i,u.u,u.A,u.l,u.R,u.m)}Kn.prototype.ca=function(u){u=u.target;const g=this.M;g&&Sn(u)==3?g.j():this.Y(u)},Kn.prototype.Y=function(u){try{if(u==this.g)t:{const Ee=Sn(this.g);var g=this.g.Ba();const Di=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||Fo(this.g)))){this.J||Ee!=4||g==7||(g==8||0>=Di?er(3):er(2)),Qa(this);var v=this.g.Z();this.X=v;e:if(sr(this)){var T=Fo(this.g);u="";var P=T.length,G=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),on(this);var at="";break e}this.h.i=new m.TextDecoder}for(g=0;g<P;g++)this.h.h=!0,u+=this.h.i.decode(T[g],{stream:!(G&&g==P-1)});T.length=0,this.h.g+=u,this.C=0,at=this.h.g}else at=this.g.oa();if(this.o=v==200,zo(this.i,this.u,this.A,this.l,this.R,Ee,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,Ce=this.g;if((Ut=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rt(Ut)){var Lt=Ut;break e}}Lt=null}if(v=Lt)rr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,un(this,v);else{this.o=!1,this.s=3,ce(12),nn(this),on(this);break t}}if(this.P){v=!0;let ke;for(;!this.J&&this.C<at.length;)if(ke=lr(this,at),ke==ta){Ee==4&&(this.s=4,ce(14),v=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ar){this.s=4,ce(15),rr(this.i,this.l,at,"[Invalid Chunk]"),v=!1;break}else rr(this.i,this.l,ke,null),un(this,ke);if(sr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||at.length!=0||this.h.h||(this.s=1,ce(16),v=!1),this.o=this.o&&v,!v)rr(this.i,this.l,at,"[Invalid Chunked Response]"),nn(this),on(this);else if(0<at.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+at.length),ca(Ie),Ie.M=!0,ce(11))}}else rr(this.i,this.l,at,null),un(this,at);Ee==4&&nn(this),this.o&&!this.J&&(Ee==4?$o(this.j,this):(this.o=!1,ee(this)))}else h1(this.g),v==400&&0<at.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),nn(this),on(this)}}}catch{}finally{}};function sr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function lr(u,g){var v=u.C,T=g.indexOf(`
`,v);return T==-1?ta:(v=Number(g.substring(v,T)),isNaN(v)?ar:(T+=1,T+v>g.length?ta:(g=g.slice(T,T+v),u.C=T+v,g)))}Kn.prototype.cancel=function(){this.J=!0,nn(this)};function ee(u){u.S=Date.now()+u.I,al(u,u.I)}function al(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=nr(R(u.ba,u),g)}function Qa(u){u.B&&(m.clearTimeout(u.B),u.B=null)}Kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Qn(this.i,this.A),this.L!=2&&(er(),ce(17)),nn(this),this.s=2,on(this)):al(this,this.S-u)};function on(u){u.j.G==0||u.J||$o(u.j,u)}function nn(u){Qa(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,qe(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function un(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||or(v.h,u))){if(!u.K&&or(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var P=T;if(P[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)ns(v),ts(v);else break t;gl(v),ce(18)}}else v.za=P[1],0<v.za-v.T&&37500>P[2]&&v.F&&v.v==0&&!v.C&&(v.C=nr(R(v.Za,v),6e3));if(1>=Po(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ri(v,11)}else if((u.K||v.g==u)&&ns(v),!rt(g))for(P=v.Da.g.parse(g),g=0;g<P.length;g++){let Lt=P[g];if(v.T=Lt[0],Lt=Lt[1],v.G==2)if(Lt[0]=="c"){v.K=Lt[1],v.ia=Lt[2];const Ie=Lt[3];Ie!=null&&(v.la=Ie,v.j.info("VER="+v.la));const Ee=Lt[4];Ee!=null&&(v.Aa=Ee,v.j.info("SVER="+v.Aa));const Di=Lt[5];Di!=null&&typeof Di=="number"&&0<Di&&(T=1.5*Di,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const ke=u.g;if(ke){const ti=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var G=T.h;G.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(ur(G,G.h),G.h=null))}if(T.D){const vl=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(T.ya=vl,qt(T.I,T.D,vl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var at=u;if(T.qa=Zo(T,T.J?T.ia:null,T.W),at.K){Cn(T.h,at);var Ut=at,Ce=T.L;Ce&&(Ut.I=Ce),Ut.B&&(Qa(Ut),ee(Ut)),T.g=at}else Ko(T);0<v.i.length&&es(v)}else Lt[0]!="stop"&&Lt[0]!="close"||Ri(v,7);else v.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Ri(v,7):ml(v):Lt[0]!="noop"&&v.l&&v.l.ta(Lt),v.v=0)}}er(4)}catch{}}var s1=class{constructor(u,g){this.g=u,this.map=g}};function sl(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ll(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Po(u){return u.h?1:u.g?u.g.size:0}function or(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function ur(u,g){u.g?u.g.add(g):u.h=g}function Cn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}sl.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ze(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return F(u.i)}function Bo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var g=[],v=u.length,T=0;T<v;T++)g.push(u[T]);return g}g=[],v=0;for(T in u)g[v++]=u[T];return g}function l1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const T in u)g[v++]=T;return g}}}function ea(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=l1(u),T=Bo(u),P=T.length,G=0;G<P;G++)g.call(void 0,T[G],v&&v[G],u)}var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ka(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),P=null;if(0<=T){var G=u[v].substring(0,T);P=u[v].substring(T+1)}else G=u[v];g(G,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ti(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ti){this.h=u.h,cr(this,u.j),this.o=u.o,this.g=u.g,na(this,u.s),this.l=u.l;var g=u.i,v=new Yn;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),Ya(this,v),this.m=u.m}else u&&(g=String(u).match(ol))?(this.h=!1,cr(this,g[1]||"",!0),this.o=hr(g[2]||""),this.g=hr(g[3]||"",!0),na(this,g[4]),this.l=hr(g[5]||"",!0),Ya(this,g[6]||"",!0),this.m=hr(g[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Ti.prototype.toString=function(){var u=[],g=this.j;g&&u.push(En(g,ul,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(En(g,ul,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(En(v,v.charAt(0)=="/"?cl:jo,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",En(v,c1)),u.join("")};function se(u){return new Ti(u)}function cr(u,g,v){u.j=v?hr(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function na(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function Ya(u,g,v){g instanceof Yn?(u.i=g,hl(u.i,u.h)):(v||(g=En(g,u1)),u.i=new Yn(g,u.h))}function qt(u,g,v){u.i.set(g,v)}function ia(u){return qt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function hr(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function En(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,o1),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function o1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ul=/[#\/\?@]/g,jo=/[#\?:]/g,cl=/[#\?]/g,u1=/[#\?@]/g,c1=/#/g;function Yn(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Tn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ka(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=Yn.prototype,r.add=function(u,g){Tn(this),this.i=null,u=bi(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function $a(u,g){Tn(u),g=bi(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Ai(u,g){return Tn(u),g=bi(u,g),u.g.has(g)}r.forEach=function(u,g){Tn(this),this.g.forEach(function(v,T){v.forEach(function(P){u.call(g,P,T,this)},this)},this)},r.na=function(){Tn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let T=0;T<g.length;T++){const P=u[T];for(let G=0;G<P.length;G++)v.push(g[T])}return v},r.V=function(u){Tn(this);let g=[];if(typeof u=="string")Ai(this,u)&&(g=g.concat(this.g.get(bi(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},r.set=function(u,g){return Tn(this),this.i=null,u=bi(this,u),Ai(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function Si(u,g,v){$a(u,g),0<v.length&&(u.i=null,u.g.set(bi(u,g),F(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var T=g[v];const G=encodeURIComponent(String(T)),at=this.V(T);for(T=0;T<at.length;T++){var P=G;at[T]!==""&&(P+="="+encodeURIComponent(String(at[T]))),u.push(P)}}return this.i=u.join("&")};function bi(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function hl(u,g){g&&!u.j&&(Tn(u),u.i=null,u.g.forEach(function(v,T){var P=T.toLowerCase();T!=P&&($a(this,T),Si(this,P,v))},u)),u.j=g}function qo(u,g){const v=new ir;if(m.Image){const T=new Image;T.onload=I(An,v,"TestLoadImage: loaded",!0,g,T),T.onerror=I(An,v,"TestLoadImage: error",!1,g,T),T.onabort=I(An,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=I(An,v,"TestLoadImage: timeout",!1,g,T),m.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function ra(u,g){const v=new ir,T=new AbortController,P=setTimeout(()=>{T.abort(),An(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(G=>{clearTimeout(P),G.ok?An(v,"TestPingServer: ok",!0,g):An(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(P),An(v,"TestPingServer: error",!1,g)})}function An(u,g,v,T,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),T(v)}catch{}}function aa(){this.g=new Xe}function $n(u,g,v){const T=v||"";try{ea(u,function(P,G){let at=P;y(P)&&(at=el(P)),g.push(T+G+"="+encodeURIComponent(at))})}catch(P){throw g.push(T+"type="+encodeURIComponent("_badmap")),P}}function fr(u){this.l=u.Ub||null,this.j=u.eb||!1}N(fr,nl),fr.prototype.g=function(){return new wi(this.l,this.j)},fr.prototype.i=function(u){return function(){return u}}({});function wi(u,g){ve.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(wi,ve),r=wi.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Zn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Xn(this):Zn(this),this.readyState==3&&fl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Xn(this))},r.Qa=function(u){this.g&&(this.response=u,Xn(this))},r.ga=function(){this.g&&Xn(this)};function Xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Zn(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function Zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function dl(u){let g="";return Ct(u,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function Me(u,g,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=dl(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):qt(u,g,v))}function Gt(u){ve.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Gt,ve);var Xa=/^https?$/i,sa=["POST","PUT"];r=Gt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Oo(this.o):Oo(Jr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(G){Ho(this,G);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var P in T)v.set(P,T[P]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const G of T.keys())v.set(G,T.get(G));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),P=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(sa,g,void 0))||T||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,at]of v)this.g.setRequestHeader(G,at);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{la(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){Ho(this,G)}};function Ho(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,Za(u),Wn(u)}function Za(u){u.A||(u.A=!0,Re(u,"complete"),Re(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Re(this,"complete"),Re(this,"abort"),Wn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),Gt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Wa(this):this.bb())},r.bb=function(){Wa(this)};function Wa(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Sn(u)!=4||u.Z()!=2)){if(u.u&&Sn(u)==4)No(u.Ea,0,u);else if(Re(u,"readystatechange"),Sn(u)==4){u.h=!1;try{const at=u.Z();t:switch(at){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var T;if(T=at===0){var P=String(u.D).match(ol)[1]||null;!P&&m.self&&m.self.location&&(P=m.self.location.protocol.slice(0,-1)),T=!Xa.test(P?P.toLowerCase():"")}v=T}if(v)Re(u,"complete"),Re(u,"success");else{u.m=6;try{var G=2<Sn(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",Za(u)}}finally{Wn(u)}}}}function Wn(u,g){if(u.g){la(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Re(u,"ready");try{v.onreadystatechange=T}catch{}}}function la(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Sn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Fn(g)}};function Fo(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function h1(u){const g={};u=(u.g&&2<=Sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(rt(u[T]))continue;var v=x(u[T]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=g[P]||[];g[P]=G,G.push(v)}V(g,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oa(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function Ja(u){this.Aa=0,this.i=[],this.j=new ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oa("baseRetryDelayMs",5e3,u),this.cb=oa("retryDelaySeedMs",1e4,u),this.Wa=oa("forwardChannelMaxRetries",2,u),this.wa=oa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new sl(u&&u.concurrentRequestLimit),this.Da=new aa,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ja.prototype,r.la=8,r.G=1,r.connect=function(u,g,v,T){ce(0),this.W=u,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Zo(this,null,this.W),es(this)};function ml(u){if(Go(u),u.G==3){var g=u.U++,v=se(u.I);if(qt(v,"SID",u.K),qt(v,"RID",g),qt(v,"TYPE","terminate"),ua(u,v),g=new Kn(u,u.j,g),g.L=2,g.v=ia(se(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=Wo(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ee(g)}Xo(u)}function ts(u){u.g&&(ca(u),u.g.cancel(),u.g=null)}function Go(u){ts(u),u.u&&(m.clearTimeout(u.u),u.u=null),ns(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function es(u){if(!ll(u.h)&&!u.s){u.s=!0;var g=u.Ga;K||O(),st||(K(),st=!0),Rt.add(g,u),u.B=0}}function f1(u,g){return Po(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=nr(R(u.Ga,u,g),yl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const P=new Kn(this,this.j,u);let G=this.o;if(this.S&&(G?(G=b(G),w(G,this.S)):G=this.S),this.m!==null||this.O||(P.H=G,G=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=Qo(this,P,g),v=se(this.I),qt(v,"RID",u),qt(v,"CVER",22),this.D&&qt(v,"X-HTTP-Session-Id",this.D),ua(this,v),G&&(this.O?g="headers="+encodeURIComponent(String(dl(G)))+"&"+g:this.m&&Me(v,this.m,G)),ur(this.h,P),this.Ua&&qt(v,"TYPE","init"),this.P?(qt(v,"$req",g),qt(v,"SID","null"),P.T=!0,Ln(P,v,null)):Ln(P,v,g),this.G=2}}else this.G==3&&(u?pl(this,u):this.i.length==0||ll(this.h)||pl(this))};function pl(u,g){var v;g?v=g.l:v=u.U++;const T=se(u.I);qt(T,"SID",u.K),qt(T,"RID",v),qt(T,"AID",u.T),ua(u,T),u.m&&u.o&&Me(T,u.m,u.o),v=new Kn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=Qo(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ur(u.h,v),Ln(v,T,g)}function ua(u,g){u.H&&Ct(u.H,function(v,T){qt(g,T,v)}),u.l&&ea({},function(v,T){qt(g,T,v)})}function Qo(u,g,v){v=Math.min(u.i.length,v);var T=u.l?R(u.l.Na,u.l,u):null;t:{var P=u.i;let G=-1;for(;;){const at=["count="+v];G==-1?0<v?(G=P[0].g,at.push("ofs="+G)):G=0:at.push("ofs="+G);let Ut=!0;for(let Ce=0;Ce<v;Ce++){let Lt=P[Ce].g;const Ie=P[Ce].map;if(Lt-=G,0>Lt)G=Math.max(0,P[Ce].g-100),Ut=!1;else try{$n(Ie,at,"req"+Lt+"_")}catch{T&&T(Ie)}}if(Ut){T=at.join("&");break t}}}return u=u.i.splice(0,v),g.D=u,T}function Ko(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;K||O(),st||(K(),st=!0),Rt.add(g,u),u.v=0}}function gl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=nr(R(u.Fa,u),yl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Yo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=nr(R(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),ts(this),Yo(this))};function ca(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Yo(u){u.g=new Kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=se(u.qa);qt(g,"RID","rpc"),qt(g,"SID",u.K),qt(g,"AID",u.T),qt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&qt(g,"TO",u.ja),qt(g,"TYPE","xmlhttp"),ua(u,g),u.m&&u.o&&Me(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ia(se(g)),v.m=null,v.P=!0,Ei(v,u)}r.Za=function(){this.C!=null&&(this.C=null,ts(this),gl(this),ce(19))};function ns(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function $o(u,g){var v=null;if(u.g==g){ns(u),ca(u),u.g=null;var T=2}else if(or(u.h,g))v=g.D,Cn(u.h,g),T=1;else return;if(u.G!=0){if(g.o)if(T==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var P=u.B;T=Ha(),Re(T,new Uo(T,v)),es(u)}else Ko(u);else if(P=g.s,P==3||P==0&&0<g.X||!(T==1&&f1(u,g)||T==2&&gl(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),P){case 1:Ri(u,5);break;case 4:Ri(u,10);break;case 3:Ri(u,6);break;default:Ri(u,2)}}}function yl(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function Ri(u,g){if(u.j.info("Error code "+g),g==2){var v=R(u.fb,u),T=u.Xa;const P=!T;T=new Ti(T||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||cr(T,"https"),ia(T),P?qo(T.toString(),v):ra(T.toString(),v)}else ce(2);u.G=0,u.l&&u.l.sa(g),Xo(u),Go(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function Xo(u){if(u.G=0,u.ka=[],u.l){const g=Ze(u.h);(g.length!=0||u.i.length!=0)&&(B(u.ka,g),B(u.ka,u.i),u.h.i.length=0,F(u.i),u.i.length=0),u.l.ra()}}function Zo(u,g,v){var T=v instanceof Ti?se(v):new Ti(v);if(T.g!="")g&&(T.g=g+"."+T.g),na(T,T.s);else{var P=m.location;T=P.protocol,g=g?g+"."+P.hostname:P.hostname,P=+P.port;var G=new Ti(null);T&&cr(G,T),g&&(G.g=g),P&&na(G,P),v&&(G.l=v),T=G}return v=u.D,g=u.ya,v&&g&&qt(T,v,g),qt(T,"VER",u.la),ua(u,T),T}function Wo(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new Gt(new fr({eb:v})):new Gt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}r=Jo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function is(){}is.prototype.g=function(u,g){return new We(u,g)};function We(u,g){ve.call(this),this.g=new Ja(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!rt(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!rt(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new Jn(this)}N(We,ve),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){ml(this.g)},We.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=el(u),u=v);g.i.push(new s1(g.Ya++,u)),g.G==3&&es(g)},We.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,We.aa.N.call(this)};function tu(u){Ji.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const v in g){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}N(tu,Ji);function eu(){Un.call(this),this.status=1}N(eu,Un);function Jn(u){this.g=u}N(Jn,Jo),Jn.prototype.ua=function(){Re(this.g,"a")},Jn.prototype.ta=function(u){Re(this.g,new tu(u))},Jn.prototype.sa=function(u){Re(this.g,new eu)},Jn.prototype.ra=function(){Re(this.g,"b")},is.prototype.createWebChannel=is.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,y9=function(){return new is},g9=function(){return Ha()},p9=_n,M4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,oc=_e,Ci.COMPLETE="complete",m9=Ci,ko.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,lo=ko,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,d9=Gt}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const Th="@firebase/firestore",Ah="4.7.9";/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Ks="11.4.0";/**
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
 */const Oa=new t2("@firebase/firestore");function Is(){return Oa.logLevel}function ut(r,...t){if(Oa.logLevel<=Bt.DEBUG){const i=t.map(l2);Oa.debug(`Firestore (${Ks}): ${r}`,...i)}}function Yi(r,...t){if(Oa.logLevel<=Bt.ERROR){const i=t.map(l2);Oa.error(`Firestore (${Ks}): ${r}`,...i)}}function Ls(r,...t){if(Oa.logLevel<=Bt.WARN){const i=t.map(l2);Oa.warn(`Firestore (${Ks}): ${r}`,...i)}}function l2(r){if(typeof r=="string")return r;try{/**
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
 */function _t(r="Unexpected state"){const t=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+r;throw Yi(t),new Error(t)}function Qt(r,t){r||_t()}function At(r,t){return r}/**
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
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends Yr{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
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
 */class v9{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(Qe.UNAUTHENTICATED))}shutdown(){}}class iv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class rv{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Qt(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,i(p)):Promise.resolve();let c=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new zr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new zr)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==t?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qt(typeof s.accessToken=="string"),new v9(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string"),new Qe(t)}}class av{constructor(t,i,s){this.l=t,this.h=i,this.P=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sv{constructor(t,i,s){this.l=t,this.h=i,this.P=s}getToken(){return Promise.resolve(new av(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lv{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Eg(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){Qt(this.o===void 0);const s=c=>{c.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ut("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const o=c=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Sh(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(Qt(typeof i.token=="string"),this.R=i.token,new Sh(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ov(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let s=0;s<r;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class _9{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=ov(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<i&&(s+=t.charAt(o[c]%62))}return s}}function kt(r,t){return r<t?-1:r>t?1:0}function zs(r,t,i){return r.length===t.length&&r.every((s,o)=>i(s,t[o]))}/**
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
 */const bh=-62135596800,wh=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),s=Math.floor((t-1e3*i)*wh);return new be(i,s)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new pt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new pt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<bh)throw new pt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wh}_compareTo(t){return this.seconds===t.seconds?kt(this.nanoseconds,t.nanoseconds):kt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-bh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Et{static fromTimestamp(t){return new Et(t)}static min(){return new Et(new be(0,0))}static max(){return new Et(new be(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Rh="__name__";class si{constructor(t,i,s){i===void 0?i=0:i>t.length&&_t(),s===void 0?s=t.length-i:s>t.length-i&&_t(),this.segments=t,this.offset=i,this.len=s}get length(){return this.len}isEqual(t){return si.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof si?t.forEach(s=>{i.push(s)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,s=this.limit();i<s;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const s=Math.min(t.length,i.length);for(let o=0;o<s;o++){const c=si.compareSegments(t.get(o),i.get(o));if(c!==0)return c}return Math.sign(t.length-i.length)}static compareSegments(t,i){const s=si.isNumericId(t),o=si.isNumericId(i);return s&&!o?-1:!s&&o?1:s&&o?si.extractNumericId(t).compare(si.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Lr.fromString(t.substring(4,t.length-2))}}class Jt extends si{construct(t,i,s){return new Jt(t,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const s of t){if(s.indexOf("//")>=0)throw new pt(et.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(o=>o.length>0))}return new Jt(i)}static emptyPath(){return new Jt([])}}const uv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends si{construct(t,i,s){return new Be(t,i,s)}static isValidIdentifier(t){return uv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rh}static keyField(){return new Be([Rh])}static fromServerFormat(t){const i=[];let s="",o=0;const c=()=>{if(s.length===0)throw new pt(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new pt(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pt(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(c(),o++)}if(c(),f)throw new pt(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(i)}static emptyPath(){return new Be([])}}/**
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
 */class yt{constructor(t){this.path=t}static fromPath(t){return new yt(Jt.fromString(t))}static fromName(t){return new yt(Jt.fromString(t).popFirst(5))}static empty(){return new yt(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return Jt.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yt(new Jt(t.slice()))}}/**
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
 */const vo=-1;function cv(r,t){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Et.fromTimestamp(s===1e9?new be(i+1,0):new be(i,s));return new jr(o,yt.empty(),t)}function hv(r){return new jr(r.readTime,r.key,vo)}class jr{constructor(t,i,s){this.readTime=t,this.documentKey=i,this.largestBatchId=s}static min(){return new jr(Et.min(),yt.empty(),vo)}static max(){return new jr(Et.max(),yt.empty(),vo)}}function fv(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=yt.comparator(r.documentKey,t.documentKey),i!==0?i:kt(r.largestBatchId,t.largestBatchId))}/**
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
 */const dv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ys(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==dv)throw r;ut("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&_t(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new W((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,o)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof W?i:W.resolve(i)}catch(i){return W.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):W.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):W.reject(i)}static resolve(t){return new W((i,s)=>{i(t)})}static reject(t){return new W((i,s)=>{s(t)})}static waitFor(t){return new W((i,s)=>{let o=0,c=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++c,f&&c===o&&i()},p=>s(p))}),f=!0,c===o&&i()})}static or(t){let i=W.resolve(!1);for(const s of t)i=i.next(o=>o?W.resolve(o):s());return i}static forEach(t,i){const s=[];return t.forEach((o,c)=>{s.push(i.call(this,o,c))}),this.waitFor(s)}static mapArray(t,i){return new W((s,o)=>{const c=t.length,f=new Array(c);let m=0;for(let p=0;p<c;p++){const y=p;i(t[y]).next(C=>{f[y]=C,++m,m===c&&s(f)},C=>o(C))}})}static doWhile(t,i){return new W((s,o)=>{const c=()=>{t()===!0?i().next(()=>{c()},o):s()};c()})}}function pv(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function $s(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class zc{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=s=>this.oe(s),this._e=s=>i.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}zc.ae=-1;/**
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
 */const o2=-1;function Pc(r){return r==null}function _c(r){return r===0&&1/r==-1/0}function gv(r){return typeof r=="number"&&Number.isInteger(r)&&!_c(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const C9="";function yv(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=Dh(t)),t=vv(r.get(i),t);return Dh(t)}function vv(r,t){let i=t;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":i+="";break;case C9:i+="";break;default:i+=c}}return i}function Dh(r){return r+C9+""}/**
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
 */function Mh(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function $r(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function E9(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class re{constructor(t,i){this.comparator=t,this.root=i||Pe.EMPTY}insert(t,i){return new re(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(t){let i=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return i+s.left.size;o<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,s)=>(t(i,s),!1))}toString(){const t=[];return this.inorderTraversal((i,s)=>(t.push(`${i}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ec(this.root,t,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ec(this.root,t,this.comparator,!0)}}class ec{constructor(t,i,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?s(t.key,i):1,i&&o&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pe{constructor(t,i,s,o,c){this.key=t,this.value=i,this.color=s??Pe.RED,this.left=o??Pe.EMPTY,this.right=c??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,s,o,c){return new Pe(t??this.key,i??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,s){let o=this;const c=s(t,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(t,i,s),null):c===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(t,i,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let s,o=this;if(i(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(t,o.key)===0){if(o.right.isEmpty())return Pe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _t();const t=this.left.check();if(t!==this.right.check())throw _t();return t+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw _t()}get value(){throw _t()}get color(){throw _t()}get left(){throw _t()}get right(){throw _t()}copy(t,i,s,o,c){return this}insert(t,i,s){return new Pe(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,s)=>(t(i),!1))}forEachInRange(t,i){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;i(o.key)}}forEachWhile(t,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(t){return new Ih(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(s=>{i=i.add(s)}),i}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const i=this.data.getIterator(),s=t.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new we(this.comparator);return i.data=t,i}}class Ih{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new pn([])}unionWith(t){let i=new we(Be.comparator);for(const s of this.fields)i=i.add(s);for(const s of t)i=i.add(s);return new pn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return zs(this.fields,t.fields,(i,s)=>i.isEqual(s))}}/**
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
 */class T9 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new T9("Invalid base64 string: "+c):c}}(t);return new je(i)}static fromUint8Array(t){const i=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(t);return new je(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let o=0;o<i.length;o++)s[o]=i.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return kt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}je.EMPTY_BYTE_STRING=new je("");const _v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(r){if(Qt(!!r),typeof r=="string"){let t=0;const i=_v.exec(r);if(Qt(!!i),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Hr(r){return typeof r=="string"?je.fromBase64String(r):je.fromUint8Array(r)}/**
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
 */const A9="server_timestamp",S9="__type__",b9="__previous_value__",w9="__local_write_time__";function u2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[S9])===null||i===void 0?void 0:i.stringValue)===A9}function Bc(r){const t=r.mapValue.fields[b9];return u2(t)?Bc(t):t}function _o(r){const t=qr(r.mapValue.fields[w9].timestampValue);return new be(t.seconds,t.nanos)}/**
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
 */class Cv{constructor(t,i,s,o,c,f,m,p,y){this.databaseId=t,this.appId=i,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const Cc="(default)";class Co{constructor(t,i){this.projectId=t,this.database=i||Cc}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database===Cc}isEqual(t){return t instanceof Co&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const R9="__type__",Ev="__max__",nc={mapValue:{}},D9="__vector__",Ec="value";function Fr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?u2(r)?4:Av(r)?9007199254740991:Tv(r)?10:11:_t()}function di(r,t){if(r===t)return!0;const i=Fr(r);if(i!==Fr(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return _o(r).isEqual(_o(t));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=qr(o.timestampValue),m=qr(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,c){return Hr(o.bytesValue).isEqual(Hr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,c){return fe(o.geoPointValue.latitude)===fe(c.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(c.geoPointValue.longitude)}(r,t);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return fe(o.integerValue)===fe(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=fe(o.doubleValue),m=fe(c.doubleValue);return f===m?_c(f)===_c(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return zs(r.arrayValue.values||[],t.arrayValue.values||[],di);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},m=c.mapValue.fields||{};if(Mh(f)!==Mh(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!di(f[p],m[p])))return!1;return!0}(r,t);default:return _t()}}function Eo(r,t){return(r.values||[]).find(i=>di(i,t))!==void 0}function Ps(r,t){if(r===t)return 0;const i=Fr(r),s=Fr(t);if(i!==s)return kt(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return kt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const m=fe(c.integerValue||c.doubleValue),p=fe(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return xh(r.timestampValue,t.timestampValue);case 4:return xh(_o(r),_o(t));case 5:return kt(r.stringValue,t.stringValue);case 6:return function(c,f){const m=Hr(c),p=Hr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const m=c.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const C=kt(m[y],p[y]);if(C!==0)return C}return kt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const m=kt(fe(c.latitude),fe(f.latitude));return m!==0?m:kt(fe(c.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Vh(r.arrayValue,t.arrayValue);case 10:return function(c,f){var m,p,y,C;const S=c.fields||{},R=f.fields||{},I=(m=S[Ec])===null||m===void 0?void 0:m.arrayValue,N=(p=R[Ec])===null||p===void 0?void 0:p.arrayValue,F=kt(((y=I==null?void 0:I.values)===null||y===void 0?void 0:y.length)||0,((C=N==null?void 0:N.values)===null||C===void 0?void 0:C.length)||0);return F!==0?F:Vh(I,N)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===nc.mapValue&&f===nc.mapValue)return 0;if(c===nc.mapValue)return 1;if(f===nc.mapValue)return-1;const m=c.fields||{},p=Object.keys(m),y=f.fields||{},C=Object.keys(y);p.sort(),C.sort();for(let S=0;S<p.length&&S<C.length;++S){const R=kt(p[S],C[S]);if(R!==0)return R;const I=Ps(m[p[S]],y[C[S]]);if(I!==0)return I}return kt(p.length,C.length)}(r.mapValue,t.mapValue);default:throw _t()}}function xh(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return kt(r,t);const i=qr(r),s=qr(t),o=kt(i.seconds,s.seconds);return o!==0?o:kt(i.nanos,s.nanos)}function Vh(r,t){const i=r.values||[],s=t.values||[];for(let o=0;o<i.length&&o<s.length;++o){const c=Ps(i[o],s[o]);if(c)return c}return kt(i.length,s.length)}function Bs(r){return I4(r)}function I4(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const s=qr(i);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return Hr(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return yt.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let s="[",o=!0;for(const c of i.values||[])o?o=!1:s+=",",s+=I4(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(i){const s=Object.keys(i.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${I4(i.fields[f])}`;return o+"}"}(r.mapValue):_t()}function uc(r){switch(Fr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Bc(r);return t?16+uc(t):16;case 5:return 2*r.stringValue.length;case 6:return Hr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,c)=>o+uc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return $r(s.fields,(c,f)=>{o+=c.length+uc(f)}),o}(r.mapValue);default:throw _t()}}function x4(r){return!!r&&"integerValue"in r}function c2(r){return!!r&&"arrayValue"in r}function Nh(r){return!!r&&"nullValue"in r}function Oh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function cc(r){return!!r&&"mapValue"in r}function Tv(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[R9])===null||i===void 0?void 0:i.stringValue)===D9}function ho(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return $r(r.mapValue.fields,(i,s)=>t.mapValue.fields[i]=ho(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=ho(r.arrayValue.values[i]);return t}return Object.assign({},r)}function Av(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ev}/**
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
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let s=0;s<t.length-1;++s)if(i=(i.mapValue.fields||{})[t.get(s)],!cc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=ho(i)}setAll(t){let i=Be.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,s,o),s={},o=[],i=m.popLast()}f?s[m.lastSegment()]=ho(f):o.push(m.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,s,o)}delete(t){const i=this.field(t.popLast());cc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return di(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=i.mapValue.fields[t.get(s)];cc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[t.get(s)]=o),i=o}return i.mapValue.fields}applyChanges(t,i,s){$r(i,(o,c)=>t[o]=c);for(const o of s)delete t[o]}clone(){return new sn(ho(this.value))}}function M9(r){const t=[];return $r(r.fields,(i,s)=>{const o=new Be([i]);if(cc(s)){const c=M9(s.mapValue).fields;if(c.length===0)t.push(o);else for(const f of c)t.push(o.child(f))}else t.push(o)}),new pn(t)}/**
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
 */class Ke{constructor(t,i,s,o,c,f,m){this.key=t,this.documentType=i,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ke(t,0,Et.min(),Et.min(),Et.min(),sn.empty(),0)}static newFoundDocument(t,i,s,o){return new Ke(t,1,i,Et.min(),s,o,0)}static newNoDocument(t,i){return new Ke(t,2,i,Et.min(),Et.min(),sn.empty(),0)}static newUnknownDocument(t,i){return new Ke(t,3,i,Et.min(),Et.min(),sn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tc{constructor(t,i){this.position=t,this.inclusive=i}}function kh(r,t,i){let s=0;for(let o=0;o<r.position.length;o++){const c=t[o],f=r.position[o];if(c.field.isKeyField()?s=yt.comparator(yt.fromName(f.referenceValue),i.key):s=Ps(f,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uh(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!di(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class Ac{constructor(t,i="asc"){this.field=t,this.dir=i}}function Sv(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class I9{}class Se extends I9{constructor(t,i,s){super(),this.field=t,this.op=i,this.value=s}static create(t,i,s){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,s):new wv(t,i,s):i==="array-contains"?new Mv(t,s):i==="in"?new Iv(t,s):i==="not-in"?new xv(t,s):i==="array-contains-any"?new Vv(t,s):new Se(t,i,s)}static createKeyFieldInFilter(t,i,s){return i==="in"?new Rv(t,s):new Dv(t,s)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Ps(i,this.value)):i!==null&&Fr(this.value)===Fr(i)&&this.matchesComparison(Ps(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends I9{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new mi(t,i)}matches(t){return x9(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function x9(r){return r.op==="and"}function V9(r){return bv(r)&&x9(r)}function bv(r){for(const t of r.filters)if(t instanceof mi)return!1;return!0}function V4(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+Bs(r.value);if(V9(r))return r.filters.map(t=>V4(t)).join(",");{const t=r.filters.map(i=>V4(i)).join(",");return`${r.op}(${t})`}}function N9(r,t){return r instanceof Se?function(s,o){return o instanceof Se&&s.op===o.op&&s.field.isEqual(o.field)&&di(s.value,o.value)}(r,t):r instanceof mi?function(s,o){return o instanceof mi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((c,f,m)=>c&&N9(f,o.filters[m]),!0):!1}(r,t):void _t()}function O9(r){return r instanceof Se?function(i){return`${i.field.canonicalString()} ${i.op} ${Bs(i.value)}`}(r):r instanceof mi?function(i){return i.op.toString()+" {"+i.getFilters().map(O9).join(" ,")+"}"}(r):"Filter"}class wv extends Se{constructor(t,i,s){super(t,i,s),this.key=yt.fromName(s.referenceValue)}matches(t){const i=yt.comparator(t.key,this.key);return this.matchesComparison(i)}}class Rv extends Se{constructor(t,i){super(t,"in",i),this.keys=k9("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Dv extends Se{constructor(t,i){super(t,"not-in",i),this.keys=k9("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function k9(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(s=>yt.fromName(s.referenceValue))}class Mv extends Se{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return c2(i)&&Eo(i.arrayValue,this.value)}}class Iv extends Se{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Eo(this.value.arrayValue,i)}}class xv extends Se{constructor(t,i){super(t,"not-in",i)}matches(t){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!Eo(this.value.arrayValue,i)}}class Vv extends Se{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!c2(i)||!i.arrayValue.values)&&i.arrayValue.values.some(s=>Eo(this.value.arrayValue,s))}}/**
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
 */class Nv{constructor(t,i=null,s=[],o=[],c=null,f=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=m,this.le=null}}function Lh(r,t=null,i=[],s=[],o=null,c=null,f=null){return new Nv(r,t,i,s,o,c,f)}function h2(r){const t=At(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(s=>V4(s)).join(","),i+="|ob:",i+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Pc(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Bs(s)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Bs(s)).join(",")),t.le=i}return t.le}function f2(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Sv(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!N9(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Uh(r.startAt,t.startAt)&&Uh(r.endAt,t.endAt)}function N4(r){return yt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class jc{constructor(t,i=null,s=[],o=[],c=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Ov(r,t,i,s,o,c,f,m){return new jc(r,t,i,s,o,c,f,m)}function U9(r){return new jc(r)}function zh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kv(r){return r.collectionGroup!==null}function fo(r){const t=At(r);if(t.he===null){t.he=[];const i=new Set;for(const c of t.explicitOrderBy)t.he.push(c),i.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new we(Be.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.he.push(new Ac(c,s))}),i.has(Be.keyField().canonicalString())||t.he.push(new Ac(Be.keyField(),s))}return t.he}function ui(r){const t=At(r);return t.Pe||(t.Pe=Uv(t,fo(r))),t.Pe}function Uv(r,t){if(r.limitType==="F")return Lh(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Ac(o.field,c)});const i=r.endAt?new Tc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Tc(r.startAt.position,r.startAt.inclusive):null;return Lh(r.path,r.collectionGroup,t,r.filters,r.limit,i,s)}}function O4(r,t,i){return new jc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function qc(r,t){return f2(ui(r),ui(t))&&r.limitType===t.limitType}function L9(r){return`${h2(ui(r))}|lt:${r.limitType}`}function xs(r){return`Query(target=${function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(o=>O9(o)).join(", ")}]`),Pc(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map(o=>Bs(o)).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map(o=>Bs(o)).join(",")),`Target(${s})`}(ui(r))}; limitType=${r.limitType})`}function Hc(r,t){return t.isFoundDocument()&&function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):yt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,o){for(const c of fo(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=kh(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,fo(s),o)||s.endAt&&!function(f,m,p){const y=kh(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,fo(s),o))}(r,t)}function Lv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function z9(r){return(t,i)=>{let s=!1;for(const o of fo(r)){const c=zv(o,t,i);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function zv(r,t,i){const s=r.field.isKeyField()?yt.comparator(t.key,i.key):function(c,f,m){const p=f.data.field(c),y=m.data.field(c);return p!==null&&y!==null?Ps(p,y):_t()}(r.field,t,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _t()}}/**
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
 */class za{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,i]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],t))return void(o[c]=[t,i]);o.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[i]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){$r(this.inner,(i,s)=>{for(const[o,c]of s)t(o,c)})}isEmpty(){return E9(this.inner)}size(){return this.innerSize}}/**
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
 */const Pv=new re(yt.comparator);function $i(){return Pv}const P9=new re(yt.comparator);function oo(...r){let t=P9;for(const i of r)t=t.insert(i.key,i);return t}function B9(r){let t=P9;return r.forEach((i,s)=>t=t.insert(i,s.overlayedDocument)),t}function xa(){return mo()}function j9(){return mo()}function mo(){return new za(r=>r.toString(),(r,t)=>r.isEqual(t))}const Bv=new re(yt.comparator),jv=new we(yt.comparator);function Nt(...r){let t=jv;for(const i of r)t=t.add(i);return t}const qv=new we(kt);function Hv(){return qv}/**
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
 */function d2(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_c(t)?"-0":t}}function q9(r){return{integerValue:""+r}}function Fv(r,t){return gv(t)?q9(t):d2(r,t)}/**
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
 */class Fc{constructor(){this._=void 0}}function Gv(r,t,i){return r instanceof Sc?function(o,c){const f={fields:{[S9]:{stringValue:A9},[w9]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&u2(c)&&(c=Bc(c)),c&&(f.fields[b9]=c),{mapValue:f}}(i,t):r instanceof js?F9(r,t):r instanceof To?G9(r,t):function(o,c){const f=H9(o,c),m=Ph(f)+Ph(o.Ie);return x4(f)&&x4(o.Ie)?q9(m):d2(o.serializer,m)}(r,t)}function Qv(r,t,i){return r instanceof js?F9(r,t):r instanceof To?G9(r,t):i}function H9(r,t){return r instanceof bc?function(s){return x4(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Sc extends Fc{}class js extends Fc{constructor(t){super(),this.elements=t}}function F9(r,t){const i=Q9(t);for(const s of r.elements)i.some(o=>di(o,s))||i.push(s);return{arrayValue:{values:i}}}class To extends Fc{constructor(t){super(),this.elements=t}}function G9(r,t){let i=Q9(t);for(const s of r.elements)i=i.filter(o=>!di(o,s));return{arrayValue:{values:i}}}class bc extends Fc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function Ph(r){return fe(r.integerValue||r.doubleValue)}function Q9(r){return c2(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Kv{constructor(t,i){this.field=t,this.transform=i}}function Yv(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof js&&o instanceof js||s instanceof To&&o instanceof To?zs(s.elements,o.elements,di):s instanceof bc&&o instanceof bc?di(s.Ie,o.Ie):s instanceof Sc&&o instanceof Sc}(r.transform,t.transform)}class $v{constructor(t,i){this.version=t,this.transformResults=i}}class ci{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new ci}static exists(t){return new ci(void 0,t)}static updateTime(t){return new ci(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Gc{}function K9(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new $9(r.key,ci.none()):new Ro(r.key,r.data,ci.none());{const i=r.data,s=sn.empty();let o=new we(Be.comparator);for(let c of t.fields)if(!o.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new Xr(r.key,s,new pn(o.toArray()),ci.none())}}function Xv(r,t,i){r instanceof Ro?function(o,c,f){const m=o.value.clone(),p=jh(o.fieldTransforms,c,f.transformResults);m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):r instanceof Xr?function(o,c,f){if(!hc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const m=jh(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(Y9(o)),p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,i):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function po(r,t,i,s){return r instanceof Ro?function(c,f,m,p){if(!hc(c.precondition,f))return m;const y=c.value.clone(),C=qh(c.fieldTransforms,p,f);return y.setAll(C),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,s):r instanceof Xr?function(c,f,m,p){if(!hc(c.precondition,f))return m;const y=qh(c.fieldTransforms,p,f),C=f.data;return C.setAll(Y9(c)),C.setAll(y),f.convertToFoundDocument(f.version,C).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(S=>S.field))}(r,t,i,s):function(c,f,m){return hc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,i)}function Zv(r,t){let i=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),c=H9(s.transform,o||null);c!=null&&(i===null&&(i=sn.empty()),i.set(s.field,c))}return i||null}function Bh(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&zs(s,o,(c,f)=>Yv(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Ro extends Gc{constructor(t,i,s,o=[]){super(),this.key=t,this.value=i,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Xr extends Gc{constructor(t,i,s,o,c=[]){super(),this.key=t,this.data=i,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function Y9(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const s=r.data.field(i);t.set(i,s)}}),t}function jh(r,t,i){const s=new Map;Qt(r.length===i.length);for(let o=0;o<i.length;o++){const c=r[o],f=c.transform,m=t.data.field(c.field);s.set(c.field,Qv(f,m,i[o]))}return s}function qh(r,t,i){const s=new Map;for(const o of r){const c=o.transform,f=i.data.field(o.field);s.set(o.field,Gv(c,f,t))}return s}class $9 extends Gc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wv extends Gc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jv{constructor(t,i,s,o){this.batchId=t,this.localWriteTime=i,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,i){const s=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(t.key)&&Xv(c,t,s[o])}}applyToLocalView(t,i){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(i=po(s,t,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(i=po(s,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const s=j9();return this.mutations.forEach(o=>{const c=t.get(o.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=i.has(o.key)?null:m;const p=K9(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Et.min())}),s}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Nt())}isEqual(t){return this.batchId===t.batchId&&zs(this.mutations,t.mutations,(i,s)=>Bh(i,s))&&zs(this.baseMutations,t.baseMutations,(i,s)=>Bh(i,s))}}class m2{constructor(t,i,s,o){this.batch=t,this.commitVersion=i,this.mutationResults=s,this.docVersions=o}static from(t,i,s){Qt(t.mutations.length===s.length);let o=function(){return Bv}();const c=t.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new m2(t,i,s,o)}}/**
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
 */class t_{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class e_{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var ye,Pt;function n_(r){switch(r){case et.OK:return _t();case et.CANCELLED:case et.UNKNOWN:case et.DEADLINE_EXCEEDED:case et.RESOURCE_EXHAUSTED:case et.INTERNAL:case et.UNAVAILABLE:case et.UNAUTHENTICATED:return!1;case et.INVALID_ARGUMENT:case et.NOT_FOUND:case et.ALREADY_EXISTS:case et.PERMISSION_DENIED:case et.FAILED_PRECONDITION:case et.ABORTED:case et.OUT_OF_RANGE:case et.UNIMPLEMENTED:case et.DATA_LOSS:return!0;default:return _t()}}function X9(r){if(r===void 0)return Yi("GRPC error has no .code"),et.UNKNOWN;switch(r){case ye.OK:return et.OK;case ye.CANCELLED:return et.CANCELLED;case ye.UNKNOWN:return et.UNKNOWN;case ye.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case ye.INTERNAL:return et.INTERNAL;case ye.UNAVAILABLE:return et.UNAVAILABLE;case ye.UNAUTHENTICATED:return et.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case ye.NOT_FOUND:return et.NOT_FOUND;case ye.ALREADY_EXISTS:return et.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return et.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case ye.ABORTED:return et.ABORTED;case ye.OUT_OF_RANGE:return et.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return et.UNIMPLEMENTED;case ye.DATA_LOSS:return et.DATA_LOSS;default:return _t()}}(Pt=ye||(ye={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function i_(){return new TextEncoder}/**
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
 */const r_=new Lr([4294967295,4294967295],0);function Hh(r){const t=i_().encode(r),i=new f9;return i.update(t),new Uint8Array(i.digest())}function Fh(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Lr([i,s],0),new Lr([o,c],0)]}class p2{constructor(t,i,s){if(this.bitmap=t,this.padding=i,this.hashCount=s,i<0||i>=8)throw new uo(`Invalid padding: ${i}`);if(s<0)throw new uo(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${s}`);if(t.length===0&&i!==0)throw new uo(`Invalid padding when bitmap length is 0: ${i}`);this.Ee=8*t.length-i,this.de=Lr.fromNumber(this.Ee)}Ae(t,i,s){let o=t.add(i.multiply(Lr.fromNumber(s)));return o.compare(r_)===1&&(o=new Lr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const i=Hh(t),[s,o]=Fh(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,o,c);if(!this.Re(f))return!1}return!0}static create(t,i,s){const o=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new p2(c,o,i);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const i=Hh(t),[s,o]=Fh(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,o,c);this.Ve(f)}}Ve(t){const i=Math.floor(t/8),s=t%8;this.bitmap[i]|=1<<s}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qc{constructor(t,i,s,o,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,s){const o=new Map;return o.set(t,Do.createSynthesizedTargetChangeForCurrentChange(t,i,s)),new Qc(Et.min(),o,new re(kt),$i(),Nt())}}class Do{constructor(t,i,s,o,c){this.resumeToken=t,this.current=i,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,s){return new Do(s,i,Nt(),Nt(),Nt())}}/**
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
 */class fc{constructor(t,i,s,o){this.me=t,this.removedTargetIds=i,this.key=s,this.fe=o}}class Z9{constructor(t,i){this.targetId=t,this.ge=i}}class W9{constructor(t,i,s=je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=i,this.resumeToken=s,this.cause=o}}class Gh{constructor(){this.pe=0,this.ye=Qh(),this.we=je.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Nt(),i=Nt(),s=Nt();return this.ye.forEach((o,c)=>{switch(c){case 0:t=t.add(o);break;case 2:i=i.add(o);break;case 1:s=s.add(o);break;default:_t()}}),new Do(this.we,this.be,t,i,s)}Me(){this.Se=!1,this.ye=Qh()}xe(t,i){this.Se=!0,this.ye=this.ye.insert(t,i)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Qt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class a_{constructor(t){this.ke=t,this.qe=new Map,this.Qe=$i(),this.$e=ic(),this.Ke=ic(),this.Ue=new re(kt)}We(t){for(const i of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(i,t.fe):this.ze(i,t.key,t.fe);for(const i of t.removedTargetIds)this.ze(i,t.key,t.fe)}je(t){this.forEachTarget(t,i=>{const s=this.He(i);switch(t.state){case 0:this.Je(i)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(i);break;case 3:this.Je(i)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(i)&&(this.Ye(i),s.Ce(t.resumeToken));break;default:_t()}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.qe.forEach((s,o)=>{this.Je(o)&&i(o)})}Ze(t){const i=t.targetId,s=t.ge.count,o=this.Xe(i);if(o){const c=o.target;if(N4(c))if(s===0){const f=new yt(c.path);this.ze(i,f,Ke.newNoDocument(f,Et.min()))}else Qt(s===1);else{const f=this.et(i);if(f!==s){const m=this.tt(t),p=m?this.nt(m,t,f):1;if(p!==0){this.Ye(i);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,y)}}}}}tt(t){const i=t.ge.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=i;let f,m;try{f=Hr(s).toUint8Array()}catch(p){if(p instanceof T9)return Ls("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new p2(f,o,c)}catch(p){return Ls(p instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(t,i,s){return i.ge.count===s-this.st(t,i.targetId)?0:2}st(t,i){const s=this.ke.getRemoteKeysForTarget(i);let o=0;return s.forEach(c=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(m)||(this.ze(i,c,null),o++)}),o}ot(t){const i=new Map;this.qe.forEach((c,f)=>{const m=this.Xe(f);if(m){if(c.current&&N4(m.target)){const p=new yt(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Ke.newNoDocument(p,t))}c.ve&&(i.set(f,c.Fe()),c.Me())}});let s=Nt();this.Ke.forEach((c,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const o=new Qc(t,i,this.Ue,this.Qe,s);return this.Qe=$i(),this.$e=ic(),this.Ke=ic(),this.Ue=new re(kt),o}Ge(t,i){if(!this.Je(t))return;const s=this.ut(t,i.key)?2:0;this.He(t).xe(i.key,s),this.Qe=this.Qe.insert(i.key,i),this.$e=this.$e.insert(i.key,this._t(i.key).add(t)),this.Ke=this.Ke.insert(i.key,this.ct(i.key).add(t))}ze(t,i,s){if(!this.Je(t))return;const o=this.He(t);this.ut(t,i)?o.xe(i,1):o.Oe(i),this.Ke=this.Ke.insert(i,this.ct(i).delete(t)),this.Ke=this.Ke.insert(i,this.ct(i).add(t)),s&&(this.Qe=this.Qe.insert(i,s))}removeTarget(t){this.qe.delete(t)}et(t){const i=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let i=this.qe.get(t);return i||(i=new Gh,this.qe.set(t,i)),i}ct(t){let i=this.Ke.get(t);return i||(i=new we(kt),this.Ke=this.Ke.insert(t,i)),i}_t(t){let i=this.$e.get(t);return i||(i=new we(kt),this.$e=this.$e.insert(t,i)),i}Je(t){const i=this.Xe(t)!==null;return i||ut("WatchChangeAggregator","Detected inactive target",t),i}Xe(t){const i=this.qe.get(t);return i&&i.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Gh),this.ke.getRemoteKeysForTarget(t).forEach(i=>{this.ze(t,i,null)})}ut(t,i){return this.ke.getRemoteKeysForTarget(t).has(i)}}function ic(){return new re(yt.comparator)}function Qh(){return new re(yt.comparator)}const s_={asc:"ASCENDING",desc:"DESCENDING"},l_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o_={and:"AND",or:"OR"};class u_{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function k4(r,t){return r.useProto3Json||Pc(t)?t:{value:t}}function wc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function J9(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function c_(r,t){return wc(r,t.toTimestamp())}function hi(r){return Qt(!!r),Et.fromTimestamp(function(i){const s=qr(i);return new be(s.seconds,s.nanos)}(r))}function g2(r,t){return U4(r,t).canonicalString()}function U4(r,t){const i=function(o){return new Jt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?i:i.child(t)}function t7(r){const t=Jt.fromString(r);return Qt(a7(t)),t}function L4(r,t){return g2(r.databaseId,t.path)}function y4(r,t){const i=t7(t);if(i.get(1)!==r.databaseId.projectId)throw new pt(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new pt(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new yt(n7(i))}function e7(r,t){return g2(r.databaseId,t)}function h_(r){const t=t7(r);return t.length===4?Jt.emptyPath():n7(t)}function z4(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function n7(r){return Qt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Kh(r,t,i){return{name:L4(r,t),fields:i.value.mapValue.fields}}function f_(r,t){let i;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_t()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],c=function(y,C){return y.useProto3Json?(Qt(C===void 0||typeof C=="string"),je.fromBase64String(C||"")):(Qt(C===void 0||C instanceof Buffer||C instanceof Uint8Array),je.fromUint8Array(C||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const C=y.code===void 0?et.UNKNOWN:X9(y.code);return new pt(C,y.message||"")}(f);i=new W9(s,o,c,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=y4(r,s.document.name),c=hi(s.document.updateTime),f=s.document.createTime?hi(s.document.createTime):Et.min(),m=new sn({mapValue:{fields:s.document.fields}}),p=Ke.newFoundDocument(o,c,f,m),y=s.targetIds||[],C=s.removedTargetIds||[];i=new fc(y,C,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=y4(r,s.document),c=s.readTime?hi(s.readTime):Et.min(),f=Ke.newNoDocument(o,c),m=s.removedTargetIds||[];i=new fc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=y4(r,s.document),c=s.removedTargetIds||[];i=new fc([],c,o,null)}else{if(!("filter"in t))return _t();{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new e_(o,c),m=s.targetId;i=new Z9(m,f)}}return i}function d_(r,t){let i;if(t instanceof Ro)i={update:Kh(r,t.key,t.value)};else if(t instanceof $9)i={delete:L4(r,t.key)};else if(t instanceof Xr)i={update:Kh(r,t.key,t.data),updateMask:T_(t.fieldMask)};else{if(!(t instanceof Wv))return _t();i={verify:L4(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const m=f.transform;if(m instanceof Sc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof js)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof To)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof bc)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw _t()}(0,s))),t.precondition.isNone||(i.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:c_(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:_t()}(r,t.precondition)),i}function m_(r,t){return r&&r.length>0?(Qt(t!==void 0),r.map(i=>function(o,c){let f=o.updateTime?hi(o.updateTime):hi(c);return f.isEqual(Et.min())&&(f=hi(c)),new $v(f,o.transformResults||[])}(i,t))):[]}function p_(r,t){return{documents:[e7(r,t.path)]}}function g_(r,t){const i={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=e7(r,o);const c=function(y){if(y.length!==0)return r7(mi.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(C=>function(R){return{field:Vs(R.field),direction:__(R.dir)}}(C))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const m=k4(r,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:i,parent:o}}function y_(r){let t=h_(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let o=null;if(s>0){Qt(s===1);const C=i.from[0];C.allDescendants?o=C.collectionId:t=t.child(C.collectionId)}let c=[];i.where&&(c=function(S){const R=i7(S);return R instanceof mi&&V9(R)?R.getFilters():[R]}(i.where));let f=[];i.orderBy&&(f=function(S){return S.map(R=>function(N){return new Ac(Ns(N.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(i.orderBy));let m=null;i.limit&&(m=function(S){let R;return R=typeof S=="object"?S.value:S,Pc(R)?null:R}(i.limit));let p=null;i.startAt&&(p=function(S){const R=!!S.before,I=S.values||[];return new Tc(I,R)}(i.startAt));let y=null;return i.endAt&&(y=function(S){const R=!S.before,I=S.values||[];return new Tc(I,R)}(i.endAt)),Ov(t,o,f,c,m,"F",p,y)}function v_(r,t){const i=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t()}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function i7(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Ns(i.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ns(i.unaryFilter.field);return Se.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Ns(i.unaryFilter.field);return Se.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ns(i.unaryFilter.field);return Se.create(f,"!=",{nullValue:"NULL_VALUE"});default:return _t()}}(r):r.fieldFilter!==void 0?function(i){return Se.create(Ns(i.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _t()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return mi.create(i.compositeFilter.filters.map(s=>i7(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t()}}(i.compositeFilter.op))}(r):_t()}function __(r){return s_[r]}function C_(r){return l_[r]}function E_(r){return o_[r]}function Vs(r){return{fieldPath:r.canonicalString()}}function Ns(r){return Be.fromServerFormat(r.fieldPath)}function r7(r){return r instanceof Se?function(i){if(i.op==="=="){if(Oh(i.value))return{unaryFilter:{field:Vs(i.field),op:"IS_NAN"}};if(Nh(i.value))return{unaryFilter:{field:Vs(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Oh(i.value))return{unaryFilter:{field:Vs(i.field),op:"IS_NOT_NAN"}};if(Nh(i.value))return{unaryFilter:{field:Vs(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(i.field),op:C_(i.op),value:i.value}}}(r):r instanceof mi?function(i){const s=i.getFilters().map(o=>r7(o));return s.length===1?s[0]:{compositeFilter:{op:E_(i.op),filters:s}}}(r):_t()}function T_(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function a7(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Or{constructor(t,i,s,o,c=Et.min(),f=Et.min(),m=je.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class A_{constructor(t){this.Tt=t}}function S_(r){const t=y_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?O4(t,t.limit,"L"):t}/**
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
 */class b_{constructor(){this.Tn=new w_}addToCollectionParentIndex(t,i){return this.Tn.add(i),W.resolve()}getCollectionParents(t,i){return W.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return W.resolve()}deleteFieldIndex(t,i){return W.resolve()}deleteAllFieldIndexes(t){return W.resolve()}createTargetIndexes(t,i){return W.resolve()}getDocumentsMatchingTarget(t,i){return W.resolve(null)}getIndexType(t,i){return W.resolve(0)}getFieldIndexes(t,i){return W.resolve([])}getNextCollectionGroupToUpdate(t){return W.resolve(null)}getMinOffset(t,i){return W.resolve(jr.min())}getMinOffsetFromCollectionGroup(t,i){return W.resolve(jr.min())}updateCollectionGroup(t,i,s){return W.resolve()}updateIndexEntries(t,i){return W.resolve()}}class w_{constructor(){this.index={}}add(t){const i=t.lastSegment(),s=t.popLast(),o=this.index[i]||new we(Jt.comparator),c=!o.has(s);return this.index[i]=o.add(s),c}has(t){const i=t.lastSegment(),s=t.popLast(),o=this.index[i];return o&&o.has(s)}getEntries(t){return(this.index[t]||new we(Jt.comparator)).toArray()}}/**
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
 */const Yh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},s7=41943040;class an{static withCacheSize(t){return new an(t,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(s7,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class qs{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new qs(0)}static Un(){return new qs(-1)}}/**
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
 */const $h="LruGarbageCollector",R_=1048576;function Xh([r,t],[i,s]){const o=kt(r,i);return o===0?kt(t,s):o}class D_{constructor(t){this.Hn=t,this.buffer=new we(Xh),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();Xh(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class M_{constructor(t,i,s){this.garbageCollector=t,this.asyncQueue=i,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ut($h,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){$s(i)?ut($h,"Ignoring IndexedDB error during garbage collection: ",i):await Ys(i)}await this.er(3e5)})}}class I_{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(s=>Math.floor(i/100*s))}nthSequenceNumber(t,i){if(i===0)return W.resolve(zc.ae);const s=new D_(i);return this.tr.forEachTarget(t,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(t,i,s){return this.tr.removeTargets(t,i,s)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ut("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Yh)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ut("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yh):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let s,o,c,f,m,p,y;const C=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ut("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(t,s,i))).next(S=>(c=S,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),Is()<=Bt.DEBUG&&ut("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-C}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${c} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-C}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:S})))}}function x_(r,t){return new I_(r,t)}/**
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
 */class V_{constructor(){this.changes=new za(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,Ke.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?W.resolve(s):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class N_{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class O_{constructor(t,i,s,o){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,i){let s=null;return this.documentOverlayCache.getOverlay(t,i).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,i))).next(o=>(s!==null&&po(s.mutation,o,pn.empty(),be.now()),o))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.getLocalViewOfDocuments(t,s,Nt()).next(()=>s))}getLocalViewOfDocuments(t,i,s=Nt()){const o=xa();return this.populateOverlays(t,o,i).next(()=>this.computeViews(t,i,o,s).next(c=>{let f=oo();return c.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const s=xa();return this.populateOverlays(t,s,i).next(()=>this.computeViews(t,i,s,Nt()))}populateOverlays(t,i,s){const o=[];return s.forEach(c=>{i.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(t,o).next(c=>{c.forEach((f,m)=>{i.set(f,m)})})}computeViews(t,i,s,o){let c=$i();const f=mo(),m=function(){return mo()}();return i.forEach((p,y)=>{const C=s.get(y.key);o.has(y.key)&&(C===void 0||C.mutation instanceof Xr)?c=c.insert(y.key,y):C!==void 0?(f.set(y.key,C.mutation.getFieldMask()),po(C.mutation,y,C.mutation.getFieldMask(),be.now())):f.set(y.key,pn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,C)=>f.set(y,C)),i.forEach((y,C)=>{var S;return m.set(y,new N_(C,(S=f.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(t,i){const s=mo();let o=new re((f,m)=>f-m),c=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=i.get(p);if(y===null)return;let C=s.get(p)||pn.empty();C=m.applyToLocalView(y,C),s.set(p,C);const S=(o.get(m.batchId)||Nt()).add(p);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,C=p.value,S=j9();C.forEach(R=>{if(!c.has(R)){const I=K9(i.get(R),s.get(R));I!==null&&S.set(R,I),c=c.add(R)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return W.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,i,s,o){return function(f){return yt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):kv(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,s,o):this.getDocumentsMatchingCollectionQuery(t,i,s,o)}getNextDocuments(t,i,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,s,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,s.largestBatchId,o-c.size):W.resolve(xa());let m=vo,p=c;return f.next(y=>W.forEach(y,(C,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),c.get(C)?W.resolve():this.remoteDocumentCache.getEntry(t,C).next(R=>{p=p.insert(C,R)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Nt())).next(C=>({batchId:m,changes:B9(C)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new yt(i)).next(s=>{let o=oo();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,i,s,o){const c=i.collectionGroup;let f=oo();return this.indexManager.getCollectionParents(t,c).next(m=>W.forEach(m,p=>{const y=function(S,R){return new jc(R,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(i,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(C=>{C.forEach((S,R)=>{f=f.insert(S,R)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,s,c,o))).next(f=>{c.forEach((p,y)=>{const C=y.getKey();f.get(C)===null&&(f=f.insert(C,Ke.newInvalidDocument(C)))});let m=oo();return f.forEach((p,y)=>{const C=c.get(p);C!==void 0&&po(C.mutation,y,pn.empty(),be.now()),Hc(i,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class k_{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return W.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(o){return{id:o.id,version:o.version,createTime:hi(o.createTime)}}(i)),W.resolve()}getNamedQuery(t,i){return W.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(o){return{name:o.name,query:S_(o.bundledQuery),readTime:hi(o.readTime)}}(i)),W.resolve()}}/**
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
 */class U_{constructor(){this.overlays=new re(yt.comparator),this.Rr=new Map}getOverlay(t,i){return W.resolve(this.overlays.get(i))}getOverlays(t,i){const s=xa();return W.forEach(i,o=>this.getOverlay(t,o).next(c=>{c!==null&&s.set(o,c)})).next(()=>s)}saveOverlays(t,i,s){return s.forEach((o,c)=>{this.Et(t,i,c)}),W.resolve()}removeOverlaysForBatchId(t,i,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),W.resolve()}getOverlaysForCollection(t,i,s){const o=xa(),c=i.length+1,f=new yt(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(t,i,s,o){let c=new re((y,C)=>y-C);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let C=c.get(y.largestBatchId);C===null&&(C=xa(),c=c.insert(y.largestBatchId,C)),C.set(y.getKey(),y)}}const m=xa(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,C)=>m.set(y,C)),!(m.size()>=o)););return W.resolve(m)}Et(t,i,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new t_(i,s));let c=this.Rr.get(i);c===void 0&&(c=Nt(),this.Rr.set(i,c)),this.Rr.set(i,c.add(s.key))}}/**
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
 */class L_{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(t){return W.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,W.resolve()}}/**
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
 */class y2{constructor(){this.Vr=new we(Oe.mr),this.gr=new we(Oe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const s=new Oe(t,i);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,i){t.forEach(s=>this.addReference(s,i))}removeReference(t,i){this.wr(new Oe(t,i))}br(t,i){t.forEach(s=>this.removeReference(s,i))}Sr(t){const i=new yt(new Jt([])),s=new Oe(i,t),o=new Oe(i,t+1),c=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new yt(new Jt([])),s=new Oe(i,t),o=new Oe(i,t+1);let c=Nt();return this.gr.forEachInRange([s,o],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new Oe(t,0),s=this.Vr.firstAfterOrEqual(i);return s!==null&&t.isEqual(s.key)}}class Oe{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return yt.comparator(t.key,i.key)||kt(t.Cr,i.Cr)}static pr(t,i){return kt(t.Cr,i.Cr)||yt.comparator(t.key,i.key)}}/**
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
 */class z_{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new we(Oe.mr)}checkEmpty(t){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,s,o){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new Jv(c,i,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new Oe(m.key,c)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(t,i){return W.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const s=i+1,o=this.Nr(s),c=o<0?0:o;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?o2:this.Fr-1)}getAllMutationBatches(t){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);c.push(m)}),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let s=new we(kt);return i.forEach(o=>{const c=new Oe(o,0),f=new Oe(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],m=>{s=s.add(m.Cr)})}),W.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,i){const s=i.path,o=s.length+1;let c=s;yt.isDocumentKey(c)||(c=c.child(""));const f=new Oe(new yt(c),0);let m=new we(kt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},f),W.resolve(this.Br(m))}Br(t){const i=[];return t.forEach(s=>{const o=this.Or(s);o!==null&&i.push(o)}),i}removeMutationBatch(t,i){Qt(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return W.forEach(i.mutations,o=>{const c=new Oe(o.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,i){const s=new Oe(i,0),o=this.Mr.firstAfterOrEqual(s);return W.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,W.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class P_{constructor(t){this.kr=t,this.docs=function(){return new re(yt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const s=i.key,o=this.docs.get(s),c=o?o.size:0,f=this.kr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const s=this.docs.get(i);return W.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(i))}getEntries(t,i){let s=$i();return i.forEach(o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Ke.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(t,i,s,o){let c=$i();const f=i.path,m=new yt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:C}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||fv(hv(C),s)<=0||(o.has(C.key)||Hc(i,C))&&(c=c.insert(C.key,C.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(t,i,s,o){_t()}qr(t,i){return W.forEach(this.docs,s=>i(s))}newChangeBuffer(t){return new B_(this)}getSize(t){return W.resolve(this.size)}}class B_ extends V_{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?i.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(s)}),W.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
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
 */class j_{constructor(t){this.persistence=t,this.Qr=new za(i=>h2(i),f2),this.lastRemoteSnapshotVersion=Et.min(),this.highestTargetId=0,this.$r=0,this.Kr=new y2,this.targetCount=0,this.Ur=qs.Kn()}forEachTarget(t,i){return this.Qr.forEach((s,o)=>i(o)),W.resolve()}getLastRemoteSnapshotVersion(t){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return W.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(t,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.$r&&(this.$r=i),W.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new qs(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,W.resolve()}updateTargetData(t,i){return this.zn(i),W.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,W.resolve()}removeTargets(t,i,s){let o=0;const c=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=i&&s.get(m.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),W.waitFor(c).next(()=>o)}getTargetCount(t){return W.resolve(this.targetCount)}getTargetData(t,i){const s=this.Qr.get(i)||null;return W.resolve(s)}addMatchingKeys(t,i,s){return this.Kr.yr(i,s),W.resolve()}removeMatchingKeys(t,i,s){this.Kr.br(i,s);const o=this.persistence.referenceDelegate,c=[];return o&&i.forEach(f=>{c.push(o.markPotentiallyOrphaned(t,f))}),W.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),W.resolve()}getMatchingKeysForTargetId(t,i){const s=this.Kr.vr(i);return W.resolve(s)}containsKey(t,i){return W.resolve(this.Kr.containsKey(i))}}/**
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
 */class l7{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new zc(0),this.zr=!1,this.zr=!0,this.jr=new L_,this.referenceDelegate=t(this),this.Hr=new j_(this),this.indexManager=new b_,this.remoteDocumentCache=function(o){return new P_(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new A_(i),this.Yr=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new U_,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let s=this.Wr[t.toKey()];return s||(s=new z_(i,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,s){ut("MemoryPersistence","Starting transaction:",t);const o=new q_(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(c=>this.referenceDelegate.Xr(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}ei(t,i){return W.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,i)))}}class q_ extends mv{constructor(t){super(),this.currentSequenceNumber=t}}class v2{constructor(t){this.persistence=t,this.ti=new y2,this.ni=null}static ri(t){return new v2(t)}get ii(){if(this.ni)return this.ni;throw _t()}addReference(t,i,s){return this.ti.addReference(s,i),this.ii.delete(s.toString()),W.resolve()}removeReference(t,i,s){return this.ti.removeReference(s,i),this.ii.add(s.toString()),W.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),W.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,i.targetId).next(o=>{o.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,s=>{const o=yt.fromPath(s);return this.si(t,o).next(c=>{c||i.removeEntry(o,Et.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(s=>{s?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return W.or([()=>W.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Rc{constructor(t,i){this.persistence=t,this.oi=new za(s=>yv(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=x_(this,i)}static ri(t,i){return new Rc(t,i)}Zr(){}Xr(t){return W.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>i.next(o=>s+o))}sr(t){let i=0;return this.rr(t,s=>{i++}).next(()=>i)}rr(t,i){return W.forEach(this.oi,(s,o)=>this.ar(t,s,o).next(c=>c?W.resolve():i(o)))}removeTargets(t,i,s){return this.persistence.getTargetCache().removeTargets(t,i,s)}removeOrphanedDocuments(t,i){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.qr(t,f=>this.ar(t,f,i).next(m=>{m||(s++,c.removeEntry(f,Et.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),W.resolve()}removeTarget(t,i){const s=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),W.resolve()}removeReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),W.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),W.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=uc(t.data.value)),i}ar(t,i,s){return W.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const o=this.oi.get(i);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class _2{constructor(t,i,s,o){this.targetId=t,this.fromCache=i,this.Hi=s,this.Ji=o}static Yi(t,i){let s=Nt(),o=Nt();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new _2(t,i.fromCache,s,o)}}/**
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
 */class H_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class F_{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return yp()?8:pv(mp())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,s,o){const c={result:null};return this.rs(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,i,o,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new H_;return this._s(t,i,f).next(m=>{if(c.result=m,this.Xi)return this.us(t,i,f,m.size)})}).next(()=>c.result)}us(t,i,s,o){return s.documentReadCount<this.es?(Is()<=Bt.DEBUG&&ut("QueryEngine","SDK will not create cache indexes for query:",xs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(Is()<=Bt.DEBUG&&ut("QueryEngine","Query:",xs(i),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Is()<=Bt.DEBUG&&ut("QueryEngine","The SDK decides to create cache indexes for query:",xs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ui(i))):W.resolve())}rs(t,i){if(zh(i))return W.resolve(null);let s=ui(i);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(i.limit!==null&&o===1&&(i=O4(i,null,"F"),s=ui(i)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Nt(...c);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(i,m);return this.ls(i,y,f,p.readTime)?this.rs(t,O4(i,null,"F")):this.hs(t,y,i,p)}))})))}ss(t,i,s,o){return zh(i)||o.isEqual(Et.min())?W.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(i,c);return this.ls(i,f,s,o)?W.resolve(null):(Is()<=Bt.DEBUG&&ut("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xs(i)),this.hs(t,f,i,cv(o,vo)).next(m=>m))})}cs(t,i){let s=new we(z9(t));return i.forEach((o,c)=>{Hc(t,c)&&(s=s.add(c))}),s}ls(t,i,s,o){if(t.limit===null)return!1;if(s.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}_s(t,i,s){return Is()<=Bt.DEBUG&&ut("QueryEngine","Using full collection scan to execute query:",xs(i)),this.ns.getDocumentsMatchingQuery(t,i,jr.min(),s)}hs(t,i,s,o){return this.ns.getDocumentsMatchingQuery(t,s,o).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const C2="LocalStore",G_=3e8;class Q_{constructor(t,i,s,o){this.persistence=t,this.Ps=i,this.serializer=o,this.Ts=new re(kt),this.Is=new za(c=>h2(c),f2),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new O_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function K_(r,t,i,s){return new Q_(r,t,i,s)}async function o7(r,t){const i=At(r);return await i.persistence.runTransaction("Handle user change","readonly",s=>{let o;return i.mutationQueue.getAllMutationBatches(s).next(c=>(o=c,i.As(t),i.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],m=[];let p=Nt();for(const y of o){f.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}for(const y of c){m.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}return i.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function Y_(r,t){const i=At(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,C){const S=y.batch,R=S.keys();let I=W.resolve();return R.forEach(N=>{I=I.next(()=>C.getEntry(p,N)).next(F=>{const B=y.docVersions.get(N);Qt(B!==null),F.version.compareTo(B)<0&&(S.applyToRemoteDocument(F,y),F.isValidDocument()&&(F.setReadTime(y.commitVersion),C.addEntry(F)))})}),I.next(()=>m.mutationQueue.removeMutationBatch(p,S))}(i,s,t,c).next(()=>c.apply(s)).next(()=>i.mutationQueue.performConsistencyCheck(s)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Nt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>i.localDocuments.getDocuments(s,o))})}function u7(r){const t=At(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function $_(r,t){const i=At(r),s=t.snapshotVersion;let o=i.Ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.ds.newChangeBuffer({trackRemovals:!0});o=i.Ts;const m=[];t.targetChanges.forEach((C,S)=>{const R=o.get(S);if(!R)return;m.push(i.Hr.removeMatchingKeys(c,C.removedDocuments,S).next(()=>i.Hr.addMatchingKeys(c,C.addedDocuments,S)));let I=R.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(S)!==null?I=I.withResumeToken(je.EMPTY_BYTE_STRING,Et.min()).withLastLimboFreeSnapshotVersion(Et.min()):C.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(C.resumeToken,s)),o=o.insert(S,I),function(F,B,$){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=G_?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,I,C)&&m.push(i.Hr.updateTargetData(c,I))});let p=$i(),y=Nt();if(t.documentUpdates.forEach(C=>{t.resolvedLimboDocuments.has(C)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(c,C))}),m.push(X_(c,f,t.documentUpdates).next(C=>{p=C.Vs,y=C.fs})),!s.isEqual(Et.min())){const C=i.Hr.getLastRemoteSnapshotVersion(c).next(S=>i.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));m.push(C)}return W.waitFor(m).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(i.Ts=o,c))}function X_(r,t,i){let s=Nt(),o=Nt();return i.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=$i();return i.forEach((m,p)=>{const y=c.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Et.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):ut(C2,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function Z_(r,t){const i=At(r);return i.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=o2),i.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function W_(r,t){const i=At(r);return i.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return i.Hr.getTargetData(s,t).next(c=>c?(o=c,W.resolve(o)):i.Hr.allocateTargetId(s).next(f=>(o=new Or(t,f,"TargetPurposeListen",s.currentSequenceNumber),i.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=i.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(s.targetId,s),i.Is.set(t,s.targetId)),s})}async function P4(r,t,i){const s=At(r),o=s.Ts.get(t),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!$s(f))throw f;ut(C2,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(o.target)}function Zh(r,t,i){const s=At(r);let o=Et.min(),c=Nt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,C){const S=At(p),R=S.Is.get(C);return R!==void 0?W.resolve(S.Ts.get(R)):S.Hr.getTargetData(y,C)}(s,f,ui(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{c=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,i?o:Et.min(),i?c:Nt())).next(m=>(J_(s,Lv(t),m),{documents:m,gs:c})))}function J_(r,t,i){let s=r.Es.get(t)||Et.min();i.forEach((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class Wh{constructor(){this.activeTargetIds=Hv()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tC{constructor(){this.ho=new Wh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,s){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,s){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Wh,Promise.resolve()}handleUserChange(t,i,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class eC{To(t){}shutdown(){}}/**
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
 */const Jh="ConnectivityMonitor";class tf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ut(Jh,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ut(Jh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rc=null;function B4(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
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
 */const v4="RestConnection",nC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Cc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(t,i,s,o,c){const f=B4(),m=this.So(t,i.toUriEncodedString());ut(v4,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,c),this.vo(t,m,p,s).then(y=>(ut(v4,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Ls(v4,`RPC '${t}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(t,i,s,o,c,f){return this.bo(t,i,s,o,c)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,c)=>t[c]=o),s&&s.headers.forEach((o,c)=>t[c]=o)}So(t,i){const s=nC[t];return`${this.po}/v1/${i}:${s}`}terminate(){}}/**
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
 */class rC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Ge="WebChannelConnection";class aC extends iC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,s,o){const c=B4();return new Promise((f,m)=>{const p=new d9;p.setWithCredentials(!0),p.listenOnce(m9.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case oc.NO_ERROR:const C=p.getResponseJson();ut(Ge,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(C)),f(C);break;case oc.TIMEOUT:ut(Ge,`RPC '${t}' ${c} timed out`),m(new pt(et.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const S=p.getStatus();if(ut(Ge,`RPC '${t}' ${c} failed with status:`,S,"response text:",p.getResponseText()),S>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const I=R==null?void 0:R.error;if(I&&I.status&&I.message){const N=function(B){const $=B.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf($)>=0?$:et.UNKNOWN}(I.status);m(new pt(N,I.message))}else m(new pt(et.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new pt(et.UNAVAILABLE,"Connection failed."));break;default:_t()}}finally{ut(Ge,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(o);ut(Ge,`RPC '${t}' ${c} sending request:`,o),p.send(i,"POST",y,s,15)})}Wo(t,i,s){const o=B4(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=y9(),m=g9(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,i,s),p.encodeInitMessageHeaders=!0;const C=c.join("");ut(Ge,`Creating RPC '${t}' stream ${o}: ${C}`,p);const S=f.createWebChannel(C,p);let R=!1,I=!1;const N=new rC({Fo:B=>{I?ut(Ge,`Not sending because RPC '${t}' stream ${o} is closed:`,B):(R||(ut(Ge,`Opening RPC '${t}' stream ${o} transport.`),S.open(),R=!0),ut(Ge,`RPC '${t}' stream ${o} sending:`,B),S.send(B))},Mo:()=>S.close()}),F=(B,$,rt)=>{B.listen($,it=>{try{rt(it)}catch(gt){setTimeout(()=>{throw gt},0)}})};return F(S,lo.EventType.OPEN,()=>{I||(ut(Ge,`RPC '${t}' stream ${o} transport opened.`),N.Qo())}),F(S,lo.EventType.CLOSE,()=>{I||(I=!0,ut(Ge,`RPC '${t}' stream ${o} transport closed`),N.Ko())}),F(S,lo.EventType.ERROR,B=>{I||(I=!0,Ls(Ge,`RPC '${t}' stream ${o} transport errored:`,B),N.Ko(new pt(et.UNAVAILABLE,"The operation could not be completed")))}),F(S,lo.EventType.MESSAGE,B=>{var $;if(!I){const rt=B.data[0];Qt(!!rt);const it=rt,gt=(it==null?void 0:it.error)||(($=it[0])===null||$===void 0?void 0:$.error);if(gt){ut(Ge,`RPC '${t}' stream ${o} received error:`,gt);const ht=gt.status;let Ct=function(A){const w=ye[A];if(w!==void 0)return X9(w)}(ht),V=gt.message;Ct===void 0&&(Ct=et.INTERNAL,V="Unknown error status: "+ht+" with message "+gt.message),I=!0,N.Ko(new pt(Ct,V)),S.close()}else ut(Ge,`RPC '${t}' stream ${o} received:`,rt),N.Uo(rt)}}),F(m,p9.STAT_EVENT,B=>{B.stat===M4.PROXY?ut(Ge,`RPC '${t}' stream ${o} detected buffering proxy`):B.stat===M4.NOPROXY&&ut(Ge,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function _4(){return typeof document<"u"?document:null}/**
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
 */function Kc(r){return new u_(r,!0)}/**
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
 */class c7{constructor(t,i,s=1e3,o=1.5,c=6e4){this.Ti=t,this.timerId=i,this.Go=s,this.zo=o,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,i-s);o>0&&ut("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const ef="PersistentStream";class h7{constructor(t,i,s,o,c,f,m,p){this.Ti=t,this.n_=s,this.r_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new c7(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===et.RESOURCE_EXHAUSTED?(Yi(i.toString()),Yi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===i&&this.V_(s,o)},s=>{t(()=>{const o=new pt(et.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(t,i){const s=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ut(ef,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(ut(ef,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sC extends h7{constructor(t,i,s,o,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,o,f),this.serializer=c}f_(t,i){return this.connection.Wo("Listen",t,i)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const i=f_(this.serializer,t),s=function(c){if(!("targetChange"in c))return Et.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Et.min():f.readTime?hi(f.readTime):Et.min()}(t);return this.listener.p_(i,s)}y_(t){const i={};i.database=z4(this.serializer),i.addTarget=function(c,f){let m;const p=f.target;if(m=N4(p)?{documents:p_(c,p)}:{query:g_(c,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=J9(c,f.resumeToken);const y=k4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Et.min())>0){m.readTime=wc(c,f.snapshotVersion.toTimestamp());const y=k4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=v_(this.serializer,t);s&&(i.labels=s),this.I_(i)}w_(t){const i={};i.database=z4(this.serializer),i.removeTarget=t,this.I_(i)}}class lC extends h7{constructor(t,i,s,o,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,o,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=m_(t.writeResults,t.commitTime),s=hi(t.commitTime);return this.listener.v_(s,i)}C_(){const t={};t.database=z4(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(s=>d_(this.serializer,s))};this.I_(i)}}/**
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
 */class oC{}class uC extends oC{constructor(t,i,s,o){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new pt(et.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,U4(i,s),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new pt(et.UNKNOWN,c.toString())})}Co(t,i,s,o,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,U4(i,s),o,f,m,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pt(et.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class cC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Yi(i),this.N_=!1):ut("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ka="RemoteStore";class hC{constructor(t,i,s,o,c){this.localStore=t,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Pa(this)&&(ut(ka,"Restarting streams for network reachability change."),await async function(p){const y=At(p);y.W_.add(4),await Mo(y),y.j_.set("Unknown"),y.W_.delete(4),await Yc(y)}(this))})}),this.j_=new cC(s,o)}}async function Yc(r){if(Pa(r))for(const t of r.G_)await t(!0)}async function Mo(r){for(const t of r.G_)await t(!1)}function f7(r,t){const i=At(r);i.U_.has(t.targetId)||(i.U_.set(t.targetId,t),S2(i)?A2(i):Xs(i).c_()&&T2(i,t))}function E2(r,t){const i=At(r),s=Xs(i);i.U_.delete(t),s.c_()&&d7(i,t),i.U_.size===0&&(s.c_()?s.P_():Pa(i)&&i.j_.set("Unknown"))}function T2(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Et.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Xs(r).y_(t)}function d7(r,t){r.H_.Ne(t),Xs(r).w_(t)}function A2(r){r.H_=new a_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Xs(r).start(),r.j_.B_()}function S2(r){return Pa(r)&&!Xs(r).u_()&&r.U_.size>0}function Pa(r){return At(r).W_.size===0}function m7(r){r.H_=void 0}async function fC(r){r.j_.set("Online")}async function dC(r){r.U_.forEach((t,i)=>{T2(r,t)})}async function mC(r,t){m7(r),S2(r)?(r.j_.q_(t),A2(r)):r.j_.set("Unknown")}async function pC(r,t,i){if(r.j_.set("Online"),t instanceof W9&&t.state===2&&t.cause)try{await async function(o,c){const f=c.cause;for(const m of c.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.U_.delete(m),o.H_.removeTarget(m))}(r,t)}catch(s){ut(ka,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Dc(r,s)}else if(t instanceof fc?r.H_.We(t):t instanceof Z9?r.H_.Ze(t):r.H_.je(t),!i.isEqual(Et.min()))try{const s=await u7(r.localStore);i.compareTo(s)>=0&&await function(c,f){const m=c.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const C=c.U_.get(y);C&&c.U_.set(y,C.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const C=c.U_.get(p);if(!C)return;c.U_.set(p,C.withResumeToken(je.EMPTY_BYTE_STRING,C.snapshotVersion)),d7(c,p);const S=new Or(C.target,p,y,C.sequenceNumber);T2(c,S)}),c.remoteSyncer.applyRemoteEvent(m)}(r,i)}catch(s){ut(ka,"Failed to raise snapshot:",s),await Dc(r,s)}}async function Dc(r,t,i){if(!$s(t))throw t;r.W_.add(1),await Mo(r),r.j_.set("Offline"),i||(i=()=>u7(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ut(ka,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await Yc(r)})}function p7(r,t){return t().catch(i=>Dc(r,i,t))}async function $c(r){const t=At(r),i=Gr(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:o2;for(;gC(t);)try{const o=await Z_(t.localStore,s);if(o===null){t.K_.length===0&&i.P_();break}s=o.batchId,yC(t,o)}catch(o){await Dc(t,o)}g7(t)&&y7(t)}function gC(r){return Pa(r)&&r.K_.length<10}function yC(r,t){r.K_.push(t);const i=Gr(r);i.c_()&&i.b_&&i.S_(t.mutations)}function g7(r){return Pa(r)&&!Gr(r).u_()&&r.K_.length>0}function y7(r){Gr(r).start()}async function vC(r){Gr(r).C_()}async function _C(r){const t=Gr(r);for(const i of r.K_)t.S_(i.mutations)}async function CC(r,t,i){const s=r.K_.shift(),o=m2.from(s,t,i);await p7(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await $c(r)}async function EC(r,t){t&&Gr(r).b_&&await async function(s,o){if(function(f){return n_(f)&&f!==et.ABORTED}(o.code)){const c=s.K_.shift();Gr(s).h_(),await p7(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await $c(s)}}(r,t),g7(r)&&y7(r)}async function nf(r,t){const i=At(r);i.asyncQueue.verifyOperationInProgress(),ut(ka,"RemoteStore received new credentials");const s=Pa(i);i.W_.add(3),await Mo(i),s&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await Yc(i)}async function TC(r,t){const i=At(r);t?(i.W_.delete(2),await Yc(i)):t||(i.W_.add(2),await Mo(i),i.j_.set("Unknown"))}function Xs(r){return r.J_||(r.J_=function(i,s,o){const c=At(i);return c.M_(),new sC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{xo:fC.bind(null,r),No:dC.bind(null,r),Lo:mC.bind(null,r),p_:pC.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),S2(r)?A2(r):r.j_.set("Unknown")):(await r.J_.stop(),m7(r))})),r.J_}function Gr(r){return r.Y_||(r.Y_=function(i,s,o){const c=At(i);return c.M_(),new lC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:vC.bind(null,r),Lo:EC.bind(null,r),D_:_C.bind(null,r),v_:CC.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await $c(r)):(await r.Y_.stop(),r.K_.length>0&&(ut(ka,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class b2{constructor(t,i,s,o,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,s,o,c){const f=Date.now()+s,m=new b2(t,i,f,o,c);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pt(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function w2(r,t){if(Yi("AsyncQueue",`${t}: ${r}`),$s(r))return new pt(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ks{static emptySet(t){return new ks(t.comparator)}constructor(t){this.comparator=t?(i,s)=>t(i,s)||yt.comparator(i.key,s.key):(i,s)=>yt.comparator(i.key,s.key),this.keyedMap=oo(),this.sortedSet=new re(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,s)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof ks)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;i.hasNext();){const o=i.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const s=new ks;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=i,s}}/**
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
 */class rf{constructor(){this.Z_=new re(yt.comparator)}track(t){const i=t.doc.key,s=this.Z_.get(i);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(i,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(i,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(i,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(i):t.type===1&&s.type===2?this.Z_=this.Z_.insert(i,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):_t():this.Z_=this.Z_.insert(i,t)}X_(){const t=[];return this.Z_.inorderTraversal((i,s)=>{t.push(s)}),t}}class Hs{constructor(t,i,s,o,c,f,m,p,y){this.query=t,this.docs=i,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,i,s,o,c){const f=[];return i.forEach(m=>{f.push({type:0,doc:m})}),new Hs(t,i,ks.emptySet(i),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,s=t.docChanges;if(i.length!==s.length)return!1;for(let o=0;o<i.length;o++)if(i[o].type!==s[o].type||!i[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class AC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class SC{constructor(){this.queries=af(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,s){const o=At(i),c=o.queries;o.queries=af(),c.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new pt(et.ABORTED,"Firestore shutting down"))}}function af(){return new za(r=>L9(r),qc)}async function bC(r,t){const i=At(r);let s=3;const o=t.query;let c=i.queries.get(o);c?!c.na()&&t.ra()&&(s=2):(c=new AC,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await i.onListen(o,!0);break;case 1:c.ea=await i.onListen(o,!1);break;case 2:await i.onFirstRemoteStoreListen(o)}}catch(f){const m=w2(f,`Initialization of query '${xs(t.query)}' failed`);return void t.onError(m)}i.queries.set(o,c),c.ta.push(t),t.sa(i.onlineState),c.ea&&t.oa(c.ea)&&R2(i)}async function wC(r,t){const i=At(r),s=t.query;let o=3;const c=i.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?o=t.ra()?0:1:!c.na()&&t.ra()&&(o=2))}switch(o){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function RC(r,t){const i=At(r);let s=!1;for(const o of t){const c=o.query,f=i.queries.get(c);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&R2(i)}function DC(r,t,i){const s=At(r),o=s.queries.get(t);if(o)for(const c of o.ta)c.onError(i);s.queries.delete(t)}function R2(r){r.ia.forEach(t=>{t.next()})}var j4,sf;(sf=j4||(j4={}))._a="default",sf.Cache="cache";class MC{constructor(t,i,s){this.query=t,this.aa=i,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Hs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.ua?this.la(t)&&(this.aa.next(t),i=!0):this.ha(t,this.onlineState)&&(this.Pa(t),i=!0),this.ca=t,i}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let i=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),i=!0),i}ha(t,i){if(!t.fromCache||!this.ra())return!0;const s=i!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}la(t){if(t.docChanges.length>0)return!0;const i=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}Pa(t){t=Hs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==j4.Cache}}/**
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
 */class v7{constructor(t){this.key=t}}class _7{constructor(t){this.key=t}}class IC{constructor(t,i){this.query=t,this.fa=i,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Nt(),this.mutatedKeys=Nt(),this.ya=z9(t),this.wa=new ks(this.ya)}get ba(){return this.fa}Sa(t,i){const s=i?i.Da:new rf,o=i?i.wa:this.wa;let c=i?i.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((C,S)=>{const R=o.get(C),I=Hc(this.query,S)?S:null,N=!!R&&this.mutatedKeys.has(R.key),F=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let B=!1;R&&I?R.data.isEqual(I.data)?N!==F&&(s.track({type:3,doc:I}),B=!0):this.va(R,I)||(s.track({type:2,doc:I}),B=!0,(p&&this.ya(I,p)>0||y&&this.ya(I,y)<0)&&(m=!0)):!R&&I?(s.track({type:0,doc:I}),B=!0):R&&!I&&(s.track({type:1,doc:R}),B=!0,(p||y)&&(m=!0)),B&&(I?(f=f.add(I),c=F?c.add(C):c.delete(C)):(f=f.delete(C),c=c.delete(C)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const C=this.query.limitType==="F"?f.last():f.first();f=f.delete(C.key),c=c.delete(C.key),s.track({type:1,doc:C})}return{wa:f,Da:s,ls:m,mutatedKeys:c}}va(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,s,o){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((C,S)=>function(I,N){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t()}};return F(I)-F(N)}(C.type,S.type)||this.ya(C.doc,S.doc)),this.Ca(s),o=o!=null&&o;const m=i&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Hs(this.query,t.wa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new rf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(i=>this.fa=this.fa.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.fa=this.fa.delete(i)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Nt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const i=[];return t.forEach(s=>{this.pa.has(s)||i.push(new _7(s))}),this.pa.forEach(s=>{t.has(s)||i.push(new v7(s))}),i}Oa(t){this.fa=t.gs,this.pa=Nt();const i=this.Sa(t.documents);return this.applyChanges(i,!0)}Na(){return Hs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const D2="SyncEngine";class xC{constructor(t,i,s){this.query=t,this.targetId=i,this.view=s}}class VC{constructor(t){this.key=t,this.Ba=!1}}class NC{constructor(t,i,s,o,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new za(m=>L9(m),qc),this.qa=new Map,this.Qa=new Set,this.$a=new re(yt.comparator),this.Ka=new Map,this.Ua=new y2,this.Wa={},this.Ga=new Map,this.za=qs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function OC(r,t,i=!0){const s=b7(r);let o;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.Na()):o=await C7(s,t,i,!0),o}async function kC(r,t){const i=b7(r);await C7(i,t,!0,!1)}async function C7(r,t,i,s){const o=await W_(r.localStore,ui(t)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let m;return s&&(m=await UC(r,t,c,f==="current",o.resumeToken)),r.isPrimaryClient&&i&&f7(r.remoteStore,o),m}async function UC(r,t,i,s,o){r.Ha=(S,R,I)=>async function(F,B,$,rt){let it=B.view.Sa($);it.ls&&(it=await Zh(F.localStore,B.query,!1).then(({documents:V})=>B.view.Sa(V,it)));const gt=rt&&rt.targetChanges.get(B.targetId),ht=rt&&rt.targetMismatches.get(B.targetId)!=null,Ct=B.view.applyChanges(it,F.isPrimaryClient,gt,ht);return of(F,B.targetId,Ct.Ma),Ct.snapshot}(r,S,R,I);const c=await Zh(r.localStore,t,!0),f=new IC(t,c.gs),m=f.Sa(c.documents),p=Do.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);of(r,i,y.Ma);const C=new xC(t,i,f);return r.ka.set(t,C),r.qa.has(i)?r.qa.get(i).push(t):r.qa.set(i,[t]),y.snapshot}async function LC(r,t,i){const s=At(r),o=s.ka.get(t),c=s.qa.get(o.targetId);if(c.length>1)return s.qa.set(o.targetId,c.filter(f=>!qc(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await P4(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),i&&E2(s.remoteStore,o.targetId),q4(s,o.targetId)}).catch(Ys)):(q4(s,o.targetId),await P4(s.localStore,o.targetId,!0))}async function zC(r,t){const i=At(r),s=i.ka.get(t),o=i.qa.get(s.targetId);i.isPrimaryClient&&o.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),E2(i.remoteStore,s.targetId))}async function PC(r,t,i){const s=QC(r);try{const o=await function(f,m){const p=At(f),y=be.now(),C=m.reduce((I,N)=>I.add(N.key),Nt());let S,R;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=$i(),F=Nt();return p.ds.getEntries(I,C).next(B=>{N=B,N.forEach(($,rt)=>{rt.isValidDocument()||(F=F.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,N)).next(B=>{S=B;const $=[];for(const rt of m){const it=Zv(rt,S.get(rt.key).overlayedDocument);it!=null&&$.push(new Xr(rt.key,it,M9(it.value.mapValue),ci.exists(!0)))}return p.mutationQueue.addMutationBatch(I,y,$,m)}).next(B=>{R=B;const $=B.applyToLocalDocumentSet(S,F);return p.documentOverlayCache.saveOverlays(I,B.batchId,$)})}).then(()=>({batchId:R.batchId,changes:B9(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new re(kt)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,i),await Io(s,o.changes),await $c(s.remoteStore)}catch(o){const c=w2(o,"Failed to persist write");i.reject(c)}}async function E7(r,t){const i=At(r);try{const s=await $_(i.localStore,t);t.targetChanges.forEach((o,c)=>{const f=i.Ka.get(c);f&&(Qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Qt(f.Ba):o.removedDocuments.size>0&&(Qt(f.Ba),f.Ba=!1))}),await Io(i,s,t)}catch(s){await Ys(s)}}function lf(r,t,i){const s=At(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const o=[];s.ka.forEach((c,f)=>{const m=f.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=At(f);p.onlineState=m;let y=!1;p.queries.forEach((C,S)=>{for(const R of S.ta)R.sa(m)&&(y=!0)}),y&&R2(p)}(s.eventManager,t),o.length&&s.La.p_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function BC(r,t,i){const s=At(r);s.sharedClientState.updateQueryState(t,"rejected",i);const o=s.Ka.get(t),c=o&&o.key;if(c){let f=new re(yt.comparator);f=f.insert(c,Ke.newNoDocument(c,Et.min()));const m=Nt().add(c),p=new Qc(Et.min(),new Map,new re(kt),f,m);await E7(s,p),s.$a=s.$a.remove(c),s.Ka.delete(t),M2(s)}else await P4(s.localStore,t,!1).then(()=>q4(s,t,i)).catch(Ys)}async function jC(r,t){const i=At(r),s=t.batch.batchId;try{const o=await Y_(i.localStore,t);A7(i,s,null),T7(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await Io(i,o)}catch(o){await Ys(o)}}async function qC(r,t,i){const s=At(r);try{const o=await function(f,m){const p=At(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let C;return p.mutationQueue.lookupMutationBatch(y,m).next(S=>(Qt(S!==null),C=S.keys(),p.mutationQueue.removeMutationBatch(y,S))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,C,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,C)).next(()=>p.localDocuments.getDocuments(y,C))})}(s.localStore,t);A7(s,t,i),T7(s,t),s.sharedClientState.updateMutationState(t,"rejected",i),await Io(s,o)}catch(o){await Ys(o)}}function T7(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function A7(r,t,i){const s=At(r);let o=s.Wa[s.currentUser.toKey()];if(o){const c=o.get(t);c&&(i?c.reject(i):c.resolve(),o=o.remove(t)),s.Wa[s.currentUser.toKey()]=o}}function q4(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),i&&r.La.Ja(s,i);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||S7(r,s)})}function S7(r,t){r.Qa.delete(t.path.canonicalString());const i=r.$a.get(t);i!==null&&(E2(r.remoteStore,i),r.$a=r.$a.remove(t),r.Ka.delete(i),M2(r))}function of(r,t,i){for(const s of i)s instanceof v7?(r.Ua.addReference(s.key,t),HC(r,s)):s instanceof _7?(ut(D2,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||S7(r,s.key)):_t()}function HC(r,t){const i=t.key,s=i.path.canonicalString();r.$a.get(i)||r.Qa.has(s)||(ut(D2,"New document in limbo: "+i),r.Qa.add(s),M2(r))}function M2(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const i=new yt(Jt.fromString(t)),s=r.za.next();r.Ka.set(s,new VC(i)),r.$a=r.$a.insert(i,s),f7(r.remoteStore,new Or(ui(U9(i.path)),s,"TargetPurposeLimboResolution",zc.ae))}}async function Io(r,t,i){const s=At(r),o=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,t,i).then(y=>{var C;if((y||i)&&s.isPrimaryClient){const S=y?!y.fromCache:(C=i==null?void 0:i.targetChanges.get(p.targetId))===null||C===void 0?void 0:C.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=_2.Yi(p.targetId,y);c.push(S)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,y){const C=At(p);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>W.forEach(y,R=>W.forEach(R.Hi,I=>C.persistence.referenceDelegate.addReference(S,R.targetId,I)).next(()=>W.forEach(R.Ji,I=>C.persistence.referenceDelegate.removeReference(S,R.targetId,I)))))}catch(S){if(!$s(S))throw S;ut(C2,"Failed to update sequence numbers: "+S)}for(const S of y){const R=S.targetId;if(!S.fromCache){const I=C.Ts.get(R),N=I.snapshotVersion,F=I.withLastLimboFreeSnapshotVersion(N);C.Ts=C.Ts.insert(R,F)}}}(s.localStore,c))}async function FC(r,t){const i=At(r);if(!i.currentUser.isEqual(t)){ut(D2,"User change. New user:",t.toKey());const s=await o7(i.localStore,t);i.currentUser=t,function(c,f){c.Ga.forEach(m=>{m.forEach(p=>{p.reject(new pt(et.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Io(i,s.Rs)}}function GC(r,t){const i=At(r),s=i.Ka.get(t);if(s&&s.Ba)return Nt().add(s.key);{let o=Nt();const c=i.qa.get(t);if(!c)return o;for(const f of c){const m=i.ka.get(f);o=o.unionWith(m.view.ba)}return o}}function b7(r){const t=At(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=E7.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=GC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BC.bind(null,t),t.La.p_=RC.bind(null,t.eventManager),t.La.Ja=DC.bind(null,t.eventManager),t}function QC(r){const t=At(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qC.bind(null,t),t}class Mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Kc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return K_(this.persistence,new F_,t.initialUser,this.serializer)}Xa(t){return new l7(v2.ri,this.serializer)}Za(t){return new tC}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mc.provider={build:()=>new Mc};class KC extends Mc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){Qt(this.persistence.referenceDelegate instanceof Rc);const s=this.persistence.referenceDelegate.garbageCollector;return new M_(s,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new l7(s=>Rc.ri(s,i),this.serializer)}}class H4{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new SC}()}createDatastore(t){const i=Kc(t.databaseInfo.databaseId),s=function(c){return new aC(c)}(t.databaseInfo);return function(c,f,m,p){return new uC(c,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,i)}createRemoteStore(t){return function(s,o,c,f,m){return new hC(s,o,c,f,m)}(this.localStore,this.datastore,t.asyncQueue,i=>lf(this.syncEngine,i,0),function(){return tf.D()?new tf:new eC}())}createSyncEngine(t,i){return function(o,c,f,m,p,y,C){const S=new NC(o,c,f,m,p,y);return C&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(o){const c=At(o);ut(ka,"RemoteStore shutting down."),c.W_.add(5),await Mo(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}H4.provider={build:()=>new H4};/**
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
 */class YC{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Yi("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
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
 */const Qr="FirestoreClient";class $C{constructor(t,i,s,o,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=_9.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ut(Qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ut(Qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const s=w2(i,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function C4(r,t){r.asyncQueue.verifyOperationInProgress(),ut(Qr,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let s=i.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await o7(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function uf(r,t){r.asyncQueue.verifyOperationInProgress();const i=await XC(r);ut(Qr,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(s=>nf(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>nf(t.remoteStore,o)),r._onlineComponents=t}async function XC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ut(Qr,"Using user provided OfflineComponentProvider");try{await C4(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(o){return o.name==="FirebaseError"?o.code===et.FAILED_PRECONDITION||o.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(i))throw i;Ls("Error using user provided cache. Falling back to memory cache: "+i),await C4(r,new Mc)}}else ut(Qr,"Using default OfflineComponentProvider"),await C4(r,new KC(void 0));return r._offlineComponents}async function w7(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ut(Qr,"Using user provided OnlineComponentProvider"),await uf(r,r._uninitializedComponentsProvider._online)):(ut(Qr,"Using default OnlineComponentProvider"),await uf(r,new H4))),r._onlineComponents}function ZC(r){return w7(r).then(t=>t.syncEngine)}async function WC(r){const t=await w7(r),i=t.eventManager;return i.onListen=OC.bind(null,t.syncEngine),i.onUnlisten=LC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=kC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=zC.bind(null,t.syncEngine),i}function JC(r,t,i={}){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,p,y){const C=new YC({next:R=>{C.su(),f.enqueueAndForget(()=>wC(c,S)),R.fromCache&&p.source==="server"?y.reject(new pt(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),S=new MC(m,C,{includeMetadataChanges:!0,Ta:!0});return bC(c,S)}(await WC(r),r.asyncQueue,t,i,s)),s.promise}/**
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
 */function R7(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const cf=new Map;/**
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
 */function D7(r,t,i){if(!i)throw new pt(et.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function tE(r,t,i,s){if(t===!0&&s===!0)throw new pt(et.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function hf(r){if(!yt.isDocumentKey(r))throw new pt(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ff(r){if(yt.isDocumentKey(r))throw new pt(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function I2(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t()}function Ua(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new pt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=I2(r);throw new pt(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */const M7="firestore.googleapis.com",df=!0;class mf{constructor(t){var i,s;if(t.host===void 0){if(t.ssl!==void 0)throw new pt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M7,this.ssl=df}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:df;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=s7;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<R_)throw new pt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=R7((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xc{constructor(t,i,s,o){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new pt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new nv;switch(s.type){case"firstParty":return new sv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=cf.get(i);s&&(ut("ComponentProvider","Removing Datastore"),cf.delete(i),s.terminate())}(this),Promise.resolve()}}function eE(r,t,i,s={}){var o;const c=(r=Ua(r,Xc))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${i}`;c.host!==M7&&c.host!==m&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:m,ssl:!1,emulatorOptions:s});if(!Us(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,C;if(typeof s.mockUserToken=="string")y=s.mockUserToken,C=Qe.MOCK_USER;else{y=dp(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new pt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Qe(S)}r._authCredentials=new iv(new v9(y,C))}}/**
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
 */class Zc{constructor(t,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Zc(this.firestore,t,this._query)}}class yn{constructor(t,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yn(this.firestore,t,this._key)}}class Pr extends Zc{constructor(t,i,s){super(t,i,U9(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yn(this.firestore,null,new yt(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}function qn(r,t,...i){if(r=fi(r),D7("collection","path",t),r instanceof Xc){const s=Jt.fromString(t,...i);return ff(s),new Pr(r,null,s)}{if(!(r instanceof yn||r instanceof Pr))throw new pt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...i));return ff(s),new Pr(r.firestore,null,s)}}function Zs(r,t,...i){if(r=fi(r),arguments.length===1&&(t=_9.newId()),D7("doc","path",t),r instanceof Xc){const s=Jt.fromString(t,...i);return hf(s),new yn(r,null,new yt(s))}{if(!(r instanceof yn||r instanceof Pr))throw new pt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...i));return hf(s),new yn(r.firestore,r instanceof Pr?r.converter:null,new yt(s))}}/**
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
 */const pf="AsyncQueue";class gf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new c7(this,"async_queue_retry"),this.bu=()=>{const s=_4();s&&ut(pf,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const i=_4();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=_4();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new zr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!$s(t))throw t;ut(pf,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw Yi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(t,i,s){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const o=b2.createAndSchedule(this,t,i,s,c=>this.Fu(c));return this.fu.push(o),o}Du(){this.gu&&_t()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class Wc extends Xc{constructor(t,i,s,o){super(t,i,s,o),this.type="firestore",this._queue=new gf,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new gf(t),this._firestoreClient=void 0,await t}}}function nE(r,t){const i=typeof r=="object"?r:jf(),s=typeof r=="string"?r:Cc,o=wo(i,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=hp("firestore");c&&eE(o,...c)}return o}function I7(r){if(r._terminated)throw new pt(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iE(r),r._firestoreClient}function iE(r){var t,i,s;const o=r._freezeSettings(),c=function(m,p,y,C){return new Cv(m,p,y,C.host,C.ssl,C.experimentalForceLongPolling,C.experimentalAutoDetectLongPolling,R7(C.experimentalLongPollingOptions),C.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((i=o.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new $C(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Fs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fs(je.fromBase64String(t))}catch(i){throw new pt(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Fs(je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Jc{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new pt(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class t1{constructor(t){this._methodName=t}}/**
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
 */class x2{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new pt(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new pt(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return kt(this._lat,t._lat)||kt(this._long,t._long)}}/**
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
 */class V2{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const rE=/^__.*__$/;class aE{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return this.fieldMask!==null?new Xr(t,this.data,this.fieldMask,i,this.fieldTransforms):new Ro(t,this.data,i,this.fieldTransforms)}}class x7{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return new Xr(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function V7(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t()}}class e1{constructor(t,i,s,o,c,f){this.settings=t,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new e1(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),o=this.ku({path:s,Qu:!1});return o.$u(t),o}Ku(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ic(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(V7(this.Lu)&&rE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class sE{constructor(t,i,s){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=s||Kc(t)}ju(t,i,s,o=!1){return new e1({Lu:t,methodName:i,zu:s,path:Be.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function N7(r){const t=r._freezeSettings(),i=Kc(r._databaseId);return new sE(r._databaseId,!!t.ignoreUndefinedProperties,i)}function lE(r,t,i,s,o,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,i,o);O2("Data must be an object, but it was:",f,s);const m=O7(s,f);let p,y;if(c.merge)p=new pn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const C=[];for(const S of c.mergeFields){const R=F4(t,S,i);if(!f.contains(R))throw new pt(et.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);U7(C,R)||C.push(R)}p=new pn(C),y=f.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,y=f.fieldTransforms;return new aE(new sn(m),p,y)}class n1 extends t1{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof n1}}function oE(r,t,i){return new e1({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class N2 extends t1{constructor(t,i){super(t),this.Hu=i}_toFieldTransform(t){const i=oE(this,t,!0),s=this.Hu.map(c=>xo(c,i)),o=new js(s);return new Kv(t.path,o)}isEqual(t){return t instanceof N2&&Us(this.Hu,t.Hu)}}function uE(r,t,i,s){const o=r.ju(1,t,i);O2("Data must be an object, but it was:",o,s);const c=[],f=sn.empty();$r(s,(p,y)=>{const C=k2(t,p,i);y=fi(y);const S=o.Ku(C);if(y instanceof n1)c.push(C);else{const R=xo(y,S);R!=null&&(c.push(C),f.set(C,R))}});const m=new pn(c);return new x7(f,m,o.fieldTransforms)}function cE(r,t,i,s,o,c){const f=r.ju(1,t,i),m=[F4(t,s,i)],p=[o];if(c.length%2!=0)throw new pt(et.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<c.length;R+=2)m.push(F4(t,c[R])),p.push(c[R+1]);const y=[],C=sn.empty();for(let R=m.length-1;R>=0;--R)if(!U7(y,m[R])){const I=m[R];let N=p[R];N=fi(N);const F=f.Ku(I);if(N instanceof n1)y.push(I);else{const B=xo(N,F);B!=null&&(y.push(I),C.set(I,B))}}const S=new pn(y);return new x7(C,S,f.fieldTransforms)}function xo(r,t){if(k7(r=fi(r)))return O2("Unsupported field value:",t,r),O7(r,t);if(r instanceof t1)return function(s,o){if(!V7(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,o){const c=[];let f=0;for(const m of s){let p=xo(m,o.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,o){if((s=fi(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Fv(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=be.fromDate(s);return{timestampValue:wc(o.serializer,c)}}if(s instanceof be){const c=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wc(o.serializer,c)}}if(s instanceof x2)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fs)return{bytesValue:J9(o.serializer,s._byteString)};if(s instanceof yn){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:g2(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof V2)return function(f,m){return{mapValue:{fields:{[R9]:{stringValue:D9},[Ec]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return d2(m.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${I2(s)}`)}(r,t)}function O7(r,t){const i={};return E9(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$r(r,(s,o)=>{const c=xo(o,t.qu(s));c!=null&&(i[s]=c)}),{mapValue:{fields:i}}}function k7(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof x2||r instanceof Fs||r instanceof yn||r instanceof t1||r instanceof V2)}function O2(r,t,i){if(!k7(i)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(i)){const s=I2(i);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function F4(r,t,i){if((t=fi(t))instanceof Jc)return t._internalPath;if(typeof t=="string")return k2(r,t);throw Ic("Field path arguments must be of type string or ",r,!1,void 0,i)}const hE=new RegExp("[~\\*/\\[\\]]");function k2(r,t,i){if(t.search(hE)>=0)throw Ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new Jc(...t.split("."))._internalPath}catch{throw Ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Ic(r,t,i,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new pt(et.INVALID_ARGUMENT,m+r+p)}function U7(r,t){return r.some(i=>i.isEqual(t))}/**
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
 */class L7{constructor(t,i,s,o,c){this._firestore=t,this._userDataWriter=i,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(z7("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class fE extends L7{data(){return super.data()}}function z7(r,t){return typeof t=="string"?k2(r,t):t instanceof Jc?t._internalPath:t._delegate._internalPath}/**
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
 */function dE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pt(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mE{convertValue(t,i="none"){switch(Fr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(Hr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw _t()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const s={};return $r(t,(o,c)=>{s[o]=this.convertValue(c,i)}),s}convertVectorValue(t){var i,s,o;const c=(o=(s=(i=t.fields)===null||i===void 0?void 0:i[Ec].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new V2(c)}convertGeoPoint(t){return new x2(fe(t.latitude),fe(t.longitude))}convertArray(t,i){return(t.values||[]).map(s=>this.convertValue(s,i))}convertServerTimestamp(t,i){switch(i){case"previous":const s=Bc(t);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(_o(t));default:return null}}convertTimestamp(t){const i=qr(t);return new be(i.seconds,i.nanos)}convertDocumentKey(t,i){const s=Jt.fromString(t);Qt(a7(s));const o=new Co(s.get(1),s.get(3)),c=new yt(s.popFirst(5));return o.isEqual(i)||Yi(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function pE(r,t,i){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class ac{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gE extends L7{constructor(t,i,s,o,c,f){super(t,i,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const s=this._document.data.field(z7("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class dc extends gE{data(t={}){return super.data(t)}}class yE{constructor(t,i,s,o){this._firestore=t,this._userDataWriter=i,this._snapshot=o,this.metadata=new ac(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(s=>{t.call(i,new dc(this._firestore,this._userDataWriter,s.key,s,new ac(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new pt(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new dc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ac(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const p=new dc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ac(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,C=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),C=f.indexOf(m.doc.key)),{type:vE(m.type),doc:p,oldIndex:y,newIndex:C}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function vE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t()}}class _E extends mE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fs(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new yn(this.firestore,null,i)}}function pi(r){r=Ua(r,Zc);const t=Ua(r.firestore,Wc),i=I7(t),s=new _E(t);return dE(r._query),JC(i,r._query).then(o=>new yE(t,s,r,o))}function P7(r,t,i){r=Ua(r,yn);const s=Ua(r.firestore,Wc),o=pE(r.converter,t);return B7(s,[lE(N7(s),"setDoc",r._key,o,r.converter!==null,i).toMutation(r._key,ci.none())])}function i1(r,t,i,...s){r=Ua(r,yn);const o=Ua(r.firestore,Wc),c=N7(o);let f;return f=typeof(t=fi(t))=="string"||t instanceof Jc?cE(c,"updateDoc",r._key,t,i,s):uE(c,"updateDoc",r._key,t),B7(o,[f.toMutation(r._key,ci.exists(!0))])}function B7(r,t){return function(s,o){const c=new zr;return s.asyncQueue.enqueueAndForget(async()=>PC(await ZC(s),o,c)),c.promise}(I7(r),t)}function j7(...r){return new N2("arrayUnion",r)}(function(t,i=!0){(function(o){Ks=o})(Sg),Br(new Qi("firestore",(s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),m=new Wc(new rv(s.getProvider("auth-internal")),new lv(f,s.getProvider("app-check-internal")),function(y,C){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(y.options.projectId,C)}(f,o),f);return c=Object.assign({useFetchStreams:i},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),oi(Th,Ah,t),oi(Th,Ah,"esm2017")})();const CE={apiKey:"AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",authDomain:"greentrails-d6c2d.firebaseapp.com",projectId:"greentrails-d6c2d",storageBucket:"greentrails-d6c2d.firebasestorage.app",messagingSenderId:"67873180558",appId:"1:67873180558:web:d65d95fb94c483683db2df",measurementId:"G-9K66S1W7XM"},q7=Bf(CE);Wy(q7);const Ye=nE(q7),EE=()=>{const[r,t]=Q.useState([]),[i,s]=Q.useState([]),[o,c]=Q.useState(!0),f=Vc(),[m,p]=li.useState([]);if(Q.useEffect(()=>{(async()=>{c(!0);try{const R=(await pi(qn(Ye,"opportunities"))).docs.map(B=>({id:B.id,...B.data()})),N=(await pi(qn(Ye,"Users"))).docs.map(B=>({id:B.id,...B.data()}));console.log(N),p(N);const F=new Date;t(R.filter(B=>new Date(B.date)>F).sort((B,$)=>new Date(B.date)-new Date($.date)))}catch(S){console.error("Error fetching opportunities:",S)}c(!1)})()},[]),o)return j.jsx("div",{className:"box",children:j.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"box",children:j.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})}),j.jsx("div",{className:"trunk"})]});function y(C){let S=C.currentTarget;const R=Zs(Ye,"opportunities",S.id),I=document.getElementById(S.id+"i");if(console.log(m),I===null||I.value==="")return;if(I.value==="editcode0"){console.log("edit code entered"),f("/adddata");return}const N=r.find(F=>F.id===S.id);if(N&&new Date(N.date)<new Date){console.log("Event has already passed");return}if(!m.some(F=>F.Name===I.value)){console.log("User not found in the list"),I.placeholder="Please use signup",I.value="";return}console.log(document.getElementById(S.id+"i"));try{i1(R,{signups:j7(I.value)}),document.getElementById(S.id+"d").textContent="So far "+r.find(F=>F.id===S.id).signups.join(", ")+", "+I.value+" will be going"}catch(F){console.error("Error adding name to opportunity:",F)}}return j.jsx("div",{children:r.map(C=>j.jsxs("div",{children:[j.jsxs("div",{className:"box",children:[j.jsx("h1",{children:C.name}),j.jsxs("p",{className:"date",children:["when: ",new Date(C.date).toLocaleDateString()]}),j.jsx("p",{children:C.description}),j.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),j.jsx("a",{href:C.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),j.jsx("p",{}),j.jsxs("div",{children:[j.jsx("label",{children:"Sign up here with green trails:"}),j.jsx("p",{}),j.jsx("input",{className:"nameinput",list:`dropdown-${C.id}`,id:C.id+"i",name:"options"}),j.jsx("datalist",{id:`dropdown-${C.id}`,children:m.map(S=>j.jsx("option",{value:S.Name,children:S.Name},S.id))}),j.jsx("button",{type:"submit",id:C.id,className:"button nameinput",onClick:S=>y(S),children:"Add Name"}),j.jsxs("p",{id:C.id+"d",children:["So far ",C.signups.join(", ")," will be going"]})]})]},C.id),j.jsx("div",{className:"trunk"})]}))})},TE=()=>{const[r,t]=Q.useState([]),[i,s]=Q.useState([]),[o,c]=Q.useState(!0),f=Vc(),[m,p]=li.useState([]);if(Q.useEffect(()=>{(async()=>{c(!0);try{const R=(await pi(qn(Ye,"opportunities"))).docs.map(B=>({id:B.id,...B.data()})),N=(await pi(qn(Ye,"Users"))).docs.map(B=>({id:B.id,...B.data()}));console.log(N),p(N);const F=new Date;t(R.sort((B,$)=>new Date(B.date)-new Date($.date)))}catch(S){console.error("Error fetching opportunities:",S)}c(!1)})()},[]),o)return j.jsx("div",{className:"box",children:j.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return j.jsx("div",{className:"box",children:j.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})});function y(C){let S=C.currentTarget;const R=Zs(Ye,"opportunities",S.id),I=document.getElementById(S.id+"i");if(console.log(m),I===null||I.value==="")return;if(I.value==="editcode0"){console.log("edit code entered"),f("/adddata");return}const N=r.find(F=>F.id===S.id);if(N&&new Date(N.date)<new Date){console.log("Event has already passed"),I.value="",I.placeholder="Event has already passed";return}if(!m.some(F=>F.Name===I.value)){console.log("User not found in the list"),I.value="",I.placeholder="Please use signup";return}console.log(document.getElementById(S.id+"i"));try{i1(R,{signups:j7(I.value)}),document.getElementById(S.id+"d").textContent="So far "+r.find(F=>F.id===S.id).signups.join(", ")+", "+I.value+" will be going"}catch(F){console.error("Error adding name to opportunity:",F)}}return j.jsx("div",{children:r.map(C=>j.jsxs("div",{children:[j.jsxs("div",{className:"box",children:[j.jsx("h1",{children:C.name}),j.jsxs("p",{className:"date",children:["when: ",new Date(C.date).toLocaleDateString()]}),j.jsx("p",{children:C.description}),j.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),j.jsx("a",{href:C.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),j.jsx("p",{}),j.jsxs("div",{children:[j.jsx("label",{children:"Sign up here with green trails:"}),j.jsx("p",{}),j.jsx("input",{className:"nameinput",list:`dropdown-${C.id}`,id:C.id+"i",name:"options"}),j.jsx("datalist",{id:`dropdown-${C.id}`,children:m.map(S=>j.jsx("option",{value:S.Name,children:S.Name},S.id))}),j.jsx("button",{type:"submit",id:C.id,className:"button nameinput",onClick:S=>y(S),children:"Add Name"}),j.jsxs("p",{id:C.id+"d",children:["So far ",C.signups.join(", ")," will be going"]})]})]},C.id),j.jsx("div",{className:"trunk"})]}))})},AE=()=>{const[r,t]=Q.useState(!0);function i(){console.log("show past"),t(!r)}return j.jsxs("div",{id:"page",children:[j.jsx(bo,{}),j.jsx(Oc,{message:"Upcoming Volunteer Opportunities",shadow:!0}),j.jsx("button",{id:"showpastbutton",onClick:i,children:r?"Show past opportunities":"Hide past opportunities"}),r?j.jsx(EE,{}):j.jsx(TE,{}),j.jsx(Wm,{}),j.jsx(tp,{})]})},SE=()=>j.jsxs("div",{className:"App-header",children:[j.jsx(bo,{}),j.jsx(Oc,{message:"Add data page"}),j.jsx("input",{className:"addmoredata",id:"id",type:"text",placeholder:"id"}),j.jsx("input",{className:"addmoredata",id:"name",type:"text",placeholder:"Name"}),j.jsx("input",{className:"addmoredata",id:"date",type:"text",placeholder:"date"}),j.jsx("input",{className:"addmoredata",id:"description",type:"text",placeholder:"description"}),j.jsx("input",{className:"addmoredata",id:"link",type:"text",placeholder:"link"}),j.jsx("button",{className:"addmoredata",onClick:()=>{const r=document.getElementById("name").value,t=document.getElementById("date").value,i=document.getElementById("description").value,s=document.getElementById("link").value,o=document.getElementById("id").value;(async f=>{const m=await pi(qn(Ye,"opportunities"));let p=!1;return m.forEach(y=>{y.id===f&&(p=!0)}),p})(o).then(f=>{if(f){alert("ID already in use. Please choose a different ID.");return}else{const m=Zs(Ye,"opportunities",o);P7(m,{name:r,date:t,description:i,link:s,signups:[]})}})},children:"Add opportunity"})]}),bE=()=>{const[r,t]=li.useState([]),[i,s]=li.useState([]);Q.useEffect(()=>{(async()=>{try{const m=(await pi(qn(Ye,"Users"))).docs.map(C=>({id:C.id,score:C.data().score,Name:C.data().Name}));t(m.sort((C,S)=>S.score-C.score));const y=(await pi(qn(Ye,"opportunities"))).docs.map(C=>({id:C.id,...C.data()}));s(y)}catch(f){console.error("Error fetching leaderboard:",f)}})()},[]);function o(c){let f=0;r.forEach(m=>{i.forEach(p=>{p.signups.includes(m.id)&&(f+=1),i1(Zs(Ye,"Users",m.id),{score:f})}),f=0}),console.log("Done updating leaderboard")}return j.jsxs("div",{id:"events-table",children:[j.jsx("h3",{id:"events-title",children:"Events Attended"}),j.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((c,f)=>j.jsxs("div",{className:"lbentrie",children:[j.jsxs("p",{className:"place",children:[f+1,"."]}),j.jsx("p",{className:"username",children:c.Name}),j.jsx("p",{className:"userscore",children:c.score}),j.jsx("p",{className:"username",children:"  "})]},c.id)),j.jsx("button",{onClick:c=>o(),id:"",children:"Update leaderboard"})]})]})},wE=()=>{const[r,t]=li.useState([]),[i,s]=li.useState([]),[o,c]=li.useState(!1);Q.useEffect(()=>{(async()=>{try{const y=(await pi(qn(Ye,"Users"))).docs.map(R=>{const I=R.data();return{id:R.id,score:I.score??0,Name:I.Name??"",meetingsAttended:I.meetingsAttended??0}});y.sort((R,I)=>{const N=R.meetingsAttended??0,F=I.meetingsAttended??0;return F!==N?F-N:(I.score??0)-(R.score??0)}),t(y);const S=(await pi(qn(Ye,"meetings"))).docs.map(R=>({id:R.id,...R.data()}));s(S)}catch(p){console.error("Error fetching leaderboard/meetings:",p)}})()},[]);async function f(m){try{c(!0);const p=await Promise.all(r.map(async y=>{const C=i.reduce((S,R)=>(Array.isArray(R.attendees)?R.attendees:[]).includes(y.Name)?S+1:S,0);return await i1(Zs(Ye,"Users",y.id),{meetingsAttended:C}),{...y,meetingsAttended:C}}));p.sort((y,C)=>{const S=y.meetingsAttended??0,R=C.meetingsAttended??0;return R!==S?R-S:(C.score??0)-(y.score??0)}),t(p),console.log("Done updating meetingsAttended for all users")}catch(p){console.error("Error updating meetingsAttended:",p)}finally{c(!1)}}return j.jsxs("div",{id:"events-table",children:[j.jsx("h3",{id:"events-title",children:"Meetings Attended (after 11/12)"}),j.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((m,p)=>j.jsxs("div",{className:"lbentrie",children:[j.jsxs("p",{className:"place",children:[p+1,"."]}),j.jsx("p",{className:"username",children:m.Name}),j.jsx("p",{className:"userscore",children:m.meetingsAttended??0})]},m.id)),j.jsx("button",{onClick:m=>f(),id:"",disabled:o,children:o?"Updating…":"Update meetings attendance"})]})]})},RE=()=>j.jsxs("div",{children:[j.jsx(Oc,{message:"Leaderboards",shadow:!0}),j.jsx(bo,{}),j.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[j.jsx(bE,{}),j.jsx(wE,{})]}),j.jsx(Jm,{})]}),DE=()=>{const[r,t]=li.useState([]),[i,s]=li.useState([]);Q.useEffect(()=>{},[]);function o(c){const f=document.getElementById("name").value;console.log(f),(async p=>{const y=await pi(qn(Ye,"Users"));let C=!1;return y.forEach(S=>{S.id===p&&(C=!0)}),C})(f).then(p=>{if(p){alert("name already in use. Please choose a different name.");return}else if(f.trim()!==""){const y=Zs(qn(Ye,"Users"),f);P7(y,{Name:f,score:0})}else alert("Name cannot be empty. Please enter a valid name.")})}return j.jsx("div",{children:j.jsxs("div",{className:"signup",children:[j.jsx("input",{id:"name",type:"text",placeholder:"please enter your name"}),j.jsx("button",{type:"submit",onClick:c=>o(),children:"Submit"})]})})},ME=()=>j.jsxs("div",{children:[j.jsx(Oc,{message:"Sign Up!!",shadow:!0}),j.jsx(bo,{}),j.jsx(DE,{})]}),IE=""+new URL("lowrezlogo-eSGE3ORT.png",import.meta.url).href,xE=()=>(Q.useEffect(()=>{let r=document.querySelector("link[rel='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.href=IE,r.type="image/png"},[]),null),VE=encodeURIComponent(`
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
        `);function NE({particleCount:r=120,speed:t=1,size:i=3,color:s="#FFF",zIndex:o=9999}){const c=Q.useRef(null),f=Q.useRef(null),m=Q.useRef([]),p=Q.useRef(1),y=Q.useRef(null),C=Q.useRef([]),S=Q.useRef(null),R=Q.useRef([]);return Q.useEffect(()=>{const I=c.current;if(!I)return;const N=I.getContext("2d");if(!N)return;const F=new Image;F.src=`data:image/svg+xml;charset=utf-8,${VE}`,y.current=F;const B=()=>{const A=window.devicePixelRatio||1;p.current=A;const w=window.innerWidth,x=window.innerHeight;I.style.width=`${w}px`,I.style.height=`${x}px`,I.width=Math.round(w*A),I.height=Math.round(x*A),N.setTransform(A,0,0,A,0,0)},$=()=>{const A=I.width/p.current,w=I.height/p.current,x=[];for(let L=0;L<r;L++){const M=Math.random()*i+Math.random()*(i/2);x.push({x:Math.random()*A,y:Math.random()*w,r:M,vx:(Math.random()-.5)*.6,vy:(.5+Math.random()*.9)*t,o:.5+Math.random()*.8,swing:Math.random()*20,phase:Math.random()*Math.PI*2})}m.current=x};let rt=performance.now();const it=A=>{const w=(A-rt)/16.6667;rt=A;const x=I.width/p.current,L=I.height/p.current;N.clearRect(0,0,x,L);const M=m.current;for(let tt=0;tt<M.length;tt++){const K=M[tt];K.phase+=.02*w,K.x+=K.vx*w+Math.sin(K.phase)*(K.swing*.01)*w,K.y+=K.vy*w,K.y-K.r>L&&(K.y=-K.r,K.x=Math.random()*x),K.x-K.r>x&&(K.x=-K.r),K.x+K.r<0&&(K.x=x+K.r),N.globalAlpha=K.o;const st=N.createRadialGradient(K.x,K.y,0,K.x,K.y,K.r*1.8);st.addColorStop(0,s),st.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=st,N.beginPath(),N.arc(K.x,K.y,K.r,0,Math.PI*2),N.fill()}N.globalAlpha=1;const wt=C.current;for(let tt=wt.length-1;tt>=0;tt--){const K=wt[tt];K.x+=K.vx*w;const st=Math.sin(A/400+K.x*.02)*6*K.scale,Rt=K.x,O=K.y+st;y.current&&y.current.complete?(N.save(),N.translate(Rt,O),K.dir===-1&&N.scale(-1,1),N.drawImage(y.current,-K.w/2,-K.h/2,K.w,K.h),N.restore()):(N.fillStyle="#e74c3c",N.fillRect(Rt-K.w/2,O-K.h/2,K.w,K.h)),K.dir===1&&K.x-K.w/2>x+50&&wt.splice(tt,1),K.dir===-1&&K.x+K.w/2<-50&&wt.splice(tt,1)}const It=R.current;for(let tt=It.length-1;tt>=0;tt--){const K=It[tt];K.vy+=.06*w,K.vx*=.995,K.vy*=.999,K.x+=K.vx*w,K.y+=K.vy*w,K.life-=1*w;const st=Math.max(0,K.life/K.maxLife);N.globalAlpha=st;const Rt=N.createRadialGradient(K.x,K.y,0,K.x,K.y,K.r*2.5);Rt.addColorStop(0,K.color),Rt.addColorStop(.6,"rgba(255,255,255,0.2)"),Rt.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=Rt,N.beginPath(),N.arc(K.x,K.y,K.r,0,Math.PI*2),N.fill(),K.life<=0&&It.splice(tt,1)}N.globalAlpha=1,f.current=requestAnimationFrame(it)},gt=()=>{const A=I.width/p.current,w=I.height/p.current,x=Math.random()>.5?1:-1,L=x===1?-60:A+60,M=w*Math.random(),wt=.6+Math.random()*.8,It=120,tt=60,K=(2+Math.random()*2)*(x===1?1:-1)*Math.max(.5,t),st={x:L,y:M,vx:K,scale:wt,dir:x,w:It*wt,h:tt*wt};C.current.push(st)},ht=(A,w,x)=>{const L=30+Math.round(Math.random()*20),M=[];for(let wt=0;wt<L;wt++){const It=Math.random()*Math.PI*2,tt=1+Math.random()*4,K=Math.cos(It)*tt*(.6+Math.random()*1.4),st=Math.sin(It)*tt*(.6+Math.random()*1.4)-Math.random()*1.5,Rt=1+Math.random()*3,O=30+Math.random()*40,nt=x;M.push({x:A,y:w,vx:K,vy:st,r:Rt,life:O,maxLife:O,color:nt})}R.current.push(...M)},Ct=A=>{const w=I.getBoundingClientRect(),x=A.clientX-w.left,L=A.clientY-w.top,M=C.current;for(let wt=M.length-1;wt>=0;wt--){const It=M[wt],tt=x-It.x,K=L-It.y,st=Math.max(It.w,It.h)*.6;if(tt*tt+K*K<=st*st){ht(It.x,It.y,"#ffb347"),M.splice(wt,1);break}}};B(),$(),f.current=requestAnimationFrame(it),S.current=window.setInterval(gt,5e3);const V=window.setTimeout(gt,1e3),b=()=>{B(),$(),C.current=[]};return window.addEventListener("resize",b),window.addEventListener("click",Ct),()=>{f.current&&cancelAnimationFrame(f.current),S.current&&clearInterval(S.current),window.clearTimeout(V),window.removeEventListener("resize",b),window.removeEventListener("click",Ct)}},[r,t,i,s]),j.jsx("canvas",{ref:c,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:o},"aria-hidden":!0})}const OE=()=>j.jsxs("div",{className:"App",children:[j.jsx(xE,{}),j.jsx(NE,{}),j.jsx(Lm,{children:j.jsxs(mm,{children:[j.jsx(Nr,{path:"*",element:j.jsx(fm,{to:"/",replace:!0})}),j.jsx(Nr,{path:"/",element:j.jsx(J6,{})}),j.jsx(Nr,{path:"/greentrails/*",element:j.jsx(J6,{})}),j.jsx(Nr,{path:"/volenterpage/*",element:j.jsx(AE,{})}),j.jsx(Nr,{path:"/adddata/*",element:j.jsx(SE,{})}),j.jsx(Nr,{path:"/leaderboard/*",element:j.jsx(RE,{})}),j.jsx(Nr,{path:"/signup/*",element:j.jsx(ME,{})})]})})]});Ad.createRoot(document.getElementById("root")).render(j.jsx(li.StrictMode,{children:j.jsx(OE,{})}));
