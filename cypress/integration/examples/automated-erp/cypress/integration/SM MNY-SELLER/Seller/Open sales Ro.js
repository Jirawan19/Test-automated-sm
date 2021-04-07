// Seller เปิดรายการขาย ต้องเพิ่มพนักงานจาก แอดมิน 
// และทำการเพิ่มร้านค้าให้พนักงาน และถึงจะลงชื่อเข้าใช้ ของพนักงานเพื่อเปิดรายการขาย


/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 100000)

context("Seller-Open sales Ro", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Seller-Open sales Ro", () => {
        SellerOpensales("Test-Seller 00", "test-seller 00")


    })
})

const SellerOpensales = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}