"use strict";
var coronaBuddyRegex;
function coronaBuddyRedactPosts(poster, node) {
    if (poster.innerHTML.match(coronaBuddyRegex)) {
        node.style.display = "none";
    }
}
function coronaBuddyOnDOMLoad() {
    var posts = document.body.getElementsByClassName("post-element"), topics = document.body.getElementsByClassName("topic"), topicPoster = document.body.getElementsByClassName("topic-poster"), quotes = document.body.getElementsByClassName("content-element"), activity = document.body.getElementsByTagName("blockquote"), coronaBuddyRedactions = [
        posts,
        topics,
        topicPoster,
        quotes,
        activity
    ];
    for (var iterator = 0; iterator < coronaBuddyRedactions.length; iterator += 1) {
        for (var iterator2 = 0; iterator2 < coronaBuddyRedactions[iterator].length; iterator2 += 1) {
            if (coronaBuddyRedactions[iterator][iterator2]) {
                var poster = void 0;
                switch (iterator) {
                    case 0:
                        poster = coronaBuddyRedactions[iterator][iterator2]
                            .getElementsByClassName("post-author")[0]
                            .getElementsByClassName("profile-link")[0];
                        break;
                    case 1:
                        poster = coronaBuddyRedactions[iterator][iterator2].getElementsByClassName("profile-link")[0];
                        break;
                    case 2:
                        poster = coronaBuddyRedactions[iterator][iterator2];
                        if (poster
                            .getElementsByClassName("profile-link")[0]
                            .innerHTML.match(coronaBuddyRegex)) {
                            poster.getElementsByClassName("profile-link")[0].innerHTML =
                                "Muted Poster";
                            poster.getElementsByClassName("topic-poster-avatar")[0].innerHTML = "❌";
                        }
                        poster = null;
                        break;
                    case 3:
                        poster = coronaBuddyRedactions[iterator][iterator2].getElementsByClassName("profile-link")[0];
                        if (poster.parentElement.classList.contains("forum-lastpost-small")) {
                            poster = poster.parentElement.parentElement.parentElement.getElementsByClassName("forum-poster")[0];
                            if (poster
                                .getElementsByClassName("profile-link")[0]
                                .innerHTML.match(coronaBuddyRegex)) {
                                poster.getElementsByClassName("profile-link")[0].innerHTML =
                                    "Muted Poster";
                                poster.getElementsByClassName("forum-poster-avatar")[0].innerHTML = "❌";
                            }
                            poster = null;
                        }
                        break;
                    case 4:
                        poster = coronaBuddyRedactions[iterator][iterator2].getElementsByClassName("profile-link")[0];
                        break;
                    default:
                        throw new Error("Unknown redaction argument.");
                }
                if (poster) {
                    coronaBuddyRedactPosts(poster, coronaBuddyRedactions[iterator][iterator2]);
                }
            }
        }
    }
}
function parseNodes() {
    try {
        coronaBuddyOnDOMLoad();
    }
    catch (_a) { }
}
chrome.storage.sync.get("gayNiggerStorage", function (obj) {
    if (!obj.gayNiggerStorage) {
        setData(coronaBuddyDefaultData, function () { });
    }
    else {
        coronaBuddyRegex = new RegExp(obj.gayNiggerStorage
            .trim()
            .split(",")
            .join("|"), "gi");
    }
});
var observer = new MutationObserver(parseNodes);
observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
});
