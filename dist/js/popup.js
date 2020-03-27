"use strict";

(function () {
    function callSet() {
        var _a = coronaBuddyGetPopupTextArea().value.trim().split(",");

        var _f = function (name) {
            return name.trim();
        };

        var _r = [];

        for (var _i = 0; _i < _a.length; _i++) {
            _r.push(_f(_a[_i], _i, _a));
        }

        var GAYNIGGERLIST = _r.join(", ");
        coronaBuddySetGayNiggerStorage(GAYNIGGERLIST, function () {});
    }
    function callUnset() {
        coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function () {});
    }
    function callCheck(evt) {
        evt.target.classList.toggle("popup__darkmode--checkbox--check");
        if (evt.target.classList.contains("popup__darkmode--checkbox--check")) {
            coronaBuddySetDarkMode("true", function () {});
        } else {
            coronaBuddySetDarkMode("false", function () {});
        }
    }
    chrome.storage.sync.get("gayNiggerStorage", function (data) {
        if (!data.gayNiggerStorage) {
            coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function () {});
        } else {
            console.log(data);

            var _a2 = data.gayNiggerStorage.split(",");

            var _f2 = function (name) {
                return name.trim();
            };

            var _r2 = [];

            for (var _i2 = 0; _i2 < _a2.length; _i2++) {
                _r2.push(_f2(_a2[_i2], _i2, _a2));
            }

            coronaBuddyGetPopupTextArea().value = _r2.join(", ");
        }
    });
    chrome.storage.sync.get("coronaBuddyDarkMode", function (data) {
        if (!data.coronaBuddyDarkMode) {
            coronaBuddySetDarkMode("false", function () {});
        } else {
            if (data.coronaBuddyDarkMode === "true") {
                document.getElementById("popup__check").classList.add("popup__darkmode--checkbox--check");
            }
        }
    });
    document.getElementById("popup__textarea").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            callSet();
            document.getElementById("popup__save").classList.add("popup__button--invert");
            document.getElementById("popup__save--text").classList.add("popup__button--invert");
            setTimeout(function () {
                document.getElementById("popup__save").classList.remove("popup__button--invert");
                document.getElementById("popup__save--text").classList.remove("popup__button--invert");
            }, 1000);
        }
    });
    document.getElementById("popup__save").addEventListener("click", callSet);
    document.getElementById("popup__clear").addEventListener("click", callUnset);
    document.getElementById("popup__check").addEventListener("click", callCheck);
})();