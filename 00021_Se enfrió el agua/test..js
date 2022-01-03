describe("cambiar el agua", function() {
  it("vaciarTermo deja en 0 el aguaDelTermo", () => {    
    aguaDelTermo = 1000;
    vaciarTermo();
    assert.equals(aguaDelTermo, 0);
  });

  it("llenarTermo deja en 1000 el aguaDelTermo", () => {
    aguaDelTermo = 80;
    llenarTermo();
    assert.equals(aguaDelTermo, 1000);
  });
})