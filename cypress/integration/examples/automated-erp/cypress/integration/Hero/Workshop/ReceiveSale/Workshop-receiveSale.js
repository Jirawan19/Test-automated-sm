/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("receive Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("receive Sale", () => {
        loginWorkshop("empGrip01", "password")

        // รับรายการยางรถยนต์ แบบทั้งหมด
        receiveSale()
        checkreceive()
        
    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}
// รับสินค้าทั้งหมด
const receiveSale = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // ตรวจเช็ครายการสินค้า
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")

    // กรอกจำนวนและ dot ที่รับสินค้า
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > :nth-child(1) > input')
        .clear().type("2")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > :nth-child(2) > input')
        .clear().type("1903")

    // ตรวจเช็ค ราคาสินค้า
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "2,650.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "5,300.00")

    // ราคาภาษีมูลค่าเพิ่ม
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(4) > [colspan="2"]')
        .should("contain.text", "371.00 บาท")

    // บันทึกรับรายการขาย
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('#swal2-content').should("contain.text", "การกระทำนี้จะไม่สามารถเปลี่ยนแปลงได้")
    // cy.get('.swal2-confirm').should("contain.text", "ใช่")
    cy.get('.swal2-confirm').click()

    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "บันทึกรายการสำเร็จ")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

const checkreceive = () => {
    cy.get('.status-border') .should("contain.text", "รายการเสร็จสิ้น")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(1)')
    .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
    .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
    .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
    .should("contain.text", "TOYO")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > [style="width: 200px;"]')
    .should("contain.text", "สถานะ")
    cy.get(':nth-child(6) > .secondary-blue').should("contain.text", "ยืนยันการส่ง")
}