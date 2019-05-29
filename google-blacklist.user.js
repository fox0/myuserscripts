// ==UserScript==
// @name Google blacklist
// @version 3
// @match https://www.google.com/search*
// ==/UserScript==
(function() {
  let blacklist = [
  	'qaru.site/',
    'qarchive.ru/',
    'wiki-org.ru/',
  ];
  
  for (const e of document.getElementsByTagName('cite')) {
    for (const i of blacklist) {
      if (e.innerHTML.includes(i)) {
        e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style = 'display: none;';
        break;
      }
    }
  }
}());
