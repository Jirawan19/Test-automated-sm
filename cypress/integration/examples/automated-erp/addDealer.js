/// <reference types="cypress" />
context("add-dealer", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("dealer1", () => {

        cy.get('#input_username').type("retail-CRR")
        cy.get('#input_password').type("password")
        cy.get('.btn').click()
        cy.get(':nth-child(5) > .col-12').click()
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn').click()
        cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 2")
        cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon54 168/106")
        cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
        cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select("CASH")
        cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam2")
        cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type("0955915150")
        cy.get(':nth-child(2) > .btn').click()
        cy.get('.swal2-confirm').click()
    })
})