var currentlySelectedSet;
var lastClickedCard;
var matchesCountdown;

var getCardNumber = function(id) {
  if(id.slice(0,1) === 'w') {
    return parseInt(id.slice(10));
  } else {
    return parseInt(id.slice(11));
  }
};

var gameOver = function() {
  $('#game-status').html("<p>Congratulations! You have found all of the matches!</p>" +
  "<button class='btn btn-default' id='play-again-btn' onclick='resetMatchGame()'>Play again</button>")
};

var notAMatch = function() {
  currentlySelectedSet = "";
  lastClickedCard = "";
  $('.card').flip(false);
  $('#game-status').html("That was not a match.");
  $('.page-overlay').hide();
};

var isAMatch = function() {
  // Hide the cards you just matched
  var currentMediaCard = "#media-card-" + lastClickedCard;
  var currentWordCard = "#word-card-" + lastClickedCard;
  $(currentMediaCard).empty();
  $(currentWordCard).empty();

  currentlySelectedSet = "";
  lastClickedCard = "";
  $('#game-status').html("You have a match!");
  $('.page-overlay').hide();
  matchesCountdown--;

  if(matchesCountdown === 0) {
    gameOver();
  }

};

var checkMatch = function() {
  // Overlay transparent div so user cannot select another card while check is happening
  $('.page-overlay').show();

  // Check if a set has already been selected
  if(currentlySelectedSet === parseInt(currentlySelectedSet, 10)) {
    setTimeout(function() {
      if(currentlySelectedSet === lastClickedCard) {
        isAMatch();
      } else {
        notAMatch();
      }
    }, 2500);
  } else {
    currentlySelectedSet = lastClickedCard;
    $('.page-overlay').hide();
  }
};


var attachCardEventBindings = function() {
  $('.card').bind('click', function(){
    lastClickedCard = getCardNumber($(this).attr('id'));
    $('#game-status').html('');
    checkMatch();
  });
};
