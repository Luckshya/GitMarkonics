(this.webpackJsonpgitmarkonics=this.webpackJsonpgitmarkonics||[]).push([[0],{170:function(e,t,a){},171:function(e,t,a){},269:function(e,t,a){},273:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(101),c=a.n(r),o=(a(170),a(171),a(104)),i=a.n(o),s=a(152),m=a(153),u=a(154),d=a(163),g=a(162),E=a(29),h=(a(268),a(269),a(160)),p=a(296),f=a(292),b=a(307),k=a(305),C=a(297),v=a(50),_=a(88),S=a.n(_),y=a(303),w=a(295),x=function(e){return l.a.createElement(f.a,{flex:"1",bg:"white",border:"1px",borderColor:"gray.10",p:5},l.a.createElement(y.e,null,l.a.createElement(y.b,null,l.a.createElement(y.a,null,"Output"),l.a.createElement(y.a,null,"Preview")),l.a.createElement(y.d,null,l.a.createElement(y.c,null,l.a.createElement(w.a,null,e.file)),l.a.createElement(y.c,null,l.a.createElement("div",{dangerouslySetInnerHTML:function(){var t=S()("_Nothing_ to show ");return e.file?(t=S()(e.file),console.log(e.file),console.log()):t=S()("_Nothing_ to show "),{__html:t}}()})))))},N=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={editorState:E.EditorState.createEmpty(),file:""},n.onChange=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({editorState:t});case 2:return e.next=4,Object(h.a)(n.state.editorState.getCurrentContent());case 4:a=e.sent,n.setState({file:n.replacer(a)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(u.a)(a,[{key:"replacer",value:function(e){return e=(e=e.replace(/<p>/g,"").replace(/<\/p>/g,"</br>").replace(/<br>/g,"").replace(/<strong>/g,"**").replace(/<\/strong>/g,"**").replace(/&nbsp;/g," ").replace(/<h1>/g,"# ").replace(/<\/h1>/g,"").replace(/<blockquote>/g,">").replace(/<\/blockquote>/g," ")).replace(/<em>/g,"_").replace(/<\/em>/g,"_")}},{key:"_onBoldClick",value:function(){this.onChange(E.RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))}},{key:"_onItalicClick",value:function(){this.onChange(E.RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))}},{key:"_onUnderlineClick",value:function(){this.onChange(E.RichUtils.toggleInlineStyle(this.state.editorState,"UNDERLINE"))}},{key:"onDownload",value:function(){var e=document.createElement("a");e.href="data:attachment/text,"+encodeURI(this.file),e.target="_blank",e.download="README.md",e.click()}},{key:"_onTextSizeClick",value:function(){this.onChange(E.RichUtils.toggleBlockType(this.state.editorState,"header-one"))}},{key:"_onBlockQuoteClick",value:function(){this.onChange(E.RichUtils.toggleBlockType(this.state.editorState,"blockquote"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{color:"black"},l.a.createElement(f.a,{flex:"1",bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2},l.a.createElement(b.b,{direction:"row",spacing:1,align:"center"},l.a.createElement(k.a,{onClick:this._onBoldClick.bind(this)},l.a.createElement(C.a,{as:v.a})),l.a.createElement(k.a,{onClick:this._onItalicClick.bind(this)}," ",l.a.createElement(C.a,{as:v.c})),l.a.createElement(k.a,{onClick:this._onTextSizeClick.bind(this)},l.a.createElement(C.a,{as:v.e})),l.a.createElement(k.a,{onClick:this._onBlockQuoteClick.bind(this)},l.a.createElement(C.a,{as:v.d})),l.a.createElement(k.a,{onClick:this.onDownload.bind(this)},l.a.createElement(C.a,{as:v.b})," \xa0Download")),l.a.createElement(f.a,{className:"editors-panel"},l.a.createElement(E.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,placeholder:"Lets Start Documenting ..."}))),l.a.createElement(x,{file:this.state.file})))}}]),a}(n.Component),I=(a(273),a(156)),R=a(298),L=a(83),B=a.p+"static/media/GitMarkonics_white.36ad85f7.png";var O=function(){return l.a.createElement(f.a,{className:"nav_header",p:1},l.a.createElement(p.a,{direction:"row "},l.a.createElement("img",{src:B,alt:"heading",width:"80px"}),l.a.createElement(R.a,null),l.a.createElement(b.b,{direction:"row",spacing:2},l.a.createElement(L.b,{to:"/login"},l.a.createElement(k.a,{leftIcon:l.a.createElement(I.a,null),colorScheme:"pink",variant:"solid"},"Login")),l.a.createElement(k.a,{colorScheme:"white",variant:"outline"},"Register"))))},U=a(13),D=(a(279),a(299)),T=a(300),F=a(301),z=a(306),j=a(302),A=a(84);var P=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__container"},l.a.createElement("div",{className:"login__containerTop"},l.a.createElement("div",{className:"login__img"}),l.a.createElement("p",null,"Add a crisp to your bulky documents !!"),l.a.createElement("h4",null,"Welcome to the website")),l.a.createElement("div",{className:"login__containerBottom"},l.a.createElement(b.c,{className:"input__container",w:"65%",m:"auto"},l.a.createElement(D.a,{fontSize:"1.2rem",color:"blue.500",fontWeight:"semibold",py:3},"USER LOGIN"),l.a.createElement(T.a,{w:"95%",borderRadius:"full",bgColor:"gray.200"},l.a.createElement(F.a,{margin:"0 20px",pointerEvents:"none",children:l.a.createElement(A.a,{color:"#C6C6E8",fontSize:"2.1rem"})}),l.a.createElement(z.a,{borderRadius:"full",type:"tel",placeholder:"Username",paddingLeft:"60px"})),l.a.createElement(T.a,{className:"login__input",w:"95%",borderRadius:"full",bgColor:"gray.200"},l.a.createElement(F.a,{margin:"0 20px",pointerEvents:"none",children:l.a.createElement(A.b,{color:"#C6C6E8",fontSize:"2.1rem"})}),l.a.createElement(z.a,{type:"tel",borderRadius:"full",placeholder:"Password",paddingLeft:"60px"})),l.a.createElement(b.a,{className:"login__btn",alignSelf:"flex-end"},l.a.createElement(k.a,{colorScheme:"pink",px:"6",size:"sm",fontWeight:"bold",className:"loginBtn"},"LOGIN"),l.a.createElement(j.a,{fontSize:"sm",textDecoration:"underline",color:"blue"},"Forgot password?"))))))};var q=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L.a,null,l.a.createElement(U.c,null,l.a.createElement(U.a,{path:"/login"},l.a.createElement(P,null)),l.a.createElement(U.a,{path:"/"},l.a.createElement(O,null),l.a.createElement(N,null)))))},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,308)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))},M=a(304);c.a.render(l.a.createElement(M.a,null,l.a.createElement(q,null)),document.getElementById("root")),G()}},[[280,1,2]]]);
//# sourceMappingURL=main.71e8b42b.chunk.js.map