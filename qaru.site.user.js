// ==UserScript==
// @name Google blacklist
// @version 2
// @match https://www.google.com/search*
// ==/UserScript==
(function() {
  var ls = document.getElementsByTagName('cite');
  Array.from(ls).forEach(function(e) {
    if (e.innerHTML.includes('qaru.site/') || e.innerHTML.includes('qarchive.ru/')) {
      e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style = 'display: none;'; 
    }
  });
}());
