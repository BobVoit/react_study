(this.webpackJsonpstudy_react=this.webpackJsonpstudy_react||[]).push([[3],{296:function(e,t,a){e.exports=a.p+"static/media/avatar1.1d3a9efc.jpg"},300:function(e,t,a){e.exports={discripton_block:"ProfileInfo_discripton_block__33KZ1"}},301:function(e,t,a){e.exports={item:"Post_item__19KNe"}},302:function(e,t,a){e.exports={posts_block:"MyPosts_posts_block__1jV5D",posts:"MyPosts_posts__11aRB"}},303:function(e,t,a){e.exports={content:"Profile_content__llkF6"}},304:function(e,t,a){"use strict";a.r(t);var n=a(36),s=a(37),r=a(40),o=a(39),u=a(0),l=a.n(u),c=a(13),i=a(38),p=a(300),m=a.n(p),d=(l.a.Component,a(131)),f=function(e){var t=Object(u.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),o=Object(d.a)(r,2),c=o[0],i=o[1];Object(u.useEffect)((function(){i(e.status)}),[e.status]);return l.a.createElement("div",null,!n&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"-----")),n&&l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},value:c})))},E=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?l.a.createElement("div",null,l.a.createElement("div",{className:m.a.discripton_block},l.a.createElement("div",null,l.a.createElement("img",{src:t.photos.large})),l.a.createElement("div",{className:m.a.account_inf},l.a.createElement("div",null,l.a.createElement("div",null,t.fullName)),l.a.createElement(f,{status:a,updateStatus:n})))):l.a.createElement(i.a,null)},b=a(296),h=a.n(b),v=a(301),_=a.n(v),g=function(e){return l.a.createElement("div",{className:_.a.item},l.a.createElement("img",{src:h.a}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like"),l.a.createElement("span",null,e.likesCount)))},P=a(302),j=a.n(P),k=a(90),O=a(130),S=a(73),x=a(32),y=l.a.memo((function(e){var t=e.posts.map((function(e){return l.a.createElement(g,{message:e.message,likesCount:e.likesCount})}));return l.a.createElement("div",{className:j.a.posts_block},l.a.createElement("h3",null,"My Posts"),l.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText)}}),l.a.createElement("div",{className:j.a.posts},t))})),N=Object(S.a)(10),w=Object(O.a)({form:"profileAddNewPostForm"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(k.a,{name:"newPostText",component:x.b,validate:[S.b,N],placeholder:"Post message"})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post")))})),C=y,I=a(98),T=Object(c.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(I.a)(t))}}}))(C),A=(a(303),function(e){return e.profile?l.a.createElement("div",null,l.a.createElement(E,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),l.a.createElement(T,null)):l.a.createElement(i.a,null)}),M=a(9),U=a(140),D=a(7),F=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return l.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(l.a.Component);t.default=Object(D.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:I.d,getStatus:I.c,updateStatus:I.e}),M.f,U.a)(F)}}]);
//# sourceMappingURL=3.17bca331.chunk.js.map