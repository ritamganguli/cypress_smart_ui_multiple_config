describe("Cypress test with Visual Regression", () => {
    it("Example test", () => {
        cy.visit("https://www.lambdatest.com/automation-demos");
        cy.screenshot("smartUI Cypress doc"); //Add desired Cypress screenshot name / Viewport screenshot
        cy.get('#header').screenshot("Header"); //take screenshot of div with id "header" / DOM based
    });
});