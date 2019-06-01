// ==UserScript==
// @name     habr alizar
// @version  0.3
// @match    https://habr.com/ru/post/*
// @match    https://habr.com/ru/news/t/*
// ==/UserScript==
(function(){
  for (let e of document.getElementsByClassName('user-info__nickname')) {
    if (e.innerText == 'alizar') {
      e.style = 'background-color: #ff0;';
  	}
  }
})();
