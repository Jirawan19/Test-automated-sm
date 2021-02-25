/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 100000)
context("add-buy-Tax", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("Add-Buy-Tax", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get(':nth-child(2) > a > .btn').click()
        cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
        cy.get('#atp > .form-group > .form-control').type("ล้อ")
        cy.get(':nth-child(1) > td > .btn').click()
        cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()

    })
})

const login = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password + "{enter}")
}