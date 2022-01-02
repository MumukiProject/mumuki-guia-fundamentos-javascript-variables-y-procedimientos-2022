describe("Group description", function() {
  it("cebarMate disminuye en 30 ml el aguaDelTermo", () => {
    aguaDelTermo = 1000;
    cebarMate();
    assert.equals(aguaDelTermo, 970);    
  });


  it("cebar 3 mates disminuye en 90 ml el aguaDelTermo", () => {
    aguaDelTermo = 1000;
    cebarMate();
    cebarMate();
    cebarMate();
    assert.equals(aguaDelTermo, 910);    
  });
})