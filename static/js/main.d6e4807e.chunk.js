(this["webpackJsonpvanilla-redux"]=this["webpackJsonpvanilla-redux"]||[]).push([[0],{2:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n(3),u=document.querySelector("#plus"),a=document.querySelector("#minus"),d=document.querySelector("span"),o="PLUS",l="MINUS",s=Object(c.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return e+1;case l:return e-1;default:return e}}));s.subscribe((function(){d.innerHTML=s.getState()})),u.addEventListener("click",(function(){return s.dispatch({type:o})})),a.addEventListener("click",(function(){return s.dispatch({type:l})}));var p=document.querySelector("form"),v=document.querySelector("input"),f=document.querySelector("ul"),h="ADD_TODO",m="DELETE_TODO",E=Object(c.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return[{text:t.text,id:Object(i.a)()}].concat(Object(r.a)(e));case m:return e.filter((function(e){return e.id!==t.id}));default:return e}})),b=function(e){E.dispatch(function(e){return{type:h,text:e}}(e))},y=function(e){var t=e.target.parentNode.id;E.dispatch(function(e){return{type:m,id:e}}(t))};E.subscribe((function(){var e=E.getState();f.innerHTML="",e.forEach((function(e){var t=document.createElement("li"),n=document.createElement("button");n.innerHTML="DELETE",n.addEventListener("click",y),t.id=e.id,t.innerText=e.text,t.appendChild(n),f.appendChild(t)}))}));p.addEventListener("submit",(function(e){e.preventDefault();var t=v.value;v.value="",b(t)}))}},[[2,1,2]]]);
//# sourceMappingURL=main.d6e4807e.chunk.js.map