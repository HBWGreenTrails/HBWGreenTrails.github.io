(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ef(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var i4={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function bd(){if(jh)return al;jh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var qh;function wd(){return qh||(qh=1,i4.exports=bd()),i4.exports}var z=wd(),r4={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Rd(){if(Hh)return wt;Hh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),A=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,H={};function k(x,J,lt){this.props=x,this.context=J,this.refs=H,this.updater=lt||N}k.prototype.isReactComponent={},k.prototype.setState=function(x,J){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,J,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Q(){}Q.prototype=k.prototype;function nt(x,J,lt){this.props=x,this.context=J,this.refs=H,this.updater=lt||N}var it=nt.prototype=new Q;it.constructor=nt,O(it,k.prototype),it.isPureReactComponent=!0;var yt=Array.isArray,dt={H:null,A:null,T:null,S:null},Et=Object.prototype.hasOwnProperty;function V(x,J,lt,ot,ut,Rt){return lt=Rt.ref,{$$typeof:r,type:x,key:J,ref:lt!==void 0?lt:null,props:Rt}}function w(x,J){return V(x.type,J,void 0,void 0,void 0,x.props)}function S(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function M(x){var J={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(lt){return J[lt]})}var I=/\/+/g;function U(x,J){return typeof x=="object"&&x!==null&&x.key!=null?M(""+x.key):J.toString(36)}function R(){}function Nt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(R,R):(x.status="pending",x.then(function(J){x.status==="pending"&&(x.status="fulfilled",x.value=J)},function(J){x.status==="pending"&&(x.status="rejected",x.reason=J)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function xt(x,J,lt,ot,ut){var Rt=typeof x;(Rt==="undefined"||Rt==="boolean")&&(x=null);var bt=!1;if(x===null)bt=!0;else switch(Rt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(x.$$typeof){case r:case t:bt=!0;break;case C:return bt=x._init,xt(bt(x._payload),J,lt,ot,ut)}}if(bt)return ut=ut(x),bt=ot===""?"."+U(x,0):ot,yt(ut)?(lt="",bt!=null&&(lt=bt.replace(I,"$&/")+"/"),xt(ut,J,lt,"",function(ae){return ae})):ut!=null&&(S(ut)&&(ut=w(ut,lt+(ut.key==null||x&&x.key===ut.key?"":(""+ut.key).replace(I,"$&/")+"/")+bt)),J.push(ut)),1;bt=0;var de=ot===""?".":ot+":";if(yt(x))for(var jt=0;jt<x.length;jt++)ot=x[jt],Rt=de+U(ot,jt),bt+=xt(ot,J,lt,Rt,ut);else if(jt=b(x),typeof jt=="function")for(x=jt.call(x),jt=0;!(ot=x.next()).done;)ot=ot.value,Rt=de+U(ot,jt++),bt+=xt(ot,J,lt,Rt,ut);else if(Rt==="object"){if(typeof x.then=="function")return xt(Nt(x),J,lt,ot,ut);throw J=String(x),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return bt}function rt(x,J,lt){if(x==null)return x;var ot=[],ut=0;return xt(x,ot,"","",function(Rt){return J.call(lt,Rt,ut++)}),ot}function ht(x){if(x._status===-1){var J=x._result;J=J(),J.then(function(lt){(x._status===0||x._status===-1)&&(x._status=1,x._result=lt)},function(lt){(x._status===0||x._status===-1)&&(x._status=2,x._result=lt)}),x._status===-1&&(x._status=0,x._result=J)}if(x._status===1)return x._result.default;throw x._result}var st=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function W(){}return wt.Children={map:rt,forEach:function(x,J,lt){rt(x,function(){J.apply(this,arguments)},lt)},count:function(x){var J=0;return rt(x,function(){J++}),J},toArray:function(x){return rt(x,function(J){return J})||[]},only:function(x){if(!S(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},wt.Component=k,wt.Fragment=i,wt.Profiler=l,wt.PureComponent=nt,wt.StrictMode=s,wt.Suspense=p,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dt,wt.act=function(){throw Error("act(...) is not supported in production builds of React.")},wt.cache=function(x){return function(){return x.apply(null,arguments)}},wt.cloneElement=function(x,J,lt){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ot=O({},x.props),ut=x.key,Rt=void 0;if(J!=null)for(bt in J.ref!==void 0&&(Rt=void 0),J.key!==void 0&&(ut=""+J.key),J)!Et.call(J,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&J.ref===void 0||(ot[bt]=J[bt]);var bt=arguments.length-2;if(bt===1)ot.children=lt;else if(1<bt){for(var de=Array(bt),jt=0;jt<bt;jt++)de[jt]=arguments[jt+2];ot.children=de}return V(x.type,ut,void 0,void 0,Rt,ot)},wt.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:c,_context:x},x},wt.createElement=function(x,J,lt){var ot,ut={},Rt=null;if(J!=null)for(ot in J.key!==void 0&&(Rt=""+J.key),J)Et.call(J,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(ut[ot]=J[ot]);var bt=arguments.length-2;if(bt===1)ut.children=lt;else if(1<bt){for(var de=Array(bt),jt=0;jt<bt;jt++)de[jt]=arguments[jt+2];ut.children=de}if(x&&x.defaultProps)for(ot in bt=x.defaultProps,bt)ut[ot]===void 0&&(ut[ot]=bt[ot]);return V(x,Rt,void 0,void 0,null,ut)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(x){return{$$typeof:m,render:x}},wt.isValidElement=S,wt.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:ht}},wt.memo=function(x,J){return{$$typeof:y,type:x,compare:J===void 0?null:J}},wt.startTransition=function(x){var J=dt.T,lt={};dt.T=lt;try{var ot=x(),ut=dt.S;ut!==null&&ut(lt,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(W,st)}catch(Rt){st(Rt)}finally{dt.T=J}},wt.unstable_useCacheRefresh=function(){return dt.H.useCacheRefresh()},wt.use=function(x){return dt.H.use(x)},wt.useActionState=function(x,J,lt){return dt.H.useActionState(x,J,lt)},wt.useCallback=function(x,J){return dt.H.useCallback(x,J)},wt.useContext=function(x){return dt.H.useContext(x)},wt.useDebugValue=function(){},wt.useDeferredValue=function(x,J){return dt.H.useDeferredValue(x,J)},wt.useEffect=function(x,J){return dt.H.useEffect(x,J)},wt.useId=function(){return dt.H.useId()},wt.useImperativeHandle=function(x,J,lt){return dt.H.useImperativeHandle(x,J,lt)},wt.useInsertionEffect=function(x,J){return dt.H.useInsertionEffect(x,J)},wt.useLayoutEffect=function(x,J){return dt.H.useLayoutEffect(x,J)},wt.useMemo=function(x,J){return dt.H.useMemo(x,J)},wt.useOptimistic=function(x,J){return dt.H.useOptimistic(x,J)},wt.useReducer=function(x,J,lt){return dt.H.useReducer(x,J,lt)},wt.useRef=function(x){return dt.H.useRef(x)},wt.useState=function(x){return dt.H.useState(x)},wt.useSyncExternalStore=function(x,J,lt){return dt.H.useSyncExternalStore(x,J,lt)},wt.useTransition=function(){return dt.H.useTransition()},wt.version="19.0.0",wt}var Fh;function Q4(){return Fh||(Fh=1,r4.exports=Rd()),r4.exports}var F=Q4();const kn=Ef(F);var a4={exports:{}},sl={},s4={exports:{}},o4={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function Dd(){return Gh||(Gh=1,function(r){function t(rt,ht){var st=rt.length;rt.push(ht);t:for(;0<st;){var W=st-1>>>1,x=rt[W];if(0<l(x,ht))rt[W]=ht,rt[st]=x,st=W;else break t}}function i(rt){return rt.length===0?null:rt[0]}function s(rt){if(rt.length===0)return null;var ht=rt[0],st=rt.pop();if(st!==ht){rt[0]=st;t:for(var W=0,x=rt.length,J=x>>>1;W<J;){var lt=2*(W+1)-1,ot=rt[lt],ut=lt+1,Rt=rt[ut];if(0>l(ot,st))ut<x&&0>l(Rt,ot)?(rt[W]=Rt,rt[ut]=st,W=ut):(rt[W]=ot,rt[lt]=st,W=lt);else if(ut<x&&0>l(Rt,st))rt[W]=Rt,rt[ut]=st,W=ut;else break t}}return ht}function l(rt,ht){var st=rt.sortIndex-ht.sortIndex;return st!==0?st:rt.id-ht.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],C=1,A=null,b=3,N=!1,O=!1,H=!1,k=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,nt=typeof setImmediate<"u"?setImmediate:null;function it(rt){for(var ht=i(y);ht!==null;){if(ht.callback===null)s(y);else if(ht.startTime<=rt)s(y),ht.sortIndex=ht.expirationTime,t(p,ht);else break;ht=i(y)}}function yt(rt){if(H=!1,it(rt),!O)if(i(p)!==null)O=!0,Nt();else{var ht=i(y);ht!==null&&xt(yt,ht.startTime-rt)}}var dt=!1,Et=-1,V=5,w=-1;function S(){return!(r.unstable_now()-w<V)}function M(){if(dt){var rt=r.unstable_now();w=rt;var ht=!0;try{t:{O=!1,H&&(H=!1,Q(Et),Et=-1),N=!0;var st=b;try{e:{for(it(rt),A=i(p);A!==null&&!(A.expirationTime>rt&&S());){var W=A.callback;if(typeof W=="function"){A.callback=null,b=A.priorityLevel;var x=W(A.expirationTime<=rt);if(rt=r.unstable_now(),typeof x=="function"){A.callback=x,it(rt),ht=!0;break e}A===i(p)&&s(p),it(rt)}else s(p);A=i(p)}if(A!==null)ht=!0;else{var J=i(y);J!==null&&xt(yt,J.startTime-rt),ht=!1}}break t}finally{A=null,b=st,N=!1}ht=void 0}}finally{ht?I():dt=!1}}}var I;if(typeof nt=="function")I=function(){nt(M)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,R=U.port2;U.port1.onmessage=M,I=function(){R.postMessage(null)}}else I=function(){k(M,0)};function Nt(){dt||(dt=!0,I())}function xt(rt,ht){Et=k(function(){rt(r.unstable_now())},ht)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(rt){rt.callback=null},r.unstable_continueExecution=function(){O||N||(O=!0,Nt())},r.unstable_forceFrameRate=function(rt){0>rt||125<rt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<rt?Math.floor(1e3/rt):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(rt){switch(b){case 1:case 2:case 3:var ht=3;break;default:ht=b}var st=b;b=ht;try{return rt()}finally{b=st}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(rt,ht){switch(rt){case 1:case 2:case 3:case 4:case 5:break;default:rt=3}var st=b;b=rt;try{return ht()}finally{b=st}},r.unstable_scheduleCallback=function(rt,ht,st){var W=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?W+st:W):st=W,rt){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=st+x,rt={id:C++,callback:ht,priorityLevel:rt,startTime:st,expirationTime:x,sortIndex:-1},st>W?(rt.sortIndex=st,t(y,rt),i(p)===null&&rt===i(y)&&(H?(Q(Et),Et=-1):H=!0,xt(yt,st-W))):(rt.sortIndex=x,t(p,rt),O||N||(O=!0,Nt())),rt},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(rt){var ht=b;return function(){var st=b;b=ht;try{return rt.apply(this,arguments)}finally{b=st}}}}(o4)),o4}var Qh;function Md(){return Qh||(Qh=1,s4.exports=Dd()),s4.exports}var l4={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Id(){if(Kh)return Ge;Kh=1;var r=Q4();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)y+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,y,C){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:A==null?null:""+A,children:p,containerInfo:y,implementation:C}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(p,y){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,C)},Ge.flushSync=function(p){var y=f.T,C=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=C,s.d.f()}},Ge.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ge.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ge.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var C=y.as,A=m(C,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,N=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;C==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:b,fetchPriority:N}):C==="script"&&s.d.X(p,{crossOrigin:A,integrity:b,fetchPriority:N,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var C=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ge.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var C=y.as,A=m(C,y.crossOrigin);s.d.L(p,C,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(p,y){if(typeof p=="string")if(y){var C=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ge.requestFormReset=function(p){s.d.r(p)},Ge.unstable_batchedUpdates=function(p,y){return p(y)},Ge.useFormState=function(p,y,C){return f.H.useFormState(p,y,C)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.0.0",Ge}var Yh;function xd(){if(Yh)return l4.exports;Yh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),l4.exports=Id(),l4.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Vd(){if($h)return sl;$h=1;var r=Md(),t=Q4(),i=xd();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),it=Symbol.for("react.offscreen"),yt=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Et(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function w(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case m:return"Portal";case C:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case N:return(e.displayName||"Context")+".Provider";case b:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:w(e.type)||"Memo";case nt:n=e._payload,e=e._init;try{return w(e(n))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=Object.assign,I,U;function R(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",U=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+U}var Nt=!1;function xt(e,n){if(!e||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var tt=function(){throw Error()};if(Object.defineProperty(tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(tt,[])}catch(Y){var G=Y}Reflect.construct(e,[],tt)}else{try{tt.call()}catch(Y){G=Y}e.call(tt.prototype)}}else{try{throw Error()}catch(Y){G=Y}(tt=e())&&typeof tt.catch=="function"&&tt.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var D=_.split(`
`),P=E.split(`
`);for(h=o=0;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;for(;h<P.length&&!P[h].includes("DetermineComponentFrameRoot");)h++;if(o===D.length||h===P.length)for(o=D.length-1,h=P.length-1;1<=o&&0<=h&&D[o]!==P[h];)h--;for(;1<=o&&0<=h;o--,h--)if(D[o]!==P[h]){if(o!==1||h!==1)do if(o--,h--,0>h||D[o]!==P[h]){var $=`
`+D[o].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=o&&0<=h);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?R(a):""}function rt(e){switch(e.tag){case 26:case 27:case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 15:return e=xt(e.type,!1),e;case 11:return e=xt(e.type.render,!1),e;case 1:return e=xt(e.type,!0),e;default:return""}}function ht(e){try{var n="";do n+=rt(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function st(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function W(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(st(e)!==e)throw Error(s(188))}function J(e){var n=e.alternate;if(!n){if(n=st(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return x(h),e;if(d===o)return x(h),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=lt(e),n!==null)return n;e=e.sibling}return null}var ot=Array.isArray,ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt={pending:!1,data:null,method:null,action:null},bt=[],de=-1;function jt(e){return{current:e}}function ae(e){0>de||(e.current=bt[de],bt[de]=null,de--)}function Kt(e,n){de++,bt[de]=e.current,e.current=n}var $e=jt(null),yi=jt(null),vn=jt(null),Wi=jt(null);function Ji(e,n){switch(Kt(vn,n),Kt(yi,e),Kt($e,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?gh(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=gh(e),n=yh(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae($e),Kt($e,n)}function vi(){ae($e),ae(yi),ae(vn)}function Js(e){e.memoizedState!==null&&Kt(Wi,e);var n=$e.current,a=yh(n,e.type);n!==a&&(Kt(yi,e),Kt($e,a))}function ja(e){yi.current===e&&(ae($e),ae(yi)),Wi.current===e&&(ae(Wi),tl._currentValue=Rt)}var qa=Object.prototype.hasOwnProperty,Jr=r.unstable_scheduleCallback,Ha=r.unstable_cancelCallback,a1=r.unstable_shouldYield,to=r.unstable_requestPaint,en=r.unstable_now,Pl=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,De=r.unstable_UserBlockingPriority,_i=r.unstable_NormalPriority,Bl=r.unstable_LowPriority,eo=r.unstable_IdlePriority,s1=r.log,ta=r.unstable_setDisableYieldValue,tr=null,He=null;function no(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(tr,e,void 0,(e.current.flags&128)===128)}catch{}}function Qn(e){if(typeof s1=="function"&&ta(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(tr,e)}catch{}}var Xe=Math.clz32?Math.clz32:ql,io=Math.log,jl=Math.LN2;function ql(e){return e>>>=0,e===0?32:31-(io(e)/jl|0)|0}var Kn=128,er=4194304;function zn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,h=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?o=zn(a):(d&=E,d!==0?o=zn(d):e||(_=E&~_,_!==0&&(o=zn(_))))):(E=a&~h,E!==0?o=zn(E):d!==0?o=zn(d):e||(_=a&~_,_!==0&&(o=zn(_)))),o===0?0:n!==0&&n!==o&&(n&h)===0&&(h=o&-o,_=n&-n,h>=_||h===32&&(_&4194176)!==0)?n:o}function nr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Fa(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ro(){var e=Kn;return Kn<<=1,(Kn&4194176)===0&&(Kn=128),e}function ir(){var e=er;return er<<=1,(er&62914560)===0&&(er=4194304),e}function Ga(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ce(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hl(e,n,a,o,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,D=e.expirationTimes,P=e.hiddenUpdates;for(a=_&~a;0<a;){var $=31-Xe(a),tt=1<<$;E[$]=0,D[$]=-1;var G=P[$];if(G!==null)for(P[$]=null,$=0;$<G.length;$++){var Y=G[$];Y!==null&&(Y.lane&=-536870913)}a&=~tt}o!==0&&rr(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~n))}function rr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Xe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function ar(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Xe(a),h=1<<o;h&n|e[o]&n&&(e[o]|=n),a&=~h}}function Fl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gl(){var e=ut.p;return e!==0?e:(e=window.event,e===void 0?32:kh(e.type))}function sr(e,n){var a=ut.p;try{return ut.p=e,n()}finally{ut.p=a}}var Yn=Math.random().toString(36).slice(2),Me="__reactFiber$"+Yn,_e="__reactProps$"+Yn,Ci="__reactContainer$"+Yn,ea="__reactEvents$"+Yn,Qa="__reactListeners$"+Yn,$n="__reactHandles$"+Yn,ao="__reactResources$"+Yn,or="__reactMarker$"+Yn;function na(e){delete e[Me],delete e[_e],delete e[ea],delete e[Qa],delete e[$n]}function Pn(e){var n=e[Me];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[Me]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ch(e);e!==null;){if(a=e[Me])return a;e=Ch(e)}return n}e=a,a=e.parentNode}return null}function Ei(e){if(e=e[Me]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function lr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ur(e){var n=e[ao];return n||(n=e[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ee(e){e[or]=!0}var so=new Set,Ka={};function un(e,n){nn(e,n),nn(e+"Capture",n)}function nn(e,n){for(Ka[e]=n,e=0;e<n.length;e++)so.add(n[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),o1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oo={},lo={};function Ql(e){return qa.call(lo,e)?!0:qa.call(oo,e)?!1:o1.test(e)?lo[e]=!0:(oo[e]=!0,!1)}function cr(e,n,a){if(Ql(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function hr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Cn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function l1(e){var n=Kl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){o=""+_,d.call(this,_)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ia(e){e._valueTracker||(e._valueTracker=l1(e))}function uo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kl(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ti=/[\n"\\]/g;function se(e){return e.replace(Ti,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fr(e,n,a,o,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ze(n)):e.value!==""+Ze(n)&&(e.value=""+Ze(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?$a(e,_,Ze(n)):a!=null?$a(e,_,Ze(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ze(E):e.removeAttribute("name")}function ra(e,n,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function $a(e,n,a){n==="number"&&Ya(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qt(e,n,a,o){if(e=e.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=n.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function aa(e,n,a){if(n!=null&&(n=""+Ze(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ze(a):""}function dr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function En(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var u1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function co(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||u1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yl(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&co(e,h,o)}else for(var d in n)n.hasOwnProperty(d)&&co(e,d,n[d])}function ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return h1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tn=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Si=null;function bi(e){var n=Ei(e);if(n&&(e=n.stateNode)){var a=e[_e]||null;t:switch(e=n.stateNode,n.type){case"input":if(fr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var h=o[_e]||null;if(!h)throw Error(s(90));fr(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&uo(o)}break t;case"textarea":aa(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qt(e,!!a.multiple,n,!1)}}}var fo=!1;function $l(e,n,a){if(fo)return e(n,a);fo=!0;try{var o=e(n);return o}finally{if(fo=!1,(Ai!==null||Si!==null)&&(Bu(),Ai&&(n=Ai,e=Si,Si=Ai=null,bi(n),e)))for(n=0;n<e.length;n++)bi(e[n])}}function sa(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_e]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var An=!1;if(cn)try{var oa={};Object.defineProperty(oa,"passive",{get:function(){An=!0}}),window.addEventListener("test",oa,oa),window.removeEventListener("test",oa,oa)}catch{An=!1}var Zn=null,mr=null,wi=null;function mo(){if(wi)return wi;var e,n=mr,a=n.length,o,h="value"in Zn?Zn.value:Zn.textContent,d=h.length;for(e=0;e<a&&n[e]===h[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===h[d-o];o++);return wi=h.slice(e,1<o?1-o:void 0)}function Wn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function po(){return!1}function Ie(e){function n(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:po,this.isPropagationStopped=po,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=Ie(Gt),la=M({},Gt,{view:0,detail:0}),Xl=Ie(la),Wa,Ja,ti,ua=M({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Wa=e.screenX-ti.screenX,Ja=e.screenY-ti.screenY):Ja=Wa=0,ti=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),Sn=Ie(ua),Zl=M({},ua,{dataTransfer:0}),f1=Ie(Zl),ca=M({},la,{relatedTarget:0}),ts=Ie(ca),go=M({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),es=Ie(go),Wl=M({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ns=Ie(Wl),d1=M({},Gt,{data:0}),yo=Ie(d1),ha={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tu[e])?!!n[e]:!1}function fa(){return vo}var eu=M({},la,{key:function(e){if(e.key){var n=ha[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),is=Ie(eu),nu=M({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=Ie(nu),Ri=M({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),iu=Ie(Ri),ru=M({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),au=Ie(ru),su=M({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rs=Ie(su),We=M({},Gt,{newState:0,oldState:0}),ou=Ie(We),lu=[9,13,27,32],ei=cn&&"CompositionEvent"in window,u=null;cn&&"documentMode"in document&&(u=document.documentMode);var g=cn&&"TextEvent"in window&&!u,v=cn&&(!ei||u&&8<u&&11>=u),T=" ",j=!1;function K(e,n){switch(e){case"keyup":return lu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function at(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Ce(e,n){switch(e){case"compositionend":return at(n);case"keypress":return n.which!==32?null:(j=!0,T);case"textInput":return e=n.data,e===T&&j?null:e;default:return null}}function Lt(e,n){if(Ut)return e==="compositionend"||!ei&&K(e,n)?(e=mo(),wi=mr=Zn=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var xe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xe[e.type]:n==="textarea"}function Di(e,n,a,o){Ai?Si?Si.push(o):Si=[o]:Ai=o,n=Gu(n,"onChange"),0<n.length&&(a=new Za("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ue=null,ni=null;function Co(e){hh(e,0)}function uu(e){var n=lr(e);if(uo(n))return e}function B2(e,n){if(e==="change")return n}var j2=!1;if(cn){var m1;if(cn){var p1="oninput"in document;if(!p1){var q2=document.createElement("div");q2.setAttribute("oninput","return;"),p1=typeof q2.oninput=="function"}m1=p1}else m1=!1;j2=m1&&(!document.documentMode||9<document.documentMode)}function H2(){Ue&&(Ue.detachEvent("onpropertychange",F2),ni=Ue=null)}function F2(e){if(e.propertyName==="value"&&uu(ni)){var n=[];Di(n,ni,e,Xa(e)),$l(Co,n)}}function e8(e,n,a){e==="focusin"?(H2(),Ue=n,ni=a,Ue.attachEvent("onpropertychange",F2)):e==="focusout"&&H2()}function n8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(ni)}function i8(e,n){if(e==="click")return uu(n)}function r8(e,n){if(e==="input"||e==="change")return uu(n)}function a8(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:a8;function Eo(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!qa.call(n,h)||!hn(e[h],n[h]))return!1}return!0}function G2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Q2(e,n){var a=G2(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=G2(a)}}function K2(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?K2(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Y2(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ya(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ya(e.document)}return n}function g1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function s8(e,n){var a=Y2(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&K2(n.ownerDocument.documentElement,n)){if(o!==null&&g1(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=n.textContent.length,d=Math.min(o.start,h);o=o.end===void 0?d:Math.min(o.end,h),!a.extend&&d>o&&(h=o,o=d,d=h),h=Q2(n,d);var _=Q2(n,o);h&&_&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==_.node||a.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var o8=cn&&"documentMode"in document&&11>=document.documentMode,as=null,y1=null,To=null,v1=!1;function $2(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;v1||as==null||as!==Ya(o)||(o=as,"selectionStart"in o&&g1(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),To&&Eo(To,o)||(To=o,o=Gu(y1,"onSelect"),0<o.length&&(n=new Za("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=as)))}function da(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ss={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},_1={},X2={};cn&&(X2=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ma(e){if(_1[e])return _1[e];if(!ss[e])return e;var n=ss[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in X2)return _1[e]=n[a];return e}var Z2=ma("animationend"),W2=ma("animationiteration"),J2=ma("animationstart"),l8=ma("transitionrun"),u8=ma("transitionstart"),c8=ma("transitioncancel"),t5=ma("transitionend"),e5=new Map,n5="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Bn(e,n){e5.set(e,n),un(n,[e])}var bn=[],os=0,C1=0;function cu(){for(var e=os,n=C1=os=0;n<e;){var a=bn[n];bn[n++]=null;var o=bn[n];bn[n++]=null;var h=bn[n];bn[n++]=null;var d=bn[n];if(bn[n++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&i5(a,h,d)}}function hu(e,n,a,o){bn[os++]=e,bn[os++]=n,bn[os++]=a,bn[os++]=o,C1|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function E1(e,n,a,o){return hu(e,n,a,o),fu(e)}function pr(e,n){return hu(e,null,null,n),fu(e)}function i5(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&n!==null&&e.tag===3&&(d=e.stateNode,h=31-Xe(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[n]:e.push(n),n.lane=a|536870912)}function fu(e){if(50<Ko)throw Ko=0,R0=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ls={},r5=new WeakMap;function wn(e,n){if(typeof e=="object"&&e!==null){var a=r5.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ht(n)},r5.set(e,n),n)}return{value:e,source:n,stack:ht(n)}}var us=[],cs=0,du=null,mu=0,Rn=[],Dn=0,pa=null,Mi=1,Ii="";function ga(e,n){us[cs++]=mu,us[cs++]=du,du=e,mu=n}function a5(e,n,a){Rn[Dn++]=Mi,Rn[Dn++]=Ii,Rn[Dn++]=pa,pa=e;var o=Mi;e=Ii;var h=32-Xe(o)-1;o&=~(1<<h),a+=1;var d=32-Xe(n)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,Mi=1<<32-Xe(n)+h|a<<h|o,Ii=d+e}else Mi=1<<d|a<<h|o,Ii=e}function T1(e){e.return!==null&&(ga(e,1),a5(e,1,0))}function A1(e){for(;e===du;)du=us[--cs],us[cs]=null,mu=us[--cs],us[cs]=null;for(;e===pa;)pa=Rn[--Dn],Rn[Dn]=null,Ii=Rn[--Dn],Rn[Dn]=null,Mi=Rn[--Dn],Rn[Dn]=null}var Je=null,Le=null,Ht=!1,jn=null,ii=!1,S1=Error(s(519));function ya(e){var n=Error(s(418,""));throw bo(wn(n,e)),S1}function s5(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Me]=e,n[_e]=o,a){case"dialog":Ot("cancel",n),Ot("close",n);break;case"iframe":case"object":case"embed":Ot("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)Ot($o[a],n);break;case"source":Ot("error",n);break;case"img":case"image":case"link":Ot("error",n),Ot("load",n);break;case"details":Ot("toggle",n);break;case"input":Ot("invalid",n),ra(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ia(n);break;case"select":Ot("invalid",n);break;case"textarea":Ot("invalid",n),dr(n,o.value,o.defaultValue,o.children),ia(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ph(n.textContent,a)?(o.popover!=null&&(Ot("beforetoggle",n),Ot("toggle",n)),o.onScroll!=null&&Ot("scroll",n),o.onScrollEnd!=null&&Ot("scrollend",n),o.onClick!=null&&(n.onclick=Qu),n=!0):n=!1,n||ya(e)}function o5(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:ii=!0;return;case 5:case 13:ii=!1;return;default:Je=Je.return}}function Ao(e){if(e!==Je)return!1;if(!Ht)return o5(e),Ht=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||F0(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Le&&ya(e),o5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Le=Hn(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Le=null}}else Le=Je?Hn(e.stateNode.nextSibling):null;return!0}function So(){Le=Je=null,Ht=!1}function bo(e){jn===null?jn=[e]:jn.push(e)}var wo=Error(s(460)),l5=Error(s(474)),b1={then:function(){}};function u5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pu(){}function c5(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pu,pu),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===wo?Error(s(483)):e;default:if(typeof n.status=="string")n.then(pu,pu);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===wo?Error(s(483)):e}throw Ro=n,wo}}var Ro=null;function h5(){if(Ro===null)throw Error(s(459));var e=Ro;return Ro=null,e}var hs=null,Do=0;function gu(e){var n=Do;return Do+=1,hs===null&&(hs=[]),c5(hs,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yu(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function f5(e){var n=e._init;return n(e._payload)}function d5(e){function n(B,L){if(e){var q=B.deletions;q===null?(B.deletions=[L],B.flags|=16):q.push(L)}}function a(B,L){if(!e)return null;for(;L!==null;)n(B,L),L=L.sibling;return null}function o(B){for(var L=new Map;B!==null;)B.key!==null?L.set(B.key,B):L.set(B.index,B),B=B.sibling;return L}function h(B,L){return B=Rr(B,L),B.index=0,B.sibling=null,B}function d(B,L,q){return B.index=q,e?(q=B.alternate,q!==null?(q=q.index,q<L?(B.flags|=33554434,L):q):(B.flags|=33554434,L)):(B.flags|=1048576,L)}function _(B){return e&&B.alternate===null&&(B.flags|=33554434),B}function E(B,L,q,X){return L===null||L.tag!==6?(L=_0(q,B.mode,X),L.return=B,L):(L=h(L,q),L.return=B,L)}function D(B,L,q,X){var ft=q.type;return ft===p?$(B,L,q.props.children,X,q.key):L!==null&&(L.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===nt&&f5(ft)===L.type)?(L=h(L,q.props),Mo(L,q),L.return=B,L):(L=ku(q.type,q.key,q.props,null,B.mode,X),Mo(L,q),L.return=B,L)}function P(B,L,q,X){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=C0(q,B.mode,X),L.return=B,L):(L=h(L,q.children||[]),L.return=B,L)}function $(B,L,q,X,ft){return L===null||L.tag!==7?(L=Ra(q,B.mode,X,ft),L.return=B,L):(L=h(L,q),L.return=B,L)}function tt(B,L,q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=_0(""+L,B.mode,q),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case f:return q=ku(L.type,L.key,L.props,null,B.mode,q),Mo(q,L),q.return=B,q;case m:return L=C0(L,B.mode,q),L.return=B,L;case nt:var X=L._init;return L=X(L._payload),tt(B,L,q)}if(ot(L)||Et(L))return L=Ra(L,B.mode,q,null),L.return=B,L;if(typeof L.then=="function")return tt(B,gu(L),q);if(L.$$typeof===N)return tt(B,Vu(B,L),q);yu(B,L)}return null}function G(B,L,q,X){var ft=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ft!==null?null:E(B,L,""+q,X);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case f:return q.key===ft?D(B,L,q,X):null;case m:return q.key===ft?P(B,L,q,X):null;case nt:return ft=q._init,q=ft(q._payload),G(B,L,q,X)}if(ot(q)||Et(q))return ft!==null?null:$(B,L,q,X,null);if(typeof q.then=="function")return G(B,L,gu(q),X);if(q.$$typeof===N)return G(B,L,Vu(B,q),X);yu(B,q)}return null}function Y(B,L,q,X,ft){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return B=B.get(q)||null,E(L,B,""+X,ft);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case f:return B=B.get(X.key===null?q:X.key)||null,D(L,B,X,ft);case m:return B=B.get(X.key===null?q:X.key)||null,P(L,B,X,ft);case nt:var Mt=X._init;return X=Mt(X._payload),Y(B,L,q,X,ft)}if(ot(X)||Et(X))return B=B.get(q)||null,$(L,B,X,ft,null);if(typeof X.then=="function")return Y(B,L,q,gu(X),ft);if(X.$$typeof===N)return Y(B,L,q,Vu(L,X),ft);yu(L,X)}return null}function mt(B,L,q,X){for(var ft=null,Mt=null,gt=L,_t=L=0,Oe=null;gt!==null&&_t<q.length;_t++){gt.index>_t?(Oe=gt,gt=null):Oe=gt.sibling;var Ft=G(B,gt,q[_t],X);if(Ft===null){gt===null&&(gt=Oe);break}e&&gt&&Ft.alternate===null&&n(B,gt),L=d(Ft,L,_t),Mt===null?ft=Ft:Mt.sibling=Ft,Mt=Ft,gt=Oe}if(_t===q.length)return a(B,gt),Ht&&ga(B,_t),ft;if(gt===null){for(;_t<q.length;_t++)gt=tt(B,q[_t],X),gt!==null&&(L=d(gt,L,_t),Mt===null?ft=gt:Mt.sibling=gt,Mt=gt);return Ht&&ga(B,_t),ft}for(gt=o(gt);_t<q.length;_t++)Oe=Y(gt,B,_t,q[_t],X),Oe!==null&&(e&&Oe.alternate!==null&&gt.delete(Oe.key===null?_t:Oe.key),L=d(Oe,L,_t),Mt===null?ft=Oe:Mt.sibling=Oe,Mt=Oe);return e&&gt.forEach(function(Or){return n(B,Or)}),Ht&&ga(B,_t),ft}function At(B,L,q,X){if(q==null)throw Error(s(151));for(var ft=null,Mt=null,gt=L,_t=L=0,Oe=null,Ft=q.next();gt!==null&&!Ft.done;_t++,Ft=q.next()){gt.index>_t?(Oe=gt,gt=null):Oe=gt.sibling;var Or=G(B,gt,Ft.value,X);if(Or===null){gt===null&&(gt=Oe);break}e&&gt&&Or.alternate===null&&n(B,gt),L=d(Or,L,_t),Mt===null?ft=Or:Mt.sibling=Or,Mt=Or,gt=Oe}if(Ft.done)return a(B,gt),Ht&&ga(B,_t),ft;if(gt===null){for(;!Ft.done;_t++,Ft=q.next())Ft=tt(B,Ft.value,X),Ft!==null&&(L=d(Ft,L,_t),Mt===null?ft=Ft:Mt.sibling=Ft,Mt=Ft);return Ht&&ga(B,_t),ft}for(gt=o(gt);!Ft.done;_t++,Ft=q.next())Ft=Y(gt,B,_t,Ft.value,X),Ft!==null&&(e&&Ft.alternate!==null&&gt.delete(Ft.key===null?_t:Ft.key),L=d(Ft,L,_t),Mt===null?ft=Ft:Mt.sibling=Ft,Mt=Ft);return e&&gt.forEach(function(Sd){return n(B,Sd)}),Ht&&ga(B,_t),ft}function ue(B,L,q,X){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case f:t:{for(var ft=q.key;L!==null;){if(L.key===ft){if(ft=q.type,ft===p){if(L.tag===7){a(B,L.sibling),X=h(L,q.props.children),X.return=B,B=X;break t}}else if(L.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===nt&&f5(ft)===L.type){a(B,L.sibling),X=h(L,q.props),Mo(X,q),X.return=B,B=X;break t}a(B,L);break}else n(B,L);L=L.sibling}q.type===p?(X=Ra(q.props.children,B.mode,X,q.key),X.return=B,B=X):(X=ku(q.type,q.key,q.props,null,B.mode,X),Mo(X,q),X.return=B,B=X)}return _(B);case m:t:{for(ft=q.key;L!==null;){if(L.key===ft)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){a(B,L.sibling),X=h(L,q.children||[]),X.return=B,B=X;break t}else{a(B,L);break}else n(B,L);L=L.sibling}X=C0(q,B.mode,X),X.return=B,B=X}return _(B);case nt:return ft=q._init,q=ft(q._payload),ue(B,L,q,X)}if(ot(q))return mt(B,L,q,X);if(Et(q)){if(ft=Et(q),typeof ft!="function")throw Error(s(150));return q=ft.call(q),At(B,L,q,X)}if(typeof q.then=="function")return ue(B,L,gu(q),X);if(q.$$typeof===N)return ue(B,L,Vu(B,q),X);yu(B,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,L!==null&&L.tag===6?(a(B,L.sibling),X=h(L,q),X.return=B,B=X):(a(B,L),X=_0(q,B.mode,X),X.return=B,B=X),_(B)):a(B,L)}return function(B,L,q,X){try{Do=0;var ft=ue(B,L,q,X);return hs=null,ft}catch(gt){if(gt===wo)throw gt;var Mt=Vn(29,gt,null,B.mode);return Mt.lanes=X,Mt.return=B,Mt}finally{}}}var va=d5(!0),m5=d5(!1),fs=jt(null),vu=jt(0);function p5(e,n){e=ji,Kt(vu,e),Kt(fs,n),ji=e|n.baseLanes}function w1(){Kt(vu,ji),Kt(fs,fs.current)}function R1(){ji=vu.current,ae(fs),ae(vu)}var Mn=jt(null),ri=null;function gr(e){var n=e.alternate;Kt(Te,Te.current&1),Kt(Mn,e),ri===null&&(n===null||fs.current!==null||n.memoizedState!==null)&&(ri=e)}function g5(e){if(e.tag===22){if(Kt(Te,Te.current),Kt(Mn,e),ri===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ri=e)}}else yr()}function yr(){Kt(Te,Te.current),Kt(Mn,Mn.current)}function xi(e){ae(Mn),ri===e&&(ri=null),ae(Te)}var Te=jt(0);function _u(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var h8=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},f8=r.unstable_scheduleCallback,d8=r.unstable_NormalPriority,Ae={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function D1(){return{controller:new h8,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&f8(d8,function(){e.controller.abort()})}var xo=null,M1=0,ds=0,ms=null;function m8(e,n){if(xo===null){var a=xo=[];M1=0,ds=k0(),ms={status:"pending",value:void 0,then:function(o){a.push(o)}}}return M1++,n.then(y5,y5),n}function y5(){if(--M1===0&&xo!==null){ms!==null&&(ms.status="fulfilled");var e=xo;xo=null,ds=0,ms=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function p8(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var v5=S.S;S.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&m8(e,n),v5!==null&&v5(e,n)};var _a=jt(null);function I1(){var e=_a.current;return e!==null?e:Zt.pooledCache}function Cu(e,n){n===null?Kt(_a,_a.current):Kt(_a,n.pool)}function _5(){var e=I1();return e===null?null:{parent:Ae._currentValue,pool:e}}var vr=0,Dt=null,Yt=null,me=null,Eu=!1,ps=!1,Ca=!1,Tu=0,Vo=0,gs=null,g8=0;function he(){throw Error(s(321))}function x1(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hn(e[a],n[a]))return!1;return!0}function V1(e,n,a,o,h,d){return vr=d,Dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=e===null||e.memoizedState===null?Ea:_r,Ca=!1,d=a(o,h),Ca=!1,ps&&(d=E5(n,a,o,h)),C5(e),d}function C5(e){S.H=ai;var n=Yt!==null&&Yt.next!==null;if(vr=0,me=Yt=Dt=null,Eu=!1,Vo=0,gs=null,n)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&xu(e)&&(Ve=!0))}function E5(e,n,a,o){Dt=e;var h=0;do{if(ps&&(gs=null),Vo=0,ps=!1,25<=h)throw Error(s(301));if(h+=1,me=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Ta,d=n(a,o)}while(ps);return d}function y8(){var e=S.H,n=e.useState()[0];return n=typeof n.then=="function"?No(n):n,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Dt.flags|=1024),n}function N1(){var e=Tu!==0;return Tu=0,e}function O1(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function k1(e){if(Eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Eu=!1}vr=0,me=Yt=Dt=null,ps=!1,Vo=Tu=0,gs=null}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?Dt.memoizedState=me=e:me=me.next=e,me}function pe(){if(Yt===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var n=me===null?Dt.memoizedState:me.next;if(n!==null)me=n,Yt=e;else{if(e===null)throw Dt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},me===null?Dt.memoizedState=me=e:me=me.next=e}return me}var Au;Au=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function No(e){var n=Vo;return Vo+=1,gs===null&&(gs=[]),e=c5(gs,e,n),n=Dt,(me===null?n.memoizedState:me.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?Ea:_r),e}function Su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===N)return Fe(e)}throw Error(s(438,String(e)))}function U1(e){var n=null,a=Dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),Dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=yt;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function bu(e){var n=pe();return L1(n,Yt,e)}function L1(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}n.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var E=_=null,D=null,P=n,$=!1;do{var tt=P.lane&-536870913;if(tt!==P.lane?(zt&tt)===tt:(vr&tt)===tt){var G=P.revertLane;if(G===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),tt===ds&&($=!0);else if((vr&G)===G){P=P.next,G===ds&&($=!0);continue}else tt={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},D===null?(E=D=tt,_=d):D=D.next=tt,Dt.lanes|=G,Dr|=G;tt=P.action,Ca&&a(d,tt),d=P.hasEagerState?P.eagerState:a(d,tt)}else G={lane:tt,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},D===null?(E=D=G,_=d):D=D.next=G,Dt.lanes|=tt,Dr|=tt;P=P.next}while(P!==null&&P!==n);if(D===null?_=d:D.next=E,!hn(d,e.memoizedState)&&(Ve=!0,$&&(a=ms,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=D,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function z1(e){var n=pe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=n.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);hn(d,n.memoizedState)||(Ve=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function T5(e,n,a){var o=Dt,h=pe(),d=Ht;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!hn((Yt||h).memoizedState,a);if(_&&(h.memoizedState=a,Ve=!0),h=h.queue,j1(b5.bind(null,o,h,e),[e]),h.getSnapshot!==n||_||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,ys(9,S5.bind(null,o,h,a,n),{destroy:void 0},null),Zt===null)throw Error(s(349));d||(vr&60)!==0||A5(o,n,a)}return a}function A5(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Dt.updateQueue,n===null?(n=Au(),Dt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function S5(e,n,a,o){n.value=a,n.getSnapshot=o,w5(n)&&R5(e)}function b5(e,n,a){return a(function(){w5(n)&&R5(e)})}function w5(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hn(e,a)}catch{return!0}}function R5(e){var n=pr(e,2);n!==null&&tn(n,e,2)}function P1(e){var n=rn();if(typeof e=="function"){var a=e;if(e=a(),Ca){Qn(!0);try{a()}finally{Qn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function D5(e,n,a,o){return e.baseState=a,L1(e,Yt,typeof o=="function"?o:Vi)}function v8(e,n,a,o,h){if(Du(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};S.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,M5(n,d)):(d.next=a.next,n.pending=a.next=d)}}function M5(e,n){var a=n.action,o=n.payload,h=e.state;if(n.isTransition){var d=S.T,_={};S.T=_;try{var E=a(h,o),D=S.S;D!==null&&D(_,E),I5(e,n,E)}catch(P){B1(e,n,P)}finally{S.T=d}}else try{d=a(h,o),I5(e,n,d)}catch(P){B1(e,n,P)}}function I5(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){x5(e,n,o)},function(o){return B1(e,n,o)}):x5(e,n,a)}function x5(e,n,a){n.status="fulfilled",n.value=a,V5(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,M5(e,a)))}function B1(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,V5(n),n=n.next;while(n!==o)}e.action=null}function V5(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function N5(e,n){return n}function O5(e,n){if(Ht){var a=Zt.formState;if(a!==null){t:{var o=Dt;if(Ht){if(Le){e:{for(var h=Le,d=ii;h.nodeType!==8;){if(!d){h=null;break e}if(h=Hn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Le=Hn(h.nextSibling),o=h.data==="F!";break t}}ya(o)}o=!1}o&&(n=a[0])}}return a=rn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N5,lastRenderedState:n},a.queue=o,a=W5.bind(null,Dt,o),o.dispatch=a,o=P1(!1),d=Q1.bind(null,Dt,!1,o.queue),o=rn(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,a=v8.bind(null,Dt,h,d,a),h.dispatch=a,o.memoizedState=e,[n,a,!1]}function k5(e){var n=pe();return U5(n,Yt,e)}function U5(e,n,a){n=L1(e,n,N5)[0],e=bu(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?No(n):n;var o=pe(),h=o.queue,d=h.dispatch;return a!==o.memoizedState&&(Dt.flags|=2048,ys(9,_8.bind(null,h,a),{destroy:void 0},null)),[n,d,e]}function _8(e,n){e.action=n}function L5(e){var n=pe(),a=Yt;if(a!==null)return U5(n,a,e);pe(),n=n.memoizedState,a=pe();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ys(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=Dt.updateQueue,n===null&&(n=Au(),Dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function z5(){return pe().memoizedState}function wu(e,n,a,o){var h=rn();Dt.flags|=e,h.memoizedState=ys(1|n,a,{destroy:void 0},o===void 0?null:o)}function Ru(e,n,a,o){var h=pe();o=o===void 0?null:o;var d=h.memoizedState.inst;Yt!==null&&o!==null&&x1(o,Yt.memoizedState.deps)?h.memoizedState=ys(n,a,d,o):(Dt.flags|=e,h.memoizedState=ys(1|n,a,d,o))}function P5(e,n){wu(8390656,8,e,n)}function j1(e,n){Ru(2048,8,e,n)}function B5(e,n){return Ru(4,2,e,n)}function j5(e,n){return Ru(4,4,e,n)}function q5(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function H5(e,n,a){a=a!=null?a.concat([e]):null,Ru(4,4,q5.bind(null,n,e),a)}function q1(){}function F5(e,n){var a=pe();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&x1(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function G5(e,n){var a=pe();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&x1(n,o[1]))return o[0];if(o=e(),Ca){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[o,n],o}function H1(e,n,a){return a===void 0||(vr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=K3(),Dt.lanes|=e,Dr|=e,a)}function Q5(e,n,a,o){return hn(a,n)?a:fs.current!==null?(e=H1(e,a,o),hn(e,n)||(Ve=!0),e):(vr&42)===0?(Ve=!0,e.memoizedState=a):(e=K3(),Dt.lanes|=e,Dr|=e,n)}function K5(e,n,a,o,h){var d=ut.p;ut.p=d!==0&&8>d?d:8;var _=S.T,E={};S.T=E,Q1(e,!1,n,a);try{var D=h(),P=S.S;if(P!==null&&P(E,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var $=p8(D,o);Oo(e,n,$,pn(e))}else Oo(e,n,o,pn(e))}catch(tt){Oo(e,n,{then:function(){},status:"rejected",reason:tt},pn())}finally{ut.p=d,S.T=_}}function C8(){}function F1(e,n,a,o){if(e.tag!==5)throw Error(s(476));var h=Y5(e).queue;K5(e,h,n,Rt,a===null?C8:function(){return $5(e),a(o)})}function Y5(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Rt,baseState:Rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $5(e){var n=Y5(e).next.queue;Oo(e,n,{},pn())}function G1(){return Fe(tl)}function X5(){return pe().memoizedState}function Z5(){return pe().memoizedState}function E8(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pn();e=Tr(a);var o=Ar(n,e,a);o!==null&&(tn(o,n,a),Lo(o,n,a)),n={cache:D1()},e.payload=n;return}n=n.return}}function T8(e,n,a){var o=pn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Du(e)?J5(n,a):(a=E1(e,n,a,o),a!==null&&(tn(a,e,o),t3(a,n,o)))}function W5(e,n,a){var o=pn();Oo(e,n,a,o)}function Oo(e,n,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(e))J5(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,hn(E,_))return hu(e,n,h,0),Zt===null&&cu(),!1}catch{}finally{}if(a=E1(e,n,h,o),a!==null)return tn(a,e,o),t3(a,n,o),!0}return!1}function Q1(e,n,a,o){if(o={lane:2,revertLane:k0(),action:o,hasEagerState:!1,eagerState:null,next:null},Du(e)){if(n)throw Error(s(479))}else n=E1(e,a,o,2),n!==null&&tn(n,e,2)}function Du(e){var n=e.alternate;return e===Dt||n!==null&&n===Dt}function J5(e,n){ps=Eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function t3(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ar(e,a)}}var ai={readContext:Fe,use:Su,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he};ai.useCacheRefresh=he,ai.useMemoCache=he,ai.useHostTransitionStatus=he,ai.useFormState=he,ai.useActionState=he,ai.useOptimistic=he;var Ea={readContext:Fe,use:Su,useCallback:function(e,n){return rn().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:P5,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wu(4194308,4,q5.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wu(4194308,4,e,n)},useInsertionEffect:function(e,n){wu(4,2,e,n)},useMemo:function(e,n){var a=rn();n=n===void 0?null:n;var o=e();if(Ca){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=rn();if(a!==void 0){var h=a(n);if(Ca){Qn(!0);try{a(n)}finally{Qn(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=T8.bind(null,Dt,e),[o.memoizedState,e]},useRef:function(e){var n=rn();return e={current:e},n.memoizedState=e},useState:function(e){e=P1(e);var n=e.queue,a=W5.bind(null,Dt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:q1,useDeferredValue:function(e,n){var a=rn();return H1(a,e,n)},useTransition:function(){var e=P1(!1);return e=K5.bind(null,Dt,e.queue,!0,!1),rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Dt,h=rn();if(Ht){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(zt&60)!==0||A5(o,n,a)}h.memoizedState=a;var d={value:a,getSnapshot:n};return h.queue=d,P5(b5.bind(null,o,d,e),[e]),o.flags|=2048,ys(9,S5.bind(null,o,d,a,n),{destroy:void 0},null),a},useId:function(){var e=rn(),n=Zt.identifierPrefix;if(Ht){var a=Ii,o=Mi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Tu++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=g8++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return rn().memoizedState=E8.bind(null,Dt)}};Ea.useMemoCache=U1,Ea.useHostTransitionStatus=G1,Ea.useFormState=O5,Ea.useActionState=O5,Ea.useOptimistic=function(e){var n=rn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Q1.bind(null,Dt,!0,a),a.dispatch=n,[e,n]};var _r={readContext:Fe,use:Su,useCallback:F5,useContext:Fe,useEffect:j1,useImperativeHandle:H5,useInsertionEffect:B5,useLayoutEffect:j5,useMemo:G5,useReducer:bu,useRef:z5,useState:function(){return bu(Vi)},useDebugValue:q1,useDeferredValue:function(e,n){var a=pe();return Q5(a,Yt.memoizedState,e,n)},useTransition:function(){var e=bu(Vi)[0],n=pe().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:T5,useId:X5};_r.useCacheRefresh=Z5,_r.useMemoCache=U1,_r.useHostTransitionStatus=G1,_r.useFormState=k5,_r.useActionState=k5,_r.useOptimistic=function(e,n){var a=pe();return D5(a,Yt,e,n)};var Ta={readContext:Fe,use:Su,useCallback:F5,useContext:Fe,useEffect:j1,useImperativeHandle:H5,useInsertionEffect:B5,useLayoutEffect:j5,useMemo:G5,useReducer:z1,useRef:z5,useState:function(){return z1(Vi)},useDebugValue:q1,useDeferredValue:function(e,n){var a=pe();return Yt===null?H1(a,e,n):Q5(a,Yt.memoizedState,e,n)},useTransition:function(){var e=z1(Vi)[0],n=pe().memoizedState;return[typeof e=="boolean"?e:No(e),n]},useSyncExternalStore:T5,useId:X5};Ta.useCacheRefresh=Z5,Ta.useMemoCache=U1,Ta.useHostTransitionStatus=G1,Ta.useFormState=L5,Ta.useActionState=L5,Ta.useOptimistic=function(e,n){var a=pe();return Yt!==null?D5(a,Yt,e,n):(a.baseState=e,[e,a.queue.dispatch])};function K1(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:M({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Y1={isMounted:function(e){return(e=e._reactInternals)?st(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pn(),h=Tr(o);h.payload=n,a!=null&&(h.callback=a),n=Ar(e,h,o),n!==null&&(tn(n,e,o),Lo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pn(),h=Tr(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Ar(e,h,o),n!==null&&(tn(n,e,o),Lo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pn(),o=Tr(a);o.tag=2,n!=null&&(o.callback=n),n=Ar(e,o,a),n!==null&&(tn(n,e,a),Lo(n,e,a))}};function e3(e,n,a,o,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,o)||!Eo(h,d):!0}function n3(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Y1.enqueueReplaceState(n,n.state,null)}function Aa(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=M({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function i3(e){Mu(e)}function r3(e){console.error(e)}function a3(e){Mu(e)}function Iu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function s3(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function $1(e,n,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){Iu(e,n)},a}function o3(e){return e=Tr(e),e.tag=3,e}function l3(e,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){s3(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){s3(n,a,o),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function A8(e,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Uo(n,a,h,!0),a=Mn.current,a!==null){switch(a.tag){case 13:return ri===null?I0():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===b1?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),V0(e,o,h)),!1;case 22:return a.flags|=65536,o===b1?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),V0(e,o,h)),!1}throw Error(s(435,a.tag))}return V0(e,o,h),I0(),!1}if(Ht)return n=Mn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==S1&&(e=Error(s(422),{cause:o}),bo(wn(e,a)))):(o!==S1&&(n=Error(s(423),{cause:o}),bo(wn(n,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=wn(o,a),h=$1(e.stateNode,o,h),c0(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:o});if(d=wn(d,a),Go===null?Go=[d]:Go.push(d),le!==4&&(le=2),n===null)return!0;o=wn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=$1(a.stateNode,o,e),c0(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mr===null||!Mr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=o3(h),l3(h,e,a,o),c0(a,h),!1}a=a.return}while(a!==null);return!1}var u3=Error(s(461)),Ve=!1;function ze(e,n,a,o){n.child=e===null?m5(n,null,a,o):va(n,e.child,a,o)}function c3(e,n,a,o,h){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return ba(n),o=V1(e,n,a,_,d,h),E=N1(),e!==null&&!Ve?(O1(e,n,h),Ni(e,n,h)):(Ht&&E&&T1(n),n.flags|=1,ze(e,n,o,h),n.child)}function h3(e,n,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!v0(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,f3(e,n,d,o,h)):(e=ku(a.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!r0(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(_,o)&&e.ref===n.ref)return Ni(e,n,h)}return n.flags|=1,e=Rr(d,o),e.ref=n.ref,e.return=n,n.child=e}function f3(e,n,a,o,h){if(e!==null){var d=e.memoizedProps;if(Eo(d,o)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=o=d,r0(e,h))(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,Ni(e,n,h)}return X1(e,n,a,o,h)}function d3(e,n,a){var o=n.pendingProps,h=o.children,d=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(ko(e,n),o.mode==="hidden"||d){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|a:a,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return m3(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(n,_!==null?_.cachePool:null),_!==null?p5(n,_):w1(),g5(n);else return n.lanes=n.childLanes=536870912,m3(e,n,_!==null?_.baseLanes|a:a,a)}else _!==null?(Cu(n,_.cachePool),p5(n,_),yr(),n.memoizedState=null):(e!==null&&Cu(n,null),w1(),yr());return ze(e,n,h,a),n.child}function m3(e,n,a,o){var h=I1();return h=h===null?null:{parent:Ae._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Cu(n,null),w1(),g5(n),e!==null&&Uo(e,n,o,!0),null}function ko(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function X1(e,n,a,o,h){return ba(n),a=V1(e,n,a,o,void 0,h),o=N1(),e!==null&&!Ve?(O1(e,n,h),Ni(e,n,h)):(Ht&&o&&T1(n),n.flags|=1,ze(e,n,a,h),n.child)}function p3(e,n,a,o,h,d){return ba(n),n.updateQueue=null,a=E5(n,o,a,h),C5(e),o=N1(),e!==null&&!Ve?(O1(e,n,d),Ni(e,n,d)):(Ht&&o&&T1(n),n.flags|=1,ze(e,n,a,d),n.child)}function g3(e,n,a,o,h){if(ba(n),n.stateNode===null){var d=ls,_=a.contextType;typeof _=="object"&&_!==null&&(d=Fe(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Y1,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},l0(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?Fe(_):ls,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(K1(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Y1.enqueueReplaceState(d,d.state,null),Po(n,o,d,h),zo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,D=Aa(a,E);d.props=D;var P=d.context,$=a.contextType;_=ls,typeof $=="object"&&$!==null&&(_=Fe($));var tt=a.getDerivedStateFromProps;$=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,$||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||P!==_)&&n3(n,d,o,_),Er=!1;var G=n.memoizedState;d.state=G,Po(n,o,d,h),zo(),P=n.memoizedState,E||G!==P||Er?(typeof tt=="function"&&(K1(n,a,tt,o),P=n.memoizedState),(D=Er||e3(n,a,D,o,G,P,_))?($||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=P),d.props=o,d.state=P,d.context=_,o=D):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,u0(e,n),_=n.memoizedProps,$=Aa(a,_),d.props=$,tt=n.pendingProps,G=d.context,P=a.contextType,D=ls,typeof P=="object"&&P!==null&&(D=Fe(P)),E=a.getDerivedStateFromProps,(P=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==tt||G!==D)&&n3(n,d,o,D),Er=!1,G=n.memoizedState,d.state=G,Po(n,o,d,h),zo();var Y=n.memoizedState;_!==tt||G!==Y||Er||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof E=="function"&&(K1(n,a,E,o),Y=n.memoizedState),($=Er||e3(n,a,$,o,G,Y,D)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Y,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Y,D)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Y),d.props=o,d.state=Y,d.context=D,o=$):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ko(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=va(n,e.child,null,h),n.child=va(n,null,a,h)):ze(e,n,a,h),n.memoizedState=d.state,e=n.child):e=Ni(e,n,h),e}function y3(e,n,a,o){return So(),n.flags|=256,ze(e,n,a,o),n.child}var Z1={dehydrated:null,treeContext:null,retryLane:0};function W1(e){return{baseLanes:e,cachePool:_5()}}function J1(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Nn),e}function v3(e,n,a){var o=n.pendingProps,h=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ht){if(h?gr(n):yr(),Ht){var E=Le,D;if(D=E){t:{for(D=E,E=ii;D.nodeType!==8;){if(!E){E=null;break t}if(D=Hn(D.nextSibling),D===null){E=null;break t}}E=D}E!==null?(n.memoizedState={dehydrated:E,treeContext:pa!==null?{id:Mi,overflow:Ii}:null,retryLane:536870912},D=Vn(18,null,null,0),D.stateNode=E,D.return=n,n.child=D,Je=n,Le=null,D=!0):D=!1}D||ya(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;xi(n)}return E=o.children,o=o.fallback,h?(yr(),h=n.mode,E=e0({mode:"hidden",children:E},h),o=Ra(o,h,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,h=n.child,h.memoizedState=W1(a),h.childLanes=J1(e,_,a),n.memoizedState=Z1,o):(gr(n),t0(n,E))}if(D=e.memoizedState,D!==null&&(E=D.dehydrated,E!==null)){if(d)n.flags&256?(gr(n),n.flags&=-257,n=n0(e,n,a)):n.memoizedState!==null?(yr(),n.child=e.child,n.flags|=128,n=null):(yr(),h=o.fallback,E=n.mode,o=e0({mode:"visible",children:o.children},E),h=Ra(h,E,a,null),h.flags|=2,o.return=n,h.return=n,o.sibling=h,n.child=o,va(n,e.child,null,a),o=n.child,o.memoizedState=W1(a),o.childLanes=J1(e,_,a),n.memoizedState=Z1,n=h);else if(gr(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var P=_.dgst;_=P,o=Error(s(419)),o.stack="",o.digest=_,bo({value:o,source:null,stack:null}),n=n0(e,n,a)}else if(Ve||Uo(e,n,a,!1),_=(a&e.childLanes)!==0,Ve||_){if(_=Zt,_!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|a))!==0?0:o,o!==0&&o!==D.retryLane)throw D.retryLane=o,pr(e,o),tn(_,e,o),u3}E.data==="$?"||I0(),n=n0(e,n,a)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=z8.bind(null,e),E._reactRetry=n,n=null):(e=D.treeContext,Le=Hn(E.nextSibling),Je=n,Ht=!0,jn=null,ii=!1,e!==null&&(Rn[Dn++]=Mi,Rn[Dn++]=Ii,Rn[Dn++]=pa,Mi=e.id,Ii=e.overflow,pa=n),n=t0(n,o.children),n.flags|=4096);return n}return h?(yr(),h=o.fallback,E=n.mode,D=e.child,P=D.sibling,o=Rr(D,{mode:"hidden",children:o.children}),o.subtreeFlags=D.subtreeFlags&31457280,P!==null?h=Rr(P,h):(h=Ra(h,E,a,null),h.flags|=2),h.return=n,o.return=n,o.sibling=h,n.child=o,o=h,h=n.child,E=e.child.memoizedState,E===null?E=W1(a):(D=E.cachePool,D!==null?(P=Ae._currentValue,D=D.parent!==P?{parent:P,pool:P}:D):D=_5(),E={baseLanes:E.baseLanes|a,cachePool:D}),h.memoizedState=E,h.childLanes=J1(e,_,a),n.memoizedState=Z1,o):(gr(n),a=e.child,e=a.sibling,a=Rr(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function t0(e,n){return n=e0({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function e0(e,n){return F3(e,n,0,null)}function n0(e,n,a){return va(n,e.child,null,a),e=t0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _3(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),s0(e.return,n,a)}function i0(e,n,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function C3(e,n,a){var o=n.pendingProps,h=o.revealOrder,d=o.tail;if(ze(e,n,o.children,a),o=Te.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_3(e,a,n);else if(e.tag===19)_3(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Kt(Te,o),h){case"forwards":for(a=n.child,h=null;a!==null;)e=a.alternate,e!==null&&_u(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),i0(n,!1,h,a,d);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&_u(e)===null){n.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}i0(n,!0,a,null,d);break;case"together":i0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ni(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Dr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Uo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Rr(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Rr(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function r0(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function S8(e,n,a){switch(n.tag){case 3:Ji(n,n.stateNode.containerInfo),Cr(n,Ae,e.memoizedState.cache),So();break;case 27:case 5:Js(n);break;case 4:Ji(n,n.stateNode.containerInfo);break;case 10:Cr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(gr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?v3(e,n,a):(gr(n),e=Ni(e,n,a),e!==null?e.sibling:null);gr(n);break;case 19:var h=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Uo(e,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return C3(e,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(Te,Te.current),o)break;return null;case 22:case 23:return n.lanes=0,d3(e,n,a);case 24:Cr(n,Ae,e.memoizedState.cache)}return Ni(e,n,a)}function E3(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ve=!0;else{if(!r0(e,a)&&(n.flags&128)===0)return Ve=!1,S8(e,n,a);Ve=(e.flags&131072)!==0}else Ve=!1,Ht&&(n.flags&1048576)!==0&&a5(n,mu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,h=o._init;if(o=h(o._payload),n.type=o,typeof o=="function")v0(o)?(e=Aa(o,e),n.tag=1,n=g3(null,n,o,e,a)):(n.tag=0,n=X1(null,n,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===O){n.tag=11,n=c3(null,n,o,e,a);break t}else if(h===Q){n.tag=14,n=h3(null,n,o,e,a);break t}}throw n=w(o)||o,Error(s(306,n,""))}}return n;case 0:return X1(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Aa(o,n.pendingProps),g3(e,n,o,h,a);case 3:t:{if(Ji(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;h=n.memoizedState,o=h.element,u0(e,n),Po(n,d,null,a);var _=n.memoizedState;if(d=_.cache,Cr(n,Ae,d),d!==h.cache&&o0(n,[Ae],a,!0),zo(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=y3(e,n,d,a);break t}else if(d!==o){o=wn(Error(s(424)),n),bo(o),n=y3(e,n,d,a);break t}else for(Le=Hn(n.stateNode.containerInfo.firstChild),Je=n,Ht=!0,jn=null,ii=!0,a=m5(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(So(),d===o){n=Ni(e,n,a);break t}ze(e,n,d,a)}n=n.child}return n;case 26:return ko(e,n),e===null?(a=Sh(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ht||(a=n.type,e=n.pendingProps,o=Ku(vn.current).createElement(a),o[Me]=n,o[_e]=e,Pe(o,a,e),ee(o),n.stateNode=o):n.memoizedState=Sh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Js(n),e===null&&Ht&&(o=n.stateNode=Eh(n.type,n.pendingProps,vn.current),Je=n,ii=!0,Le=Hn(o.firstChild)),o=n.pendingProps.children,e!==null||Ht?ze(e,n,o,a):n.child=va(n,null,o,a),ko(e,n),n.child;case 5:return e===null&&Ht&&((h=o=Le)&&(o=td(o,n.type,n.pendingProps,ii),o!==null?(n.stateNode=o,Je=n,Le=Hn(o.firstChild),ii=!1,h=!0):h=!1),h||ya(n)),Js(n),h=n.type,d=n.pendingProps,_=e!==null?e.memoizedProps:null,o=d.children,F0(h,d)?o=null:_!==null&&F0(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=V1(e,n,y8,null,null,a),tl._currentValue=h),ko(e,n),ze(e,n,o,a),n.child;case 6:return e===null&&Ht&&((e=a=Le)&&(a=ed(a,n.pendingProps,ii),a!==null?(n.stateNode=a,Je=n,Le=null,e=!0):e=!1),e||ya(n)),null;case 13:return v3(e,n,a);case 4:return Ji(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=va(n,null,o,a):ze(e,n,o,a),n.child;case 11:return c3(e,n,n.type,n.pendingProps,a);case 7:return ze(e,n,n.pendingProps,a),n.child;case 8:return ze(e,n,n.pendingProps.children,a),n.child;case 12:return ze(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Cr(n,n.type,o.value),ze(e,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,ba(n),h=Fe(h),o=o(h),n.flags|=1,ze(e,n,o,a),n.child;case 14:return h3(e,n,n.type,n.pendingProps,a);case 15:return f3(e,n,n.type,n.pendingProps,a);case 19:return C3(e,n,a);case 22:return d3(e,n,a);case 24:return ba(n),o=Fe(Ae),e===null?(h=I1(),h===null&&(h=Zt,d=D1(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),n.memoizedState={parent:o,cache:h},l0(n),Cr(n,Ae,h)):((e.lanes&a)!==0&&(u0(e,n),Po(n,null,null,a),zo()),h=e.memoizedState,d=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Cr(n,Ae,o)):(o=d.cache,Cr(n,Ae,o),o!==h.cache&&o0(n,[Ae],a,!0))),ze(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var a0=jt(null),Sa=null,Oi=null;function Cr(e,n,a){Kt(a0,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=a0.current,ae(a0)}function s0(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function o0(e,n,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var D=0;D<n.length;D++)if(E.context===n[D]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),s0(d.return,a,e),o||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),s0(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Uo(e,n,a,o){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;hn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===Wi.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}h=h.return}e!==null&&o0(n,e,a,o),n.flags|=262144}function xu(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){Sa=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return T3(Sa,e)}function Vu(e,n){return Sa===null&&ba(e),T3(e,n)}function T3(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(e===null)throw Error(s(308));Oi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Oi=Oi.next=n;return a}var Er=!1;function l0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function u0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ie&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=fu(e),i5(e,null,a),n}return hu(e,o,n,a),fu(e)}function Lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ar(e,a)}}function c0(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=n:d=d.next=n}else h=d=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var h0=!1;function zo(){if(h0){var e=ms;if(e!==null)throw e}}function Po(e,n,a,o){h0=!1;var h=e.updateQueue;Er=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var D=E,P=D.next;D.next=null,_===null?d=P:_.next=P,_=D;var $=e.alternate;$!==null&&($=$.updateQueue,E=$.lastBaseUpdate,E!==_&&(E===null?$.firstBaseUpdate=P:E.next=P,$.lastBaseUpdate=D))}if(d!==null){var tt=h.baseState;_=0,$=P=D=null,E=d;do{var G=E.lane&-536870913,Y=G!==E.lane;if(Y?(zt&G)===G:(o&G)===G){G!==0&&G===ds&&(h0=!0),$!==null&&($=$.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var mt=e,At=E;G=n;var ue=a;switch(At.tag){case 1:if(mt=At.payload,typeof mt=="function"){tt=mt.call(ue,tt,G);break t}tt=mt;break t;case 3:mt.flags=mt.flags&-65537|128;case 0:if(mt=At.payload,G=typeof mt=="function"?mt.call(ue,tt,G):mt,G==null)break t;tt=M({},tt,G);break t;case 2:Er=!0}}G=E.callback,G!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},$===null?(P=$=Y,D=tt):$=$.next=Y,_|=G;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;Y=E,E=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);$===null&&(D=tt),h.baseState=D,h.firstBaseUpdate=P,h.lastBaseUpdate=$,d===null&&(h.shared.lanes=0),Dr|=_,e.lanes=_,e.memoizedState=tt}}function A3(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function S3(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)A3(a[e],n)}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){Xt(n,n.return,E)}}function Sr(e,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var D=a;try{E()}catch(P){Xt(h,D,P)}}}o=o.next}while(o!==d)}}catch(P){Xt(n,n.return,P)}}function b3(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{S3(n,a)}catch(o){Xt(e,e.return,o)}}}function w3(e,n,a){a.props=Aa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,n,o)}}function wa(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=o;break;default:h=o}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){Xt(e,n,d)}}function fn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,n,h)}else a.current=null}function R3(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function D3(e,n,a){try{var o=e.stateNode;$8(o,e.type,a,n),o[_e]=n}catch(h){Xt(e,e.return,h)}}function M3(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function f0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||M3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function d0(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(d0(e,n,a),e=e.sibling;e!==null;)d0(e,n,a),e=e.sibling}function Nu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Nu(e,n,a),e=e.sibling;e!==null;)Nu(e,n,a),e=e.sibling}var Ui=!1,oe=!1,m0=!1,I3=typeof WeakSet=="function"?WeakSet:Set,Ne=null,x3=!1;function b8(e,n){if(e=e.containerInfo,q0=Ju,e=Y2(e),g1(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,D=-1,P=0,$=0,tt=e,G=null;e:for(;;){for(var Y;tt!==a||h!==0&&tt.nodeType!==3||(E=_+h),tt!==d||o!==0&&tt.nodeType!==3||(D=_+o),tt.nodeType===3&&(_+=tt.nodeValue.length),(Y=tt.firstChild)!==null;)G=tt,tt=Y;for(;;){if(tt===e)break e;if(G===a&&++P===h&&(E=_),G===d&&++$===o&&(D=_),(Y=tt.nextSibling)!==null)break;tt=G,G=tt.parentNode}tt=Y}a=E===-1||D===-1?null:{start:E,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(H0={focusedElem:e,selectionRange:a},Ju=!1,Ne=n;Ne!==null;)if(n=Ne,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ne=e;else for(;Ne!==null;){switch(n=Ne,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var mt=Aa(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(mt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(At){Xt(a,a.return,At)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)K0(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":K0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ne=e;break}Ne=n.return}return mt=x3,x3=!1,mt}function V3(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:zi(e,a),o&4&&Bo(5,a);break;case 1:if(zi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){Xt(a,a.return,E)}else{var h=Aa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xt(a,a.return,E)}}o&64&&b3(a),o&512&&wa(a,a.return);break;case 3:if(zi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{S3(o,e)}catch(E){Xt(a,a.return,E)}}break;case 26:zi(e,a),o&512&&wa(a,a.return);break;case 27:case 5:zi(e,a),n===null&&o&4&&R3(a),o&512&&wa(a,a.return);break;case 12:zi(e,a);break;case 13:zi(e,a),o&4&&k3(e,a);break;case 22:if(h=a.memoizedState!==null||Ui,!h){n=n!==null&&n.memoizedState!==null||oe;var d=Ui,_=oe;Ui=h,(oe=n)&&!_?br(e,a,(a.subtreeFlags&8772)!==0):zi(e,a),Ui=d,oe=_}o&512&&(a.memoizedProps.mode==="manual"?wa(a,a.return):fn(a,a.return));break;default:zi(e,a)}}function N3(e){var n=e.alternate;n!==null&&(e.alternate=null,N3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&na(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,dn=!1;function Li(e,n,a){for(a=a.child;a!==null;)O3(e,n,a),a=a.sibling}function O3(e,n,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(tr,a)}catch{}switch(a.tag){case 26:oe||fn(a,n),Li(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:oe||fn(a,n);var o=ge,h=dn;for(ge=a.stateNode,Li(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);na(a),ge=o,dn=h;break;case 5:oe||fn(a,n);case 6:h=ge;var d=dn;if(ge=null,Li(e,n,a),ge=h,dn=d,ge!==null)if(dn)try{e=ge,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){Xt(a,n,_)}else try{ge.removeChild(a.stateNode)}catch(_){Xt(a,n,_)}break;case 18:ge!==null&&(dn?(n=ge,a=a.stateNode,n.nodeType===8?Q0(n.parentNode,a):n.nodeType===1&&Q0(n,a),rl(n)):Q0(ge,a.stateNode));break;case 4:o=ge,h=dn,ge=a.stateNode.containerInfo,dn=!0,Li(e,n,a),ge=o,dn=h;break;case 0:case 11:case 14:case 15:oe||Sr(2,a,n),oe||Sr(4,a,n),Li(e,n,a);break;case 1:oe||(fn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w3(a,n,o)),Li(e,n,a);break;case 21:Li(e,n,a);break;case 22:oe||fn(a,n),oe=(o=oe)||a.memoizedState!==null,Li(e,n,a),oe=o;break;default:Li(e,n,a)}}function k3(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(a){Xt(n,n.return,a)}}function w8(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I3),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I3),n;default:throw Error(s(435,e.tag))}}function p0(e,n){var a=w8(e);n.forEach(function(o){var h=P8.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function In(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:ge=E.stateNode,dn=!1;break t;case 3:ge=E.stateNode.containerInfo,dn=!0;break t;case 4:ge=E.stateNode.containerInfo,dn=!0;break t}E=E.return}if(ge===null)throw Error(s(160));O3(d,_,h),ge=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)U3(n,e),n=n.sibling}var qn=null;function U3(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),xn(e),o&4&&(Sr(3,e,e.return),Bo(3,e),Sr(5,e,e.return));break;case 1:In(n,e),xn(e),o&512&&(oe||a===null||fn(a,a.return)),o&64&&Ui&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=qn;if(In(n,e),xn(e),o&512&&(oe||a===null||fn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[or]||d[Me]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Pe(d,o,a),d[Me]=e,ee(d),o=d;break t;case"link":var _=Rh("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(o),Pe(d,o,a),h.head.appendChild(d);break;case"meta":if(_=Rh("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(o),Pe(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Me]=e,ee(d),o=d}e.stateNode=o}else Dh(h,e.type,e.stateNode);else e.stateNode=wh(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Dh(h,e.type,e.stateNode):wh(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&D3(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var D=h.firstChild;D;){var P=D.nextSibling,$=D.nodeName;D[or]||$==="HEAD"||$==="BODY"||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&D.rel.toLowerCase()==="stylesheet"||h.removeChild(D),D=P}for(var tt=e.type,G=h.attributes;G.length;)h.removeAttributeNode(G[0]);Pe(h,tt,d),h[Me]=e,h[_e]=d}catch(mt){Xt(e,e.return,mt)}}case 5:if(In(n,e),xn(e),o&512&&(oe||a===null||fn(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(mt){Xt(e,e.return,mt)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,D3(e,h,a!==null?a.memoizedProps:h)),o&1024&&(m0=!0);break;case 6:if(In(n,e),xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(mt){Xt(e,e.return,mt)}}break;case 3:if(Xu=null,h=qn,qn=Yu(n.containerInfo),In(n,e),qn=h,xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{rl(n.containerInfo)}catch(mt){Xt(e,e.return,mt)}m0&&(m0=!1,L3(e));break;case 4:o=qn,qn=Yu(e.stateNode.containerInfo),In(n,e),xn(e),qn=o;break;case 12:In(n,e),xn(e);break;case 13:In(n,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(S0=en()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,p0(e,o)));break;case 22:if(o&512&&(oe||a===null||fn(a,a.return)),D=e.memoizedState!==null,P=a!==null&&a.memoizedState!==null,$=Ui,tt=oe,Ui=$||D,oe=tt||P,In(n,e),oe=tt,Ui=$,xn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=D?n._visibility&-2:n._visibility|1,D&&(n=Ui||oe,a===null||P||n||vs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){P=a=n;try{if(h=P.stateNode,D)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=P.stateNode,E=P.memoizedProps.style;var Y=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(mt){Xt(P,P.return,mt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=D?"":P.memoizedProps}catch(mt){Xt(P,P.return,mt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,p0(e,a))));break;case 19:In(n,e),xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,p0(e,o)));break;case 21:break;default:In(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(M3(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var h=o.stateNode,d=f0(e);Nu(e,d,h);break;case 5:var _=o.stateNode;o.flags&32&&(En(_,""),o.flags&=-33);var E=f0(e);Nu(e,E,_);break;case 3:case 4:var D=o.stateNode.containerInfo,P=f0(e);d0(e,P,D);break;default:throw Error(s(161))}}}catch($){Xt(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L3(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;L3(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V3(e,n.alternate,n),n=n.sibling}function vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sr(4,n,n.return),vs(n);break;case 1:fn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w3(n,n.return,a),vs(n);break;case 26:case 27:case 5:fn(n,n.return),vs(n);break;case 22:fn(n,n.return),n.memoizedState===null&&vs(n);break;default:vs(n)}e=e.sibling}}function br(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:br(h,d,a),Bo(4,d);break;case 1:if(br(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(P){Xt(o,o.return,P)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)A3(D[h],E)}catch(P){Xt(o,o.return,P)}}a&&_&64&&b3(d),wa(d,d.return);break;case 26:case 27:case 5:br(h,d,a),a&&o===null&&_&4&&R3(d),wa(d,d.return);break;case 12:br(h,d,a);break;case 13:br(h,d,a),a&&_&4&&k3(h,d);break;case 22:d.memoizedState===null&&br(h,d,a),wa(d,d.return);break;default:br(h,d,a)}n=n.sibling}}function g0(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Io(a))}function y0(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e))}function wr(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)z3(e,n,a,o),n=n.sibling}function z3(e,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:wr(e,n,a,o),h&2048&&Bo(9,n);break;case 3:wr(e,n,a,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e)));break;case 12:if(h&2048){wr(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(D){Xt(n,n.return,D)}}else wr(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?wr(e,n,a,o):jo(e,n):d._visibility&4?wr(e,n,a,o):(d._visibility|=4,_s(e,n,a,o,(n.subtreeFlags&10256)!==0)),h&2048&&g0(n.alternate,n);break;case 24:wr(e,n,a,o),h&2048&&y0(n.alternate,n);break;default:wr(e,n,a,o)}}function _s(e,n,a,o,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,_=n,E=a,D=o,P=_.flags;switch(_.tag){case 0:case 11:case 15:_s(d,_,E,D,h),Bo(8,_);break;case 23:break;case 22:var $=_.stateNode;_.memoizedState!==null?$._visibility&4?_s(d,_,E,D,h):jo(d,_):($._visibility|=4,_s(d,_,E,D,h)),h&&P&2048&&g0(_.alternate,_);break;case 24:_s(d,_,E,D,h),h&&P&2048&&y0(_.alternate,_);break;default:_s(d,_,E,D,h)}n=n.sibling}}function jo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,h=o.flags;switch(o.tag){case 22:jo(a,o),h&2048&&g0(o.alternate,o);break;case 24:jo(a,o),h&2048&&y0(o.alternate,o);break;default:jo(a,o)}n=n.sibling}}var qo=8192;function Cs(e){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)P3(e),e=e.sibling}function P3(e){switch(e.tag){case 26:Cs(e),e.flags&qo&&e.memoizedState!==null&&md(qn,e.memoizedState,e.memoizedProps);break;case 5:Cs(e);break;case 3:case 4:var n=qn;qn=Yu(e.stateNode.containerInfo),Cs(e),qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=qo,qo=16777216,Cs(e),qo=n):Cs(e));break;default:Cs(e)}}function B3(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ne=o,q3(o,e)}B3(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j3(e),e=e.sibling}function j3(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&Sr(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Ou(e)):Ho(e);break;default:Ho(e)}}function Ou(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ne=o,q3(o,e)}B3(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sr(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Ou(n));break;default:Ou(n)}e=e.sibling}}function q3(e,n){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:Sr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ne=o;else t:for(a=e;Ne!==null;){o=Ne;var h=o.sibling,d=o.return;if(N3(o),o===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}function R8(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,n,a,o){return new R8(e,n,a,o)}function v0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rr(e,n){var a=e.alternate;return a===null?(a=Vn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function H3(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ku(e,n,a,o,h,d){var _=0;if(o=e,typeof e=="function")v0(e)&&(_=1);else if(typeof e=="string")_=fd(e,a,$e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return Ra(a.children,h,d,n);case y:_=8,h|=24;break;case C:return e=Vn(12,a,n,h|2),e.elementType=C,e.lanes=d,e;case H:return e=Vn(13,a,n,h),e.elementType=H,e.lanes=d,e;case k:return e=Vn(19,a,n,h),e.elementType=k,e.lanes=d,e;case it:return F3(a,h,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case N:_=10;break t;case b:_=9;break t;case O:_=11;break t;case Q:_=14;break t;case nt:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Vn(_,a,n,h),n.elementType=e,n.type=o,n.lanes=d,n}function Ra(e,n,a,o){return e=Vn(7,e,o,n),e.lanes=a,e}function F3(e,n,a,o){e=Vn(22,e,o,n),e.elementType=it,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var _=pr(d,2);_!==null&&(h._pendingVisibility|=2,tn(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var _=pr(d,2);_!==null&&(h._pendingVisibility&=-3,tn(_,d,2))}}};return e.stateNode=h,e}function _0(e,n,a){return e=Vn(6,e,null,n),e.lanes=a,e}function C0(e,n,a){return n=Vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pi(e){e.flags|=4}function G3(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mh(n)){if(n=Mn.current,n!==null&&((zt&4194176)===zt?ri!==null:(zt&62914560)!==zt&&(zt&536870912)===0||n!==ri))throw Ro=b1,l5;e.flags|=8192}}function Uu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ir():536870912,e.lanes|=n,Ts|=n)}function Fo(e,n){if(!Ht)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&31457280,o|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function D8(e,n,a){var o=n.pendingProps;switch(A1(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ne(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(Ae),vi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ao(n)?Pi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jn!==null&&(D0(jn),jn=null))),ne(n),null;case 26:return a=n.memoizedState,e===null?(Pi(n),a!==null?(ne(n),G3(n,a)):(ne(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Pi(n),ne(n),G3(n,a)):(ne(n),n.flags&=-16777217):(e.memoizedProps!==o&&Pi(n),ne(n),n.flags&=-16777217),null;case 27:ja(n),a=vn.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ne(n),null}e=$e.current,Ao(n)?s5(n):(e=Eh(h,o,a),n.stateNode=e,Pi(n))}return ne(n),null;case 5:if(ja(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ne(n),null}if(e=$e.current,Ao(n))s5(n);else{switch(h=Ku(vn.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Me]=n,e[_e]=o;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(Pe(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Pi(n)}}return ne(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Pi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=vn.current,Ao(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,h=Je,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Me]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ph(e.nodeValue,a)),e||ya(n)}else e=Ku(e).createTextNode(o),e[Me]=n,n.stateNode=e}return ne(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ao(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Me]=n}else So(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ne(n),h=!1}else jn!==null&&(D0(jn),jn=null),h=!0;if(!h)return n.flags&256?(xi(n),n):(xi(n),null)}if(xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Uu(n,n.updateQueue),ne(n),null;case 4:return vi(),e===null&&P0(n.stateNode.containerInfo),ne(n),null;case 10:return ki(n.type),ne(n),null;case 19:if(ae(Te),h=n.memoizedState,h===null)return ne(n),null;if(o=(n.flags&128)!==0,d=h.rendering,d===null)if(o)Fo(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=_u(e),d!==null){for(n.flags|=128,Fo(h,!1),e=d.updateQueue,n.updateQueue=e,Uu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)H3(a,e),a=a.sibling;return Kt(Te,Te.current&1|2),n.child}e=e.sibling}h.tail!==null&&en()>Lu&&(n.flags|=128,o=!0,Fo(h,!1),n.lanes=4194304)}else{if(!o)if(e=_u(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Uu(n,e),Fo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ht)return ne(n),null}else 2*en()-h.renderingStartTime>Lu&&a!==536870912&&(n.flags|=128,o=!0,Fo(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=en(),n.sibling=null,e=Te.current,Kt(Te,o?e&1|2:e&1),n):(ne(n),null);case 22:case 23:return xi(n),R1(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),a=n.updateQueue,a!==null&&Uu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ae(_a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(Ae),ne(n),null;case 25:return null}throw Error(s(156,n.tag))}function M8(e,n){switch(A1(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(Ae),vi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ja(n),null;case 13:if(xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));So()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(Te),null;case 4:return vi(),null;case 10:return ki(n.type),null;case 22:case 23:return xi(n),R1(),e!==null&&ae(_a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(Ae),null;case 25:return null;default:return null}}function Q3(e,n){switch(A1(n),n.tag){case 3:ki(Ae),vi();break;case 26:case 27:case 5:ja(n);break;case 4:vi();break;case 13:xi(n);break;case 19:ae(Te);break;case 10:ki(n.type);break;case 22:case 23:xi(n),R1(),e!==null&&ae(_a);break;case 24:ki(Ae)}}var I8={getCacheForType:function(e){var n=Fe(Ae),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},x8=typeof WeakMap=="function"?WeakMap:Map,ie=0,Zt=null,It=null,zt=0,Wt=0,mn=null,Bi=!1,Es=!1,E0=!1,ji=0,le=0,Dr=0,Da=0,T0=0,Nn=0,Ts=0,Go=null,si=null,A0=!1,S0=0,Lu=1/0,zu=null,Mr=null,Pu=!1,Ma=null,Qo=0,b0=0,w0=null,Ko=0,R0=null;function pn(){if((ie&2)!==0&&zt!==0)return zt&-zt;if(S.T!==null){var e=ds;return e!==0?e:k0()}return Gl()}function K3(){Nn===0&&(Nn=(zt&536870912)===0||Ht?ro():536870912);var e=Mn.current;return e!==null&&(e.flags|=32),Nn}function tn(e,n,a){(e===Zt&&Wt===2||e.cancelPendingCommit!==null)&&(As(e,0),qi(e,zt,Nn,!1)),ce(e,a),((ie&2)===0||e!==Zt)&&(e===Zt&&((ie&2)===0&&(Da|=a),le===4&&qi(e,zt,Nn,!1)),oi(e))}function Y3(e,n,a){if((ie&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||nr(e,n),h=o?O8(e,n):x0(e,n,!0),d=o;do{if(h===0){Es&&!o&&qi(e,n,0,!1);break}else if(h===6)qi(e,n,0,!Bi);else{if(a=e.current.alternate,d&&!V8(a)){h=x0(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;h=Go;var D=E.current.memoizedState.isDehydrated;if(D&&(As(E,_).flags|=256),_=x0(E,_,!1),_!==2){if(E0&&!D){E.errorRecoveryDisabledLanes|=d,Da|=d,h=4;break t}d=si,si=h,d!==null&&D0(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){As(e,0),qi(e,n,0,!0);break}t:{switch(o=e,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){qi(o,n,Nn,!Bi);break t}break;case 2:si=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(d=S0+300-en(),10<d)){if(qi(o,n,Nn,!Bi),_n(o,0)!==0)break t;o.timeoutHandle=vh($3.bind(null,o,a,si,zu,A0,n,Nn,Da,Ts,Bi,2,-0,0),d);break t}$3(o,a,si,zu,A0,n,Nn,Da,Ts,Bi,0,-0,0)}}break}while(!0);oi(e)}function D0(e){si===null?si=e:si.push.apply(si,e)}function $3(e,n,a,o,h,d,_,E,D,P,$,tt,G){var Y=n.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(Jo={stylesheets:null,count:0,unsuspend:dd},P3(n),n=pd(),n!==null)){e.cancelPendingCommit=n(nh.bind(null,e,a,o,h,_,E,D,1,tt,G)),qi(e,d,_,!P);return}nh(e,a,o,h,_,E,D,$,tt,G)}function V8(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,o){n&=~T0,n&=~Da,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var d=31-Xe(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&rr(e,a,n)}function Bu(){return(ie&6)===0?(Yo(0),!1):!0}function M0(){if(It!==null){if(Wt===0)var e=It.return;else e=It,Oi=Sa=null,k1(e),hs=null,Do=0,e=It;for(;e!==null;)Q3(e.alternate,e),e=e.return;It=null}}function As(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Z8(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),M0(),Zt=e,It=a=Rr(e.current,null),zt=n,Wt=0,mn=null,Bi=!1,Es=nr(e,n),E0=!1,Ts=Nn=T0=Da=Dr=le=0,si=Go=null,A0=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-Xe(o),d=1<<h;n|=e[h],o&=~d}return ji=n,cu(),a}function X3(e,n){Dt=null,S.H=ai,n===wo?(n=h5(),Wt=3):n===l5?(n=h5(),Wt=4):Wt=n===u3?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mn=n,It===null&&(le=1,Iu(e,wn(n,e.current)))}function Z3(){var e=S.H;return S.H=ai,e===null?ai:e}function W3(){var e=S.A;return S.A=I8,e}function I0(){le=4,Bi||(zt&4194176)!==zt&&Mn.current!==null||(Es=!0),(Dr&134217727)===0&&(Da&134217727)===0||Zt===null||qi(Zt,zt,Nn,!1)}function x0(e,n,a){var o=ie;ie|=2;var h=Z3(),d=W3();(Zt!==e||zt!==n)&&(zu=null,As(e,n)),n=!1;var _=le;t:do try{if(Wt!==0&&It!==null){var E=It,D=mn;switch(Wt){case 8:M0(),_=6;break t;case 3:case 2:case 6:Mn.current===null&&(n=!0);var P=Wt;if(Wt=0,mn=null,Ss(e,E,D,P),a&&Es){_=0;break t}break;default:P=Wt,Wt=0,mn=null,Ss(e,E,D,P)}}N8(),_=le;break}catch($){X3(e,$)}while(!0);return n&&e.shellSuspendCounter++,Oi=Sa=null,ie=o,S.H=h,S.A=d,It===null&&(Zt=null,zt=0,cu()),_}function N8(){for(;It!==null;)J3(It)}function O8(e,n){var a=ie;ie|=2;var o=Z3(),h=W3();Zt!==e||zt!==n?(zu=null,Lu=en()+500,As(e,n)):Es=nr(e,n);t:do try{if(Wt!==0&&It!==null){n=It;var d=mn;e:switch(Wt){case 1:Wt=0,mn=null,Ss(e,n,d,1);break;case 2:if(u5(d)){Wt=0,mn=null,th(n);break}n=function(){Wt===2&&Zt===e&&(Wt=7),oi(e)},d.then(n,n);break t;case 3:Wt=7;break t;case 4:Wt=5;break t;case 7:u5(d)?(Wt=0,mn=null,th(n)):(Wt=0,mn=null,Ss(e,n,d,7));break;case 5:var _=null;switch(It.tag){case 26:_=It.memoizedState;case 5:case 27:var E=It;if(!_||Mh(_)){Wt=0,mn=null;var D=E.sibling;if(D!==null)It=D;else{var P=E.return;P!==null?(It=P,ju(P)):It=null}break e}}Wt=0,mn=null,Ss(e,n,d,5);break;case 6:Wt=0,mn=null,Ss(e,n,d,6);break;case 8:M0(),le=6;break t;default:throw Error(s(462))}}k8();break}catch($){X3(e,$)}while(!0);return Oi=Sa=null,S.H=o,S.A=h,ie=a,It!==null?0:(Zt=null,zt=0,cu(),le)}function k8(){for(;It!==null&&!a1();)J3(It)}function J3(e){var n=E3(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?ju(e):It=n}function th(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=p3(a,n,n.pendingProps,n.type,void 0,zt);break;case 11:n=p3(a,n,n.pendingProps,n.type.render,n.ref,zt);break;case 5:k1(n);default:Q3(a,n),n=It=H3(n,ji),n=E3(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?ju(e):It=n}function Ss(e,n,a,o){Oi=Sa=null,k1(n),hs=null,Do=0;var h=n.return;try{if(A8(e,h,n,a,zt)){le=1,Iu(e,wn(a,e.current)),It=null;return}}catch(d){if(h!==null)throw It=h,d;le=1,Iu(e,wn(a,e.current)),It=null;return}n.flags&32768?(Ht||o===1?e=!0:Es||(zt&536870912)!==0?e=!1:(Bi=e=!0,(o===2||o===3||o===6)&&(o=Mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),eh(n,e)):ju(n)}function ju(e){var n=e;do{if((n.flags&32768)!==0){eh(n,Bi);return}e=n.return;var a=D8(n.alternate,n,ji);if(a!==null){It=a;return}if(n=n.sibling,n!==null){It=n;return}It=n=e}while(n!==null);le===0&&(le=5)}function eh(e,n){do{var a=M8(e.alternate,e);if(a!==null){a.flags&=32767,It=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){It=e;return}It=e=a}while(e!==null);le=6,It=null}function nh(e,n,a,o,h,d,_,E,D,P){var $=S.T,tt=ut.p;try{ut.p=2,S.T=null,U8(e,n,a,o,tt,h,d,_,E,D,P)}finally{S.T=$,ut.p=tt}}function U8(e,n,a,o,h,d,_,E){do bs();while(Ma!==null);if((ie&6)!==0)throw Error(s(327));var D=e.finishedWork;if(o=e.finishedLanes,D===null)return null;if(e.finishedWork=null,e.finishedLanes=0,D===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var P=D.lanes|D.childLanes;if(P|=C1,Hl(e,o,P,d,_,E),e===Zt&&(It=Zt=null,zt=0),(D.subtreeFlags&10256)===0&&(D.flags&10256)===0||Pu||(Pu=!0,b0=P,w0=a,B8(_i,function(){return bs(),null})),a=(D.flags&15990)!==0,(D.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=ut.p,ut.p=2,_=ie,ie|=4,b8(e,D),U3(D,e),s8(H0,e.containerInfo),Ju=!!q0,H0=q0=null,e.current=D,V3(e,D.alternate,D),to(),ie=_,ut.p=d,S.T=a):e.current=D,Pu?(Pu=!1,Ma=e,Qo=o):ih(e,P),P=e.pendingLanes,P===0&&(Mr=null),no(D.stateNode),oi(e),n!==null)for(h=e.onRecoverableError,D=0;D<n.length;D++)P=n[D],h(P.value,{componentStack:P.stack});return(Qo&3)!==0&&bs(),P=e.pendingLanes,(o&4194218)!==0&&(P&42)!==0?e===R0?Ko++:(Ko=0,R0=e):Ko=0,Yo(0),null}function ih(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Io(n)))}function bs(){if(Ma!==null){var e=Ma,n=b0;b0=0;var a=Fl(Qo),o=S.T,h=ut.p;try{if(ut.p=32>a?32:a,S.T=null,Ma===null)var d=!1;else{a=w0,w0=null;var _=Ma,E=Qo;if(Ma=null,Qo=0,(ie&6)!==0)throw Error(s(331));var D=ie;if(ie|=4,j3(_.current),z3(_,_.current,E,a),ie=D,Yo(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(tr,_)}catch{}d=!0}return d}finally{ut.p=h,S.T=o,ih(e,n)}}return!1}function rh(e,n,a){n=wn(a,n),n=$1(e.stateNode,n,2),e=Ar(e,n,2),e!==null&&(ce(e,2),oi(e))}function Xt(e,n,a){if(e.tag===3)rh(e,e,a);else for(;n!==null;){if(n.tag===3){rh(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mr===null||!Mr.has(o))){e=wn(a,e),a=o3(2),o=Ar(n,a,2),o!==null&&(l3(a,o,n,e),ce(o,2),oi(o));break}}n=n.return}}function V0(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new x8;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(E0=!0,h.add(a),e=L8.bind(null,e,n,a),n.then(e,e))}function L8(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(zt&a)===a&&(le===4||le===3&&(zt&62914560)===zt&&300>en()-S0?(ie&2)===0&&As(e,0):T0|=a,Ts===zt&&(Ts=0)),oi(e)}function ah(e,n){n===0&&(n=ir()),e=pr(e,n),e!==null&&(ce(e,n),oi(e))}function z8(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ah(e,a)}function P8(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ah(e,a)}function B8(e,n){return Jr(e,n)}var qu=null,ws=null,N0=!1,Hu=!1,O0=!1,Ia=0;function oi(e){e!==ws&&e.next===null&&(ws===null?qu=ws=e:ws=ws.next=e),Hu=!0,N0||(N0=!0,q8(j8))}function Yo(e,n){if(!O0&&Hu){O0=!0;do for(var a=!1,o=qu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-Xe(42|e)+1)-1,d&=h&~(_&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,lh(o,d))}else d=zt,d=_n(o,o===Zt?d:0),(d&3)===0||nr(o,d)||(a=!0,lh(o,d));o=o.next}while(a);O0=!1}}function j8(){Hu=N0=!1;var e=0;Ia!==0&&(X8()&&(e=Ia),Ia=0);for(var n=en(),a=null,o=qu;o!==null;){var h=o.next,d=sh(o,n);d===0?(o.next=null,a===null?qu=h:a.next=h,h===null&&(ws=a)):(a=o,(e!==0||(d&3)!==0)&&(Hu=!0)),o=h}Yo(e)}function sh(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-Xe(d),E=1<<_,D=h[_];D===-1?((E&a)===0||(E&o)!==0)&&(h[_]=Fa(E,n)):D<=n&&(e.expiredLanes|=E),d&=~E}if(n=Zt,a=zt,a=_n(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Wt===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ha(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||nr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ha(o),Fl(a)){case 2:case 8:a=De;break;case 32:a=_i;break;case 268435456:a=eo;break;default:a=_i}return o=oh.bind(null,e),a=Jr(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ha(o),e.callbackPriority=2,e.callbackNode=null,2}function oh(e,n){var a=e.callbackNode;if(bs()&&e.callbackNode!==a)return null;var o=zt;return o=_n(e,e===Zt?o:0),o===0?null:(Y3(e,o,n),sh(e,en()),e.callbackNode!=null&&e.callbackNode===a?oh.bind(null,e):null)}function lh(e,n){if(bs())return null;Y3(e,n,!0)}function q8(e){W8(function(){(ie&6)!==0?Jr(ve,e):e()})}function k0(){return Ia===0&&(Ia=ro()),Ia}function uh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function ch(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function H8(e,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var d=uh((h[_e]||null).action),_=o.submitter;_&&(n=(n=_[_e]||null)?uh(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var E=new Za("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ia!==0){var D=_?ch(h,_):new FormData(h);F1(a,{pending:!0,data:D,method:h.method,action:d},null,D)}}else typeof d=="function"&&(E.preventDefault(),D=_?ch(h,_):new FormData(h),F1(a,{pending:!0,data:D,method:h.method,action:d},d,D))},currentTarget:h}]})}}for(var U0=0;U0<n5.length;U0++){var L0=n5[U0],F8=L0.toLowerCase(),G8=L0[0].toUpperCase()+L0.slice(1);Bn(F8,"on"+G8)}Bn(Z2,"onAnimationEnd"),Bn(W2,"onAnimationIteration"),Bn(J2,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(l8,"onTransitionRun"),Bn(u8,"onTransitionStart"),Bn(c8,"onTransitionCancel"),Bn(t5,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function hh(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],D=E.instance,P=E.currentTarget;if(E=E.listener,D!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch($){Mu($)}h.currentTarget=null,d=D}else for(_=0;_<o.length;_++){if(E=o[_],D=E.instance,P=E.currentTarget,E=E.listener,D!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=P;try{d(h)}catch($){Mu($)}h.currentTarget=null,d=D}}}}function Ot(e,n){var a=n[ea];a===void 0&&(a=n[ea]=new Set);var o=e+"__bubble";a.has(o)||(fh(n,e,2,!1),a.add(o))}function z0(e,n,a){var o=0;n&&(o|=4),fh(a,e,o,n)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function P0(e){if(!e[Fu]){e[Fu]=!0,so.forEach(function(a){a!=="selectionchange"&&(Q8.has(a)||z0(a,!1,e),z0(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fu]||(n[Fu]=!0,z0("selectionchange",!1,n))}}function fh(e,n,a,o){switch(kh(n)){case 2:var h=vd;break;case 8:h=_d;break;default:h=W0}a=h.bind(null,n,a,e),h=void 0,!An||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,a,{capture:!0,passive:h}):e.addEventListener(n,a,!0):h!==void 0?e.addEventListener(n,a,{passive:h}):e.addEventListener(n,a,!1)}function B0(e,n,a,o,h){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(_===4)for(_=o.return;_!==null;){var D=_.tag;if((D===3||D===4)&&(D=_.stateNode.containerInfo,D===h||D.nodeType===8&&D.parentNode===h))return;_=_.return}for(;E!==null;){if(_=Pn(E),_===null)return;if(D=_.tag,D===5||D===6||D===26||D===27){o=d=_;continue t}E=E.parentNode}}o=o.return}$l(function(){var P=d,$=Xa(a),tt=[];t:{var G=e5.get(e);if(G!==void 0){var Y=Za,mt=e;switch(e){case"keypress":if(Wn(a)===0)break t;case"keydown":case"keyup":Y=is;break;case"focusin":mt="focus",Y=ts;break;case"focusout":mt="blur",Y=ts;break;case"beforeblur":case"afterblur":Y=ts;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=f1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=iu;break;case Z2:case W2:case J2:Y=es;break;case t5:Y=au;break;case"scroll":case"scrollend":Y=Xl;break;case"wheel":Y=rs;break;case"copy":case"cut":case"paste":Y=ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=_o;break;case"toggle":case"beforetoggle":Y=ou}var At=(n&4)!==0,ue=!At&&(e==="scroll"||e==="scrollend"),B=At?G!==null?G+"Capture":null:G;At=[];for(var L=P,q;L!==null;){var X=L;if(q=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||q===null||B===null||(X=sa(L,B),X!=null&&At.push(Xo(L,X,q))),ue)break;L=L.return}0<At.length&&(G=new Y(G,mt,null,a,$),tt.push({event:G,listeners:At}))}}if((n&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",G&&a!==Tn&&(mt=a.relatedTarget||a.fromElement)&&(Pn(mt)||mt[Ci]))break t;if((Y||G)&&(G=$.window===$?$:(G=$.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(mt=a.relatedTarget||a.toElement,Y=P,mt=mt?Pn(mt):null,mt!==null&&(ue=st(mt),At=mt.tag,mt!==ue||At!==5&&At!==27&&At!==6)&&(mt=null)):(Y=null,mt=P),Y!==mt)){if(At=Sn,X="onMouseLeave",B="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(At=_o,X="onPointerLeave",B="onPointerEnter",L="pointer"),ue=Y==null?G:lr(Y),q=mt==null?G:lr(mt),G=new At(X,L+"leave",Y,a,$),G.target=ue,G.relatedTarget=q,X=null,Pn($)===P&&(At=new At(B,L+"enter",mt,a,$),At.target=q,At.relatedTarget=ue,X=At),ue=X,Y&&mt)e:{for(At=Y,B=mt,L=0,q=At;q;q=Rs(q))L++;for(q=0,X=B;X;X=Rs(X))q++;for(;0<L-q;)At=Rs(At),L--;for(;0<q-L;)B=Rs(B),q--;for(;L--;){if(At===B||B!==null&&At===B.alternate)break e;At=Rs(At),B=Rs(B)}At=null}else At=null;Y!==null&&dh(tt,G,Y,At,!1),mt!==null&&ue!==null&&dh(tt,ue,mt,At,!0)}}t:{if(G=P?lr(P):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var ft=B2;else if(Ee(G))if(j2)ft=r8;else{ft=n8;var Mt=e8}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?P&&ho(P.elementType)&&(ft=B2):ft=i8;if(ft&&(ft=ft(e,P))){Di(tt,ft,a,$);break t}Mt&&Mt(e,G,P),e==="focusout"&&P&&G.type==="number"&&P.memoizedProps.value!=null&&$a(G,"number",G.value)}switch(Mt=P?lr(P):window,e){case"focusin":(Ee(Mt)||Mt.contentEditable==="true")&&(as=Mt,y1=P,To=null);break;case"focusout":To=y1=as=null;break;case"mousedown":v1=!0;break;case"contextmenu":case"mouseup":case"dragend":v1=!1,$2(tt,a,$);break;case"selectionchange":if(o8)break;case"keydown":case"keyup":$2(tt,a,$)}var gt;if(ei)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else Ut?K(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(v&&a.locale!=="ko"&&(Ut||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ut&&(gt=mo()):(Zn=$,mr="value"in Zn?Zn.value:Zn.textContent,Ut=!0)),Mt=Gu(P,_t),0<Mt.length&&(_t=new yo(_t,e,null,a,$),tt.push({event:_t,listeners:Mt}),gt?_t.data=gt:(gt=at(a),gt!==null&&(_t.data=gt)))),(gt=g?Ce(e,a):Lt(e,a))&&(_t=Gu(P,"onBeforeInput"),0<_t.length&&(Mt=new yo("onBeforeInput","beforeinput",null,a,$),tt.push({event:Mt,listeners:_t}),Mt.data=gt)),H8(tt,e,P,a,$)}hh(tt,n)})}function Xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gu(e,n){for(var a=n+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=sa(e,a),h!=null&&o.unshift(Xo(e,h,d)),h=sa(e,n),h!=null&&o.push(Xo(e,h,d))),e=e.return}return o}function Rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,n,a,o,h){for(var d=n._reactName,_=[];a!==null&&a!==o;){var E=a,D=E.alternate,P=E.stateNode;if(E=E.tag,D!==null&&D===o)break;E!==5&&E!==26&&E!==27||P===null||(D=P,h?(P=sa(a,d),P!=null&&_.unshift(Xo(a,P,D))):h||(P=sa(a,d),P!=null&&_.push(Xo(a,P,D)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var K8=/\r\n?/g,Y8=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(K8,`
`).replace(Y8,"")}function ph(e,n){return n=mh(n),mh(e)===n}function Qu(){}function $t(e,n,a,o,h,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||En(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&En(e,""+o);break;case"className":hr(e,"class",o);break;case"tabIndex":hr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":hr(e,a,o);break;case"style":Yl(e,o,d);break;case"data":if(n!=="object"){hr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xn(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&$t(e,n,"name",h.name,h,null),$t(e,n,"formEncType",h.formEncType,h,null),$t(e,n,"formMethod",h.formMethod,h,null),$t(e,n,"formTarget",h.formTarget,h,null)):($t(e,n,"encType",h.encType,h,null),$t(e,n,"method",h.method,h,null),$t(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xn(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qu);break;case"onScroll":o!=null&&Ot("scroll",e);break;case"onScrollEnd":o!=null&&Ot("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Xn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ot("beforetoggle",e),Ot("toggle",e),cr(e,"popover",o);break;case"xlinkActuate":Cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Cn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Cn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Cn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Cn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":cr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=c1.get(a)||a,cr(e,a,o))}}function j0(e,n,a,o,h,d){switch(a){case"style":Yl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?En(e,o):(typeof o=="number"||typeof o=="bigint")&&En(e,""+o);break;case"onScroll":o!=null&&Ot("scroll",e);break;case"onScrollEnd":o!=null&&Ot("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),d=e[_e]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):cr(e,a,o)}}}function Pe(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",e),Ot("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,d,_,a,null)}}h&&$t(e,n,"srcSet",a.srcSet,a,null),o&&$t(e,n,"src",a.src,a,null);return;case"input":Ot("invalid",e);var E=d=_=h=null,D=null,P=null;for(o in a)if(a.hasOwnProperty(o)){var $=a[o];if($!=null)switch(o){case"name":h=$;break;case"type":_=$;break;case"checked":D=$;break;case"defaultChecked":P=$;break;case"value":d=$;break;case"defaultValue":E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:$t(e,n,o,$,a,null)}}ra(e,d,E,D,P,_,h,!1),ia(e);return;case"select":Ot("invalid",e),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:$t(e,n,h,E,a,null)}n=d,a=_,e.multiple=!!o,n!=null?qt(e,!!o,n,!1):a!=null&&qt(e,!!o,a,!0);return;case"textarea":Ot("invalid",e),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$t(e,n,_,E,a,null)}dr(e,o,h,d),ia(e);return;case"option":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:$t(e,n,D,o,a,null)}return;case"dialog":Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":Ot("load",e);break;case"video":case"audio":for(o=0;o<$o.length;o++)Ot($o[o],e);break;case"image":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"embed":case"source":case"link":Ot("error",e),Ot("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:$t(e,n,P,o,a,null)}return;default:if(ho(n)){for($ in a)a.hasOwnProperty($)&&(o=a[$],o!==void 0&&j0(e,n,$,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&$t(e,n,E,o,a,null))}function $8(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,D=null,P=null,$=null;for(Y in a){var tt=a[Y];if(a.hasOwnProperty(Y)&&tt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=tt;default:o.hasOwnProperty(Y)||$t(e,n,Y,null,o,tt)}}for(var G in o){var Y=o[G];if(tt=a[G],o.hasOwnProperty(G)&&(Y!=null||tt!=null))switch(G){case"type":d=Y;break;case"name":h=Y;break;case"checked":P=Y;break;case"defaultChecked":$=Y;break;case"value":_=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Y!==tt&&$t(e,n,G,Y,o,tt)}}fr(e,_,E,D,P,$,d,h);return;case"select":Y=_=E=G=null;for(d in a)if(D=a[d],a.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":Y=D;default:o.hasOwnProperty(d)||$t(e,n,d,null,o,D)}for(h in o)if(d=o[h],D=a[h],o.hasOwnProperty(h)&&(d!=null||D!=null))switch(h){case"value":G=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==D&&$t(e,n,h,d,o,D)}n=E,a=_,o=Y,G!=null?qt(e,!!a,G,!1):!!o!=!!a&&(n!=null?qt(e,!!a,n,!0):qt(e,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$t(e,n,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$t(e,n,_,h,o,d)}aa(e,G,Y);return;case"option":for(var mt in a)if(G=a[mt],a.hasOwnProperty(mt)&&G!=null&&!o.hasOwnProperty(mt))switch(mt){case"selected":e.selected=!1;break;default:$t(e,n,mt,null,o,G)}for(D in o)if(G=o[D],Y=a[D],o.hasOwnProperty(D)&&G!==Y&&(G!=null||Y!=null))switch(D){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:$t(e,n,D,G,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var At in a)G=a[At],a.hasOwnProperty(At)&&G!=null&&!o.hasOwnProperty(At)&&$t(e,n,At,null,o,G);for(P in o)if(G=o[P],Y=a[P],o.hasOwnProperty(P)&&G!==Y&&(G!=null||Y!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:$t(e,n,P,G,o,Y)}return;default:if(ho(n)){for(var ue in a)G=a[ue],a.hasOwnProperty(ue)&&G!==void 0&&!o.hasOwnProperty(ue)&&j0(e,n,ue,void 0,o,G);for($ in o)G=o[$],Y=a[$],!o.hasOwnProperty($)||G===Y||G===void 0&&Y===void 0||j0(e,n,$,G,o,Y);return}}for(var B in a)G=a[B],a.hasOwnProperty(B)&&G!=null&&!o.hasOwnProperty(B)&&$t(e,n,B,null,o,G);for(tt in o)G=o[tt],Y=a[tt],!o.hasOwnProperty(tt)||G===Y||G==null&&Y==null||$t(e,n,tt,G,o,Y)}var q0=null,H0=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function F0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var G0=null;function X8(){var e=window.event;return e&&e.type==="popstate"?e===G0?!1:(G0=e,!0):(G0=null,!1)}var vh=typeof setTimeout=="function"?setTimeout:void 0,Z8=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,W8=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(e){return _h.resolve(null).then(e).catch(J8)}:vh;function J8(e){setTimeout(function(){throw e})}function Q0(e,n){var a=n,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(o===0){e.removeChild(h),rl(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=h}while(a);rl(n)}function K0(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":K0(a),na(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function td(e,n,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[or])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function ed(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Hn(e.nextSibling),e===null))return null;return e}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Eh(e,n,a){switch(n=Ku(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var On=new Map,Th=new Set;function Yu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Hi=ut.d;ut.d={f:nd,r:id,D:rd,C:ad,L:sd,m:od,X:ud,S:ld,M:cd};function nd(){var e=Hi.f(),n=Bu();return e||n}function id(e){var n=Ei(e);n!==null&&n.tag===5&&n.type==="form"?$5(n):Hi.r(e)}var Ds=typeof document>"u"?null:document;function Ah(e,n,a){var o=Ds;if(o&&typeof n=="string"&&n){var h=se(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Th.has(h)||(Th.add(h),e={rel:e,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),Pe(n,"link",e),ee(n),o.head.appendChild(n)))}}function rd(e){Hi.D(e),Ah("dns-prefetch",e,null)}function ad(e,n){Hi.C(e,n),Ah("preconnect",e,n)}function sd(e,n,a){Hi.L(e,n,a);var o=Ds;if(o&&e&&n){var h='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+se(a.imageSizes)+'"]')):h+='[href="'+se(e)+'"]';var d=h;switch(n){case"style":d=Ms(e);break;case"script":d=Is(e)}On.has(d)||(e=M({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),On.set(d,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(Zo(d))||n==="script"&&o.querySelector(Wo(d))||(n=o.createElement("link"),Pe(n,"link",e),ee(n),o.head.appendChild(n)))}}function od(e,n){Hi.m(e,n);var a=Ds;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Is(e)}if(!On.has(d)&&(e=M({rel:"modulepreload",href:e},n),On.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(d)))return}o=a.createElement("link"),Pe(o,"link",e),ee(o),a.head.appendChild(o)}}}function ld(e,n,a){Hi.S(e,n,a);var o=Ds;if(o&&e){var h=ur(o).hoistableStyles,d=Ms(e);n=n||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(Zo(d)))E.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":n},a),(a=On.get(d))&&Y0(e,a);var D=_=o.createElement("link");ee(D),Pe(D,"link",e),D._p=new Promise(function(P,$){D.onload=P,D.onerror=$}),D.addEventListener("load",function(){E.loading|=1}),D.addEventListener("error",function(){E.loading|=2}),E.loading|=4,$u(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function ud(e,n){Hi.X(e,n);var a=Ds;if(a&&e){var o=ur(a).hoistableScripts,h=Is(e),d=o.get(h);d||(d=a.querySelector(Wo(h)),d||(e=M({src:e,async:!0},n),(n=On.get(h))&&$0(e,n),d=a.createElement("script"),ee(d),Pe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function cd(e,n){Hi.M(e,n);var a=Ds;if(a&&e){var o=ur(a).hoistableScripts,h=Is(e),d=o.get(h);d||(d=a.querySelector(Wo(h)),d||(e=M({src:e,async:!0,type:"module"},n),(n=On.get(h))&&$0(e,n),d=a.createElement("script"),ee(d),Pe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function Sh(e,n,a,o){var h=(h=vn.current)?Yu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=ur(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ms(a.href);var d=ur(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(Zo(e)))&&!d._p&&(_.instance=d,_.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),d||hd(h,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Is(a),a=ur(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ms(e){return'href="'+se(e)+'"'}function Zo(e){return'link[rel="stylesheet"]['+e+"]"}function bh(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function hd(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Pe(n,"link",a),ee(n),e.head.appendChild(n))}function Is(e){return'[src="'+se(e)+'"]'}function Wo(e){return"script[async]"+e}function wh(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,ee(o),o;var h=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ee(o),Pe(o,"style",h),$u(o,a.precedence,e),n.instance=o;case"stylesheet":h=Ms(a.href);var d=e.querySelector(Zo(h));if(d)return n.state.loading|=4,n.instance=d,ee(d),d;o=bh(a),(h=On.get(h))&&Y0(o,h),d=(e.ownerDocument||e).createElement("link"),ee(d);var _=d;return _._p=new Promise(function(E,D){_.onload=E,_.onerror=D}),Pe(d,"link",o),n.state.loading|=4,$u(d,a.precedence,e),n.instance=d;case"script":return d=Is(a.src),(h=e.querySelector(Wo(d)))?(n.instance=h,ee(h),h):(o=a,(h=On.get(d))&&(o=M({},a),$0(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),ee(h),Pe(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$u(o,a.precedence,e));return n.instance}function $u(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Y0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xu=null;function Rh(e,n,a){if(Xu===null){var o=new Map,h=Xu=new Map;h.set(a,o)}else h=Xu,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[or]||d[Me]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=e+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function Dh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fd(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Jo=null;function dd(){}function md(e,n,a){if(Jo===null)throw Error(s(475));var o=Jo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Ms(a.href),d=e.querySelector(Zo(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,ee(d);return}d=e.ownerDocument||e,a=bh(a),(h=On.get(h))&&Y0(a,h),d=d.createElement("link"),ee(d);var _=d;_._p=new Promise(function(E,D){_.onload=E,_.onerror=D}),Pe(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function pd(){if(Jo===null)throw Error(s(475));var e=Jo;return e.stylesheets&&e.count===0&&X0(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&X0(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zu(){if(this.count--,this.count===0){if(this.stylesheets)X0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wu=null;function X0(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wu=new Map,n.forEach(gd,e),Wu=null,Zu.call(e))}function gd(e,n){if(!(n.state.loading&4)){var a=Wu.get(e);if(a)var o=a.get(null);else{a=new Map,Wu.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=n.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=Zu.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:N,Provider:null,Consumer:null,_currentValue:Rt,_currentValue2:Rt,_threadCount:0};function yd(e,n,a,o,h,d,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ga(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.hiddenUpdates=Ga(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Ih(e,n,a,o,h,d,_,E,D,P,$,tt){return e=new yd(e,n,a,_,E,D,P,tt),n=1,d===!0&&(n|=24),d=Vn(3,null,null,n),e.current=d,d.stateNode=e,n=D1(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},l0(d),e}function xh(e){return e?(e=ls,e):ls}function Vh(e,n,a,o,h,d){h=xh(h),o.context===null?o.context=h:o.pendingContext=h,o=Tr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ar(e,o,n),a!==null&&(tn(a,e,n),Lo(a,e,n))}function Nh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Z0(e,n){Nh(e,n),(e=e.alternate)&&Nh(e,n)}function Oh(e){if(e.tag===13){var n=pr(e,67108864);n!==null&&tn(n,e,67108864),Z0(e,67108864)}}var Ju=!0;function vd(e,n,a,o){var h=S.T;S.T=null;var d=ut.p;try{ut.p=2,W0(e,n,a,o)}finally{ut.p=d,S.T=h}}function _d(e,n,a,o){var h=S.T;S.T=null;var d=ut.p;try{ut.p=8,W0(e,n,a,o)}finally{ut.p=d,S.T=h}}function W0(e,n,a,o){if(Ju){var h=J0(o);if(h===null)B0(e,n,o,tc,a),Uh(e,o);else if(Ed(h,e,n,a,o))o.stopPropagation();else if(Uh(e,o),n&4&&-1<Cd.indexOf(e)){for(;h!==null;){var d=Ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var D=1<<31-Xe(_);E.entanglements[1]|=D,_&=~D}oi(d),(ie&6)===0&&(Lu=en()+500,Yo(0))}}break;case 13:E=pr(d,2),E!==null&&tn(E,d,2),Bu(),Z0(d,2)}if(d=J0(o),d===null&&B0(e,n,o,tc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else B0(e,n,o,null,a)}}function J0(e){return e=Xa(e),t4(e)}var tc=null;function t4(e){if(tc=null,e=Pn(e),e!==null){var n=st(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=W(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pl()){case ve:return 2;case De:return 8;case _i:case Bl:return 32;case eo:return 268435456;default:return 32}default:return 32}}var e4=!1,Ir=null,xr=null,Vr=null,el=new Map,nl=new Map,Nr=[],Cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uh(e,n){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(e,n,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},n!==null&&(n=Ei(n),n!==null&&Oh(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function Ed(e,n,a,o,h){switch(n){case"focusin":return Ir=il(Ir,e,n,a,o,h),!0;case"dragenter":return xr=il(xr,e,n,a,o,h),!0;case"mouseover":return Vr=il(Vr,e,n,a,o,h),!0;case"pointerover":var d=h.pointerId;return el.set(d,il(el.get(d)||null,e,n,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,nl.set(d,il(nl.get(d)||null,e,n,a,o,h)),!0}return!1}function Lh(e){var n=Pn(e.target);if(n!==null){var a=st(n);if(a!==null){if(n=a.tag,n===13){if(n=W(a),n!==null){e.blockedOn=n,sr(e.priority,function(){if(a.tag===13){var o=pn(),h=pr(a,o);h!==null&&tn(h,a,o),Z0(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=J0(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Tn=o,a.target.dispatchEvent(o),Tn=null}else return n=Ei(a),n!==null&&Oh(n),e.blockedOn=a,!1;n.shift()}return!0}function zh(e,n,a){ec(e)&&a.delete(n)}function Td(){e4=!1,Ir!==null&&ec(Ir)&&(Ir=null),xr!==null&&ec(xr)&&(xr=null),Vr!==null&&ec(Vr)&&(Vr=null),el.forEach(zh),nl.forEach(zh)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,e4||(e4=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Td)))}var ic=null;function Ph(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(t4(o||a)===null)continue;break}var d=Ei(a);d!==null&&(e.splice(n,3),n-=3,F1(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function rl(e){function n(D){return nc(D,e)}Ir!==null&&nc(Ir,e),xr!==null&&nc(xr,e),Vr!==null&&nc(Vr,e),el.forEach(n),nl.forEach(n);for(var a=0;a<Nr.length;a++){var o=Nr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)Lh(a),a.blockedOn===null&&Nr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[_e]||null;if(typeof d=="function")_||Ph(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[_e]||null)E=_.formAction;else if(t4(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),Ph(a)}}}function n4(e){this._internalRoot=e}rc.prototype.render=n4.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=pn();Vh(a,o,e,n,null,null)},rc.prototype.unmount=n4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&bs(),Vh(e.current,2,null,e,null,null),Bu(),n[Ci]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Nr.length&&n!==0&&n<Nr[a].priority;a++);Nr.splice(a,0,e),a===0&&Lh(e)}};var Bh=t.version;if(Bh!=="19.0.0")throw Error(s(527,Bh,"19.0.0"));ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=J(n),e=e!==null?lt(e):null,e=e===null?null:e.stateNode,e};var Ad={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Pn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{tr=ac.inject(Ad),He=ac}catch{}}return sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",h=i3,d=r3,_=a3,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Ih(e,1,!1,null,null,a,o,h,d,_,E,null),e[Ci]=n.current,P0(e.nodeType===8?e.parentNode:e),new n4(n)},sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=i3,_=r3,E=a3,D=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),n=Ih(e,1,!0,n,a??null,o,h,d,_,E,D,P),n.context=xh(null),a=n.current,o=pn(),h=Tr(o),h.callback=null,Ar(a,h,o),n.current.lanes=o,ce(n,o),oi(n),e[Ci]=n.current,P0(e),new rc(n)},sl.version="19.0.0",sl}var Xh;function Nd(){if(Xh)return a4.exports;Xh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),a4.exports=Vd(),a4.exports}var Od=Nd();const kd=Ef(Od);var ol={},Zh;function Ud(){if(Zh)return ol;Zh=1,Object.defineProperty(ol,"__esModule",{value:!0}),ol.parse=f,ol.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function f(b,N){const O=new c,H=b.length;if(H<2)return O;const k=(N==null?void 0:N.decode)||C;let Q=0;do{const nt=b.indexOf("=",Q);if(nt===-1)break;const it=b.indexOf(";",Q),yt=it===-1?H:it;if(nt>yt){Q=b.lastIndexOf(";",nt-1)+1;continue}const dt=m(b,Q,nt),Et=p(b,nt,dt),V=b.slice(dt,Et);if(O[V]===void 0){let w=m(b,nt+1,yt),S=p(b,yt,w);const M=k(b.slice(w,S));O[V]=M}Q=yt+1}while(Q<H);return O}function m(b,N,O){do{const H=b.charCodeAt(N);if(H!==32&&H!==9)return N}while(++N<O);return O}function p(b,N,O){for(;N>O;){const H=b.charCodeAt(--N);if(H!==32&&H!==9)return N+1}return O}function y(b,N,O){const H=(O==null?void 0:O.encode)||encodeURIComponent;if(!r.test(b))throw new TypeError(`argument name is invalid: ${b}`);const k=H(N);if(!t.test(k))throw new TypeError(`argument val is invalid: ${N}`);let Q=b+"="+k;if(!O)return Q;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);Q+="; Max-Age="+O.maxAge}if(O.domain){if(!i.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);Q+="; Domain="+O.domain}if(O.path){if(!s.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);Q+="; Path="+O.path}if(O.expires){if(!A(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);Q+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(Q+="; HttpOnly"),O.secure&&(Q+="; Secure"),O.partitioned&&(Q+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":Q+="; Priority=Low";break;case"medium":Q+="; Priority=Medium";break;case"high":Q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":Q+="; SameSite=Strict";break;case"lax":Q+="; SameSite=Lax";break;case"none":Q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return Q}function C(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function A(b){return l.call(b)==="[object Date]"}return ol}Ud();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wh="popstate";function Ld(r={}){function t(l,c){let{pathname:f="/",search:m="",hash:p=""}=za(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),T4("",{pathname:f,search:m,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=l.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof c=="string"?c:vl(c))}function s(l,c){Un(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Pd(t,i,s,r)}function te(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Un(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zd(){return Math.random().toString(36).substring(2,10)}function Jh(r,t){return{usr:r.state,key:r.key,idx:t}}function T4(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?za(t):t,state:i,key:t&&t.key||s||zd()}}function vl({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function za(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function Pd(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,m="POP",p=null,y=C();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function C(){return(f.state||{idx:null}).idx}function A(){m="POP";let k=C(),Q=k==null?null:k-y;y=k,p&&p({action:m,location:H.location,delta:Q})}function b(k,Q){m="PUSH";let nt=T4(H.location,k,Q);i&&i(nt,k),y=C()+1;let it=Jh(nt,y),yt=H.createHref(nt);try{f.pushState(it,"",yt)}catch(dt){if(dt instanceof DOMException&&dt.name==="DataCloneError")throw dt;l.location.assign(yt)}c&&p&&p({action:m,location:H.location,delta:1})}function N(k,Q){m="REPLACE";let nt=T4(H.location,k,Q);i&&i(nt,k),y=C();let it=Jh(nt,y),yt=H.createHref(nt);f.replaceState(it,"",yt),c&&p&&p({action:m,location:H.location,delta:0})}function O(k){let Q=l.location.origin!=="null"?l.location.origin:l.location.href,nt=typeof k=="string"?k:vl(k);return nt=nt.replace(/ $/,"%20"),te(Q,`No window.location.(origin|href) available to create URL for href: ${nt}`),new URL(nt,Q)}let H={get action(){return m},get location(){return r(l,f)},listen(k){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Wh,A),p=k,()=>{l.removeEventListener(Wh,A),p=null}},createHref(k){return t(l,k)},createURL:O,encodeLocation(k){let Q=O(k);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:b,replace:N,go(k){return f.go(k)}};return H}function Tf(r,t,i="/"){return Bd(r,t,i,!1)}function Bd(r,t,i,s){let l=typeof t=="string"?za(t):t,c=Qi(l.pathname||"/",i);if(c==null)return null;let f=Af(r);jd(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=Wd(c);m=Xd(f[p],y,s)}return m}function Af(r,t=[],i=[],s=""){let l=(c,f,m)=>{let p={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(te(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Fi([s,p.relativePath]),C=i.concat(p);c.children&&c.children.length>0&&(te(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Af(c.children,t,C,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:Yd(y,c.index),routesMeta:C})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,f);else for(let p of Sf(c.path))l(c,f,p)}),t}function Sf(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Sf(s.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function jd(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:$d(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var qd=/^:[\w-]+$/,Hd=3,Fd=2,Gd=1,Qd=10,Kd=-2,t6=r=>r==="*";function Yd(r,t){let i=r.split("/"),s=i.length;return i.some(t6)&&(s+=Kd),t&&(s+=Fd),i.filter(l=>!t6(l)).reduce((l,c)=>l+(qd.test(c)?Hd:c===""?Gd:Qd),s)}function $d(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function Xd(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,C=c==="/"?t:t.slice(c.length)||"/",A=Cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},C),b=p.route;if(!A&&y&&i&&!s[s.length-1].route.index&&(A=Cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},C)),!A)return null;Object.assign(l,A.params),f.push({params:l,pathname:Fi([c,A.pathname]),pathnameBase:nm(Fi([c,A.pathnameBase])),route:b}),A.pathnameBase!=="/"&&(c=Fi([c,A.pathnameBase]))}return f}function Cc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Zd(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((y,{paramName:C,isOptional:A},b)=>{if(C==="*"){let O=m[b]||"";f=c.slice(0,c.length-O.length).replace(/(.)\/+$/,"$1")}const N=m[b];return A&&!N?y[C]=void 0:y[C]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function Zd(r,t=!1,i=!0){Un(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function Wd(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Un(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Qi(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function Jd(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?za(r):r;return{pathname:i?i.startsWith("/")?i:tm(i,t):t,search:im(s),hash:rm(l)}}function tm(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function u4(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function em(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function K4(r){let t=em(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function Y4(r,t,i,s=!1){let l;typeof r=="string"?l=za(r):(l={...r},te(!l.pathname||!l.pathname.includes("?"),u4("?","pathname","search",l)),te(!l.pathname||!l.pathname.includes("#"),u4("#","pathname","hash",l)),te(!l.search||!l.search.includes("#"),u4("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,m;if(f==null)m=i;else{let A=t.length-1;if(!s&&f.startsWith("..")){let b=f.split("/");for(;b[0]==="..";)b.shift(),A-=1;l.pathname=b.join("/")}m=A>=0?t[A]:"/"}let p=Jd(l,m),y=f&&f!=="/"&&f.endsWith("/"),C=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(y||C)&&(p.pathname+="/"),p}var Fi=r=>r.join("/").replace(/\/\/+/g,"/"),nm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),im=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,rm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function am(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var bf=["POST","PUT","PATCH","DELETE"];new Set(bf);var sm=["GET",...bf];new Set(sm);var Qs=F.createContext(null);Qs.displayName="DataRouter";var Uc=F.createContext(null);Uc.displayName="DataRouterState";var wf=F.createContext({isTransitioning:!1});wf.displayName="ViewTransition";var om=F.createContext(new Map);om.displayName="Fetchers";var lm=F.createContext(null);lm.displayName="Await";var Gn=F.createContext(null);Gn.displayName="Navigation";var wl=F.createContext(null);wl.displayName="Location";var gi=F.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var $4=F.createContext(null);$4.displayName="RouteError";function um(r,{relative:t}={}){te(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=F.useContext(Gn),{hash:l,pathname:c,search:f}=Dl(r,{relative:t}),m=c;return i!=="/"&&(m=c==="/"?i:Fi([i,c])),s.createHref({pathname:m,search:f,hash:l})}function Ks(){return F.useContext(wl)!=null}function $r(){return te(Ks(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(wl).location}var Rf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Df(r){F.useContext(Gn).static||F.useLayoutEffect(r)}function Rl(){let{isDataRoute:r}=F.useContext(gi);return r?Tm():cm()}function cm(){te(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(Qs),{basename:t,navigator:i}=F.useContext(Gn),{matches:s}=F.useContext(gi),{pathname:l}=$r(),c=JSON.stringify(K4(s)),f=F.useRef(!1);return Df(()=>{f.current=!0}),F.useCallback((p,y={})=>{if(Un(f.current,Rf),!f.current)return;if(typeof p=="number"){i.go(p);return}let C=Y4(p,JSON.parse(c),l,y.relative==="path");r==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:Fi([t,C.pathname])),(y.replace?i.replace:i.push)(C,y.state,y)},[t,i,c,l,r])}F.createContext(null);function Dl(r,{relative:t}={}){let{matches:i}=F.useContext(gi),{pathname:s}=$r(),l=JSON.stringify(K4(i));return F.useMemo(()=>Y4(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function hm(r,t){return Mf(r,t)}function Mf(r,t,i,s){var nt;te(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=F.useContext(Gn),{matches:f}=F.useContext(gi),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",C=m?m.pathnameBase:"/",A=m&&m.route;{let it=A&&A.path||"";If(y,!A||it.endsWith("*")||it.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${it}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${it}"> to <Route path="${it==="/"?"*":`${it}/*`}">.`)}let b=$r(),N;if(t){let it=typeof t=="string"?za(t):t;te(C==="/"||((nt=it.pathname)==null?void 0:nt.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${it.pathname}" was given in the \`location\` prop.`),N=it}else N=b;let O=N.pathname||"/",H=O;if(C!=="/"){let it=C.replace(/^\//,"").split("/");H="/"+O.replace(/^\//,"").split("/").slice(it.length).join("/")}let k=!c&&i&&i.matches&&i.matches.length>0?i.matches:Tf(r,{pathname:H});Un(A||k!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Un(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=gm(k&&k.map(it=>Object.assign({},it,{params:Object.assign({},p,it.params),pathname:Fi([C,l.encodeLocation?l.encodeLocation(it.pathname).pathname:it.pathname]),pathnameBase:it.pathnameBase==="/"?C:Fi([C,l.encodeLocation?l.encodeLocation(it.pathnameBase).pathname:it.pathnameBase])})),f,i,s);return t&&Q?F.createElement(wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},Q):Q}function fm(){let r=Em(),t=am(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:c},"ErrorBoundary")," or"," ",F.createElement("code",{style:c},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),i?F.createElement("pre",{style:l},i):null,f)}var dm=F.createElement(fm,null),mm=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?F.createElement(gi.Provider,{value:this.props.routeContext},F.createElement($4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pm({routeContext:r,match:t,children:i}){let s=F.useContext(Qs);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(gi.Provider,{value:r},i)}function gm(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);te(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,m=-1;if(i)for(let p=0;p<l.length;p++){let y=l[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:C,errors:A}=i,b=y.route.loader&&!C.hasOwnProperty(y.route.id)&&(!A||A[y.route.id]===void 0);if(y.route.lazy||b){f=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((p,y,C)=>{let A,b=!1,N=null,O=null;i&&(A=c&&y.route.id?c[y.route.id]:void 0,N=y.route.errorElement||dm,f&&(m<0&&C===0?(If("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,O=null):m===C&&(b=!0,O=y.route.hydrateFallbackElement||null)));let H=t.concat(l.slice(0,C+1)),k=()=>{let Q;return A?Q=N:b?Q=O:y.route.Component?Q=F.createElement(y.route.Component,null):y.route.element?Q=y.route.element:Q=p,F.createElement(pm,{match:y,routeContext:{outlet:p,matches:H,isDataRoute:i!=null},children:Q})};return i&&(y.route.ErrorBoundary||y.route.errorElement||C===0)?F.createElement(mm,{location:i.location,revalidation:i.revalidation,component:N,error:A,children:k(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):k()},null)}function X4(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ym(r){let t=F.useContext(Qs);return te(t,X4(r)),t}function vm(r){let t=F.useContext(Uc);return te(t,X4(r)),t}function _m(r){let t=F.useContext(gi);return te(t,X4(r)),t}function Z4(r){let t=_m(r),i=t.matches[t.matches.length-1];return te(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Cm(){return Z4("useRouteId")}function Em(){var s;let r=F.useContext($4),t=vm("useRouteError"),i=Z4("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function Tm(){let{router:r}=ym("useNavigate"),t=Z4("useNavigate"),i=F.useRef(!1);return Df(()=>{i.current=!0}),F.useCallback(async(l,c={})=>{Un(i.current,Rf),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var e6={};function If(r,t,i){!t&&!e6[r]&&(e6[r]=!0,Un(!1,i))}F.memo(Am);function Am({routes:r,future:t,state:i}){return Mf(r,void 0,i,t)}function Sm({to:r,replace:t,state:i,relative:s}){te(Ks(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=F.useContext(Gn);Un(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=F.useContext(gi),{pathname:f}=$r(),m=Rl(),p=Y4(r,K4(c),f,s==="path"),y=JSON.stringify(p);return F.useEffect(()=>{m(JSON.parse(y),{replace:t,state:i,relative:s})},[m,y,s,t,i]),null}function kr(r){te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bm({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){te(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=za(i));let{pathname:p="/",search:y="",hash:C="",state:A=null,key:b="default"}=i,N=F.useMemo(()=>{let O=Qi(p,f);return O==null?null:{location:{pathname:O,search:y,hash:C,state:A,key:b},navigationType:s}},[f,p,y,C,A,b,s]);return Un(N!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${C}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:F.createElement(Gn.Provider,{value:m},F.createElement(wl.Provider,{children:t,value:N}))}function wm({children:r,location:t}){return hm(A4(r),t)}function A4(r,t=[]){let i=[];return F.Children.forEach(r,(s,l)=>{if(!F.isValidElement(s))return;let c=[...t,l];if(s.type===F.Fragment){i.push.apply(i,A4(s.props.children,c));return}te(s.type===kr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),te(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=A4(s.props.children,c)),i.push(f)}),i}var fc="get",dc="application/x-www-form-urlencoded";function Lc(r){return r!=null&&typeof r.tagName=="string"}function Rm(r){return Lc(r)&&r.tagName.toLowerCase()==="button"}function Dm(r){return Lc(r)&&r.tagName.toLowerCase()==="form"}function Mm(r){return Lc(r)&&r.tagName.toLowerCase()==="input"}function Im(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function xm(r,t){return r.button===0&&(!t||t==="_self")&&!Im(r)}var sc=null;function Vm(){if(sc===null)try{new FormData(document.createElement("form"),0),sc=!1}catch{sc=!0}return sc}var Nm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function c4(r){return r!=null&&!Nm.has(r)?(Un(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dc}"`),null):r}function Om(r,t){let i,s,l,c,f;if(Dm(r)){let m=r.getAttribute("action");s=m?Qi(m,t):null,i=r.getAttribute("method")||fc,l=c4(r.getAttribute("enctype"))||dc,c=new FormData(r)}else if(Rm(r)||Mm(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?Qi(p,t):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||fc,l=c4(r.getAttribute("formenctype"))||c4(m.getAttribute("enctype"))||dc,c=new FormData(m,r),!Vm()){let{name:y,type:C,value:A}=r;if(C==="image"){let b=y?`${y}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else y&&c.append(y,A)}}else{if(Lc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=fc,s=null,l=dc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function W4(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function km(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Um(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Lm(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await km(c,i);return f.links?f.links():[]}return[]}));return jm(s.flat(1).filter(Um).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function n6(r,t,i,s,l,c){let f=(p,y)=>i[y]?p.route.id!==i[y].route.id:!0,m=(p,y)=>{var C;return i[y].pathname!==p.pathname||((C=i[y].route.path)==null?void 0:C.endsWith("*"))&&i[y].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,y)=>f(p,y)||m(p,y)):c==="data"?t.filter((p,y)=>{var A;let C=s.routes[p.route.id];if(!C||!C.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((A=i[0])==null?void 0:A.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function zm(r,t,{includeHydrateFallback:i}={}){return Pm(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Pm(r){return[...new Set(r)]}function Bm(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function jm(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(Bm(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function qm(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&Qi(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function xf(){let r=F.useContext(Qs);return W4(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Hm(){let r=F.useContext(Uc);return W4(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var J4=F.createContext(void 0);J4.displayName="FrameworkContext";function Vf(){let r=F.useContext(J4);return W4(r,"You must render this element inside a <HydratedRouter> element"),r}function Fm(r,t){let i=F.useContext(J4),[s,l]=F.useState(!1),[c,f]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:C,onTouchStart:A}=t,b=F.useRef(null);F.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let H=Q=>{Q.forEach(nt=>{f(nt.isIntersecting)})},k=new IntersectionObserver(H,{threshold:.5});return b.current&&k.observe(b.current),()=>{k.disconnect()}}},[r]),F.useEffect(()=>{if(s){let H=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(H)}}},[s]);let N=()=>{l(!0)},O=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,b,{}]:[c,b,{onFocus:ll(m,N),onBlur:ll(p,O),onMouseEnter:ll(y,N),onMouseLeave:ll(C,O),onTouchStart:ll(A,N)}]:[!1,b,{}]}function ll(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function Gm({page:r,...t}){let{router:i}=xf(),s=F.useMemo(()=>Tf(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?F.createElement(Km,{page:r,matches:s,...t}):null}function Qm(r){let{manifest:t,routeModules:i}=Vf(),[s,l]=F.useState([]);return F.useEffect(()=>{let c=!1;return Lm(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function Km({page:r,matches:t,...i}){let s=$r(),{manifest:l,routeModules:c}=Vf(),{basename:f}=xf(),{loaderData:m,matches:p}=Hm(),y=F.useMemo(()=>n6(r,t,p,l,s,"data"),[r,t,p,l,s]),C=F.useMemo(()=>n6(r,t,p,l,s,"assets"),[r,t,p,l,s]),A=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let O=new Set,H=!1;if(t.forEach(Q=>{var it;let nt=l.routes[Q.route.id];!nt||!nt.hasLoader||(!y.some(yt=>yt.route.id===Q.route.id)&&Q.route.id in m&&((it=c[Q.route.id])!=null&&it.shouldRevalidate)||nt.hasClientLoader?H=!0:O.add(Q.route.id))}),O.size===0)return[];let k=qm(r,f);return H&&O.size>0&&k.searchParams.set("_routes",t.filter(Q=>O.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[k.pathname+k.search]},[f,m,s,l,y,t,r,c]),b=F.useMemo(()=>zm(C,l),[C,l]),N=Qm(C);return F.createElement(F.Fragment,null,A.map(O=>F.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...i})),b.map(O=>F.createElement("link",{key:O,rel:"modulepreload",href:O,...i})),N.map(({key:O,link:H})=>F.createElement("link",{key:O,...H})))}function Ym(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Nf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nf&&(window.__reactRouterVersion="7.3.0")}catch{}function $m({basename:r,children:t,window:i}){let s=F.useRef();s.current==null&&(s.current=Ld({window:i,v5Compat:!0}));let l=s.current,[c,f]=F.useState({action:l.action,location:l.location}),m=F.useCallback(p=>{F.startTransition(()=>f(p))},[f]);return F.useLayoutEffect(()=>l.listen(m),[l,m]),F.createElement(bm,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:l})}var Of=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ks=F.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:m,target:p,to:y,preventScrollReset:C,viewTransition:A,...b},N){let{basename:O}=F.useContext(Gn),H=typeof y=="string"&&Of.test(y),k,Q=!1;if(typeof y=="string"&&H&&(k=y,Nf))try{let S=new URL(window.location.href),M=y.startsWith("//")?new URL(S.protocol+y):new URL(y),I=Qi(M.pathname,O);M.origin===S.origin&&I!=null?y=I+M.search+M.hash:Q=!0}catch{Un(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let nt=um(y,{relative:l}),[it,yt,dt]=Fm(s,b),Et=Jm(y,{replace:f,state:m,target:p,preventScrollReset:C,relative:l,viewTransition:A});function V(S){t&&t(S),S.defaultPrevented||Et(S)}let w=F.createElement("a",{...b,...dt,href:k||nt,onClick:Q||c?t:V,ref:Ym(N,yt),target:p,"data-discover":!H&&i==="render"?"true":void 0});return it&&!H?F.createElement(F.Fragment,null,w,F.createElement(Gm,{page:nt})):w});ks.displayName="Link";var Xm=F.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:m,children:p,...y},C){let A=Dl(f,{relative:y.relative}),b=$r(),N=F.useContext(Uc),{navigator:O,basename:H}=F.useContext(Gn),k=N!=null&&rp(A)&&m===!0,Q=O.encodeLocation?O.encodeLocation(A).pathname:A.pathname,nt=b.pathname,it=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;i||(nt=nt.toLowerCase(),it=it?it.toLowerCase():null,Q=Q.toLowerCase()),it&&H&&(it=Qi(it,H)||it);const yt=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let dt=nt===Q||!l&&nt.startsWith(Q)&&nt.charAt(yt)==="/",Et=it!=null&&(it===Q||!l&&it.startsWith(Q)&&it.charAt(Q.length)==="/"),V={isActive:dt,isPending:Et,isTransitioning:k},w=dt?t:void 0,S;typeof s=="function"?S=s(V):S=[s,dt?"active":null,Et?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let M=typeof c=="function"?c(V):c;return F.createElement(ks,{...y,"aria-current":w,className:S,ref:C,style:M,to:f,viewTransition:m},typeof p=="function"?p(V):p)});Xm.displayName="NavLink";var Zm=F.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=fc,action:m,onSubmit:p,relative:y,preventScrollReset:C,viewTransition:A,...b},N)=>{let O=np(),H=ip(m,{relative:y}),k=f.toLowerCase()==="get"?"get":"post",Q=typeof m=="string"&&Of.test(m),nt=it=>{if(p&&p(it),it.defaultPrevented)return;it.preventDefault();let yt=it.nativeEvent.submitter,dt=(yt==null?void 0:yt.getAttribute("formmethod"))||f;O(yt||it.currentTarget,{fetcherKey:t,method:dt,navigate:i,replace:l,state:c,relative:y,preventScrollReset:C,viewTransition:A})};return F.createElement("form",{ref:N,method:k,action:H,onSubmit:s?p:nt,...b,"data-discover":!Q&&r==="render"?"true":void 0})});Zm.displayName="Form";function Wm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kf(r){let t=F.useContext(Qs);return te(t,Wm(r)),t}function Jm(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let m=Rl(),p=$r(),y=Dl(r,{relative:c});return F.useCallback(C=>{if(xm(C,t)){C.preventDefault();let A=i!==void 0?i:vl(p)===vl(y);m(r,{replace:A,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[p,m,y,i,s,t,r,l,c,f])}var tp=0,ep=()=>`__${String(++tp)}__`;function np(){let{router:r}=kf("useSubmit"),{basename:t}=F.useContext(Gn),i=Cm();return F.useCallback(async(s,l={})=>{let{action:c,method:f,encType:m,formData:p,body:y}=Om(s,t);if(l.navigate===!1){let C=l.fetcherKey||ep();await r.fetch(C,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||f,formEncType:l.encType||m,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||f,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function ip(r,{relative:t}={}){let{basename:i}=F.useContext(Gn),s=F.useContext(gi);te(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Dl(r||".",{relative:t})},f=$r();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(C=>C==="")){m.delete("index"),p.filter(A=>A).forEach(A=>m.append("index",A));let C=m.toString();c.search=C?`?${C}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Fi([i,c.pathname])),vl(c)}function rp(r,t={}){let i=F.useContext(wf);te(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=kf("useViewTransitionState"),l=Dl(r,{relative:t.relative});if(!i.isTransitioning)return!1;let c=Qi(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Qi(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Cc(l.pathname,f)!=null||Cc(l.pathname,c)!=null}new TextEncoder;const Uf=F.createContext(void 0),Ml=()=>{const r=F.useContext(Uf);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},ap=({children:r})=>{const[t,i]=F.useState(null);F.useEffect(()=>{const f=localStorage.getItem("currentUser");console.log("AuthContext: Loading saved user from localStorage:",f),f&&(i(f),console.log("AuthContext: User restored:",f))},[]);const c={currentUser:t,login:f=>{console.log("AuthContext: Logging in user:",f),i(f),localStorage.setItem("currentUser",f),console.log("AuthContext: User saved to localStorage:",f)},logout:()=>{console.log("AuthContext: Logging out user"),i(null),localStorage.removeItem("currentUser")}};return z.jsx(Uf.Provider,{value:c,children:r})},Il=({bgcolor:r="rgb(94, 136, 94, 0)",boxShadow:t=!1})=>{const{currentUser:i}=Ml();return z.jsxs("div",{id:"navbar",style:{backgroundColor:r,boxShadow:t?"0 4px 8px -2px #222":"none"},children:[z.jsx("div",{className:"link",id:"homepage",children:z.jsx(ks,{className:"a",to:"/HBWGreentrails/",children:"Home"})}),z.jsx("div",{className:"link",id:"volunteer",children:z.jsx(ks,{className:"a",to:"/volenterpage/",children:"Volunteer!!"})}),z.jsx("div",{className:"link",id:"leaderboard",children:z.jsx(ks,{className:"a",to:"/leaderboard/",children:"Leaderboards"})}),z.jsx("div",{className:"link",id:"Signup",children:z.jsx(ks,{className:"a",to:"/signup/",children:i?`👤 ${i}`:"Sign up"})})]})},sp=""+new URL("groupme-DgGEjEd7.png",import.meta.url).href;function op(r){const t=[],i=new Date;i.setHours(0,0,0,0);let s=new Date(r);for(s.setHours(0,0,0,0);s<i;)s.setDate(s.getDate()+14);r=s;for(let l=0;l<3;l++){const c=new Date(r);c.setDate(r.getDate()+l*14),t.push({date:c,id:l+1})}return t}function lp({nextMeetingDate:r}){const t=op(r);return z.jsx("div",{children:t.map(i=>z.jsxs("p",{children:[i.date.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})," ","in Hang's room (510) at lunch!"]},i.id))})}const i6=()=>z.jsxs("div",{style:{backgroundColor:"rgb(17, 69, 59)"},children:[z.jsx(Il,{bgcolor:"#00000000",boxShadow:!1}),z.jsx("div",{className:"header",children:z.jsx("h1",{className:"first",children:"HBW Green Trails Club"})}),z.jsxs("div",{className:"importantinfo",children:[z.jsxs("div",{className:"groupme",children:[z.jsx("a",{href:"https://groupme.com/join_group/103922254/4v3j7TI7",children:z.jsx("img",{src:sp,alt:"Join our GroupMe!",width:"200px"})}),z.jsx("p",{children:"Click here to join our GroupMe for updates on meetings and events!!"})]}),z.jsxs("div",{className:"nextmeeting",children:[z.jsx("h2",{children:"Upcoming Meetings:"}),z.jsx(lp,{nextMeetingDate:new Date("2025-12-04T12:35:00")})]})]})]}),r6=()=>z.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 100 300 500",width:"100%",height:"100%",children:[z.jsx("rect",{x:"96.935",y:"583.508",width:"103.723",height:"89.44",style:{fill:"rgb(92, 60, 36)",stroke:"rgba(0, 0, 0, 0)"}}),z.jsx("path",{d:"M 151.753 331.446 L 296.742 595.399 L 6.763 595.399 L 151.753 331.446 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),z.jsx("path",{d:"M 151.812 229.395 L 261.692 461.009 L 41.931 461.009 L 151.812 229.395 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),z.jsx("path",{d:"M 152.135 182.123 L 223.661 334.201 L 80.609 334.201 L 152.135 182.123 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}})]}),a6=["#FF69B4","#FF1493","#FFB6C1","#FF69B4","#ff6f6f","#d161f7","#8a61ff","#61d7ff","#61ff8a","#ff6161","#ff61d7","#d7ff61"];function up({children:r,flowers:t=0,grass:i=200,tileSize:s=0}){const l=F.useRef(null),c=F.useRef(null);return F.useEffect(()=>{const f=l.current,m=c.current;if(!f||!m)return;const p=f.getContext("2d");if(!p)return;let y=0,C=0;function A(){const V=m.getBoundingClientRect(),w=window.devicePixelRatio||1;y=Math.max(1,Math.floor(V.width)),C=Math.max(1,Math.floor(V.height)),f.width=Math.max(1,Math.floor(V.width*w)),f.height=Math.max(1,Math.floor(V.height*w)),f.style.width=`${V.width}px`,f.style.height=`${V.height}px`,p.setTransform(w,0,0,w,0,0),dt()}function b(V,w,S,M){p.save(),p.translate(V,w);const I=Math.random()*Math.PI*2;p.rotate(I),p.fillStyle=M,p.restore()}function N(V){for(let w=0;w<V;w++){const S=Math.random()*(y+100)-50,M=Math.random()*(C+100)-50,I=Math.min(Math.max(Math.random()*26+4,4),30);b(S,M,I,`rgb(0, ${Math.floor(Math.random()*100+100)}, 0)`)}}function O(V,w,S,M,I,U){p.save(),p.translate(V,w),p.rotate(I),p.beginPath(),p.moveTo(0,0),p.lineTo(-M/2,-S),p.lineTo(M/2,-S),p.closePath(),p.fillStyle=U,p.fill(),p.restore()}function H(V,w,S){for(let M=0;M<S;M++){const I=(Math.random()-.5)*8,U=(Math.random()-.5)*8,R=10+Math.random()*8,Nt=2+Math.random()*1.5,xt=-.2+Math.random()*.4,rt=["#7CB342","#8BC34A","#689F38","#76B041"],ht=rt[Math.floor(Math.random()*rt.length)];O(V+I,w+U,R,Nt,xt,ht)}}function k(V){for(let w=0;w<V;w++){const S=Math.random()*y,M=Math.random()*C,I=Math.floor(3+Math.random()*4);H(S,M,I)}}function Q(V,w,S){p.save(),p.translate(V,w),p.fillStyle=a6[Math.floor(Math.random()*a6.length)];const M=5;for(let I=0;I<M;I++){const U=I*(2*Math.PI/M),R=Math.cos(U)*S,Nt=Math.sin(U)*S;p.beginPath(),p.arc(R,Nt,S/2,0,2*Math.PI),p.fill()}p.beginPath(),p.arc(0,0,S/2,0,2*Math.PI),p.fill(),p.restore()}function nt(V){for(let w=0;w<V;w++)Q(Math.random()*y,Math.random()*C,4+Math.random()*4)}function it(){p.beginPath(),p.moveTo(y/2+30,5),p.lineTo(y/2-30,5),p.lineTo(y/2,40),p.stroke(),p.closePath(),p.fill()}function yt(V,w){k(w),nt(V)}function dt(){p.clearRect(0,0,y,C),yt(t,i),it(),N(8)}A();const Et=new ResizeObserver(A);return Et.observe(m),()=>{Et.disconnect()}},[t,i,s]),z.jsxs("div",{ref:c,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[z.jsx("canvas",{ref:l,style:{position:"absolute",left:0,top:0,zIndex:0,pointerEvents:"none"}}),z.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}const cp=()=>z.jsxs("div",{children:[z.jsx("div",{id:"tree1",children:z.jsx(r6,{})}),z.jsx("div",{id:"tree2",children:z.jsx(r6,{})}),z.jsx("footer",{children:z.jsx(up,{children:z.jsx("div",{id:"road"})})})]}),hp=()=>z.jsx("div",{children:z.jsx("footer",{})}),fp=()=>z.jsx(cp,{}),dp=()=>z.jsx("div",{id:"fullroad"}),zc=({message:r,shadow:t})=>z.jsx("header",{className:"App-header",children:z.jsx("h1",{id:"GreenTrails",style:{textShadow:t?"2px 2px black":"none",color:"rgb(255, 255, 255, 1)"},children:r})}),mp=()=>{};var s6={};/**
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
 */const Lf=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},pp=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],f=r[i++],m=r[i++],p=((l&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[i++],f=r[i++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,m=f?r[l+1]:0,p=l+2<r.length,y=p?r[l+2]:0,C=c>>2,A=(c&3)<<4|m>>4;let b=(m&15)<<2|y>>6,N=y&63;p||(N=64,f||(b=64)),s.push(i[C],i[A],i[b],i[N])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Lf(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):pp(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const A=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||m==null||y==null||A==null)throw new gp;const b=c<<2|m>>4;if(s.push(b),y!==64){const N=m<<4&240|y>>2;if(s.push(N),A!==64){const O=y<<6&192|A;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class gp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yp=function(r){const t=Lf(r);return zf.encodeByteArray(t,!0)},Ec=function(r){return yp(r).replace(/\./g,"")},vp=function(r){try{return zf.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>_p().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof s6>"u")return;const r=s6.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Tp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&vp(r[1]);return t&&JSON.parse(t)},t2=()=>{try{return mp()||Cp()||Ep()||Tp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ap=r=>{var t,i;return(i=(t=t2())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},Sp=r=>{const t=Ap(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),s]:[t.substring(0,i),s]},Pf=()=>{var r;return(r=t2())===null||r===void 0?void 0:r.config};/**
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
 */class bp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,s))}}}/**
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
 */function wp(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ec(JSON.stringify(i)),Ec(JSON.stringify(f)),""].join(".")}/**
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
 */function Rp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dp(){var r;const t=(r=t2())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ip(){return!Dp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function jf(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}function xp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Vp="FirebaseError";class Xr extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=Vp,Object.setPrototypeOf(this,Xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?Np(c,s):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new Xr(l,m,s)}}function Np(r,t){return r.replace(Op,(i,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const Op=/\{\$([^}]+)}/g;function Ls(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const l of i){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(o6(c)&&o6(f)){if(!Ls(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function o6(r){return r!==null&&typeof r=="object"}/**
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
 */const kp=1e3,Up=2,Lp=4*60*60*1e3,zp=.5;function l6(r,t=kp,i=Up){const s=t*Math.pow(i,r),l=Math.round(zp*s*(Math.random()-.5)*2);return Math.min(Lp,s+l)}/**
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
 */function di(r){return r&&r._delegate?r._delegate:r}class Ki{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xa="[DEFAULT]";/**
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
 */class Pp{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new bp;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jp(t))try{this.getOrInitializeService({instanceIdentifier:xa})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=xa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xa){return this.instances.has(t)}getOptions(t=xa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&f.resolve(l)}return l}onInit(t,i){var s;const l=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=xa){return this.component?this.component.multipleInstances?t:xa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(r){return r===xa?void 0:r}function jp(r){return r.instantiationMode==="EAGER"}/**
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
 */class qp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Pp(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Bt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Bt||(Bt={}));const Hp={debug:Bt.DEBUG,verbose:Bt.VERBOSE,info:Bt.INFO,warn:Bt.WARN,error:Bt.ERROR,silent:Bt.SILENT},Fp=Bt.INFO,Gp={[Bt.DEBUG]:"log",[Bt.VERBOSE]:"log",[Bt.INFO]:"info",[Bt.WARN]:"warn",[Bt.ERROR]:"error"},Qp=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Gp[t];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e2{constructor(t){this.name=t,this._logLevel=Fp,this._logHandler=Qp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Bt.DEBUG,...t),this._logHandler(this,Bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Bt.VERBOSE,...t),this._logHandler(this,Bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Bt.INFO,...t),this._logHandler(this,Bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Bt.WARN,...t),this._logHandler(this,Bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Bt.ERROR,...t),this._logHandler(this,Bt.ERROR,...t)}}const Kp=(r,t)=>t.some(i=>r instanceof i);let u6,c6;function Yp(){return u6||(u6=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $p(){return c6||(c6=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qf=new WeakMap,S4=new WeakMap,Hf=new WeakMap,h4=new WeakMap,n2=new WeakMap;function Xp(r){const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(Lr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&qf.set(i,r)}).catch(()=>{}),n2.set(t,r),t}function Zp(r){if(S4.has(r))return;const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});S4.set(r,t)}let b4={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return S4.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Hf.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Lr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Wp(r){b4=r(b4)}function Jp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(f4(this),t,...i);return Hf.set(s,t.sort?t.sort():[t]),Lr(s)}:$p().includes(r)?function(...t){return r.apply(f4(this),t),Lr(qf.get(this))}:function(...t){return Lr(r.apply(f4(this),t))}}function tg(r){return typeof r=="function"?Jp(r):(r instanceof IDBTransaction&&Zp(r),Kp(r,Yp())?new Proxy(r,b4):r)}function Lr(r){if(r instanceof IDBRequest)return Xp(r);if(h4.has(r))return h4.get(r);const t=tg(r);return t!==r&&(h4.set(r,t),n2.set(t,r)),t}const f4=r=>n2.get(r);function Ff(r,t,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),m=Lr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Lr(f.result),p.oldVersion,p.newVersion,Lr(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const eg=["get","getKey","getAll","getAllKeys","count"],ng=["put","add","delete","clear"],d4=new Map;function h6(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(d4.get(t))return d4.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,l=ng.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||eg.includes(i)))return;const c=async function(f,...m){const p=this.transaction(f,l?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&p.done]))[0]};return d4.set(t,c),c}Wp(r=>({...r,get:(t,i,s)=>h6(t,i)||r.get(t,i,s),has:(t,i)=>!!h6(t,i)||r.has(t,i)}));/**
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
 */class ig{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(rg(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function rg(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const w4="@firebase/app",f6="0.11.2";/**
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
 */const Yi=new e2("@firebase/app"),ag="@firebase/app-compat",sg="@firebase/analytics-compat",og="@firebase/analytics",lg="@firebase/app-check-compat",ug="@firebase/app-check",cg="@firebase/auth",hg="@firebase/auth-compat",fg="@firebase/database",dg="@firebase/data-connect",mg="@firebase/database-compat",pg="@firebase/functions",gg="@firebase/functions-compat",yg="@firebase/installations",vg="@firebase/installations-compat",_g="@firebase/messaging",Cg="@firebase/messaging-compat",Eg="@firebase/performance",Tg="@firebase/performance-compat",Ag="@firebase/remote-config",Sg="@firebase/remote-config-compat",bg="@firebase/storage",wg="@firebase/storage-compat",Rg="@firebase/firestore",Dg="@firebase/vertexai",Mg="@firebase/firestore-compat",Ig="firebase",xg="11.4.0";/**
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
 */const R4="[DEFAULT]",Vg={[w4]:"fire-core",[ag]:"fire-core-compat",[og]:"fire-analytics",[sg]:"fire-analytics-compat",[ug]:"fire-app-check",[lg]:"fire-app-check-compat",[cg]:"fire-auth",[hg]:"fire-auth-compat",[fg]:"fire-rtdb",[dg]:"fire-data-connect",[mg]:"fire-rtdb-compat",[pg]:"fire-fn",[gg]:"fire-fn-compat",[yg]:"fire-iid",[vg]:"fire-iid-compat",[_g]:"fire-fcm",[Cg]:"fire-fcm-compat",[Eg]:"fire-perf",[Tg]:"fire-perf-compat",[Ag]:"fire-rc",[Sg]:"fire-rc-compat",[bg]:"fire-gcs",[wg]:"fire-gcs-compat",[Rg]:"fire-fst",[Mg]:"fire-fst-compat",[Dg]:"fire-vertex","fire-js":"fire-js",[Ig]:"fire-js-all"};/**
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
 */const Tc=new Map,Ng=new Map,D4=new Map;function d6(r,t){try{r.container.addComponent(t)}catch(i){Yi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function jr(r){const t=r.name;if(D4.has(t))return Yi.debug(`There were multiple attempts to register component ${t}.`),!1;D4.set(t,r);for(const i of Tc.values())d6(i,r);for(const i of Ng.values())d6(i,r);return!0}function xl(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Og(r){return r==null?!1:r.settings!==void 0}/**
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
 */const kg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new Pc("app","Firebase",kg);/**
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
 */class Ug{constructor(t,i,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Lg=xg;function Gf(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:R4,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw zr.create("bad-app-name",{appName:String(l)});if(i||(i=Pf()),!i)throw zr.create("no-options");const c=Tc.get(l);if(c){if(Ls(i,c.options)&&Ls(s,c.config))return c;throw zr.create("duplicate-app",{appName:l})}const f=new qp(l);for(const p of D4.values())f.addComponent(p);const m=new Ug(i,s,f);return Tc.set(l,m),m}function Qf(r=R4){const t=Tc.get(r);if(!t&&r===R4&&Pf())return Gf();if(!t)throw zr.create("no-app",{appName:r});return t}function ui(r,t,i){var s;let l=(s=Vg[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const m=[`Unable to register library "${l}" with version "${t}":`];c&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yi.warn(m.join(" "));return}jr(new Ki(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const zg="firebase-heartbeat-database",Pg=1,_l="firebase-heartbeat-store";let m4=null;function Kf(){return m4||(m4=Ff(zg,Pg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(_l)}catch(i){console.warn(i)}}}}).catch(r=>{throw zr.create("idb-open",{originalErrorMessage:r.message})})),m4}async function Bg(r){try{const i=(await Kf()).transaction(_l),s=await i.objectStore(_l).get(Yf(r));return await i.done,s}catch(t){if(t instanceof Xr)Yi.warn(t.message);else{const i=zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(i.message)}}}async function m6(r,t){try{const s=(await Kf()).transaction(_l,"readwrite");await s.objectStore(_l).put(t,Yf(r)),await s.done}catch(i){if(i instanceof Xr)Yi.warn(i.message);else{const s=zr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Yi.warn(s.message)}}}function Yf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const jg=1024,qg=30;class Hg{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Gg(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=p6();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>qg){const f=Qg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Yi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=p6(),{heartbeatsToSend:s,unsentEntries:l}=Fg(this._heartbeatsCache.heartbeats),c=Ec(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Yi.warn(i),""}}}function p6(){return new Date().toISOString().substring(0,10)}function Fg(r,t=jg){const i=[];let s=r.slice();for(const l of r){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),g6(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),g6(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Gg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?jf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Bg(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return m6(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return m6(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function g6(r){return Ec(JSON.stringify({version:2,heartbeats:r})).length}function Qg(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
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
 */function Kg(r){jr(new Ki("platform-logger",t=>new ig(t),"PRIVATE")),jr(new Ki("heartbeat",t=>new Hg(t),"PRIVATE")),ui(w4,f6,r),ui(w4,f6,"esm2017"),ui("fire-js","")}Kg("");var Yg="firebase",$g="11.4.0";/**
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
 */ui(Yg,$g,"app");const $f="@firebase/installations",i2="0.6.13";/**
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
 */const Xf=1e4,Zf=`w:${i2}`,Wf="FIS_v2",Xg="https://firebaseinstallations.googleapis.com/v1",Zg=60*60*1e3,Wg="installations",Jg="Installations";/**
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
 */const ty={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oa=new Pc(Wg,Jg,ty);function Jf(r){return r instanceof Xr&&r.code.includes("request-failed")}/**
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
 */function t9({projectId:r}){return`${Xg}/projects/${r}/installations`}function e9(r){return{token:r.token,requestStatus:2,expiresIn:ny(r.expiresIn),creationTime:Date.now()}}async function n9(r,t){const s=(await t.json()).error;return Oa.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function i9({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ey(r,{refreshToken:t}){const i=i9(r);return i.append("Authorization",iy(t)),i}async function r9(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ny(r){return Number(r.replace("s","000"))}function iy(r){return`${Wf} ${r}`}/**
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
 */async function ry({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const s=t9(r),l=i9(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:i,authVersion:Wf,appId:r.appId,sdkVersion:Zf},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await r9(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:e9(y.authToken)}}else throw await n9("Create Installation",p)}/**
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
 */function a9(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function ay(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sy=/^[cdef][\w-]{21}$/,M4="";function oy(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=ly(r);return sy.test(i)?i:M4}catch{return M4}}function ly(r){return ay(r).substr(0,22)}/**
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
 */function Bc(r){return`${r.appName}!${r.appId}`}/**
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
 */const s9=new Map;function o9(r,t){const i=Bc(r);l9(i,t),uy(i,t)}function l9(r,t){const i=s9.get(r);if(i)for(const s of i)s(t)}function uy(r,t){const i=cy();i&&i.postMessage({key:r,fid:t}),hy()}let Va=null;function cy(){return!Va&&"BroadcastChannel"in self&&(Va=new BroadcastChannel("[Firebase] FID Change"),Va.onmessage=r=>{l9(r.data.key,r.data.fid)}),Va}function hy(){s9.size===0&&Va&&(Va.close(),Va=null)}/**
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
 */const fy="firebase-installations-database",dy=1,ka="firebase-installations-store";let p4=null;function r2(){return p4||(p4=Ff(fy,dy,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ka)}}})),p4}async function Ac(r,t){const i=Bc(r),l=(await r2()).transaction(ka,"readwrite"),c=l.objectStore(ka),f=await c.get(i);return await c.put(t,i),await l.done,(!f||f.fid!==t.fid)&&o9(r,t.fid),t}async function u9(r){const t=Bc(r),s=(await r2()).transaction(ka,"readwrite");await s.objectStore(ka).delete(t),await s.done}async function jc(r,t){const i=Bc(r),l=(await r2()).transaction(ka,"readwrite"),c=l.objectStore(ka),f=await c.get(i),m=t(f);return m===void 0?await c.delete(i):await c.put(m,i),await l.done,m&&(!f||f.fid!==m.fid)&&o9(r,m.fid),m}/**
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
 */async function a2(r){let t;const i=await jc(r.appConfig,s=>{const l=my(s),c=py(r,l);return t=c.registrationPromise,c.installationEntry});return i.fid===M4?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function my(r){const t=r||{fid:oy(),registrationStatus:0};return c9(t)}function py(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Oa.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=gy(r,i);return{installationEntry:i,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yy(r)}:{installationEntry:t}}async function gy(r,t){try{const i=await ry(r,t);return Ac(r.appConfig,i)}catch(i){throw Jf(i)&&i.customData.serverCode===409?await u9(r.appConfig):await Ac(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function yy(r){let t=await y6(r.appConfig);for(;t.registrationStatus===1;)await a9(100),t=await y6(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await a2(r);return s||i}return t}function y6(r){return jc(r,t=>{if(!t)throw Oa.create("installation-not-found");return c9(t)})}function c9(r){return vy(r)?{fid:r.fid,registrationStatus:0}:r}function vy(r){return r.registrationStatus===1&&r.registrationTime+Xf<Date.now()}/**
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
 */async function _y({appConfig:r,heartbeatServiceProvider:t},i){const s=Cy(r,i),l=ey(r,i),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:Zf,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await r9(()=>fetch(s,m));if(p.ok){const y=await p.json();return e9(y)}else throw await n9("Generate Auth Token",p)}function Cy(r,{fid:t}){return`${t9(r)}/${t}/authTokens:generate`}/**
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
 */async function s2(r,t=!1){let i;const s=await jc(r.appConfig,c=>{if(!h9(c))throw Oa.create("not-registered");const f=c.authToken;if(!t&&Ay(f))return c;if(f.requestStatus===1)return i=Ey(r,t),c;{if(!navigator.onLine)throw Oa.create("app-offline");const m=by(c);return i=Ty(r,m),m}});return i?await i:s.authToken}async function Ey(r,t){let i=await v6(r.appConfig);for(;i.authToken.requestStatus===1;)await a9(100),i=await v6(r.appConfig);const s=i.authToken;return s.requestStatus===0?s2(r,t):s}function v6(r){return jc(r,t=>{if(!h9(t))throw Oa.create("not-registered");const i=t.authToken;return wy(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ty(r,t){try{const i=await _y(r,t),s=Object.assign(Object.assign({},t),{authToken:i});return await Ac(r.appConfig,s),i}catch(i){if(Jf(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await u9(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ac(r.appConfig,s)}throw i}}function h9(r){return r!==void 0&&r.registrationStatus===2}function Ay(r){return r.requestStatus===2&&!Sy(r)}function Sy(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Zg}function by(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function wy(r){return r.requestStatus===1&&r.requestTime+Xf<Date.now()}/**
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
 */async function Ry(r){const t=r,{installationEntry:i,registrationPromise:s}=await a2(t);return s?s.catch(console.error):s2(t).catch(console.error),i.fid}/**
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
 */async function Dy(r,t=!1){const i=r;return await My(i),(await s2(i,t)).token}async function My(r){const{registrationPromise:t}=await a2(r);t&&await t}/**
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
 */function Iy(r){if(!r||!r.options)throw g4("App Configuration");if(!r.name)throw g4("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw g4(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function g4(r){return Oa.create("missing-app-config-values",{valueName:r})}/**
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
 */const f9="installations",xy="installations-internal",Vy=r=>{const t=r.getProvider("app").getImmediate(),i=Iy(t),s=xl(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ny=r=>{const t=r.getProvider("app").getImmediate(),i=xl(t,f9).getImmediate();return{getId:()=>Ry(i),getToken:l=>Dy(i,l)}};function Oy(){jr(new Ki(f9,Vy,"PUBLIC")),jr(new Ki(xy,Ny,"PRIVATE"))}Oy();ui($f,i2);ui($f,i2,"esm2017");/**
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
 */const Sc="analytics",ky="firebase_id",Uy="origin",Ly=60*1e3,zy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",o2="https://www.googletagmanager.com/gtag/js";/**
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
 */const on=new e2("@firebase/analytics");/**
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
 */const Py={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Pc("analytics","Analytics",Py);/**
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
 */function By(r){if(!r.startsWith(o2)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return on.warn(t.message),""}return r}function d9(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function jy(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function qy(r,t){const i=jy("firebase-js-sdk-policy",{createScriptURL:By}),s=document.createElement("script"),l=`${o2}?l=${r}&id=${t}`;s.src=i?i==null?void 0:i.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Hy(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Fy(r,t,i,s,l,c){const f=s[l];try{if(f)await t[f];else{const p=(await d9(i)).find(y=>y.measurementId===l);p&&await t[p.appId]}}catch(m){on.error(m)}r("config",l,c)}async function Gy(r,t,i,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const m=await d9(i);for(const p of f){const y=m.find(A=>A.measurementId===p),C=y&&t[y.appId];if(C)c.push(C);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){on.error(c)}}function Qy(r,t,i,s){async function l(c,...f){try{if(c==="event"){const[m,p]=f;await Gy(r,t,i,m,p)}else if(c==="config"){const[m,p]=f;await Fy(r,t,i,s,m,p)}else if(c==="consent"){const[m,p]=f;r("consent",m,p)}else if(c==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(c==="set"){const[m]=f;r("set",m)}else r(c,...f)}catch(m){on.error(m)}}return l}function Ky(r,t,i,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=Qy(c,r,t,i),{gtagCore:c,wrappedGtag:window[l]}}function Yy(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(o2)&&i.src.includes(r))return i;return null}/**
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
 */const $y=30,Xy=1e3;class Zy{constructor(t={},i=Xy){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const m9=new Zy;function Wy(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Jy(r){var t;const{appId:i,apiKey:s}=r,l={method:"GET",headers:Wy(s)},c=zy.replace("{app-id}",i),f=await fetch(c,l);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function tv(r,t=m9,i){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw yn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new iv;return setTimeout(async()=>{m.abort()},Ly),p9({appId:s,apiKey:l,measurementId:c},f,m,t)}async function p9(r,{throttleEndTimeMillis:t,backoffCount:i},s,l=m9){var c;const{appId:f,measurementId:m}=r;try{await ev(s,t)}catch(p){if(m)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await Jy(r);return l.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!nv(y)){if(l.deleteThrottleMetadata(f),m)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const C=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?l6(i,l.intervalMillis,$y):l6(i,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+C,backoffCount:i+1};return l.setThrottleMetadata(f,A),on.debug(`Calling attemptFetch again in ${C} millis`),p9(r,A,s,l)}}function ev(r,t){return new Promise((i,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(c),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nv(r){if(!(r instanceof Xr)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class iv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rv(r,t,i,s,l){if(l&&l.global){r("event",i,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",i,f)}}/**
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
 */async function av(){if(Bf())try{await jf()}catch(r){return on.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return on.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sv(r,t,i,s,l,c,f){var m;const p=tv(r);p.then(N=>{i[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>on.error(N)),t.push(p);const y=av().then(N=>{if(N)return s.getId()}),[C,A]=await Promise.all([p,y]);Yy(c)||qy(c,C.measurementId),l("js",new Date);const b=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return b[Uy]="firebase",b.update=!0,A!=null&&(b[ky]=A),l("config",C.measurementId,b),C.measurementId}/**
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
 */class ov{constructor(t){this.app=t}_delete(){return delete dl[this.app.options.appId],Promise.resolve()}}let dl={},_6=[];const C6={};let y4="dataLayer",lv="gtag",E6,g9,T6=!1;function uv(){const r=[];if(Mp()&&r.push("This is a browser extension environment."),xp()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),i=yn.create("invalid-analytics-context",{errorInfo:t});on.warn(i.message)}}function cv(r,t,i){uv();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(dl[s]!=null)throw yn.create("already-exists",{id:s});if(!T6){Hy(y4);const{wrappedGtag:c,gtagCore:f}=Ky(dl,_6,C6,y4,lv);g9=c,E6=f,T6=!0}return dl[s]=sv(r,_6,C6,t,E6,y4,i),new ov(r)}function hv(r=Qf()){r=di(r);const t=xl(r,Sc);return t.isInitialized()?t.getImmediate():fv(r)}function fv(r,t={}){const i=xl(r,Sc);if(i.isInitialized()){const l=i.getImmediate();if(Ls(t,i.getOptions()))return l;throw yn.create("already-initialized")}return i.initialize({options:t})}function dv(r,t,i,s){r=di(r),rv(g9,dl[r.app.options.appId],t,i,s).catch(l=>on.error(l))}const A6="@firebase/analytics",S6="0.10.12";function mv(){jr(new Ki(Sc,(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return cv(s,l,i)},"PUBLIC")),jr(new Ki("analytics-internal",r,"PRIVATE")),ui(A6,S6),ui(A6,S6,"esm2017");function r(t){try{const i=t.getProvider(Sc).getImmediate();return{logEvent:(s,l,c)=>dv(i,s,l,c)}}catch(i){throw yn.create("interop-component-reg-failed",{reason:i})}}}mv();var b6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,y9;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,w){function S(){}S.prototype=w.prototype,V.D=w.prototype,V.prototype=new S,V.prototype.constructor=V,V.C=function(M,I,U){for(var R=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)R[Nt-2]=arguments[Nt];return w.prototype[I].apply(M,R)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,w,S){S||(S=0);var M=Array(16);if(typeof w=="string")for(var I=0;16>I;++I)M[I]=w.charCodeAt(S++)|w.charCodeAt(S++)<<8|w.charCodeAt(S++)<<16|w.charCodeAt(S++)<<24;else for(I=0;16>I;++I)M[I]=w[S++]|w[S++]<<8|w[S++]<<16|w[S++]<<24;w=V.g[0],S=V.g[1],I=V.g[2];var U=V.g[3],R=w+(U^S&(I^U))+M[0]+3614090360&4294967295;w=S+(R<<7&4294967295|R>>>25),R=U+(I^w&(S^I))+M[1]+3905402710&4294967295,U=w+(R<<12&4294967295|R>>>20),R=I+(S^U&(w^S))+M[2]+606105819&4294967295,I=U+(R<<17&4294967295|R>>>15),R=S+(w^I&(U^w))+M[3]+3250441966&4294967295,S=I+(R<<22&4294967295|R>>>10),R=w+(U^S&(I^U))+M[4]+4118548399&4294967295,w=S+(R<<7&4294967295|R>>>25),R=U+(I^w&(S^I))+M[5]+1200080426&4294967295,U=w+(R<<12&4294967295|R>>>20),R=I+(S^U&(w^S))+M[6]+2821735955&4294967295,I=U+(R<<17&4294967295|R>>>15),R=S+(w^I&(U^w))+M[7]+4249261313&4294967295,S=I+(R<<22&4294967295|R>>>10),R=w+(U^S&(I^U))+M[8]+1770035416&4294967295,w=S+(R<<7&4294967295|R>>>25),R=U+(I^w&(S^I))+M[9]+2336552879&4294967295,U=w+(R<<12&4294967295|R>>>20),R=I+(S^U&(w^S))+M[10]+4294925233&4294967295,I=U+(R<<17&4294967295|R>>>15),R=S+(w^I&(U^w))+M[11]+2304563134&4294967295,S=I+(R<<22&4294967295|R>>>10),R=w+(U^S&(I^U))+M[12]+1804603682&4294967295,w=S+(R<<7&4294967295|R>>>25),R=U+(I^w&(S^I))+M[13]+4254626195&4294967295,U=w+(R<<12&4294967295|R>>>20),R=I+(S^U&(w^S))+M[14]+2792965006&4294967295,I=U+(R<<17&4294967295|R>>>15),R=S+(w^I&(U^w))+M[15]+1236535329&4294967295,S=I+(R<<22&4294967295|R>>>10),R=w+(I^U&(S^I))+M[1]+4129170786&4294967295,w=S+(R<<5&4294967295|R>>>27),R=U+(S^I&(w^S))+M[6]+3225465664&4294967295,U=w+(R<<9&4294967295|R>>>23),R=I+(w^S&(U^w))+M[11]+643717713&4294967295,I=U+(R<<14&4294967295|R>>>18),R=S+(U^w&(I^U))+M[0]+3921069994&4294967295,S=I+(R<<20&4294967295|R>>>12),R=w+(I^U&(S^I))+M[5]+3593408605&4294967295,w=S+(R<<5&4294967295|R>>>27),R=U+(S^I&(w^S))+M[10]+38016083&4294967295,U=w+(R<<9&4294967295|R>>>23),R=I+(w^S&(U^w))+M[15]+3634488961&4294967295,I=U+(R<<14&4294967295|R>>>18),R=S+(U^w&(I^U))+M[4]+3889429448&4294967295,S=I+(R<<20&4294967295|R>>>12),R=w+(I^U&(S^I))+M[9]+568446438&4294967295,w=S+(R<<5&4294967295|R>>>27),R=U+(S^I&(w^S))+M[14]+3275163606&4294967295,U=w+(R<<9&4294967295|R>>>23),R=I+(w^S&(U^w))+M[3]+4107603335&4294967295,I=U+(R<<14&4294967295|R>>>18),R=S+(U^w&(I^U))+M[8]+1163531501&4294967295,S=I+(R<<20&4294967295|R>>>12),R=w+(I^U&(S^I))+M[13]+2850285829&4294967295,w=S+(R<<5&4294967295|R>>>27),R=U+(S^I&(w^S))+M[2]+4243563512&4294967295,U=w+(R<<9&4294967295|R>>>23),R=I+(w^S&(U^w))+M[7]+1735328473&4294967295,I=U+(R<<14&4294967295|R>>>18),R=S+(U^w&(I^U))+M[12]+2368359562&4294967295,S=I+(R<<20&4294967295|R>>>12),R=w+(S^I^U)+M[5]+4294588738&4294967295,w=S+(R<<4&4294967295|R>>>28),R=U+(w^S^I)+M[8]+2272392833&4294967295,U=w+(R<<11&4294967295|R>>>21),R=I+(U^w^S)+M[11]+1839030562&4294967295,I=U+(R<<16&4294967295|R>>>16),R=S+(I^U^w)+M[14]+4259657740&4294967295,S=I+(R<<23&4294967295|R>>>9),R=w+(S^I^U)+M[1]+2763975236&4294967295,w=S+(R<<4&4294967295|R>>>28),R=U+(w^S^I)+M[4]+1272893353&4294967295,U=w+(R<<11&4294967295|R>>>21),R=I+(U^w^S)+M[7]+4139469664&4294967295,I=U+(R<<16&4294967295|R>>>16),R=S+(I^U^w)+M[10]+3200236656&4294967295,S=I+(R<<23&4294967295|R>>>9),R=w+(S^I^U)+M[13]+681279174&4294967295,w=S+(R<<4&4294967295|R>>>28),R=U+(w^S^I)+M[0]+3936430074&4294967295,U=w+(R<<11&4294967295|R>>>21),R=I+(U^w^S)+M[3]+3572445317&4294967295,I=U+(R<<16&4294967295|R>>>16),R=S+(I^U^w)+M[6]+76029189&4294967295,S=I+(R<<23&4294967295|R>>>9),R=w+(S^I^U)+M[9]+3654602809&4294967295,w=S+(R<<4&4294967295|R>>>28),R=U+(w^S^I)+M[12]+3873151461&4294967295,U=w+(R<<11&4294967295|R>>>21),R=I+(U^w^S)+M[15]+530742520&4294967295,I=U+(R<<16&4294967295|R>>>16),R=S+(I^U^w)+M[2]+3299628645&4294967295,S=I+(R<<23&4294967295|R>>>9),R=w+(I^(S|~U))+M[0]+4096336452&4294967295,w=S+(R<<6&4294967295|R>>>26),R=U+(S^(w|~I))+M[7]+1126891415&4294967295,U=w+(R<<10&4294967295|R>>>22),R=I+(w^(U|~S))+M[14]+2878612391&4294967295,I=U+(R<<15&4294967295|R>>>17),R=S+(U^(I|~w))+M[5]+4237533241&4294967295,S=I+(R<<21&4294967295|R>>>11),R=w+(I^(S|~U))+M[12]+1700485571&4294967295,w=S+(R<<6&4294967295|R>>>26),R=U+(S^(w|~I))+M[3]+2399980690&4294967295,U=w+(R<<10&4294967295|R>>>22),R=I+(w^(U|~S))+M[10]+4293915773&4294967295,I=U+(R<<15&4294967295|R>>>17),R=S+(U^(I|~w))+M[1]+2240044497&4294967295,S=I+(R<<21&4294967295|R>>>11),R=w+(I^(S|~U))+M[8]+1873313359&4294967295,w=S+(R<<6&4294967295|R>>>26),R=U+(S^(w|~I))+M[15]+4264355552&4294967295,U=w+(R<<10&4294967295|R>>>22),R=I+(w^(U|~S))+M[6]+2734768916&4294967295,I=U+(R<<15&4294967295|R>>>17),R=S+(U^(I|~w))+M[13]+1309151649&4294967295,S=I+(R<<21&4294967295|R>>>11),R=w+(I^(S|~U))+M[4]+4149444226&4294967295,w=S+(R<<6&4294967295|R>>>26),R=U+(S^(w|~I))+M[11]+3174756917&4294967295,U=w+(R<<10&4294967295|R>>>22),R=I+(w^(U|~S))+M[2]+718787259&4294967295,I=U+(R<<15&4294967295|R>>>17),R=S+(U^(I|~w))+M[9]+3951481745&4294967295,V.g[0]=V.g[0]+w&4294967295,V.g[1]=V.g[1]+(I+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+I&4294967295,V.g[3]=V.g[3]+U&4294967295}s.prototype.u=function(V,w){w===void 0&&(w=V.length);for(var S=w-this.blockSize,M=this.B,I=this.h,U=0;U<w;){if(I==0)for(;U<=S;)l(this,V,U),U+=this.blockSize;if(typeof V=="string"){for(;U<w;)if(M[I++]=V.charCodeAt(U++),I==this.blockSize){l(this,M),I=0;break}}else for(;U<w;)if(M[I++]=V[U++],I==this.blockSize){l(this,M),I=0;break}}this.h=I,this.o+=w},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var w=1;w<V.length-8;++w)V[w]=0;var S=8*this.o;for(w=V.length-8;w<V.length;++w)V[w]=S&255,S/=256;for(this.u(V),V=Array(16),w=S=0;4>w;++w)for(var M=0;32>M;M+=8)V[S++]=this.g[w]>>>M&255;return V};function c(V,w){var S=m;return Object.prototype.hasOwnProperty.call(S,V)?S[V]:S[V]=w(V)}function f(V,w){this.h=w;for(var S=[],M=!0,I=V.length-1;0<=I;I--){var U=V[I]|0;M&&U==w||(S[I]=U,M=!1)}this.g=S}var m={};function p(V){return-128<=V&&128>V?c(V,function(w){return new f([w|0],0>w?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return A;if(0>V)return k(y(-V));for(var w=[],S=1,M=0;V>=S;M++)w[M]=V/S|0,S*=4294967296;return new f(w,0)}function C(V,w){if(V.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V.charAt(0)=="-")return k(C(V.substring(1),w));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(w,8)),M=A,I=0;I<V.length;I+=8){var U=Math.min(8,V.length-I),R=parseInt(V.substring(I,I+U),w);8>U?(U=y(Math.pow(w,U)),M=M.j(U).add(y(R))):(M=M.j(S),M=M.add(y(R)))}return M}var A=p(0),b=p(1),N=p(16777216);r=f.prototype,r.m=function(){if(H(this))return-k(this).m();for(var V=0,w=1,S=0;S<this.g.length;S++){var M=this.i(S);V+=(0<=M?M:4294967296+M)*w,w*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(O(this))return"0";if(H(this))return"-"+k(this).toString(V);for(var w=y(Math.pow(V,6)),S=this,M="";;){var I=yt(S,w).g;S=Q(S,I.j(w));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(V);if(S=I,O(S))return U+M;for(;6>U.length;)U="0"+U;M=U+M}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function O(V){if(V.h!=0)return!1;for(var w=0;w<V.g.length;w++)if(V.g[w]!=0)return!1;return!0}function H(V){return V.h==-1}r.l=function(V){return V=Q(this,V),H(V)?-1:O(V)?0:1};function k(V){for(var w=V.g.length,S=[],M=0;M<w;M++)S[M]=~V.g[M];return new f(S,~V.h).add(b)}r.abs=function(){return H(this)?k(this):this},r.add=function(V){for(var w=Math.max(this.g.length,V.g.length),S=[],M=0,I=0;I<=w;I++){var U=M+(this.i(I)&65535)+(V.i(I)&65535),R=(U>>>16)+(this.i(I)>>>16)+(V.i(I)>>>16);M=R>>>16,U&=65535,R&=65535,S[I]=R<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function Q(V,w){return V.add(k(w))}r.j=function(V){if(O(this)||O(V))return A;if(H(this))return H(V)?k(this).j(k(V)):k(k(this).j(V));if(H(V))return k(this.j(k(V)));if(0>this.l(N)&&0>V.l(N))return y(this.m()*V.m());for(var w=this.g.length+V.g.length,S=[],M=0;M<2*w;M++)S[M]=0;for(M=0;M<this.g.length;M++)for(var I=0;I<V.g.length;I++){var U=this.i(M)>>>16,R=this.i(M)&65535,Nt=V.i(I)>>>16,xt=V.i(I)&65535;S[2*M+2*I]+=R*xt,nt(S,2*M+2*I),S[2*M+2*I+1]+=U*xt,nt(S,2*M+2*I+1),S[2*M+2*I+1]+=R*Nt,nt(S,2*M+2*I+1),S[2*M+2*I+2]+=U*Nt,nt(S,2*M+2*I+2)}for(M=0;M<w;M++)S[M]=S[2*M+1]<<16|S[2*M];for(M=w;M<2*w;M++)S[M]=0;return new f(S,0)};function nt(V,w){for(;(V[w]&65535)!=V[w];)V[w+1]+=V[w]>>>16,V[w]&=65535,w++}function it(V,w){this.g=V,this.h=w}function yt(V,w){if(O(w))throw Error("division by zero");if(O(V))return new it(A,A);if(H(V))return w=yt(k(V),w),new it(k(w.g),k(w.h));if(H(w))return w=yt(V,k(w)),new it(k(w.g),w.h);if(30<V.g.length){if(H(V)||H(w))throw Error("slowDivide_ only works with positive integers.");for(var S=b,M=w;0>=M.l(V);)S=dt(S),M=dt(M);var I=Et(S,1),U=Et(M,1);for(M=Et(M,2),S=Et(S,2);!O(M);){var R=U.add(M);0>=R.l(V)&&(I=I.add(S),U=R),M=Et(M,1),S=Et(S,1)}return w=Q(V,I.j(w)),new it(I,w)}for(I=A;0<=V.l(w);){for(S=Math.max(1,Math.floor(V.m()/w.m())),M=Math.ceil(Math.log(S)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),U=y(S),R=U.j(w);H(R)||0<R.l(V);)S-=M,U=y(S),R=U.j(w);O(U)&&(U=b),I=I.add(U),V=Q(V,R)}return new it(I,V)}r.A=function(V){return yt(this,V).h},r.and=function(V){for(var w=Math.max(this.g.length,V.g.length),S=[],M=0;M<w;M++)S[M]=this.i(M)&V.i(M);return new f(S,this.h&V.h)},r.or=function(V){for(var w=Math.max(this.g.length,V.g.length),S=[],M=0;M<w;M++)S[M]=this.i(M)|V.i(M);return new f(S,this.h|V.h)},r.xor=function(V){for(var w=Math.max(this.g.length,V.g.length),S=[],M=0;M<w;M++)S[M]=this.i(M)^V.i(M);return new f(S,this.h^V.h)};function dt(V){for(var w=V.g.length+1,S=[],M=0;M<w;M++)S[M]=V.i(M)<<1|V.i(M-1)>>>31;return new f(S,V.h)}function Et(V,w){var S=w>>5;w%=32;for(var M=V.g.length-S,I=[],U=0;U<M;U++)I[U]=0<w?V.i(U+S)>>>w|V.i(U+S+1)<<32-w:V.i(U+S);return new f(I,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,y9=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=C,Pr=f}).apply(typeof b6<"u"?b6:typeof self<"u"?self:typeof window<"u"?window:{});var oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v9,ul,_9,mc,I4,C9,E9,T9;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof oc=="object"&&oc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=i(this);function l(u,g){if(g)t:{var v=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break t;v=v[j]}u=u[u.length-1],T=v[u],g=g(T),g!=T&&g!=null&&t(v,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var K=v++;return{value:g(K,u[K]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}l("Array.prototype.values",function(u){return u||function(){return c(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function y(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function C(u,g,v){return u.call.apply(u.bind,arguments)}function A(u,g,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(g,j)}}return function(){return u.apply(g,arguments)}}function b(u,g,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:A,b.apply(null,arguments)}function N(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function O(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,K){for(var at=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)at[Ut-2]=arguments[Ut];return g.prototype[j].apply(T,at)}}function H(u){const g=u.length;if(0<g){const v=Array(g);for(let T=0;T<g;T++)v[T]=u[T];return v}return[]}function k(u,g){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const j=u.length||0,K=T.length||0;u.length=j+K;for(let at=0;at<K;at++)u[j+at]=T[at]}else u.push(T)}}class Q{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function nt(u){return/^[\s\xa0]*$/.test(u)}function it(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function yt(u){return yt[" "](u),u}yt[" "]=function(){};var dt=it().indexOf("Gecko")!=-1&&!(it().toLowerCase().indexOf("webkit")!=-1&&it().indexOf("Edge")==-1)&&!(it().indexOf("Trident")!=-1||it().indexOf("MSIE")!=-1)&&it().indexOf("Edge")==-1;function Et(u,g,v){for(const T in u)g.call(v,u[T],T,u)}function V(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function w(u){const g={};for(const v in u)g[v]=u[v];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(u,g){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let K=0;K<S.length;K++)v=S[K],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function I(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function U(u){m.setTimeout(()=>{throw u},0)}function R(){var u=W;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class Nt{constructor(){this.h=this.g=null}add(g,v){const T=xt.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var xt=new Q(()=>new rt,u=>u.reset());class rt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,st=!1,W=new Nt,x=()=>{const u=m.Promise.resolve(void 0);ht=()=>{u.then(J)}};var J=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(v){U(v)}var g=xt;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}st=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return u}();function Rt(u,g){if(ot.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(dt){t:{try{yt(g.nodeName);var j=!0;break t}catch{}j=!1}j||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:bt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}O(Rt,ot);var bt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),jt=0;function ae(u,g,v,T,j){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=j,this.key=++jt,this.da=this.fa=!1}function Kt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function $e(u){this.src=u,this.g={},this.h=0}$e.prototype.add=function(u,g,v,T,j){var K=u.toString();u=this.g[K],u||(u=this.g[K]=[],this.h++);var at=vn(u,g,T,j);return-1<at?(g=u[at],v||(g.fa=!1)):(g=new ae(g,this.src,K,!!T,j),g.fa=v,u.push(g)),g};function yi(u,g){var v=g.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,g,void 0),K;(K=0<=j)&&Array.prototype.splice.call(T,j,1),K&&(Kt(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function vn(u,g,v,T){for(var j=0;j<u.length;++j){var K=u[j];if(!K.da&&K.listener==g&&K.capture==!!v&&K.ha==T)return j}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Ji={};function vi(u,g,v,T,j){if(Array.isArray(g)){for(var K=0;K<g.length;K++)vi(u,g[K],v,T,j);return null}return v=Pl(v),u&&u[de]?u.K(g,v,y(T)?!!T.capture:!1,j):Js(u,g,v,!1,T,j)}function Js(u,g,v,T,j,K){if(!g)throw Error("Invalid event type");var at=y(j)?!!j.capture:!!j,Ut=to(u);if(Ut||(u[Wi]=Ut=new $e(u)),v=Ut.add(g,v,T,at,K),v.proxy)return v;if(T=ja(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)ut||(j=at),j===void 0&&(j=!1),u.addEventListener(g.toString(),T,j);else if(u.attachEvent)u.attachEvent(Ha(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ja(){function u(v){return g.call(u.src,u.listener,v)}const g=a1;return u}function qa(u,g,v,T,j){if(Array.isArray(g))for(var K=0;K<g.length;K++)qa(u,g[K],v,T,j);else T=y(T)?!!T.capture:!!T,v=Pl(v),u&&u[de]?(u=u.i,g=String(g).toString(),g in u.g&&(K=u.g[g],v=vn(K,v,T,j),-1<v&&(Kt(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete u.g[g],u.h--)))):u&&(u=to(u))&&(g=u.g[g.toString()],u=-1,g&&(u=vn(g,v,T,j)),(v=-1<u?g[u]:null)&&Jr(v))}function Jr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[de])yi(g.i,u);else{var v=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(v,T,u.capture):g.detachEvent?g.detachEvent(Ha(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=to(g))?(yi(v,u),v.h==0&&(v.src=null,g[Wi]=null)):Kt(u)}}}function Ha(u){return u in Ji?Ji[u]:Ji[u]="on"+u}function a1(u,g){if(u.da)u=!0;else{g=new Rt(g,this);var v=u.listener,T=u.ha||u.src;u.fa&&Jr(u),u=v.call(T,g)}return u}function to(u){return u=u[Wi],u instanceof $e?u:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pl(u){return typeof u=="function"?u:(u[en]||(u[en]=function(g){return u.handleEvent(g)}),u[en])}function ve(){lt.call(this),this.i=new $e(this),this.M=this,this.F=null}O(ve,lt),ve.prototype[de]=!0,ve.prototype.removeEventListener=function(u,g,v,T){qa(this,u,g,v,T)};function De(u,g){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new ot(g,u);else if(g instanceof ot)g.target=g.target||u;else{var j=g;g=new ot(T,u),M(g,j)}if(j=!0,v)for(var K=v.length-1;0<=K;K--){var at=g.g=v[K];j=_i(at,T,!0,g)&&j}if(at=g.g=u,j=_i(at,T,!0,g)&&j,j=_i(at,T,!1,g)&&j,v)for(K=0;K<v.length;K++)at=g.g=v[K],j=_i(at,T,!1,g)&&j}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],T=0;T<v.length;T++)Kt(v[T]);delete u.g[g],u.h--}}this.F=null},ve.prototype.K=function(u,g,v,T){return this.i.add(String(u),g,!1,v,T)},ve.prototype.L=function(u,g,v,T){return this.i.add(String(u),g,!0,v,T)};function _i(u,g,v,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,K=0;K<g.length;++K){var at=g[K];if(at&&!at.da&&at.capture==v){var Ut=at.listener,Ce=at.ha||at.src;at.fa&&yi(u.i,at),j=Ut.call(Ce,T)!==!1&&j}}return j&&!T.defaultPrevented}function Bl(u,g,v){if(typeof u=="function")v&&(u=b(u,v));else if(u&&typeof u.handleEvent=="function")u=b(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(u,g||0)}function eo(u){u.g=Bl(()=>{u.g=null,u.i&&(u.i=!1,eo(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class s1 extends lt{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:eo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ta(u){lt.call(this),this.h=u,this.g={}}O(ta,lt);var tr=[];function He(u){Et(u.g,function(g,v){this.g.hasOwnProperty(v)&&Jr(g)},u),u.g={}}ta.prototype.N=function(){ta.aa.N.call(this),He(this)},ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var no=m.JSON.stringify,Qn=m.JSON.parse,Xe=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function io(){}io.prototype.h=null;function jl(u){return u.h||(u.h=u.i())}function ql(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){ot.call(this,"d")}O(er,ot);function zn(){ot.call(this,"c")}O(zn,ot);var _n={},nr=null;function Fa(){return nr=nr||new ve}_n.La="serverreachability";function ro(u){ot.call(this,_n.La,u)}O(ro,ot);function ir(u){const g=Fa();De(g,new ro(g))}_n.STAT_EVENT="statevent";function Ga(u,g){ot.call(this,_n.STAT_EVENT,u),this.stat=g}O(Ga,ot);function ce(u){const g=Fa();De(g,new Ga(g,u))}_n.Ma="timingevent";function Hl(u,g){ot.call(this,_n.Ma,u),this.size=g}O(Hl,ot);function rr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},g)}function ar(){this.g=!0}ar.prototype.xa=function(){this.g=!1};function Fl(u,g,v,T,j,K){u.info(function(){if(u.g)if(K)for(var at="",Ut=K.split("&"),Ce=0;Ce<Ut.length;Ce++){var Lt=Ut[Ce].split("=");if(1<Lt.length){var xe=Lt[0];Lt=Lt[1];var Ee=xe.split("_");at=2<=Ee.length&&Ee[1]=="type"?at+(xe+"="+Lt+"&"):at+(xe+"=redacted&")}}else at=null;else at=K;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+g+`
`+v+`
`+at})}function Gl(u,g,v,T,j,K,at){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+g+`
`+v+`
`+K+" "+at})}function sr(u,g,v,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Me(u,v)+(T?" "+T:"")})}function Yn(u,g){u.info(function(){return"TIMEOUT: "+g})}ar.prototype.info=function(){};function Me(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var at=1;at<j.length;at++)j[at]=""}}}}return no(v)}catch{return g}}var _e={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ea;function Qa(){}O(Qa,io),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},ea=new Qa;function $n(u,g,v,T){this.j=u,this.i=g,this.l=v,this.R=T||1,this.U=new ta(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}var or={},na={};function Pn(u,g,v){u.L=1,u.v=aa(se(g)),u.m=v,u.P=!0,Ei(u,null)}function Ei(u,g){u.F=Date.now(),ee(u),u.A=se(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Si(v.i,"t",T),u.C=0,v=u.j.J,u.h=new ao,u.g=au(u.j,v?g:null,!u.m),0<u.O&&(u.M=new s1(b(u.Y,u,u.g),u.O)),g=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(tr[0]=j.toString()),j=tr);for(var K=0;K<j.length;K++){var at=vi(v,j[K],T||g.handleEvent,!1,g.h||g);if(!at)break;g.g[at.key]=at}g=u.H?w(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),ir(),Fl(u.i,u.u,u.A,u.l,u.R,u.m)}$n.prototype.ca=function(u){u=u.target;const g=this.M;g&&Sn(u)==3?g.j():this.Y(u)},$n.prototype.Y=function(u){try{if(u==this.g)t:{const Ee=Sn(this.g);var g=this.g.Ba();const Di=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||Zl(this.g)))){this.J||Ee!=4||g==7||(g==8||0>=Di?ir(3):ir(2)),Ka(this);var v=this.g.Z();this.X=v;e:if(lr(this)){var T=Zl(this.g);u="";var j=T.length,K=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),un(this);var at="";break e}this.h.i=new m.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,u+=this.h.i.decode(T[g],{stream:!(K&&g==j-1)});T.length=0,this.h.g+=u,this.C=0,at=this.h.g}else at=this.g.oa();if(this.o=v==200,Gl(this.i,this.u,this.A,this.l,this.R,Ee,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,Ce=this.g;if((Ut=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nt(Ut)){var Lt=Ut;break e}}Lt=null}if(v=Lt)sr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cn(this,v);else{this.o=!1,this.s=3,ce(12),nn(this),un(this);break t}}if(this.P){v=!0;let Ue;for(;!this.J&&this.C<at.length;)if(Ue=ur(this,at),Ue==na){Ee==4&&(this.s=4,ce(14),v=!1),sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==or){this.s=4,ce(15),sr(this.i,this.l,at,"[Invalid Chunk]"),v=!1;break}else sr(this.i,this.l,Ue,null),cn(this,Ue);if(lr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||at.length!=0||this.h.h||(this.s=1,ce(16),v=!1),this.o=this.o&&v,!v)sr(this.i,this.l,at,"[Invalid Chunked Response]"),nn(this),un(this);else if(0<at.length&&!this.W){this.W=!0;var xe=this.j;xe.g==this&&xe.ba&&!xe.M&&(xe.j.info("Great, no buffering proxy detected. Bytes received: "+at.length),fa(xe),xe.M=!0,ce(11))}}else sr(this.i,this.l,at,null),cn(this,at);Ee==4&&nn(this),this.o&&!this.J&&(Ee==4?nu(this.j,this):(this.o=!1,ee(this)))}else f1(this.g),v==400&&0<at.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),nn(this),un(this)}}}catch{}finally{}};function lr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ur(u,g){var v=u.C,T=g.indexOf(`
`,v);return T==-1?na:(v=Number(g.substring(v,T)),isNaN(v)?or:(T+=1,T+v>g.length?na:(g=g.slice(T,T+v),u.C=T+v,g)))}$n.prototype.cancel=function(){this.J=!0,nn(this)};function ee(u){u.S=Date.now()+u.I,so(u,u.I)}function so(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=rr(b(u.ba,u),g)}function Ka(u){u.B&&(m.clearTimeout(u.B),u.B=null)}$n.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yn(this.i,this.A),this.L!=2&&(ir(),ce(17)),nn(this),this.s=2,un(this)):so(this,this.S-u)};function un(u){u.j.G==0||u.J||nu(u.j,u)}function nn(u){Ka(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,He(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function cn(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||cr(v.h,u))){if(!u.K&&cr(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)is(v),es(v);else break t;vo(v),ce(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=rr(b(v.Za,v),6e3));if(1>=Ql(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ri(v,11)}else if((u.K||v.g==u)&&is(v),!nt(g))for(j=v.Da.g.parse(g),g=0;g<j.length;g++){let Lt=j[g];if(v.T=Lt[0],Lt=Lt[1],v.G==2)if(Lt[0]=="c"){v.K=Lt[1],v.ia=Lt[2];const xe=Lt[3];xe!=null&&(v.la=xe,v.j.info("VER="+v.la));const Ee=Lt[4];Ee!=null&&(v.Aa=Ee,v.j.info("SVER="+v.Aa));const Di=Lt[5];Di!=null&&typeof Di=="number"&&0<Di&&(T=1.5*Di,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const Ue=u.g;if(Ue){const ni=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var K=T.h;K.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(hr(K,K.h),K.h=null))}if(T.D){const Co=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(T.ya=Co,qt(T.I,T.D,Co))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var at=u;if(T.qa=ru(T,T.J?T.ia:null,T.W),at.K){Cn(T.h,at);var Ut=at,Ce=T.L;Ce&&(Ut.I=Ce),Ut.B&&(Ka(Ut),ee(Ut)),T.g=at}else tu(T);0<v.i.length&&ns(v)}else Lt[0]!="stop"&&Lt[0]!="close"||Ri(v,7);else v.G==3&&(Lt[0]=="stop"||Lt[0]=="close"?Lt[0]=="stop"?Ri(v,7):go(v):Lt[0]!="noop"&&v.l&&v.l.ta(Lt),v.v=0)}}ir(4)}catch{}}var o1=class{constructor(u,g){this.g=u,this.map=g}};function oo(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ql(u){return u.h?1:u.g?u.g.size:0}function cr(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function hr(u,g){u.g?u.g.add(g):u.h=g}function Cn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}oo.prototype.cancel=function(){if(this.i=Ze(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ze(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return H(u.i)}function Kl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var g=[],v=u.length,T=0;T<v;T++)g.push(u[T]);return g}g=[],v=0;for(T in u)g[v++]=u[T];return g}function l1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const T in u)g[v++]=T;return g}}}function ia(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=l1(u),T=Kl(u),j=T.length,K=0;K<j;K++)g.call(void 0,T[K],v&&v[K],u)}var uo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ya(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var K=u[v].substring(0,T);j=u[v].substring(T+1)}else K=u[v];g(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ti(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ti){this.h=u.h,fr(this,u.j),this.o=u.o,this.g=u.g,ra(this,u.s),this.l=u.l;var g=u.i,v=new Xn;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),$a(this,v),this.m=u.m}else u&&(g=String(u).match(uo))?(this.h=!1,fr(this,g[1]||"",!0),this.o=dr(g[2]||""),this.g=dr(g[3]||"",!0),ra(this,g[4]),this.l=dr(g[5]||"",!0),$a(this,g[6]||"",!0),this.m=dr(g[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}Ti.prototype.toString=function(){var u=[],g=this.j;g&&u.push(En(g,co,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(En(g,co,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(En(v,v.charAt(0)=="/"?ho:Yl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",En(v,h1)),u.join("")};function se(u){return new Ti(u)}function fr(u,g,v){u.j=v?dr(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function ra(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function $a(u,g,v){g instanceof Xn?(u.i=g,fo(u.i,u.h)):(v||(g=En(g,c1)),u.i=new Xn(g,u.h))}function qt(u,g,v){u.i.set(g,v)}function aa(u){return qt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function dr(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function En(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,u1),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function u1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var co=/[#\/\?@]/g,Yl=/[#\?:]/g,ho=/[#\?]/g,c1=/[#\?@]/g,h1=/#/g;function Xn(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Tn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ya(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=Xn.prototype,r.add=function(u,g){Tn(this),this.i=null,u=bi(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function Xa(u,g){Tn(u),g=bi(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Ai(u,g){return Tn(u),g=bi(u,g),u.g.has(g)}r.forEach=function(u,g){Tn(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(g,j,T,this)},this)},this)},r.na=function(){Tn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let T=0;T<g.length;T++){const j=u[T];for(let K=0;K<j.length;K++)v.push(g[T])}return v},r.V=function(u){Tn(this);let g=[];if(typeof u=="string")Ai(this,u)&&(g=g.concat(this.g.get(bi(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},r.set=function(u,g){return Tn(this),this.i=null,u=bi(this,u),Ai(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function Si(u,g,v){Xa(u,g),0<v.length&&(u.i=null,u.g.set(bi(u,g),H(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var T=g[v];const K=encodeURIComponent(String(T)),at=this.V(T);for(T=0;T<at.length;T++){var j=K;at[T]!==""&&(j+="="+encodeURIComponent(String(at[T]))),u.push(j)}}return this.i=u.join("&")};function bi(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function fo(u,g){g&&!u.j&&(Tn(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(Xa(this,T),Si(this,j,v))},u)),u.j=g}function $l(u,g){const v=new ar;if(m.Image){const T=new Image;T.onload=N(An,v,"TestLoadImage: loaded",!0,g,T),T.onerror=N(An,v,"TestLoadImage: error",!1,g,T),T.onabort=N(An,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=N(An,v,"TestLoadImage: timeout",!1,g,T),m.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function sa(u,g){const v=new ar,T=new AbortController,j=setTimeout(()=>{T.abort(),An(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(K=>{clearTimeout(j),K.ok?An(v,"TestPingServer: ok",!0,g):An(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),An(v,"TestPingServer: error",!1,g)})}function An(u,g,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function oa(){this.g=new Xe}function Zn(u,g,v){const T=v||"";try{ia(u,function(j,K){let at=j;y(j)&&(at=no(j)),g.push(T+K+"="+encodeURIComponent(at))})}catch(j){throw g.push(T+"type="+encodeURIComponent("_badmap")),j}}function mr(u){this.l=u.Ub||null,this.j=u.eb||!1}O(mr,io),mr.prototype.g=function(){return new wi(this.l,this.j)},mr.prototype.i=function(u){return function(){return u}}({});function wi(u,g){ve.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(wi,ve),r=wi.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Jn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function mo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Wn(this):Jn(this),this.readyState==3&&mo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Wn(this))},r.Qa=function(u){this.g&&(this.response=u,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Jn(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function Jn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function po(u){let g="";return Et(u,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function Ie(u,g,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=po(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):qt(u,g,v))}function Gt(u){ve.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Gt,ve);var Za=/^https?$/i,la=["POST","PUT"];r=Gt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ea.g(),this.v=this.o?jl(this.o):jl(ea),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(K){Xl(this,K);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const K of T.keys())v.set(K,T.get(K));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),j=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(la,g,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,at]of v)this.g.setRequestHeader(K,at);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ua(this),this.u=!0,this.g.send(u),this.u=!1}catch(K){Xl(this,K)}};function Xl(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,Wa(u),ti(u)}function Wa(u){u.A||(u.A=!0,De(u,"complete"),De(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,De(this,"complete"),De(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),Gt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},r.bb=function(){Ja(this)};function Ja(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Sn(u)!=4||u.Z()!=2)){if(u.u&&Sn(u)==4)Bl(u.Ea,0,u);else if(De(u,"readystatechange"),Sn(u)==4){u.h=!1;try{const at=u.Z();t:switch(at){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var T;if(T=at===0){var j=String(u.D).match(uo)[1]||null;!j&&m.self&&m.self.location&&(j=m.self.location.protocol.slice(0,-1)),T=!Za.test(j?j.toLowerCase():"")}v=T}if(v)De(u,"complete"),De(u,"success");else{u.m=6;try{var K=2<Sn(u)?u.g.statusText:""}catch{K=""}u.l=K+" ["+u.Z()+"]",Wa(u)}}finally{ti(u)}}}}function ti(u,g){if(u.g){ua(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||De(u,"ready");try{v.onreadystatechange=T}catch{}}}function ua(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Sn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Qn(g)}};function Zl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function f1(u){const g={};u=(u.g&&2<=Sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(nt(u[T]))continue;var v=I(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=g[j]||[];g[j]=K,K.push(v)}V(g,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ca(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function ts(u){this.Aa=0,this.i=[],this.j=new ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ca("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ca("baseRetryDelayMs",5e3,u),this.cb=ca("retryDelaySeedMs",1e4,u),this.Wa=ca("forwardChannelMaxRetries",2,u),this.wa=ca("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new oo(u&&u.concurrentRequestLimit),this.Da=new oa,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ts.prototype,r.la=8,r.G=1,r.connect=function(u,g,v,T){ce(0),this.W=u,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=ru(this,null,this.W),ns(this)};function go(u){if(Wl(u),u.G==3){var g=u.U++,v=se(u.I);if(qt(v,"SID",u.K),qt(v,"RID",g),qt(v,"TYPE","terminate"),ha(u,v),g=new $n(u,u.j,g),g.L=2,g.v=aa(se(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=au(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ee(g)}iu(u)}function es(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function Wl(u){es(u),u.u&&(m.clearTimeout(u.u),u.u=null),is(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function ns(u){if(!lo(u.h)&&!u.s){u.s=!0;var g=u.Ga;ht||x(),st||(ht(),st=!0),W.add(g,u),u.B=0}}function d1(u,g){return Ql(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=rr(b(u.Ga,u,g),_o(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new $n(this,this.j,u);let K=this.o;if(this.S&&(K?(K=w(K),M(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=Jl(this,j,g),v=se(this.I),qt(v,"RID",u),qt(v,"CVER",22),this.D&&qt(v,"X-HTTP-Session-Id",this.D),ha(this,v),K&&(this.O?g="headers="+encodeURIComponent(String(po(K)))+"&"+g:this.m&&Ie(v,this.m,K)),hr(this.h,j),this.Ua&&qt(v,"TYPE","init"),this.P?(qt(v,"$req",g),qt(v,"SID","null"),j.T=!0,Pn(j,v,null)):Pn(j,v,g),this.G=2}}else this.G==3&&(u?yo(this,u):this.i.length==0||lo(this.h)||yo(this))};function yo(u,g){var v;g?v=g.l:v=u.U++;const T=se(u.I);qt(T,"SID",u.K),qt(T,"RID",v),qt(T,"AID",u.T),ha(u,T),u.m&&u.o&&Ie(T,u.m,u.o),v=new $n(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=Jl(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),hr(u.h,v),Pn(v,T,g)}function ha(u,g){u.H&&Et(u.H,function(v,T){qt(g,T,v)}),u.l&&ia({},function(v,T){qt(g,T,v)})}function Jl(u,g,v){v=Math.min(u.i.length,v);var T=u.l?b(u.l.Na,u.l,u):null;t:{var j=u.i;let K=-1;for(;;){const at=["count="+v];K==-1?0<v?(K=j[0].g,at.push("ofs="+K)):K=0:at.push("ofs="+K);let Ut=!0;for(let Ce=0;Ce<v;Ce++){let Lt=j[Ce].g;const xe=j[Ce].map;if(Lt-=K,0>Lt)K=Math.max(0,j[Ce].g-100),Ut=!1;else try{Zn(xe,at,"req"+Lt+"_")}catch{T&&T(xe)}}if(Ut){T=at.join("&");break t}}}return u=u.i.splice(0,v),g.D=u,T}function tu(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;ht||x(),st||(ht(),st=!0),W.add(g,u),u.v=0}}function vo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=rr(b(u.Fa,u),_o(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=rr(b(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),es(this),eu(this))};function fa(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function eu(u){u.g=new $n(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=se(u.qa);qt(g,"RID","rpc"),qt(g,"SID",u.K),qt(g,"AID",u.T),qt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&qt(g,"TO",u.ja),qt(g,"TYPE","xmlhttp"),ha(u,g),u.m&&u.o&&Ie(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=aa(se(g)),v.m=null,v.P=!0,Ei(v,u)}r.Za=function(){this.C!=null&&(this.C=null,es(this),vo(this),ce(19))};function is(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function nu(u,g){var v=null;if(u.g==g){is(u),fa(u),u.g=null;var T=2}else if(cr(u.h,g))v=g.D,Cn(u.h,g),T=1;else return;if(u.G!=0){if(g.o)if(T==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var j=u.B;T=Fa(),De(T,new Hl(T,v)),ns(u)}else tu(u);else if(j=g.s,j==3||j==0&&0<g.X||!(T==1&&d1(u,g)||T==2&&vo(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),j){case 1:Ri(u,5);break;case 4:Ri(u,10);break;case 3:Ri(u,6);break;default:Ri(u,2)}}}function _o(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function Ri(u,g){if(u.j.info("Error code "+g),g==2){var v=b(u.fb,u),T=u.Xa;const j=!T;T=new Ti(T||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||fr(T,"https"),aa(T),j?$l(T.toString(),v):sa(T.toString(),v)}else ce(2);u.G=0,u.l&&u.l.sa(g),iu(u),Wl(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function iu(u){if(u.G=0,u.ka=[],u.l){const g=Ze(u.h);(g.length!=0||u.i.length!=0)&&(k(u.ka,g),k(u.ka,u.i),u.h.i.length=0,H(u.i),u.i.length=0),u.l.ra()}}function ru(u,g,v){var T=v instanceof Ti?se(v):new Ti(v);if(T.g!="")g&&(T.g=g+"."+T.g),ra(T,T.s);else{var j=m.location;T=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var K=new Ti(null);T&&fr(K,T),g&&(K.g=g),j&&ra(K,j),v&&(K.l=v),T=K}return v=u.D,g=u.ya,v&&g&&qt(T,v,g),qt(T,"VER",u.la),ha(u,T),T}function au(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new Gt(new mr({eb:v})):new Gt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}r=su.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function rs(){}rs.prototype.g=function(u,g){return new We(u,g)};function We(u,g){ve.call(this),this.g=new ts(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!nt(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!nt(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new ei(this)}O(We,ve),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){go(this.g)},We.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=no(u),u=v);g.i.push(new o1(g.Ya++,u)),g.G==3&&ns(g)},We.prototype.N=function(){this.g.l=null,delete this.j,go(this.g),delete this.g,We.aa.N.call(this)};function ou(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const v in g){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}O(ou,er);function lu(){zn.call(this),this.status=1}O(lu,zn);function ei(u){this.g=u}O(ei,su),ei.prototype.ua=function(){De(this.g,"a")},ei.prototype.ta=function(u){De(this.g,new ou(u))},ei.prototype.sa=function(u){De(this.g,new lu)},ei.prototype.ra=function(){De(this.g,"b")},rs.prototype.createWebChannel=rs.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,T9=function(){return new rs},E9=function(){return Fa()},C9=_n,I4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,mc=_e,Ci.COMPLETE="complete",_9=Ci,ql.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,ul=ql,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,v9=Gt}).apply(typeof oc<"u"?oc:typeof self<"u"?self:typeof window<"u"?window:{});const w6="@firebase/firestore",R6="4.7.9";/**
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
 */class Ke{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let Ys="11.4.0";/**
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
 */const Ua=new e2("@firebase/firestore");function xs(){return Ua.logLevel}function ct(r,...t){if(Ua.logLevel<=Bt.DEBUG){const i=t.map(l2);Ua.debug(`Firestore (${Ys}): ${r}`,...i)}}function $i(r,...t){if(Ua.logLevel<=Bt.ERROR){const i=t.map(l2);Ua.error(`Firestore (${Ys}): ${r}`,...i)}}function zs(r,...t){if(Ua.logLevel<=Bt.WARN){const i=t.map(l2);Ua.warn(`Firestore (${Ys}): ${r}`,...i)}}function l2(r){if(typeof r=="string")return r;try{/**
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
 */function Ct(r="Unexpected state"){const t=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: `+r;throw $i(t),new Error(t)}function Qt(r,t){r||Ct()}function St(r,t){return r}/**
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
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends Xr{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gi{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
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
 */class A9{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(Ke.UNAUTHENTICATED))}shutdown(){}}class gv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class yv{constructor(t){this.t=t,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Qt(this.o===void 0);let s=this.i;const l=p=>this.i!==s?(s=this.i,i(p)):Promise.resolve();let c=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Gi,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await l(this.currentUser)})},m=p=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Gi)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qt(typeof s.accessToken=="string"),new A9(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string"),new Ke(t)}}class vv{constructor(t,i,s){this.l=t,this.h=i,this.P=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _v{constructor(t,i,s){this.l=t,this.h=i,this.P=s}getToken(){return Promise.resolve(new vv(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D6{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cv{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Og(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){Qt(this.o===void 0);const s=c=>{c.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ct("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new D6(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(Qt(typeof i.token=="string"),this.R=i.token,new D6(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ev(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let s=0;s<r;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class S9{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Ev(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<i&&(s+=t.charAt(l[c]%62))}return s}}function kt(r,t){return r<t?-1:r>t?1:0}function Ps(r,t,i){return r.length===t.length&&r.every((s,l)=>i(s,t[l]))}/**
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
 */const M6=-62135596800,I6=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),s=Math.floor((t-1e3*i)*I6);return new be(i,s)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new pt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new pt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<M6)throw new pt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/I6}_compareTo(t){return this.seconds===t.seconds?kt(this.nanoseconds,t.nanoseconds):kt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-M6;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new be(0,0))}static max(){return new Tt(new be(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const x6="__name__";class li{constructor(t,i,s){i===void 0?i=0:i>t.length&&Ct(),s===void 0?s=t.length-i:s>t.length-i&&Ct(),this.segments=t,this.offset=i,this.len=s}get length(){return this.len}isEqual(t){return li.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof li?t.forEach(s=>{i.push(s)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,s=this.limit();i<s;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const s=Math.min(t.length,i.length);for(let l=0;l<s;l++){const c=li.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Math.sign(t.length-i.length)}static compareSegments(t,i){const s=li.isNumericId(t),l=li.isNumericId(i);return s&&!l?-1:!s&&l?1:s&&l?li.extractNumericId(t).compare(li.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Pr.fromString(t.substring(4,t.length-2))}}class Jt extends li{construct(t,i,s){return new Jt(t,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const s of t){if(s.indexOf("//")>=0)throw new pt(et.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(l=>l.length>0))}return new Jt(i)}static emptyPath(){return new Jt([])}}const Tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends li{construct(t,i,s){return new je(t,i,s)}static isValidIdentifier(t){return Tv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===x6}static keyField(){return new je([x6])}static fromServerFormat(t){const i=[];let s="",l=0;const c=()=>{if(s.length===0)throw new pt(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let f=!1;for(;l<t.length;){const m=t[l];if(m==="\\"){if(l+1===t.length)throw new pt(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pt(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,l+=2}else m==="`"?(f=!f,l++):m!=="."||f?(s+=m,l++):(c(),l++)}if(c(),f)throw new pt(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new je(i)}static emptyPath(){return new je([])}}/**
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
 */class vt{constructor(t){this.path=t}static fromPath(t){return new vt(Jt.fromString(t))}static fromName(t){return new vt(Jt.fromString(t).popFirst(5))}static empty(){return new vt(Jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Jt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return Jt.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vt(new Jt(t.slice()))}}/**
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
 */const Cl=-1;function Av(r,t){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=Tt.fromTimestamp(s===1e9?new be(i+1,0):new be(i,s));return new qr(l,vt.empty(),t)}function Sv(r){return new qr(r.readTime,r.key,Cl)}class qr{constructor(t,i,s){this.readTime=t,this.documentKey=i,this.largestBatchId=s}static min(){return new qr(Tt.min(),vt.empty(),Cl)}static max(){return new qr(Tt.max(),vt.empty(),Cl)}}function bv(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(r.documentKey,t.documentKey),i!==0?i:kt(r.largestBatchId,t.largestBatchId))}/**
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
 */const wv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function $s(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==wv)throw r;ct("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&Ct(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new Z((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof Z?i:Z.resolve(i)}catch(i){return Z.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):Z.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):Z.reject(i)}static resolve(t){return new Z((i,s)=>{i(t)})}static reject(t){return new Z((i,s)=>{s(t)})}static waitFor(t){return new Z((i,s)=>{let l=0,c=0,f=!1;t.forEach(m=>{++l,m.next(()=>{++c,f&&c===l&&i()},p=>s(p))}),f=!0,c===l&&i()})}static or(t){let i=Z.resolve(!1);for(const s of t)i=i.next(l=>l?Z.resolve(l):s());return i}static forEach(t,i){const s=[];return t.forEach((l,c)=>{s.push(i.call(this,l,c))}),this.waitFor(s)}static mapArray(t,i){return new Z((s,l)=>{const c=t.length,f=new Array(c);let m=0;for(let p=0;p<c;p++){const y=p;i(t[y]).next(C=>{f[y]=C,++m,m===c&&s(f)},C=>l(C))}})}static doWhile(t,i){return new Z((s,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):s()};c()})}}function Dv(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Xs(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=s=>this.oe(s),this._e=s=>i.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}qc.ae=-1;/**
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
 */const u2=-1;function Hc(r){return r==null}function bc(r){return r===0&&1/r==-1/0}function Mv(r){return typeof r=="number"&&Number.isInteger(r)&&!bc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const b9="";function Iv(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=V6(t)),t=xv(r.get(i),t);return V6(t)}function xv(r,t){let i=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case b9:i+="";break;default:i+=c}}return i}function V6(r){return r+b9+""}/**
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
 */function N6(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function Zr(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function w9(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class re{constructor(t,i){this.comparator=t,this.root=i||Be.EMPTY}insert(t,i){return new re(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(t){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,s)=>(t(i,s),!1))}toString(){const t=[];return this.inorderTraversal((i,s)=>(t.push(`${i}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new lc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new lc(this.root,t,this.comparator,!1)}getReverseIterator(){return new lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new lc(this.root,t,this.comparator,!0)}}class lc{constructor(t,i,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?s(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,i,s,l,c){this.key=t,this.value=i,this.color=s??Be.RED,this.left=l??Be.EMPTY,this.right=c??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,s,l,c){return new Be(t??this.key,i??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,s),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let s,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Be.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ct();const t=this.left.check();if(t!==this.right.check())throw Ct();return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Ct()}get value(){throw Ct()}get color(){throw Ct()}get left(){throw Ct()}get right(){throw Ct()}copy(t,i,s,l,c){return this}insert(t,i,s){return new Be(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,s)=>(t(i),!1))}forEachInRange(t,i){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new O6(this.data.getIterator())}getIteratorFrom(t){return new O6(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(s=>{i=i.add(s)}),i}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const i=this.data.getIterator(),s=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new we(this.comparator);return i.data=t,i}}class O6{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gn{constructor(t){this.fields=t,t.sort(je.comparator)}static empty(){return new gn([])}unionWith(t){let i=new we(je.comparator);for(const s of this.fields)i=i.add(s);for(const s of t)i=i.add(s);return new gn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Ps(this.fields,t.fields,(i,s)=>i.isEqual(s))}}/**
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
 */class R9 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new R9("Invalid base64 string: "+c):c}}(t);return new qe(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new qe(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return kt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const Vv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(r){if(Qt(!!r),typeof r=="string"){let t=0;const i=Vv.exec(r);if(Qt(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fr(r){return typeof r=="string"?qe.fromBase64String(r):qe.fromUint8Array(r)}/**
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
 */const D9="server_timestamp",M9="__type__",I9="__previous_value__",x9="__local_write_time__";function c2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[M9])===null||i===void 0?void 0:i.stringValue)===D9}function Fc(r){const t=r.mapValue.fields[I9];return c2(t)?Fc(t):t}function El(r){const t=Hr(r.mapValue.fields[x9].timestampValue);return new be(t.seconds,t.nanos)}/**
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
 */class Nv{constructor(t,i,s,l,c,f,m,p,y){this.databaseId=t,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const wc="(default)";class Tl{constructor(t,i){this.projectId=t,this.database=i||wc}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database===wc}isEqual(t){return t instanceof Tl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const V9="__type__",Ov="__max__",uc={mapValue:{}},N9="__vector__",Rc="value";function Gr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?c2(r)?4:Uv(r)?9007199254740991:kv(r)?10:11:Ct()}function mi(r,t){if(r===t)return!0;const i=Gr(r);if(i!==Gr(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return El(r).isEqual(El(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=Hr(l.timestampValue),m=Hr(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return Fr(l.bytesValue).isEqual(Fr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return fe(l.geoPointValue.latitude)===fe(c.geoPointValue.latitude)&&fe(l.geoPointValue.longitude)===fe(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return fe(l.integerValue)===fe(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=fe(l.doubleValue),m=fe(c.doubleValue);return f===m?bc(f)===bc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ps(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},m=c.mapValue.fields||{};if(N6(f)!==N6(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!mi(f[p],m[p])))return!1;return!0}(r,t);default:return Ct()}}function Al(r,t){return(r.values||[]).find(i=>mi(i,t))!==void 0}function Bs(r,t){if(r===t)return 0;const i=Gr(r),s=Gr(t);if(i!==s)return kt(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return kt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const m=fe(c.integerValue||c.doubleValue),p=fe(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return k6(r.timestampValue,t.timestampValue);case 4:return k6(El(r),El(t));case 5:return kt(r.stringValue,t.stringValue);case 6:return function(c,f){const m=Fr(c),p=Fr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const m=c.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const C=kt(m[y],p[y]);if(C!==0)return C}return kt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const m=kt(fe(c.latitude),fe(f.latitude));return m!==0?m:kt(fe(c.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return U6(r.arrayValue,t.arrayValue);case 10:return function(c,f){var m,p,y,C;const A=c.fields||{},b=f.fields||{},N=(m=A[Rc])===null||m===void 0?void 0:m.arrayValue,O=(p=b[Rc])===null||p===void 0?void 0:p.arrayValue,H=kt(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((C=O==null?void 0:O.values)===null||C===void 0?void 0:C.length)||0);return H!==0?H:U6(N,O)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===uc.mapValue&&f===uc.mapValue)return 0;if(c===uc.mapValue)return 1;if(f===uc.mapValue)return-1;const m=c.fields||{},p=Object.keys(m),y=f.fields||{},C=Object.keys(y);p.sort(),C.sort();for(let A=0;A<p.length&&A<C.length;++A){const b=kt(p[A],C[A]);if(b!==0)return b;const N=Bs(m[p[A]],y[C[A]]);if(N!==0)return N}return kt(p.length,C.length)}(r.mapValue,t.mapValue);default:throw Ct()}}function k6(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return kt(r,t);const i=Hr(r),s=Hr(t),l=kt(i.seconds,s.seconds);return l!==0?l:kt(i.nanos,s.nanos)}function U6(r,t){const i=r.values||[],s=t.values||[];for(let l=0;l<i.length&&l<s.length;++l){const c=Bs(i[l],s[l]);if(c)return c}return kt(i.length,s.length)}function js(r){return x4(r)}function x4(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const s=Hr(i);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return Fr(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return vt.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let s="[",l=!0;for(const c of i.values||[])l?l=!1:s+=",",s+=x4(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(i){const s=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${x4(i.fields[f])}`;return l+"}"}(r.mapValue):Ct()}function pc(r){switch(Gr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Fc(r);return t?16+pc(t):16;case 5:return 2*r.stringValue.length;case 6:return Fr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+pc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return Zr(s.fields,(c,f)=>{l+=c.length+pc(f)}),l}(r.mapValue);default:throw Ct()}}function V4(r){return!!r&&"integerValue"in r}function h2(r){return!!r&&"arrayValue"in r}function L6(r){return!!r&&"nullValue"in r}function z6(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gc(r){return!!r&&"mapValue"in r}function kv(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[V9])===null||i===void 0?void 0:i.stringValue)===N9}function ml(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Zr(r.mapValue.fields,(i,s)=>t.mapValue.fields[i]=ml(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=ml(r.arrayValue.values[i]);return t}return Object.assign({},r)}function Uv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ov}/**
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
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let s=0;s<t.length-1;++s)if(i=(i.mapValue.fields||{})[t.get(s)],!gc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=ml(i)}setAll(t){let i=je.emptyPath(),s={},l=[];t.forEach((f,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,s,l),s={},l=[],i=m.popLast()}f?s[m.lastSegment()]=ml(f):l.push(m.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,s,l)}delete(t){const i=this.field(t.popLast());gc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=i.mapValue.fields[t.get(s)];gc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,s){Zr(i,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new sn(ml(this.value))}}function O9(r){const t=[];return Zr(r.fields,(i,s)=>{const l=new je([i]);if(gc(s)){const c=O9(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new gn(t)}/**
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
 */class Ye{constructor(t,i,s,l,c,f,m){this.key=t,this.documentType=i,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ye(t,0,Tt.min(),Tt.min(),Tt.min(),sn.empty(),0)}static newFoundDocument(t,i,s,l){return new Ye(t,1,i,Tt.min(),s,l,0)}static newNoDocument(t,i){return new Ye(t,2,i,Tt.min(),Tt.min(),sn.empty(),0)}static newUnknownDocument(t,i){return new Ye(t,3,i,Tt.min(),Tt.min(),sn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dc{constructor(t,i){this.position=t,this.inclusive=i}}function P6(r,t,i){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=vt.comparator(vt.fromName(f.referenceValue),i.key):s=Bs(f,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function B6(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!mi(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class Mc{constructor(t,i="asc"){this.field=t,this.dir=i}}function Lv(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class k9{}class Se extends k9{constructor(t,i,s){super(),this.field=t,this.op=i,this.value=s}static create(t,i,s){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,s):new Pv(t,i,s):i==="array-contains"?new qv(t,s):i==="in"?new Hv(t,s):i==="not-in"?new Fv(t,s):i==="array-contains-any"?new Gv(t,s):new Se(t,i,s)}static createKeyFieldInFilter(t,i,s){return i==="in"?new Bv(t,s):new jv(t,s)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Bs(i,this.value)):i!==null&&Gr(this.value)===Gr(i)&&this.matchesComparison(Bs(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Ct()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends k9{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new pi(t,i)}matches(t){return U9(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function U9(r){return r.op==="and"}function L9(r){return zv(r)&&U9(r)}function zv(r){for(const t of r.filters)if(t instanceof pi)return!1;return!0}function N4(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+js(r.value);if(L9(r))return r.filters.map(t=>N4(t)).join(",");{const t=r.filters.map(i=>N4(i)).join(",");return`${r.op}(${t})`}}function z9(r,t){return r instanceof Se?function(s,l){return l instanceof Se&&s.op===l.op&&s.field.isEqual(l.field)&&mi(s.value,l.value)}(r,t):r instanceof pi?function(s,l){return l instanceof pi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,m)=>c&&z9(f,l.filters[m]),!0):!1}(r,t):void Ct()}function P9(r){return r instanceof Se?function(i){return`${i.field.canonicalString()} ${i.op} ${js(i.value)}`}(r):r instanceof pi?function(i){return i.op.toString()+" {"+i.getFilters().map(P9).join(" ,")+"}"}(r):"Filter"}class Pv extends Se{constructor(t,i,s){super(t,i,s),this.key=vt.fromName(s.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class Bv extends Se{constructor(t,i){super(t,"in",i),this.keys=B9("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class jv extends Se{constructor(t,i){super(t,"not-in",i),this.keys=B9("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function B9(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(s=>vt.fromName(s.referenceValue))}class qv extends Se{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return h2(i)&&Al(i.arrayValue,this.value)}}class Hv extends Se{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Al(this.value.arrayValue,i)}}class Fv extends Se{constructor(t,i){super(t,"not-in",i)}matches(t){if(Al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!Al(this.value.arrayValue,i)}}class Gv extends Se{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!h2(i)||!i.arrayValue.values)&&i.arrayValue.values.some(s=>Al(this.value.arrayValue,s))}}/**
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
 */class Qv{constructor(t,i=null,s=[],l=[],c=null,f=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=m,this.le=null}}function j6(r,t=null,i=[],s=[],l=null,c=null,f=null){return new Qv(r,t,i,s,l,c,f)}function f2(r){const t=St(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(s=>N4(s)).join(","),i+="|ob:",i+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Hc(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>js(s)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>js(s)).join(",")),t.le=i}return t.le}function d2(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Lv(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!z9(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!B6(r.startAt,t.startAt)&&B6(r.endAt,t.endAt)}function O4(r){return vt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Gc{constructor(t,i=null,s=[],l=[],c=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Kv(r,t,i,s,l,c,f,m){return new Gc(r,t,i,s,l,c,f,m)}function m2(r){return new Gc(r)}function q6(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Yv(r){return r.collectionGroup!==null}function pl(r){const t=St(r);if(t.he===null){t.he=[];const i=new Set;for(const c of t.explicitOrderBy)t.he.push(c),i.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new we(je.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.he.push(new Mc(c,s))}),i.has(je.keyField().canonicalString())||t.he.push(new Mc(je.keyField(),s))}return t.he}function ci(r){const t=St(r);return t.Pe||(t.Pe=$v(t,pl(r))),t.Pe}function $v(r,t){if(r.limitType==="F")return j6(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Mc(l.field,c)});const i=r.endAt?new Dc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Dc(r.startAt.position,r.startAt.inclusive):null;return j6(r.path,r.collectionGroup,t,r.filters,r.limit,i,s)}}function k4(r,t,i){return new Gc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Qc(r,t){return d2(ci(r),ci(t))&&r.limitType===t.limitType}function j9(r){return`${f2(ci(r))}|lt:${r.limitType}`}function Vs(r){return`Query(target=${function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(l=>P9(l)).join(", ")}]`),Hc(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map(l=>js(l)).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map(l=>js(l)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function Kc(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):vt.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of pl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,m,p){const y=P6(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,pl(s),l)||s.endAt&&!function(f,m,p){const y=P6(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,pl(s),l))}(r,t)}function Xv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function q9(r){return(t,i)=>{let s=!1;for(const l of pl(r)){const c=Zv(l,t,i);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function Zv(r,t,i){const s=r.field.isKeyField()?vt.comparator(t.key,i.key):function(c,f,m){const p=f.data.field(c),y=m.data.field(c);return p!==null&&y!==null?Bs(p,y):Ct()}(r.field,t,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ct()}}/**
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
 */class Pa{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Zr(this.inner,(i,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return w9(this.inner)}size(){return this.innerSize}}/**
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
 */const Wv=new re(vt.comparator);function Xi(){return Wv}const H9=new re(vt.comparator);function cl(...r){let t=H9;for(const i of r)t=t.insert(i.key,i);return t}function F9(r){let t=H9;return r.forEach((i,s)=>t=t.insert(i,s.overlayedDocument)),t}function Na(){return gl()}function G9(){return gl()}function gl(){return new Pa(r=>r.toString(),(r,t)=>r.isEqual(t))}const Jv=new re(vt.comparator),t_=new we(vt.comparator);function Vt(...r){let t=t_;for(const i of r)t=t.add(i);return t}const e_=new we(kt);function n_(){return e_}/**
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
 */function p2(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(t)?"-0":t}}function Q9(r){return{integerValue:""+r}}function K9(r,t){return Mv(t)?Q9(t):p2(r,t)}/**
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
 */class Yc{constructor(){this._=void 0}}function i_(r,t,i){return r instanceof Ic?function(l,c){const f={fields:{[M9]:{stringValue:D9},[x9]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&c2(c)&&(c=Fc(c)),c&&(f.fields[I9]=c),{mapValue:f}}(i,t):r instanceof qs?$9(r,t):r instanceof Sl?X9(r,t):function(l,c){const f=Y9(l,c),m=H6(f)+H6(l.Ie);return V4(f)&&V4(l.Ie)?Q9(m):p2(l.serializer,m)}(r,t)}function r_(r,t,i){return r instanceof qs?$9(r,t):r instanceof Sl?X9(r,t):i}function Y9(r,t){return r instanceof bl?function(s){return V4(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Ic extends Yc{}class qs extends Yc{constructor(t){super(),this.elements=t}}function $9(r,t){const i=Z9(t);for(const s of r.elements)i.some(l=>mi(l,s))||i.push(s);return{arrayValue:{values:i}}}class Sl extends Yc{constructor(t){super(),this.elements=t}}function X9(r,t){let i=Z9(t);for(const s of r.elements)i=i.filter(l=>!mi(l,s));return{arrayValue:{values:i}}}class bl extends Yc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function H6(r){return fe(r.integerValue||r.doubleValue)}function Z9(r){return h2(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class W9{constructor(t,i){this.field=t,this.transform=i}}function a_(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof qs&&l instanceof qs||s instanceof Sl&&l instanceof Sl?Ps(s.elements,l.elements,mi):s instanceof bl&&l instanceof bl?mi(s.Ie,l.Ie):s instanceof Ic&&l instanceof Ic}(r.transform,t.transform)}class s_{constructor(t,i){this.version=t,this.transformResults=i}}class hi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new hi}static exists(t){return new hi(void 0,t)}static updateTime(t){return new hi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class $c{}function J9(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new e7(r.key,hi.none()):new Vl(r.key,r.data,hi.none());{const i=r.data,s=sn.empty();let l=new we(je.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new Wr(r.key,s,new gn(l.toArray()),hi.none())}}function o_(r,t,i){r instanceof Vl?function(l,c,f){const m=l.value.clone(),p=G6(l.fieldTransforms,c,f.transformResults);m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):r instanceof Wr?function(l,c,f){if(!yc(l.precondition,c))return void c.convertToUnknownDocument(f.version);const m=G6(l.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(t7(l)),p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function yl(r,t,i,s){return r instanceof Vl?function(c,f,m,p){if(!yc(c.precondition,f))return m;const y=c.value.clone(),C=Q6(c.fieldTransforms,p,f);return y.setAll(C),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,s):r instanceof Wr?function(c,f,m,p){if(!yc(c.precondition,f))return m;const y=Q6(c.fieldTransforms,p,f),C=f.data;return C.setAll(t7(c)),C.setAll(y),f.convertToFoundDocument(f.version,C).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(A=>A.field))}(r,t,i,s):function(c,f,m){return yc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,i)}function l_(r,t){let i=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=Y9(s.transform,l||null);c!=null&&(i===null&&(i=sn.empty()),i.set(s.field,c))}return i||null}function F6(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Ps(s,l,(c,f)=>a_(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Vl extends $c{constructor(t,i,s,l=[]){super(),this.key=t,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Wr extends $c{constructor(t,i,s,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function t7(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const s=r.data.field(i);t.set(i,s)}}),t}function G6(r,t,i){const s=new Map;Qt(r.length===i.length);for(let l=0;l<i.length;l++){const c=r[l],f=c.transform,m=t.data.field(c.field);s.set(c.field,r_(f,m,i[l]))}return s}function Q6(r,t,i){const s=new Map;for(const l of r){const c=l.transform,f=i.data.field(l.field);s.set(l.field,i_(c,f,t))}return s}class e7 extends $c{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u_ extends $c{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c_{constructor(t,i,s,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&o_(c,t,s[l])}}applyToLocalView(t,i){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(i=yl(s,t,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(i=yl(s,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const s=G9();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=i.has(l.key)?null:m;const p=J9(f,m);p!==null&&s.set(l.key,p),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Vt())}isEqual(t){return this.batchId===t.batchId&&Ps(this.mutations,t.mutations,(i,s)=>F6(i,s))&&Ps(this.baseMutations,t.baseMutations,(i,s)=>F6(i,s))}}class g2{constructor(t,i,s,l){this.batch=t,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(t,i,s){Qt(t.mutations.length===s.length);let l=function(){return Jv}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new g2(t,i,s,l)}}/**
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
 */class h_{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class f_{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
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
 */var ye,Pt;function d_(r){switch(r){case et.OK:return Ct();case et.CANCELLED:case et.UNKNOWN:case et.DEADLINE_EXCEEDED:case et.RESOURCE_EXHAUSTED:case et.INTERNAL:case et.UNAVAILABLE:case et.UNAUTHENTICATED:return!1;case et.INVALID_ARGUMENT:case et.NOT_FOUND:case et.ALREADY_EXISTS:case et.PERMISSION_DENIED:case et.FAILED_PRECONDITION:case et.ABORTED:case et.OUT_OF_RANGE:case et.UNIMPLEMENTED:case et.DATA_LOSS:return!0;default:return Ct()}}function n7(r){if(r===void 0)return $i("GRPC error has no .code"),et.UNKNOWN;switch(r){case ye.OK:return et.OK;case ye.CANCELLED:return et.CANCELLED;case ye.UNKNOWN:return et.UNKNOWN;case ye.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case ye.INTERNAL:return et.INTERNAL;case ye.UNAVAILABLE:return et.UNAVAILABLE;case ye.UNAUTHENTICATED:return et.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case ye.NOT_FOUND:return et.NOT_FOUND;case ye.ALREADY_EXISTS:return et.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return et.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case ye.ABORTED:return et.ABORTED;case ye.OUT_OF_RANGE:return et.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return et.UNIMPLEMENTED;case ye.DATA_LOSS:return et.DATA_LOSS;default:return Ct()}}(Pt=ye||(ye={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function m_(){return new TextEncoder}/**
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
 */const p_=new Pr([4294967295,4294967295],0);function K6(r){const t=m_().encode(r),i=new y9;return i.update(t),new Uint8Array(i.digest())}function Y6(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Pr([i,s],0),new Pr([l,c],0)]}class y2{constructor(t,i,s){if(this.bitmap=t,this.padding=i,this.hashCount=s,i<0||i>=8)throw new hl(`Invalid padding: ${i}`);if(s<0)throw new hl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new hl(`Invalid hash count: ${s}`);if(t.length===0&&i!==0)throw new hl(`Invalid padding when bitmap length is 0: ${i}`);this.Ee=8*t.length-i,this.de=Pr.fromNumber(this.Ee)}Ae(t,i,s){let l=t.add(i.multiply(Pr.fromNumber(s)));return l.compare(p_)===1&&(l=new Pr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const i=K6(t),[s,l]=Y6(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);if(!this.Re(f))return!1}return!0}static create(t,i,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new y2(c,l,i);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const i=K6(t),[s,l]=Y6(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);this.Ve(f)}}Ve(t){const i=Math.floor(t/8),s=t%8;this.bitmap[i]|=1<<s}}class hl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(t,i,s,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,s){const l=new Map;return l.set(t,Nl.createSynthesizedTargetChangeForCurrentChange(t,i,s)),new Xc(Tt.min(),l,new re(kt),Xi(),Vt())}}class Nl{constructor(t,i,s,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,s){return new Nl(s,i,Vt(),Vt(),Vt())}}/**
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
 */class vc{constructor(t,i,s,l){this.me=t,this.removedTargetIds=i,this.key=s,this.fe=l}}class i7{constructor(t,i){this.targetId=t,this.ge=i}}class r7{constructor(t,i,s=qe.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=s,this.cause=l}}class $6{constructor(){this.pe=0,this.ye=X6(),this.we=qe.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Vt(),i=Vt(),s=Vt();return this.ye.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:Ct()}}),new Nl(this.we,this.be,t,i,s)}Me(){this.Se=!1,this.ye=X6()}xe(t,i){this.Se=!0,this.ye=this.ye.insert(t,i)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Qt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class g_{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Xi(),this.$e=cc(),this.Ke=cc(),this.Ue=new re(kt)}We(t){for(const i of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(i,t.fe):this.ze(i,t.key,t.fe);for(const i of t.removedTargetIds)this.ze(i,t.key,t.fe)}je(t){this.forEachTarget(t,i=>{const s=this.He(i);switch(t.state){case 0:this.Je(i)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(i);break;case 3:this.Je(i)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(i)&&(this.Ye(i),s.Ce(t.resumeToken));break;default:Ct()}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.qe.forEach((s,l)=>{this.Je(l)&&i(l)})}Ze(t){const i=t.targetId,s=t.ge.count,l=this.Xe(i);if(l){const c=l.target;if(O4(c))if(s===0){const f=new vt(c.path);this.ze(i,f,Ye.newNoDocument(f,Tt.min()))}else Qt(s===1);else{const f=this.et(i);if(f!==s){const m=this.tt(t),p=m?this.nt(m,t,f):1;if(p!==0){this.Ye(i);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,y)}}}}}tt(t){const i=t.ge.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=i;let f,m;try{f=Fr(s).toUint8Array()}catch(p){if(p instanceof R9)return zs("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new y2(f,l,c)}catch(p){return zs(p instanceof hl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(t,i,s){return i.ge.count===s-this.st(t,i.targetId)?0:2}st(t,i){const s=this.ke.getRemoteKeysForTarget(i);let l=0;return s.forEach(c=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(m)||(this.ze(i,c,null),l++)}),l}ot(t){const i=new Map;this.qe.forEach((c,f)=>{const m=this.Xe(f);if(m){if(c.current&&O4(m.target)){const p=new vt(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Ye.newNoDocument(p,t))}c.ve&&(i.set(f,c.Fe()),c.Me())}});let s=Vt();this.Ke.forEach((c,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const l=new Xc(t,i,this.Ue,this.Qe,s);return this.Qe=Xi(),this.$e=cc(),this.Ke=cc(),this.Ue=new re(kt),l}Ge(t,i){if(!this.Je(t))return;const s=this.ut(t,i.key)?2:0;this.He(t).xe(i.key,s),this.Qe=this.Qe.insert(i.key,i),this.$e=this.$e.insert(i.key,this._t(i.key).add(t)),this.Ke=this.Ke.insert(i.key,this.ct(i.key).add(t))}ze(t,i,s){if(!this.Je(t))return;const l=this.He(t);this.ut(t,i)?l.xe(i,1):l.Oe(i),this.Ke=this.Ke.insert(i,this.ct(i).delete(t)),this.Ke=this.Ke.insert(i,this.ct(i).add(t)),s&&(this.Qe=this.Qe.insert(i,s))}removeTarget(t){this.qe.delete(t)}et(t){const i=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let i=this.qe.get(t);return i||(i=new $6,this.qe.set(t,i)),i}ct(t){let i=this.Ke.get(t);return i||(i=new we(kt),this.Ke=this.Ke.insert(t,i)),i}_t(t){let i=this.$e.get(t);return i||(i=new we(kt),this.$e=this.$e.insert(t,i)),i}Je(t){const i=this.Xe(t)!==null;return i||ct("WatchChangeAggregator","Detected inactive target",t),i}Xe(t){const i=this.qe.get(t);return i&&i.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new $6),this.ke.getRemoteKeysForTarget(t).forEach(i=>{this.ze(t,i,null)})}ut(t,i){return this.ke.getRemoteKeysForTarget(t).has(i)}}function cc(){return new re(vt.comparator)}function X6(){return new re(vt.comparator)}const y_={asc:"ASCENDING",desc:"DESCENDING"},v_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},__={and:"AND",or:"OR"};class C_{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function U4(r,t){return r.useProto3Json||Hc(t)?t:{value:t}}function xc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function a7(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function E_(r,t){return xc(r,t.toTimestamp())}function fi(r){return Qt(!!r),Tt.fromTimestamp(function(i){const s=Hr(i);return new be(s.seconds,s.nanos)}(r))}function v2(r,t){return L4(r,t).canonicalString()}function L4(r,t){const i=function(l){return new Jt(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function s7(r){const t=Jt.fromString(r);return Qt(h7(t)),t}function z4(r,t){return v2(r.databaseId,t.path)}function v4(r,t){const i=s7(t);if(i.get(1)!==r.databaseId.projectId)throw new pt(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new pt(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new vt(l7(i))}function o7(r,t){return v2(r.databaseId,t)}function T_(r){const t=s7(r);return t.length===4?Jt.emptyPath():l7(t)}function P4(r){return new Jt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function l7(r){return Qt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Z6(r,t,i){return{name:z4(r,t),fields:i.value.mapValue.fields}}function A_(r,t){let i;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ct()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,C){return y.useProto3Json?(Qt(C===void 0||typeof C=="string"),qe.fromBase64String(C||"")):(Qt(C===void 0||C instanceof Buffer||C instanceof Uint8Array),qe.fromUint8Array(C||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const C=y.code===void 0?et.UNKNOWN:n7(y.code);return new pt(C,y.message||"")}(f);i=new r7(s,l,c,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=v4(r,s.document.name),c=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):Tt.min(),m=new sn({mapValue:{fields:s.document.fields}}),p=Ye.newFoundDocument(l,c,f,m),y=s.targetIds||[],C=s.removedTargetIds||[];i=new vc(y,C,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=v4(r,s.document),c=s.readTime?fi(s.readTime):Tt.min(),f=Ye.newNoDocument(l,c),m=s.removedTargetIds||[];i=new vc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=v4(r,s.document),c=s.removedTargetIds||[];i=new vc([],c,l,null)}else{if(!("filter"in t))return Ct();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new f_(l,c),m=s.targetId;i=new i7(m,f)}}return i}function S_(r,t){let i;if(t instanceof Vl)i={update:Z6(r,t.key,t.value)};else if(t instanceof e7)i={delete:z4(r,t.key)};else if(t instanceof Wr)i={update:Z6(r,t.key,t.data),updateMask:N_(t.fieldMask)};else{if(!(t instanceof u_))return Ct();i={verify:z4(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const m=f.transform;if(m instanceof Ic)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qs)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Sl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof bl)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw Ct()}(0,s))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:E_(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ct()}(r,t.precondition)),i}function b_(r,t){return r&&r.length>0?(Qt(t!==void 0),r.map(i=>function(l,c){let f=l.updateTime?fi(l.updateTime):fi(c);return f.isEqual(Tt.min())&&(f=fi(c)),new s_(f,l.transformResults||[])}(i,t))):[]}function w_(r,t){return{documents:[o7(r,t.path)]}}function R_(r,t){const i={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=o7(r,l);const c=function(y){if(y.length!==0)return c7(pi.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(C=>function(b){return{field:Ns(b.field),direction:I_(b.dir)}}(C))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const m=U4(r,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:i,parent:l}}function D_(r){let t=T_(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){Qt(s===1);const C=i.from[0];C.allDescendants?l=C.collectionId:t=t.child(C.collectionId)}let c=[];i.where&&(c=function(A){const b=u7(A);return b instanceof pi&&L9(b)?b.getFilters():[b]}(i.where));let f=[];i.orderBy&&(f=function(A){return A.map(b=>function(O){return new Mc(Os(O.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(b))}(i.orderBy));let m=null;i.limit&&(m=function(A){let b;return b=typeof A=="object"?A.value:A,Hc(b)?null:b}(i.limit));let p=null;i.startAt&&(p=function(A){const b=!!A.before,N=A.values||[];return new Dc(N,b)}(i.startAt));let y=null;return i.endAt&&(y=function(A){const b=!A.before,N=A.values||[];return new Dc(N,b)}(i.endAt)),Kv(t,l,f,c,m,"F",p,y)}function M_(r,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ct()}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function u7(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Os(i.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Os(i.unaryFilter.field);return Se.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Os(i.unaryFilter.field);return Se.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Os(i.unaryFilter.field);return Se.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Ct()}}(r):r.fieldFilter!==void 0?function(i){return Se.create(Os(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ct()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return pi.create(i.compositeFilter.filters.map(s=>u7(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Ct()}}(i.compositeFilter.op))}(r):Ct()}function I_(r){return y_[r]}function x_(r){return v_[r]}function V_(r){return __[r]}function Ns(r){return{fieldPath:r.canonicalString()}}function Os(r){return je.fromServerFormat(r.fieldPath)}function c7(r){return r instanceof Se?function(i){if(i.op==="=="){if(z6(i.value))return{unaryFilter:{field:Ns(i.field),op:"IS_NAN"}};if(L6(i.value))return{unaryFilter:{field:Ns(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(z6(i.value))return{unaryFilter:{field:Ns(i.field),op:"IS_NOT_NAN"}};if(L6(i.value))return{unaryFilter:{field:Ns(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(i.field),op:x_(i.op),value:i.value}}}(r):r instanceof pi?function(i){const s=i.getFilters().map(l=>c7(l));return s.length===1?s[0]:{compositeFilter:{op:V_(i.op),filters:s}}}(r):Ct()}function N_(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function h7(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Ur{constructor(t,i,s,l,c=Tt.min(),f=Tt.min(),m=qe.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Ur(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class O_{constructor(t){this.Tt=t}}function k_(r){const t=D_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?k4(t,t.limit,"L"):t}/**
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
 */class U_{constructor(){this.Tn=new L_}addToCollectionParentIndex(t,i){return this.Tn.add(i),Z.resolve()}getCollectionParents(t,i){return Z.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return Z.resolve()}deleteFieldIndex(t,i){return Z.resolve()}deleteAllFieldIndexes(t){return Z.resolve()}createTargetIndexes(t,i){return Z.resolve()}getDocumentsMatchingTarget(t,i){return Z.resolve(null)}getIndexType(t,i){return Z.resolve(0)}getFieldIndexes(t,i){return Z.resolve([])}getNextCollectionGroupToUpdate(t){return Z.resolve(null)}getMinOffset(t,i){return Z.resolve(qr.min())}getMinOffsetFromCollectionGroup(t,i){return Z.resolve(qr.min())}updateCollectionGroup(t,i,s){return Z.resolve()}updateIndexEntries(t,i){return Z.resolve()}}class L_{constructor(){this.index={}}add(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i]||new we(Jt.comparator),c=!l.has(s);return this.index[i]=l.add(s),c}has(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(t){return(this.index[t]||new we(Jt.comparator)).toArray()}}/**
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
 */const W6={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},f7=41943040;class an{static withCacheSize(t){return new an(t,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(f7,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class Hs{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Hs(0)}static Un(){return new Hs(-1)}}/**
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
 */const J6="LruGarbageCollector",z_=1048576;function tf([r,t],[i,s]){const l=kt(r,i);return l===0?kt(t,s):l}class P_{constructor(t){this.Hn=t,this.buffer=new we(tf),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();tf(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class B_{constructor(t,i,s){this.garbageCollector=t,this.asyncQueue=i,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ct(J6,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Xs(i)?ct(J6,"Ignoring IndexedDB error during garbage collection: ",i):await $s(i)}await this.er(3e5)})}}class j_{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(s=>Math.floor(i/100*s))}nthSequenceNumber(t,i){if(i===0)return Z.resolve(qc.ae);const s=new P_(i);return this.tr.forEachTarget(t,l=>s.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>s.Zn(l))).next(()=>s.maxValue)}removeTargets(t,i,s){return this.tr.removeTargets(t,i,s)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(W6)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),W6):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let s,l,c,f,m,p,y;const C=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),l=this.params.maximumSequenceNumbersToCollect):l=A,f=Date.now(),this.nthSequenceNumber(t,l))).next(A=>(s=A,m=Date.now(),this.removeTargets(t,s,i))).next(A=>(c=A,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(A=>(y=Date.now(),xs()<=Bt.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-C}ms
	Determined least recently used ${l} in `+(m-f)+`ms
	Removed ${c} targets in `+(p-m)+`ms
	Removed ${A} documents in `+(y-p)+`ms
Total Duration: ${y-C}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:A})))}}function q_(r,t){return new j_(r,t)}/**
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
 */class H_{constructor(){this.changes=new Pa(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?Z.resolve(s):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class F_{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class G_{constructor(t,i,s,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,i){let s=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(s!==null&&yl(s.mutation,l,gn.empty(),be.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,i,s=Vt()){const l=Na();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,s).next(c=>{let f=cl();return c.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const s=Na();return this.populateOverlays(t,s,i).next(()=>this.computeViews(t,i,s,Vt()))}populateOverlays(t,i,s){const l=[];return s.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,m)=>{i.set(f,m)})})}computeViews(t,i,s,l){let c=Xi();const f=gl(),m=function(){return gl()}();return i.forEach((p,y)=>{const C=s.get(y.key);l.has(y.key)&&(C===void 0||C.mutation instanceof Wr)?c=c.insert(y.key,y):C!==void 0?(f.set(y.key,C.mutation.getFieldMask()),yl(C.mutation,y,C.mutation.getFieldMask(),be.now())):f.set(y.key,gn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,C)=>f.set(y,C)),i.forEach((y,C)=>{var A;return m.set(y,new F_(C,(A=f.get(y))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(t,i){const s=gl();let l=new re((f,m)=>f-m),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=i.get(p);if(y===null)return;let C=s.get(p)||gn.empty();C=m.applyToLocalView(y,C),s.set(p,C);const A=(l.get(m.batchId)||Vt()).add(p);l=l.insert(m.batchId,A)})}).next(()=>{const f=[],m=l.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,C=p.value,A=G9();C.forEach(b=>{if(!c.has(b)){const N=J9(i.get(b),s.get(b));N!==null&&A.set(b,N),c=c.add(b)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,A))}return Z.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,i,s,l){return function(f){return vt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Yv(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,s,l):this.getDocumentsMatchingCollectionQuery(t,i,s,l)}getNextDocuments(t,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,s.largestBatchId,l-c.size):Z.resolve(Na());let m=Cl,p=c;return f.next(y=>Z.forEach(y,(C,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),c.get(C)?Z.resolve():this.remoteDocumentCache.getEntry(t,C).next(b=>{p=p.insert(C,b)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Vt())).next(C=>({batchId:m,changes:F9(C)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next(s=>{let l=cl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,s,l){const c=i.collectionGroup;let f=cl();return this.indexManager.getCollectionParents(t,c).next(m=>Z.forEach(m,p=>{const y=function(A,b){return new Gc(b,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(i,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(C=>{C.forEach((A,b)=>{f=f.insert(A,b)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,s,c,l))).next(f=>{c.forEach((p,y)=>{const C=y.getKey();f.get(C)===null&&(f=f.insert(C,Ye.newInvalidDocument(C)))});let m=cl();return f.forEach((p,y)=>{const C=c.get(p);C!==void 0&&yl(C.mutation,y,gn.empty(),be.now()),Kc(i,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class Q_{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return Z.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:fi(l.createTime)}}(i)),Z.resolve()}getNamedQuery(t,i){return Z.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:k_(l.bundledQuery),readTime:fi(l.readTime)}}(i)),Z.resolve()}}/**
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
 */class K_{constructor(){this.overlays=new re(vt.comparator),this.Rr=new Map}getOverlay(t,i){return Z.resolve(this.overlays.get(i))}getOverlays(t,i){const s=Na();return Z.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,i,s){return s.forEach((l,c)=>{this.Et(t,i,c)}),Z.resolve()}removeOverlaysForBatchId(t,i,s){const l=this.Rr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),Z.resolve()}getOverlaysForCollection(t,i,s){const l=Na(),c=i.length+1,f=new vt(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&l.set(p.getKey(),p)}return Z.resolve(l)}getOverlaysForCollectionGroup(t,i,s,l){let c=new re((y,C)=>y-C);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let C=c.get(y.largestBatchId);C===null&&(C=Na(),c=c.insert(y.largestBatchId,C)),C.set(y.getKey(),y)}}const m=Na(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,C)=>m.set(y,C)),!(m.size()>=l)););return Z.resolve(m)}Et(t,i,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Rr.get(l.largestBatchId).delete(s.key);this.Rr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new h_(i,s));let c=this.Rr.get(i);c===void 0&&(c=Vt(),this.Rr.set(i,c)),this.Rr.set(i,c.add(s.key))}}/**
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
 */class Y_{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(t){return Z.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,Z.resolve()}}/**
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
 */class _2{constructor(){this.Vr=new we(ke.mr),this.gr=new we(ke.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const s=new ke(t,i);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,i){t.forEach(s=>this.addReference(s,i))}removeReference(t,i){this.wr(new ke(t,i))}br(t,i){t.forEach(s=>this.removeReference(s,i))}Sr(t){const i=new vt(new Jt([])),s=new ke(i,t),l=new ke(i,t+1),c=[];return this.gr.forEachInRange([s,l],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new vt(new Jt([])),s=new ke(i,t),l=new ke(i,t+1);let c=Vt();return this.gr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new ke(t,0),s=this.Vr.firstAfterOrEqual(i);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return vt.comparator(t.key,i.key)||kt(t.Cr,i.Cr)}static pr(t,i){return kt(t.Cr,i.Cr)||vt.comparator(t.key,i.key)}}/**
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
 */class $_{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new we(ke.mr)}checkEmpty(t){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,s,l){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new c_(c,i,s,l);this.mutationQueue.push(f);for(const m of l)this.Mr=this.Mr.add(new ke(m.key,c)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Z.resolve(f)}lookupMutationBatch(t,i){return Z.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const s=i+1,l=this.Nr(s),c=l<0?0:l;return Z.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?u2:this.Fr-1)}getAllMutationBatches(t){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const s=new ke(i,0),l=new ke(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,l],f=>{const m=this.Or(f.Cr);c.push(m)}),Z.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let s=new we(kt);return i.forEach(l=>{const c=new ke(l,0),f=new ke(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],m=>{s=s.add(m.Cr)})}),Z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,i){const s=i.path,l=s.length+1;let c=s;vt.isDocumentKey(c)||(c=c.child(""));const f=new ke(new vt(c),0);let m=new we(kt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(m=m.add(p.Cr)),!0)},f),Z.resolve(this.Br(m))}Br(t){const i=[];return t.forEach(s=>{const l=this.Or(s);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){Qt(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Z.forEach(i.mutations,l=>{const c=new ke(l.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,i){const s=new ke(i,0),l=this.Mr.firstAfterOrEqual(s);return Z.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Z.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class X_{constructor(t){this.kr=t,this.docs=function(){return new re(vt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const s=i.key,l=this.docs.get(s),c=l?l.size:0,f=this.kr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const s=this.docs.get(i);return Z.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(i))}getEntries(t,i){let s=Xi();return i.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Ye.newInvalidDocument(l))}),Z.resolve(s)}getDocumentsMatchingQuery(t,i,s,l){let c=Xi();const f=i.path,m=new vt(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:C}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||bv(Sv(C),s)<=0||(l.has(C.key)||Kc(i,C))&&(c=c.insert(C.key,C.mutableCopy()))}return Z.resolve(c)}getAllFromCollectionGroup(t,i,s,l){Ct()}qr(t,i){return Z.forEach(this.docs,s=>i(s))}newChangeBuffer(t){return new Z_(this)}getSize(t){return Z.resolve(this.size)}}class Z_ extends H_{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(s)}),Z.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
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
 */class W_{constructor(t){this.persistence=t,this.Qr=new Pa(i=>f2(i),d2),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new _2,this.targetCount=0,this.Ur=Hs.Kn()}forEachTarget(t,i){return this.Qr.forEach((s,l)=>i(l)),Z.resolve()}getLastRemoteSnapshotVersion(t){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Z.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(t,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.$r&&(this.$r=i),Z.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new Hs(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,Z.resolve()}updateTargetData(t,i){return this.zn(i),Z.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,Z.resolve()}removeTargets(t,i,s){let l=0;const c=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=i&&s.get(m.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,m.targetId)),l++)}),Z.waitFor(c).next(()=>l)}getTargetCount(t){return Z.resolve(this.targetCount)}getTargetData(t,i){const s=this.Qr.get(i)||null;return Z.resolve(s)}addMatchingKeys(t,i,s){return this.Kr.yr(i,s),Z.resolve()}removeMatchingKeys(t,i,s){this.Kr.br(i,s);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),Z.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),Z.resolve()}getMatchingKeysForTargetId(t,i){const s=this.Kr.vr(i);return Z.resolve(s)}containsKey(t,i){return Z.resolve(this.Kr.containsKey(i))}}/**
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
 */class d7{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new qc(0),this.zr=!1,this.zr=!0,this.jr=new Y_,this.referenceDelegate=t(this),this.Hr=new W_(this),this.indexManager=new U_,this.remoteDocumentCache=function(l){return new X_(l)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new O_(i),this.Yr=new Q_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new K_,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let s=this.Wr[t.toKey()];return s||(s=new $_(i,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,s){ct("MemoryPersistence","Starting transaction:",t);const l=new J_(this.Gr.next());return this.referenceDelegate.Zr(),s(l).next(c=>this.referenceDelegate.Xr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}ei(t,i){return Z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,i)))}}class J_ extends Rv{constructor(t){super(),this.currentSequenceNumber=t}}class C2{constructor(t){this.persistence=t,this.ti=new _2,this.ni=null}static ri(t){return new C2(t)}get ii(){if(this.ni)return this.ni;throw Ct()}addReference(t,i,s){return this.ti.addReference(s,i),this.ii.delete(s.toString()),Z.resolve()}removeReference(t,i,s){return this.ti.removeReference(s,i),this.ii.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),Z.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,s=>{const l=vt.fromPath(s);return this.si(t,l).next(c=>{c||i.removeEntry(l,Tt.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(s=>{s?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return Z.or([()=>Z.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Vc{constructor(t,i){this.persistence=t,this.oi=new Pa(s=>Iv(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=q_(this,i)}static ri(t,i){return new Vc(t,i)}Zr(){}Xr(t){return Z.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>i.next(l=>s+l))}sr(t){let i=0;return this.rr(t,s=>{i++}).next(()=>i)}rr(t,i){return Z.forEach(this.oi,(s,l)=>this.ar(t,s,l).next(c=>c?Z.resolve():i(l)))}removeTargets(t,i,s){return this.persistence.getTargetCache().removeTargets(t,i,s)}removeOrphanedDocuments(t,i){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.qr(t,f=>this.ar(t,f,i).next(m=>{m||(s++,c.removeEntry(f,Tt.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),Z.resolve()}removeTarget(t,i){const s=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),Z.resolve()}removeReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),Z.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),Z.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=pc(t.data.value)),i}ar(t,i,s){return Z.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return Z.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class E2{constructor(t,i,s,l){this.targetId=t,this.fromCache=i,this.Hi=s,this.Ji=l}static Yi(t,i){let s=Vt(),l=Vt();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new E2(t,i.fromCache,s,l)}}/**
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
 */class tC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class eC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ip()?8:Dv(Rp())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,s,l){const c={result:null};return this.rs(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,i,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new tC;return this._s(t,i,f).next(m=>{if(c.result=m,this.Xi)return this.us(t,i,f,m.size)})}).next(()=>c.result)}us(t,i,s,l){return s.documentReadCount<this.es?(xs()<=Bt.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",Vs(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(xs()<=Bt.DEBUG&&ct("QueryEngine","Query:",Vs(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ts*l?(xs()<=Bt.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",Vs(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ci(i))):Z.resolve())}rs(t,i){if(q6(i))return Z.resolve(null);let s=ci(i);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=k4(i,null,"F"),s=ci(i)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Vt(...c);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(i,m);return this.ls(i,y,f,p.readTime)?this.rs(t,k4(i,null,"F")):this.hs(t,y,i,p)}))})))}ss(t,i,s,l){return q6(i)||l.isEqual(Tt.min())?Z.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(i,c);return this.ls(i,f,s,l)?Z.resolve(null):(xs()<=Bt.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Vs(i)),this.hs(t,f,i,Av(l,Cl)).next(m=>m))})}cs(t,i){let s=new we(q9(t));return i.forEach((l,c)=>{Kc(t,c)&&(s=s.add(c))}),s}ls(t,i,s,l){if(t.limit===null)return!1;if(s.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}_s(t,i,s){return xs()<=Bt.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",Vs(i)),this.ns.getDocumentsMatchingQuery(t,i,qr.min(),s)}hs(t,i,s,l){return this.ns.getDocumentsMatchingQuery(t,s,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const T2="LocalStore",nC=3e8;class iC{constructor(t,i,s,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new re(kt),this.Is=new Pa(c=>f2(c),d2),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new G_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function rC(r,t,i,s){return new iC(r,t,i,s)}async function m7(r,t){const i=St(r);return await i.persistence.runTransaction("Handle user change","readonly",s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,i.As(t),i.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],m=[];let p=Vt();for(const y of l){f.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}for(const y of c){m.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}return i.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function aC(r,t){const i=St(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,C){const A=y.batch,b=A.keys();let N=Z.resolve();return b.forEach(O=>{N=N.next(()=>C.getEntry(p,O)).next(H=>{const k=y.docVersions.get(O);Qt(k!==null),H.version.compareTo(k)<0&&(A.applyToRemoteDocument(H,y),H.isValidDocument()&&(H.setReadTime(y.commitVersion),C.addEntry(H)))})}),N.next(()=>m.mutationQueue.removeMutationBatch(p,A))}(i,s,t,c).next(()=>c.apply(s)).next(()=>i.mutationQueue.performConsistencyCheck(s)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Vt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>i.localDocuments.getDocuments(s,l))})}function p7(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function sC(r,t){const i=St(r),s=t.snapshotVersion;let l=i.Ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.ds.newChangeBuffer({trackRemovals:!0});l=i.Ts;const m=[];t.targetChanges.forEach((C,A)=>{const b=l.get(A);if(!b)return;m.push(i.Hr.removeMatchingKeys(c,C.removedDocuments,A).next(()=>i.Hr.addMatchingKeys(c,C.addedDocuments,A)));let N=b.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(A)!==null?N=N.withResumeToken(qe.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):C.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(C.resumeToken,s)),l=l.insert(A,N),function(H,k,Q){return H.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=nC?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(b,N,C)&&m.push(i.Hr.updateTargetData(c,N))});let p=Xi(),y=Vt();if(t.documentUpdates.forEach(C=>{t.resolvedLimboDocuments.has(C)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(c,C))}),m.push(oC(c,f,t.documentUpdates).next(C=>{p=C.Vs,y=C.fs})),!s.isEqual(Tt.min())){const C=i.Hr.getLastRemoteSnapshotVersion(c).next(A=>i.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));m.push(C)}return Z.waitFor(m).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(i.Ts=l,c))}function oC(r,t,i){let s=Vt(),l=Vt();return i.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=Xi();return i.forEach((m,p)=>{const y=c.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(m)),p.isNoDocument()&&p.version.isEqual(Tt.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):ct(T2,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:l}})}function lC(r,t){const i=St(r);return i.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=u2),i.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function uC(r,t){const i=St(r);return i.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return i.Hr.getTargetData(s,t).next(c=>c?(l=c,Z.resolve(l)):i.Hr.allocateTargetId(s).next(f=>(l=new Ur(t,f,"TargetPurposeListen",s.currentSequenceNumber),i.Hr.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=i.Ts.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(s.targetId,s),i.Is.set(t,s.targetId)),s})}async function B4(r,t,i){const s=St(r),l=s.Ts.get(t),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!Xs(f))throw f;ct(T2,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(l.target)}function ef(r,t,i){const s=St(r);let l=Tt.min(),c=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,C){const A=St(p),b=A.Is.get(C);return b!==void 0?Z.resolve(A.Ts.get(b)):A.Hr.getTargetData(y,C)}(s,f,ci(t)).next(m=>{if(m)return l=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{c=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,i?l:Tt.min(),i?c:Vt())).next(m=>(cC(s,Xv(t),m),{documents:m,gs:c})))}function cC(r,t,i){let s=r.Es.get(t)||Tt.min();i.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class nf{constructor(){this.activeTargetIds=n_()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hC{constructor(){this.ho=new nf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,s){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,s){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new nf,Promise.resolve()}handleUserChange(t,i,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class fC{To(t){}shutdown(){}}/**
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
 */const rf="ConnectivityMonitor";class af{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ct(rf,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ct(rf,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hc=null;function j4(){return hc===null?hc=function(){return 268435456+Math.round(2147483648*Math.random())}():hc++,"0x"+hc.toString(16)}/**
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
 */const _4="RestConnection",dC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${s}/databases/${l}`,this.wo=this.databaseId.database===wc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}bo(t,i,s,l,c){const f=j4(),m=this.So(t,i.toUriEncodedString());ct(_4,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,l,c),this.vo(t,m,p,s).then(y=>(ct(_4,`Received RPC '${t}' ${f}: `,y),y),y=>{throw zs(_4,`RPC '${t}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(t,i,s,l,c,f){return this.bo(t,i,s,l,c)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}So(t,i){const s=dC[t];return`${this.po}/v1/${i}:${s}`}terminate(){}}/**
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
 */class pC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const Qe="WebChannelConnection";class gC extends mC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,s,l){const c=j4();return new Promise((f,m)=>{const p=new v9;p.setWithCredentials(!0),p.listenOnce(_9.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case mc.NO_ERROR:const C=p.getResponseJson();ct(Qe,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(C)),f(C);break;case mc.TIMEOUT:ct(Qe,`RPC '${t}' ${c} timed out`),m(new pt(et.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const A=p.getStatus();if(ct(Qe,`RPC '${t}' ${c} failed with status:`,A,"response text:",p.getResponseText()),A>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const O=function(k){const Q=k.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(Q)>=0?Q:et.UNKNOWN}(N.status);m(new pt(O,N.message))}else m(new pt(et.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new pt(et.UNAVAILABLE,"Connection failed."));break;default:Ct()}}finally{ct(Qe,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(l);ct(Qe,`RPC '${t}' ${c} sending request:`,l),p.send(i,"POST",y,s,15)})}Wo(t,i,s){const l=j4(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=T9(),m=E9(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,i,s),p.encodeInitMessageHeaders=!0;const C=c.join("");ct(Qe,`Creating RPC '${t}' stream ${l}: ${C}`,p);const A=f.createWebChannel(C,p);let b=!1,N=!1;const O=new pC({Fo:k=>{N?ct(Qe,`Not sending because RPC '${t}' stream ${l} is closed:`,k):(b||(ct(Qe,`Opening RPC '${t}' stream ${l} transport.`),A.open(),b=!0),ct(Qe,`RPC '${t}' stream ${l} sending:`,k),A.send(k))},Mo:()=>A.close()}),H=(k,Q,nt)=>{k.listen(Q,it=>{try{nt(it)}catch(yt){setTimeout(()=>{throw yt},0)}})};return H(A,ul.EventType.OPEN,()=>{N||(ct(Qe,`RPC '${t}' stream ${l} transport opened.`),O.Qo())}),H(A,ul.EventType.CLOSE,()=>{N||(N=!0,ct(Qe,`RPC '${t}' stream ${l} transport closed`),O.Ko())}),H(A,ul.EventType.ERROR,k=>{N||(N=!0,zs(Qe,`RPC '${t}' stream ${l} transport errored:`,k),O.Ko(new pt(et.UNAVAILABLE,"The operation could not be completed")))}),H(A,ul.EventType.MESSAGE,k=>{var Q;if(!N){const nt=k.data[0];Qt(!!nt);const it=nt,yt=(it==null?void 0:it.error)||((Q=it[0])===null||Q===void 0?void 0:Q.error);if(yt){ct(Qe,`RPC '${t}' stream ${l} received error:`,yt);const dt=yt.status;let Et=function(S){const M=ye[S];if(M!==void 0)return n7(M)}(dt),V=yt.message;Et===void 0&&(Et=et.INTERNAL,V="Unknown error status: "+dt+" with message "+yt.message),N=!0,O.Ko(new pt(Et,V)),A.close()}else ct(Qe,`RPC '${t}' stream ${l} received:`,nt),O.Uo(nt)}}),H(m,C9.STAT_EVENT,k=>{k.stat===I4.PROXY?ct(Qe,`RPC '${t}' stream ${l} detected buffering proxy`):k.stat===I4.NOPROXY&&ct(Qe,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}function C4(){return typeof document<"u"?document:null}/**
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
 */function Zc(r){return new C_(r,!0)}/**
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
 */class g7{constructor(t,i,s=1e3,l=1.5,c=6e4){this.Ti=t,this.timerId=i,this.Go=s,this.zo=l,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-s);l>0&&ct("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const sf="PersistentStream";class y7{constructor(t,i,s,l,c,f,m,p){this.Ti=t,this.n_=s,this.r_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new g7(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===et.RESOURCE_EXHAUSTED?($i(i.toString()),$i("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.i_===i&&this.V_(s,l)},s=>{t(()=>{const l=new pt(et.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(l)})})}V_(t,i){const s=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{s(()=>this.m_(l))}),this.stream.onMessage(l=>{s(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ct(sf,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(ct(sf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yC extends y7{constructor(t,i,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}f_(t,i){return this.connection.Wo("Listen",t,i)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const i=A_(this.serializer,t),s=function(c){if(!("targetChange"in c))return Tt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?fi(f.readTime):Tt.min()}(t);return this.listener.p_(i,s)}y_(t){const i={};i.database=P4(this.serializer),i.addTarget=function(c,f){let m;const p=f.target;if(m=O4(p)?{documents:w_(c,p)}:{query:R_(c,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=a7(c,f.resumeToken);const y=U4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Tt.min())>0){m.readTime=xc(c,f.snapshotVersion.toTimestamp());const y=U4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=M_(this.serializer,t);s&&(i.labels=s),this.I_(i)}w_(t){const i={};i.database=P4(this.serializer),i.removeTarget=t,this.I_(i)}}class vC extends y7{constructor(t,i,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=b_(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.v_(s,i)}C_(){const t={};t.database=P4(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(s=>S_(this.serializer,s))};this.I_(i)}}/**
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
 */class _C{}class CC extends _C{constructor(t,i,s,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new pt(et.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,L4(i,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new pt(et.UNKNOWN,c.toString())})}Co(t,i,s,l,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,L4(i,s),l,f,m,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pt(et.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class EC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?($i(i),this.N_=!1):ct("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const La="RemoteStore";class TC{constructor(t,i,s,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{Ba(this)&&(ct(La,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.W_.add(4),await Ol(y),y.j_.set("Unknown"),y.W_.delete(4),await Wc(y)}(this))})}),this.j_=new EC(s,l)}}async function Wc(r){if(Ba(r))for(const t of r.G_)await t(!0)}async function Ol(r){for(const t of r.G_)await t(!1)}function v7(r,t){const i=St(r);i.U_.has(t.targetId)||(i.U_.set(t.targetId,t),w2(i)?b2(i):Zs(i).c_()&&S2(i,t))}function A2(r,t){const i=St(r),s=Zs(i);i.U_.delete(t),s.c_()&&_7(i,t),i.U_.size===0&&(s.c_()?s.P_():Ba(i)&&i.j_.set("Unknown"))}function S2(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}Zs(r).y_(t)}function _7(r,t){r.H_.Ne(t),Zs(r).w_(t)}function b2(r){r.H_=new g_({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Zs(r).start(),r.j_.B_()}function w2(r){return Ba(r)&&!Zs(r).u_()&&r.U_.size>0}function Ba(r){return St(r).W_.size===0}function C7(r){r.H_=void 0}async function AC(r){r.j_.set("Online")}async function SC(r){r.U_.forEach((t,i)=>{S2(r,t)})}async function bC(r,t){C7(r),w2(r)?(r.j_.q_(t),b2(r)):r.j_.set("Unknown")}async function wC(r,t,i){if(r.j_.set("Online"),t instanceof r7&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const m of c.targetIds)l.U_.has(m)&&(await l.remoteSyncer.rejectListen(m,f),l.U_.delete(m),l.H_.removeTarget(m))}(r,t)}catch(s){ct(La,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Nc(r,s)}else if(t instanceof vc?r.H_.We(t):t instanceof i7?r.H_.Ze(t):r.H_.je(t),!i.isEqual(Tt.min()))try{const s=await p7(r.localStore);i.compareTo(s)>=0&&await function(c,f){const m=c.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const C=c.U_.get(y);C&&c.U_.set(y,C.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const C=c.U_.get(p);if(!C)return;c.U_.set(p,C.withResumeToken(qe.EMPTY_BYTE_STRING,C.snapshotVersion)),_7(c,p);const A=new Ur(C.target,p,y,C.sequenceNumber);S2(c,A)}),c.remoteSyncer.applyRemoteEvent(m)}(r,i)}catch(s){ct(La,"Failed to raise snapshot:",s),await Nc(r,s)}}async function Nc(r,t,i){if(!Xs(t))throw t;r.W_.add(1),await Ol(r),r.j_.set("Offline"),i||(i=()=>p7(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ct(La,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await Wc(r)})}function E7(r,t){return t().catch(i=>Nc(r,i,t))}async function Jc(r){const t=St(r),i=Qr(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:u2;for(;RC(t);)try{const l=await lC(t.localStore,s);if(l===null){t.K_.length===0&&i.P_();break}s=l.batchId,DC(t,l)}catch(l){await Nc(t,l)}T7(t)&&A7(t)}function RC(r){return Ba(r)&&r.K_.length<10}function DC(r,t){r.K_.push(t);const i=Qr(r);i.c_()&&i.b_&&i.S_(t.mutations)}function T7(r){return Ba(r)&&!Qr(r).u_()&&r.K_.length>0}function A7(r){Qr(r).start()}async function MC(r){Qr(r).C_()}async function IC(r){const t=Qr(r);for(const i of r.K_)t.S_(i.mutations)}async function xC(r,t,i){const s=r.K_.shift(),l=g2.from(s,t,i);await E7(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await Jc(r)}async function VC(r,t){t&&Qr(r).b_&&await async function(s,l){if(function(f){return d_(f)&&f!==et.ABORTED}(l.code)){const c=s.K_.shift();Qr(s).h_(),await E7(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await Jc(s)}}(r,t),T7(r)&&A7(r)}async function of(r,t){const i=St(r);i.asyncQueue.verifyOperationInProgress(),ct(La,"RemoteStore received new credentials");const s=Ba(i);i.W_.add(3),await Ol(i),s&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await Wc(i)}async function NC(r,t){const i=St(r);t?(i.W_.delete(2),await Wc(i)):t||(i.W_.add(2),await Ol(i),i.j_.set("Unknown"))}function Zs(r){return r.J_||(r.J_=function(i,s,l){const c=St(i);return c.M_(),new yC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:AC.bind(null,r),No:SC.bind(null,r),Lo:bC.bind(null,r),p_:wC.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),w2(r)?b2(r):r.j_.set("Unknown")):(await r.J_.stop(),C7(r))})),r.J_}function Qr(r){return r.Y_||(r.Y_=function(i,s,l){const c=St(i);return c.M_(),new vC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:MC.bind(null,r),Lo:VC.bind(null,r),D_:IC.bind(null,r),v_:xC.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Jc(r)):(await r.Y_.stop(),r.K_.length>0&&(ct(La,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class R2{constructor(t,i,s,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,s,l,c){const f=Date.now()+s,m=new R2(t,i,f,l,c);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pt(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function D2(r,t){if($i("AsyncQueue",`${t}: ${r}`),Xs(r))return new pt(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Us{static emptySet(t){return new Us(t.comparator)}constructor(t){this.comparator=t?(i,s)=>t(i,s)||vt.comparator(i.key,s.key):(i,s)=>vt.comparator(i.key,s.key),this.keyedMap=cl(),this.sortedSet=new re(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,s)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof Us)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const s=new Us;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=i,s}}/**
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
 */class lf{constructor(){this.Z_=new re(vt.comparator)}track(t){const i=t.doc.key,s=this.Z_.get(i);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(i,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(i,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(i,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(i):t.type===1&&s.type===2?this.Z_=this.Z_.insert(i,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):Ct():this.Z_=this.Z_.insert(i,t)}X_(){const t=[];return this.Z_.inorderTraversal((i,s)=>{t.push(s)}),t}}class Fs{constructor(t,i,s,l,c,f,m,p,y){this.query=t,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,i,s,l,c){const f=[];return i.forEach(m=>{f.push({type:0,doc:m})}),new Fs(t,i,Us.emptySet(i),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,s=t.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class OC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class kC{constructor(){this.queries=uf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,s){const l=St(i),c=l.queries;l.queries=uf(),c.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new pt(et.ABORTED,"Firestore shutting down"))}}function uf(){return new Pa(r=>j9(r),Qc)}async function S7(r,t){const i=St(r);let s=3;const l=t.query;let c=i.queries.get(l);c?!c.na()&&t.ra()&&(s=2):(c=new OC,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await i.onListen(l,!0);break;case 1:c.ea=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const m=D2(f,`Initialization of query '${Vs(t.query)}' failed`);return void t.onError(m)}i.queries.set(l,c),c.ta.push(t),t.sa(i.onlineState),c.ea&&t.oa(c.ea)&&M2(i)}async function b7(r,t){const i=St(r),s=t.query;let l=3;const c=i.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?l=t.ra()?0:1:!c.na()&&t.ra()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function UC(r,t){const i=St(r);let s=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const m of f.ta)m.oa(l)&&(s=!0);f.ea=l}}s&&M2(i)}function LC(r,t,i){const s=St(r),l=s.queries.get(t);if(l)for(const c of l.ta)c.onError(i);s.queries.delete(t)}function M2(r){r.ia.forEach(t=>{t.next()})}var q4,cf;(cf=q4||(q4={}))._a="default",cf.Cache="cache";class w7{constructor(t,i,s){this.query=t,this.aa=i,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Fs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.ua?this.la(t)&&(this.aa.next(t),i=!0):this.ha(t,this.onlineState)&&(this.Pa(t),i=!0),this.ca=t,i}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let i=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),i=!0),i}ha(t,i){if(!t.fromCache||!this.ra())return!0;const s=i!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}la(t){if(t.docChanges.length>0)return!0;const i=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}Pa(t){t=Fs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==q4.Cache}}/**
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
 */class R7{constructor(t){this.key=t}}class D7{constructor(t){this.key=t}}class zC{constructor(t,i){this.query=t,this.fa=i,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Vt(),this.mutatedKeys=Vt(),this.ya=q9(t),this.wa=new Us(this.ya)}get ba(){return this.fa}Sa(t,i){const s=i?i.Da:new lf,l=i?i.wa:this.wa;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,m=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((C,A)=>{const b=l.get(C),N=Kc(this.query,A)?A:null,O=!!b&&this.mutatedKeys.has(b.key),H=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let k=!1;b&&N?b.data.isEqual(N.data)?O!==H&&(s.track({type:3,doc:N}),k=!0):this.va(b,N)||(s.track({type:2,doc:N}),k=!0,(p&&this.ya(N,p)>0||y&&this.ya(N,y)<0)&&(m=!0)):!b&&N?(s.track({type:0,doc:N}),k=!0):b&&!N&&(s.track({type:1,doc:b}),k=!0,(p||y)&&(m=!0)),k&&(N?(f=f.add(N),c=H?c.add(C):c.delete(C)):(f=f.delete(C),c=c.delete(C)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const C=this.query.limitType==="F"?f.last():f.first();f=f.delete(C.key),c=c.delete(C.key),s.track({type:1,doc:C})}return{wa:f,Da:s,ls:m,mutatedKeys:c}}va(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,s,l){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((C,A)=>function(N,O){const H=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ct()}};return H(N)-H(O)}(C.type,A.type)||this.ya(C.doc,A.doc)),this.Ca(s),l=l!=null&&l;const m=i&&!l?this.Fa():[],p=this.pa.size===0&&this.current&&!l?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Fs(this.query,t.wa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new lf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(i=>this.fa=this.fa.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.fa=this.fa.delete(i)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Vt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const i=[];return t.forEach(s=>{this.pa.has(s)||i.push(new D7(s))}),this.pa.forEach(s=>{t.has(s)||i.push(new R7(s))}),i}Oa(t){this.fa=t.gs,this.pa=Vt();const i=this.Sa(t.documents);return this.applyChanges(i,!0)}Na(){return Fs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const I2="SyncEngine";class PC{constructor(t,i,s){this.query=t,this.targetId=i,this.view=s}}class BC{constructor(t){this.key=t,this.Ba=!1}}class jC{constructor(t,i,s,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Pa(m=>j9(m),Qc),this.qa=new Map,this.Qa=new Set,this.$a=new re(vt.comparator),this.Ka=new Map,this.Ua=new _2,this.Wa={},this.Ga=new Map,this.za=Hs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function qC(r,t,i=!0){const s=O7(r);let l;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Na()):l=await M7(s,t,i,!0),l}async function HC(r,t){const i=O7(r);await M7(i,t,!0,!1)}async function M7(r,t,i,s){const l=await uC(r.localStore,ci(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let m;return s&&(m=await FC(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&i&&v7(r.remoteStore,l),m}async function FC(r,t,i,s,l){r.Ha=(A,b,N)=>async function(H,k,Q,nt){let it=k.view.Sa(Q);it.ls&&(it=await ef(H.localStore,k.query,!1).then(({documents:V})=>k.view.Sa(V,it)));const yt=nt&&nt.targetChanges.get(k.targetId),dt=nt&&nt.targetMismatches.get(k.targetId)!=null,Et=k.view.applyChanges(it,H.isPrimaryClient,yt,dt);return ff(H,k.targetId,Et.Ma),Et.snapshot}(r,A,b,N);const c=await ef(r.localStore,t,!0),f=new zC(t,c.gs),m=f.Sa(c.documents),p=Nl.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),y=f.applyChanges(m,r.isPrimaryClient,p);ff(r,i,y.Ma);const C=new PC(t,i,f);return r.ka.set(t,C),r.qa.has(i)?r.qa.get(i).push(t):r.qa.set(i,[t]),y.snapshot}async function GC(r,t,i){const s=St(r),l=s.ka.get(t),c=s.qa.get(l.targetId);if(c.length>1)return s.qa.set(l.targetId,c.filter(f=>!Qc(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await B4(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),i&&A2(s.remoteStore,l.targetId),H4(s,l.targetId)}).catch($s)):(H4(s,l.targetId),await B4(s.localStore,l.targetId,!0))}async function QC(r,t){const i=St(r),s=i.ka.get(t),l=i.qa.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),A2(i.remoteStore,s.targetId))}async function KC(r,t,i){const s=tE(r);try{const l=await function(f,m){const p=St(f),y=be.now(),C=m.reduce((N,O)=>N.add(O.key),Vt());let A,b;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let O=Xi(),H=Vt();return p.ds.getEntries(N,C).next(k=>{O=k,O.forEach((Q,nt)=>{nt.isValidDocument()||(H=H.add(Q))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,O)).next(k=>{A=k;const Q=[];for(const nt of m){const it=l_(nt,A.get(nt.key).overlayedDocument);it!=null&&Q.push(new Wr(nt.key,it,O9(it.value.mapValue),hi.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,Q,m)}).next(k=>{b=k;const Q=k.applyToLocalDocumentSet(A,H);return p.documentOverlayCache.saveOverlays(N,k.batchId,Q)})}).then(()=>({batchId:b.batchId,changes:F9(A)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new re(kt)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,l.batchId,i),await kl(s,l.changes),await Jc(s.remoteStore)}catch(l){const c=D2(l,"Failed to persist write");i.reject(c)}}async function I7(r,t){const i=St(r);try{const s=await sC(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Ka.get(c);f&&(Qt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.Ba=!0:l.modifiedDocuments.size>0?Qt(f.Ba):l.removedDocuments.size>0&&(Qt(f.Ba),f.Ba=!1))}),await kl(i,s,t)}catch(s){await $s(s)}}function hf(r,t,i){const s=St(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.ka.forEach((c,f)=>{const m=f.view.sa(t);m.snapshot&&l.push(m.snapshot)}),function(f,m){const p=St(f);p.onlineState=m;let y=!1;p.queries.forEach((C,A)=>{for(const b of A.ta)b.sa(m)&&(y=!0)}),y&&M2(p)}(s.eventManager,t),l.length&&s.La.p_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function YC(r,t,i){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",i);const l=s.Ka.get(t),c=l&&l.key;if(c){let f=new re(vt.comparator);f=f.insert(c,Ye.newNoDocument(c,Tt.min()));const m=Vt().add(c),p=new Xc(Tt.min(),new Map,new re(kt),f,m);await I7(s,p),s.$a=s.$a.remove(c),s.Ka.delete(t),x2(s)}else await B4(s.localStore,t,!1).then(()=>H4(s,t,i)).catch($s)}async function $C(r,t){const i=St(r),s=t.batch.batchId;try{const l=await aC(i.localStore,t);V7(i,s,null),x7(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await kl(i,l)}catch(l){await $s(l)}}async function XC(r,t,i){const s=St(r);try{const l=await function(f,m){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let C;return p.mutationQueue.lookupMutationBatch(y,m).next(A=>(Qt(A!==null),C=A.keys(),p.mutationQueue.removeMutationBatch(y,A))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,C,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,C)).next(()=>p.localDocuments.getDocuments(y,C))})}(s.localStore,t);V7(s,t,i),x7(s,t),s.sharedClientState.updateMutationState(t,"rejected",i),await kl(s,l)}catch(l){await $s(l)}}function x7(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function V7(r,t,i){const s=St(r);let l=s.Wa[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),s.Wa[s.currentUser.toKey()]=l}}function H4(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),i&&r.La.Ja(s,i);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||N7(r,s)})}function N7(r,t){r.Qa.delete(t.path.canonicalString());const i=r.$a.get(t);i!==null&&(A2(r.remoteStore,i),r.$a=r.$a.remove(t),r.Ka.delete(i),x2(r))}function ff(r,t,i){for(const s of i)s instanceof R7?(r.Ua.addReference(s.key,t),ZC(r,s)):s instanceof D7?(ct(I2,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||N7(r,s.key)):Ct()}function ZC(r,t){const i=t.key,s=i.path.canonicalString();r.$a.get(i)||r.Qa.has(s)||(ct(I2,"New document in limbo: "+i),r.Qa.add(s),x2(r))}function x2(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const i=new vt(Jt.fromString(t)),s=r.za.next();r.Ka.set(s,new BC(i)),r.$a=r.$a.insert(i,s),v7(r.remoteStore,new Ur(ci(m2(i.path)),s,"TargetPurposeLimboResolution",qc.ae))}}async function kl(r,t,i){const s=St(r),l=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,t,i).then(y=>{var C;if((y||i)&&s.isPrimaryClient){const A=y?!y.fromCache:(C=i==null?void 0:i.targetChanges.get(p.targetId))===null||C===void 0?void 0:C.current;s.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(y){l.push(y);const A=E2.Yi(p.targetId,y);c.push(A)}}))}),await Promise.all(f),s.La.p_(l),await async function(p,y){const C=St(p);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>Z.forEach(y,b=>Z.forEach(b.Hi,N=>C.persistence.referenceDelegate.addReference(A,b.targetId,N)).next(()=>Z.forEach(b.Ji,N=>C.persistence.referenceDelegate.removeReference(A,b.targetId,N)))))}catch(A){if(!Xs(A))throw A;ct(T2,"Failed to update sequence numbers: "+A)}for(const A of y){const b=A.targetId;if(!A.fromCache){const N=C.Ts.get(b),O=N.snapshotVersion,H=N.withLastLimboFreeSnapshotVersion(O);C.Ts=C.Ts.insert(b,H)}}}(s.localStore,c))}async function WC(r,t){const i=St(r);if(!i.currentUser.isEqual(t)){ct(I2,"User change. New user:",t.toKey());const s=await m7(i.localStore,t);i.currentUser=t,function(c,f){c.Ga.forEach(m=>{m.forEach(p=>{p.reject(new pt(et.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await kl(i,s.Rs)}}function JC(r,t){const i=St(r),s=i.Ka.get(t);if(s&&s.Ba)return Vt().add(s.key);{let l=Vt();const c=i.qa.get(t);if(!c)return l;for(const f of c){const m=i.ka.get(f);l=l.unionWith(m.view.ba)}return l}}function O7(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=I7.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=JC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=YC.bind(null,t),t.La.p_=UC.bind(null,t.eventManager),t.La.Ja=LC.bind(null,t.eventManager),t}function tE(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$C.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=XC.bind(null,t),t}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return rC(this.persistence,new eC,t.initialUser,this.serializer)}Xa(t){return new d7(C2.ri,this.serializer)}Za(t){return new hC}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class eE extends Oc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){Qt(this.persistence.referenceDelegate instanceof Vc);const s=this.persistence.referenceDelegate.garbageCollector;return new B_(s,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new d7(s=>Vc.ri(s,i),this.serializer)}}class F4{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=WC.bind(null,this.syncEngine),await NC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kC}()}createDatastore(t){const i=Zc(t.databaseInfo.databaseId),s=function(c){return new gC(c)}(t.databaseInfo);return function(c,f,m,p){return new CC(c,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,i)}createRemoteStore(t){return function(s,l,c,f,m){return new TC(s,l,c,f,m)}(this.localStore,this.datastore,t.asyncQueue,i=>hf(this.syncEngine,i,0),function(){return af.D()?new af:new fC}())}createSyncEngine(t,i){return function(l,c,f,m,p,y,C){const A=new jC(l,c,f,m,p,y);return C&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=St(l);ct(La,"RemoteStore shutting down."),c.W_.add(5),await Ol(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}F4.provider={build:()=>new F4};/**
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
 */class k7{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):$i("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
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
 */const Kr="FirestoreClient";class nE{constructor(t,i,s,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=Ke.UNAUTHENTICATED,this.clientId=S9.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ct(Kr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ct(Kr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const s=D2(i,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function E4(r,t){r.asyncQueue.verifyOperationInProgress(),ct(Kr,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let s=i.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await m7(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function df(r,t){r.asyncQueue.verifyOperationInProgress();const i=await iE(r);ct(Kr,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(s=>of(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>of(t.remoteStore,l)),r._onlineComponents=t}async function iE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ct(Kr,"Using user provided OfflineComponentProvider");try{await E4(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===et.FAILED_PRECONDITION||l.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;zs("Error using user provided cache. Falling back to memory cache: "+i),await E4(r,new Oc)}}else ct(Kr,"Using default OfflineComponentProvider"),await E4(r,new eE(void 0));return r._offlineComponents}async function U7(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ct(Kr,"Using user provided OnlineComponentProvider"),await df(r,r._uninitializedComponentsProvider._online)):(ct(Kr,"Using default OnlineComponentProvider"),await df(r,new F4))),r._onlineComponents}function rE(r){return U7(r).then(t=>t.syncEngine)}async function L7(r){const t=await U7(r),i=t.eventManager;return i.onListen=qC.bind(null,t.syncEngine),i.onUnlisten=GC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=HC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=QC.bind(null,t.syncEngine),i}function aE(r,t,i={}){const s=new Gi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,p,y){const C=new k7({next:b=>{C.su(),f.enqueueAndForget(()=>b7(c,A));const N=b.docs.has(m);!N&&b.fromCache?y.reject(new pt(et.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&b.fromCache&&p&&p.source==="server"?y.reject(new pt(et.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(b)},error:b=>y.reject(b)}),A=new w7(m2(m.path),C,{includeMetadataChanges:!0,Ta:!0});return S7(c,A)}(await L7(r),r.asyncQueue,t,i,s)),s.promise}function sE(r,t,i={}){const s=new Gi;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,p,y){const C=new k7({next:b=>{C.su(),f.enqueueAndForget(()=>b7(c,A)),b.fromCache&&p.source==="server"?y.reject(new pt(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(b)},error:b=>y.reject(b)}),A=new w7(m,C,{includeMetadataChanges:!0,Ta:!0});return S7(c,A)}(await L7(r),r.asyncQueue,t,i,s)),s.promise}/**
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
 */function z7(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const mf=new Map;/**
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
 */function P7(r,t,i){if(!i)throw new pt(et.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function oE(r,t,i,s){if(t===!0&&s===!0)throw new pt(et.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function pf(r){if(!vt.isDocumentKey(r))throw new pt(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gf(r){if(vt.isDocumentKey(r))throw new pt(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function V2(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Ct()}function Zi(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new pt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=V2(r);throw new pt(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */const B7="firestore.googleapis.com",yf=!0;class vf{constructor(t){var i,s;if(t.host===void 0){if(t.ssl!==void 0)throw new pt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=B7,this.ssl=yf}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:yf;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=f7;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<z_)throw new pt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}oE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z7((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new pt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class t1{constructor(t,i,s,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new pt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pv;switch(s.type){case"firstParty":return new _v(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=mf.get(i);s&&(ct("ComponentProvider","Removing Datastore"),mf.delete(i),s.terminate())}(this),Promise.resolve()}}function lE(r,t,i,s={}){var l;const c=(r=Zi(r,t1))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${i}`;c.host!==B7&&c.host!==m&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:m,ssl:!1,emulatorOptions:s});if(!Ls(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,C;if(typeof s.mockUserToken=="string")y=s.mockUserToken,C=Ke.MOCK_USER;else{y=wp(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new pt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Ke(A)}r._authCredentials=new gv(new A9(y,C))}}/**
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
 */class e1{constructor(t,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new e1(this.firestore,t,this._query)}}class ln{constructor(t,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ln(this.firestore,t,this._key)}}class Br extends e1{constructor(t,i,s){super(t,i,m2(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ln(this.firestore,null,new vt(t))}withConverter(t){return new Br(this.firestore,t,this._path)}}function Ln(r,t,...i){if(r=di(r),P7("collection","path",t),r instanceof t1){const s=Jt.fromString(t,...i);return gf(s),new Br(r,null,s)}{if(!(r instanceof ln||r instanceof Br))throw new pt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...i));return gf(s),new Br(r.firestore,null,s)}}function Yr(r,t,...i){if(r=di(r),arguments.length===1&&(t=S9.newId()),P7("doc","path",t),r instanceof t1){const s=Jt.fromString(t,...i);return pf(s),new ln(r,null,new vt(s))}{if(!(r instanceof ln||r instanceof Br))throw new pt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Jt.fromString(t,...i));return pf(s),new ln(r.firestore,r instanceof Br?r.converter:null,new vt(s))}}/**
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
 */const _f="AsyncQueue";class Cf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new g7(this,"async_queue_retry"),this.bu=()=>{const s=C4();s&&ct(_f,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const i=C4();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=C4();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Gi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Xs(t))throw t;ct(_f,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const l=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw $i("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(t,i,s){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=R2.createAndSchedule(this,t,i,s,c=>this.Fu(c));return this.fu.push(l),l}Du(){this.gu&&Ct()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class Ul extends t1{constructor(t,i,s,l){super(t,i,s,l),this.type="firestore",this._queue=new Cf,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Cf(t),this._firestoreClient=void 0,await t}}}function uE(r,t){const i=typeof r=="object"?r:Qf(),s=typeof r=="string"?r:wc,l=xl(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Sp("firestore");c&&lE(l,...c)}return l}function N2(r){if(r._terminated)throw new pt(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||cE(r),r._firestoreClient}function cE(r){var t,i,s;const l=r._freezeSettings(),c=function(m,p,y,C){return new Nv(m,p,y,C.host,C.ssl,C.experimentalForceLongPolling,C.experimentalAutoDetectLongPolling,z7(C.experimentalLongPollingOptions),C.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new nE(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Gs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gs(qe.fromBase64String(t))}catch(i){throw new pt(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Gs(qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class n1{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new pt(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ll{constructor(t){this._methodName=t}}/**
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
 */class O2{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new pt(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new pt(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return kt(this._lat,t._lat)||kt(this._long,t._long)}}/**
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
 */class k2{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}}/**
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
 */const hE=/^__.*__$/;class fE{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return this.fieldMask!==null?new Wr(t,this.data,this.fieldMask,i,this.fieldTransforms):new Vl(t,this.data,i,this.fieldTransforms)}}class j7{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return new Wr(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function q7(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ct()}}class i1{constructor(t,i,s,l,c,f){this.settings=t,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new i1(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.$u(t),l}Ku(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return kc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(q7(this.Lu)&&hE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class dE{constructor(t,i,s){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=s||Zc(t)}ju(t,i,s,l=!1){return new i1({Lu:t,methodName:i,zu:s,path:je.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H7(r){const t=r._freezeSettings(),i=Zc(r._databaseId);return new dE(r._databaseId,!!t.ignoreUndefinedProperties,i)}function mE(r,t,i,s,l,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,i,l);z2("Data must be an object, but it was:",f,s);const m=F7(s,f);let p,y;if(c.merge)p=new gn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const C=[];for(const A of c.mergeFields){const b=G4(t,A,i);if(!f.contains(b))throw new pt(et.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Q7(C,b)||C.push(b)}p=new gn(C),y=f.fieldTransforms.filter(A=>p.covers(A.field))}else p=null,y=f.fieldTransforms;return new fE(new sn(m),p,y)}class r1 extends Ll{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof r1}}function pE(r,t,i){return new i1({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class U2 extends Ll{constructor(t,i){super(t),this.Hu=i}_toFieldTransform(t){const i=pE(this,t,!0),s=this.Hu.map(c=>zl(c,i)),l=new qs(s);return new W9(t.path,l)}isEqual(t){return t instanceof U2&&Ls(this.Hu,t.Hu)}}class L2 extends Ll{constructor(t,i){super(t),this.Ju=i}_toFieldTransform(t){const i=new bl(t.serializer,K9(t.serializer,this.Ju));return new W9(t.path,i)}isEqual(t){return t instanceof L2&&this.Ju===t.Ju}}function gE(r,t,i,s){const l=r.ju(1,t,i);z2("Data must be an object, but it was:",l,s);const c=[],f=sn.empty();Zr(s,(p,y)=>{const C=P2(t,p,i);y=di(y);const A=l.Ku(C);if(y instanceof r1)c.push(C);else{const b=zl(y,A);b!=null&&(c.push(C),f.set(C,b))}});const m=new gn(c);return new j7(f,m,l.fieldTransforms)}function yE(r,t,i,s,l,c){const f=r.ju(1,t,i),m=[G4(t,s,i)],p=[l];if(c.length%2!=0)throw new pt(et.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<c.length;b+=2)m.push(G4(t,c[b])),p.push(c[b+1]);const y=[],C=sn.empty();for(let b=m.length-1;b>=0;--b)if(!Q7(y,m[b])){const N=m[b];let O=p[b];O=di(O);const H=f.Ku(N);if(O instanceof r1)y.push(N);else{const k=zl(O,H);k!=null&&(y.push(N),C.set(N,k))}}const A=new gn(y);return new j7(C,A,f.fieldTransforms)}function zl(r,t){if(G7(r=di(r)))return z2("Unsupported field value:",t,r),F7(r,t);if(r instanceof Ll)return function(s,l){if(!q7(l.Lu))throw l.Wu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const m of s){let p=zl(m,l.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=di(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return K9(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=be.fromDate(s);return{timestampValue:xc(l.serializer,c)}}if(s instanceof be){const c=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xc(l.serializer,c)}}if(s instanceof O2)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Gs)return{bytesValue:a7(l.serializer,s._byteString)};if(s instanceof ln){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:v2(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof k2)return function(f,m){return{mapValue:{fields:{[V9]:{stringValue:N9},[Rc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return p2(m.serializer,y)})}}}}}}(s,l);throw l.Wu(`Unsupported field value: ${V2(s)}`)}(r,t)}function F7(r,t){const i={};return w9(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zr(r,(s,l)=>{const c=zl(l,t.qu(s));c!=null&&(i[s]=c)}),{mapValue:{fields:i}}}function G7(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof O2||r instanceof Gs||r instanceof ln||r instanceof Ll||r instanceof k2)}function z2(r,t,i){if(!G7(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const s=V2(i);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function G4(r,t,i){if((t=di(t))instanceof n1)return t._internalPath;if(typeof t=="string")return P2(r,t);throw kc("Field path arguments must be of type string or ",r,!1,void 0,i)}const vE=new RegExp("[~\\*/\\[\\]]");function P2(r,t,i){if(t.search(vE)>=0)throw kc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new n1(...t.split("."))._internalPath}catch{throw kc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function kc(r,t,i,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${l}`),p+=")"),new pt(et.INVALID_ARGUMENT,m+r+p)}function Q7(r,t){return r.some(i=>i.isEqual(t))}/**
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
 */class K7{constructor(t,i,s,l,c){this._firestore=t,this._userDataWriter=i,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _E(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(Y7("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class _E extends K7{data(){return super.data()}}function Y7(r,t){return typeof t=="string"?P2(r,t):t instanceof n1?t._internalPath:t._delegate._internalPath}/**
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
 */function CE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pt(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EE{convertValue(t,i="none"){switch(Gr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(Fr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw Ct()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const s={};return Zr(t,(l,c)=>{s[l]=this.convertValue(c,i)}),s}convertVectorValue(t){var i,s,l;const c=(l=(s=(i=t.fields)===null||i===void 0?void 0:i[Rc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>fe(f.doubleValue));return new k2(c)}convertGeoPoint(t){return new O2(fe(t.latitude),fe(t.longitude))}convertArray(t,i){return(t.values||[]).map(s=>this.convertValue(s,i))}convertServerTimestamp(t,i){switch(i){case"previous":const s=Fc(t);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(El(t));default:return null}}convertTimestamp(t){const i=Hr(t);return new be(i.seconds,i.nanos)}convertDocumentKey(t,i){const s=Jt.fromString(t);Qt(h7(s));const l=new Tl(s.get(1),s.get(3)),c=new vt(s.popFirst(5));return l.isEqual(i)||$i(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function TE(r,t,i){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class fl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $7 extends K7{constructor(t,i,s,l,c,f){super(t,i,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new _c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const s=this._document.data.field(Y7("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class _c extends $7{data(t={}){return super.data(t)}}class AE{constructor(t,i,s,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new fl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(s=>{t.call(i,new _c(this._firestore,this._userDataWriter,s.key,s,new fl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new pt(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(m=>{const p=new _c(l._firestore,l._userDataWriter,m.doc.key,m.doc,new fl(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const p=new _c(l._firestore,l._userDataWriter,m.doc.key,m.doc,new fl(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,C=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),C=f.indexOf(m.doc.key)),{type:SE(m.type),doc:p,oldIndex:y,newIndex:C}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function SE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ct()}}/**
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
 */function bE(r){r=Zi(r,ln);const t=Zi(r.firestore,Ul);return aE(N2(t),r._key).then(i=>wE(t,r,i))}class X7 extends EE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gs(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new ln(this.firestore,null,i)}}function Fn(r){r=Zi(r,e1);const t=Zi(r.firestore,Ul),i=N2(t),s=new X7(t);return CE(r._query),sE(i,r._query).then(l=>new AE(t,s,r,l))}function Z7(r,t,i){r=Zi(r,ln);const s=Zi(r.firestore,Ul),l=TE(r.converter,t);return W7(s,[mE(H7(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,hi.none())])}function Ws(r,t,i,...s){r=Zi(r,ln);const l=Zi(r.firestore,Ul),c=H7(l);let f;return f=typeof(t=di(t))=="string"||t instanceof n1?yE(c,"updateDoc",r._key,t,i,s):gE(c,"updateDoc",r._key,t),W7(l,[f.toMutation(r._key,hi.exists(!0))])}function W7(r,t){return function(s,l){const c=new Gi;return s.asyncQueue.enqueueAndForget(async()=>KC(await rE(s),l,c)),c.promise}(N2(r),t)}function wE(r,t,i){const s=i.docs.get(t._key),l=new X7(r);return new $7(r,l,t._key,s,new fl(i.hasPendingWrites,i.fromCache),t.converter)}function J7(...r){return new U2("arrayUnion",r)}function RE(r){return new L2("increment",r)}(function(t,i=!0){(function(l){Ys=l})(Lg),jr(new Ki("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),m=new Ul(new yv(s.getProvider("auth-internal")),new Cv(f,s.getProvider("app-check-internal")),function(y,C){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(y.options.projectId,C)}(f,l),f);return c=Object.assign({useFetchStreams:i},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),ui(w6,R6,t),ui(w6,R6,"esm2017")})();const DE={apiKey:"AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",authDomain:"greentrails-d6c2d.firebaseapp.com",projectId:"greentrails-d6c2d",storageBucket:"greentrails-d6c2d.firebasestorage.app",messagingSenderId:"67873180558",appId:"1:67873180558:web:d65d95fb94c483683db2df",measurementId:"G-9K66S1W7XM"},t8=Gf(DE);hv(t8);const Re=uE(t8),ME=()=>{const[r,t]=F.useState([]),[i,s]=F.useState([]),[l,c]=F.useState(!0),f=Rl(),[m,p]=kn.useState([]),{currentUser:y}=Ml();if(F.useEffect(()=>{(async()=>{c(!0);try{const N=(await Fn(Ln(Re,"opportunities"))).docs.map(Q=>({id:Q.id,...Q.data()})),H=(await Fn(Ln(Re,"Users"))).docs.map(Q=>({id:Q.id,...Q.data()}));console.log(H),p(H);const k=new Date;t(N.filter(Q=>new Date(Q.date)>k).sort((Q,nt)=>new Date(Q.date)-new Date(nt.date)))}catch(b){console.error("Error fetching opportunities:",b)}c(!1)})()},[]),l)return z.jsx("div",{className:"box",children:z.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return z.jsxs(z.Fragment,{children:[z.jsx("div",{className:"box",children:z.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})}),z.jsx("div",{className:"trunk"})]});function C(A){let b=A.currentTarget;const N=Yr(Re,"opportunities",b.id);let O=y;if(!O){const k=document.getElementById(b.id+"i");k&&k.value&&(O=k.value)}if(console.log(m),!O||O==="")return;if(O==="editcode0"){console.log("edit code entered"),f("/adddata");return}const H=r.find(k=>k.id===b.id);if(H&&new Date(H.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!m.some(k=>k.Name===O)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{Ws(N,{signups:J7(O)}),document.getElementById(b.id+"d").textContent="So far "+r.find(k=>k.id===b.id).signups.join(", ")+", "+O+" will be going",alert("Successfully signed up for this opportunity!")}catch(k){console.error("Error adding name to opportunity:",k),alert("An error occurred while signing up. Please try again.")}}return z.jsx("div",{children:r.map(A=>z.jsxs("div",{children:[z.jsxs("div",{className:"box",children:[z.jsx("h1",{children:A.name}),z.jsxs("p",{className:"date",children:["when: ",new Date(A.date).toLocaleDateString()]}),z.jsx("p",{children:A.description}),z.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),z.jsx("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),z.jsx("p",{}),z.jsxs("div",{children:[z.jsx("label",{children:"Sign up here with green trails:"}),z.jsx("p",{}),y?z.jsx(z.Fragment,{children:z.jsx("button",{type:"submit",id:A.id,className:"volunteer-signup-btn",onClick:b=>C(b),children:"🌲 Sign Up for This Event"})}):z.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",z.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),z.jsxs("p",{id:A.id+"d",children:["So far ",A.signups.join(", ")," will be going"]})]})]},A.id),z.jsx("div",{className:"trunk"})]}))})},IE=()=>{const[r,t]=F.useState([]),[i,s]=F.useState([]),[l,c]=F.useState(!0),f=Rl(),[m,p]=kn.useState([]),{currentUser:y}=Ml();if(F.useEffect(()=>{(async()=>{c(!0);try{const N=(await Fn(Ln(Re,"opportunities"))).docs.map(Q=>({id:Q.id,...Q.data()})),H=(await Fn(Ln(Re,"Users"))).docs.map(Q=>({id:Q.id,...Q.data()}));console.log(H),p(H);const k=new Date;t(N.sort((Q,nt)=>new Date(Q.date)-new Date(nt.date)))}catch(b){console.error("Error fetching opportunities:",b)}c(!1)})()},[]),l)return z.jsx("div",{className:"box",children:z.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return z.jsx("div",{className:"box",children:z.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})});function C(A){let b=A.currentTarget;const N=Yr(Re,"opportunities",b.id);let O=y;if(!O){const k=document.getElementById(b.id+"i");k&&k.value&&(O=k.value)}if(console.log(m),!O||O==="")return;if(O==="editcode0"){console.log("edit code entered"),f("/adddata");return}const H=r.find(k=>k.id===b.id);if(H&&new Date(H.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!m.some(k=>k.Name===O)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{Ws(N,{signups:J7(O)}),document.getElementById(b.id+"d").textContent="So far "+r.find(k=>k.id===b.id).signups.join(", ")+", "+O+" will be going",alert("Successfully signed up for this opportunity!")}catch(k){console.error("Error adding name to opportunity:",k),alert("An error occurred while signing up. Please try again.")}}return z.jsx("div",{children:r.map(A=>z.jsxs("div",{children:[z.jsxs("div",{className:"box",children:[z.jsx("h1",{children:A.name}),z.jsxs("p",{className:"date",children:["when: ",new Date(A.date).toLocaleDateString()]}),z.jsx("p",{children:A.description}),z.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),z.jsx("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),z.jsx("p",{}),z.jsxs("div",{children:[z.jsx("label",{children:"Sign up here with green trails:"}),z.jsx("p",{}),y?z.jsx(z.Fragment,{children:z.jsx("button",{type:"submit",id:A.id,className:"volunteer-signup-btn",onClick:b=>C(b),children:"🌲 Sign Up for This Event"})}):z.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",z.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),z.jsxs("p",{id:A.id+"d",children:["So far ",A.signups.join(", ")," will be going"]})]})]},A.id),z.jsx("div",{className:"trunk"})]}))})},xE=()=>{const[r,t]=F.useState(!0);function i(){console.log("show past"),t(!r)}return z.jsxs("div",{id:"page",children:[z.jsx(Il,{}),z.jsx(zc,{message:"Upcoming Volunteer Opportunities",shadow:!0}),z.jsx("button",{id:"showpastbutton",onClick:i,children:r?"Show past opportunities":"Hide past opportunities"}),r?z.jsx(ME,{}):z.jsx(IE,{}),z.jsx(hp,{}),z.jsx(dp,{})]})},VE=()=>z.jsxs("div",{className:"App-header",children:[z.jsx(Il,{}),z.jsx(zc,{message:"Add data page"}),z.jsx("input",{className:"addmoredata",id:"id",type:"text",placeholder:"id"}),z.jsx("input",{className:"addmoredata",id:"name",type:"text",placeholder:"Name"}),z.jsx("input",{className:"addmoredata",id:"date",type:"text",placeholder:"date"}),z.jsx("input",{className:"addmoredata",id:"description",type:"text",placeholder:"description"}),z.jsx("input",{className:"addmoredata",id:"link",type:"text",placeholder:"link"}),z.jsx("button",{className:"addmoredata",onClick:()=>{const r=document.getElementById("name").value,t=document.getElementById("date").value,i=document.getElementById("description").value,s=document.getElementById("link").value,l=document.getElementById("id").value;(async f=>{const m=await Fn(Ln(Re,"opportunities"));let p=!1;return m.forEach(y=>{y.id===f&&(p=!0)}),p})(l).then(f=>{if(f){alert("ID already in use. Please choose a different ID.");return}else{const m=Yr(Re,"opportunities",l);Z7(m,{name:r,date:t,description:i,link:s,signups:[]})}})},children:"Add opportunity"})]}),NE=()=>{const[r,t]=kn.useState([]),[i,s]=kn.useState([]);F.useEffect(()=>{(async()=>{try{const m=(await Fn(Ln(Re,"Users"))).docs.map(C=>({id:C.id,score:C.data().score,Name:C.data().Name}));t(m.sort((C,A)=>A.score-C.score));const y=(await Fn(Ln(Re,"opportunities"))).docs.map(C=>({id:C.id,...C.data()}));s(y)}catch(f){console.error("Error fetching leaderboard:",f)}})()},[]);function l(c){let f=0;r.forEach(m=>{i.forEach(p=>{p.signups.includes(m.id)&&(f+=1),Ws(Yr(Re,"Users",m.id),{score:f})}),f=0}),console.log("Done updating leaderboard")}return z.jsxs("div",{id:"events-table",children:[z.jsx("h3",{id:"events-title",children:"Events Attended"}),z.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((c,f)=>z.jsxs("div",{className:"lbentrie",children:[z.jsxs("p",{className:"place",children:[f+1,"."]}),z.jsx("p",{className:"username",children:c.Name}),z.jsx("p",{className:"userscore",children:c.score}),z.jsx("p",{className:"username",children:"  "})]},c.id)),z.jsx("button",{onClick:c=>l(),id:"",children:"Update leaderboard"})]})]})},OE=()=>{const[r,t]=kn.useState([]),[i,s]=kn.useState([]),[l,c]=kn.useState(!1);F.useEffect(()=>{(async()=>{try{const y=(await Fn(Ln(Re,"Users"))).docs.map(b=>{const N=b.data();return{id:b.id,score:N.score??0,Name:N.Name??"",meetingsAttended:N.meetingsAttended??0}});y.sort((b,N)=>{const O=b.meetingsAttended??0,H=N.meetingsAttended??0;return H!==O?H-O:(N.score??0)-(b.score??0)}),t(y);const A=(await Fn(Ln(Re,"meetings"))).docs.map(b=>({id:b.id,...b.data()}));s(A)}catch(p){console.error("Error fetching leaderboard/meetings:",p)}})()},[]);async function f(m){try{c(!0);const p=await Promise.all(r.map(async y=>{const C=i.reduce((A,b)=>(Array.isArray(b.attendees)?b.attendees:[]).includes(y.Name)?A+1:A,0);return await Ws(Yr(Re,"Users",y.id),{meetingsAttended:C}),{...y,meetingsAttended:C}}));p.sort((y,C)=>{const A=y.meetingsAttended??0,b=C.meetingsAttended??0;return b!==A?b-A:(C.score??0)-(y.score??0)}),t(p),console.log("Done updating meetingsAttended for all users")}catch(p){console.error("Error updating meetingsAttended:",p)}finally{c(!1)}}return z.jsxs("div",{id:"events-table",children:[z.jsx("h3",{id:"events-title",children:"Meetings Attended (after 11/12)"}),z.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((m,p)=>z.jsxs("div",{className:"lbentrie",children:[z.jsxs("p",{className:"place",children:[p+1,"."]}),z.jsx("p",{className:"username",children:m.Name}),z.jsx("p",{className:"userscore",children:m.meetingsAttended??0})]},m.id)),z.jsx("button",{onClick:m=>f(),id:"",disabled:l,children:l?"Updating…":"Update meetings attendance"})]})]})},kE=()=>{const[r,t]=kn.useState([]);return F.useEffect(()=>{const i=async()=>{try{const c=(await Fn(Ln(Re,"Users"))).docs.map(f=>({id:f.id,santasPopped:f.data().santasPopped||0,Name:f.data().Name}));t(c.sort((f,m)=>m.santasPopped-f.santasPopped))}catch(l){console.error("Error fetching santa leaderboard:",l)}};i();const s=setInterval(i,5e3);return()=>clearInterval(s)},[]),z.jsxs("div",{id:"santa-table",children:[z.jsx("h3",{id:"santa-title",children:"Santas Popped"}),z.jsx("div",{id:"santa-leaderboard",className:"boardcon",children:r.map((i,s)=>z.jsxs("div",{className:"lbentrie",children:[z.jsxs("p",{className:"place",children:[s+1,"."]}),z.jsx("p",{className:"username",children:i.Name}),z.jsx("p",{className:"userscore",children:i.santasPopped}),z.jsx("p",{className:"username",children:"  "})]},i.id))})]})},UE=()=>z.jsxs("div",{children:[z.jsx(zc,{message:"Leaderboards",shadow:!0}),z.jsx(Il,{}),z.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[z.jsx(NE,{}),z.jsx(OE,{}),z.jsx(kE,{})]}),z.jsx(fp,{})]}),LE=()=>{const[r,t]=kn.useState([]),[i,s]=kn.useState([]),[l,c]=kn.useState(!1),{currentUser:f,login:m,logout:p}=Ml();Rl(),F.useEffect(()=>{},[]);function y(A){const b=document.getElementById("name").value;console.log(b),(async O=>{const H=await Fn(Ln(Re,"Users"));let k=!1;return H.forEach(Q=>{Q.id===O&&(k=!0)}),k})(b).then(O=>{if(O){alert("name already in use. Please choose a different name.");return}else if(b.trim()!==""){const H=Yr(Ln(Re,"Users"),b);Z7(H,{Name:b,score:0,santasPopped:0}).then(()=>{alert("User created successfully! You are now logged in."),m(b)})}else alert("Name cannot be empty. Please enter a valid name.")})}async function C(A){const b=document.getElementById("name").value;if(b.trim()===""){alert("Name cannot be empty. Please enter a valid name.");return}try{const N=Yr(Re,"Users",b),O=await bE(N);if(O.exists()){const H=O.data();H&&H.santasPopped===void 0&&await Ws(N,{santasPopped:0}),m(b),alert(`Welcome back, ${b}!`)}else alert("User not found. Please sign up first.")}catch(N){console.error("Error logging in:",N),alert("Error logging in. Please try again.")}}return z.jsx("div",{children:f?z.jsxs("div",{className:"signup signup-welcome",children:[z.jsxs("h3",{children:["🌲 Welcome, ",f,"! 🌲"]}),z.jsx("p",{children:"You are currently logged in."}),z.jsxs("p",{style:{fontSize:"16px",marginTop:"20px"},children:["🎅 ",z.jsx("strong",{children:"Santa Tracking Active!"})," Click flying Santas anywhere on the site to earn points and climb the leaderboard!"]}),z.jsx("button",{onClick:()=>p(),children:"Logout"})]}):z.jsxs("div",{className:"signup",children:[z.jsx("h3",{children:l?"🔐 Login":"✨ Sign Up"}),z.jsx("p",{style:{fontSize:"16px",color:"#2d5a3d",marginBottom:"20px"},children:"🎅 Track your Santa pops and compete on the leaderboard!"}),z.jsx("input",{id:"name",type:"text",placeholder:"Enter your name"}),l?z.jsx("button",{type:"submit",onClick:A=>C(),children:"Login"}):z.jsx("button",{type:"submit",onClick:A=>y(),children:"Sign Up"}),z.jsxs("div",{className:"signup-toggle",children:[z.jsx("p",{style:{marginBottom:"10px",color:"#666"},children:l?"Don't have an account?":"Already have an account?"}),z.jsx("button",{onClick:()=>c(!l),children:l?"Create New Account":"Login Instead"})]})]})})},zE=()=>z.jsxs("div",{children:[z.jsx(zc,{message:"Sign Up!!",shadow:!0}),z.jsx(Il,{}),z.jsx(LE,{})]}),PE=""+new URL("lowrezlogo-eSGE3ORT.png",import.meta.url).href,BE=()=>(F.useEffect(()=>{let r=document.querySelector("link[rel='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.href=PE,r.type="image/png"},[]),null),jE=encodeURIComponent(`
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
        `);function qE({particleCount:r=120,speed:t=1,size:i=3,color:s="#FFF",zIndex:l=9999}){const c=F.useRef(null),f=F.useRef(null),m=F.useRef([]),p=F.useRef(1),y=F.useRef(null),C=F.useRef([]),A=F.useRef(null),b=F.useRef([]),{currentUser:N}=Ml(),O=F.useRef(N);return F.useEffect(()=>{O.current=N,console.log("Snow: currentUser updated to:",N)},[N]),F.useEffect(()=>{const H=c.current;if(!H)return;const k=H.getContext("2d");if(!k)return;const Q=new Image;Q.src=`data:image/svg+xml;charset=utf-8,${jE}`,y.current=Q;const nt=()=>{const I=window.devicePixelRatio||1;p.current=I;const U=window.innerWidth,R=window.innerHeight;H.style.width=`${U}px`,H.style.height=`${R}px`,H.width=Math.round(U*I),H.height=Math.round(R*I),k.setTransform(I,0,0,I,0,0)},it=()=>{const I=H.width/p.current,U=H.height/p.current,R=[];for(let Nt=0;Nt<r;Nt++){const xt=Math.random()*i+Math.random()*(i/2);R.push({x:Math.random()*I,y:Math.random()*U,r:xt,vx:(Math.random()-.5)*.6,vy:(.5+Math.random()*.9)*t,o:.5+Math.random()*.8,swing:Math.random()*20,phase:Math.random()*Math.PI*2})}m.current=R};let yt=performance.now();const dt=I=>{const U=(I-yt)/16.6667;yt=I;const R=H.width/p.current,Nt=H.height/p.current;k.clearRect(0,0,R,Nt);const xt=m.current;for(let st=0;st<xt.length;st++){const W=xt[st];W.phase+=.02*U,W.x+=W.vx*U+Math.sin(W.phase)*(W.swing*.01)*U,W.y+=W.vy*U,W.y-W.r>Nt&&(W.y=-W.r,W.x=Math.random()*R),W.x-W.r>R&&(W.x=-W.r),W.x+W.r<0&&(W.x=R+W.r),k.globalAlpha=W.o;const x=k.createRadialGradient(W.x,W.y,0,W.x,W.y,W.r*1.8);x.addColorStop(0,s),x.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=x,k.beginPath(),k.arc(W.x,W.y,W.r,0,Math.PI*2),k.fill()}k.globalAlpha=1;const rt=C.current;for(let st=rt.length-1;st>=0;st--){const W=rt[st];W.x+=W.vx*U;const x=Math.sin(I/400+W.x*.02)*6*W.scale,J=W.x,lt=W.y+x;y.current&&y.current.complete?(k.save(),k.translate(J,lt),W.dir===-1&&k.scale(-1,1),k.drawImage(y.current,-W.w/2,-W.h/2,W.w,W.h),k.restore()):(k.fillStyle="#e74c3c",k.fillRect(J-W.w/2,lt-W.h/2,W.w,W.h)),W.dir===1&&W.x-W.w/2>R+50&&rt.splice(st,1),W.dir===-1&&W.x+W.w/2<-50&&rt.splice(st,1)}const ht=b.current;for(let st=ht.length-1;st>=0;st--){const W=ht[st];W.vy+=.06*U,W.vx*=.995,W.vy*=.999,W.x+=W.vx*U,W.y+=W.vy*U,W.life-=1*U;const x=Math.max(0,W.life/W.maxLife);k.globalAlpha=x;const J=k.createRadialGradient(W.x,W.y,0,W.x,W.y,W.r*2.5);J.addColorStop(0,W.color),J.addColorStop(.6,"rgba(255,255,255,0.2)"),J.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=J,k.beginPath(),k.arc(W.x,W.y,W.r,0,Math.PI*2),k.fill(),W.life<=0&&ht.splice(st,1)}k.globalAlpha=1,f.current=requestAnimationFrame(dt)},Et=()=>{const I=H.width/p.current,U=H.height/p.current,R=Math.random()>.5?1:-1,Nt=R===1?-60:I+60,xt=U*Math.random(),rt=.6+Math.random()*.8,ht=120,st=60,W=(2+Math.random()*2)*(R===1?1:-1)*Math.max(.5,t),x={x:Nt,y:xt,vx:W,scale:rt,dir:R,w:ht*rt,h:st*rt};C.current.push(x)},V=(I,U,R)=>{const Nt=30+Math.round(Math.random()*20),xt=[];for(let rt=0;rt<Nt;rt++){const ht=Math.random()*Math.PI*2,st=1+Math.random()*4,W=Math.cos(ht)*st*(.6+Math.random()*1.4),x=Math.sin(ht)*st*(.6+Math.random()*1.4)-Math.random()*1.5,J=1+Math.random()*3,lt=30+Math.random()*40,ot=R;xt.push({x:I,y:U,vx:W,vy:x,r:J,life:lt,maxLife:lt,color:ot})}b.current.push(...xt)},w=I=>{const U=H.getBoundingClientRect(),R=I.clientX-U.left,Nt=I.clientY-U.top,xt=C.current,rt=O.current;console.log("Santa click detected. Current user:",rt);for(let ht=xt.length-1;ht>=0;ht--){const st=xt[ht],W=R-st.x,x=Nt-st.y,J=Math.max(st.w,st.h)*.6;if(W*W+x*x<=J*J){if(V(st.x,st.y,"#ffb347"),xt.splice(ht,1),rt){console.log("User is logged in, incrementing santa count for:",rt);try{const lt=Yr(Re,"Users",rt);Ws(lt,{santasPopped:RE(1)}).then(()=>{console.log(`Santa popped! Count incremented for ${rt}`)}).catch(ot=>{console.error("Error updating santa count:",ot),alert(`Failed to save Santa pop. Error: ${ot.message}`)})}catch(lt){console.error("Error creating update:",lt)}}else console.log("No user logged in - santa pop not tracked"),sessionStorage.getItem("loginReminderShown")||(alert("🎅 Login required! Go to the Sign Up page to login or create an account, then your Santa pops will be tracked on the leaderboard!"),sessionStorage.setItem("loginReminderShown","true"));break}}};nt(),it(),f.current=requestAnimationFrame(dt),A.current=window.setInterval(Et,5e3);const S=window.setTimeout(Et,1e3),M=()=>{nt(),it(),C.current=[]};return window.addEventListener("resize",M),window.addEventListener("click",w),()=>{f.current&&cancelAnimationFrame(f.current),A.current&&clearInterval(A.current),window.clearTimeout(S),window.removeEventListener("resize",M),window.removeEventListener("click",w)}},[r,t,i,s]),z.jsx("canvas",{ref:c,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:l},"aria-hidden":!0})}const HE=()=>(F.useRef(null),F.useRef(null),F.useRef(null),F.useRef(!1),F.useRef(null),F.useEffect(()=>{},[]),null),FE=()=>z.jsx(ap,{children:z.jsxs("div",{className:"App",children:[z.jsx(BE,{}),z.jsx(qE,{}),z.jsx(HE,{}),z.jsx($m,{children:z.jsxs(wm,{children:[z.jsx(kr,{path:"*",element:z.jsx(Sm,{to:"/",replace:!0})}),z.jsx(kr,{path:"/",element:z.jsx(i6,{})}),z.jsx(kr,{path:"/greentrails/*",element:z.jsx(i6,{})}),z.jsx(kr,{path:"/volenterpage/*",element:z.jsx(xE,{})}),z.jsx(kr,{path:"/adddata/*",element:z.jsx(VE,{})}),z.jsx(kr,{path:"/leaderboard/*",element:z.jsx(UE,{})}),z.jsx(kr,{path:"/signup/*",element:z.jsx(zE,{})})]})})]})});kd.createRoot(document.getElementById("root")).render(z.jsx(kn.StrictMode,{children:z.jsx(FE,{})}));
