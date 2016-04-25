describe("Dictionary tests", function() {

  it("The dictionary exists", function() {
    expect(dictionary).not.toBe(null);
  });

  it("Dictionary data has been populated.", function() {
    // Get the first entry in the dictionary and see that the media link has been created
    expect(dictionary.animal.media).not.toBe(null);
  });

  it("Search list has been created.", function() {
    expect(searchList.length).toBeGreaterThan(0);
  });

});
