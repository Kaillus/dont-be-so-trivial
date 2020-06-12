(this["webpackJsonpdont-be-so-trivial"]=this["webpackJsonpdont-be-so-trivial"]||[]).push([[7],{115:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n.n(r),o=n(40),i=n(43),c=n(0),s=n.n(c),l=n(111),u=n(2),d=n(31),p=(n(7),n(32)),h=n(33),m=c.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.component,o=void 0===a?"div":a,i=e.square,s=void 0!==i&&i,l=e.elevation,h=void 0===l?1:l,m=e.variant,b=void 0===m?"elevation":m,g=Object(d.a)(e,["classes","className","component","square","elevation","variant"]);return c.createElement(o,Object(u.a)({className:Object(p.a)(n.root,r,"outlined"===b?n.outlined:n["elevation".concat(h)],!s&&n.rounded),ref:t},g))})),b=Object(h.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(u.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(m),g=c.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.raised,o=void 0!==a&&a,i=Object(d.a)(e,["classes","className","raised"]);return c.createElement(b,Object(u.a)({className:Object(p.a)(n.root,r),elevation:o?8:1,ref:t},i))})),f=Object(h.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(g),v=n(107);Object(v.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}}}}));var y=n(68),w=n(42),x=n(113),O=Object(v.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}},questionText:{height:"100%",width:"100%"},questionCard:{height:"150px",width:"100%",background:"radial-gradient(circle at center, rgb(2, 204, 204) 0%, rgba(255,255,255,1) 100%)"},disabledQuestionCard:{height:"150px",width:"100%",background:"radial-gradient(circle at center, rgb(2, 204, 204) 0%, rgba(255,255,255,0.5) 100%)"},correctQuestionCard:{height:"150px",width:"100%",background:"radial-gradient(circle at center, green 0%, rgba(255,255,255,1) 100%)"},wrongQuestionCard:{height:"150px",width:"100%",background:"radial-gradient(circle at center, red 0%, rgba(255,255,255,1) 100%)"}}}));var j=function(e){var t=O(),n=e.buttonText,r=e.buttonIndex,a=e.correctAnswer,o=e.showAnswer,l=Object(c.useState)(!1),u=Object(i.a)(l,2),d=u[0],p=u[1],h=Object(c.useState)(),m=Object(i.a)(h,2),b=m[0],g=m[1],v=function(){g(o&&a===r?t.correctQuestionCard:o&&d&&r!==a?t.wrongQuestionCard:o&&!d?t.disabledQuestionCard:t.questionCard)};return Object(c.useEffect)((function(){v()})),Object(c.useEffect)((function(){-1===a&&p(!1)}),[a]),s.a.createElement("div",null,s.a.createElement(f,{className:b},s.a.createElement(x.a,{className:t.questionText,onClick:function(t){o||(p(!0),e.onClick(),v())}},n)))},E=Object(v.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}},questionGrid:{},questionCard:{height:"100%",width:"100%"},questionText:{height:"100%",width:"100%"},correctQuestionCard:{height:"100%",width:"100%",backgroundColor:"green"}}}));function k(e){return decodeURIComponent(e).replace("%2C",",")}var C=function(e){var t=E(),n=Object(c.useState)([]),r=Object(i.a)(n,2),u=r[0],d=r[1],p=Object(c.useState)(0),h=Object(i.a)(p,2),m=h[0],b=h[1],g=Object(c.useState)(!1),f=Object(i.a)(g,2),v=f[0],x=f[1],O=Object(c.useState)(-1),C=Object(i.a)(O,2),N=C[0],A=C[1],S=function(e){x(!0),A(u[m].answers.indexOf(k(u[m].correct_answer))),console.log("correct:"+N),console.log("question: "+k(u[m].answers[e])),console.log("answer: "+k(u[m].correct_answer)),k(u[m].answers[e])===k(u[m].correct_answer)?console.log("correct"):console.log("incorrect"),m<u.length-1&&setTimeout((function(){x(!1),A(-1),b(m+1)}),3e3)},q=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)({numQuestions:4});case 2:t=e.sent,console.log(t),0!==t.data.response_code&&console.log("Error retrieving questions from the API"),n=t.data.results,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){q()}),[]),s.a.createElement("div",null,u.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{width:"100%",height:"30%"}},s.a.createElement(l.a,{container:!0,spacing:2},s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(j,{correctAnswer:N,showAnswer:v,buttonIndex:0,buttonText:u[m].answers[0],onClick:function(){return S(0)}})),s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(j,{correctAnswer:N,showAnswer:v,buttonIndex:1,buttonText:u[m].answers[1],onClick:function(){return S(1)}})))),s.a.createElement(y.a,{variant:"h4",style:{padding:40}},u[m].question),s.a.createElement("div",{style:{width:"100%",height:"30%"}},s.a.createElement(l.a,{container:!0,spacing:2},s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(j,{correctAnswer:N,showAnswer:v,buttonIndex:2,buttonText:u[m].answers[2],onClick:function(){return S(2)}})),s.a.createElement(l.a,{item:!0,xs:6,className:t.questionGrid},s.a.createElement(j,{correctAnswer:N,showAnswer:v,buttonIndex:3,buttonText:u[m].answers[3],onClick:function(){return S(3)}}))))):"")},N=Object(v.a)((function(e){return{removeLinkStyling:{"&:link, &:visited, &:hover":{color:"inherit",textDecoration:"none"},"&:active":{color:"inherit",fontWeight:"bold",textDecoration:"none"}}}}));t.default=function(e){N();var t=s.a.createElement(C,null),n=Object(c.useState)([]),r=Object(i.a)(n,2),u=r[0],d=r[1],p=e.match.params.code;return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,Object(w.a)(t);case 3:e.t1=e.sent.data.value,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(p)}),[p]),s.a.createElement("div",null,s.a.createElement("div",{style:{width:"80vw"}},t),s.a.createElement(l.a,{container:!0,spacing:3},u.map((function(e,t){return s.a.createElement(l.a,{item:!0,xs:3,key:t},s.a.createElement(f,null,e))}))))}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(39),a=n.n(r),o=n(40),i=n(53),c=n.n(i),s={"General Knowledge":9,Books:10,Film:11,Music:12,"Musicals & Plays":13,Television:14,"Video Games":15,"Board Games":16,"Science and Nature":17,Computers:18,Mathematics:19,Mythology:20,Sports:21,Geography:22,History:23,Politics:24,Art:25,Celebrities:26,Animals:27,Vehicles:28,Comics:29,Gadgets:30,"Japanese Anime & Manga":31,"Cartoon & Animation":32},l=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,i,l,d,p,h,m,b,g,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.category,r=t.numQuestions,o=void 0===r?1:r,i=t.difficulty,l=t.type,d=void 0===l?"multiple":l,p="https://opentdb.com/api.php?amount=".concat(o),n&&s[n]&&(p+="&category=".concat(s[n])),i&&(p+="&difficulty=".concat(i)),p+="&type=".concat(d,"&encode=url3986"),e.next=7,c.a.get(p);case 7:for(h=e.sent,m=h.data.results,b=0;b<m.length;b++){for(m[b].question=decodeURIComponent(m[b].question),m[b].answers=[],g=u(0,2),f=0;f<m[b].incorrect_answers.length;f++)m[b].answers.push(decodeURIComponent(m[b].incorrect_answers[f]));m[b].answers.splice(g,0,decodeURIComponent(m[b].correct_answer))}return h.data.results=m,e.abrupt("return",Promise.resolve(h));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function u(e,t){return Math.floor(Math.random()*(t-e+1))+e}var d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[JOINING ROOM] Name: ".concat(t,", Room code: ").concat(n)),e.abrupt("return",Promise.resolve({status:200,data:{}}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[GETTING MEMBERS] Room code: ".concat(t)),e.abrupt("return",Promise.resolve({status:200,data:{value:["Nik","Siena","Filip"]}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},68:function(e,t,n){"use strict";var r=n(2),a=n(31),o=n(0),i=(n(7),n(32)),c=n(33),s=n(36),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,d=e.className,p=e.color,h=void 0===p?"initial":p,m=e.component,b=e.display,g=void 0===b?"initial":b,f=e.gutterBottom,v=void 0!==f&&f,y=e.noWrap,w=void 0!==y&&y,x=e.paragraph,O=void 0!==x&&x,j=e.variant,E=void 0===j?"body1":j,k=e.variantMapping,C=void 0===k?l:k,N=Object(a.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),A=m||(O?"p":C[E]||l[E])||"span";return o.createElement(A,Object(r.a)({className:Object(i.a)(u.root,d,"inherit"!==E&&u[E],"initial"!==h&&u["color".concat(Object(s.a)(h))],w&&u.noWrap,v&&u.gutterBottom,O&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==g&&u["display".concat(Object(s.a)(g))]),ref:t},N))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)}}]);
//# sourceMappingURL=7.05cdb11b.chunk.js.map