!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=9)}([function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("qrcode")},function(e,t){},function(e,t){},function(e,t){e.exports=require("es6-promise")},function(e,t){e.exports=require("es6-object-assign")},function(e,t){e.exports=require("qrcode-terminal")},function(e,t){e.exports=require("eventsource")},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),s=n.n(i),u=(n(8),n(2)),a=n.n(u),c=n(3),d=n.n(c),l={en:{Common:{WaitData:"Waiting for data...",Cancel:"Cancel"},Messages:{FollowInstructions:"Please follow the instructions in your IRMA app"},Sign:{Title:"signature request",Body:"A website requests that you sign a message using some of your IRMA attributes. Please scan the QR code with your IRMA app."},Verify:{Title:"attribute request",Body:"A website requests that you disclose some of your IRMA attributes. Please scan the QR code with your IRMA app."},Issue:{Title:"attribute issuance",Body:"A website wishes to issue IRMA attributes to you. Please scan the QR code with your IRMA app."}},nl:{Common:{WaitData:"Wachten op data...",Cancel:"Annuleren"},Messages:{FollowInstructions:"Volg de instructies in uw IRMA app."},Sign:{Title:"verzoek om te tekenen",Body:"Een website vraagt u een bericht te ondertekenen met enkele van uw IRMA attributen. Scan de QR code met uw IRMA app."},Verify:{Title:"verzoek om attributen",Body:"Een website vraagt u enkele van uw IRMA attributen te tonen. Scan de QR code met uw IRMA app."},Issue:{Title:"attributenuitgifte",Body:"Een website wil u enkele IRMA attributen geven. Scan de QR code met uw IRMA app."}}};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"SessionStatus",(function(){return g})),n.d(t,"setLoggingState",(function(){return b})),n.d(t,"handleSession",(function(){return y})),n.d(t,"setupSession",(function(){return S})),n.d(t,"finishSession",(function(){return I})),n.d(t,"startSession",(function(){return k})),n.d(t,"signSessionRequest",(function(){return E})),n.d(t,"waitConnected",(function(){return q})),n.d(t,"waitDone",(function(){return A})),n.d(t,"UserAgent",(function(){return C})),n.d(t,"detectUserAgent",(function(){return J})),n(4).polyfill(),n(5).polyfill();var p="undefined"!=typeof window,m=p?void 0:n(6),w=p?void 0:n(7),g={Initialized:"INITIALIZED",Connected:"CONNECTED",Cancelled:"CANCELLED",Done:"DONE",Timeout:"TIMEOUT"},h={method:"popup",element:"irmaqr",language:"en",showConnectedIcon:!0,returnStatus:g.Done,server:"",token:"",resultJwt:!1,legacyResultJwt:!1,disableMobile:!1,qrterminalOptions:{},qrterminalDisplay:console.log},v=!0;function b(e){v=e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return S(e,n,t).then((function(e){return I(e,n)}))}function S(e,t,n){return t.qr=e,t.done=!1,Promise.resolve().then((function(){switch(x("Session started",t.qr),t.options=function(e){x("Options:",e);var t=Object.assign({},h,e);t.userAgent=J(),p&&!t.disableMobile&&t.userAgent!==C.Desktop&&("mobile"!==t.method&&x("On mobile; using method mobile instead of "+t.method),t.method="mobile");switch(t.method){case"url":break;case"mobile":if(t.returnStatus!==g.Done)throw new Error("On mobile sessions, returnStatus must be Done");break;case"popup":if(!p)throw new Error("Cannot use method popup in node");if(!(t.language in l))throw new Error("Unsupported language, currently supported: "+Object.keys(l).join(", "));t.element="modal-irmaqr",t.returnStatus=g.Done;break;case"canvas":if(!p)throw new Error("Cannot use method canvas in node");if("string"!=typeof t.element||""===t.element)throw new Error("canvas method requires `element` to be provided in options");break;case"console":if(p)throw new Error("Cannot use console method in browser");break;default:throw new Error("Unsupported method")}if("string"!=typeof t.server)throw new Error("server must be a string (URL)");if(t.server.length>0&&t.returnStatus!==g.Done)throw new Error("If server option is used, returnStatus option must be SessionStatus.Done");if(t.server.length>0&&("string"!=typeof t.token||0===t.token.length))throw new Error("if server option is used, providing token option is required");if(t.resultJwt&&0===t.server.length)throw new Error("resultJwt option was enabled but no server to retrieve result from was provided");if(t.resultJwt&&t.legacyResultJwt)throw new Error("resultJwt and legacyResultJwt options cannot be simultaneously enabled");return t}(n),t.method=t.options.method,t.method){case"url":return t.done=!0,s.a.toDataURL(JSON.stringify(t.qr));case"mobile":!function(e,t){var n="qr/json/"+encodeURIComponent(JSON.stringify(e));if(t===C.Android){var o="intent://"+n+"#Intent;package=org.irmacard.cardemu;scheme=cardemu;l.timestamp="+Date.now()+";S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dorg.irmacard.cardemu;end";x("Navigating:",o),window.location.href=o}else t===C.iOS&&(x("Navigating:","irma://"+n),window.location.href="irma://"+n)}(e,t.options.userAgent);break;case"popup":!function(e,t){(function(){if(!p||window.document.getElementById("irma-modal"))return;var e=window.document.createElement("div");e.id="irma-modal",e.innerHTML=d.a,window.document.body.appendChild(e);var t=window.document.createElement("div");t.classList.add("irma-overlay"),window.document.body.appendChild(t),e.offsetHeight})(),n=e.irmaqr,o=t,P("irma-cancel-button","Common.Cancel",o),P("irma-title",j[n]+".Title",o),P("irma-text",j[n]+".Body",o),window.document.getElementById("irma-modal").classList.add("irma-show");var n,o;var i=window.document.getElementById("irma-cancel-button");i.addEventListener("click",(function t(){r()(e.u,{method:"DELETE"}),i.removeEventListener("click",t),T()}))}(e,t.options.language);case"canvas":if(t.canvas=window.document.getElementById(t.options.element),!t.canvas)return Promise.reject("Specified canvas not found in DOM");!function(e,t){s.a.toCanvas(e,JSON.stringify(t),{width:"230",margin:"1"},(function(e){if(e)throw e}))}(t.canvas,t.qr);break;case"console":m.generate(JSON.stringify(t.qr),t.options.qrterminalOptions,t.options.qrterminalDisplay)}return t.options.returnStatus===g.Initialized?(t.done=!0,g.Initialized):q(t.qr.u)})).catch((function(e){throw x("Error or unexpected status",e),"popup"===t.method&&T(),e}))}function I(e,t){return Promise.resolve().then((function(){if(t.done)return e;switch(x("Session state changed",e,t.qr.u),t.method){case"popup":P("irma-text","Messages.FollowInstructions",t.options.language);case"canvas":!function(e,t){var n=e.getContext("2d");if(n.clearRect(0,0,e.width,e.height),t){var o=window.devicePixelRatio;e.width=230*o,e.height=230*o,n.scale(o,o);var r=new Image;r.onload=function(){return n.drawImage(r,75.5,40,79,150)},r.src=a.a}}(t.canvas,t.options.showConnectedIcon)}return t.options.returnStatus===g.Connected?(t.done=!0,e):A(t.qr.u)})).then((function(e){if(t.done)return e;if("popup"===t.method&&T(),0===t.options.server.length)return t.done=!0,e;var n=t.options.legacyResultJwt?"getproof":"result-jwt",o=t.options.resultJwt||t.options.legacyResultJwt?n:"result";return M("".concat(t.options.server,"/session/").concat(t.options.token,"/").concat(o))})).then((function(e){return t.done?e:t.options.resultJwt||t.options.legacyResultJwt?e.text():e.json()})).catch((function(e){throw x("Error or unexpected status",e),"popup"===t.method&&T(),e}))}function k(e,t,n,o,r){return Promise.resolve().then((function(){return"object"===f(t)?"publickey"==n||"hmac"==n?E(t,n,o,r):JSON.stringify(t):t})).then((function(t){var r={};switch(n){case void 0:case"none":r["Content-Type"]="application/json";break;case"token":r.Authorization=o,r["Content-Type"]="application/json";break;case"publickey":case"hmac":r["Content-Type"]="text/plain";break;default:throw new Error("Unsupported authentication method")}return M("".concat(e,"/session"),{method:"POST",headers:r,body:t})})).then((function(e){return e.json()}))}function E(e,t,o,r){return Promise.resolve().then(n.t.bind(null,10,7)).then((function(n){var i,s;if(e.type?(i=e.type,s={request:e}):e.request&&(i=e.request.type,s=e),"disclosing"!==i&&"issuing"!==i&&"signing"!==i)throw new Error("Not an IRMA session request");if("publickey"!==t&&"hmac"!==t)throw new Error("Unsupported signing method");var u={algorithm:"publickey"===t?"RS256":"HS256",issuer:r,subject:{disclosing:"verification_request",issuing:"issue_request",signing:"signature_request"}[i]};return n.sign(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},{disclosing:"sprequest",issuing:"iprequest",signing:"absrequest"}[i],s),o,u)}))}function q(e){return R(e,g.Initialized).then((function(e){return e!==g.Connected&&e!==g.Done?Promise.reject(e):e}))}function A(e){return R(e,g.Connected).then((function(e){return e!==g.Done?Promise.reject(e):e}))}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.Initialized;return new Promise((function(n,o){var r=p?window.EventSource:w;if(!r)return x("No support for EventSource, fallback to polling"),void O("".concat(e,"/status"),t,n,o);var i=new r("".concat(e,"/statusevents")),s=setTimeout((function(){return o("no open message received")}),500);i.onopen=function(){clearTimeout(s)},i.onmessage=function(e){clearTimeout(s),i.close(),n(JSON.parse(e.data))},i.onerror=function(e){clearTimeout(s),x("Received server event error",e),i.close(),o(e)}})).catch((function(n){return x("error in server sent event, falling back to polling:",n),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.Initialized;return new Promise((function(n,o){return O(e,t,n,o)}))}("".concat(e,"/status"),t)}))}var O=function e(t,n,o,r){return M(t).then((function(e){return e.json()})).then((function(i){return i!==n?o(i):setTimeout(e,500,t,n,o,r)})).catch((function(e){return r(e)}))},C={Desktop:"Desktop",Android:"Android",iOS:"iOS"};function D(e){return e.ok?e:e.text().then((function(t){throw function(){v&&console.warn.apply(console,arguments)}("Server returned error:",t),new Error(e.statusText)}))}function M(){return r.a.apply(null,arguments).then(D)}function T(){p&&window.document.getElementById("irma-modal")&&window.document.getElementById("irma-modal").classList.remove("irma-show")}function x(){v&&console.log.apply(console,arguments)}var j={disclosing:"Verify",issuing:"Issue",signing:"Sign"};function P(e,t,n){window.document.getElementById(e).innerText=function(e,t){var n=e.split("."),o=l[t];for(var r in n){if(void 0===o)break;o=o[n[r]]}if(void 0===o)for(var i in o=l[h.language],n){if(void 0===o)break;o=o[n[i]]}return void 0===o?"":o}(t,n)}function J(){return p?window.MSInputMethodContext&&document.documentMode?(x("Detected IE11"),C.Desktop):/Android/i.test(window.navigator.userAgent)?(x("Detected Android"),C.Android):/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream?(x("Detected iOS"),C.iOS):(x("Neither Android nor iOS, assuming desktop"),C.Desktop):null}},function(e,t){e.exports=require("jsonwebtoken")}]));