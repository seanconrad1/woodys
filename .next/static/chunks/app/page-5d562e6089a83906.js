(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6940:function(e,l,i){Promise.resolve().then(i.bind(i,9843))},9843:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return p}});var a=i(7437),r=i(2265),s=i(4238),n=i.n(s);i(6691);var t=i(2550),d=e=>{let{loading:l,image:i,backgroundColor:r,blurbHeader:s,blurb:d,opposite:o}=e,{windowWidth:u}=(0,t.Z)();return u<570?(0,a.jsxs)("div",{style:{backgroundColor:r},className:n().blurbContainer,children:[(0,a.jsx)("div",{className:n().blurbHeader,children:s}),l?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsx)("img",{rel:"preload",priority:"true",as:"image",width:400,height:400,src:"https:"+i,alt:"",className:n().blurbImage}),(0,a.jsx)("div",{className:n().blurbTextContainer,children:(0,a.jsx)("div",{className:n().blurb,children:d})})]}):(0,a.jsx)("div",{style:{backgroundColor:r},className:n().blurbContainer,children:o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:n().blurbTextContainer,children:[(0,a.jsx)("div",{className:n().blurbHeader,children:s}),(0,a.jsx)("div",{className:n().blurb,children:d})]}),l?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsx)("img",{rel:"preload",priority:"true",as:"image",width:400,height:400,src:"https:"+i,alt:"",className:n().blurbImage})]}):(0,a.jsxs)(a.Fragment,{children:[l?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsx)("img",{rel:"preload",priority:"true",as:"image",width:400,height:400,src:"https:"+i,alt:"",className:n().blurbImage}),(0,a.jsxs)("div",{className:n().blurbTextContainer,children:[(0,a.jsx)("div",{className:n().blurbHeader,children:s}),(0,a.jsx)("div",{className:n().blurb,children:d})]})]})})},o=i(9935),u=i.n(o),c=e=>{let{soup:l,salad:i,sandwich:r,backgroundColor:s,blurb1:n,blurb2:t,blurb3:d,loading:o}=e;return(0,a.jsx)("div",{style:{backgroundColor:s},className:u().blurbContainer,children:(0,a.jsxs)("div",{className:u().imageList,children:[(0,a.jsxs)("div",{className:u().blurbTextContainer,children:[i?(0,a.jsx)("img",{rel:"preload",as:"image",priority:"true",width:280,height:280,src:null==i?void 0:i.replace("//","https://"),alt:"",className:u().blurbImage}):(0,a.jsx)("div",{children:"Loading..."}),(0,a.jsx)("div",{className:u().blurb,children:n})]}),(0,a.jsxs)("div",{className:u().blurbTextContainer,children:[l?(0,a.jsx)("img",{rel:"preload",as:"image",priority:"true",width:280,height:280,src:null==l?void 0:l.replace("//","https://"),alt:"",className:u().blurbImage}):(0,a.jsx)("div",{children:"Loading..."}),(0,a.jsx)("div",{className:u().blurb,children:t})]}),(0,a.jsxs)("div",{className:u().blurbTextContainer,children:[r?(0,a.jsx)("img",{rel:"preload",as:"image",priority:"true",width:280,height:280,src:null==r?void 0:r.replace("//","https://"),alt:"",className:u().blurbImage}):(0,a.jsx)("div",{children:"Loading..."}),(0,a.jsx)("div",{className:u().blurb,children:d})]})]})})},b=i(7233),m=i.n(b),g=i(2146),h=i(1947),v=()=>{let[e,l]=(0,r.useState)(!0),[i,s]=(0,r.useState)([]);(0,r.useEffect)(()=>{!async function(){s(await (0,h.if)()),l(!1)}()},[]);let n=i.length;return(0,r.useEffect)(()=>{let e=setInterval(()=>{var e,i,a,r;let s,t;e=document.getElementById("slideimg"+l),i=m().show,s=e.className,e.className=s.replace(i,"").replace(/   /g," ").replace(/^ | $/g,""),++l>n-1&&(l=0),a=document.getElementById("slideimg"+l),r=m().show,(t=a.className)&&(t+=" "),t+=r,a.className=t},4e3),l=0;return()=>clearInterval(e)},[n]),(0,a.jsx)("div",{className:m().crossfaderContainer,children:i.map((e,l)=>(0,a.jsxs)("div",{id:"slideimg".concat(l),className:"".concat(m().imageAndTextContainer,"  ").concat(0===l?m().show:""),children:[(0,a.jsx)("img",{priority:"true",as:"image",rel:"preload",className:"".concat(m().image," "),src:"https:"+e.fields.file.url,width:e.fields.file.details.image.width,height:e.fields.file.details.image.height,alt:e.fields.title}),(0,a.jsx)("div",{className:"".concat(m().menuItemName),children:(0,g.n8)(e.fields.title)}),(0,a.jsx)("div",{className:m().gradient})]},l))})},f=i(9820),_=i(345),x=i.n(_);function p(){var e,l,i,s,n,t,o,u,b,m,g,_;let[p,j]=(0,r.useState)(!0),[N,C]=(0,r.useState)([]),[I,w]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async function(){let e=await (0,h.zS)(),l=await (0,h.X2)();C(e),w(l),j(!1)})()},[]),(0,a.jsxs)("main",{className:x().main,children:[(0,a.jsxs)("div",{className:x().navAndImageCrossFade,children:[(0,a.jsx)(f.default,{}),(0,a.jsx)(v,{})]}),(0,a.jsx)(d,{loading:p,image:null===(e=N[0])||void 0===e?void 0:e.fields.foodImage.fields.file.url,backgroundColor:"#F2F2F5",blurbHeader:null===(l=N[0])||void 0===l?void 0:l.fields.blurbHeader,blurb:null===(i=N[0])||void 0===i?void 0:i.fields.blurbDescription.content[0].content[0].value}),(0,a.jsx)(d,{loading:p,opposite:!0,image:null===(s=N[1])||void 0===s?void 0:s.fields.foodImage.fields.file.url,backgroundColor:"white",blurbHeader:null===(n=N[1])||void 0===n?void 0:n.fields.blurbHeader,blurb:null===(t=N[1])||void 0===t?void 0:t.fields.blurbDescription.content[0].content[0].value}),(0,a.jsx)(c,{salad:null===(o=I[1])||void 0===o?void 0:o.fields.foodImage.fields.file.url,soup:null===(u=I[0])||void 0===u?void 0:u.fields.foodImage.fields.file.url,sandwich:null===(b=I[2])||void 0===b?void 0:b.fields.foodImage.fields.file.url,backgroundColor:"#F2F2F5",blurb1:null===(m=I[1])||void 0===m?void 0:m.fields.description.content[0].content[0].value,blurb2:null===(g=I[0])||void 0===g?void 0:g.fields.description.content[0].content[0].value,blurb3:null===(_=I[2])||void 0===_?void 0:_.fields.description.content[0].content[0].value})]})}i(540)},4238:function(e){e.exports={blurbContainer:"Blurb_blurbContainer__1jntK",blurbImage:"Blurb_blurbImage__MTWQ4",blurbTextContainer:"Blurb_blurbTextContainer__r9DwE",blurbHeader:"Blurb_blurbHeader__EQ1w2",blurb:"Blurb_blurb__UoqSX"}},9935:function(e){e.exports={blurbContainer:"Blurb2_blurbContainer__akh6r",imageList:"Blurb2_imageList__rXCG_",blurbTextContainer:"Blurb2_blurbTextContainer__kAR5z",blurbImage:"Blurb2_blurbImage__6g_4b",blurbHeader:"Blurb2_blurbHeader__nBdt6",blurb:"Blurb2_blurb__pl6Zl"}},7233:function(e){e.exports={crossfaderContainer:"ImageCrossfader_crossfaderContainer__Hr6pH",imageAndTextContainer:"ImageCrossfader_imageAndTextContainer__VEKyU",image:"ImageCrossfader_image__Ac9_b",gradient:"ImageCrossfader_gradient__LV7eQ",menuItemName:"ImageCrossfader_menuItemName__Paupw",show:"ImageCrossfader_show__c4HtX"}},345:function(e){e.exports={main:"page_main__GlU4n",navAndImageCrossFade:"page_navAndImageCrossFade__2d3t3"}}},function(e){e.O(0,[676,958,990,922,504,269,971,938,744],function(){return e(e.s=6940)}),_N_E=e.O()}]);