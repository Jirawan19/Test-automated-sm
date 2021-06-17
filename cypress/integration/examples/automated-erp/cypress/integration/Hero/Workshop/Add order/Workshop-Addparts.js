/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Parts", () => {
        loginWorkshop("empGrip01", "password")

        addParts()
        addParts1()
        addconfimeParts()
        checkconfimeCarparts()

        Addorderparts()
        checkorderparts()
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
const addParts = () => {
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('#tab-PART').click()
    cy.get('.col-xl-auto > .btn-confirm')
        .click()
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
const addParts1 = () => {
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
const addconfimeParts = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-PART').click()
}
const checkconfimeCarparts = () => {
    cy.get('#inventorys-0 > :nth-child(7) > .btn-details').click()

    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-footer > .btn').click()

}

// เพิ่มรายการซื้อ
const Addorderparts = () => {
    
    // เพิ่มผู้จำหน่าย
    // cy.get(':nth-child(4) > .nav-link > .row > h6')
    //     .click()
    // cy.get('.col-xl-auto > a > .btn-confirm').click()
    // cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{enter}")

    // cy.get('#state-name').type("test01")
    // cy.get('#state-address').type("sky")
    // cy.get('#state-mobileNo').type("0955915150")
    // cy.get('#state-taxCustomerNumber').type("1100201520688")
    // cy.get('[success=""]').click()

    // cy.get('.swal2-confirm').click()


    // แท็บรายการซื้อ
    cy.get('#nav-item-3 > .nav-link > .row')
        .click()

    // เลือกผู้จำหน่าย
    cy.get('.col-xl-auto > a > .btn-confirm').click()

    cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("test").wait(500).type("{downarrow}{enter}", { force: true })
    cy.get('.d-xl-flex > .col-xl-6 > .btn').click()

    // รายละเอียดสินค้า
    cy.get('#tab-PART').click()
    cy.get('#txtinventorySeach').click().type("test")
    cy.get('#btnSearchPart').click()


    // เลือกสินค้า
    cy.get('#pane-PART > .d-xl-block > .table > tbody > tr > :nth-child(1)')
        .contains("test")

    cy.get('#pane-PART > .d-xl-block > .table > tbody > :nth-child(1) > :nth-child(6) > .btn-details')
        .click()


    cy.get('.close').click()


    // เช็คสินค้าที่เลือก
    // สินค้าชิ้นที่ 1
    cy.get(':nth-child(1) > :nth-child(4) > .row > .quantity > input')
        .clear().type("3")
    // // ราคาต่อหน่วย
    cy.get('.col-12.d-none > .table > tbody > tr > td.align-middle > .row > .mt-3 > .form-control')
        .clear().type("30")

    // ราคารวม
    cy.get('.col-12.d-none > .table > tbody > tr > :nth-child(6)')
        .should("contain.text", "90.00")

    cy.get('.row.text-right > :nth-child(2) > .btn')
        .click()

    cy.get('.swal2-confirm').click()
// **
}
const checkorderparts = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "90.00")


    cy.get('.ml-auto > .nuxt-link-active > .btn').click()

}
