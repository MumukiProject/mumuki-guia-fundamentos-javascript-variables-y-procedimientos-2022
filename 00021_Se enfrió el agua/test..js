describe("cambiar el agua", function() {
  it("vaciarTermo deja en 0 el aguaDelTermo", () => {    
    aguaDelTermo = 1000;
    vaciarTermo();
    assert.equal(aguaDelTermo, 0);
  });

  it("llenarTermo deja en 1000 el aguaDelTermo", () => {
    aguaDelTermo = 80;
    llenarTermo();
    assert.equal(aguaDelTermo, 1000);
  });
})