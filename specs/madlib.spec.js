describe("Madlib tests", function() {

  it("The user can select a story", function() {
    // If the user selects an existing story.
    expect(selectStory("kitchen")).toEqual("This is a kitchen");

    // If the user selects a story that doesn't exist.
    expect(selectStory("nonsense")).toEqual(selectStory("defaultStory"));
  });

  xit("The user is presented with a choice of words.", function() {

  });

  xit("The user's choice is saved.", function() {

  });

  xit("The completed madlib is generated.", function() {

  });

});
