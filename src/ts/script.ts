let coronaBuddyRegex: RegExp;

function coronaBuddyRedactPosts(poster: Element, node: Element) {
  if (poster.innerHTML.match(coronaBuddyRegex)) {
    (<HTMLElement>node).style.display = "none";
  }
}

function coronaBuddyOnDOMLoad() {
  let posts = document.body.getElementsByClassName("post-element"),
    topics = document.body.getElementsByClassName("topic"),
    topicPoster = document.body.getElementsByClassName("topic-poster"),
    quotes = document.body.getElementsByClassName("content-element"),
    activity = document.body.getElementsByTagName("blockquote"),
    coronaBuddyRedactions: Array<HTMLCollectionOf<Element>> = [
      posts,
      topics,
      topicPoster,
      quotes,
      activity
    ];

  // I rewrote this to a nested non-idiomatic loop to increase performance
  for (
    let iterator = 0;
    iterator < coronaBuddyRedactions.length;
    iterator += 1
  ) {
    for (
      let iterator2 = 0;
      iterator2 < coronaBuddyRedactions[iterator].length;
      iterator2 += 1
    ) {
      if (coronaBuddyRedactions[iterator][iterator2]) {
        let poster;
        switch (iterator) {
          // posts
          case 0:
            poster = coronaBuddyRedactions[iterator][iterator2]
              .getElementsByClassName("post-author")[0]
              .getElementsByClassName("profile-link")[0];
            break;
          // topics
          case 1:
            poster = coronaBuddyRedactions[iterator][
              iterator2
            ].getElementsByClassName("profile-link")[0];
            break;
          // topic poster
          case 2:
            poster = coronaBuddyRedactions[iterator][iterator2];
            if (
              poster
                .getElementsByClassName("profile-link")[0]
                .innerHTML.match(coronaBuddyRegex)
            ) {
              poster.getElementsByClassName("profile-link")[0].innerHTML =
                "Muted Poster";
              poster.getElementsByClassName(
                "topic-poster-avatar"
              )[0].innerHTML = "❌";
            }
            poster = null;
            break;
          // quotes
          case 3:
            poster = coronaBuddyRedactions[iterator][
              iterator2
            ].getElementsByClassName("profile-link")[0];
            break;
          // activity
          case 4:
            poster = coronaBuddyRedactions[iterator][
              iterator2
            ].getElementsByClassName("profile-link")[0];
            break;
          // error
          default:
            throw new Error("Unknown redaction argument.");
        }
        if (poster) {
          coronaBuddyRedactPosts(
            poster,
            coronaBuddyRedactions[iterator][iterator2]
          );
        }
      }
    }
  }
}

function parseNodes() {
  // I realize this is sloppy but it's not currently problematic
  try {
    coronaBuddyOnDOMLoad();
  } catch {}
}

chrome.storage.sync.get("gayNiggerStorage", function(obj) {
  if (!obj.gayNiggerStorage) {
    setData(coronaBuddyDefaultData, function() {});
  } else {
    coronaBuddyRegex = new RegExp(
      obj.gayNiggerStorage
        .trim()
        .split(",")
        .join("|"),
      "gi"
    );
  }
});

let observer = new MutationObserver(parseNodes);

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true
});
