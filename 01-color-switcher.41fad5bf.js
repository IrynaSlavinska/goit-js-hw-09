!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1;var a=setInterval((function(){console.log(a),document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.disabled||clearInterval(a)}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0})),e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.41fad5bf.js.map
