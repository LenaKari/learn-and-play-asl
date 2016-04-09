var selectedCategory;
var selectedLevel;
var selectedNumberOfMatches;

var resetMatchGame = function() {
  selectedLevel = false;
  selectedLevel = false;
  selectedNumberOfMatches = false;

  // Remove selected-button from buttons
  $('button').removeClass('selected-button')
  $('#play-match-btn').prop('disabled', true);

  // #game-status initial contents
  $('#game-status').html(
    "<p>Category</p>" +
    "<button class='btn btn-default category-btn-animals' onclick='setCategory(\"animals\", \".category-btn-animals\")'>Animals</button>" +
    "<button class='btn btn-default category-btn-food' onclick='setCategory(\"food\", \".category-btn-food\")'>Food</button>" +
    "<button class='btn btn-default category-btn-none' onclick='setCategory(\"none\", \".category-btn-none\")'>Any</button>" +
    "<p>Level</p>" +
    "<button class='btn btn-default level-btn-1' onclick='setLevel(1, \".level-btn-1\")'>1</button>" +
    "<button class='btn btn-default level-btn-2' onclick='setLevel(2, \".level-btn-2\")'>2</button>" +
    "<button class='btn btn-default level-btn-none' onclick='setLevel(\"none\", \".level-btn-none\")'>Any</button>" +
    "<p>Number of Matches</p>" +
    "<button class='btn btn-default matches-btn-6' onclick='setNumberOfMatches(6, \".matches-btn-6\")'>6</button>" +
    "<button class='btn btn-default matches-btn-12' onclick='setNumberOfMatches(12, \".matches-btn-12\")'>12</button>" +
    "<button class='btn btn-default matches-btn-24' onclick='setNumberOfMatches(24, \".matches-btn-24\")'>24</button>" +
    "<p class='play-btn-guide'>Select a category, level and the number of matches you would like in your game before continuing.</p>" +
    "<button class='btn btn-default' id='play-match-btn'" +
    " onclick='filterDictionary(selectedCategory, selectedLevel, selectedNumberOfMatches)' disabled>" +
      "Play!" +
    "</button>"
  );
  // clear #card-container
  $('#card-container').html('');
};

var setCategory = function(category, button) {
  selectedCategory = category;
  var buttons = [".category-btn-animals", ".category-btn-food", ".category-btn-none"];
  for (var i = 0; i < buttons.length; i++) {
    if(buttons[i] === button) {
      $(buttons[i]).addClass('selected-button');
    } else {
      if($(buttons[i]).hasClass('selected-button')) {
        $(buttons[i]).removeClass('selected-button');
      }
    }
  }

  if(selectedLevel && selectedNumberOfMatches) {
    $('#play-match-btn').prop('disabled', false);
  }
};

var setLevel = function(level, button) {
  selectedLevel = level;
  var buttons = [".level-btn-1", ".level-btn-2", ".level-btn-none"];
  for (var i = 0; i < buttons.length; i++) {
    if(buttons[i] === button) {
      $(buttons[i]).addClass('selected-button');
    } else {
      if($(buttons[i]).hasClass('selected-button')) {
        $(buttons[i]).removeClass('selected-button');
      }
    }
  }

  if(selectedCategory && selectedNumberOfMatches) {
    $('#play-match-btn').prop('disabled', false);
  }
};

var setNumberOfMatches = function(number, button) {
  selectedNumberOfMatches = number;
  var buttons = [".matches-btn-6", ".matches-btn-12", ".matches-btn-24"];
  for (var i = 0; i < buttons.length; i++) {
    if(buttons[i] === button) {
      $(buttons[i]).addClass('selected-button');
    } else {
      if($(buttons[i]).hasClass('selected-button')) {
        $(buttons[i]).removeClass('selected-button');
      }
    }
  }

  if(selectedLevel && selectedCategory) {
    $('#play-match-btn').prop('disabled', false);
  }
};

var filterDictionary = function(tag, level, matches) {
  var filteredResults = [];
  if(tag !== "none") {
    for (var key in dictionary) {
      if(dictionary[key].tags.indexOf(tag) > -1) {
        if(level !== "none") {
          if(dictionary[key].level === level) {
            filteredResults.push(dictionary[key]);
          }
        } else {
          filteredResults.push(dictionary[key]);
        }
      }
    }
  }
  populateCards(shuffleFilteredResults(filteredResults, matches));
};

var shuffleFilteredResults = function(results, matches) {

  var currentIndex = results.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = results[currentIndex];
    results[currentIndex] = results[randomIndex];
    results[randomIndex] = temporaryValue;
  }
  return results.slice(0, matches);

};

var populateCards = function(cardData) {
  $('#game-status').html('<p>Clear the board by matching words with their signs.</p>');
  var cardList = [];
  matchesCountdown = cardData.length;

  for (var i=0; i < cardData.length; i++) {
    var cardMediaElement = "<div class='col-xs-4 col-sm-3 col-md-2'>" +
    "<div class='media-card card' id='media-card-" + i + "'>" +
      "<div class='front'></div>" +
      "<div class='back'><video src='" + cardData[i].media + "' autoplay loop width='99%' height='99%'></video></div>" +
    "</div>";
    cardList.push(cardMediaElement);
    var cardWordElement = "<div class='col-xs-4 col-sm-3 col-md-2'>" +
    "<div class='word-card card' id='word-card-" + i + "'>" +
      "<div class='front'></div>" +
      "<div class='back'>" + cardData[i].name + "</div>" +
    "</div>";
    cardList.push(cardWordElement);
  }

  // Shuffle those results
  cardList = shuffleFilteredResults(cardList, cardList.length);

  // Then append list to the dom
  for (var i=0; i < cardList.length; i++) {
    $('#card-container').append(cardList[i]);

    // Do we want to add numbers to the cards? If so, uncomment!
    // var currentCard = $('.card .front')[i];
    // currentCard.innerHTML = (i+1).toString();
  }

  setTimeout(function() {
    for(var i=0; i< cardData.length; i++) {
      // Create flip event
      var currentMediaCard = "#media-card-" + i;
      var currentWordCard = "#word-card-" + i;

      $(currentMediaCard).flip({ axis: 'y', trigger: 'click' });
      $(currentWordCard).flip({ axis: 'y', trigger: 'click' });
    }
    $( "#card-container" ).fadeIn( "slow");
    attachCardEventBindings();
  }, 2000);

};
