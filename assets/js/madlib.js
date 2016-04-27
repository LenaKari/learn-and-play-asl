var madlibStories = {
  kitchen: "This is a kitchen",
  snow: "It snowed today",
  defaultStory: "Whatever text I want"
}

var selectStory = function(story) {
  if (madlibStories[story]) {
    return madlibStories[story];
  } else {
    return madlibStories.defaultStory;
  }
};
