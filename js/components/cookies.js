
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