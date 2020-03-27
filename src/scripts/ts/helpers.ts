function coronaBuddyGetPopupTextArea() {
  return <HTMLInputElement>document.getElementById("popup__textarea");
}

function coronaBuddySetGayNiggerStorage(data: string, passCallback: Function) {
  chrome.storage.sync.set({ "gayNiggerStorage": data }, function() {
    passCallback();
  });
    coronaBuddyWritePopupTextArea(data);
    try {
      chrome.tabs.reload();  
    } catch {}
}

function coronaBuddySetDarkMode(data: string, passCallback: Function) {
  chrome.storage.sync.set({ "coronaBuddyDarkMode": data }, function() {
    passCallback();
  });
  try {
    chrome.tabs.reload();  
  } catch {}
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
    if (classList) {
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

var darkCSS = `
::selection {
  background: #B4D5FE;
}

::-moz-selection {
  background: #B4D5FE;
}

blockquote {
  border: 1px solid linen !important;
}

html:not(root) body {
  background-color: #121212 !important;
}

html:not(root) div {
  border: 0px !important;
}

html:not(root) p {
  color: white !important;
}

#af-wrapper a {
  color: lime !important;
  outline: 0;
}

#af-wrapper small .profile-link {
  /* This fixes a critical bug with the forum addon that seems to allow arbitrarily long user names without truncation, breaking UX */
  display: inline-block !important;
  vertical-align: bottom !important;
  max-width: 5vw !important;
  max-height: 2em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#af-wrapper .forum-description {
  color: linen;
}

#af-wrapper #forum-header {
  /* Override random !important in the WP CSS */
  background-color: #006600 !important;
}

#af-wrapper #forum-navigation a {
  border-color: green !important;
}

#af-wrapper .pages > strong {
  background-color: rgba(50, 255, 50, 0.6) !important;
  color: linen !important;
}

#af-wrapper #profile-content {
  background-color: #232323 !important;
  color: linen !important;
}

#af-wrapper #profile-layer {
  background-color: #232323 !important;
}

#af-wrapper #profile-navigation {
  /* Override random !important in the WP CSS */
  background-color: green !important;
}

#af-wrapper #profile-navigation a.active {
  /* Override random !important in the WP CSS */
  background-color: #006600 !important;
}

#af-wrapper .button-normal {
  /* Override random !important in the WP CSS */
  background-color: #006600 !important;
  border: 0px;
}

#af-wrapper .content-element:nth-child(2n) {
  background-color: #232323;
}

#af-wrapper .editor-row-subject {
  background-color: black;
  color: gray;
}

#af-wrapper .editor-row-subject > span > input {
  background-color: #232323;
  color: linen;
}


#af-wrapper .forum-post-menu a {
  color: green !important;
}

#af-wrapper .pages {
  background-color: #232323 !important;
  border-color: gray !important;
  border: 1px solid gray !important;
}

#af-wrapper .pages > a {
  border-right: 1px solid gray !important;
  border-left: 1px solid gray !important;
  color: lime !important;
}

#af-wrapper .pages a:hover {
  background-color: lime !important;
  color: black !important;
}

#af-wrapper .pages strong {
  background-color: #232323;
  border-right: none;
  color: black !important;
}

#af-wrapper .post-author .topic-author {
  color: red !important;
  font-weight: 900;
  font-size: 1.1em;
  -webkit-text-stroke: 1px black;
}

#af-wrapper .post-message > blockquote::after {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(249, 249, 249, .4));
}

#af-wrapper .post-element {
  border: 2px gray solid !important;
}

#af-wrapper .title-element {
  background-color: #006600 !important;
}

#af-wrapper .topic-sticky {
  background-color: #121212 !important;
}

#af-wrapper .topic-sticky .topic-poster {
  background-color: #121212 !important;
  border-left: 0px;
}

#af-wrapper .unread {
  color: lime !important;
}

#forum-breadcrumbs > span > a > span {
  color: linen;
}

#forum-search {
  background-color: #232323 !important;
}

#poll-panel {
  background-color: #000000 !important;
  color: linen !important;
}

#read-unread {
  display: none !important;
}

.avatar {
  border: none !important;
}

.background-contrast {
  background-color: #232323 !important;
}

.content-container {
  background-color: #121212 !important;
  border-color: black !important;
}

.dark .site-container {
  background-color: #121212;
}

.editor-row {
  background-color: #121212 !important;
}

.forum {
  border-bottom: 0px !important;
}

.forum-editor-button {
  border: none !important;
}

.forum-poster {
  border-left: 0px !important;
}

.forum-post-date:after {
  content: '';
  width: 40vw !important;
  height: 1px !important;
  display: block;
  position: absolute;
  border-bottom: 1px solid gray !important;
}

.forum-post-header {
  border-color: gray !important;
}

.footer-widgets {
  background-color: #232323;
}

.mce-container-body {
  background-color: #121212 !important;
}

.poll-result-numbers {
  color: linen !important;
}

.poll-result-total {
  color: linen !important;
}

.post-counter {
  color: linen;
}

.post-element {
  background-color: #232323 !important;
}

.post-wrapper {
  background-color: #121212 !important;
  color: linen !important;
  border: 0px !important;
  border-right: 1px gray solid !important;
}

.quotetitle {
  color: linen;
}

.reaction.up:hover {
  color: lime !important;
}

.reaction.up > .reaction-icon {
  color: lime !important;
}

.reaction.up > .reaction-icon.reaction-inactive {
  color: gray !important;
}

.reaction.up > .reaction-number {
  color: lime !important;
}

.reaction.down:hover {
  color: red !important;
}

.reaction.down > .reaction-icon {
  color: red !important;
}

.reaction.down > .reaction-icon.reaction-inactive {
  color: gray !important;
}
.reaction.down > .reaction-number {
  color: red !important;
}

.spoiler-head {
  background-color: black !important;
  border: 1px solid linen !important;
}

.topic {
  border-bottom: 0px !important;
}

.topic-poster {
  border-left: 0px !important;
}`;

var coronaBuddyDefaultData = "Gay Nigger 1, Gay Nigger 2";
