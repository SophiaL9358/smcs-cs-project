(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function x(){}function Se(t){return t()}function ve(){return Object.create(null)}function ee(t){t.forEach(Se)}function Pe(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oe;function pe(t,e){return oe||(oe=document.createElement("a")),oe.href=e,t===oe.href}function Ce(t){return Object.keys(t).length===0}function Oe(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function le(t,e,n){t.$$.on_destroy.push(Oe(e,n))}function w(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function v(){return z(" ")}function xe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Re(t){return Array.from(t.childNodes)}function V(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let ie;function ne(t){ie=t}function Ve(){if(!ie)throw new Error("Function called outside component initialization");return ie}function Te(t){Ve().$$.on_destroy.push(t)}const K=[],he=[];let Q=[];const ke=[],Me=Promise.resolve();let _e=!1;function Fe(){_e||(_e=!0,Me.then(Ie))}function $e(t){Q.push(t)}const me=new Set;let D=0;function Ie(){if(D!==0)return;const t=ie;do{try{for(;D<K.length;){const e=K[D];D++,ne(e),He(e.$$)}}catch(e){throw K.length=0,D=0,e}for(ne(null),K.length=0,D=0;he.length;)he.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];me.has(n)||(me.add(n),n())}Q.length=0}while(K.length);for(;ke.length;)ke.pop()();_e=!1,me.clear(),ne(t)}function He(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($e)}}function Je(t){const e=[],n=[];Q.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),Q=e}const se=new Set;let J;function qe(){J={r:0,c:[],p:J}}function Be(){J.r||ee(J.c),J=J.p}function E(t,e){t&&t.i&&(se.delete(t),t.i(e))}function S(t,e,n,i){if(t&&t.o){if(se.has(t))return;se.add(t),J.c.push(()=>{se.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function j(t){t&&t.c()}function P(t,e,n,i){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),i||$e(()=>{const d=t.$$.on_mount.map(Se).filter(Pe);t.$$.on_destroy?t.$$.on_destroy.push(...d):ee(d),t.$$.on_mount=[]}),s.forEach($e)}function I(t,e){const n=t.$$;n.fragment!==null&&(Je(n.after_update),ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(K.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,i,o,s,d,r=[-1]){const c=ie;ne(t);const f=t.$$={fragment:null,ctx:[],props:s,update:x,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ve(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};d&&d(f.root);let g=!1;if(f.ctx=n?n(t,e.props||{},(u,$,...y)=>{const _=y.length?y[0]:$;return f.ctx&&o(f.ctx[u],f.ctx[u]=_)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](_),g&&Ge(t,u)),$}):[],f.update(),g=!0,ee(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){const u=Re(e.target);f.fragment&&f.fragment.l(u),u.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&E(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Ie()}ne(c)}class F{$destroy(){I(this,1),this.$destroy=x}$on(e,n){if(!Pe(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W=[];function je(t,e=x){let n;const i=new Set;function o(r){if(R(t,r)&&(t=r,n)){const c=!W.length;for(const f of i)f[1](),W.push(f,t);if(c){for(let f=0;f<W.length;f+=2)W[f][0](W[f+1]);W.length=0}}}function s(r){o(r(t))}function d(r,c=x){const f=[r,c];return i.add(f),i.size===1&&(n=e(o)||x),r(t),()=>{i.delete(f),i.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:d}}let Ae=0;function Ee(){Y.set({name:void 0,email:void 0,loggedIn:!1,confirmed:!1,grade:void 0}),X.set({width:15,display:"none"})}let Y=je({confirmed:!1,name:void 0,email:void 0,loggedIn:!1,grade:void 0}),ze;const Ue=Y.subscribe(t=>{ze=t.confirmed});function Ne(){Ae=window.innerWidth,console.log("doing something"),ze&&(Ae<800?X.set({width:0,display:"none"}):X.set({width:15,display:"block"}))}window.addEventListener("resize",Ne);let X=je({width:15,display:"none"});const De=3,We=1.5,Z="rgba(255, 218, 26, 1)",Ke="rgb(248, 72, 72)",Qe="rgb(101, 255, 144)",be=.3,ge="outline-color:"+Z+";outline-width: "+be+"em;outline-style: solid;";function Ye(t){let e,n;return{c(){e=b("h2"),n=z(t[0]),T(e,"color",Z),T(e,"font-size",We+"em")},m(i,o){p(i,e,o),w(e,n)},p(i,[o]){o&1&&V(n,i[0])},i:x,o:x,d(i){i&&m(e)}}}function Xe(t,e,n){let{text:i}=e;return t.$$set=o=>{"text"in o&&n(0,i=o.text)},[i]}class ye extends F{constructor(e){super(),M(this,e,Xe,Ye,R,{text:0})}}function Ze(t){let e,n;return{c(){e=b("h1"),n=z(t[0]),T(e,"color",Z),T(e,"font-size",De+"em")},m(i,o){p(i,e,o),w(e,n)},p(i,[o]){o&1&&V(n,i[0])},i:x,o:x,d(i){i&&m(e)}}}function et(t,e,n){let{text:i}=e;return t.$$set=o=>{"text"in o&&n(0,i=o.text)},[i]}class we extends F{constructor(e){super(),M(this,e,et,Ze,R,{text:0})}}function tt(t){let e,n,i,o,s,d;return{c(){e=b("script"),i=v(),o=b("div"),s=v(),d=b("div"),d.innerHTML='<div class="g_id_signin svelte-3508yz" data-type="standard">No Internet Connection</div>',pe(e.src,n="https://accounts.google.com/gsi/client")||A(e,"src",n),e.async=!0,e.defer=!0,A(o,"id","g_id_onload"),A(o,"data-client_id","341767156528-fs4h69iujkab2cu04tvrr0jeafb3gk2o.apps.googleusercontent.com"),A(o,"data-callback","handleCredentialResponse"),A(d,"class","parent_container svelte-3508yz")},m(r,c){w(document.head,e),p(r,i,c),p(r,o,c),p(r,s,c),p(r,d,c)},p:x,i:x,o:x,d(r){m(e),r&&m(i),r&&m(o),r&&m(s),r&&m(d)}}}function nt(t){let n=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}function it(t){return globalThis.handleCredentialResponse=e=>{console.log("START");let n=nt(e.credential);Y.update(i=>({...i,email:n.email,name:n.name,loggedIn:!0,grade:2025})),console.log("ID: "+n.sub),console.log("Full Name: "+n.name),console.log("Given Name: "+n.given_name),console.log("Family Name: "+n.family_name),console.log("Image URL: "+n.picture),console.log("Email: "+n.email)},[]}class ot extends F{constructor(e){super(),M(this,e,it,tt,R,{})}}function rt(t){let e,n,i;return{c(){e=b("div"),n=z("sdfsd"),A(e,"id","sidebar"),A(e,"style",i=ge+" color: "+Z+"; margin-top: "+be+"em; width: "+t[0].width+"em; display: "+t[0].display+";"),A(e,"class","svelte-147fut2")},m(o,s){p(o,e,s),w(e,n)},p(o,[s]){s&1&&i!==(i=ge+" color: "+Z+"; margin-top: "+be+"em; width: "+o[0].width+"em; display: "+o[0].display+";")&&A(e,"style",i)},i:x,o:x,d(o){o&&m(e)}}}function st(t,e,n){let i;return le(t,X,o=>n(0,i=o)),[i]}class lt extends F{constructor(e){super(),M(this,e,st,rt,R,{})}}function ft(t){let e,n,i=t[0]()+"",o;return{c(){e=b("div"),n=b("div"),o=z(i),T(n,"color",Z),A(e,"style",ge),A(e,"id","box"),A(e,"class","svelte-un4myj")},m(s,d){p(s,e,d),w(e,n),w(n,o)},p(s,[d]){d&1&&i!==(i=s[0]()+"")&&V(o,i)},i:x,o:x,d(s){s&&m(e)}}}function ut(t,e,n){let i,o;return le(t,Y,s=>n(1,o=s)),t.$$.update=()=>{t.$$.dirty&2&&n(0,i=()=>o.confirmed?o.name:"Login")},[i,o]}class ct extends F{constructor(e){super(),M(this,e,ut,ft,R,{})}}function dt(t){let e,n,i,o=t[0].name+"",s,d,r,c,f,g,u,$,y,_,l=t[0].platform[0]+"",k,q,B,G,L,H=t[0].platform[1]+"",C,U,te,a,h=t[0].platform[2]+"",fe,ue,ce,de;return{c(){e=b("div"),n=b("div"),i=b("h3"),s=z(o),d=v(),r=b("br"),c=v(),f=b("div"),g=b("iframe"),$=v(),y=b("div"),_=b("p"),k=z(l),q=v(),B=b("br"),G=v(),L=b("p"),C=z(H),U=b("br"),te=v(),a=b("p"),fe=z(h),ue=v(),ce=b("br"),de=b("br"),A(g,"title","Candidate Video"),pe(g.src,u=t[0].video)||A(g,"src",u),A(g,"id","video"),A(g,"class","svelte-1b0zmyu"),A(y,"id","platform"),A(y,"class","svelte-1b0zmyu"),A(f,"id","content"),A(f,"class","svelte-1b0zmyu"),A(n,"id","box"),A(n,"class","svelte-1b0zmyu"),A(e,"class","parent_container svelte-1b0zmyu")},m(N,O){p(N,e,O),w(e,n),w(n,i),w(i,s),w(n,d),w(n,r),w(n,c),w(n,f),w(f,g),w(f,$),w(f,y),w(y,_),w(_,k),w(y,q),w(y,B),w(y,G),w(y,L),w(L,C),w(y,U),w(y,te),w(y,a),w(a,fe),p(N,ue,O),p(N,ce,O),p(N,de,O)},p(N,[O]){O&1&&o!==(o=N[0].name+"")&&V(s,o),O&1&&!pe(g.src,u=N[0].video)&&A(g,"src",u),O&1&&l!==(l=N[0].platform[0]+"")&&V(k,l),O&1&&H!==(H=N[0].platform[1]+"")&&V(C,H),O&1&&h!==(h=N[0].platform[2]+"")&&V(fe,h)},i:x,o:x,d(N){N&&m(e),N&&m(ue),N&&m(ce),N&&m(de)}}}function mt(t,e,n){let{candidate:i={name:"First Last",video:"https://drive.google.com/file/d/13R1MQjMNP0gJHvmVu4mwASH-jsqa3dVE/preview",platform:["Platform 1","Platform 2","Platform 3"]}}=e;return t.$$set=o=>{"candidate"in o&&n(0,i=o.candidate)},[i]}class ae extends F{constructor(e){super(),M(this,e,mt,dt,R,{candidate:0})}}function at(t){let e,n,i,o,s,d,r,c,f,g;return e=new ye({props:{text:t[0]}}),i=new ae({props:{candidate:{name:"Julia Kolotev",video:"https://www.youtube.com/embed/IA9lteWEQ44",platform:["Loves dogs, will eat carrots all day, lane 7","hot dog diggity dog dig dork dorg dorm doo","i can do this all dayyyyyyyyyyyyy back it up back it up"]}}}),s=new ae({props:{candidate:{name:"Victoria Mo",video:"https://drive.google.com/uc?export=view&id=1S-DRHJqIzDytKcbRrojaYbcMF3APvuNA",platform:["the moes of the mosey mo most moey mose muse moo","boom boom boom boom boom boom boom boom boom boom boom boom boom","art bart"]}}}),r=new ae({props:{candidate:{name:"Veronica Wang",video:"https://drive.google.com/uc?export=view&id=1o8AXRH9J30o1FgTUJHkh1wj_mAkvF2uJ",platform:["weef wof woooaf fwaf wofow waoofwoafwoefwjeowfwfo wfwoajfowjfa","ap art omg? !E?!@#@!$ 48ufdksljsf","south sudan is such a good country def go there lol ehehhehe"]}}}),{c(){j(e.$$.fragment),n=v(),j(i.$$.fragment),o=v(),j(s.$$.fragment),d=v(),j(r.$$.fragment),c=v(),f=b("br")},m(u,$){P(e,u,$),p(u,n,$),P(i,u,$),p(u,o,$),P(s,u,$),p(u,d,$),P(r,u,$),p(u,c,$),p(u,f,$),g=!0},p(u,[$]){const y={};$&1&&(y.text=u[0]),e.$set(y)},i(u){g||(E(e.$$.fragment,u),E(i.$$.fragment,u),E(s.$$.fragment,u),E(r.$$.fragment,u),g=!0)},o(u){S(e.$$.fragment,u),S(i.$$.fragment,u),S(s.$$.fragment,u),S(r.$$.fragment,u),g=!1},d(u){I(e,u),u&&m(n),I(i,u),u&&m(o),I(s,u),u&&m(d),I(r,u),u&&m(c),u&&m(f)}}}function pt(t,e,n){let{position:i}=e;return t.$$set=o=>{"position"in o&&n(0,i=o.position)},[i]}class re extends F{constructor(e){super(),M(this,e,pt,at,R,{position:0})}}function _t(t){let e,n,i,o,s,d,r,c,f,g,u,$,y,_;return e=new we({props:{text:"Rising 10th Grade Voting"}}),i=new re({props:{position:"President"}}),d=new re({props:{position:"Vice President"}}),f=new re({props:{position:"Secretary"}}),$=new re({props:{position:"Treasury"}}),{c(){j(e.$$.fragment),n=v(),j(i.$$.fragment),o=b("br"),s=v(),j(d.$$.fragment),r=b("br"),c=v(),j(f.$$.fragment),g=b("br"),u=v(),j($.$$.fragment),y=b("br")},m(l,k){P(e,l,k),p(l,n,k),P(i,l,k),p(l,o,k),p(l,s,k),P(d,l,k),p(l,r,k),p(l,c,k),P(f,l,k),p(l,g,k),p(l,u,k),P($,l,k),p(l,y,k),_=!0},p:x,i(l){_||(E(e.$$.fragment,l),E(i.$$.fragment,l),E(d.$$.fragment,l),E(f.$$.fragment,l),E($.$$.fragment,l),_=!0)},o(l){S(e.$$.fragment,l),S(i.$$.fragment,l),S(d.$$.fragment,l),S(f.$$.fragment,l),S($.$$.fragment,l),_=!1},d(l){I(e,l),l&&m(n),I(i,l),l&&m(o),l&&m(s),I(d,l),l&&m(r),l&&m(c),I(f,l),l&&m(g),l&&m(u),I($,l),l&&m(y)}}}class Le extends F{constructor(e){super(),M(this,e,null,_t,R,{})}}function $t(t){let e;return{c(){e=z("Something went wrong :/")},m(n,i){p(n,e,i)},p:x,i:x,o:x,d(n){n&&m(e)}}}function bt(t){let e,n;return e=new Le({}),{c(){j(e.$$.fragment)},m(i,o){P(e,i,o),n=!0},p:x,i(i){n||(E(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function gt(t){let e,n;return e=new Le({}),{c(){j(e.$$.fragment)},m(i,o){P(e,i,o),n=!0},p:x,i(i){n||(E(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function yt(t){let e,n,i,o,s,d,r=t[0].name+"",c,f,g,u,$=t[0].email+"",y,_,l,k,q,B,G,L,H,C,U,te;return e=new we({props:{text:"SGA Voting App"}}),i=new ye({props:{text:"Poolesville High School"}}),{c(){j(e.$$.fragment),n=v(),j(i.$$.fragment),o=z(`\r
      Is this u? \r
      `),s=b("br"),d=z(" NAME: "),c=z(r),f=v(),g=b("br"),u=z("EMAIL: "),y=z($),_=v(),l=b("button"),k=z("NO!!"),q=v(),B=b("br"),G=v(),L=b("button"),H=z("YES!!"),T(l,"background-color",Ke),T(L,"background-color",Qe)},m(a,h){P(e,a,h),p(a,n,h),P(i,a,h),p(a,o,h),p(a,s,h),p(a,d,h),p(a,c,h),p(a,f,h),p(a,g,h),p(a,u,h),p(a,y,h),p(a,_,h),p(a,l,h),w(l,k),p(a,q,h),p(a,B,h),p(a,G,h),p(a,L,h),w(L,H),C=!0,U||(te=[xe(l,"click",t[3]),xe(L,"click",t[4])],U=!0)},p(a,h){(!C||h&1)&&r!==(r=a[0].name+"")&&V(c,r),(!C||h&1)&&$!==($=a[0].email+"")&&V(y,$)},i(a){C||(E(e.$$.fragment,a),E(i.$$.fragment,a),C=!0)},o(a){S(e.$$.fragment,a),S(i.$$.fragment,a),C=!1},d(a){I(e,a),a&&m(n),I(i,a),a&&m(o),a&&m(s),a&&m(d),a&&m(c),a&&m(f),a&&m(g),a&&m(u),a&&m(y),a&&m(_),a&&m(l),a&&m(q),a&&m(B),a&&m(G),a&&m(L),U=!1,ee(te)}}}function wt(t){let e,n,i,o,s,d;return e=new we({props:{text:"SGA Voting App"}}),i=new ye({props:{text:"Poolesville High School"}}),s=new ot({}),{c(){j(e.$$.fragment),n=v(),j(i.$$.fragment),o=v(),j(s.$$.fragment)},m(r,c){P(e,r,c),p(r,n,c),P(i,r,c),p(r,o,c),P(s,r,c),d=!0},p:x,i(r){d||(E(e.$$.fragment,r),E(i.$$.fragment,r),E(s.$$.fragment,r),d=!0)},o(r){S(e.$$.fragment,r),S(i.$$.fragment,r),S(s.$$.fragment,r),d=!1},d(r){I(e,r),r&&m(n),I(i,r),r&&m(o),I(s,r)}}}function vt(t){let e,n,i,o,s,d,r,c,f,g;e=new ct({}),i=new lt({});const u=[wt,yt,gt,bt,$t],$=[];function y(_,l){return _[0].loggedIn?_[0].loggedIn&&!_[0].confirmed?1:2:0}return c=y(t),f=$[c]=u[c](t),{c(){j(e.$$.fragment),n=v(),j(i.$$.fragment),o=v(),s=b("br"),d=v(),r=b("main"),f.c(),T(r,"margin-left",t[2]+"em")},m(_,l){P(e,_,l),p(_,n,l),P(i,_,l),p(_,o,l),p(_,s,l),p(_,d,l),p(_,r,l),$[c].m(r,null),g=!0},p(_,[l]){let k=c;c=y(_),c===k?$[c].p(_,l):(qe(),S($[k],1,1,()=>{$[k]=null}),Be(),f=$[c],f?f.p(_,l):(f=$[c]=u[c](_),f.c()),E(f,1),f.m(r,null)),(!g||l&4)&&T(r,"margin-left",_[2]+"em")},i(_){g||(E(e.$$.fragment,_),E(i.$$.fragment,_),E(f),g=!0)},o(_){S(e.$$.fragment,_),S(i.$$.fragment,_),S(f),g=!1},d(_){I(e,_),_&&m(n),I(i,_),_&&m(o),_&&m(s),_&&m(d),_&&m(r),$[c].d()}}}function xt(t,e,n){let i,o;le(t,Y,c=>n(0,i=c)),le(t,X,c=>n(1,o=c)),Te(Ue);let s;const d=()=>{Ee()},r=()=>{Y.update(c=>({...c,confirmed:!0})),X.set({display:"block",width:o.width}),Ne()};return t.$$.update=()=>{t.$$.dirty&2&&(o.display=="block"?n(2,s=o.width):n(2,s=0)),t.$$.dirty&1&&i.loggedIn&&(window.onbeforeunload=Ee)},[i,o,s,d,r]}class ht extends F{constructor(e){super(),M(this,e,xt,vt,R,{})}}new ht({target:document.getElementById("app")});
