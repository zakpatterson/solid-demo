const we=(e,t)=>e===t,P=Symbol("solid-proxy"),B={equals:we};let ie=ce;const N={},x=1,Q=2,le={owned:null,cleanups:null,context:null,owner:null};var h=null;let j=null,a=null,m=null,p=null,A=null,Y=0;function k(e,t){t&&(h=t);const n=a,s=h,i=e.length===0?le:{owned:null,cleanups:null,context:null,owner:s};h=i,a=null;try{return Z(()=>e(()=>ee(i)),!0)}finally{a=n,h=s}}function oe(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,pending:N,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==N?n.pending:n.value)),J(n,i));return[ue.bind(n),s]}function Ae(e,t,n){const s=G(e,t,!0,x);T(s)}function V(e,t,n){const s=G(e,t,!1,x);T(s)}function Be(e,t,n){ie=Oe;const s=G(e,t,!1,x);s.user=!0,A?A.push(s):queueMicrotask(()=>T(s))}function W(e,t,n){n=n?Object.assign({},B,n):B;const s=G(e,t,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,T(s),ue.bind(s)}function re(e){if(m)return e();let t;const n=m=[];try{t=e()}finally{m=null}return Z(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==N){const l=i.pending;i.pending=N,J(i,l)}}},!1),t}function K(e){let t,n=a;return a=null,t=e(),a=n,t}function Se(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function fe(){return a}function Ie(e){const t=Symbol("context");return{id:t,Provider:Pe(t),defaultValue:e}}function Me(e){return de(h,e.id)||e.defaultValue}function xe(e){const t=W(e);return W(()=>H(t()))}function ue(){const e=j;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===x||e?T(this):z(this),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function J(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(m)return e.pending===N&&m.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&j.disposed.has(l),l.pure?p.push(l):A.push(l),l.observers&&(s&&!l.tState||!s&&!l.state)&&ae(l),s||(l.state=x)}if(p.length>1e6)throw p=[],new Error},!1),t}function T(e){if(!e.fn)return;ee(e);const t=h,n=a,s=Y;a=h=e,Ce(e,e.value,s),a=n,h=t}function Ce(e,t,n){let s;try{s=e.fn(t)}catch(i){he(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?J(e,s):e.value=s,e.updatedAt=n)}function G(e,t,n,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==le&&(h.owned?h.owned.push(l):h.owned=[l]),l}function D(e){const t=j;if(e.state!==x)return e.state=0;if(e.suspense&&K(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===x||t)T(e);else if(e.state===Q||t){const i=p;p=null,z(e,n[0]),p=i}}function Z(e,t){if(p)return e();let n=!1;t||(p=[]),A?n=!0:A=[],Y++;try{return e()}catch(s){he(s)}finally{Ee(n)}}function Ee(e){p&&(ce(p),p=null),!e&&(A.length?re(()=>{ie(A),A=null}):A=null)}function ce(e){for(let t=0;t<e.length;t++)D(e[t])}function Oe(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:D(i)}const s=e.length;for(t=0;t<n;t++)D(e[t]);for(t=s;t<e.length;t++)D(e[t])}function z(e,t){e.state=0;const n=j;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||n?i!==t&&D(i):(i.state===Q||n)&&z(i,t))}}function ae(e){const t=j;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=Q,s.pure?p.push(s):A.push(s),s.observers&&ae(s))}}function ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){throw e}function de(e,t){return e&&(e.context&&e.context[t]!==void 0?e.context[t]:e.owner&&de(e.owner,t))}function H(e){if(typeof e=="function"&&!e.length)return H(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=H(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Pe(e){return function(n){let s;return Ae(()=>s=K(()=>(h.context={[e]:n.value},xe(()=>n.children)))),s}}const Ne=Symbol("fallback");function te(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],l=[],o=0,r=t.length>1?[]:null;return Se(()=>te(l)),()=>{let u=e()||[],c,f;return K(()=>{let d=u.length,y,C,_,v,L,b,w,S,E;if(d===0)o!==0&&(te(l),l=[],s=[],i=[],o=0,r&&(r=[])),n.fallback&&(s=[Ne],i[0]=k(be=>(l[0]=be,n.fallback())),o=1);else if(o===0){for(i=new Array(d),f=0;f<d;f++)s[f]=u[f],i[f]=k(g);o=d}else{for(_=new Array(d),v=new Array(d),r&&(L=new Array(d)),b=0,w=Math.min(o,d);b<w&&s[b]===u[b];b++);for(w=o-1,S=d-1;w>=b&&S>=b&&s[w]===u[S];w--,S--)_[S]=i[w],v[S]=l[w],r&&(L[S]=r[w]);for(y=new Map,C=new Array(S+1),f=S;f>=b;f--)E=u[f],c=y.get(E),C[f]=c===void 0?-1:c,y.set(E,f);for(c=b;c<=w;c++)E=s[c],f=y.get(E),f!==void 0&&f!==-1?(_[f]=i[c],v[f]=l[c],r&&(L[f]=r[c]),f=C[f],y.set(E,f)):l[c]();for(f=b;f<d;f++)f in _?(i[f]=_[f],l[f]=v[f],r&&(r[f]=L[f],r[f](f))):i[f]=k(g);i=i.slice(0,o=d),s=u.slice(0)}return i});function g(d){if(l[f]=d,r){const[y,C]=oe(f);return r[f]=C,t(u[f],y)}return t(u[f])}}}function Re(e,t){return K(()=>e(t))}function Ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return W(Te(()=>e.each,e.children,t||void 0))}function _e(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,c=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const f=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],f)}else if(l===r)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!c){c=new Map;let g=r;for(;g<l;)c.set(n[g],g++)}const f=c.get(t[o]);if(f!=null)if(r<f&&f<l){let g=o,d=1,y;for(;++g<i&&g<l&&!((y=c.get(t[g]))==null||y!==f+d);)d++;if(d>f-r){const C=t[o];for(;r<f;)e.insertBefore(n[r++],C)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const ne="_$DX_DELEGATE";function Fe(e,t,n){let s;return k(i=>{s=i,t===document?e():$e(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function Ke(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ge(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,me))}}function $e(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return I(e,t,s,n);V(i=>I(e,t(),i,n),s)}function me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function I(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=O(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=O(e,n,s);else{if(l==="function")return V(()=>{let r=t();for(;typeof r=="function";)r=r();n=I(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(X(r,t,i))return V(()=>n=I(e,r,n,s,!0)),()=>n;r.length===0?O(e,n,s):Array.isArray(n)?n.length===0?se(e,r,s):_e(e,n,r):(n&&O(e),se(e,r)),n=r}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=O(e,n,s,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=X(e,o)||s;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(n){for(;typeof o=="function";)o=o();s=X(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function se(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function O(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const ge=Symbol("store-raw"),M=Symbol("store-node"),De=Symbol("store-name");function pe(e,t){let n=e[P];if(!n){Object.defineProperty(e,P,{value:n=new Proxy(e,Le)});const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let l=0,o=s.length;l<o;l++){const r=s[l];if(i[r].get){const u=i[r].get.bind(n);Object.defineProperty(e,r,{get:u})}}}return n}function R(e){return e!=null&&typeof e=="object"&&(e[P]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,s,i,l;if(n=e!=null&&e[ge])return n;if(!R(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,r=e.length;o<r;o++)i=e[o],(s=U(i,t))!==i&&(e[o]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let u=0,c=o.length;u<c;u++)l=o[u],!r[l].get&&(i=e[l],(s=U(i,t))!==i&&(e[l]=s))}return e}function F(e){let t=e[M];return t||Object.defineProperty(e,M,{value:t={}}),t}function je(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===P||t===M||t===De||(delete n.value,delete n.writable,n.get=()=>e[P][t]),n}function ve(e){if(fe()){const t=F(e);(t._||(t._=q()))()}return Reflect.ownKeys(e)}function q(){const[e,t]=oe(void 0,{equals:!1,internal:!0});return e.$=t,e}const Le={get(e,t,n){if(t===ge)return e;if(t===P)return n;const s=e[t];if(t===M||t==="__proto__")return s;const i=R(s);if(fe()&&(typeof s!="function"||e.hasOwnProperty(t))){let l,o;i&&(l=F(s))&&(o=l._||(l._=q()),o()),l=F(e),o=l[t]||(l[t]=q()),o()}return i?pe(s):s},set(){return!0},deleteProperty(){return!0},ownKeys:ve,getOwnPropertyDescriptor:je};function ye(e,t,n){if(e[t]===n)return;const s=Array.isArray(e),i=e.length,l=n===void 0,o=s||l===t in e;l?delete e[t]:e[t]=n;let r=F(e),u;(u=r[t])&&u.$(),s&&e.length!==i&&(u=r.length)&&u.$(),o&&(u=r._)&&u.$()}function ke(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];ye(e,i,t[i])}}function $(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const o=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let u=0;u<s.length;u++)$(e,[s[u]].concat(t),[s[u]].concat(n));return}else if(r&&o==="function"){for(let u=0;u<e.length;u++)s(e[u],u)&&$(e,[u].concat(t),[u].concat(n));return}else if(r&&o==="object"){const{from:u=0,to:c=e.length-1,by:f=1}=s;for(let g=u;g<=c;g+=f)$(e,[g].concat(t),[g].concat(n));return}else if(t.length>1){$(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||s===void 0&&l==null||(l=U(l),s===void 0||R(i)&&R(l)&&!Array.isArray(l)?ke(i,l):ye(e,s,l))}function Ve(e,t){const n=U(e||{}),s=pe(n);function i(...l){re(()=>$(n,l))}return[s,i]}export{Ue as F,Ve as a,Be as b,oe as c,Re as d,Ie as e,Ge as f,$e as i,Fe as r,Ke as t,Me as u};
