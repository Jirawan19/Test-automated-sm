/// <reference types="cypress" />
context("order PO", () => {
    it("order PO", () => {
        cy.loginMNY("MNY-ADMIN", "MNYadmin1")

        order_PO()
        check_PO()
        service()
        Adsale2PO()
    })
})

// ขั้นตอนเปิดรายการขาย+เลือกลูกค้า+ขนส่ง+สินค้า
const order_PO = () => {
    cy.get('[href="/supplier/sale-order/all-orders"] > .el-menu-item > .menu-text')
        .click({ force: true })
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('.col-xl > a > .btn').click({ force: true })
    cy.wait(2000)
    cy.get('.vs__search').click().type("test-nam-test").type("{downarrow}{downarrow}{enter}")
    cy.pause()
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    // cy.get(':nth-child(4) > .el-select > .el-input > .el-input__inner')
    //     .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    // cy.get(':nth-child(4) > .el-select > .el-input > .el-input__inner')
    //     .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")

    cy.get('.mb-2 > .row > .col-xl-auto > .btn').click()
    cy.get('.col-lg-6 > .form-control').click({ force: true }).type("จาน")
    cy.get('.modal-body > .row > :nth-child(2) > .btn').click({ force: true })
    cy.get(':nth-child(3) > :nth-child(6) > .btn').click({ force: true })
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close').click()

    cy.get('#products-0 > :nth-child(2)').contains("จานคลัทช์")
    cy.get('.form-check > .form-control').click({ force: true }).clear().type("5",{ force: true })

    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วนที่สุด")

    cy.get('.btn-save').click()
    cy.get('.swal2-confirm').click()
}
// เช็คสถานะรายการขายที่พึ่งเปิดใหม่
const check_PO = () => {

    cy.get(':nth-child(1) > :nth-child(6) > .status-border').should("contain.text", "รอยืนยันรายการ")

}
// รับรายการขาย
const service = () => {
    cy.get(':nth-child(1) > :nth-child(6) > .status-border')
        .should("contain.text", "รอยืนยันรายการ")
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('.swal2-confirm').click()
    cy.get('.status-border').should("contain.text", "กำลังดำเนินการ")
    cy.get(':nth-child(1) > .col-sm-12 > strong').should("contain.text", "รายละเอียดการขาย")
    cy.get('.d-none > .col-12 > .save-btn-box > span > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
}
// ตรวจเช็คสถานะที่พึ่งรับรายการขาย
const Adsale2PO = () => {
    cy.get('.status-border').should("contain.text", "รายการรอจัดพิมพ์ใบรับออเดอร์")
    cy.get('p').click()
    cy.get('.mr-4 > .btn').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(6) > .status-border')
        .should("contain.text", "รายการเสร็จสิ้น")
    // cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    // cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")
}