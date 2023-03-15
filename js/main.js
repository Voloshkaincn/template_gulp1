//----common---
let device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
   device = 'mobile';
} else {
   device = 'desktop';
}
 
let d = document
let $ = (selector) => {
   return document.querySelector(selector)
}
let $$ = (selector) => {
   return document.querySelectorAll(selector)
}
let $id = (id_name) => {
   return document.getElementById(id_name)
}

//--- global variable 
let controller, wHeight, wWidth, vh, rem;

//---on load
document.addEventListener("DOMContentLoaded", function (event) {
   window.requestAnimationFrame(onLoadedScripts);
});
function onLoadedScripts() {
   if (document.readyState == 'complete') {
      render()
   } else {
       window.requestAnimationFrame(onLoadedScripts);
   }
}

//---on resize
window.addEventListener('resize', function (event) {
   let lastHeight = wHeight
   if (device === 'desktop' || Math.abs(lastHeight - window.innerHeight) > 90) {
      controller.destroy(true);
      render()

   }
});

//----end common---

function render() {

   wWidth = document.documentElement.clientWidth;
   wHeight = document.documentElement.clientHeight;

   vh = window.innerHeight * 0.01; //use in css - calc(var(--vh, 1vh) * 100);
   document.documentElement.style.setProperty('--vh', `${vh}px`)

   rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

   //---scroll Magic init
   controller = new ScrollMagic.Controller();
   controller.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {
         scrollTo: {
            y: newpos,
         }
      });
   });
}

//=include components/cookies.js