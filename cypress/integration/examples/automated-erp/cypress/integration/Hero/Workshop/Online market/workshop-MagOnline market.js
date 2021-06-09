// ยังไม่จบ ค้นหาสินค้าตอนจะเพิ่ม รายการซื้อสินค้าไม่ขึ้น

/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add order to Supplier", () => {
    beforeEach(() => {
        cy.visit("https://hero.autopair.co/")
    })
    it("Add order-parts", () => {
        loginWorkshop("empGrip01", "password")
        Addorderworkshop()
        Addorderworkshop3()
        // checkAddopenorder2()
        // logout()
    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

// เข้าหน้าเพิ่มรายการซื้อ
const Addorderworkshop = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
}

// เพิ่มรายการซื้อ
const Addorderworkshop3 = () => {
    cy.get('h3').should("contain.text", "เพิ่มรายการซื้อ")
    cy.get('.primary-blue').should("contain.text", "ผู้จำหน่าย")
    cy.get('.col-xl-4 > .el-select > .el-input > .el-input__inner')
        .click().type("ต.สยาม คอมเมอร์เชียล จำกัด").type("{downarrow}{enter}")

    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-2').should("contain.text", "ล้อแม็ก")
    cy.get('#tab-2').click()

    // // รายละเอียดสินค้า
    cy.get(':nth-child(5) > .bv-no-focus-ring > label').should("contain.text", "รูดุมล้อ")
    cy.get(':nth-child(5) > .bv-no-focus-ring > .el-input > .el-input__inner').clear().type("55")

    // // // ค้นหา
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').click()

    // // // เลือกสินค้า
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > tbody > tr > :nth-child(6) > .btn-details').click()
    cy.get('.close').click()


    // // // เช็คสินค้าและราคาแบบ รวมภาษี 7%
    // cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(2)').should("contain.text", "รายการ")
    // cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > .primary-blue')
    //     .should("contain.text", "test-044")
    // cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(4)')
    //     .should("contain.text", "กาวดำ -")

    // cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
    //     .should("contain.text", "จำนวน")
    // cy.get(':nth-child(4) > .form-check > .form-control').clear().type("5")
    // cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
    //     .should("contain.text", "ราคาต่อหน่วย")
    // cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(5)')
    //     .should("contain.text", "200.00")
    // cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(6)')
    //     .should("contain.text", "ราคารวม")
    // cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(6)')
    //     .should("contain.text", "1,000.00")
    // cy.get('.col-12.d-none > .table > tfoot > :nth-child(2) > :nth-child(2)')
    //     .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    // cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > :nth-child(2)')
    //     .should("contain.text", "ยอดรวมสินค้าสุทธิ")
    // cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
    //     .should("contain.text", "1,070.00 บาท")
    // cy.get(':nth-child(2) > .text-right > .el-switch > .el-switch__core')
    //     .click()


    // // // ตรวจเช็คสินค้าและราคาแบบไม่รวมภาษี 7%
    // cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > :nth-child(2)')
    //     .should("contain.text", "ยอดรวมสินค้าสุทธิ")
    // cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
    //     .should("contain.text", "1,000.00 บาท")
    // cy.get(':nth-child(2) > .text-right > .el-switch > .el-switch__core')
    //     .click()

    // // // เปิดรายการขายแบบบวกภาษีเพิ่ม
    // cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    // cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    // cy.get('#swal2-content').should("contain.text", "สถานะรอยืนยันรายกาาร")
    // cy.get('.swal2-confirm').should("contain.text", "OK")
    // cy.get('.swal2-confirm').click()
}