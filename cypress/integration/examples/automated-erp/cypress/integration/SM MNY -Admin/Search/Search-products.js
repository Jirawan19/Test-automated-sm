/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Search Products", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Search Products", () => {
        SearchProducts("MNY-ADMIN-test", "MNYadmin1")
        SearchProducts1()
    })
})
const SearchProducts = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เข้าหน้าค้นหาสินค้า
const SearchProducts1 = () => {
    cy.get('.nuxt-link-exact-active > .el-menu-item').click()
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "E-Catalog")
    cy.get('h4').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').click().type("ยางเบรค")
    cy.get('.row.mb-2 > :nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")
    cy.get('.pr-lg-0 > .btn').click()
    cy.get('tbody > #inventorys-0 > :nth-child(1) > :nth-child(1)')
        .should("contain.text", "ยางเบรค")

}
