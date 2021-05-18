/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "คลังสินค้า")
    cy.get('#tab-PART').should("contain.text", "อะไหล่")
    cy.get('#tab-PART').click()
    
    // cy.get('.form-label').should("contain.text", "ค้นหาสินค้า")
    cy.get('.col-xl-auto > a > .btn-confirm').click()
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .el-steps > [style="flex-basis: 50%; margin-right: 0px;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .fromitem > .row > :nth-child(1) > h5')
        .should("contain.text", "รายละเอียดสินค้า รหัสสินค้า ")
    taxParts(getRandomNumberParts(1, 10))
    cy.get('.form-row.mt-3 > .col-md-2 > .primary-blue').should("contain.text", "ตำแหน่ง")
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
    cy.get('#pane-PART > .col-xl-12 > .col-12 > .el-steps > [style="flex-basis: 50%; max-width: 50%;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดราคา")
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
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มสินค้าเข้าคลังเสร็จสิ้น")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
    cy.get('#tab-PART').click()
}
