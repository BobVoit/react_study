(this.webpackJsonpstudy_react=this.webpackJsonpstudy_react||[]).push([[4],{296:function(e,a,t){e.exports=t.p+"static/media/avatar1.1d3a9efc.jpg"},297:function(e,a,t){e.exports={content:"Dialogs_content__3EAWS",dialogs:"Dialogs_dialogs__2FByX",dialogs_tems:"Dialogs_dialogs_tems__2Kbev",dialogs_items:"Dialogs_dialogs_items__2D6Xc",active:"Dialogs_active__2e_nP",dialog:"Dialogs_dialog__1ifFQ",messages:"Dialogs_messages__2YQkZ",message:"Dialogs_message__3v7ei"}},298:function(e,a,t){},299:function(e,a,t){e.exports={dialogs_items:"DialogItem_dialogs_items__2TOjB",active:"DialogItem_active__20NPH",dialog:"DialogItem_dialog__j4ieM"}},305:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(297),l=t.n(i),o=(t(298),function(e){return n.a.createElement("div",{className:"message"},e.message)}),c=t(299),m=t.n(c),g=t(11),d=t(296),r=t.n(d),_=function(e){return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement("img",{src:r.a,alt:"ava"}),n.a.createElement(g.b,{to:"/dialogs/"+e.id},e.name))},u=t(90),v=t(130),b=t(32),f=t(73),E=Object(f.a)(30),p=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{placeholder:"Enter your message",component:b.b,name:"newMessageBody",validate:[f.b,E]})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),D=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(_,{key:e.id,name:e.name,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(o,{message:e.message,key:e.id})}));a.newMessageBody;return n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogs_items},t),n.a.createElement("div",{className:l.a.messages},n.a.createElement("div",null,s),n.a.createElement("div",null,n.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))))},j=t(129),y=t(13),O=t(140),M=t(7),N=function(e){return{dialogsPage:e.dialogsPage}},h=function(e){return{sendMessage:function(a){e(Object(j.b)(a))}}};Object(M.d)(Object(y.b)(N,h),O.a)(D);a.default=Object(M.d)(Object(y.b)(N,h),O.a)(D)}}]);
//# sourceMappingURL=4.7cab9d36.chunk.js.map