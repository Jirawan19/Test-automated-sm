/// <reference types="cypress" />
// const viewPorts = ["macbook-16"]
// viewPorts.map(viewPort => {
context("add-customer-tax", () => {
    beforeEach(() => {
        // cy.viewport(viewPort)
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("customer-Tax", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(5) > .col-12').click({ force: true })
        // cy.get('.btn').click({ force: true })
        const paymentTypes = ["เงินสด", "โอน", "เช็ค"]
        paymentTypes.map(paymentType => {
            clickAddCustomer()
            cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 1")
            cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon 54 168/106")
            tax22(getRandomNumber22(1, 10))
            tax11(getRandomNumber11(1, 100000))
            cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
            cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 1")
            cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select(paymentType)
            cy.get(':nth-child(2) > .btn').click({ force: true })
            cy.get('.swal2-confirm').click({ force: true })
        })
    })
    it("เครดิตเทอม", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(5) > .col-12').click({ force: true })
        clickAddCustomer()
        cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 1")
        cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon 54 168/106")
        tax22(getRandomNumber22(1, 10))
        tax11(getRandomNumber11(1, 100000))
        cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type("0123456789012")
        cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 1")
        cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select("เครดิตเทอม")
        cy.get('.col-md-8 > .form-control').type("15")
        cy.get(':nth-child(2) > .btn').click({ force: true })
        cy.get('.swal2-confirm').click({ force: true })

    })
})
// })

const login = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password + "{enter}")
}

const clickAddCustomer = () => {
    cy.get('#customerdesk > .d-flex > .col-lg-12 > a > .btn', { timeout: 900000 }).click({ force: true })
    // cy.get(':nth-child(5) > .col-12 > .mt-4', { timeout: 900000 }).click({ force: true })
    // cy.get('#customerdesk > .d-xl-flex > .text-right > a > .btn', { timeout: 900000 }).click({ force: true })
}

const tax11 = (textNo) => {
    cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type(textNo)
}


const tax22 = (textNo) => {
    cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type(textNo)
}


const getRandomNumber11 = (min, max) => {
    1, 100000
    return Math.random() * (max - min) + min;
}

const getRandomNumber22 = (min, max) => {
    1, 10
    return Math.random() * (max - min) + min;
}

