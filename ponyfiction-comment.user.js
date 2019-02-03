// ==UserScript==
// @name     ponyfiction comment
// @version  1
// @match https://ponyfiction.org/story/*
// ==/UserScript==

//todo прицепиться к событию Reload ajax
(function(){
  var ls;
  
  ls = document.getElementsByClassName('comment-by-topic-author');
  Array.from(ls).forEach(function(e) {
  	e.parentElement.style = 'background-color: #cfc;';
	});
  
  ls = document.getElementsByClassName('vote-total');
  Array.from(ls).forEach(function(e) {
    var total = parseInt(/(\d+)/.exec(e.title)[1]);
    var vote = parseInt(e.innerHTML);
    //u - d = v
    //u + d = t
    var upvotes = (total + vote) / 2;
    var downvotes = total - upvotes;

    var r = '';
    r += '<span style="color: #' + (upvotes>0?'0a0':'888') + ';">+' + upvotes + '</span> ';
    r += '<span style="color: #' + (downvotes>0?'a00':'888') + ';">-' + downvotes + '</span>';
    e.innerHTML = r;
	});
})();
