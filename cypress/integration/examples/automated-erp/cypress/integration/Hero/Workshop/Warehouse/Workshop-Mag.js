/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "คลังสินค้า")
    cy.get('#tab-MAG').should("contain.text", "ล้อแม็ก")
    cy.get('#tab-MAG').click()
}

// กรอกรายละเอียดสินค้า
const Mag1 = () => {
    cy.get('.row.mt-3 > .text-xl-right > a > .btn-confirm').click()
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .el-steps > [style="flex-basis: 50%; margin-right: 0px;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .row > .col-sm-6 > h5')
        .should("contain.text", "รายละเอียดสินค้า")
    taxMag(getRandomNumberMag(1, 5))
    cy.get(':nth-child(3) > .inline-input > .el-input__inner').type("test")
    cy.get('.col-md-3 > .mt-2 > .el-input__inner').clear().type("10")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > .pl-xl-5 > .mt-2')
        .clear().type("10")
    cy.get('.pr-xl-5 > .mt-2 > .el-input__inner').clear().type("10")
    cy.get(':nth-child(4) > :nth-child(3) > .mt-2 > .el-input__inner').clear().type("10")
    cy.get(':nth-child(5) > .el-textarea > .el-textarea__inner').type("test")
    cy.get('.pr-5 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(6) > .pr-0 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search').click()
}

const getRandomNumberMag = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}

const taxMag = (textNo) => {
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test Mag").type(textNo)
}
// รายละเอียดราคา
// เพิ่มสินค้าตัวเดิมยิดในคลังจะต้องเพิ่ม
const Mag2 = () => {
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .el-steps > [style="flex-basis: 50%; max-width: 50%;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดราคา")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .row > .col-sm-6 > h5')
        .should("contain.text", "รายละเอียดราคา")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("50")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("20")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(4) > .mt-2 > .el-input__inner')
        .clear().type("15")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const confimeMag = () => {
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มสินค้าเข้าคลังเสร็จสิ้น")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
    cy.get('#tab-MAG').click()
}