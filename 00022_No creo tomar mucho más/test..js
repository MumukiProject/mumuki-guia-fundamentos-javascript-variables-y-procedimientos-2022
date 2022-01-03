describe("", function() {
  it("cargarTermo con 200 como argumento aumenta en 200 el aguaDelTermo", () => {
    aguaDelTermo = 600;
    cargarTermo(200);
    assert.equal(aguaDelTermo, 800);    
  });


  it("cargarTermo con 500 como argumento aumenta en 500 el aguaDelTermo", () => {
    aguaDelTermo = 200;
    cargarTermo(500);
    assert.equal(aguaDelTermo, 700);
  });
})