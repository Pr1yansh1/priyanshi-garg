(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9225)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,c=void 0!==s&&s,m=e.priority,f=void 0!==m&&m,w=e.loading,N=e.lazyRoot,P=void 0===N?null:N,z=e.lazyBoundary,C=e.className,I=e.quality,L=e.width,M=e.height,E=e.style,R=e.objectFit,T=e.objectPosition,W=e.onLoadingComplete,O=e.placeholder,B=void 0===O?"empty":O,q=e.blurDataURL,H=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=d.useContext(g.ImageConfigContext),D=d.useMemo((function(){var e=v||F||h.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[F]),U=H,G=n?"responsive":"intrinsic";"layout"in U&&(U.layout&&(G=U.layout),delete U.layout);var Z=S;if("loader"in U){if(U.loader){var J=U.loader;Z=function(e){e.config;var t=l(e,["config"]);return J(t)}}delete U.loader}var V="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var Y=y(t)?t.default:t;if(!Y.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(q=q||Y.blurDataURL,V=Y.src,(!G||"fill"!==G)&&(M=M||Y.height,L=L||Y.width,!Y.height||!Y.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))}var K=!f&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:V).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);b.has(t)&&(K=!1);_&&(c=!0);var X,Q=r(d.useState(!1),2),$=Q[0],ee=Q[1],te=r(p.useIntersection({rootRef:P,rootMargin:z||"200px",disabled:!K}),3),ne=te[0],ie=te[1],re=te[2],oe=!K||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:T},de=k(L),ue=k(M),he=k(I);0;var pe=Object.assign({},E,le),ge="blur"!==B||$?{}:{backgroundSize:R||"cover",backgroundPosition:T||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===G)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var me=ue/de,fe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ae.display="block",ae.position="relative",ce=!0,se.paddingTop=fe):"intrinsic"===G?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,se.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===G&&(ae.display="inline-block",ae.position="relative",ae.width=de,ae.height=ue)}else 0;var _e={src:j,srcSet:void 0,sizes:void 0};oe&&(_e=x({config:D,src:t,unoptimized:c,layout:G,width:de,quality:he,sizes:n,loader:Z}));var ve=t;0;var be,je="imagesrcset",we="imagesizes";je="imageSrcSet",we="imageSizes";var ye=(i(be={},je,_e.srcSet),i(be,we,_e.sizes),be),xe=d.default.useLayoutEffect,ke=d.useRef(W),Se=d.useRef(t);d.useEffect((function(){ke.current=W}),[W]),xe((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var Ne=a({isLazy:K,imgAttributes:_e,heightInt:ue,widthInt:de,qualityInt:he,layout:G,className:C,imgStyle:pe,blurStyle:ge,loading:w,config:D,unoptimized:c,placeholder:B,loader:Z,srcString:ve,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},U);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},ce?d.default.createElement("span",{style:se},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(A,Object.assign({},Ne))),f?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+_e.src+_e.srcSet+_e.sizes,rel:"preload",as:"image",href:_e.srcSet?void 0:_e.src},ye))):null)};var a=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,d=c(n(7294)),u=s(n(5443)),h=n(9309),p=n(7190),g=n(9977),m=(n(3794),n(2392));var f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},_=f.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},b=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(P(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(P(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(P(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var d,u=.01*(d=Math).min.apply(d,o(l));return{widths:a.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),u=d.widths,h=d.kind,p=u.length-1;return{sizes:c||"w"!==h?c:"100vw",srcSet:u.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===h?e:i+1).concat(h)})).join(", "),src:l({config:t,src:n,quality:s,width:u[p]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(n))}function N(e,t,n,i,r,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,h=e.placeholder,p=e.loading,g=e.srcString,m=e.config,f=e.unoptimized,_=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,j=e.setIntersection,w=e.onLoad,y=e.onError,k=(e.isVisible,e.noscriptSizes),S=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=u?"lazy":p,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},S,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,c),ref:d.useCallback((function(e){j(e),(null==e?void 0:e.complete)&&N(e,g,0,h,v,b)}),[j,g,r,h,v,b]),onLoad:function(e){N(e.currentTarget,g,0,h,v,b),w&&w(e)},onError:function(e){"blur"===h&&b(!0),y&&y(e)}})),(u||"blur"===h)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},S,x({config:m,src:g,unoptimized:f,layout:r,width:n,quality:i,sizes:k,loader:_}),{decoding:"async","data-nimg":r,style:s,className:o,loading:p}))))};function P(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9225:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return le}});var i=n(5893),r=n(5675),o=n.n(r),a=n(1163),s=n(2522),c=n.n(s),l=function(e){var t=(0,a.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[!e.local&&(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:c().inlineLink,children:(0,i.jsx)("span",{children:e.children})}),e.local&&(0,i.jsx)("a",{className:c().inlineLink,onClick:function(){t.push(e.href)},children:(0,i.jsx)("span",{children:e.children})})]})},d=n(2031),u=n.n(d),h=function(e){return(0,i.jsx)("div",{id:e.id,className:u().scrollTo})},p=n(8092),g=n.n(p),m=function(e){for(var t=e.list,n=e.numCols,r="",o=[],a=0;a<n;a++){r+="1fr",a!==n-1&&(r+=" ");for(var s=[],c=a;c<t.length;){var l="object"===typeof t[c]?JSON.stringify(t[c]):t[c];s.push((0,i.jsx)("li",{children:t[c]},l)),c+=n}o.push(s)}var d=Array.from(Array(n).keys()).map((function(e,t){return(0,i.jsx)("ul",{children:o[t]},t)}));return(0,i.jsx)("div",{style:{display:"grid",gap:"2rem",gridTemplateColumns:"".concat(r)},children:d})},f=n(7294),_=n(4583),v=n(9127),b=n.n(v),j=function(e){var t=(0,f.useContext)(_.Z),n=(0,f.useRef)(),r=(0,f.useState)(!1),o=r[0],a=r[1];return(0,f.useEffect)((function(){t.scrollLocation>=n.current.offsetTop-window.innerHeight/2&&a(!0)}),[t.scrollLocation]),(0,i.jsx)("div",{ref:n,className:"".concat(b().showOnScroll," ").concat(o?"":b().hide),children:e.children})},w=function(){return(0,i.jsx)(j,{children:(0,i.jsx)("div",{className:"layout ".concat(g().about),children:(0,i.jsxs)("div",{className:g().wrapper,children:[(0,i.jsx)(h,{id:"about"}),(0,i.jsx)("h2",{className:"section-header",children:"About Me"}),(0,i.jsxs)("div",{className:g().columns,children:[(0,i.jsx)("div",{className:"border-highlight ".concat(g().text),children:(0,i.jsx)("p",{children:"Hey there! I crave experiences that leave a mark on the world. Working at two early-stage start-ups was an absolute blast \u2013 not only did I learn invaluable lessons, but I also collaborated with incredible minds, making a real impact on the projects. Additionally, I value innovative ideas and have had the opportunity to work with some wonderful research labs and advisors at CMU as well as UPitt. I am interested in machine learning, ethical AI, optimization, and learning theory!"})}),(0,i.jsx)("div",{className:g().rightCol,children:(0,i.jsx)("div",{className:"shadow-highlight ".concat(g().image),children:(0,i.jsx)(o(),{src:"/pg-img.jpg",alt:"Image Of Carter",layout:"fill",objectFit:"cover",loading:"eager"})})})]})]})})})},y=n(1962),x=n.n(y),k=function(){return(0,i.jsx)("div",{className:x().footer,children:(0,i.jsx)("a",{className:x().built,href:"https://github.com/Pr1yansh1/priyanshi-garg",target:"_blank",rel:"noopener noreferrer",children:"Built by Priyanshi Garg"})})},S=n(3110),N=n.n(S),A=function(){var e=(0,f.useState)(!1),t=e[0],n=e[1],r=(0,f.useState)(!1),o=r[0],a=r[1],s=(0,f.useState)(!1),c=s[0],d=s[1],u=(0,f.useState)(!1),p=u[0],g=u[1];return(0,f.useEffect)((function(){setTimeout((function(){return n(!0)}),2e3),setTimeout((function(){return a(!0)}),2800),setTimeout((function(){return d(!0)}),4200),setTimeout((function(){return g(!0)}),6200)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{id:"home"}),(0,i.jsx)("div",{className:N().home,children:(0,i.jsxs)("div",{className:"layout "+N()["home-textbox"],children:[(0,i.jsx)("h3",{className:"".concat(N().hi," ").concat(t?"":N().hide),children:"Hi, I'm"}),(0,i.jsx)("h1",{className:"".concat(N().carter," ").concat(o?"":N().hide),children:"Priyanshi Garg"}),(0,i.jsx)("h1",{className:"".concat(N().subheader," ").concat(c?"":N().hide),children:"A curious researcher, engineer and dancer."}),(0,i.jsxs)("p",{className:"".concat(N().paragraph," ").concat(p?"":N().hide),children:["Currently studying Computer Science at the"," ",(0,i.jsx)(l,{href:"https://www.cs.cmu.edu/",children:"Carnegie Mellon University"}),".I am passionate about AI ethics, learning theory as well as software engineering. In my free time, I like to learn new langauges (both cs and human!), dance, and cook!"]})]})})]})},P=n(7415),z=n.n(P),C=n(143),I=[{name:"PushkinAI",github:"https://github.com/shravyanandyala/pushkin.ai",link:"https://github.com/shravyanandyala/pushkin.ai",skills:["PyTorch","Natural Language Processing","Deep Learning"],image:{src:"/sys-diag.png",alt:"PushkinAI img"},content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Combining my interests in russian language and deep learning, I worked with a friend to create PushkinAI. We developed a state-of-the-art Russian poetry generator using finetuned ruGPT, attempting to capturing the essence of renowned poet Alexander Sergeyevich Pushkin."}),(0,i.jsx)("p",{children:"We fine-tuned ruGPT on 763 Pushkin poems, and the final model outputs a poem when given a seed text as a starting point."}),(0,i.jsx)("p",{children:"We also evaluated the poetry for relevance, rhyme scheme adherence, coherence, and aesthetics, garnering validation from manual expert assessments by university Russian language and literature professors at CMU."}),(0,i.jsxs)("p",{children:["Compared and analyzed differences with a secondary baseline LSTM-based model. You can see the detailed investigation we did in ",(0,i.jsx)(l,{href:"https://drive.google.com/file/d/11OztM4IyGJFpJBWBizJLDDH1HNh3XBuF/view?usp=sharing",children:"this"})," report."]})]})}],L=(n(7720),n(1417)),M=n(1436),E=n(2814),R=n(5711),T=n.n(R),W=function(e){return(0,i.jsx)("button",{className:T().button,style:e.style,onClick:e.onClick,children:e.children})},O=n(5792),B=n.n(O),q=function(e){var t=(0,f.useContext)(C.Z);return(0,i.jsxs)("div",{className:"border-highlight ".concat(B().container),children:[(0,i.jsxs)("div",{className:B().top,children:[(0,i.jsxs)("div",{className:B().heading,children:[(0,i.jsx)("h3",{children:e.project.name}),(e.project.github||e.project.links)&&(0,i.jsxs)("div",{className:B().links,children:[e.project.github&&(0,i.jsx)("a",{href:e.project.github,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(E.G,{icon:L.zhw,size:"2x"})}),e.project.link&&(0,i.jsx)("a",{href:e.project.link,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(E.G,{icon:M.nNP,size:"2x"})})]}),(0,i.jsx)("div",{className:B().skills,children:(0,i.jsx)(m,{list:e.project.skills,numCols:t.isMobile?2:3})})]}),(0,i.jsx)("div",{className:"shadow-highlight ".concat(B().image),children:(0,i.jsx)(o(),{src:e.project.image.src,alt:e.project.image.alt,layout:"fill",objectFit:e.project.image.objectFit?e.project.image.objectFit:"fill",objectPosition:e.project.image.objectPosition?e.project.image.objectPosition:"50% 50%",loading:"eager"})})]}),(0,i.jsx)("div",{className:B().content,children:e.project.content}),(0,i.jsxs)("div",{className:B().buttons,children:[(0,i.jsx)(W,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onPrev()},children:"\u2039"}),(0,i.jsx)(W,{style:{fontSize:"2rem",paddingTop:"0",paddingLeft:"0",paddingRight:"0",paddingBottom:"4px",width:"2rem"},onClick:function(){e.onNext()},children:"\u203a"})]})]})},H=n(5556),F=n.n(H),D=function(){var e=(0,a.useRouter)(),t=(0,f.useContext)(C.Z),n=(0,f.useState)(0),r=n[0],o=n[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=function(){c||(p(),g(),o((function(e){return(e+1)%I.length})))},u=function(){c||(p(),g(),o((function(e){return 0!==e?e-1:I.length-1})))},h=function(e){return function(){c||(p(),g(),o(e))}},p=function(){l(!0),setTimeout((function(){l(!1)}),300)},g=function(){t.isMobile&&setTimeout((function(){e.push("#personal-projects")}),300)};return(0,i.jsxs)("div",{className:F().container,children:[(0,i.jsx)("div",{className:F().slider,style:{transform:"translateX(calc(".concat(r,"*(-100%)))")},children:I.map((function(e){return(0,i.jsx)(q,{project:e,onNext:d,onPrev:u},e.name)}))}),(0,i.jsx)("div",{className:F().progress,children:I.map((function(e,t){return(0,i.jsx)("div",{onClick:h(t),className:"".concat(F()["progress-circle"]," ").concat(t===r?F().selected:"")},"".concat(e.name,"Circle"))}))})]})},U=function(){return(0,i.jsx)(j,{children:(0,i.jsx)("div",{className:"layout ".concat(z().projects),children:(0,i.jsxs)("div",{className:z().wrapper,children:[(0,i.jsx)(h,{id:"personal-projects"}),(0,i.jsx)("h2",{className:"section-header ".concat(z().header),children:"Personal Projects"}),(0,i.jsx)(D,{})]})})})},G=n(138),Z=n.n(G),J=function(e){return(0,i.jsx)("div",{onClick:function(){e.onClick(e.work)},className:"".concat(Z()["select-button"]," ").concat(e.work.id===e.selectedId?Z().selected:""),children:e.work.company},e.work.id)},V=n(8467),Y=n.n(V),K=function(e){return(0,i.jsxs)("div",{className:Y()["selected-work"],children:[(0,i.jsxs)("h3",{children:["".concat(e.work.title," - "),(0,i.jsx)(l,{href:e.work.href,children:e.work.company})]}),(0,i.jsx)("em",{children:e.work.date}),(0,i.jsx)("ul",{children:e.work.bullets.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},X=n(1297),Q=n.n(X),$=[{id:0,company:"CMU Machine Learning Department",href:"https://www.cs.cmu.edu/~nihars/",title:"Undergraduate Researcher",date:"Sep 2022 - Present",bullets:["Conducting cutting-edge research in the Machine Learning Department under the guidance of Dr. Nihar Shah as an Undergraduate Researcher, focused on automating paper-reviewer assignments for academic journals.","Developed and tested novel online matching algorithms, informed by rigorous research, to revolutionize the review process, improve efficiency, and reduce bias.","Utilized Python, APIs, and web-scraping techniques to construct a novel dataset of paper submissions and reviews, providing valuable research materials for the algorithmic assignment process.","Demonstrated expertise in theoretical aspects by designing and proving the efficacy of various matching algorithms, ensuring optimal reviewer assignments based on similarity scores.","Presented research findings in a poster presentation at CMU\u2019s research symposium, sharing insights and contributions to the field of automated paper-reviewer assignments in academic journals.","Will continue working on improving initial results and preparing for publication, aiming to contribute novel insights to the field of automated paper-reviewer assignments in academic journals."]},{id:1,company:"CMU AI4ALL",href:"https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html",title:"AI4ALL/AI Scholars Project Leader",date:"June -- July 2023",bullets:["Led the AI4ALL/AI Scholars pre-college program, overseeing project-based learning and lectures on computing and artificial intelligence for under-represented high school students in tech.","Contributed to curriculum development, creating slides, notes, and codebases for lectures, ensuring a comprehensive and engaging learning experience for participants.","Delivered lectures on fundamental ML topics, including Convolutional Neural Networks (CNNs), empowering students with essential knowledge in image classification techniques.","Mentored and guided two groups of five students each, fostering a hands-on learning environment where participants constructed their own image classification projects on architecture and flower-type classification.","Facilitated the presentation of group projects at the program\u2019s conclusion, celebrating the achievements of the students and showcasing their innovative solutions in AI and ML."]},{id:2,company:"Insanally Labs, University of Pittsburgh",href:"https://www.insanallylab.com/",title:"Research Developer",date:"June -- August 2023",bullets:["Developed an open-source Python package for a novel trial-by-trial, spike-timing-based Bayesian decoding algorithm, revolutionizing the understanding of non-classically responsive neurons\u2019 coding capacities in the brain.","Applied Object-Oriented Programming (OOP) principles and conducted rigorous unit and integration testing, resulting in a highly reliable and maintainable Python package that is now widely usable by the neuroscience community.","Writing a methods paper for publication, showcasing the efficacy of the decoding package and its significant impact on advancing neuroscientific research.","By making the decoding algorithm accessible through an easy-to-use package, contributed to the democratization of neuroscience research, enabling scientists worldwide to investigate neuron responsiveness with greater ease and accuracy."]},{id:3,company:"Delt4",href:"https://delt4.org/",title:"NLP/Machine Learning Engineer Intern",date:"June -- August 2023",bullets:["Conducted topic modeling on 100k+ chunks from research papers, creating robust models for efficient data organization and retrieval, setting the foundation for subsequent data-driven projects.","Utilized topic modeling outputs in conjunction with Large Language Models (LLMs) to perform advanced generation and precise answers for complex biotech queries, significantly enhancing productivity and information accessibility for the team.","Spearheaded the implementation of LLMs4PeerReview, showcasing leadership and initiative in improving the paper-selection and peer-review process within the biotech/AI startup.","Collaborated on a forecasting project employing state-of-the-art ML models to predict drug outcomes, contributing to data-driven decision-making in drug development at Delt4."]}].reverse(),ee=function(){var e=(0,f.useState)($[0]),t=e[0],n=e[1],r=(0,f.useState)($[0].id),o=r[0],a=r[1],s=(0,f.useState)(!1),c=s[0],l=s[1],d=(0,f.useState)(void 0),u=d[0],p=d[1],g=function(e){t!==e&&(clearTimeout(u),l(!0),a(e.id),p(setTimeout((function(){clearTimeout(u),n(e),l(!1)}),300)))};return(0,i.jsx)(j,{children:(0,i.jsx)("div",{className:"layout ".concat(Q().work),children:(0,i.jsxs)("div",{className:Q().wrapper,children:[(0,i.jsx)(h,{id:"work"}),(0,i.jsx)("h2",{className:"section-header ".concat(Q().workHeader),children:"Work Experience"}),(0,i.jsxs)("div",{className:"border-highlight ".concat(Q().container),children:[(0,i.jsx)("div",{className:Q().select,children:$.map((function(e){return(0,i.jsx)(J,{work:e,selectedId:o,onClick:g},e.id)}))}),(0,i.jsx)("div",{className:"".concat(Q().info," ").concat(c?Q().hide:""),style:{transition:"opacity ease-in-out ".concat(300,"ms")},children:(0,i.jsx)(K,{work:t})})]})]})})})},te=n(9008),ne=n.n(te),ie=n(1664),re=n.n(ie),oe=n(3040),ae=n(8994),se=n.n(ae),ce=function(){var e=(0,f.useContext)(oe.Z),t=function(){e.hideModal()};return(0,i.jsx)("div",{onClick:t,className:"".concat(se().modal," ").concat(e.modalShown?se().showModal:""),children:(0,i.jsxs)("div",{className:se().relativeWrapper,children:[(0,i.jsx)(E.G,{onClick:t,className:se().closeButton,icon:M.YIN}),(0,i.jsxs)("div",{className:se().modalContents,children:[(0,i.jsx)(re(),{href:"#home",children:"Home"}),(0,i.jsx)(re(),{href:"#about",children:"About"}),(0,i.jsx)(re(),{href:"#work",children:"Work"}),(0,i.jsx)(re(),{href:"#personal-projects",children:"Personal Projects"})]})]})})};function le(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ne(),{children:[(0,i.jsx)("title",{children:"Priyanshi Garg's Portfolio"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{name:"description",content:"Priyanshi's personal portfolio website."})]}),(0,i.jsx)(ce,{}),(0,i.jsx)(A,{}),(0,i.jsx)(w,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(U,{}),(0,i.jsx)(k,{})]})}},8092:function(e){e.exports={about:"About_about__rkwrB",wrapper:"About_wrapper__6gu1b",columns:"About_columns__RRX_o",text:"About_text__BoxYP",rightCol:"About_rightCol__4abaG",image:"About_image__lnjLp",technologies:"About_technologies__lElQA"}},1962:function(e){e.exports={footer:"Footer_footer__GLL0J",built:"Footer_built___P5Jo",linkedIn:"Footer_linkedIn__vNcP7"}},3110:function(e){e.exports={home:"Home_home__Tcfrf","home-textbox":"Home_home-textbox__CcdqL",hi:"Home_hi__tslKG",carter:"Home_carter__E_IC5",subheader:"Home_subheader__MLFKy",paragraph:"Home_paragraph__eazRC",hide:"Home_hide___xYvS"}},5792:function(e){e.exports={projects:"ProjectSlide_projects__Sn6OP",header:"ProjectSlide_header__iDepj",wrapper:"ProjectSlide_wrapper__H5PEN",container:"ProjectSlide_container__y8qCB",top:"ProjectSlide_top__Emk2W",heading:"ProjectSlide_heading__jsTgU",links:"ProjectSlide_links__p8OjT",active:"ProjectSlide_active__7Y6qz",image:"ProjectSlide_image__2WYCb",content:"ProjectSlide_content__0Aq5B",buttons:"ProjectSlide_buttons__5CyuO"}},7415:function(e){e.exports={projects:"Projects_projects__VjjTN",header:"Projects_header__K7e0R",wrapper:"Projects_wrapper__FBwk8"}},5556:function(e){e.exports={projects:"Slider_projects__tpGce",header:"Slider_header__mjRHh",wrapper:"Slider_wrapper__zaR5N",container:"Slider_container__rKsWn",slider:"Slider_slider__TsQ2a",progress:"Slider_progress__xoEhq","progress-circle":"Slider_progress-circle__ahMij",selected:"Slider_selected__ZRp7h"}},5711:function(e){e.exports={button:"Button_button__jcCJJ"}},2522:function(e){e.exports={inlineLink:"InlineLink_inlineLink__jzbvO"}},8994:function(e){e.exports={modal:"Modal_modal__GRrbF",showModal:"Modal_showModal__Mf4Km",relativeWrapper:"Modal_relativeWrapper__wiKY6",closeButton:"Modal_closeButton__vWZzS",modalContents:"Modal_modalContents__qHWf0",active:"Modal_active__Tyxv4"}},2031:function(e){e.exports={scrollTo:"ScrollTo_scrollTo__u5leT"}},9127:function(e){e.exports={showOnScroll:"ShowOnScroll_showOnScroll__Y0g0H",hide:"ShowOnScroll_hide__aKDG1"}},138:function(e){e.exports={"select-button":"SelectButton_select-button__kw0HV",selected:"SelectButton_selected__ViZ5Z"}},8467:function(e){e.exports={"selected-work":"SelectedWork_selected-work__tppTF"}},1297:function(e){e.exports={work:"Work_work__ImslR",workHeader:"Work_workHeader__IYcEX",recommendations:"Work_recommendations__TOiVb",wrapper:"Work_wrapper__EIgxO",container:"Work_container__T4amM",select:"Work_select__x_f4s",info:"Work_info__xBgFJ",hide:"Work_hide__Y6Ipg"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);