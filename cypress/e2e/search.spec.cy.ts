describe("checking searching elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/overance-test/");
  });

  it("checking if all elements match to search value", () => {
    cy.get("[data-cy=search-input]").type("test");

    cy.get("[data-cy=item]")
      .eq(0)
      .should("have.css", "background-color")
      .and("eq", "rgba(27, 190, 10, 0.2)");
    cy.get("[data-cy=item]")
      .eq(1)
      .should("have.css", "background-color")
      .and("eq", "rgba(27, 190, 10, 0.2)");
    cy.get("[data-cy=item]")
      .eq(2)
      .should("have.css", "background-color")
      .and("eq", "rgba(27, 190, 10, 0.2)");
  });

  it("checking if one highlight and after clear will dispear", () => {
    cy.get("[data-cy=search-input]").type("test 1");

    cy.get("[data-cy=item]")
      .eq(0)
      .should("have.css", "background-color")
      .and("eq", "rgba(27, 190, 10, 0.2)");
    cy.get("[data-cy=item]")
      .eq(1)
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
    cy.get("[data-cy=item]")
      .eq(2)
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");

    cy.get("[data-cy=search-input]").clear();
    cy.get("[data-cy=item]")
      .eq(0)
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
  });
});
