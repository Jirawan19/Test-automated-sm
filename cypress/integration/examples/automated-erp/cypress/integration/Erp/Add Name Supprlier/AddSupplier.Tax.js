/// <reference types="cypress" />
context("add-dealer-Tax", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("dealer-Tax", () => {
        login("retail-CRR", "password")
        cy.get('.btn').click({ force: true })
        cy.get(':nth-child(5) > .col-12').click({ force: true })
        const paymentType = ["เงินสด", "โอน", "เช็ค"]
        paymentType.map(paymentType => {
            cy.get(':nth-child(2) > .nav-link')
                .invoke('attr', 'style', 'display: ')
                .should('have.attr', 'style', 'display: ')
            cy.get(':nth-child(2) > .nav-link').click({ force: true })
            cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn').click({ force: true })
            cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn').click({ force: true })
            cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control').type("jirawan 2")
            cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon54 168/106")
            tax1(getRandomNumber4(1, 100000))
            cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 2")
            tax1(getRandomNumber3(1, 100000))

            cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select(paymentType)
            cy.get(':nth-child(2) > .btn').click({ force: true })
            cy.get('.swal2-confirm').click({ force: true })
        })
    })
    it("Dealer-tax-เครดิตเทอม", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(5) > .col-12 > .mt-4', { timeout: 900000 }).click({ force: true })
        clickAddDealer()
        cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control', { timeout: 900000 }).type("jirawan 2")
        cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control').type("phahon54 168/106")
        tax1(getRandomArbitrary4(1, 100000))
        cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control').type("nam 2")
        tax1(getRandomArbitrary3(1, 100000))
        cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control').select("ไม่ออกใบกำกับภาษี")
        cy.get(':nth-child(5) > .row > :nth-child(1) > .form-control').select("เครดิตเทอม")
        cy.get('.col-md-8 > .form-control').type("15")
        cy.get(':nth-child(2) > .btn').click({ force: true })
        cy.get('.swal2-confirm').click({ force: true })

    })
})

const login = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password + "{enter}")
}

const clickAddDealer = () => {
    cy.get(':nth-child(2) > .nav-link', { timeout: 900000 }).click({ force: true })
    cy.get('#distributordesk > .d-flex > .col-lg-12 > a > .btn', { timeout: 900000 }).click({ force: true })
}

const tax4 = (textNo) => {
    cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control').type(textNo)

}
const tax3 = (textNo) => {
    cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control').type(textNo)

}

const getRandomNumber4 = (min, max) => {
    1, 100000
    return Math.random() * (max - min) + min;
}

const getRandomNumber3 = (min, max) => {
    1, 10
    return Math.random() * (max - min) + min;
}