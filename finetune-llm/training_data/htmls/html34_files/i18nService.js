"use strict";chessStories.service("i18nService",["$timeout","$rootScope","$window","apiService","acctService",function(e,t,o,a,n){function i(e){return e.replace(/ *{-[^}]*} */g," ").trim()}var s={login:i("{-Menu item:} Login"),help:i("{-Menu item:} Help"),intro:i("{-Menu item:} Intro"),legend:i("{-Menu item:} Legend"),video:i("{-Menu item:} Video"),contact_us:i("{-Menu item:} Contact Us"),play_vs_computer:i("{-Menu item:} Play vs. Computer"),feedback:i("{-button:} Feedback"),Upgrade:i("{-button:} Upgrade"),pricing:i("{-button:} Pricing"),pricing_tip:i("{-tooltip:} Choose a plan that works for you"),lang_tip:i("{-tooltip:} Select the explanations language"),dark_mode:i("{-button:} Dark Mode"),dark_mode_tip:i("{-tooltip:} Toggle between light and dark screen colors"),new_tab_tip:i("{-tooltip for +:} Open a new empty tab"),close_tab_tip:i("{-tooltip for x:} Close this tab"),edit_tab_name_tip:i("{-tooltip for pen icon:} Edit the game name"),tabs_autoclose_message:i("{-popup message:} Old tabs are closed automatically"),scroll_tabs_tip:i("{-tooltip for < >:} Scroll the game tabs"),join_for_free:i("{-large button:} Join for free"),join_for_free_tip:i("{-tooltip:} Sign Up to decode games and positions for free!"),my_account:i("{-menu item:} My Account"),log_out:i("{-menu item:} Log out"),new_version:i("A new version is available"),guided_tour:i("{-menu item:} Product Tour"),guided_tour_tip:i("{-tooltip:} Show a step-by-step guided tour of DecodeChess"),collapse:i("{-button:} Collapse"),White:i("White"),Black:i("Black"),Cancel:i("{-button:} Cancel"),Delete:i("{-button:} Delete"),Confirm:i("{-button:} Confirm"),Back:i("{-button:} Back"),Name:i("Name"),job_name_setup:i("{-decode name:} SetUp"),Next:i("{-button:} Next"),Open:i("{-button:} Open"),Close:i("{-button:} Close"),Game:i("Game"),OK:i("{-button:} OK"),Yes:i("{-button:} Yes"),No:i("{-button:} No"),On:i("{-button:} On"),Off:i("{-button:} Off"),new_game:i("{-button:} New Game"),new_game_tip:i("{-tooltip:} Start a new game"),Import:i("{-button:} Import"),import_tip:i("{-tooltip:} Import your own game or position for decoding"),Paste:i("{-button} Paste"),paste_tip:i("{-tooltip:} Paste a PGN file, a FEN string, or a sequence of moves"),Play:i("{-button:} Play"),Play_tip:i("{-tooltip:} Play against our human-like opponent and decode as you play"),set_up:i("{-button:} Set Up"),set_up_tip:i("{-tooltip:} Open a new board in the start position"),examples:i("{-button:} Examples"),examples_tip:i("{-tooltip:} Select from a list of decoding examples"),history:i("{-button:} History"),history_tip:i("{-tooltip:} Select from your recent import, play or decoding activity"),my_games:i("{-button:} My Games"),my_games_tip:i("{-tooltip:} Your games, organized by you"),set_up_title:i("Set Up"),move_number:i("Move number:"),who_is_to_play:i("Who is to play:"),more:i("{-button}More options"),less:i("{-button}Less..."),castling_rights:i("Castling rights:"),en_passant_square:i("En Passant square:"),halfmove_clock:i("Fifty-move rule:"),halfmove_tip:i("Set how many plies were played since the last pawn move or capture"),Clear_btn_tip:i("{-tooltip:} A clear board with two kings"),Start_Pos_btn_tip:i("{-tooltip:} The game start position"),Undo_btn_tip:i("{-tooltip:} Undo the effect of the Clear or Start Position buttons"),arr_base:i("The best move and main threat"),arr_threat:i("All major threats"),arr_findbest:i("The player's plan and the problem facing it"),arr_attention:i("Pay attention to"),arr_local:i("Threats along an explanation's path"),share_dlg_title:i("{-Dialog title:} Share"),share_on_twitter:i("{-tooltip:} Share on Twitter"),share_on_facebook:i("{-tooltip:} Share on Facebook"),share_on_linkedin:i("{-tooltip:} Share on LinkedIn"),share_or_copy:i("Or copy the URL to share it"),copy_the_url:i("{-tooltip:} Copy the URL"),copy_the_fen:i("{-tooltip:} Copy the position (in FEN format)"),copy_position:i("{-button:} Copy position"),fen_copied:i("{-Popup message} Position copied"),twitter_text:i("{-Text for twitter} Check out the explanation DecodeChess generated for my chess game:"),decode_game:i("{-center button:} Decode game"),decode_game_short:i("{-center button:} Decode"),decode_game_tip:i("{-tooltip for Decode Game:} Generate short explanations for all the moves in the game"),plus_tip:i('{-tooltip for "+":} Explain the position on the board in depth'),reset_tip:i("{-tooltip:} Return to the decoded position"),dig_deeper:i("{-Button under shallow explanation} Dig Deeper"),dig_deeper_tip:i("{-tooltip for Dig Deeper button:} Explain this position in depth"),explain_which_moves:i("Choose your piece color:"),decode_white:i("{-tooltip:} Decode white's moves"),decode_black:i("{-tooltip:} Decode black's moves"),decode_all:i("{-tooltip:} Decode all moves"),learn_mistakes:i("{-checkbox label:} Learn from my mistakes"),learn_mistakes_info:i("Let me find a better move before I see the explanation"),remember_choices:i("Remember my choices"),Start_Decoding:i("{-button:} Start Decoding"),game_panel:i("{-button, panel clickable title:} Game"),game_graph:i("{-button, panel clickable title:} Graph"),game_stats:i("{-button, panel clickable title:} Game Statistics"),move_info:i("{-button, panel clickable title:} Move Info"),show_more:i("{-tooltip:} Show more"),game_info:i("{-panel clickable title:} Game Info"),game_info_tip:i("{-tooltip:} Show/hide the Game Information panel"),show_stats:i("{-button (limited space - must be short text):} Show Stats"),hide_stats:i("{-same button again:} Hide Stats"),show_stats_tip:i("{-tooltip:} Show/hide the Game Statistics panel"),notable_moves:i("Notable moves:"),inaccuracies:i("Inaccuracies:"),mistakes:i("Mistakes:"),blunders:i("Blunders:"),avg_centipawn_loss:i("Avg centipawn loss:"),cp_loss:i("{-CP=centipawn:} CP loss"),blunder:i("blunder"),mistake:i("mistake"),inaccuracy:i("inaccuracy"),notable_move:i("notable move"),best_alternative:i("Best alternative:"),alternative_move:i("Alternative move:"),decodes_status:i("{-panel clickable title:} Decodes Status"),show_decodes_tip:i("{-tooltip:} Show recommended and decoded positions"),hide_decodes_tip:i("{-tooltip:} Hide recommended and decoded positions"),decodes:i("Decodes:"),no_positions_decoded_yet:i("No positions decoded in this game yet"),Summary:i("{-tab title:} Summary"),Piece_Roles:i("{-tab title:} Piece Roles"),piece_roles_intro:i("{-tab intro text:} Review the functions of each meaningful piece in the decoded position."),Threats:i("{-tab title:} Threats"),threats_before_intro_1:i("{-tab intro text 1:} Opponent threats and their resulting damage."),threats_before_intro_2:i("{-tab intro text 2:} Use the switch to see what is left of each threat after playing the best move."),threats_after_intro_1:i("{-tab intro text 1:} What is left of the opponent threats after playing the best move."),threats_after_intro_2:i("{-tab intro text 2:} Use the switch to see the potential damage of each threat before playing the best move."),Good_Moves:i("{-tab title:} Good Moves"),good_moves_intro:i("{-tab intro text:} The best moves in descending order. Click on each move to learn what it leads to."),Plans:i("{-tab title:} Plans"),plans_intro:i("{-tab intro text:} Learn how the best move supports future player plans."),Concepts:i("{-tab title:} Concepts"),concepts_intro:i("{-tab intro text:} Important positional and tactical motives relevant to the decoded position."),decode_this_game:i("decode this game"),decode_this_pos:i("decode this position"),not_decoded_yet:i("This position hasn't been decoded yet"),Some_quick_stats:i("Here are some quick stats while we decode your game."),This_game_opens:i("This game features {opening}."),White_made_wrong_moves_fewer:i("White made a total of {number1} wrong moves, {number2} fewer than the opponent."),Black_made_wrong_moves_fewer:i("Black made a total of {number1} wrong moves, {number2} fewer than the opponent."),White_made_wrong_moves_more:i("White made a total of {number1} wrong moves, {number2} more than the opponent."),Black_made_wrong_moves_more:i("Black made a total of {number1} wrong moves, {number2} more than the opponent."),The_avg_cp_White_better:i("The average score loss in centipawns for White is {loss}, which is {advantage} better than the opponent."),The_avg_cp_Black_better:i("The average score loss in centipawns for Black is {loss}, which is {advantage} better than the opponent."),The_avg_cp_White_worse:i("The average score loss in centipawns for White is {loss}, which is {advantage} worse than the opponent."),The_avg_cp_Black_worse:i("The average score loss in centipawns for Black is {loss}, which is {advantage} worse than the opponent."),we_found:i("{-followed by a positive whole number and the word for insights:} We found"),x_insights:i("{-preceded by a number:} insights"),one_insight:i('{-preceded by "we found":} one insight'),start_reviewing_game:i("{-button:} Start reviewing the game"),problem_decoding:i("There was a problem decoding this move"),developers_notified:i("Our developers were notified and will fix the problem as soon as possible."),threats_status:i("THREATS STATUS"),before:i("Before"),after:i("After"),playing:i("playing"),has_no_good_moves:i("{-White/Black...} has no good moves in this position"),best_play_hdr:i("Best Play"),player_plans_hdr:i("Player Plans"),none_found:i("None found"),explaining_best_line:i("Explaining the best line"),Major_threats_hdr:i("Major threats"),See_the_best_play:i("See the best play..."),See_the_best_cont:i("See the best continuation..."),key_moments:i("Insights"),next_key_moment:i("{-tooltip} Next insight"),prev_key_moment:i("{-tooltip} Previous insight"),Tutor_title:i("Decoding complete"),Ready_start_learning:i("Ready to start learning?"),Go_first_key_moment:i("Go to first insight"),No_insights:i("No insights found"),Gg_smiley:i("Good game! :)"),Show_me_why:i("{-clickable title} Show me why"),Hide_explanation:i("{-clickable title} Hide the explanation"),Explain_the_best_move:i("{-clickable title} Explain the best move"),Thats_best_move:i("{-preceded by a move:} is the best move!"),Theres_better_move:i("There's a better move"),Go_back:i("{-clickable title} Try another move"),Try_better_move:i("Try playing a better move"),Start_learning:i("Learn from my mistakes"),Stop_learning:i("Stop learning from my mistakes"),learning_turned_off:i("Learning turned off"),Congrats:i("Congratulations!"),Youve_reviewed_all:i("You've finished reviewing this game."),arrows:i("Configure the Arrows"),arrows_tip:i("{-tooltip:} Adjust the arrow intensity"),hide_arrows_tip:i("{-tooltip:} Adjust the arrows intensity"),play_here:i("{-button} Play from here"),play_here_tip:i("{-tooltip:} Start playing from the position on the board"),set_up_2_tip:i("{-tooltip:} Set Up the board"),rotate_tip:i("{-tooltip:} Flip the board"),more_actions:i("{-tooltip:} More actions"),game_start_tip:i("{-tooltip:} Go back to the game start"),game_back_tip:i("{-tooltip:} Go back one half-move in the game"),game_forward_tip:i("{-tooltip:} Go forward one half-move in the game"),game_end_tip:i("{-tooltip:} Go to the game end"),legend_tip:i("{-tooltip:} Show a legend"),material_tip:i("{-tooltip:} Material balance"),whose_turn_tip:i("{-tooltip:} Whose turn it is"),promote_tip:i("{-tooltip:} Select the piece to promote to"),white_turn:i("White's turn"),black_turn:i("Black's turn"),legend_title:i("{-title:} DecodeChess Legend"),dgame_legend:i("{-legend explanation:} Explains the engine’s recommended moves for the entire game"),dpos_legend:i("{-legend explanation:} Explains the current position in depth"),reset_legend:i("{-legend explanation:} Reset the board position"),bullet_legend:i("{-legend explanation:} Click on the bullet point to reset the variation"),weight_legend:i("{-legend explanation:} A bigger blue part means a more important item"),bestex_legend:i("{-legend explanation:} There’s an explanation for the best move"),yellowplus_legend:i("{-legend explanation:} Click on this line to see examples"),posex_legend:i("{-legend explanation:} There’s an explanation for the entire position"),newex_legend:i("{-legend explanation:} This is a decoded position that hasn’t been viewed yet"),goodmove_legend:i("{-legend explanation:} Notable move"),inaccuracy_legend:i("{-legend explanation:} Inaccuracy"),mistake_legend:i("{-legend explanation:} Mistake"),blunder_legend:i("{-legend explanation:} Blunder"),arrowplan_legend:i("{-legend explanation:} Player's ideas and plans"),arrowthreat_legend:i("{-legend explanation:} Opponent's threats"),arrowgoodmove_legend:i("{-legend explanation:} Player's good moves"),arrowxray_legend:i("{-legend explanation:} Xray"),arrowresponse_legend:i("{-legend explanation:} Moves blocked by opponent threats"),arrowrole_legend:i("{-legend explanation:} Piece roles"),arrowplayed_legend:i("{-legend explanation:} Played move in Decode Game: blunder, mistake, inaccuracy, good move"),rotate_legend:i("{-legend explanation:} Flip the board"),switch_legend:i("{-legend explanation:} Switch between FEN and Stockfish analysis"),fish_legend:i("{-legend explanation:} Stockfish engine analysis"),autofish_legend:i("{-legend explanation:} Stockfish engine analysis is in auto-run mode"),setup_legend:i("{-legend explanation:} Board setup"),play_here_legend:i("{-legend explanation:} Start playing against the computer from the current position"),prev_next_legend:i("{-legend explanation:} Show the previous/next explained position"),delta_legend:i("{-legend explanation:} Click this to see more moves"),bottom_switcher_tip:i("{-tooltip:} Switch between Engine Analysis and FEN"),engine_tip:i("{-tooltip:} Run a simple chess engine analysis using Stockfish"),FEN:i("FEN"),play_dlg_title:i("{-dialog title 1:} Play our human-like opponent"),play_dlg_subtitle:i("{-dialog title 2:} that adapts to your own level"),play_options_tip:i("{-tooltip:} Play Options"),choose_your_color:i("Choose your color:"),you_are_white:i("{-tooltip:} You play white, the computer plays black"),you_are_black:i("{-tooltip:} You play black, the computer plays white"),Random_color:i("{-tooltip:} Random color"),you_are_both:i("No opponent. You move both piece colors"),Resign:i("{-button:} Resign"),Resign_tip:i("{-tooltip:} Resign and lose the game"),Offer_Draw:i("{-button:} Offer Draw"),Offer_Draw_tip:i("Offer a draw, ending the game with 1/2-1/2"),Quit_Playing:i("{-button:} Quit Playing"),Quit_Playing_tip:i("{-tooltip:} Stop playing the game without a result"),Difficulty_level:i("Difficulty level:"),Easy:i("{-button:} Easy"),Hard:i("{-button:} Hard"),Your_Level:i("{-button:} Your Level"),Your_Level_tip:i("{-tooltip:} The computer will sense your level and adapt itself accordingly"),Single_click_moves:i("{-checkbox label:} Auto-move"),Single_click_moves_tip:i("{-tooltip:} A single mouse click will move the piece automatically to or from the only legal square"),Learn_computer_opponent:i("Learn about the Computer Opponent"),Start_Playing:i("{-button:} Start Playing"),loading_msg:i("Loading..."),invalid_position_msg:i("Invalid position"),your_turn_msg:i("Your turn"),computers_turn_msg:i("Computer's turn"),game_paused_msg:i("Game paused"),resume_game:i("{-button:} Resume game"),black_resigns_msg:i("{-This message appears when the game ends due to Black resigning} Black resigns"),white_resigns_msg:i("{-This message appears when the game ends due to White resigning} White resigns"),black_wins_msg:i("{-This message appears when the game ends due to Black winning} Black wins"),white_wins_msg:i("{-This message appears when the game ends due to White winning} White wins"),stalemate_msg:i("Stalemate"),draw_msg:i("Game ended in a draw"),you_win_msg:i("You win"),computer_wins_msg:i("Computer wins"),wishes_to_resign:i("{-White/Black...} wishes to resign."),do_you_accept:i("Do you accept?"),accept_tip:i("{-tooltip:} Accept the resignation and win the game"),reject_tip:i("{-tooltip:} Continue playing"),no_decode_in_intro_msg:i("Cannot decode positions in the introduction example"),join_dc_for_free:i("Join DecodeChess for Free"),open_account_and_enjoy:i("Open an account and enjoy:"),unlimited_48h:i("Unlimited access for 48 hours"),access_all_features:i("Access all features and see the benefits of our AI-powered explanations."),one_decode_per_day:i("1 Decode Game per day"),you_get_1_decode_per_day:i("You get 1 Decode Game credit per day after 48 hours."),get_human_explanation:i("Get Human Explanations to any chess move!"),sign_up:i("Sign up"),To_decode_need_acc:i("{-followed by link} To decode your game, you must have a DecodeChess account. Make sure to create one on"),Join_community:i("{-title} Join the Decodechess Community for Free"),Full_name:i("{-Field label} How should we call you?"),Your_email:i("{-Field label} Enter your Email"),Create_password:i("{-Field label 1st line} Create your account password."),Password_must_be:i("{-Field label 2nd line} Your password must be at least 8 characters long."),Confirm_password:i("{-Field label} Confirm your password"),agree_receive_updates:i("{-Checkbox label} I agree to receive product updates, video tutorials, and special offers"),agree_tos:i("{-Checkbox label} I have read and agree to the {terms and conditions}"),must_name:i("{-Error message} Please enter a name or nickname"),email_invalid:i("{-Error message} This email is invalid"),email_taken:i("{-Error message} This email is already taken"),must_password:i("{-Error message} Password must be at least 8 characters long"),password_doesnt_match:i("{-Error message} Passwords don't match"),Pls_agree_tos:i("{-Error message} Please accept our Terms ans Conditions to use DecodeChess"),Create_acc:i("{-button} Create Free Account"),Signup_failed:i("Signup failed. Please try again later."),Thanks_joining:i("Thank you for joining!"),feedback_hdr:i("{-dialog header:} Help us provide a better experience"),contact_us_hdr:i("{-dialog header:} We are here to help 24/7"),message_is_empty_msg:i("{-Error message:} Please write a message"),sending_msg:i("Sending..."),message_sent_msg:i("Message sent. Thank you!"),Preferences:i("Preferences"),Layout:i("Layout"),Dark_mode:i("Dark mode:"),Sys_default:i("System default"),Sound:i("Sound:"),Auto_move:i("Auto move:"),Game_panel_position:i("Game panel position:"),Left:i("{-left hand side:} Left"),Right:i("{-right hand side:} Right"),Center:i("Center"),Auto_move_on_tip:i("{-tooltip:} A move can be played with a single click if there is only one possibility"),Auto_move_off_tip:i("{-tooltip:} Playing a move always requires two clicks"),Key_moments_pref:i("Insights:"),show_top_5:i("Show top 7"),show_top_10:i("Show top 15"),show_all:i("{-setting:} Show all"),error_in_pgn_msg:i("Error in PGN file"),error_in_pgn_text_msg:i("Error in PGN text"),cannot_read_files_msg:i("This browser cannot read local files. Try to copy/paste the file contents instead."),please_select_game_msg:i("Please select a game"),not_a_pgn_msg:i("This does not look like a PGN file."),feedback_intro_1:i("Your feedback is very important to us. Please feel free to write about: difficulties; missing features; level of satisfaction; how to use DecodeChess."),feedback_intro_2:i("We promise to read, internalise, and respond in reasonable time frames."),contact_intro:i("If there's anything you need, don't hesitate to contact us and we will get back to you within less than 24 hours."),feedback_email:i("{-form field:} Email"),feedback_subject:i("{-form field:} Subject"),feedback_text:i("{-form field:} Text"),send_btn:i("{-button:} Send"),no_suggestions:i("No decode suggestions in this game yet"),suggestions_hdr:i("Decode suggestions:"),suggestions_hdr_tip:i("{-tooltip:} Select a position from the game or from the list below, then press DECODE."),suggestions_filter_tip:i("Filter shown decode suggestions by color or by move type"),suggestions_filter_white_tip:i("{-tooltip:} Show White's turn only"),suggestions_filter_black_tip:i("{-tooltip:} Show Black's turn only"),suggestions_filter_both_tip:i("{-tooltip:} Show both white and black turns"),suggestions_filter_both:i("{-button (white moves/black moves/both):} Both"),suggestions_end:i("end"),game_actions_title:i("{-popup menu title:} Game Actions"),ga_play_fm_here:i("{-button:} Play From Here"),ga_play_fm_here_tip:i("{-tooltip:} Continue the game from the current position against the computer"),ga_setup:i("{-button:} Set Up"),ga_setup_tip:i("{-tooltip:} Enter/exit board set-up mode"),gm_best_move:i("{-Tooltip:} The best move in this position"),checkmate:i("{-This appears under the graph when the selected move is a checkmate:} checkmate"),mate_in:i("{-This appears under the graph (with a number of moves) when the selected move results in an imminent mate:} mate in"),Decoded:i("{-This appears under the graph when the selected move has a deep explanation:} Decoded"),Insight:i("{-appears under graph when selected move is a insight:} Insight"),pls_login_history:i("Please log in to view your games"),err_upd_game_name_msg:i("Failed to update the game name"),err_upd_tags_msg:i("Failed to update the game tags"),cannot_show_game_msg:i("Cannot show this game"),h_my_games:i("{-History dialog title:} My Games"),trash_tip:i("{-tooltip:} Delete all the selected games. This action cannot be undone."),h_filter:i("Filter..."),h_filter_tip:i("{-tooltip:} See only games that match this text. Search in game name, tags, date, details."),h_showing_n_games:i("Showing {num_shown} games"),h_showing_n_of_m_games:i("Showing {num_shown} of {num_total} games"),Rename:i("{-button:} Rename"),Rename_tip:i("{-tooltip:} Rename the selected game"),Edit_Tags:i("{-button:} Edit Tags"),Edit_Tags_tip:i("{-tooltip:} Edit the selected game's tags"),delete_tip:i("{-tooltip:} Delete this game. This action cannot be undone."),Tags:i("{-table column title:} Tags"),Updated:i("{-table column title:} Last Viewed"),Origin:i("{-table column title:} Origin"),Game_Date:i("{-table column title:} Game Date"),New_tag___:i("{-button:} New tag..."),Add:i("{-button:} Add"),progress_bar_opening:i("Opening..."),progress_bar_deleting:i("Deleting..."),confirmation_dialog_delete_games:i("Delete games?"),confirmation_dialog_will_be_deleted:i("{} games will be deleted."),confirmation_dialog_delete_q:i("Delete?"),Players:i("Players"),Opening:i("Opening"),FromDate:i("From date"),ToDate:i("Until date"),Today:i("Today"),MondayShort:i("Mon"),TuesdayShort:i("Tue"),Wednesday:i("Wed"),Thursday:i("Thu"),Friday:i("Fri"),Saturday:i("Sat"),Sunday:i("Sun"),DropdownEmpty:i("No items to display"),Event:i("{-game info field name:} Event"),Site:i("{-game info field name:} Site"),Date:i("{-game info field name:} Date"),Event_Date:i("{-game info field name:} Event Date"),Round:i("{-game info field name:} Round"),Result:i("{-game info field name:} Result"),ECO:i("{-game info field name:} ECO"),WhiteElo:i("{-game info field name:} WhiteElo"),BlackElo:i("{-game info field name:} BlackElo"),PlyCount:i("{-game info field name:} PlyCount"),intro_1_1:i("Welcome to DecodeChess!"),intro_1_1b:i("Here's an example:"),intro_1_2:i("In this position, chess programs recommend playing"),intro_1_3:i("but they don't tell you why."),intro_1_4:i("Can you tell?"),intro_1_5:i("DecodeChess answer..."),intro_2_1:i("According to DecodeChess,"),intro_2_2:i("is recommended because it:"),intro_2_3:i("- removes the queen from an"),intro_2_4:i("unsupported square"),intro_2_5:i("- defends the two"),intro_2_6:i("unsupported rooks"),intro_2_7:i("- enables the threat of"),intro_2_8:i("winning the knight"),intro_2_9:i("Press"),intro_2_10:i("to see the full explanation."),intro_3_1:i("These are the moves recommended by the chess engine."),intro_3_2:i("Click any underlined move to see how we explain its pros and cons."),intro_4_1:i("Here we instruct you on how to find the best move by yourself."),intro_4_2:i("Click on"),intro_mob_1_1:i("Play against a human-like computer opponent and get detailed explanations."),intro_mob_1_2:i("Load your games into the app to decode them."),intro_mob_2_1:i("Tap the Decode button to get the explanation."),intro_mob_3_1:i("Expand your understanding by tapping the arrows on the board."),intro_mob_3_2:i("Note that you must create an account to decode games."),intro_mob_4_1:i("You can also scroll the explanation area, or explore the utility panels."),Idea:i("Idea"),Problem:i("Problem"),or:i("or"),Solution:i("Solution"),to_see_on_board:i('{-("them" refers to idea, problem or solution)} to see them on the board.'),click_tabs_for_more:i("Click on other tabs to discover more."),try_decoding:i("Try decoding a position yourself by opening a new tab."),no_decodes_yet:i("No positions decoded yet"),pls_verify_email:i("Please verify your email address to view this explanation."),click_emailed_link:i("Just click the link emailed to you when you subscribed."),Please:i("Please"),sign_up_for_free:i("Sign Up for free"),log_in:i("log in to your account"),to_decode:i("to decode games and positions."),sign_up_and_get:i("Sign up and get:"),fourteen_days:i("14 days of unlimited decode sessions"),lifetime_oppo:i("Lifetime access to our computer opponent"),the_most_human:i("The most human-like computer opponent you'll ever meet!"),lifetime_stockfish:i("Lifetime Stockfish engine analysis"),friendly_fish:i("Friendly chess analysis by Stockfish. Look for the fish icon!"),Subscribe:i("Subscribe"),sign_free_trial:i("Sign Up for a free trial"),to_view_ex:i("to view this explanation."),Click:i("Click"),Decode:i("Decode"),to_explain_this:i("to explain this position."),youve_used_daily:i("You've used your daily quota of free decodes."),your_free_trial_has_ended:i("Your free trial has ended."),your_plan_has_ended:i("Your plan has ended."),You_can:i("You can"),upgrade:i("upgrade"),to_enjoy:i("to enjoy unlimited Decodes"),youve_used_all:i("Sorry, you have used all your decodes."),your_subs:i("your subscription."),coupon:i("Use the coupon DECODENOW to get 25% off the 1st year of our annual subscription!"),pos_not_valid:i("This position is not valid"),decode_failed:i("Sorry, decoding failed"),white_not_decoded:i("White's moves have not been decoded."),black_not_decoded:i("Black's moves have not been decoded."),decode_this_color:i("{-text button:} decode all of this player's moves"),decode_this_move:i('{-text button, following "or":} decode this move'),Decoding_of:i("Decoding of"),Decoding:i("Decoding"),in_progress:i("in progress"),conn_problem:i("We are having a temporary connection problem"),it_takes_90:i("It takes around 90 seconds to complete a decode process."),preliminary_soon:i("Preliminary results will show up shortly."),decode_another:i("Feel free to Decode another position in the meanwhile, either from"),this_game_or:i("this game or from a new one. It will not override this Decoding."),ty_for_patience:i("Thank you for your patience."),we_are_working:i("We are working on completing your Decode process."),dgame_is_45sec:i("It takes around 45 seconds to decode a game."),fish_title:i("Engine Analysis"),fish_tip_1:i("{-tooltip line 1:} Run a simple chess engine analysis using Stockfish."),fish_tip_2:i("{-tooltip line 2:} A 2nd click starts automatic mode, and a 3rd stops it."),fish_tip_3:i("{-tooltip line 3:} Press Space to play the engine's recommendation."),not_valid_pos:i("Not a valid position"),White_wins_in:i("White wins in"),Black_wins_in:i("Black wins in"),White_has_won:i("White has won"),Black_has_won:i("Black has won"),depth:i("depth"),Hi:i("Hi,"),we_noticed_mobile:i("We noticed you're using a mobile device."),note_partial_features:i("Please note that some important features are only available in desktop mode."),sign_up_for_free:i("Sign Up For Free"),delete_from_here:i("{-button:} Delete from here"),delete_from_here_tip:i("{-tooltip:} Delete this move and everything after it"),delete_variation:i("{-button:} Delete variation"),delete_variation_tip:i("{-tooltip:} Delete this whole variation"),promote_variation:i("{-button:} Promote variation"),promote_variation_tip:i("{-tooltip:} Swap this variation with its parent"),save_to_file:i("{-button:} Save to file"),save_to_file_tip:i("{-tooltip:} Save the game to a local file in PGN format"),Open_game_file:i("{-title} Open a game file"),import_game_or_pos:i("Import Game"),Import_game:i("{-title} Import a game"),Select_source:i("Select source:"),import_from_lichess:i("Import from Lichess"),lichess_username:i("{-placeholder in text box} Lichess username"),import_lichess_tip:i("{-tooltip:} Get recent games from Lichess"),import_from_chesscom:i("Import from chess.com"),chesscom_username:i("{-placeholder in text box} Chess.com username"),import_lichess_tip:i("{-tooltip:} Get recent games from chess.com"),local_file:i("File (*.pgn)"),paste_pgn:i("Paste (pgn or fen)"),failed_to_import:i("Importing failed. Please try again later."),no_lichess_games:i("Lichess does not have any recent games."),no_chesscom_games:i("Chess.com does not have any recent games."),Paste_game_or_pos:i("{-title} Paste a game or a position"),Example_Games:i("{-title} Example Games"),drop_or_paste:i("{-watermark line 1:} Drop or paste"),your_game_here:i("{-watermark line 2:} your game here"),paste_here:i("{-watermark for paste only:} Paste your game here"),acceptable_formats:i("{-watermark line 3:} Acceptable formats: PGN and FEN"),load_pgn_file:i("{-button:} Load PGN File"),load_pgn_file_tip:i("{-tooltip:} Import a game (*.pgn) file from your computer"),large_file_notice:i("Large file processing can take a while."),results_here:i("You can see result here."),Game_name:i("Game name"),More___:i("More..."),in_depth_is_premium:i("In-depth Explanations are a Premium Feature"),want_more_creditsQ:i("Want more Decode Credits?"),upgrade_and_enjoy:i("Upgrade to Premium and Enjoy:"),more_credits:i("More Decode Credits"),choose_a_plan:i("Choose a plan that fits your needs, from as little as $15!"),improve_by_understanding:i("Improve by Understanding"),dc_explains_the_why:i("DecodeChess explains the Why and How behind chess, making you a wiser chess player."),train_and_learn:i("Train & Learn"),get_exp_while_playing:i("Get Explanations while you play against our human-like computer opponent."),twenty4_7_coach:i("24/7 AI Chess Coach"),get_non_stop_explanations:i("Get non-stop Human Explanations for the price of a chess lesson!"),Go_Premium:i("{-button} Go Premium"),No_thanks:i("{-button} No thanks"),See_benefits:i("{-button} See all Premium benefits"),user_move_is_premium:i("These Explanations are a Premium Feature"),Learn_more:i("Learn more about this feature")},r={},l={},p="";function d(e){_.each(s,function(t,o){var a=e[t];l[o]=a||t})}function m(e,t){_.each(_.keys(r),function(e){r[e]=null}),r.name=e,r.dir="ltr",_.each(t,function(e,t){r[t]=e})}return d({}),m("english",{name:"English"}),t.i18n=l,t.i18n_dir=r.dir,t.$watch("currentUser.lang",function(e){var o,n,i;e!=p&&(i={l:o=e},a.call("get_ui_dict",i,null,null,function(e){o=e.lang,"ok"==e.status&&o&&o==t.currentUser.lang&&(p=o,d(e.dict),m(o,e.props),t.i18n_dir=r.dir,n&&n())},function(e){}))}),{phrases:l}}]);
