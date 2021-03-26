/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Sales Number", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Sales Number", () => {
        loginSalesNumber("MNY-ADMIN-1", "MNYadmin1")
        SalesNumber()

    })
})

const loginSalesNumber = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// ขั้นตอนเข้าหน้าเลขที่ใบรายการขาย
const SalesNumber = () => {
    cy.get('[href="/supplier/sale-order/all-orders"] > .el-menu-item')
        .click({ force: true })
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "รายการขาย")
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get(':nth-child(2) > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(2) > :nth-child(3) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-lg-12 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(3) > :nth-child(1) > .btn').click()
    cy.get('tbody > :nth-child(1) > :nth-child(5)').should("contain.text","นาย MNY-ADMIN-1")
    cy.get(':nth-child(1) > :nth-child(6) > .status-border').should("contain.text","กำลังดำเนินการ")
}
