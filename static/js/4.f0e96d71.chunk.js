(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[4],{293:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__30dhK"}},297:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2-BF5",posts:"MyPosts_posts__2XoH-"}},298:function(t,e,s){t.exports={item:"Post_item__349nX"}},300:function(t,e,s){"use strict";s.r(e);var o=s(5),c=s(35),n=s(36),i=s(38),a=s(37),r=s(0),u=s.n(r),p=s(96),j=s(297),d=s.n(j),l=s(298),b=s.n(l),h=s(1),O=function(t){return Object(h.jsxs)("div",{className:b.a.item,children:[Object(h.jsx)("img",{src:"https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg"}),t.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["like ",t.likesCount]})})]})},f=s(91),x=s(127),m=s(88),v=s(33),g=Object(m.a)(10),k=Object(x.a)({form:"profile-add-post"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{component:v.b,name:"newPostText",placeholder:"Post message",validate:[m.b,g]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),P=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(h.jsx)(O,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:d.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)("div",{children:Object(h.jsx)(k,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(h.jsx)("div",{className:d.a.posts,children:e})]})})),S=s(17),_=s(9),w=Object(_.d)(Object(S.b)((function(t){return{newPostText:t.profilePage.newPostText,posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}})))(P),B=s(293),y=s.n(B),C=s(39),I=s(128),T=function(t){var e=Object(r.useState)(!1),s=Object(I.a)(e,2),o=s[0],c=s[1],n=Object(r.useState)(t.status),i=Object(I.a)(n,2),a=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!o&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"-------"})}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},M=function(t){var e=t.profile,s=t.status,o=t.updateStatus;return e?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:y.a.descriptionBlock,children:[Object(h.jsx)("img",{src:e.photos.large}),Object(h.jsx)(T,{status:s,updateStatus:o})]})}):Object(h.jsx)(C.a,{})},N=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(M,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(h.jsx)(w,{})]})},U=s(11),A=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(h.jsx)(N,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(_.d)(Object(S.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),U.f)(A)}}]);
//# sourceMappingURL=4.f0e96d71.chunk.js.map