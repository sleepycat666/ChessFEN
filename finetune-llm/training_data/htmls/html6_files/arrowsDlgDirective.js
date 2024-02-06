"use strict";angular.module("chessStories").directive("appArrowsDlg",["arrowsService",function(r){return{restrict:"EA",scope:{shown:"=",uprefs:"=",onArrowsHide:"<",set_arrows_opacity_now:"<setArrowsOpacityNow",force_arrows_change:"=forceArrowsChange",ga:"="},templateUrl:"/static001767/app/shared/arrowsDlg/arrowsDlgView.html",controllerAs:"arrowsDlg",controller:["$scope","Kbd","i18nService",function(e,a,o){var t=this;e.i18n=o.phrases,e.shown=!1,t.latestOpacity=0,t.lastPrefSendTime=0,t.hide=function(){e.shown=!1},t.onClose=function(){t.hide()},t.onBgClick=function(r){r.stopPropagation()},e.arrow_roles=r.arrow_roles,e.onChkChange=function(a){r.set_pref(a,r.get_arrow_roles_disp(a)),e.force_arrows_change++},e.bufferOpacityPrefChanges=function(e){t.latestOpacity=e,Date.now()-t.lastPrefSendTime>=3e3&&(r.set_pref("arrow_opacity",t.latestOpacity),t.lastPrefSendTime=Date.now())},e.onArrowSliderWheel=function(a,o,t,s){if(a.preventDefault(),o){var i=$(".arrows-slider"),n=i.slider("value"),c=Math.min(40,10+n/10),l=Math.min(1e3,Math.max(0,n+o*c));i.slider("value",l),l/=1e3,r.arrow_opacity(l),e.bufferOpacityPrefChanges(l)}},e.onArrowsHide=function(){r.set_pref("arrows_hide",!r.hide_all()),e.set_arrows_opacity_now()},e.$on("dismiss-popups",t.hide)}],link:function(e,a){function o(r,e,a){for(var o=[],t=0;t<3;t++)o.push(Math.max(Math.min(Math.round(r[t]+(e[t]-r[t])*a),255),0));return o="rgb("+o[0]+","+o[1]+","+o[2]+")"}$(".arrows-dlg",a).draggable({containment:"document",cancel:".dlg-inner",scroll:!1});var t=1e3*r.arrow_opacity;$(".arrows-slider",a).slider({orientation:"vertical",animate:"fast",min:0,max:1e3,step:1,value:null===r.arrow_opacity()?110:1e3*r.arrow_opacity(),create:function(e,a){$(".arrows-slider").css("background-color",o([255,255,255],[230,183,11],r.arrow_opacity()))},slide:function(a,t){var s=t.value/1e3;r.arrow_opacity(s),e.bufferOpacityPrefChanges(s),$(".arrows-slider").css("background-color",o([255,255,255],[230,183,11],s)),e.set_arrows_opacity_now(),0!=(s=Math.max(s,.01))||r.hide_all()?0!=s&&r.hide_all()&&r.set_pref("arrows_hide",!1):r.set_pref("arrows_hide",!0)},change:function(r,a){if(a.value!=t){var o=a.value>t?"up":"down";e.ga("arrows-slider","change-"+o,""+a.value),t=a.value}}})}}}]);
