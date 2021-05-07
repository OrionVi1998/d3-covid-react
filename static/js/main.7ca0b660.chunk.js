(this["webpackJsonpd3-covid-react"]=this["webpackJsonpd3-covid-react"]||[]).push([[0],{311:function(t,e,n){},312:function(t,e,n){},322:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(49),i=n.n(c),o=(n(311),n(10)),u=(n(312),n(339)),s=n(340),l=n(323),d=n(56),h=n(5);var f=function(){return Object(h.jsxs)(u.a,{inverted:!0,style:{height:"6vh"},children:[Object(h.jsx)(u.a.Item,{position:"left",children:Object(h.jsx)(s.a,{as:"h1",inverted:!0,children:"Covid D3"})}),Object(h.jsx)(u.a.Item,{children:Object(h.jsxs)(s.a.Subheader,{children:["A lot of thanks to",Object(h.jsx)("a",{href:"https://ourworldindata.org/coronavirus-source-data",children:" Our World In Data"})," for providing the dataset"]})}),Object(h.jsx)(u.a.Item,{position:"right",children:Object(h.jsxs)(l.a,{inverted:!0,color:"grey",floated:"right",onClick:function(){window.open("https://github.com/OrionVi1998/d3-covid-react")},children:[Object(h.jsx)(d.a,{name:"github"})," GitHub"]})})]})},j=n(11),O=n(342),b=n(341),p=n(51),v=n(52),x={TOP:50,BOTTOM:50,RIGHT:50,LEFT:50};x.XDELTA=x.LEFT+x.RIGHT,x.YDELTA=x.TOP+x.BOTTOM;var g=500,m=500,y=function(){function t(e,n,a,r){Object(p.a)(this,t),this.setCountryData=a,this.svg=j.p(e).append("svg").attr("width",g).attr("height",m).append("g").attr("transform","translate(".concat(250,", ").concat(250,")")),this.pie=j.k().sortValues(null).value((function(t){return t.value})),this.arc=j.a().innerRadius(0).outerRadius(Math.min(g,m)/2-1),this.update(n,r)}return Object(v.a)(t,[{key:"update",value:function(t,e){var n=this;t=t.filter((function(n){return n.value>j.j(t,(function(t){return t.value}))*e/100})),this.arcs=this.pie(t),this.color=j.n().domain(t.map((function(t){return t.value}))).range(j.l((function(t){return j.h(.8*t+.1)}),t.length).reverse()),this.svg.append("g").attr("stroke","white").selectAll("path").data(this.arcs).join((function(t){t.append("path").attr("fill",(function(t){return n.color(t.value)})).on("click",(function(t,e){n.setCountryData(e.data)})).attr("d",n.arc).append("title").text((function(t){return"".concat(t.data.name,": ").concat(Math.round(t.data.value).toLocaleString())}))}),(function(t){return t}),(function(t){return t.remove()}));this.svg.append("g").attr("font-family","sans-serif").attr("font-size",12).attr("text-anchor","middle").selectAll("text").data(this.arcs).join((function(t){t.append("text").attr("transform",(function(t){return"translate(".concat(function(t){var e=Math.min(g,m)/2*.8;return j.a().innerRadius(e).outerRadius(e).centroid(t)}(t),")")})).call((function(t){return t.filter((function(t){return t.endAngle-t.startAngle>.1})).append("tspan").attr("y","-0.4em").attr("font-weight","bold").text((function(t){return t.data.name}))})).call((function(t){return t.filter((function(t){return t.endAngle-t.startAngle>.25})).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).text((function(t){return t.data.value.toLocaleString()}))}))}),(function(t){return t}),(function(t){return t.remove()}))}}]),t}(),T=function(t){var e=t.data,n=t.setCountryData,r=t.chartKey,c=t.chartPercentage,i=Object(a.useRef)(null),u=Object(a.useState)(null),s=Object(o.a)(u,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){var t=e.map((function(t){return{name:t.iso_code,value:t[r]}}));t=t.sort((function(t,e){return t.value-e.value})),l?l.update(t,c):d(new y(i.current,t,(function(t){t=e.find((function(e){return e.iso_code===t.name})),n(t)}),c))}),[l,e,n,r,c]),Object(h.jsx)("div",{className:"pie-chart-area",ref:i})},C=n(337),A=n(343);var k=function(t){var e,n,r,c=t.countryData,i=Object(a.useState)(1),u=Object(o.a)(i,2),l=u[0],d=u[1],f=Object(a.useState)([]),j=Object(o.a)(f,2),O=j[0],p=j[1],v=Object(a.useState)(3),x=Object(o.a)(v,2),g=x[0],m=x[1];return Object(a.useEffect)((function(){switch(c){default:d(1),p(Object.keys(c).map((function(t){return null!==c[t]?Object(h.jsxs)(C.a.Row,{children:[Object(h.jsx)(C.a.Cell,{style:{width:"300px"},children:t.replace(new RegExp("_","gm")," ")}),Object(h.jsx)(C.a.Cell,{children:c[t].toString()})]},t):void 0})).filter((function(t){return void 0!==t}))),m(Math.round(O.length/10));break;case null:}}),[c,O.length]),c?Object(h.jsxs)(b.a.Column,{children:[Object(h.jsx)(s.a,{content:"Country: ".concat(c.location),subheader:"Click a section of the pie chart to see more data on the specific country"}),Object(h.jsx)(C.a,{definition:!0,size:"small",children:Object(h.jsx)(C.a.Body,{children:(e=O,n=10,r=l,e.slice((r-1)*n,r*n)).map((function(t){return t}))})}),Object(h.jsx)(A.a,{onPageChange:function(t,e){d(e.activePage)},activePage:l,totalPages:g})]}):Object(h.jsx)(b.a.Column,{children:Object(h.jsx)(s.a,{content:"Country Data",subheader:"Hover over a section of the pie chart to see more data"})})},w=n(83),S=n(335),D=n(334);var P=function(t){var e=t.chartKey,n=t.setChartKey,a=t.chartPercentage,r=t.setChartPercentage;return Object(h.jsx)(O.a,{select:!0,style:{height:"7vh"},children:Object(h.jsxs)(b.a,{columns:4,rows:1,verticalAlign:"middle",children:[Object(h.jsx)(b.a.Column,{textAlign:"right",children:Object(h.jsx)(w.a,{basic:!0,pointing:"right",children:"Select the data you would like to see"})}),Object(h.jsx)(b.a.Column,{textAlign:"left",children:Object(h.jsx)(S.a,{placeholder:"Total Deaths Per Million",fluid:!0,selection:!0,options:[{key:"tCases",text:"Total Cases",value:"total_cases"},{key:"tCasesMillion",text:"Total Cases Per Million",value:"total_cases_per_million"},{key:"tDeathsMillion",text:"Total Deaths Per Million",value:"total_deaths_per_million"},{key:"tDeaths",text:"Total Deaths",value:"total_deaths"}],onChange:function(t,e){n(e.value)}})}),Object(h.jsx)(b.a.Column,{textAlign:"right",children:Object(h.jsxs)(w.a,{basic:!0,pointing:"right",children:["Showing the top ",a,"% of ",e]})}),Object(h.jsx)(b.a.Column,{textAlign:"left",children:Object(h.jsx)(D.a,{min:1,max:80,onChange:function(t,e){var n=e.value;r(n)},type:"range",value:a})})]})})},_={TOP:10,BOTTOM:20,RIGHT:10,LEFT:50};_.XDELTA=_.LEFT+_.RIGHT,_.YDELTA=_.TOP+_.BOTTOM;var E=1280,M=function(){function t(e,n){var a=this;Object(p.a)(this,t),this.svg=j.p(e).append("svg").attr("width",E).attr("height",225),this.x=j.o().domain(j.f(n,(function(t){return t.date}))).range([_.LEFT,E-_.RIGHT]),this.y=j.m().domain([0,j.j(n,(function(t){return t.value}))]).nice().range([225-_.BOTTOM,_.TOP]),this.line=j.i().defined((function(t){return!isNaN(t.value)&&null!==t.value})).x((function(t){return a.x(t.date)})).y((function(t){return a.y(t.value)})),this.mainG=this.svg.append("g"),this.xAxisGroup=this.svg.append("g"),this.yAxisGroup=this.svg.append("g"),this.update(n)}return Object(v.a)(t,[{key:"update",value:function(t){var e=this;this.x.domain(j.f(t,(function(t){return t.date}))),this.y.domain([0,j.j(t,(function(t){return t.value}))]).nice(),this.yAxis=function(n){return n.attr("transform","translate(".concat(_.LEFT,",0)")).call(j.d(e.y)).call((function(t){return t.select(".domain").remove()})).call((function(e){return e.select(".tick:last-of-type text").clone().attr("x",3).attr("text-anchor","start").attr("font-weight","bold").text(t.y)}))},this.xAxis=function(t){return t.attr("transform","translate(0,".concat(225-_.BOTTOM,")")).call(j.c(e.x).ticks(16).tickSizeOuter(0))},this.xAxisGroup.call(this.xAxis),this.yAxisGroup.call(this.yAxis),this.mainG.selectAll("path").data([t]).join((function(t){return t.append("path").attr("d",(function(t){return e.line(t)}))}),(function(t){return t.attr("d",(function(t){return e.line(t)}))}),(function(t){return t.remove()})).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("stroke-linecap","round")}}]),t}(),L=function(t){var e=t.data,n=t.chartKey,r=Object(a.useRef)(null),c=Object(a.useState)(null),i=Object(o.a)(c,2),u=i[0],s=i[1];return Object(a.useEffect)((function(){var t=e.map((function(t){return{name:t.iso_code,date:t.date,value:t[n]}}));u?u.update(t):s(new M(r.current,t))}),[u,n,e]),Object(h.jsx)("div",{className:"line-chart-area",ref:r})};var G=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),u=i[0],l=i[1],d=Object(a.useState)(null),p=Object(o.a)(d,2),v=p[0],x=p[1],g=Object(a.useState)("total_cases_per_million"),m=Object(o.a)(g,2),y=m[0],C=m[1],A=Object(a.useState)(45),w=Object(o.a)(A,2),S=w[0],D=w[1],_=Object(a.useState)(null),E=Object(o.a)(_,2),M=E[0],G=E[1];return Object(a.useEffect)((function(){Object(j.e)("https://covid.ourworldindata.org/data/owid-covid-data.csv",j.b).then((function(t){var e=(t=Array.from(Object(j.g)(t,(function(t){return t.iso_code})),(function(t){var e=Object(o.a)(t,2);return{key:e[0],value:e[1]}}))).map((function(t){return t.value}));e=e.map((function(t){return t.sort((function(t,e){return t.date-e.date}))})),r(e),t=(t=e.map((function(t){return t[t.length-1]}))).filter((function(t){return!t.iso_code.startsWith("OWID")})),l(t)})).catch((function(t){return console.log(t)}))}),[]),Object(a.useEffect)((function(){D(45)}),[y]),Object(a.useEffect)((function(){null!==n&&null!==v&&G(n.find((function(t){return t[0].iso_code===v.iso_code})))}),[n,v,M]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(O.a.Group,{children:[Object(h.jsx)(f,{}),u?Object(h.jsxs)(O.a,{compact:!0,style:{height:"100%"},children:[Object(h.jsx)(P,{chartKey:y,setChartKey:C,chartPercentage:S,setChartPercentage:D}),Object(h.jsxs)(b.a,{columns:2,divided:!0,children:[Object(h.jsx)(b.a.Column,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(T,{data:u,setCountryData:x,chartKey:y,chartPercentage:S})})}),Object(h.jsx)(k,{countryData:v})]})]}):Object(h.jsx)(O.a,{loading:!0,style:{height:"92vh"}}),function(){if(u)return M?Object(h.jsx)(O.a,{children:Object(h.jsx)(L,{data:M,chartKey:y})}):Object(h.jsx)(O.a,{placeholder:!0,children:Object(h.jsx)(s.a.Subheader,{children:"Select a country to see a date visualization of the selected field"})})}()]})})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,344)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};n(321);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),R()}},[[322,1,2]]]);
//# sourceMappingURL=main.7ca0b660.chunk.js.map