// ==UserScript==
// @name mediawiki permalink
// @version 3
// @match https://*.wikipedia.org/w*
// @match https://*.wikifur.com/w*
// @match https://posmotre.li/*
// @match https://lurkmore.to/*
// @match http://lurkmore.to/*
// @match http://xgu.ru/w*
// ==/UserScript==

(function(){
  var link = document.getElementById('t-permalink').firstChild;
  link.search = link.search.replace(/(\?)title=.*&(oldid=\d+)/, '$1$2');
  link.style = 'color: #a00;';
})();
