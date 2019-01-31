// ==UserScript==
// @name     habr alizar
// @version  1
// @match https://habr.com/ru/post/*
// ==/UserScript==
(function(){
  var user = document.getElementsByClassName('post__meta')[0].children[0].children[1].innerText;
  if(user == 'alizar') {
    var title = document.getElementsByClassName('post__title_full')[0];
    title.style = 'background-color: #ff0;';
  }
})();
