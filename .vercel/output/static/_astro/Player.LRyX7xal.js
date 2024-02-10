import{r as a}from"./index.LFf77hJu.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=a,x=Symbol.for("react.element"),p=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(n,r,s){var t,i={},o=null,c=null;s!==void 0&&(o=""+s),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)h.call(r,t)&&!v.hasOwnProperty(t)&&(i[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:x,type:n,key:o,ref:c,props:i,_owner:m.current}}l.Fragment=p;l.jsx=d;l.jsxs=d;u.exports=l;var e=u.exports;const j=()=>e.jsx("svg",{role:"img",height:"16",width:"16","arian-hidden":"true",viewBox:"0 0 16 16",children:e.jsx("path",{d:`M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0\r
    .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0\r
    .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z`})}),y=()=>e.jsx("svg",{role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",children:e.jsx("path",{d:`M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05\r
    14.894A.7.7 0 0 1 3 14.288V1.713z`})});function g(){const[n,r]=a.useState(!1);a.useState(null);const s=a.useRef(),t=()=>{n?s.current.pause():(s.current.src="/music/1/01.mp3",s.current.play(),s.current.volume=.1),r(!n)};return e.jsxs("div",{className:"flex flex-row justify-between w-full px-4 z-50",children:[e.jsx("div",{children:"CurrentSong..."}),e.jsx("div",{className:"grid place-content-center gap-4 flex-1",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"bg-white rounded-full p-2",onClick:t,children:n?e.jsx(j,{}):e.jsx(y,{})})})}),e.jsx("div",{className:"grid place-content-center"}),e.jsx("audio",{ref:s})]})}export{g as Player};
