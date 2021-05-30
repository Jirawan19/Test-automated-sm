/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Service", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("host"))
    })
    it("Add Appointment", () => {
        loginWorkshop("empGrip01", "password")
        AddAppointment()

    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}
const AddAppointment = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "สมุดรายชื่อ")
    cy.get(':nth-child(2) > .nav-link > .row > h6').click()

    cy.get('h3').should("contain.text", "ตารางนัดหมายลูกค้า")
    cy.get('.col-6 > .el-button').should("contain.text", "เพิ่มนัดหมาย")
    cy.get('.col-6 > .el-button').click()

    cy.get('h3').should("contain.text", "เพิ่มนัดหมายลูกค้า")
    cy.get('.el-select > .el-input > .el-input__inner')
        .click().type("9กณ-").type("{downarrow}{downarrow}{enter}")
    cy.get('.mr-5 > .form-group > .el-date-editor > .el-input__inner')
        .click().click()
    cy.get('.el-icon-arrow-right')
        .click()
    cy.get(':nth-child(6) > :nth-child(7) > div')
        .click()
    cy.get('.ml-5 > .form-group > .el-date-editor > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(6) > .mr-5 > .form-group > .el-input > .el-input__inner')
        .type("test")
    cy.get('.el-textarea__inner').type("test")

    cy.get('.btn-confirm').should("contain.text", "บันทึก")
    cy.get('.btn-confirm').click()

    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "สร้างรายการนัดหมายเสร็จสิ้น")
    cy.get('.swal2-confirm').click()

    cy.get('#calendar_tb_btn').click()


}