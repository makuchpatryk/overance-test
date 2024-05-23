describe("checking if remove button is working", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/overance-test/");
  });

  it("checking removing input", () => {
    cy.get("[data-cy=remove-button]").eq(0).click();

    cy.get("[data-cy=badge]").should("exist").should("have.length", 2);
    cy.get("[data-cy=item]").should("exist").should("have.length", 2);
    cy.get("[data-cy=remove-button]").should("exist").should("have.length", 2);
  });

  it("checking adding element and removing", () => {
    for (let n = 0; n < 2; n++) {
      cy.get("[data-cy=add-button]").click({ force: true });
    }

    cy.get("[data-cy=remove-button]").eq(0).click();
    cy.get("[data-cy=badge]").should("exist").should("have.length", 4);
    cy.get("[data-cy=item]").should("exist").should("have.length", 4);
    cy.get("[data-cy=remove-button]").should("exist").should("have.length", 4);
  });
});
