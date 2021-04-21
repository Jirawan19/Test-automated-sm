/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Seller-Setting", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Seller-Setting", () => {
        SellerSetting("Test-Seller 00", "test-seller 00")

        // ขั้นตอนเข้าตั้งค่าและเปลี่ยนข้อมูลธุรกิจ
        SellerSetting1()
    })
})

const SellerSetting = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// ขั้นตอนเข้าตั้งค่าและเปลี่ยนข้อมูลธุรกิจ
const SellerSetting1 = () => {
    cy.get('[href="/supplier/setting"] > .el-menu-item > .menu-text').click()
    cy.get('.text-left').should("contain.text", "ข้อมูลธุรกิจ")
    cy.get('.col-lg-auto > .btn').click()
    cy.get('.mb-3 > :nth-child(1) > .form-control').clear().type("ดาวอังคาร")
    cy.get('.col-lg-auto > .btn').click()
    cy.get('#swal2-title').should("contain.text","แก้ไขข้อมูลเรียบร้อย")
    cy.get('.swal2-confirm').click()
    cy.get('.text-left').should("contain.text", "ข้อมูลธุรกิจ")
}