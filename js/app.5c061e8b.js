(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,h=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/stackanime/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3192:function(t,e,a){},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="4678"},"4a94":function(t,e,a){"use strict";var i=a("3192"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("380f");var i=a("f64c"),n=(a("ee33"),a("a79d")),s=(a("4bbf"),a("59a5")),o=(a("a106"),a("09d9")),c=(a("04f3"),a("ed3b")),r=(a("02cf"),a("9839")),l=(a("a71a"),a("b558")),d=(a("9e39"),a("f933")),u=(a("805a"),a("0c63")),h=(a("1815"),a("e32c")),f=(a("50ac"),a("9a63")),p=(a("e1f5"),a("5efb")),m=(a("e260"),a("e6cf"),a("cca6"),a("a79df"),a("2b0e")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},v=[],g=(a("5c0b"),a("2877")),k={},y=Object(g["a"])(k,b,v,!1,null,null,null),j=y.exports,x=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-row",{staticStyle:{height:"100%",overflow:"auto","overflow-x":"hidden"}},[a("a-col",{staticStyle:{height:"100%"},attrs:{xs:24,sm:14,md:15,lg:16,xl:17}},[a("div",{ref:"box",style:{background:t.styleConfig.containerBg},attrs:{id:"animation-box"}},[a("div",{staticClass:"label-actions"},[a("a-tooltip",{attrs:{title:"创建文本标签"}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.editLabel,expression:"!editLabel"}],staticClass:"action",staticStyle:{"font-size":"18px"},attrs:{type:"tags"},nativeOn:{click:function(e){return t.createLabel(e)}}})],1),a("span",{directives:[{name:"show",rawName:"v-show",value:t.editLabel,expression:"editLabel"}]},[a("a-tooltip",{attrs:{title:"内容"}},[t.editLabel?a("a-input",{staticClass:"action",staticStyle:{width:"88px"},attrs:{size:"small"},model:{value:t.editLabel["content"],callback:function(e){t.$set(t.editLabel,"content",e)},expression:"editLabel['content']"}}):t._e()],1),a("a-tooltip",{attrs:{title:"字体大小"}},[t.editLabel?a("a-input",{staticClass:"action",staticStyle:{width:"68px"},attrs:{size:"small"},model:{value:t.editLabel["font-size"],callback:function(e){t.$set(t.editLabel,"font-size",e)},expression:"editLabel['font-size']"}}):t._e()],1),a("a-tooltip",{attrs:{title:"最大宽度"}},[t.editLabel?a("a-input",{staticClass:"action",staticStyle:{width:"68px"},attrs:{size:"small"},model:{value:t.editLabel["max-width"],callback:function(e){t.$set(t.editLabel,"max-width",e)},expression:"editLabel['max-width']"}}):t._e()],1),a("a-tooltip",{attrs:{title:"Padding"}},[t.editLabel?a("a-input",{staticClass:"action",staticStyle:{width:"68px"},attrs:{size:"small"},model:{value:t.editLabel["padding"],callback:function(e){t.$set(t.editLabel,"padding",e)},expression:"editLabel['padding']"}}):t._e()],1),a("a-tooltip",{attrs:{title:"字体颜色"}},[a("a-icon",{staticClass:"action icon",attrs:{type:"font-colors"},nativeOn:{click:function(e){return e.stopPropagation(),t.setEditLabelkey("color")}}})],1),a("a-tooltip",{attrs:{title:"背景色"}},[a("a-icon",{staticClass:"action icon",attrs:{type:"bg-colors"},nativeOn:{click:function(e){return e.stopPropagation(),t.setEditLabelkey("background")}}})],1),a("a-tooltip",{attrs:{title:"隐藏"}},[a("a-icon",{staticClass:"action icon",attrs:{type:"close-circle"},nativeOn:{click:function(e){t.editLabel=null}}})],1),a("color-picker",{directives:[{name:"show",rawName:"v-show",value:t.showLabelPicker,expression:"showLabelPicker"}],staticClass:"label-color-picker",on:{input:t.onLabelPickerChange},model:{value:t.labelColor,callback:function(e){t.labelColor=e},expression:"labelColor"}})],1)],1),t._l(t.labels,(function(e){return a("div",{directives:[{name:"draglabel",rawName:"v-draglabel"}],key:e.id,staticClass:"label drag-label",class:{editing:t.editLabel&&t.editLabel.id===e.id},style:e},[a("span",[t._v(t._s(e.content))]),a("a-icon",{staticClass:"setting",staticStyle:{padding:"0 6px 4px"},attrs:{type:"setting",title:"设置"},on:{mousedown:function(t){t.stopPropagation()},click:function(a){a.stopPropagation(),t.editLabel=e}}})],1)})),t.animeLoader?t._l(t.animeLoader.animations,(function(e){return a("div",{key:e._id,staticClass:"anime-item",class:{animate:e.animate},style:{left:e.x+"px",top:e.y+"px",background:e.animate?t.styleConfig.activeChildBg:t.styleConfig.normalChildBg,color:e.animate?t.styleConfig.activeChildColor:t.styleConfig.normalChildColor,width:t.config.childWidth+"px",height:t.config.childHeight+"px",transition:"background .5s, left "+t.config.duration/1e3+"s, top "+t.config.duration/1e3+"s"}},[t._v(" "+t._s(e.val)+" ")])})):t._e()],2)]),a("a-col",{staticStyle:{height:"100%"},attrs:{xs:24,sm:10,md:9,lg:8,xl:7}},[a("div",{staticClass:"pane-box"},[a("div",{staticClass:"label",on:{click:function(e){t.showConfigPane=!t.showConfigPane}}},[a("span",{staticClass:"label__content"},[t._v(" "+t._s(t.showConfigPane?"设置动画":"界面配置")+" ")])]),a("action-pane",{ref:"action",staticClass:"pane",class:[t.showConfigPane?"hide":"show"],attrs:{source:t.data,data:t.stackList,reload:t.reloadStack},on:{change:t.setData}}),a("div",{ref:"config",staticClass:"config-pane pane",class:[t.showConfigPane?"show":"hide"]},[a("config-item",{attrs:{label:"容器间隔"}},[a("a-input-number",{model:{value:t.config.stackGap,callback:function(e){t.$set(t.config,"stackGap",e)},expression:"config.stackGap"}})],1),a("config-item",{attrs:{label:"元素间隔"}},[a("a-input-number",{model:{value:t.config.childGap,callback:function(e){t.$set(t.config,"childGap",e)},expression:"config.childGap"}})],1),a("config-item",{attrs:{label:"元素宽度"}},[a("a-input-number",{model:{value:t.config.childWidth,callback:function(e){t.$set(t.config,"childWidth",e)},expression:"config.childWidth"}})],1),a("config-item",{attrs:{label:"元素高度"}},[a("a-input-number",{model:{value:t.config.childHeight,callback:function(e){t.$set(t.config,"childHeight",e)},expression:"config.childHeight"}})],1),a("config-item",{attrs:{label:"栈方向"}},[a("a-select",{staticStyle:{width:"100%","max-width":"200px"},on:{change:function(e){return t.config.isLandscape="landscape"===e}},model:{value:t.orientation,callback:function(e){t.orientation=e},expression:"orientation"}},[a("a-select-option",{attrs:{value:"landscape"}},[t._v(" 横向 ")]),a("a-select-option",{attrs:{value:"portrait"}},[t._v(" 纵向 ")])],1)],1),t.config.isLandscape?a("config-item",{attrs:{label:"距离左边"}},[a("a-input-number",{model:{value:t.config.toLeft,callback:function(e){t.$set(t.config,"toLeft",e)},expression:"config.toLeft"}})],1):a("config-item",{attrs:{label:"距离底部"}},[a("a-input-number",{model:{value:t.config.toBottom,callback:function(e){t.$set(t.config,"toBottom",e)},expression:"config.toBottom"}})],1),a("config-item",{attrs:{label:"动画时间"}},[a("a-input-number",{on:{change:t.onDurationChange},model:{value:t.config.duration,callback:function(e){t.$set(t.config,"duration",e)},expression:"config.duration"}})],1),a("config-item",{attrs:{label:"动画结束时"}},[a("a-select",{staticStyle:{width:"100%","max-width":"200px"},on:{change:t.onMaintainStateChange},model:{value:t.maintainActiveState,callback:function(e){t.maintainActiveState=e},expression:"maintainActiveState"}},[a("a-select-option",{attrs:{value:"maintain"}},[t._v(" 保留元素激活状态 ")]),a("a-select-option",{attrs:{value:"restore"}},[t._v(" 恢复元素普通状态 ")])],1)],1),a("a-row",t._l(Object.keys(t.styleOption),(function(e){return a("a-col",{key:e,staticClass:"color-setting",attrs:{span:8},on:{click:function(a){return t.setColor(a,e)}}},[a("span",{staticClass:"preview",style:{background:t.styleConfig[e]}}),a("span",[t._v(t._s(t.styleOption[e]))])])})),1),a("color-picker",{staticClass:"color-picker",style:t.pickerStyle,on:{input:t.onColorChange},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)])],1)},w=[],S=(a("4de4"),a("7db0"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("159b"),a("ade3")),C=(a("99af"),a("a630"),a("a15b"),a("fb6a"),a("45fc"),a("a434"),a("a9e3"),a("ac1f"),a("2532"),a("3ca3"),a("1276"),a("498a"),a("3835")),_=a("2909"),O=a("d4ec"),T=a("bee2"),z=function(){function t(){Object(O["a"])(this,t),this.animations=[],this.animeTask=[]}return Object(T["a"])(t,[{key:"addTask",value:function(t){var e=this[t];if(e){var a=Array.from(arguments).slice(1);this.animeTask.push(e.bind.apply(e,[this].concat(Object(_["a"])(a)))),1===this.animeTask.length&&this.animeTask[0]()}}},{key:"clearTask",value:function(){this.animeTask.length=0}},{key:"genFrames",value:function(t,e){for(var a=[],i=e.split(/\s*,\s*/),n=0;n<i.length;n++){var s=i[n].trim().split(/\s+/).map(Number),o=Object(C["a"])(s,2),c=o[0],r=o[1];a.push({x:t.x+c,y:t.y+r})}return a}},{key:"doNextTask",value:function(){this.animeTask.shift();var t=this.animeTask[0];t&&t()}},{key:"startAnime",value:function(e,a,i,n){var s=this,o=this.getItem(e).target,c=this.genFrames(o,a),r=function(t){o.x=t.x,o.y=t.y,o.animate=!0};r(c[0]);for(var l=function(e){setTimeout((function(){e===c.length?(s.doNextTask(),i&&i()):r(c[e])}),e*(n||t.duration))},d=1;d<c.length+1;d++)l(d)}},{key:"refreshItem",value:function(t,e,a,i){var n=this.getItem(t),s=n.target;s&&(s.val=i,s.x=e,s.y=a)}},{key:"addItem",value:function(t,e,a,i){var n={_id:t,x:e,y:a,val:i,animate:!1};this.animations.push(n)}},{key:"delItem",value:function(t){var e=this.getItem(t).index;e>-1&&this.animations.splice(e,1)}},{key:"clearItem",value:function(){this.animations.length=0}},{key:"clearAnimeFlag",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=function(){return e.animations.forEach((function(t){t.animate=!1}))};a?i():(setTimeout(i,t.duration),this.doNextTask())}},{key:"getItem",value:function(t){var e=null,a=null;return this.animations.some((function(i,n){return i._id===t&&(e=i,a=n,!0)})),{target:e,index:a}}}]),t}();Object(S["a"])(z,"duration",1e3);var P=[],A=function(t,e,a,i){return(t.length()-1)*a-e.length()*i},I=function(t,e,a,i){return(t.length()-1)*a-(e.length()-1)*i},R=function(){function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];Object(O["a"])(this,t),Object(S["a"])(this,"combinationActions",["merge"]),this.setProp(a,i,n,s,o),this.children=c.map((function(t,a){return e.createItem(t,a)}))}return Object(T["a"])(t,[{key:"setProp",value:function(t,e,a,i,n){this.sx=t,this.sy=e,this.cw=a,this.ch=i,this.isLandscape=n}},{key:"isEmpty",value:function(){return 0===this.children.length}},{key:"length",value:function(){return this.children.length}},{key:"getHead",value:function(){return this.isEmpty()?null:this.children[this.length()-1]}},{key:"isCombination",value:function(t){return this.combinationActions.includes(t)}},{key:"addAction",value:function(t){var e;if(this[t]){var a=Array.from(arguments).slice(1);if(this.isCombination(t))this[t].apply(this,Object(_["a"])(a));else{var i=(e=this[t]).bind.apply(e,[this].concat(Object(_["a"])(a)));P.push(i),1===P.length&&this.loopAction()}}}},{key:"loopAction",value:function(){P[0]&&(t.maintainState&&t.animeLoader.clearAnimeFlag(!0),P[0]())}},{key:"afterAction",value:function(e){var a=this;return function(){e&&e(),P.shift(),!t.maintainState&&t.animeLoader.clearAnimeFlag(!0),a.loopAction()}}},{key:"getPosByIndex",value:function(t){var e,a;return this.isLandscape?(a=this.sy,e=this.sx+this.cw*t):(e=this.sx,a=this.sy-this.ch*t),{x:e,y:a}}},{key:"createItem",value:function(e,a){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={_id:t.idIncrease(),val:e};if(i){var s=this.getPosByIndex(a),o=s.x,c=s.y;t.animeLoader.addItem(n._id,o,c,e)}return n}},{key:"refresh",value:function(e,a,i,n,s,o){var c=this;this.setProp(e,a,i,n,s),o?this.children=o.map((function(t,e){return c.createItem(t,e)})):this.children.forEach((function(e,a){var i=c.getPosByIndex(a),n=i.x,s=i.y;t.animeLoader.refreshItem(e._id,n,s,e.val)}))}},{key:"push",value:function(e,a){var i=this,n=this.createItem(e,this.length()),s=this.isLandscape?"".concat(this.cw," 0"):"0 -".concat(this.ch);t.animeLoader.addTask("startAnime",n._id,"".concat(a||s," , 0 0"),this.afterAction((function(){return i.children.push(n)})))}},{key:"pop",value:function(){var e=this,a=this.getHead();if(a){var i=this.isLandscape?"".concat(this.cw," 0"):"0 -".concat(this.ch),n="0 0, ".concat(i);t.animeLoader.addTask("startAnime",a._id,n,this.afterAction((function(){var a=e.children.pop();t.animeLoader.delItem(a._id)})))}}},{key:"popTo",value:function(e,a){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this,s=n.getHead();if(s){var o=i?I:A,c=this.isLandscape?[-o(n,e,n.cw,e.cw),e.sy-n.sy]:[e.sx-n.sx,o(n,e,n.ch,e.ch)],r="0 0,"+c.join(" "),l=a||function(){e._push(n._pop())};t.animeLoader.addTask("startAnime",s._id,r,this.afterAction(l),i?1:void 0)}}},{key:"moveStack",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.offset,n=void 0===i?1:i,s=a.lastCB,o=a.gap,c=void 0===o?1:o;this.children.forEach((function(a,i){var o=e.isLandscape?n*e.cw:0,r=e.isLandscape?0:-n*e.ch,l="0 0,".concat(o," ").concat(r),d=i===e.length()-1?s:null;t.animeLoader.addTask("startAnime",a._id,l,d,c)}))}},{key:"unshift",value:function(e){var a=this,i=function(){var i=a.createItem(e,-1),n=a.isLandscape?"".concat(a.cw," 0"):"0 -".concat(a.ch),s=function(){return a.children.unshift(i)};t.animeLoader.addTask("startAnime",i._id,"0 0, ".concat(n),s,200);var o=a.afterAction();a.moveStack({lastCB:o})};setTimeout(i,z.duration)}},{key:"overlay",value:function(t,e){this.popTo(t,e,!0)}},{key:"exchange",value:function(t){var e=this;this.overlay(t,(function(){})),t.overlay(e,(function(){var a=t._pop(),i=e._pop();t._push(i),e._push(a)}))}},{key:"mergeItem",value:function(e){for(var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],s=this.length(),o=function(e){t.animeLoader.delItem(e),a._pop()},c=function(){return n.forEach(o)},r=0;r<e;r++){var l=this.getItemByIdx(s-r-1)._id;n.push(l);var d=r===e-1,u=d?this.afterAction(c):void 0,h=this.isLandscape?"".concat(this.cw*r," 0"):"0 -".concat(this.ch*r);t.animeLoader.addTask("startAnime",l,"0 0, ".concat(h),u,d?void 0:i)}}},{key:"merge",value:function(t,e){var a=this.length()<t?this.length():t,i=this.isLandscape?"".concat(this.cw*(a-1)," 0"):"0 -".concat(this.ch*(a-1));this.addAction("mergeItem",a),this.addAction("push",e,i)}},{key:"_push",value:function(t){return this.children.push(t)}},{key:"_pop",value:function(){return this.children.pop()}},{key:"getItemByIdx",value:function(t){return this.isEmpty()||t>this.length()-1?null:this.children[t]}}],[{key:"idIncrease",value:function(){return++this.id}}]),t}();Object(S["a"])(R,"id",0),Object(S["a"])(R,"animeLoader",null),Object(S["a"])(R,"maintainState",!1);var E=a("c345"),$=function(t,e){var a=null;return function(){var i=arguments,n=this;a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,i)}),e)}},D=function(t,e){var a=0;return function(){var i=(new Date).getTime();i-a>e&&(t.apply(this,arguments),a=(new Date).getTime())}};function N(t){var e=t.offsetX,a=t.offsetY,i=t.currentTarget;i.classList.add("dragging");var n=D((function(t){i.style.left=t.pageX-e+"px",i.style.top=t.pageY-a+"px"}),50);document.body.addEventListener("mousemove",n);var s=function t(){i.classList.remove("dragging"),document.body.removeEventListener("mousemove",n),document.body.removeEventListener("mouseup",t)};document.body.addEventListener("mouseup",s)}var B={bind:function(t,e,a){t.classList.add("drag-label"),t.onmousedown=N},inserted:function(){},update:function(){},unbind:function(){}},F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"action-pane",class:{recording:t.startRecord}},[a("config-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"数据源",labelSpan:4,contentSpan:18}},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{click:t.toggleEditing}},[t._v(" "+t._s(t.editing?"保存":"编辑数据源")+" ")])],1),a("div",{staticStyle:{width:"100%",overflow:"hidden",transition:"height .6s"},style:{height:t.editing?"86vh":"0"}},[a("a-textarea",{ref:"sourceEditor",staticStyle:{height:"100%"},model:{value:t.sourceStr,callback:function(e){t.sourceStr=e},expression:"sourceStr"}})],1),a("a-divider",{attrs:{orientation:"left"}},[t._v(" 操作区 ")]),a("a-row",[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"stack-actions"},[a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("unshift")}}},[t._v("Unshift")]),a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("pop",!1)}}},[t._v("Pop")]),a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("popTo")}}},[t._v("PopTo")]),a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("push")}}},[t._v("Push")]),a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("merge")}}},[t._v("Merge")]),a("a-button",{staticClass:"action-btn",attrs:{size:"small"},on:{click:function(e){return t.openModal("exchange")}}},[t._v("Exchange")])],1)]),a("a-radio-group",{model:{value:t.activeStack,callback:function(e){t.activeStack=e},expression:"activeStack"}},t._l(t.reflectName,(function(e,i){return a("a-radio",{key:e,staticClass:"data-preview",style:{display:"block",height:"30px",lineHeight:"30px"},attrs:{value:e}},[a("span",{staticStyle:{"margin-right":"6px"}},[t._v(t._s(t.reflectName[i]))]),t._l(t.data[i].children,(function(e){return a("span",{key:e._id,staticClass:"preview-item"},[t._v(" "+t._s(e.val)+" ")])}))],2)})),1)],1),t.stepRecord.length?a("a-divider",{attrs:{orientation:"left"}},[t._v(" 动画记录 ")]):t._e(),a("div",t._l(t.stepRecord,(function(e,i){return a("div",{key:i,staticClass:"steps"},[a("span",{staticClass:"name"},[t._v(t._s(e[0]+"."+e[1]))]),a("a-tooltip",{attrs:{title:"删除"}},[a("a-icon",{attrs:{type:"delete"},nativeOn:{click:function(e){return t.stepRecord.splice(i,1)}}})],1),a("a-tooltip",{attrs:{title:"复制"}},[a("a-icon",{attrs:{type:"redo"},nativeOn:{click:function(e){return t.stepRecord.splice(i,0,t.stepRecord[i])}}})],1),a("a-tooltip",{attrs:{title:"执行动作"}},[a("a-icon",{attrs:{type:"play-circle"},nativeOn:{click:function(e){return t.runRecord(i)}}})],1)],1)})),0),a("div",{staticClass:"action-bar"},[a("a-tooltip",{attrs:{title:"重置元素数据"}},[a("a-icon",{staticStyle:{float:"left"},attrs:{type:"undo"},nativeOn:{click:function(e){return t.reload(e)}}})],1),a("a-tooltip",{attrs:{title:"录制动作"}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:!t.startRecord&&0===t.stepRecord.length,expression:"!startRecord && stepRecord.length === 0"}],attrs:{type:"play-circle"},nativeOn:{click:function(e){return t.toggleRecord(e)}}})],1),a("a-tooltip",{attrs:{title:"结束录制"}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.startRecord,expression:"startRecord"}],attrs:{type:"check-circle"},nativeOn:{click:function(e){return t.toggleRecord(e)}}})],1),a("a-tooltip",{attrs:{title:"播放动画"}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.stepRecord.length,expression:"stepRecord.length"}],attrs:{type:"play-circle"},nativeOn:{click:function(e){return t.runRecord(e)}}})],1),a("a-tooltip",{attrs:{title:"重置记录"}},[a("a-icon",{directives:[{name:"show",rawName:"v-show",value:t.stepRecord.length,expression:"stepRecord.length"}],attrs:{type:"delete"},nativeOn:{click:function(e){t.stepRecord=[]}}})],1)],1),a("a-modal",{attrs:{title:"设置"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},["push"===t.activeType?a("div",[a("config-item",{attrs:{label:"入栈值",labelSpan:3}},[a("a-input",{model:{value:t.pushData,callback:function(e){t.pushData=e},expression:"pushData"}})],1)],1):t._e(),"unshift"===t.activeType?a("div",[a("config-item",{attrs:{label:"入队值",labelSpan:3}},[a("a-input",{model:{value:t.unshiftData,callback:function(e){t.unshiftData=e},expression:"unshiftData"}})],1)],1):t._e(),"merge"===t.activeType?a("div",[a("config-item",{attrs:{label:"合并数量",labelSpan:3}},[a("a-input-number",{attrs:{min:2},model:{value:t.mergeLen,callback:function(e){t.mergeLen=e},expression:"mergeLen"}})],1),a("config-item",{attrs:{label:"合并结果",labelSpan:3}},[a("a-input",{model:{value:t.mergeData,callback:function(e){t.mergeData=e},expression:"mergeData"}})],1)],1):t._e(),["exchange","popTo"].includes(t.activeType)?a("div",[a("config-item",{attrs:{label:"替换对象",labelSpan:3}},[a("a-select",{staticStyle:{width:"100%","max-width":"200px"},model:{value:t.toStack,callback:function(e){t.toStack=e},expression:"toStack"}},t._l(t.reflectName,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e,disabled:e==t.activeStack}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1):t._e()])],1)},M=[],H=(a("c975"),function(t){var e=t.map((function(t){return"[".concat(t.join(", "),"]")})).join(",\n  ");return"[\n  ".concat(e,"\n]")}),G={name:"action-pane",props:["data","source","reload"],data:function(){return{sourceStr:H(this.source),reflectName:[],visible:!1,activeType:null,activeStack:null,pushData:null,exchangeFrom:null,toStack:null,mergeLen:null,mergeData:null,stepRecord:[],startRecord:!1,editing:!1,unshiftData:null,editStack:""}},methods:{getStack:function(t){var e=this.reflectName.indexOf(t);return this.data[e]},openModal:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.activeStack?(this.activeType=t,e?this.visible=!0:this.handleOk()):this.$message.success("请先选择目标数据")},addAction:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=this.getStack(t);i.addAction.apply(i,[e].concat(Object(_["a"])(a)))},handleOk:function(){var t={unshift:[this.unshiftData],push:[this.pushData],exchange:[this.getStack(this.toStack)],merge:[this.mergeLen,this.mergeData],popTo:[this.getStack(this.toStack)]},e=[this.activeStack,this.activeType,t[this.activeType]];this.startRecord?this.stepRecord.push(e):this.addAction.apply(this,e),this.visible=!1},runRecord:function(t){var e=this;this.stepRecord.forEach((function(a,i){"number"===typeof t&&i>t||a&&e.addAction.apply(e,Object(_["a"])(a))}))},toggleRecord:function(){this.startRecord=!this.startRecord},toggleEditing:function(){this.editing=!this.editing,this.editing&&(this.sourceStr=H(this.source))}},mounted:function(){var t=this;this.$refs.sourceEditor.$el.onblur=function(){try{var e=JSON.parse(t.sourceStr);t.$emit("change",e),this.editing=!1}catch(a){}}},watch:{data:function(t){this.reflectName=t.map((function(t,e){return"stack_"+e})),this.activeStack=this.reflectName[0]}}},W=G,q=(a("4a94"),Object(g["a"])(W,F,M,!1,null,"119ac3db",null)),K=q.exports,U={components:Object(S["a"])({"color-picker":E["Chrome"]},K.name,K),data:function(){return{labels:[],editLabel:null,editLabelKey:null,data:[[1,2,3],[4,5,6],[7,8,9]],showConfigPane:!1,stackList:[],animeLoader:null,actions:[],orientation:"landscape",labelColor:"#FFF",color:"#FFF",editingColor:null,pickerStyle:{top:"66%",left:"100%"},showLabelPicker:!1,config:{duration:1e3,childGap:16,stackGap:50,childWidth:50,childHeight:50,isLandscape:!0,toLeft:200,toBottom:300},maintainActiveState:"maintain",styleOption:{containerBg:"画布背景",activeChildBg:"活动背景",activeChildColor:"活动字色",normalChildBg:"非活动背景",normalChildColor:"非活动字色"},styleConfig:{containerBg:"#8bc34a",activeChildBg:"#FF9800",activeChildColor:"#FFF",normalChildBg:"#1c9030",normalChildColor:"#FFF"}}},created:function(){this.load=$(this.loadStackList,500),this.reloadStack=this.load.bind(this,"data"),window.reload=this.reloadStack},directives:{draglabel:B},mounted:function(){var t=this;document.body.addEventListener("click",(function(e){var a=document.querySelector(".color-picker");a&&(a===e.target||a.contains(e.target)||(t.editingColor="",t.pickerStyle.top="66%",t.pickerStyle.left="100%"))})),document.body.addEventListener("click",(function(e){var a=document.querySelector(".label-color-picker");a&&(a===e.target||a.contains(e.target)||(t.showLabelPicker=!1))})),this.load("init")},methods:{getLabelStyle:function(t){return t.filter((function(t){return!["id","content"].includes}))},getStackProp:function(t,e,a){var i,n,s=this.config,o=s.childWidth,c=s.childHeight,r=s.stackGap,l=s.isLandscape,d=s.childGap,u=s.toLeft,h=s.toBottom,f=function(t,e){return(t-a*e-(a-1)*r)/2},p=o+d,m=c+d;if(l){var b=f(e.clientHeight,c);n=b+(c+r)*t,i=u}else{var v=f(e.clientWidth,o);i=v+(o+r)*t,n=e.clientHeight-h}return{x:i,y:n,sw:p,sh:m,isLandscape:l}},initLoader:function(){this.animeLoader||(R.animeLoader=new z,this.animeLoader=R.animeLoader),this.animeLoader.clearTask()},refreshStacks:function(t){var e=this,a=this.$refs.box,i=this.data.length;t&&this.animeLoader.clearItem(),this.stackList.forEach((function(n,s){var o=e.getStackProp(s,a,i),c=o.x,r=o.y,l=o.sw,d=o.sh,u=o.isLandscape,h=t?e.data[s]:void 0;n.refresh(c,r,l,d,u,h)}))},initStack:function(){var t=this,e=this.$refs.box,a=this.data.length;this.animeLoader.clearItem(),this.stackList=this.data.map((function(i,n){var s=t.getStackProp(n,e,a),o=s.x,c=s.y,r=s.sw,l=s.sh,d=s.isLandscape;return new R(o,c,r,l,d,i)}))},loadStackList:function(t){var e={init:this.initStack.bind(this),style:this.refreshStacks.bind(this,!1),data:this.refreshStacks.bind(this,!0)};this.initLoader(),e[t]&&e[t]()},setColor:function(t,e){var a=this;setTimeout((function(){a.showPicker(t),a.editingColor=e}),0)},showPicker:function(t){var e=t.pageX,a=t.pageY;this.pickerStyle.top=a-10+"px",this.pickerStyle.left=e+10+"px"},setEditLabelkey:function(t){this.editLabel&&(this.editLabelKey=t,this.showLabelPicker=!0,this.labelColor=this.editLabel[this.editLabelKey])},onColorChange:function(t){this.updateStyle||(this.updateStyle=D((function(t){this.styleConfig[this.editingColor]=t.hex}),800)),this.updateStyle(t)},onLabelPickerChange:function(t){this.updateLabelStyle||(this.updateLabelStyle=D((function(t){var e=this,a=this.labels.find((function(t){return t.id===e.editLabel.id}));this.$set(a,this.editLabelKey,t.hex),this.$forceUpdate()}),800)),this.updateLabelStyle(t)},onDurationChange:function(){this.animeLoader.duration=this.config.duration},onMaintainStateChange:function(){R.maintainState="maintain"===this.maintainActiveState},setData:function(t){this.data=t,this.initStack()},createLabel:function(){this.labels.push({id:(new Date).getTime(),background:"transparent",padding:"8px 10x",color:"#333333","font-size":"14px","max-width":"auto",content:"这里是Label内容"})}},watch:{config:{handler:function(t){this.load("style")},deep:!0}}},J=U,X=(a("a5b3"),Object(g["a"])(J,L,w,!1,null,"6033047c",null)),Y=X.exports;m["a"].use(x["a"]);var Q=[{path:"/",name:"Home",component:Y}],V=new x["a"]({routes:Q}),Z=V,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-row",{staticClass:"conf-item",attrs:{functional:""}},[a("a-col",{staticClass:"conf-item__label",attrs:{span:t.$attrs.labelSpan||6}},[t._v(t._s(t.$attrs.label))]),a("a-col",{staticClass:"conf-item__input",attrs:{span:t.$attrs.contentSpan||18}},[t._t("default")],2)],1)},et=[],at=(a("b3f0"),{}),it=Object(g["a"])(at,tt,et,!1,null,"1d45a86b",null),nt=it.exports;m["a"].use(p["a"]),m["a"].use(f["a"]),m["a"].use(h["a"]),m["a"].use(u["a"]),m["a"].use(d["a"]),m["a"].use(l["a"]),m["a"].use(r["a"]),m["a"].use(c["a"]),m["a"].use(o["a"]),m["a"].use(s["a"]),m["a"].use(n["a"]),m["a"].prototype.$message=i["a"],m["a"].component("config-item",nt),m["a"].config.productionTip=!1,m["a"].prototype.$log=console.log,new m["a"]({router:Z,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"74c8":function(t,e,a){},"9c0c":function(t,e,a){},a5b3:function(t,e,a){"use strict";var i=a("74c8"),n=a.n(i);n.a},b3f0:function(t,e,a){"use strict";var i=a("d639"),n=a.n(i);n.a},d639:function(t,e,a){}});
//# sourceMappingURL=app.5c061e8b.js.map