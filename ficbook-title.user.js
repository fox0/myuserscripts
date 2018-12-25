// ==UserScript==
// @name     ficbook title
// @version  1
// @match https://ficbook.net/home/news
// ==/UserScript==

(function(){
  var result = [];
  var ls = document.getElementsByClassName('notification-cnt');
  for (i=0; i<ls.length; i++){
  	result.push(ls[i].innerHTML);
  }
  document.getElementsByTagName('title')[0].innerHTML = '[' + result.join('] [') + ']';

  setTimeout(function() {
  	location.reload(); 
  }, 1000 * 60 * 5); //min
  
})();
