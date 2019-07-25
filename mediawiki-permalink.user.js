// ==UserScript==
// @name mediawiki permalink
// @version 0.9
// @match https://*.wikipedia.org/*
// @match https://*.wiktionary.org/*
// @match https://*.wikisource.org/*
// @match https://*.wikifur.com/*
// @match https://commons.wikimedia.org/*
// @match https://mrakopedia.org/*
// @match https://posmotre.li/*
// @match https://lurkmore.to/*
// @match https://www.mediawiki.org/*
// @match http://dfwk.ru/*
// @match http://wikireality.ru/*
// @match http://xgu.ru/*
// ==/UserScript==
(function(){
  var li = document.getElementById('t-permalink');
  if (li) {
    var a = li.firstChild;
    a.search = a.search.replace(/\?.*&(oldid=\d+)/, '?$1');
    a.style = 'color: #a00;';
  }
}());
