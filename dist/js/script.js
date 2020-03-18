"use strict";
window.addEventListener("load", function () {
    chrome.storage.sync.get("gayNiggerStorage", function (obj) {
        if (!obj.gayNiggerStorage) {
            setData(coronaBuddyDefaultData, function () { });
        }
        else {
            var usernameRegex_1 = new RegExp(obj.gayNiggerStorage
                .trim()
                .split(",")
                .join("|"), "gi");
            document.querySelectorAll(".post-element").forEach(function (node) {
                if (node) {
                    var poster = node
                        .querySelector(".post-author")
                        .querySelector(".profile-link");
                    if (poster.innerHTML.match(usernameRegex_1)) {
                        node.style.display = "none";
                    }
                }
            });
            document.querySelectorAll(".topic").forEach(function (node) {
                if (node) {
                    var poster = node.querySelector(".profile-link");
                    if (poster.innerHTML.match(usernameRegex_1)) {
                        node.style.display = "none";
                    }
                }
            });
        }
    });
});
