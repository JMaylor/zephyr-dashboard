// https://docs.cypress.io/api/introduction/api.html

describe("Landing Page", () => {
  it("Shows image", () => {
    cy.visit("/");
    cy.get("svg").should("be.visible");
  });
  it("Shows correct text", () => {
    cy.visit("/");
    cy.contains("a", "Go To Dashboard");
  });
  it("Navigates to dashboard", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/dashboard"));
  });
});

describe("Dashboard Home", () => {
  it("Has Header", () => {
    cy.visit("/dashboard");
    cy.get("header").should("be.visible");
  });
  describe("Header", () => {
    it("Has Dark Mode Toggle", () => {
      cy.visit("/dashboard");
      cy.get("[data-cy=dark-mode-toggle]").should("be.visible");
    });
    it("Dark Mode Toggle Works", () => {
      cy.visit("/dashboard");
      cy.get("html").should("have.class", "dark");

      cy.get("[data-cy=dark-mode-toggle]").click();
      cy.get("html").should("not.have.class", "dark");

      cy.get("[data-cy=dark-mode-toggle]").click();
      cy.get("html").should("have.class", "dark");
    });
  });
});
