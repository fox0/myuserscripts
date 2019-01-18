// ==UserScript==
// @name mediawiki permalink
// @version 2
// @match https://*.wikipedia.org/w*
// @match https://*.wikifur.com/w*
// @match https://posmotre.li/*
// @match http://xgu.ru/w*
// @match http*://lurkmore.to/*
// ==/UserScript==

(function(){
  var link = document.getElementById('t-permalink').firstChild;
  link.search = link.search.replace(/(\?)title=.*&(oldid=\d+)/, '$1$2');
  link.style = 'color: #a00;';
})();
