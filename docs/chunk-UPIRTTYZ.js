import{a as b,b as L}from"./chunk-KIJ5YDKX.js";import"./chunk-I7J47GMG.js";import{b as y}from"./chunk-WP5LON3G.js";import"./chunk-EIXP5TK4.js";import{$a as _,Hb as x,Ka as m,Oa as l,Pa as d,Qa as u,Ra as f,Sa as r,Ta as s,Ua as a,Ya as C,_ as c,aa as p,fb as h,ib as g,jb as v}from"./chunk-7FIF2LK4.js";function M(e,t){e&1&&(r(0,"div",1),a(1,"div",2),s())}var W=(e,t)=>t.region;function w(e,t){if(e&1&&a(0,"app-tab-countries-by-region",3),e&2){let n=t.$implicit;m("region",n.region)("countries",n.countries)}}function B(e,t){e&1&&(r(0,"div",4),_(1,` No wished countries to show!
`),s())}function F(e,t){if(e&1&&(u(0,w,1,2,"app-tab-countries-by-region",3,W,!1,B,2,0),g(3,"countriesByRegionMap")),e&2){let n=C();f(v(3,1,n.countries()))}}var A=(()=>{let t=class t{constructor(){this.service=c(y),this.isLoading=()=>this.service.loading(),this.countries=()=>Array.from(this.service.countries().values()).filter(i=>i.isInWishList).map(i=>i)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-wish-list"]],standalone:!0,features:[h],decls:2,vars:1,consts:[["class","d-flex justify-content-center m-5"],[1,"d-flex","justify-content-center","m-5"],["role","status",1,"spinner-border"],[3,"region","countries"],[1,"alert","alert-light","text-back-50","m-5","text-center"]],template:function(o,T){o&1&&l(0,M,2,0,"div",0)(1,F,4,3),o&2&&d(0,T.isLoading()?0:1)},dependencies:[x,b,L]});let e=t;return e})();export{A as WishListComponent};
