/// <reference types="cypress" />

const viewPorts = ["macbook-16"]
viewPorts.map(viewPort => {
    context("add-customer-tax", () => {
        beforeEach(() => {
            cy.viewport(viewPort)
            cy.visit("https://smdevdemo.autocareth.com/retailer/home")
        })
        it("customer-Tax" + viewPort, () => {
            cy.get('#input_username').type("retail-CRR")
            cy.get('#input_password').type("password")
            cy.get('.btn').click({force: true})
            cy.get(':nth-child(5) > .col-12').click({force: true})
            const paymentTypes = ["เงินสด","เครดิตเทอม","โอน","เช็ค"]
            paymentTypes.map(paymentType => {   
                cy.get('#customerdesk > .d-xl-flex > .text-right > a > .btn')
                .invoke('attr', 'style', 'display: ')
                .should('have.attr', 'style', 'display: ')
                cy.get('#customerdesk > .d-xl-flex > .text-right > a > .btn').click()
                cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 1")
                cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon 54 168/106")
                cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type("0888888888")
                cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
                cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 1")
                cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select(paymentType)
                cy.get(':nth-child(2) > .btn').click({force: true})
                cy.get('.swal2-confirm').click({force: true})
            })
        })
    })  
})