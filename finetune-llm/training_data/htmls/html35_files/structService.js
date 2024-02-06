chessStories.service("engPool",[function(){var e=[],t=!1;return{init:function(){if(!t){t=!0;var i=new ChessEngine;i.analyze("k7/p4KRP/8/8/8/8/8/8 w - - 0 30",{depth:6},function(t,n){"done"==t&&e.push(i)})}},get_engine:function(){t=!0;var i=e;return i.length>0?i.pop():new ChessEngine},release_engine:function(t){var i=e;i.length>=2?t.terminate():i.push(t)}}}]),chessStories.service("fenService",[function(){function e(e,t){var i=t;return"wK"!=e.e1&&(i=i.replace("K","").replace("Q","")),"bK"!=e.e8&&(i=i.replace("k","").replace("q","")),"wR"!=e.a1&&(i=i.replace("Q","")),"bR"!=e.a8&&(i=i.replace("q","")),"wR"!=e.h1&&(i=i.replace("K","")),"bR"!=e.h8&&(i=i.replace("k","")),""==i&&(i="-"),i}function t(e,t,i){if("-"==e)return!0;var n=e[0],s=e[1];if("3"==s&&"b"==i){if("wP"!=t[n+"4"]||t[n+"3"]||t[n+"2"])return!1}else{if("6"!=s||"w"!=i)return!1;if("bP"!=t[n+"5"]||t[n+"6"]||t[n+"7"])return!1}return!0}var i=/^[prnbqkPRNBQK1-8\/]{10,80} [wb] (-|[kKqQ]{1,4}) (-|[a-h][1-8]) [0-9]{1,8} [0-9]{1,8}$/;return{fix_fen:function(n){if(!n||!i.test(n))return null;var s=n.split(" ");if(6!=s.length)return null;var r=s[0],a=s[1],l=s[2],o=s[3],u=s[4],p=s[5],h=function(e){var t={},i=e.split("/");if(8!=i.length)return null;var n=!0,s={p:"bP",r:"bR",n:"bN",b:"bB",q:"bQ",k:"bK",P:"wP",R:"wR",N:"wN",B:"wB",Q:"wQ",K:"wK"};return i.forEach(function(e,i){var r=0;e.replace(/./g,function(e){var a;return/[1-8]/.test(e)?r+=+e:/[prnbqkPRNBQK]/.test(e)?(r<8&&(a="abcdefgh"[r]+(8-i)),t[a]=s[e],r++):n=!1,e}),8!=r&&(n=!1)}),n?t:null}(r);return null===h?null:(u>99&&(u=99),p<1&&(p=1),p>9999&&(p=9999),s=[r,a,l=e(h,l),o=t(o,h,a)?o:"-",u,p],fixed_fen=s.join(" "),fixed_fen)},fix_ep:function(e,i,n){return t(e,i,n)?e:"-"},fix_castling:e,is_valid_pos:function(e,t){var i=e.split(" "),n=i[0],s={P:0,R:0,N:0,B:0,Q:0,K:0,p:0,r:0,n:0,b:0,q:0,k:0};if(n.replace(/[1-8\/]/g,"").split("").forEach(function(e){s[e]++}),1!=s.K||1!=s.k)return!1;var r=i[0].split("/");if(/P/.test(r[0])||/p/.test(r[7]))return!1;if(t){if(s.P>8||s.p>8)return!1;if(s.P+s.R+s.N+s.B+s.Q>15)return!1;if(s.p+s.r+s.n+s.b+s.q>15)return!1}return i[1]="w"==i[1]?"b":"w",!new Chess(i.join(" ")).in_check()}}}]),chessStories.service("jobService",["$timeout","$rootScope","i18nService","decodeService","fenService",function(e,t,i,n,s){var r=i.phrases,a=1;function l(e,t,i){if(!e||"object"!=typeof e||t||i){this.game=e;var n=e&&e.headers.CSGameName||"";if(this.jparam=new JobParams(t),"position"==this.jparam.type&&"SetUp"==this.jparam.name&&(this.jparam.name=r.job_name_setup+" "+a++),this.game_id=e?e.key:"",this.game_name=n,"position"!==t.type&&"tutor"!==t.type||(this.fen=s.fix_fen(t.fen)),this.algver=i,this.state="new",this.pct=0,this.stalled=!1,this.working=!1,this.working_since=null,this.pollTimer=null,this.result=null,this.dom=null,this.display_state={scroll:0,fen:""},this.topic="summary",this.result_is_new=!1,this.msg="",this.chatter=null,this.cancelled=!1,"position"===this.jparam.type){var l=this.fen.split(" ");this.color=l[1],this.move_number=parseInt(l[5])-("w"==this.color?1:0),this.move_number_str=this.move_number+("w"!=this.color?".":"...")}}else this.from_simple_obj(e)}function o(i,s,r,a,l){if(!i.jparam||"position"==i.jparam.type&&(!function(e){if("string"!=typeof e)return!1;if(e.length<20||e.length>100)return!1;var t=e.split(" ");return!!(6==t.length&&t[5].match(/^(0|[1-9][0-9]{0,2})$/)&&t[4].match(/^(0|[1-9][0-9]{0,2})$/)&&t[3].match(/^(-|[a-h][36])$/)&&t[2].match(/^(-|[kKqQ]{1,4})$/)&&t[1].match(/^[wb]$/)&&t[0].match(/^[1-8pPrRnNbBqQkK/]+$/)&&8==t[0].split("/").length&&new Chess(e).fen()==e)}(i.fen)||!function(e){var t=e.split(" "),i=t[0];if(2!=i.split("k").length||2!=i.split("K").length)return!1;if(i.split("p").length>9||i.split("P").length>9)return!1;var n=i.split("/");return!(n[0].split(/pP/).length>1||n[7].split(/pP/).length>1||(t[1]="w"==t[1]?"b":"w",new Chess(t.join(" ")).in_check()))}(i.fen)))return i.state="invalid",i.working_since=null,null;function o(n,s){if(i.pollTimer=null,i.working=!1,i.cancelled)i.working_since=null;else{i.response=s;var r=!1;if(n)return r="failed"!=i.state||!i.stalled,i.stalled=!0,void(r&&a&&a("changed"));if(i.stalled)i.stalled=!1,r=!0;else if(s.disconnected)return void(["working","partial","new"].includes(i.state)&&(i.state="failed",i.working_since=null,i.response=null,e.cancel(i.timeout),a&&a("disconnected")));s.msg&&(i.msg=s.msg),s.pct&&(r=r||i.pct!=s.pct,i.pct=s.pct),i.on_free_plan=s.on_free_plan,i.quota=s.quota,i.used_credits=s.used_credits,"answered"===s.status?(i.pct=100,i.state="complete",i.parts="",i.working_since=null,e.cancel(i.timeout),"position"==i.jparam.type?i.result={fen:i.fen,html:s.text,answers:{},parts:"",partial:s.partial||s.analysis}:"game"==i.jparam.type&&(i.result=s.result),"game"!=i.jparam.type&&(i.result_is_new=!0),a&&a("complete")):["wouldcost","wouldwork","nocredit","notverified","invalid","needs_premium","out_of_quota","free_trial_ended","plan_ended"].includes(s.status)?(i.state=s.status2||s.status,i.working_since=null,e.cancel(i.timeout),a&&a("failed"),["needs_premium","out_of_quota","free_trial_ended","plan_ended"].includes(i.state)&&t.$emit("needs_premium",{kind:i.state,job:i})):["fail","failed","crashed"].includes(s.status)?("game"===i.jparam.type&&"working"===s.status?(i.result=s.result,i.state="complete"):i.state="failed",i.working_since=null,e.cancel(i.timeout),a&&a(i.state)):("working"!=i.state&&(r=!0),i.state="working",i.parts=s.parts,"position"==i.jparam.type&&(i.result=s),r&&a&&a("changed"))}}if(i.timeout=e(function(){i.working_since&&(a&&a("timeout"),i.state="failed",i.working_since=null,i.cancel())},48e4),i.working=!0,"game"==i.jparam.type){var u=_.map(i.game.moves,function(e){return!!e.ex_id});u.unshift(!!i.game.body[0].ex_id);var p=""!==i.game_id?i.game_id:""!==i.game.key?i.game.key:"";""!==p&&n.decode_game(p,i.game_name,i.jparam.share_key,u,s,r,i.algver,o,l)}else{var h="tutor"===i.jparam.type?"short":"deep";n.decode(i.game_id,i.game_name,i.fen,i.jparam.next_move_uci,i.parts,i.jparam.share_key,h,s,r,i.algver,o,l)}return i}return l.prototype.to_simple_obj=function(){return{jparam:this.jparam,game_id:this.game_id,game_name:this.game_name,fen:this.fen,state:this.state,pct:this.pct,result:null,result_is_new:this.result_is_new,display_state:this.display_state,color:this.color,move_number:this.move_number,move_number_str:this.move_number_str}},l.prototype.from_simple_obj=function(e){this.jparam=e.jparam,this.game_id=e.game_id,this.game_name=e.game_name,this.fen=e.fen,this.state=e.state,this.pct=e.pct,this.stalled=!1,this.result=null,this.dom=null,this.display_state=e.display_state,this.topic="summary",this.result_is_new=e.result_is_new,this.working=!1,this.working_since=null,this.pollTimer&&this.stopPolling(),this.color=e.color,this.move_number=e.move_number,this.move_number_str=e.move_number_str,this.chatter=null},l.prototype.cancel=function(){this.cancelled=!0,this.stopPolling(),e.cancel(this.timeout)},l.prototype.same=function(e){return e&&this.fen==e.fen&&this.jparam.next_move_uci==e.jparam.next_move_uci},l.prototype.start=function(e,t){var i=e.r,n=e.d;return null===this.working_since||i?(this.working_since=(new Date).getTime(),this.result=null,this.result_is_new=!1,this.pct=0,this.parts="","game"==this.jparam.type&&i&&this.forget_results(),o(this,!0,i,t,n),this):(t&&t("changed"),null)},l.prototype.clearResult=function(){null===this.working_since&&(this.result=null)},l.prototype.readResult=function(e){return null===this.working_since?(this.working_since=(new Date).getTime(),this.parts="",o(this,!1,!1,e),this):null},l.prototype.forget_results=function(){_.each(this.game.moves,function(e){e.ex_id=null}),this.game.body.length&&(this.game.body[0].ex_id=null),this.result=null,this.dom=null},l.prototype.stopPolling=function(){this.pollTimer&&(e.cancel(this.pollTimer),this.pollTimer=null),this.working=!1,this.working_since=null},l.prototype.baseFen=function(){return"position"==this.jparam.type?"threats_after"==this.topic?this.fenAfterAnalyzedMove:this.fen:this.game.curr_move.fen},l.prototype.clear_failed_result=function(){"failed"==this.state&&(this.state="new",this.pct=0,this.stalled=!1,this.working=!1,this.working_since=null,this.pollTimer&&(e.cancel(this.pollTimer),this.pollTimer=null),this.result=null,this.dom=null,this.display_state={scroll:0,fen:""},this.topic="summary",this.result_is_new=!1,this.msg="",this.chatter=null,this.cancelled=!1)},{Job:l}}]);
