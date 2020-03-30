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
    var darkModeInjected = false;
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
        try {
            if (document.querySelector("#message_ifr").contentWindow.document.body &&
                !darkModeInjected &&
                darkModeEnabled) {
                darkModeInjected = true;
                document
                    .querySelector("#message_ifr")
                    .contentWindow.document.head.querySelector("style").innerHTML +=
                    "body {background-color: #121212 !important; color: white !important;} blockquote {border: 1px solid linen !important;}";
            }
        }
        catch (_c) { }
        if (gayNiggersRetrieved) {
            try {
                for (var mutations_1 = __values(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                    var MUTATION = mutations_1_1.value;
                    if (MUTATION.addedNodes) {
                        try {
                            for (var _d = (e_2 = void 0, __values(MUTATION.addedNodes)), _e = _d.next(); !_e.done; _e = _d.next()) {
                                var MUTATEDELEMENT = _e.value;
                                if (MUTATEDELEMENT && MUTATEDELEMENT.tagName === "DIV") {
                                    try {
                                        asDOMLoads(MUTATEDELEMENT);
                                        if (darkModeEnabled && document.head && darkModeSet === false) {
                                            darkModeSet = true;
                                            document.head.lastChild.after(templateDOMElement({
                                                tag: "style",
                                                innerHTML: darkCSS,
                                                id: "coronaBuddyDarkMode__selector",
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
                                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
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
