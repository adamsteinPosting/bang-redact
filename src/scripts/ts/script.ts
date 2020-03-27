(function() {
  let gayNiggerList: RegExp;
  // async messager
  let gayNiggersRetrieved: boolean = false;
  let darkModeSet: boolean = false;
  let darkModeEnabled: boolean = false;

  function redactPosts(poster: Element, element: Element) {
    if (poster.innerHTML.match(gayNiggerList)) {
      (<HTMLElement>element).style.display = "none";
    }
  }

  function asDOMLoads(element: Element) {
    const POSTS = element.getElementsByClassName("post-element"),
      TOPICS = element.getElementsByClassName("topic"),
      TOPICPOSTER = element.getElementsByClassName("topic-poster"),
      QUOTES = element.getElementsByClassName("content-element"),
      ACTIVITY = element.getElementsByTagName("blockquote"),
      REDACTIONS: Array<HTMLCollectionOf<Element>> = [
        POSTS,
        TOPICS,
        TOPICPOSTER,
        QUOTES,
        ACTIVITY
      ];

    // any type for HTMLCollectionOf<Element> typescript iteration bug
    REDACTIONS.forEach((redaction: any, index) => {
      redaction.forEach((elm: Element) => {
        if (elm) {
          let anchorElement: Element | null = elm;
          switch (index) {
            // posts
            case 0:
              anchorElement = anchorElement
                .getElementsByClassName("post-author")[0]
                .getElementsByClassName("profile-link")[0];
              break;
            // topics
            case 1:
              anchorElement = anchorElement.getElementsByClassName(
                "profile-link"
              )[0];
              break;
            // topic poster
            case 2:
              if (
                anchorElement
                  .getElementsByClassName("profile-link")[0]
                  .innerHTML.match(gayNiggerList)
              ) {
                anchorElement.getElementsByClassName(
                  "profile-link"
                )[0].innerHTML = "Muted Poster";
                anchorElement.getElementsByClassName(
                  "topic-poster-avatar"
                )[0].innerHTML = "❌";
              }
              anchorElement = null;
              break;
            // quotes
            case 3:
              anchorElement = anchorElement.getElementsByClassName(
                "profile-link"
              )[0];
              // prevents a category being redacted by having a blocked last poster
              // I could also get the page URL with a background script sending a message
              // this is sufficient and will work until I feel I need a background script
              // also, todo: reduce the repeated use of selectors by re-examining the DOM as it is built by German autistics
              if (
                anchorElement.parentElement!.classList.contains(
                  "forum-lastpost-small"
                )
              ) {
                anchorElement = anchorElement.parentElement!.parentElement!.parentElement!.getElementsByClassName(
                  "forum-poster"
                )[0];
                if (
                  anchorElement
                    .getElementsByClassName("profile-link")[0]
                    .innerHTML.match(gayNiggerList)
                ) {
                  anchorElement.getElementsByClassName(
                    "profile-link"
                  )[0].innerHTML = "Muted Poster";
                  anchorElement.getElementsByClassName(
                    "forum-poster-avatar"
                  )[0].innerHTML = "❌";
                }
                anchorElement = null;
              }
              break;
            // activity
            case 4:
              anchorElement = anchorElement.getElementsByClassName(
                "profile-link"
              )[0];
              break;
            // error
            // this should never happen
            default:
              throw new Error(
                "Unknown redaction argument. Check REDACTIONS array."
              );
          }

          if (anchorElement) {
            redactPosts(anchorElement, elm);
          }
        }
      });
    });
  }

  function parseNodes(mutations: any) {
    // check async call
    if (gayNiggersRetrieved) {
      for (const MUTATION of mutations) {
        if (MUTATION.addedNodes) {
          for (const MUTATEDELEMENT of MUTATION.addedNodes) {
            // suppresses errors when mutations are detected before the DOM is built in any meaningful way
            // I realize this is sloppy but it's not currently problematic
            if (MUTATEDELEMENT && MUTATEDELEMENT.tagName === "DIV") {
              try {
                asDOMLoads(MUTATEDELEMENT);
                if (darkModeEnabled && document.head && darkModeSet === false) {
                  darkModeSet = true;
                  document.head.appendChild(
                    templateDOMElement({
                      tag: "style",
                      innerHTML: darkCSS,
                      id: "",
                      classList: "",
                      style: ""
                    })
                  );
                }
              } catch (error) {
                // console.log(error)
              }
            }
          }
        }
      }
    }
  }

  chrome.storage.sync.get("gayNiggerStorage", function(data) {
    if (!data.gayNiggerStorage) {
      coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function() {});
    } else {
      gayNiggerList = new RegExp(
        data.gayNiggerStorage
          .trim()
          .split(",")
          .map((name: String) => {
            return name.trim();
          })
          .join("|"),
        "gi"
      );
      gayNiggersRetrieved = true;
    }
  });

  chrome.storage.sync.get("coronaBuddyDarkMode", function(data) {
    if (!data.coronaBuddyDarkMode) {
      coronaBuddySetDarkMode("false", function() {});
    } else {
      if (data.coronaBuddyDarkMode === "true") {
        darkModeEnabled = true;
      }
    }
  });

  // I'm using the mutation observer in this way because all event listeners cause the DOM to pop in and then pop out
  // this is because modern browsers render content as it comes in the only way to deal with this is to write the DOM as content is rendered
  const OBSERVER = new MutationObserver(parseNodes);

  OBSERVER.observe(document, {
    attributes: true,
    childList: true,
    subtree: true
  });
})();

// blueprint to block users via click
// add them as list to extension, button to delete
// message content script to access chrome API
/*
  window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".post-meta").forEach(postMeta => {
      if (!postMeta.nextElementSibling) {
        postMeta.insertAdjacentElement(
          "beforebegin",
          templateDOMElement({
            tag: "span",
            text:
              "<span onClick=if(confirm('Block&nbsp;'+this.parentNode.parentNode.parentNode.parentNode.querySelector('.profile-link').innerHTML+'?')){chrome.storage.sync.get('gayNiggerStorage',function(obj){setData(obj.gayNiggerStorage+=this.parentNode.parentNode.parentNode.parentNode.querySelector('.profile-link').innerHTML,{})})}>🚫</span>&nbsp;·",
            id: "",
            classList: "blockUser__icon",
            style:
              "padding-right: 0.5em; font-style: normal; cursor: pointer; filter: grayscale(100%);"
          })
        );
      }
    });
  });
*/
