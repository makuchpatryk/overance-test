describe("checking if page and components is open spec", () => {
  beforeEach(() => {
    cy.visit("https://makuchpatryk.github.io/overance-test/");
  });

  it("check element render", () => {
    cy.get("[data-cy=add-button]").should("exist");
    cy.get("[data-cy=search-input]").should("exist");
    cy.get("[data-cy=badge]").should("exist").should("have.length", 3);
    cy.get("[data-cy=item]").should("exist").should("have.length", 3);
    cy.get("[data-cy=remove-button]").should("exist").should("have.length", 3);
  });

  it("check input value", () => {
    cy.get("[data-cy=item]").eq(0).should("have.value", "test 1");
    cy.get("[data-cy=item]").eq(1).should("have.value", "test 2");
    cy.get("[data-cy=item]").eq(2).should("have.value", "test 3");
  });

  it("check badge init number", () => {
    cy.get("[data-cy=badge]").eq(0).contains("1");
    cy.get("[data-cy=badge]").eq(1).contains("1");
    cy.get("[data-cy=badge]").eq(2).contains("1");
  });
});
