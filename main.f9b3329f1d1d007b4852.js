(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("L1EO"),t("JBxO"),t("FdtR");document.querySelector(".btn1").addEventListener("click",(function(){var n=function(n){return new Promise((function(e){setTimeout((function(){e(n)}),n)}))},e=function(n){return console.log("Resolved after "+n+"ms")};n(2e3).then(e),n(1e3).then(e),n(1500).then(e)}));t("lmye"),t("D/wG"),t("wCa+");document.querySelector(".btn2").addEventListener("click",(function(){var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],e=function(n,e){return new Promise((function(t){t(n.map((function(n){return n.name===e?Object.assign({},n,{active:!n.active}):n})))}))},t=function(n){return console.table(n)};e(n,"Mango").then(t),e(n,"Lux").then(t)})),document.querySelector(".btn3").addEventListener("click",(function(){var n=function(n){return new Promise((function(e,t){var o,i,c=(o=200,i=500,Math.floor(Math.random()*(i-o+1)+o));setTimeout((function(){if(Math.random()>.3){var o={id:n.id,time:c};e(o)}else t(n.id)}),c)}))},e=function(n){var e=n.id,t=n.time;console.log("Transaction "+e+" processed in "+t+"ms")},t=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};n({id:70,amount:150}).then(e).catch(t),n({id:71,amount:230}).then(e).catch(t),n({id:72,amount:75}).then(e).catch(t),n({id:73,amount:100}).then(e).catch(t)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f9b3329f1d1d007b4852.js.map