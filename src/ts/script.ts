window.addEventListener("load", function() {
  chrome.storage.sync.get("gayNiggerStorage", function(obj) {
    if (!obj.gayNiggerStorage) {
      setData(coronaBuddyDefaultData, function() {});
    } else {
      let usernameRegex = new RegExp(
        obj.gayNiggerStorage
          .trim()
          .split(",")
          .join("|"),
        "gi"
      );
      // redact posts
      document.querySelectorAll(".post-element").forEach(node => {
        if (node) {
          let poster = node
            .querySelector(".post-author")!
            .querySelector(".profile-link")!;
          if (poster.innerHTML.match(usernameRegex)) {
            (<HTMLElement>node).style.display = "none";
          }
        }
      });
      // redact topics
      document.querySelectorAll(".topic").forEach(node => {
        if (node) {
          let poster = node.querySelector(".profile-link")!;
          if (poster.innerHTML.match(usernameRegex)) {
            (<HTMLElement>node).style.display = "none";
          }
        }
      });
    }
  });
});
