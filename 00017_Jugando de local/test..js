describe("", function() {
  it("saludar a gus a las 11 le dice buenos dias", () => {
    assert.equal(saludarA("Gus", 11), "¡Buenos días Gus!");
  });
    
  it("saludar a may a las 12 le dice buenas tardes", () => {
    assert.equal(saludarA("May", 12), "¡Buenas tardes May!");
  });
    
  it("saludar a lu a las 18 le dice buenas tardes", () => {
    assert.equal(saludarA("Lu", 18), "¡Buenas tardes Lu!");
  });
    
  it("saludar a guille a las 19 le dice buenas noches", () => {
    assert.equal(saludarA("Guille", 19), "¡Buenas noches Guille!");
  });
  
  it("saludar a jor a las 20 le dice buenas noches", () => {
    assert.equal(saludarA("Jor", 20), "¡Buenas noches Jor!");
  });
})