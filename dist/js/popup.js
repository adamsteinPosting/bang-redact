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
        coronaBuddySetData(GAYNIGGERLIST, function () {});
    }
    function callUnset() {
        coronaBuddySetData(coronaBuddyDefaultData, function () {});
    }
    chrome.storage.sync.get("gayNiggerStorage", function (obj) {
        if (!obj.gayNiggerStorage) {
            coronaBuddySetData(coronaBuddyDefaultData, function () {});
        } else {
            var _a2 = obj.gayNiggerStorage.split(",");

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
    document.getElementById("popup__textarea").addEventListener("keydown", function (event) {
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