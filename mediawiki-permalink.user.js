// ==UserScript==
// @name mediawiki permalink
// @version 0.7
// @match https://*.wikipedia.org/*
// @match https://*.wiktionary.org/*
// @match https://*.wikifur.com/*
// @match https://commons.wikimedia.org/*
// @match https://mrakopedia.org/*
// @match https://posmotre.li/*
// @match https://lurkmore.to/*
// @match https://www.mediawiki.org/*
// @match http://dfwk.ru/*
// @match http://xgu.ru/*
// ==/UserScript==
(function(){
  var link = document.getElementById('t-permalink').firstChild;
  link.search = link.search.replace(/\?.*&(oldid=\d+)/, '?$1');
  link.style = 'color: #a00;';
}());
