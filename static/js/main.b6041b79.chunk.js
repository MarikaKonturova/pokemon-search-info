(this["webpackJsonppokemon-search-bar"]=this["webpackJsonppokemon-search-bar"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return R}));var c=n(0),a=n.n(c),r=n(10),s=n.n(r),i=(n(80),n(148)),o=n(40),j=n(31),p=n(34),h=n(149),d=n(151),b=n(152),u=n(153),l=n(116),x=n(154),O=n(155),m=n(158),f=n(156),g=n(67),k=n.n(g),v=n(145),y=n(15),w=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},C=n(41),I=n.n(C),N=n(5),P=Object(v.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",backgroundColor:Object(y.b)(e.palette.common.white,.15),paddingLeft:"20px",paddingRight:"20px",marginTop:"5px",marginBottom:"5px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"200px",margin:"5px"}}})),S=Object(i.d)((function(e){var t=P(),n=Object(c.useState)({}),a=Object(p.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),g=Object(p.a)(i,2),v=g[0],y=g[1];Object(c.useEffect)((function(){I.a.get("https://pokeapi.co/api/v2/pokemon?limit=500").then((function(e){var t=e.data.results,n={};t.forEach((function(e,t){n=Object(j.a)(Object(j.a)({},n),{},Object(o.a)({},t+1,{id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}))})),s(n)}))}),[]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(x.a,{position:"static",children:Object(N.jsx)(O.a,{children:Object(N.jsxs)("div",{className:t.searchContainer,children:[Object(N.jsx)(k.a,{className:t.searchIcon}),Object(N.jsx)(m.a,{onChange:function(e){y(e.currentTarget.value.toLowerCase())},className:t.searchInput,label:"Pokemon",variant:"standard"})]})})}),r?Object(N.jsx)(h.a,{container:!0,spacing:2,className:t.pokedexContainer,children:Object.keys(r).map((function(n){return r[+n].name.includes(v)&&function(n){var c=r[n],a=c.id,s=c.name,i=c.sprite;return Object(N.jsx)(h.a,{item:!0,xs:4,children:Object(N.jsx)(d.a,{onClick:function(){return e.history.push("/".concat(n))},children:Object(N.jsxs)(b.a,{className:t.cardContent,children:[Object(N.jsx)(u.a,{className:t.cardMedia,image:i,style:{width:"130px",height:"130px"}}),Object(N.jsx)(l.a,{children:"".concat(a,". ").concat(w(s))})]})})},n)}(+n)}))}):Object(N.jsx)(f.a,{color:"primary"})]})})),A=n(51),E=n.n(A),T=n(68),B=n(157),F=n(159),L={},M=Object(i.d)((function(e){var t=e.match?e.match.params.pokemonId:123,n=Object(c.useState)(L),a=Object(p.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(p.a)(i,2),h=o[0],d=o[1];Object(c.useEffect)((function(){Object(T.a)(E.a.mark((function e(){var n,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:n=e.sent,c=n.data,a="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(t,".png"),s(Object(j.a)(Object(j.a)({},c),{},{fullImageUrl:a})),d(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),s(!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[t]);return h?Object(N.jsxs)(N.Fragment,{children:[void 0!==r&&r&&function(){if(r){var e=r,t=e.name,n=e.id,c=e.species,a=e.height,s=e.weight,i=e.types,o=e.sprites,j=e.fullImageUrl;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(l.a,{variant:"h1",children:["".concat(n,".")," ",w(t),Object(N.jsx)("img",{src:o.front_default})]}),Object(N.jsx)("img",{style:{width:"300px",height:"300px"},src:j}),Object(N.jsx)(l.a,{variant:"h3",children:"Pokemon Info"}),Object(N.jsx)(l.a,{children:Object(N.jsx)(B.a,{href:c.url,children:c.name})}),Object(N.jsxs)(l.a,{children:[" Height: ",a]}),Object(N.jsxs)(l.a,{children:[" Weight: ",s]}),Object(N.jsxs)(l.a,{variant:"h6",children:[" Types: ",i.map((function(e){var t=e.type.name.name;return Object(N.jsx)(l.a,{children:t},t)}))]})]})}}(),!1===r&&Object(N.jsx)(l.a,{children:" Pokemon not found "}),Object(N.jsx)(F.a,{variant:"contained",onClick:function(){return e.history.push("/")},children:"back to pokedex"})]}):Object(N.jsx)(f.a,{})}));var U=Object(i.d)((function(e){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{exact:!0,path:"/pokedex",render:function(){return Object(N.jsx)(S,{})}}),Object(N.jsx)(i.a,{exact:!0,path:"/pokemon/:pokemonId",render:function(){return Object(N.jsx)(M,{})}})]})})})),J=n(19),R=Object(J.a)();s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(i.b,{history:R,children:Object(N.jsx)(U,{history:R})})}),document.getElementById("root"))},80:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.b6041b79.chunk.js.map