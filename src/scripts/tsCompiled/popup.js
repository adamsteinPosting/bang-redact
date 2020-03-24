"use strict";
(function () {
    function callSet() {
        var GAYNIGGERLIST = coronaBuddyGetPopupTextArea()
            .value.trim()
            .split(",")
            .map(function (name) {
            return name.trim();
        })
            .join(", ");
        coronaBuddySetData(GAYNIGGERLIST, function () { });
    }
    function callUnset() {
        coronaBuddySetData(coronaBuddyDefaultData, function () { });
    }
    chrome.storage.sync.get("gayNiggerStorage", function (obj) {
        if (!obj.gayNiggerStorage) {
            coronaBuddySetData(coronaBuddyDefaultData, function () { });
        }
        else {
            coronaBuddyGetPopupTextArea().value = obj.gayNiggerStorage
                .split(",")
                .map(function (name) {
                return name.trim();
            })
                .join(", ");
        }
    });
    document
        .getElementById("popup__textarea")
        .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            callSet();
            document.getElementById("popup__save").classList.add('popup__button--invert');
            document.getElementById("popup__save--text").classList.add('popup__button--invert');
            setTimeout(function () {
                document.getElementById("popup__save").classList.remove('popup__button--invert');
                document.getElementById("popup__save--text").classList.remove('popup__button--invert');
            }, 300);
        }
    });
    
    document.getElementById("popup__save").addEventListener("click", callSet);
    document.getElementById("popup__clear").addEventListener("click", callUnset);
})();
