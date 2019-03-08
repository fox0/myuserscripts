// ==UserScript==
// @name Google blacklist
// @version 1
// @match https://www.google.com/search*
// ==/UserScript==
(function() {
  var ls = document.getElementsByTagName('cite');
  Array.from(ls).forEach(function(e) {
    if (e.innerHTML.includes('qaru.site/')) {
      e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style = 'display: none;'; 
    }
  });
}());
