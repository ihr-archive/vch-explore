/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Colorbox module load js.
 */
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space.
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
/* ImageMapster
   Version: see $.mapster.version

Copyright 2011 James Treworgy
http://www.outsharked.com/imagemapster
https://github.com/jamietre/ImageMapster

A jQuery plugin to enhance image maps.
*/
(function(a){a.fn.mapster=function(d){var c=a.mapster.impl;if(a.isFunction(c[d])){return c[d].apply(this,Array.prototype.slice.call(arguments,1));
}else{if(typeof d==="object"||!d){return c.bind.apply(this,arguments);}else{a.error("Method "+d+" does not exist on jQuery.mapster");
}}};a.mapster={version:"1.2.4.066",render_defaults:{isSelectable:true,isDeselectable:true,fade:false,fadeDuration:150,altImage:null,fill:true,fillColor:"000000",fillColorMask:"FFFFFF",fillOpacity:0.7,highlight:null,stroke:false,strokeColor:"ff0000",strokeOpacity:1,strokeWidth:1,includeKeys:"",alt_image:null},defaults:{clickNavigate:false,wrapClass:null,wrapCss:null,onGetList:null,sortList:false,listenToList:false,mapKey:"",mapValue:"",singleSelect:false,listKey:"value",listSelectedAttribute:"selected",listSelectedClass:null,onClick:null,onMouseover:null,onMouseout:null,mouseoutDelay:0,onStateChange:null,boundList:null,onConfigured:null,configTimeout:30000,noHrefIsMask:true,scaleMap:true,safeLoad:false,areas:[]},shared_defaults:{render_highlight:{fade:true},render_select:{fade:false},staticState:null,selected:null},area_defaults:{includeKeys:"",isMask:false},canvas_style:{position:"absolute",left:0,top:0,padding:0,border:0},hasCanvas:null,isTouch:null,windowLoaded:false,map_cache:[],hooks:{},addHook:function(d,c){this.hooks[d]=(this.hooks[d]||[]).push(c);
},callHooks:function(d,c){a.each(this.hooks[d]||[],function(g,f){f.apply(c);});},utils:{subclass:function(c,d){var e=function(){var g=this,f=Array.prototype.slice.call(arguments,0);
g.base=c.prototype;g.base.init=function(){c.prototype.constructor.apply(g,f);};d.apply(g,f);
};e.prototype=new c();e.prototype.constructor=e;return e;},asArray:function(c){return c.constructor===Array?c:this.split(c);
},split:function(g,d){var f,e,c=g.split(",");for(f=0;f<c.length;f++){e=a.trim(c[f]);
if(e===""){c.splice(f,1);}else{c[f]=d?d(e):e;}}return c;},updateProps:function(c,d){var e,f=c||{},g=a.isEmptyObject(f)?d:c;
e=[];a.each(g,function(h){e.push(h);});a.each(Array.prototype.slice.call(arguments,1),function(h,j){a.each(j||{},function(k){if(!e||a.inArray(k,e)>=0){var i=j[k];
if(a.isPlainObject(i)){f[k]=a.extend(f[k]||{},i);}else{if(i&&i.constructor===Array){f[k]=i.slice(0);
}else{if(typeof i!=="undefined"){f[k]=j[k];}}}}});});return f;},isElement:function(c){return(typeof HTMLElement==="object"?c instanceof HTMLElement:c&&typeof c==="object"&&c.nodeType===1&&typeof c.nodeName==="string");
},indexOfProp:function(c,d,f){var e=c.constructor===Array?-1:null;a.each(c,function(h,g){if(g&&(d?g[d]:g)===f){e=h;
return false;}});return e;},boolOrDefault:function(d,c){return this.isBool(d)?d:c||false;
},isBool:function(c){return typeof c==="boolean";},ifFunction:function(d,e,c){if(a.isFunction(d)){d.call(e,c);
}},size:function(c){var d=a.mapster.utils;return{width:d.imgWidth(c,true),height:d.imgHeight(c,true),complete:function(){return !!this.height&&!!this.width;
}};},setOpacity:function(c,d){c.style.opacity=d;},fader:(function(){var c={},e=0,d=function(g,k,h,f){var i,j,l=a.mapster.utils;
if(typeof g==="number"){j=c[g];if(!j){return;}}else{i=l.indexOfProp(c,null,g);if(i){delete c[i];
}c[++e]=j=g;g=e;}h=h||1;k=(k+(h/10)>h-0.01)?h:k+(h/10);l.setOpacity(j,k);if(k<h){setTimeout(function(){d(g,k,h,f);
},f?f/10:15);}};return d;}())},getBoundList:function(g,e){if(!g.boundList){return null;
}var c,d,h=a(),f=a.mapster.utils.split(e);g.boundList.each(function(k,j){for(c=0;
c<f.length;c++){d=f[c];if(a(j).is("["+g.listKey+'="'+d+'"]')){h=h.add(j);}}});return h;
},setBoundListProperties:function(c,e,d){e.each(function(g,f){if(c.listSelectedClass){if(d){a(f).addClass(c.listSelectedClass);
}else{a(f).removeClass(c.listSelectedClass);}}if(c.listSelectedAttribute){a(f).attr(c.listSelectedAttribute,d);
}});},getMapDataIndex:function(e){var d,c;switch(e.tagName&&e.tagName.toLowerCase()){case"area":c=a(e).parent().attr("name");
d=a("img[usemap='#"+c+"']")[0];break;case"img":d=e;break;}return d?this.utils.indexOfProp(this.map_cache,"image",d):-1;
},getMapData:function(d){var c=this.getMapDataIndex(d.length?d[0]:d);if(c>=0){return c>=0?this.map_cache[c]:null;
}},queueCommand:function(e,f,d,c){if(!e){return false;}if(!e.complete||e.currentAction){e.commands.push({that:f,command:d,args:c});
return true;}return false;},unload:function(){this.impl.unload();this.utils=null;
this.impl=null;a.fn.mapster=null;a.mapster=null;a("*").unbind();}};var b=a.mapster;
a.each(["width","height"],function(f,d){var c=d.substr(0,1).toUpperCase()+d.substr(1);
b.utils["img"+c]=function(e,g){return(g?a(e)[d]():0)||e[d]||e["natural"+c]||e["client"+c]||e["offset"+c];
};});b.Method=function(g,d,c,f){var e=this;e.name=f.name;e.output=g;e.input=g;e.first=f.first||false;
e.args=f.args?Array.prototype.slice.call(f.args,0):[];e.key=f.key;e.func_map=d;e.func_area=c;
e.name=f.name;e.allowAsync=f.allowAsync||false;};b.Method.prototype.go=function(){var f,e,c,g,j,k=this.input,d=[],h=this;
g=k.length;for(f=0;f<g;f++){e=a.mapster.getMapData(k[f]);if(e){if(!h.allowAsync&&b.queueCommand(e,h.input,h.name,h.args)){if(this.first){j="";
}continue;}c=e.getData(k[f].nodeName==="AREA"?k[f]:this.key);if(c){if(a.inArray(c,d)<0){d.push(c);
}}else{j=this.func_map.apply(e,h.args);}if(this.first||typeof j!=="undefined"){break;
}}}a(d).each(function(m,l){j=h.func_area.apply(l,h.args);});if(typeof j!=="undefined"){return j;
}else{return this.output;}};a.mapster.impl=(function(){var e={},d=a.mapster,i=a.mapster.utils,h,c;
c=function(j){return d.map_cache.push(j)-1;};h=function(k){d.map_cache.splice(k.index,1);
for(var j=d.map_cache.length-1;j>=this.index;j--){d.map_cache[j].index--;}};function f(n,k){var j,l,m=n.options.areas;
if(k){a.each(k,function(p,o){l=i.indexOfProp(m,"key",this.key);if(l>=0){a.extend(m[l],this);
}else{m.push(this);}j=n.getDataForKey(this.key);if(j){a.extend(j.options,this);}});
}}function g(j,k){var l=i.updateProps({},k);delete l.areas;i.updateProps(j.options,l);
f(j,k.areas);i.updateProps(j.area_options,j.options);}e.get=function(j){var k=d.getMapData(this);
if(!(k&&k.complete)){throw ("Can't access data until binding complete.");}return(new d.Method(this,function(){return this.getSelected();
},function(){return this.isSelected();},{name:"get",args:arguments,key:j,first:true,allowAsync:true,defaultReturn:""})).go();
};e.data=function(j){return(new d.Method(this,null,function(){return this;},{name:"data",args:arguments,key:j})).go();
};e.highlight=function(j){return(new d.Method(this,function(){if(j===false){this.ensureNoHighlight();
}else{var k=this.highlightId;return k>=0?this.data[k].key:null;}},function(){this.highlight();
},{name:"highlight",args:arguments,key:j,first:true})).go();};e.keys=function(l,k){var m=[],n=d.getMapData(this);
if(!(n&&n.complete)){throw ("Can't access data until binding complete.");}function j(o){var p,q=[];
if(!k){q.push(o.key);}else{p=o.areas();a.each(p,function(s,r){q=q.concat(r.keys);
});}a.each(q,function(s,r){if(a.inArray(r,m)<0){m.push(r);}});}if(!(n&&n.complete)){return"";
}if(typeof l==="string"){if(k){j(n.getDataForKey(l));}else{m=[n.getKeysForGroup(l)];
}}else{k=l;this.each(function(p,o){if(o.nodeName==="AREA"){j(n.getDataForArea(o));
}});}return m.join(",");};e.select=function(){e.set.call(this,true);};e.deselect=function(){e.set.call(this,false);
};e.set=function(s,m,q){var o,p,r=q,n,k;function t(u){if(u){switch(s){case true:u.addSelection(r);
break;case false:u.removeSelection(true);break;default:u.toggleSelection(r);break;
}}}function j(u){if(u&&a.inArray(u,k)<0){k.push(u);n+=(n===""?"":",")+u.key;}}function l(u){a.each(k,function(w,v){t(v);
});if(!s){u.removeSelectionFinish();}if(u.options.boundList){d.setBoundListProperties(u.options,d.getBoundList(u.options,n),s);
}}this.filter("img,area").each(function(v,u){var w;p=d.getMapData(u);if(p!==o){if(o){l(o);
}k=[];n="";}if(p){w="";if(u.nodeName.toUpperCase()==="IMG"){if(!d.queueCommand(p,a(u),"set",[s,m,r])){if(m instanceof Array){if(m.length){w=m.join(",");
}}else{w=m;}if(w){a.each(i.split(w),function(x,y){j(p.getDataForKey(y.toString()));
o=p;});}}}else{r=m;if(!d.queueCommand(p,a(u),"set",[s,r])){j(p.getDataForArea(u));
o=p;}}}});if(p){l(p);}return this;};e.unbind=function(j){return(new d.Method(this,function(){this.clearEvents();
this.clearMapData(j);h(this);},null,{name:"unbind",args:arguments})).go();};e.rebind=function(j){return(new d.Method(this,function(){var k=this;
k.complete=false;k.configureOptions(j);k.bindImages(true,function(){k.buildDataset(true);
k.complete=true;});},null,{name:"rebind",args:arguments})).go();};e.get_options=function(l,k){var j=i.isBool(l)?l:k;
return(new d.Method(this,function(){var m=a.extend({},this.options);if(j){m.render_select=i.updateProps({},d.render_defaults,m,m.render_select);
m.render_highlight=i.updateProps({},d.render_defaults,m,m.render_highlight);}return m;
},function(){return j?this.effectiveOptions():this.options;},{name:"get_options",args:arguments,first:true,allowAsync:true,key:l})).go();
};e.set_options=function(j){return(new d.Method(this,function(){g(this,j);},null,{name:"set_options",args:arguments})).go();
};e.unload=function(){var j;for(j=d.map_cache.length-1;j>=0;j--){if(d.map_cache[j]){e.unbind.call(a(d.map_cache[j].image));
}}e.graphics=null;};e.snapshot=function(){return(new d.Method(this,function(){a.each(this.data,function(k,j){j.selected=false;
});this.base_canvas=this.graphics.createVisibleCanvas(this);a(this.image).before(this.base_canvas);
},null,{name:"snapshot"})).go();};e.state=function(){var j,k=null;a(this).each(function(m,l){if(l.nodeName==="IMG"){j=d.getMapData(l);
if(j){k=j.state();}return false;}});return k;};e.bind=function(j){return this.each(function(l,k){var m,n,p,o;
m=a(k);m.css("border",0);o=d.getMapData(k);if(o){e.unbind.apply(m);if(!o.complete){m.bind();
return true;}o=null;}p=this.getAttribute("usemap");n=p&&a('map[name="'+p.substr(1)+'"]');
if(!(m.is("img")&&p&&n.size()>0)){return true;}if(!o){o=new d.MapData(this,j);o.index=c(o);
o.map=n;o.bindImages(true);}});};e.init=function(l){var k,j;d.hasCanvas=(document.namespaces&&document.namespaces.g_vml_)?false:a("<canvas></canvas>")[0].getContext?true:false;
d.isTouch="ontouchstart" in document.documentElement;if(!(d.hasCanvas||document.namespaces)){a.fn.mapster=function(){return this;
};return;}if(!i.isBool(a.mapster.defaults.highlight)){d.render_defaults.highlight=!d.isTouch;
}a.extend(d.defaults,d.render_defaults,d.shared_defaults);a.extend(d.area_defaults,d.render_defaults,d.shared_defaults);
if(i.isBool(l)){d.hasCanvas=l;}if(a.browser.msie&&!d.hasCanvas&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml");
k=document.createStyleSheet();j=["shape","rect","oval","circ","fill","stroke","imagedata","group","textbox"];
a.each(j,function(n,m){k.addRule("v\\:"+m,"behavior: url(#default#VML); antialias:true");
});}a(window).bind("load",function(){d.windowLoaded=true;a(d.map_cache).each(function(n,m){if(!m.complete&&m.isReadyToBind()){m.initialize();
}});});};e.test=function(j){return eval(j);};return e;}());a.mapster.impl.init();
}(jQuery));(function(a){var c,b=a.mapster,d=b.utils;b.Graphics=function(e){var f=this;
f.active=false;f.canvas=null;f.width=0;f.height=0;f.shapes=[];f.masks=[];f.map_data=e;
};c=b.Graphics.prototype;c.begin=function(f,g){var e=a(f);this.elementName=g;this.canvas=f;
this.width=e.width();this.height=e.height();this.shapes=[];this.masks=[];this.active=true;
};c.addShape=function(f,g){var e=g.isMask?this.masks:this.shapes;e.push({mapArea:f,options:g});
};c.createVisibleCanvas=function(e){return a(this.createCanvasFor(e)).addClass("mapster_el").css(b.canvas_style)[0];
};c._addShapeGroupImpl=function(e,i,j){var h=this,g=h.map_data,f=j.isMask;a.each(e.areas(),function(l,k){j.isMask=f||(k.nohref&&g.options.noHrefIsMask);
h.addShape(k,j);});j.isMask=f;};c.addShapeGroup=function(e,j,l){var i=this,g,k,f,h=this.map_data,m=e.effectiveRenderOptions(j);
if(l){a.extend(m,l);}if(j==="select"){k="static_"+e.areaId.toString();f=h.base_canvas;
}else{f=h.overlay_canvas;}i.begin(f,k);if(m.includeKeys){g=d.split(m.includeKeys);
a.each(g,function(p,o){var n=h.getDataForKey(o.toString());i._addShapeGroupImpl(n,j,n.effectiveRenderOptions(j));
});}i._addShapeGroupImpl(e,j,m);i.render();if(m.fade){d.fader(b.hasCanvas?f:a(f).find("._fill").not(".mapster_mask"),0,b.hasCanvas?1:m.fillOpacity,m.fadeDuration);
}};b.initGraphics=function(){if(b.hasCanvas){c.hex_to_decimal=function(e){return Math.max(0,Math.min(parseInt(e,16),255));
};c.css3color=function(e,f){return"rgba("+this.hex_to_decimal(e.substr(0,2))+","+this.hex_to_decimal(e.substr(2,2))+","+this.hex_to_decimal(e.substr(4,2))+","+f+")";
};c.renderShape=function(f,h,j){var g,e=h.coords(null,j);switch(h.shape){case"rect":f.rect(e[0],e[1],e[2]-e[0],e[3]-e[1]);
break;case"poly":f.moveTo(e[0],e[1]);for(g=2;g<h.length;g+=2){f.lineTo(e[g],e[g+1]);
}f.lineTo(e[0],e[1]);break;case"circ":case"circle":f.arc(e[0],e[1],e[2],0,Math.PI*2,false);
break;}};c.addAltImage=function(e,f,g,h){e.beginPath();this.renderShape(e,g);e.closePath();
e.clip();e.globalAlpha=h.altImageOpacity||h.fillOpacity;e.drawImage(f,0,0,g.owner.scaleInfo.width,g.owner.scaleInfo.height);
};c.render=function(){var g,h,i=this,f=i.masks.length,j=i.createCanvasFor(i.map_data),k=j.getContext("2d"),e=i.canvas.getContext("2d");
if(f){g=i.createCanvasFor(i.map_data);h=g.getContext("2d");h.clearRect(0,0,g.width,g.height);
a.each(i.masks,function(m,l){h.save();h.beginPath();i.renderShape(h,l.mapArea);h.closePath();
h.clip();h.lineWidth=0;h.fillStyle="#000";h.fill();h.restore();});}a.each(i.shapes,function(l,m){k.save();
if(m.options.fill){if(m.options.alt_image){i.addAltImage(k,m.options.alt_image,m.mapArea,m.options);
}else{k.beginPath();i.renderShape(k,m.mapArea);k.closePath();k.fillStyle=i.css3color(m.options.fillColor,m.options.fillOpacity);
k.fill();}}k.restore();});a.each(i.shapes.concat(i.masks),function(l,n){var m=n.options.strokeWidth===1?0.5:0;
if(n.options.stroke){k.save();k.strokeStyle=i.css3color(n.options.strokeColor,n.options.strokeOpacity);
k.lineWidth=n.options.strokeWidth;k.beginPath();i.renderShape(k,n.mapArea,m);k.closePath();
k.stroke();k.restore();}});if(f){h.globalCompositeOperation="source-out";h.drawImage(j,0,0);
e.drawImage(g,0,0);}else{e.drawImage(j,0,0);}i.active=false;return i.canvas;};c.createCanvasFor=function(e){return a('<canvas width="'+e.scaleInfo.width+'" height="'+e.scaleInfo.height+'"></canvas>')[0];
};c.clearHighlight=function(){var e=this.map_data.overlay_canvas;e.getContext("2d").clearRect(0,0,e.width,e.height);
};c.removeSelections=function(){};c.refreshSelections=function(){var e,f=this.map_data;
e=f.base_canvas;f.base_canvas=this.createVisibleCanvas(f);a(f.base_canvas).hide();
a(e).before(f.base_canvas);f.redrawSelections();a(f.base_canvas).show();a(e).remove();
};}else{d.setOpacity=function(e,f){a(e).each(function(h,g){if(typeof g.opacity!=="undefined"){g.opacity=f;
}else{a(g).css("opacity",f);}});};c.renderShape=function(k,m,g){var l=this,n,h,o,j,i,p,f=k.coords();
j=l.elementName?'name="'+l.elementName+'" ':"";i=g?'class="'+g+'" ':"";o='<v:fill color="#'+m.fillColor+'" class="_fill" opacity="'+(m.fill?m.fillOpacity:0)+'" /><v:stroke class="_fill" opacity="'+m.strokeOpacity+'"/>';
if(m.stroke){n="strokeweight="+m.strokeWidth+' stroked="t" strokecolor="#'+m.strokeColor+'"';
}else{n='stroked="f"';}switch(k.shape){case"rect":p="<v:rect "+i+j+' filled="t" '+n+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+f[0]+"px;top:"+f[1]+"px;width:"+(f[2]-f[0])+"px;height:"+(f[3]-f[1])+'px;">'+o+"</v:rect>";
break;case"poly":p="<v:shape "+i+j+' filled="t" '+n+' coordorigin="0,0" coordsize="'+l.width+","+l.height+'" path="m '+f[0]+","+f[1]+" l "+f.slice(2).join(",")+' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:'+l.width+"px;height:"+l.height+'px;">'+o+"</v:shape>";
break;case"circ":case"circle":p="<v:oval "+i+j+' filled="t" '+n+' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:'+(f[0]-f[2])+"px;top:"+(f[1]-f[2])+"px;width:"+(f[2]*2)+"px;height:"+(f[2]*2)+'px;">'+o+"</v:oval>";
break;}h=a(p);a(l.canvas).append(h);return h;};c.render=function(){var f,e=this;a.each(this.shapes,function(h,g){e.renderShape(g.mapArea,g.options);
});if(this.masks.length){a.each(this.masks,function(h,g){f=d.updateProps({},g.options,{fillOpacity:1,fillColor:g.options.fillColorMask});
e.renderShape(g.mapArea,f,"mapster_mask");});}this.active=false;return this.canvas;
};c.createCanvasFor=function(f){var g=f.scaleInfo.width,e=f.scaleInfo.height;return a('<var width="'+g+'" height="'+e+'" style="zoom:1;overflow:hidden;display:block;width:'+g+"px;height:"+e+'px;"></var>')[0];
};c.clearHighlight=function(){a(this.map_data.overlay_canvas).children().remove();
};c.removeSelections=function(e){if(e>=0){a(this.map_data.base_canvas).find('[name="static_'+e.toString()+'"]').remove();
}else{a(this.map_data.base_canvas).children().remove();}};c.refreshSelections=function(){return null;
};}};b.initGraphics();}(jQuery));(function(a){var c,b=a.mapster,d=b.utils;b.MapData=function(e,g){var f=this;
function h(l,i,j){function k(m){if(f.currentAreaId!==m&&f.highlightId>=0){j();}}if(f.activeAreaEvent){window.clearTimeout(f.activeAreaEvent);
f.activeAreaEvent=0;}if(l<0){return;}if(i.owner.currentAction||l){f.activeAreaEvent=window.setTimeout((function(){return function(){h(0,i,j);
};}(i)),l||100);}else{k(i.areaId);}}this.image=e;this.imgCssText=e.style.cssText||null;
this.initializeDefaults();this.configureOptions(g);this.mousedown=function(i){if(!a.mapster.hasCanvas){this.blur();
}i.preventDefault();};this.mouseover=function(k){var j=f.getAllDataForArea(this),i=j.length?j[0]:null;
if(!i||i.isNotRendered()||i.owner.currentAction){return;}if(f.currentAreaId===i.areaId){return;
}if(f.highlightId!==i.areaId){f.clearEffects();i.highlight();if(f.options.showToolTip){a.each(j,function(m,l){if(l.effectiveOptions().toolTip){l.showTooltip();
}});}}f.currentAreaId=i.areaId;if(a.isFunction(f.options.onMouseover)){f.options.onMouseover.call(this,{e:k,options:i.effectiveOptions(),key:i.key,selected:i.isSelected()});
}};this.mouseout=function(j){var k,l,i=f.getDataForArea(this),m=f.options;if(f.currentAreaId<0||!i){return;
}l=f.getDataForArea(j.relatedTarget);if(l===i){return;}f.currentAreaId=-1;i.area=null;
h(m.mouseoutDelay,i,f.clearEffects);if(a.isFunction(m.onMouseout)){m.onMouseout.call(this,{e:j,options:m,key:k,selected:i.isSelected()});
}};this.clearEffects=function(){var i=f.options;f.ensureNoHighlight();if(i.toolTipClose&&a.inArray("area-mouseout",i.toolTipClose)>=0&&f.activeToolTip){f.clearTooltip();
}};this.click=function(m){var r,n,o,p,j,k,s,t=this,i=f.getDataForArea(this),q=f.options;
function l(u){var v;j=(u.isSelectable()&&(u.isDeselectable()||!u.isSelected()));if(j){p=!u.isSelected();
}else{p=u.isSelected();}o=b.getBoundList(q,u.key);if(a.isFunction(q.onClick)){k=q.onClick.call(t,{e:m,listTarget:o,key:u.key,selected:p});
if(d.isBool(k)){if(!k){return false;}s=a(u.area).attr("href");if(s!=="#"){window.location.href=s;
return false;}}}if(j){r=u.toggleSelection();}if(q.boundList&&q.boundList.length>0){b.setBoundListProperties(q,o,u.isSelected());
}v=u.effectiveOptions();if(v.includeKeys){n=d.split(v.includeKeys);a.each(n,function(y,x){var w=f.getDataForKey(x.toString());
if(!w.options.isMask){l(w);}});}}f.mousedown.call(this,m);if(q.clickNavigate&&i.href){window.location.href=i.href;
return;}if(i&&!i.owner.currentAction){q=f.options;l(i);}};this.graphics=new b.Graphics(this);
};c=b.MapData.prototype;c.configureOptions=function(e){this.area_options=d.updateProps({},b.area_defaults,e);
this.options=d.updateProps({},b.defaults,e);this.bindTries=this.options.configTimeout/200;
};c.initializeDefaults=function(){a.extend(this,{images:[],imageSources:[],imageStatus:[],altImagesXref:{},map:null,base_canvas:null,overlay_canvas:null,imagesLoaded:false,complete:false,commands:[],data:[],mapAreas:[],_xref:{},highlightId:-1,currentAreaId:-1,_tooltip_events:[],scaleInfo:null,index:-1,activeAreaEvent:null});
};c.isActive=function(){return !this.complete||this.currentAction;};c.state=function(){return{complete:this.complete,resizing:this.currentAction==="resizing",zoomed:this.zoomed,zoomedArea:this.zoomedArea,scaleInfo:this.scaleInfo};
};c.isReadyToBind=function(){return this.imagesLoaded&&(!this.options.safeLoad||b.windowLoaded);
};c.addImage=function(h,l,e){var g,k,j=this,f=function(n){return a.inArray(n,j.images);
},i=function(){var n=f(this);if(n>=0){j.imageStatus[n]=true;if(a.inArray(false,j.imageStatus)<0&&(!j.options.safeLoad||b.windowLoaded)){j.initialize();
}}},m=function(n){var o=j.images.push(n)-1;j.imageSources[o]=k;j.imageStatus[o]=false;
if(e){j.altImagesXref[e]=o;}};if(!h&&!l){return;}g=h;k=l||a(g).attr("src");if(!k){throw ("Missing image source");
}if(!g){g=a('<img class="mapster_el" />').hide()[0];a("body").append(g);m(g);a(g).load(i).error(function(n){j.imageLoadError.call(j,n);
});a(g).attr("src",k);}else{m(g);}};c.isImageLoaded=function(f){var h,e,g=this;if(g.imageStatus[f]){return true;
}e=g.images[f];if(typeof e.complete!=="undefined"){h=e.complete;}else{h=!!d.imgWidth(e);
}g.imageStatus[f]=h;return h;};c.bindImages=function(f,e){var g,j=this,h=true,k=j.options,l=function(){j.bindImages.call(j,false,e);
};if(f){j.complete=false;j.triesLeft=j.bindTries;j.imagesLoaded=false;if(j.images.length>2){j.images=j.images.slice(0,2);
j.imageSources=j.imageSources.slice(0,2);j.imageStatus=j.imageStatus.slice(0,2);j.altImagesXref={};
}j.altImagesXref={};if(j.images.length===0){j.addImage(j.image);j.addImage(null,j.image.src);
}if(a.mapster.hasCanvas){j.addImage(null,k.render_highlight.altImage||k.altImage,"highlight");
j.addImage(null,k.render_select.altImage||k.altImage,"select");}}if(j.imagesLoaded){return;
}g=j.images.length;while(g-->0){if(!j.isImageLoaded(g)){h=false;break;}}j.imagesLoaded=h;
if(j.isReadyToBind()){if(e){e();}else{j.initialize();}}else{if(j.triesLeft-->0){j.imgTimeout=window.setTimeout(l,200);
}else{j.imageLoadError.call(j);}}};c.imageLoadError=function(f){clearTimeout(this.imgTimeout);
this.triesLeft=0;var g=f?"The image "+f.target.src+" failed to load.":"The images never seemed to finish loading. You may just need to increase the configTimeout if images could take a long time to load.";
throw g;};c.altImage=function(e){return this.images[this.altImagesXref[e]];};c.wrapId=function(){return"mapster_wrap_"+this.index;
};c._idFromKey=function(e){return typeof e==="string"&&this._xref.hasOwnProperty(e)?this._xref[e]:-1;
};c.getSelected=function(){var e="";a.each(this.data,function(g,f){if(f.isSelected()){e+=(e?",":"")+this.key;
}});return e;};c.getAllDataForArea=function(f,g){var h,e,l,k=this,j=a(f).filter("area").attr(k.options.mapKey);
if(j){l=[];j=d.split(j);for(h=0;h<(g||j.length);h++){e=k.data[k._idFromKey(j[h])];
e.area=f.length?f[0]:f;l.push(e);}}return l;};c.getDataForArea=function(f){var e=this.getAllDataForArea(f,1);
return e?e[0]||null:null;};c.getDataForKey=function(e){return this.data[this._idFromKey(e)];
};c.getKeysForGroup=function(f){var e=this.getDataForKey(f);return !e?"":e.isPrimary?e.key:this.getPrimaryKeysForMapAreas(e.areas()).join(",");
};c.getPrimaryKeysForMapAreas=function(e){var f=[];a.each(e,function(h,g){if(a.inArray(g.keys[0],f)<0){f.push(g.keys[0]);
}});return f;};c.getData=function(e){if(typeof e==="string"){return this.getDataForKey(e);
}else{if(e&&e.mapster||d.isElement(e)){return this.getDataForArea(e);}else{return null;
}}};c.ensureNoHighlight=function(){var e;if(this.highlightId>=0){this.graphics.clearHighlight();
e=this.data[this.highlightId];e.changeState("highlight",false);this.setHighlightId(-1);
}};c.setHighlightId=function(e){this.highlightId=e;};c.clearSelections=function(){a.each(this.data,function(g,f){if(f.selected){f.removeSelection(true);
}});this.removeSelectionFinish();};c.setAreaOptions=function(f){var j,g,e,h=f||{};
for(j=h.length-1;j>=0;j--){g=h[j];e=this.getDataForKey(g.key);if(e){d.updateProps(e.options,g);
if(d.isBool(g.selected)){e.selected=g.selected;}}}};c.drawSelections=function(g){var e,f=d.asArray(g);
for(e=f.length-1;e>=0;e--){this.data[f[e]].drawSelection();}};c.redrawSelections=function(){a.each(this.data,function(g,f){if(f.isSelectedOrStatic()){f.drawSelection();
}});};c.initialize=function(){var j,e,m,s,n,f,g,p,h,q,r,o,k=this,l=k.options;if(k.complete){return;
}h=a(k.image);n=h.parent().attr("id");if(n&&n.length>=12&&n.substring(0,12)==="mapster_wrap"){s=h.parent();
s.attr("id",k.wrapId());}else{s=a('<div id="'+k.wrapId()+'"></div>');if(l.wrapClass){if(l.wrapClass===true){s.addClass(h.attr("class"));
}else{s.addClass(l.wrapClass);}}}k.wrapper=s;k.scaleInfo=o=d.scaleMap(k.images[0],k.images[1],l.scaleMap);
e=k.graphics.createVisibleCanvas(k);m=k.graphics.createVisibleCanvas(k);k.base_canvas=e;
k.overlay_canvas=m;j=a(k.images[1]).addClass("mapster_el").addClass(a(k.images[0]).attr("class")).attr({id:null,usemap:null});
p=d.size(k.images[0]);if(p.complete){j.css({width:p.width,height:p.height});}k.buildDataset();
f={display:"block",position:"relative",padding:0,width:o.width,height:o.height};if(l.wrapCss){a.extend(f,l.wrapCss);
}if(h.parent()[0]!==k.wrapper[0]){h.before(k.wrapper);}s.css(f);a(k.images.slice(2)).hide();
for(g=1;g<k.images.length;g++){s.append(k.images[g]);}s.append(e).append(m).append(h.css(b.canvas_style));
d.setOpacity(k.images[0],0);a(k.images[1]).show();d.setOpacity(k.images[1],1);if(l.isSelectable&&l.onGetList){r=k.data.slice(0);
if(l.sortList){if(l.sortList==="desc"){q=function(i,t){return i===t?0:(i>t?-1:1);
};}else{q=function(i,t){return i===t?0:(i<t?-1:1);};}r.sort(function(i,t){i=i.value;
t=t.value;return q(i,t);});}k.options.boundList=l.onGetList.call(k.image,r);}k.complete=true;
k.processCommandQueue();if(l.onConfigured&&typeof l.onConfigured==="function"){l.onConfigured.call(h,true);
}};c.buildDataset=function(w){var x,i,p,h,e,g,k,s,q,r,t,n,l,o,u=this,v=u.options,m;
function f(y,z){var j=new b.AreaData(u,y,z);j.areaId=u._xref[y]=u.data.push(j)-1;
return j.areaId;}u._xref={};u.data=[];if(!w){u.mapAreas=[];}m=!v.mapKey;if(m){v.mapKey="data-mapster-key";
}x=(a.browser.msie&&a.browser.version<=7)?"area":(m?"area[coords]":"area["+v.mapKey+"]");
i=a(u.map).find(x).unbind(".mapster");for(t=0;t<i.length;t++){h=0;g=i[t];e=a(g);if(!g.coords){continue;
}if(m){k=String(t);e.attr("data-mapster-key",k);}else{k=g.getAttribute(v.mapKey);
}if(w){s=u.mapAreas[e.data("mapster")-1];s.configure(k);}else{s=new b.MapArea(u,g,k);
u.mapAreas.push(s);}r=s.keys;for(p=r.length-1;p>=0;p--){q=r[p];if(v.mapValue){n=e.attr(v.mapValue);
}if(m){h=f(u.data.length,n);l=u.data[h];l.key=q=h.toString();}else{h=u._xref[q];if(h>=0){l=u.data[h];
if(n&&!u.data[h].value){l.value=n;}}else{h=f(q,n);l=u.data[h];l.isPrimary=p===0;}}s.areaDataXref.push(h);
l.areasXref.push(t);}o=e.attr("href");if(o&&o!=="#"&&!l.href){l.href=o;}if(!s.nohref){e.bind("mouseover.mapster",u.mouseover).bind("mouseout.mapster",u.mouseout).bind("click.mapster",u.click).bind("mousedown.mapster",u.mousedown);
}e.data("mapster",t+1);}u.setAreaOptions(v.areas);u.redrawSelections();};c.processCommandQueue=function(){var e,f=this;
while(!f.currentAction&&f.commands.length){e=f.commands[0];f.commands.splice(0,1);
b.impl[e.command].apply(e.that,e.args);}};c.clearEvents=function(){a(this.map).find("area").unbind(".mapster");
a(this.images).unbind(".mapster");};c._clearCanvases=function(e){if(!e){a(this.base_canvas).remove();
}a(this.overlay_canvas).remove();};c.clearMapData=function(f){var e=this;this._clearCanvases(f);
a.each(this.data,function(h,g){g.reset();});this.data=null;if(!f){this.image.style.cssText=this.imgCssText;
a(this.wrapper).before(this.image).remove();}a.each(this.images,function(h,g){if(e.images[h]!==g.image){e.images[h]=null;
}});e.images=[];this.image=null;d.ifFunction(this.clearTooltip,this);};c.removeSelectionFinish=function(){var e=this.graphics;
e.refreshSelections();e.clearHighlight();};}(jQuery));(function(a){var c,b=a.mapster,d=b.utils;
b.AreaData=function(f,e,g){a.extend(this,{owner:f,key:e||"",isPrimary:true,areaId:-1,href:"",value:g||"",options:{},selected:null,areasXref:[],area:null,optsCache:null});
};c=b.AreaData.prototype;c.areas=function(){var e,f=[];for(e=0;e<this.areasXref.length;
e++){f.push(this.owner.mapAreas[this.areasXref[e]]);}return f;};c.coords=function(f){var e=[];
a.each(this.areas(),function(h,g){e=e.concat(g.coords(f));});return e;};c.reset=function(){a.each(this.areas(),function(g,f){f.reset();
});this.areasXref=[];this.options=null;};c.isSelectedOrStatic=function(){var e=this.effectiveOptions();
return d.isBool(e.staticState)?e.staticState:this.isSelected();};c.isSelected=function(){return d.isBool(this.selected)?this.selected:d.isBool(this.owner.area_options.selected)?this.owner.area_options.selected:false;
};c.isSelectable=function(){return d.isBool(this.effectiveOptions().staticState)?false:(d.isBool(this.owner.options.staticState)?false:d.boolOrDefault(this.effectiveOptions().isSelectable,true));
};c.isDeselectable=function(){return d.isBool(this.effectiveOptions().staticState)?false:(d.isBool(this.owner.options.staticState)?false:d.boolOrDefault(this.effectiveOptions().isDeselectable,true));
};c.isNotRendered=function(){var e=a(this.area);return e.attr("nohref")||!e.attr("href")||this.effectiveOptions().isMask;
};c.effectiveOptions=function(f){var e=d.updateProps({},this.owner.area_options,this.options,f||{},{id:this.areaId});
e.selected=this.isSelected();return e;};c.effectiveRenderOptions=function(f,h){var e,g=this.optsCache;
if(!g||f==="highlight"){e=this.effectiveOptions(h);g=d.updateProps({},e,e["render_"+f],{alt_image:this.owner.altImage(f)});
if(f!=="highlight"){this.optsCache=g;}}return a.extend({},g);};c.changeState=function(f,e){if(a.isFunction(this.owner.options.onStateChange)){this.owner.options.onStateChange.call(this.owner.image,{key:this.key,state:f,selected:e});
}};c.highlight=function(f){var e=this.owner;if(this.effectiveOptions().highlight){e.graphics.addShapeGroup(this,"highlight",f);
}e.setHighlightId(this.areaId);this.changeState("highlight",true);};c.drawSelection=function(){this.owner.graphics.addShapeGroup(this,"select");
};c.addSelection=function(f){var e=this.owner;if(e.options.singleSelect){e.clearSelections();
}if(!this.isSelected()){if(f){this.optsCache=a.extend(this.effectiveRenderOptions("select"),f);
}this.drawSelection();if(f){this.optsCache=null;}this.selected=true;this.changeState("select",true);
}if(e.options.singleSelect){e.graphics.refreshSelections();}};c.removeSelection=function(e){this.selected=false;
this.changeState("select",false);this.optsCache=null;this.owner.graphics.removeSelections(this.areaId);
if(!e){this.owner.removeSelectionFinish();}};c.toggleSelection=function(e){if(!this.isSelected()){this.addSelection(e);
}else{this.removeSelection();}return this.isSelected();};b.MapArea=function(h,e,f){if(!h){return;
}var g=this;g.owner=h;g.area=e;g.areaDataXref=[];g.originalCoords=[];a.each(d.split(e.coords),function(k,j){g.originalCoords.push(parseFloat(j));
});g.length=g.originalCoords.length;g.shape=e.shape.toLowerCase();g.nohref=e.nohref||!e.href;
g.configure(f);};b.MapArea.prototype.configure=function(e){this.keys=d.split(e);};
b.MapArea.prototype.reset=function(){this.area=null;};b.MapArea.prototype.coords=function(e){return a.map(this.originalCoords,function(f){return e?f:f+e;
});};}(jQuery));(function(a){var b=a.mapster.utils;b.areaCorners=function(e,x,o){var n,t,u,r,s,h,f,i,g,l,m,v,q,p,w,c,d,k=[];
for(q=0;q<e.length;q++){d=e[q];p=b.split(d.coords,parseInt);switch(d.shape){case"circle":l=p[0];
m=p[1];w=p[2];k=[];for(q=0;q<360;q+=20){c=q*Math.PI/180;k.push(l+w*Math.cos(c),m+w*Math.sin(c));
}break;case"rect":k.push(p[0],p[1],p[2],p[1],p[2],p[3],p[0],p[3]);break;default:k=k.concat(p);
break;}}t=u=h=i=999999;r=s=f=g=-1;for(q=k.length-2;q>=0;q-=2){l=parseInt(k[q],10);
m=parseInt(k[q+1],10);if(l<t){t=l;g=m;}if(l>r){r=l;i=m;}if(m<u){u=m;f=l;}if(m>s){s=m;
h=l;}}if(x&&o){n=false;a.each([[f-x,u-o],[h,u-o],[t-x,g-o],[t-x,i],[r,g-o],[r,i],[f-x,s],[h,s]],function(y,j){if(!n&&(j[0]>0&&j[1]>0)){v=j;
n=true;return false;}});if(!n){v=[r,s];}}return{tl:[t,u],br:[r,s],tt:v};};}(jQuery));
(function(a){var b=a.mapster,d=b.utils,c=b.MapArea.prototype;b.utils.getScaleInfo=function(f,e){var g;
if(!e){g=1;e=f;}else{g=f.width/e.width||f.height/e.height;if(g>0.98&&g<1.02){g=1;
}}return{scale:(g!==1),scalePct:g,realWidth:e.width,realHeight:e.height,width:f.width,height:f.height,ratio:f.width/f.height};
};b.utils.scaleMap=function(e,f,h){var i=d.size(e),g=d.size(f);if(!g.complete){throw ("Another script, such as an extension, appears to be interfering with image loading. Please let us know about this.");
}if(!i.complete){i=g;}return this.getScaleInfo(i,h?g:null);};b.MapData.prototype.resize=function(o,m,g,e){var k,q,t,j,f,p={callback:e||g},n,h,l=this;
function s(u,x,v){if(a.mapster.hasCanvas){u.width=x;u.height=v;}else{a(u).width(x);
a(u).height(v);}}function i(){s(l.overlay_canvas,t,j);if(p.highlight&&k>=0){var u=l.data[k];
u.tempOptions={fade:false};l.getDataForKey(u.key).highlight();u.tempOptions=null;
}s(l.base_canvas,t,j);l.redrawSelections();l.currentAction="";if(a.isFunction(p.callback)){p.callback();
}l.processCommandQueue();}function r(){a(l.image).css(n);l.scaleInfo=d.getScaleInfo({width:t,height:j},{width:l.scaleInfo.realWidth,height:l.scaleInfo.realHeight});
a.each(l.data,function(v,u){a.each(u.areas(),function(x,w){w.resize();});});}if(typeof o==="object"){p=o;
}else{p.width=o;p.height=m;p.duration=g||0;}t=p.width;j=p.height;f=p.duration;if(l.scaleInfo.width===t&&l.scaleInfo.height===j){return;
}k=l.highlightId;if(!t){q=j/l.scaleInfo.realHeight;t=Math.round(l.scaleInfo.realWidth*q);
}if(!j){q=t/l.scaleInfo.realWidth;j=Math.round(l.scaleInfo.realHeight*q);}n={width:String(t)+"px",height:String(j)+"px"};
if(!a.mapster.hasCanvas){a(l.base_canvas).children().remove();}h=a(l.wrapper).find(".mapster_el").add(l.wrapper);
if(f){l.currentAction="resizing";h.each(function(v,u){a(u).animate(n,{duration:f,complete:v===0?i:null,easing:"linear"});
});a(l.wrapper).animate({scrollLeft:p.scrollLeft||0,scrollTop:p.scrollTop||0},{duration:f,easing:"linear"});
r();}else{h.css(n);i();r();}};b.MapArea=d.subclass(b.MapArea,function(){this.base.init();
if(this.owner.scaleInfo.scale){this.resize();}});c.coords=function(k,e){var f,g=[],i=k||this.owner.scaleInfo.scalePct,h=e||0;
if(i===1&&e===0){return this.originalCoords;}for(f=0;f<this.length;f++){g.push(Math.round(this.originalCoords[f]*i)+h);
}return g;};c.resize=function(){this.area.coords=this.coords().join(",");};c.reset=function(){this.area.coords=this.coords(1).join(",");
};b.impl.resize=function(g,f,e){if(!g&&!f){return false;}var h=(new b.Method(this,function(){this.resize(g,f,e);
},null,{name:"resize",args:arguments})).go();return h;};b.impl.zoom=function(e,g){var f=g||{};
function h(i){var w,j,m,A,t,k,l,u,v,q,r,p,o,y,z,s=f.padding||0,x=i?20:0,n=this,B=false;
if(i){if(!n.zoomed){n.zoomed=true;n.preZoomWidth=n.scaleInfo.width;n.preZoomHeight=n.scaleInfo.height;
n.zoomedArea=i;if(f.scroll){n.wrapper.css({overflow:"auto"});}}j=a.mapster.utils.areaCorners(i.coords(1,0));
A=n.wrapper.innerWidth()-x-s*2;m=n.wrapper.innerHeight()-x-s*2;k=j.maxX-j.minX;l=j.maxY-j.minY;
u=A/k;v=m/l;t=Math.min(u,v);q=(A-k*t)/2;r=(m-l*t)/2;p=n.scaleInfo.realWidth*t;o=n.scaleInfo.realHeight*t;
y=(j.minX)*t-s-q;z=(j.minY)*t-s-r;}else{if(!n.zoomed){return;}B=true;p=n.preZoomWidth;
o=n.preZoomHeight;y=null;z=null;}this.resize({width:p,height:o,duration:f.duration,scroll:w,scrollLeft:y,scrollTop:z,callback:(function(){var D=B,E=f.scroll,C=i;
return function(){if(D){n.preZoomWidth=null;n.preZoomHeight=null;n.zoomed=false;n.zoomedArea=false;
if(E){n.wrapper.css({overflow:"inherit"});}}else{n.zoomedArea=C;}};}())});}return(new b.Method(this,function(i){h.call(this);
},function(){h.call(this.owner,this);},{name:"zoom",args:arguments,first:true,key:e})).go();
};}(jQuery));(function(a){var b=a.mapster,c=b.utils;a.extend(b.defaults,{toolTipContainer:'<div style="border: 2px solid black; background: #EEEEEE; position:absolute; width:160px; padding:4px; margin: 4px; -moz-box-shadow: 3px 3px 5px #535353; -webkit-box-shadow: 3px 3px 5px #535353; box-shadow: 3px 3px 5px #535353; -moz-border-radius: 6px 6px 6px 6px; -webkit-border-radius: 6px; border-radius: 6px 6px 6px 6px;"></div>',showToolTip:false,toolTipFade:true,toolTipClose:["area-mouseout","image-mouseout"],onShowToolTip:null,onCreateTooltip:null});
a.extend(b.area_defaults,{toolTip:null});b.MapData.prototype.clearTooltip=function(){if(this.activeToolTip){this.activeToolTip.stop().remove();
this.activeToolTip=null;this.activeToolTipID=-1;}a.each(this._tooltip_events,function(f,d){d.object.unbind(d.event);
});};b.MapData.prototype.bindTooltipClose=function(i,e,h,d){var f=e+".mapster-tooltip",g=this;
if(a.inArray(i,this.options.toolTipClose)>=0){h.unbind(f).bind(f,function(j){if(!d||d.call(this,j)){g.clearTooltip();
}});this._tooltip_events.push({object:h,event:f,callback:d});}};b.AreaData.prototype.showTooltip=function(){var i,l,m,g,d,f,j=this.effectiveOptions(),h=this.owner,e=h.options,k=h.options.toolTipContainer;
h.cancelClear=true;if(h.activeToolTipID===this.areaId){return;}if(typeof k==="string"){f=a(k);
}else{f=a(k).clone();}l=f.html(j.toolTip).hide();h.clearTooltip();a("body").append(l);
h.activeToolTip=l;h.activeToolTipID=this.areaId;c.setOpacity(l[0],0);l.show();d=this.area?[this.area]:a.map(this.areas(),function(n){return n.area;
});g=c.areaCorners(d,l.outerWidth(true),l.outerHeight(true));i=a(h.image).offset();
m={left:i.left+g.tt[0]+"px",top:i.top+g.tt[1]+"px"};if(parseInt(l.css("z-index"),10)===0||l.css("z-index")==="auto"){m["z-index"]=9999;
}l.css(m).addClass("mapster_tooltip");h.bindTooltipClose("area-click","click",a(h.map));
h.bindTooltipClose("tooltip-click","click",l);h.bindTooltipClose("image-mouseout","mouseout",a(h.image),function(n){return(n.relatedTarget.nodeName!=="AREA"&&n.relatedTarget!==this);
});if(h.options.toolTipFade){c.fader(l[0],0,1,j.fadeDuration);}else{c.setOpacity(l[0],1);
}c.ifFunction(e.onShowToolTip,this.area||null,{toolTip:l,areaOptions:j,key:this.key,selected:this.isSelected()});
};b.impl.tooltip=function(d){return(new b.Method(this,function(){this.clearTooltip();
},function(){if(this.effectiveOptions().toolTip){this.showTooltip();}},{name:"tooltip",args:arguments,key:d})).go();
};}(jQuery));;
(function ($) {

  Drupal.behaviors.epe = {
    attach: function (context, settings) {
        var inArea,
            map = $('#county_image_map'),
            single_opts = {
                fillColor: '000000',
                fillOpacity: 0.4,
                stroke: true,
                strokeColor: '000000',
                strokeWidth: 2
            },
            all_opts = {
                fillColor: 'ffffff',
                fillOpacity: 0.2,
                strokeColor: true,
                strokeColor: 'ffffff',
                strokeWidth: 1
            },
            initial_opts = {
                mapKey: 'data-name',
                clickNavigate: true,
                isSelectable: false,
                onMouseover: function(data) {
                    inArea = true;
                },
                onMouseout: function(data) {
                    inArea = false;
                }
            };
            opts = $.extend({}, all_opts, initial_opts, single_opts);

        map.mapster('unbind')
            .mapster(opts)
            .bind('mouseover', function() {
                if(!inArea) {
                    map.mapster('set_options', all_opts)
                        .mapster('set', true, 'all')
                        .mapster('set_options', single_opts);
                }
            }).bind('mouseout', function() {
                if(!inArea) {
                    map.mapster('set', false, 'all');
                }
            });
    }
  };

})(jQuery);;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, https://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - https://mydomain.com/node/1 -> /node/1
 * - https://example.com/foo/bar -> https://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
