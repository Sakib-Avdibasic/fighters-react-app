(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var o=r(1),i=r(6),n=r.n(i),a=(r(12),r(7)),c=r(5),s=r(0),d=function(e){var t=e.options,r=e.filter,o=e.currentFilter;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:o===e&&"active-btn",onClick:function(){return r(e)},children:e})})}))})},l=function(e){var t=e.info;e.orderNum;return Object(s.jsxs)("article",{className:"fighter",children:[Object(s.jsx)("img",{src:t.photo,alt:"Fighter",className:"fighter-photo"}),Object(s.jsxs)("div",{className:"fighter-info",children:[Object(s.jsxs)("div",{className:"general-info",children:[Object(s.jsx)("h3",{className:"fighter-name",children:t.name}),Object(s.jsxs)("h3",{className:"record",children:[t.record.win,"-",t.record.loss]})]}),Object(s.jsx)("p",{className:"fighter-description",children:t.description})]})]})},h=function(e){var t=e.items;return Object(s.jsx)("section",{children:t.map((function(e,t){return Object(s.jsx)(l,{info:e,orderNum:t+1})}))})},m=[{name:"hangman page",record:{win:17,loss:2},description:"One of the hottest stars in AEW. Currently on horseback riding his way to the AEW World Championship",category:"male",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759124/item-1_yvmq2l_mc1vqy.jpg"},{name:"ricky starks",record:{win:14,loss:2},description:"Promising young talent. We thought of letting the talent do their own bios, but he broke the word limit",category:"male",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759829/item-2_px2uo8.jpg"},{name:"lucha bros",record:{win:15,loss:2},description:"The current AEW World Tag Team Champions, a title which they won with literal blood, sweat and tears",category:"tag team",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759120/item-3_ke5zss_v9xkbt.jpg"},{name:"britt baker",record:{win:17,loss:4},description:"Adam Cole's girlfriend",category:"female",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759823/item-5_jxdohg.jpg"},{name:"young bucks",record:{win:10,loss:2},description:"An awe-inducing and dominant team. Their in-ring skills are as good as their fashion sense is bad",category:"tag team",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759541/item-5_vplvgv.jpg"},{name:"kris statlander",record:{win:21,loss:1},description:"Alien from another galaxy",category:"female",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759122/item-6_vwuykp_neezxe.jpg"},{name:"the butcher & the blade",record:{win:8,loss:2},description:"A straight-to-the-point highly dangerous and unrelenting team, aided by The Bunny",category:"tag team",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759122/item-7_zpbr7q_j3gqcz.jpg"},{name:"miro",record:{win:16,loss:2},description:"A killer motivated only by his God and his wife on a path of vengeance after losing his title",category:"male",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759124/item-8_gxqdjn_asfqhv.jpg"},{name:"tay conti",record:{win:33,loss:5},description:"Jiu-jitsu black belt. Fun-loving when left unprovoked",category:"female",photo:"https://res.cloudinary.com/dkqrhdu4c/image/upload/v1634759840/item-9_kpkdah.png"}],u=function(){var e=Object(o.useState)(m),t=Object(c.a)(e,2),r=t[0],i=t[1],n=Object(o.useState)("all"),l=Object(c.a)(n,2),u=l[0],p=l[1],g=["all"].concat(Object(a.a)(new Set(m.map((function(e){return e.category})))));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{children:Object(s.jsx)("nav",{children:Object(s.jsx)(d,{options:g,filter:function(e){i("all"!==e?m.filter((function(t){return t.category===e})):m),p(e)},currentFilter:u})})}),Object(s.jsx)("main",{children:Object(s.jsx)(h,{items:r})})]})};n.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9b252e1d.chunk.js.map