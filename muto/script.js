var swOpenMode;var isWebView=getUrlVars().mode==="webview"?true:false;window.addEventListener("DOMContentLoaded",function(){if(isWebView){setWebViewMode()}else{setNormalMode()}swOpenMode=document.getElementById("swOpenMode");loadSettings();var c=document.querySelectorAll(".abc > .kigui-o-f");var a;for(a=0;a<c.length;a++){c[a].addEventListener("click",openRecipeEvent)}document.getElementById("btnMenu").addEventListener("click",kigui.layout.sidemenu.eventMenuOpen);document.getElementById("btnBack").addEventListener("click",btnBackEvent);document.getElementById("btnInfo").addEventListener("click",function(){closePagesAll();openInfo();kigui.layout.sidemenu.eventMenuClose()});var b=kigui.layout.others.pageCover.getElement();b.addEventListener("click",kigui.layout.sidemenu.eventMenuClose);b.addEventListener("mousewheel",kigui.layout.sidemenu.eventMenuClose);b.addEventListener("touchmove",kigui.layout.sidemenu.eventMenuClose);swOpenMode.addEventListener("change",refleshOpenMode);closePagesAll();openAbc()});function openRecipeEvent(){if(swOpenMode.checked===false){this.classList.toggle("show")}}function refleshOpenMode(){var a=document.querySelector(".abc");if(swOpenMode.checked==true){a.classList.add("open_mode")}else{a.classList.remove("open_mode")}if(typeof Storage!=="undefined"){localStorage.setItem("openMode",swOpenMode.checked.toString())}}function loadSettings(){if(typeof Storage!=="undefined"){var a=localStorage.getItem("openMode");if(a!==null){swOpenMode.checked=a==="true";refleshOpenMode()}}}function setWebViewMode(){document.getElementById("ad").style.display="none";document.getElementById("btnAndroidApp").style.display="none"}function setNormalMode(){var a=document.createElement("script");a.async=true;a.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}function getUrlVars(){var d=[],c;var a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(var b=0;b<a.length;b++){c=a[b].split("=");d.push(c[0]);d[c[0]]=c[1]}return d}function closePagesAll(){kigui.layout.contents.getElement().classList.remove("o-abc");kigui.layout.contents.getElement().classList.remove("o-info")}function openInfo(){kigui.layout.contents.getElement().classList.add("o-info");document.getElementById("btnBack").style.display="block";document.getElementById("btnMenu").style.display="none"}function openAbc(){kigui.layout.contents.getElement().classList.add("o-abc");document.getElementById("btnBack").style.display="none";document.getElementById("btnMenu").style.display="block"}function btnBackEvent(){closePagesAll();openAbc()};
