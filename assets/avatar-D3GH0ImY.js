import{r as o,j as d,P as u,c as f}from"./index-CkXYgjQf.js";import{c as h,f as I,g}from"./index-BkmJofXD.js";var m="Avatar",[j,F]=h(m),[C,p]=j(m),A=o.forwardRef((a,e)=>{const{__scopeAvatar:t,...r}=a,[n,s]=o.useState("idle");return d.jsx(C,{scope:t,imageLoadingStatus:n,onImageLoadingStatusChange:s,children:d.jsx(u.span,{...r,ref:e})})});A.displayName=m;var x="AvatarImage",w=o.forwardRef((a,e)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:n=()=>{},...s}=a,i=p(x,t),l=_(r,s.referrerPolicy),c=I(v=>{n(v),i.onImageLoadingStatusChange(v)});return g(()=>{l!=="idle"&&c(l)},[l,c]),l==="loaded"?d.jsx(u.img,{...s,ref:e,src:r}):null});w.displayName=x;var S="AvatarFallback",N=o.forwardRef((a,e)=>{const{__scopeAvatar:t,delayMs:r,...n}=a,s=p(S,t),[i,l]=o.useState(r===void 0);return o.useEffect(()=>{if(r!==void 0){const c=window.setTimeout(()=>l(!0),r);return()=>window.clearTimeout(c)}},[r]),i&&s.imageLoadingStatus!=="loaded"?d.jsx(u.span,{...n,ref:e}):null});N.displayName=S;function _(a,e){const[t,r]=o.useState("idle");return g(()=>{if(!a){r("error");return}let n=!0;const s=new window.Image,i=l=>()=>{n&&r(l)};return r("loading"),s.onload=i("loaded"),s.onerror=i("error"),s.src=a,e&&(s.referrerPolicy=e),()=>{n=!1}},[a,e]),t}var L=A,y=w,R=N;const b=o.forwardRef(({className:a,...e},t)=>d.jsx(L,{ref:t,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...e}));b.displayName=L.displayName;const E=o.forwardRef(({className:a,...e},t)=>d.jsx(y,{ref:t,className:f("aspect-square h-full w-full",a),...e}));E.displayName=y.displayName;const k=o.forwardRef(({className:a,...e},t)=>d.jsx(R,{ref:t,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...e}));k.displayName=R.displayName;export{b as A,E as a,k as b};