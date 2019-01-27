/**
 * R
 *
 * Version   →  0.0.7
 * Github    →  https://github.com/ariiiman/r
 * License   →  https://opensource.org/licenses/MIT
 * Author    →  Copyright (c) 2019-present, Aristide Benoist
 * Website   →  https://www.aristidebenoist.com
 * Date      →  Jan 27, 2019
 */
var R={};(module.exports=R).M=function(t){R.BM(this,["gRaf","run","uSvg","uLine","uProp"]),this.v=this.vInit(t),this.raf=new R.Raf(this.run)},R.M.prototype={vInit:function(t){var l={el:R.Select.el(t.el),e:{value:t.e||"linear"},d:{origin:t.d||0,curr:0},delay:t.delay||0,cb:t.cb||!1,cbDelay:t.cbDelay||0,round:t.round,progress:0,elapsed:0};l.elL=l.el.length,R.Has(t,"update")?l.update=function(){t.update(l)}:R.Has(t,"svg")?l.update=this.uSvg:R.Has(t,"line")?l.update=this.uLine:l.update=this.uProp;var i=t.p||!1,s=t.svg||!1,r=t.line||!1,e=!1;if(i){l.prop={},l.propPos=[];var n=Object.keys(i);l.propL=n.length;for(var o=0;o<l.propL;o++){var a=n[o];l.prop[o]={name:a,origin:{start:i[a][0],end:i[a][1]},curr:i[a][0],start:i[a][0],end:i[a][1],unit:i[a][2]||"%"};var h=a.charAt(0),u="r"===h&&e?"r2":h;e="r"===h,l.propPos[u]=o}}else if(s)l.svg={type:s.type,attr:"polygon"===s.type?"points":"d",end:s.end,originArr:{},arr:{},val:[]},l.svg.start=s.start||l.el[0].getAttribute(l.svg.attr),l.svg.curr=l.svg.start,l.svg.originArr.start=this.svgSplit(l.svg.start),l.svg.originArr.end=this.svgSplit(l.svg.end),l.svg.arr.start=l.svg.originArr.start,l.svg.arr.end=l.svg.originArr.end,l.svg.arrL=l.svg.arr.start.length;else if(r){l.line={elWL:r.elWithLength,dashed:r.dashed,coeff:{start:R.Is.def(r.start)?(100-r.start)/100:1,end:R.Is.def(r.end)?(100-r.end)/100:0},shapeL:[],origin:{start:[],end:[]},curr:[],start:[],end:[]};for(o=0;o<l.elL;o++){var p;if(l.line.shapeL[o]=b(l.el[o]),l.line.dashed){for(var v=0,c=dashed.split(/[\s,]/),f=c.length,d=0;d<f;d++)v+=parseFloat(c[d])||0;var g="",y=Math.ceil(l.line.shapeL[o]/v);for(d=0;d<y;d++)g+=dashed+" ";p=g+"0 "+l.line.shapeL[o]}else p=l.line.shapeL[o];l.el[o].style.strokeDasharray=p,l.line.origin.start[o]=l.line.coeff.start*l.line.shapeL[o],l.line.origin.end[o]=l.line.coeff.end*l.line.shapeL[o],l.line.curr[o]=l.line.origin.start[o],l.line.start[o]=l.line.origin.start[o],l.line.end[o]=l.line.origin.end[o]}function b(t){if("circle"===t.tagName)return 2*t.getAttribute("r")*Math.PI;if("line"===t.tagName){var i=t.getAttribute("x1"),s=t.getAttribute("x2"),r=t.getAttribute("y1"),e=t.getAttribute("y2");return Math.sqrt((s-=i)*s+(e-=r)*e)}if("polyline"!==t.tagName)return(t=l.line.elWL||t).getTotalLength();for(var n,o=0,a=t.points.numberOfItems,h=0;h<a;h++){var u=t.points.getItem(h);0<h&&(o+=Math.sqrt(Math.pow(u.x-n.x,2)+Math.pow(u.y-n.y,2))),n=u}return o}}return l},play:function(t){this.pause(),this.vUpd(t),this.delay.run()},pause:function(){this.raf.stop(),this.delay&&this.delay.stop()},vUpd:function(t){var i=t||{},s=R.Has(i,"reverse")?"start":"end";if(R.Has(this.v,"prop"))for(var r=0;r<this.v.propL;r++)this.v.prop[r].end=this.v.prop[r].origin[s],this.v.prop[r].start=this.v.prop[r].curr,R.Has(i,"p")&&R.Has(i.p,this.v.prop[r].name)&&(R.Has(i.p[this.v.prop[r].name],"newEnd")&&(this.v.prop[r].end=i.p[this.v.prop[r].name].newEnd),R.Has(i.p[this.v.prop[r].name],"newStart")&&(this.v.prop[r].start=i.p[this.v.prop[r].name].newStart));else if(R.Has(this.v,"svg"))R.Has(i,"svg")&&R.Has(i.svg,"start")?this.v.svg.arr.start=i.svg.start:this.v.svg.arr.start=this.svgSplit(this.v.svg.curr),R.Has(i,"svg")&&R.Has(i.svg,"end")?this.v.svg.arr.end=i.svg.end:this.v.svg.arr.end=this.v.svg.originArr[s];else if(R.Has(this.v,"line")){for(r=0;r<this.v.elL;r++)this.v.line.start[r]=this.v.line.curr[r];if(R.Has(i,"line")&&R.Has(i.line,"end")){this.v.line.coeff.end=(100-i.line.end)/100;for(r=0;r<this.v.elL;r++)this.v.line.end[r]=this.v.line.coeff.end*this.v.line.shapeL[r]}else this.v.line.end[r]=this.v.line.origin[s][r]}this.v.d.curr=R.Has(i,"d")?i.d:this.v.d.origin-this.v.d.curr+this.v.elapsed,this.v.e.value=i.e||this.v.e.value,this.v.e.calc=R.Ease[this.v.e.value],this.v.delay=R.Has(i,"delay")?i.delay:this.v.delay,this.v.cbDelay=R.Has(i,"cbDelay")?i.cbDelay:this.v.cbDelay,this.v.cb=R.Has(i,"cb")?i.cb:this.v.cb,this.delay=new R.Delay(this.gRaf,this.v.delay),this.cbDelay=new R.Delay(this.v.cb,this.v.cbDelay)},gRaf:function(){this.raf.run()},run:function(t){this.v.elapsed=t,this.v.progress+1e-7<1&&0<this.v.d.curr?(this.v.progress=this.v.e.calc(Math.min(t/this.v.d.curr,1)),this.v.update()):(this.pause(),this.v.progress=1,this.v.update(),this.v.cb&&this.cbDelay.run())},uProp:function(){for(var t=0;t<this.v.propL;t++)this.v.prop[t].curr=this.lerp(this.v.prop[t].start,this.v.prop[t].end);var i=R.Has(this.v.propPos,"x")?this.v.prop[this.v.propPos.x].curr+this.v.prop[this.v.propPos.x].unit:0,s=R.Has(this.v.propPos,"y")?this.v.prop[this.v.propPos.y].curr+this.v.prop[this.v.propPos.y].unit:0,r=i+s===0?0:"translate3d("+i+","+s+",0)",e=R.Has(this.v.propPos,"r")?this.v.prop[this.v.propPos.r].name+"("+this.v.prop[this.v.propPos.r].curr+"deg)":0,n=R.Has(this.v.propPos,"r2")?this.v.prop[this.v.propPos.r2].name+"("+this.v.prop[this.v.propPos.r2].curr+"deg)":0,o=R.Has(this.v.propPos,"s")?this.v.prop[this.v.propPos.s].name+"("+this.v.prop[this.v.propPos.s].curr+")":0,a=r+e+n+o===0?0:[r,e,n,o].filter(function(t){return 0!==t}).join(" "),h=R.Has(this.v.propPos,"o")?this.v.prop[this.v.propPos.o].curr:-1,u=R.Has(this.v.propPos,"w")?this.v.prop[this.v.propPos.w].curr+this.v.prop[this.v.propPos.w].unit:0,l=R.Has(this.v.propPos,"h")?this.v.prop[this.v.propPos.h].curr+this.v.prop[this.v.propPos.h].unit:0;for(t=0;t<this.v.elL&&!R.Is.und(this.v.el[t]);t++)0!==a&&(this.v.el[t].style.transform=a),0<=h&&(this.v.el[t].style.opacity=h),0!==u&&(this.v.el[t].style.width=u),0!==l&&(this.v.el[t].style.height=l)},uSvg:function(){this.v.svg.currTemp="";for(var t=0;t<this.v.svg.arrL;t++)this.v.svg.val[t]=isNaN(this.v.svg.arr.start[t])?this.v.svg.arr.start[t]:this.lerp(this.v.svg.arr.start[t],this.v.svg.arr.end[t]),this.v.svg.currTemp+=this.v.svg.val[t]+" ",this.v.svg.curr=this.v.svg.currTemp.trim();for(t=0;t<this.v.elL&&!R.Is.und(this.v.el[t]);t++)this.v.el[t].setAttribute(this.v.svg.attr,this.v.svg.curr)},uLine:function(){for(var t=0;t<this.v.elL;t++){this.v.el[t].style;this.v.line.curr[t]=this.lerp(this.v.line.start[t],this.v.line.end[t]),elR.strokeDashoffset=this.v.line.curr[t],0===this.v.progress&&(elR.opacity=1)}},lerp:function(t,i){return R.R(R.Lerp(t,i,this.v.progress),this.v.round)},svgSplit:function(t){for(var i=[],s=t.split(" "),r=s.length,e=0;e<r;e++)for(var n=s[e].split(","),o=n.length,a=0;a<o;a++){var h=n[a];h=isNaN(h)?h:+h,i.push(h)}return i}},R.TL=function(){this.arr=[],this.del=0},R.TL.prototype={from:function(t){this.del+=R.Has(t,"delay")?t.delay:0,t.delay=this.del,this.arr.push(new R.M(t))},play:function(t){this.run("play",t)},pause:function(){this.run("pause")},run:function(t,i){for(var s=this.arr.length,r=i||void 0,e=0;e<s;e++)this.arr[e][t](r)}},R.BM=function(t,i){for(var s=i.length,r=0;r<s;r++)t[i[r]]=t[i[r]].bind(t)},R.Delay=function(t,i){this.cb=t,this.d=i,R.BM(this,["loop"]),this.raf=new R.Raf(this.loop)},R.Delay.prototype={run:function(){this.raf.run()},stop:function(){this.raf.stop()},loop:function(t){1<=(0<this.d?Math.min(t/this.d,1):1)+1e-7&&(this.stop(),this.cb())}},R.Ease={linear:function(t){return t},i1:function(t){return 1-Math.cos(t*(Math.PI/2))},o1:function(t){return Math.sin(t*(Math.PI/2))},io1:function(t){return-.5*(Math.cos(Math.PI*t)-1)},i2:function(t){return t*t},o2:function(t){return t*(2-t)},io2:function(t){return t<.5?2*t*t:(4-2*t)*t-1},i3:function(t){return t*t*t},o3:function(t){return--t*t*t+1},io3:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},i4:function(t){return t*t*t*t},o4:function(t){return 1- --t*t*t*t},io4:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},i5:function(t){return t*t*t*t*t},o5:function(t){return 1+--t*t*t*t*t},io5:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},i6:function(t){return 0===t?0:Math.pow(2,10*(t-1))},o6:function(t){return 1===t?1:1-Math.pow(2,-10*t)},io6:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))}},R.Has=function(t,i){return!!t&&hasOwnProperty.call(t,i)},R.Is={str:function(t){return"string"==typeof t},obj:function(t){return t===Object(t)},arr:function(t){return t.constructor===Array},def:function(t){return void 0!==t},und:function(t){return void 0===t}},R.Lerp=function(t,i,s){return t*(1-s)+i*s},R.RafId=0;var Raf=function(t){this.cb=t,this.active=!1,(this.c=this).id=R.RafId,R.RafId++,R.BM(this,["loop"])};Raf.prototype={run:function(t){t?this.sT+=t:(R.Tab.add(this.id,this.c),this.sT=0),this.gR(),this.active=!0},stop:function(t){this.active=!1,cancelAnimationFrame(this.raf),t||R.Tab.remove(this.id)},gR:function(){this.raf=requestAnimationFrame(this.loop)},loop:function(t){this.time(t),this.active&&this.gR()},time:function(t){this.sT||(this.sT=t);var i=t-this.sT;this.cb(i,this.id)}},R.Raf=Raf,R.R=function(t,i){i=R.Is.def(i)?Math.pow(10,i):1e3;return Math.round(t*i)/i},R.Snif={uA:navigator.userAgent.toLowerCase(),get isMobileIE(){return/iemobile/i.test(this.uA)},get isMobileOpera(){return/opera mini/i.test(this.uA)},get isIOS(){return/iphone|ipad|ipod/i.test(this.uA)},get isBlackberry(){return/blackberry/i.test(this.uA)},get isMobileAndroid(){return/android.*mobile/.test(this.uA)},get isAndroid(){return this.isMobileAndroid||!this.isMobileAndroid&&/android/i.test(this.uA)},get isFirefox(){return-1<this.uA.indexOf("firefox")},get safari(){return this.uA.match(/version\/[\d\.]+.*safari/)},get isSafari(){return!!this.safari&&!this.isAndroid},get isSafariOlderThan8(){var t=8;this.isSafari&&(t=+this.safari[0].match(/version\/\d{1,2}/)[0].split("/")[1]);return t<8},get isIEolderThan11(){return-1<this.uA.indexOf("msie")},get isIE11(){return 0<navigator.appVersion.indexOf("Trident/")},get isIE(){return this.isIEolderThan11||this.isIE11},get isEdge(){return/Edge\/\d./i.test(this.uA)},get isMac(){return-1<navigator.platform.toLowerCase().indexOf("mac")},get isMobile(){return this.isMobileAndroid||this.isBlackberry||this.isIOS||this.isMobileOpera||this.isMobileIE},get isTouch(){return"ontouchstart"in window}},R.Throttle=function(t){this.del=t.delay,this.onlyAtEnd=t.onlyAtEnd,this.cb=t.cb,this.last,this.t},R.Throttle.prototype={run:function(){var t=this,i=!0,s=Date.now();this.last&&s<this.last+this.del||i?(i=!1,clearTimeout(this.t),this.t=setTimeout(function(){t.last=s,t.cb()},this.del)):(this.last=s,this.onlyAtEnd||(i=!1,this.cb()))}},R.G={p:function(t){return t||document},id:function(t,i){return this.p(i).getElementById(t)},class:function(t,i){return this.p(i).getElementsByClassName(t)},tag:function(t,i){return this.p(i).getElementsByTagName(t)}},R.Dom={html:document.documentElement,body:document.body},R.Select={el:function(t){var i=[];if(R.Is.str(t)){var s=t.substring(1);"#"===t.charAt(0)?i[0]=R.G.id(s):i=R.G.class(s)}else i[0]=t;return i},type:function(t){return"#"===t.charAt(0)?"id":"class"},name:function(t){return t.substring(1)}},R.Index={i:function(t,i){for(var s=i.length,r=0;r<s;r++)if(t===i[r])return r;return-1},list:function(t){var i=t.parentNode.children;return this.i(t,i)},class:function(t,i){var s=R.G.class(i);return this.i(t,s)}},R.L=function(t,i,s,r){var e,n=document,o=(t=R.Select.el(t)).length,a=["touchmove","mousemove","scroll","mouseWheel","touchstart"],h=-1!==a.indexOf(s)&&{passive:!1};e=s===a[3]?"onwheel"in n?"wheel":R.Is.und(n.onmousewheel)?"mousewheel":"DOMMouseScroll":"focusOut"===s?R.Snif.isFirefox?"blur":"focusout":s;for(var u="a"===i?"add":"remove",l=0;l<o;l++)t[l][u+"EventListener"](e,r,h)};var MM=function(t){this.cb=t.cb,this.el=R.Has(t,"el")?R.Select.el(t.el)[0]:document,this.iM=R.Snif.isMobile,this.eT=this.iM?"touch":"mouse",this.tick=!1,R.BM(this,["gRaf","run"]),this.raf=new R.Raf(this.run)};MM.prototype={on:function(){this.l("a")},off:function(){this.l("r")},l:function(t){R.L(this.el,t,this.eT+"move",this.gRaf)},gRaf:function(t){this.e=t,this.e.cancelable&&this.e.preventDefault(),this.tick||(this.tick=!0,this.raf.run())},run:function(){var t=this.iM?this.e.changedTouches[0]:this.e;this.cb(t.pageX,t.pageY,this.e),this.raf.stop(),this.tick=!1}},R.MM=MM;var RO=function(t){this.cb=t.cb,this.eT=R.Snif.isMobile?"orientationchange":"resize",this.tick=!1,R.BM(this,["gT","gRaf","run"]),this.t=new R.Throttle({delay:t.throttleDelay,onlyAtEnd:!0,cb:this.gRaf}),this.raf=new R.Raf(this.run)};RO.prototype={on:function(){this.l("a")},off:function(){this.l("r")},l:function(t){R.L(window,t,this.eT,this.gT)},gT:function(t){this.e=t,this.t.run()},gRaf:function(){this.tick||(this.tick=!0,this.raf.run())},run:function(){this.cb(this.e),this.raf.stop(),this.tick=!1}},R.RO=RO;var Tab=function(){this.arr=[],this.arrL=0,this.pause=0,R.BM(this,["run"]),R.L(document,"a","visibilitychange",this.run)};Tab.prototype={add:function(t,i){this.arr.push([t,i]),this.arrL++},remove:function(t){for(var i=0;i<this.arrL;i++)this.arr[i][0]===t&&(this.arr.splice(i,1),this.arrL--)},run:function(){var t=performance.now();if(document.hidden){this.pause=performance.now();for(var i=0;i<this.arrL;i++)this.arr[i][1].stop(!0)}else{var s=t-this.pause;for(i=0;i<this.arrL;i++)this.arr[i][1].run(s)}}},R.Tab=new Tab,R.ScrollToTop=function(t){var i,s=pageYOffset,r={dest:0,d:(i=R.Lerp(300,1500,s/t.h),0===s?0:i),e:s<=2500?"io"+Math.ceil(s/500):"io6",cb:t.cb};R.ScrollTo(r)},R.ScrollTo=function(t){var i=document,s=i.scrollingElement?i.scrollingElement:R.Dom.body,r=R.Snif.isFirefox||R.Snif.isIE?i.documentElement:s,e=pageYOffset,n=t.dest,o=new R.M({d:t.d,e:t.e,update:function(t){r.scrollTop=Math.round(1e3*R.Lerp(e,n,t.progress))/1e3},cb:a});function a(){R.WTP.off(),t.cb&&t.cb()}e===n?a():(R.WTP.on(),o.play())},R.ScrollZero=function(){window.scrollTo(0,0)},R.TopRefresh=function(){"scrollRestoration"in history?history.scrollRestoration="manual":window.onbeforeunload=function(){window.scrollTo(0,0)}};