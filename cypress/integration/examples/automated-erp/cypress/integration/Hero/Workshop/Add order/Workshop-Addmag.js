/// <reference types="cypress" />


context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Mag", () => {
        cy.login("empGrip01", "password")
        AddMag()
        supplier()

        Addordermag()
        checkordermag()

    })
})

const AddMag = () => {
    cy.get('#nav-item-6').click()
    cy.get('#tab-inventory').click()
    cy.get('#pane-inventory > .md-ai-center > .text-xl-right > a > .btn').click()

    // กรอกรายละเอียดสินค้า
    cy.get('#tab-MAG').click()
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("19")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(3)')
        .type("19")
    cy.get('.col-md-10 > .mt-2 > .el-input__inner')
        .type("19")
    cy.get(':nth-child(4) > :nth-child(1) > .mt-2').type("5")
    cy.get(':nth-child(4) > .col-md-6 > .mt-2').type("5")
    cy.get('.w-auto').type("5")
    cy.get('.mt-mobile > .el-textarea > .el-textarea__inner')
        .click().type("test")
    cy.get(':nth-child(5) > :nth-child(3) > .mt-2 > .el-input__inner')
        .type("white")
    cy.get(':nth-child(4) > .mt-2 > .el-input__inner')
        .type("5")
    cy.get(':nth-child(5) > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("500")
    cy.get(':nth-child(5) > :nth-child(2) > .mt-2 > .el-input__inner')
        .type("123")
    cy.get(':nth-child(1) > .calculator-form > .el-input__inner')
        .click().clear().type("40")
    cy.get(':nth-child(2) > .calculator-form > .el-input__inner')
        .click().clear().type("17")

    cy.get('#pane-MAG > .col-xl-12 > .col-12 > :nth-child(3) > :nth-child(2) > .btn')
        .click()

    // รายละเอียดราคา

    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("5")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("30")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > .fromitem > .form-row > :nth-child(4) > .mt-2 > .el-input__inner')
        .clear().type("20")
    cy.get('#pane-MAG > .col-xl-12 > .col-12 > :nth-child(3) > :nth-child(2) > .btn').click()

    // ยืนยันเพิ่มสินค้า
    cy.get('.swal2-confirm').click()
    cy.get('#tab-MAG').click()
}



const supplier = () => {
    cy.get('#nav-item-4').click()
    cy.get('#btnCreate_Other_Mag_PurchaseOrder').click()
    cy.get('#selSupplierId > .el-input > .el-input__inner')
        .click().type("เพิ่มผู้").type("{downarrow}{enter}")

    cy.get('#state-name').type("test01")
    cy.get('#state-address').type("sky")
    cy.get('#state-mobileNo').type("0955915150")
    cy.get('#state-taxCustomerNumber').type("1100201520688")
    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()
}
// เพิ่มรายการซื้อ
const Addordermag = () => {
    cy.get('#nav-item-4')
        .click()
    cy.get('#tab-MAG')
        .click()
    cy.get('#btnCreate_Other_Mag_PurchaseOrder')
        .click()

    // เลือกผู้จำหน่าย
    cy.get('#selSupplierId > .el-input > .el-input__inner')
        .click().type("test").type("{downarrow}{enter}", { force: true })
    cy.get('.d-xl-flex > .col-xl-6 > .btn').click()

    // // รายละเอียดสินค้า
    cy.get('#tab-MAG').click()
    cy.get('#txtSearchmagbrand')
        .click().type("19")
    cy.get('#btnSearchMag')
        .click()


    // เช็คและเลือกสินค้า

    // สินค้าชิ้นที่ 1
    cy.get('#pane-MAG > .d-xl-block >')
        .contains("19")

    cy.get('#btnAddmagdesk-0')
        .click()

    cy.get('.close').click()

    // // จำนวน/ราคาต่อหน่วย
    cy.get('#nbrQtyReceived_0').clear().type("5")
    cy.get('#txtPrice_0')
        .clear().type("30")


    // ราคารวม
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "150.00")

    cy.get('.row.text-right > :nth-child(2) > #btnCreatePurchaseOrder')
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
