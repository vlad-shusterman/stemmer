webpackJsonp([1],{GTQF:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout"},[this._t("default")],2)},staticRenderFns:[]};var r={name:"App",components:{Layout:a("VU/8")({name:"layout"},s,!1,function(t){a("xOag")},"data-v-3816de4f",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("layout",[e("router-view")],1)],1)},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(t){a("ZZac")},null,null).exports,c=a("/ocq"),l=a("Xxa5"),p=a.n(l),m=a("exGp"),d=a.n(m),u=a("mtWM"),v=a.n(u),f=function(){return v.a.create({baseURL:"https://damp-ravine-91133.herokuapp.com"})},g=function(t){return f().post("sign_in",t)},_={name:"StartPage",data:function(){return{credentials:{email:"",password:"",role:"client"},mode:"login",passwordConfirm:""}},methods:{signIn:function(){},register:function(){var t=this;return d()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.credentials.email||""===t.credentials.role||""===t.credentials.password){e.next=10;break}if(t.credentials.password!==t.passwordConfirm){e.next=7;break}return e.next=4,g({email:t.credentials.email,role:t.credentials.role,password:t.credentials.password});case 4:"client"===t.credentials.role?t.$router.push({name:"Companies"}):t.$router.push({name:"NewCompany"}),e.next=8;break;case 7:alert("Wrong password confirmation");case 8:e.next=11;break;case 10:alert("Empty fields");case 11:case"end":return e.stop()}},e,t)}))()}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-4"},[a("ul",{staticClass:"nav nav-tabs justify-content-around"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"login"===t.mode},attrs:{"data-toggle":"tab"},on:{click:function(e){t.mode="login"}}},[t._v("\n            Login\n          ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"register"===t.mode},attrs:{"data-toggle":"tab"},on:{click:function(e){t.mode="register"}}},[t._v("\n            Register\n          ")])])]),t._v(" "),a("div",{staticClass:"tab-content"},["login"===t.mode?a("div",{staticClass:"active"},[a("form",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"login"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{id:"login","aria-describedby":"emailHelp"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group d-flex"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.signIn()}}},[t._v("Sign in")])])])])]):t._e(),t._v(" "),"register"===t.mode?a("div",[a("form",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"register-email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",id:"register-email"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),t._v(" "),a("label",[t._v("Select your role")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.credentials.role,expression:"credentials.role"}],staticClass:"browser-default custom-select form-group",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.credentials,"role",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"client"}},[t._v("Client")]),t._v(" "),a("option",{attrs:{value:"company"}},[t._v("Company")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"register-password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",id:"register-password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"register-password-confirmation"}},[t._v("Password confirmation")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"form-control",attrs:{type:"password",id:"register-password-confirmation"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group d-flex"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.register()}}},[t._v("Register")])])])])]):t._e()])])])])},staticRenderFns:[]};var C=a("VU/8")(_,y,!1,function(t){a("kfp9")},"data-v-047ce533",null).exports,w=function(){return console.log(f()),f().get("companies")},b=function(t){return f().post("companies",t)},h={name:"CompaniesListPage",data:function(){return{posts:[]}},methods:{getPosts:function(){var t=this;return d()(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,t.posts=a.data.posts;case 4:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.getPosts()}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-xs-12"},[a("h1",[t._v("Companies")]),t._v(" "),a("table",{staticClass:"table table-striped table-bordered"},[t._m(0),t._v(" "),t._l(t.posts,function(e,n){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.price))]),t._v(" "),a("td",[t._v(t._s(e.type))])])})],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Company Name")]),this._v(" "),e("th",[this._v("Price per hour")]),this._v(" "),e("th",[this._v("Type of cleaning")])])}]};var k=a("VU/8")(h,x,!1,function(t){a("qLAd")},null,null).exports,P={name:"NewCompaniesPage",data:function(){return{company:{name:"",price:15,type:""}}},methods:{addPost:function(){var t=this;return d()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.company.name||""===t.company.price){e.next=5;break}return e.next=3,b({name:t.company.name,price:t.company.price,type:t.company.type});case 3:e.next=6;break;case 5:alert("Empty fields!");case 6:case"end":return e.stop()}},e,t)}))()},goBack:function(){}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Company name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company.name,expression:"company.name"}],staticClass:"form-control",attrs:{id:"name",placeholder:"Enter your company name"},domProps:{value:t.company.name},on:{input:function(e){e.target.composing||t.$set(t.company,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.company.price,expression:"company.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"Price per hour"},domProps:{value:t.company.price},on:{input:function(e){e.target.composing||t.$set(t.company,"price",e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-group-addon align-items-center d-flex position-absolute",staticStyle:{left:"95%","padding-top":"0.5rem"}},[t._v("$")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"type"}},[t._v("Type of cleaning")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.company.type,expression:"company.type"}],staticClass:"form-control",attrs:{id:"type",placeholder:"Enter the type of cleaning you provide"},domProps:{value:t.company.type},on:{input:function(e){e.target.composing||t.$set(t.company,"type",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group d-flex"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addPost()}}},[t._v("Submit")])])])])])])},staticRenderFns:[]};var N=a("VU/8")(P,$,!1,function(t){a("GTQF")},null,null).exports;n.a.use(c.a);var E=new c.a({mode:"history",routes:[{path:"/",name:"Start",redirect:"/sign_in"},{path:"/sign_in",name:"Sign in",component:C},{path:"/companies",name:"Companies",component:k},{path:"/companies/new",name:"NewCompany",component:N}]});a("Jmt5");n.a.config.productionTip=!1,new n.a({el:"#app",router:E,components:{App:i},template:"<App/>"})},ZZac:function(t,e){},kfp9:function(t,e){},qLAd:function(t,e){},xOag:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1729804f470e4ee9ba17.js.map