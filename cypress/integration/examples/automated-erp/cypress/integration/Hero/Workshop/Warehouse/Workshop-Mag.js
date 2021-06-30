/// <reference types="cypress" />


context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Mag", () => {
        loginWorkshop("empGrip01", "password")
        Mag()
        Mag1()
        Mag2()
        confimeMag()

    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Mag = () => {
    cy.get('#nav-item-6')
        .click()
    cy.get('#tab-inventory')
        .click()
    cy.get('#pane-inventory > .mb-2 > .col-xl-2 > a > .btn')
        .click()
    cy.get('#tab-MAG')
        .click()

}

// กรอกรายละเอียดสินค้า
const Mag1 = () => {
    // cy.get('.row.mt-3 > .text-xl-right > .btn-confirm').click()
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("เพิ่มแม็ก 19")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(3)')
        .type("เพิ่มแม็ก 19")
    cy.get('.col-md-10 > .mt-2 > .el-input__inner')
        .type("19")
    cy.get(':nth-child(4) > :nth-child(1) > .mt-2').type("5")
    cy.get(':nth-child(4) > .col-md-6 > .mt-2').type("5")
    cy.get('.w-auto').type("5")
    cy.get(':nth-child(5) > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("500")
    cy.get(':nth-child(5) > :nth-child(3) > .mt-2 > .el-input__inner')
        .type("whit")
    cy.get(':nth-child(5) > :nth-child(2) > .mt-2 > .el-input__inner')
        .type("5")
    cy.get(':nth-child(4) > .mt-2 > .el-input__inner').type("25")
    cy.get('.pr-5 > .calculator-form > ')
        .click().type("40")
    cy.get('.pr-0 > .calculator-form > .el-input__inner')
        .click().type("17")

    cy.get('#pane-MAG > .col-xl-12 > .col-md-12 > .col-sm-12 > .btn-search')
        .click()
}

// รายละเอียดราคา
// เพิ่มสินค้าตัวเดิมยิดในคลังจะต้องเพิ่ม
const Mag2 = () => {
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("5")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("30")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(4) > .mt-2 > .el-input__inner')
        .clear().type("20")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const confimeMag = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-MAG').click()
}

