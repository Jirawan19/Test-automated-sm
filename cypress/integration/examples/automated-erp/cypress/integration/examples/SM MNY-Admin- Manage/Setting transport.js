/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 100000)

context("Setting Transport", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("SettingTransport", () => {
        SettingTransport("MNY-ADMIN-test", "MNYadmin1")
        SettingTransport1()
    })
})

const SettingTransport = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

const SettingTransport1 = () => {
    cy.get('[href="/supplier/setting"] > .el-menu-item').click()
    cy.get('.p-content > :nth-child(1) > .text-left').should("contain.text", "ข้อมูลธุรกิจ")
    cy.get('.row > :nth-child(1) > .text-left').should("contain.text", "การขนส่ง")
    cy.get(':nth-child(10) > .row > .pr-0 > .btn').click()
    cy.get('#addShippingLabel').should("contain.text", "เพิ่มระบบการขนส่ง")
    cy.get('.modal-body > .form-group > .primary-blue > h5')
        .should("contain.text", "ชื่อระบบการขนส่ง")
    taxAddPSettingTransport1(getRandomNumberSettingTransport(0, 10))
    cy.get('#addShipping > .modal-dialog > .modal-content > .modal-footer > .btn-confirm')
        .should("contain.text", "บันทึก")
    cy.get('#addShipping > .modal-dialog > .modal-content > .modal-footer > .btn-confirm')
        .click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มข้อมูลการขนส่งเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}
const getRandomNumberSettingTransport = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddPSettingTransport1 = (textNo) => {
    cy.get('#addShipping > .modal-dialog > .modal-content > .modal-body > .form-group > .form-control')
        .type(textNo).type("Test")
}