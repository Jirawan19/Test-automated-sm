// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://herodemo.autopair.co/");
  // cy.get(".my-4 > .text-left > span").should("contain.text", "ชื่อผู้ใช้งาน");
  cy.get("#username").type(username);
  // cy.get(".mb-3 > .text-left > span").should("contain.text", "รหัสผ่าน");
  cy.get("#password").type(password);
  cy.get(".btn-global").click();
});

Cypress.Commands.add("fixCanNotClickLink", (elementLinkA) => {
  console.log("A" + elementLinkA);
  elementLinkA.then((rs) => {
    cy.visit(Cypress.config().baseUrl + rs[0].getAttribute("href"));
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
