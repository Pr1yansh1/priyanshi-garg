(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5736)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,a=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,c=void 0!==s&&s,m=e.priority,f=void 0!==m&&m,b=e.loading,N=e.lazyRoot,A=void 0===N?null:N,P=e.lazyBoundary,z=e.className,I=e.quality,L=e.width,T=e.height,M=e.style,R=e.objectFit,E=e.objectPosition,W=e.onLoadingComplete,B=e.placeholder,O=void 0===B?"empty":B,H=e.blurDataURL,D=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=d.useContext(g.ImageConfigContext),F=d.useMemo((function(){var e=j||q||h.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return o({},e,{allSizes:t,deviceSizes:n})}),[q]),G=D,U=n?"responsive":"intrinsic";"layout"in G&&(G.layout&&(U=G.layout),delete G.layout);var J=S;if("loader"in G){if(G.loader){var Z=G.loader;J=function(e){e.config;var t=l(e,["config"]);return Z(t)}}delete G.loader}var Y="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var V=w(t)?t.default:t;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(H=H||V.blurDataURL,Y=V.src,(!U||"fill"!==U)&&(T=T||V.height,L=L||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}var X=!f&&("lazy"===b||"undefined"===typeof b);((t="string"===typeof t?t:Y).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,X=!1);v.has(t)&&(X=!1);_&&(c=!0);var K,Q=a(d.useState(!1),2),$=Q[0],ee=Q[1],te=a(p.useIntersection({rootRef:A,rootMargin:P||"200px",disabled:!X}),3),ne=te[0],ie=te[1],ae=te[2],re=!X||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:E},de=k(L),ue=k(T),he=k(I);0;var pe=Object.assign({},M,le),ge="blur"!==O||$?{}:{backgroundSize:R||"cover",backgroundPosition:E||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===U)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var me=ue/de,fe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===U?(oe.display="block",oe.position="relative",ce=!0,se.paddingTop=fe):"intrinsic"===U?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,se.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===U&&(oe.display="inline-block",oe.position="relative",oe.width=de,oe.height=ue)}else 0;var _e={src:x,srcSet:void 0,sizes:void 0};re&&(_e=y({config:F,src:t,unoptimized:c,layout:U,width:de,quality:he,sizes:n,loader:J}));var je=t;0;var ve,xe="imagesrcset",be="imagesizes";xe="imageSrcSet",be="imageSizes";var we=(i(ve={},xe,_e.srcSet),i(ve,be,_e.sizes),ve),ye=d.default.useLayoutEffect,ke=d.useRef(W),Se=d.useRef(t);d.useEffect((function(){ke.current=W}),[W]),ye((function(){Se.current!==t&&(ae(),Se.current=t)}),[ae,t]);var Ne=o({isLazy:X,imgAttributes:_e,heightInt:ue,widthInt:de,qualityInt:he,layout:U,className:z,imgStyle:pe,blurStyle:ge,loading:b,config:F,unoptimized:c,placeholder:O,loader:J,srcString:je,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ne,isVisible:re,noscriptSizes:n},G);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:oe},ce?d.default.createElement("span",{style:se},K?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,d.default.createElement(C,Object.assign({},Ne))),f?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+_e.src+_e.srcSet+_e.sizes,rel:"preload",as:"image",href:_e.srcSet?void 0:_e.src},we))):null)};var o=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,d=c(n(7294)),u=s(n(5443)),h=n(9309),p=n(7190),g=n(9977),m=(n(3794),n(2392));var f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},_=f.experimentalUnoptimized,j={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},v=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=new URL("".concat(t.path).concat(A(n))),o=r.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),a&&o.set("q",a.toString());return r.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function y(e){var t=e.config,n=e.src,i=e.unoptimized,a=e.layout,o=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var a=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var d,u=.01*(d=Math).min.apply(d,r(l));return{widths:o.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,a,c),u=d.widths,h=d.kind,p=u.length-1;return{sizes:c||"w"!==h?c:"100vw",srcSet:u.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===h?e:i+1).concat(h)})).join(", "),src:l({config:t,src:n,quality:s,width:u[p]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=b.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,i,a,r){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&r(!0),null==a?void 0:a.current)){var n=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:o})}})))}var C=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,a=e.layout,r=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,h=e.placeholder,p=e.loading,g=e.srcString,m=e.config,f=e.unoptimized,_=e.loader,j=e.onLoadingCompleteRef,v=e.setBlurComplete,x=e.setIntersection,b=e.onLoad,w=e.onError,k=(e.isVisible,e.noscriptSizes),S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=u?"lazy":p,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":a,className:r,style:o({},s,c),ref:d.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&N(e,g,0,h,j,v)}),[x,g,a,h,j,v]),onLoad:function(e){N(e.currentTarget,g,0,h,j,v),b&&b(e)},onError:function(e){"blur"===h&&v(!0),w&&w(e)}})),(u||"blur"===h)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,y({config:m,src:g,unoptimized:f,layout:a,width:n,quality:i,sizes:k,loader:_}),{decoding:"async","data-nimg":a,style:s,className:r,loading:p}))))};function A(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});var i=n(5893),a=n(5675),r=n.n(a),o=n(1163),s=n(2522),c=n.n(s),l=function(e){var t=(0,o.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[!e.local&&(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:c().inlineLink,children:(0,i.jsx)("span",{children:e.children})}),e.local&&(0,i.jsx)("a",{className:c().inlineLink,onClick:function(){t.push(e.href)},children:(0,i.jsx)("span",{children:e.children})})]})},d=n(2031),u=n.n(d),h=function(e){return(0,i.jsx)("div",{id:e.id,className:u().scrollTo})},p=n(8092),g=n.n(p),m=function(e){for(var t=e.list,n=e.numCols,a="",r=[],o=0;o<n;o++){a+="1fr",o!==n-1&&(a+=" ");for(var s=[],c=o;c<t.length;){var l="object"===typeof t[c]?JSON.stringify(t[c]):t[c];s.push((0,i.jsx)("li",{children:t[c]},l)),c+=n}r.push(s)}var d=Array.from(Array(n).keys()).map((function(e,t){return(0,i.jsx)("ul",{children:r[t]},t)}));return(0,i.jsx)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"".concat(a)},children:d})},f=n(7294),_=n(4583),j=n(9127),v=n.n(j),x=function(e){var t=(0,f.useContext)(_.Z),n=(0,f.useRef)(),a=(0,f.useState)(!1),r=a[0],o=a[1];return(0,f.useEffect)((function(){t.scrollLocation>=n.current.offsetTop-window.innerHeight/2&&o(!0)}),[t.scrollLocation]),(0,i.jsx)("div",{ref:n,className:"".concat(v().showOnScroll," ").concat(r?"":v().hide),children:e.children})},b=function(){return(0,i.jsx)(x,{children:(0,i.jsx)("div",{className:"layout ".concat(g().about),children:(0,i.jsxs)("div",{className:g().wrapper,children:[(0,i.jsx)(h,{id:"about"}),(0,i.jsx)("h2",{className:"section-header",children:"About Me"}),(0,i.jsxs)("div",{className:g().columns,children:[(0,i.jsx)("div",{className:"border-highlight ".concat(g().text),children:(0,i.jsx)("p",{children:"Hey there! I crave experiences that leave a mark on the world. Working at two early-stage start-ups was an absolute blast \u2013 not only did I learn invaluable lessons, but I also collaborated with incredible minds, making a real impact on the projects. Additionally, I value innovative ideas and have had the opportunity to work with some wonderful research labs and advisors at CMU as well as UPitt. I am interested in machine learning, ethical AI, optimization, and learning theory!"})}),(0,i.jsx)("div",{className:g().rightCol,children:(0,i.jsx)("div",{className:"shadow-highlight ".concat(g().image),children:(0,i.jsx)(r(),{src:"/pg-img.jpg",alt:"Priyanshi Garg",layout:"responsive",width:2677,height:3238,objectFit:"contain",loading:"eager"})})})]})]})})})},w=n(1962),y=n.n(w),k=function(){return(0,i.jsx)("div",{className:y().footer,children:(0,i.jsx)("a",{className:y().built,href:"https://github.com/Pr1yansh1/priyanshi-garg",target:"_blank",rel:"noopener noreferrer",children:"Built by Priyanshi Garg"})})},S=n(3110),N=n.n(S),C=function(){var e=(0,f.useState)(!1),t=e[0],n=e[1],a=(0,f.useState)(!1),r=a[0],o=a[1],s=(0,f.useState)(!1),c=s[0],d=s[1],u=(0,f.useState)(!1),p=u[0],g=u[1];return(0,f.useEffect)((function(){setTimeout((function(){return n(!0)}),2e3),setTimeout((function(){return o(!0)}),2800),setTimeout((function(){return d(!0)}),4200),setTimeout((function(){return g(!0)}),6200)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{id:"home"}),(0,i.jsx)("div",{className:N().home,children:(0,i.jsxs)("div",{className:"layout "+N()["home-textbox"],children:[(0,i.jsx)("h3",{className:"".concat(N().hi," ").concat(t?"":N().hide),children:"Hi, I'm"}),(0,i.jsx)("h1",{className:"".concat(N().carter," ").concat(r?"":N().hide),children:"Priyanshi Garg"}),(0,i.jsx)("h1",{className:"".concat(N().subheader," ").concat(c?"":N().hide),children:"A curious researcher, engineer and dancer."}),(0,i.jsxs)("p",{className:"".concat(N().paragraph," ").concat(p?"":N().hide),children:["Currently studying Computer Science at the"," ",(0,i.jsx)(l,{href:"https://www.cs.cmu.edu/",children:"Carnegie Mellon University"}),". I am passionate about AI ethics, learning theory as well as software engineering. In my free time, I like to learn new langauges (both cs and human!), dance, and cook!"]})]})})]})},A=n(7415),P=n.n(A),z=n(143),I=[{name:"PushkinAI",github:"https://github.com/shravyanandyala/pushkin.ai",link:"https://github.com/shravyanandyala/pushkin.ai",skills:["PyTorch","Natural Language Processing","Deep Learning"],image:{src:"/sys-diag.png",alt:"PushkinAI img"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Combining my interests in russian language and deep learning, I worked with a friend to create PushkinAI. We developed a state-of-the-art Russian poetry generator using finetuned ruGPT, attempting to capturing the essence of renowned poet Alexander Sergeyevich Pushkin."}),(0,i.jsx)("p",{children:"We fine-tuned ruGPT on 763 Pushkin poems, and the final model outputs a poem when given a seed text as a starting point."}),(0,i.jsx)("p",{children:"We also evaluated the poetry for relevance, rhyme scheme adherence, coherence, and aesthetics, garnering validation from manual expert assessments by university Russian language and literature professors at CMU."}),(0,i.jsxs)("p",{children:["Compared and analyzed differences with a secondary baseline LSTM-based model. You can see the detailed investigation we did in ",(0,i.jsx)(l,{href:"https://drive.google.com/file/d/11OztM4IyGJFpJBWBizJLDDH1HNh3XBuF/view?usp=sharing",children:"this"})," report."]})]})}],L=(n(7720),n(1417)),T=n(1436),M=n(2814),R=n(5711),E=n.n(R),W=function(e){return(0,i.jsx)("button",{className:E().button,style:e.style,onClick:e.onClick,children:e.children})},B=n(5792),O=n.n(B),H=function(e){var t=(0,f.useContext)(z.Z);return(0,i.jsxs)("div",{className:"border-highlight ".concat(O().container),children:[(0,i.jsxs)("div",{className:O().top,children:[(0,i.jsxs)("div",{className:O().heading,children:[(0,i.jsx)("h3",{children:e.project.name}),(e.project.github||e.project.links)&&(0,i.jsxs)("div",{className:O().links,children:[e.project.github&&(0,i.jsx)("a",{href:e.project.github,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(M.G,{icon:L.zhw,size:"2x"})}),e.project.link&&(0,i.jsx)("a",{href:e.project.link,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(M.G,{icon:T.nNP,size:"2x"})})]}),(0,i.jsx)("div",{className:O().skills,children:(0,i.jsx)(m,{list:e.project.skills,numCols:t.isMobile?2:3})})]}),(0,i.jsx)("div",{className:"shadow-highlight ".concat(O().image),children:(0,i.jsx)(r(),{src:e.project.image.src,alt:e.project.image.alt,layout:"fill",objectFit:e.project.image.objectFit?e.project.image.objectFit:"fill",objectPosition:e.project.image.objectPosition?e.project.image.objectPosition:"50% 50%",loading:"eager"})})]}),(0,i.jsx)("div",{className:O().content,children:e.project.content}),(0,i.jsxs)("div",{className:O().buttons,children:[(0,i.jsx)(W,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onPrev()},children:"\u2039"}),(0,i.jsx)(W,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onNext()},children:"\u203a"})]})]})},D=n(5556),q=n.n(D),F=function(){var e=(0,o.useRouter)(),t=(0,f.useContext)(z.Z),n=(0,f.useState)(0),a=n[0],r=n[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=function(){c||(p(),g(),r((function(e){return(e+1)%I.length})))},u=function(){c||(p(),g(),r((function(e){return 0!==e?e-1:I.length-1})))},h=function(e){return function(){c||(p(),g(),r(e))}},p=function(){l(!0),setTimeout((function(){l(!1)}),300)},g=function(){t.isMobile&&setTimeout((function(){e.push("#personal-projects")}),300)};return(0,i.jsxs)("div",{className:q().container,children:[(0,i.jsx)("div",{className:q().slider,style:{transform:"translateX(calc(".concat(a,"*(-100%)))")},children:I.map((function(e){return(0,i.jsx)(H,{project:e,onNext:d,onPrev:u},e.name)}))}),(0,i.jsx)("div",{className:q().progress,children:I.map((function(e,t){return(0,i.jsx)("div",{onClick:h(t),className:"".concat(q()["progress-circle"]," ").concat(t===a?q().selected:"")},"".concat(e.name,"Circle"))}))})]})},G=function(){return(0,i.jsx)(x,{children:(0,i.jsx)("div",{className:"layout ".concat(P().projects),children:(0,i.jsxs)("div",{className:P().wrapper,children:[(0,i.jsx)(h,{id:"personal-projects"}),(0,i.jsx)("h2",{className:"section-header ".concat(P().header),children:"Personal Projects"}),(0,i.jsx)(F,{})]})})})},U=n(138),J=n.n(U),Z=function(e){return(0,i.jsx)("div",{onClick:function(){e.onClick(e.work)},className:"".concat(J()["select-button"]," ").concat(e.work.id===e.selectedId?J().selected:""),children:e.work.company},e.work.id)},Y=n(8467),V=n.n(Y),X=function(e){return(0,i.jsxs)("div",{className:V()["selected-work"],children:[(0,i.jsxs)("h3",{children:["".concat(e.work.title," - "),(0,i.jsx)(l,{href:e.work.href,children:e.work.company})]}),(0,i.jsx)("em",{children:e.work.date}),(0,i.jsx)("ul",{children:e.work.bullets.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},K=n(1297),Q=n.n(K),$=[{id:0,company:"CoffeeSpace",href:"https://www.coffeespace.com/",title:"Software Engineer Intern",date:"May -- July 2022",bullets:["Collaborated with a 9-member team, including C-suite executives, to innovate, rewrite and relaunch the CoffeeSpace app with new features targeting a new demographic.","Developed front-end features(Explore and Profile), to provide seamless social media experiences.","Demonstrated exceptional leadership and initiative at CoffeeSpace by spearheading critical infrastructure projects.","Integrated Mixpanel Analytics into the Flutter codebase, enabling comprehensive user activity tracking for data-driven business decisions for the growth team.","Optimized platform efficiency by over 3x through caching implementation, enhancing user engagement and satisfaction.","Conceptualized a Deep Learning based recommendation system, significantly enhancing user experience and engagement."]},{id:1,company:"Delt4",href:"https://delt4.org/",title:"NLP/Machine Learning Engineer Intern",date:"June -- August 2023",bullets:["Conducted topic modeling on 100k+ chunks from research papers, creating robust models for efficient data organization and retrieval, setting the foundation for subsequent data-driven projects.","Utilized topic modeling outputs in conjunction with Large Language Models (LLMs) to perform advanced generation and precise answers for complex biotech queries, significantly enhancing productivity and information accessibility for the team.","Spearheaded the implementation of LLMs4PeerReview, showcasing leadership and initiative in improving the paper-selection and peer-review process within the biotech/AI startup.","Collaborated on a forecasting project employing state-of-the-art ML models to predict drug outcomes, contributing to data-driven decision-making in drug development at Delt4."]}].reverse(),ee=function(){var e=(0,f.useState)($[0]),t=e[0],n=e[1],a=(0,f.useState)($[0].id),r=a[0],o=a[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=(0,f.useState)(void 0),u=d[0],p=d[1],g=function(e){t!==e&&(clearTimeout(u),l(!0),o(e.id),p(setTimeout((function(){clearTimeout(u),n(e),l(!1)}),300)))};return(0,i.jsx)(x,{children:(0,i.jsx)("div",{className:"layout ".concat(Q().work),children:(0,i.jsxs)("div",{className:Q().wrapper,children:[(0,i.jsx)(h,{id:"work"}),(0,i.jsx)("h2",{className:"section-header ".concat(Q().workHeader),children:"Engineering Experience"}),(0,i.jsxs)("div",{className:"border-highlight ".concat(Q().container),children:[(0,i.jsx)("div",{className:Q().select,children:$.map((function(e){return(0,i.jsx)(Z,{work:e,selectedId:r,onClick:g},e.id)}))}),(0,i.jsx)("div",{className:"".concat(Q().info," ").concat(c?Q().hide:""),style:{transition:"opacity ease-in-out ".concat(300,"ms")},children:(0,i.jsx)(X,{work:t})})]})]})})})},te=n(5260),ne=n.n(te),ie=function(e){return(0,i.jsx)("div",{onClick:function(){e.onClick(e.research)},className:"".concat(ne()["select-button"]," ").concat(e.research.id===e.selectedId?ne().selected:""),children:e.research.company},e.research.id)},ae=n(9342),re=n.n(ae),oe=function(e){return(0,i.jsxs)("div",{className:re()["selected-research"],children:[(0,i.jsxs)("h3",{children:["".concat(e.research.title," - "),(0,i.jsx)(l,{href:e.research.href,children:e.research.company})]}),(0,i.jsx)("em",{children:e.research.date}),(0,i.jsx)("ul",{children:e.research.bullets.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})]})},se=n(3145),ce=n.n(se),le=[{id:0,company:"Reliable Autonomous Systems Lab, CMU",href:"https://www.ri.cmu.edu/robotics-groups/reliable-autonomous-systems-lab/",title:"Undergraduate Researcher",date:"Jan 2021 -- July 2021",bullets:[(0,i.jsxs)("span",{children:["Worked on ",(0,i.jsx)(l,{href:"https://www.cs.cmu.edu/~teachable/personnel.html",children:" Multi-Modal Communication for Teachable Robots "})," with Dr. Reid Simmons."]},"bullet-0")]},{id:1,company:"ML Department, CMU",href:"https://www.cs.cmu.edu/~nihars/",title:"Undergraduate Researcher",date:"Sep 2022 -- Present",bullets:[(0,i.jsxs)("span",{children:["Conducting cutting-edge research in the Machine Learning Department under the guidance of ",(0,i.jsx)(l,{href:"https://www.cs.cmu.edu/~nihars/",children:"Dr. Nihar Shah"})," as an Undergraduate Researcher, focused on automating paper-reviewer assignments for academic journals."]},"bullet-1"),"Developed and tested novel online matching algorithms, informed by rigorous research, to revolutionize the review process, improve efficiency, and reduce bias.","Utilized Python, APIs, and web-scraping techniques to construct a novel dataset of paper submissions and reviews, providing valuable research materials for the algorithmic assignment process.","Demonstrated expertise in theoretical aspects by designing and proving the efficacy of various matching algorithms, ensuring optimal reviewer assignments based on similarity scores.","Presented research findings in a poster presentation at CMU\u2019s research symposium, sharing insights and contributions to the field of automated paper-reviewer assignments in academic journals. See here for my final report.","Will continue working on improving initial results and preparing for publication, aiming to contribute novel insights to the field of automated paper-reviewer assignments in academic journals."]},{id:2,company:"Insanally Labs, University of Pittsburgh",href:"https://www.insanallylab.com/",title:"Research Developer",date:"June -- August 2023",bullets:[(0,i.jsx)("span",{children:"Developed an open-source Python package for a novel trial-by-trial, spike-timing-based Bayesian decoding algorithm, revolutionizing the understanding of non-classically responsive neurons\u2019 coding capacities in the brain."},"bullet-2"),"Applied Object-Oriented Programming (OOP) principles and conducted rigorous unit and integration testing, resulting in a highly reliable and maintainable Python package that is now widely usable by the neuroscience community.","Writing a methods paper for publication, showcasing the efficacy of the decoding package and its significant impact on advancing neuroscientific research.",(0,i.jsxs)("span",{children:["By making the decoding algorithm accessible through an easy-to-use package, contributed to the democratization of neuroscience research, enabling scientists worldwide to investigate neuron responsiveness with greater ease and accuracy. See the package on ",(0,i.jsx)(l,{href:"https://github.com/InsanallyLab/DecodingPackage",children:"GitHub"}),"."]},"bullet-3")]}].reverse(),de=function(){var e=(0,f.useState)(le[0]),t=e[0],n=e[1],a=(0,f.useState)(le[0].id),r=a[0],o=a[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=(0,f.useState)(void 0),u=d[0],p=d[1],g=function(e){t!==e&&(clearTimeout(u),l(!0),o(e.id),p(setTimeout((function(){clearTimeout(u),n(e),l(!1)}),300)))};return(0,i.jsx)(x,{children:(0,i.jsx)("div",{className:"layout ".concat(ce().research),children:(0,i.jsxs)("div",{className:ce().wrapper,children:[(0,i.jsx)(h,{id:"research"}),(0,i.jsx)("h2",{className:"section-header ".concat(ce().researchHeader),children:"Research Experience"}),(0,i.jsxs)("div",{className:"border-highlight ".concat(ce().container),children:[(0,i.jsx)("div",{className:ce().select,children:le.map((function(e){return(0,i.jsx)(ie,{research:e,selectedId:r,onClick:g},e.id)}))}),(0,i.jsx)("div",{className:"".concat(ce().info," ").concat(c?ce().hide:""),style:{transition:"opacity ease-in-out ".concat(300,"ms")},children:(0,i.jsx)(oe,{research:t})})]})]})})})},ue=n(6319),he=n.n(ue),pe=function(e){return(0,i.jsx)("div",{onClick:function(){e.onClick(e.teaching)},className:"".concat(he()["select-button"]," ").concat(e.teaching.id===e.selectedId?he().selected:""),children:e.teaching.company},e.teaching.id)},ge=n(7358),me=n.n(ge),fe=function(e){return(0,i.jsxs)("div",{className:me()["selected-teaching"],children:[(0,i.jsxs)("h3",{children:["".concat(e.teaching.title," - "),(0,i.jsx)(l,{href:e.teaching.href,children:e.teaching.company})]}),(0,i.jsx)("em",{children:e.teaching.date}),(0,i.jsx)("ul",{children:e.teaching.bullets.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},_e=n(7919),je=n.n(_e),ve=[{id:1,company:"CS Department, Carnegie Mellon",href:"https://www.cs.cmu.edu/",title:"Teaching Assistant",date:"Jan -- May 2022",bullets:["Teaching Assistant for (15-151) Discrete Math","Conducted one-on-one tutoring sessions for 3 freshmen computer science students to support their learning","Collaborated with undergraduate deans to introduce curriculum changes"]},{id:0,company:"AI Scholars, Carnegie Mellon",href:"https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html",title:"AI4ALL/AI Scholars Project Leader",date:"June -- July 2023",bullets:["Led the AI4ALL/AI Scholars pre-college program, overseeing project-based learning and lectures on computing and artificial intelligence for under-represented high school students in tech.","Contributed to curriculum development, creating slides, notes, and codebases for lectures, ensuring a comprehensive and engaging learning experience for participants.","Delivered lectures on fundamental ML topics, including Convolutional Neural Networks (CNNs), empowering students with essential knowledge in image classification techniques.","Mentored and guided two groups of five students each, fostering a hands-on learning environment where participants constructed their own image classification projects on architecture and flower-type classification.","Facilitated the presentation of group projects at the program\u2019s conclusion, celebrating the achievements of the students and showcasing their innovative solutions in AI and ML."]}].reverse(),xe=function(){var e=(0,f.useState)(ve[0]),t=e[0],n=e[1],a=(0,f.useState)(ve[0].id),r=a[0],o=a[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=(0,f.useState)(void 0),u=d[0],p=d[1],g=function(e){t!==e&&(clearTimeout(u),l(!0),o(e.id),p(setTimeout((function(){clearTimeout(u),n(e),l(!1)}),300)))};return(0,i.jsx)(x,{children:(0,i.jsx)("div",{className:"layout ".concat(je().teaching),children:(0,i.jsxs)("div",{className:je().wrapper,children:[(0,i.jsx)(h,{id:"teaching"}),(0,i.jsx)("h2",{className:"section-header ".concat(je().teachingHeader),children:"Teaching Experience"}),(0,i.jsxs)("div",{className:"border-highlight ".concat(je().container),children:[(0,i.jsx)("div",{className:je().select,children:ve.map((function(e){return(0,i.jsx)(pe,{teaching:e,selectedId:r,onClick:g},e.id)}))}),(0,i.jsx)("div",{className:"".concat(je().info," ").concat(c?je().hide:""),style:{transition:"opacity ease-in-out ".concat(300,"ms")},children:(0,i.jsx)(fe,{teaching:t})})]})]})})})},be=n(9008),we=n.n(be),ye=n(1664),ke=n.n(ye),Se=n(3040),Ne=n(8994),Ce=n.n(Ne),Ae=function(){var e=(0,f.useContext)(Se.Z),t=function(){e.hideModal()};return(0,i.jsx)("div",{onClick:t,className:"".concat(Ce().modal," ").concat(e.modalShown?Ce().showModal:""),children:(0,i.jsxs)("div",{className:Ce().relativeWrapper,children:[(0,i.jsx)(M.G,{onClick:t,className:Ce().closeButton,icon:T.YIN}),(0,i.jsxs)("div",{className:Ce().modalContents,children:[(0,i.jsx)(ke(),{href:"#home",children:"Home"}),(0,i.jsx)(ke(),{href:"#about",children:"About"}),(0,i.jsx)(ke(),{href:"#work",children:"Work"}),(0,i.jsx)(ke(),{href:"#personal-projects",children:"Personal Projects"})]})]})})};function Pe(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(we(),{children:[(0,i.jsx)("title",{children:"Priyanshi Garg's Portfolio"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{name:"description",content:"Priyanshi's personal portfolio website."})]}),(0,i.jsx)(Ae,{}),(0,i.jsx)(C,{}),(0,i.jsx)(b,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(de,{}),(0,i.jsx)(xe,{}),(0,i.jsx)(G,{}),(0,i.jsx)(k,{})]})}},8092:function(e){e.exports={about:"About_about__rkwrB",wrapper:"About_wrapper__6gu1b",columns:"About_columns__RRX_o",text:"About_text__BoxYP",rightCol:"About_rightCol__4abaG",image:"About_image__lnjLp",technologies:"About_technologies__lElQA"}},1962:function(e){e.exports={footer:"Footer_footer__GLL0J",built:"Footer_built___P5Jo",linkedIn:"Footer_linkedIn__vNcP7"}},3110:function(e){e.exports={home:"Home_home__Tcfrf","home-textbox":"Home_home-textbox__CcdqL",hi:"Home_hi__tslKG",carter:"Home_carter__E_IC5",subheader:"Home_subheader__MLFKy",paragraph:"Home_paragraph__eazRC",hide:"Home_hide___xYvS"}},5792:function(e){e.exports={projects:"ProjectSlide_projects__Sn6OP",header:"ProjectSlide_header__iDepj",wrapper:"ProjectSlide_wrapper__H5PEN",container:"ProjectSlide_container__y8qCB",top:"ProjectSlide_top__Emk2W",heading:"ProjectSlide_heading__jsTgU",links:"ProjectSlide_links__p8OjT",active:"ProjectSlide_active__7Y6qz",image:"ProjectSlide_image__2WYCb",content:"ProjectSlide_content__0Aq5B",buttons:"ProjectSlide_buttons__5CyuO"}},7415:function(e){e.exports={projects:"Projects_projects__VjjTN",header:"Projects_header__K7e0R",wrapper:"Projects_wrapper__FBwk8"}},5556:function(e){e.exports={projects:"Slider_projects__tpGce",header:"Slider_header__mjRHh",wrapper:"Slider_wrapper__zaR5N",container:"Slider_container__rKsWn",slider:"Slider_slider__TsQ2a",progress:"Slider_progress__xoEhq","progress-circle":"Slider_progress-circle__ahMij",selected:"Slider_selected__ZRp7h"}},3145:function(e){e.exports={research:"Research_research__HCImv",researchHeader:"Research_researchHeader__Xr6jc",recommendations:"Research_recommendations__zxe0t",wrapper:"Research_wrapper__c5NcD",container:"Research_container__vtWnB",select:"Research_select__AdqLT",info:"Research_info__Od0Nh",hide:"Research_hide__jCkPx"}},5260:function(e){e.exports={"select-button":"SelectButton_select-button__08XhI",selected:"SelectButton_selected__Y8MEC"}},9342:function(e){e.exports={"selected-research":"SelectedResearch_selected-research__8Toy1"}},6319:function(e){e.exports={"select-button":"SelectButton_select-button__t_y7b",selected:"SelectButton_selected__wSXf1"}},7358:function(e){e.exports={"selected-teaching":"SelectedTeaching_selected-teaching__Ley00"}},7919:function(e){e.exports={teaching:"Teaching_teaching__odMSA",teachingHeader:"Teaching_teachingHeader__9YjW_",recommendations:"Teaching_recommendations__kBaNT",wrapper:"Teaching_wrapper__cuxhY",container:"Teaching_container__FPdig",select:"Teaching_select__g9Lw3",info:"Teaching_info__ayvXM",hide:"Teaching_hide__d6G8w"}},5711:function(e){e.exports={button:"Button_button__jcCJJ"}},2522:function(e){e.exports={inlineLink:"InlineLink_inlineLink__jzbvO"}},8994:function(e){e.exports={modal:"Modal_modal__GRrbF",showModal:"Modal_showModal__Mf4Km",relativeWrapper:"Modal_relativeWrapper__wiKY6",closeButton:"Modal_closeButton__vWZzS",modalContents:"Modal_modalContents__qHWf0",active:"Modal_active__Tyxv4"}},2031:function(e){e.exports={scrollTo:"ScrollTo_scrollTo__u5leT"}},9127:function(e){e.exports={showOnScroll:"ShowOnScroll_showOnScroll__Y0g0H",hide:"ShowOnScroll_hide__aKDG1"}},138:function(e){e.exports={"select-button":"SelectButton_select-button__kw0HV",selected:"SelectButton_selected__ViZ5Z"}},8467:function(e){e.exports={"selected-work":"SelectedWork_selected-work__tppTF"}},1297:function(e){e.exports={work:"Work_work__ImslR",workHeader:"Work_workHeader__IYcEX",recommendations:"Work_recommendations__TOiVb",wrapper:"Work_wrapper__EIgxO",container:"Work_container__T4amM",select:"Work_select__x_f4s",info:"Work_info__xBgFJ",hide:"Work_hide__Y6Ipg"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);