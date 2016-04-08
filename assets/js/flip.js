var flipEvent = function() {

  $(".card").flip({
    axis: 'y',
    trigger: 'click'
  });

};

$(document).ready(flipEvent);
