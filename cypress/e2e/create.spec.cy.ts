describe("checking if add new input works well", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checking adding one input", () => {
    cy.get("[data-cy=add-button]").click();
    cy.get("[data-cy=badge]").should("have.length", 4);
    cy.get("[data-cy=item]").should("have.length", 4);
    cy.get("[data-cy=remove-button]").should("have.length", 4);
  });

  it("checking adding more that 10 inputs", () => {
    for (let n = 0; n < 10; n++) {
      cy.get("[data-cy=add-button]").click({ force: true });
    }
    cy.get("[data-cy=badge]").should("have.length", 10);
    cy.get("[data-cy=item]").should("have.length", 10);
    cy.get("[data-cy=remove-button]").should("have.length", 10);

    cy.get("[data-cy=add-button]").should("be.disabled");
    cy.get("[data-cy=error-message]").should("exist");
    cy.get("[data-cy=toast]").should("exist");
  });

  it("checking typing in input", () => {
    cy.get("[data-cy=item]")
      .eq(0)
      .clear()
      .type("typing")
      .should("have.value", "typing");
  });

  it("checking typing in input #2", () => {
    cy.get("[data-cy=add-button]").click();

    cy.get("[data-cy=item]")
      .eq(3)
      .type("iiiiiiswds")
      .should("have.value", "iiiiiiswds");

    cy.get("[data-cy=badge]").eq(3).contains("6");
    cy.get("[data-cy=item]").eq(3).clear();
    cy.get("[data-cy=badge]").eq(3).contains("0");
  });
});
