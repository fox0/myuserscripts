// ==UserScript==
// @name google blacklist
// @version 0.4
// @match https://www.google.com/search*
// ==/UserScript==
(function() {
  let black_list = [
    'qaru.site',
    'qarchive.ru',
    'overcoder.net',
    'wiki-org.ru',
    'coderoad.ru',
    'www.rupython.com',
    
    'dic.academic.ru'
  ];
  
  for (const e of document.getElementsByTagName('cite')) {
    console.log(e.innerHTML);
    for (const i of black_list) {
      if (e.innerHTML.includes(i)) {
        e.parentNode.parentNode.parentNode.parentNode.style = 'display: none;';
        break;
      }
    }
  }
}());
