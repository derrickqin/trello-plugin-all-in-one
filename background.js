chrome.tabs.onCreated.addListener(decorate);
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === 'complete') {
    decorate(tabId, tab);
  }
});

function decorate(tabId, tab) {
  if (typeof tab !== 'undefined' && tab.url && tab.url.indexOf("https://trello.com") !== -1) {
    change(tab.id, "labelName", "css/label.css");
  }
}

function change(tabId, key, cssFile) {
  chrome.storage.sync.get(key, function(item) {
    if (!item[key]) {
      chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: [cssFile],
      });
    }
  });
}
