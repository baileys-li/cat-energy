const e=document.querySelector(".nav-toggler");e.hidden=!1,e.addEventListener("click",(function(){const a="false"===e.ariaExpanded,n=a?"Закрыть навигацию":"Открыть навигацию";e.ariaExpanded=String(a),e.ariaLabel=n,e.title=n}));