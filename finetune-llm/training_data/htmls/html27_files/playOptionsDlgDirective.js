angular.module("chessStories").directive("appPlayOptionsDlg",[function(){return{restrict:"EA",scope:!1,templateUrl:"/static001767/app/shared/playOptionsDlg/playOptionsDlgView.html",controllerAs:"playOptions",controller:["$scope","playCtrlService",function(o,a){this.onEndGame=function(a){a&&a.stopPropagation();var e=o.currTab.play_mode;e.endGame(),o.save_now(e.tab),o.ga("play-end","null user="+e.user_color+" *",e.game.moves.length+" moves, "+e.duration/1e3+" sec")},this.onOptions=function(a,e){a&&a.stopPropagation(),o.dismiss_popups("hard",a);var n=o.currTab.play_mode;n.setOptions(e),n.options_shown&&o.ga("play-options","","")},this.onSetLevel=function(a,e){a.stopPropagation(),o.currTab.play_mode.setLevel(e),o.ga("play-level",e,"")},this.onSetColor=function(a,e){a.stopPropagation();var n=o.currTab.play_mode;"play"!=n.mode&&(n.setColor(e),o.ga("play-color",e,""))},this.onStartPlaying=function(a){a&&a.stopPropagation(),o.currTab.play_mode.startPlaying(o.curr_fen)||o.popupMsg.showText(o.i18n.invalid_position_msg,!1,5e3),o.ga("play-start",o.currTab.play_mode.user_color,"")},this.onResumeGame=function(e){e&&e.stopPropagation();var n=o.currTab.play_mode,t=a.resume_game(n);o.selectMove(o.currTab,t,!0,!0),o.key_focus="game",n.syncOnMainline(o.curr_fen)}}],link:function(o,a,e){$(".play-options-dlg",a).draggable({appendTo:"body",containment:"document",cancel:".play-options-dlg .dlg-body",opacity:.9,scroll:!1,zIndex:99})}}}]);
