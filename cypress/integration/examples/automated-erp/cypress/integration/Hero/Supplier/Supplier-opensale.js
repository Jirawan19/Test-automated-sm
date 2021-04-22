/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Open-Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    //เปิดรายการขาย
    it("Open-Sale", () => {
        loginsupplier("grip-member1", "password")
        Opensale()
    })
})

const loginsupplier = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Opensale = () => {
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get('a > .el-button > span').should("contain.text", "เพิ่มรายการขาย")
    cy.get('a > .el-button > span').click()
    cy.get('.primary-blue').should("contain.text","ลูกค้า")
    cy.get('.col-md-4 > .el-select > .el-input > .el-input__inner')
        .click().type("empGrip01").type("{downarrow}{enter}")
    cy.get('.col-6 > .btn').click()

}