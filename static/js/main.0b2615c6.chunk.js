(this["webpackJsonpour-health"]=this["webpackJsonpour-health"]||[]).push([[0],{25:function(e,a,t){e.exports=t(64)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=t(6),i=(t(30),t(1)),m=t(2),o=t(4),d=t(3),u=t(5),h=(t(31),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer-bar"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://icons8.com/icons/set/alternative-herbal-medicine"},"Alternative Herbal Medicine icon")," icon by ",l.a.createElement("a",{href:"https://icons8.com"},"Icons8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://icons8.com/icons/set/good-quality"},"Good Quality icon")," icon by ",l.a.createElement("a",{href:"https://icons8.com"},"Icons8")))}}]),a}(l.a.Component)),p=t(13),b=(t(32),l.a.createContext({maladies:[],remedies:[],isLoggedIn:!1,likes:[],myLikes:[],handleLogIn:function(){},handleLogout:function(){},handleMyLikes:function(){}})),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement("section",{className:"home-search"},l.a.createElement("h1",{className:"home-hero"},"Alternative Remedies for the People.",l.a.createElement("br",null)," ",l.a.createElement("span",{className:"subheader-home"},"By the People.")),l.a.createElement("form",{id:"home-search-form"},l.a.createElement("input",{type:"text",id:"home-search-term",placeholder:"Find a condition. e.g. 'Flu'"}),l.a.createElement("button",{type:"submit",id:"search-button"}))),l.a.createElement("section",{className:"app-explain"},l.a.createElement("p",null,"OurHealth allows you to find and share the best alternative and natural remedies.")))}}]),a}(l.a.Component);E.contextType=b;t(33);var y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={email:"",username:"",password:"",repeatPassword:"",error:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"register-page"},l.a.createElement("header",{className:"register-header"},l.a.createElement("h1",null,"Register")),l.a.createElement("section",{className:"register-body"},l.a.createElement("form",{className:"register-form"},l.a.createElement("label",{htmlFor:"Email"},"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"email",name:"email"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"username",name:"username"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password"},"Password ",l.a.createElement("span",{className:"p-advice"}," (min. 6 characters)")),l.a.createElement("br",null),l.a.createElement("input",{type:"password",id:"password",name:"password"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"repeatPassword"},"Repeat Password"),l.a.createElement("br",null),l.a.createElement("input",{type:"password",id:"repeatPassword",name:"repeatPassword"}),l.a.createElement("br",null),l.a.createElement("p",null,this.state.error),l.a.createElement("button",{className:"login-button",type:"submit"},"Register"))))}}]),a}(l.a.Component),g=(t(34),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).handleLogin=function(e){e.preventDefault(),console.log("inside handle login"),t.context.handleLogIn()},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"login-page"},l.a.createElement("header",{className:"login-page-header"},l.a.createElement("div",{className:"background-box"},l.a.createElement("h1",null,"Login"))),l.a.createElement("section",{className:"login-body"},l.a.createElement("form",{className:"login-form"},l.a.createElement("label",{htmlFor:"Username"},"Username/Email ",l.a.createElement("br",null)),l.a.createElement("input",{type:"text",id:"login-username",name:"login-username"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"Password"},"Password",l.a.createElement("br",null)),l.a.createElement("input",{type:"password",id:"login-password",name:"login-password"}),l.a.createElement("br",null),l.a.createElement("p",null,"Click button for automatic login"),l.a.createElement("button",{className:"login-button",type:"submit",onClick:this.handleLogin},"Login")),l.a.createElement("p",null,"Not a member? ",l.a.createElement(s.b,{to:"/register",className:"register-link"},"Register"))))}}]),a}(l.a.Component));g.contextType=b;t(40);var f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.noHeader?l.a.createElement("header",null,l.a.createElement("h1",{className:"malady-page-header"},"Add Remedy")):l.a.createElement("header",{className:"add-page-header"},l.a.createElement("h1",null,"Add Remedy"));return l.a.createElement("div",{className:"add-page"},e,l.a.createElement("form",{id:"new-remedy-form"},l.a.createElement("label",{htmlFor:"malady"},"Malady"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"malady"}),l.a.createElement("label",{htmlFor:"remedy"},"Remedy Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"textarea",id:"remedy"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",id:"description",cols:"30",rows:"10"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"reference"},"Reference"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"reference"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"login-button"},"Add")))}}]),a}(l.a.Component),v=(t(41),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"results-page"},l.a.createElement("h1",null,"Results"),l.a.createElement("h2",null,"List of Maladies"))}}]),a}(l.a.Component)),k=(t(42),function(e){function a(e){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).call(this,e))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.context.maladies.sort((function(e,a){return e.malady_name>a.malady_name?1:-1})).map((function(a){return l.a.createElement(s.b,{to:"/malady/".concat(a.id),key:a.id,prop:a,className:"browse-maladies-link"},a.malady_name,l.a.createElement("span",{className:"remedies-counter"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;return a?e.filter((function(e){return e.remedy_malady===a})):e}(e.context.remedies,a.id).length+" Remedies"))}));return l.a.createElement("div",{className:"malady-page"},l.a.createElement("header",{className:"malady-head"},l.a.createElement("section",{className:"border-box"},l.a.createElement("h1",null,"Maladies"))),l.a.createElement("section",{className:"browse-maladies-section"},a))}}]),a}(l.a.Component));k.contextType=b;t(43),t(44);var O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={feedback:!1,liked:null,likeId:"",likes:0,dislikes:0,createdRem:[],error:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=0===this.state.createdRem.length?"":l.a.createElement("button",{onClick:this.handleDelete},"Delete"),t=l.a.createElement("div",null,l.a.createElement("span",{className:"likes-count"},this.state.likes),l.a.createElement("img",{src:"https://img.icons8.com/office/40/000000/good-quality.png",className:"like-button",height:"40px",onClick:function(){return e.setState({error:"Must be logged in to give feedback"})},alt:"thumbs up icon"}),l.a.createElement("span",{className:"likes-count"},this.state.dislikes),l.a.createElement("img",{src:"https://img.icons8.com/officel/40/000000/poor-quality.png",className:"like-button",height:"40px",onClick:function(){return e.setState({error:"Must be logged in to give feedback"})},alt:"thumbs down icon"}));return l.a.createElement("div",{className:"remedy-section"},l.a.createElement("h2",null,this.props.rem.remedy_name),l.a.createElement("p",null,this.props.rem.remedy_description),t,l.a.createElement("p",{className:"feedback-error"},this.state.error),a,l.a.createElement("p",null,"Reference: ",this.props.rem.remedy_reference),l.a.createElement("p",null,"--"))}}]),a}(l.a.Component);O.contextType=b;var N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).updateForm=function(){t.context.isLoggedIn?t.setState({showForm:!t.state.showForm}):t.setState({error:"Must be logged in to add a remedy"})},t.state={showForm:!1,showSym:!0,error:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.context.remedies.filter((function(a){return a.remedy_malady===parseInt(e.props.match.params.id)})),t=this.context.maladies.filter((function(a){return a.id===parseInt(e.props.match.params.id)})).map((function(a){return l.a.createElement("div",{className:"malady-section",key:a.id},l.a.createElement("header",{className:"malady-page-head"},l.a.createElement("div",{className:"mal-head-box"},l.a.createElement("h1",null,a.malady_name),l.a.createElement("p",null,a.malady_description))),l.a.createElement("section",{className:"malady-subsection"},l.a.createElement("h2",{className:"symptoms-label",onClick:e.showSym},"Symptoms"),l.a.createElement("p",null,e.state.showSym&&a.malady_symptoms)))})),n=0!==a.length?a.map((function(e){return l.a.createElement(O,{rem:e,key:e.id})})):l.a.createElement("p",{className:"no-remedies"},"There are no remedies for this condition yet.");return l.a.createElement("div",{className:"malady-page"},t,l.a.createElement("section",{className:"remedies-header"},l.a.createElement("h1",null,"Remedies")),l.a.createElement("section",{className:"remedy-page"},this.state.showForm&&l.a.createElement(f,{noHeader:!0}),l.a.createElement("p",{className:"click-to-add",onClick:this.updateForm},"Click to ",this.state.showForm?"collapse form":"add remedy"),l.a.createElement("p",{className:"add-error"},this.state.error),n))}}]),a}(l.a.Component);N.contextType=b;t(45);var j=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"add-malady-page"},l.a.createElement("header",{className:"add-malady-page-header"},l.a.createElement("h1",null,"Add Malady")),l.a.createElement("section",{className:"add-mal-body"},l.a.createElement("form",{className:"add-mal-form"},l.a.createElement("label",{htmlFor:"name"},"Malady Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"list",id:"name"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"symptoms"},"Symptoms"),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",id:"symptoms",cols:"30",rows:"10"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("br",null),l.a.createElement("textarea",{type:"text",id:"description",cols:"30",rows:"10"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"login-button"},"Add"))))}}]),a}(l.a.Component);j.contextType=b;t(46);var w=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.context.isLoggedIn?l.a.createElement(j,null):l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(s.b,{to:"/login"},"Login")," to add a Malady"));return l.a.createElement("div",{className:"not-found"},l.a.createElement("header",null,l.a.createElement("h1",null,'Sorry we couldnt find any result for "',this.props.match.params.name,'"'),l.a.createElement("h2",null,"Would you like to add it?")),e)}}]),a}(l.a.Component);w.contextType=b;var x=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"error-page"},l.a.createElement("h1",null,"Something is not quite right with us."),l.a.createElement("h2",null,"Please check back again soon."))}}]),a}(l.a.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:E}),l.a.createElement(p.a,{path:"/register",component:y}),l.a.createElement(p.a,{path:"/login",component:g}),l.a.createElement(p.a,{path:"/maladylist",component:k}),l.a.createElement(p.a,{path:"/addremedy",component:f}),l.a.createElement(p.a,{path:"/addmalady",component:j}),l.a.createElement(p.a,{path:"/search",component:v}),l.a.createElement(p.a,{path:"/malady/:id",component:N}),l.a.createElement(p.a,{path:"/maladynotfound/:name",component:w}),l.a.createElement(p.a,{path:"/ErrorPage",component:x}))}}]),a}(l.a.Component),_=(t(47),t(19)),L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).handleLogout=function(){t.context.handleLogout()},t.closeMenu=function(){t.setState({isOpen:!1})},t.state={isOpen:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"handleStateChange",value:function(e){this.setState({isOpen:e.isOpen})}},{key:"render",value:function(){var e=this,a=this.state.isOpen,t=this.context.isLoggedIn?l.a.createElement("div",{className:"nav-bar"},l.a.createElement("ul",{className:"screen-nav-bar"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"nav-bar-link"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/maladylist",className:"nav-bar-link"},"Maladies")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/addremedy",className:"nav-bar-link"},"Add Remedy")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/addmalady",className:"nav-bar-link"},"Add Malady")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/login",className:"nav-bar-link",onClick:this.handleLogout},"Logout"))),l.a.createElement(_.slide,{isOpen:a,width:"100%",right:!0,onStateChange:function(a){return e.handleStateChange(a)}},l.a.createElement(s.b,{to:"/",className:"nav-link",onClick:this.closeMenu},"Home"),l.a.createElement(s.b,{to:"/maladylist",className:"nav-link",onClick:this.closeMenu},"Maladies"),l.a.createElement(s.b,{to:"/addremedy",className:"nav-link",onClick:this.closeMenu},"Add Remedy"),l.a.createElement(s.b,{to:"/addmalady",className:"nav-link",onClick:this.closeMenu},"Add Malady"),l.a.createElement(s.b,{to:"/login",className:"nav-link",onClick:this.handleLogout},"Logout"))):l.a.createElement("div",{className:"nav-bar"},l.a.createElement("ul",{className:"screen-nav-bar"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"nav-bar-link"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/maladylist",className:"nav-bar-link"},"Maladies")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/login",className:"nav-bar-link"},"Login")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/register",className:"nav-bar-link"},"Register"))),l.a.createElement(_.slide,{isOpen:a,width:"100%",right:!0,onStateChange:function(a){return e.handleStateChange(a)}},l.a.createElement(s.b,{to:"/",className:"nav-link",onClick:this.closeMenu},"Home"),l.a.createElement(s.b,{to:"/maladylist",className:"nav-link",onClick:this.closeMenu},"Maladies"),l.a.createElement(s.b,{to:"/login",className:"nav-link",onClick:this.closeMenu},"Login"),l.a.createElement(s.b,{to:"/register",className:"nav-link",onClick:this.closeMenu},"Register")));return l.a.createElement("div",null,t)}}]),a}(l.a.Component);L.contextType=b;t(63);var M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).handleLogIn=function(){console.log("inside app"),t.setState({isLoggedIn:!0})},t.state={maladies:[{id:1,malady_name:"lice",malady_description:"bad bugs",malady_symptoms:"itchy",userid:null},{id:2,malady_name:"cold",malady_description:"virus",malady_symptoms:"cough",userid:null},{id:3,malady_name:"obesity",malady_description:"being overweight",malady_symptoms:"overeating",userid:null}],remedies:[{id:1,remedy_name:"lice spray",remedy_description:"Buy a spray and solve the problem",remedy_reference:"website",remedy_malady:1,userid:null},{id:2,remedy_name:"cold medicine",remedy_description:"go to cvs and buy cold medicine",remedy_reference:"website",remedy_malady:2,userid:null},{id:3,remedy_name:"obesity",remedy_description:"eating less",remedy_reference:"website",remedy_malady:3,userid:null}],isLoggedIn:!1,likes:[],error:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e={remedies:this.state.remedies,maladies:this.state.maladies,isLoggedIn:this.state.isLoggedIn,likes:this.state.likes,error:this.state.error,handleLogIn:this.handleLogIn},a=this.state.error?l.a.createElement("div",null,l.a.createElement("h1",null,"Something went wrong  :/ ",l.a.createElement("br",null),"We are working on a fix :)")):l.a.createElement(b.Provider,{value:e},l.a.createElement("div",{className:"app"},l.a.createElement(L,null),l.a.createElement(C,null),l.a.createElement(h,null)));return l.a.createElement("div",null,a)}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.0b2615c6.chunk.js.map