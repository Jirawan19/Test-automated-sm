/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Warehouse", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("host"))
    })
    it("Mag", () => {
        loginWorkshop("empGrip01", "password")
        AddMag()
        AddMag1()
        AddMag2()
        AddconfimeMag()

        Addordermag()
        checkordermag()

    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const AddMag = () => {
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('#tab-MAG').click()
}

// กรอกรายละเอียดสินค้า
const AddMag1 = () => {
    cy.get('.row.mt-3 > .text-xl-right > a > .btn-confirm').click()
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("19")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(3)')
        .type("19")
    cy.get('.col-md-10 > .mt-2 > .el-input__inner')
        .type("19")
    cy.get(':nth-child(4) > :nth-child(1) > .mt-2').type("5")
    cy.get('.col-md-3 > .mt-2').type("5")
    cy.get(':nth-child(5) > .form-control').type("5")
    cy.get('.pr-xl-5 > .mt-2 > .el-input__inner').type("500")
    cy.get(':nth-child(5) > :nth-child(2) > .mt-2 > .el-input__inner')
        .type("whit")
    cy.get(':nth-child(5) > :nth-child(3) > .mt-2 > .el-input__inner')
        .type("5")
    cy.get('.pr-5 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(7) > .pr-0 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")

    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search').click()
}

// รายละเอียดราคา
// เพิ่มสินค้าตัวเดิมยิดในคลังจะต้องเพิ่ม
const AddMag2 = () => {
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("5")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("30")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(4) > .mt-2 > .el-input__inner')
        .clear().type("20")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const AddconfimeMag = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-MAG').click()
}

// เพิ่มรายการซื้อ
const Addordermag = () => {
    cy.get(':nth-child(4) > .nav-link > .row > h6')
        .click()
    cy.get('.col-xl-auto > a > .btn-confirm').click()

    // เพิ่มผู้จำหน่าย
    cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")

    cy.get('.bv-no-focus-ring > #name').type("test01")
    cy.get('.bv-no-focus-ring > #address').type("sky")
    cy.get('.bv-no-focus-ring > #mobileNo').type("0955915150")
    cy.get('.bv-no-focus-ring > #taxCustomerNumber').type("1100201520688")
    cy.get('.btn-confirm').click()

    cy.get('.swal2-confirm').click()



    // เลือกผู้จำหน่าย
    cy.get('.col-xl-auto > a > .btn-confirm')
        .click()
    cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("test").type("{downarrow}{enter}", { force: true })
    cy.get('.d-xl-flex > .col-xl-6 > .btn').click()

    // // รายละเอียดสินค้า
    cy.get('#tab-MAG').click()
    cy.get(':nth-child(5) > .bv-no-focus-ring > .el-input > .el-input__inner')
        .click().type("19")
    cy.get('#pane-MAG > :nth-child(2) > :nth-child(1) > .btn-search')
        .click()


    // เช็คและเลือกสินค้า

    // สินค้าชิ้นที่ 1
    cy.get('#pane-MAG > .d-xl-block > .table > tbody > tr > .text-left > :nth-child(3)')
        .should("contain.text", "ยี่ห้อ:19 ")

    cy.get('#pane-MAG > .d-xl-block > .table > tbody > tr > :nth-child(6) > .btn-details')
        .click()
    cy.get('.close').click()

    // // จำนวน/ราคาต่อหน่วย
    cy.get('.quantity > input').clear().type("5")
    cy.get(':nth-child(5) > .form-check > .form-control')
        .clear().type("30")


    // ราคารวม
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "150.00")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
        .should("contain.text", "160.50 บาท")


    cy.get('.row.text-right > :nth-child(2) > .btn')
        .click()

    cy.get('.swal2-confirm').click()

}
const checkordermag = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('.status-border')
        .should("contain.text", "รายการเสร็จสิ้น")

    cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "150.00")


    cy.get('.ml-auto > .nuxt-link-active > .btn').click()
}
