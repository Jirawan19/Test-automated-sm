/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Admin Manage-Employee", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Admin Manage-Employee", () => {
        ManageEmployee("MNY-ADMIN-1", "MNYadmin1")
    })
})
const ManageEmployee = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}