function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function S(){var e=b();if(y(e))return O(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?g(e):(r=o=void 0,u)}function j(){var e=b(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(S,t),s?g(e):u}(l);if(m)return f=setTimeout(S,t),g(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=w(t)||0,h(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(w(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},j.flush=function(){return void 0===f?u:O(b())},j}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return r;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const S=console.log,O=document.querySelector(".feedback-form"),{elements:{email:j,message:T}}=O;(()=>{if(null!==localStorage.getItem("feedback-form-state"))try{const e=localStorage.getItem("feedback-form-state");null===e||JSON.parse(e),j.value=JSON.parse(e).email,T.value=JSON.parse(e).message}catch(e){S("Shit went south with form check:",e.message)}})(),O.addEventListener("input",e(t)((()=>{let e={email:`${j.value}`,message:`${T.value}`};try{localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(e){S("Shit went south with writing to local storage:",e.message)}}),500)),O.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;let i={email:`${t.value}`,message:`${n.value}`};S(i),localStorage.removeItem("feedback-form-state"),O.reset()}));
//# sourceMappingURL=03-feedback.79ac249b.js.map
