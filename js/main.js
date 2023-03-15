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

//coocie notify
// setCookieNoticeJS();
function setCookieNoticeJS(){
   new cookieNoticeJS({
      // Localizations of the notice message
      'messageLocales': {
      'en': 'We use cookies to improve your experience on the site and to collect statistics. By continuing to browse this site you agree to the use of cookies.',
      'ru': 'Мы используем файлы cookie для улучшения вашей работы с сайтом и сбора статистики. Продолжая навигацию по этому сайту, вы соглашаетесь на использование нами файлов cookie. ',
      'uk': 'Ми використовуємо файли cookie для поліпшення вашої роботи із сайтом і збору статистики. Продовжуючи навігацію по цьому сайту, ви погоджуєтеся на використання нами файлів cookie.'
      },
   
      // Localizations of the dismiss button text
      'buttonLocales': {
      'en': 'I understand',
      'ru': 'Понятно',
      'uk': 'Зрозуміло'
      
      },
      
      // Position for the cookie-notifier (default=bottom)
      'cookieNoticePosition':'bottom',
      
      // Shows the "learn more button (default=false)
      'learnMoreLinkEnabled':false,
      
      // The href of the learn more link must be applied if (learnMoreLinkEnabled=true) 
      'learnMoreLinkHref':'/learn/more/index.html',
      
      // Text for optional learn more button
      'learnMoreLinkText':{
      'en': 'Privacy Policy',
      'ru': 'читать больше',
      'uk': 'читати більше'
      },
      
      // The message will be shown again in X days
      'expiresIn': 30, 
      
      // Dismiss button background color
      'buttonBgColor': '#00539f',  
      
      // Dismiss button text color
      'buttonTextColor': '#ffffff', 
      
      // Notice background color
      'noticeBgColor': '#191919', 
         
      // Notice text color
      'noticeTextColor': '#fff', 
      
      // the lernMoreLink color (default='#009fdd') 
      'linkColor':'#00539f'
         
   });
};