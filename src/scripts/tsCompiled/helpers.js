"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function coronaBuddyGetPopupTextArea() {
    return document.getElementById("popup__textarea");
}
function coronaBuddySetData(data, passCallback) {
    chrome.storage.sync.set({ gayNiggerStorage: data }, function () {
        passCallback();
    });
    coronaBuddyWritePopupTextArea(data);
    chrome.tabs.reload();
}
function coronaBuddyWritePopupTextArea(data) {
    if (coronaBuddyGetPopupTextArea()) {
        coronaBuddyGetPopupTextArea().value = data
            .trim()
            .split(",")
            .map(function (name) {
            return name.trim();
        })
            .join(", ");
    }
}
function templateDOMElement(_a) {
    var e_1, _b;
    var _c = _a.tag, tag = _c === void 0 ? null : _c, _d = _a.classList, classList = _d === void 0 ? null : _d, _e = _a.innerHTML, innerHTML = _e === void 0 ? null : _e, _f = _a.id, id = _f === void 0 ? null : _f, _g = _a.style, style = _g === void 0 ? null : _g;
    if (tag !== null && tag !== undefined) {
        var elm = document.createElement("" + tag);
        if (classList !== null) {
            elm.classList.add(classList);
        }
        try {
            for (var _h = __values(Object.entries(arguments[0])), _j = _h.next(); !_j.done; _j = _h.next()) {
                var _k = __read(_j.value, 2), key = _k[0], value = _k[1];
                if (value !== null && key !== "classList" && key !== "tag") {
                    elm[key] = value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return elm;
    }
    else {
        throw new Error("Tag not provided in " + arguments[0] + ".");
    }
}
var coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
