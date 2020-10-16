// ==UserScript==
// @name mediawiki permalink
// @version 0.13
// @match https://*.wikipedia.org/*
// @match https://*.wiktionary.org/*
// @match https://*.wikisource.org/*
// @match https://*.wikifur.com/*
// @match https://commons.wikimedia.org/*
// @match https://encyclopediadramatica.rs/*
// @match https://mrakopedia.net/*
// @match https://posmotre.li/*
// @match https://lurkmore.to/*
// @match https://wiki.archlinux.org/*
// @match https://www.mediawiki.org/*
// @match http://armor.kiev.ua/*
// @match http://cyclowiki.org/*
// @match http://dfwk.ru/*
// @match http://wikireality.ru/*
// @match http://xgu.ru/*
// ==/UserScript==
(function(){
  var li = document.getElementById('t-permalink');
  if (li) {
    var a = li.firstChild;
    a.search = a.search.replace(/\?.*&(oldid=\d+)/, '?$1');
    a.style = 'color: #a00 !important;';
  }
}());
