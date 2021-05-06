/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Open-Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })

    it("Open-Sale parts", () => {
        loginsupplier("grip-member1", "password")
        Opensale()

        //รายละเอียดของสินค้า ชิ้นที่2
        detail4()
        // Detail2()


        //ค้นหาสินค้า
        searchdetail2()

        //เลือกสินค้า
        detail5()

        //กรอกรายละเอียดหลังจากเลือกสินค้าแล้ว
        detailopensale2()

        // เปิดรายการขาย
        supplieropenorder2()

        // เช็ครายการขายที่พึ่งเปิด
        checksupplieropenorder2()
    })

})
const loginsupplier = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Opensale = () => {
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get('a > .el-button > span').should("contain.text", "เพิ่มรายการขาย")
    cy.get('a > .el-button > span').click()
    cy.get('.primary-blue').should("contain.text", "ลูกค้า")
    cy.get('.col-xl-4 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
}

// สินค้าชิ้นที่ 2 อะไหล่
const detail4 = () => {
    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-1').should("contain.text", "อะไหล่")
    cy.get('#tab-1').click()
    cy.get('#searchParts > .bv-no-focus-ring > label').should("contain.text", "ค้นหาอะไหล่")
    cy.get('#inputSearchParts').click().type("กาว")
}

// เลือกสินค้า
const detail5 = () => {
    cy.get('#pane-1 > .d-xl-block > .table > thead > tr > :nth-child(1)').should("contain.text", "รหัสสินค้า")
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(1)').should("contain.text", "test-044")
    cy.get('#pane-1 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get(':nth-child(6) > .btn-details').click({ force: true })
    cy.get('.close').click()
}

// ตรวจเช็คสินค้าที่เลือกแบบรวมภาษี 7%
const detailopensale2 = () => {
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(2)').should("contain.text", "รายการ")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(4)')
        .should("contain.text", "กาวดำ -")

    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(4) > .form-check > .form-control').clear().type("5")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(5)')
        .should("contain.text", "200.00")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(6)')
        .should("contain.text", "1,000.00")
    cy.get(':nth-child(3) > [colspan="2"]').should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "1,070.00 บาท")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()

    // ตรวจเช็คสินค้าที่เลือกแบบไม่รวมภาษี 7%
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "1,000.00 บาท")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()

    // ตรวจเช็คสินค้าที่เลือกแบบรวมภาษี 7%
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "1,070.00 บาท")
}
// เปิดรายการขายแบบบวกภาษีเพิ่ม
const supplieropenorder2 = () => {
    cy.get('.el-textarea__inner').type("ด่วน")
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "สถานะรอรับสินค้า")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}
// เช็ครายการสินค้าที่พึ่งเปิดรายการ
const checksupplieropenorder2 = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการขาย")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการขาย")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(1)').should("contain.text", "รายการ")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "กาวดำ -")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "ยี่ห้อ : DAITEN")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(3)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > :nth-child(3)')
        .should("contain.text", "200.00")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "ราคารวม")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > :nth-child(4)')
        .should("contain.text", "1,000.00")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ยอดรวมสุทธิ (VAT)")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(5) > .text-danger')
        .should("contain.text", "1,070.00")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click()
}