(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1114:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full text-center flex justify-center"},[e("img",{attrs:{src:n(246)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",[this._v("How it works")]),this._v(" "),e("p",[this._v("Simply get used to one key managina all your accounts in secure enrcrypted way.")]),this._v(" "),e("div",{})])}],r=n(134),c=n(421),o=n(245),f=n(244),h=n(396),d=n(397),v=n(453),j=n(410),m=n(454),_=n(455),x=n(456),w={data:function(){return{linedata:{labels:["1","2","3","4","5"],datasets:[{label:"Deflation",borderColor:"#FC2525",pointBackgroundColor:"white",borderWidth:1,pointBorderColor:"white",backgroundColor:this.gradient,data:[2,5,15,35,65]}]},doughnutData:{labels:["Presale","Mainsale","Team","Mainsaleing","Liquidity"],datasets:[{label:"Bend",borderColor:"transparent",pointBackgroundColor:"white",borderWidth:1,backgroundColor:["#5D675B","#E5B25D","#4357AD","#EF5B5B"],data:[20,40,10,10,20]}]},chart:{width:"80%"}}},components:{Wave:r.default,Bend:c.default,LineChart:h.default,DoughnutChart:d.default,FeatureLeft:o.default,FeatureRight:f.default,Presale:v.a,Team:j.a,Marketing:m.a,Mainsale:_.a,Liquidity:x.a}},C=n(2),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"pt-32"},[n("div",{staticClass:"container px-3 mx-auto flex flex-col items-center w-full pt-12"},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-col w-full justify-center items-center text-center md:text-left"},[n("h1",{staticClass:"my-4 text-5xl font-bold leading-tight"},[t._v("\n          Authic\n        ")]),t._v(" "),n("p",{staticClass:"leading-normal text-2xl mb-8 font-thin"},[t._v("\n          Cross Network Identity Manager\n        ")]),t._v(" "),n("button",{staticClass:"mx-auto lg:mx-0 hover:underline hot text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center",on:{click:function(e){return t.$router.push("/launch")}}},[t._v("\n          Enter!\n        ")])])])]),t._v(" "),n("Wave",{attrs:{align:"top",color:"#fafafa"}}),t._v(" "),t._m(1),t._v(" "),n("Wave",{attrs:{align:"bottom",color:"#fafafa"}}),t._v(" "),n("div",{staticClass:"py-32"})],1)}),l,!1,null,"01c9322a",null);e.default=component.exports;installComponents(component,{Wave:n(134).default})},244:function(t,e,n){"use strict";n.r(e);var l={name:"FeatureRight",props:{headline:{type:String,required:!1},content:{type:String,required:!1}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap flex-col-reverse md:flex-row w-full my-16 h-auto justify-left items-center md:text-right"},[n("div",{staticClass:"w-full md:w-1/2 p-6 text-center md:text-right"},[n("h3",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("\n      "+t._s(t.headline)+"\n    ")]),t._v(" "),n("p",{staticClass:"mb-8"},[t._v("\n      "+t._s(t.content)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex flex-wrap w-full md:w-1/2 p-6 mt-6"},[n("div",{staticClass:"flex justify-center md:justify-start w-full mx-8"},[t._t("svg")],2)])])}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);var l={name:"FeatureLeft",props:{headline:{type:String,required:!1},content:{type:String,required:!1}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap justify-right w-full sm:flex-row"},[n("div",{staticClass:"flex flex-wrap w-full md:w-1/2 p-6 mt-6"},[n("div",{staticClass:"flex justify-center md:justify-end w-full mx-8"},[t._t("svg")],2)]),t._v(" "),n("div",{staticClass:"h-auto flex justify-right items-center w-full md:w-1/2 p-6 mt-6"},[n("div",{staticClass:"align-middle text-center md:text-left"},[n("h3",{staticClass:"text-3xl font-bold leading-none mb-3"},[t._v("\n        "+t._s(t.headline)+"\n      ")]),t._v(" "),n("p",{staticClass:"mb-8 h-auto"},[t._v("\n        "+t._s(t.content)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){t.exports=n.p+"img/bend_logo.8387551.png"},248:function(t,e,n){var content=n(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("bd7fd332",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";n.r(e);var l=n(398),r=l.c.reactiveProp,c={extends:l.b,mixins:[r],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},o=n(2),component=Object(o.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var l={extends:n(398).a,props:{chartData:Object},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},r=n(2),component=Object(r.a)(l,void 0,void 0,!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({staticClass:"users-solid_svg__svg-inline--fa users-solid_svg__fa-users users-solid_svg__fa-w-20",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"users",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}})])}),[],!1,null,null,null);e.a=component.exports},411:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M64 400c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32s32 14.33 32 32v336zm278.6-121.4c-12.5 12.5-32.7 12.5-45.2 0L240 221.3l-89.4 89.3c-12.5 12.5-32.7 12.5-45.2 0-12.52-12.5-12.52-32.7 0-45.2l112-112c12.5-12.5 32.7-12.5 45.2 0l57.4 57.3 105.4-105.3c12.5-12.52 32.7-12.52 45.2 0 12.5 12.5 12.5 32.7 0 45.2l-128 128z"}})])}),[],!1,null,null,null);e.a=component.exports},421:function(t,e,n){"use strict";n.r(e);var l=n(244),r=n(245),c=n(2),o=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({staticClass:"coins-solid_svg__svg-inline--fa coins-solid_svg__fa-coins coins-solid_svg__fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"coins",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"}})])}),[],!1,null,null,null).exports,f=n(411),h=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({staticClass:"landmark-solid_svg__svg-inline--fa landmark-solid_svg__fa-landmark landmark-solid_svg__fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"landmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M501.62 92.11L267.24 2.04a31.958 31.958 0 00-22.47 0L10.38 92.11A16.001 16.001 0 000 107.09V144c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-36.91c0-6.67-4.14-12.64-10.38-14.98zM64 192v160H48c-8.84 0-16 7.16-16 16v48h448v-48c0-8.84-7.16-16-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64zm432 256H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])}),[],!1,null,null,null).exports,d={components:{FeatureRight:l.default,FeatureLeft:r.default,Store:h,Chart:f.a,Coins:o}},v=(n(422),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-gray-100 text-gray-800 py-16"},[n("p"),t._v(" "),n("h2",[t._v("About")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center items-center container mx-auto md:px-32 py-8 my-8 text-center"},[n("div",{staticClass:"flex flex-col justify-start items-center w-full min-h-64 h-auto pb-12"},[n("Store",{staticClass:"w-16 h-16 mb-8 icons"}),t._v(" "),n("h2",[t._v("Store of Value")])],1),t._v(" "),n("div",{staticClass:"flex flex-col justify-around items-center w-full md:flex-1 min-h-64 h-auto pb-12"},[n("Chart",{staticClass:"w-16 h-16 mb-8 icons"}),t._v(" "),n("h2",[t._v("Deflationary")])],1),t._v(" "),n("div",{staticClass:"flex flex-col justify-around items-center w-full md:flex-1 min-h-64 h-auto pb-12"},[n("Coins",{staticClass:"w-16 h-16 mb-8 icons"}),t._v(" "),n("h2",[t._v("Redistributing")])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Bend is a deflationary premium Token. "),e("br"),this._v(" It acts like a store af value by its own and is a permission utility for Investors to claim the Nomics Token.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex w-full justify-center"},[e("a",{staticClass:"w-auto hover:underline nomics text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg flex items-center text-center",attrs:{href:"https://docs.ecosis.network/products/bend"}},[this._v("\n      Read more!\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h2"),this._v(" "),e("div",{staticClass:"flex flex-wrap justify-center items-cente container mx-auto px-32 text-center"})])}],!1,null,null,null));e.default=v.exports},422:function(t,e,n){"use strict";var l=n(248);n.n(l).a},423:function(t,e,n){(e=n(41)(!1)).push([t.i,".icons{background:-webkit-linear-gradient(#30cfd0,#330867);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",""]),t.exports=e},444:function(t,e,n){var map={"./af":259,"./af.js":259,"./ar":260,"./ar-dz":261,"./ar-dz.js":261,"./ar-kw":262,"./ar-kw.js":262,"./ar-ly":263,"./ar-ly.js":263,"./ar-ma":264,"./ar-ma.js":264,"./ar-sa":265,"./ar-sa.js":265,"./ar-tn":266,"./ar-tn.js":266,"./ar.js":260,"./az":267,"./az.js":267,"./be":268,"./be.js":268,"./bg":269,"./bg.js":269,"./bm":270,"./bm.js":270,"./bn":271,"./bn-bd":272,"./bn-bd.js":272,"./bn.js":271,"./bo":273,"./bo.js":273,"./br":274,"./br.js":274,"./bs":275,"./bs.js":275,"./ca":276,"./ca.js":276,"./cs":277,"./cs.js":277,"./cv":278,"./cv.js":278,"./cy":279,"./cy.js":279,"./da":280,"./da.js":280,"./de":281,"./de-at":282,"./de-at.js":282,"./de-ch":283,"./de-ch.js":283,"./de.js":281,"./dv":284,"./dv.js":284,"./el":285,"./el.js":285,"./en-au":286,"./en-au.js":286,"./en-ca":287,"./en-ca.js":287,"./en-gb":288,"./en-gb.js":288,"./en-ie":289,"./en-ie.js":289,"./en-il":290,"./en-il.js":290,"./en-in":291,"./en-in.js":291,"./en-nz":292,"./en-nz.js":292,"./en-sg":293,"./en-sg.js":293,"./eo":294,"./eo.js":294,"./es":295,"./es-do":296,"./es-do.js":296,"./es-mx":297,"./es-mx.js":297,"./es-us":298,"./es-us.js":298,"./es.js":295,"./et":299,"./et.js":299,"./eu":300,"./eu.js":300,"./fa":301,"./fa.js":301,"./fi":302,"./fi.js":302,"./fil":303,"./fil.js":303,"./fo":304,"./fo.js":304,"./fr":305,"./fr-ca":306,"./fr-ca.js":306,"./fr-ch":307,"./fr-ch.js":307,"./fr.js":305,"./fy":308,"./fy.js":308,"./ga":309,"./ga.js":309,"./gd":310,"./gd.js":310,"./gl":311,"./gl.js":311,"./gom-deva":312,"./gom-deva.js":312,"./gom-latn":313,"./gom-latn.js":313,"./gu":314,"./gu.js":314,"./he":315,"./he.js":315,"./hi":316,"./hi.js":316,"./hr":317,"./hr.js":317,"./hu":318,"./hu.js":318,"./hy-am":319,"./hy-am.js":319,"./id":320,"./id.js":320,"./is":321,"./is.js":321,"./it":322,"./it-ch":323,"./it-ch.js":323,"./it.js":322,"./ja":324,"./ja.js":324,"./jv":325,"./jv.js":325,"./ka":326,"./ka.js":326,"./kk":327,"./kk.js":327,"./km":328,"./km.js":328,"./kn":329,"./kn.js":329,"./ko":330,"./ko.js":330,"./ku":331,"./ku.js":331,"./ky":332,"./ky.js":332,"./lb":333,"./lb.js":333,"./lo":334,"./lo.js":334,"./lt":335,"./lt.js":335,"./lv":336,"./lv.js":336,"./me":337,"./me.js":337,"./mi":338,"./mi.js":338,"./mk":339,"./mk.js":339,"./ml":340,"./ml.js":340,"./mn":341,"./mn.js":341,"./mr":342,"./mr.js":342,"./ms":343,"./ms-my":344,"./ms-my.js":344,"./ms.js":343,"./mt":345,"./mt.js":345,"./my":346,"./my.js":346,"./nb":347,"./nb.js":347,"./ne":348,"./ne.js":348,"./nl":349,"./nl-be":350,"./nl-be.js":350,"./nl.js":349,"./nn":351,"./nn.js":351,"./oc-lnc":352,"./oc-lnc.js":352,"./pa-in":353,"./pa-in.js":353,"./pl":354,"./pl.js":354,"./pt":355,"./pt-br":356,"./pt-br.js":356,"./pt.js":355,"./ro":357,"./ro.js":357,"./ru":358,"./ru.js":358,"./sd":359,"./sd.js":359,"./se":360,"./se.js":360,"./si":361,"./si.js":361,"./sk":362,"./sk.js":362,"./sl":363,"./sl.js":363,"./sq":364,"./sq.js":364,"./sr":365,"./sr-cyrl":366,"./sr-cyrl.js":366,"./sr.js":365,"./ss":367,"./ss.js":367,"./sv":368,"./sv.js":368,"./sw":369,"./sw.js":369,"./ta":370,"./ta.js":370,"./te":371,"./te.js":371,"./tet":372,"./tet.js":372,"./tg":373,"./tg.js":373,"./th":374,"./th.js":374,"./tk":375,"./tk.js":375,"./tl-ph":376,"./tl-ph.js":376,"./tlh":377,"./tlh.js":377,"./tr":378,"./tr.js":378,"./tzl":379,"./tzl.js":379,"./tzm":380,"./tzm-latn":381,"./tzm-latn.js":381,"./tzm.js":380,"./ug-cn":382,"./ug-cn.js":382,"./uk":383,"./uk.js":383,"./ur":384,"./ur.js":384,"./uz":385,"./uz-latn":386,"./uz-latn.js":386,"./uz.js":385,"./vi":387,"./vi.js":387,"./x-pseudo":388,"./x-pseudo.js":388,"./yo":389,"./yo.js":389,"./zh-cn":390,"./zh-cn.js":390,"./zh-hk":391,"./zh-hk.js":391,"./zh-mo":392,"./zh-mo.js":392,"./zh-tw":393,"./zh-tw.js":393};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=444},453:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01 0 92.73 0 128s28.7 64 64 64zm256 128c-35.3 0-64 28.72-64 64s28.7 64 64 64 64-28.72 64-64-28.7-64-64-64z"}})])}),[],!1,null,null,null);e.a=component.exports},454:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M15.03 15.03c9.37-9.373 24.57-9.373 33.94 0L112 78.06V40c0-13.25 10.7-24.9 24-24.9s24 11.65 24 24.9v96c0 13.3-10.7 24-24 24H40c-13.25 0-24.9-10.7-24.9-24s11.65-24 24.9-24h38.06L15.03 48.97c-9.373-9.37-9.373-24.57 0-33.94zM133.5 243.9C158.6 193.6 222.7 112 320 112s161.4 81.6 186.5 131.9c3.8 7.7 3.8 16.5 0 24.2C481.4 318.4 417.3 400 320 400s-161.4-81.6-186.5-131.9c-3.8-7.7-3.8-16.5 0-24.2zM320 320c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM591 15.03c9.4-9.373 24.6-9.373 33.1 0 10.2 9.37 10.2 24.57 0 33.94L561.9 112H600c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24V40c0-13.25 10.7-24.9 24-24.9s24 11.65 24 24.9v38.06l63-63.03zM15.03 463l63.03-63H40c-13.25 0-24.9-10.7-24.9-24s11.65-24 24.9-24h96c13.3 0 24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-38.1l-63.03 62.2c-9.37 10.2-24.57 10.2-33.94 0-9.373-8.5-9.373-23.7 0-33.1zM528 433.9V472c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-38.1l62.2 63c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-63-62.2z"}})])}),[],!1,null,null,null);e.a=component.exports},455:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M0 24C0 10.75 10.75 0 24 0h72c11.5 0 21.4 8.19 23.6 19.51L121.1 32H312v102.1L288.1 111c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1l64 64c9.4 10.2 24.6 10.2 33.1 0l64-64c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-23 23.1V32h181.8c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24zm224 440c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm192 0c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z"}})])}),[],!1,null,null,null);e.a=component.exports},456:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",this._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},this.$listeners),[e("path",{attrs:{fill:"currentColor",d:"M326.7 403.7c-22 7.9-45.9 12.3-70.7 12.3-24.8 0-48.7-4.4-70.7-12.3-1.2-.1-.6-.2-.8-.3-30.1-11-56.9-28.8-78.6-51.4C70.04 314.6 48 263.9 48 208 48 93.12 141.1 0 256 0s208 93.12 208 208c0 55.9-22.9 106.6-57.9 144-1 1-2 2.1-3 3.1-21.4 21.3-47.4 38.1-76.4 48.6zm-90.8-292.6v6.9c-5.6 1.2-11.8 2.9-15.9 5.1-14.9 6.8-27.9 19.4-31.1 37.7-1.8 10.2-.8 20.1 3.4 29 4.2 8.8 10.7 15 17.3 19.5 11.6 7.9 26.9 12.5 38.6 16l2.2.6c14 4.3 23.4 7.4 29.3 11.7 2.5 1.8 3.4 3.2 3.7 4.1.4.8 1 2.6.3 6.6-.6 3.5-2.5 6.5-8 8.8-6.1 2.6-16 3.9-28.8 1.9-6-1-16.7-4.6-26.2-7.8-2.2-.8-4.4-1.5-6.4-2.2-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 24.4c1.2 1.3 2.7 1.8 4.4 2.4 7 2.7 20.3 6.9 29.8 9.1v6.4c0 11.1 9 20.1 19.2 20.1 12 0 21-9 21-20.1v-5.5c5.3-1 10.5-3.4 15.3-4.6 15.8-6.7 28.4-19.7 31.7-38.7 1.8-10.4 1-20.4-3-29.5-3.9-9-10.2-15.6-16.9-20.4-12.1-8.9-28.3-13.7-40.4-17.4l-1.7-.2c-13.3-4.3-22.9-7.3-29-11.5-2.6-1.8-3.4-3-3.6-3.5-.2-.4-.8-1.6-.2-5 .4-2 1.9-5.3 8.2-8.1 5.6-2.9 16.4-4.5 28.6-3.5 4.4 1.6 17.9 4.2 21.8 5.2 10.6 2.9 21.6-3.5 24.4-14.2 2.9-10.6-3.5-21.6-14.2-24.4-4.4-1.2-14.4-3.2-21-4.4V112c0-11.1-9-20.1-20.1-20.1-11.1 0-20.1 9-20.1 20.1v-.9zM48 352h15.98c19.45 25.9 44.02 47.7 72.22 64H64v32h384v-32h-72.2c27.3-16.3 52.8-38.1 72.2-64h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48z"}})])}),[],!1,null,null,null);e.a=component.exports}}]);