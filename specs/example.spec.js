describe("A sample test to start with.", function() {
  it("The dictionary exists", function() {
    expect(dictionary).not.toBe(null);
  });

  it("Dictionary data has been populated.", function() {
    // Get the first entry in the dictionary and see that the media link has been created
    expect(dictionary.animal.media).not.toBe(null);
  });
});
