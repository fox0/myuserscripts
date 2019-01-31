// ==UserScript==
// @name     habr alizar
// @version  2
// @match https://habr.com/ru/post/*
// ==/UserScript==
(function(){
  var user = document.querySelector('header.post__meta .user-info__nickname');
  if(user.innerText == 'alizar') {
    var title = document.querySelector('h1.post__title');
    title.style = 'background-color: #ff0;';
  }
})();
