// ==UserScript==
// @name     habr alizar
// @version  0.4
// @match    https://habr.com/ru/*
// ==/UserScript==
(function(){
  for (let e of document.getElementsByClassName('user-info__nickname')) {
    if (e.innerText == 'alizar' || e.innerText == 'SLY_G') {
      e.parentElement.parentElement.style = 'background-color: #ff0;';
  	}
  }
}());
