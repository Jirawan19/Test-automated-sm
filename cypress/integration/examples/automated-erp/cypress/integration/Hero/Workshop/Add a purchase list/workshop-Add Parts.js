/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add order to Supplier", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add order-parts", () => {
        loginWorkshop("empGrip01", "password")
        Addorderworkshop()
        // Addorderworkshop1()
        // checkAddopenorder()
        // logout()
    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

// เข้าหน้าเพิ่มรายการซื้อ
const Addorderworkshop = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
}