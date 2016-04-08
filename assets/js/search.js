var selectSearchTerm = function(term) {
  // Get media link
  var media = dictionary[term].media;
  var mediaElement = "<video src='" + media + "' autoplay loop height='99%'></video>"

  $('#search-example').html(mediaElement);
};

var findInDictionary = function(value) {
  var results = "";

  if(value.length) {
    for (var i = 0; i < searchList.length; i++) {
      var startIndex = searchList[i].indexOf(value);
      if(startIndex > -1) {
        // Insert search value into span for formatting
        let endIndex = startIndex + value.length;
        results += "<div class='col-xs-6 col-sm-3'><p onclick='selectSearchTerm(\"" +
        searchList[i] + "\")'>" +
        searchList[i].slice(0, startIndex) + "<span class='search-term'>" + value + "</span>" + searchList[i].slice(endIndex) +
        "</p></div>";
      }
    }
  } else {
    // Empty the example element if the search box is empty
    $('#search-example').html("");
  }

  // Display the results on the page
  $('#search-results').html(results);
};


$("#search-box").bind("keyup change", function(e) {
    findInDictionary($('#search-box').val());
})
