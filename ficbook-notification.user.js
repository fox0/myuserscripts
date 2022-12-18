// ==UserScript==
// @name         count notification
// @version      0.4
// @match        https://ficbook.net/*
// @grant        none
// ==/UserScript==
(function() {
    const PERIOD = 1000 * 60 * 3; //min
    const K = 'notificationCount';
    const K_DATE = 'notificationCount__lastUpdated';

    function set_title(count) {
        var title = count == 0 ? '-///-' : '[' + count + ']';
        document.getElementsByTagName('title')[0].innerHTML = title;
    }

    function uuu() {
        fetch('/user_notifications/get_new', { method: 'POST'}).then((r) => r.json()).then((j) => {
            const count = j.data.count;
            localStorage.setItem(K, count);
            localStorage.setItem(K_DATE, Date.now());
            set_title(count);
        });
    }

    function ttt() {
        const d = localStorage.getItem(K_DATE);
        if (d === null || Date.now() + PERIOD < d) {
            uuu();
        } else {
            set_title(localStorage.getItem(K));
        }
        setTimeout(ttt, PERIOD);
    }
    uuu();
    setTimeout(ttt, PERIOD);
})();
