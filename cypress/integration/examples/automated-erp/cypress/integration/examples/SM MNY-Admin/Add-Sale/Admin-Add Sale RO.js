/// <reference types="cypress" />
Cypress.config('defaultCommandTimeout', 100000)
context("Admin Add Sale RO", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Admin Add Sale RO", () => {
        loginAdminSaleRO("MNY-ADMIN-1", "MNYadmin1")
        AdsaleRO()
        Adsale1RO
    })
})

const loginAdminSaleRO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

// ขั้นตอนเปิดรายการขาย+เลือกลูกค้า+ขนส่ง+สินค้า
const AdsaleRO = () => {
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
        .click().click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.row > :nth-child(1) > .btn').click()
    cy.get('#addroproduct').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#productname').click().click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(3) > .el-select > .el-input > #productposition')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#productcost').clear().type("200")
    cy.get('#productUnit').click().type("อัน")
    taxAdminRO(getRandomNumberAdmin(1, 40))
    cy.get('#productbrand').click().type("{downarrow}{downarrow}{enter}")
    cy.get('#productamount').clear().type("5")
    cy.get(':nth-child(8) > .el-select > .el-input > #productposition')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#addlistro').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close')
        .click()
    cy.get('.form-check > .form-control').clear().type("5")
    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วนที่สุด")
    cy.get('.btn-save').should("contain.text", "เปิดบิลรายการขาย")
    cy.get('.btn-save').click()
    cy.get('#swal2-title').should("contain.text", "เพิ่มรายการขายสำเร็จ ")
    cy.get('.swal2-confirm').click()
}

// เช็คสถานะรายการขายที่พึ่งเปิดใหม่
const Adsale1RO = () => {
    cy.get('.ml-3 > h4').should("contain.text","รายการขาย / Sale Orders")
    cy.get('thead > tr > :nth-child(6)').should("contain.text","สถานะ")
    cy.get(':nth-child(1) > :nth-child(6) > .status-border').should("contain.text","รอยืนยันรายการ")

}
const taxAdminRO = (textNo) => {
    cy.get('#manufacturerNo').type(textNo)
}

const getRandomNumberAdmin = (min, max) => {
    1, 40
    return Math.random() * (max - min) + min;
}