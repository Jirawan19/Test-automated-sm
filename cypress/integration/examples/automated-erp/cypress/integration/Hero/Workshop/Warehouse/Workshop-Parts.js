/// <reference types="cypress" />


context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Parts", () => {
        loginWorkshop("empGrip01", "password")
        Parts()
        Parts1()
        confimeParts()
    })
})
const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}
// กรอกรายละเอียดสินค้า
const Parts = () => {
    cy.get('#nav-item-4 >').click()
    cy.get('#tab-PART').click()
    
    cy.get('.col-xl-auto > .btn-confirm > .el-icon-circle-plus-outline').click()
    taxParts(getRandomNumberParts(1, 10))
    cy.get('.col-md-2 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")
    taxParts1(getRandomNumberParts(1, 10))
    taxParts2(getRandomNumberParts(1, 10))
    taxParts3(getRandomNumberParts(1, 10))
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > .form-group.mt-2 > .el-textarea > .el-textarea__inner')
        .type("test")
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search').click()
}

const getRandomNumberParts = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}

const taxParts = (textNo) => {
    cy.get('.col-md-4 > .el-autocomplete > .el-input > .el-input__inner')
        .type("test Parts").type(textNo)

}

const taxParts1 = (textNo) => {
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > .form-row.mt-3 > .col-md-6 > .el-autocomplete > .el-input > .el-input__inner')
        .type("test Parts").type(textNo)
}
const taxParts2 = (textNo) => {
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > .form-row.mt-2 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test Parts").type(textNo)
}
const taxParts3 = (textNo) => {
    cy.get('.pl-xl-5 > .mt-2 > .el-input__inner')
        .type("test Parts").type(textNo)
}
// รายละเอียดราคา
const Parts1 = () => {
    cy.get(':nth-child(1) > .mt-2 > .el-input__inner').type("10")
    cy.get('.pl-xl-5 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("200")
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(4) > .mt-2 > .el-input__inner')
        .clear().type("150")
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const confimeParts = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-PART').click()
}
