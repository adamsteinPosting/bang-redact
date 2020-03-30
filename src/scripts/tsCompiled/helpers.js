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
function coronaBuddySetGayNiggerStorage(data, passCallback) {
    chrome.storage.sync.set({ gayNiggerStorage: data }, function () {
        passCallback();
    });
    coronaBuddyWritePopupTextArea(data);
    try {
        chrome.tabs.reload();
    }
    catch (_a) { }
}
function coronaBuddySetDarkMode(data, passCallback) {
    chrome.storage.sync.set({ coronaBuddyDarkMode: data }, function () {
        passCallback();
    });
    try {
        chrome.tabs.reload();
    }
    catch (_a) { }
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
        if (classList) {
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
var darkCSS = "\n::selection {\n  background: #B4D5FE;\n}\n\n::-moz-selection {\n  background: #B4D5FE;\n}\n\nblockquote {\n  border: 1px solid linen !important;\n}\n\nhtml:not(root) body {\n  background-color: #121212 !important;\n}\n\nhtml:not(root) div {\n  border: 0px !important;\n}\n\nhtml:not(root) p {\n  color: white !important;\n}\n\n#af-wrapper a {\n  color: lime !important;\n  outline: 0;\n}\n\n#af-wrapper small .profile-link {\n  /* This fixes a critical bug with the forum addon that seems to allow arbitrarily long user names without truncation, breaking UX */\n  display: inline-block !important;\n  vertical-align: bottom !important;\n  max-width: 5vw !important;\n  max-height: 2em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n#af-wrapper .forum-description {\n  color: linen;\n}\n\n#af-wrapper #forum-header {\n  background-color: #006600 !important;\n}\n\n#af-wrapper #forum-navigation a {\n  border-color: green !important;\n}\n\n#af-wrapper .pages > strong {\n  background-color: rgba(50, 255, 50, 0.6) !important;\n  color: linen !important;\n}\n\n#af-wrapper #profile-content {\n  background-color: #232323 !important;\n  color: linen !important;\n}\n\n#af-wrapper #profile-layer {\n  background-color: #232323 !important;\n}\n\n#af-wrapper #profile-navigation {\n  /* Override random !important in the WP CSS */\n  background-color: green !important;\n}\n\n#af-wrapper #profile-navigation a.active {\n  /* Override random !important in the WP CSS */\n  background-color: #006600 !important;\n}\n\n#af-wrapper .button-normal {\n  /* Override random !important in the WP CSS */\n  background-color: #006600 !important;\n  border: 0px;\n}\n\n#af-wrapper .content-element:nth-child(2n):not(.topic-sticky) {\n  background-color: #121212 !important;\n}\n\n#af-wrapper .topic-sticky {\n  background-color: #121212 !important;\n  border-left: none !important;\n  border-right: none !important;\n  border-top: none !important;\n}\n\n#af-wrapper .topic-sticky .fa-comments {\n  color: tomato !important;\n}\n\n#af-wrapper .topic-sticky .topic-name > a {\n  color: #d6203b !important;\n  font-weight: 700 !important;\n}\n\n#af-wrapper .editor-row-subject {\n  background-color: black !important;\n  color: gray !important;\n}\n\n#af-wrapper .editor-row-subject > span > input {\n  background-color: #232323 !important;\n  color: linen !important;\n}\n\n\n#af-wrapper .forum-post-menu a {\n  color: green !important;\n}\n\n#af-wrapper .pages {\n  background-color: #232323 !important;\n  border-color: gray !important;\n  border: 1px solid gray !important;\n}\n\n#af-wrapper .pages > a {\n  border-right: 1px solid gray !important;\n  border-left: 1px solid gray !important;\n  color: lime !important;\n}\n\n#af-wrapper .pages a:hover {\n  background-color: lime !important;\n  color: black !important;\n}\n\n#af-wrapper .pages strong {\n  border-right: none;\n  color: black !important;\n}\n\n#af-wrapper .post-author .topic-author {\n  color: red !important;\n  font-weight: 900;\n  font-size: 1.1em;\n  -webkit-text-stroke: 1px black !important;\n}\n\n#af-wrapper .post-message > blockquote::after {\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(249, 249, 249, .4)) !important;\n}\n\n#af-wrapper .post-element {\n  border: 2px gray solid !important;\n}\n\n#af-wrapper .title-element {\n  background-color: #006600 !important;\n}\n\n#af-wrapper .topic-sticky .topic-poster {\n  border-left: 0px;\n  background: none !important;\n}\n\n#af-wrapper .unread {\n  color: lime !important;\n}\n\n#forum-breadcrumbs > span > a > span {\n  color: linen;\n}\n\n#forum-search {\n  background-color: #232323 !important;\n}\n\n#poll-panel {\n  background-color: #000000 !important;\n  color: linen !important;\n}\n\n#read-unread {\n  display: none !important;\n}\n\n.avatar {\n  border: none !important;\n}\n\n.background-contrast {\n  background-color: #232323 !important;\n}\n\n.content-container {\n  background-color: #232323 !important;\n  border-color: black !important;\n}\n\n.dark .site-container {\n  background-color: #121212 !important;\n}\n\n.editor-row {\n  background-color: #121212 !important;\n}\n\n.forum {\n  border-bottom: 0px !important;\n}\n\n.forum-editor-button {\n  border: none !important;\n}\n\n.forum-poster {\n  border-left: 0px !important;\n}\n\n.forum-post-date:after {\n  content: '';\n  width: 40vw !important;\n  height: 1px !important;\n  display: block;\n  position: absolute;\n  border-bottom: 1px solid gray !important;\n}\n\n.forum-post-header {\n  border-color: gray !important;\n}\n\n.footer-widgets {\n  background-color: #232323;\n}\n\n.mce-container-body {\n  background-color: #121212 !important;\n}\n\n.poll-result-numbers {\n  color: linen !important;\n}\n\n.poll-result-total {\n  color: linen !important;\n}\n\n.post-counter {\n  color: linen;\n}\n\n.post-element {\n  background-color: #232323 !important;\n}\n\n.post-wrapper {\n  background-color: #121212 !important;\n  color: linen !important;\n  border: 0px !important;\n  border-right: 1px gray solid !important;\n}\n\n.quotetitle {\n  color: linen;\n}\n\n.reaction.up:hover {\n  color: lime !important;\n}\n\n.reaction.up > .reaction-icon {\n  color: lime !important;\n}\n\n.reaction.up > .reaction-icon.reaction-inactive {\n  color: gray !important;\n}\n\n.reaction.up > .reaction-number {\n  color: lime !important;\n}\n\n.reaction.down:hover {\n  color: red !important;\n}\n\n.reaction.down > .reaction-icon {\n  color: red !important;\n}\n\n.reaction.down > .reaction-icon.reaction-inactive {\n  color: gray !important;\n}\n.reaction.down > .reaction-number {\n  color: red !important;\n}\n\n.spoiler-head {\n  background-color: black !important;\n  border: 1px solid linen !important;\n}\n\n.topic {\n  border-bottom: 0px !important;\n}\n\n.topic-poster {\n  border-left: 0px !important;\n}";
