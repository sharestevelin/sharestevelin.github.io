define(["external/react","external/mcl/icon_template_actionable"],function(e,t){return(function(e){function t(n){if(l[n])return l[n].exports;var i=l[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var l={};return t.m=e,t.c=l,t.p="",t(0)})({0:function(e,t,l){"use strict";function n(e){for(var l in e)t.hasOwnProperty(l)||(t[l]=e[l])}Object.defineProperty(t,"__esModule",{value:!0}),n(l(36))},4:function(t,l){t.exports=e},32:function(e,t,l){"use strict";function n(e){for(var l in e)t.hasOwnProperty(l)||(t[l]=e[l])}Object.defineProperty(t,"__esModule",{value:!0}),n(l(33))},33:function(e,t,l){"use strict";function n(e,t){return function(l){var n=l.name,a=t[n]();return r.createElement(e,i({icon:a},l))}}var i=this&&this.__assign||Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++){t=arguments[l];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});var r=l(4);t.iconComponent=n},36:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(32),i=l(37),r=l(38);t.ICONS=r.ICONS,t.IconAction=n.iconComponent(i.IconTemplateActionable,r.ICONS),t.IconAction.displayName="IconAction"},37:function(e,l){e.exports=t},38:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(4);t.ICONS={"add-comment":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.createElement("title",null,"action-add-comment"),n.createElement("defs",null,n.createElement("path",{d:"M9 10.505C9 9.674 9.675 9 10.498 9h11.004C22.329 9 23 9.663 23 10.491V20.51A1.5 1.5 0 0 1 21.494 22H14l-3.712 2.227c-.712.427-1.288.106-1.288-.732v-12.99z",id:"mc-action-add-comment-a"}),n.createElement("mask",{id:"mc-action-add-comment-b",x:"0",y:"0",width:"14",height:"15.416",fill:"#fff"},n.createElement("use",{xlinkHref:"#mc-action-add-comment-a"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("use",{stroke:"#0070E0",mask:"url(#mc-action-add-comment-b)",strokeWidth:"4",xlinkHref:"#mc-action-add-comment-a"}),n.createElement("path",{d:"M13 14h6v1h-6v-1zm0 2h3v1h-3v-1z",fill:"#99C6F3"}))))},"add-to-collection":function(){return n.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-add-to-collection"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M0 14.498C0 15.328.671 16 1.502 16H7v-2h7V2H2v7H0v5.498zM0 1.505A1.5 1.5 0 0 1 1.505 0h12.99A1.5 1.5 0 0 1 16 1.505v12.99A1.5 1.5 0 0 1 14.495 16H1.505A1.5 1.5 0 0 1 0 14.495V1.505z",fill:"#0070E0",fillRule:"nonzero"}),n.createElement("path",{fill:"#99C6F3",d:"M4 4h8v3H4z"}),n.createElement("path",{stroke:"#0070E0",strokeWidth:"2",d:"M1 11h4v4H1z"}),n.createElement("path",{fill:"#99C6F3",d:"M9 9h3v3H9z"})))},copy:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-copy"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M14.999 23H9.496A1.507 1.507 0 0 1 8 21.495V8.505C8 7.667 8.67 7 9.496 7h5.256H11v2h-1v12h1v2h3.999zM8 12v6h2v-6H8z",fill:"#A2CBF4",fillRule:"nonzero"}),n.createElement("path",{d:"M24 8.505v12.99c0 .838-.67 1.505-1.496 1.505h-9.008A1.507 1.507 0 0 1 12 21.495V8.505C12 7.667 12.67 7 13.496 7h9.008C23.32 7 24 7.674 24 8.505zM14 9v12h8V9h-8zm-2 1v10h2V10h-2z",fill:"#0070E0",fillRule:"nonzero"}),n.createElement("path",{d:"M12 14H9v2h3v3h2v-3h3v-2h-3v-3h-2v3z",fill:"#0070E0"})))},delete:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-delete"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M12 13h-2l.455 10.004c.025.551.494.996 1.047.996h9.996a1.06 1.06 0 0 0 1.047-.996L23 13h-2v8.004c0 .55-.446.996-.998.996h-7.004a.996.996 0 0 1-.998-.996V13zM9 9h15v1.495a.502.502 0 0 1-.5.505h-14a.494.494 0 0 1-.5-.505V9zm5-1c0-.552.444-1 1-1h3c.552 0 1 .444 1 1v1h-5V8z",fill:"#0070E0"}),n.createElement("path",{d:"M14 13h1v7h-1v-7zm2 0h1v7h-1v-7zm2 0h1v7h-1v-7z",fill:"#A2CBF4"})))},download:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-download"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{fill:"#99C6F3",d:"M10 22h12v2H10z"}),n.createElement("path",{d:"M14 14h-2.49c-.282 0-.373.178-.205.397l4.082 5.306c.344.448.887.44 1.226 0l4.082-5.306c.171-.223.077-.397-.205-.397H18V8.503c0-.27-.22-.503-.49-.503h-3.02a.494.494 0 0 0-.49.503V14z",fill:"#0070E0"})))},events:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-events"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M8 10.493C8 9.668 8.667 9 9.505 9h12.99C23.326 9 24 9.664 24 10.493v12.014c0 .825-.667 1.493-1.505 1.493H9.505A1.496 1.496 0 0 1 8 22.507V10.493zM10 13v9h12v-9H10z",fill:"#0070E0"}),n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M12 15h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z",fill:"#A2CBF4"})))},"flag-for-copyright":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.createElement("title",null,"action-flag-for-copyright"),n.createElement("defs",null,n.createElement("path",{d:"M10 8s1.407-.01 2 0c4.049.067 4.383.383 5 1 1 1 1 1 5 1v10c-4 0-5.234-.234-6-1-.841-.841-1.002-.979-4-1-.566-.004-2 0-2 0V8z",id:"mc-action-flag-for-copyright-a"}),n.createElement("mask",{id:"mc-action-flag-for-copyright-b",x:"0",y:"0",width:"12",height:"12.004",fill:"#fff"},n.createElement("use",{xlinkHref:"#mc-action-flag-for-copyright-a"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"#0070E0",d:"M10 8h2v16h-2z"}),n.createElement("use",{stroke:"#0070E0",mask:"url(#mc-action-flag-for-copyright-b)",strokeWidth:"4",xlinkHref:"#mc-action-flag-for-copyright-a"}))))},hide:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-hide"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("ellipse",{fill:"#99C6F3",cx:"15.5",cy:"16",rx:"2",ry:"2"}),n.createElement("path",{d:"M16.782 21.904l1.413-2.448C20.763 18.362 22.014 16 22.014 16s-.322-.65-1-1.425l1.018-1.764c1.262 1.211 1.912 2.355 1.912 2.355.318.459.31 1.202.007 1.656 0 0-2.497 4.375-7.17 5.082zM21.97 8.917l-8.942 15.49a.518.518 0 0 1-.233-.07l-.858-.496a.505.505 0 0 1-.187-.686l.94-1.628c-3.683-1.276-5.632-4.693-5.632-4.693-.32-.459-.313-1.202-.01-1.656 0 0 2.943-5.178 8.452-5.178 1.286 0 2.432.282 3.433.713l1.317-2.28a.495.495 0 0 1 .687-.18l.858.495a.502.502 0 0 1 .175.17zm-8.26 10.844l4.236-7.337A7.015 7.015 0 0 0 15.514 12c-4.52 0-6.5 4-6.5 4s1.535 2.9 4.696 3.761z",fill:"#0070E0"}))))},link:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-link"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",{fill:"#637282"},n.createElement("path",{d:"M6 16c0-2.21 1.794-4 4.007-4h4.986A4.006 4.006 0 0 1 19 16v4h-8.993A4.006 4.006 0 0 1 6 16zm2 0c0 1.112.898 2 2.005 2H13v2h6v-3h-2v-.999c0-1.1-.894-2.001-1.997-2.001H9.997A2 2 0 0 0 8 16z"}),n.createElement("path",{d:"M26 16c0 2.21-1.794 4-4.007 4h-4.986A4.006 4.006 0 0 1 13 16v-4h8.993A4.006 4.006 0 0 1 26 16zm-2 0c0-1.112-.898-2-2.005-2H19v-2h-6v3h2v.999c0 1.1.894 2.001 1.997 2.001h5.006A2 2 0 0 0 24 16z"}))))},move:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-move"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M14.999 24H9.496A1.507 1.507 0 0 1 8 22.495V9.505C8 8.667 8.67 8 9.496 8h5.256H11v16h3.999zM11 10h-1v12h1V10zm-3 3v7h2v-7H8z",fill:"#A2CBF4",fillRule:"nonzero"}),n.createElement("path",{d:"M24 9.505v12.99c0 .838-.67 1.505-1.496 1.505h-9.008A1.507 1.507 0 0 1 12 22.495V9.505C12 8.667 12.67 8 13.496 8h9.008C23.32 8 24 8.674 24 9.505zM14 10v12h8V10h-8zm-2 3v7h2v-7h-2z",fill:"#0070E0",fillRule:"nonzero"}),n.createElement("path",{d:"M20.5 16.5l-3.788-3.797c-.388-.388-.702-.26-.702.296V15H10v3h6.01v2.001c0 .552.323.675.702.296L20.5 16.5z",fill:"#0070E0"})))},"new-file-request":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-new-file-request"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M9 11.505C9 10.674 9.675 10 10.498 10h11.004c.827 0 1.498.668 1.498 1.505V21.5c0 .828-.675 1.5-1.498 1.5H10.498A1.5 1.5 0 0 1 9 21.5V11.505zM11 12v6h3v2h4v-2h3v-6H11z",fill:"#0070E0"})))},"new-folder":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-new-folder"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.014C8 22.332 8.667 23 9.505 23h12.99c.831 0 1.505-.663 1.505-1.491V11.49zM22 21H10v-9h12v9z",fillRule:"nonzero",fill:"#0070E0"})))},"new-paper-doc":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-new-paper-doc"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M13 13h6v1h-6v-1zm0 2h6v1h-6v-1zm0 2h3v1h-3v-1z",fill:"#99C6F3"}),n.createElement("path",{d:"M23 9.505v12.99c0 .838-.67 1.505-1.498 1.505H10.498A1.505 1.505 0 0 1 9 22.495V9.505C9 8.667 9.67 8 10.498 8h11.004C22.325 8 23 8.674 23 9.505zM21 10H11v12h10V10z",fill:"#0070E0",fillRule:"nonzero"})))},"new-shared-folder":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-new-shared-folder"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M24 11.491c0-.823-.668-1.491-1.505-1.491H16l-2-2H9.499C8.67 8 8 8.664 8 9.493v12.5C8 22.549 8.445 23 9 23h14a1 1 0 0 0 1-.999v-10.51zM22 21H10v-9h12v9zm-11 0h10v2H11v-2z",fill:"#0070E0",fillRule:"nonzero"}),n.createElement("path",{d:"M16 23h-3.309c-.545 0-.809-.41-.575-.916l.334-.724c.347-.753 1.301-1.36 2.133-1.36h2.834c.832 0 1.786.607 2.133 1.36l.334.724c.234.506-.03.916-.575.916H16zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",fill:"#0070E0"})))},"open-in-app":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-open-in-app"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M19.082 11.082l-1.37-1.37C17.319 9.319 17.45 9 17.99 9H23v4.88-.13 7.752c0 .823-.67 1.498-1.498 1.498H10.498C9.675 23 9 22.33 9 21.502V10.498C9 9.675 9.67 9 10.498 9h7.753H15v2h-4v10h10v-4h2v-3.12.13c0 .546-.323.667-.712.278l-1.592-1.592-4.828 4.829-1.615-1.615 4.829-4.828z",fillRule:"nonzero",fill:"#0070E0"})))},permissions:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-permissions"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M12 12v-2c0-2.21 1.795-4 4-4 2.21 0 4 1.795 4 4v2h1.502c.827 0 1.498.68 1.498 1.496v9.008A1.5 1.5 0 0 1 21.502 24H10.498C9.671 24 9 23.32 9 22.504v-9.008A1.5 1.5 0 0 1 10.498 12H12zm-1 2v8h10v-8H11zm3-4v2h4v-2c0-1.112-.895-2-2-2-1.112 0-2 .895-2 2z",fill:"#0070E0"}),n.createElement("circle",{fill:"#99C6F3",cx:"16",cy:"18",r:"2"}))))},rename:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-rename"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M20 23h-2.509A1.489 1.489 0 0 1 16 21.507V9.493C16 8.663 16.668 8 17.491 8H20v1c-2.999 0-3 1-3 1v11s0 .998 3 .998V23zm-8 0v-.996c2.97 0 3-1.004 3-1.004V10s0-1-3-1V8h2.509C15.337 8 16 8.668 16 9.493v12.014A1.49 1.49 0 0 1 14.509 23H12zm1-8h2v1h-2v-1zm4 0h2v1h-2v-1z",fill:"#0070E0",fillRule:"nonzero"})))},"show-deleted-files":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-show-deleted-files"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("ellipse",{fill:"#99C6F3",cx:"15.5",cy:"16",rx:"2",ry:"2"}),n.createElement("path",{d:"M15.5 22c-4.875 0-8.235-5.19-8.235-5.19-.335-.444-.332-1.167-.01-1.607 0 0 3.37-5.203 8.245-5.203 4.875 0 8.235 5.19 8.235 5.19.335.444.332 1.167.01 1.607 0 0-3.37 5.203-8.245 5.203zm.014-2c3.59 0 6.5-4 6.5-4s-2.91-4-6.5-4-6.5 4-6.5 4 2.91 4 6.5 4z",fill:"#0070E0"}))))},"show-in-finder":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-show-in-finder"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M24 9.493v12.014c0 .83-.674 1.493-1.505 1.493H9.505A1.495 1.495 0 0 1 8 21.507V9.493C8 8.663 8.674 8 9.505 8h12.99C23.333 8 24 8.668 24 9.493zM22 10H10v11h12V10z",fill:"#0070E0",fillRule:"nonzero"}),n.createElement("path",{fill:"#99C6F3",opacity:".2",d:"M9 23h14v1H9z"}),n.createElement("path",{d:"M10 12h12v1H10v-1zm3 1h1v8h-1v-8z",fill:"#99C6F3"})))},star:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.createElement("title",null,"action-star"),n.createElement("defs",null,n.createElement("path",{id:"mc-action-star-a",d:"M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558z"}),n.createElement("mask",{id:"mc-action-star-b",x:"0",y:"0",width:"16",height:"15.217",fill:"#fff"},n.createElement("use",{xlinkHref:"#mc-action-star-a"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("use",{stroke:"#0070E0",mask:"url(#mc-action-star-b)",strokeWidth:"4",xlinkHref:"#mc-action-star-a"}))))},unstar:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.createElement("title",null,"action-unstar"),n.createElement("defs",null,n.createElement("path",{id:"mc-action-unstar-a",d:"M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558z"}),n.createElement("mask",{id:"mc-action-unstar-b",x:"0",y:"0",width:"16",height:"15.217",fill:"#fff"},n.createElement("use",{xlinkHref:"#mc-action-unstar-a"}))),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("g",null,n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("use",{stroke:"#0070E0",mask:"url(#mc-action-unstar-b)",strokeWidth:"4",fill:"#0070E0",xlinkHref:"#mc-action-unstar-a"}))))},upload:function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-upload"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M14 14h-2.49c-.282 0-.373-.178-.205-.397l4.082-5.306c.344-.448.887-.44 1.226 0l4.082 5.306c.171.223.077.397-.205.397H18v5.5a.5.5 0 0 1-.49.5h-3.02a.493.493 0 0 1-.49-.5V14z",fill:"#0070E0"}),n.createElement("path",{fill:"#99C6F3",d:"M10 22h12v2H10z"})))},"view-version-history":function(){return n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},n.createElement("title",null,"action-view-version-history"),n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}),n.createElement("path",{d:"M8 16.005V16a8 8 0 1 1 7 7.938v-2.021a6 6 0 1 0-5-5.912h1.996c.556 0 .683.315.293.704l-3.294 3.286-3.294-3.286c-.392-.39-.259-.704.293-.704H8z",fill:"#0070E0"}),n.createElement("path",{d:"M16 16v-4h-1v5h5v-1h-4z",fill:"#99C6F3"})))}}}})});
//# sourceMappingURL=icon_action.min.js-vfllJEDtu.map