describe("", function() {
  it("cebar mate disminuye en 30 ml el aguaDelTermo", () => {
    aguaDelTermo = 1000;
    cebarMate();
    assert.equal(aguaDelTermo, 970);    
  });


  it("cebar 3 mates disminuye en 90 ml el aguaDelTermo", () => {
    aguaDelTermo = 1000;
    cebarMate();
    cebarMate();
    cebarMate();
    assert.equal(aguaDelTermo, 910);    
  });
})