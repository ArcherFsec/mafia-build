"use strict";(self.webpackChunkawesome_panel=self.webpackChunkawesome_panel||[]).push([[138],{95138:function(e,l,a){a.r(l),a.d(l,{ShopView:function(){return A}});var s=a(1413),n=a(29439),i=a(13400),t=a(2199),r=a(24518),c=a(27391),o=a(20890),d=a(72791),h=a(82477),x=a(20601),u=a(82165),j=a(82839),m=a(90466),p=a(12891),f=a(35667),v=a(94666),g=a(62066),N=a(38725),w=a(57702),Z=a(73909),y=a(21041),b=a(41048),D=a(25105),k=a(44837),P=a(91826),C=a(49905),K=a(69732),S=a(45032),Y=a(5574),B=a(39157),M=a(65661),R=a(80184),O=Object.freeze({baar:1,line:2}),z={"\u0628\u0627\u0632\u0627\u0631":"#4DBD60","\u0645\u0627\u06cc\u06a9\u062a":"#0091EA","\u0632\u0631\u06cc\u0646 \u067e\u0627\u0644":"#e6c907"};function A(e){var l=d.useState(!0),a=(0,n.Z)(l,2),A=a[0],I=a[1],F=d.useState(null),W=(0,n.Z)(F,2),q=W[0],G=W[1],L=d.useState(!1),$=(0,n.Z)(L,2),_=$[0],E=$[1],V=d.useState(null),H=(0,n.Z)(V,2),J=H[0],Q=H[1],T=d.useState(null),U=(0,n.Z)(T,2),X=U[0],ee=U[1],le=d.useState(O.line),ae=(0,n.Z)(le,2),se=ae[0],ne=ae[1],ie=d.useState(1),te=(0,n.Z)(ie,2),re=te[0],ce=te[1],oe=function(){e.generateNewDataByKey(""),I(!0),G(null),console.log(e.shopData)},de=function(){if(null!==q){var l,a=new Date(q),s="".concat(a.getFullYear(),"/").concat(a.getMonth(),"/").concat(a.getDate());console.log(s),l=s,e.generateNewDataByKey(l),I(!1)}},he=function(e){return function(){ce(e)}},xe=function(e){return function(){ne(e)}},ue=function(){switch(_&&E(!1),re){case 1:null!==J&&null!==X&&(e.getRange(J,X),I(!1));break;case 2:de();break;default:oe()}},je=function(e){return function(l){var a=l.cx,s=l.cy,n=l.midAngle,i=l.innerRadius,t=l.outerRadius,r=l.percent,c=l.index,o=Math.PI/180,d=i+5*(t-i),h=a+d*Math.cos(-n*o),x=s+d*Math.sin(-n*o);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("text",{style:{fontSize:"0.8rem"},x:h,y:x,fill:z[e[c].platform],textAnchor:"middle",dominantBaseline:"central",children:["".concat((100*r).toFixed(0),"%")," ",e[c].platform]}),(0,R.jsx)("text",{x:h,y:x+15,style:{fontSize:"0.5rem"},fill:z[e[c].platform],textAnchor:"middle",dominantBaseline:"central",children:e[c].sellAmount})]})}};return(0,R.jsx)("div",{className:"row",children:(0,R.jsxs)("div",{className:"col-12",children:[(0,R.jsxs)(Y.Z,{open:_,fullWidth:!0,onClose:ue,children:[(0,R.jsx)(M.Z,{children:(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:"col-1",children:(0,R.jsx)(i.Z,{onClick:ue,color:"secondary",children:(0,R.jsx)(C.Z,{})})}),(0,R.jsx)("div",{className:"col-10 pt-1",children:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"})]})}),(0,R.jsxs)(B.Z,{children:[(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12 text-end",children:(0,R.jsxs)(t.Z,{size:"small",color:"secondary","aria-label":"medium secondary button group",children:[(0,R.jsx)(r.Z,{variant:1===re?"contained":"outlined",onClick:he(1),children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0628\u06cc\u0646 \u062f\u0648 \u062a\u0627\u0631\u06cc\u062e"}),(0,R.jsx)(r.Z,{variant:2===re?"contained":"outlined",onClick:he(2),children:"\u0646\u0645\u0627\u06cc\u0634 \u0631\u06cc\u0632 \u0646\u062a\u0627\u06cc\u062c"})]})})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsxs)("div",{className:"col-12 p-5",children:[1===re&&(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:"col-6 text-center",children:(0,R.jsx)(D.O,{label:"\u0627\u0632 \u062a\u0627\u0631\u06cc\u062e",value:J,inputFormat:"YYYY/MM/DD",DialogProps:{fullWidth:!0},InputProps:{dir:"ltr"},OpenPickerButtonProps:{color:"primary"},onChange:function(e){Q(e)},renderInput:function(e){return(0,R.jsx)(c.Z,(0,s.Z)({},e))}})}),(0,R.jsx)("div",{className:"col-6 text-center",children:(0,R.jsx)(D.O,{label:"\u062a\u0627 \u062a\u0627\u0631\u06cc\u062e",value:X,inputFormat:"YYYY/MM/DD",DialogProps:{fullWidth:!0},InputProps:{dir:"ltr"},OpenPickerButtonProps:{color:"primary"},onChange:function(e){ee(e)},renderInput:function(e){return(0,R.jsx)(c.Z,(0,s.Z)({},e))}})})]}),2===re&&(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12",children:(0,R.jsx)(D.O,{label:"\u062a\u0627\u0631\u06cc\u062e",value:q,inputFormat:"YYYY/MM/DD",DialogProps:{fullWidth:!0},InputProps:{dir:"ltr"},OpenPickerButtonProps:{color:"secondary"},onChange:function(e){G(e)},renderInput:function(e){return(0,R.jsx)(c.Z,(0,s.Z)({},e))}})})})]})})]})]}),(0,R.jsx)("div",{className:"row",children:(0,R.jsxs)("div",{className:"col-12 mt-5 px-5",children:[(0,R.jsx)(o.Z,{align:"center",variant:"h5",children:"\u0622\u0645\u0627\u0631 \u0641\u0631\u0648\u0634"}),(0,R.jsx)("hr",{})]})}),(0,R.jsxs)("div",{className:"row",children:[(0,R.jsx)("div",{className:"col-5 text-end",children:(0,R.jsx)(h.Z,{title:A?"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0622\u0645\u0627\u0631\u06cc":"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0622\u0645\u0627\u0631 \u06a9\u0644\u06cc",children:A?(0,R.jsx)(i.Z,{color:"primary",onClick:function(){E(!0)},children:(0,R.jsx)(k.Z,{})}):(0,R.jsx)(i.Z,{color:"primary",onClick:function(){oe()},children:(0,R.jsx)(P.Z,{})})})}),(0,R.jsx)("div",{className:"col-6 text-start",children:(0,R.jsxs)(t.Z,{size:"small",color:"secondary","aria-label":"medium secondary button group",children:[(0,R.jsx)(r.Z,{variant:se===O.line?"contained":"outlined",onClick:xe(O.line),children:(0,R.jsx)(S.Z,{})}),(0,R.jsx)(r.Z,{variant:se===O.baar?"contained":"outlined",onClick:xe(O.baar),children:(0,R.jsx)(K.Z,{})})]})})]}),(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12",children:0===e.shopData.length?(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12 p-5",children:(0,R.jsx)(o.Z,{align:"center",children:"\u0647\u06cc\u0686 \u0641\u0627\u06a9\u062a\u0648\u0631\u06cc \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 !"})})}):(0,R.jsx)(x.h,{width:"100%",height:390,children:se===O.line?(0,R.jsxs)(u.w,{width:700,height:800,data:e.shopData,margin:{top:5,right:30,bottom:5},children:[(0,R.jsx)(j.q,{strokeDasharray:"3 3"}),(0,R.jsx)(m.K,{dataKey:"date"}),(0,R.jsx)(p.B,{}),(0,R.jsx)(f.u,{}),(0,R.jsx)(v.D,{}),(0,R.jsx)(g.x,{type:"monotone",dataKey:"\u0645\u0642\u062f\u0627\u0631 \u0641\u0631\u0648\u0634",stroke:"#8884d8",activeDot:{r:1}})]}):(0,R.jsxs)(N.v,{width:700,height:800,data:e.shopData,margin:{top:5,right:30,bottom:5},barSize:10,barGap:10,outerRadius:40,children:[(0,R.jsx)(j.q,{strokeDasharray:"5 5"}),(0,R.jsx)(m.K,{dataKey:"date",scale:"point",padding:{left:50,right:50}}),(0,R.jsx)(p.B,{}),(0,R.jsx)(f.u,{}),(0,R.jsx)(v.D,{}),(0,R.jsx)(w.$,{background:{fillOpacity:0},dataKey:"\u0645\u0642\u062f\u0627\u0631 \u0641\u0631\u0648\u0634",fill:"#8884d8"})]})})})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsxs)("div",{className:"col-12 mt-5 px-5",children:[(0,R.jsx)(o.Z,{align:"center",variant:"h5",children:"\u0622\u0645\u0627\u0631 \u0641\u0631\u0648\u0634 \u0645\u062d\u0635\u0648\u0644\u0627\u062a"}),(0,R.jsx)("hr",{})]})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12",children:(0,R.jsx)(x.h,{width:"100%",height:390,children:(0,R.jsxs)(N.v,{width:700,height:800,data:e.mostSellingProductsData,margin:{top:5,right:30,bottom:5},barSize:10,barGap:10,outerRadius:40,children:[(0,R.jsx)(j.q,{strokeDasharray:"5 5"}),(0,R.jsx)(m.K,{dataKey:"date",scale:"point",padding:{left:100,right:100}}),(0,R.jsx)(p.B,{}),(0,R.jsx)(f.u,{}),(0,R.jsx)(v.D,{}),(0,R.jsx)(w.$,{dataKey:"\u0645\u0642\u062f\u0627\u0631 \u0641\u0631\u0648\u0634",fill:"#8884d8",background:{fill:"transparent"}})]})})})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsxs)("div",{className:"col-12 mt-5 px-5",children:[(0,R.jsx)(o.Z,{align:"center",variant:"h5",children:"\u0622\u0645\u0627\u0631 \u067e\u0644\u062a\u0641\u0631\u0645 \u0647\u0627"}),(0,R.jsx)("hr",{})]})}),(0,R.jsxs)("div",{className:"row p-5",children:[(0,R.jsxs)("div",{className:"col-md-5 card-bg m-auto shadow p-0 my-3",children:[(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-sm-12",children:(0,R.jsx)(o.Z,{align:"center",className:"pt-5",children:"\u0645\u0642\u062f\u0627\u0631 \u0641\u0631\u0648\u0634"})})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12 p-0",children:(0,R.jsx)(x.h,{width:"100%",height:150,children:(0,R.jsx)(Z.u,{width:250,height:250,children:(0,R.jsx)(y.b,{data:e.sellingPlatformData,cx:"50%",cy:"50%",labelLine:!1,label:je(e.sellingPlatformData),outerRadius:50,innerRadius:40,fill:"#000",dataKey:"sellAmount",children:e.sellingPlatformData.map((function(e,l){return(0,R.jsx)(b.b,{fill:z[e.platform]},"cell-".concat(l))}))})})})})})]}),(0,R.jsxs)("div",{className:"col-md-5 card-bg m-auto shadow p-0 my-3",children:[(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-sm-12",children:(0,R.jsx)(o.Z,{align:"center",className:"pt-5",children:"\u062a\u0639\u062f\u0627\u062f \u0641\u0627\u06a9\u062a\u0648\u0631 \u0647\u0627\u06cc \u062b\u0628\u062a \u0634\u062f\u0647"})})}),(0,R.jsx)("div",{className:"row",children:(0,R.jsx)("div",{className:"col-12 p-0",children:(0,R.jsx)(x.h,{width:"100%",height:150,children:(0,R.jsx)(Z.u,{width:250,height:250,children:(0,R.jsx)(y.b,{data:e.sellingPlatformCount,cx:"50%",cy:"50%",labelLine:!1,label:je(e.sellingPlatformCount),outerRadius:50,innerRadius:40,fill:"#8884d8",dataKey:"sellAmount",children:e.sellingPlatformCount.map((function(e,l){return(0,R.jsx)(b.b,{fill:z[e.platform]},"cell-".concat(l))}))})})})})})]})]})]})})}l.default=A}}]);
//# sourceMappingURL=138.1ddfead1.chunk.js.map