chrome.tabs.onCreated.addListener(loadTime);
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == 'complete') loadTime(tab);
});

function loadTime(tab) {
  var tabUrl = tab.url;
  if (tabUrl && tabUrl.indexOf("https://trello.com") != -1) {
    chrome.tabs.executeScript(tab.id, {
      file: "thirdPartyLib/moment.js"
    }, function () {
      chrome.tabs.executeScript(tab.id, {
        file: 'insert.js'
      });
    });
  }
}
