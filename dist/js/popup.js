"use strict";
function clearNiggerAlerts() {
    var elmCleared = document.getElementById("cleared");
    var elmSaved = document.getElementById("saved");
    if (elmCleared) {
        elmCleared.remove();
    }
    if (elmSaved) {
        elmSaved.remove();
    }
}
function callSet() {
    var gayNiggerList = getPopupTextArea()
        .value.trim()
        .split(",")
        .map(function (name) {
        return name.trim();
    })
        .join(",");
    setData(gayNiggerList, function () {
        clearNiggerAlerts();
        var saved = document.createElement("p");
        saved.innerHTML = "Nigger list saved!";
        saved.id = "saved";
        saved.classList.add("popup__notification");
        document
            .getElementById("popup__save")
            .parentNode.insertBefore(saved, document.getElementById("popup__clear").nextSibling);
    });
}
function callUnset() {
    setData(coronaBuddyDefaultData, function () {
        clearNiggerAlerts();
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
        getPopupTextArea().value = obj.gayNiggerStorage.split(",").join(", ");
    }
});
document
    .getElementById("popup__textarea")
    .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        callSet();
    }
});
document.getElementById("popup__save").addEventListener("click", callSet);
document.getElementById("popup__clear").addEventListener("click", callUnset);
