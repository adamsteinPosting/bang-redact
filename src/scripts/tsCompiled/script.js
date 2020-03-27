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
(function () {
    var gayNiggerList;
    var gayNiggersRetrieved = false;
    var darkModeSet = false;
    var darkModeEnabled = false;
    function redactPosts(poster, element) {
        if (poster.innerHTML.match(gayNiggerList)) {
            element.style.display = "none";
        }
    }
    function asDOMLoads(element) {
        var POSTS = element.getElementsByClassName("post-element"), TOPICS = element.getElementsByClassName("topic"), TOPICPOSTER = element.getElementsByClassName("topic-poster"), QUOTES = element.getElementsByClassName("content-element"), ACTIVITY = element.getElementsByTagName("blockquote"), REDACTIONS = [
            POSTS,
            TOPICS,
            TOPICPOSTER,
            QUOTES,
            ACTIVITY
        ];
        REDACTIONS.forEach(function (redaction, index) {
            redaction.forEach(function (elm) {
                if (elm) {
                    var anchorElement = elm;
                    switch (index) {
                        case 0:
                            anchorElement = anchorElement
                                .getElementsByClassName("post-author")[0]
                                .getElementsByClassName("profile-link")[0];
                            break;
                        case 1:
                            anchorElement = anchorElement.getElementsByClassName("profile-link")[0];
                            break;
                        case 2:
                            if (anchorElement
                                .getElementsByClassName("profile-link")[0]
                                .innerHTML.match(gayNiggerList)) {
                                anchorElement.getElementsByClassName("profile-link")[0].innerHTML = "Muted Poster";
                                anchorElement.getElementsByClassName("topic-poster-avatar")[0].innerHTML = "❌";
                            }
                            anchorElement = null;
                            break;
                        case 3:
                            anchorElement = anchorElement.getElementsByClassName("profile-link")[0];
                            if (anchorElement.parentElement.classList.contains("forum-lastpost-small")) {
                                anchorElement = anchorElement.parentElement.parentElement.parentElement.getElementsByClassName("forum-poster")[0];
                                if (anchorElement
                                    .getElementsByClassName("profile-link")[0]
                                    .innerHTML.match(gayNiggerList)) {
                                    anchorElement.getElementsByClassName("profile-link")[0].innerHTML = "Muted Poster";
                                    anchorElement.getElementsByClassName("forum-poster-avatar")[0].innerHTML = "❌";
                                }
                                anchorElement = null;
                            }
                            break;
                        case 4:
                            anchorElement = anchorElement.getElementsByClassName("profile-link")[0];
                            break;
                        default:
                            throw new Error("Unknown redaction argument. Check REDACTIONS array.");
                    }
                    if (anchorElement) {
                        redactPosts(anchorElement, elm);
                    }
                }
            });
        });
    }
    function parseNodes(mutations) {
        var e_1, _a, e_2, _b;
        if (gayNiggersRetrieved) {
            try {
                for (var mutations_1 = __values(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                    var MUTATION = mutations_1_1.value;
                    if (MUTATION.addedNodes) {
                        try {
                            for (var _c = (e_2 = void 0, __values(MUTATION.addedNodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var MUTATEDELEMENT = _d.value;
                                if (MUTATEDELEMENT && MUTATEDELEMENT.tagName === "DIV") {
                                    try {
                                        asDOMLoads(MUTATEDELEMENT);
                                        if (darkModeEnabled && document.head && darkModeSet === false) {
                                            darkModeSet = true;
                                            document.head.appendChild(templateDOMElement({
                                                tag: "style",
                                                innerHTML: darkCSS,
                                                id: "",
                                                classList: "",
                                                style: ""
                                            }));
                                        }
                                    }
                                    catch (error) {
                                    }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (mutations_1_1 && !mutations_1_1.done && (_a = mutations_1.return)) _a.call(mutations_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    chrome.storage.sync.get("gayNiggerStorage", function (data) {
        if (!data.gayNiggerStorage) {
            coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function () { });
        }
        else {
            gayNiggerList = new RegExp(data.gayNiggerStorage
                .trim()
                .split(",")
                .map(function (name) {
                return name.trim();
            })
                .join("|"), "gi");
            gayNiggersRetrieved = true;
        }
    });
    chrome.storage.sync.get("coronaBuddyDarkMode", function (data) {
        if (!data.coronaBuddyDarkMode) {
            coronaBuddySetDarkMode("false", function () { });
        }
        else {
            if (data.coronaBuddyDarkMode === "true") {
                darkModeEnabled = true;
            }
        }
    });
    var OBSERVER = new MutationObserver(parseNodes);
    OBSERVER.observe(document, {
        attributes: true,
        childList: true,
        subtree: true
    });
})();
