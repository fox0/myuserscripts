// ==UserScript==
// @name mediawiki permalink
// @version 6
// @match https://*.wikipedia.org/w*
// @match https://*.wiktionary.org/w*
// @match https://commons.wikimedia.org/w*
// @match https://*.wikifur.com/w*
// @match https://posmotre.li/*
// @match https://lurkmore.to/*
// @match http://xgu.ru/w*
// @match https://mrakopedia.org/w*
// ==/UserScript==
(function(){
  var link = document.getElementById('t-permalink').firstChild;
  link.search = link.search.replace(/\?.*&(oldid=\d+)/, '?$1');
  link.style = 'color: #a00;';
})();
