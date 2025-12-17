(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function wf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var o4={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gh;function xd(){if(Gh)return hl;Gh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return hl.Fragment=t,hl.jsx=i,hl.jsxs=i,hl}var Qh;function Id(){return Qh||(Qh=1,o4.exports=xd()),o4.exports}var R=Id(),l4={exports:{}},Nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Md(){if(Kh)return Nt;Kh=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),A=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,K={};function z(O,nt,ft){this.props=O,this.context=nt,this.refs=K,this.updater=ft||N}z.prototype.isReactComponent={},z.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=z.prototype;function X(O,nt,ft){this.props=O,this.context=nt,this.refs=K,this.updater=ft||N}var J=X.prototype=new F;J.constructor=X,k(J,z.prototype),J.isPureReactComponent=!0;var ut=Array.isArray,st={H:null,A:null,T:null,S:null},dt=Object.prototype.hasOwnProperty;function M(O,nt,ft,ot,lt,It){return ft=It.ref,{$$typeof:r,type:O,key:nt,ref:ft!==void 0?ft:null,props:It}}function b(O,nt){return M(O.type,nt,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function I(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ft){return nt[ft]})}var V=/\/+/g;function P(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):nt.toString(36)}function D(){}function Et(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Jt(O,nt,ft,ot,lt){var It=typeof O;(It==="undefined"||It==="boolean")&&(O=null);var bt=!1;if(O===null)bt=!0;else switch(It){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(O.$$typeof){case r:case t:bt=!0;break;case C:return bt=O._init,Jt(bt(O._payload),nt,ft,ot,lt)}}if(bt)return lt=lt(O),bt=ot===""?"."+P(O,0):ot,ut(lt)?(ft="",bt!=null&&(ft=bt.replace(V,"$&/")+"/"),Jt(lt,nt,ft,"",function(St){return St})):lt!=null&&(w(lt)&&(lt=b(lt,ft+(lt.key==null||O&&O.key===lt.key?"":(""+lt.key).replace(V,"$&/")+"/")+bt)),nt.push(lt)),1;bt=0;var Mt=ot===""?".":ot+":";if(ut(O))for(var mt=0;mt<O.length;mt++)ot=O[mt],It=Mt+P(ot,mt),bt+=Jt(ot,nt,ft,It,lt);else if(mt=S(O),typeof mt=="function")for(O=mt.call(O),mt=0;!(ot=O.next()).done;)ot=ot.value,It=Mt+P(ot,mt++),bt+=Jt(ot,nt,ft,It,lt);else if(It==="object"){if(typeof O.then=="function")return Jt(Et(O),nt,ft,ot,lt);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return bt}function rt(O,nt,ft){if(O==null)return O;var ot=[],lt=0;return Jt(O,ot,"","",function(It){return nt.call(ft,It,lt++)}),ot}function vt(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(ft){(O._status===0||O._status===-1)&&(O._status=1,O._result=ft)},function(ft){(O._status===0||O._status===-1)&&(O._status=2,O._result=ft)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var gt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Gt(){}return Nt.Children={map:rt,forEach:function(O,nt,ft){rt(O,function(){nt.apply(this,arguments)},ft)},count:function(O){var nt=0;return rt(O,function(){nt++}),nt},toArray:function(O){return rt(O,function(nt){return nt})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Nt.Component=z,Nt.Fragment=i,Nt.Profiler=l,Nt.PureComponent=X,Nt.StrictMode=s,Nt.Suspense=p,Nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=st,Nt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Nt.cache=function(O){return function(){return O.apply(null,arguments)}},Nt.cloneElement=function(O,nt,ft){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ot=k({},O.props),lt=O.key,It=void 0;if(nt!=null)for(bt in nt.ref!==void 0&&(It=void 0),nt.key!==void 0&&(lt=""+nt.key),nt)!dt.call(nt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&nt.ref===void 0||(ot[bt]=nt[bt]);var bt=arguments.length-2;if(bt===1)ot.children=ft;else if(1<bt){for(var Mt=Array(bt),mt=0;mt<bt;mt++)Mt[mt]=arguments[mt+2];ot.children=Mt}return M(O.type,lt,void 0,void 0,It,ot)},Nt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},Nt.createElement=function(O,nt,ft){var ot,lt={},It=null;if(nt!=null)for(ot in nt.key!==void 0&&(It=""+nt.key),nt)dt.call(nt,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(lt[ot]=nt[ot]);var bt=arguments.length-2;if(bt===1)lt.children=ft;else if(1<bt){for(var Mt=Array(bt),mt=0;mt<bt;mt++)Mt[mt]=arguments[mt+2];lt.children=Mt}if(O&&O.defaultProps)for(ot in bt=O.defaultProps,bt)lt[ot]===void 0&&(lt[ot]=bt[ot]);return M(O,It,void 0,void 0,null,lt)},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(O){return{$$typeof:m,render:O}},Nt.isValidElement=w,Nt.lazy=function(O){return{$$typeof:C,_payload:{_status:-1,_result:O},_init:vt}},Nt.memo=function(O,nt){return{$$typeof:y,type:O,compare:nt===void 0?null:nt}},Nt.startTransition=function(O){var nt=st.T,ft={};st.T=ft;try{var ot=O(),lt=st.S;lt!==null&&lt(ft,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(Gt,gt)}catch(It){gt(It)}finally{st.T=nt}},Nt.unstable_useCacheRefresh=function(){return st.H.useCacheRefresh()},Nt.use=function(O){return st.H.use(O)},Nt.useActionState=function(O,nt,ft){return st.H.useActionState(O,nt,ft)},Nt.useCallback=function(O,nt){return st.H.useCallback(O,nt)},Nt.useContext=function(O){return st.H.useContext(O)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(O,nt){return st.H.useDeferredValue(O,nt)},Nt.useEffect=function(O,nt){return st.H.useEffect(O,nt)},Nt.useId=function(){return st.H.useId()},Nt.useImperativeHandle=function(O,nt,ft){return st.H.useImperativeHandle(O,nt,ft)},Nt.useInsertionEffect=function(O,nt){return st.H.useInsertionEffect(O,nt)},Nt.useLayoutEffect=function(O,nt){return st.H.useLayoutEffect(O,nt)},Nt.useMemo=function(O,nt){return st.H.useMemo(O,nt)},Nt.useOptimistic=function(O,nt){return st.H.useOptimistic(O,nt)},Nt.useReducer=function(O,nt,ft){return st.H.useReducer(O,nt,ft)},Nt.useRef=function(O){return st.H.useRef(O)},Nt.useState=function(O){return st.H.useState(O)},Nt.useSyncExternalStore=function(O,nt,ft){return st.H.useSyncExternalStore(O,nt,ft)},Nt.useTransition=function(){return st.H.useTransition()},Nt.version="19.0.0",Nt}var Yh;function X4(){return Yh||(Yh=1,l4.exports=Md()),l4.exports}var q=X4();const cn=wf(q);var u4={exports:{}},fl={},c4={exports:{}},h4={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Nd(){return $h||($h=1,function(r){function t(rt,vt){var gt=rt.length;rt.push(vt);t:for(;0<gt;){var Gt=gt-1>>>1,O=rt[Gt];if(0<l(O,vt))rt[Gt]=vt,rt[gt]=O,gt=Gt;else break t}}function i(rt){return rt.length===0?null:rt[0]}function s(rt){if(rt.length===0)return null;var vt=rt[0],gt=rt.pop();if(gt!==vt){rt[0]=gt;t:for(var Gt=0,O=rt.length,nt=O>>>1;Gt<nt;){var ft=2*(Gt+1)-1,ot=rt[ft],lt=ft+1,It=rt[lt];if(0>l(ot,gt))lt<O&&0>l(It,ot)?(rt[Gt]=It,rt[lt]=gt,Gt=lt):(rt[Gt]=ot,rt[ft]=gt,Gt=ft);else if(lt<O&&0>l(It,gt))rt[Gt]=It,rt[lt]=gt,Gt=lt;else break t}}return vt}function l(rt,vt){var gt=rt.sortIndex-vt.sortIndex;return gt!==0?gt:rt.id-vt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],C=1,A=null,S=3,N=!1,k=!1,K=!1,z=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function J(rt){for(var vt=i(y);vt!==null;){if(vt.callback===null)s(y);else if(vt.startTime<=rt)s(y),vt.sortIndex=vt.expirationTime,t(p,vt);else break;vt=i(y)}}function ut(rt){if(K=!1,J(rt),!k)if(i(p)!==null)k=!0,Et();else{var vt=i(y);vt!==null&&Jt(ut,vt.startTime-rt)}}var st=!1,dt=-1,M=5,b=-1;function w(){return!(r.unstable_now()-b<M)}function I(){if(st){var rt=r.unstable_now();b=rt;var vt=!0;try{t:{k=!1,K&&(K=!1,F(dt),dt=-1),N=!0;var gt=S;try{e:{for(J(rt),A=i(p);A!==null&&!(A.expirationTime>rt&&w());){var Gt=A.callback;if(typeof Gt=="function"){A.callback=null,S=A.priorityLevel;var O=Gt(A.expirationTime<=rt);if(rt=r.unstable_now(),typeof O=="function"){A.callback=O,J(rt),vt=!0;break e}A===i(p)&&s(p),J(rt)}else s(p);A=i(p)}if(A!==null)vt=!0;else{var nt=i(y);nt!==null&&Jt(ut,nt.startTime-rt),vt=!1}}break t}finally{A=null,S=gt,N=!1}vt=void 0}}finally{vt?V():st=!1}}}var V;if(typeof X=="function")V=function(){X(I)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,D=P.port2;P.port1.onmessage=I,V=function(){D.postMessage(null)}}else V=function(){z(I,0)};function Et(){st||(st=!0,V())}function Jt(rt,vt){dt=z(function(){rt(r.unstable_now())},vt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(rt){rt.callback=null},r.unstable_continueExecution=function(){k||N||(k=!0,Et())},r.unstable_forceFrameRate=function(rt){0>rt||125<rt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<rt?Math.floor(1e3/rt):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(rt){switch(S){case 1:case 2:case 3:var vt=3;break;default:vt=S}var gt=S;S=vt;try{return rt()}finally{S=gt}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(rt,vt){switch(rt){case 1:case 2:case 3:case 4:case 5:break;default:rt=3}var gt=S;S=rt;try{return vt()}finally{S=gt}},r.unstable_scheduleCallback=function(rt,vt,gt){var Gt=r.unstable_now();switch(typeof gt=="object"&&gt!==null?(gt=gt.delay,gt=typeof gt=="number"&&0<gt?Gt+gt:Gt):gt=Gt,rt){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=gt+O,rt={id:C++,callback:vt,priorityLevel:rt,startTime:gt,expirationTime:O,sortIndex:-1},gt>Gt?(rt.sortIndex=gt,t(y,rt),i(p)===null&&rt===i(y)&&(K?(F(dt),dt=-1):K=!0,Jt(ut,gt-Gt))):(rt.sortIndex=O,t(p,rt),k||N||(k=!0,Et())),rt},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(rt){var vt=S;return function(){var gt=S;S=vt;try{return rt.apply(this,arguments)}finally{S=gt}}}}(h4)),h4}var Xh;function Vd(){return Xh||(Xh=1,c4.exports=Nd()),c4.exports}var f4={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Od(){if(Zh)return tn;Zh=1;var r=X4();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)y+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,y,C){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:A==null?null:""+A,children:p,containerInfo:y,implementation:C}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tn.createPortal=function(p,y){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(p,y,null,C)},tn.flushSync=function(p){var y=f.T,C=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=C,s.d.f()}},tn.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},tn.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var C=y.as,A=m(C,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,N=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;C==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:S,fetchPriority:N}):C==="script"&&s.d.X(p,{crossOrigin:A,integrity:S,fetchPriority:N,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},tn.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var C=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},tn.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var C=y.as,A=m(C,y.crossOrigin);s.d.L(p,C,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},tn.preloadModule=function(p,y){if(typeof p=="string")if(y){var C=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},tn.requestFormReset=function(p){s.d.r(p)},tn.unstable_batchedUpdates=function(p,y){return p(y)},tn.useFormState=function(p,y,C){return f.H.useFormState(p,y,C)},tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},tn.version="19.0.0",tn}var Wh;function kd(){if(Wh)return f4.exports;Wh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),f4.exports=Od(),f4.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Ld(){if(Jh)return fl;Jh=1;var r=Vd(),t=X4(),i=kd();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),N=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ut=Symbol.for("react.memo_cache_sentinel"),st=Symbol.iterator;function dt(e){return e===null||typeof e!="object"?null:(e=st&&e[st]||e["@@iterator"],typeof e=="function"?e:null)}var M=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case m:return"Portal";case C:return"Profiler";case y:return"StrictMode";case K:return"Suspense";case z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case N:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:b(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return b(e(n))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,V,P;function D(e){if(V===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);V=n&&n[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+e+P}var Et=!1;function Jt(e,n){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var tt=function(){throw Error()};if(Object.defineProperty(tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(tt,[])}catch(Y){var G=Y}Reflect.construct(e,[],tt)}else{try{tt.call()}catch(Y){G=Y}e.call(tt.prototype)}}else{try{throw Error()}catch(Y){G=Y}(tt=e())&&typeof tt.catch=="function"&&tt.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var x=_.split(`
`),U=E.split(`
`);for(h=o=0;o<x.length&&!x[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===x.length||h===U.length)for(o=x.length-1,h=U.length-1;1<=o&&0<=h&&x[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(x[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||x[o]!==U[h]){var $=`
`+x[o].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=o&&0<=h);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?D(a):""}function rt(e){switch(e.tag){case 26:case 27:case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return e=Jt(e.type,!1),e;case 11:return e=Jt(e.type.render,!1),e;case 1:return e=Jt(e.type,!0),e;default:return""}}function vt(e){try{var n="";do n+=rt(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function gt(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function Gt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function O(e){if(gt(e)!==e)throw Error(s(188))}function nt(e){var n=e.alternate;if(!n){if(n=gt(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),e;if(d===o)return O(h),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function ft(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=ft(e),n!==null)return n;e=e.sibling}return null}var ot=Array.isArray,lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,It={pending:!1,data:null,method:null,action:null},bt=[],Mt=-1;function mt(e){return{current:e}}function St(e){0>Mt||(e.current=bt[Mt],bt[Mt]=null,Mt--)}function Rt(e,n){Mt++,bt[Mt]=e.current,e.current=n}var Qt=mt(null),Xt=mt(null),te=mt(null),Ut=mt(null);function it(e,n){switch(Rt(te,n),Rt(Xt,e),Rt(Qt,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Ch(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Ch(e),n=Eh(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}St(Qt),Rt(Qt,n)}function oe(){St(Qt),St(Xt),St(te)}function ke(e){e.memoizedState!==null&&Rt(Ut,e);var n=Qt.current,a=Eh(n,e.type);n!==a&&(Rt(Xt,e),Rt(Qt,a))}function Ze(e){Xt.current===e&&(St(Qt),St(Xt)),Ut.current===e&&(St(Ut),sl._currentValue=It)}var Kn=Object.prototype.hasOwnProperty,sa=r.unstable_scheduleCallback,Xa=r.unstable_cancelCallback,u1=r.unstable_shouldYield,so=r.unstable_requestPaint,hn=r.unstable_now,ql=r.unstable_getCurrentPriorityLevel,we=r.unstable_ImmediatePriority,Le=r.unstable_UserBlockingPriority,bi=r.unstable_NormalPriority,Hl=r.unstable_LowPriority,oo=r.unstable_IdlePriority,c1=r.log,oa=r.unstable_setDisableYieldValue,or=null,We=null;function lo(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(or,e,void 0,(e.current.flags&128)===128)}catch{}}function ei(e){if(typeof c1=="function"&&oa(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(or,e)}catch{}}var an=Math.clz32?Math.clz32:Gl,uo=Math.log,Fl=Math.LN2;function Gl(e){return e>>>=0,e===0?32:31-(uo(e)/Fl|0)|0}var ni=128,lr=4194304;function Yn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,h=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=a&134217727;return E!==0?(a=E&~h,a!==0?o=Yn(a):(d&=E,d!==0?o=Yn(d):e||(_=E&~_,_!==0&&(o=Yn(_))))):(E=a&~h,E!==0?o=Yn(E):d!==0?o=Yn(d):e||(_=a&~_,_!==0&&(o=Yn(_)))),o===0?0:n!==0&&n!==o&&(n&h)===0&&(h=o&-o,_=n&-n,h>=_||h===32&&(_&4194176)!==0)?n:o}function ur(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Za(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=ni;return ni<<=1,(ni&4194176)===0&&(ni=128),e}function cr(){var e=lr;return lr<<=1,(lr&62914560)===0&&(lr=4194304),e}function Wa(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ve(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ql(e,n,a,o,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,x=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var $=31-an(a),tt=1<<$;E[$]=0,x[$]=-1;var G=U[$];if(G!==null)for(U[$]=null,$=0;$<G.length;$++){var Y=G[$];Y!==null&&(Y.lane&=-536870913)}a&=~tt}o!==0&&hr(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~n))}function hr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-an(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function fr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-an(a),h=1<<o;h&n|e[o]&n&&(e[o]|=n),a&=~h}}function Kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yl(){var e=lt.p;return e!==0?e:(e=window.event,e===void 0?32:Ph(e.type))}function dr(e,n){var a=lt.p;try{return lt.p=e,n()}finally{lt.p=a}}var ii=Math.random().toString(36).slice(2),Ue="__reactFiber$"+ii,be="__reactProps$"+ii,Ri="__reactContainer$"+ii,la="__reactEvents$"+ii,Ja="__reactListeners$"+ii,ri="__reactHandles$"+ii,ho="__reactResources$"+ii,mr="__reactMarker$"+ii;function ua(e){delete e[Ue],delete e[be],delete e[la],delete e[Ja],delete e[ri]}function $n(e){var n=e[Ue];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ri]||a[Ue]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Sh(e);e!==null;){if(a=e[Ue])return a;e=Sh(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[Ue]||e[Ri]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function pr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function gr(e){var n=e[ho];return n||(n=e[ho]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ce(e){e[mr]=!0}var fo=new Set,ts={};function Cn(e,n){fn(e,n),fn(e+"Capture",n)}function fn(e,n){for(ts[e]=n,e=0;e<n.length;e++)fo.add(n[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mo={},po={};function $l(e){return Kn.call(po,e)?!0:Kn.call(mo,e)?!1:h1.test(e)?po[e]=!0:(mo[e]=!0,!1)}function yr(e,n,a){if($l(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function vr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Mn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function sn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function f1(e){var n=Xl(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){o=""+_,d.call(this,_)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ca(e){e._valueTracker||(e._valueTracker=f1(e))}function go(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Xl(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xi=/[\n"\\]/g;function me(e){return e.replace(xi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _r(e,n,a,o,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+sn(n)):e.value!==""+sn(n)&&(e.value=""+sn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?ns(e,_,sn(n)):a!=null?ns(e,_,sn(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+sn(E):e.removeAttribute("name")}function ha(e,n,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+sn(a):"",n=n!=null?""+sn(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function ns(e,n,a){n==="number"&&es(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Kt(e,n,a,o){if(e=e.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=n.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+sn(a),n=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}n!==null||e[h].disabled||(n=e[h])}n!==null&&(n.selected=!0)}}function fa(e,n,a){if(n!=null&&(n=""+sn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+sn(a):""}function Cr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=sn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var d1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yo(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||d1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zl(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&yo(e,h,o)}else for(var d in n)n.hasOwnProperty(d)&&yo(e,d,n[d])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return p1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vn=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,Mi=null;function Ni(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[be]||null;t:switch(e=n.stateNode,n.type){case"input":if(_r(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var h=o[be]||null;if(!h)throw Error(s(90));_r(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&go(o)}break t;case"textarea":fa(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Kt(e,!!a.multiple,n,!1)}}}var _o=!1;function Wl(e,n,a){if(_o)return e(n,a);_o=!0;try{var o=e(n);return o}finally{if(_o=!1,(Ii!==null||Mi!==null)&&(Hu(),Ii&&(n=Ii,e=Mi,Mi=Ii=null,Ni(n),e)))for(n=0;n<e.length;n++)Ni(e[n])}}function da(e,n){var a=e.stateNode;if(a===null)return null;var o=a[be]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var On=!1;if(En)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){On=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{On=!1}var si=null,Er=null,Vi=null;function Co(){if(Vi)return Vi;var e,n=Er,a=n.length,o,h="value"in si?si.value:si.textContent,d=h.length;for(e=0;e<a&&n[e]===h[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===h[d-o];o++);return Vi=h.slice(e,1<o?1-o:void 0)}function oi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Eo(){return!1}function ze(e){function n(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?li:Eo,this.isPropagationStopped=Eo,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),n}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=ze(Zt),pa=I({},Zt,{view:0,detail:0}),Jl=ze(pa),as,ss,ui,ga=I({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(as=e.screenX-ui.screenX,ss=e.screenY-ui.screenY):ss=as=0,ui=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),kn=ze(ga),tu=I({},ga,{dataTransfer:0}),g1=ze(tu),ya=I({},pa,{relatedTarget:0}),os=ze(ya),To=I({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),ls=ze(To),eu=I({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),us=ze(eu),y1=I({},Zt,{data:0}),Ao=ze(y1),va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function So(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iu[e])?!!n[e]:!1}function _a(){return So}var ru=I({},pa,{key:function(e){if(e.key){var n=va[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cs=ze(ru),au=I({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=ze(au),Oi=I({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),su=ze(Oi),ou=I({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=ze(ou),uu=I({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hs=ze(uu),on=I({},Zt,{newState:0,oldState:0}),cu=ze(on),hu=[9,13,27,32],ci=En&&"CompositionEvent"in window,u=null;En&&"documentMode"in document&&(u=document.documentMode);var g=En&&"TextEvent"in window&&!u,v=En&&(!ci||u&&8<u&&11>=u),T=" ",B=!1;function Q(e,n){switch(e){case"keyup":return hu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function at(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jt=!1;function Re(e,n){switch(e){case"compositionend":return at(n);case"keypress":return n.which!==32?null:(B=!0,T);case"textInput":return e=n.data,e===T&&B?null:e;default:return null}}function Bt(e,n){if(jt)return e==="compositionend"||!ci&&Q(e,n)?(e=Co(),Vi=Er=si=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var Pe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function De(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pe[e.type]:n==="textarea"}function ki(e,n,a,o){Ii?Mi?Mi.push(o):Mi=[o]:Ii=o,n=Yu(n,"onChange"),0<n.length&&(a=new rs("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Fe=null,hi=null;function bo(e){ph(e,0)}function fu(e){var n=pr(e);if(go(n))return e}function F2(e,n){if(e==="change")return n}var G2=!1;if(En){var v1;if(En){var _1="oninput"in document;if(!_1){var Q2=document.createElement("div");Q2.setAttribute("oninput","return;"),_1=typeof Q2.oninput=="function"}v1=_1}else v1=!1;G2=v1&&(!document.documentMode||9<document.documentMode)}function K2(){Fe&&(Fe.detachEvent("onpropertychange",Y2),hi=Fe=null)}function Y2(e){if(e.propertyName==="value"&&fu(hi)){var n=[];ki(n,hi,e,is(e)),Wl(bo,n)}}function a8(e,n,a){e==="focusin"?(K2(),Fe=n,hi=a,Fe.attachEvent("onpropertychange",Y2)):e==="focusout"&&K2()}function s8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(hi)}function o8(e,n){if(e==="click")return fu(n)}function l8(e,n){if(e==="input"||e==="change")return fu(n)}function u8(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Tn=typeof Object.is=="function"?Object.is:u8;function Ro(e,n){if(Tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Kn.call(n,h)||!Tn(e[h],n[h]))return!1}return!0}function $2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X2(e,n){var a=$2(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$2(a)}}function Z2(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Z2(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function W2(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=es(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=es(e.document)}return n}function C1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function c8(e,n){var a=W2(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Z2(n.ownerDocument.documentElement,n)){if(o!==null&&C1(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var h=n.textContent.length,d=Math.min(o.start,h);o=o.end===void 0?d:Math.min(o.end,h),!a.extend&&d>o&&(h=o,o=d,d=h),h=X2(n,d);var _=X2(n,o);h&&_&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==_.node||a.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(h.node,h.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var h8=En&&"documentMode"in document&&11>=document.documentMode,fs=null,E1=null,Do=null,T1=!1;function J2(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;T1||fs==null||fs!==es(o)||(o=fs,"selectionStart"in o&&C1(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Do&&Ro(Do,o)||(Do=o,o=Yu(E1,"onSelect"),0<o.length&&(n=new rs("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=fs)))}function Ca(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ds={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},A1={},t5={};En&&(t5=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ea(e){if(A1[e])return A1[e];if(!ds[e])return e;var n=ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in t5)return A1[e]=n[a];return e}var e5=Ea("animationend"),n5=Ea("animationiteration"),i5=Ea("animationstart"),f8=Ea("transitionrun"),d8=Ea("transitionstart"),m8=Ea("transitioncancel"),r5=Ea("transitionend"),a5=new Map,s5="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Xn(e,n){a5.set(e,n),Cn(n,[e])}var Ln=[],ms=0,S1=0;function du(){for(var e=ms,n=S1=ms=0;n<e;){var a=Ln[n];Ln[n++]=null;var o=Ln[n];Ln[n++]=null;var h=Ln[n];Ln[n++]=null;var d=Ln[n];if(Ln[n++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&o5(a,h,d)}}function mu(e,n,a,o){Ln[ms++]=e,Ln[ms++]=n,Ln[ms++]=a,Ln[ms++]=o,S1|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function w1(e,n,a,o){return mu(e,n,a,o),pu(e)}function Tr(e,n){return mu(e,null,null,n),pu(e)}function o5(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;h&&n!==null&&e.tag===3&&(d=e.stateNode,h=31-an(a),d=d.hiddenUpdates,e=d[h],e===null?d[h]=[n]:e.push(n),n.lane=a|536870912)}function pu(e){if(50<Jo)throw Jo=0,M0=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ps={},l5=new WeakMap;function Un(e,n){if(typeof e=="object"&&e!==null){var a=l5.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},l5.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var gs=[],ys=0,gu=null,yu=0,zn=[],Pn=0,Ta=null,Li=1,Ui="";function Aa(e,n){gs[ys++]=yu,gs[ys++]=gu,gu=e,yu=n}function u5(e,n,a){zn[Pn++]=Li,zn[Pn++]=Ui,zn[Pn++]=Ta,Ta=e;var o=Li;e=Ui;var h=32-an(o)-1;o&=~(1<<h),a+=1;var d=32-an(n)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,Li=1<<32-an(n)+h|a<<h|o,Ui=d+e}else Li=1<<d|a<<h|o,Ui=e}function b1(e){e.return!==null&&(Aa(e,1),u5(e,1,0))}function R1(e){for(;e===gu;)gu=gs[--ys],gs[ys]=null,yu=gs[--ys],gs[ys]=null;for(;e===Ta;)Ta=zn[--Pn],zn[Pn]=null,Ui=zn[--Pn],zn[Pn]=null,Li=zn[--Pn],zn[Pn]=null}var ln=null,Ge=null,Yt=!1,Zn=null,fi=!1,D1=Error(s(519));function Sa(e){var n=Error(s(418,""));throw Mo(Un(n,e)),D1}function c5(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ue]=e,n[be]=o,a){case"dialog":zt("cancel",n),zt("close",n);break;case"iframe":case"object":case"embed":zt("load",n);break;case"video":case"audio":for(a=0;a<el.length;a++)zt(el[a],n);break;case"source":zt("error",n);break;case"img":case"image":case"link":zt("error",n),zt("load",n);break;case"details":zt("toggle",n);break;case"input":zt("invalid",n),ha(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ca(n);break;case"select":zt("invalid",n);break;case"textarea":zt("invalid",n),Cr(n,o.value,o.defaultValue,o.children),ca(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_h(n.textContent,a)?(o.popover!=null&&(zt("beforetoggle",n),zt("toggle",n)),o.onScroll!=null&&zt("scroll",n),o.onScrollEnd!=null&&zt("scrollend",n),o.onClick!=null&&(n.onclick=$u),n=!0):n=!1,n||Sa(e)}function h5(e){for(ln=e.return;ln;)switch(ln.tag){case 3:case 27:fi=!0;return;case 5:case 13:fi=!1;return;default:ln=ln.return}}function xo(e){if(e!==ln)return!1;if(!Yt)return h5(e),Yt=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Y0(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Ge&&Sa(e),h5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ge=Jn(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ge=null}}else Ge=ln?Jn(e.stateNode.nextSibling):null;return!0}function Io(){Ge=ln=null,Yt=!1}function Mo(e){Zn===null?Zn=[e]:Zn.push(e)}var No=Error(s(460)),f5=Error(s(474)),x1={then:function(){}};function d5(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vu(){}function m5(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(vu,vu),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===No?Error(s(483)):e;default:if(typeof n.status=="string")n.then(vu,vu);else{if(e=ae,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===No?Error(s(483)):e}throw Vo=n,No}}var Vo=null;function p5(){if(Vo===null)throw Error(s(459));var e=Vo;return Vo=null,e}var vs=null,Oo=0;function _u(e){var n=Oo;return Oo+=1,vs===null&&(vs=[]),m5(vs,e,n)}function ko(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cu(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function g5(e){var n=e._init;return n(e._payload)}function y5(e){function n(j,L){if(e){var H=j.deletions;H===null?(j.deletions=[L],j.flags|=16):H.push(L)}}function a(j,L){if(!e)return null;for(;L!==null;)n(j,L),L=L.sibling;return null}function o(j){for(var L=new Map;j!==null;)j.key!==null?L.set(j.key,j):L.set(j.index,j),j=j.sibling;return L}function h(j,L){return j=Or(j,L),j.index=0,j.sibling=null,j}function d(j,L,H){return j.index=H,e?(H=j.alternate,H!==null?(H=H.index,H<L?(j.flags|=33554434,L):H):(j.flags|=33554434,L)):(j.flags|=1048576,L)}function _(j){return e&&j.alternate===null&&(j.flags|=33554434),j}function E(j,L,H,Z){return L===null||L.tag!==6?(L=A0(H,j.mode,Z),L.return=j,L):(L=h(L,H),L.return=j,L)}function x(j,L,H,Z){var ht=H.type;return ht===p?$(j,L,H.props.children,Z,H.key):L!==null&&(L.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===X&&g5(ht)===L.type)?(L=h(L,H.props),ko(L,H),L.return=j,L):(L=zu(H.type,H.key,H.props,null,j.mode,Z),ko(L,H),L.return=j,L)}function U(j,L,H,Z){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=S0(H,j.mode,Z),L.return=j,L):(L=h(L,H.children||[]),L.return=j,L)}function $(j,L,H,Z,ht){return L===null||L.tag!==7?(L=Oa(H,j.mode,Z,ht),L.return=j,L):(L=h(L,H),L.return=j,L)}function tt(j,L,H){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=A0(""+L,j.mode,H),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case f:return H=zu(L.type,L.key,L.props,null,j.mode,H),ko(H,L),H.return=j,H;case m:return L=S0(L,j.mode,H),L.return=j,L;case X:var Z=L._init;return L=Z(L._payload),tt(j,L,H)}if(ot(L)||dt(L))return L=Oa(L,j.mode,H,null),L.return=j,L;if(typeof L.then=="function")return tt(j,_u(L),H);if(L.$$typeof===N)return tt(j,ku(j,L),H);Cu(j,L)}return null}function G(j,L,H,Z){var ht=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ht!==null?null:E(j,L,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case f:return H.key===ht?x(j,L,H,Z):null;case m:return H.key===ht?U(j,L,H,Z):null;case X:return ht=H._init,H=ht(H._payload),G(j,L,H,Z)}if(ot(H)||dt(H))return ht!==null?null:$(j,L,H,Z,null);if(typeof H.then=="function")return G(j,L,_u(H),Z);if(H.$$typeof===N)return G(j,L,ku(j,H),Z);Cu(j,H)}return null}function Y(j,L,H,Z,ht){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return j=j.get(H)||null,E(L,j,""+Z,ht);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case f:return j=j.get(Z.key===null?H:Z.key)||null,x(L,j,Z,ht);case m:return j=j.get(Z.key===null?H:Z.key)||null,U(L,j,Z,ht);case X:var Ot=Z._init;return Z=Ot(Z._payload),Y(j,L,H,Z,ht)}if(ot(Z)||dt(Z))return j=j.get(H)||null,$(L,j,Z,ht,null);if(typeof Z.then=="function")return Y(j,L,H,_u(Z),ht);if(Z.$$typeof===N)return Y(j,L,H,ku(L,Z),ht);Cu(L,Z)}return null}function pt(j,L,H,Z){for(var ht=null,Ot=null,_t=L,Tt=L=0,qe=null;_t!==null&&Tt<H.length;Tt++){_t.index>Tt?(qe=_t,_t=null):qe=_t.sibling;var $t=G(j,_t,H[Tt],Z);if($t===null){_t===null&&(_t=qe);break}e&&_t&&$t.alternate===null&&n(j,_t),L=d($t,L,Tt),Ot===null?ht=$t:Ot.sibling=$t,Ot=$t,_t=qe}if(Tt===H.length)return a(j,_t),Yt&&Aa(j,Tt),ht;if(_t===null){for(;Tt<H.length;Tt++)_t=tt(j,H[Tt],Z),_t!==null&&(L=d(_t,L,Tt),Ot===null?ht=_t:Ot.sibling=_t,Ot=_t);return Yt&&Aa(j,Tt),ht}for(_t=o(_t);Tt<H.length;Tt++)qe=Y(_t,j,Tt,H[Tt],Z),qe!==null&&(e&&qe.alternate!==null&&_t.delete(qe.key===null?Tt:qe.key),L=d(qe,L,Tt),Ot===null?ht=qe:Ot.sibling=qe,Ot=qe);return e&&_t.forEach(function(Br){return n(j,Br)}),Yt&&Aa(j,Tt),ht}function Dt(j,L,H,Z){if(H==null)throw Error(s(151));for(var ht=null,Ot=null,_t=L,Tt=L=0,qe=null,$t=H.next();_t!==null&&!$t.done;Tt++,$t=H.next()){_t.index>Tt?(qe=_t,_t=null):qe=_t.sibling;var Br=G(j,_t,$t.value,Z);if(Br===null){_t===null&&(_t=qe);break}e&&_t&&Br.alternate===null&&n(j,_t),L=d(Br,L,Tt),Ot===null?ht=Br:Ot.sibling=Br,Ot=Br,_t=qe}if($t.done)return a(j,_t),Yt&&Aa(j,Tt),ht;if(_t===null){for(;!$t.done;Tt++,$t=H.next())$t=tt(j,$t.value,Z),$t!==null&&(L=d($t,L,Tt),Ot===null?ht=$t:Ot.sibling=$t,Ot=$t);return Yt&&Aa(j,Tt),ht}for(_t=o(_t);!$t.done;Tt++,$t=H.next())$t=Y(_t,j,Tt,$t.value,Z),$t!==null&&(e&&$t.alternate!==null&&_t.delete($t.key===null?Tt:$t.key),L=d($t,L,Tt),Ot===null?ht=$t:Ot.sibling=$t,Ot=$t);return e&&_t.forEach(function(Dd){return n(j,Dd)}),Yt&&Aa(j,Tt),ht}function ye(j,L,H,Z){if(typeof H=="object"&&H!==null&&H.type===p&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case f:t:{for(var ht=H.key;L!==null;){if(L.key===ht){if(ht=H.type,ht===p){if(L.tag===7){a(j,L.sibling),Z=h(L,H.props.children),Z.return=j,j=Z;break t}}else if(L.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===X&&g5(ht)===L.type){a(j,L.sibling),Z=h(L,H.props),ko(Z,H),Z.return=j,j=Z;break t}a(j,L);break}else n(j,L);L=L.sibling}H.type===p?(Z=Oa(H.props.children,j.mode,Z,H.key),Z.return=j,j=Z):(Z=zu(H.type,H.key,H.props,null,j.mode,Z),ko(Z,H),Z.return=j,j=Z)}return _(j);case m:t:{for(ht=H.key;L!==null;){if(L.key===ht)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){a(j,L.sibling),Z=h(L,H.children||[]),Z.return=j,j=Z;break t}else{a(j,L);break}else n(j,L);L=L.sibling}Z=S0(H,j.mode,Z),Z.return=j,j=Z}return _(j);case X:return ht=H._init,H=ht(H._payload),ye(j,L,H,Z)}if(ot(H))return pt(j,L,H,Z);if(dt(H)){if(ht=dt(H),typeof ht!="function")throw Error(s(150));return H=ht.call(H),Dt(j,L,H,Z)}if(typeof H.then=="function")return ye(j,L,_u(H),Z);if(H.$$typeof===N)return ye(j,L,ku(j,H),Z);Cu(j,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,L!==null&&L.tag===6?(a(j,L.sibling),Z=h(L,H),Z.return=j,j=Z):(a(j,L),Z=A0(H,j.mode,Z),Z.return=j,j=Z),_(j)):a(j,L)}return function(j,L,H,Z){try{Oo=0;var ht=ye(j,L,H,Z);return vs=null,ht}catch(_t){if(_t===No)throw _t;var Ot=Hn(29,_t,null,j.mode);return Ot.lanes=Z,Ot.return=j,Ot}finally{}}}var wa=y5(!0),v5=y5(!1),_s=mt(null),Eu=mt(0);function _5(e,n){e=Yi,Rt(Eu,e),Rt(_s,n),Yi=e|n.baseLanes}function I1(){Rt(Eu,Yi),Rt(_s,_s.current)}function M1(){Yi=Eu.current,St(_s),St(Eu)}var jn=mt(null),di=null;function Ar(e){var n=e.alternate;Rt(xe,xe.current&1),Rt(jn,e),di===null&&(n===null||_s.current!==null||n.memoizedState!==null)&&(di=e)}function C5(e){if(e.tag===22){if(Rt(xe,xe.current),Rt(jn,e),di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(di=e)}}else Sr()}function Sr(){Rt(xe,xe.current),Rt(jn,jn.current)}function zi(e){St(jn),di===e&&(di=null),St(xe)}var xe=mt(0);function Tu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var p8=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},g8=r.unstable_scheduleCallback,y8=r.unstable_NormalPriority,Ie={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function N1(){return{controller:new p8,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&g8(y8,function(){e.controller.abort()})}var Uo=null,V1=0,Cs=0,Es=null;function v8(e,n){if(Uo===null){var a=Uo=[];V1=0,Cs=P0(),Es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return V1++,n.then(E5,E5),n}function E5(){if(--V1===0&&Uo!==null){Es!==null&&(Es.status="fulfilled");var e=Uo;Uo=null,Cs=0,Es=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _8(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var T5=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&v8(e,n),T5!==null&&T5(e,n)};var ba=mt(null);function O1(){var e=ba.current;return e!==null?e:ae.pooledCache}function Au(e,n){n===null?Rt(ba,ba.current):Rt(ba,n.pool)}function A5(){var e=O1();return e===null?null:{parent:Ie._currentValue,pool:e}}var wr=0,Vt=null,ee=null,Ee=null,Su=!1,Ts=!1,Ra=!1,wu=0,zo=0,As=null,C8=0;function _e(){throw Error(s(321))}function k1(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Tn(e[a],n[a]))return!1;return!0}function L1(e,n,a,o,h,d){return wr=d,Vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?Da:br,Ra=!1,d=a(o,h),Ra=!1,Ts&&(d=w5(n,a,o,h)),S5(e),d}function S5(e){w.H=mi;var n=ee!==null&&ee.next!==null;if(wr=0,Ee=ee=Vt=null,Su=!1,zo=0,As=null,n)throw Error(s(300));e===null||je||(e=e.dependencies,e!==null&&Ou(e)&&(je=!0))}function w5(e,n,a,o){Vt=e;var h=0;do{if(Ts&&(As=null),zo=0,Ts=!1,25<=h)throw Error(s(301));if(h+=1,Ee=ee=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}w.H=xa,d=n(a,o)}while(Ts);return d}function E8(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?Po(n):n,e=e.useState()[0],(ee!==null?ee.memoizedState:null)!==e&&(Vt.flags|=1024),n}function U1(){var e=wu!==0;return wu=0,e}function z1(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function P1(e){if(Su){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Su=!1}wr=0,Ee=ee=Vt=null,Ts=!1,zo=wu=0,As=null}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?Vt.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Te(){if(ee===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var n=Ee===null?Vt.memoizedState:Ee.next;if(n!==null)Ee=n,ee=e;else{if(e===null)throw Vt.alternate===null?Error(s(467)):Error(s(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},Ee===null?Vt.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}var bu;bu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Po(e){var n=zo;return zo+=1,As===null&&(As=[]),e=m5(As,e,n),n=Vt,(Ee===null?n.memoizedState:Ee.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Da:br),e}function Ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===N)return Je(e)}throw Error(s(438,String(e)))}function j1(e){var n=null,a=Vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),Vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ut;return n.index++,a}function Pi(e,n){return typeof n=="function"?n(e):n}function Du(e){var n=Te();return B1(n,ee,e)}function B1(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}n.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{n=h.next;var E=_=null,x=null,U=n,$=!1;do{var tt=U.lane&-536870913;if(tt!==U.lane?(qt&tt)===tt:(wr&tt)===tt){var G=U.revertLane;if(G===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),tt===Cs&&($=!0);else if((wr&G)===G){U=U.next,G===Cs&&($=!0);continue}else tt={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(E=x=tt,_=d):x=x.next=tt,Vt.lanes|=G,kr|=G;tt=U.action,Ra&&a(d,tt),d=U.hasEagerState?U.eagerState:a(d,tt)}else G={lane:tt,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(E=x=G,_=d):x=x.next=G,Vt.lanes|=tt,kr|=tt;U=U.next}while(U!==null&&U!==n);if(x===null?_=d:x.next=E,!Tn(d,e.memoizedState)&&(je=!0,$&&(a=Es,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=x,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function q1(e){var n=Te(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=n.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);Tn(d,n.memoizedState)||(je=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function b5(e,n,a){var o=Vt,h=Te(),d=Yt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Tn((ee||h).memoizedState,a);if(_&&(h.memoizedState=a,je=!0),h=h.queue,G1(x5.bind(null,o,h,e),[e]),h.getSnapshot!==n||_||Ee!==null&&Ee.memoizedState.tag&1){if(o.flags|=2048,Ss(9,D5.bind(null,o,h,a,n),{destroy:void 0},null),ae===null)throw Error(s(349));d||(wr&60)!==0||R5(o,n,a)}return a}function R5(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Vt.updateQueue,n===null?(n=bu(),Vt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function D5(e,n,a,o){n.value=a,n.getSnapshot=o,I5(n)&&M5(e)}function x5(e,n,a){return a(function(){I5(n)&&M5(e)})}function I5(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Tn(e,a)}catch{return!0}}function M5(e){var n=Tr(e,2);n!==null&&un(n,e,2)}function H1(e){var n=dn();if(typeof e=="function"){var a=e;if(e=a(),Ra){ei(!0);try{a()}finally{ei(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n}function N5(e,n,a,o){return e.baseState=a,B1(e,ee,typeof o=="function"?o:Pi)}function T8(e,n,a,o,h){if(Mu(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};w.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,V5(n,d)):(d.next=a.next,n.pending=a.next=d)}}function V5(e,n){var a=n.action,o=n.payload,h=e.state;if(n.isTransition){var d=w.T,_={};w.T=_;try{var E=a(h,o),x=w.S;x!==null&&x(_,E),O5(e,n,E)}catch(U){F1(e,n,U)}finally{w.T=d}}else try{d=a(h,o),O5(e,n,d)}catch(U){F1(e,n,U)}}function O5(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){k5(e,n,o)},function(o){return F1(e,n,o)}):k5(e,n,a)}function k5(e,n,a){n.status="fulfilled",n.value=a,L5(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,V5(e,a)))}function F1(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,L5(n),n=n.next;while(n!==o)}e.action=null}function L5(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function U5(e,n){return n}function z5(e,n){if(Yt){var a=ae.formState;if(a!==null){t:{var o=Vt;if(Yt){if(Ge){e:{for(var h=Ge,d=fi;h.nodeType!==8;){if(!d){h=null;break e}if(h=Jn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Ge=Jn(h.nextSibling),o=h.data==="F!";break t}}Sa(o)}o=!1}o&&(n=a[0])}}return a=dn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U5,lastRenderedState:n},a.queue=o,a=n3.bind(null,Vt,o),o.dispatch=a,o=H1(!1),d=X1.bind(null,Vt,!1,o.queue),o=dn(),h={state:n,dispatch:null,action:e,pending:null},o.queue=h,a=T8.bind(null,Vt,h,d,a),h.dispatch=a,o.memoizedState=e,[n,a,!1]}function P5(e){var n=Te();return j5(n,ee,e)}function j5(e,n,a){n=B1(e,n,U5)[0],e=Du(Pi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Po(n):n;var o=Te(),h=o.queue,d=h.dispatch;return a!==o.memoizedState&&(Vt.flags|=2048,Ss(9,A8.bind(null,h,a),{destroy:void 0},null)),[n,d,e]}function A8(e,n){e.action=n}function B5(e){var n=Te(),a=ee;if(a!==null)return j5(n,a,e);Te(),n=n.memoizedState,a=Te();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ss(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=Vt.updateQueue,n===null&&(n=bu(),Vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function q5(){return Te().memoizedState}function xu(e,n,a,o){var h=dn();Vt.flags|=e,h.memoizedState=Ss(1|n,a,{destroy:void 0},o===void 0?null:o)}function Iu(e,n,a,o){var h=Te();o=o===void 0?null:o;var d=h.memoizedState.inst;ee!==null&&o!==null&&k1(o,ee.memoizedState.deps)?h.memoizedState=Ss(n,a,d,o):(Vt.flags|=e,h.memoizedState=Ss(1|n,a,d,o))}function H5(e,n){xu(8390656,8,e,n)}function G1(e,n){Iu(2048,8,e,n)}function F5(e,n){return Iu(4,2,e,n)}function G5(e,n){return Iu(4,4,e,n)}function Q5(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function K5(e,n,a){a=a!=null?a.concat([e]):null,Iu(4,4,Q5.bind(null,n,e),a)}function Q1(){}function Y5(e,n){var a=Te();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&k1(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $5(e,n){var a=Te();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&k1(n,o[1]))return o[0];if(o=e(),Ra){ei(!0);try{e()}finally{ei(!1)}}return a.memoizedState=[o,n],o}function K1(e,n,a){return a===void 0||(wr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Z3(),Vt.lanes|=e,kr|=e,a)}function X5(e,n,a,o){return Tn(a,n)?a:_s.current!==null?(e=K1(e,a,o),Tn(e,n)||(je=!0),e):(wr&42)===0?(je=!0,e.memoizedState=a):(e=Z3(),Vt.lanes|=e,kr|=e,n)}function Z5(e,n,a,o,h){var d=lt.p;lt.p=d!==0&&8>d?d:8;var _=w.T,E={};w.T=E,X1(e,!1,n,a);try{var x=h(),U=w.S;if(U!==null&&U(E,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=_8(x,o);jo(e,n,$,bn(e))}else jo(e,n,o,bn(e))}catch(tt){jo(e,n,{then:function(){},status:"rejected",reason:tt},bn())}finally{lt.p=d,w.T=_}}function S8(){}function Y1(e,n,a,o){if(e.tag!==5)throw Error(s(476));var h=W5(e).queue;Z5(e,h,n,It,a===null?S8:function(){return J5(e),a(o)})}function W5(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:It,baseState:It,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:It},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function J5(e){var n=W5(e).next.queue;jo(e,n,{},bn())}function $1(){return Je(sl)}function t3(){return Te().memoizedState}function e3(){return Te().memoizedState}function w8(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=bn();e=xr(a);var o=Ir(n,e,a);o!==null&&(un(o,n,a),Ho(o,n,a)),n={cache:N1()},e.payload=n;return}n=n.return}}function b8(e,n,a){var o=bn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Mu(e)?i3(n,a):(a=w1(e,n,a,o),a!==null&&(un(a,e,o),r3(a,n,o)))}function n3(e,n,a){var o=bn();jo(e,n,a,o)}function jo(e,n,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))i3(n,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,Tn(E,_))return mu(e,n,h,0),ae===null&&du(),!1}catch{}finally{}if(a=w1(e,n,h,o),a!==null)return un(a,e,o),r3(a,n,o),!0}return!1}function X1(e,n,a,o){if(o={lane:2,revertLane:P0(),action:o,hasEagerState:!1,eagerState:null,next:null},Mu(e)){if(n)throw Error(s(479))}else n=w1(e,a,o,2),n!==null&&un(n,e,2)}function Mu(e){var n=e.alternate;return e===Vt||n!==null&&n===Vt}function i3(e,n){Ts=Su=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r3(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,fr(e,a)}}var mi={readContext:Je,use:Ru,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e};mi.useCacheRefresh=_e,mi.useMemoCache=_e,mi.useHostTransitionStatus=_e,mi.useFormState=_e,mi.useActionState=_e,mi.useOptimistic=_e;var Da={readContext:Je,use:Ru,useCallback:function(e,n){return dn().memoizedState=[e,n===void 0?null:n],e},useContext:Je,useEffect:H5,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xu(4194308,4,Q5.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xu(4194308,4,e,n)},useInsertionEffect:function(e,n){xu(4,2,e,n)},useMemo:function(e,n){var a=dn();n=n===void 0?null:n;var o=e();if(Ra){ei(!0);try{e()}finally{ei(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=dn();if(a!==void 0){var h=a(n);if(Ra){ei(!0);try{a(n)}finally{ei(!1)}}}else h=n;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=b8.bind(null,Vt,e),[o.memoizedState,e]},useRef:function(e){var n=dn();return e={current:e},n.memoizedState=e},useState:function(e){e=H1(e);var n=e.queue,a=n3.bind(null,Vt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Q1,useDeferredValue:function(e,n){var a=dn();return K1(a,e,n)},useTransition:function(){var e=H1(!1);return e=Z5.bind(null,Vt,e.queue,!0,!1),dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Vt,h=dn();if(Yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ae===null)throw Error(s(349));(qt&60)!==0||R5(o,n,a)}h.memoizedState=a;var d={value:a,getSnapshot:n};return h.queue=d,H5(x5.bind(null,o,d,e),[e]),o.flags|=2048,Ss(9,D5.bind(null,o,d,a,n),{destroy:void 0},null),a},useId:function(){var e=dn(),n=ae.identifierPrefix;if(Yt){var a=Ui,o=Li;a=(o&~(1<<32-an(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=wu++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=C8++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return dn().memoizedState=w8.bind(null,Vt)}};Da.useMemoCache=j1,Da.useHostTransitionStatus=$1,Da.useFormState=z5,Da.useActionState=z5,Da.useOptimistic=function(e){var n=dn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=X1.bind(null,Vt,!0,a),a.dispatch=n,[e,n]};var br={readContext:Je,use:Ru,useCallback:Y5,useContext:Je,useEffect:G1,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:Du,useRef:q5,useState:function(){return Du(Pi)},useDebugValue:Q1,useDeferredValue:function(e,n){var a=Te();return X5(a,ee.memoizedState,e,n)},useTransition:function(){var e=Du(Pi)[0],n=Te().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:b5,useId:t3};br.useCacheRefresh=e3,br.useMemoCache=j1,br.useHostTransitionStatus=$1,br.useFormState=P5,br.useActionState=P5,br.useOptimistic=function(e,n){var a=Te();return N5(a,ee,e,n)};var xa={readContext:Je,use:Ru,useCallback:Y5,useContext:Je,useEffect:G1,useImperativeHandle:K5,useInsertionEffect:F5,useLayoutEffect:G5,useMemo:$5,useReducer:q1,useRef:q5,useState:function(){return q1(Pi)},useDebugValue:Q1,useDeferredValue:function(e,n){var a=Te();return ee===null?K1(a,e,n):X5(a,ee.memoizedState,e,n)},useTransition:function(){var e=q1(Pi)[0],n=Te().memoizedState;return[typeof e=="boolean"?e:Po(e),n]},useSyncExternalStore:b5,useId:t3};xa.useCacheRefresh=e3,xa.useMemoCache=j1,xa.useHostTransitionStatus=$1,xa.useFormState=B5,xa.useActionState=B5,xa.useOptimistic=function(e,n){var a=Te();return ee!==null?N5(a,ee,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Z1(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var W1={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=bn(),h=xr(o);h.payload=n,a!=null&&(h.callback=a),n=Ir(e,h,o),n!==null&&(un(n,e,o),Ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=bn(),h=xr(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=Ir(e,h,o),n!==null&&(un(n,e,o),Ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=bn(),o=xr(a);o.tag=2,n!=null&&(o.callback=n),n=Ir(e,o,a),n!==null&&(un(n,e,a),Ho(n,e,a))}};function a3(e,n,a,o,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!Ro(a,o)||!Ro(h,d):!0}function s3(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&W1.enqueueReplaceState(n,n.state,null)}function Ia(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function o3(e){Nu(e)}function l3(e){console.error(e)}function u3(e){Nu(e)}function Vu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function c3(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function J1(e,n,a){return a=xr(a),a.tag=3,a.payload={element:null},a.callback=function(){Vu(e,n)},a}function h3(e){return e=xr(e),e.tag=3,e}function f3(e,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){c3(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){c3(n,a,o),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function R8(e,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qo(n,a,h,!0),a=jn.current,a!==null){switch(a.tag){case 13:return di===null?O0():a.alternate===null&&ge===0&&(ge=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===x1?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),L0(e,o,h)),!1;case 22:return a.flags|=65536,o===x1?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),L0(e,o,h)),!1}throw Error(s(435,a.tag))}return L0(e,o,h),O0(),!1}if(Yt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==D1&&(e=Error(s(422),{cause:o}),Mo(Un(e,a)))):(o!==D1&&(n=Error(s(423),{cause:o}),Mo(Un(n,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Un(o,a),h=J1(e.stateNode,o,h),m0(e,h),ge!==4&&(ge=2)),!1;var d=Error(s(520),{cause:o});if(d=Un(d,a),Zo===null?Zo=[d]:Zo.push(d),ge!==4&&(ge=2),n===null)return!0;o=Un(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=J1(a.stateNode,o,e),m0(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Lr===null||!Lr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=h3(h),f3(h,e,a,o),m0(a,h),!1}a=a.return}while(a!==null);return!1}var d3=Error(s(461)),je=!1;function Qe(e,n,a,o){n.child=e===null?v5(n,null,a,o):wa(n,e.child,a,o)}function m3(e,n,a,o,h){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Na(n),o=L1(e,n,a,_,d,h),E=U1(),e!==null&&!je?(z1(e,n,h),ji(e,n,h)):(Yt&&E&&b1(n),n.flags|=1,Qe(e,n,o,h),n.child)}function p3(e,n,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!T0(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,g3(e,n,d,o,h)):(e=zu(a.type,null,o,n,n.mode,h),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!l0(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(_,o)&&e.ref===n.ref)return ji(e,n,h)}return n.flags|=1,e=Or(d,o),e.ref=n.ref,e.return=n,n.child=e}function g3(e,n,a,o,h){if(e!==null){var d=e.memoizedProps;if(Ro(d,o)&&e.ref===n.ref)if(je=!1,n.pendingProps=o=d,l0(e,h))(e.flags&131072)!==0&&(je=!0);else return n.lanes=e.lanes,ji(e,n,h)}return t0(e,n,a,o,h)}function y3(e,n,a){var o=n.pendingProps,h=o.children,d=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(Bo(e,n),o.mode==="hidden"||d){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|a:a,e!==null){for(h=n.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return v3(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Au(n,_!==null?_.cachePool:null),_!==null?_5(n,_):I1(),C5(n);else return n.lanes=n.childLanes=536870912,v3(e,n,_!==null?_.baseLanes|a:a,a)}else _!==null?(Au(n,_.cachePool),_5(n,_),Sr(),n.memoizedState=null):(e!==null&&Au(n,null),I1(),Sr());return Qe(e,n,h,a),n.child}function v3(e,n,a,o){var h=O1();return h=h===null?null:{parent:Ie._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Au(n,null),I1(),C5(n),e!==null&&qo(e,n,o,!0),null}function Bo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function t0(e,n,a,o,h){return Na(n),a=L1(e,n,a,o,void 0,h),o=U1(),e!==null&&!je?(z1(e,n,h),ji(e,n,h)):(Yt&&o&&b1(n),n.flags|=1,Qe(e,n,a,h),n.child)}function _3(e,n,a,o,h,d){return Na(n),n.updateQueue=null,a=w5(n,o,a,h),S5(e),o=U1(),e!==null&&!je?(z1(e,n,d),ji(e,n,d)):(Yt&&o&&b1(n),n.flags|=1,Qe(e,n,a,d),n.child)}function C3(e,n,a,o,h){if(Na(n),n.stateNode===null){var d=ps,_=a.contextType;typeof _=="object"&&_!==null&&(d=Je(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=W1,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},f0(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?Je(_):ps,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Z1(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&W1.enqueueReplaceState(d,d.state,null),Go(n,o,d,h),Fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var E=n.memoizedProps,x=Ia(a,E);d.props=x;var U=d.context,$=a.contextType;_=ps,typeof $=="object"&&$!==null&&(_=Je($));var tt=a.getDerivedStateFromProps;$=typeof tt=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,$||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||U!==_)&&s3(n,d,o,_),Dr=!1;var G=n.memoizedState;d.state=G,Go(n,o,d,h),Fo(),U=n.memoizedState,E||G!==U||Dr?(typeof tt=="function"&&(Z1(n,a,tt,o),U=n.memoizedState),(x=Dr||a3(n,a,x,o,G,U,_))?($||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),d.props=o,d.state=U,d.context=_,o=x):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,d0(e,n),_=n.memoizedProps,$=Ia(a,_),d.props=$,tt=n.pendingProps,G=d.context,U=a.contextType,x=ps,typeof U=="object"&&U!==null&&(x=Je(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==tt||G!==x)&&s3(n,d,o,x),Dr=!1,G=n.memoizedState,d.state=G,Go(n,o,d,h),Fo();var Y=n.memoizedState;_!==tt||G!==Y||Dr||e!==null&&e.dependencies!==null&&Ou(e.dependencies)?(typeof E=="function"&&(Z1(n,a,E,o),Y=n.memoizedState),($=Dr||a3(n,a,$,o,G,Y,x)||e!==null&&e.dependencies!==null&&Ou(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Y,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Y,x)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Y),d.props=o,d.state=Y,d.context=x,o=$):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bo(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=wa(n,e.child,null,h),n.child=wa(n,null,a,h)):Qe(e,n,a,h),n.memoizedState=d.state,e=n.child):e=ji(e,n,h),e}function E3(e,n,a,o){return Io(),n.flags|=256,Qe(e,n,a,o),n.child}var e0={dehydrated:null,treeContext:null,retryLane:0};function n0(e){return{baseLanes:e,cachePool:A5()}}function i0(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Fn),e}function T3(e,n,a){var o=n.pendingProps,h=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Yt){if(h?Ar(n):Sr(),Yt){var E=Ge,x;if(x=E){t:{for(x=E,E=fi;x.nodeType!==8;){if(!E){E=null;break t}if(x=Jn(x.nextSibling),x===null){E=null;break t}}E=x}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ta!==null?{id:Li,overflow:Ui}:null,retryLane:536870912},x=Hn(18,null,null,0),x.stateNode=E,x.return=n,n.child=x,ln=n,Ge=null,x=!0):x=!1}x||Sa(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;zi(n)}return E=o.children,o=o.fallback,h?(Sr(),h=n.mode,E=a0({mode:"hidden",children:E},h),o=Oa(o,h,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,h=n.child,h.memoizedState=n0(a),h.childLanes=i0(e,_,a),n.memoizedState=e0,o):(Ar(n),r0(n,E))}if(x=e.memoizedState,x!==null&&(E=x.dehydrated,E!==null)){if(d)n.flags&256?(Ar(n),n.flags&=-257,n=s0(e,n,a)):n.memoizedState!==null?(Sr(),n.child=e.child,n.flags|=128,n=null):(Sr(),h=o.fallback,E=n.mode,o=a0({mode:"visible",children:o.children},E),h=Oa(h,E,a,null),h.flags|=2,o.return=n,h.return=n,o.sibling=h,n.child=o,wa(n,e.child,null,a),o=n.child,o.memoizedState=n0(a),o.childLanes=i0(e,_,a),n.memoizedState=e0,n=h);else if(Ar(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var U=_.dgst;_=U,o=Error(s(419)),o.stack="",o.digest=_,Mo({value:o,source:null,stack:null}),n=s0(e,n,a)}else if(je||qo(e,n,a,!1),_=(a&e.childLanes)!==0,je||_){if(_=ae,_!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|a))!==0?0:o,o!==0&&o!==x.retryLane)throw x.retryLane=o,Tr(e,o),un(_,e,o),d3}E.data==="$?"||O0(),n=s0(e,n,a)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=q8.bind(null,e),E._reactRetry=n,n=null):(e=x.treeContext,Ge=Jn(E.nextSibling),ln=n,Yt=!0,Zn=null,fi=!1,e!==null&&(zn[Pn++]=Li,zn[Pn++]=Ui,zn[Pn++]=Ta,Li=e.id,Ui=e.overflow,Ta=n),n=r0(n,o.children),n.flags|=4096);return n}return h?(Sr(),h=o.fallback,E=n.mode,x=e.child,U=x.sibling,o=Or(x,{mode:"hidden",children:o.children}),o.subtreeFlags=x.subtreeFlags&31457280,U!==null?h=Or(U,h):(h=Oa(h,E,a,null),h.flags|=2),h.return=n,o.return=n,o.sibling=h,n.child=o,o=h,h=n.child,E=e.child.memoizedState,E===null?E=n0(a):(x=E.cachePool,x!==null?(U=Ie._currentValue,x=x.parent!==U?{parent:U,pool:U}:x):x=A5(),E={baseLanes:E.baseLanes|a,cachePool:x}),h.memoizedState=E,h.childLanes=i0(e,_,a),n.memoizedState=e0,o):(Ar(n),a=e.child,e=a.sibling,a=Or(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function r0(e,n){return n=a0({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function a0(e,n){return Y3(e,n,0,null)}function s0(e,n,a){return wa(n,e.child,null,a),e=r0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function A3(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),c0(e.return,n,a)}function o0(e,n,a,o,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=h)}function S3(e,n,a){var o=n.pendingProps,h=o.revealOrder,d=o.tail;if(Qe(e,n,o.children,a),o=xe.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A3(e,a,n);else if(e.tag===19)A3(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Rt(xe,o),h){case"forwards":for(a=n.child,h=null;a!==null;)e=a.alternate,e!==null&&Tu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),o0(n,!1,h,a,d);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(e=h.alternate,e!==null&&Tu(e)===null){n.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}o0(n,!0,a,null,d);break;case"together":o0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),kr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Or(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Or(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function l0(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ou(e)))}function D8(e,n,a){switch(n.tag){case 3:it(n,n.stateNode.containerInfo),Rr(n,Ie,e.memoizedState.cache),Io();break;case 27:case 5:ke(n);break;case 4:it(n,n.stateNode.containerInfo);break;case 10:Rr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ar(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T3(e,n,a):(Ar(n),e=ji(e,n,a),e!==null?e.sibling:null);Ar(n);break;case 19:var h=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qo(e,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return S3(e,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Rt(xe,xe.current),o)break;return null;case 22:case 23:return n.lanes=0,y3(e,n,a);case 24:Rr(n,Ie,e.memoizedState.cache)}return ji(e,n,a)}function w3(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)je=!0;else{if(!l0(e,a)&&(n.flags&128)===0)return je=!1,D8(e,n,a);je=(e.flags&131072)!==0}else je=!1,Yt&&(n.flags&1048576)!==0&&u5(n,yu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,h=o._init;if(o=h(o._payload),n.type=o,typeof o=="function")T0(o)?(e=Ia(o,e),n.tag=1,n=C3(null,n,o,e,a)):(n.tag=0,n=t0(null,n,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===k){n.tag=11,n=m3(null,n,o,e,a);break t}else if(h===F){n.tag=14,n=p3(null,n,o,e,a);break t}}throw n=b(o)||o,Error(s(306,n,""))}}return n;case 0:return t0(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Ia(o,n.pendingProps),C3(e,n,o,h,a);case 3:t:{if(it(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var d=n.pendingProps;h=n.memoizedState,o=h.element,d0(e,n),Go(n,d,null,a);var _=n.memoizedState;if(d=_.cache,Rr(n,Ie,d),d!==h.cache&&h0(n,[Ie],a,!0),Fo(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=E3(e,n,d,a);break t}else if(d!==o){o=Un(Error(s(424)),n),Mo(o),n=E3(e,n,d,a);break t}else for(Ge=Jn(n.stateNode.containerInfo.firstChild),ln=n,Yt=!0,Zn=null,fi=!0,a=v5(n,null,d,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Io(),d===o){n=ji(e,n,a);break t}Qe(e,n,d,a)}n=n.child}return n;case 26:return Bo(e,n),e===null?(a=Dh(n.type,null,n.pendingProps,null))?n.memoizedState=a:Yt||(a=n.type,e=n.pendingProps,o=Xu(te.current).createElement(a),o[Ue]=n,o[be]=e,Ke(o,a,e),ce(o),n.stateNode=o):n.memoizedState=Dh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&Yt&&(o=n.stateNode=wh(n.type,n.pendingProps,te.current),ln=n,fi=!0,Ge=Jn(o.firstChild)),o=n.pendingProps.children,e!==null||Yt?Qe(e,n,o,a):n.child=wa(n,null,o,a),Bo(e,n),n.child;case 5:return e===null&&Yt&&((h=o=Ge)&&(o=rd(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,ln=n,Ge=Jn(o.firstChild),fi=!1,h=!0):h=!1),h||Sa(n)),ke(n),h=n.type,d=n.pendingProps,_=e!==null?e.memoizedProps:null,o=d.children,Y0(h,d)?o=null:_!==null&&Y0(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=L1(e,n,E8,null,null,a),sl._currentValue=h),Bo(e,n),Qe(e,n,o,a),n.child;case 6:return e===null&&Yt&&((e=a=Ge)&&(a=ad(a,n.pendingProps,fi),a!==null?(n.stateNode=a,ln=n,Ge=null,e=!0):e=!1),e||Sa(n)),null;case 13:return T3(e,n,a);case 4:return it(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=wa(n,null,o,a):Qe(e,n,o,a),n.child;case 11:return m3(e,n,n.type,n.pendingProps,a);case 7:return Qe(e,n,n.pendingProps,a),n.child;case 8:return Qe(e,n,n.pendingProps.children,a),n.child;case 12:return Qe(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Rr(n,n.type,o.value),Qe(e,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Na(n),h=Je(h),o=o(h),n.flags|=1,Qe(e,n,o,a),n.child;case 14:return p3(e,n,n.type,n.pendingProps,a);case 15:return g3(e,n,n.type,n.pendingProps,a);case 19:return S3(e,n,a);case 22:return y3(e,n,a);case 24:return Na(n),o=Je(Ie),e===null?(h=O1(),h===null&&(h=ae,d=N1(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),n.memoizedState={parent:o,cache:h},f0(n),Rr(n,Ie,h)):((e.lanes&a)!==0&&(d0(e,n),Go(n,null,null,a),Fo()),h=e.memoizedState,d=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Rr(n,Ie,o)):(o=d.cache,Rr(n,Ie,o),o!==h.cache&&h0(n,[Ie],a,!0))),Qe(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var u0=mt(null),Ma=null,Bi=null;function Rr(e,n,a){Rt(u0,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=u0.current,St(u0)}function c0(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function h0(e,n,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var x=0;x<n.length;x++)if(E.context===n[x]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),c0(d.return,a,e),o||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),c0(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function qo(e,n,a,o){e=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;Tn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ut.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}h=h.return}e!==null&&h0(n,e,a,o),n.flags|=262144}function Ou(e){for(e=e.firstContext;e!==null;){if(!Tn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Ma=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return b3(Ma,e)}function ku(e,n){return Ma===null&&Na(e),b3(e,n)}function b3(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var Dr=!1;function f0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function d0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(fe&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=pu(e),o5(e,null,a),n}return mu(e,o,n,a),pu(e)}function Ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,fr(e,a)}}function m0(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=n:d=d.next=n}else h=d=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var p0=!1;function Fo(){if(p0){var e=Es;if(e!==null)throw e}}function Go(e,n,a,o){p0=!1;var h=e.updateQueue;Dr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var x=E,U=x.next;x.next=null,_===null?d=U:_.next=U,_=x;var $=e.alternate;$!==null&&($=$.updateQueue,E=$.lastBaseUpdate,E!==_&&(E===null?$.firstBaseUpdate=U:E.next=U,$.lastBaseUpdate=x))}if(d!==null){var tt=h.baseState;_=0,$=U=x=null,E=d;do{var G=E.lane&-536870913,Y=G!==E.lane;if(Y?(qt&G)===G:(o&G)===G){G!==0&&G===Cs&&(p0=!0),$!==null&&($=$.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var pt=e,Dt=E;G=n;var ye=a;switch(Dt.tag){case 1:if(pt=Dt.payload,typeof pt=="function"){tt=pt.call(ye,tt,G);break t}tt=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=Dt.payload,G=typeof pt=="function"?pt.call(ye,tt,G):pt,G==null)break t;tt=I({},tt,G);break t;case 2:Dr=!0}}G=E.callback,G!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},$===null?(U=$=Y,x=tt):$=$.next=Y,_|=G;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;Y=E,E=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);$===null&&(x=tt),h.baseState=x,h.firstBaseUpdate=U,h.lastBaseUpdate=$,d===null&&(h.shared.lanes=0),kr|=_,e.lanes=_,e.memoizedState=tt}}function R3(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function D3(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)R3(a[e],n)}function Qo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){ie(n,n.return,E)}}function Mr(e,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var x=a;try{E()}catch(U){ie(h,x,U)}}}o=o.next}while(o!==d)}}catch(U){ie(n,n.return,U)}}function x3(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{D3(n,a)}catch(o){ie(e,e.return,o)}}}function I3(e,n,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ie(e,n,o)}}function Va(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var h=o;break;default:h=o}typeof a=="function"?e.refCleanup=a(h):a.current=h}}catch(d){ie(e,n,d)}}function An(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){ie(e,n,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){ie(e,n,h)}else a.current=null}function M3(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){ie(e,e.return,h)}}function N3(e,n,a){try{var o=e.stateNode;J8(o,e.type,a,n),o[be]=n}catch(h){ie(e,e.return,h)}}function V3(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function g0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function y0(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$u));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(y0(e,n,a),e=e.sibling;e!==null;)y0(e,n,a),e=e.sibling}function Lu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Lu(e,n,a),e=e.sibling;e!==null;)Lu(e,n,a),e=e.sibling}var Hi=!1,pe=!1,v0=!1,O3=typeof WeakSet=="function"?WeakSet:Set,Be=null,k3=!1;function x8(e,n){if(e=e.containerInfo,Q0=nc,e=W2(e),C1(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,x=-1,U=0,$=0,tt=e,G=null;e:for(;;){for(var Y;tt!==a||h!==0&&tt.nodeType!==3||(E=_+h),tt!==d||o!==0&&tt.nodeType!==3||(x=_+o),tt.nodeType===3&&(_+=tt.nodeValue.length),(Y=tt.firstChild)!==null;)G=tt,tt=Y;for(;;){if(tt===e)break e;if(G===a&&++U===h&&(E=_),G===d&&++$===o&&(x=_),(Y=tt.nextSibling)!==null)break;tt=G,G=tt.parentNode}tt=Y}a=E===-1||x===-1?null:{start:E,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(K0={focusedElem:e,selectionRange:a},nc=!1,Be=n;Be!==null;)if(n=Be,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Be=e;else for(;Be!==null;){switch(n=Be,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var pt=Ia(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(pt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Dt){ie(a,a.return,Dt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Z0(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Z0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Be=e;break}Be=n.return}return pt=k3,k3=!1,pt}function L3(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Gi(e,a),o&4&&Qo(5,a);break;case 1:if(Gi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){ie(a,a.return,E)}else{var h=Ia(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(h,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){ie(a,a.return,E)}}o&64&&x3(a),o&512&&Va(a,a.return);break;case 3:if(Gi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{D3(o,e)}catch(E){ie(a,a.return,E)}}break;case 26:Gi(e,a),o&512&&Va(a,a.return);break;case 27:case 5:Gi(e,a),n===null&&o&4&&M3(a),o&512&&Va(a,a.return);break;case 12:Gi(e,a);break;case 13:Gi(e,a),o&4&&P3(e,a);break;case 22:if(h=a.memoizedState!==null||Hi,!h){n=n!==null&&n.memoizedState!==null||pe;var d=Hi,_=pe;Hi=h,(pe=n)&&!_?Nr(e,a,(a.subtreeFlags&8772)!==0):Gi(e,a),Hi=d,pe=_}o&512&&(a.memoizedProps.mode==="manual"?Va(a,a.return):An(a,a.return));break;default:Gi(e,a)}}function U3(e){var n=e.alternate;n!==null&&(e.alternate=null,U3(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Sn=!1;function Fi(e,n,a){for(a=a.child;a!==null;)z3(e,n,a),a=a.sibling}function z3(e,n,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(or,a)}catch{}switch(a.tag){case 26:pe||An(a,n),Fi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pe||An(a,n);var o=Ae,h=Sn;for(Ae=a.stateNode,Fi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ua(a),Ae=o,Sn=h;break;case 5:pe||An(a,n);case 6:h=Ae;var d=Sn;if(Ae=null,Fi(e,n,a),Ae=h,Sn=d,Ae!==null)if(Sn)try{e=Ae,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){ie(a,n,_)}else try{Ae.removeChild(a.stateNode)}catch(_){ie(a,n,_)}break;case 18:Ae!==null&&(Sn?(n=Ae,a=a.stateNode,n.nodeType===8?X0(n.parentNode,a):n.nodeType===1&&X0(n,a),cl(n)):X0(Ae,a.stateNode));break;case 4:o=Ae,h=Sn,Ae=a.stateNode.containerInfo,Sn=!0,Fi(e,n,a),Ae=o,Sn=h;break;case 0:case 11:case 14:case 15:pe||Mr(2,a,n),pe||Mr(4,a,n),Fi(e,n,a);break;case 1:pe||(An(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&I3(a,n,o)),Fi(e,n,a);break;case 21:Fi(e,n,a);break;case 22:pe||An(a,n),pe=(o=pe)||a.memoizedState!==null,Fi(e,n,a),pe=o;break;default:Fi(e,n,a)}}function P3(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cl(e)}catch(a){ie(n,n.return,a)}}function I8(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new O3),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new O3),n;default:throw Error(s(435,e.tag))}}function _0(e,n){var a=I8(e);n.forEach(function(o){var h=H8.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:Ae=E.stateNode,Sn=!1;break t;case 3:Ae=E.stateNode.containerInfo,Sn=!0;break t;case 4:Ae=E.stateNode.containerInfo,Sn=!0;break t}E=E.return}if(Ae===null)throw Error(s(160));z3(d,_,h),Ae=null,Sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)j3(n,e),n=n.sibling}var Wn=null;function j3(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),qn(e),o&4&&(Mr(3,e,e.return),Qo(3,e),Mr(5,e,e.return));break;case 1:Bn(n,e),qn(e),o&512&&(pe||a===null||An(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Wn;if(Bn(n,e),qn(e),o&512&&(pe||a===null||An(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[mr]||d[Ue]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Ke(d,o,a),d[Ue]=e,ce(d),o=d;break t;case"link":var _=Mh("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(o),Ke(d,o,a),h.head.appendChild(d);break;case"meta":if(_=Mh("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(o),Ke(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ue]=e,ce(d),o=d}e.stateNode=o}else Nh(h,e.type,e.stateNode);else e.stateNode=Ih(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Nh(h,e.type,e.stateNode):Ih(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&N3(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){h=e.stateNode,d=e.memoizedProps;try{for(var x=h.firstChild;x;){var U=x.nextSibling,$=x.nodeName;x[mr]||$==="HEAD"||$==="BODY"||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&x.rel.toLowerCase()==="stylesheet"||h.removeChild(x),x=U}for(var tt=e.type,G=h.attributes;G.length;)h.removeAttributeNode(G[0]);Ke(h,tt,d),h[Ue]=e,h[be]=d}catch(pt){ie(e,e.return,pt)}}case 5:if(Bn(n,e),qn(e),o&512&&(pe||a===null||An(a,a.return)),e.flags&32){h=e.stateNode;try{Nn(h,"")}catch(pt){ie(e,e.return,pt)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,N3(e,h,a!==null?a.memoizedProps:h)),o&1024&&(v0=!0);break;case 6:if(Bn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(pt){ie(e,e.return,pt)}}break;case 3:if(Ju=null,h=Wn,Wn=Zu(n.containerInfo),Bn(n,e),Wn=h,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{cl(n.containerInfo)}catch(pt){ie(e,e.return,pt)}v0&&(v0=!1,B3(e));break;case 4:o=Wn,Wn=Zu(e.stateNode.containerInfo),Bn(n,e),qn(e),Wn=o;break;case 12:Bn(n,e),qn(e);break;case 13:Bn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(D0=hn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_0(e,o)));break;case 22:if(o&512&&(pe||a===null||An(a,a.return)),x=e.memoizedState!==null,U=a!==null&&a.memoizedState!==null,$=Hi,tt=pe,Hi=$||x,pe=tt||U,Bn(n,e),pe=tt,Hi=$,qn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=x?n._visibility&-2:n._visibility|1,x&&(n=Hi||pe,a===null||U||n||ws(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){U=a=n;try{if(h=U.stateNode,x)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=U.stateNode,E=U.memoizedProps.style;var Y=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(pt){ie(U,U.return,pt)}}}else if(n.tag===6){if(a===null){U=n;try{U.stateNode.nodeValue=x?"":U.memoizedProps}catch(pt){ie(U,U.return,pt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,_0(e,a))));break;case 19:Bn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,_0(e,o)));break;case 21:break;default:Bn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(V3(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var h=o.stateNode,d=g0(e);Lu(e,d,h);break;case 5:var _=o.stateNode;o.flags&32&&(Nn(_,""),o.flags&=-33);var E=g0(e);Lu(e,E,_);break;case 3:case 4:var x=o.stateNode.containerInfo,U=g0(e);y0(e,U,x);break;default:throw Error(s(161))}}}catch($){ie(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B3(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B3(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Gi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L3(e,n.alternate,n),n=n.sibling}function ws(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Mr(4,n,n.return),ws(n);break;case 1:An(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&I3(n,n.return,a),ws(n);break;case 26:case 27:case 5:An(n,n.return),ws(n);break;case 22:An(n,n.return),n.memoizedState===null&&ws(n);break;default:ws(n)}e=e.sibling}}function Nr(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=e,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:Nr(h,d,a),Qo(4,d);break;case 1:if(Nr(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){ie(o,o.return,U)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)R3(x[h],E)}catch(U){ie(o,o.return,U)}}a&&_&64&&x3(d),Va(d,d.return);break;case 26:case 27:case 5:Nr(h,d,a),a&&o===null&&_&4&&M3(d),Va(d,d.return);break;case 12:Nr(h,d,a);break;case 13:Nr(h,d,a),a&&_&4&&P3(h,d);break;case 22:d.memoizedState===null&&Nr(h,d,a),Va(d,d.return);break;default:Nr(h,d,a)}n=n.sibling}}function C0(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Lo(a))}function E0(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Lo(e))}function Vr(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q3(e,n,a,o),n=n.sibling}function q3(e,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Vr(e,n,a,o),h&2048&&Qo(9,n);break;case 3:Vr(e,n,a,o),h&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Lo(e)));break;case 12:if(h&2048){Vr(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){ie(n,n.return,x)}}else Vr(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Vr(e,n,a,o):Ko(e,n):d._visibility&4?Vr(e,n,a,o):(d._visibility|=4,bs(e,n,a,o,(n.subtreeFlags&10256)!==0)),h&2048&&C0(n.alternate,n);break;case 24:Vr(e,n,a,o),h&2048&&E0(n.alternate,n);break;default:Vr(e,n,a,o)}}function bs(e,n,a,o,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,_=n,E=a,x=o,U=_.flags;switch(_.tag){case 0:case 11:case 15:bs(d,_,E,x,h),Qo(8,_);break;case 23:break;case 22:var $=_.stateNode;_.memoizedState!==null?$._visibility&4?bs(d,_,E,x,h):Ko(d,_):($._visibility|=4,bs(d,_,E,x,h)),h&&U&2048&&C0(_.alternate,_);break;case 24:bs(d,_,E,x,h),h&&U&2048&&E0(_.alternate,_);break;default:bs(d,_,E,x,h)}n=n.sibling}}function Ko(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,h=o.flags;switch(o.tag){case 22:Ko(a,o),h&2048&&C0(o.alternate,o);break;case 24:Ko(a,o),h&2048&&E0(o.alternate,o);break;default:Ko(a,o)}n=n.sibling}}var Yo=8192;function Rs(e){if(e.subtreeFlags&Yo)for(e=e.child;e!==null;)H3(e),e=e.sibling}function H3(e){switch(e.tag){case 26:Rs(e),e.flags&Yo&&e.memoizedState!==null&&vd(Wn,e.memoizedState,e.memoizedProps);break;case 5:Rs(e);break;case 3:case 4:var n=Wn;Wn=Zu(e.stateNode.containerInfo),Rs(e),Wn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Yo,Yo=16777216,Rs(e),Yo=n):Rs(e));break;default:Rs(e)}}function F3(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Be=o,Q3(o,e)}F3(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)G3(e),e=e.sibling}function G3(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Uu(e)):$o(e);break;default:$o(e)}}function Uu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Be=o,Q3(o,e)}F3(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Mr(8,n,n.return),Uu(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Uu(n));break;default:Uu(n)}e=e.sibling}}function Q3(e,n){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:Mr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Lo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Be=o;else t:for(a=e;Be!==null;){o=Be;var h=o.sibling,d=o.return;if(U3(o),o===a){Be=null;break t}if(h!==null){h.return=d,Be=h;break t}Be=d}}}function M8(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,a,o){return new M8(e,n,a,o)}function T0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Or(e,n){var a=e.alternate;return a===null?(a=Hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function K3(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function zu(e,n,a,o,h,d){var _=0;if(o=e,typeof e=="function")T0(e)&&(_=1);else if(typeof e=="string")_=gd(e,a,Qt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return Oa(a.children,h,d,n);case y:_=8,h|=24;break;case C:return e=Hn(12,a,n,h|2),e.elementType=C,e.lanes=d,e;case K:return e=Hn(13,a,n,h),e.elementType=K,e.lanes=d,e;case z:return e=Hn(19,a,n,h),e.elementType=z,e.lanes=d,e;case J:return Y3(a,h,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case N:_=10;break t;case S:_=9;break t;case k:_=11;break t;case F:_=14;break t;case X:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Hn(_,a,n,h),n.elementType=e,n.type=o,n.lanes=d,n}function Oa(e,n,a,o){return e=Hn(7,e,o,n),e.lanes=a,e}function Y3(e,n,a,o){e=Hn(22,e,o,n),e.elementType=J,e.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var _=Tr(d,2);_!==null&&(h._pendingVisibility|=2,un(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var _=Tr(d,2);_!==null&&(h._pendingVisibility&=-3,un(_,d,2))}}};return e.stateNode=h,e}function A0(e,n,a){return e=Hn(6,e,null,n),e.lanes=a,e}function S0(e,n,a){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Qi(e){e.flags|=4}function $3(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vh(n)){if(n=jn.current,n!==null&&((qt&4194176)===qt?di!==null:(qt&62914560)!==qt&&(qt&536870912)===0||n!==di))throw Vo=x1,f5;e.flags|=8192}}function Pu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cr():536870912,e.lanes|=n,xs|=n)}function Xo(e,n){if(!Yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&31457280,o|=h.flags&31457280,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function N8(e,n,a){var o=n.pendingProps;switch(R1(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return he(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(Ie),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xo(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zn!==null&&(N0(Zn),Zn=null))),he(n),null;case 26:return a=n.memoizedState,e===null?(Qi(n),a!==null?(he(n),$3(n,a)):(he(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Qi(n),he(n),$3(n,a)):(he(n),n.flags&=-16777217):(e.memoizedProps!==o&&Qi(n),he(n),n.flags&=-16777217),null;case 27:Ze(n),a=te.current;var h=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return he(n),null}e=Qt.current,xo(n)?c5(n):(e=wh(h,o,a),n.stateNode=e,Qi(n))}return he(n),null;case 5:if(Ze(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return he(n),null}if(e=Qt.current,xo(n))c5(n);else{switch(h=Xu(te.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[Ue]=n,e[be]=o;t:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break t;for(;h.sibling===null;){if(h.return===null||h.return===n)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=e;t:switch(Ke(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(n)}}return he(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,xo(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,h=ln,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ue]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_h(e.nodeValue,a)),e||Sa(n)}else e=Xu(e).createTextNode(o),e[Ue]=n,n.stateNode=e}return he(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=xo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ue]=n}else Io(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;he(n),h=!1}else Zn!==null&&(N0(Zn),Zn=null),h=!0;if(!h)return n.flags&256?(zi(n),n):(zi(n),null)}if(zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Pu(n,n.updateQueue),he(n),null;case 4:return oe(),e===null&&H0(n.stateNode.containerInfo),he(n),null;case 10:return qi(n.type),he(n),null;case 19:if(St(xe),h=n.memoizedState,h===null)return he(n),null;if(o=(n.flags&128)!==0,d=h.rendering,d===null)if(o)Xo(h,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Tu(e),d!==null){for(n.flags|=128,Xo(h,!1),e=d.updateQueue,n.updateQueue=e,Pu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)K3(a,e),a=a.sibling;return Rt(xe,xe.current&1|2),n.child}e=e.sibling}h.tail!==null&&hn()>ju&&(n.flags|=128,o=!0,Xo(h,!1),n.lanes=4194304)}else{if(!o)if(e=Tu(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Pu(n,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Yt)return he(n),null}else 2*hn()-h.renderingStartTime>ju&&a!==536870912&&(n.flags|=128,o=!0,Xo(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(e=h.last,e!==null?e.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=hn(),n.sibling=null,e=xe.current,Rt(xe,o?e&1|2:e&1),n):(he(n),null);case 22:case 23:return zi(n),M1(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),a=n.updateQueue,a!==null&&Pu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&St(ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(Ie),he(n),null;case 25:return null}throw Error(s(156,n.tag))}function V8(e,n){switch(R1(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(Ie),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 13:if(zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Io()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(xe),null;case 4:return oe(),null;case 10:return qi(n.type),null;case 22:case 23:return zi(n),M1(),e!==null&&St(ba),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(Ie),null;case 25:return null;default:return null}}function X3(e,n){switch(R1(n),n.tag){case 3:qi(Ie),oe();break;case 26:case 27:case 5:Ze(n);break;case 4:oe();break;case 13:zi(n);break;case 19:St(xe);break;case 10:qi(n.type);break;case 22:case 23:zi(n),M1(),e!==null&&St(ba);break;case 24:qi(Ie)}}var O8={getCacheForType:function(e){var n=Je(Ie),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},k8=typeof WeakMap=="function"?WeakMap:Map,fe=0,ae=null,kt=null,qt=0,se=0,wn=null,Ki=!1,Ds=!1,w0=!1,Yi=0,ge=0,kr=0,ka=0,b0=0,Fn=0,xs=0,Zo=null,pi=null,R0=!1,D0=0,ju=1/0,Bu=null,Lr=null,qu=!1,La=null,Wo=0,x0=0,I0=null,Jo=0,M0=null;function bn(){if((fe&2)!==0&&qt!==0)return qt&-qt;if(w.T!==null){var e=Cs;return e!==0?e:P0()}return Yl()}function Z3(){Fn===0&&(Fn=(qt&536870912)===0||Yt?co():536870912);var e=jn.current;return e!==null&&(e.flags|=32),Fn}function un(e,n,a){(e===ae&&se===2||e.cancelPendingCommit!==null)&&(Is(e,0),$i(e,qt,Fn,!1)),ve(e,a),((fe&2)===0||e!==ae)&&(e===ae&&((fe&2)===0&&(ka|=a),ge===4&&$i(e,qt,Fn,!1)),gi(e))}function W3(e,n,a){if((fe&6)!==0)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||ur(e,n),h=o?z8(e,n):k0(e,n,!0),d=o;do{if(h===0){Ds&&!o&&$i(e,n,0,!1);break}else if(h===6)$i(e,n,0,!Ki);else{if(a=e.current.alternate,d&&!L8(a)){h=k0(e,n,!1),d=!1;continue}if(h===2){if(d=n,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;h=Zo;var x=E.current.memoizedState.isDehydrated;if(x&&(Is(E,_).flags|=256),_=k0(E,_,!1),_!==2){if(w0&&!x){E.errorRecoveryDisabledLanes|=d,ka|=d,h=4;break t}d=pi,pi=h,d!==null&&N0(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){Is(e,0),$i(e,n,0,!0);break}t:{switch(o=e,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){$i(o,n,Fn,!Ki);break t}break;case 2:pi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(d=D0+300-hn(),10<d)){if($i(o,n,Fn,!Ki),In(o,0)!==0)break t;o.timeoutHandle=Th(J3.bind(null,o,a,pi,Bu,R0,n,Fn,ka,xs,Ki,2,-0,0),d);break t}J3(o,a,pi,Bu,R0,n,Fn,ka,xs,Ki,0,-0,0)}}break}while(!0);gi(e)}function N0(e){pi===null?pi=e:pi.push.apply(pi,e)}function J3(e,n,a,o,h,d,_,E,x,U,$,tt,G){var Y=n.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(al={stylesheets:null,count:0,unsuspend:yd},H3(n),n=_d(),n!==null)){e.cancelPendingCommit=n(sh.bind(null,e,a,o,h,_,E,x,1,tt,G)),$i(e,d,_,!U);return}sh(e,a,o,h,_,E,x,$,tt,G)}function L8(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!Tn(d(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $i(e,n,a,o){n&=~b0,n&=~ka,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var h=n;0<h;){var d=31-an(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&hr(e,a,n)}function Hu(){return(fe&6)===0?(tl(0),!1):!0}function V0(){if(kt!==null){if(se===0)var e=kt.return;else e=kt,Bi=Ma=null,P1(e),vs=null,Oo=0,e=kt;for(;e!==null;)X3(e.alternate,e),e=e.return;kt=null}}function Is(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ed(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),V0(),ae=e,kt=a=Or(e.current,null),qt=n,se=0,wn=null,Ki=!1,Ds=ur(e,n),w0=!1,xs=Fn=b0=ka=kr=ge=0,pi=Zo=null,R0=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var h=31-an(o),d=1<<h;n|=e[h],o&=~d}return Yi=n,du(),a}function th(e,n){Vt=null,w.H=mi,n===No?(n=p5(),se=3):n===f5?(n=p5(),se=4):se=n===d3?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wn=n,kt===null&&(ge=1,Vu(e,Un(n,e.current)))}function eh(){var e=w.H;return w.H=mi,e===null?mi:e}function nh(){var e=w.A;return w.A=O8,e}function O0(){ge=4,Ki||(qt&4194176)!==qt&&jn.current!==null||(Ds=!0),(kr&134217727)===0&&(ka&134217727)===0||ae===null||$i(ae,qt,Fn,!1)}function k0(e,n,a){var o=fe;fe|=2;var h=eh(),d=nh();(ae!==e||qt!==n)&&(Bu=null,Is(e,n)),n=!1;var _=ge;t:do try{if(se!==0&&kt!==null){var E=kt,x=wn;switch(se){case 8:V0(),_=6;break t;case 3:case 2:case 6:jn.current===null&&(n=!0);var U=se;if(se=0,wn=null,Ms(e,E,x,U),a&&Ds){_=0;break t}break;default:U=se,se=0,wn=null,Ms(e,E,x,U)}}U8(),_=ge;break}catch($){th(e,$)}while(!0);return n&&e.shellSuspendCounter++,Bi=Ma=null,fe=o,w.H=h,w.A=d,kt===null&&(ae=null,qt=0,du()),_}function U8(){for(;kt!==null;)ih(kt)}function z8(e,n){var a=fe;fe|=2;var o=eh(),h=nh();ae!==e||qt!==n?(Bu=null,ju=hn()+500,Is(e,n)):Ds=ur(e,n);t:do try{if(se!==0&&kt!==null){n=kt;var d=wn;e:switch(se){case 1:se=0,wn=null,Ms(e,n,d,1);break;case 2:if(d5(d)){se=0,wn=null,rh(n);break}n=function(){se===2&&ae===e&&(se=7),gi(e)},d.then(n,n);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:d5(d)?(se=0,wn=null,rh(n)):(se=0,wn=null,Ms(e,n,d,7));break;case 5:var _=null;switch(kt.tag){case 26:_=kt.memoizedState;case 5:case 27:var E=kt;if(!_||Vh(_)){se=0,wn=null;var x=E.sibling;if(x!==null)kt=x;else{var U=E.return;U!==null?(kt=U,Fu(U)):kt=null}break e}}se=0,wn=null,Ms(e,n,d,5);break;case 6:se=0,wn=null,Ms(e,n,d,6);break;case 8:V0(),ge=6;break t;default:throw Error(s(462))}}P8();break}catch($){th(e,$)}while(!0);return Bi=Ma=null,w.H=o,w.A=h,fe=a,kt!==null?0:(ae=null,qt=0,du(),ge)}function P8(){for(;kt!==null&&!u1();)ih(kt)}function ih(e){var n=w3(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Fu(e):kt=n}function rh(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_3(a,n,n.pendingProps,n.type,void 0,qt);break;case 11:n=_3(a,n,n.pendingProps,n.type.render,n.ref,qt);break;case 5:P1(n);default:X3(a,n),n=kt=K3(n,Yi),n=w3(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Fu(e):kt=n}function Ms(e,n,a,o){Bi=Ma=null,P1(n),vs=null,Oo=0;var h=n.return;try{if(R8(e,h,n,a,qt)){ge=1,Vu(e,Un(a,e.current)),kt=null;return}}catch(d){if(h!==null)throw kt=h,d;ge=1,Vu(e,Un(a,e.current)),kt=null;return}n.flags&32768?(Yt||o===1?e=!0:Ds||(qt&536870912)!==0?e=!1:(Ki=e=!0,(o===2||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),ah(n,e)):Fu(n)}function Fu(e){var n=e;do{if((n.flags&32768)!==0){ah(n,Ki);return}e=n.return;var a=N8(n.alternate,n,Yi);if(a!==null){kt=a;return}if(n=n.sibling,n!==null){kt=n;return}kt=n=e}while(n!==null);ge===0&&(ge=5)}function ah(e,n){do{var a=V8(e.alternate,e);if(a!==null){a.flags&=32767,kt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){kt=e;return}kt=e=a}while(e!==null);ge=6,kt=null}function sh(e,n,a,o,h,d,_,E,x,U){var $=w.T,tt=lt.p;try{lt.p=2,w.T=null,j8(e,n,a,o,tt,h,d,_,E,x,U)}finally{w.T=$,lt.p=tt}}function j8(e,n,a,o,h,d,_,E){do Ns();while(La!==null);if((fe&6)!==0)throw Error(s(327));var x=e.finishedWork;if(o=e.finishedLanes,x===null)return null;if(e.finishedWork=null,e.finishedLanes=0,x===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var U=x.lanes|x.childLanes;if(U|=S1,Ql(e,o,U,d,_,E),e===ae&&(kt=ae=null,qt=0),(x.subtreeFlags&10256)===0&&(x.flags&10256)===0||qu||(qu=!0,x0=U,I0=a,F8(bi,function(){return Ns(),null})),a=(x.flags&15990)!==0,(x.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,d=lt.p,lt.p=2,_=fe,fe|=4,x8(e,x),j3(x,e),c8(K0,e.containerInfo),nc=!!Q0,K0=Q0=null,e.current=x,L3(e,x.alternate,x),so(),fe=_,lt.p=d,w.T=a):e.current=x,qu?(qu=!1,La=e,Wo=o):oh(e,U),U=e.pendingLanes,U===0&&(Lr=null),lo(x.stateNode),gi(e),n!==null)for(h=e.onRecoverableError,x=0;x<n.length;x++)U=n[x],h(U.value,{componentStack:U.stack});return(Wo&3)!==0&&Ns(),U=e.pendingLanes,(o&4194218)!==0&&(U&42)!==0?e===M0?Jo++:(Jo=0,M0=e):Jo=0,tl(0),null}function oh(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Lo(n)))}function Ns(){if(La!==null){var e=La,n=x0;x0=0;var a=Kl(Wo),o=w.T,h=lt.p;try{if(lt.p=32>a?32:a,w.T=null,La===null)var d=!1;else{a=I0,I0=null;var _=La,E=Wo;if(La=null,Wo=0,(fe&6)!==0)throw Error(s(331));var x=fe;if(fe|=4,G3(_.current),q3(_,_.current,E,a),fe=x,tl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(or,_)}catch{}d=!0}return d}finally{lt.p=h,w.T=o,oh(e,n)}}return!1}function lh(e,n,a){n=Un(a,n),n=J1(e.stateNode,n,2),e=Ir(e,n,2),e!==null&&(ve(e,2),gi(e))}function ie(e,n,a){if(e.tag===3)lh(e,e,a);else for(;n!==null;){if(n.tag===3){lh(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Lr===null||!Lr.has(o))){e=Un(a,e),a=h3(2),o=Ir(n,a,2),o!==null&&(f3(a,o,n,e),ve(o,2),gi(o));break}}n=n.return}}function L0(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new k8;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(w0=!0,h.add(a),e=B8.bind(null,e,n,a),n.then(e,e))}function B8(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ae===e&&(qt&a)===a&&(ge===4||ge===3&&(qt&62914560)===qt&&300>hn()-D0?(fe&2)===0&&Is(e,0):b0|=a,xs===qt&&(xs=0)),gi(e)}function uh(e,n){n===0&&(n=cr()),e=Tr(e,n),e!==null&&(ve(e,n),gi(e))}function q8(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),uh(e,a)}function H8(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),uh(e,a)}function F8(e,n){return sa(e,n)}var Gu=null,Vs=null,U0=!1,Qu=!1,z0=!1,Ua=0;function gi(e){e!==Vs&&e.next===null&&(Vs===null?Gu=Vs=e:Vs=Vs.next=e),Qu=!0,U0||(U0=!0,Q8(G8))}function tl(e,n){if(!z0&&Qu){z0=!0;do for(var a=!1,o=Gu;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-an(42|e)+1)-1,d&=h&~(_&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,fh(o,d))}else d=qt,d=In(o,o===ae?d:0),(d&3)===0||ur(o,d)||(a=!0,fh(o,d));o=o.next}while(a);z0=!1}}function G8(){Qu=U0=!1;var e=0;Ua!==0&&(td()&&(e=Ua),Ua=0);for(var n=hn(),a=null,o=Gu;o!==null;){var h=o.next,d=ch(o,n);d===0?(o.next=null,a===null?Gu=h:a.next=h,h===null&&(Vs=a)):(a=o,(e!==0||(d&3)!==0)&&(Qu=!0)),o=h}tl(e)}function ch(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-an(d),E=1<<_,x=h[_];x===-1?((E&a)===0||(E&o)!==0)&&(h[_]=Za(E,n)):x<=n&&(e.expiredLanes|=E),d&=~E}if(n=ae,a=qt,a=In(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&se===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Xa(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ur(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Xa(o),Kl(a)){case 2:case 8:a=Le;break;case 32:a=bi;break;case 268435456:a=oo;break;default:a=bi}return o=hh.bind(null,e),a=sa(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Xa(o),e.callbackPriority=2,e.callbackNode=null,2}function hh(e,n){var a=e.callbackNode;if(Ns()&&e.callbackNode!==a)return null;var o=qt;return o=In(e,e===ae?o:0),o===0?null:(W3(e,o,n),ch(e,hn()),e.callbackNode!=null&&e.callbackNode===a?hh.bind(null,e):null)}function fh(e,n){if(Ns())return null;W3(e,n,!0)}function Q8(e){nd(function(){(fe&6)!==0?sa(we,e):e()})}function P0(){return Ua===0&&(Ua=co()),Ua}function dh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function mh(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function K8(e,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var d=dh((h[be]||null).action),_=o.submitter;_&&(n=(n=_[be]||null)?dh(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var E=new rs("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ua!==0){var x=_?mh(h,_):new FormData(h);Y1(a,{pending:!0,data:x,method:h.method,action:d},null,x)}}else typeof d=="function"&&(E.preventDefault(),x=_?mh(h,_):new FormData(h),Y1(a,{pending:!0,data:x,method:h.method,action:d},d,x))},currentTarget:h}]})}}for(var j0=0;j0<s5.length;j0++){var B0=s5[j0],Y8=B0.toLowerCase(),$8=B0[0].toUpperCase()+B0.slice(1);Xn(Y8,"on"+$8)}Xn(e5,"onAnimationEnd"),Xn(n5,"onAnimationIteration"),Xn(i5,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(f8,"onTransitionRun"),Xn(d8,"onTransitionStart"),Xn(m8,"onTransitionCancel"),Xn(r5,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function ph(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],x=E.instance,U=E.currentTarget;if(E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch($){Nu($)}h.currentTarget=null,d=x}else for(_=0;_<o.length;_++){if(E=o[_],x=E.instance,U=E.currentTarget,E=E.listener,x!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch($){Nu($)}h.currentTarget=null,d=x}}}}function zt(e,n){var a=n[la];a===void 0&&(a=n[la]=new Set);var o=e+"__bubble";a.has(o)||(gh(n,e,2,!1),a.add(o))}function q0(e,n,a){var o=0;n&&(o|=4),gh(a,e,o,n)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function H0(e){if(!e[Ku]){e[Ku]=!0,fo.forEach(function(a){a!=="selectionchange"&&(X8.has(a)||q0(a,!1,e),q0(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ku]||(n[Ku]=!0,q0("selectionchange",!1,n))}}function gh(e,n,a,o){switch(Ph(n)){case 2:var h=Td;break;case 8:h=Ad;break;default:h=n4}a=h.bind(null,n,a,e),h=void 0,!On||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(n,a,{capture:!0,passive:h}):e.addEventListener(n,a,!0):h!==void 0?e.addEventListener(n,a,{passive:h}):e.addEventListener(n,a,!1)}function F0(e,n,a,o,h){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(_===4)for(_=o.return;_!==null;){var x=_.tag;if((x===3||x===4)&&(x=_.stateNode.containerInfo,x===h||x.nodeType===8&&x.parentNode===h))return;_=_.return}for(;E!==null;){if(_=$n(E),_===null)return;if(x=_.tag,x===5||x===6||x===26||x===27){o=d=_;continue t}E=E.parentNode}}o=o.return}Wl(function(){var U=d,$=is(a),tt=[];t:{var G=a5.get(e);if(G!==void 0){var Y=rs,pt=e;switch(e){case"keypress":if(oi(a)===0)break t;case"keydown":case"keyup":Y=cs;break;case"focusin":pt="focus",Y=os;break;case"focusout":pt="blur",Y=os;break;case"beforeblur":case"afterblur":Y=os;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=su;break;case e5:case n5:case i5:Y=ls;break;case r5:Y=lu;break;case"scroll":case"scrollend":Y=Jl;break;case"wheel":Y=hs;break;case"copy":case"cut":case"paste":Y=us;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=wo;break;case"toggle":case"beforetoggle":Y=cu}var Dt=(n&4)!==0,ye=!Dt&&(e==="scroll"||e==="scrollend"),j=Dt?G!==null?G+"Capture":null:G;Dt=[];for(var L=U,H;L!==null;){var Z=L;if(H=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||H===null||j===null||(Z=da(L,j),Z!=null&&Dt.push(nl(L,Z,H))),ye)break;L=L.return}0<Dt.length&&(G=new Y(G,pt,null,a,$),tt.push({event:G,listeners:Dt}))}}if((n&7)===0){t:{if(G=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",G&&a!==Vn&&(pt=a.relatedTarget||a.fromElement)&&($n(pt)||pt[Ri]))break t;if((Y||G)&&(G=$.window===$?$:(G=$.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(pt=a.relatedTarget||a.toElement,Y=U,pt=pt?$n(pt):null,pt!==null&&(ye=gt(pt),Dt=pt.tag,pt!==ye||Dt!==5&&Dt!==27&&Dt!==6)&&(pt=null)):(Y=null,pt=U),Y!==pt)){if(Dt=kn,Z="onMouseLeave",j="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Dt=wo,Z="onPointerLeave",j="onPointerEnter",L="pointer"),ye=Y==null?G:pr(Y),H=pt==null?G:pr(pt),G=new Dt(Z,L+"leave",Y,a,$),G.target=ye,G.relatedTarget=H,Z=null,$n($)===U&&(Dt=new Dt(j,L+"enter",pt,a,$),Dt.target=H,Dt.relatedTarget=ye,Z=Dt),ye=Z,Y&&pt)e:{for(Dt=Y,j=pt,L=0,H=Dt;H;H=Os(H))L++;for(H=0,Z=j;Z;Z=Os(Z))H++;for(;0<L-H;)Dt=Os(Dt),L--;for(;0<H-L;)j=Os(j),H--;for(;L--;){if(Dt===j||j!==null&&Dt===j.alternate)break e;Dt=Os(Dt),j=Os(j)}Dt=null}else Dt=null;Y!==null&&yh(tt,G,Y,Dt,!1),pt!==null&&ye!==null&&yh(tt,ye,pt,Dt,!0)}}t:{if(G=U?pr(U):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var ht=F2;else if(De(G))if(G2)ht=l8;else{ht=s8;var Ot=a8}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&vo(U.elementType)&&(ht=F2):ht=o8;if(ht&&(ht=ht(e,U))){ki(tt,ht,a,$);break t}Ot&&Ot(e,G,U),e==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&ns(G,"number",G.value)}switch(Ot=U?pr(U):window,e){case"focusin":(De(Ot)||Ot.contentEditable==="true")&&(fs=Ot,E1=U,Do=null);break;case"focusout":Do=E1=fs=null;break;case"mousedown":T1=!0;break;case"contextmenu":case"mouseup":case"dragend":T1=!1,J2(tt,a,$);break;case"selectionchange":if(h8)break;case"keydown":case"keyup":J2(tt,a,$)}var _t;if(ci)t:{switch(e){case"compositionstart":var Tt="onCompositionStart";break t;case"compositionend":Tt="onCompositionEnd";break t;case"compositionupdate":Tt="onCompositionUpdate";break t}Tt=void 0}else jt?Q(e,a)&&(Tt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(v&&a.locale!=="ko"&&(jt||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&jt&&(_t=Co()):(si=$,Er="value"in si?si.value:si.textContent,jt=!0)),Ot=Yu(U,Tt),0<Ot.length&&(Tt=new Ao(Tt,e,null,a,$),tt.push({event:Tt,listeners:Ot}),_t?Tt.data=_t:(_t=at(a),_t!==null&&(Tt.data=_t)))),(_t=g?Re(e,a):Bt(e,a))&&(Tt=Yu(U,"onBeforeInput"),0<Tt.length&&(Ot=new Ao("onBeforeInput","beforeinput",null,a,$),tt.push({event:Ot,listeners:Tt}),Ot.data=_t)),K8(tt,e,U,a,$)}ph(tt,n)})}function nl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yu(e,n){for(var a=n+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=da(e,a),h!=null&&o.unshift(nl(e,h,d)),h=da(e,n),h!=null&&o.push(nl(e,h,d))),e=e.return}return o}function Os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yh(e,n,a,o,h){for(var d=n._reactName,_=[];a!==null&&a!==o;){var E=a,x=E.alternate,U=E.stateNode;if(E=E.tag,x!==null&&x===o)break;E!==5&&E!==26&&E!==27||U===null||(x=U,h?(U=da(a,d),U!=null&&_.unshift(nl(a,U,x))):h||(U=da(a,d),U!=null&&_.push(nl(a,U,x)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Z8=/\r\n?/g,W8=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(Z8,`
`).replace(W8,"")}function _h(e,n){return n=vh(n),vh(e)===n}function $u(){}function ne(e,n,a,o,h,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nn(e,""+o);break;case"className":vr(e,"class",o);break;case"tabIndex":vr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(e,a,o);break;case"style":Zl(e,o,d);break;case"data":if(n!=="object"){vr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ai(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&ne(e,n,"name",h.name,h,null),ne(e,n,"formEncType",h.formEncType,h,null),ne(e,n,"formMethod",h.formMethod,h,null),ne(e,n,"formTarget",h.formTarget,h,null)):(ne(e,n,"encType",h.encType,h,null),ne(e,n,"method",h.method,h,null),ne(e,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ai(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$u);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":zt("beforetoggle",e),zt("toggle",e),yr(e,"popover",o);break;case"xlinkActuate":Mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Mn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Mn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Mn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Mn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":yr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=m1.get(a)||a,yr(e,a,o))}}function G0(e,n,a,o,h,d){switch(a){case"style":Zl(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Nn(e,o):(typeof o=="number"||typeof o=="bigint")&&Nn(e,""+o);break;case"onScroll":o!=null&&zt("scroll",e);break;case"onScrollEnd":o!=null&&zt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ts.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),d=e[be]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):yr(e,a,o)}}}function Ke(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",e),zt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ne(e,n,d,_,a,null)}}h&&ne(e,n,"srcSet",a.srcSet,a,null),o&&ne(e,n,"src",a.src,a,null);return;case"input":zt("invalid",e);var E=d=_=h=null,x=null,U=null;for(o in a)if(a.hasOwnProperty(o)){var $=a[o];if($!=null)switch(o){case"name":h=$;break;case"type":_=$;break;case"checked":x=$;break;case"defaultChecked":U=$;break;case"value":d=$;break;case"defaultValue":E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:ne(e,n,o,$,a,null)}}ha(e,d,E,x,U,_,h,!1),ca(e);return;case"select":zt("invalid",e),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:ne(e,n,h,E,a,null)}n=d,a=_,e.multiple=!!o,n!=null?Kt(e,!!o,n,!1):a!=null&&Kt(e,!!o,a,!0);return;case"textarea":zt("invalid",e),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ne(e,n,_,E,a,null)}Cr(e,o,h,d),ca(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ne(e,n,x,o,a,null)}return;case"dialog":zt("cancel",e),zt("close",e);break;case"iframe":case"object":zt("load",e);break;case"video":case"audio":for(o=0;o<el.length;o++)zt(el[o],e);break;case"image":zt("error",e),zt("load",e);break;case"details":zt("toggle",e);break;case"embed":case"source":case"link":zt("error",e),zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(o=a[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ne(e,n,U,o,a,null)}return;default:if(vo(n)){for($ in a)a.hasOwnProperty($)&&(o=a[$],o!==void 0&&G0(e,n,$,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&ne(e,n,E,o,a,null))}function J8(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,x=null,U=null,$=null;for(Y in a){var tt=a[Y];if(a.hasOwnProperty(Y)&&tt!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":x=tt;default:o.hasOwnProperty(Y)||ne(e,n,Y,null,o,tt)}}for(var G in o){var Y=o[G];if(tt=a[G],o.hasOwnProperty(G)&&(Y!=null||tt!=null))switch(G){case"type":d=Y;break;case"name":h=Y;break;case"checked":U=Y;break;case"defaultChecked":$=Y;break;case"value":_=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Y!==tt&&ne(e,n,G,Y,o,tt)}}_r(e,_,E,x,U,$,d,h);return;case"select":Y=_=E=G=null;for(d in a)if(x=a[d],a.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":Y=x;default:o.hasOwnProperty(d)||ne(e,n,d,null,o,x)}for(h in o)if(d=o[h],x=a[h],o.hasOwnProperty(h)&&(d!=null||x!=null))switch(h){case"value":G=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==x&&ne(e,n,h,d,o,x)}n=E,a=_,o=Y,G!=null?Kt(e,!!a,G,!1):!!o!=!!a&&(n!=null?Kt(e,!!a,n,!0):Kt(e,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ne(e,n,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&ne(e,n,_,h,o,d)}fa(e,G,Y);return;case"option":for(var pt in a)if(G=a[pt],a.hasOwnProperty(pt)&&G!=null&&!o.hasOwnProperty(pt))switch(pt){case"selected":e.selected=!1;break;default:ne(e,n,pt,null,o,G)}for(x in o)if(G=o[x],Y=a[x],o.hasOwnProperty(x)&&G!==Y&&(G!=null||Y!=null))switch(x){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ne(e,n,x,G,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Dt in a)G=a[Dt],a.hasOwnProperty(Dt)&&G!=null&&!o.hasOwnProperty(Dt)&&ne(e,n,Dt,null,o,G);for(U in o)if(G=o[U],Y=a[U],o.hasOwnProperty(U)&&G!==Y&&(G!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:ne(e,n,U,G,o,Y)}return;default:if(vo(n)){for(var ye in a)G=a[ye],a.hasOwnProperty(ye)&&G!==void 0&&!o.hasOwnProperty(ye)&&G0(e,n,ye,void 0,o,G);for($ in o)G=o[$],Y=a[$],!o.hasOwnProperty($)||G===Y||G===void 0&&Y===void 0||G0(e,n,$,G,o,Y);return}}for(var j in a)G=a[j],a.hasOwnProperty(j)&&G!=null&&!o.hasOwnProperty(j)&&ne(e,n,j,null,o,G);for(tt in o)G=o[tt],Y=a[tt],!o.hasOwnProperty(tt)||G===Y||G==null&&Y==null||ne(e,n,tt,G,o,Y)}var Q0=null,K0=null;function Xu(e){return e.nodeType===9?e:e.ownerDocument}function Ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Y0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $0=null;function td(){var e=window.event;return e&&e.type==="popstate"?e===$0?!1:($0=e,!0):($0=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,ed=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,nd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(id)}:Th;function id(e){setTimeout(function(){throw e})}function X0(e,n){var a=n,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(o===0){e.removeChild(h),cl(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=h}while(a);cl(n)}function Z0(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Z0(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rd(e,n,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[mr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function ad(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Jn(e.nextSibling),e===null))return null;return e}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Sh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function wh(e,n,a){switch(n=Xu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Gn=new Map,bh=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Xi=lt.d;lt.d={f:sd,r:od,D:ld,C:ud,L:cd,m:hd,X:dd,S:fd,M:md};function sd(){var e=Xi.f(),n=Hu();return e||n}function od(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?J5(n):Xi.r(e)}var ks=typeof document>"u"?null:document;function Rh(e,n,a){var o=ks;if(o&&typeof n=="string"&&n){var h=me(n);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),bh.has(h)||(bh.add(h),e={rel:e,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),Ke(n,"link",e),ce(n),o.head.appendChild(n)))}}function ld(e){Xi.D(e),Rh("dns-prefetch",e,null)}function ud(e,n){Xi.C(e,n),Rh("preconnect",e,n)}function cd(e,n,a){Xi.L(e,n,a);var o=ks;if(o&&e&&n){var h='link[rel="preload"][as="'+me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(n){case"style":d=Ls(e);break;case"script":d=Us(e)}Gn.has(d)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Gn.set(d,e),o.querySelector(h)!==null||n==="style"&&o.querySelector(il(d))||n==="script"&&o.querySelector(rl(d))||(n=o.createElement("link"),Ke(n,"link",e),ce(n),o.head.appendChild(n)))}}function hd(e,n){Xi.m(e,n);var a=ks;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+me(o)+'"][href="'+me(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Us(e)}if(!Gn.has(d)&&(e=I({rel:"modulepreload",href:e},n),Gn.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(d)))return}o=a.createElement("link"),Ke(o,"link",e),ce(o),a.head.appendChild(o)}}}function fd(e,n,a){Xi.S(e,n,a);var o=ks;if(o&&e){var h=gr(o).hoistableStyles,d=Ls(e);n=n||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(il(d)))E.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Gn.get(d))&&W0(e,a);var x=_=o.createElement("link");ce(x),Ke(x,"link",e),x._p=new Promise(function(U,$){x.onload=U,x.onerror=$}),x.addEventListener("load",function(){E.loading|=1}),x.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Wu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function dd(e,n){Xi.X(e,n);var a=ks;if(a&&e){var o=gr(a).hoistableScripts,h=Us(e),d=o.get(h);d||(d=a.querySelector(rl(h)),d||(e=I({src:e,async:!0},n),(n=Gn.get(h))&&J0(e,n),d=a.createElement("script"),ce(d),Ke(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function md(e,n){Xi.M(e,n);var a=ks;if(a&&e){var o=gr(a).hoistableScripts,h=Us(e),d=o.get(h);d||(d=a.querySelector(rl(h)),d||(e=I({src:e,async:!0,type:"module"},n),(n=Gn.get(h))&&J0(e,n),d=a.createElement("script"),ce(d),Ke(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function Dh(e,n,a,o){var h=(h=te.current)?Zu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ls(a.href),a=gr(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ls(a.href);var d=gr(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(il(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Gn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(e,a),d||pd(h,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Us(a),a=gr(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ls(e){return'href="'+me(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function xh(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function pd(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ke(n,"link",a),ce(n),e.head.appendChild(n))}function Us(e){return'[src="'+me(e)+'"]'}function rl(e){return"script[async]"+e}function Ih(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(o)return n.instance=o,ce(o),o;var h=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ce(o),Ke(o,"style",h),Wu(o,a.precedence,e),n.instance=o;case"stylesheet":h=Ls(a.href);var d=e.querySelector(il(h));if(d)return n.state.loading|=4,n.instance=d,ce(d),d;o=xh(a),(h=Gn.get(h))&&W0(o,h),d=(e.ownerDocument||e).createElement("link"),ce(d);var _=d;return _._p=new Promise(function(E,x){_.onload=E,_.onerror=x}),Ke(d,"link",o),n.state.loading|=4,Wu(d,a.precedence,e),n.instance=d;case"script":return d=Us(a.src),(h=e.querySelector(rl(d)))?(n.instance=h,ce(h),h):(o=a,(h=Gn.get(d))&&(o=I({},a),J0(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),ce(h),Ke(h,"link",o),e.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Wu(o,a.precedence,e));return n.instance}function Wu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function W0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function J0(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ju=null;function Mh(e,n,a){if(Ju===null){var o=new Map,h=Ju=new Map;h.set(a,o)}else h=Ju,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[mr]||d[Ue]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=e+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function Nh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gd(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var al=null;function yd(){}function vd(e,n,a){if(al===null)throw Error(s(475));var o=al;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=Ls(a.href),d=e.querySelector(il(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,ce(d);return}d=e.ownerDocument||e,a=xh(a),(h=Gn.get(h))&&W0(a,h),d=d.createElement("link"),ce(d);var _=d;_._p=new Promise(function(E,x){_.onload=E,_.onerror=x}),Ke(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function _d(){if(al===null)throw Error(s(475));var e=al;return e.stylesheets&&e.count===0&&t4(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&t4(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)t4(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function t4(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(Cd,e),ec=null,tc.call(e))}function Cd(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var o=a.get(null);else{a=new Map,ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=n.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=tc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),n.state.loading|=4}}var sl={$$typeof:N,Provider:null,Consumer:null,_currentValue:It,_currentValue2:It,_threadCount:0};function Ed(e,n,a,o,h,d,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Oh(e,n,a,o,h,d,_,E,x,U,$,tt){return e=new Ed(e,n,a,_,E,x,U,tt),n=1,d===!0&&(n|=24),d=Hn(3,null,null,n),e.current=d,d.stateNode=e,n=N1(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},f0(d),e}function kh(e){return e?(e=ps,e):ps}function Lh(e,n,a,o,h,d){h=kh(h),o.context===null?o.context=h:o.pendingContext=h,o=xr(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ir(e,o,n),a!==null&&(un(a,e,n),Ho(a,e,n))}function Uh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function e4(e,n){Uh(e,n),(e=e.alternate)&&Uh(e,n)}function zh(e){if(e.tag===13){var n=Tr(e,67108864);n!==null&&un(n,e,67108864),e4(e,67108864)}}var nc=!0;function Td(e,n,a,o){var h=w.T;w.T=null;var d=lt.p;try{lt.p=2,n4(e,n,a,o)}finally{lt.p=d,w.T=h}}function Ad(e,n,a,o){var h=w.T;w.T=null;var d=lt.p;try{lt.p=8,n4(e,n,a,o)}finally{lt.p=d,w.T=h}}function n4(e,n,a,o){if(nc){var h=i4(o);if(h===null)F0(e,n,o,ic,a),jh(e,o);else if(wd(h,e,n,a,o))o.stopPropagation();else if(jh(e,o),n&4&&-1<Sd.indexOf(e)){for(;h!==null;){var d=Di(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Yn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var x=1<<31-an(_);E.entanglements[1]|=x,_&=~x}gi(d),(fe&6)===0&&(ju=hn()+500,tl(0))}}break;case 13:E=Tr(d,2),E!==null&&un(E,d,2),Hu(),e4(d,2)}if(d=i4(o),d===null&&F0(e,n,o,ic,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else F0(e,n,o,null,a)}}function i4(e){return e=is(e),r4(e)}var ic=null;function r4(e){if(ic=null,e=$n(e),e!==null){var n=gt(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=Gt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function Ph(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ql()){case we:return 2;case Le:return 8;case bi:case Hl:return 32;case oo:return 268435456;default:return 32}default:return 32}}var a4=!1,Ur=null,zr=null,Pr=null,ol=new Map,ll=new Map,jr=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jh(e,n){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function ul(e,n,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},n!==null&&(n=Di(n),n!==null&&zh(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),e)}function wd(e,n,a,o,h){switch(n){case"focusin":return Ur=ul(Ur,e,n,a,o,h),!0;case"dragenter":return zr=ul(zr,e,n,a,o,h),!0;case"mouseover":return Pr=ul(Pr,e,n,a,o,h),!0;case"pointerover":var d=h.pointerId;return ol.set(d,ul(ol.get(d)||null,e,n,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,ll.set(d,ul(ll.get(d)||null,e,n,a,o,h)),!0}return!1}function Bh(e){var n=$n(e.target);if(n!==null){var a=gt(n);if(a!==null){if(n=a.tag,n===13){if(n=Gt(a),n!==null){e.blockedOn=n,dr(e.priority,function(){if(a.tag===13){var o=bn(),h=Tr(a,o);h!==null&&un(h,a,o),e4(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=i4(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Vn=o,a.target.dispatchEvent(o),Vn=null}else return n=Di(a),n!==null&&zh(n),e.blockedOn=a,!1;n.shift()}return!0}function qh(e,n,a){rc(e)&&a.delete(n)}function bd(){a4=!1,Ur!==null&&rc(Ur)&&(Ur=null),zr!==null&&rc(zr)&&(zr=null),Pr!==null&&rc(Pr)&&(Pr=null),ol.forEach(qh),ll.forEach(qh)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,a4||(a4=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bd)))}var sc=null;function Hh(e){sc!==e&&(sc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],h=e[n+2];if(typeof o!="function"){if(r4(o||a)===null)continue;break}var d=Di(a);d!==null&&(e.splice(n,3),n-=3,Y1(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function cl(e){function n(x){return ac(x,e)}Ur!==null&&ac(Ur,e),zr!==null&&ac(zr,e),Pr!==null&&ac(Pr,e),ol.forEach(n),ll.forEach(n);for(var a=0;a<jr.length;a++){var o=jr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<jr.length&&(a=jr[0],a.blockedOn===null);)Bh(a),a.blockedOn===null&&jr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[be]||null;if(typeof d=="function")_||Hh(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[be]||null)E=_.formAction;else if(r4(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),Hh(a)}}}function s4(e){this._internalRoot=e}oc.prototype.render=s4.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=bn();Lh(a,o,e,n,null,null)},oc.prototype.unmount=s4.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ns(),Lh(e.current,2,null,e,null,null),Hu(),n[Ri]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<jr.length&&n!==0&&n<jr[a].priority;a++);jr.splice(a,0,e),a===0&&Bh(e)}};var Fh=t.version;if(Fh!=="19.0.0")throw Error(s(527,Fh,"19.0.0"));lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=nt(n),e=e!==null?ft(e):null,e=e===null?null:e.stateNode,e};var Rd={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:$n,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{or=lc.inject(Rd),We=lc}catch{}}return fl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",h=o3,d=l3,_=u3,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Oh(e,1,!1,null,null,a,o,h,d,_,E,null),e[Ri]=n.current,H0(e.nodeType===8?e.parentNode:e),new s4(n)},fl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=o3,_=l3,E=u3,x=null,U=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(U=a.formState)),n=Oh(e,1,!0,n,a??null,o,h,d,_,E,x,U),n.context=kh(null),a=n.current,o=bn(),h=xr(o),h.callback=null,Ir(a,h,o),n.current.lanes=o,ve(n,o),gi(n),e[Ri]=n.current,H0(e),new oc(n)},fl.version="19.0.0",fl}var t6;function Ud(){if(t6)return u4.exports;t6=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),u4.exports=Ld(),u4.exports}var zd=Ud();const Pd=wf(zd);var dl={},e6;function jd(){if(e6)return dl;e6=1,Object.defineProperty(dl,"__esModule",{value:!0}),dl.parse=f,dl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,N){const k=new c,K=S.length;if(K<2)return k;const z=(N==null?void 0:N.decode)||C;let F=0;do{const X=S.indexOf("=",F);if(X===-1)break;const J=S.indexOf(";",F),ut=J===-1?K:J;if(X>ut){F=S.lastIndexOf(";",X-1)+1;continue}const st=m(S,F,X),dt=p(S,X,st),M=S.slice(st,dt);if(k[M]===void 0){let b=m(S,X+1,ut),w=p(S,ut,b);const I=z(S.slice(b,w));k[M]=I}F=ut+1}while(F<K);return k}function m(S,N,k){do{const K=S.charCodeAt(N);if(K!==32&&K!==9)return N}while(++N<k);return k}function p(S,N,k){for(;N>k;){const K=S.charCodeAt(--N);if(K!==32&&K!==9)return N+1}return k}function y(S,N,k){const K=(k==null?void 0:k.encode)||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const z=K(N);if(!t.test(z))throw new TypeError(`argument val is invalid: ${N}`);let F=S+"="+z;if(!k)return F;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);F+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);F+="; Domain="+k.domain}if(k.path){if(!s.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);F+="; Path="+k.path}if(k.expires){if(!A(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);F+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(F+="; HttpOnly"),k.secure&&(F+="; Secure"),k.partitioned&&(F+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":F+="; Priority=Low";break;case"medium":F+="; Priority=Medium";break;case"high":F+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":F+="; SameSite=Strict";break;case"lax":F+="; SameSite=Lax";break;case"none":F+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return F}function C(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function A(S){return l.call(S)==="[object Date]"}return dl}jd();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var n6="popstate";function Bd(r={}){function t(l,c){let{pathname:f="/",search:m="",hash:p=""}=Qa(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),b4("",{pathname:f,search:m,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=l.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof c=="string"?c:Sl(c))}function s(l,c){Qn(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Hd(t,i,s,r)}function ue(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Qn(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qd(){return Math.random().toString(36).substring(2,10)}function i6(r,t){return{usr:r.state,key:r.key,idx:t}}function b4(r,t,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?Qa(t):t,state:i,key:t&&t.key||s||qd()}}function Sl({pathname:r="/",search:t="",hash:i=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Qa(r){let t={};if(r){let i=r.indexOf("#");i>=0&&(t.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(t.search=r.substring(s),r=r.substring(0,s)),r&&(t.pathname=r)}return t}function Hd(r,t,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,m="POP",p=null,y=C();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function C(){return(f.state||{idx:null}).idx}function A(){m="POP";let z=C(),F=z==null?null:z-y;y=z,p&&p({action:m,location:K.location,delta:F})}function S(z,F){m="PUSH";let X=b4(K.location,z,F);i&&i(X,z),y=C()+1;let J=i6(X,y),ut=K.createHref(X);try{f.pushState(J,"",ut)}catch(st){if(st instanceof DOMException&&st.name==="DataCloneError")throw st;l.location.assign(ut)}c&&p&&p({action:m,location:K.location,delta:1})}function N(z,F){m="REPLACE";let X=b4(K.location,z,F);i&&i(X,z),y=C();let J=i6(X,y),ut=K.createHref(X);f.replaceState(J,"",ut),c&&p&&p({action:m,location:K.location,delta:0})}function k(z){let F=l.location.origin!=="null"?l.location.origin:l.location.href,X=typeof z=="string"?z:Sl(z);return X=X.replace(/ $/,"%20"),ue(F,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,F)}let K={get action(){return m},get location(){return r(l,f)},listen(z){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(n6,A),p=z,()=>{l.removeEventListener(n6,A),p=null}},createHref(z){return t(l,z)},createURL:k,encodeLocation(z){let F=k(z);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:S,replace:N,go(z){return f.go(z)}};return K}function bf(r,t,i="/"){return Fd(r,t,i,!1)}function Fd(r,t,i,s){let l=typeof t=="string"?Qa(t):t,c=tr(l.pathname||"/",i);if(c==null)return null;let f=Rf(r);Gd(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=nm(c);m=tm(f[p],y,s)}return m}function Rf(r,t=[],i=[],s=""){let l=(c,f,m)=>{let p={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(ue(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Wi([s,p.relativePath]),C=i.concat(p);c.children&&c.children.length>0&&(ue(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Rf(c.children,t,C,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:Wd(y,c.index),routesMeta:C})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,f);else for(let p of Df(c.path))l(c,f,p)}),t}function Df(r){let t=r.split("/");if(t.length===0)return[];let[i,...s]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Df(s.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Gd(r){r.sort((t,i)=>t.score!==i.score?i.score-t.score:Jd(t.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Qd=/^:[\w-]+$/,Kd=3,Yd=2,$d=1,Xd=10,Zd=-2,r6=r=>r==="*";function Wd(r,t){let i=r.split("/"),s=i.length;return i.some(r6)&&(s+=Zd),t&&(s+=Yd),i.filter(l=>!r6(l)).reduce((l,c)=>l+(Qd.test(c)?Kd:c===""?$d:Xd),s)}function Jd(r,t){return r.length===t.length&&r.slice(0,-1).every((s,l)=>s===t[l])?r[r.length-1]-t[t.length-1]:0}function tm(r,t,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,C=c==="/"?t:t.slice(c.length)||"/",A=Sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},C),S=p.route;if(!A&&y&&i&&!s[s.length-1].route.index&&(A=Sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},C)),!A)return null;Object.assign(l,A.params),f.push({params:l,pathname:Wi([c,A.pathname]),pathnameBase:sm(Wi([c,A.pathnameBase])),route:S}),A.pathnameBase!=="/"&&(c=Wi([c,A.pathnameBase]))}return f}function Sc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=em(r.path,r.caseSensitive,r.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:s.reduce((y,{paramName:C,isOptional:A},S)=>{if(C==="*"){let k=m[S]||"";f=c.slice(0,c.length-k.length).replace(/(.)\/+$/,"$1")}const N=m[S];return A&&!N?y[C]=void 0:y[C]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function em(r,t=!1,i=!0){Qn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function nm(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function tr(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function im(r,t="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Qa(r):r;return{pathname:i?i.startsWith("/")?i:rm(i,t):t,search:om(s),hash:lm(l)}}function rm(r,t){let i=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function d4(r,t,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function am(r){return r.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Z4(r){let t=am(r);return t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase)}function W4(r,t,i,s=!1){let l;typeof r=="string"?l=Qa(r):(l={...r},ue(!l.pathname||!l.pathname.includes("?"),d4("?","pathname","search",l)),ue(!l.pathname||!l.pathname.includes("#"),d4("#","pathname","hash",l)),ue(!l.search||!l.search.includes("#"),d4("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,m;if(f==null)m=i;else{let A=t.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),A-=1;l.pathname=S.join("/")}m=A>=0?t[A]:"/"}let p=im(l,m),y=f&&f!=="/"&&f.endsWith("/"),C=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(y||C)&&(p.pathname+="/"),p}var Wi=r=>r.join("/").replace(/\/\/+/g,"/"),sm=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),om=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lm=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function um(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var xf=["POST","PUT","PATCH","DELETE"];new Set(xf);var cm=["GET",...xf];new Set(cm);var Js=q.createContext(null);Js.displayName="DataRouter";var Bc=q.createContext(null);Bc.displayName="DataRouterState";var If=q.createContext({isTransitioning:!1});If.displayName="ViewTransition";var hm=q.createContext(new Map);hm.displayName="Fetchers";var fm=q.createContext(null);fm.displayName="Await";var ti=q.createContext(null);ti.displayName="Navigation";var Nl=q.createContext(null);Nl.displayName="Location";var wi=q.createContext({outlet:null,matches:[],isDataRoute:!1});wi.displayName="Route";var J4=q.createContext(null);J4.displayName="RouteError";function dm(r,{relative:t}={}){ue(to(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=q.useContext(ti),{hash:l,pathname:c,search:f}=Vl(r,{relative:t}),m=c;return i!=="/"&&(m=c==="/"?i:Wi([i,c])),s.createHref({pathname:m,search:f,hash:l})}function to(){return q.useContext(Nl)!=null}function na(){return ue(to(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Nl).location}var Mf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nf(r){q.useContext(ti).static||q.useLayoutEffect(r)}function eo(){let{isDataRoute:r}=q.useContext(wi);return r?bm():mm()}function mm(){ue(to(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Js),{basename:t,navigator:i}=q.useContext(ti),{matches:s}=q.useContext(wi),{pathname:l}=na(),c=JSON.stringify(Z4(s)),f=q.useRef(!1);return Nf(()=>{f.current=!0}),q.useCallback((p,y={})=>{if(Qn(f.current,Mf),!f.current)return;if(typeof p=="number"){i.go(p);return}let C=W4(p,JSON.parse(c),l,y.relative==="path");r==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:Wi([t,C.pathname])),(y.replace?i.replace:i.push)(C,y.state,y)},[t,i,c,l,r])}q.createContext(null);function Vl(r,{relative:t}={}){let{matches:i}=q.useContext(wi),{pathname:s}=na(),l=JSON.stringify(Z4(i));return q.useMemo(()=>W4(r,JSON.parse(l),s,t==="path"),[r,l,s,t])}function pm(r,t){return Vf(r,t)}function Vf(r,t,i,s){var X;ue(to(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=q.useContext(ti),{matches:f}=q.useContext(wi),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",C=m?m.pathnameBase:"/",A=m&&m.route;{let J=A&&A.path||"";Of(y,!A||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let S=na(),N;if(t){let J=typeof t=="string"?Qa(t):t;ue(C==="/"||((X=J.pathname)==null?void 0:X.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${J.pathname}" was given in the \`location\` prop.`),N=J}else N=S;let k=N.pathname||"/",K=k;if(C!=="/"){let J=C.replace(/^\//,"").split("/");K="/"+k.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=!c&&i&&i.matches&&i.matches.length>0?i.matches:bf(r,{pathname:K});Qn(A||z!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Qn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=Cm(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},p,J.params),pathname:Wi([C,l.encodeLocation?l.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?C:Wi([C,l.encodeLocation?l.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),f,i,s);return t&&F?q.createElement(Nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},F):F}function gm(){let r=wm(),t=um(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),i?q.createElement("pre",{style:l},i):null,f)}var ym=q.createElement(gm,null),vm=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?q.createElement(wi.Provider,{value:this.props.routeContext},q.createElement(J4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _m({routeContext:r,match:t,children:i}){let s=q.useContext(Js);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(wi.Provider,{value:r},i)}function Cm(r,t=[],i=null,s=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let l=r,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);ue(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,m=-1;if(i)for(let p=0;p<l.length;p++){let y=l[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:C,errors:A}=i,S=y.route.loader&&!C.hasOwnProperty(y.route.id)&&(!A||A[y.route.id]===void 0);if(y.route.lazy||S){f=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((p,y,C)=>{let A,S=!1,N=null,k=null;i&&(A=c&&y.route.id?c[y.route.id]:void 0,N=y.route.errorElement||ym,f&&(m<0&&C===0?(Of("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):m===C&&(S=!0,k=y.route.hydrateFallbackElement||null)));let K=t.concat(l.slice(0,C+1)),z=()=>{let F;return A?F=N:S?F=k:y.route.Component?F=q.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=p,q.createElement(_m,{match:y,routeContext:{outlet:p,matches:K,isDataRoute:i!=null},children:F})};return i&&(y.route.ErrorBoundary||y.route.errorElement||C===0)?q.createElement(vm,{location:i.location,revalidation:i.revalidation,component:N,error:A,children:z(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):z()},null)}function t2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Em(r){let t=q.useContext(Js);return ue(t,t2(r)),t}function Tm(r){let t=q.useContext(Bc);return ue(t,t2(r)),t}function Am(r){let t=q.useContext(wi);return ue(t,t2(r)),t}function e2(r){let t=Am(r),i=t.matches[t.matches.length-1];return ue(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function Sm(){return e2("useRouteId")}function wm(){var s;let r=q.useContext(J4),t=Tm("useRouteError"),i=e2("useRouteError");return r!==void 0?r:(s=t.errors)==null?void 0:s[i]}function bm(){let{router:r}=Em("useNavigate"),t=e2("useNavigate"),i=q.useRef(!1);return Nf(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{Qn(i.current,Mf),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:t,...c}))},[r,t])}var a6={};function Of(r,t,i){!t&&!a6[r]&&(a6[r]=!0,Qn(!1,i))}q.memo(Rm);function Rm({routes:r,future:t,state:i}){return Vf(r,void 0,i,t)}function Dm({to:r,replace:t,state:i,relative:s}){ue(to(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=q.useContext(ti);Qn(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=q.useContext(wi),{pathname:f}=na(),m=eo(),p=W4(r,Z4(c),f,s==="path"),y=JSON.stringify(p);return q.useEffect(()=>{m(JSON.parse(y),{replace:t,state:i,relative:s})},[m,y,s,t,i]),null}function Zi(r){ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xm({basename:r="/",children:t=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){ue(!to(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Qa(i));let{pathname:p="/",search:y="",hash:C="",state:A=null,key:S="default"}=i,N=q.useMemo(()=>{let k=tr(p,f);return k==null?null:{location:{pathname:k,search:y,hash:C,state:A,key:S},navigationType:s}},[f,p,y,C,A,S,s]);return Qn(N!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${C}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:q.createElement(ti.Provider,{value:m},q.createElement(Nl.Provider,{children:t,value:N}))}function Im({children:r,location:t}){return pm(R4(r),t)}function R4(r,t=[]){let i=[];return q.Children.forEach(r,(s,l)=>{if(!q.isValidElement(s))return;let c=[...t,l];if(s.type===q.Fragment){i.push.apply(i,R4(s.props.children,c));return}ue(s.type===Zi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=R4(s.props.children,c)),i.push(f)}),i}var pc="get",gc="application/x-www-form-urlencoded";function qc(r){return r!=null&&typeof r.tagName=="string"}function Mm(r){return qc(r)&&r.tagName.toLowerCase()==="button"}function Nm(r){return qc(r)&&r.tagName.toLowerCase()==="form"}function Vm(r){return qc(r)&&r.tagName.toLowerCase()==="input"}function Om(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function km(r,t){return r.button===0&&(!t||t==="_self")&&!Om(r)}var uc=null;function Lm(){if(uc===null)try{new FormData(document.createElement("form"),0),uc=!1}catch{uc=!0}return uc}var Um=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function m4(r){return r!=null&&!Um.has(r)?(Qn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gc}"`),null):r}function zm(r,t){let i,s,l,c,f;if(Nm(r)){let m=r.getAttribute("action");s=m?tr(m,t):null,i=r.getAttribute("method")||pc,l=m4(r.getAttribute("enctype"))||gc,c=new FormData(r)}else if(Mm(r)||Vm(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?tr(p,t):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||pc,l=m4(r.getAttribute("formenctype"))||m4(m.getAttribute("enctype"))||gc,c=new FormData(m,r),!Lm()){let{name:y,type:C,value:A}=r;if(C==="image"){let S=y?`${y}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else y&&c.append(y,A)}}else{if(qc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pc,s=null,l=gc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}function n2(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Pm(r,t){if(r.id in t)return t[r.id];try{let i=await import(r.module);return t[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jm(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Bm(r,t,i){let s=await Promise.all(r.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await Pm(c,i);return f.links?f.links():[]}return[]}));return Gm(s.flat(1).filter(jm).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function s6(r,t,i,s,l,c){let f=(p,y)=>i[y]?p.route.id!==i[y].route.id:!0,m=(p,y)=>{var C;return i[y].pathname!==p.pathname||((C=i[y].route.path)==null?void 0:C.endsWith("*"))&&i[y].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,y)=>f(p,y)||m(p,y)):c==="data"?t.filter((p,y)=>{var A;let C=s.routes[p.route.id];if(!C||!C.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((A=i[0])==null?void 0:A.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function qm(r,t,{includeHydrateFallback:i}={}){return Hm(r.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function Hm(r){return[...new Set(r)]}function Fm(r){let t={},i=Object.keys(r).sort();for(let s of i)t[s]=r[s];return t}function Gm(r,t){let i=new Set;return new Set(t),r.reduce((s,l)=>{let c=JSON.stringify(Fm(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Qm(r,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":t&&tr(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function kf(){let r=q.useContext(Js);return n2(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Km(){let r=q.useContext(Bc);return n2(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var i2=q.createContext(void 0);i2.displayName="FrameworkContext";function Lf(){let r=q.useContext(i2);return n2(r,"You must render this element inside a <HydratedRouter> element"),r}function Ym(r,t){let i=q.useContext(i2),[s,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:C,onTouchStart:A}=t,S=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let K=F=>{F.forEach(X=>{f(X.isIntersecting)})},z=new IntersectionObserver(K,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[r]),q.useEffect(()=>{if(s){let K=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(K)}}},[s]);let N=()=>{l(!0)},k=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,S,{}]:[c,S,{onFocus:ml(m,N),onBlur:ml(p,k),onMouseEnter:ml(y,N),onMouseLeave:ml(C,k),onTouchStart:ml(A,N)}]:[!1,S,{}]}function ml(r,t){return i=>{r&&r(i),i.defaultPrevented||t(i)}}function $m({page:r,...t}){let{router:i}=kf(),s=q.useMemo(()=>bf(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?q.createElement(Zm,{page:r,matches:s,...t}):null}function Xm(r){let{manifest:t,routeModules:i}=Lf(),[s,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return Bm(r,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,t,i]),s}function Zm({page:r,matches:t,...i}){let s=na(),{manifest:l,routeModules:c}=Lf(),{basename:f}=kf(),{loaderData:m,matches:p}=Km(),y=q.useMemo(()=>s6(r,t,p,l,s,"data"),[r,t,p,l,s]),C=q.useMemo(()=>s6(r,t,p,l,s,"assets"),[r,t,p,l,s]),A=q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let k=new Set,K=!1;if(t.forEach(F=>{var J;let X=l.routes[F.route.id];!X||!X.hasLoader||(!y.some(ut=>ut.route.id===F.route.id)&&F.route.id in m&&((J=c[F.route.id])!=null&&J.shouldRevalidate)||X.hasClientLoader?K=!0:k.add(F.route.id))}),k.size===0)return[];let z=Qm(r,f);return K&&k.size>0&&z.searchParams.set("_routes",t.filter(F=>k.has(F.route.id)).map(F=>F.route.id).join(",")),[z.pathname+z.search]},[f,m,s,l,y,t,r,c]),S=q.useMemo(()=>qm(C,l),[C,l]),N=Xm(C);return q.createElement(q.Fragment,null,A.map(k=>q.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...i})),S.map(k=>q.createElement("link",{key:k,rel:"modulepreload",href:k,...i})),N.map(({key:k,link:K})=>q.createElement("link",{key:k,...K})))}function Wm(...r){return t=>{r.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Uf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uf&&(window.__reactRouterVersion="7.3.0")}catch{}function Jm({basename:r,children:t,window:i}){let s=q.useRef();s.current==null&&(s.current=Bd({window:i,v5Compat:!0}));let l=s.current,[c,f]=q.useState({action:l.action,location:l.location}),m=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>l.listen(m),[l,m]),q.createElement(xm,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:l})}var zf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qr=q.forwardRef(function({onClick:t,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:m,target:p,to:y,preventScrollReset:C,viewTransition:A,...S},N){let{basename:k}=q.useContext(ti),K=typeof y=="string"&&zf.test(y),z,F=!1;if(typeof y=="string"&&K&&(z=y,Uf))try{let w=new URL(window.location.href),I=y.startsWith("//")?new URL(w.protocol+y):new URL(y),V=tr(I.pathname,k);I.origin===w.origin&&V!=null?y=V+I.search+I.hash:F=!0}catch{Qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=dm(y,{relative:l}),[J,ut,st]=Ym(s,S),dt=ip(y,{replace:f,state:m,target:p,preventScrollReset:C,relative:l,viewTransition:A});function M(w){t&&t(w),w.defaultPrevented||dt(w)}let b=q.createElement("a",{...S,...st,href:z||X,onClick:F||c?t:M,ref:Wm(N,ut),target:p,"data-discover":!K&&i==="render"?"true":void 0});return J&&!K?q.createElement(q.Fragment,null,b,q.createElement($m,{page:X})):b});qr.displayName="Link";var tp=q.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:m,children:p,...y},C){let A=Vl(f,{relative:y.relative}),S=na(),N=q.useContext(Bc),{navigator:k,basename:K}=q.useContext(ti),z=N!=null&&lp(A)&&m===!0,F=k.encodeLocation?k.encodeLocation(A).pathname:A.pathname,X=S.pathname,J=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;i||(X=X.toLowerCase(),J=J?J.toLowerCase():null,F=F.toLowerCase()),J&&K&&(J=tr(J,K)||J);const ut=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let st=X===F||!l&&X.startsWith(F)&&X.charAt(ut)==="/",dt=J!=null&&(J===F||!l&&J.startsWith(F)&&J.charAt(F.length)==="/"),M={isActive:st,isPending:dt,isTransitioning:z},b=st?t:void 0,w;typeof s=="function"?w=s(M):w=[s,st?"active":null,dt?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(M):c;return q.createElement(qr,{...y,"aria-current":b,className:w,ref:C,style:I,to:f,viewTransition:m},typeof p=="function"?p(M):p)});tp.displayName="NavLink";var ep=q.forwardRef(({discover:r="render",fetcherKey:t,navigate:i,reloadDocument:s,replace:l,state:c,method:f=pc,action:m,onSubmit:p,relative:y,preventScrollReset:C,viewTransition:A,...S},N)=>{let k=sp(),K=op(m,{relative:y}),z=f.toLowerCase()==="get"?"get":"post",F=typeof m=="string"&&zf.test(m),X=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let ut=J.nativeEvent.submitter,st=(ut==null?void 0:ut.getAttribute("formmethod"))||f;k(ut||J.currentTarget,{fetcherKey:t,method:st,navigate:i,replace:l,state:c,relative:y,preventScrollReset:C,viewTransition:A})};return q.createElement("form",{ref:N,method:z,action:K,onSubmit:s?p:X,...S,"data-discover":!F&&r==="render"?"true":void 0})});ep.displayName="Form";function np(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pf(r){let t=q.useContext(Js);return ue(t,np(r)),t}function ip(r,{target:t,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let m=eo(),p=na(),y=Vl(r,{relative:c});return q.useCallback(C=>{if(km(C,t)){C.preventDefault();let A=i!==void 0?i:Sl(p)===Sl(y);m(r,{replace:A,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[p,m,y,i,s,t,r,l,c,f])}var rp=0,ap=()=>`__${String(++rp)}__`;function sp(){let{router:r}=Pf("useSubmit"),{basename:t}=q.useContext(ti),i=Sm();return q.useCallback(async(s,l={})=>{let{action:c,method:f,encType:m,formData:p,body:y}=zm(s,t);if(l.navigate===!1){let C=l.fetcherKey||ap();await r.fetch(C,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||f,formEncType:l.encType||m,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:y,formMethod:l.method||f,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,t,i])}function op(r,{relative:t}={}){let{basename:i}=q.useContext(ti),s=q.useContext(wi);ue(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Vl(r||".",{relative:t})},f=na();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(C=>C==="")){m.delete("index"),p.filter(A=>A).forEach(A=>m.append("index",A));let C=m.toString();c.search=C?`?${C}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Wi([i,c.pathname])),Sl(c)}function lp(r,t={}){let i=q.useContext(If);ue(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Pf("useViewTransitionState"),l=Vl(r,{relative:t.relative});if(!i.isTransitioning)return!1;let c=tr(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=tr(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Sc(l.pathname,f)!=null||Sc(l.pathname,c)!=null}new TextEncoder;const jf=q.createContext(void 0),Ka=()=>{const r=q.useContext(jf);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},up=({children:r})=>{const[t,i]=q.useState(null),[s,l]=q.useState(!1);q.useEffect(()=>{const p=localStorage.getItem("currentUser"),y=localStorage.getItem("isAdmin");console.log("AuthContext: Loading saved user from localStorage:",p),p&&(i(p),l(y==="true"),console.log("AuthContext: User restored:",p,"Admin:",y==="true"))},[]);const m={currentUser:t,isAdmin:s,login:(p,y=!1)=>{console.log("AuthContext: Logging in user:",p,"Admin:",y),i(p),l(y),localStorage.setItem("currentUser",p),localStorage.setItem("isAdmin",y.toString()),console.log("AuthContext: User saved to localStorage:",p)},logout:()=>{console.log("AuthContext: Logging out user"),i(null),l(!1),localStorage.removeItem("currentUser"),localStorage.removeItem("isAdmin")}};return R.jsx(jf.Provider,{value:m,children:r})},Fr=({bgcolor:r="rgb(94, 136, 94, 0)",boxShadow:t=!1})=>{const{currentUser:i,isAdmin:s}=Ka();return R.jsxs("div",{id:"navbar",style:{backgroundColor:r,boxShadow:t?"0 4px 8px -2px #222":"none"},children:[R.jsx("div",{className:"link",id:"homepage",children:R.jsx(qr,{className:"a",to:"/HBWGreentrails/",children:"Home"})}),R.jsx("div",{className:"link",id:"volunteer",children:R.jsx(qr,{className:"a",to:"/volenterpage/",children:"Volunteer!!"})}),R.jsx("div",{className:"link",id:"leaderboard",children:R.jsx(qr,{className:"a",to:"/leaderboard/",children:"Leaderboards"})}),R.jsx("div",{className:"link",id:"santa",children:R.jsx(qr,{className:"a",to:"/santa/",children:"🎅 Santa"})}),s&&R.jsx("div",{className:"link",id:"adddata",children:R.jsx(qr,{className:"a",to:"/adddata/",children:"Add Event"})}),R.jsx("div",{className:"link",id:"Signup",children:R.jsx(qr,{className:"a",to:"/signup/",children:i?`👤 ${i}`:"Sign up"})})]})},cp=""+new URL("groupme-DgGEjEd7.png",import.meta.url).href;function hp(r){const t=[],i=new Date;i.setHours(0,0,0,0);let s=new Date(r);for(s.setHours(0,0,0,0);s<i;)s.setDate(s.getDate()+14);r=s;for(let l=0;l<3;l++){const c=new Date(r);c.setDate(r.getDate()+l*14),t.push({date:c,id:l+1})}return t}function fp({nextMeetingDate:r}){const t=hp(r);return R.jsx("div",{children:t.map(i=>R.jsxs("p",{children:[i.date.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})," ","in Hang's room (510) at lunch!"]},i.id))})}const o6=()=>R.jsxs("div",{style:{backgroundColor:"rgb(17, 69, 59)"},children:[R.jsx(Fr,{bgcolor:"#00000000",boxShadow:!1}),R.jsx("div",{className:"header",children:R.jsx("h1",{className:"first",children:"HBW Green Trails Club"})}),R.jsxs("div",{className:"importantinfo",children:[R.jsxs("div",{className:"groupme",children:[R.jsx("a",{href:"https://groupme.com/join_group/103922254/4v3j7TI7",children:R.jsx("img",{src:cp,alt:"Join our GroupMe!",width:"200px"})}),R.jsx("p",{children:"Click here to join our GroupMe for updates on meetings and events!!"})]}),R.jsxs("div",{className:"nextmeeting",children:[R.jsx("h2",{children:"Upcoming Meetings:"}),R.jsx(fp,{nextMeetingDate:new Date("2025-12-04T12:35:00")})]})]})]}),l6=()=>R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 100 300 500",width:"100%",height:"100%",children:[R.jsx("rect",{x:"96.935",y:"583.508",width:"103.723",height:"89.44",style:{fill:"rgb(92, 60, 36)",stroke:"rgba(0, 0, 0, 0)"}}),R.jsx("path",{d:"M 151.753 331.446 L 296.742 595.399 L 6.763 595.399 L 151.753 331.446 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),R.jsx("path",{d:"M 151.812 229.395 L 261.692 461.009 L 41.931 461.009 L 151.812 229.395 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}}),R.jsx("path",{d:"M 152.135 182.123 L 223.661 334.201 L 80.609 334.201 L 152.135 182.123 Z",style:{fill:"rgb(46, 80, 43)",stroke:"rgba(0, 0, 0, 0)"}})]}),u6=["#FF69B4","#FF1493","#FFB6C1","#FF69B4","#ff6f6f","#d161f7","#8a61ff","#61d7ff","#61ff8a","#ff6161","#ff61d7","#d7ff61"];function dp({children:r,flowers:t=0,grass:i=200,tileSize:s=0}){const l=q.useRef(null),c=q.useRef(null);return q.useEffect(()=>{const f=l.current,m=c.current;if(!f||!m)return;const p=f.getContext("2d");if(!p)return;let y=0,C=0;function A(){const M=m.getBoundingClientRect(),b=window.devicePixelRatio||1;y=Math.max(1,Math.floor(M.width)),C=Math.max(1,Math.floor(M.height)),f.width=Math.max(1,Math.floor(M.width*b)),f.height=Math.max(1,Math.floor(M.height*b)),f.style.width=`${M.width}px`,f.style.height=`${M.height}px`,p.setTransform(b,0,0,b,0,0),st()}function S(M,b,w,I){p.save(),p.translate(M,b);const V=Math.random()*Math.PI*2;p.rotate(V),p.fillStyle=I,p.restore()}function N(M){for(let b=0;b<M;b++){const w=Math.random()*(y+100)-50,I=Math.random()*(C+100)-50,V=Math.min(Math.max(Math.random()*26+4,4),30);S(w,I,V,`rgb(0, ${Math.floor(Math.random()*100+100)}, 0)`)}}function k(M,b,w,I,V,P){p.save(),p.translate(M,b),p.rotate(V),p.beginPath(),p.moveTo(0,0),p.lineTo(-I/2,-w),p.lineTo(I/2,-w),p.closePath(),p.fillStyle=P,p.fill(),p.restore()}function K(M,b,w){for(let I=0;I<w;I++){const V=(Math.random()-.5)*8,P=(Math.random()-.5)*8,D=10+Math.random()*8,Et=2+Math.random()*1.5,Jt=-.2+Math.random()*.4,rt=["#7CB342","#8BC34A","#689F38","#76B041"],vt=rt[Math.floor(Math.random()*rt.length)];k(M+V,b+P,D,Et,Jt,vt)}}function z(M){for(let b=0;b<M;b++){const w=Math.random()*y,I=Math.random()*C,V=Math.floor(3+Math.random()*4);K(w,I,V)}}function F(M,b,w){p.save(),p.translate(M,b),p.fillStyle=u6[Math.floor(Math.random()*u6.length)];const I=5;for(let V=0;V<I;V++){const P=V*(2*Math.PI/I),D=Math.cos(P)*w,Et=Math.sin(P)*w;p.beginPath(),p.arc(D,Et,w/2,0,2*Math.PI),p.fill()}p.beginPath(),p.arc(0,0,w/2,0,2*Math.PI),p.fill(),p.restore()}function X(M){for(let b=0;b<M;b++)F(Math.random()*y,Math.random()*C,4+Math.random()*4)}function J(){p.beginPath(),p.moveTo(y/2+30,5),p.lineTo(y/2-30,5),p.lineTo(y/2,40),p.stroke(),p.closePath(),p.fill()}function ut(M,b){z(b),X(M)}function st(){p.clearRect(0,0,y,C),ut(t,i),J(),N(8)}A();const dt=new ResizeObserver(A);return dt.observe(m),()=>{dt.disconnect()}},[t,i,s]),R.jsxs("div",{ref:c,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[R.jsx("canvas",{ref:l,style:{position:"absolute",left:0,top:0,zIndex:0,pointerEvents:"none"}}),R.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}const mp=()=>R.jsxs("div",{children:[R.jsx("div",{id:"tree1",children:R.jsx(l6,{})}),R.jsx("div",{id:"tree2",children:R.jsx(l6,{})}),R.jsx("footer",{children:R.jsx(dp,{children:R.jsx("div",{id:"road"})})})]}),pp=()=>R.jsx("div",{children:R.jsx("footer",{})}),yc=()=>R.jsx(mp,{}),gp=()=>R.jsx("div",{id:"fullroad"}),Ba=({message:r,shadow:t})=>R.jsx("header",{className:"App-header",children:R.jsx("h1",{id:"GreenTrails",style:{textShadow:t?"2px 2px black":"none",color:"rgb(255, 255, 255, 1)"},children:r})}),yp=()=>{};var c6={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=function(r){const t=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},vp=function(r){const t=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],f=r[i++],m=r[i++],p=((l&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[i++],f=r[i++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|f&63)}}return t.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],f=l+1<r.length,m=f?r[l+1]:0,p=l+2<r.length,y=p?r[l+2]:0,C=c>>2,A=(c&3)<<4|m>>4;let S=(m&15)<<2|y>>6,N=y&63;p||(N=64,f||(S=64)),s.push(i[C],i[A],i[S],i[N])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Bf(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):vp(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],m=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const A=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||m==null||y==null||A==null)throw new _p;const S=c<<2|m>>4;if(s.push(S),y!==64){const N=m<<4&240|y>>2;if(s.push(N),A!==64){const k=y<<6&192|A;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cp=function(r){const t=Bf(r);return qf.encodeByteArray(t,!0)},wc=function(r){return Cp(r).replace(/\./g,"")},Ep=function(r){try{return qf.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Tp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ap=()=>Tp().__FIREBASE_DEFAULTS__,Sp=()=>{if(typeof process>"u"||typeof c6>"u")return;const r=c6.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Ep(r[1]);return t&&JSON.parse(t)},r2=()=>{try{return yp()||Ap()||Sp()||wp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},bp=r=>{var t,i;return(i=(t=r2())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},Rp=r=>{const t=bp(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),s]:[t.substring(0,i),s]},Hf=()=>{var r;return(r=r2())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,s))}}}/**
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
 */function xp(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[wc(JSON.stringify(i)),wc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mp(){var r;const t=(r=r2())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Np(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Vp(){return!Mp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ff(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((r,t)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;t(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}function Op(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="FirebaseError";class ia extends Error{constructor(t,i,s){super(i),this.code=t,this.customData=s,this.name=kp,Object.setPrototypeOf(this,ia.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(t,i,s){this.service=t,this.serviceName=i,this.errors=s}create(t,...i){const s=i[0]||{},l=`${this.service}/${t}`,c=this.errors[t],f=c?Lp(c,s):"Error",m=`${this.serviceName}: ${f} (${l}).`;return new ia(l,m,s)}}function Lp(r,t){return r.replace(Up,(i,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const Up=/\{\$([^}]+)}/g;function Fs(r,t){if(r===t)return!0;const i=Object.keys(r),s=Object.keys(t);for(const l of i){if(!s.includes(l))return!1;const c=r[l],f=t[l];if(h6(c)&&h6(f)){if(!Fs(c,f))return!1}else if(c!==f)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function h6(r){return r!==null&&typeof r=="object"}/**
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
 */const zp=1e3,Pp=2,jp=4*60*60*1e3,Bp=.5;function f6(r,t=zp,i=Pp){const s=t*Math.pow(i,r),l=Math.round(Bp*s*(Math.random()-.5)*2);return Math.min(jp,s+l)}/**
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
 */function Ti(r){return r&&r._delegate?r._delegate:r}class er{constructor(t,i,s){this.name=t,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const za="[DEFAULT]";/**
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
 */class qp{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const s=new Dp;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fp(t))try{this.getOrInitializeService({instanceIdentifier:za})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=za){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=za){return this.instances.has(t)}getOptions(t=za){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&f.resolve(l)}return l}onInit(t,i){var s;const l=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(t),this.onInitCallbacks.set(l,c);const f=this.instances.get(l);return f&&t(f,l),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hp(t),options:i}),this.instances.set(t,s),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=za){return this.component?this.component.multipleInstances?t:za:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hp(r){return r===za?void 0:r}function Fp(r){return r.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new qp(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ft||(Ft={}));const Qp={debug:Ft.DEBUG,verbose:Ft.VERBOSE,info:Ft.INFO,warn:Ft.WARN,error:Ft.ERROR,silent:Ft.SILENT},Kp=Ft.INFO,Yp={[Ft.DEBUG]:"log",[Ft.VERBOSE]:"log",[Ft.INFO]:"info",[Ft.WARN]:"warn",[Ft.ERROR]:"error"},$p=(r,t,...i)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Yp[t];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class a2{constructor(t){this.name=t,this._logLevel=Kp,this._logHandler=$p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ft.DEBUG,...t),this._logHandler(this,Ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ft.VERBOSE,...t),this._logHandler(this,Ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ft.INFO,...t),this._logHandler(this,Ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ft.WARN,...t),this._logHandler(this,Ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ft.ERROR,...t),this._logHandler(this,Ft.ERROR,...t)}}const Xp=(r,t)=>t.some(i=>r instanceof i);let d6,m6;function Zp(){return d6||(d6=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wp(){return m6||(m6=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qf=new WeakMap,D4=new WeakMap,Kf=new WeakMap,p4=new WeakMap,s2=new WeakMap;function Jp(r){const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(Gr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",f)});return t.then(i=>{i instanceof IDBCursor&&Qf.set(i,r)}).catch(()=>{}),s2.set(t,r),t}function tg(r){if(D4.has(r))return;const t=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});D4.set(r,t)}let x4={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return D4.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Kf.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Gr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function eg(r){x4=r(x4)}function ng(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const s=r.call(g4(this),t,...i);return Kf.set(s,t.sort?t.sort():[t]),Gr(s)}:Wp().includes(r)?function(...t){return r.apply(g4(this),t),Gr(Qf.get(this))}:function(...t){return Gr(r.apply(g4(this),t))}}function ig(r){return typeof r=="function"?ng(r):(r instanceof IDBTransaction&&tg(r),Xp(r,Zp())?new Proxy(r,x4):r)}function Gr(r){if(r instanceof IDBRequest)return Jp(r);if(p4.has(r))return p4.get(r);const t=ig(r);return t!==r&&(p4.set(r,t),s2.set(t,r)),t}const g4=r=>s2.get(r);function Yf(r,t,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const f=indexedDB.open(r,t),m=Gr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Gr(f.result),p.oldVersion,p.newVersion,Gr(f.transaction),p)}),i&&f.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),l&&p.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const rg=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],y4=new Map;function p6(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(y4.get(t))return y4.get(t);const i=t.replace(/FromIndex$/,""),s=t!==i,l=ag.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||rg.includes(i)))return;const c=async function(f,...m){const p=this.transaction(f,l?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),l&&p.done]))[0]};return y4.set(t,c),c}eg(r=>({...r,get:(t,i,s)=>p6(t,i)||r.get(t,i,s),has:(t,i)=>!!p6(t,i)||r.has(t,i)}));/**
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
 */class sg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(og(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function og(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const I4="@firebase/app",g6="0.11.2";/**
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
 */const nr=new a2("@firebase/app"),lg="@firebase/app-compat",ug="@firebase/analytics-compat",cg="@firebase/analytics",hg="@firebase/app-check-compat",fg="@firebase/app-check",dg="@firebase/auth",mg="@firebase/auth-compat",pg="@firebase/database",gg="@firebase/data-connect",yg="@firebase/database-compat",vg="@firebase/functions",_g="@firebase/functions-compat",Cg="@firebase/installations",Eg="@firebase/installations-compat",Tg="@firebase/messaging",Ag="@firebase/messaging-compat",Sg="@firebase/performance",wg="@firebase/performance-compat",bg="@firebase/remote-config",Rg="@firebase/remote-config-compat",Dg="@firebase/storage",xg="@firebase/storage-compat",Ig="@firebase/firestore",Mg="@firebase/vertexai",Ng="@firebase/firestore-compat",Vg="firebase",Og="11.4.0";/**
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
 */const M4="[DEFAULT]",kg={[I4]:"fire-core",[lg]:"fire-core-compat",[cg]:"fire-analytics",[ug]:"fire-analytics-compat",[fg]:"fire-app-check",[hg]:"fire-app-check-compat",[dg]:"fire-auth",[mg]:"fire-auth-compat",[pg]:"fire-rtdb",[gg]:"fire-data-connect",[yg]:"fire-rtdb-compat",[vg]:"fire-fn",[_g]:"fire-fn-compat",[Cg]:"fire-iid",[Eg]:"fire-iid-compat",[Tg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Sg]:"fire-perf",[wg]:"fire-perf-compat",[bg]:"fire-rc",[Rg]:"fire-rc-compat",[Dg]:"fire-gcs",[xg]:"fire-gcs-compat",[Ig]:"fire-fst",[Ng]:"fire-fst-compat",[Mg]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const bc=new Map,Lg=new Map,N4=new Map;function y6(r,t){try{r.container.addComponent(t)}catch(i){nr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function $r(r){const t=r.name;if(N4.has(t))return nr.debug(`There were multiple attempts to register component ${t}.`),!1;N4.set(t,r);for(const i of bc.values())y6(i,r);for(const i of Lg.values())y6(i,r);return!0}function Ol(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Ug(r){return r==null?!1:r.settings!==void 0}/**
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
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Hc("app","Firebase",zg);/**
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
 */class Pg{constructor(t,i,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const jg=Og;function $f(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:M4,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw Qr.create("bad-app-name",{appName:String(l)});if(i||(i=Hf()),!i)throw Qr.create("no-options");const c=bc.get(l);if(c){if(Fs(i,c.options)&&Fs(s,c.config))return c;throw Qr.create("duplicate-app",{appName:l})}const f=new Gp(l);for(const p of N4.values())f.addComponent(p);const m=new Pg(i,s,f);return bc.set(l,m),m}function Xf(r=M4){const t=bc.get(r);if(!t&&r===M4&&Hf())return $f();if(!t)throw Qr.create("no-app",{appName:r});return t}function vi(r,t,i){var s;let l=(s=kg[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const c=l.match(/\s|\//),f=t.match(/\s|\//);if(c||f){const m=[`Unable to register library "${l}" with version "${t}":`];c&&m.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nr.warn(m.join(" "));return}$r(new er(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const Bg="firebase-heartbeat-database",qg=1,wl="firebase-heartbeat-store";let v4=null;function Zf(){return v4||(v4=Yf(Bg,qg,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(wl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Qr.create("idb-open",{originalErrorMessage:r.message})})),v4}async function Hg(r){try{const i=(await Zf()).transaction(wl),s=await i.objectStore(wl).get(Wf(r));return await i.done,s}catch(t){if(t instanceof ia)nr.warn(t.message);else{const i=Qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});nr.warn(i.message)}}}async function v6(r,t){try{const s=(await Zf()).transaction(wl,"readwrite");await s.objectStore(wl).put(t,Wf(r)),await s.done}catch(i){if(i instanceof ia)nr.warn(i.message);else{const s=Qr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});nr.warn(s.message)}}}function Wf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Fg=1024,Gg=30;class Qg{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Yg(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=_6();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats.length>Gg){const f=$g(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){nr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=_6(),{heartbeatsToSend:s,unsentEntries:l}=Kg(this._heartbeatsCache.heartbeats),c=wc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return nr.warn(i),""}}}function _6(){return new Date().toISOString().substring(0,10)}function Kg(r,t=Fg){const i=[];let s=r.slice();for(const l of r){const c=i.find(f=>f.agent===l.agent);if(c){if(c.dates.push(l.date),C6(i)>t){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),C6(i)>t){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Yg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ff()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Hg(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return v6(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return v6(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function C6(r){return wc(JSON.stringify({version:2,heartbeats:r})).length}function $g(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,t=s);return t}/**
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
 */function Xg(r){$r(new er("platform-logger",t=>new sg(t),"PRIVATE")),$r(new er("heartbeat",t=>new Qg(t),"PRIVATE")),vi(I4,g6,r),vi(I4,g6,"esm2017"),vi("fire-js","")}Xg("");var Zg="firebase",Wg="11.4.0";/**
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
 */vi(Zg,Wg,"app");const Jf="@firebase/installations",o2="0.6.13";/**
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
 */const iy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qa=new Hc(ey,ny,iy);function i9(r){return r instanceof ia&&r.code.includes("request-failed")}/**
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
 */function r9({projectId:r}){return`${Jg}/projects/${r}/installations`}function a9(r){return{token:r.token,requestStatus:2,expiresIn:ay(r.expiresIn),creationTime:Date.now()}}async function s9(r,t){const s=(await t.json()).error;return qa.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function o9({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ry(r,{refreshToken:t}){const i=o9(r);return i.append("Authorization",sy(t)),i}async function l9(r){const t=await r();return t.status>=500&&t.status<600?r():t}function ay(r){return Number(r.replace("s","000"))}function sy(r){return`${n9} ${r}`}/**
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
 */async function oy({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const s=r9(r),l=o9(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:i,authVersion:n9,appId:r.appId,sdkVersion:e9},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await l9(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:a9(y.authToken)}}else throw await s9("Create Installation",p)}/**
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
 */function Fc(r){return`${r.appName}!${r.appId}`}/**
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
 */const c9=new Map;function h9(r,t){const i=Fc(r);f9(i,t),fy(i,t)}function f9(r,t){const i=c9.get(r);if(i)for(const s of i)s(t)}function fy(r,t){const i=dy();i&&i.postMessage({key:r,fid:t}),my()}let Pa=null;function dy(){return!Pa&&"BroadcastChannel"in self&&(Pa=new BroadcastChannel("[Firebase] FID Change"),Pa.onmessage=r=>{f9(r.data.key,r.data.fid)}),Pa}function my(){c9.size===0&&Pa&&(Pa.close(),Pa=null)}/**
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
 */const py="firebase-installations-database",gy=1,Ha="firebase-installations-store";let _4=null;function l2(){return _4||(_4=Yf(py,gy,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ha)}}})),_4}async function Rc(r,t){const i=Fc(r),l=(await l2()).transaction(Ha,"readwrite"),c=l.objectStore(Ha),f=await c.get(i);return await c.put(t,i),await l.done,(!f||f.fid!==t.fid)&&h9(r,t.fid),t}async function d9(r){const t=Fc(r),s=(await l2()).transaction(Ha,"readwrite");await s.objectStore(Ha).delete(t),await s.done}async function Gc(r,t){const i=Fc(r),l=(await l2()).transaction(Ha,"readwrite"),c=l.objectStore(Ha),f=await c.get(i),m=t(f);return m===void 0?await c.delete(i):await c.put(m,i),await l.done,m&&(!f||f.fid!==m.fid)&&h9(r,m.fid),m}/**
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
 */async function u2(r){let t;const i=await Gc(r.appConfig,s=>{const l=yy(s),c=vy(r,l);return t=c.registrationPromise,c.installationEntry});return i.fid===V4?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function yy(r){const t=r||{fid:cy(),registrationStatus:0};return m9(t)}function vy(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(qa.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=_y(r,i);return{installationEntry:i,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Cy(r)}:{installationEntry:t}}async function _y(r,t){try{const i=await oy(r,t);return Rc(r.appConfig,i)}catch(i){throw i9(i)&&i.customData.serverCode===409?await d9(r.appConfig):await Rc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function Cy(r){let t=await E6(r.appConfig);for(;t.registrationStatus===1;)await u9(100),t=await E6(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await u2(r);return s||i}return t}function E6(r){return Gc(r,t=>{if(!t)throw qa.create("installation-not-found");return m9(t)})}function m9(r){return Ey(r)?{fid:r.fid,registrationStatus:0}:r}function Ey(r){return r.registrationStatus===1&&r.registrationTime+t9<Date.now()}/**
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
 */async function Ty({appConfig:r,heartbeatServiceProvider:t},i){const s=Ay(r,i),l=ry(r,i),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:e9,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(f)},p=await l9(()=>fetch(s,m));if(p.ok){const y=await p.json();return a9(y)}else throw await s9("Generate Auth Token",p)}function Ay(r,{fid:t}){return`${r9(r)}/${t}/authTokens:generate`}/**
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
 */async function c2(r,t=!1){let i;const s=await Gc(r.appConfig,c=>{if(!p9(c))throw qa.create("not-registered");const f=c.authToken;if(!t&&by(f))return c;if(f.requestStatus===1)return i=Sy(r,t),c;{if(!navigator.onLine)throw qa.create("app-offline");const m=Dy(c);return i=wy(r,m),m}});return i?await i:s.authToken}async function Sy(r,t){let i=await T6(r.appConfig);for(;i.authToken.requestStatus===1;)await u9(100),i=await T6(r.appConfig);const s=i.authToken;return s.requestStatus===0?c2(r,t):s}function T6(r){return Gc(r,t=>{if(!p9(t))throw qa.create("not-registered");const i=t.authToken;return xy(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function wy(r,t){try{const i=await Ty(r,t),s=Object.assign(Object.assign({},t),{authToken:i});return await Rc(r.appConfig,s),i}catch(i){if(i9(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await d9(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rc(r.appConfig,s)}throw i}}function p9(r){return r!==void 0&&r.registrationStatus===2}function by(r){return r.requestStatus===2&&!Ry(r)}function Ry(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+ty}function Dy(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function xy(r){return r.requestStatus===1&&r.requestTime+t9<Date.now()}/**
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
 */async function Iy(r){const t=r,{installationEntry:i,registrationPromise:s}=await u2(t);return s?s.catch(console.error):c2(t).catch(console.error),i.fid}/**
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
 */async function My(r,t=!1){const i=r;return await Ny(i),(await c2(i,t)).token}async function Ny(r){const{registrationPromise:t}=await u2(r);t&&await t}/**
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
 */function Vy(r){if(!r||!r.options)throw C4("App Configuration");if(!r.name)throw C4("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw C4(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function C4(r){return qa.create("missing-app-config-values",{valueName:r})}/**
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
 */const g9="installations",Oy="installations-internal",ky=r=>{const t=r.getProvider("app").getImmediate(),i=Vy(t),s=Ol(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ly=r=>{const t=r.getProvider("app").getImmediate(),i=Ol(t,g9).getImmediate();return{getId:()=>Iy(i),getToken:l=>My(i,l)}};function Uy(){$r(new er(g9,ky,"PUBLIC")),$r(new er(Oy,Ly,"PRIVATE"))}Uy();vi(Jf,o2);vi(Jf,o2,"esm2017");/**
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
 */const yn=new a2("@firebase/analytics");/**
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
 */const qy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dn=new Hc("analytics","Analytics",qy);/**
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
 */function Hy(r){if(!r.startsWith(h2)){const t=Dn.create("invalid-gtag-resource",{gtagURL:r});return yn.warn(t.message),""}return r}function y9(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function Fy(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function Gy(r,t){const i=Fy("firebase-js-sdk-policy",{createScriptURL:Hy}),s=document.createElement("script"),l=`${h2}?l=${r}&id=${t}`;s.src=i?i==null?void 0:i.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function Qy(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function Ky(r,t,i,s,l,c){const f=s[l];try{if(f)await t[f];else{const p=(await y9(i)).find(y=>y.measurementId===l);p&&await t[p.appId]}}catch(m){yn.error(m)}r("config",l,c)}async function Yy(r,t,i,s,l){try{let c=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const m=await y9(i);for(const p of f){const y=m.find(A=>A.measurementId===p),C=y&&t[y.appId];if(C)c.push(C);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){yn.error(c)}}function $y(r,t,i,s){async function l(c,...f){try{if(c==="event"){const[m,p]=f;await Yy(r,t,i,m,p)}else if(c==="config"){const[m,p]=f;await Ky(r,t,i,s,m,p)}else if(c==="consent"){const[m,p]=f;r("consent",m,p)}else if(c==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(c==="set"){const[m]=f;r("set",m)}else r(c,...f)}catch(m){yn.error(m)}}return l}function Xy(r,t,i,s,l){let c=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=$y(c,r,t,i),{gtagCore:c,wrappedGtag:window[l]}}function Zy(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(h2)&&i.src.includes(r))return i;return null}/**
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
 */const Wy=30,Jy=1e3;class tv{constructor(t={},i=Jy){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const v9=new tv;function ev(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function nv(r){var t;const{appId:i,apiKey:s}=r,l={method:"GET",headers:ev(s)},c=By.replace("{app-id}",i),f=await fetch(c,l);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw Dn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function iv(r,t=v9,i){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw Dn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw Dn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new sv;return setTimeout(async()=>{m.abort()},jy),_9({appId:s,apiKey:l,measurementId:c},f,m,t)}async function _9(r,{throttleEndTimeMillis:t,backoffCount:i},s,l=v9){var c;const{appId:f,measurementId:m}=r;try{await rv(s,t)}catch(p){if(m)return yn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await nv(r);return l.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!av(y)){if(l.deleteThrottleMetadata(f),m)return yn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const C=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?f6(i,l.intervalMillis,Wy):f6(i,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+C,backoffCount:i+1};return l.setThrottleMetadata(f,A),yn.debug(`Calling attemptFetch again in ${C} millis`),_9(r,A,s,l)}}function rv(r,t){return new Promise((i,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(c),s(Dn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function av(r){if(!(r instanceof ia)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class sv{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ov(r,t,i,s,l){if(l&&l.global){r("event",i,s);return}else{const c=await t,f=Object.assign(Object.assign({},s),{send_to:c});r("event",i,f)}}/**
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
 */async function lv(){if(Ff())try{await Gf()}catch(r){return yn.warn(Dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return yn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uv(r,t,i,s,l,c,f){var m;const p=iv(r);p.then(N=>{i[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&yn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>yn.error(N)),t.push(p);const y=lv().then(N=>{if(N)return s.getId()}),[C,A]=await Promise.all([p,y]);Zy(c)||Gy(c,C.measurementId),l("js",new Date);const S=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return S[Py]="firebase",S.update=!0,A!=null&&(S[zy]=A),l("config",C.measurementId,S),C.measurementId}/**
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
 */class cv{constructor(t){this.app=t}_delete(){return delete _l[this.app.options.appId],Promise.resolve()}}let _l={},A6=[];const S6={};let E4="dataLayer",hv="gtag",w6,C9,b6=!1;function fv(){const r=[];if(Np()&&r.push("This is a browser extension environment."),Op()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),i=Dn.create("invalid-analytics-context",{errorInfo:t});yn.warn(i.message)}}function dv(r,t,i){fv();const s=r.options.appId;if(!s)throw Dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)yn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dn.create("no-api-key");if(_l[s]!=null)throw Dn.create("already-exists",{id:s});if(!b6){Qy(E4);const{wrappedGtag:c,gtagCore:f}=Xy(_l,A6,S6,E4,hv);C9=c,w6=f,b6=!0}return _l[s]=uv(r,A6,S6,t,w6,E4,i),new cv(r)}function mv(r=Xf()){r=Ti(r);const t=Ol(r,Dc);return t.isInitialized()?t.getImmediate():pv(r)}function pv(r,t={}){const i=Ol(r,Dc);if(i.isInitialized()){const l=i.getImmediate();if(Fs(t,i.getOptions()))return l;throw Dn.create("already-initialized")}return i.initialize({options:t})}function gv(r,t,i,s){r=Ti(r),ov(C9,_l[r.app.options.appId],t,i,s).catch(l=>yn.error(l))}const R6="@firebase/analytics",D6="0.10.12";function yv(){$r(new er(Dc,(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return dv(s,l,i)},"PUBLIC")),$r(new er("analytics-internal",r,"PRIVATE")),vi(R6,D6),vi(R6,D6,"esm2017");function r(t){try{const i=t.getProvider(Dc).getImmediate();return{logEvent:(s,l,c)=>gv(i,s,l,c)}}catch(i){throw Dn.create("interop-component-reg-failed",{reason:i})}}}yv();var x6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,E9;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function w(){}w.prototype=b.prototype,M.D=b.prototype,M.prototype=new w,M.prototype.constructor=M,M.C=function(I,V,P){for(var D=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)D[Et-2]=arguments[Et];return b.prototype[V].apply(I,D)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(M,b,w){w||(w=0);var I=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)I[V]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(V=0;16>V;++V)I[V]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=M.g[0],w=M.g[1],V=M.g[2];var P=M.g[3],D=b+(P^w&(V^P))+I[0]+3614090360&4294967295;b=w+(D<<7&4294967295|D>>>25),D=P+(V^b&(w^V))+I[1]+3905402710&4294967295,P=b+(D<<12&4294967295|D>>>20),D=V+(w^P&(b^w))+I[2]+606105819&4294967295,V=P+(D<<17&4294967295|D>>>15),D=w+(b^V&(P^b))+I[3]+3250441966&4294967295,w=V+(D<<22&4294967295|D>>>10),D=b+(P^w&(V^P))+I[4]+4118548399&4294967295,b=w+(D<<7&4294967295|D>>>25),D=P+(V^b&(w^V))+I[5]+1200080426&4294967295,P=b+(D<<12&4294967295|D>>>20),D=V+(w^P&(b^w))+I[6]+2821735955&4294967295,V=P+(D<<17&4294967295|D>>>15),D=w+(b^V&(P^b))+I[7]+4249261313&4294967295,w=V+(D<<22&4294967295|D>>>10),D=b+(P^w&(V^P))+I[8]+1770035416&4294967295,b=w+(D<<7&4294967295|D>>>25),D=P+(V^b&(w^V))+I[9]+2336552879&4294967295,P=b+(D<<12&4294967295|D>>>20),D=V+(w^P&(b^w))+I[10]+4294925233&4294967295,V=P+(D<<17&4294967295|D>>>15),D=w+(b^V&(P^b))+I[11]+2304563134&4294967295,w=V+(D<<22&4294967295|D>>>10),D=b+(P^w&(V^P))+I[12]+1804603682&4294967295,b=w+(D<<7&4294967295|D>>>25),D=P+(V^b&(w^V))+I[13]+4254626195&4294967295,P=b+(D<<12&4294967295|D>>>20),D=V+(w^P&(b^w))+I[14]+2792965006&4294967295,V=P+(D<<17&4294967295|D>>>15),D=w+(b^V&(P^b))+I[15]+1236535329&4294967295,w=V+(D<<22&4294967295|D>>>10),D=b+(V^P&(w^V))+I[1]+4129170786&4294967295,b=w+(D<<5&4294967295|D>>>27),D=P+(w^V&(b^w))+I[6]+3225465664&4294967295,P=b+(D<<9&4294967295|D>>>23),D=V+(b^w&(P^b))+I[11]+643717713&4294967295,V=P+(D<<14&4294967295|D>>>18),D=w+(P^b&(V^P))+I[0]+3921069994&4294967295,w=V+(D<<20&4294967295|D>>>12),D=b+(V^P&(w^V))+I[5]+3593408605&4294967295,b=w+(D<<5&4294967295|D>>>27),D=P+(w^V&(b^w))+I[10]+38016083&4294967295,P=b+(D<<9&4294967295|D>>>23),D=V+(b^w&(P^b))+I[15]+3634488961&4294967295,V=P+(D<<14&4294967295|D>>>18),D=w+(P^b&(V^P))+I[4]+3889429448&4294967295,w=V+(D<<20&4294967295|D>>>12),D=b+(V^P&(w^V))+I[9]+568446438&4294967295,b=w+(D<<5&4294967295|D>>>27),D=P+(w^V&(b^w))+I[14]+3275163606&4294967295,P=b+(D<<9&4294967295|D>>>23),D=V+(b^w&(P^b))+I[3]+4107603335&4294967295,V=P+(D<<14&4294967295|D>>>18),D=w+(P^b&(V^P))+I[8]+1163531501&4294967295,w=V+(D<<20&4294967295|D>>>12),D=b+(V^P&(w^V))+I[13]+2850285829&4294967295,b=w+(D<<5&4294967295|D>>>27),D=P+(w^V&(b^w))+I[2]+4243563512&4294967295,P=b+(D<<9&4294967295|D>>>23),D=V+(b^w&(P^b))+I[7]+1735328473&4294967295,V=P+(D<<14&4294967295|D>>>18),D=w+(P^b&(V^P))+I[12]+2368359562&4294967295,w=V+(D<<20&4294967295|D>>>12),D=b+(w^V^P)+I[5]+4294588738&4294967295,b=w+(D<<4&4294967295|D>>>28),D=P+(b^w^V)+I[8]+2272392833&4294967295,P=b+(D<<11&4294967295|D>>>21),D=V+(P^b^w)+I[11]+1839030562&4294967295,V=P+(D<<16&4294967295|D>>>16),D=w+(V^P^b)+I[14]+4259657740&4294967295,w=V+(D<<23&4294967295|D>>>9),D=b+(w^V^P)+I[1]+2763975236&4294967295,b=w+(D<<4&4294967295|D>>>28),D=P+(b^w^V)+I[4]+1272893353&4294967295,P=b+(D<<11&4294967295|D>>>21),D=V+(P^b^w)+I[7]+4139469664&4294967295,V=P+(D<<16&4294967295|D>>>16),D=w+(V^P^b)+I[10]+3200236656&4294967295,w=V+(D<<23&4294967295|D>>>9),D=b+(w^V^P)+I[13]+681279174&4294967295,b=w+(D<<4&4294967295|D>>>28),D=P+(b^w^V)+I[0]+3936430074&4294967295,P=b+(D<<11&4294967295|D>>>21),D=V+(P^b^w)+I[3]+3572445317&4294967295,V=P+(D<<16&4294967295|D>>>16),D=w+(V^P^b)+I[6]+76029189&4294967295,w=V+(D<<23&4294967295|D>>>9),D=b+(w^V^P)+I[9]+3654602809&4294967295,b=w+(D<<4&4294967295|D>>>28),D=P+(b^w^V)+I[12]+3873151461&4294967295,P=b+(D<<11&4294967295|D>>>21),D=V+(P^b^w)+I[15]+530742520&4294967295,V=P+(D<<16&4294967295|D>>>16),D=w+(V^P^b)+I[2]+3299628645&4294967295,w=V+(D<<23&4294967295|D>>>9),D=b+(V^(w|~P))+I[0]+4096336452&4294967295,b=w+(D<<6&4294967295|D>>>26),D=P+(w^(b|~V))+I[7]+1126891415&4294967295,P=b+(D<<10&4294967295|D>>>22),D=V+(b^(P|~w))+I[14]+2878612391&4294967295,V=P+(D<<15&4294967295|D>>>17),D=w+(P^(V|~b))+I[5]+4237533241&4294967295,w=V+(D<<21&4294967295|D>>>11),D=b+(V^(w|~P))+I[12]+1700485571&4294967295,b=w+(D<<6&4294967295|D>>>26),D=P+(w^(b|~V))+I[3]+2399980690&4294967295,P=b+(D<<10&4294967295|D>>>22),D=V+(b^(P|~w))+I[10]+4293915773&4294967295,V=P+(D<<15&4294967295|D>>>17),D=w+(P^(V|~b))+I[1]+2240044497&4294967295,w=V+(D<<21&4294967295|D>>>11),D=b+(V^(w|~P))+I[8]+1873313359&4294967295,b=w+(D<<6&4294967295|D>>>26),D=P+(w^(b|~V))+I[15]+4264355552&4294967295,P=b+(D<<10&4294967295|D>>>22),D=V+(b^(P|~w))+I[6]+2734768916&4294967295,V=P+(D<<15&4294967295|D>>>17),D=w+(P^(V|~b))+I[13]+1309151649&4294967295,w=V+(D<<21&4294967295|D>>>11),D=b+(V^(w|~P))+I[4]+4149444226&4294967295,b=w+(D<<6&4294967295|D>>>26),D=P+(w^(b|~V))+I[11]+3174756917&4294967295,P=b+(D<<10&4294967295|D>>>22),D=V+(b^(P|~w))+I[2]+718787259&4294967295,V=P+(D<<15&4294967295|D>>>17),D=w+(P^(V|~b))+I[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(V+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+P&4294967295}s.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var w=b-this.blockSize,I=this.B,V=this.h,P=0;P<b;){if(V==0)for(;P<=w;)l(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<b;)if(I[V++]=M.charCodeAt(P++),V==this.blockSize){l(this,I),V=0;break}}else for(;P<b;)if(I[V++]=M[P++],V==this.blockSize){l(this,I),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var w=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=w&255,w/=256;for(this.u(M),M=Array(16),b=w=0;4>b;++b)for(var I=0;32>I;I+=8)M[w++]=this.g[b]>>>I&255;return M};function c(M,b){var w=m;return Object.prototype.hasOwnProperty.call(w,M)?w[M]:w[M]=b(M)}function f(M,b){this.h=b;for(var w=[],I=!0,V=M.length-1;0<=V;V--){var P=M[V]|0;I&&P==b||(w[V]=P,I=!1)}this.g=w}var m={};function p(M){return-128<=M&&128>M?c(M,function(b){return new f([b|0],0>b?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return A;if(0>M)return z(y(-M));for(var b=[],w=1,I=0;M>=w;I++)b[I]=M/w|0,w*=4294967296;return new f(b,0)}function C(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return z(C(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=y(Math.pow(b,8)),I=A,V=0;V<M.length;V+=8){var P=Math.min(8,M.length-V),D=parseInt(M.substring(V,V+P),b);8>P?(P=y(Math.pow(b,P)),I=I.j(P).add(y(D))):(I=I.j(w),I=I.add(y(D)))}return I}var A=p(0),S=p(1),N=p(16777216);r=f.prototype,r.m=function(){if(K(this))return-z(this).m();for(var M=0,b=1,w=0;w<this.g.length;w++){var I=this.i(w);M+=(0<=I?I:4294967296+I)*b,b*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(k(this))return"0";if(K(this))return"-"+z(this).toString(M);for(var b=y(Math.pow(M,6)),w=this,I="";;){var V=ut(w,b).g;w=F(w,V.j(b));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(M);if(w=V,k(w))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function k(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function K(M){return M.h==-1}r.l=function(M){return M=F(this,M),K(M)?-1:k(M)?0:1};function z(M){for(var b=M.g.length,w=[],I=0;I<b;I++)w[I]=~M.g[I];return new f(w,~M.h).add(S)}r.abs=function(){return K(this)?z(this):this},r.add=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],I=0,V=0;V<=b;V++){var P=I+(this.i(V)&65535)+(M.i(V)&65535),D=(P>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);I=D>>>16,P&=65535,D&=65535,w[V]=D<<16|P}return new f(w,w[w.length-1]&-2147483648?-1:0)};function F(M,b){return M.add(z(b))}r.j=function(M){if(k(this)||k(M))return A;if(K(this))return K(M)?z(this).j(z(M)):z(z(this).j(M));if(K(M))return z(this.j(z(M)));if(0>this.l(N)&&0>M.l(N))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,w=[],I=0;I<2*b;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var V=0;V<M.g.length;V++){var P=this.i(I)>>>16,D=this.i(I)&65535,Et=M.i(V)>>>16,Jt=M.i(V)&65535;w[2*I+2*V]+=D*Jt,X(w,2*I+2*V),w[2*I+2*V+1]+=P*Jt,X(w,2*I+2*V+1),w[2*I+2*V+1]+=D*Et,X(w,2*I+2*V+1),w[2*I+2*V+2]+=P*Et,X(w,2*I+2*V+2)}for(I=0;I<b;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=b;I<2*b;I++)w[I]=0;return new f(w,0)};function X(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function J(M,b){this.g=M,this.h=b}function ut(M,b){if(k(b))throw Error("division by zero");if(k(M))return new J(A,A);if(K(M))return b=ut(z(M),b),new J(z(b.g),z(b.h));if(K(b))return b=ut(M,z(b)),new J(z(b.g),b.h);if(30<M.g.length){if(K(M)||K(b))throw Error("slowDivide_ only works with positive integers.");for(var w=S,I=b;0>=I.l(M);)w=st(w),I=st(I);var V=dt(w,1),P=dt(I,1);for(I=dt(I,2),w=dt(w,2);!k(I);){var D=P.add(I);0>=D.l(M)&&(V=V.add(w),P=D),I=dt(I,1),w=dt(w,1)}return b=F(M,V.j(b)),new J(V,b)}for(V=A;0<=M.l(b);){for(w=Math.max(1,Math.floor(M.m()/b.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=y(w),D=P.j(b);K(D)||0<D.l(M);)w-=I,P=y(w),D=P.j(b);k(P)&&(P=S),V=V.add(P),M=F(M,D)}return new J(V,M)}r.A=function(M){return ut(this,M).h},r.and=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],I=0;I<b;I++)w[I]=this.i(I)&M.i(I);return new f(w,this.h&M.h)},r.or=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],I=0;I<b;I++)w[I]=this.i(I)|M.i(I);return new f(w,this.h|M.h)},r.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),w=[],I=0;I<b;I++)w[I]=this.i(I)^M.i(I);return new f(w,this.h^M.h)};function st(M){for(var b=M.g.length+1,w=[],I=0;I<b;I++)w[I]=M.i(I)<<1|M.i(I-1)>>>31;return new f(w,M.h)}function dt(M,b){var w=b>>5;b%=32;for(var I=M.g.length-w,V=[],P=0;P<I;P++)V[P]=0<b?M.i(P+w)>>>b|M.i(P+w+1)<<32-b:M.i(P+w);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,E9=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=C,Kr=f}).apply(typeof x6<"u"?x6:typeof self<"u"?self:typeof window<"u"?window:{});var cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T9,pl,A9,vc,O4,S9,w9,b9;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,v){return u==Array.prototype||u==Object.prototype||(u[g]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof cc=="object"&&cc];for(var g=0;g<u.length;++g){var v=u[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=i(this);function l(u,g){if(g)t:{var v=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var B=u[T];if(!(B in v))break t;v=v[B]}u=u[u.length-1],T=v[u],g=g(T),g!=T&&g!=null&&t(v,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var v=0,T=!1,B={next:function(){if(!T&&v<u.length){var Q=v++;return{value:g(Q,u[Q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}l("Array.prototype.values",function(u){return u||function(){return c(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function y(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function C(u,g,v){return u.call.apply(u.bind,arguments)}function A(u,g,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,T),u.apply(g,B)}}return function(){return u.apply(g,arguments)}}function S(u,g,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:A,S.apply(null,arguments)}function N(u,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function k(u,g){function v(){}v.prototype=g.prototype,u.aa=g.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,B,Q){for(var at=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)at[jt-2]=arguments[jt];return g.prototype[B].apply(T,at)}}function K(u){const g=u.length;if(0<g){const v=Array(g);for(let T=0;T<g;T++)v[T]=u[T];return v}return[]}function z(u,g){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const B=u.length||0,Q=T.length||0;u.length=B+Q;for(let at=0;at<Q;at++)u[B+at]=T[at]}else u.push(T)}}class F{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function X(u){return/^[\s\xa0]*$/.test(u)}function J(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function ut(u){return ut[" "](u),u}ut[" "]=function(){};var st=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function dt(u,g,v){for(const T in u)g.call(v,u[T],T,u)}function M(u,g){for(const v in u)g.call(void 0,u[v],v,u)}function b(u){const g={};for(const v in u)g[v]=u[v];return g}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,g){let v,T;for(let B=1;B<arguments.length;B++){T=arguments[B];for(v in T)u[v]=T[v];for(let Q=0;Q<w.length;Q++)v=w[Q],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function V(u){var g=1;u=u.split(":");const v=[];for(;0<g&&u.length;)v.push(u.shift()),g--;return u.length&&v.push(u.join(":")),v}function P(u){m.setTimeout(()=>{throw u},0)}function D(){var u=Gt;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class Et{constructor(){this.h=this.g=null}add(g,v){const T=Jt.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Jt=new F(()=>new rt,u=>u.reset());class rt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,gt=!1,Gt=new Et,O=()=>{const u=m.Promise.resolve(void 0);vt=()=>{u.then(nt)}};var nt=()=>{for(var u;u=D();){try{u.h.call(u.g)}catch(v){P(v)}var g=Jt;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}gt=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var lt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return u}();function It(u,g){if(ot.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(st){t:{try{ut(g.nodeName);var B=!0;break t}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=u.fromElement:v=="mouseout"&&(g=u.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:bt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&It.aa.h.call(this)}}k(It,ot);var bt={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),mt=0;function St(u,g,v,T,B){this.listener=u,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=B,this.key=++mt,this.da=this.fa=!1}function Rt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Qt(u){this.src=u,this.g={},this.h=0}Qt.prototype.add=function(u,g,v,T,B){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var at=te(u,g,T,B);return-1<at?(g=u[at],v||(g.fa=!1)):(g=new St(g,this.src,Q,!!T,B),g.fa=v,u.push(g)),g};function Xt(u,g){var v=g.type;if(v in u.g){var T=u.g[v],B=Array.prototype.indexOf.call(T,g,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(T,B,1),Q&&(Rt(g),u.g[v].length==0&&(delete u.g[v],u.h--))}}function te(u,g,v,T){for(var B=0;B<u.length;++B){var Q=u[B];if(!Q.da&&Q.listener==g&&Q.capture==!!v&&Q.ha==T)return B}return-1}var Ut="closure_lm_"+(1e6*Math.random()|0),it={};function oe(u,g,v,T,B){if(Array.isArray(g)){for(var Q=0;Q<g.length;Q++)oe(u,g[Q],v,T,B);return null}return v=ql(v),u&&u[Mt]?u.K(g,v,y(T)?!!T.capture:!1,B):ke(u,g,v,!1,T,B)}function ke(u,g,v,T,B,Q){if(!g)throw Error("Invalid event type");var at=y(B)?!!B.capture:!!B,jt=so(u);if(jt||(u[Ut]=jt=new Qt(u)),v=jt.add(g,v,T,at,Q),v.proxy)return v;if(T=Ze(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)lt||(B=at),B===void 0&&(B=!1),u.addEventListener(g.toString(),T,B);else if(u.attachEvent)u.attachEvent(Xa(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ze(){function u(v){return g.call(u.src,u.listener,v)}const g=u1;return u}function Kn(u,g,v,T,B){if(Array.isArray(g))for(var Q=0;Q<g.length;Q++)Kn(u,g[Q],v,T,B);else T=y(T)?!!T.capture:!!T,v=ql(v),u&&u[Mt]?(u=u.i,g=String(g).toString(),g in u.g&&(Q=u.g[g],v=te(Q,v,T,B),-1<v&&(Rt(Q[v]),Array.prototype.splice.call(Q,v,1),Q.length==0&&(delete u.g[g],u.h--)))):u&&(u=so(u))&&(g=u.g[g.toString()],u=-1,g&&(u=te(g,v,T,B)),(v=-1<u?g[u]:null)&&sa(v))}function sa(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[Mt])Xt(g.i,u);else{var v=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(v,T,u.capture):g.detachEvent?g.detachEvent(Xa(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=so(g))?(Xt(v,u),v.h==0&&(v.src=null,g[Ut]=null)):Rt(u)}}}function Xa(u){return u in it?it[u]:it[u]="on"+u}function u1(u,g){if(u.da)u=!0;else{g=new It(g,this);var v=u.listener,T=u.ha||u.src;u.fa&&sa(u),u=v.call(T,g)}return u}function so(u){return u=u[Ut],u instanceof Qt?u:null}var hn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ql(u){return typeof u=="function"?u:(u[hn]||(u[hn]=function(g){return u.handleEvent(g)}),u[hn])}function we(){ft.call(this),this.i=new Qt(this),this.M=this,this.F=null}k(we,ft),we.prototype[Mt]=!0,we.prototype.removeEventListener=function(u,g,v,T){Kn(this,u,g,v,T)};function Le(u,g){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new ot(g,u);else if(g instanceof ot)g.target=g.target||u;else{var B=g;g=new ot(T,u),I(g,B)}if(B=!0,v)for(var Q=v.length-1;0<=Q;Q--){var at=g.g=v[Q];B=bi(at,T,!0,g)&&B}if(at=g.g=u,B=bi(at,T,!0,g)&&B,B=bi(at,T,!1,g)&&B,v)for(Q=0;Q<v.length;Q++)at=g.g=v[Q],B=bi(at,T,!1,g)&&B}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var v=u.g[g],T=0;T<v.length;T++)Rt(v[T]);delete u.g[g],u.h--}}this.F=null},we.prototype.K=function(u,g,v,T){return this.i.add(String(u),g,!1,v,T)},we.prototype.L=function(u,g,v,T){return this.i.add(String(u),g,!0,v,T)};function bi(u,g,v,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,Q=0;Q<g.length;++Q){var at=g[Q];if(at&&!at.da&&at.capture==v){var jt=at.listener,Re=at.ha||at.src;at.fa&&Xt(u.i,at),B=jt.call(Re,T)!==!1&&B}}return B&&!T.defaultPrevented}function Hl(u,g,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(u,g||0)}function oo(u){u.g=Hl(()=>{u.g=null,u.i&&(u.i=!1,oo(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class c1 extends ft{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:oo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(u){ft.call(this),this.h=u,this.g={}}k(oa,ft);var or=[];function We(u){dt(u.g,function(g,v){this.g.hasOwnProperty(v)&&sa(g)},u),u.g={}}oa.prototype.N=function(){oa.aa.N.call(this),We(this)},oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lo=m.JSON.stringify,ei=m.JSON.parse,an=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function uo(){}uo.prototype.h=null;function Fl(u){return u.h||(u.h=u.i())}function Gl(){}var ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){ot.call(this,"d")}k(lr,ot);function Yn(){ot.call(this,"c")}k(Yn,ot);var In={},ur=null;function Za(){return ur=ur||new we}In.La="serverreachability";function co(u){ot.call(this,In.La,u)}k(co,ot);function cr(u){const g=Za();Le(g,new co(g))}In.STAT_EVENT="statevent";function Wa(u,g){ot.call(this,In.STAT_EVENT,u),this.stat=g}k(Wa,ot);function ve(u){const g=Za();Le(g,new Wa(g,u))}In.Ma="timingevent";function Ql(u,g){ot.call(this,In.Ma,u),this.size=g}k(Ql,ot);function hr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},g)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function Kl(u,g,v,T,B,Q){u.info(function(){if(u.g)if(Q)for(var at="",jt=Q.split("&"),Re=0;Re<jt.length;Re++){var Bt=jt[Re].split("=");if(1<Bt.length){var Pe=Bt[0];Bt=Bt[1];var De=Pe.split("_");at=2<=De.length&&De[1]=="type"?at+(Pe+"="+Bt+"&"):at+(Pe+"=redacted&")}}else at=null;else at=Q;return"XMLHTTP REQ ("+T+") [attempt "+B+"]: "+g+`
`+v+`
`+at})}function Yl(u,g,v,T,B,Q,at){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+B+"]: "+g+`
`+v+`
`+Q+" "+at})}function dr(u,g,v,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ue(u,v)+(T?" "+T:"")})}function ii(u,g){u.info(function(){return"TIMEOUT: "+g})}fr.prototype.info=function(){};function Ue(u,g){if(!u.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var B=T[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var at=1;at<B.length;at++)B[at]=""}}}}return lo(v)}catch{return g}}var be={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},la;function Ja(){}k(Ja,uo),Ja.prototype.g=function(){return new XMLHttpRequest},Ja.prototype.i=function(){return{}},la=new Ja;function ri(u,g,v,T){this.j=u,this.i=g,this.l=v,this.R=T||1,this.U=new oa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ho}function ho(){this.i=null,this.g="",this.h=!1}var mr={},ua={};function $n(u,g,v){u.L=1,u.v=fa(me(g)),u.m=v,u.P=!0,Di(u,null)}function Di(u,g){u.F=Date.now(),ce(u),u.A=me(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Mi(v.i,"t",T),u.C=0,v=u.j.J,u.h=new ho,u.g=lu(u.j,v?g:null,!u.m),0<u.O&&(u.M=new c1(S(u.Y,u,u.g),u.O)),g=u.U,v=u.g,T=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(or[0]=B.toString()),B=or);for(var Q=0;Q<B.length;Q++){var at=oe(v,B[Q],T||g.handleEvent,!1,g.h||g);if(!at)break;g.g[at.key]=at}g=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),cr(),Kl(u.i,u.u,u.A,u.l,u.R,u.m)}ri.prototype.ca=function(u){u=u.target;const g=this.M;g&&kn(u)==3?g.j():this.Y(u)},ri.prototype.Y=function(u){try{if(u==this.g)t:{const De=kn(this.g);var g=this.g.Ba();const ki=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||De!=4||g==7||(g==8||0>=ki?cr(3):cr(2)),ts(this);var v=this.g.Z();this.X=v;e:if(pr(this)){var T=tu(this.g);u="";var B=T.length,Q=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Cn(this);var at="";break e}this.h.i=new m.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,u+=this.h.i.decode(T[g],{stream:!(Q&&g==B-1)});T.length=0,this.h.g+=u,this.C=0,at=this.h.g}else at=this.g.oa();if(this.o=v==200,Yl(this.i,this.u,this.A,this.l,this.R,De,v),this.o){if(this.T&&!this.K){e:{if(this.g){var jt,Re=this.g;if((jt=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(jt)){var Bt=jt;break e}}Bt=null}if(v=Bt)dr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,En(this,v);else{this.o=!1,this.s=3,ve(12),fn(this),Cn(this);break t}}if(this.P){v=!0;let Fe;for(;!this.J&&this.C<at.length;)if(Fe=gr(this,at),Fe==ua){De==4&&(this.s=4,ve(14),v=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==mr){this.s=4,ve(15),dr(this.i,this.l,at,"[Invalid Chunk]"),v=!1;break}else dr(this.i,this.l,Fe,null),En(this,Fe);if(pr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||at.length!=0||this.h.h||(this.s=1,ve(16),v=!1),this.o=this.o&&v,!v)dr(this.i,this.l,at,"[Invalid Chunked Response]"),fn(this),Cn(this);else if(0<at.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+at.length),_a(Pe),Pe.M=!0,ve(11))}}else dr(this.i,this.l,at,null),En(this,at);De==4&&fn(this),this.o&&!this.J&&(De==4?au(this.j,this):(this.o=!1,ce(this)))}else g1(this.g),v==400&&0<at.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),fn(this),Cn(this)}}}catch{}finally{}};function pr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function gr(u,g){var v=u.C,T=g.indexOf(`
`,v);return T==-1?ua:(v=Number(g.substring(v,T)),isNaN(v)?mr:(T+=1,T+v>g.length?ua:(g=g.slice(T,T+v),u.C=T+v,g)))}ri.prototype.cancel=function(){this.J=!0,fn(this)};function ce(u){u.S=Date.now()+u.I,fo(u,u.I)}function fo(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=hr(S(u.ba,u),g)}function ts(u){u.B&&(m.clearTimeout(u.B),u.B=null)}ri.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ii(this.i,this.A),this.L!=2&&(cr(),ve(17)),fn(this),this.s=2,Cn(this)):fo(this,this.S-u)};function Cn(u){u.j.G==0||u.J||au(u.j,u)}function fn(u){ts(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,We(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function En(u,g){try{var v=u.j;if(v.G!=0&&(v.g==u||yr(v.h,u))){if(!u.K&&yr(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var B=T;if(B[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)cs(v),ls(v);else break t;So(v),ve(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=hr(S(v.Za,v),6e3));if(1>=$l(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Oi(v,11)}else if((u.K||v.g==u)&&cs(v),!X(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let Bt=B[g];if(v.T=Bt[0],Bt=Bt[1],v.G==2)if(Bt[0]=="c"){v.K=Bt[1],v.ia=Bt[2];const Pe=Bt[3];Pe!=null&&(v.la=Pe,v.j.info("VER="+v.la));const De=Bt[4];De!=null&&(v.Aa=De,v.j.info("SVER="+v.Aa));const ki=Bt[5];ki!=null&&typeof ki=="number"&&0<ki&&(T=1.5*ki,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const Fe=u.g;if(Fe){const hi=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var Q=T.h;Q.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(vr(Q,Q.h),Q.h=null))}if(T.D){const bo=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(T.ya=bo,Kt(T.I,T.D,bo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var at=u;if(T.qa=ou(T,T.J?T.ia:null,T.W),at.K){Mn(T.h,at);var jt=at,Re=T.L;Re&&(jt.I=Re),jt.B&&(ts(jt),ce(jt)),T.g=at}else iu(T);0<v.i.length&&us(v)}else Bt[0]!="stop"&&Bt[0]!="close"||Oi(v,7);else v.G==3&&(Bt[0]=="stop"||Bt[0]=="close"?Bt[0]=="stop"?Oi(v,7):To(v):Bt[0]!="noop"&&v.l&&v.l.ta(Bt),v.v=0)}}cr(4)}catch{}}var h1=class{constructor(u,g){this.g=u,this.map=g}};function mo(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function po(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $l(u){return u.h?1:u.g?u.g.size:0}function yr(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function vr(u,g){u.g?u.g.add(g):u.h=g}function Mn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}mo.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const v of u.g.values())g=g.concat(v.D);return g}return K(u.i)}function Xl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var g=[],v=u.length,T=0;T<v;T++)g.push(u[T]);return g}g=[],v=0;for(T in u)g[v++]=u[T];return g}function f1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var g=[];u=u.length;for(var v=0;v<u;v++)g.push(v);return g}g=[],v=0;for(const T in u)g[v++]=T;return g}}}function ca(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var v=f1(u),T=Xl(u),B=T.length,Q=0;Q<B;Q++)g.call(void 0,T[Q],v&&v[Q],u)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function es(u,g){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),B=null;if(0<=T){var Q=u[v].substring(0,T);B=u[v].substring(T+1)}else Q=u[v];g(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function xi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xi){this.h=u.h,_r(this,u.j),this.o=u.o,this.g=u.g,ha(this,u.s),this.l=u.l;var g=u.i,v=new ai;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),ns(this,v),this.m=u.m}else u&&(g=String(u).match(go))?(this.h=!1,_r(this,g[1]||"",!0),this.o=Cr(g[2]||""),this.g=Cr(g[3]||"",!0),ha(this,g[4]),this.l=Cr(g[5]||"",!0),ns(this,g[6]||"",!0),this.m=Cr(g[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}xi.prototype.toString=function(){var u=[],g=this.j;g&&u.push(Nn(g,yo,!0),":");var v=this.g;return(v||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Nn(g,yo,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Nn(v,v.charAt(0)=="/"?vo:Zl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Nn(v,p1)),u.join("")};function me(u){return new xi(u)}function _r(u,g,v){u.j=v?Cr(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function ha(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function ns(u,g,v){g instanceof ai?(u.i=g,_o(u.i,u.h)):(v||(g=Nn(g,m1)),u.i=new ai(g,u.h))}function Kt(u,g,v){u.i.set(g,v)}function fa(u){return Kt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Cr(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Nn(u,g,v){return typeof u=="string"?(u=encodeURI(u).replace(g,d1),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function d1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var yo=/[#\/\?@]/g,Zl=/[#\?:]/g,vo=/[#\?]/g,m1=/[#\?@]/g,p1=/#/g;function ai(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Vn(u){u.g||(u.g=new Map,u.h=0,u.i&&es(u.i,function(g,v){u.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}r=ai.prototype,r.add=function(u,g){Vn(this),this.i=null,u=Ni(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(g),this.h+=1,this};function is(u,g){Vn(u),g=Ni(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Ii(u,g){return Vn(u),g=Ni(u,g),u.g.has(g)}r.forEach=function(u,g){Vn(this),this.g.forEach(function(v,T){v.forEach(function(B){u.call(g,B,T,this)},this)},this)},r.na=function(){Vn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let T=0;T<g.length;T++){const B=u[T];for(let Q=0;Q<B.length;Q++)v.push(g[T])}return v},r.V=function(u){Vn(this);let g=[];if(typeof u=="string")Ii(this,u)&&(g=g.concat(this.g.get(Ni(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)g=g.concat(u[v])}return g},r.set=function(u,g){return Vn(this),this.i=null,u=Ni(this,u),Ii(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function Mi(u,g,v){is(u,g),0<v.length&&(u.i=null,u.g.set(Ni(u,g),K(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var T=g[v];const Q=encodeURIComponent(String(T)),at=this.V(T);for(T=0;T<at.length;T++){var B=Q;at[T]!==""&&(B+="="+encodeURIComponent(String(at[T]))),u.push(B)}}return this.i=u.join("&")};function Ni(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function _o(u,g){g&&!u.j&&(Vn(u),u.i=null,u.g.forEach(function(v,T){var B=T.toLowerCase();T!=B&&(is(this,T),Mi(this,B,v))},u)),u.j=g}function Wl(u,g){const v=new fr;if(m.Image){const T=new Image;T.onload=N(On,v,"TestLoadImage: loaded",!0,g,T),T.onerror=N(On,v,"TestLoadImage: error",!1,g,T),T.onabort=N(On,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=N(On,v,"TestLoadImage: timeout",!1,g,T),m.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function da(u,g){const v=new fr,T=new AbortController,B=setTimeout(()=>{T.abort(),On(v,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(Q=>{clearTimeout(B),Q.ok?On(v,"TestPingServer: ok",!0,g):On(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),On(v,"TestPingServer: error",!1,g)})}function On(u,g,v,T,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),T(v)}catch{}}function ma(){this.g=new an}function si(u,g,v){const T=v||"";try{ca(u,function(B,Q){let at=B;y(B)&&(at=lo(B)),g.push(T+Q+"="+encodeURIComponent(at))})}catch(B){throw g.push(T+"type="+encodeURIComponent("_badmap")),B}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}k(Er,uo),Er.prototype.g=function(){return new Vi(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function Vi(u,g){we.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Vi,we),r=Vi.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,li(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Co(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Co(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?oi(this):li(this),this.readyState==3&&Co(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,oi(this))},r.Qa=function(u){this.g&&(this.response=u,oi(this))},r.ga=function(){this.g&&oi(this)};function oi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,li(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=g.next();return u.join(`\r
`)};function li(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Eo(u){let g="";return dt(u,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function ze(u,g,v){t:{for(T in v){var T=!1;break t}T=!0}T||(v=Eo(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Kt(u,g,v))}function Zt(u){we.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Zt,we);var rs=/^https?$/i,pa=["POST","PUT"];r=Zt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():la.g(),this.v=this.o?Fl(this.o):Fl(la),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(Q){Jl(this,Q);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var B in T)v.set(B,T[B]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())v.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(pa,g,void 0))||T||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,at]of v)this.g.setRequestHeader(Q,at);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ga(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Jl(this,Q)}};function Jl(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,as(u),ui(u)}function as(u){u.A||(u.A=!0,Le(u,"complete"),Le(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Le(this,"complete"),Le(this,"abort"),ui(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ui(this,!0)),Zt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ss(this):this.bb())},r.bb=function(){ss(this)};function ss(u){if(u.h&&typeof f<"u"&&(!u.v[1]||kn(u)!=4||u.Z()!=2)){if(u.u&&kn(u)==4)Hl(u.Ea,0,u);else if(Le(u,"readystatechange"),kn(u)==4){u.h=!1;try{const at=u.Z();t:switch(at){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var T;if(T=at===0){var B=String(u.D).match(go)[1]||null;!B&&m.self&&m.self.location&&(B=m.self.location.protocol.slice(0,-1)),T=!rs.test(B?B.toLowerCase():"")}v=T}if(v)Le(u,"complete"),Le(u,"success");else{u.m=6;try{var Q=2<kn(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",as(u)}}finally{ui(u)}}}}function ui(u,g){if(u.g){ga(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Le(u,"ready");try{v.onreadystatechange=T}catch{}}}function ga(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function kn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),ei(g)}};function tu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function g1(u){const g={};u=(u.g&&2<=kn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(X(u[T]))continue;var v=V(u[T]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Q=g[B]||[];g[B]=Q,Q.push(v)}M(g,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(u,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||g}function os(u){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ya("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ya("baseRetryDelayMs",5e3,u),this.cb=ya("retryDelaySeedMs",1e4,u),this.Wa=ya("forwardChannelMaxRetries",2,u),this.wa=ya("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new mo(u&&u.concurrentRequestLimit),this.Da=new ma,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=os.prototype,r.la=8,r.G=1,r.connect=function(u,g,v,T){ve(0),this.W=u,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=ou(this,null,this.W),us(this)};function To(u){if(eu(u),u.G==3){var g=u.U++,v=me(u.I);if(Kt(v,"SID",u.K),Kt(v,"RID",g),Kt(v,"TYPE","terminate"),va(u,v),g=new ri(u,u.j,g),g.L=2,g.v=fa(me(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=lu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ce(g)}su(u)}function ls(u){u.g&&(_a(u),u.g.cancel(),u.g=null)}function eu(u){ls(u),u.u&&(m.clearTimeout(u.u),u.u=null),cs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function us(u){if(!po(u.h)&&!u.s){u.s=!0;var g=u.Ga;vt||O(),gt||(vt(),gt=!0),Gt.add(g,u),u.B=0}}function y1(u,g){return $l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=hr(S(u.Ga,u,g),wo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new ri(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=b(Q),I(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=nu(this,B,g),v=me(this.I),Kt(v,"RID",u),Kt(v,"CVER",22),this.D&&Kt(v,"X-HTTP-Session-Id",this.D),va(this,v),Q&&(this.O?g="headers="+encodeURIComponent(String(Eo(Q)))+"&"+g:this.m&&ze(v,this.m,Q)),vr(this.h,B),this.Ua&&Kt(v,"TYPE","init"),this.P?(Kt(v,"$req",g),Kt(v,"SID","null"),B.T=!0,$n(B,v,null)):$n(B,v,g),this.G=2}}else this.G==3&&(u?Ao(this,u):this.i.length==0||po(this.h)||Ao(this))};function Ao(u,g){var v;g?v=g.l:v=u.U++;const T=me(u.I);Kt(T,"SID",u.K),Kt(T,"RID",v),Kt(T,"AID",u.T),va(u,T),u.m&&u.o&&ze(T,u.m,u.o),v=new ri(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),g&&(u.i=g.D.concat(u.i)),g=nu(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),vr(u.h,v),$n(v,T,g)}function va(u,g){u.H&&dt(u.H,function(v,T){Kt(g,T,v)}),u.l&&ca({},function(v,T){Kt(g,T,v)})}function nu(u,g,v){v=Math.min(u.i.length,v);var T=u.l?S(u.l.Na,u.l,u):null;t:{var B=u.i;let Q=-1;for(;;){const at=["count="+v];Q==-1?0<v?(Q=B[0].g,at.push("ofs="+Q)):Q=0:at.push("ofs="+Q);let jt=!0;for(let Re=0;Re<v;Re++){let Bt=B[Re].g;const Pe=B[Re].map;if(Bt-=Q,0>Bt)Q=Math.max(0,B[Re].g-100),jt=!1;else try{si(Pe,at,"req"+Bt+"_")}catch{T&&T(Pe)}}if(jt){T=at.join("&");break t}}}return u=u.i.splice(0,v),g.D=u,T}function iu(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;vt||O(),gt||(vt(),gt=!0),Gt.add(g,u),u.v=0}}function So(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=hr(S(u.Fa,u),wo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=hr(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),ls(this),ru(this))};function _a(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function ru(u){u.g=new ri(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=me(u.qa);Kt(g,"RID","rpc"),Kt(g,"SID",u.K),Kt(g,"AID",u.T),Kt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&Kt(g,"TO",u.ja),Kt(g,"TYPE","xmlhttp"),va(u,g),u.m&&u.o&&ze(g,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=fa(me(g)),v.m=null,v.P=!0,Di(v,u)}r.Za=function(){this.C!=null&&(this.C=null,ls(this),So(this),ve(19))};function cs(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function au(u,g){var v=null;if(u.g==g){cs(u),_a(u),u.g=null;var T=2}else if(yr(u.h,g))v=g.D,Mn(u.h,g),T=1;else return;if(u.G!=0){if(g.o)if(T==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=u.B;T=Za(),Le(T,new Ql(T,v)),us(u)}else iu(u);else if(B=g.s,B==3||B==0&&0<g.X||!(T==1&&y1(u,g)||T==2&&So(u)))switch(v&&0<v.length&&(g=u.h,g.i=g.i.concat(v)),B){case 1:Oi(u,5);break;case 4:Oi(u,10);break;case 3:Oi(u,6);break;default:Oi(u,2)}}}function wo(u,g){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*g}function Oi(u,g){if(u.j.info("Error code "+g),g==2){var v=S(u.fb,u),T=u.Xa;const B=!T;T=new xi(T||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||_r(T,"https"),fa(T),B?Wl(T.toString(),v):da(T.toString(),v)}else ve(2);u.G=0,u.l&&u.l.sa(g),su(u),eu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function su(u){if(u.G=0,u.ka=[],u.l){const g=sn(u.h);(g.length!=0||u.i.length!=0)&&(z(u.ka,g),z(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function ou(u,g,v){var T=v instanceof xi?me(v):new xi(v);if(T.g!="")g&&(T.g=g+"."+T.g),ha(T,T.s);else{var B=m.location;T=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var Q=new xi(null);T&&_r(Q,T),g&&(Q.g=g),B&&ha(Q,B),v&&(Q.l=v),T=Q}return v=u.D,g=u.ya,v&&g&&Kt(T,v,g),Kt(T,"VER",u.la),va(u,T),T}function lu(u,g,v){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new Zt(new Er({eb:v})):new Zt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}r=uu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function hs(){}hs.prototype.g=function(u,g){return new on(u,g)};function on(u,g){we.call(this),this.g=new os(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!X(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!X(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new ci(this)}k(on,we),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){To(this.g)},on.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=lo(u),u=v);g.i.push(new h1(g.Ya++,u)),g.G==3&&us(g)},on.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,on.aa.N.call(this)};function cu(u){lr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const v in g){u=v;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}k(cu,lr);function hu(){Yn.call(this),this.status=1}k(hu,Yn);function ci(u){this.g=u}k(ci,uu),ci.prototype.ua=function(){Le(this.g,"a")},ci.prototype.ta=function(u){Le(this.g,new cu(u))},ci.prototype.sa=function(u){Le(this.g,new hu)},ci.prototype.ra=function(){Le(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,b9=function(){return new hs},w9=function(){return Za()},S9=In,O4={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},be.NO_ERROR=0,be.TIMEOUT=8,be.HTTP_ERROR=6,vc=be,Ri.COMPLETE="complete",A9=Ri,Gl.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",we.prototype.listen=we.prototype.K,pl=Gl,Zt.prototype.listenOnce=Zt.prototype.L,Zt.prototype.getLastError=Zt.prototype.Ka,Zt.prototype.getLastErrorCode=Zt.prototype.Ba,Zt.prototype.getStatus=Zt.prototype.Z,Zt.prototype.getResponseJson=Zt.prototype.Oa,Zt.prototype.getResponseText=Zt.prototype.oa,Zt.prototype.send=Zt.prototype.ea,Zt.prototype.setWithCredentials=Zt.prototype.Ha,T9=Zt}).apply(typeof cc<"u"?cc:typeof self<"u"?self:typeof window<"u"?window:{});const I6="@firebase/firestore",M6="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new a2("@firebase/firestore");function zs(){return Fa.logLevel}function ct(r,...t){if(Fa.logLevel<=Ft.DEBUG){const i=t.map(f2);Fa.debug(`Firestore (${no}): ${r}`,...i)}}function ir(r,...t){if(Fa.logLevel<=Ft.ERROR){const i=t.map(f2);Fa.error(`Firestore (${no}): ${r}`,...i)}}function Gs(r,...t){if(Fa.logLevel<=Ft.WARN){const i=t.map(f2);Fa.warn(`Firestore (${no}): ${r}`,...i)}}function f2(r){if(typeof r=="string")return r;try{/**
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
 */function At(r="Unexpected state"){const t=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+r;throw ir(t),new Error(t)}function Wt(r,t){r||At()}function xt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yt extends ia{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(nn.UNAUTHENTICATED))}shutdown(){}}class _v{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Cv{constructor(t){this.t=t,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Wt(this.o===void 0);let s=this.i;const l=p=>this.i!==s?(s=this.i,i(p)):Promise.resolve();let c=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ji,t.enqueueRetryable(()=>l(this.currentUser))};const f=()=>{const p=c;t.enqueueRetryable(async()=>{await p.promise,await l(this.currentUser)})},m=p=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ji)}},0),f()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Wt(typeof s.accessToken=="string"),new R9(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Wt(t===null||typeof t=="string"),new nn(t)}}class Ev{constructor(t,i,s){this.l=t,this.h=i,this.P=s,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tv{constructor(t,i,s){this.l=t,this.h=i,this.P=s}getToken(){return Promise.resolve(new Ev(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N6{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Av{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ug(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){Wt(this.o===void 0);const s=c=>{c.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,ct("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new N6(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(Wt(typeof i.token=="string"),this.R=i.token,new N6(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class D9{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Sv(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<i&&(s+=t.charAt(l[c]%62))}return s}}function Pt(r,t){return r<t?-1:r>t?1:0}function Qs(r,t,i){return r.length===t.length&&r.every((s,l)=>i(s,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6=-62135596800,O6=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(t){return Ve.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),s=Math.floor((t-1e3*i)*O6);return new Ve(i,s)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new yt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new yt(et.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<V6)throw new yt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yt(et.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/O6}_compareTo(t){return this.seconds===t.seconds?Pt(this.nanoseconds,t.nanoseconds):Pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-V6;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static fromTimestamp(t){return new wt(t)}static min(){return new wt(new Ve(0,0))}static max(){return new wt(new Ve(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6="__name__";class yi{constructor(t,i,s){i===void 0?i=0:i>t.length&&At(),s===void 0?s=t.length-i:s>t.length-i&&At(),this.segments=t,this.offset=i,this.len=s}get length(){return this.len}isEqual(t){return yi.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof yi?t.forEach(s=>{i.push(s)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,s=this.limit();i<s;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const s=Math.min(t.length,i.length);for(let l=0;l<s;l++){const c=yi.compareSegments(t.get(l),i.get(l));if(c!==0)return c}return Math.sign(t.length-i.length)}static compareSegments(t,i){const s=yi.isNumericId(t),l=yi.isNumericId(i);return s&&!l?-1:!s&&l?1:s&&l?yi.extractNumericId(t).compare(yi.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kr.fromString(t.substring(4,t.length-2))}}class le extends yi{construct(t,i,s){return new le(t,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const s of t){if(s.indexOf("//")>=0)throw new yt(et.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(l=>l.length>0))}return new le(i)}static emptyPath(){return new le([])}}const wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends yi{construct(t,i,s){return new $e(t,i,s)}static isValidIdentifier(t){return wv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===k6}static keyField(){return new $e([k6])}static fromServerFormat(t){const i=[];let s="",l=0;const c=()=>{if(s.length===0)throw new yt(et.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let f=!1;for(;l<t.length;){const m=t[l];if(m==="\\"){if(l+1===t.length)throw new yt(et.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[l+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new yt(et.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,l+=2}else m==="`"?(f=!f,l++):m!=="."||f?(s+=m,l++):(c(),l++)}if(c(),f)throw new yt(et.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $e(i)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.path=t}static fromPath(t){return new Ct(le.fromString(t))}static fromName(t){return new Ct(le.fromString(t).popFirst(5))}static empty(){return new Ct(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return le.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ct(new le(t.slice()))}}/**
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
 */const bl=-1;function bv(r,t){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=wt.fromTimestamp(s===1e9?new Ve(i+1,0):new Ve(i,s));return new Xr(l,Ct.empty(),t)}function Rv(r){return new Xr(r.readTime,r.key,bl)}class Xr{constructor(t,i,s){this.readTime=t,this.documentKey=i,this.largestBatchId=s}static min(){return new Xr(wt.min(),Ct.empty(),bl)}static max(){return new Xr(wt.max(),Ct.empty(),bl)}}function Dv(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=Ct.comparator(r.documentKey,t.documentKey),i!==0?i:Pt(r.largestBatchId,t.largestBatchId))}/**
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
 */const xv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Iv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(r){if(r.code!==et.FAILED_PRECONDITION||r.message!==xv)throw r;ct("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&At(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new W((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof W?i:W.resolve(i)}catch(i){return W.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):W.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):W.reject(i)}static resolve(t){return new W((i,s)=>{i(t)})}static reject(t){return new W((i,s)=>{s(t)})}static waitFor(t){return new W((i,s)=>{let l=0,c=0,f=!1;t.forEach(m=>{++l,m.next(()=>{++c,f&&c===l&&i()},p=>s(p))}),f=!0,c===l&&i()})}static or(t){let i=W.resolve(!1);for(const s of t)i=i.next(l=>l?W.resolve(l):s());return i}static forEach(t,i){const s=[];return t.forEach((l,c)=>{s.push(i.call(this,l,c))}),this.waitFor(s)}static mapArray(t,i){return new W((s,l)=>{const c=t.length,f=new Array(c);let m=0;for(let p=0;p<c;p++){const y=p;i(t[y]).next(C=>{f[y]=C,++m,m===c&&s(f)},C=>l(C))}})}static doWhile(t,i){return new W((s,l)=>{const c=()=>{t()===!0?i().next(()=>{c()},l):s()};c()})}}function Mv(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function ro(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Qc{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=s=>this.oe(s),this._e=s=>i.writeSequenceNumber(s))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Qc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=-1;function Kc(r){return r==null}function xc(r){return r===0&&1/r==-1/0}function Nv(r){return typeof r=="number"&&Number.isInteger(r)&&!xc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x9="";function Vv(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=L6(t)),t=Ov(r.get(i),t);return L6(t)}function Ov(r,t){let i=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":i+="";break;case x9:i+="";break;default:i+=c}}return i}function L6(r){return r+x9+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U6(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function ra(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function I9(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,i){this.comparator=t,this.root=i||Ye.EMPTY}insert(t,i){return new de(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new de(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(t){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,s)=>(t(i,s),!1))}toString(){const t=[];return this.inorderTraversal((i,s)=>(t.push(`${i}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hc(this.root,t,this.comparator,!1)}getReverseIterator(){return new hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hc(this.root,t,this.comparator,!0)}}class hc{constructor(t,i,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=i?s(t.key,i):1,i&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,i,s,l,c){this.key=t,this.value=i,this.color=s??Ye.RED,this.left=l??Ye.EMPTY,this.right=c??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,s,l,c){return new Ye(t??this.key,i??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,i,s),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let s,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Ye.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw At();const t=this.left.check();if(t!==this.right.check())throw At();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw At()}get value(){throw At()}get color(){throw At()}get left(){throw At()}get right(){throw At()}copy(t,i,s,l,c){return this}insert(t,i,s){return new Ye(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.comparator=t,this.data=new de(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,s)=>(t(i),!1))}forEachInRange(t,i){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new z6(this.data.getIterator())}getIteratorFrom(t){return new z6(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(s=>{i=i.add(s)}),i}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const i=this.data.getIterator(),s=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new Oe(this.comparator);return i.data=t,i}}class z6{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rn{constructor(t){this.fields=t,t.sort($e.comparator)}static empty(){return new Rn([])}unionWith(t){let i=new Oe($e.comparator);for(const s of this.fields)i=i.add(s);for(const s of t)i=i.add(s);return new Rn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Qs(this.fields,t.fields,(i,s)=>i.isEqual(s))}}/**
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
 */class M9 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new M9("Invalid base64 string: "+c):c}}(t);return new Xe(i)}static fromUint8Array(t){const i=function(l){let c="";for(let f=0;f<l.length;++f)c+=String.fromCharCode(l[f]);return c}(t);return new Xe(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(r){if(Wt(!!r),typeof r=="string"){let t=0;const i=kv.exec(r);if(Wt(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Ce(r.seconds),nanos:Ce(r.nanos)}}function Ce(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wr(r){return typeof r=="string"?Xe.fromBase64String(r):Xe.fromUint8Array(r)}/**
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
 */const N9="server_timestamp",V9="__type__",O9="__previous_value__",k9="__local_write_time__";function m2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[V9])===null||i===void 0?void 0:i.stringValue)===N9}function Yc(r){const t=r.mapValue.fields[O9];return m2(t)?Yc(t):t}function Rl(r){const t=Zr(r.mapValue.fields[k9].timestampValue);return new Ve(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(t,i,s,l,c,f,m,p,y){this.databaseId=t,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const Ic="(default)";class Dl{constructor(t,i){this.projectId=t,this.database=i||Ic}static empty(){return new Dl("","")}get isDefaultDatabase(){return this.database===Ic}isEqual(t){return t instanceof Dl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const L9="__type__",Uv="__max__",fc={mapValue:{}},U9="__vector__",Mc="value";function Jr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?m2(r)?4:Pv(r)?9007199254740991:zv(r)?10:11:At()}function Ai(r,t){if(r===t)return!0;const i=Jr(r);if(i!==Jr(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Rl(r).isEqual(Rl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const f=Zr(l.timestampValue),m=Zr(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return Wr(l.bytesValue).isEqual(Wr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return Ce(l.geoPointValue.latitude)===Ce(c.geoPointValue.latitude)&&Ce(l.geoPointValue.longitude)===Ce(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return Ce(l.integerValue)===Ce(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const f=Ce(l.doubleValue),m=Ce(c.doubleValue);return f===m?xc(f)===xc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Qs(r.arrayValue.values||[],t.arrayValue.values||[],Ai);case 10:case 11:return function(l,c){const f=l.mapValue.fields||{},m=c.mapValue.fields||{};if(U6(f)!==U6(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ai(f[p],m[p])))return!1;return!0}(r,t);default:return At()}}function xl(r,t){return(r.values||[]).find(i=>Ai(i,t))!==void 0}function Ks(r,t){if(r===t)return 0;const i=Jr(r),s=Jr(t);if(i!==s)return Pt(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return Pt(r.booleanValue,t.booleanValue);case 2:return function(c,f){const m=Ce(c.integerValue||c.doubleValue),p=Ce(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return P6(r.timestampValue,t.timestampValue);case 4:return P6(Rl(r),Rl(t));case 5:return Pt(r.stringValue,t.stringValue);case 6:return function(c,f){const m=Wr(c),p=Wr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(c,f){const m=c.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const C=Pt(m[y],p[y]);if(C!==0)return C}return Pt(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,f){const m=Pt(Ce(c.latitude),Ce(f.latitude));return m!==0?m:Pt(Ce(c.longitude),Ce(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return j6(r.arrayValue,t.arrayValue);case 10:return function(c,f){var m,p,y,C;const A=c.fields||{},S=f.fields||{},N=(m=A[Mc])===null||m===void 0?void 0:m.arrayValue,k=(p=S[Mc])===null||p===void 0?void 0:p.arrayValue,K=Pt(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((C=k==null?void 0:k.values)===null||C===void 0?void 0:C.length)||0);return K!==0?K:j6(N,k)}(r.mapValue,t.mapValue);case 11:return function(c,f){if(c===fc.mapValue&&f===fc.mapValue)return 0;if(c===fc.mapValue)return 1;if(f===fc.mapValue)return-1;const m=c.fields||{},p=Object.keys(m),y=f.fields||{},C=Object.keys(y);p.sort(),C.sort();for(let A=0;A<p.length&&A<C.length;++A){const S=Pt(p[A],C[A]);if(S!==0)return S;const N=Ks(m[p[A]],y[C[A]]);if(N!==0)return N}return Pt(p.length,C.length)}(r.mapValue,t.mapValue);default:throw At()}}function P6(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Pt(r,t);const i=Zr(r),s=Zr(t),l=Pt(i.seconds,s.seconds);return l!==0?l:Pt(i.nanos,s.nanos)}function j6(r,t){const i=r.values||[],s=t.values||[];for(let l=0;l<i.length&&l<s.length;++l){const c=Ks(i[l],s[l]);if(c)return c}return Pt(i.length,s.length)}function Ys(r){return k4(r)}function k4(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const s=Zr(i);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return Wr(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return Ct.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let s="[",l=!0;for(const c of i.values||[])l?l=!1:s+=",",s+=k4(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(i){const s=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const f of s)c?c=!1:l+=",",l+=`${f}:${k4(i.fields[f])}`;return l+"}"}(r.mapValue):At()}function _c(r){switch(Jr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Yc(r);return t?16+_c(t):16;case 5:return 2*r.stringValue.length;case 6:return Wr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+_c(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return ra(s.fields,(c,f)=>{l+=c.length+_c(f)}),l}(r.mapValue);default:throw At()}}function L4(r){return!!r&&"integerValue"in r}function p2(r){return!!r&&"arrayValue"in r}function B6(r){return!!r&&"nullValue"in r}function q6(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Cc(r){return!!r&&"mapValue"in r}function zv(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[L9])===null||i===void 0?void 0:i.stringValue)===U9}function Cl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ra(r.mapValue.fields,(i,s)=>t.mapValue.fields[i]=Cl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=Cl(r.arrayValue.values[i]);return t}return Object.assign({},r)}function Pv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Uv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.value=t}static empty(){return new pn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let s=0;s<t.length-1;++s)if(i=(i.mapValue.fields||{})[t.get(s)],!Cc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cl(i)}setAll(t){let i=$e.emptyPath(),s={},l=[];t.forEach((f,m)=>{if(!i.isImmediateParentOf(m)){const p=this.getFieldsMap(i);this.applyChanges(p,s,l),s={},l=[],i=m.popLast()}f?s[m.lastSegment()]=Cl(f):l.push(m.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,s,l)}delete(t){const i=this.field(t.popLast());Cc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return Ai(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=i.mapValue.fields[t.get(s)];Cc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,s){ra(i,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new pn(Cl(this.value))}}function z9(r){const t=[];return ra(r.fields,(i,s)=>{const l=new $e([i]);if(Cc(s)){const c=z9(s.mapValue).fields;if(c.length===0)t.push(l);else for(const f of c)t.push(l.child(f))}else t.push(l)}),new Rn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,i,s,l,c,f,m){this.key=t,this.documentType=i,this.version=s,this.readTime=l,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(t){return new rn(t,0,wt.min(),wt.min(),wt.min(),pn.empty(),0)}static newFoundDocument(t,i,s,l){return new rn(t,1,i,wt.min(),s,l,0)}static newNoDocument(t,i){return new rn(t,2,i,wt.min(),wt.min(),pn.empty(),0)}static newUnknownDocument(t,i){return new rn(t,3,i,wt.min(),wt.min(),pn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nc{constructor(t,i){this.position=t,this.inclusive=i}}function H6(r,t,i){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],f=r.position[l];if(c.field.isKeyField()?s=Ct.comparator(Ct.fromName(f.referenceValue),i.key):s=Ks(f,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function F6(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Ai(r.position[i],t.position[i]))return!1;return!0}/**
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
 */class Vc{constructor(t,i="asc"){this.field=t,this.dir=i}}function jv(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class P9{}class Ne extends P9{constructor(t,i,s){super(),this.field=t,this.op=i,this.value=s}static create(t,i,s){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,s):new qv(t,i,s):i==="array-contains"?new Gv(t,s):i==="in"?new Qv(t,s):i==="not-in"?new Kv(t,s):i==="array-contains-any"?new Yv(t,s):new Ne(t,i,s)}static createKeyFieldInFilter(t,i,s){return i==="in"?new Hv(t,s):new Fv(t,s)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Ks(i,this.value)):i!==null&&Jr(this.value)===Jr(i)&&this.matchesComparison(Ks(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return At()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends P9{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new Si(t,i)}matches(t){return j9(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function j9(r){return r.op==="and"}function B9(r){return Bv(r)&&j9(r)}function Bv(r){for(const t of r.filters)if(t instanceof Si)return!1;return!0}function U4(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+Ys(r.value);if(B9(r))return r.filters.map(t=>U4(t)).join(",");{const t=r.filters.map(i=>U4(i)).join(",");return`${r.op}(${t})`}}function q9(r,t){return r instanceof Ne?function(s,l){return l instanceof Ne&&s.op===l.op&&s.field.isEqual(l.field)&&Ai(s.value,l.value)}(r,t):r instanceof Si?function(s,l){return l instanceof Si&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,f,m)=>c&&q9(f,l.filters[m]),!0):!1}(r,t):void At()}function H9(r){return r instanceof Ne?function(i){return`${i.field.canonicalString()} ${i.op} ${Ys(i.value)}`}(r):r instanceof Si?function(i){return i.op.toString()+" {"+i.getFilters().map(H9).join(" ,")+"}"}(r):"Filter"}class qv extends Ne{constructor(t,i,s){super(t,i,s),this.key=Ct.fromName(s.referenceValue)}matches(t){const i=Ct.comparator(t.key,this.key);return this.matchesComparison(i)}}class Hv extends Ne{constructor(t,i){super(t,"in",i),this.keys=F9("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Fv extends Ne{constructor(t,i){super(t,"not-in",i),this.keys=F9("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function F9(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(s=>Ct.fromName(s.referenceValue))}class Gv extends Ne{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return p2(i)&&xl(i.arrayValue,this.value)}}class Qv extends Ne{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&xl(this.value.arrayValue,i)}}class Kv extends Ne{constructor(t,i){super(t,"not-in",i)}matches(t){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!xl(this.value.arrayValue,i)}}class Yv extends Ne{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!p2(i)||!i.arrayValue.values)&&i.arrayValue.values.some(s=>xl(this.value.arrayValue,s))}}/**
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
 */class $v{constructor(t,i=null,s=[],l=[],c=null,f=null,m=null){this.path=t,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=f,this.endAt=m,this.le=null}}function G6(r,t=null,i=[],s=[],l=null,c=null,f=null){return new $v(r,t,i,s,l,c,f)}function g2(r){const t=xt(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(s=>U4(s)).join(","),i+="|ob:",i+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),Kc(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Ys(s)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Ys(s)).join(",")),t.le=i}return t.le}function y2(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!jv(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!q9(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!F6(r.startAt,t.startAt)&&F6(r.endAt,t.endAt)}function z4(r){return Ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,i=null,s=[],l=[],c=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Xv(r,t,i,s,l,c,f,m){return new $c(r,t,i,s,l,c,f,m)}function v2(r){return new $c(r)}function Q6(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zv(r){return r.collectionGroup!==null}function El(r){const t=xt(r);if(t.he===null){t.he=[];const i=new Set;for(const c of t.explicitOrderBy)t.he.push(c),i.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Oe($e.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||t.he.push(new Vc(c,s))}),i.has($e.keyField().canonicalString())||t.he.push(new Vc($e.keyField(),s))}return t.he}function _i(r){const t=xt(r);return t.Pe||(t.Pe=Wv(t,El(r))),t.Pe}function Wv(r,t){if(r.limitType==="F")return G6(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Vc(l.field,c)});const i=r.endAt?new Nc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Nc(r.startAt.position,r.startAt.inclusive):null;return G6(r.path,r.collectionGroup,t,r.filters,r.limit,i,s)}}function P4(r,t,i){return new $c(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function Xc(r,t){return y2(_i(r),_i(t))&&r.limitType===t.limitType}function G9(r){return`${g2(_i(r))}|lt:${r.limitType}`}function Ps(r){return`Query(target=${function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(l=>H9(l)).join(", ")}]`),Kc(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(l=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(l)).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map(l=>Ys(l)).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map(l=>Ys(l)).join(",")),`Target(${s})`}(_i(r))}; limitType=${r.limitType})`}function Zc(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):Ct.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of El(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(f,m,p){const y=H6(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,El(s),l)||s.endAt&&!function(f,m,p){const y=H6(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,El(s),l))}(r,t)}function Jv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Q9(r){return(t,i)=>{let s=!1;for(const l of El(r)){const c=t_(l,t,i);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function t_(r,t,i){const s=r.field.isKeyField()?Ct.comparator(t.key,i.key):function(c,f,m){const p=f.data.field(c),y=m.data.field(c);return p!==null&&y!==null?Ks(p,y):At()}(r.field,t,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return At()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,i){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ra(this.inner,(i,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return I9(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new de(Ct.comparator);function rr(){return e_}const K9=new de(Ct.comparator);function gl(...r){let t=K9;for(const i of r)t=t.insert(i.key,i);return t}function Y9(r){let t=K9;return r.forEach((i,s)=>t=t.insert(i,s.overlayedDocument)),t}function ja(){return Tl()}function $9(){return Tl()}function Tl(){return new Ya(r=>r.toString(),(r,t)=>r.isEqual(t))}const n_=new de(Ct.comparator),i_=new Oe(Ct.comparator);function Lt(...r){let t=i_;for(const i of r)t=t.add(i);return t}const r_=new Oe(Pt);function a_(){return r_}/**
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
 */function _2(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(t)?"-0":t}}function X9(r){return{integerValue:""+r}}function Z9(r,t){return Nv(t)?X9(t):_2(r,t)}/**
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
 */class Wc{constructor(){this._=void 0}}function s_(r,t,i){return r instanceof Oc?function(l,c){const f={fields:{[V9]:{stringValue:N9},[k9]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&m2(c)&&(c=Yc(c)),c&&(f.fields[O9]=c),{mapValue:f}}(i,t):r instanceof $s?J9(r,t):r instanceof Il?t7(r,t):function(l,c){const f=W9(l,c),m=K6(f)+K6(l.Ie);return L4(f)&&L4(l.Ie)?X9(m):_2(l.serializer,m)}(r,t)}function o_(r,t,i){return r instanceof $s?J9(r,t):r instanceof Il?t7(r,t):i}function W9(r,t){return r instanceof Ml?function(s){return L4(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Oc extends Wc{}class $s extends Wc{constructor(t){super(),this.elements=t}}function J9(r,t){const i=e7(t);for(const s of r.elements)i.some(l=>Ai(l,s))||i.push(s);return{arrayValue:{values:i}}}class Il extends Wc{constructor(t){super(),this.elements=t}}function t7(r,t){let i=e7(t);for(const s of r.elements)i=i.filter(l=>!Ai(l,s));return{arrayValue:{values:i}}}class Ml extends Wc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function K6(r){return Ce(r.integerValue||r.doubleValue)}function e7(r){return p2(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(t,i){this.field=t,this.transform=i}}function l_(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof $s&&l instanceof $s||s instanceof Il&&l instanceof Il?Qs(s.elements,l.elements,Ai):s instanceof Ml&&l instanceof Ml?Ai(s.Ie,l.Ie):s instanceof Oc&&l instanceof Oc}(r.transform,t.transform)}class u_{constructor(t,i){this.version=t,this.transformResults=i}}class Ci{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Ci}static exists(t){return new Ci(void 0,t)}static updateTime(t){return new Ci(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ec(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Jc{}function i7(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new a7(r.key,Ci.none()):new kl(r.key,r.data,Ci.none());{const i=r.data,s=pn.empty();let l=new Oe($e.comparator);for(let c of t.fields)if(!l.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?s.delete(c):s.set(c,f),l=l.add(c)}return new aa(r.key,s,new Rn(l.toArray()),Ci.none())}}function c_(r,t,i){r instanceof kl?function(l,c,f){const m=l.value.clone(),p=$6(l.fieldTransforms,c,f.transformResults);m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,i):r instanceof aa?function(l,c,f){if(!Ec(l.precondition,c))return void c.convertToUnknownDocument(f.version);const m=$6(l.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(r7(l)),p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,i):function(l,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,i)}function Al(r,t,i,s){return r instanceof kl?function(c,f,m,p){if(!Ec(c.precondition,f))return m;const y=c.value.clone(),C=X6(c.fieldTransforms,p,f);return y.setAll(C),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,i,s):r instanceof aa?function(c,f,m,p){if(!Ec(c.precondition,f))return m;const y=X6(c.fieldTransforms,p,f),C=f.data;return C.setAll(r7(c)),C.setAll(y),f.convertToFoundDocument(f.version,C).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(A=>A.field))}(r,t,i,s):function(c,f,m){return Ec(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,i)}function h_(r,t){let i=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=W9(s.transform,l||null);c!=null&&(i===null&&(i=pn.empty()),i.set(s.field,c))}return i||null}function Y6(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Qs(s,l,(c,f)=>l_(c,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kl extends Jc{constructor(t,i,s,l=[]){super(),this.key=t,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class aa extends Jc{constructor(t,i,s,l,c=[]){super(),this.key=t,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function r7(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const s=r.data.field(i);t.set(i,s)}}),t}function $6(r,t,i){const s=new Map;Wt(r.length===i.length);for(let l=0;l<i.length;l++){const c=r[l],f=c.transform,m=t.data.field(c.field);s.set(c.field,o_(f,m,i[l]))}return s}function X6(r,t,i){const s=new Map;for(const l of r){const c=l.transform,f=i.data.field(l.field);s.set(l.field,s_(c,f,t))}return s}class a7 extends Jc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f_ extends Jc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t,i,s,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&c_(c,t,s[l])}}applyToLocalView(t,i){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(i=Al(s,t,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(i=Al(s,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const s=$9();return this.mutations.forEach(l=>{const c=t.get(l.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=i.has(l.key)?null:m;const p=i7(f,m);p!==null&&s.set(l.key,p),f.isValidDocument()||f.convertToNoDocument(wt.min())}),s}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Lt())}isEqual(t){return this.batchId===t.batchId&&Qs(this.mutations,t.mutations,(i,s)=>Y6(i,s))&&Qs(this.baseMutations,t.baseMutations,(i,s)=>Y6(i,s))}}class C2{constructor(t,i,s,l){this.batch=t,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(t,i,s){Wt(t.mutations.length===s.length);let l=function(){return n_}();const c=t.mutations;for(let f=0;f<c.length;f++)l=l.insert(c[f].key,s[f].version);return new C2(t,i,s,l)}}/**
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
 */class m_{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class p_{constructor(t,i){this.count=t,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Ht;function g_(r){switch(r){case et.OK:return At();case et.CANCELLED:case et.UNKNOWN:case et.DEADLINE_EXCEEDED:case et.RESOURCE_EXHAUSTED:case et.INTERNAL:case et.UNAVAILABLE:case et.UNAUTHENTICATED:return!1;case et.INVALID_ARGUMENT:case et.NOT_FOUND:case et.ALREADY_EXISTS:case et.PERMISSION_DENIED:case et.FAILED_PRECONDITION:case et.ABORTED:case et.OUT_OF_RANGE:case et.UNIMPLEMENTED:case et.DATA_LOSS:return!0;default:return At()}}function s7(r){if(r===void 0)return ir("GRPC error has no .code"),et.UNKNOWN;switch(r){case Se.OK:return et.OK;case Se.CANCELLED:return et.CANCELLED;case Se.UNKNOWN:return et.UNKNOWN;case Se.DEADLINE_EXCEEDED:return et.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return et.RESOURCE_EXHAUSTED;case Se.INTERNAL:return et.INTERNAL;case Se.UNAVAILABLE:return et.UNAVAILABLE;case Se.UNAUTHENTICATED:return et.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return et.INVALID_ARGUMENT;case Se.NOT_FOUND:return et.NOT_FOUND;case Se.ALREADY_EXISTS:return et.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return et.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return et.FAILED_PRECONDITION;case Se.ABORTED:return et.ABORTED;case Se.OUT_OF_RANGE:return et.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return et.UNIMPLEMENTED;case Se.DATA_LOSS:return et.DATA_LOSS;default:return At()}}(Ht=Se||(Se={}))[Ht.OK=0]="OK",Ht[Ht.CANCELLED=1]="CANCELLED",Ht[Ht.UNKNOWN=2]="UNKNOWN",Ht[Ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ht[Ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ht[Ht.NOT_FOUND=5]="NOT_FOUND",Ht[Ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ht[Ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ht[Ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ht[Ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ht[Ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ht[Ht.ABORTED=10]="ABORTED",Ht[Ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ht[Ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ht[Ht.INTERNAL=13]="INTERNAL",Ht[Ht.UNAVAILABLE=14]="UNAVAILABLE",Ht[Ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const v_=new Kr([4294967295,4294967295],0);function Z6(r){const t=y_().encode(r),i=new E9;return i.update(t),new Uint8Array(i.digest())}function W6(r){const t=new DataView(r.buffer),i=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Kr([i,s],0),new Kr([l,c],0)]}class E2{constructor(t,i,s){if(this.bitmap=t,this.padding=i,this.hashCount=s,i<0||i>=8)throw new yl(`Invalid padding: ${i}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(t.length===0&&i!==0)throw new yl(`Invalid padding when bitmap length is 0: ${i}`);this.Ee=8*t.length-i,this.de=Kr.fromNumber(this.Ee)}Ae(t,i,s){let l=t.add(i.multiply(Kr.fromNumber(s)));return l.compare(v_)===1&&(l=new Kr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const i=Z6(t),[s,l]=W6(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);if(!this.Re(f))return!1}return!0}static create(t,i,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),f=new E2(c,l,i);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.Ee===0)return;const i=Z6(t),[s,l]=W6(i);for(let c=0;c<this.hashCount;c++){const f=this.Ae(s,l,c);this.Ve(f)}}Ve(t){const i=Math.floor(t/8),s=t%8;this.bitmap[i]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(t,i,s,l,c){this.snapshotVersion=t,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,i,s){const l=new Map;return l.set(t,Ll.createSynthesizedTargetChangeForCurrentChange(t,i,s)),new t1(wt.min(),l,new de(Pt),rr(),Lt())}}class Ll{constructor(t,i,s,l,c){this.resumeToken=t,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,i,s){return new Ll(s,i,Lt(),Lt(),Lt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,i,s,l){this.me=t,this.removedTargetIds=i,this.key=s,this.fe=l}}class o7{constructor(t,i){this.targetId=t,this.ge=i}}class l7{constructor(t,i,s=Xe.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=i,this.resumeToken=s,this.cause=l}}class J6{constructor(){this.pe=0,this.ye=tf(),this.we=Xe.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=Lt(),i=Lt(),s=Lt();return this.ye.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:At()}}),new Ll(this.we,this.be,t,i,s)}Me(){this.Se=!1,this.ye=tf()}xe(t,i){this.Se=!0,this.ye=this.ye.insert(t,i)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Wt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class __{constructor(t){this.ke=t,this.qe=new Map,this.Qe=rr(),this.$e=dc(),this.Ke=dc(),this.Ue=new de(Pt)}We(t){for(const i of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(i,t.fe):this.ze(i,t.key,t.fe);for(const i of t.removedTargetIds)this.ze(i,t.key,t.fe)}je(t){this.forEachTarget(t,i=>{const s=this.He(i);switch(t.state){case 0:this.Je(i)&&s.Ce(t.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(t.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(i);break;case 3:this.Je(i)&&(s.Le(),s.Ce(t.resumeToken));break;case 4:this.Je(i)&&(this.Ye(i),s.Ce(t.resumeToken));break;default:At()}})}forEachTarget(t,i){t.targetIds.length>0?t.targetIds.forEach(i):this.qe.forEach((s,l)=>{this.Je(l)&&i(l)})}Ze(t){const i=t.targetId,s=t.ge.count,l=this.Xe(i);if(l){const c=l.target;if(z4(c))if(s===0){const f=new Ct(c.path);this.ze(i,f,rn.newNoDocument(f,wt.min()))}else Wt(s===1);else{const f=this.et(i);if(f!==s){const m=this.tt(t),p=m?this.nt(m,t,f):1;if(p!==0){this.Ye(i);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,y)}}}}}tt(t){const i=t.ge.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=i;let f,m;try{f=Wr(s).toUint8Array()}catch(p){if(p instanceof M9)return Gs("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new E2(f,l,c)}catch(p){return Gs(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(t,i,s){return i.ge.count===s-this.st(t,i.targetId)?0:2}st(t,i){const s=this.ke.getRemoteKeysForTarget(i);let l=0;return s.forEach(c=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;t.mightContain(m)||(this.ze(i,c,null),l++)}),l}ot(t){const i=new Map;this.qe.forEach((c,f)=>{const m=this.Xe(f);if(m){if(c.current&&z4(m.target)){const p=new Ct(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,rn.newNoDocument(p,t))}c.ve&&(i.set(f,c.Fe()),c.Me())}});let s=Lt();this.Ke.forEach((c,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(c))}),this.Qe.forEach((c,f)=>f.setReadTime(t));const l=new t1(t,i,this.Ue,this.Qe,s);return this.Qe=rr(),this.$e=dc(),this.Ke=dc(),this.Ue=new de(Pt),l}Ge(t,i){if(!this.Je(t))return;const s=this.ut(t,i.key)?2:0;this.He(t).xe(i.key,s),this.Qe=this.Qe.insert(i.key,i),this.$e=this.$e.insert(i.key,this._t(i.key).add(t)),this.Ke=this.Ke.insert(i.key,this.ct(i.key).add(t))}ze(t,i,s){if(!this.Je(t))return;const l=this.He(t);this.ut(t,i)?l.xe(i,1):l.Oe(i),this.Ke=this.Ke.insert(i,this.ct(i).delete(t)),this.Ke=this.Ke.insert(i,this.ct(i).add(t)),s&&(this.Qe=this.Qe.insert(i,s))}removeTarget(t){this.qe.delete(t)}et(t){const i=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+i.addedDocuments.size-i.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let i=this.qe.get(t);return i||(i=new J6,this.qe.set(t,i)),i}ct(t){let i=this.Ke.get(t);return i||(i=new Oe(Pt),this.Ke=this.Ke.insert(t,i)),i}_t(t){let i=this.$e.get(t);return i||(i=new Oe(Pt),this.$e=this.$e.insert(t,i)),i}Je(t){const i=this.Xe(t)!==null;return i||ct("WatchChangeAggregator","Detected inactive target",t),i}Xe(t){const i=this.qe.get(t);return i&&i.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new J6),this.ke.getRemoteKeysForTarget(t).forEach(i=>{this.ze(t,i,null)})}ut(t,i){return this.ke.getRemoteKeysForTarget(t).has(i)}}function dc(){return new de(Ct.comparator)}function tf(){return new de(Ct.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},E_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T_={and:"AND",or:"OR"};class A_{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function j4(r,t){return r.useProto3Json||Kc(t)?t:{value:t}}function kc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function u7(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function S_(r,t){return kc(r,t.toTimestamp())}function Ei(r){return Wt(!!r),wt.fromTimestamp(function(i){const s=Zr(i);return new Ve(s.seconds,s.nanos)}(r))}function T2(r,t){return B4(r,t).canonicalString()}function B4(r,t){const i=function(l){return new le(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function c7(r){const t=le.fromString(r);return Wt(p7(t)),t}function q4(r,t){return T2(r.databaseId,t.path)}function T4(r,t){const i=c7(t);if(i.get(1)!==r.databaseId.projectId)throw new yt(et.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new yt(et.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new Ct(f7(i))}function h7(r,t){return T2(r.databaseId,t)}function w_(r){const t=c7(r);return t.length===4?le.emptyPath():f7(t)}function H4(r){return new le(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function f7(r){return Wt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ef(r,t,i){return{name:q4(r,t),fields:i.value.mapValue.fields}}function b_(r,t){let i;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:At()}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,C){return y.useProto3Json?(Wt(C===void 0||typeof C=="string"),Xe.fromBase64String(C||"")):(Wt(C===void 0||C instanceof Buffer||C instanceof Uint8Array),Xe.fromUint8Array(C||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const C=y.code===void 0?et.UNKNOWN:s7(y.code);return new yt(C,y.message||"")}(f);i=new l7(s,l,c,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=T4(r,s.document.name),c=Ei(s.document.updateTime),f=s.document.createTime?Ei(s.document.createTime):wt.min(),m=new pn({mapValue:{fields:s.document.fields}}),p=rn.newFoundDocument(l,c,f,m),y=s.targetIds||[],C=s.removedTargetIds||[];i=new Tc(y,C,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=T4(r,s.document),c=s.readTime?Ei(s.readTime):wt.min(),f=rn.newNoDocument(l,c),m=s.removedTargetIds||[];i=new Tc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=T4(r,s.document),c=s.removedTargetIds||[];i=new Tc([],c,l,null)}else{if(!("filter"in t))return At();{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,f=new p_(l,c),m=s.targetId;i=new o7(m,f)}}return i}function R_(r,t){let i;if(t instanceof kl)i={update:ef(r,t.key,t.value)};else if(t instanceof a7)i={delete:q4(r,t.key)};else if(t instanceof aa)i={update:ef(r,t.key,t.data),updateMask:L_(t.fieldMask)};else{if(!(t instanceof f_))return At();i={verify:q4(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(s=>function(c,f){const m=f.transform;if(m instanceof Oc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $s)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Il)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ml)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw At()}(0,s))),t.precondition.isNone||(i.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:S_(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:At()}(r,t.precondition)),i}function D_(r,t){return r&&r.length>0?(Wt(t!==void 0),r.map(i=>function(l,c){let f=l.updateTime?Ei(l.updateTime):Ei(c);return f.isEqual(wt.min())&&(f=Ei(c)),new u_(f,l.transformResults||[])}(i,t))):[]}function x_(r,t){return{documents:[h7(r,t.path)]}}function I_(r,t){const i={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=h7(r,l);const c=function(y){if(y.length!==0)return m7(Si.create(y,"and"))}(t.filters);c&&(i.structuredQuery.where=c);const f=function(y){if(y.length!==0)return y.map(C=>function(S){return{field:js(S.field),direction:V_(S.dir)}}(C))}(t.orderBy);f&&(i.structuredQuery.orderBy=f);const m=j4(r,t.limit);return m!==null&&(i.structuredQuery.limit=m),t.startAt&&(i.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(i.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:i,parent:l}}function M_(r){let t=w_(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){Wt(s===1);const C=i.from[0];C.allDescendants?l=C.collectionId:t=t.child(C.collectionId)}let c=[];i.where&&(c=function(A){const S=d7(A);return S instanceof Si&&B9(S)?S.getFilters():[S]}(i.where));let f=[];i.orderBy&&(f=function(A){return A.map(S=>function(k){return new Vc(Bs(k.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(i.orderBy));let m=null;i.limit&&(m=function(A){let S;return S=typeof A=="object"?A.value:A,Kc(S)?null:S}(i.limit));let p=null;i.startAt&&(p=function(A){const S=!!A.before,N=A.values||[];return new Nc(N,S)}(i.startAt));let y=null;return i.endAt&&(y=function(A){const S=!A.before,N=A.values||[];return new Nc(N,S)}(i.endAt)),Xv(t,l,f,c,m,"F",p,y)}function N_(r,t){const i=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return At()}}(t.purpose);return i==null?null:{"goog-listen-tags":i}}function d7(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Bs(i.unaryFilter.field);return Ne.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Bs(i.unaryFilter.field);return Ne.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Bs(i.unaryFilter.field);return Ne.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Bs(i.unaryFilter.field);return Ne.create(f,"!=",{nullValue:"NULL_VALUE"});default:return At()}}(r):r.fieldFilter!==void 0?function(i){return Ne.create(Bs(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return At()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return Si.create(i.compositeFilter.filters.map(s=>d7(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return At()}}(i.compositeFilter.op))}(r):At()}function V_(r){return C_[r]}function O_(r){return E_[r]}function k_(r){return T_[r]}function js(r){return{fieldPath:r.canonicalString()}}function Bs(r){return $e.fromServerFormat(r.fieldPath)}function m7(r){return r instanceof Ne?function(i){if(i.op==="=="){if(q6(i.value))return{unaryFilter:{field:js(i.field),op:"IS_NAN"}};if(B6(i.value))return{unaryFilter:{field:js(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(q6(i.value))return{unaryFilter:{field:js(i.field),op:"IS_NOT_NAN"}};if(B6(i.value))return{unaryFilter:{field:js(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(i.field),op:O_(i.op),value:i.value}}}(r):r instanceof Si?function(i){const s=i.getFilters().map(l=>m7(l));return s.length===1?s[0]:{compositeFilter:{op:k_(i.op),filters:s}}}(r):At()}function L_(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function p7(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,i,s,l,c=wt.min(),f=wt.min(),m=Xe.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Hr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,i){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.Tt=t}}function z_(r){const t=M_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?P4(t,t.limit,"L"):t}/**
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
 */class P_{constructor(){this.Tn=new j_}addToCollectionParentIndex(t,i){return this.Tn.add(i),W.resolve()}getCollectionParents(t,i){return W.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return W.resolve()}deleteFieldIndex(t,i){return W.resolve()}deleteAllFieldIndexes(t){return W.resolve()}createTargetIndexes(t,i){return W.resolve()}getDocumentsMatchingTarget(t,i){return W.resolve(null)}getIndexType(t,i){return W.resolve(0)}getFieldIndexes(t,i){return W.resolve([])}getNextCollectionGroupToUpdate(t){return W.resolve(null)}getMinOffset(t,i){return W.resolve(Xr.min())}getMinOffsetFromCollectionGroup(t,i){return W.resolve(Xr.min())}updateCollectionGroup(t,i,s){return W.resolve()}updateIndexEntries(t,i){return W.resolve()}}class j_{constructor(){this.index={}}add(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i]||new Oe(le.comparator),c=!l.has(s);return this.index[i]=l.add(s),c}has(t){const i=t.lastSegment(),s=t.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(t){return(this.index[t]||new Oe(le.comparator)).toArray()}}/**
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
 */const nf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g7=41943040;class mn{static withCacheSize(t){return new mn(t,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.DEFAULT_COLLECTION_PERCENTILE=10,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mn.DEFAULT=new mn(g7,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mn.DISABLED=new mn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Xs(0)}static Un(){return new Xs(-1)}}/**
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
 */const rf="LruGarbageCollector",B_=1048576;function af([r,t],[i,s]){const l=Pt(r,i);return l===0?Pt(t,s):l}class q_{constructor(t){this.Hn=t,this.buffer=new Oe(af),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();af(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class H_{constructor(t,i,s){this.garbageCollector=t,this.asyncQueue=i,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ct(rf,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){ro(i)?ct(rf,"Ignoring IndexedDB error during garbage collection: ",i):await io(i)}await this.er(3e5)})}}class F_{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(s=>Math.floor(i/100*s))}nthSequenceNumber(t,i){if(i===0)return W.resolve(Qc.ae);const s=new q_(i);return this.tr.forEachTarget(t,l=>s.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>s.Zn(l))).next(()=>s.maxValue)}removeTargets(t,i,s){return this.tr.removeTargets(t,i,s)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(nf)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nf):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let s,l,c,f,m,p,y;const C=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),l=this.params.maximumSequenceNumbersToCollect):l=A,f=Date.now(),this.nthSequenceNumber(t,l))).next(A=>(s=A,m=Date.now(),this.removeTargets(t,s,i))).next(A=>(c=A,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(A=>(y=Date.now(),zs()<=Ft.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-C}ms
	Determined least recently used ${l} in `+(m-f)+`ms
	Removed ${c} targets in `+(p-m)+`ms
	Removed ${A} documents in `+(y-p)+`ms
Total Duration: ${y-C}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:A})))}}function G_(r,t){return new F_(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.changes=new Ya(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,rn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?W.resolve(s):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Y_{constructor(t,i,s,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,i){let s=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(s!==null&&Al(s.mutation,l,Rn.empty(),Ve.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.getLocalViewOfDocuments(t,s,Lt()).next(()=>s))}getLocalViewOfDocuments(t,i,s=Lt()){const l=ja();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,s).next(c=>{let f=gl();return c.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,i){const s=ja();return this.populateOverlays(t,s,i).next(()=>this.computeViews(t,i,s,Lt()))}populateOverlays(t,i,s){const l=[];return s.forEach(c=>{i.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((f,m)=>{i.set(f,m)})})}computeViews(t,i,s,l){let c=rr();const f=Tl(),m=function(){return Tl()}();return i.forEach((p,y)=>{const C=s.get(y.key);l.has(y.key)&&(C===void 0||C.mutation instanceof aa)?c=c.insert(y.key,y):C!==void 0?(f.set(y.key,C.mutation.getFieldMask()),Al(C.mutation,y,C.mutation.getFieldMask(),Ve.now())):f.set(y.key,Rn.empty())}),this.recalculateAndSaveOverlays(t,c).next(p=>(p.forEach((y,C)=>f.set(y,C)),i.forEach((y,C)=>{var A;return m.set(y,new K_(C,(A=f.get(y))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(t,i){const s=Tl();let l=new de((f,m)=>f-m),c=Lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=i.get(p);if(y===null)return;let C=s.get(p)||Rn.empty();C=m.applyToLocalView(y,C),s.set(p,C);const A=(l.get(m.batchId)||Lt()).add(p);l=l.insert(m.batchId,A)})}).next(()=>{const f=[],m=l.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,C=p.value,A=$9();C.forEach(S=>{if(!c.has(S)){const N=i7(i.get(S),s.get(S));N!==null&&A.set(S,N),c=c.add(S)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,A))}return W.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,i,s,l){return function(f){return Ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):Zv(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,s,l):this.getDocumentsMatchingCollectionQuery(t,i,s,l)}getNextDocuments(t,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,s,l).next(c=>{const f=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,s.largestBatchId,l-c.size):W.resolve(ja());let m=bl,p=c;return f.next(y=>W.forEach(y,(C,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),c.get(C)?W.resolve():this.remoteDocumentCache.getEntry(t,C).next(S=>{p=p.insert(C,S)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,p,y,Lt())).next(C=>({batchId:m,changes:Y9(C)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new Ct(i)).next(s=>{let l=gl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,s,l){const c=i.collectionGroup;let f=gl();return this.indexManager.getCollectionParents(t,c).next(m=>W.forEach(m,p=>{const y=function(A,S){return new $c(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(i,p.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(C=>{C.forEach((A,S)=>{f=f.insert(A,S)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,i,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,s.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,s,c,l))).next(f=>{c.forEach((p,y)=>{const C=y.getKey();f.get(C)===null&&(f=f.insert(C,rn.newInvalidDocument(C)))});let m=gl();return f.forEach((p,y)=>{const C=c.get(p);C!==void 0&&Al(C.mutation,y,Rn.empty(),Ve.now()),Zc(i,y)&&(m=m.insert(p,y))}),m})}}/**
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
 */class $_{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return W.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Ei(l.createTime)}}(i)),W.resolve()}getNamedQuery(t,i){return W.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:z_(l.bundledQuery),readTime:Ei(l.readTime)}}(i)),W.resolve()}}/**
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
 */class X_{constructor(){this.overlays=new de(Ct.comparator),this.Rr=new Map}getOverlay(t,i){return W.resolve(this.overlays.get(i))}getOverlays(t,i){const s=ja();return W.forEach(i,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,i,s){return s.forEach((l,c)=>{this.Et(t,i,c)}),W.resolve()}removeOverlaysForBatchId(t,i,s){const l=this.Rr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),W.resolve()}getOverlaysForCollection(t,i,s){const l=ja(),c=i.length+1,f=new Ct(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&l.set(p.getKey(),p)}return W.resolve(l)}getOverlaysForCollectionGroup(t,i,s,l){let c=new de((y,C)=>y-C);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let C=c.get(y.largestBatchId);C===null&&(C=ja(),c=c.insert(y.largestBatchId,C)),C.set(y.getKey(),y)}}const m=ja(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,C)=>m.set(y,C)),!(m.size()>=l)););return W.resolve(m)}Et(t,i,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Rr.get(l.largestBatchId).delete(s.key);this.Rr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new m_(i,s));let c=this.Rr.get(i);c===void 0&&(c=Lt(),this.Rr.set(i,c)),this.Rr.set(i,c.add(s.key))}}/**
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
 */class Z_{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(t){return W.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.Vr=new Oe(He.mr),this.gr=new Oe(He.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const s=new He(t,i);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(t,i){t.forEach(s=>this.addReference(s,i))}removeReference(t,i){this.wr(new He(t,i))}br(t,i){t.forEach(s=>this.removeReference(s,i))}Sr(t){const i=new Ct(new le([])),s=new He(i,t),l=new He(i,t+1),c=[];return this.gr.forEachInRange([s,l],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new Ct(new le([])),s=new He(i,t),l=new He(i,t+1);let c=Lt();return this.gr.forEachInRange([s,l],f=>{c=c.add(f.key)}),c}containsKey(t){const i=new He(t,0),s=this.Vr.firstAfterOrEqual(i);return s!==null&&t.isEqual(s.key)}}class He{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return Ct.comparator(t.key,i.key)||Pt(t.Cr,i.Cr)}static pr(t,i){return Pt(t.Cr,i.Cr)||Ct.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new Oe(He.mr)}checkEmpty(t){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,s,l){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new d_(c,i,s,l);this.mutationQueue.push(f);for(const m of l)this.Mr=this.Mr.add(new He(m.key,c)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(t,i){return W.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const s=i+1,l=this.Nr(s),c=l<0?0:l;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?d2:this.Fr-1)}getAllMutationBatches(t){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const s=new He(i,0),l=new He(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,l],f=>{const m=this.Or(f.Cr);c.push(m)}),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,i){let s=new Oe(Pt);return i.forEach(l=>{const c=new He(l,0),f=new He(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],m=>{s=s.add(m.Cr)})}),W.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(t,i){const s=i.path,l=s.length+1;let c=s;Ct.isDocumentKey(c)||(c=c.child(""));const f=new He(new Ct(c),0);let m=new Oe(Pt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(m=m.add(p.Cr)),!0)},f),W.resolve(this.Br(m))}Br(t){const i=[];return t.forEach(s=>{const l=this.Or(s);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){Wt(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return W.forEach(i.mutations,l=>{const c=new He(l.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=s})}qn(t){}containsKey(t,i){const s=new He(i,0),l=this.Mr.firstAfterOrEqual(s);return W.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,W.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t){this.kr=t,this.docs=function(){return new de(Ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const s=i.key,l=this.docs.get(s),c=l?l.size:0,f=this.kr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const s=this.docs.get(i);return W.resolve(s?s.document.mutableCopy():rn.newInvalidDocument(i))}getEntries(t,i){let s=rr();return i.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():rn.newInvalidDocument(l))}),W.resolve(s)}getDocumentsMatchingQuery(t,i,s,l){let c=rr();const f=i.path,m=new Ct(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:C}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||Dv(Rv(C),s)<=0||(l.has(C.key)||Zc(i,C))&&(c=c.insert(C.key,C.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(t,i,s,l){At()}qr(t,i){return W.forEach(this.docs,s=>i(s))}newChangeBuffer(t){return new tC(this)}getSize(t){return W.resolve(this.size)}}class tC extends Q_{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(s)}),W.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t){this.persistence=t,this.Qr=new Ya(i=>g2(i),y2),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new A2,this.targetCount=0,this.Ur=Xs.Kn()}forEachTarget(t,i){return this.Qr.forEach((s,l)=>i(l)),W.resolve()}getLastRemoteSnapshotVersion(t){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return W.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(t,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.$r&&(this.$r=i),W.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new Xs(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,W.resolve()}updateTargetData(t,i){return this.zn(i),W.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,W.resolve()}removeTargets(t,i,s){let l=0;const c=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=i&&s.get(m.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(t,m.targetId)),l++)}),W.waitFor(c).next(()=>l)}getTargetCount(t){return W.resolve(this.targetCount)}getTargetData(t,i){const s=this.Qr.get(i)||null;return W.resolve(s)}addMatchingKeys(t,i,s){return this.Kr.yr(i,s),W.resolve()}removeMatchingKeys(t,i,s){this.Kr.br(i,s);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach(f=>{c.push(l.markPotentiallyOrphaned(t,f))}),W.waitFor(c)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),W.resolve()}getMatchingKeysForTargetId(t,i){const s=this.Kr.vr(i);return W.resolve(s)}containsKey(t,i){return W.resolve(this.Kr.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y7{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new Qc(0),this.zr=!1,this.zr=!0,this.jr=new Z_,this.referenceDelegate=t(this),this.Hr=new eC(this),this.indexManager=new P_,this.remoteDocumentCache=function(l){return new J_(l)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new U_(i),this.Yr=new $_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new X_,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let s=this.Wr[t.toKey()];return s||(s=new W_(i,this.referenceDelegate),this.Wr[t.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,s){ct("MemoryPersistence","Starting transaction:",t);const l=new nC(this.Gr.next());return this.referenceDelegate.Zr(),s(l).next(c=>this.referenceDelegate.Xr(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}ei(t,i){return W.or(Object.values(this.Wr).map(s=>()=>s.containsKey(t,i)))}}class nC extends Iv{constructor(t){super(),this.currentSequenceNumber=t}}class S2{constructor(t){this.persistence=t,this.ti=new A2,this.ni=null}static ri(t){return new S2(t)}get ii(){if(this.ni)return this.ni;throw At()}addReference(t,i,s){return this.ti.addReference(s,i),this.ii.delete(s.toString()),W.resolve()}removeReference(t,i,s){return this.ti.removeReference(s,i),this.ii.add(s.toString()),W.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),W.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,s=>{const l=Ct.fromPath(s);return this.si(t,l).next(c=>{c||i.removeEntry(l,wt.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(s=>{s?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return W.or([()=>W.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Lc{constructor(t,i){this.persistence=t,this.oi=new Ya(s=>Vv(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=G_(this,i)}static ri(t,i){return new Lc(t,i)}Zr(){}Xr(t){return W.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>i.next(l=>s+l))}sr(t){let i=0;return this.rr(t,s=>{i++}).next(()=>i)}rr(t,i){return W.forEach(this.oi,(s,l)=>this.ar(t,s,l).next(c=>c?W.resolve():i(l)))}removeTargets(t,i,s){return this.persistence.getTargetCache().removeTargets(t,i,s)}removeOrphanedDocuments(t,i){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.qr(t,f=>this.ar(t,f,i).next(m=>{m||(s++,c.removeEntry(f,wt.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),W.resolve()}removeTarget(t,i){const s=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),W.resolve()}removeReference(t,i,s){return this.oi.set(s,t.currentSequenceNumber),W.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),W.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=_c(t.data.value)),i}ar(t,i,s){return W.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return W.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(t,i,s,l){this.targetId=t,this.fromCache=i,this.Hi=s,this.Ji=l}static Yi(t,i){let s=Lt(),l=Lt();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new w2(t,i.fromCache,s,l)}}/**
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
 */class rC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Vp()?8:Mv(Ip())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,s,l){const c={result:null};return this.rs(t,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(t,i,l,s).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new iC;return this._s(t,i,f).next(m=>{if(c.result=m,this.Xi)return this.us(t,i,f,m.size)})}).next(()=>c.result)}us(t,i,s,l){return s.documentReadCount<this.es?(zs()<=Ft.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",Ps(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(zs()<=Ft.DEBUG&&ct("QueryEngine","Query:",Ps(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ts*l?(zs()<=Ft.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",Ps(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_i(i))):W.resolve())}rs(t,i){if(Q6(i))return W.resolve(null);let s=_i(i);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=P4(i,null,"F"),s=_i(i)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const f=Lt(...c);return this.ns.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.cs(i,m);return this.ls(i,y,f,p.readTime)?this.rs(t,P4(i,null,"F")):this.hs(t,y,i,p)}))})))}ss(t,i,s,l){return Q6(i)||l.isEqual(wt.min())?W.resolve(null):this.ns.getDocuments(t,s).next(c=>{const f=this.cs(i,c);return this.ls(i,f,s,l)?W.resolve(null):(zs()<=Ft.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ps(i)),this.hs(t,f,i,bv(l,bl)).next(m=>m))})}cs(t,i){let s=new Oe(Q9(t));return i.forEach((l,c)=>{Zc(t,c)&&(s=s.add(c))}),s}ls(t,i,s,l){if(t.limit===null)return!1;if(s.size!==i.size)return!0;const c=t.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}_s(t,i,s){return zs()<=Ft.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",Ps(i)),this.ns.getDocumentsMatchingQuery(t,i,Xr.min(),s)}hs(t,i,s,l){return this.ns.getDocumentsMatchingQuery(t,s,l).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
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
 */const b2="LocalStore",aC=3e8;class sC{constructor(t,i,s,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new de(Pt),this.Is=new Ya(c=>g2(c),y2),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(s)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Y_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function oC(r,t,i,s){return new sC(r,t,i,s)}async function v7(r,t){const i=xt(r);return await i.persistence.runTransaction("Handle user change","readonly",s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,i.As(t),i.mutationQueue.getAllMutationBatches(s))).next(c=>{const f=[],m=[];let p=Lt();for(const y of l){f.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}for(const y of c){m.push(y.batchId);for(const C of y.mutations)p=p.add(C.key)}return i.localDocuments.getDocuments(s,p).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function lC(r,t){const i=xt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,C){const A=y.batch,S=A.keys();let N=W.resolve();return S.forEach(k=>{N=N.next(()=>C.getEntry(p,k)).next(K=>{const z=y.docVersions.get(k);Wt(z!==null),K.version.compareTo(z)<0&&(A.applyToRemoteDocument(K,y),K.isValidDocument()&&(K.setReadTime(y.commitVersion),C.addEntry(K)))})}),N.next(()=>m.mutationQueue.removeMutationBatch(p,A))}(i,s,t,c).next(()=>c.apply(s)).next(()=>i.mutationQueue.performConsistencyCheck(s)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Lt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>i.localDocuments.getDocuments(s,l))})}function _7(r){const t=xt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function uC(r,t){const i=xt(r),s=t.snapshotVersion;let l=i.Ts;return i.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const f=i.ds.newChangeBuffer({trackRemovals:!0});l=i.Ts;const m=[];t.targetChanges.forEach((C,A)=>{const S=l.get(A);if(!S)return;m.push(i.Hr.removeMatchingKeys(c,C.removedDocuments,A).next(()=>i.Hr.addMatchingKeys(c,C.addedDocuments,A)));let N=S.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(A)!==null?N=N.withResumeToken(Xe.EMPTY_BYTE_STRING,wt.min()).withLastLimboFreeSnapshotVersion(wt.min()):C.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(C.resumeToken,s)),l=l.insert(A,N),function(K,z,F){return K.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=aC?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(S,N,C)&&m.push(i.Hr.updateTargetData(c,N))});let p=rr(),y=Lt();if(t.documentUpdates.forEach(C=>{t.resolvedLimboDocuments.has(C)&&m.push(i.persistence.referenceDelegate.updateLimboDocument(c,C))}),m.push(cC(c,f,t.documentUpdates).next(C=>{p=C.Vs,y=C.fs})),!s.isEqual(wt.min())){const C=i.Hr.getLastRemoteSnapshotVersion(c).next(A=>i.Hr.setTargetsMetadata(c,c.currentSequenceNumber,s));m.push(C)}return W.waitFor(m).next(()=>f.apply(c)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,p,y)).next(()=>p)}).then(c=>(i.Ts=l,c))}function cC(r,t,i){let s=Lt(),l=Lt();return i.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let f=rr();return i.forEach((m,p)=>{const y=c.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(m)),p.isNoDocument()&&p.version.isEqual(wt.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):ct(b2,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:f,fs:l}})}function hC(r,t){const i=xt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=d2),i.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function fC(r,t){const i=xt(r);return i.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return i.Hr.getTargetData(s,t).next(c=>c?(l=c,W.resolve(l)):i.Hr.allocateTargetId(s).next(f=>(l=new Hr(t,f,"TargetPurposeListen",s.currentSequenceNumber),i.Hr.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=i.Ts.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Ts=i.Ts.insert(s.targetId,s),i.Is.set(t,s.targetId)),s})}async function F4(r,t,i){const s=xt(r),l=s.Ts.get(t),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,f=>s.persistence.referenceDelegate.removeTarget(f,l))}catch(f){if(!ro(f))throw f;ct(b2,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ts=s.Ts.remove(t),s.Is.delete(l.target)}function sf(r,t,i){const s=xt(r);let l=wt.min(),c=Lt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,C){const A=xt(p),S=A.Is.get(C);return S!==void 0?W.resolve(A.Ts.get(S)):A.Hr.getTargetData(y,C)}(s,f,_i(t)).next(m=>{if(m)return l=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{c=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,t,i?l:wt.min(),i?c:Lt())).next(m=>(dC(s,Jv(t),m),{documents:m,gs:c})))}function dC(r,t,i){let s=r.Es.get(t)||wt.min();i.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Es.set(t,s)}class of{constructor(){this.activeTargetIds=a_()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mC{constructor(){this.ho=new of,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,s){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,s){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new of,Promise.resolve()}handleUserChange(t,i,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class pC{To(t){}shutdown(){}}/**
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
 */const lf="ConnectivityMonitor";class uf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ct(lf,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ct(lf,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const A4="RestConnection",gC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${s}/databases/${l}`,this.wo=this.databaseId.database===Ic?`project_id=${s}`:`project_id=${s}&database_id=${l}`}bo(t,i,s,l,c){const f=G4(),m=this.So(t,i.toUriEncodedString());ct(A4,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,l,c),this.vo(t,m,p,s).then(y=>(ct(A4,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Gs(A4,`RPC '${t}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Co(t,i,s,l,c,f){return this.bo(t,i,s,l,c)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}So(t,i){const s=gC[t];return`${this.po}/v1/${i}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const en="WebChannelConnection";class _C extends yC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,s,l){const c=G4();return new Promise((f,m)=>{const p=new T9;p.setWithCredentials(!0),p.listenOnce(A9.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case vc.NO_ERROR:const C=p.getResponseJson();ct(en,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(C)),f(C);break;case vc.TIMEOUT:ct(en,`RPC '${t}' ${c} timed out`),m(new yt(et.DEADLINE_EXCEEDED,"Request time out"));break;case vc.HTTP_ERROR:const A=p.getStatus();if(ct(en,`RPC '${t}' ${c} failed with status:`,A,"response text:",p.getResponseText()),A>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const k=function(z){const F=z.toLowerCase().replace(/_/g,"-");return Object.values(et).indexOf(F)>=0?F:et.UNKNOWN}(N.status);m(new yt(k,N.message))}else m(new yt(et.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new yt(et.UNAVAILABLE,"Connection failed."));break;default:At()}}finally{ct(en,`RPC '${t}' ${c} completed.`)}});const y=JSON.stringify(l);ct(en,`RPC '${t}' ${c} sending request:`,l),p.send(i,"POST",y,s,15)})}Wo(t,i,s){const l=G4(),c=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=b9(),m=w9(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,i,s),p.encodeInitMessageHeaders=!0;const C=c.join("");ct(en,`Creating RPC '${t}' stream ${l}: ${C}`,p);const A=f.createWebChannel(C,p);let S=!1,N=!1;const k=new vC({Fo:z=>{N?ct(en,`Not sending because RPC '${t}' stream ${l} is closed:`,z):(S||(ct(en,`Opening RPC '${t}' stream ${l} transport.`),A.open(),S=!0),ct(en,`RPC '${t}' stream ${l} sending:`,z),A.send(z))},Mo:()=>A.close()}),K=(z,F,X)=>{z.listen(F,J=>{try{X(J)}catch(ut){setTimeout(()=>{throw ut},0)}})};return K(A,pl.EventType.OPEN,()=>{N||(ct(en,`RPC '${t}' stream ${l} transport opened.`),k.Qo())}),K(A,pl.EventType.CLOSE,()=>{N||(N=!0,ct(en,`RPC '${t}' stream ${l} transport closed`),k.Ko())}),K(A,pl.EventType.ERROR,z=>{N||(N=!0,Gs(en,`RPC '${t}' stream ${l} transport errored:`,z),k.Ko(new yt(et.UNAVAILABLE,"The operation could not be completed")))}),K(A,pl.EventType.MESSAGE,z=>{var F;if(!N){const X=z.data[0];Wt(!!X);const J=X,ut=(J==null?void 0:J.error)||((F=J[0])===null||F===void 0?void 0:F.error);if(ut){ct(en,`RPC '${t}' stream ${l} received error:`,ut);const st=ut.status;let dt=function(w){const I=Se[w];if(I!==void 0)return s7(I)}(st),M=ut.message;dt===void 0&&(dt=et.INTERNAL,M="Unknown error status: "+st+" with message "+ut.message),N=!0,k.Ko(new yt(dt,M)),A.close()}else ct(en,`RPC '${t}' stream ${l} received:`,X),k.Uo(X)}}),K(m,S9.STAT_EVENT,z=>{z.stat===O4.PROXY?ct(en,`RPC '${t}' stream ${l} detected buffering proxy`):z.stat===O4.NOPROXY&&ct(en,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function S4(){return typeof document<"u"?document:null}/**
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
 */function e1(r){return new A_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C7{constructor(t,i,s=1e3,l=1.5,c=6e4){this.Ti=t,this.timerId=i,this.Go=s,this.zo=l,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-s);l>0&&ct("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="PersistentStream";class E7{constructor(t,i,s,l,c,f,m,p){this.Ti=t,this.n_=s,this.r_=l,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new C7(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===et.RESOURCE_EXHAUSTED?(ir(i.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===et.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.i_===i&&this.V_(s,l)},s=>{t(()=>{const l=new yt(et.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(l)})})}V_(t,i){const s=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{s(()=>this.m_(l))}),this.stream.onMessage(l=>{s(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ct(cf,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(ct(cf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CC extends E7{constructor(t,i,s,l,c,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}f_(t,i){return this.connection.Wo("Listen",t,i)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const i=b_(this.serializer,t),s=function(c){if(!("targetChange"in c))return wt.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?wt.min():f.readTime?Ei(f.readTime):wt.min()}(t);return this.listener.p_(i,s)}y_(t){const i={};i.database=H4(this.serializer),i.addTarget=function(c,f){let m;const p=f.target;if(m=z4(p)?{documents:x_(c,p)}:{query:I_(c,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=u7(c,f.resumeToken);const y=j4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(wt.min())>0){m.readTime=kc(c,f.snapshotVersion.toTimestamp());const y=j4(c,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=N_(this.serializer,t);s&&(i.labels=s),this.I_(i)}w_(t){const i={};i.database=H4(this.serializer),i.removeTarget=t,this.I_(i)}}class EC extends E7{constructor(t,i,s,l,c,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return Wt(!!t.streamToken),this.lastStreamToken=t.streamToken,Wt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Wt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=D_(t.writeResults,t.commitTime),s=Ei(t.commitTime);return this.listener.v_(s,i)}C_(){const t={};t.database=H4(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(s=>R_(this.serializer,s))};this.I_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{}class AC extends TC{constructor(t,i,s,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new yt(et.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(t,B4(i,s),l,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new yt(et.UNKNOWN,c.toString())})}Co(t,i,s,l,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(t,B4(i,s),l,f,m,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===et.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new yt(et.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class SC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ir(i),this.N_=!1):ct("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="RemoteStore";class wC{constructor(t,i,s,l,c){this.localStore=t,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{s.enqueueAndForget(async()=>{$a(this)&&(ct(Ga,"Restarting streams for network reachability change."),await async function(p){const y=xt(p);y.W_.add(4),await Ul(y),y.j_.set("Unknown"),y.W_.delete(4),await n1(y)}(this))})}),this.j_=new SC(s,l)}}async function n1(r){if($a(r))for(const t of r.G_)await t(!0)}async function Ul(r){for(const t of r.G_)await t(!1)}function T7(r,t){const i=xt(r);i.U_.has(t.targetId)||(i.U_.set(t.targetId,t),I2(i)?x2(i):ao(i).c_()&&D2(i,t))}function R2(r,t){const i=xt(r),s=ao(i);i.U_.delete(t),s.c_()&&A7(i,t),i.U_.size===0&&(s.c_()?s.P_():$a(i)&&i.j_.set("Unknown"))}function D2(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(wt.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}ao(r).y_(t)}function A7(r,t){r.H_.Ne(t),ao(r).w_(t)}function x2(r){r.H_=new __({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),ao(r).start(),r.j_.B_()}function I2(r){return $a(r)&&!ao(r).u_()&&r.U_.size>0}function $a(r){return xt(r).W_.size===0}function S7(r){r.H_=void 0}async function bC(r){r.j_.set("Online")}async function RC(r){r.U_.forEach((t,i)=>{D2(r,t)})}async function DC(r,t){S7(r),I2(r)?(r.j_.q_(t),x2(r)):r.j_.set("Unknown")}async function xC(r,t,i){if(r.j_.set("Online"),t instanceof l7&&t.state===2&&t.cause)try{await async function(l,c){const f=c.cause;for(const m of c.targetIds)l.U_.has(m)&&(await l.remoteSyncer.rejectListen(m,f),l.U_.delete(m),l.H_.removeTarget(m))}(r,t)}catch(s){ct(Ga,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Uc(r,s)}else if(t instanceof Tc?r.H_.We(t):t instanceof o7?r.H_.Ze(t):r.H_.je(t),!i.isEqual(wt.min()))try{const s=await _7(r.localStore);i.compareTo(s)>=0&&await function(c,f){const m=c.H_.ot(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const C=c.U_.get(y);C&&c.U_.set(y,C.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const C=c.U_.get(p);if(!C)return;c.U_.set(p,C.withResumeToken(Xe.EMPTY_BYTE_STRING,C.snapshotVersion)),A7(c,p);const A=new Hr(C.target,p,y,C.sequenceNumber);D2(c,A)}),c.remoteSyncer.applyRemoteEvent(m)}(r,i)}catch(s){ct(Ga,"Failed to raise snapshot:",s),await Uc(r,s)}}async function Uc(r,t,i){if(!ro(t))throw t;r.W_.add(1),await Ul(r),r.j_.set("Offline"),i||(i=()=>_7(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ct(Ga,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await n1(r)})}function w7(r,t){return t().catch(i=>Uc(r,i,t))}async function i1(r){const t=xt(r),i=ta(t);let s=t.K_.length>0?t.K_[t.K_.length-1].batchId:d2;for(;IC(t);)try{const l=await hC(t.localStore,s);if(l===null){t.K_.length===0&&i.P_();break}s=l.batchId,MC(t,l)}catch(l){await Uc(t,l)}b7(t)&&R7(t)}function IC(r){return $a(r)&&r.K_.length<10}function MC(r,t){r.K_.push(t);const i=ta(r);i.c_()&&i.b_&&i.S_(t.mutations)}function b7(r){return $a(r)&&!ta(r).u_()&&r.K_.length>0}function R7(r){ta(r).start()}async function NC(r){ta(r).C_()}async function VC(r){const t=ta(r);for(const i of r.K_)t.S_(i.mutations)}async function OC(r,t,i){const s=r.K_.shift(),l=C2.from(s,t,i);await w7(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await i1(r)}async function kC(r,t){t&&ta(r).b_&&await async function(s,l){if(function(f){return g_(f)&&f!==et.ABORTED}(l.code)){const c=s.K_.shift();ta(s).h_(),await w7(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await i1(s)}}(r,t),b7(r)&&R7(r)}async function hf(r,t){const i=xt(r);i.asyncQueue.verifyOperationInProgress(),ct(Ga,"RemoteStore received new credentials");const s=$a(i);i.W_.add(3),await Ul(i),s&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await n1(i)}async function LC(r,t){const i=xt(r);t?(i.W_.delete(2),await n1(i)):t||(i.W_.add(2),await Ul(i),i.j_.set("Unknown"))}function ao(r){return r.J_||(r.J_=function(i,s,l){const c=xt(i);return c.M_(),new CC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:bC.bind(null,r),No:RC.bind(null,r),Lo:DC.bind(null,r),p_:xC.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),I2(r)?x2(r):r.j_.set("Unknown")):(await r.J_.stop(),S7(r))})),r.J_}function ta(r){return r.Y_||(r.Y_=function(i,s,l){const c=xt(i);return c.M_(),new EC(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:NC.bind(null,r),Lo:kC.bind(null,r),D_:VC.bind(null,r),v_:OC.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await i1(r)):(await r.Y_.stop(),r.K_.length>0&&(ct(Ga,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(t,i,s,l,c){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,s,l,c){const f=Date.now()+s,m=new M2(t,i,f,l,c);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new yt(et.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N2(r,t){if(ir("AsyncQueue",`${t}: ${r}`),ro(r))return new yt(et.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{static emptySet(t){return new Hs(t.comparator)}constructor(t){this.comparator=t?(i,s)=>t(i,s)||Ct.comparator(i.key,s.key):(i,s)=>Ct.comparator(i.key,s.key),this.keyedMap=gl(),this.sortedSet=new de(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const i=this.keyedMap.get(t);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((i,s)=>(t(i),!1))}add(t){const i=this.delete(t.key);return i.copy(i.keyedMap.insert(t.key,t),i.sortedSet.insert(t,null))}delete(t){const i=this.get(t);return i?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(i)):this}isEqual(t){if(!(t instanceof Hs)||this.size!==t.size)return!1;const i=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(i=>{t.push(i.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,i){const s=new Hs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=i,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.Z_=new de(Ct.comparator)}track(t){const i=t.doc.key,s=this.Z_.get(i);s?t.type!==0&&s.type===3?this.Z_=this.Z_.insert(i,t):t.type===3&&s.type!==1?this.Z_=this.Z_.insert(i,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Z_=this.Z_.insert(i,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Z_=this.Z_.remove(i):t.type===1&&s.type===2?this.Z_=this.Z_.insert(i,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Z_=this.Z_.insert(i,{type:2,doc:t.doc}):At():this.Z_=this.Z_.insert(i,t)}X_(){const t=[];return this.Z_.inorderTraversal((i,s)=>{t.push(s)}),t}}class Zs{constructor(t,i,s,l,c,f,m,p,y){this.query=t,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,i,s,l,c){const f=[];return i.forEach(m=>{f.push({type:0,doc:m})}),new Zs(t,i,Hs.emptySet(i),f,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const i=this.docChanges,s=t.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class zC{constructor(){this.queries=df(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,s){const l=xt(i),c=l.queries;l.queries=df(),c.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new yt(et.ABORTED,"Firestore shutting down"))}}function df(){return new Ya(r=>G9(r),Xc)}async function D7(r,t){const i=xt(r);let s=3;const l=t.query;let c=i.queries.get(l);c?!c.na()&&t.ra()&&(s=2):(c=new UC,s=t.ra()?0:1);try{switch(s){case 0:c.ea=await i.onListen(l,!0);break;case 1:c.ea=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(f){const m=N2(f,`Initialization of query '${Ps(t.query)}' failed`);return void t.onError(m)}i.queries.set(l,c),c.ta.push(t),t.sa(i.onlineState),c.ea&&t.oa(c.ea)&&V2(i)}async function x7(r,t){const i=xt(r),s=t.query;let l=3;const c=i.queries.get(s);if(c){const f=c.ta.indexOf(t);f>=0&&(c.ta.splice(f,1),c.ta.length===0?l=t.ra()?0:1:!c.na()&&t.ra()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function PC(r,t){const i=xt(r);let s=!1;for(const l of t){const c=l.query,f=i.queries.get(c);if(f){for(const m of f.ta)m.oa(l)&&(s=!0);f.ea=l}}s&&V2(i)}function jC(r,t,i){const s=xt(r),l=s.queries.get(t);if(l)for(const c of l.ta)c.onError(i);s.queries.delete(t)}function V2(r){r.ia.forEach(t=>{t.next()})}var Q4,mf;(mf=Q4||(Q4={}))._a="default",mf.Cache="cache";class I7{constructor(t,i,s){this.query=t,this.aa=i,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Zs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let i=!1;return this.ua?this.la(t)&&(this.aa.next(t),i=!0):this.ha(t,this.onlineState)&&(this.Pa(t),i=!0),this.ca=t,i}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let i=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),i=!0),i}ha(t,i){if(!t.fromCache||!this.ra())return!0;const s=i!=="Offline";return(!this.options.Ta||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||i==="Offline")}la(t){if(t.docChanges.length>0)return!0;const i=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}Pa(t){t=Zs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Q4.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M7{constructor(t){this.key=t}}class N7{constructor(t){this.key=t}}class BC{constructor(t,i){this.query=t,this.fa=i,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Lt(),this.mutatedKeys=Lt(),this.ya=Q9(t),this.wa=new Hs(this.ya)}get ba(){return this.fa}Sa(t,i){const s=i?i.Da:new ff,l=i?i.wa:this.wa;let c=i?i.mutatedKeys:this.mutatedKeys,f=l,m=!1;const p=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((C,A)=>{const S=l.get(C),N=Zc(this.query,A)?A:null,k=!!S&&this.mutatedKeys.has(S.key),K=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let z=!1;S&&N?S.data.isEqual(N.data)?k!==K&&(s.track({type:3,doc:N}),z=!0):this.va(S,N)||(s.track({type:2,doc:N}),z=!0,(p&&this.ya(N,p)>0||y&&this.ya(N,y)<0)&&(m=!0)):!S&&N?(s.track({type:0,doc:N}),z=!0):S&&!N&&(s.track({type:1,doc:S}),z=!0,(p||y)&&(m=!0)),z&&(N?(f=f.add(N),c=K?c.add(C):c.delete(C)):(f=f.delete(C),c=c.delete(C)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const C=this.query.limitType==="F"?f.last():f.first();f=f.delete(C.key),c=c.delete(C.key),s.track({type:1,doc:C})}return{wa:f,Da:s,ls:m,mutatedKeys:c}}va(t,i){return t.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(t,i,s,l){const c=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const f=t.Da.X_();f.sort((C,A)=>function(N,k){const K=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return At()}};return K(N)-K(k)}(C.type,A.type)||this.ya(C.doc,A.doc)),this.Ca(s),l=l!=null&&l;const m=i&&!l?this.Fa():[],p=this.pa.size===0&&this.current&&!l?1:0,y=p!==this.ga;return this.ga=p,f.length!==0||y?{snapshot:new Zs(this.query,t.wa,c,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ff,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(i=>this.fa=this.fa.add(i)),t.modifiedDocuments.forEach(i=>{}),t.removedDocuments.forEach(i=>this.fa=this.fa.delete(i)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Lt(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const i=[];return t.forEach(s=>{this.pa.has(s)||i.push(new N7(s))}),this.pa.forEach(s=>{t.has(s)||i.push(new M7(s))}),i}Oa(t){this.fa=t.gs,this.pa=Lt();const i=this.Sa(t.documents);return this.applyChanges(i,!0)}Na(){return Zs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const O2="SyncEngine";class qC{constructor(t,i,s){this.query=t,this.targetId=i,this.view=s}}class HC{constructor(t){this.key=t,this.Ba=!1}}class FC{constructor(t,i,s,l,c,f){this.localStore=t,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Ya(m=>G9(m),Xc),this.qa=new Map,this.Qa=new Set,this.$a=new de(Ct.comparator),this.Ka=new Map,this.Ua=new A2,this.Wa={},this.Ga=new Map,this.za=Xs.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function GC(r,t,i=!0){const s=z7(r);let l;const c=s.ka.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Na()):l=await V7(s,t,i,!0),l}async function QC(r,t){const i=z7(r);await V7(i,t,!0,!1)}async function V7(r,t,i,s){const l=await fC(r.localStore,_i(t)),c=l.targetId,f=r.sharedClientState.addLocalQueryTarget(c,i);let m;return s&&(m=await KC(r,t,c,f==="current",l.resumeToken)),r.isPrimaryClient&&i&&T7(r.remoteStore,l),m}async function KC(r,t,i,s,l){r.Ha=(A,S,N)=>async function(K,z,F,X){let J=z.view.Sa(F);J.ls&&(J=await sf(K.localStore,z.query,!1).then(({documents:M})=>z.view.Sa(M,J)));const ut=X&&X.targetChanges.get(z.targetId),st=X&&X.targetMismatches.get(z.targetId)!=null,dt=z.view.applyChanges(J,K.isPrimaryClient,ut,st);return gf(K,z.targetId,dt.Ma),dt.snapshot}(r,A,S,N);const c=await sf(r.localStore,t,!0),f=new BC(t,c.gs),m=f.Sa(c.documents),p=Ll.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),y=f.applyChanges(m,r.isPrimaryClient,p);gf(r,i,y.Ma);const C=new qC(t,i,f);return r.ka.set(t,C),r.qa.has(i)?r.qa.get(i).push(t):r.qa.set(i,[t]),y.snapshot}async function YC(r,t,i){const s=xt(r),l=s.ka.get(t),c=s.qa.get(l.targetId);if(c.length>1)return s.qa.set(l.targetId,c.filter(f=>!Xc(f,t))),void s.ka.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await F4(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),i&&R2(s.remoteStore,l.targetId),K4(s,l.targetId)}).catch(io)):(K4(s,l.targetId),await F4(s.localStore,l.targetId,!0))}async function $C(r,t){const i=xt(r),s=i.ka.get(t),l=i.qa.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),R2(i.remoteStore,s.targetId))}async function XC(r,t,i){const s=iE(r);try{const l=await function(f,m){const p=xt(f),y=Ve.now(),C=m.reduce((N,k)=>N.add(k.key),Lt());let A,S;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let k=rr(),K=Lt();return p.ds.getEntries(N,C).next(z=>{k=z,k.forEach((F,X)=>{X.isValidDocument()||(K=K.add(F))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,k)).next(z=>{A=z;const F=[];for(const X of m){const J=h_(X,A.get(X.key).overlayedDocument);J!=null&&F.push(new aa(X.key,J,z9(J.value.mapValue),Ci.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,F,m)}).next(z=>{S=z;const F=z.applyToLocalDocumentSet(A,K);return p.documentOverlayCache.saveOverlays(N,z.batchId,F)})}).then(()=>({batchId:S.batchId,changes:Y9(A)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(f,m,p){let y=f.Wa[f.currentUser.toKey()];y||(y=new de(Pt)),y=y.insert(m,p),f.Wa[f.currentUser.toKey()]=y}(s,l.batchId,i),await zl(s,l.changes),await i1(s.remoteStore)}catch(l){const c=N2(l,"Failed to persist write");i.reject(c)}}async function O7(r,t){const i=xt(r);try{const s=await uC(i.localStore,t);t.targetChanges.forEach((l,c)=>{const f=i.Ka.get(c);f&&(Wt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?f.Ba=!0:l.modifiedDocuments.size>0?Wt(f.Ba):l.removedDocuments.size>0&&(Wt(f.Ba),f.Ba=!1))}),await zl(i,s,t)}catch(s){await io(s)}}function pf(r,t,i){const s=xt(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.ka.forEach((c,f)=>{const m=f.view.sa(t);m.snapshot&&l.push(m.snapshot)}),function(f,m){const p=xt(f);p.onlineState=m;let y=!1;p.queries.forEach((C,A)=>{for(const S of A.ta)S.sa(m)&&(y=!0)}),y&&V2(p)}(s.eventManager,t),l.length&&s.La.p_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ZC(r,t,i){const s=xt(r);s.sharedClientState.updateQueryState(t,"rejected",i);const l=s.Ka.get(t),c=l&&l.key;if(c){let f=new de(Ct.comparator);f=f.insert(c,rn.newNoDocument(c,wt.min()));const m=Lt().add(c),p=new t1(wt.min(),new Map,new de(Pt),f,m);await O7(s,p),s.$a=s.$a.remove(c),s.Ka.delete(t),k2(s)}else await F4(s.localStore,t,!1).then(()=>K4(s,t,i)).catch(io)}async function WC(r,t){const i=xt(r),s=t.batch.batchId;try{const l=await lC(i.localStore,t);L7(i,s,null),k7(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await zl(i,l)}catch(l){await io(l)}}async function JC(r,t,i){const s=xt(r);try{const l=await function(f,m){const p=xt(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let C;return p.mutationQueue.lookupMutationBatch(y,m).next(A=>(Wt(A!==null),C=A.keys(),p.mutationQueue.removeMutationBatch(y,A))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,C,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,C)).next(()=>p.localDocuments.getDocuments(y,C))})}(s.localStore,t);L7(s,t,i),k7(s,t),s.sharedClientState.updateMutationState(t,"rejected",i),await zl(s,l)}catch(l){await io(l)}}function k7(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function L7(r,t,i){const s=xt(r);let l=s.Wa[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(i?c.reject(i):c.resolve(),l=l.remove(t)),s.Wa[s.currentUser.toKey()]=l}}function K4(r,t,i=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.qa.get(t))r.ka.delete(s),i&&r.La.Ja(s,i);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(s=>{r.Ua.containsKey(s)||U7(r,s)})}function U7(r,t){r.Qa.delete(t.path.canonicalString());const i=r.$a.get(t);i!==null&&(R2(r.remoteStore,i),r.$a=r.$a.remove(t),r.Ka.delete(i),k2(r))}function gf(r,t,i){for(const s of i)s instanceof M7?(r.Ua.addReference(s.key,t),tE(r,s)):s instanceof N7?(ct(O2,"Document no longer in limbo: "+s.key),r.Ua.removeReference(s.key,t),r.Ua.containsKey(s.key)||U7(r,s.key)):At()}function tE(r,t){const i=t.key,s=i.path.canonicalString();r.$a.get(i)||r.Qa.has(s)||(ct(O2,"New document in limbo: "+i),r.Qa.add(s),k2(r))}function k2(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const i=new Ct(le.fromString(t)),s=r.za.next();r.Ka.set(s,new HC(i)),r.$a=r.$a.insert(i,s),T7(r.remoteStore,new Hr(_i(v2(i.path)),s,"TargetPurposeLimboResolution",Qc.ae))}}async function zl(r,t,i){const s=xt(r),l=[],c=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,t,i).then(y=>{var C;if((y||i)&&s.isPrimaryClient){const A=y?!y.fromCache:(C=i==null?void 0:i.targetChanges.get(p.targetId))===null||C===void 0?void 0:C.current;s.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(y){l.push(y);const A=w2.Yi(p.targetId,y);c.push(A)}}))}),await Promise.all(f),s.La.p_(l),await async function(p,y){const C=xt(p);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>W.forEach(y,S=>W.forEach(S.Hi,N=>C.persistence.referenceDelegate.addReference(A,S.targetId,N)).next(()=>W.forEach(S.Ji,N=>C.persistence.referenceDelegate.removeReference(A,S.targetId,N)))))}catch(A){if(!ro(A))throw A;ct(b2,"Failed to update sequence numbers: "+A)}for(const A of y){const S=A.targetId;if(!A.fromCache){const N=C.Ts.get(S),k=N.snapshotVersion,K=N.withLastLimboFreeSnapshotVersion(k);C.Ts=C.Ts.insert(S,K)}}}(s.localStore,c))}async function eE(r,t){const i=xt(r);if(!i.currentUser.isEqual(t)){ct(O2,"User change. New user:",t.toKey());const s=await v7(i.localStore,t);i.currentUser=t,function(c,f){c.Ga.forEach(m=>{m.forEach(p=>{p.reject(new yt(et.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await zl(i,s.Rs)}}function nE(r,t){const i=xt(r),s=i.Ka.get(t);if(s&&s.Ba)return Lt().add(s.key);{let l=Lt();const c=i.qa.get(t);if(!c)return l;for(const f of c){const m=i.ka.get(f);l=l.unionWith(m.view.ba)}return l}}function z7(r){const t=xt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=O7.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ZC.bind(null,t),t.La.p_=PC.bind(null,t.eventManager),t.La.Ja=jC.bind(null,t.eventManager),t}function iE(r){const t=xt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=WC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=JC.bind(null,t),t}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=e1(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return oC(this.persistence,new rC,t.initialUser,this.serializer)}Xa(t){return new y7(S2.ri,this.serializer)}Za(t){return new mC}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class rE extends zc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){Wt(this.persistence.referenceDelegate instanceof Lc);const s=this.persistence.referenceDelegate.garbageCollector;return new H_(s,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?mn.withCacheSize(this.cacheSizeBytes):mn.DEFAULT;return new y7(s=>Lc.ri(s,i),this.serializer)}}class Y4{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eE.bind(null,this.syncEngine),await LC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zC}()}createDatastore(t){const i=e1(t.databaseInfo.databaseId),s=function(c){return new _C(c)}(t.databaseInfo);return function(c,f,m,p){return new AC(c,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,i)}createRemoteStore(t){return function(s,l,c,f,m){return new wC(s,l,c,f,m)}(this.localStore,this.datastore,t.asyncQueue,i=>pf(this.syncEngine,i,0),function(){return uf.D()?new uf:new pC}())}createSyncEngine(t,i){return function(l,c,f,m,p,y,C){const A=new FC(l,c,f,m,p,y);return C&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const c=xt(l);ct(Ga,"RemoteStore shutting down."),c.W_.add(5),await Ul(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Y4.provider={build:()=>new Y4};/**
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
 */class P7{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):ir("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,i){setTimeout(()=>{this.muted||t(i)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="FirestoreClient";class aE{constructor(t,i,s,l,c){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=nn.UNAUTHENTICATED,this.clientId=D9.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async f=>{ct(ea,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ct(ea,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const s=N2(i,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function w4(r,t){r.asyncQueue.verifyOperationInProgress(),ct(ea,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let s=i.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await v7(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function yf(r,t){r.asyncQueue.verifyOperationInProgress();const i=await sE(r);ct(ea,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(s=>hf(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>hf(t.remoteStore,l)),r._onlineComponents=t}async function sE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ct(ea,"Using user provided OfflineComponentProvider");try{await w4(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===et.FAILED_PRECONDITION||l.code===et.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Gs("Error using user provided cache. Falling back to memory cache: "+i),await w4(r,new zc)}}else ct(ea,"Using default OfflineComponentProvider"),await w4(r,new rE(void 0));return r._offlineComponents}async function j7(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ct(ea,"Using user provided OnlineComponentProvider"),await yf(r,r._uninitializedComponentsProvider._online)):(ct(ea,"Using default OnlineComponentProvider"),await yf(r,new Y4))),r._onlineComponents}function oE(r){return j7(r).then(t=>t.syncEngine)}async function B7(r){const t=await j7(r),i=t.eventManager;return i.onListen=GC.bind(null,t.syncEngine),i.onUnlisten=YC.bind(null,t.syncEngine),i.onFirstRemoteStoreListen=QC.bind(null,t.syncEngine),i.onLastRemoteStoreUnlisten=$C.bind(null,t.syncEngine),i}function lE(r,t,i={}){const s=new Ji;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,p,y){const C=new P7({next:S=>{C.su(),f.enqueueAndForget(()=>x7(c,A));const N=S.docs.has(m);!N&&S.fromCache?y.reject(new yt(et.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&S.fromCache&&p&&p.source==="server"?y.reject(new yt(et.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),A=new I7(v2(m.path),C,{includeMetadataChanges:!0,Ta:!0});return D7(c,A)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}function uE(r,t,i={}){const s=new Ji;return r.asyncQueue.enqueueAndForget(async()=>function(c,f,m,p,y){const C=new P7({next:S=>{C.su(),f.enqueueAndForget(()=>x7(c,A)),S.fromCache&&p.source==="server"?y.reject(new yt(et.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),A=new I7(m,C,{includeMetadataChanges:!0,Ta:!0});return D7(c,A)}(await B7(r),r.asyncQueue,t,i,s)),s.promise}/**
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
 */const vf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H7(r,t,i){if(!i)throw new yt(et.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cE(r,t,i,s){if(t===!0&&s===!0)throw new yt(et.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function _f(r){if(!Ct.isDocumentKey(r))throw new yt(et.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cf(r){if(Ct.isDocumentKey(r))throw new yt(et.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function L2(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":At()}function ar(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new yt(et.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=L2(r);throw new yt(et.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
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
 */const F7="firestore.googleapis.com",Ef=!0;class Tf{constructor(t){var i,s;if(t.host===void 0){if(t.ssl!==void 0)throw new yt(et.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=F7,this.ssl=Ef}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:Ef;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=g7;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<B_)throw new yt(et.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q7((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new yt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new yt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new yt(et.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class r1{constructor(t,i,s,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yt(et.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new yt(et.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vv;switch(s.type){case"firstParty":return new Tv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new yt(et.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=vf.get(i);s&&(ct("ComponentProvider","Removing Datastore"),vf.delete(i),s.terminate())}(this),Promise.resolve()}}function hE(r,t,i,s={}){var l;const c=(r=ar(r,r1))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${i}`;c.host!==F7&&c.host!==m&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:m,ssl:!1,emulatorOptions:s});if(!Fs(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,C;if(typeof s.mockUserToken=="string")y=s.mockUserToken,C=nn.MOCK_USER;else{y=xp(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new yt(et.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new nn(A)}r._authCredentials=new _v(new R9(y,C))}}/**
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
 */class a1{constructor(t,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new a1(this.firestore,t,this._query)}}class vn{constructor(t,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vn(this.firestore,t,this._key)}}class Yr extends a1{constructor(t,i,s){super(t,i,v2(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vn(this.firestore,null,new Ct(t))}withConverter(t){return new Yr(this.firestore,t,this._path)}}function gn(r,t,...i){if(r=Ti(r),H7("collection","path",t),r instanceof r1){const s=le.fromString(t,...i);return Cf(s),new Yr(r,null,s)}{if(!(r instanceof vn||r instanceof Yr))throw new yt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...i));return Cf(s),new Yr(r.firestore,null,s)}}function _n(r,t,...i){if(r=Ti(r),arguments.length===1&&(t=D9.newId()),H7("doc","path",t),r instanceof r1){const s=le.fromString(t,...i);return _f(s),new vn(r,null,new Ct(s))}{if(!(r instanceof vn||r instanceof Yr))throw new yt(et.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...i));return _f(s),new vn(r.firestore,r instanceof Yr?r.converter:null,new Ct(s))}}/**
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
 */const Af="AsyncQueue";class Sf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new C7(this,"async_queue_retry"),this.bu=()=>{const s=S4();s&&ct(Af,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=t;const i=S4();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=S4();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Ji;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ro(t))throw t;ct(Af,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(s=>{this.gu=s,this.pu=!1;const l=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw ir("INTERNAL UNHANDLED ERROR: ",l),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(t,i,s){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=M2.createAndSchedule(this,t,i,s,c=>this.Fu(c));return this.fu.push(l),l}Du(){this.gu&&At()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class Pl extends r1{constructor(t,i,s,l){super(t,i,s,l),this.type="firestore",this._queue=new Sf,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sf(t),this._firestoreClient=void 0,await t}}}function fE(r,t){const i=typeof r=="object"?r:Xf(),s=typeof r=="string"?r:Ic,l=Ol(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=Rp("firestore");c&&hE(l,...c)}return l}function U2(r){if(r._terminated)throw new yt(et.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dE(r),r._firestoreClient}function dE(r){var t,i,s;const l=r._freezeSettings(),c=function(m,p,y,C){return new Lv(m,p,y,C.host,C.ssl,C.experimentalForceLongPolling,C.experimentalAutoDetectLongPolling,q7(C.experimentalLongPollingOptions),C.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new aE(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
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
 */class Ws{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ws(Xe.fromBase64String(t))}catch(i){throw new yt(et.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Ws(Xe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class s1{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new yt(et.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class jl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new yt(et.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new yt(et.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pt(this._lat,t._lat)||Pt(this._long,t._long)}}/**
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
 */const mE=/^__.*__$/;class pE{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return this.fieldMask!==null?new aa(t,this.data,this.fieldMask,i,this.fieldTransforms):new kl(t,this.data,i,this.fieldTransforms)}}class G7{constructor(t,i,s){this.data=t,this.fieldMask=i,this.fieldTransforms=s}toMutation(t,i){return new aa(t,this.data,this.fieldMask,i,this.fieldTransforms)}}function Q7(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw At()}}class o1{constructor(t,i,s,l,c,f){this.settings=t,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new o1(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.$u(t),l}Ku(t){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:s,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Pc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Q7(this.Lu)&&mE.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class gE{constructor(t,i,s){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=s||e1(t)}ju(t,i,s,l=!1){return new o1({Lu:t,methodName:i,zu:s,path:$e.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K7(r){const t=r._freezeSettings(),i=e1(r._databaseId);return new gE(r._databaseId,!!t.ignoreUndefinedProperties,i)}function yE(r,t,i,s,l,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,t,i,l);q2("Data must be an object, but it was:",f,s);const m=Y7(s,f);let p,y;if(c.merge)p=new Rn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const C=[];for(const A of c.mergeFields){const S=$4(t,A,i);if(!f.contains(S))throw new yt(et.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);X7(C,S)||C.push(S)}p=new Rn(C),y=f.fieldTransforms.filter(A=>p.covers(A.field))}else p=null,y=f.fieldTransforms;return new pE(new pn(m),p,y)}class l1 extends jl{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof l1}}function vE(r,t,i){return new o1({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:i},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class j2 extends jl{constructor(t,i){super(t),this.Hu=i}_toFieldTransform(t){const i=vE(this,t,!0),s=this.Hu.map(c=>Bl(c,i)),l=new $s(s);return new n7(t.path,l)}isEqual(t){return t instanceof j2&&Fs(this.Hu,t.Hu)}}class B2 extends jl{constructor(t,i){super(t),this.Ju=i}_toFieldTransform(t){const i=new Ml(t.serializer,Z9(t.serializer,this.Ju));return new n7(t.path,i)}isEqual(t){return t instanceof B2&&this.Ju===t.Ju}}function _E(r,t,i,s){const l=r.ju(1,t,i);q2("Data must be an object, but it was:",l,s);const c=[],f=pn.empty();ra(s,(p,y)=>{const C=H2(t,p,i);y=Ti(y);const A=l.Ku(C);if(y instanceof l1)c.push(C);else{const S=Bl(y,A);S!=null&&(c.push(C),f.set(C,S))}});const m=new Rn(c);return new G7(f,m,l.fieldTransforms)}function CE(r,t,i,s,l,c){const f=r.ju(1,t,i),m=[$4(t,s,i)],p=[l];if(c.length%2!=0)throw new yt(et.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<c.length;S+=2)m.push($4(t,c[S])),p.push(c[S+1]);const y=[],C=pn.empty();for(let S=m.length-1;S>=0;--S)if(!X7(y,m[S])){const N=m[S];let k=p[S];k=Ti(k);const K=f.Ku(N);if(k instanceof l1)y.push(N);else{const z=Bl(k,K);z!=null&&(y.push(N),C.set(N,z))}}const A=new Rn(y);return new G7(C,A,f.fieldTransforms)}function Bl(r,t){if($7(r=Ti(r)))return q2("Unsupported field value:",t,r),Y7(r,t);if(r instanceof jl)return function(s,l){if(!Q7(l.Lu))throw l.Wu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(s,l){const c=[];let f=0;for(const m of s){let p=Bl(m,l.Uu(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=Ti(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Z9(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Ve.fromDate(s);return{timestampValue:kc(l.serializer,c)}}if(s instanceof Ve){const c=new Ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kc(l.serializer,c)}}if(s instanceof z2)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ws)return{bytesValue:u7(l.serializer,s._byteString)};if(s instanceof vn){const c=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw l.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:T2(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof P2)return function(f,m){return{mapValue:{fields:{[L9]:{stringValue:U9},[Mc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return _2(m.serializer,y)})}}}}}}(s,l);throw l.Wu(`Unsupported field value: ${L2(s)}`)}(r,t)}function Y7(r,t){const i={};return I9(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ra(r,(s,l)=>{const c=Bl(l,t.qu(s));c!=null&&(i[s]=c)}),{mapValue:{fields:i}}}function $7(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ve||r instanceof z2||r instanceof Ws||r instanceof vn||r instanceof jl||r instanceof P2)}function q2(r,t,i){if(!$7(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const s=L2(i);throw s==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+s)}}function $4(r,t,i){if((t=Ti(t))instanceof s1)return t._internalPath;if(typeof t=="string")return H2(r,t);throw Pc("Field path arguments must be of type string or ",r,!1,void 0,i)}const EE=new RegExp("[~\\*/\\[\\]]");function H2(r,t,i){if(t.search(EE)>=0)throw Pc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new s1(...t.split("."))._internalPath}catch{throw Pc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Pc(r,t,i,s,l){const c=s&&!s.isEmpty(),f=l!==void 0;let m=`Function ${t}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${l}`),p+=")"),new yt(et.INVALID_ARGUMENT,m+r+p)}function X7(r,t){return r.some(i=>i.isEqual(t))}/**
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
 */class Z7{constructor(t,i,s,l,c){this._firestore=t,this._userDataWriter=i,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new TE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const i=this._document.data.field(W7("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i)}}}class TE extends Z7{data(){return super.data()}}function W7(r,t){return typeof t=="string"?H2(r,t):t instanceof s1?t._internalPath:t._delegate._internalPath}/**
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
 */function AE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new yt(et.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class SE{convertValue(t,i="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ce(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,i);case 5:return t.stringValue;case 6:return this.convertBytes(Wr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,i);case 11:return this.convertObject(t.mapValue,i);case 10:return this.convertVectorValue(t.mapValue);default:throw At()}}convertObject(t,i){return this.convertObjectMap(t.fields,i)}convertObjectMap(t,i="none"){const s={};return ra(t,(l,c)=>{s[l]=this.convertValue(c,i)}),s}convertVectorValue(t){var i,s,l;const c=(l=(s=(i=t.fields)===null||i===void 0?void 0:i[Mc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map(f=>Ce(f.doubleValue));return new P2(c)}convertGeoPoint(t){return new z2(Ce(t.latitude),Ce(t.longitude))}convertArray(t,i){return(t.values||[]).map(s=>this.convertValue(s,i))}convertServerTimestamp(t,i){switch(i){case"previous":const s=Yc(t);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(Rl(t));default:return null}}convertTimestamp(t){const i=Zr(t);return new Ve(i.seconds,i.nanos)}convertDocumentKey(t,i){const s=le.fromString(t);Wt(p7(s));const l=new Dl(s.get(1),s.get(3)),c=new Ct(s.popFirst(5));return l.isEqual(i)||ir(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function wE(r,t,i){let s;return s=r?r.toFirestore(t):t,s}/**
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
 */class vl{constructor(t,i){this.hasPendingWrites=t,this.fromCache=i}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class J7 extends Z7{constructor(t,i,s,l,c,f){super(t,i,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const i=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,i={}){if(this._document){const s=this._document.data.field(W7("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class Ac extends J7{data(t={}){return super.data(t)}}class bE{constructor(t,i,s,l){this._firestore=t,this._userDataWriter=i,this._snapshot=l,this.metadata=new vl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(i=>t.push(i)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,i){this._snapshot.docs.forEach(s=>{t.call(i,new Ac(this._firestore,this._userDataWriter,s.key,s,new vl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const i=!!t.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new yt(et.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map(m=>{const p=new Ac(l._firestore,l._userDataWriter,m.doc.key,m.doc,new vl(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const p=new Ac(l._firestore,l._userDataWriter,m.doc.key,m.doc,new vl(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,C=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),C=f.indexOf(m.doc.key)),{type:RE(m.type),doc:p,oldIndex:y,newIndex:C}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function RE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return At()}}/**
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
 */function jc(r){r=ar(r,vn);const t=ar(r.firestore,Pl);return lE(U2(t),r._key).then(i=>DE(t,r,i))}class t8 extends SE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ws(t)}convertReference(t){const i=this.convertDocumentKey(t,this.firestore._databaseId);return new vn(this.firestore,null,i)}}function xn(r){r=ar(r,a1);const t=ar(r.firestore,Pl),i=U2(t),s=new t8(t);return AE(r._query),uE(i,r._query).then(l=>new bE(t,s,r,l))}function e8(r,t,i){r=ar(r,vn);const s=ar(r.firestore,Pl),l=wE(r.converter,t);return n8(s,[yE(K7(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,Ci.none())])}function sr(r,t,i,...s){r=ar(r,vn);const l=ar(r.firestore,Pl),c=K7(l);let f;return f=typeof(t=Ti(t))=="string"||t instanceof s1?CE(c,"updateDoc",r._key,t,i,s):_E(c,"updateDoc",r._key,t),n8(l,[f.toMutation(r._key,Ci.exists(!0))])}function n8(r,t){return function(s,l){const c=new Ji;return s.asyncQueue.enqueueAndForget(async()=>XC(await oE(s),l,c)),c.promise}(U2(r),t)}function DE(r,t,i){const s=i.docs.get(t._key),l=new t8(r);return new J7(r,l,t._key,s,new vl(i.hasPendingWrites,i.fromCache),t.converter)}function i8(...r){return new j2("arrayUnion",r)}function qs(r){return new B2("increment",r)}(function(t,i=!0){(function(l){no=l})(jg),$r(new er("firestore",(s,{instanceIdentifier:l,options:c})=>{const f=s.getProvider("app").getImmediate(),m=new Pl(new Cv(s.getProvider("auth-internal")),new Av(f,s.getProvider("app-check-internal")),function(y,C){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new yt(et.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dl(y.options.projectId,C)}(f,l),f);return c=Object.assign({useFetchStreams:i},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),vi(I6,M6,t),vi(I6,M6,"esm2017")})();const xE={apiKey:"AIzaSyCYnKPhe_pdv1whbZ64x7Hu3_lHdht0E6Q",authDomain:"greentrails-d6c2d.firebaseapp.com",projectId:"greentrails-d6c2d",storageBucket:"greentrails-d6c2d.firebasestorage.app",messagingSenderId:"67873180558",appId:"1:67873180558:web:d65d95fb94c483683db2df",measurementId:"G-9K66S1W7XM"},r8=$f(xE);mv(r8);const re=fE(r8),IE=()=>{const[r,t]=q.useState([]),[i,s]=q.useState([]),[l,c]=q.useState(!0),f=eo(),[m,p]=cn.useState([]),{currentUser:y}=Ka();if(q.useEffect(()=>{(async()=>{c(!0);try{const N=(await xn(gn(re,"opportunities"))).docs.map(F=>({id:F.id,...F.data()})),K=(await xn(gn(re,"Users"))).docs.map(F=>({id:F.id,...F.data()}));console.log(K),p(K);const z=new Date;t(N.filter(F=>new Date(F.date)>z).sort((F,X)=>new Date(F.date)-new Date(X.date)))}catch(S){console.error("Error fetching opportunities:",S)}c(!1)})()},[]),l)return R.jsx("div",{className:"box",children:R.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"box",children:R.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})}),R.jsx("div",{className:"trunk"})]});function C(A){let S=A.currentTarget;const N=_n(re,"opportunities",S.id);let k=y;if(!k){const z=document.getElementById(S.id+"i");z&&z.value&&(k=z.value)}if(console.log(m),!k||k==="")return;if(k==="editcode0"){console.log("edit code entered"),f("/adddata");return}const K=r.find(z=>z.id===S.id);if(K&&new Date(K.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!m.some(z=>z.Name===k)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{sr(N,{signups:i8(k)}),document.getElementById(S.id+"d").textContent="So far "+r.find(z=>z.id===S.id).signups.join(", ")+", "+k+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return R.jsx("div",{children:r.map(A=>R.jsxs("div",{children:[R.jsxs("div",{className:"box",children:[R.jsx("h1",{children:A.name}),R.jsxs("p",{className:"date",children:["when: ",new Date(A.date).toLocaleDateString()]}),R.jsx("p",{children:A.description}),R.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),R.jsx("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),R.jsx("p",{}),R.jsxs("div",{children:[R.jsx("label",{children:"Sign up here with green trails:"}),R.jsx("p",{}),y?R.jsx(R.Fragment,{children:R.jsx("button",{type:"submit",id:A.id,className:"volunteer-signup-btn",onClick:S=>C(S),children:"🌲 Sign Up for This Event"})}):R.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",R.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),R.jsxs("p",{id:A.id+"d",children:["So far ",A.signups.join(", ")," will be going"]})]})]},A.id),R.jsx("div",{className:"trunk"})]}))})},ME=()=>{const[r,t]=q.useState([]),[i,s]=q.useState([]),[l,c]=q.useState(!0),f=eo(),[m,p]=cn.useState([]),{currentUser:y}=Ka();if(q.useEffect(()=>{(async()=>{c(!0);try{const N=(await xn(gn(re,"opportunities"))).docs.map(F=>({id:F.id,...F.data()})),K=(await xn(gn(re,"Users"))).docs.map(F=>({id:F.id,...F.data()}));console.log(K),p(K);const z=new Date;t(N.sort((F,X)=>new Date(F.date)-new Date(X.date)))}catch(S){console.error("Error fetching opportunities:",S)}c(!1)})()},[]),l)return R.jsx("div",{className:"box",children:R.jsx("p",{children:"Loading opportunities..."})});if(r.length===0)return R.jsx("div",{className:"box",children:R.jsx("h1",{children:"No upcoming volunteer opportunities available we will be adding more soon."})});function C(A){let S=A.currentTarget;const N=_n(re,"opportunities",S.id);let k=y;if(!k){const z=document.getElementById(S.id+"i");z&&z.value&&(k=z.value)}if(console.log(m),!k||k==="")return;if(k==="editcode0"){console.log("edit code entered"),f("/adddata");return}const K=r.find(z=>z.id===S.id);if(K&&new Date(K.date)<new Date){console.log("Event has already passed"),alert("This event has already passed and is no longer accepting sign-ups.");return}if(!m.some(z=>z.Name===k)){console.log("User not found in the list"),alert("Your account was not found. Please try logging out and logging back in.");return}try{sr(N,{signups:i8(k)}),document.getElementById(S.id+"d").textContent="So far "+r.find(z=>z.id===S.id).signups.join(", ")+", "+k+" will be going",alert("Successfully signed up for this opportunity!")}catch(z){console.error("Error adding name to opportunity:",z),alert("An error occurred while signing up. Please try again.")}}return R.jsx("div",{children:r.map(A=>R.jsxs("div",{children:[R.jsxs("div",{className:"box",children:[R.jsx("h1",{children:A.name}),R.jsxs("p",{className:"date",children:["when: ",new Date(A.date).toLocaleDateString()]}),R.jsx("p",{children:A.description}),R.jsx("h4",{children:" please sign up with the host and submit your name to let us know you will be going"}),R.jsx("a",{href:A.link,target:"_blank",rel:"noopener noreferrer",children:"Click here to sign up with the host"}),R.jsx("p",{}),R.jsxs("div",{children:[R.jsx("label",{children:"Sign up here with green trails:"}),R.jsx("p",{}),y?R.jsx(R.Fragment,{children:R.jsx("button",{type:"submit",id:A.id,className:"volunteer-signup-btn",onClick:S=>C(S),children:"🌲 Sign Up for This Event"})}):R.jsxs("p",{style:{color:"#d32f2f",fontWeight:"bold"},children:["Please ",R.jsx("a",{href:"#/signup/",style:{color:"#4CAF50",textDecoration:"underline"},children:"sign up or login"})," to register for this opportunity."]}),R.jsxs("p",{id:A.id+"d",children:["So far ",A.signups.join(", ")," will be going"]})]})]},A.id),R.jsx("div",{className:"trunk"})]}))})},NE=()=>{const[r,t]=q.useState(!0);function i(){console.log("show past"),t(!r)}return R.jsxs("div",{id:"page",children:[R.jsx(Fr,{}),R.jsx(Ba,{message:"Upcoming Volunteer Opportunities",shadow:!0}),R.jsx("button",{id:"showpastbutton",onClick:i,children:r?"Show past opportunities":"Hide past opportunities"}),r?R.jsx(IE,{}):R.jsx(ME,{}),R.jsx(pp,{}),R.jsx(gp,{})]})},VE=()=>{const{isAdmin:r}=Ka(),t=eo();return q.useEffect(()=>{r||(alert("Access denied. Admin privileges required."),t("/"))},[r,t]),r?R.jsxs("div",{className:"App-header",children:[R.jsx(Fr,{}),R.jsx(Ba,{message:"Add data page"}),R.jsx("input",{className:"addmoredata",id:"id",type:"text",placeholder:"id"}),R.jsx("input",{className:"addmoredata",id:"name",type:"text",placeholder:"Name"}),R.jsx("input",{className:"addmoredata",id:"date",type:"text",placeholder:"date"}),R.jsx("input",{className:"addmoredata",id:"description",type:"text",placeholder:"description"}),R.jsx("input",{className:"addmoredata",id:"link",type:"text",placeholder:"link"}),R.jsx("button",{className:"addmoredata",onClick:()=>{const i=document.getElementById("name").value,s=document.getElementById("date").value,l=document.getElementById("description").value,c=document.getElementById("link").value,f=document.getElementById("id").value;(async p=>{const y=await xn(gn(re,"opportunities"));let C=!1;return y.forEach(A=>{A.id===p&&(C=!0)}),C})(f).then(p=>{if(p){alert("ID already in use. Please choose a different ID.");return}else{const y=_n(re,"opportunities",f);e8(y,{name:i,date:s,description:l,link:c,signups:[]})}})},children:"Add opportunity"})]}):null},OE=()=>{const[r,t]=cn.useState([]),[i,s]=cn.useState([]);q.useEffect(()=>{(async()=>{try{const m=(await xn(gn(re,"Users"))).docs.map(C=>({id:C.id,score:C.data().score,Name:C.data().Name}));t(m.sort((C,A)=>A.score-C.score));const y=(await xn(gn(re,"opportunities"))).docs.map(C=>({id:C.id,...C.data()}));s(y)}catch(f){console.error("Error fetching leaderboard:",f)}})()},[]);function l(c){let f=0;r.forEach(m=>{i.forEach(p=>{p.signups.includes(m.id)&&(f+=1),sr(_n(re,"Users",m.id),{score:f})}),f=0}),console.log("Done updating leaderboard")}return R.jsxs("div",{id:"events-table",children:[R.jsx("h3",{id:"events-title",children:"Events Attended"}),R.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((c,f)=>R.jsxs("div",{className:"lbentrie",children:[R.jsxs("p",{className:"place",children:[f+1,"."]}),R.jsx("p",{className:"username",children:c.Name}),R.jsx("p",{className:"userscore",children:c.score}),R.jsx("p",{className:"username",children:"  "})]},c.id)),R.jsx("button",{onClick:c=>l(),id:"",children:"Update leaderboard"})]})]})},kE=()=>{const[r,t]=cn.useState([]),[i,s]=cn.useState([]),[l,c]=cn.useState(!1);q.useEffect(()=>{(async()=>{try{const y=(await xn(gn(re,"Users"))).docs.map(S=>{const N=S.data();return{id:S.id,score:N.score??0,Name:N.Name??"",meetingsAttended:N.meetingsAttended??0}});y.sort((S,N)=>{const k=S.meetingsAttended??0,K=N.meetingsAttended??0;return K!==k?K-k:(N.score??0)-(S.score??0)}),t(y);const A=(await xn(gn(re,"meetings"))).docs.map(S=>({id:S.id,...S.data()}));s(A)}catch(p){console.error("Error fetching leaderboard/meetings:",p)}})()},[]);async function f(m){try{c(!0);const p=await Promise.all(r.map(async y=>{const C=i.reduce((A,S)=>(Array.isArray(S.attendees)?S.attendees:[]).includes(y.Name)?A+1:A,0);return await sr(_n(re,"Users",y.id),{meetingsAttended:C}),{...y,meetingsAttended:C}}));p.sort((y,C)=>{const A=y.meetingsAttended??0,S=C.meetingsAttended??0;return S!==A?S-A:(C.score??0)-(y.score??0)}),t(p),console.log("Done updating meetingsAttended for all users")}catch(p){console.error("Error updating meetingsAttended:",p)}finally{c(!1)}}return R.jsxs("div",{id:"events-table",children:[R.jsx("h3",{id:"events-title",children:"Meetings Attended (after 11/12)"}),R.jsxs("div",{id:"events-leaderboard",className:"boardcon",children:[r.map((m,p)=>R.jsxs("div",{className:"lbentrie",children:[R.jsxs("p",{className:"place",children:[p+1,"."]}),R.jsx("p",{className:"username",children:m.Name}),R.jsx("p",{className:"userscore",children:m.meetingsAttended??0})]},m.id)),R.jsx("button",{onClick:m=>f(),id:"",disabled:l,children:l?"Updating…":"Update meetings attendance"})]})]})},LE=()=>{const[r,t]=cn.useState([]);return q.useEffect(()=>{const i=async()=>{try{const c=(await xn(gn(re,"Users"))).docs.map(f=>({id:f.id,santasPopped:f.data().santasPopped||0,Name:f.data().Name}));t(c.sort((f,m)=>m.santasPopped-f.santasPopped))}catch(l){console.error("Error fetching santa leaderboard:",l)}};i();const s=setInterval(i,5e3);return()=>clearInterval(s)},[]),R.jsxs("div",{id:"santa-table",children:[R.jsx("h3",{id:"santa-title",children:"Santas Popped"}),R.jsx("div",{id:"santa-leaderboard",className:"boardcon",children:r.map((i,s)=>R.jsxs("div",{className:"lbentrie",children:[R.jsxs("p",{className:"place",children:[s+1,"."]}),R.jsx("p",{className:"username",children:i.Name}),R.jsx("p",{className:"userscore",children:i.santasPopped}),R.jsx("p",{className:"username",children:"  "})]},i.id))})]})},UE=()=>R.jsxs("div",{children:[R.jsx(Ba,{message:"Leaderboards",shadow:!0}),R.jsx(Fr,{}),R.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[R.jsx(OE,{}),R.jsx(kE,{}),R.jsx(LE,{})]}),R.jsx(yc,{})]}),zE=({message:r,type:t="info",duration:i=3e3,onClose:s})=>{q.useEffect(()=>{const c=setTimeout(()=>{s()},i);return()=>clearTimeout(c)},[i,s]);const l=()=>{switch(t){case"success":return"#4CAF50";case"error":return"#f44336";case"info":default:return"#2196F3"}};return R.jsxs("div",{style:{position:"fixed",top:"80px",right:"20px",backgroundColor:l(),color:"white",padding:"16px 24px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:1e4,maxWidth:"400px",fontSize:"16px",fontWeight:"500",animation:"slideIn 0.3s ease-out",cursor:"pointer"},onClick:s,children:[r,R.jsx("style",{children:`
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
                `})]})},PE=()=>{const[r,t]=q.useState([]);q.useEffect(()=>{const s=l=>{const{message:c,type:f}=l.detail,m=Date.now();t(p=>[...p,{id:m,message:c,type:f}])};return window.addEventListener("show-notification",s),()=>{window.removeEventListener("show-notification",s)}},[]);const i=s=>{t(l=>l.filter(c=>c.id!==s))};return R.jsx(R.Fragment,{children:r.map((s,l)=>R.jsx("div",{style:{position:"fixed",top:`${80+l*80}px`,right:"20px",zIndex:1e4+l},children:R.jsx(zE,{message:s.message,type:s.type,onClose:()=>i(s.id)})},s.id))})},Me=(r,t="info")=>{const i=new CustomEvent("show-notification",{detail:{message:r,type:t}});window.dispatchEvent(i)},jE=()=>{const[r,t]=cn.useState([]),[i,s]=cn.useState([]),[l,c]=cn.useState(!1),[f,m]=cn.useState([]),[p,y]=cn.useState(""),[C,A]=cn.useState(""),{currentUser:S,login:N,logout:k}=Ka();eo(),q.useEffect(()=>{(async()=>{try{const J=(await xn(gn(re,"Users"))).docs.map(ut=>ut.id);m(J.sort())}catch(X){console.error("Error fetching usernames:",X)}})()},[]);function K(F){const X=p.trim();if(X===""){Me("Name cannot be empty. Please enter a valid name.","error");return}console.log(X),(async ut=>{const st=await xn(gn(re,"Users"));let dt=!1;return st.forEach(M=>{M.id.toLowerCase()===ut.toLowerCase()&&(dt=!0)}),dt})(X).then(ut=>{if(ut){Me("Name already in use. Please choose a different name.","error");return}else{const st=_n(gn(re,"Users"),X);e8(st,{Name:X,score:0,santasPopped:0,isAdmin:!1,autoClickerLevel:0,spawnSpeedLevel:0}).then(()=>{Me("User created successfully! You are now logged in.","success"),N(X,!1),m([...f,X].sort()),y("")})}})}async function z(F){let X=C||p;if(X=X.trim(),X===""){Me("Name cannot be empty. Please select or enter a valid name.","error");return}try{let J=_n(re,"Users",X),ut=await jc(J);if(!ut.exists()){const st=await xn(gn(re,"Users"));let dt=null;st.forEach(M=>{M.id.toLowerCase()===X.toLowerCase()&&(dt=M.id)}),dt&&(X=dt,J=_n(re,"Users",X),ut=await jc(J))}if(ut.exists()){const st=ut.data(),dt={};st&&st.santasPopped===void 0&&(dt.santasPopped=0),st&&st.isAdmin===void 0&&(dt.isAdmin=!1),st&&st.autoClickerLevel===void 0&&(dt.autoClickerLevel=0),st&&st.spawnSpeedLevel===void 0&&(dt.spawnSpeedLevel=0),Object.keys(dt).length>0&&await sr(J,dt);const M=(st==null?void 0:st.isAdmin)||!1;N(X,M),Me(`Welcome back, ${X}!`,"success")}else Me("User not found. Please sign up first.","error")}catch(J){console.error("Error logging in:",J),Me("Error logging in. Please try again.","error")}}return R.jsx("div",{children:S?R.jsxs("div",{className:"signup signup-welcome",children:[R.jsxs("h3",{children:["🌲 Welcome, ",S,"! 🌲"]}),R.jsx("p",{children:"You are currently logged in."}),R.jsxs("p",{style:{fontSize:"16px",marginTop:"20px"},children:["🎅 ",R.jsx("strong",{children:"Santa Tracking Active!"})," Click flying Santas anywhere on the site to earn points and climb the leaderboard!"]}),R.jsx("button",{onClick:()=>k(),children:"Logout"})]}):R.jsxs("div",{className:"signup",children:[R.jsx("h3",{children:l?"🔐 Login":"✨ Sign Up"}),R.jsx("p",{style:{fontSize:"16px",color:"#2d5a3d",marginBottom:"20px"},children:"🎅 Track your Santa pops and compete on the leaderboard!"}),l&&f.length>0?R.jsxs("div",{children:[R.jsx("label",{htmlFor:"userSelect",style:{display:"block",marginBottom:"8px",color:"#2d5a3d"},children:"Select your name:"}),R.jsxs("select",{id:"userSelect",value:C,onChange:F=>A(F.target.value),style:{width:"100%",padding:"10px",marginBottom:"10px",borderRadius:"4px",border:"1px solid #ccc",fontSize:"16px"},children:[R.jsx("option",{value:"",children:"-- Choose your name --"}),f.map(F=>R.jsx("option",{value:F,children:F},F))]})]}):R.jsx("input",{id:"name",type:"text",placeholder:"Enter your name",value:p,onChange:F=>y(F.target.value)}),l?R.jsx("button",{type:"submit",onClick:F=>z(),children:"Login"}):R.jsx("button",{type:"submit",onClick:F=>K(),children:"Sign Up"}),R.jsxs("div",{className:"signup-toggle",children:[R.jsx("p",{style:{marginBottom:"10px",color:"#666"},children:l?"Don't have an account?":"Already have an account?"}),R.jsx("button",{onClick:()=>{c(!l),y(""),A("")},children:l?"Create New Account":"Login Instead"})]})]})})},BE=()=>R.jsxs("div",{children:[R.jsx(Ba,{message:"Sign Up!!",shadow:!0}),R.jsx(Fr,{}),R.jsx(jE,{})]}),qE=()=>{const{currentUser:r}=Ka(),[t,i]=q.useState({autoClickerLevel:0,spawnSpeedLevel:0,santasPopped:0}),[s,l]=q.useState(!0),c=[10,25,50,100,200],f=[15,30,60,120,240];q.useEffect(()=>{r?m():l(!1)},[r]);const m=async()=>{if(r)try{const C=_n(re,"Users",r),A=await jc(C);if(A.exists()){const S=A.data();i({autoClickerLevel:S.autoClickerLevel||0,spawnSpeedLevel:S.spawnSpeedLevel||0,santasPopped:S.santasPopped||0})}}catch(C){console.error("Error loading upgrades:",C)}finally{l(!1)}},p=async()=>{if(!r){Me("Please login to purchase upgrades!","error");return}const C=t.autoClickerLevel;if(C>=c.length){Me("Max level reached!","info");return}const A=c[C];if(t.santasPopped<A){Me(`Not enough santas! You need ${A} santas but only have ${t.santasPopped}.`,"error");return}try{const S=_n(re,"Users",r);await sr(S,{santasPopped:qs(-A),autoClickerLevel:qs(1)}),i({...t,santasPopped:t.santasPopped-A,autoClickerLevel:t.autoClickerLevel+1}),Me(`Auto-clicker upgraded to level ${C+1}!`,"success")}catch(S){console.error("Error purchasing upgrade:",S),Me("Failed to purchase upgrade. Please try again.","error")}},y=async()=>{if(!r){Me("Please login to purchase upgrades!","error");return}const C=t.spawnSpeedLevel;if(C>=f.length){Me("Max level reached!","info");return}const A=f[C];if(t.santasPopped<A){Me(`Not enough santas! You need ${A} santas but only have ${t.santasPopped}.`,"error");return}try{const S=_n(re,"Users",r);await sr(S,{santasPopped:qs(-A),spawnSpeedLevel:qs(1)}),i({...t,santasPopped:t.santasPopped-A,spawnSpeedLevel:t.spawnSpeedLevel+1}),Me(`Spawn speed upgraded to level ${C+1}!`,"success")}catch(S){console.error("Error purchasing upgrade:",S),Me("Failed to purchase upgrade. Please try again.","error")}};return r?s?R.jsxs("div",{children:[R.jsx(Ba,{message:"Santa Shop",shadow:!0}),R.jsx(Fr,{}),R.jsx("div",{style:{padding:"40px",textAlign:"center"},children:R.jsx("p",{children:"Loading..."})}),R.jsx(yc,{})]}):R.jsxs("div",{children:[R.jsx(Ba,{message:"Santa Shop",shadow:!0}),R.jsx(Fr,{}),R.jsxs("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto",minHeight:"60vh",backgroundColor:"#f5f5f5"},children:[R.jsx("h2",{style:{textAlign:"center",color:"#d32f2f",marginBottom:"30px",fontSize:"36px"},children:"🎅 Santa Shop 🎅"}),R.jsxs("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"8px",marginBottom:"30px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[R.jsx("h3",{style:{color:"#2d5a3d",marginBottom:"15px"},children:"Your Stats"}),R.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:R.jsxs("div",{style:{margin:"10px"},children:[R.jsx("p",{style:{fontSize:"18px",marginBottom:"5px"},children:"🎅 Santas Available:"}),R.jsx("p",{style:{fontSize:"28px",fontWeight:"bold",color:"#d32f2f"},children:t.santasPopped})]})})]}),R.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px"},children:[R.jsxs("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",border:"2px solid #4CAF50"},children:[R.jsx("h3",{style:{color:"#4CAF50",marginBottom:"15px"},children:"🖱️ Auto-Clicker"}),R.jsxs("p",{style:{marginBottom:"10px"},children:["Current Level: ",R.jsx("strong",{children:t.autoClickerLevel})]}),R.jsxs("p",{style:{marginBottom:"15px",color:"#666"},children:["Automatically clicks santas for you every few seconds!",t.autoClickerLevel>0&&R.jsxs("span",{style:{display:"block",marginTop:"5px",color:"#4CAF50"},children:["✓ Active: Clicking every ",Math.max(2,10-t.autoClickerLevel*2),"s"]})]}),t.autoClickerLevel<c.length?R.jsxs(R.Fragment,{children:[R.jsxs("p",{style:{fontSize:"18px",marginBottom:"15px"},children:["Next level cost: ",R.jsxs("strong",{style:{color:"#d32f2f"},children:[c[t.autoClickerLevel]," santas"]})]}),R.jsx("button",{onClick:p,disabled:t.santasPopped<c[t.autoClickerLevel],style:{padding:"10px 20px",fontSize:"16px",backgroundColor:t.santasPopped>=c[t.autoClickerLevel]?"#4CAF50":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:t.santasPopped>=c[t.autoClickerLevel]?"pointer":"not-allowed",width:"100%"},children:"Upgrade"})]}):R.jsx("p",{style:{color:"#4CAF50",fontWeight:"bold"},children:"✓ MAX LEVEL"})]}),R.jsxs("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",border:"2px solid #2196F3"},children:[R.jsx("h3",{style:{color:"#2196F3",marginBottom:"15px"},children:"⚡ Spawn Speed"}),R.jsxs("p",{style:{marginBottom:"10px"},children:["Current Level: ",R.jsx("strong",{children:t.spawnSpeedLevel})]}),R.jsxs("p",{style:{marginBottom:"15px",color:"#666"},children:["Increases how often santas appear!",t.spawnSpeedLevel>0&&R.jsxs("span",{style:{display:"block",marginTop:"5px",color:"#2196F3"},children:["✓ Active: Spawn time reduced by ",t.spawnSpeedLevel*20,"%"]})]}),t.spawnSpeedLevel<f.length?R.jsxs(R.Fragment,{children:[R.jsxs("p",{style:{fontSize:"18px",marginBottom:"15px"},children:["Next level cost: ",R.jsxs("strong",{style:{color:"#d32f2f"},children:[f[t.spawnSpeedLevel]," santas"]})]}),R.jsx("button",{onClick:y,disabled:t.santasPopped<f[t.spawnSpeedLevel],style:{padding:"10px 20px",fontSize:"16px",backgroundColor:t.santasPopped>=f[t.spawnSpeedLevel]?"#2196F3":"#ccc",color:"white",border:"none",borderRadius:"4px",cursor:t.santasPopped>=f[t.spawnSpeedLevel]?"pointer":"not-allowed",width:"100%"},children:"Upgrade"})]}):R.jsx("p",{style:{color:"#2196F3",fontWeight:"bold"},children:"✓ MAX LEVEL"})]})]}),R.jsxs("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"8px",marginTop:"30px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[R.jsx("h3",{style:{color:"#2d5a3d",marginBottom:"15px"},children:"ℹ️ How to Play"}),R.jsxs("ol",{style:{lineHeight:"1.8",color:"#666"},children:[R.jsx("li",{children:"Click flying Santas anywhere on the site to pop them and earn points!"}),R.jsx("li",{children:"Spend your popped Santas directly on upgrades"}),R.jsx("li",{children:"Auto-clicker will work on ALL pages across the site"}),R.jsx("li",{children:"Spawn speed increases how often Santas appear"})]})]})]}),R.jsx(yc,{})]}):R.jsxs("div",{children:[R.jsx(Ba,{message:"Santa Shop",shadow:!0}),R.jsx(Fr,{}),R.jsxs("div",{style:{padding:"40px",textAlign:"center",minHeight:"60vh",backgroundColor:"#f5f5f5"},children:[R.jsx("h2",{style:{color:"#d32f2f",marginBottom:"20px"},children:"🎅 Santa Shop"}),R.jsx("p",{style:{fontSize:"18px",color:"#666"},children:"Please login to access the Santa Shop!"})]}),R.jsx(yc,{})]})},HE=""+new URL("lowrezlogo-eSGE3ORT.png",import.meta.url).href,FE=()=>(q.useEffect(()=>{let r=document.querySelector("link[rel='icon']");r||(r=document.createElement("link"),r.rel="icon",document.head.appendChild(r)),r.href=HE,r.type="image/png"},[]),null),GE=encodeURIComponent(`
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
        `);function QE({particleCount:r=120,speed:t=1,size:i=3,color:s="#FFF",zIndex:l=9999}){const A=q.useRef(null),S=q.useRef(null),N=q.useRef([]),k=q.useRef(1),K=q.useRef(null),z=q.useRef([]),F=q.useRef(null),X=q.useRef(null),J=q.useRef([]),{currentUser:ut}=Ka(),st=q.useRef(ut),[dt,M]=q.useState(0),[b,w]=q.useState(0),I=q.useRef(0),V=q.useRef(0);q.useEffect(()=>{st.current=ut,console.log("Snow: currentUser updated to:",ut),ut?P():(M(0),w(0),I.current=0,V.current=0)},[ut]),q.useEffect(()=>{I.current=dt,V.current=b},[dt,b]);const P=async()=>{if(ut)try{const D=_n(re,"Users",ut),Et=await jc(D);if(Et.exists()){const Jt=Et.data(),rt=Jt.autoClickerLevel||0,vt=Jt.spawnSpeedLevel||0;M(rt),w(vt),console.log("Loaded upgrades:",{autoLevel:rt,spawnLevel:vt})}}catch(D){console.error("Error loading upgrades:",D)}};return q.useEffect(()=>{const D=A.current;if(!D)return;const Et=D.getContext("2d");if(!Et)return;const Jt=new Image;Jt.src=`data:image/svg+xml;charset=utf-8,${GE}`,K.current=Jt;const rt=()=>{const Mt=window.devicePixelRatio||1;k.current=Mt;const mt=window.innerWidth,St=window.innerHeight;D.style.width=`${mt}px`,D.style.height=`${St}px`,D.width=Math.round(mt*Mt),D.height=Math.round(St*Mt),Et.setTransform(Mt,0,0,Mt,0,0)},vt=()=>{const Mt=D.width/k.current,mt=D.height/k.current,St=[];for(let Rt=0;Rt<r;Rt++){const Qt=Math.random()*i+Math.random()*(i/2);St.push({x:Math.random()*Mt,y:Math.random()*mt,r:Qt,vx:(Math.random()-.5)*.6,vy:(.5+Math.random()*.9)*t,o:.5+Math.random()*.8,swing:Math.random()*20,phase:Math.random()*Math.PI*2})}N.current=St};let gt=performance.now();const Gt=Mt=>{const mt=(Mt-gt)/16.6667;gt=Mt;const St=D.width/k.current,Rt=D.height/k.current;Et.clearRect(0,0,St,Rt);const Qt=N.current;for(let Ut=0;Ut<Qt.length;Ut++){const it=Qt[Ut];it.phase+=.02*mt,it.x+=it.vx*mt+Math.sin(it.phase)*(it.swing*.01)*mt,it.y+=it.vy*mt,it.y-it.r>Rt&&(it.y=-it.r,it.x=Math.random()*St),it.x-it.r>St&&(it.x=-it.r),it.x+it.r<0&&(it.x=St+it.r),Et.globalAlpha=it.o;const oe=Et.createRadialGradient(it.x,it.y,0,it.x,it.y,it.r*1.8);oe.addColorStop(0,s),oe.addColorStop(1,"rgba(255,255,255,0)"),Et.fillStyle=oe,Et.beginPath(),Et.arc(it.x,it.y,it.r,0,Math.PI*2),Et.fill()}Et.globalAlpha=1;const Xt=z.current;for(let Ut=Xt.length-1;Ut>=0;Ut--){const it=Xt[Ut];it.x+=it.vx*mt;const oe=Math.sin(Mt/400+it.x*.02)*6*it.scale,ke=it.x,Ze=it.y+oe;K.current&&K.current.complete?(Et.save(),Et.translate(ke,Ze),it.dir===-1&&Et.scale(-1,1),Et.drawImage(K.current,-it.w/2,-it.h/2,it.w,it.h),Et.restore()):(Et.fillStyle="#e74c3c",Et.fillRect(ke-it.w/2,Ze-it.h/2,it.w,it.h)),it.dir===1&&it.x-it.w/2>St+50&&Xt.splice(Ut,1),it.dir===-1&&it.x+it.w/2<-50&&Xt.splice(Ut,1)}const te=J.current;for(let Ut=te.length-1;Ut>=0;Ut--){const it=te[Ut];it.vy+=.06*mt,it.vx*=.995,it.vy*=.999,it.x+=it.vx*mt,it.y+=it.vy*mt,it.life-=1*mt;const oe=Math.max(0,it.life/it.maxLife);Et.globalAlpha=oe;const ke=Et.createRadialGradient(it.x,it.y,0,it.x,it.y,it.r*2.5);ke.addColorStop(0,it.color),ke.addColorStop(.6,"rgba(255,255,255,0.2)"),ke.addColorStop(1,"rgba(255,255,255,0)"),Et.fillStyle=ke,Et.beginPath(),Et.arc(it.x,it.y,it.r,0,Math.PI*2),Et.fill(),it.life<=0&&te.splice(Ut,1)}Et.globalAlpha=1,S.current=requestAnimationFrame(Gt)},O=()=>{const Mt=D.width/k.current,mt=D.height/k.current,St=Math.random()>.5?1:-1,Rt=St===1?-60:Mt+60,Qt=mt*Math.random(),Xt=.6+Math.random()*.8,te=120,Ut=60,it=(2+Math.random()*2)*(St===1?1:-1)*Math.max(.5,t),oe={x:Rt,y:Qt,vx:it,scale:Xt,dir:St,w:te*Xt,h:Ut*Xt};z.current.push(oe)},nt=(Mt,mt,St)=>{const Rt=30+Math.round(Math.random()*20),Qt=[];for(let Xt=0;Xt<Rt;Xt++){const te=Math.random()*Math.PI*2,Ut=1+Math.random()*4,it=Math.cos(te)*Ut*(.6+Math.random()*1.4),oe=Math.sin(te)*Ut*(.6+Math.random()*1.4)-Math.random()*1.5,ke=1+Math.random()*3,Ze=30+Math.random()*40,Kn=St||"#e74c3c";Qt.push({x:Mt,y:mt,vx:it,vy:oe,r:ke,life:Ze,maxLife:Ze,color:Kn})}J.current.push(...Qt)},ft=Mt=>{const mt=D.getBoundingClientRect(),St=Mt.clientX-mt.left,Rt=Mt.clientY-mt.top,Qt=z.current,Xt=st.current;console.log("Santa click detected. Current user:",Xt);for(let te=Qt.length-1;te>=0;te--){const Ut=Qt[te],it=St-Ut.x,oe=Rt-Ut.y,ke=Math.max(Ut.w,Ut.h)*.6;if(it*it+oe*oe<=ke*ke){if(nt(Ut.x,Ut.y,"#ffb347"),Qt.splice(te,1),Xt){console.log("User is logged in, incrementing santa count for:",Xt);try{const Ze=_n(re,"Users",Xt);sr(Ze,{santasPopped:qs(1)}).then(()=>{console.log(`Santa popped! Count incremented for ${Xt}`)}).catch(Kn=>{console.error("Error updating santa count:",Kn),Me(`Failed to save Santa pop. Error: ${Kn.message}`,"error")})}catch(Ze){console.error("Error creating update:",Ze)}}else console.log("No user logged in - santa pop not tracked"),sessionStorage.getItem("loginReminderShown")||(Me("🎅 Login required! Go to the Sign Up page to login or create an account, then your Santa pops will be tracked on the leaderboard!","info"),sessionStorage.setItem("loginReminderShown","true"));break}}};rt(),vt(),S.current=requestAnimationFrame(Gt);const ot=V.current,lt=Math.max(1e3,5e3*Math.pow(.8,ot));console.log("Santa spawn interval:",lt,"ms (level",ot,")"),F.current=window.setInterval(O,lt);const It=window.setTimeout(O,1e3);if(I.current>0){const Mt=Math.max(2e3,1e4-I.current*2e3);console.log("Auto-clicker active! Interval:",Mt,"ms (level",I.current,")"),X.current=window.setInterval(()=>{const mt=z.current;if(mt.length>0&&st.current){const St=Math.floor(Math.random()*mt.length),Rt=mt[St];nt(Rt.x,Rt.y,"#4CAF50"),mt.splice(St,1);const Qt=st.current;if(Qt)try{const Xt=_n(re,"Users",Qt);sr(Xt,{santasPopped:qs(1)}).then(()=>{console.log(`Auto-clicked santa for ${Qt}`)}).catch(te=>{console.error("Error updating santa count:",te)})}catch(Xt){console.error("Error with auto-click:",Xt)}}},Mt)}const bt=()=>{rt(),vt(),z.current=[]};return window.addEventListener("resize",bt),window.addEventListener("click",ft),()=>{S.current&&cancelAnimationFrame(S.current),F.current&&clearInterval(F.current),X.current&&clearInterval(X.current),window.clearTimeout(It),window.removeEventListener("resize",bt),window.removeEventListener("click",ft)}},[r,t,i,s,dt,b]),R.jsx("canvas",{ref:A,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:l},"aria-hidden":!0})}const KE=()=>(q.useRef(null),q.useRef(null),q.useRef(null),q.useRef(!1),q.useRef(null),q.useEffect(()=>{},[]),null),YE=()=>R.jsx(up,{children:R.jsxs("div",{className:"App",children:[R.jsx(FE,{}),R.jsx(QE,{}),R.jsx(KE,{}),R.jsx(PE,{}),R.jsx(Jm,{children:R.jsxs(Im,{children:[R.jsx(Zi,{path:"*",element:R.jsx(Dm,{to:"/",replace:!0})}),R.jsx(Zi,{path:"/",element:R.jsx(o6,{})}),R.jsx(Zi,{path:"/greentrails/*",element:R.jsx(o6,{})}),R.jsx(Zi,{path:"/volenterpage/*",element:R.jsx(NE,{})}),R.jsx(Zi,{path:"/adddata/*",element:R.jsx(VE,{})}),R.jsx(Zi,{path:"/leaderboard/*",element:R.jsx(UE,{})}),R.jsx(Zi,{path:"/signup/*",element:R.jsx(BE,{})}),R.jsx(Zi,{path:"/santa/*",element:R.jsx(qE,{})})]})})]})});Pd.createRoot(document.getElementById("root")).render(R.jsx(cn.StrictMode,{children:R.jsx(YE,{})}));
