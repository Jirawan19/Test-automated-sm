/// <reference types="cypress" />
context("Admin Add Sale PO", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Admin Add Sale PO", () => {
        loginAdminSalePO("MNY-ADMIN-test", "MNYadmin1")
        AdsalePO()
        Adsale1PO()
        AdminADMITPO()
        Adsale2PO()
    })
})


const loginAdminSalePO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// ขั้นตอนเปิดรายการขาย+เลือกลูกค้า+ขนส่ง+สินค้า
const AdsalePO = () => {
    cy.get('[href="/supplier/sale-order/all-orders"] > .el-menu-item > .menu-text')
        .click({ force: true })
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('.col-xl > a > .btn').click({ force: true })
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click()
    cy.get('.ml-3 > h4').should("contain.text", "เปิดบิลรายการขาย")
    cy.get(':nth-child(1) > label > h6').should("contain.text", "ชื่อลูกค้า")
    cy.get('.row.mb-2 > :nth-child(2) > label > h6').should("contain.text", "ระบบขนส่ง")
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('.row > :nth-child(1) > .btn').click()
    cy.get('.col-lg-6 > .form-control').type("a")
    cy.get('.col-lg-6 > .form-control').type("d")
    cy.get(':nth-child(3) > :nth-child(6) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.form-check > .form-control').clear().type("5")
    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วนที่สุด")
    cy.get('.btn-save').should("contain.text", "เปิดบิลรายการขาย")
    cy.get('.btn-save').click()
    cy.get('#swal2-title').should("contain.text", "เพิ่มรายการขายสำเร็จ ")
    cy.get('.swal2-confirm').click()
}
// เช็คสถานะรายการขายที่พึ่งเปิดใหม่
const Adsale1PO = () => {
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('thead > tr > :nth-child(6)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(6) > .status-border').should("contain.text", "รอยืนยันรายการ")

}
// รับรายการขาย
const AdminADMITPO = () => {
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