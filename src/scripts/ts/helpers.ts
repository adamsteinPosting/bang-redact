function coronaBuddyGetPopupTextArea() {
  return <HTMLInputElement>document.getElementById("popup__textarea");
}

function coronaBuddySetData(data: string, passCallback: Function) {
  chrome.storage.sync.set({ gayNiggerStorage: data }, function() {
    passCallback();
  });
  coronaBuddyWritePopupTextArea(data);
  chrome.tabs.reload();
}

function coronaBuddyWritePopupTextArea(data: string) {
  if (coronaBuddyGetPopupTextArea()) {
    coronaBuddyGetPopupTextArea().value = data
      .trim()
      .split(",")
      .map((name: string) => {
        return name.trim();
      })
      .join(", ");
  }
}

interface templateDOMElementTypes {
  tag: string | null;
  classList: string | null;
  innerHTML: string | null;
  id: string | null;
  style: string | null;
}

function templateDOMElement({
  tag: tag = null,
  classList: classList = null,
  innerHTML: innerHTML = null,
  id: id = null,
  style: style = null
}: templateDOMElementTypes) {
  if (tag !== null && tag !== undefined) {
    let elm: any = document.createElement(`${tag}`);
    if (classList !== null) {
      elm.classList.add(classList);
    }

    for (let [key, value] of Object.entries(arguments[0])) {
      if (value !== null && key !== "classList" && key !== "tag") {
        elm[key] = value;
      }
    }
    return elm;
  } else {
    throw new Error(`Tag not provided in ${arguments[0]}.`);
  }
}

var coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
