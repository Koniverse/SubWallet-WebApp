(()=>{"use strict";var e={};function t(){return o("__storage_keys__",[])}function r(e,o){"__storage_keys__"!=e&&function(e){const o=t();o.includes(e)||(o.push(e),r("__storage_keys__",o))}(e),localStorage.setItem(e,JSON.stringify(o))}function o(e,t=undefined){const r=localStorage.getItem(e);if(!r)return t;try{return JSON.parse(r)}catch(e){return t}}e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.g.chrome||(e.g.chrome={}),e.g.chrome.extension||(e.g.chrome.extension={getURL:e=>e}),function(){if(!localStorage.getItem("__is_storage_keys_migrated__")){const e=t(),o=[];e.forEach((e=>{o.includes(e)||o.push(e)})),r("__storage_keys__",o),localStorage.setItem("__is_storage_keys_migrated__","1")}}(),e.g.chrome.runtime={lastError:void 0},e.g.chrome.windows={getCurrent:()=>{}},e.g.chrome.tabs={query:()=>{}},e.g.chrome.storage={local:{get:(e,r)=>{e||(e=t());const n={};e.forEach((e=>{n[e]=o(e)})),r(n)},set:(e,t)=>{Object.entries(e).forEach((([e,t])=>{r(e,t)})),t&&t()},remove:(e,t,r)=>{!function(e){localStorage.removeItem(e)}(e),r&&r()}}}})();