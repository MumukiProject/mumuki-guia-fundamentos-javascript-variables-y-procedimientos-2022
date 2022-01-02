describe("Group description", function() {
  it("saludar a gus a las 11 le dice buenos dias", () => {
    assert.equals(saludarA("Gus", 11), "¡Buenos días Gus!");
  });
    
  it("saludar a may a las 12 le dice buenas tardes", () => {
    assert.equals(saludarA("May", 12), "¡Buenas tardes May!");
  });
    
  it("saludar a lu a las 18 le dice buenas tardes", () => {
    assert.equals(saludarA("Lu", 18), "¡Buenas tardes Lu!");
  });
    
  it("saludar a guille a las 19 le dice buenas noches", () => {
    assert.equals(saludarA("Guille", 19), "¡Buenas noches Guille!");
  });
  
  it("saludar a jor a las 20 le dice buenas noches", () => {
    assert.equals(saludarA("Jor", 20), "¡Buenas noches Jor!");
  });
})