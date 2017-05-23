(function(){define("modules/clean/account_photo_modal/account_header",["jquery","require"],function(e,t){return(function(){function n(){}return n.init=function(n,a,_){return e(n).add(a).on("click",function(e){return e.preventDefault(),t(["modules/clean/account_photo_modal/controller"],function(e){return e.show()})}),e(document).on("db:account_photo:photo_set",function(t){return e(a).addClass(_)}),e(document).on("db:account_photo:photo_deleted",function(t){return e(a).removeClass(_)})},n.initialize_module=function(e){return n.init(e.open_modal_button_selector,e.add_photo_link_selector,e.hide_add_photo_link_class)},n})()})}).call(this),function(){define("modules/clean/dropbox_nav",["jquery","modules/clean/analytics","modules/clean/photos/photos_engagement_logger"],function(e,t,n){return(function(){function a(){e(".carousel-nav-item").click((function(e){return function(){return e.log_click("carousel_nav_link_click")}})(this)),e(".composer-nav-item").click((function(e){return function(){return e.log_click("composer_nav_link_click")}})(this)),e(".mailbox-nav-item").click((function(e){return function(){return e.log_click("mailbox_nav_link_click")}})(this)),e(".carousel-nav-item").click(function(){return n.log_and_send(n.CAROUSEL_NAV_LINK_CLICK)}),e(".photos-nav-item").click(function(){return n.log_and_send(n.PHOTOS_NAV_LINK_CLICK)})}return a.prototype.log_click=function(e){return t.WebMiscActivityLogger.log(e)},a})()})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define("modules/clean/growth/admin_console_ad",["jquery","modules/clean/analytics","modules/clean/dbmodal","modules/core/browser"],function(t,n,a,_){return(function(){function r(n,_,r){this.cta_selector=r,this._handleLinkClick=e(this._handleLinkClick,this),this.modal=new a.DBModal({element_id:_}),t(n).click(this._handleLinkClick)}return r.prototype._handleLinkClick=function(e){return e.preventDefault(),n.TeamsWebActionsLogger.log("click_admin_console_ad"),this.modal.show(),t(this.cta_selector).off(),t(this.cta_selector).click(this._handleCTAClick)},r.prototype._handleCTAClick=function(e){var a;return e.preventDefault(),a=t(e.target).attr("href"),n.TeamsWebActionsLogger.log("click_admin_console_ad_cta",{},function(){return _.redirect(a)})},r})()})}.call(this),function(){define("modules/clean/photos/photos_engagement_logger",["jquery","modules/clean/ajax"],function(e,t){return(function(){function n(){}return n.Platform={WEB:"web",WEB_CAROUSEL:"web_carousel"},n.CAROUSEL_NAV_LINK_CLICK="carousel_nav_link_click",n.PHOTOS_NAV_LINK_CLICK="photos_nav_link_click",n.WEBAPP_VIEW_TIMELINE="webapp_view_gallery",n.WEBAPP_VIEW_ALBUMS_GRID="webapp_view_albums_grid",n.WEBAPP_VIEW_ALBUM="webapp_view_albums",n.WEBAPP_ACTION_ADD_TO_ALBUM="webapp_action_add_to_album",n.WEBAPP_ACTION_REMOVE_FROM_ALBUM="webapp_action_remove_from_album",n.WEBAPP_ACTION_DOWNLOAD="webapp_action_download",n.WEBAPP_ACTION_SHOW_IN_FOLDER="webapp_action_show_in_folder",n.WEBAPP_ACTION_DELETE="webapp_action_delete",n.WEBAPP_SHOW_EXCLUDE_MODAL="webapp_show_exclude_modal",n.ATTEMPT_EXCLUDE_CU_FOLDER="attempt_exclude_cu_folder",n.ATTEMPT_EXCLUDE_DROPBOX_ROOT="attempt_exclude_dropbox_root",n.WEBAPP_GALLERY_SELECT_EVENT="webapp_gallery_select_event",n.WEBAPP_GALLERY_DESELECT_EVENT="webapp_gallery_deselect_event",n.WEBAPP_GALLERY_SELECT_ITEM="webapp_gallery_select_item",n.WEBAPP_GALLERY_DESELECT_ITEM="webapp_gallery_deselect_item",n.WEBAPP_GALLERY_TIME_FIRST_ITEM="webapp_gallery_time_first_item",n.WEBAPP_GALLERY_TIME_EVENTS_OUTLINE="webapp_gallery_time_events_outline",n.WEBAPP_GALLERY_TIME_FIRST_VISIBLE_EVENTS="webapp_gallery_time_first_visible_events",n.WEBAPP_GALLERY_TIME_FIRST_VISIBLE_THUMBS_BATCH="webapp_gallery_time_first_visible_thumbs_batch",n.WEBAPP_GALLERY_EMPTY="webapp_gallery_empty",n.WEBAPP_GALLERY_CONTEXT_MENU_SHOWN="webapp_gallery_context_menu_shown",n.WEBAPP_LIGHTBOX_OPEN="webapp_lightbox_open",n.WEBAPP_LIGHTBOX_DOWNLOAD="webapp_lightbox_download",n.WEBAPP_LIGHTBOX_SELECT_ITEM="webapp_lightbox_select_item",n.WEBAPP_LIGHTBOX_DESELECT_ITEM="webapp_lightbox_deselect_item",n.WEBAPP_LIGHTBOX_FORWARD="webapp_lightbox_forward",n.WEBAPP_LIGHTBOX_BACK="webapp_lightbox_back",n.WEBAPP_LIGHTBOX_SHARE="webapp_lightbox_share",n.WEBAPP_LIGHTBOX_CLOSE_ICON="webapp_lightbox_close_icon",n.WEBAPP_LIGHTBOX_CLOSE_KEY="webapp_lightbox_close_key",n.WEBAPP_TIMELINE_NAVIGATION_SHOWN="webapp_timeline_navigation_shown",n.WEBAPP_TIMELINE_NAVIGATION_TRACK_CLICKED="webapp_timeline_navigation_track_clicked",n.WEBAPP_TIMELINE_NAVIGATION_SCRUBBER_DRAGGED="webapp_timeline_navigation_scrubber_dragged",n.WEBAPP_SHARE_CART_CANCEL="webapp_share_cart_cancel",n.WEBAPP_SHARE_CART_SHARE="webapp_share_cart_share",n.WEBAPP_SHARE_CART_SHARE_FACEBOOK="webapp_share_cart_share_facebook",n.WEBAPP_SHARE_CART_SHARE_TWITTER="webapp_share_cart_share_twitter",n.WEBAPP_SHARE_CART_ITEM_CLICKED="webapp_share_cart_item_clicked",n.WEBAPP_SHARE_DROPDOWN_SEND_LINK="webapp_share_dropdown_send_link",n.WEBAPP_SHARE_DROPDOWN_SHARED_ALBUM="webapp_share_dropdown_shared_album",n.WEBAPP_OPEN_SHARE_MODAL="webapp_open_share_modal",n.WEBAPP_GALLERY_DELETE_MODAL_CONFIRMED="webapp_gallery_delete_modal_confirmed",n.WEBAPP_GALLERY_DELETE_MODAL_CANCELED="webapp_gallery_delete_modal_canceled",n.WEBAPP_GALLERY_REMOVE_FROM_ALBUM_MODAL_CONFIRMED="webapp_gallery_remove_from_album_modal_confirmed",n.WEBAPP_GALLERY_REMOVE_FROM_ALBUM_MODAL_CANCELED="webapp_gallery_remove_from_album_modal_canceled",n.WEBAPP_SHARE_COMPOSER_LINK="webapp_share_composer_link",n.first_log_sent=!1,n.logs_queued=[],n.HACK_prefix_to_replace=null,n.HACK_prefix_replace_with=null,n.HACK_new_platform=null,n.HACK_extra={},n.hack_all_log_prefixes_and_platform=function(e){var t,a,_,r;return r=e.prefix_to_replace,_=e.prefix_replace_with,a=e.new_platform,t=e.extra,n.HACK_prefix_to_replace=r,n.HACK_prefix_replace_with=_,n.HACK_new_platform=a,n.HACK_extra=t},n.apply_hacky_log_overrides=function(t,a,_){var r,i;return n.HACK_prefix_to_replace?(i=0===t.indexOf(n.HACK_prefix_to_replace)?t.replace(n.HACK_prefix_to_replace,n.HACK_prefix_replace_with):0!==t.indexOf(n.HACK_prefix_replace_with)?n.HACK_prefix_replace_with+t:t,r=e.extend({},_,this.HACK_extra),[i,n.HACK_new_platform,r]):[t,a,_]},n.log_and_send=function(e,a,_){var r;return null==a&&(a={}),null==_&&(_=n.Platform.WEB),r=n.apply_hacky_log_overrides(e,_,a),e=r[0],_=r[1],a=r[2],t.SilentBackgroundRequest({url:"/photos/photos_engagement_log",data:{event:e,extra:JSON.stringify(a),platform:_}})},n.log=function(e,t,a){var _,r;return this._init(),n.first_log_sent?(null==t&&(t={}),null==a&&(a=n.Platform.WEB),r=n.apply_hacky_log_overrides(e,a,t),e=r[0],a=r[1],t=r[2],_={event:e,extra:t,platform:a},n.logs_queued.push(_)):(n.log_and_send(e,t,a),void(n.first_log_sent=!0))},n.log_carousel=function(e,t){return n.log(e,t,n.Platform.WEB_CAROUSEL)},n._send_log_batch=function(){if(n.logs_queued.length)return t.SilentBackgroundRequest({url:"/photos/photos_engagement_batch_log",data:{events:JSON.stringify(n.logs_queued)}}),n.logs_queued=[]},n._init=function(){if(!this._initialized)return this._initialized=!0,setInterval(n._send_log_batch,1e4),e(window).unload(n._send_log_batch)},n})()})}.call(this),function(){define("modules/clean/teams/limited_team_invite_modal",["external/underscore","external/react","modules/core/html","modules/core/uri","modules/core/i18n","modules/core/notify","modules/clean/ajax","modules/clean/contacts/contact","modules/clean/react/modal","modules/clean/teams/limited_team_invite_form","modules/clean/viewer","modules/clean/analytics"],function(e,t,n,a,_,r,i,o,l,s,c,u){var m,d,p,f,h,E,g;return f=_._,E=_.ungettext,m=o.Contact,d=l.Modal,p=u.TeamsWebActionsLogger,t.DOM,h=t.PropTypes,g=c.get_viewer(),t.createClass({displayName:"LimitedTeamInviteModal",propTypes:{onInvited:h.func,onDismiss:h.func,populatedCustomMessage:h.string,populatedContacts:h.arrayOf(h.instanceOf(m)),memberInviteLimit:h.number,maxTeamSize:h.number},getInitialState:function(){return{canProceed:!1,submitting:!1}},_canProceed:function(){var e,t;return(null!=(e=this.refs.members)?e.areAllContactsValid():void 0)&&!(null!=(t=this.refs.members)?t.isEmpty():void 0)},onClickInvite:function(t){return t.preventDefault(),this.refs.members.getFinalData((function(t){return function(_){var o,l,s;if(s=_.emails,l=_.custom_message,o=t._canProceed(),t.setState({canProceed:o}),o)return t.setState({submitting:!0}),i.WebRequest({url:"/account/team/add_users",subject_user:g.work_user,data:{emails:s,custom_message:l,team_id:g.team_id},complete:function(){if(t.isMounted())return t.setState({submitting:!1})},success:function(_){var i,o,l,s,c,u;return _=JSON.parse(_),o=e.values(_.users),o.length>0?(null!=t.props.memberInviteLimit?(l=t.props.memberInviteLimit-o.length,l>0&&(c={tk:t.props.memberInviteLimit,_camp:"flash"},u=a({path:"/team/upgrade",query:c}),s=E('Members invited. You can invite %(num_rem)s more member before you need to upgrade to Dropbox Business. <a href="%(upsell_url)s">Upgrade now.</a>','Members invited. You can invite %(num_rem)s more members before you need to upgrade to Dropbox Business. <a href="%(upsell_url)s">Upgrade now.</a>',l).format({num_rem:l,upsell_url:u.toString()}),r.success(new n(s)))):r.success(E("Member invited.","Members invited.",o.length)),"function"==typeof(i=t.props).onInvited&&i.onInvited(),t.refs.modal.close()):r.error(f("There was a problem completing this request."))},error:function(e){return"rate-limit"===e.getResponseHeader("x-dropbox-app-error")?r.error(new n(f('%(team_name)s has reached the maximum number of team members allowed on Dropbox Basic. Please <a href="/business/contact">contact sales</a> to add more members to your team.').format({team_name:g.team_name}))):r.error(f("There was a problem completing this request."))}})}})(this))},onDismissModal:function(){var e;return p.log("canceled_invite_team_members"),"function"==typeof(e=this.props).onDismiss?e.onDismiss():void 0},onMembersFormChange:function(){return this.setState({canProceed:this._canProceed()})},_getAcceptButtonText:function(){var e;return E("Send invite","Send invites",(null!=(e=this.refs.members)?e.getContacts().length:void 0)||0)},render:function(){return t.createElement(d,{title:f("Invite members to your team"),acceptButtonText:this._getAcceptButtonText(),dismissButtonText:f("Cancel"),onAccept:this.onClickInvite,onDismiss:this.onDismissModal,acceptButtonDisabled:!this.state.canProceed,submitting:this.state.submitting,className:"limited-team-invite-modal",ref:"modal"},t.createElement(s,{ref:"members",user:g.work_user,onChange:this.onMembersFormChange,errorMessageSpaceFixed:!0,populatedCustomMessage:this.props.populatedCustomMessage,populatedContacts:this.props.populatedContacts,autofocusTokenizer:!0,memberInviteLimit:this.props.memberInviteLimit,maxTeamSize:this.props.maxTeamSize}))}})})}.call(this),function(){define("modules/clean/teams/prop_types",["external/react"],function(e){var t;return t=e.PropTypes,{joinableTeam:t.shape({team_id:t.number,team_name:t.string,num_members:t.number,is_invite:t.bool,is_limited:t.bool,join_request_state:t.number,signup_key:t.string,inviting_user_name:t.string,approver_display_name:t.string,members_to_display:t.arrayOf(t.shape({display_name:t.string.isRequired,avatar_url:t.string}))}),suggestedMember:t.shape({id:t.number,email:t.string,display_name:t.string,avatar_url:t.string}),valueLink:function(e){return null==e&&(e=t.any),t.shape({value:e,requestChange:t.func.isRequired})}}})}.call(this),function(){define("modules/clean/teams/suggest_invites_modal",["external/underscore","external/react","modules/core/i18n","modules/core/notify","modules/clean/ajax","modules/clean/react/modal","modules/clean/teams/limited_team_invite_form","modules/clean/viewer"],function(e,t,n,a,_,r,i,o){var l,s,c,u,m;return s=n._,l=r.Modal,c=t.createElement,u=t.DOM,m=o.get_viewer(),t.createClass({displayName:"SuggestInvitesModal",getInitialState:function(){return{canProceed:!1,submitting:!1}},_canProceed:function(){var e,t;return(null!=(e=this.refs.members)?e.areAllContactsValid():void 0)&&!(null!=(t=this.refs.members)?t.isEmpty():void 0)},onClickInvite:function(e){return e.preventDefault(),this.refs.members.getFinalData((function(e){return function(t){var n,r;if(r=t.emails,n=e._canProceed(),e.setState({canProceed:n}),n)return e.setState({submitting:!0}),_.WebRequest({url:"/team/manage/suggest-members",data:{emails:r},complete:function(){return e.setState({submitting:!1})},success:function(){return a.success(s("Thanks for your suggestions! We’ve sent them to the team admin.")),e.refs.modal.close()}})}})(this))},onMembersFormChange:function(){return this.setState({canProceed:this._canProceed()})},render:function(){return c(l,{className:"no-scroll-modal",title:s("Suggest %(team_name)s team members").format({team_name:m.team_name}),acceptButtonText:s("Send suggestions"),dismissButtonText:s("Cancel"),onAccept:this.onClickInvite,acceptButtonDisabled:!this.state.canProceed,submitting:this.state.submitting,ref:"modal"},u.div({className:"suggest_invite_modal_notice"},s("We’ll email your suggestions to your team admin, so they can send out invitations.")),c(i,{ref:"members",user:m.work_user,onChange:this.onMembersFormChange,errorMessageSpaceFixed:!1,includeCustomMessage:!1,emailPlaceholder:s("Email addresses"),autofocusTokenizer:!0}))}})})}.call(this),function(){define("modules/clean/unity_browse_interface",["jquery","modules/clean/unity/check_file_cache","modules/clean/unity/features"],function(e,t,n){if(null!=t&&null!=n)return(function(){function e(){}return e.BATCH_SIZE_LIMIT=100,e.CHECK_FILES_PADDING=50,e.check_file_callback=function(e){return t.set_batch(e)},e.browse_visible_change_callback=function(t,a,_,r){var i,o,l,s,c,u;if(t.length&&(s=Math.max(0,_-e.CHECK_FILES_PADDING),u=Math.min(t.length-1,r+e.CHECK_FILES_PADDING),o=t.slice(s,+u+1||9e9),l=e._get_files_to_check(o),l.length)){for(e._remove_unneeded_items_from_cache(o),c=[];l.length;)i=l.splice(0,e.BATCH_SIZE_LIMIT),c.push(n.check_file_batch(i,a,e.check_file_callback));return c}},e._get_files_to_check=function(e){var n;return(function(){var a,_,r;for(r=[],a=0,_=e.length;a<_;a++)n=e[a],n.bytes>=0&&t.is_cached_and_locally_available(n.ns_id,n.ns_path)!==!0&&r.push(n);return r})()},e._remove_unneeded_items_from_cache=function(e){var a,_,r,i,o;for(_={},i=0,o=e.length;i<o;i++)r=e[i],t.is_cached_and_locally_available(r.ns_id,r.ns_path)===!0&&(a=t.get(r.ns_id,r.ns_path),_[n.server_path(r.ns_id,r.ns_path)]=a);return t.clear(),t.set_batch(_)},e})()})}.call(this),function(){define("modules/dirty/sharing/sharing_model_modals",["jquery","require","modules/clean/analytics"],function(e,t,n){return{initialize_module:function(a){return n.LegacySharingVortexLogger.log("initialize-sharing-model-modals"),t(["dropbox"],function(t){var n,_;return _=t.SharingModel,n=t.Modal,a.instances.forEach(function(t){return e("#"+t.accept_button_dom_id).on("click",function(e){return _.do_remove(n.vars)}),e("#"+t.cancel_button_dom_id).on("click",function(e){return n.hide()})})})}}})}.call(this);
//# sourceMappingURL=pkg-maestro-ag.min.js-vfluwamMd.map