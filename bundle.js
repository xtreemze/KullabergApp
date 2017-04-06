function m(){m=function(){},l.Symbol||(l.Symbol=p)}function p(t){return"jscomp_symbol_"+(t||"")+q++}function r(){m();var n=l.Symbol.iterator;n||(n=l.Symbol.iterator=l.Symbol("iterator")),"function"!=typeof Array.prototype[n]&&h(Array.prototype,n,{configurable:!0,writable:!0,value:function(){return t(this)}}),r=function(){}}function t(t){var n=0;return u(function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}})}function u(t){return r(),t={next:t},t[l.Symbol.iterator]=function(){return this},t}function v(n){r();var e=n[Symbol.iterator];return e?e.call(n):t(n)}for(var h="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[n]=e.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,q=0,w=l,x=["Promise"],y=0;y<x.length-1;y++){var z=x[y];z in w||(w[z]={}),w=w[z]}var A=x[x.length-1],B=w[A],C=function(){function t(t){this.b=0,this.i=void 0,this.a=[];var n=this.g();try{t(n.resolve,n.reject)}catch(t){n.reject(t)}}function n(){this.a=null}if(B)return B;n.prototype.b=function(t){this.a||(this.a=[],this.g()),this.a.push(t)},n.prototype.g=function(){var t=this;this.f(function(){t.i()})};var e=l.setTimeout;n.prototype.f=function(t){e(t,0)},n.prototype.i=function(){for(;this.a&&this.a.length;){var t=this.a;this.a=[];for(var n=0;n<t.length;++n){var e=t[n];delete t[n];try{e()}catch(t){this.h(t)}}}this.a=null},n.prototype.h=function(t){this.f(function(){throw t})},t.prototype.g=function(){function t(t){return function(o){e||(e=!0,t.call(n,o))}}var n=this,e=!1;return{resolve:t(this.w),reject:t(this.h)}},t.prototype.w=function(n){if(n===this)this.h(new TypeError("A Promise cannot resolve to itself"));else if(n instanceof t)this.A(n);else{var e;t:switch(typeof n){case"object":e=null!=n;break t;case"function":e=!0;break t;default:e=!1}e?this.v(n):this.j(n)}},t.prototype.v=function(t){var n=void 0;try{n=t.then}catch(t){return void this.h(t)}"function"==typeof n?this.B(n,t):this.j(t)},t.prototype.h=function(t){this.l(2,t)},t.prototype.j=function(t){this.l(1,t)},t.prototype.l=function(t,n){if(0!=this.b)throw Error("Cannot settle("+t+", "+n|"): Promise already settled in state"+this.b);this.b=t,this.i=n,this.u()},t.prototype.u=function(){if(this.a){for(var t=this.a,n=0;n<t.length;++n)t[n].call(),t[n]=null;this.a=null}};var o=new n;return t.prototype.A=function(t){var n=this.g();t.f(n.resolve,n.reject)},t.prototype.B=function(t,n){var e=this.g();try{t.call(n,e.resolve,e.reject)}catch(t){e.reject(t)}},t.prototype.then=function(n,e){function o(t,n){return"function"==typeof t?function(n){try{i(t(n))}catch(t){r(t)}}:n}var i,r,c=new t(function(t,n){i=t,r=n});return this.f(o(n,i),o(e,r)),c},t.prototype.catch=function(t){return this.then(void 0,t)},t.prototype.f=function(t,n){function e(){switch(i.b){case 1:t(i.i);break;case 2:n(i.i);break;default:throw Error("Unexpected state: "+i.b)}}var i=this;this.a?this.a.push(function(){o.b(e)}):o.b(e)},t.resolve=function(n){return n instanceof t?n:new t(function(t){t(n)})},t.reject=function(n){return new t(function(t,e){e(n)})},t.b=function(n){return new t(function(e,o){for(var i=v(n),r=i.next();!r.done;r=i.next())t.resolve(r.value).f(e,o)})},t.a=function(n){var e=v(n),o=e.next();return o.done?t.resolve([]):new t(function(n,i){var r=[],c=0;do{r.push(void 0),c++,t.resolve(o.value).f(function(t){return function(e){r[t]=e,--c||n(r)}}(r.length-1),i),o=e.next()}while(!o.done)})},t.$jscomp$new$AsyncExecutor=function(){return new n},t}();C!=B&&null!=C&&h(w,A,{configurable:!0,writable:!0,value:C}),function(t){function n(o){if(e[o])return e[o].c;var i=e[o]={o:o,s:!1,c:{}};return t[o].call(i.c,i,i.c,n),i.s=!0,i.c}var e={};n.h=t,n.f=e,n.o=function(t){return t},n.a=function(t,e){n.b(t)||Object.defineProperty(t,"a",{configurable:!1,enumerable:!0,get:e})},n.g=function(t){var e=t&&t.C?function(){return t.default}:function(){return t};return n.a(e,e),e},n.b=function(t){return Object.prototype.hasOwnProperty.call(t,"a")},n.p="",n(n.i=14)}([,,,,,,function(t,n,e){t.c=e.p+"index.html?f330e1d08ba3c844c3d20351003d3519!"},function(t,n,e){t.c=e.p+"maps.html?dbe3e3dd0be1a863bae7287a4e426b94!"},function(t,n,e){t.c=e.p+"mapsSv.html?3fa87401d6cb32e6f35cdf887bfc686e!"},function(t,n,e){t.c=e.p+"news.html?b9b84766b3466b2115c2f6936fb0a83e!"},function(t,n,e){t.c=e.p+"newsSv.html?ce11e78f2413fb8344e3bf92e3e54031!"},function(t,n,e){t.c=e.p+"poi.html?3c9cf6bcdcec19fb851f9917ceab816a!"},function(t,n,e){t.c=e.p+"poiSv.html?ef157577bfb2e58cc5659b3a852381a2!"},function(t,n){function e(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function o(){if(e()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()}),i)try{i.contentWindow.applicationCache.update()}catch(t){}}var i;setInterval(o,36e5),n.install=function(t){if(t||(t={}),e()){var n=function(t){function n(){switch(c.state){case"redundant":o("onUpdateFailed"),c.onstatechange=null;break;case"installing":i||o("onUpdating");break;case"installed":r||o("onUpdateReady");break;case"activated":o("onUpdated"),c.onstatechange=null}}function e(){switch(c.state){case"redundant":c.onstatechange=null;break;case"activated":o("onInstalled"),c.onstatechange=null}}var i,r,c=t.installing||t.waiting;if(c&&!c.onstatechange){var a;t.active?(n(),a=n):(e(),a=e),i=!0,t.waiting&&(r=!0),c.onstatechange=a}},o=function(n){"function"==typeof t[n]&&t[n]({source:"ServiceWorker"})};navigator.serviceWorker.register("sw.js").then(function(t){t&&(n(t),t.onupdatefound=function(){n(t)})}).catch(function(t){return o("onError"),Promise.reject(t)})}else if(window.applicationCache){var r=function(){var t=document.createElement("iframe");t.src="appcache/manifest.html",t.style.display="none",i=t,document.body.appendChild(t)};"complete"===document.readyState?setTimeout(r):window.addEventListener("load",r)}},n.m=function(){e()&&navigator.serviceWorker.getRegistration().then(function(t){t&&t.waiting&&t.waiting.postMessage({action:"skipWaiting"})})},n.update=o},function(t,n,e){e(6),e(7),e(9),e(11),e(8),e(10),e(12);var o=e(13);o.install({H:function(){console.log("SW Event:","onUpdating")},F:function(){console.log("SW Event:","onUpdateReady"),o.m()},G:function(){console.log("SW Event:","onUpdated"),window.location.reload()},D:function(){console.log("SW Event:","onUpdateFailed")}})}]);