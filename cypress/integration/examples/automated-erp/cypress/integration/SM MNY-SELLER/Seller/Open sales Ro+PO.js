// Seller เปิดรายการขาย 
// ต้องเพิ่มพนักงานจาก แอดมิน 
// และทำการเพิ่มร้านค้าให้พนักงาน,อัพเดทสินค้า
//  และถึงจะลงชื่อเข้าใช้ ของพนักงานเพื่อเปิดรายการขาย

/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Seller-Open sales Ro+PO", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Seller-Open sales Ro+PO", () => {
        SellerOpensalesROPO("Test-Seller 00", "test-seller 00")

        // เปิดรายการขาย RO 
        OpenSalesROPO()

        // เปิดรายการขาย PO 
        OpensalesROPO1()

        // เช็ครายการขายที่เปิดใหม่
        checkOpensalesROPO()

        // Seller รับรายการขาย 
        OpensalesROPO2()

        // เช็คสถานะที่พึ่งรับรายการ
        checkOpensalesROPO2()
    })
})

const SellerOpensalesROPO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เปิดรายการขาย RO
const OpenSalesROPO = () => {
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('.col-xl > a > .btn').should("contain.text", "เพิ่มรายการขาย")
    cy.get('.col-xl > a > .btn').click()
    cy.get('.ml-3 > h4').should("contain.text", "เปิดบิลรายการขาย")
    cy.get(':nth-child(1) > label > h6').should("contain.text", "ชื่อลูกค้า")
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.row.mb-2 > :nth-child(2) > label > h6')
        .should("contain.text", "ระบบขนส่ง")
    cy.get(':nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("Kerry").type("{downarrow}{enter}")
    cy.get('.row > :nth-child(1) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#addroproduct').click({ force: true })
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#productname').click({ force: true }).type("จานดิสเบรค").type("{downarrow}{enter}")
    taxAddOpenSalesPORO(getRandomNumberOpenSalesPORO(0, 5))
    cy.get(':nth-child(3) > .el-select > .el-input > #productposition')
        .click().type("{downarrow}{enter}")
    cy.get('#productbrand').click({ force: true }).type("ADVICS").type("{downarrow}{enter}")
    cy.get('#productcost').clear().type("200")
    cy.get('#productamount').clear().type("3")
    cy.get('#productUnit').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#addlistro').click()
    cy.get('.ml-auto > .btn')
        .click({ force: true })
}
// เปิดรายการขายจาก seller PO
const OpensalesROPO1 = () => {
    // cy.get('.row.mb-2 > .row > :nth-child(1) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('.col-lg-6 > .form-control').type("พ").type("ลู")
    cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close > span')
        .click()
    cy.get(':nth-child(1) > :nth-child(5) > .form-check > .form-control')
        .clear().type("4")
    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วนมาก")
    cy.get('.btn-save').click()
    cy.get('#swal2-title').should("contain.text", "เพิ่มรายการขายสำเร็จ ")
    cy.get('.swal2-confirm').click()
}
// เช็ครายการขายที่พึ่งเปิดใหม่
const checkOpensalesROPO = () => {
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('.status-border').should("contain.text", "รอยืนยันรายการ")

}

// Seller รับรายการขาย 
const OpensalesROPO2 = () => {
    cy.get('.d-none > .col-12 > .save-btn-box > span > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
    cy.get('.status-border').should("contain.text", "รายการรอจัดพิมพ์ใบรับออเดอร์")
    cy.get('p').click()
    // cy.get('.mr-4 > .btn').click()

}
// เช็คสถานะที่พึ่งรับรายการ
const checkOpensalesROPO2 = () => {
    cy.get('.mr-4 > .btn').click({ force: true })
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click({ force: true })
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")

}
const getRandomNumberOpenSalesPORO = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddOpenSalesPORO = (textNo) => {
    cy.get('#manufacturerNo').type(textNo)
}