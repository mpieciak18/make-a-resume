(this["webpackJsonpresume-maker"]=this["webpackJsonpresume-maker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),o=(n(14),n(2)),d=n(3),s=n(4),l=n(6),p=n(5),u=(n(8),n(15),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.call(this)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"header",children:[Object(u.jsxs)("div",{id:"header-left",children:[Object(u.jsx)("img",{id:"icon",src:"/resume-maker/images/icon.png",alt:"page icon"}),Object(u.jsx)("h1",{id:"title",children:"R\xe9sum\xe9 Maker"})]}),Object(u.jsxs)("div",{id:"header-right",children:[Object(u.jsxs)("div",{id:"preview-area",children:[Object(u.jsx)("p",{children:"Preview Off"}),Object(u.jsx)("input",{type:"checkbox",id:"preview-button",class:"toggle-input"}),Object(u.jsx)("label",{class:"preview-button toggle-label",for:"preview-button",children:"Toggle"})]}),Object(u.jsx)("button",{id:"download-button",type:"button",children:"Download PDF"})]})]})}}]),n}(c.a.Component),j=(n(17),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).addBlock=function(e){var t=e.target.parentNode.parentNode.parentNode.id;a.props.addObj(t)},a.delBlock=function(e){var t=e.target.parentNode.parentNode,n=t.parentNode.id,c=Array.from(t.parentNode.children).indexOf(t)-1;console.log(n),console.log(c),a.props.delObj(n,c)},a.updatePersonal=function(e){a.props.updatePersonal(e)},a.updateExperience=function(e){a.props.updateExperience(e)},a.updateEducation=function(e){a.props.updateEducation(e)},a}return Object(s.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.experience.length;t++){var n,a=Object(u.jsx)("button",{type:"button",className:"add-button",onClick:this.addBlock,children:"Add"}),c=Object(u.jsx)("button",{type:"button",className:"del-button",onClick:this.delBlock,children:"Delete"}),i=void 0,r=this.props.experience[t];i=1==this.props.experience.length?Object(u.jsx)("div",{children:a}):t!=this.props.experience.length-1?Object(u.jsx)("div",{children:c}):Object(u.jsxs)("div",{children:[a,c]}),n=Object(u.jsxs)("div",{className:"exp-block",children:[Object(u.jsx)("input",{type:"text",placeholder:"Company",value:r.company,onChange:this.updateExperience}),Object(u.jsx)("input",{type:"text",placeholder:"Position",value:r.position,onChange:this.updateExperience}),Object(u.jsx)("input",{type:"text",placeholder:"Start Date",value:r.start,onChange:this.updateExperience}),Object(u.jsx)("input",{type:"text",placeholder:"End Date",value:r.end,onChange:this.updateExperience}),Object(u.jsx)("input",{type:"text",placeholder:"Description",value:r.descr,onChange:this.updateExperience}),i]}),e=[].concat(Object(o.a)(e),[n])}for(var d=[],s=0;s<this.props.education.length;s++){var l,p=Object(u.jsx)("button",{type:"button",className:"add-button",onClick:this.addBlock,children:"Add"}),h=Object(u.jsx)("button",{type:"button",className:"del-button",onClick:this.delBlock,children:"Delete"}),j=void 0,b=this.props.education[s];j=1==this.props.education.length?Object(u.jsx)("div",{children:p}):s!=this.props.education.length-1?Object(u.jsx)("div",{children:h}):Object(u.jsxs)("div",{children:[p,h]}),l=Object(u.jsxs)("div",{className:"edu-block",children:[Object(u.jsx)("input",{type:"text",placeholder:"Program",value:b.program,onChange:this.updateEducation}),Object(u.jsx)("input",{type:"text",placeholder:"University",value:b.uni,onChange:this.updateEducation}),Object(u.jsx)("input",{type:"text",placeholder:"Start Date",value:b.start,onChange:this.updateEducation}),Object(u.jsx)("input",{type:"text",placeholder:"End Date",value:b.end,onChange:this.updateEducation}),Object(u.jsx)("input",{type:"text",placeholder:"Description",value:b.descr,onChange:this.updateEducation}),j]}),d=[].concat(Object(o.a)(d),[l])}return Object(u.jsxs)("div",{id:"form",children:[Object(u.jsxs)("div",{id:"personal",children:[Object(u.jsx)("h2",{children:"Personal Information"}),Object(u.jsxs)("div",{className:"personal-block",children:[Object(u.jsx)("input",{type:"text",placeholder:"Name",onChange:this.updatePersonal}),Object(u.jsx)("input",{type:"text",placeholder:"Title",onChange:this.updatePersonal}),Object(u.jsx)("input",{type:"text",placeholder:"Email",onChange:this.updatePersonal}),Object(u.jsx)("input",{type:"text",placeholder:"Phone",onChange:this.updatePersonal}),Object(u.jsx)("input",{type:"text",placeholder:"Location",onChange:this.updatePersonal}),Object(u.jsx)("input",{type:"text",placeholder:"Objective",onChange:this.updatePersonal})]})]}),Object(u.jsxs)("div",{id:"experience",children:[Object(u.jsx)("h2",{children:"Work Experience"}),e]}),Object(u.jsxs)("div",{id:"education",children:[Object(u.jsx)("h2",{children:"Education"}),d]})]})}}]),n}(c.a.Component)),b=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.call(this)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{})}}]),n}(c.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updatePersonal=function(t){var n=t.target.parentNode;e.setState({personal:{name:n.children[0].value,title:n.children[1].value,phone:n.children[2].value,email:n.children[3].value,location:n.children[4].value,objective:n.children[5].value}})},e.updateExperience=function(t){for(var n=t.target.parentNode.parentNode,a=[],c=1;c<n.children.length;c++){var i=n.children[c],r={company:i.children[0].value,position:i.children[1].value,start:i.children[2].value,end:i.children[3].value,descr:i.children[4].value};a=[].concat(Object(o.a)(a),[r])}e.setState({experience:a})},e.updateEducation=function(t){for(var n=t.target.parentNode.parentNode,a=[],c=1;c<n.children.length;c++){var i=n.children[c],r={program:i.children[0].value,uni:i.children[1].value,start:i.children[2].value,end:i.children[3].value,descr:i.children[4].value};a=[].concat(Object(o.a)(a),[r])}e.setState({education:a})},e.addObj=function(t){if("experience"==t){var n=e.state.experience;e.setState({experience:[].concat(Object(o.a)(n),[{company:"",position:"",start:"",end:"",descr:""}])})}else if("education"==t){var a=e.state.education;e.setState({education:[].concat(Object(o.a)(a),[{program:"",uni:"",start:"",end:"",descr:""}])})}},e.delObj=function(t,n){if("experience"==t){var a=e.state.experience,c=[].concat(Object(o.a)(a.slice(0,n)),Object(o.a)(a.slice(n+1)));e.setState({experience:c})}else if("education"==t){var i=e.state.education,r=[].concat(Object(o.a)(i.slice(0,n)),Object(o.a)(i.slice(n+1)));e.setState({education:r})}},e.state={personal:{name:"",title:"",phone:"",email:"",location:"",objective:""},experience:[{company:"",position:"",start:"",end:"",descr:""}],education:[{program:"",uni:"",start:"",end:"",descr:""}]},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"main",children:[Object(u.jsx)(h,{}),Object(u.jsx)(j,{updatePersonal:this.updatePersonal,personal:this.state.personal,updateExperience:this.updateExperience,experience:this.state.experience,updateEducation:this.updateEducation,education:this.state.education,addObj:this.addObj,delObj:this.delObj}),Object(u.jsx)(b,{})]})}}]),n}(c.a.Component);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.c24f64fb.chunk.js.map