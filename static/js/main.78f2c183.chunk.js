(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var a=t(1),c=t(6),n=t.n(c),i=(t(12),t(7)),s=t(5),o=t(0),l=function(e){var r=e.options,t=e.filter,a=e.currentFilter;return Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:a===e&&"active-btn",onClick:function(){return t(e)},children:e})})}))})},h=function(e){var r=e.info,t=e.orderNum;return Object(o.jsxs)("article",{className:"fighter",children:[Object(o.jsx)("img",{src:"../assets/item-".concat(t,".jpg"),alt:"Fighter",className:"fighter-photo"}),Object(o.jsxs)("div",{className:"fighter-info",children:[Object(o.jsxs)("div",{className:"general-info",children:[Object(o.jsx)("h3",{className:"fighter-name",children:r.name}),Object(o.jsxs)("h3",{className:"record",children:[r.record.win,"-",r.record.loss]})]}),Object(o.jsx)("p",{className:"fighter-description",children:r.description})]})]})},u=function(e){var r=e.items;return Object(o.jsx)("section",{children:r.map((function(e,r){return Object(o.jsx)(h,{info:e,orderNum:r+1})}))})},m=[{name:"Hangman Page",record:{win:17,loss:2},description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",category:"male"},{name:"Ricky Starks",record:{win:14,loss:2},description:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",category:"male"},{name:"Lucha Bros",record:{win:15,loss:2},description:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",category:"tag team"},{name:"Britt Baker",record:{win:17,loss:4},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"female"},{name:"Young Bucks",record:{win:10,loss:2},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"tag team"},{name:"Kris Statlander",record:{win:21,loss:1},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"female"},{name:"The Butcher & The Blade",record:{win:8,loss:2},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"tag team"},{name:"Miro",record:{win:16,loss:2},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"male"},{name:"Tay Conti",record:{win:33,loss:5},description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",category:"female"}],d=function(){var e=Object(a.useState)(m),r=Object(s.a)(e,2),t=r[0],c=r[1],n=Object(a.useState)("all"),h=Object(s.a)(n,2),d=h[0],b=h[1],f=["all"].concat(Object(i.a)(new Set(m.map((function(e){return e.category})))));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:Object(o.jsx)("nav",{children:Object(o.jsx)(l,{options:f,filter:function(e){c("all"!==e?m.filter((function(r){return r.category===e})):m),b(e)},currentFilter:d})})}),Object(o.jsx)("main",{children:Object(o.jsx)(u,{items:t})})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.78f2c183.chunk.js.map