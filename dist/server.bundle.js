require("source-map-support").install(),function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("axios")},function(e,t,r){r(11),r(12),r(13)},function(e,t){e.exports=require("@babel/register")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(2),o=r.n(a),u=r(5),c=r.n(u),i=r(6),s=r.n(i),l=r(7),f=r.n(l),p=r(1),d=r.n(p),m=r(3);var h=r(0),b=r.n(h),g=r(8),v=r(9),y=r.n(v);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(){var e=x(Object(h.useState)(""),2),t=e[0],r=e[1],n=x(Object(h.useState)(""),2),a=n[0],o=n[1],u=x(Object(h.useState)(!1),2),c=u[0],i=u[1],s=x(Object(h.useState)(""),2),l=s[0],f=s[1];b.a.useEffect((function(){c&&setTimeout((function(){return i(!1)}),3e3)}),[c]);return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{id:"container"},b.a.createElement("h2",{id:"header"},"Minify"),b.a.createElement("h3",{id:"author"},"By: Brant Messenger"),b.a.createElement("div",{className:"flexItem"},b.a.createElement("input",{type:"text",style:{backgroundColor:"#ededf7"},value:t,onChange:function(e){return r(e.target.value)}}),b.a.createElement("button",{onClick:function(){y.a.post("/api/url",{url:t}).then((function(e){e.data.status?(o("https://minify-app.herokuapp.com/".concat(e.data.url)),f("success")):f("error"),i(!0)}))}},b.a.createElement("i",{className:"fas fa-link"}))),b.a.createElement("div",{className:"flexItem"},b.a.createElement("input",{id:"newUrlAddress",type:"text",value:a,onChange:function(){return null}}),b.a.createElement("button",{onClick:function(){if(""!==a){var e=document.getElementById("newUrlAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),f("clipboard"),i(!0)}}},b.a.createElement("i",{className:"far fa-clipboard"})))),b.a.createElement("div",{id:"message",className:c?"visible":"hidden",style:{success:{backgroundColor:"#c6f0d4",color:"#4a9662"},error:{backgroundColor:"#f6c0cb",color:"#ec365b"},clipboard:{backgroundColor:"#37409b",color:"white"}}[l]},b.a.createElement("p",null,"error"===l&&b.a.createElement(b.a.Fragment,null,b.a.createElement("i",{className:"fas fa-exclamation-circle",style:{margin:"0 5px"}}),"Invalid URL."),"success"===l&&b.a.createElement(b.a.Fragment,null,b.a.createElement("i",{className:"fas fa-check-circle",style:{margin:"0 5px"}}),"URL is shorten."),"clipboard"===l&&b.a.createElement(b.a.Fragment,null,b.a.createElement("i",{className:"far fa-clipboard",style:{margin:"0 5px"}}),"URL copied."))))}function E(e,t,r,n,a,o,u){try{var c=e[o](u),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(n,a)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){E(o,n,a,u,c,"next",e)}function c(e){E(o,n,a,u,c,"throw",e)}u(void 0)}))}}Object(n.config)();var S=o()();S.use("/public",o.a.static(c.a.resolve(__dirname,"public"))),S.use(s()()),S.use(f.a.json()),d.a.connect(process.env.MONGO_URI,{useNewUrlParser:!0,useUnifiedTopology:!0});var k=new d.a.Schema({original_url:String,short_url:String}),R=d.a.model("urlModel",k);function _(e){return C.apply(this,arguments)}function C(){return(C=O(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.findOne({original_url:t}).exec();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return q.apply(this,arguments)}function q(){return(q=O(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.findOne({short_url:t}).exec();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}S.use((function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()})),S.get("/",(function(e,t){var r=function(e,t){return'\n        <!DOCTYPE html>\n        <html lang="en">\n            <head>\n                <meta charset="utf-8">\n                <title> '.concat(e,' </title>\n                <link href="public/style.css" rel="stylesheet">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet"/>\n            </head>\n            <body>\n                <div id="root">').concat(t,'</div>\n                <script src="public/client.bundle.js"><\/script>\n            </body>\n        </html>\n    ')}("Minify App",Object(g.renderToString)(b.a.createElement(j,null)));t.setHeader("Cache-Control","public, max-age=604800"),t.send(r)})),S.get("/:id",function(){var e=O(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 5!==t.params.id.length&&n(),e.next=3,A(t.params.id);case 3:if(!(a=e.sent)){e.next=6;break}return e.abrupt("return",r.redirect(a.original_url));case 6:n();case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()),S.post("/api/url",function(){var e=O(regeneratorRuntime.mark((function e(t,r){var n,a,o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.body.url,a=/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,4})+)(\/(.)*)?(\?(.)*)?/g,n.match(a)){e.next=5;break}return console.log("Not Matched..."),e.abrupt("return",r.json({status:!1,url:""}));case 5:if(n.match(/^https?:\/\//g)||(n="https://".concat(n)),U(n,["https","http"])){e.next=9;break}return console.log("Invalid URL..."),e.abrupt("return",r.json({status:!1,url:""}));case 9:return e.next=11,_(n);case 11:if(!(o=e.sent)){e.next=15;break}return console.log("URL has been found..."),e.abrupt("return",r.json({status:!0,url:o.short_url}));case 15:u=Math.random().toString(36).substr(2,5),R.create({original_url:n,short_url:u},(function(e,t){if(e)return console.log(e);t.save()})),console.log("URL ID has been created..."),r.json({status:!0,url:u});case 19:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());var U=function(e,t){try{new m.URL(e);var r=Object(m.parse)(e);return!t||!!r.protocol&&t.map((function(e){return"".concat(e.toLowerCase(),":")})).includes(r.protocol)}catch(e){return!1}};S.use((function(e,t,r){t.status(404).send("404 Page Not Found")}));var M=process.env.PORT||3e3;S.listen(M,(function(){return console.log("Server listening to port: ".concat(M))}))}]);
//# sourceMappingURL=server.bundle.js.map