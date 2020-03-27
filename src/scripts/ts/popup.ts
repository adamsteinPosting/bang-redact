(function() {
  function callSet() {
    const GAYNIGGERLIST = coronaBuddyGetPopupTextArea()
      .value.trim()
      .split(",")
      .map((name: string) => {
        return name.trim();
      })
      .join(", ");

    coronaBuddySetGayNiggerStorage(GAYNIGGERLIST, function() {});
  }

  function callUnset() {
    coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function() {});
  }

  function callCheck(evt: any) {
    evt.target.classList.toggle("popup__darkmode--checkbox--check");
    if (evt.target.classList.contains("popup__darkmode--checkbox--check")) {
      coronaBuddySetDarkMode("true", function() {});
    } else {
      coronaBuddySetDarkMode("false", function() {});
    }
  }

  chrome.storage.sync.get("gayNiggerStorage", function(data) {
    if (!data.gayNiggerStorage) {
      coronaBuddySetGayNiggerStorage(coronaBuddyDefaultData, function() {});
    } else {
      console.log(data);
      coronaBuddyGetPopupTextArea().value = data.gayNiggerStorage
        .split(",")
        .map((name: string) => {
          return name.trim();
        })
        .join(", ");
    }
  });

  chrome.storage.sync.get("coronaBuddyDarkMode", function(data) {
    if (!data.coronaBuddyDarkMode) {
      coronaBuddySetDarkMode("false", function() {});
    } else {
      if (data.coronaBuddyDarkMode === "true") {
        document
        .getElementById("popup__check")!
        .classList.add("popup__darkmode--checkbox--check");
      }
    }
  });

  document
    .getElementById("popup__textarea")!
    .addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        callSet();
        document
          .getElementById("popup__save")!
          .classList.add("popup__button--invert");
        document
          .getElementById("popup__save--text")!
          .classList.add("popup__button--invert");
        setTimeout(() => {
          document
            .getElementById("popup__save")!
            .classList.remove("popup__button--invert");
          document
            .getElementById("popup__save--text")!
            .classList.remove("popup__button--invert");
        }, 1000);
      }
    });
  document.getElementById("popup__save")!.addEventListener("click", callSet);
  document.getElementById("popup__clear")!.addEventListener("click", callUnset);
  document.getElementById("popup__check")!.addEventListener("click", callCheck);
})();
