chrome.tabs.onCreated.addListener(decorate);
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == 'complete') decorate(tabId, tab);
});

function decorate(tabId, tab) {
  if (tab.url && tab.url.indexOf("https://trello.com") != -1) {
    chrome.tabs.insertCSS(tabId, {
      file: "decorator.css"
    });
  }
}
