(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(5),s=a.n(n),o=(a(16),a(17),a(3)),r=a(2),c=a(6),d=a(7),m=a(9),u=a(8),f=a(1),h=a(10);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).validateField=function(e,t){var i={name:t.trim().length,nickName:!0,email:t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),field:t.trim().length,position:t.trim().length};a.setState((function(t){return{fieldTouched:v({},t.fieldTouched,Object(r.a)({},e,!0))}})),a.state.fieldRequired[e]&&(i[e]?a.setState((function(t){return{fieldValid:v({},t.fieldValid,Object(r.a)({},e,!0))}})):a.setState((function(t){return{fieldValid:v({},t.fieldValid,Object(r.a)({},e,!1))}})))},a.validateAllFields=function(){var e=!0;return Object.entries(a.state.fieldValues).forEach((function(e){var t=Object(o.a)(e,2),i=t[0],l=t[1];return a.validateField(i,l)})),Object.entries(a.state.fieldValid).forEach((function(t){var a=Object(o.a)(t,2);a[0];!1===a[1]&&(e=!1)})),e},a.saveToLocalStorage=function(){window.localStorage.setItem("PDFUser",JSON.stringify(a.state.fieldValues))},a.openResults=function(e){var t=window.open("","PersonalDataFormResults"),a=JSON.parse(window.localStorage.getItem("PDFUser")),i="<ol>From Local Storage:<li>Name: "+a.name+"</li><li>Nickname: "+a.nickName+"</li><li>E-mail: "+a.email+"</li><li>Field: "+a.field+"</li><li>Position: "+a.position+"</li></ol>";t.document.body.innerHTML=i},a.submitPersonalDataForm=function(e){e.preventDefault(),a.validateAllFields()&&(a.setState((function(e){return{formSent:!0}})),a.saveToLocalStorage())},a.state={formSent:!1,fieldValues:{name:"",nickName:"",email:"",field:"",position:""},fieldRequired:{name:!0,nickName:!1,email:!0,field:!0,position:!0},fieldTouched:{name:!1,nickName:!1,email:!1,field:!1,position:!1},fieldValid:{name:!1,nickName:!0,email:!1,field:!1,position:!1},errorMsgs:{name:"Please fill in your name",nickName:"",email:"Please use a correct e-mail address",field:"Please choose your field",position:"Please choose your position"}},a.validateField=a.validateField.bind(Object(f.a)(a)),a.updateState=a.updateState.bind(Object(f.a)(a)),a.switchSelects=a.switchSelects.bind(Object(f.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"updateState",value:function(e){var t=e.target,a=t.name,i=t.value;this.setState((function(e){return{fieldValues:v({},e.fieldValues,Object(r.a)({},a,i))}})),this.validateField(a,i)}},{key:"switchSelects",value:function(){switch(this.state.fieldValues.field){case"IT":return l.a.createElement("select",{name:"position",id:"position",onChange:this.updateState},l.a.createElement("option",{value:""},this.state.fieldValues.position?"Go back to Field":"Position"),l.a.createElement("option",{value:"Front-end developer"},"Front-end developer"),l.a.createElement("option",{value:"Back-end developer"},"Back-end developer"),l.a.createElement("option",{value:"DevOps"},"DevOps"),l.a.createElement("option",{value:"Front-end developer"},"Webmaster"));case"Product":return l.a.createElement("select",{name:"position",id:"position",onChange:this.updateState},l.a.createElement("option",{value:""},this.state.fieldValues.position?"Go back to Field":"Position"),l.a.createElement("option",{value:"Product Owner"},"Product Owner"),l.a.createElement("option",{value:"UX Designer"},"UX Designer"),l.a.createElement("option",{value:"UI Designer"},"UI Designer"));case"Content":return l.a.createElement("select",{name:"position",id:"position",onChange:this.updateState},l.a.createElement("option",{value:""},this.state.fieldValues.position?"Go back to Field":"Position"),l.a.createElement("option",{value:"Junior Copywriter"},"Junior Copywriter"),l.a.createElement("option",{value:"Senior Copywriter"},"Senior Copywriter"));default:return""}}},{key:"render",value:function(){return this.state.formSent?l.a.createElement("div",{id:"form-helper"},l.a.createElement("ol",null,l.a.createElement("li",null,"Name: ",this.state.fieldValues.name),l.a.createElement("li",null,"Nickname: ",this.state.fieldValues.nickName),l.a.createElement("li",null,"E-mail: ",this.state.fieldValues.email),l.a.createElement("li",null,"Field: ",this.state.fieldValues.field),l.a.createElement("li",null,"Position: ",this.state.fieldValues.position)),l.a.createElement("button",{onClick:this.openResults},"view results in new Tab (Local Storage)")):l.a.createElement("div",{id:"form-helper"},l.a.createElement("form",{action:"",id:"personal-data-form",onSubmit:this.submitPersonalDataForm,noValidate:!0},l.a.createElement("div",{className:"row "+(this.state.fieldRequired.name&&this.state.fieldTouched.name?this.state.fieldValid.name?"success":"error":"")},l.a.createElement("input",{name:"name",type:"text",noValidate:!0,onBlur:this.updateState}),l.a.createElement("label",{className:this.state.fieldValues.name&&"filled",htmlFor:"name"},"Name"),this.state.fieldRequired.name&&this.state.fieldTouched.name&&!this.state.fieldValid.name&&l.a.createElement("div",{className:"error-message"},this.state.errorMsgs.name)),l.a.createElement("div",{className:"row "+(this.state.fieldRequired.nickName&&this.state.fieldTouched.nickName?this.state.fieldValid.nickName?"success":"error":"")},l.a.createElement("input",{name:"nickName",type:"text",noValidate:!0,onBlur:this.updateState}),l.a.createElement("label",{className:this.state.fieldValues.nickName&&"filled",htmlFor:"nickName"},"Nickname"),this.state.fieldRequired.nickName&&this.state.fieldTouched.nickName&&!this.state.fieldValid.nickName&&l.a.createElement("div",{className:"error-message"},this.state.errorMsgs.nickName)),l.a.createElement("div",{className:"row "+(this.state.fieldRequired.email&&this.state.fieldTouched.email?this.state.fieldValid.email?"success":"error":"")},l.a.createElement("input",{name:"email",type:"email",noValidate:!0,onBlur:this.updateState}),l.a.createElement("label",{className:this.state.fieldValues.email&&"filled",htmlFor:"email"},"E-mail"),this.state.fieldRequired.email&&this.state.fieldTouched.email&&!this.state.fieldValid.email&&l.a.createElement("div",{className:"error-message"},this.state.errorMsgs.email)),l.a.createElement("div",{className:"row "+(this.state.fieldRequired.field&&this.state.fieldTouched.field?this.state.fieldValid.field?"success":"error":"")},l.a.createElement("select",{name:"field",id:"field",onChange:this.updateState,disabled:""!==this.state.fieldValues.position},l.a.createElement("option",{value:""},"Field"),l.a.createElement("option",{value:"IT"},"IT"),l.a.createElement("option",{value:"Product"},"Product"),l.a.createElement("option",{value:"Content"},"Content")),this.state.fieldRequired.field&&this.state.fieldTouched.field&&!this.state.fieldValid.field&&l.a.createElement("div",{className:"error-message"},this.state.errorMsgs.field)),this.state.fieldValues.field&&l.a.createElement("div",{className:"row "+(this.state.fieldRequired.position&&this.state.fieldTouched.position?this.state.fieldValid.position?"success":"error":"")},this.switchSelects(),this.state.fieldRequired.position&&this.state.fieldTouched.position&&!this.state.fieldValid.position&&l.a.createElement("div",{className:"error-message"},this.state.errorMsgs.position)),l.a.createElement("input",{id:"submit-button",type:"submit",value:"Submit"})),l.a.createElement("ol",null,l.a.createElement("li",null,"Name: ",this.state.fieldValues.name),l.a.createElement("li",null,"Nickname: ",this.state.fieldValues.nickName),l.a.createElement("li",null,"E-mail: ",this.state.fieldValues.email),l.a.createElement("li",null,"Field: ",this.state.fieldValues.field),l.a.createElement("li",null,"Position: ",this.state.fieldValues.position)))}}]),t}(l.a.Component);var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.08c15eda.chunk.js.map