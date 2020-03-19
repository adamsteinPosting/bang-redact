function coronaBuddyGetPopupTextArea() {
  return <HTMLInputElement>document.getElementById("popup__textarea");
}

function setData(data: string, passCallback: Function) {
  chrome.storage.sync.set({ gayNiggerStorage: data }, function() {
    passCallback();
  });
  if (coronaBuddyGetPopupTextArea()) {
    coronaBuddyGetPopupTextArea().value = data
      .trim()
      .split(",")
      .map((name: string) => {
        return name.trim();
      })
      .join(", ");
  }
  chrome.tabs.reload();
}

let coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
