"use strict";
function getPopupTextArea() {
    return document.getElementById("popup__textarea");
}
function setData(data, passCallback) {
    chrome.storage.sync.set({ gayNiggerStorage: data }, function () {
        passCallback();
    });
    if (getPopupTextArea()) {
        getPopupTextArea().value = data
            .trim()
            .split(",")
            .map(function (name) {
            return name.trim();
        })
            .join(", ");
    }
}
var coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
