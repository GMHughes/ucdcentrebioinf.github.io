(()=>{var c=document.querySelectorAll("button[data-index]"),o=document.querySelectorAll("dialog"),l=document.querySelectorAll("dialog button");c.forEach((t,e)=>{t.addEventListener("click",()=>{o[e].showModal()})});l.forEach((t,e)=>{t.addEventListener("click",()=>{o[e].close()})});window.addEventListener("click",t=>{o.forEach(e=>{t.target===e&&e.close()})});})();
(()=>{var e=document.querySelector("nav"),o=e.querySelector("ul"),c=document.querySelector("#burger-template").content.cloneNode(!0),i=e.querySelector("svg"),n=c.querySelector("button");n.addEventListener("click",t=>{let r=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",!r)});var s=()=>{n.setAttribute("aria-expanded",!1)};e.addEventListener("keyup",t=>{t.code==="Escape"&&s()});document.addEventListener("click",t=>{e.contains(t.target)||s()});e.insertBefore(c,o);})();