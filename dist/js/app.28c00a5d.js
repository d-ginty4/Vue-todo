(function(){"use strict";var e={9667:function(e,t,n){var o=n(9242),i=n(3396);function d(e,t,n,o,d,l){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var l={name:"App"},a=n(89);const r=(0,a.Z)(l,[["render",d]]);var s=r,u=n(2483),c=n(7139);const m={id:"app"},b=(0,i._)("h1",null,"To-Do List",-1),p={id:"list-summary"},h={"aria-labelledby":"list-summary",class:"stack-large"};function f(e,t,n,o,d,l){const a=(0,i.up)("router-link"),r=(0,i.up)("to-do-form"),s=(0,i.up)("to-do-item");return(0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(a,{to:"/dynamic/1"},{default:(0,i.w5)((()=>[(0,i.Uk)("Contact")])),_:1}),b,(0,i.Wm)(r,{onTodoAdded:l.addToDo},null,8,["onTodoAdded"]),(0,i._)("h2",p,(0,c.zw)(l.listSummary),1),(0,i._)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.ToDoItems,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id},[(0,i.Wm)(s,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>l.updateDoneStatus(e.id),onItemDeleted:t=>l.deleteToDo(e.id),onItemEdited:t=>l.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}n(7658);const v={key:0,class:"stack-small"},g={class:"custom-checkbox"},w=["id","checked"],_=["for"],y={class:"btn-group"},D={class:"visually-hidden"},k={class:"visually-hidden"};function T(e,t,n,o,d,l){const a=(0,i.up)("to-do-item-edit-form");return d.isEditing?((0,i.wg)(),(0,i.j4)(a,{key:1,id:n.id,label:n.label,onItemEdited:l.itemEdited,onEditCancelled:l.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",g,[(0,i._)("input",{type:"checkbox",class:"checkbox",id:n.id,checked:l.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,w),(0,i._)("label",{for:n.id,class:"checkbox-label"},(0,c.zw)(n.label),9,_)]),(0,i._)("div",y,[(0,i._)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>l.toggleToItemEditForm&&l.toggleToItemEditForm(...e))},[(0,i.Uk)(" Edit "),(0,i._)("span",D,(0,c.zw)(n.label),1)]),(0,i._)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>l.deleteToDo&&l.deleteToDo(...e))},[(0,i.Uk)(" Delete "),(0,i._)("span",k,(0,c.zw)(n.label),1)])])]))}const I={class:"edit-label"},C=["id"],E={class:"btn-group"},S={class:"visually-hidden"},x={type:"submit",class:"btn btn__primary"},z={class:"visually-hidden"};function O(e,t,n,d,l,a){return(0,i.wg)(),(0,i.iD)("form",{class:"stack-small",onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[(0,i._)("div",null,[(0,i._)("label",I,'Edit Name for "'+(0,c.zw)(n.label)+'"',1),(0,i.wy)((0,i._)("input",{id:n.id,type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>l.newLabel=e)},null,8,C),[[o.nr,l.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i._)("div",E,[(0,i._)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>a.onCancel&&a.onCancel(...e))},[(0,i.Uk)(" Cancel "),(0,i._)("span",S,"editing "+(0,c.zw)(n.label),1)]),(0,i._)("button",x,[(0,i.Uk)(" Save "),(0,i._)("span",z,"edit for "+(0,c.zw)(n.label),1)])])],32)}var j={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){this.$emit("edit-cancelled")}}};const L=(0,a.Z)(j,[["render",O],["__scopeId","data-v-25848176"]]);var $=L,U={components:{ToDoItemEditForm:$},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{deleteToDo(){this.$emit("item-deleted")},toggleToItemEditForm(){this.isEditing=!0},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1},editCancelled(){this.isEditing=!1}}};const Z=(0,a.Z)(U,[["render",T],["__scopeId","data-v-6880bff3"]]);var F=Z;const q=(0,i._)("h2",{class:"label-wrapper"},[(0,i._)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1),A=(0,i._)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1);function W(e,t,n,d,l,a){return(0,i.wg)(),(0,i.iD)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[q,(0,i.wy)((0,i._)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>l.label=e),class:"input__lg"},null,512),[[o.nr,l.label,void 0,{lazy:!0,trim:!0}]]),A],32)}var H={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const V=(0,a.Z)(H,[["render",W]]);var M=V,P=n(2e3),B=n.n(P),N={name:"Home",components:{ToDoItem:F,ToDoForm:M},data(){return{ToDoItems:[{id:B()("todo-"),label:"Learn Vue",done:!1},{id:B()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:B()("todo-"),label:"Have fun",done:!0},{id:B()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:B()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1)},editToDo(e,t){const n=this.ToDoItems.find((t=>t.id===e));n.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const Y=(0,a.Z)(N,[["render",f]]);var G=Y;const K={key:0};function R(e,t,n,o,d,l){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("h1",null,"Dynamic page "+(0,c.zw)(d.page.id),1),(0,i._)("h1",null,(0,c.zw)(d.page.name),1),void 0!==d.page.random?((0,i.wg)(),(0,i.iD)("h1",K,(0,c.zw)(d.page.random),1)):(0,i.kq)("",!0),(0,i.Wm)(a,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Contact")])),_:1})],64)}const X=[{id:1,name:"name 1",random:"value"},{id:2,name:"name 2"},{id:3,name:"name 3",random:"other value"}];var J=X,Q={data(){return{page:J.find((e=>e.id==this.$route.params.id))}}};const ee=(0,a.Z)(Q,[["render",R]]);var te=ee;function ne(e,t){return(0,i.wg)(),(0,i.iD)("h1",null,"Error")}const oe={},ie=(0,a.Z)(oe,[["render",ne]]);var de=ie;const le=[{path:"/",component:G},{path:"/dynamic/:id",component:te},{path:"/:catchAll(.*)",component:de}];var ae=le,re=n(7749),se=n(3494),ue=n(8539),ce=n(4551);se.vI.add(ue.mRB,ce.vnX);const me=new u.p7({history:(0,u.PO)(),routes:ae});(0,o.ri)(s).component("font-awesome-icon",re.GN).use(me).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,d){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],d=e[u][2];for(var a=!0,r=0;r<o.length;r++)(!1&d||l>=d)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(a=!1,d<l&&(l=d));if(a){e.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[o,i,d]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,d,l=o[0],a=o[1],r=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(r)var u=r(n)}for(t&&t(o);s<l.length;s++)d=l[s],n.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return n.O(u)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9667)}));o=n.O(o)})();
//# sourceMappingURL=app.28c00a5d.js.map