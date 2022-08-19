(this["webpackJsonpeunicedhivya.github.io"]=this["webpackJsonpeunicedhivya.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(10),i=c.n(s),a=(c(16),c(3)),o=(c(17),c(0));var l=function(e){var t=e.iconclass,c=e.icontext,n=e.anchorlink;return Object(o.jsx)("li",{className:"nav__item",children:Object(o.jsxs)("a",{href:n,className:"nav__link",children:[Object(o.jsx)("span",{className:t}),Object(o.jsx)("span",{className:"icon-text",children:c})]})})};var r=function(){return Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)(l,{iconclass:"icon-home hover-icon",icontext:"Home",anchorlink:"#home"}),Object(o.jsx)(l,{iconclass:"icon-user hover-icon",icontext:"About",anchorlink:"#about"}),Object(o.jsx)(l,{iconclass:"icon-briefcase hover-icon",icontext:"Portfolio",anchorlink:"#portfolio"}),Object(o.jsx)(l,{iconclass:"icon-envelope hover-icon",icontext:"Contact",anchorlink:"#contact"})]})};var j=function(e){var t=e.sticky;return Object(o.jsxs)("nav",{className:t?"site-nav sticky":"site-nav",id:"site-nav",children:[Object(o.jsx)("div",{className:"site-branding",children:"ED"}),Object(o.jsx)(r,{})]})};c(19);var d=function(){return Object(o.jsx)("section",{className:"container section",id:"about",children:Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsxs)("div",{className:"about-text",children:[Object(o.jsx)("h2",{className:"headline",children:"About Me"}),Object(o.jsx)("p",{className:"body-copy",children:"I started my career as a designer and then became a front end developer. I developed interactive dashboards and award winning interactive stories using JavaScript and Python for Data scraping / processing. I went on to upskill myself to become a full stack developer as a continuous process of upgrading to take my career on a growth path. Intend to continue up skilling to reach the ultimate levels."}),Object(o.jsx)("h3",{className:"subhead",children:"My Skills"}),Object(o.jsxs)("ul",{className:"myskills",children:[Object(o.jsx)("li",{children:"HTML / CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"JQuery"}),Object(o.jsx)("li",{children:"D3JS"}),Object(o.jsx)("li",{children:"ReactJS"}),Object(o.jsx)("li",{children:"NodeJS"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"Python"}),Object(o.jsx)("li",{children:"AWS"}),Object(o.jsx)("li",{children:"UI/UX Design"}),Object(o.jsx)("li",{children:"Illustration"})]})]}),Object(o.jsx)("img",{src:"https://via.placeholder.com/300"})]})})};var h=function(){return Object(o.jsx)("div",{className:"scroll__down",children:Object(o.jsxs)("a",{href:"#about",className:"mouse__wrapper",children:[Object(o.jsx)("span",{className:"home__scroll-name",children:"Scroll Down"}),Object(o.jsx)("span",{className:"mouse",children:Object(o.jsx)("span",{className:"wheel"})})]})})};c(20);var b=function(e){var t=e.sticky;return Object(o.jsxs)("section",{className:"",id:"home",children:[Object(o.jsxs)("div",{className:"home__content",id:"homeContent",children:[Object(o.jsx)("h1",{children:"Eunice Dhivya"}),Object(o.jsx)("p",{children:"I\u2019m a fullstack developer specializing in designing and developing dashboards and interactive stories."}),Object(o.jsx)("nav",{className:t?"home-nav sticky":"home-nav",id:"home-nav",children:Object(o.jsx)(r,{})})]}),Object(o.jsx)(h,{})]})},u=c(9),m=c.n(u),x=c(11);c(22),c(23);var O=function(e){var t=e.title,c=e.img,n=e.demolink,s=e.githublink;return console.log("githublink",s),Object(o.jsxs)("div",{className:"portfolioCard box-shadow",children:[Object(o.jsx)("img",{src:"https://myportfoliopics.s3.amazonaws.com/portfolio/"+c+".jpg",alt:""}),Object(o.jsxs)("div",{className:"portfolioCard__text",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("div",{className:"portfolioCard__links",children:[n&&Object(o.jsxs)("a",{href:n,target:"_blank",children:[Object(o.jsx)("span",{className:"icon-link"})," Demo"]}),"#"!==s&&Object(o.jsxs)("a",{href:s,target:"_blank",children:[Object(o.jsx)("span",{className:"icon-social-github"})," Github"]})]})]})]})};var v=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://mytest-ed.us-east-1.elasticbeanstalk.com/api/portfolio",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("data",e),s(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("section",{className:"container section",id:"portfolio",children:[Object(o.jsx)("h2",{className:"headline",children:"Portfolio"}),Object(o.jsxs)("div",{className:"pageTitleFullWidth",children:[Object(o.jsx)("h2",{className:"pageTitle",children:"Portfolio"}),Object(o.jsx)("div",{className:"portfolioMenu"})]}),Object(o.jsx)("div",{className:"portfolioGrid",children:c.map((function(e){return Object(o.jsx)(O,{title:e.title,img:e.img,demolink:e.demolink,githublink:e.githublink},e._id)}))})]})};var p=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=(t[0],t[1]),s=Object(n.useState)(!1),i=Object(a.a)(s,2),l=i[0],r=i[1];Object(n.useEffect)((function(){window.addEventListener("scroll",h);var e=document.getElementById("homeContent").getBoundingClientRect().bottom;return c(e),function(){window.removeEventListener("scroll",h)}}),[]);var h=function(){window.scrollY>=300?r(!0):r(!1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{sticky:l}),Object(o.jsxs)("div",{id:"innerContent",children:[Object(o.jsx)(j,{sticky:l}),Object(o.jsxs)("main",{className:l?"site-content shift":"site-content",children:[Object(o.jsx)(d,{}),Object(o.jsx)(v,{})]})]})]})};c(24),c(5),c(6);i.a.render(Object(o.jsx)("div",{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.14f9a64f.chunk.js.map