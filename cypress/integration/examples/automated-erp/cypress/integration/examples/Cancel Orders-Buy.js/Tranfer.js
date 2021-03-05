/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Cancel Order-Buy/Tranfer", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // ยกเลิกออเดอร์แบบราคารวมภาษี
    it("Cancel Order-Buy/Tranfer", () => {
        LoginCancelOrderBuyTranfer("retail-CRR", "password")
        CancelOrderBuyTranfer1()
    })

})

const LoginCancelOrderBuyTranfer = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เปิด New Order
const CancelOrderBuyTranfer1 = () => {
    cy.get(':nth-child(2) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
}