function save_options() {
  let cardAge = document.getElementById('cardAge').checked;
  let cardCountInList = document.getElementById('cardCountInList').checked;
  let cardId = document.getElementById('cardId').checked;
  let labelName = document.getElementById('labelName').checked;

  chrome.storage.sync.set({
    cardAge: cardAge,
    cardCountInList: cardCountInList,
    cardId: cardId,
    labelName: labelName
  }, function() {
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    cardAge: false,
    cardCountInList: false,
    cardId: false,
    labelName: false
  }, function(items) {
    document.getElementById('cardAge').checked = items.cardAge;
    document.getElementById('cardCountInList').checked = items.cardCountInList;
    document.getElementById('cardId').checked = items.cardId;
    document.getElementById('labelName').checked = items.labelName;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
