"use strict";
function coronaBuddyGetPopupTextArea() {
    return document.getElementById("popup__textarea");
}
function setData(data, passCallback) {
    chrome.storage.sync.set({ gayNiggerStorage: data }, function () {
        passCallback();
    });
    if (coronaBuddyGetPopupTextArea()) {
        coronaBuddyGetPopupTextArea().value = data
            .trim()
            .split(",")
            .map(function (name) {
            return name.trim();
        })
            .join(", ");
    }
    chrome.tabs.reload();
}
var coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
