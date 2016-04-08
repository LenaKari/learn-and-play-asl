var goToView = function(page) {
  var views = ["#match-game", "#search-container"];
  if (page === "#search-container") {
    $('#search-example').html('');
    $('#search-box').val('');
    findInDictionary('');
  } else if (page === "#match-game") {
    resetMatchGame();
  }

  for (var i = 0; i < views.length; i++) {
    if(views[i] == page) {
      $(views[i]).show();
    } else {
      $(views[i]).hide();
    }
  }
};
