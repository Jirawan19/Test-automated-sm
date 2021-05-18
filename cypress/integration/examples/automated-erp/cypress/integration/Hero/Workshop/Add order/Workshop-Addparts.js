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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(5) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "คลังสินค้า")
    cy.get('#tab-PART').should("contain.text", "อะไหล่")
    cy.get('#tab-PART').click()
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
const addParts1 = () => {
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
const addconfimeParts = () => {
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มสินค้าเข้าคลังเสร็จสิ้น")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
    cy.get('#tab-PART').click()
}
const checkconfimeCarparts = () => {
    cy.get('#inventorys-0 > :nth-child(7) > .btn-details').click()
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-header > #exampleModalLabel')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(1) > .primary-blue')
        .should("contain.text", "ชื่อสินค้า")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(1) > .form-control')
        .should("contain.text", "")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .form-group > .primary-blue')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .form-group > .form-control')
        .should("contain.text", "")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(2) > .primary-blue')
        .should("contain.text", "ยี่ห้อ")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(2) > .form-control')
        .should("contain.text", "")

    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(1)')
        .should("contain.text", "จำนวนรวม")
    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)')
        .should("contain.text", "10")

    cy.get('#inventorytablepart > .modal-dialog > .modal-content > .modal-footer > .btn').click()

}

// เพิ่มรายการซื้อ
const Addorderparts = () => {
    cy.get(':nth-child(4) > .nav-link > .row > h6')
        .click()
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('.col-xl-auto > a > .btn-confirm').click()

    // เพิ่มผู้จำหน่าย
    // cy.get(':nth-child(1) > .primary-blue').should("contain.text", "ผู้จำหน่าย")
    // cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{enter}")

    // cy.get('h3').should("contain.text", "เพิ่มผู้จำหน่าย")
    // cy.get(':nth-child(1) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "")
    // cy.get('.bv-no-focus-ring > #name').type("test01")
    // cy.get(':nth-child(2) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "")
    // cy.get('.bv-no-focus-ring > #address').type("sky")
    // cy.get(':nth-child(4) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "")
    // cy.get('.bv-no-focus-ring > #mobileNo').type("0955915150")
    // cy.get('.col-sm- > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "")
    // cy.get('.bv-no-focus-ring > #taxCustomerNumber').type("1100201520688")
    // cy.get('.btn-confirm').should("contain.text", "บันทึก")
    // cy.get('.btn-confirm').click()

    // cy.get('#swal2-title')
    //     .should("contain.text", "สำเร็จ")
    // cy.get('#swal2-content')
    //     .should("contain.text", "เพิ่มผู้จำหน่ายเรียบร้อย")
    // cy.get('.swal2-confirm').click()



    // เลือกผู้จำหน่าย
    cy.get('.col-xl-auto > a > .btn-confirm').click()
    cy.get('.row > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("test").type("{downarrow}{enter}", { force: true })
    cy.get('.d-xl-flex > .col-xl-6 > .btn').click()
    cy.get('.modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")

    // รายละเอียดสินค้า
    cy.get('#tab-PART').should("contain.text", "อะไหล่")
    cy.get('#tab-PART').click()
    cy.get('#searchParts > .bv-no-focus-ring > label').should("contain.text", "ค้นหาอะไหล่")
    cy.get('#inputSearchParts').click().type("test")
    cy.get(':nth-child(2) > .btn-search').should("contain.text", "ค้นหา")
    cy.get(':nth-child(2) > .btn-search').click()


    // เลือกสินค้า
    cy.get('#pane-PART > .d-xl-block > .table > tbody > :nth-child(1) > :nth-child(6) > .btn-details')
        .click()
    cy.get('#pane-PART > .d-xl-block > .table > tbody > :nth-child(2) > :nth-child(6) > .btn-details').click()

    cy.get('.close').click()


    // เช็คสินค้าที่เลือก
    cy.get('.col-12.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")

    // สินค้าชิ้นที่ 1
    cy.get('.col-12.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(1) > :nth-child(4) > .row > .quantity > input')
        .clear().type("3")

    // สินค้าชิ้นที่ 2
    cy.get('.col-12.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(2) > :nth-child(4) > .row > .quantity > input')
        .clear().type("3")

    // // ราคาต่อหน่วย
    cy.get('.col-12.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get(':nth-child(1) > :nth-child(5) > .form-check > .form-control')
        .clear().type("30")
    cy.get(':nth-child(2) > :nth-child(5) > .form-check > .form-control')
        .clear().type("50")

    // ราคารวม
    cy.get('.col-12.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "90.00")
    cy.get('.col-12.d-none > .table > tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "150.00")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > :nth-child(2)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "240.00 บาท")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > :nth-child(2)')
        .should("contain.text", "ยอดรวมสินค้าสุทธิ (VAT)")
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
        .should("contain.text", "256.80 บาท")


    cy.get('.row.text-right > :nth-child(2) > .btn')
        .should("contain.text", "เปิดบิลรายการซื้อ")
    cy.get('.row.text-right > :nth-child(2) > .btn')
        .click()

    cy.get('#swal2-title')
        .should("contain.text", "สำเร็จ")
    cy.get('#swal2-content')
        .should("contain.text", "รายการเสร็จสิ้น")
    cy.get('.swal2-confirm').click()

}
const checkorderparts = () => {
    cy.get(':nth-child(1) > :nth-child(5) > .status-border')
        .should("contain.text", "รายการเสร็จสิ้น")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('.status-border')
        .should("contain.text", "รายการเสร็จสิ้น")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "90.00")
    cy.get('tbody > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "150.00")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > [style="width: 200px;"]')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(5) > [colspan="3"]')
        .should("contain.text", "16.80 บาท")

    cy.get('.ml-auto > .nuxt-link-active > .btn').click()

}
