/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 100000)
context("add-dealer-Tax", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
// for (let index = 0; index < 10; index++) {
    it("dealer-Notax", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(5) > .col-12 > .mt-4').click({ force: true })
        const paymentType = ["เงินสด", "โอน", "เช็ค"]
        paymentType.map(paymentType => {
            clickAddDealer()
            cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn').click({ force: true })
            cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn').click({ force: true })
            cy.wait(500)
            cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 2.1")
            cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon54 168/106")
            cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
            cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 2.1")
            cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type("0955915150")
            cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').select("ไม่ออกใบกำกับภาษี")
            cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select(paymentType)
            cy.get(':nth-child(2) > .btn').click({ force: true })
            cy.get('.swal2-confirm').click({ force: true })
    
        })
    
    })

    
// }
        it("Dealer-tax-เครดิตเทอม", () => {
            login("retail-CRR", "password")
            cy.get(':nth-child(5) > .col-12 > .mt-4', {timeout: 900000}).click({force: true})
            clickAddCustomer()
            cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control', {timeout: 900000}).type("jirawan 2.1")
            cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon54 168/106")
            cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
            cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 2.1")
            cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type("0955915150")
            cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').select("ไม่ออกใบกำกับภาษี")
            cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select("เครดิตเทอม")
            cy.get('.col-md-8 > .form-control').type("15")
            cy.get(':nth-child(2) > .btn').click({force: true})
            cy.get('.swal2-confirm').click({force: true})

        })
})

const login = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password + "{enter}")
}

const clickAddDealer = () => {
    cy.get(':nth-child(2) > .nav-link')
        .invoke('attr', 'style', 'display: ')
        .should('have.attr', 'style', 'display: ')
    cy.get(':nth-child(2) > .nav-link').click({force: true})
}

const clickAddCustomer = () => {
    // cy.get('#customerdesk > .d-xl-flex > .text-right > a > .btn')
    //     .invoke('attr', 'style', 'display: ')
    //     .should('have.attr', 'style', 'display: ')
    cy.get('#customerdesk > .d-xl-flex > .text-right > a > .btn', {timeout: 900000}).click({force: true})
}

