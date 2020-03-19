"use strict";
function coronaBuddyClearNiggerAlerts() {
    var elmCleared = document.getElementById("cleared");
    var elmSaved = document.getElementById("saved");
    if (elmCleared) {
        elmCleared.remove();
    }
    if (elmSaved) {
        elmSaved.remove();
    }
}
function coronaBuddyCallSet() {
    var gayNiggerList = coronaBuddyGetPopupTextArea()
        .value.trim()
        .split(",")
        .map(function (name) {
        return name.trim();
    })
        .join(",");
    setData(gayNiggerList, function () {
        coronaBuddyClearNiggerAlerts();
        var saved = document.createElement("p");
        saved.innerHTML = "Nigger list saved!";
        saved.id = "saved";
        saved.classList.add("popup__notification");
        document
            .getElementById("popup__save")
            .parentNode.insertBefore(saved, document.getElementById("popup__clear").nextSibling);
    });
}
function coronaBuddyCallUnset() {
    setData(coronaBuddyDefaultData, function () {
        coronaBuddyClearNiggerAlerts();
        var cleared = document.createElement("p");
        cleared.innerHTML = "Nigger list reset!";
        cleared.id = "cleared";
        cleared.classList.add("popup__notification");
        document
            .getElementById("popup__clear")
            .parentNode.insertBefore(cleared, document.getElementById("popup__clear").nextSibling);
    });
}
chrome.storage.sync.get("gayNiggerStorage", function (obj) {
    if (!obj.gayNiggerStorage) {
        setData(coronaBuddyDefaultData, function () { });
    }
    else {
        coronaBuddyGetPopupTextArea().value = obj.gayNiggerStorage
            .split(",")
            .join(", ");
    }
});
document
    .getElementById("popup__textarea")
    .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        coronaBuddyCallSet();
    }
});
document
    .getElementById("popup__save")
    .addEventListener("click", coronaBuddyCallSet);
document
    .getElementById("popup__clear")
    .addEventListener("click", coronaBuddyCallUnset);
