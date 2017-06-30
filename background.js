chrome.tabs.onCreated.addListener(decorate);
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == 'complete') decorate(tabId, tab);
});

function decorate(tabId, tab) {
  if (tab.url && tab.url.indexOf("https://trello.com") != -1) {
    change(tab.id, "columnCount", "css/count.css");
    change(tab.id, "cardId", "css/number.css");
    change(tab.id, "labelName", "css/label.css");
  }
}

function change(tabId, key, cssFile) {
  chrome.storage.sync.get(key, function(item) {
    if (!item[key]) {
      chrome.tabs.insertCSS(tabId, { file: cssFile });
    }
  });
}
