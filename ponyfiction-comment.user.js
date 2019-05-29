// ==UserScript==
// @name ponyfiction comment
// @version 3
// @match https://ponyfiction.org/*
// ==/UserScript==
for (const e of document.getElementsByClassName('comment-by-topic-author')) {
  e.parentElement.style = 'background-color: #cfc;';
}

for (const e of document.getElementsByClassName('vote-total')) {
  var total = parseInt(/(\d+)/.exec(e.title)[1]);
  var vote = parseInt(e.innerHTML);
  //u - d = v
  //u + d = t
  var upvotes = (total + vote) / 2;
  var downvotes = total - upvotes;

  e.innerHTML = 
    '<span style="color: #' + (upvotes>0?'0a0':'888') + ';">+' + upvotes + '</span> ' +
    '<span style="color: #' + (downvotes>0?'a00':'888') + ';">-' + downvotes + '</span>';
}
