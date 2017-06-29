window.addEventListener("load", function () {
  addAging();
});


function addAging() {


  var cards = document.querySelectorAll(".list-card, .ui-droppable");

  for (index = 0; index < cards.length; index++) {
    (function (index) {
      var agingElements = cards[index].getElementsByClassName("trello-card-aging");
      if (agingElements === undefined || agingElements.length === 0) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var json = xhr.responseText;
            json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
            json = JSON.parse(json);

            var idList = json["idList"];
            var actions = json["actions"];
            var date = json.actions.filter(function (action) {
              return action.type === 'createCard' || action.type === 'copyCard' || (action.data.listAfter && action.data.listAfter.id === idList)
            }).shift().date;
            var div = document.createElement("div");
            div.innerHTML = '<span class="trello-card-aging" style="color:purple;">' + moment(date).fromNow() + '</span>';
            jsBadgeEle = cards[index].getElementsByClassName('badges')[0];
            jsBadgeEle.insertBefore(div, jsBadgeEle.firstChild);
          }
        };
        var cardHref = cards[index].getAttribute('href');
        xhr.open("GET", 'https://' + document.domain + cardHref + '.json');
        xhr.send();
      }
    })(index);
  }

}
