setInterval(function () {
  chrome.storage.sync.get(null).then((options) => {
    change(options);
  });
}, 3000);

function showCardId(cardHref, card) {
  let match = cardHref.match(/\/(\d+)-/);
  if (match) {
    // remove existing label in any
    card.innerHTML = card.innerHTML.replace(/<b class="card-short-id">#\d+<\/b>/, '');

    card.innerHTML = `<b class="card-short-id">#${match[1]}</b> ${card.innerHTML}`
  }
}

function showCardCountInList() {
  let lists = document.querySelectorAll("div[data-testid=\"list\"]");
  for (let index = 0; index < lists.length; index++) {
    let list = lists[index];
    let cardCount = list.querySelectorAll("li[data-testid=\"list-card\"]").length;
    let listName = list.querySelector("h2[data-testid=\"list-name\"]");
    let cardCountLabel;
    if (cardCount === 1) {
      cardCountLabel = `<div class="card-count-in-list" style="color:grey;">${cardCount} card</div>`;
    } else {
      cardCountLabel = `<div class="card-count-in-list" style="color:grey;">${cardCount} cards</div>`;
    }

    // remove existing label if any
    listName.innerHTML = listName.innerHTML.replace(/<div class="card-count-in-list" style="color:grey;">\d+\scards?<\/div>/, '');

    listName.innerHTML = listName.innerHTML + cardCountLabel;
  }
}

function change(options) {
  // fix after the Trello release around 2023/10/20
  if (!options['cardCountInList']) {
    showCardCountInList()
  }
  let cards = document.querySelectorAll("a[data-testid=\"card-name\"]");

  for (let index = 0; index < cards.length; index++) {
    let cardHref = cards[index].getAttribute('href');

    // show card ID
    if (!options['cardId']) {
      showCardId(cardHref, cards[index]);
    }

    if (!options['cardAge']) {
      (function (index) {
        let agingElements = cards[index].getElementsByClassName("trello-card-aging");
        if (agingElements === undefined || agingElements.length === 0) {
          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              let json = xhr.responseText;
              json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
              json = JSON.parse(json);

              let idList = json["idList"];
              let date = json.actions.filter(function (action) {
                return action.type === 'createCard' || action.type === 'copyCard' || (action.data.listAfter && action.data.listAfter.id === idList)
              }).shift().date;
              let trueAgeLabel = `<div class="trello-card-aging" style="color:purple;">${moment(date).fromNow()}</div>`;
              // fix after the Trello release around 2023/10/20
              cards[index].innerHTML = cards[index].innerHTML + trueAgeLabel;
            }
          };

          xhr.open("GET", 'https://' + document.domain + cardHref + '.json');
          xhr.send();
        }
      })(index);
    }
  }
}
