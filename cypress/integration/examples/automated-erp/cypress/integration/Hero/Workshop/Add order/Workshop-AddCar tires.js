/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Car ties", () => {
        loginWorkshop("empGrip01", "password")
        addCartiees()
        addCartiees1()
        addconfimeCartiees()
        checkconfimeCartiees()

        Addorder()
        checkorder()

    })

})


const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

// รายละเอียดสินค้า
const addCartiees = () => {
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('#tab-TIRE').click()
    cy.get('.row.mt-4 > .text-xl-right > .btn-confirm').click()
    taxCartiees(getRandomNumberCartiees(0, 10))
    taxCartiees1(getRandomNumberCartiees(0, 10))
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(1) > .primary-blue')
        .should("contain.text", "Tag")
    taxCartiees2(getRandomNumberCartiees(0, 10))
    taxCartiees3(getRandomNumberCartiees(0, 10))
    taxCartiees4(getRandomNumberCartiees(0, 10))

    cy.get(':nth-child(5) > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(5) > :nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(5) > .pr-0 > .el-select')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search')
        .should("contain.text", "ถัดไป")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search')
        .click()
}

const getRandomNumberCartiees = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxCartiees = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test Cartiees").type(textNo)
}
const taxCartiees1 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(3) > .el-autocomplete > .el-input > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees2 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees3 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(2) > .mt-2 > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees4 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .form-group.mt-2 > .el-textarea > .el-textarea__inner')
        .type("test").type(textNo)
}

// รายละเอียดราคา
const addCartiees1 = () => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("100")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("50")
    cy.get('.col-md-6 > .mt-2').clear().type("0319")
    cy.get(':nth-child(4) > .col-md-4 > .mt-2 > .el-input__inner').clear().type("50")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const addconfimeCartiees = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-TIRE').click()
}

// เช็คสินค้าที่เพิ่ม
const checkconfimeCartiees = () => {
    cy.get('#pane-TIRE > #ordersTable > .d-none > .table > tbody > #inventorys-0 > :nth-child(6) > .btn-details')
        .click()

    cy.get('.form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > #inventorys-0 > :nth-child(1)')
        .should("contain.text", "0319")
    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)')
        .should("contain.text", "50")

    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-footer > .btn')
        .click()

}

// เพิ่มรายการซื้อ
const Addorder = () => {
    cy.get(':nth-child(4) > .nav-link > .row > h6')
        .click()
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('.col-xl-auto > a > .btn-confirm').click()

    // เพิ่มผู้จำหน่าย
    // cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{enter}")

    // cy.get('.bv-no-focus-ring > #name').type("test01")
    // cy.get('.bv-no-focus-ring > #address').type("sky")
    // cy.get('.bv-no-focus-ring > #mobileNo').type("0955915150")
    // cy.get('.bv-no-focus-ring > #taxCustomerNumber').type("1100201520688")
    // cy.get('.btn-confirm').click()

    // cy.get('.swal2-confirm').click()



    // เลือกผู้จำหน่าย
    // cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
    //     .click()
    cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("test").wait(1000).type("{downarrow}{enter}", { force: true })
    cy.get('.d-xl-flex > .col-xl-6 > .btn').click()

    // รายละเอียดสินค้า
    cy.get('#tab-TIRE').click()
    cy.get('#searchWidth > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#searchRimSize > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}", { force: true })

    // เลือกสินค้า
    cy.get('.d-xl-block > .table > tbody > :nth-child(1) > :nth-child(5) > .btn-details')
        .click()
    cy.get('.d-xl-block > .table > tbody > :nth-child(2) > :nth-child(5) > .btn-details')
        .click()

    cy.get('.close').click()

    // เช็คสินค้าที่เลือก
    // สินค้าชิ้นที่ 1
    // cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > :nth-child(2) > .primary-blue')
    //     .should("contain.text", "1100 / 10.5 R 12")
    cy.get(':nth-child(1) > :nth-child(4) > .row > :nth-child(1)')
        .clear().type("3")
    cy.get(':nth-child(1) > :nth-child(4) > .row > :nth-child(2)')
        .type("1090")

    // สินค้าชิ้นที่ 2
    // cy.get('.col-12.d-none > .table > tbody > :nth-child(2) > :nth-child(2) > .primary-blue')
    //     .should("contain.text", "1100 / 10.5 R 12")
    cy.get(':nth-child(2) > :nth-child(4) > .row > :nth-child(1) > input')
        .clear().type("3")
    cy.get(':nth-child(2) > :nth-child(4) > .row > :nth-child(2) > input')
        .type("1090")

    // ราคาต่อหน่วย
    cy.get(':nth-child(1) > :nth-child(5) > .quantity > input')
        .clear().type("30")
    cy.get(':nth-child(2) > :nth-child(5) > .quantity > input')
        .clear().type("50")

    // ราคารวม
    cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "90.00")
    cy.get('.col-12.d-none > .table > tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "150.00")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "240.00 บาท")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
        .should("contain.text", "256.80 บาท")


    cy.get('.row.text-right > :nth-child(2) > .btn')
        .click()

    cy.get('.swal2-confirm').click()


}

const checkorder = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")

    cy.get(':nth-child(5) > [colspan="3"]')
        .should("contain.text", "16.80 บาท")

    cy.get('.ml-auto > .nuxt-link-active > .btn').click()

}