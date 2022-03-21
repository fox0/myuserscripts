// ==UserScript==
// @name         rutube views_total
// @namespace    http://tampermonkey.net/
// @version      0.2
// @match        https://rutube.ru/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rutube.ru
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var views_total = document.querySelector('[property="ya:ovs:views_total"]').content; // string
    var el = document.querySelector('.pen-video-options-row__duration-wrapper');
    var node = el.cloneNode(true);
    node.innerHTML = views_total + ' просмотров';
    document.querySelector('.pen-video-options-row__toolbar-left').insertBefore(node, el);
})();
