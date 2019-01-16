// ==UserScript==
// @name     mediawiki permalink
// @version  1
// @match https://*.wikipedia.org/w*
// @match https://*.wikifur.com/w*
// @match https://lurkmore.to/*
// @match https://posmotre.li/*
// @match http://xgu.ru/w*
// ==/UserScript==

(function(){
  var link = document.getElementById('t-permalink').firstChild;
  link.search = link.search.replace(/(\?)title=.*&(oldid=\d+)/, '$1$2');
  link.style = 'color: #a00;';
})();
