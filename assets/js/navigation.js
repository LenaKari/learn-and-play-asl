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
      $(views[i]).fadeIn("slow");
    } else {
      $(views[i]).hide();
    }
  }
};

var toggleNavigation = function() {
  if($('.nav-col').is(':visible')) {
    $('.nav-col').fadeOut("slow", function() {
      $('.body-col').removeClass( "col-xs-8 col-sm-9 col-md-10" );
    });
  } else {
    $('.nav-col').fadeIn("slow");
    $('.body-col').addClass( "col-xs-8 col-sm-9 col-md-10" );
  }
};
