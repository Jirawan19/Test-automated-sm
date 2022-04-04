// Seller เปิดรายการขาย 
// ต้องเพิ่มพนักงานจาก แอดมิน 
// และทำการเพิ่มร้านค้าให้พนักงาน,อัพเดทสินค้า
//  และถึงจะลงชื่อเข้าใช้ ของพนักงานเพื่อเปิดรายการขาย
/// <reference types="cypress" />

context("Seller-Open sales Po", () => {
    it("Seller-Open sales PO", () => {
        cy.loginMNY("seller cypress", "seller cypress")

        // เพิ่มขนส่งใหม่ในกรณีไม่มีขนส่ง
        // Addtransport()
        
        // Seller เปิดรายการขาย
        OpensalesPO()
        
        // เช็ครายการขายพี่เปิดใหม่
        checkOpensalesPO()
        
        // Seller รับรายการขาย
        OpensalesPO1()
        
        // เช็คสถานะรับรายการขาย
        checkOpensalesPO1()
    })
})

const SellerOpensalesPO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เปิดรายการขายจาก seller PO
const OpensalesPO = () => {
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('.nuxt-link-exact-active > .el-menu-item').click()
    cy.get('.col-xl > a > .btn').click()
    cy.get('.ml-3 > h4').should("contain.text", "เปิดบิลรายการขาย")
    cy.get(':nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("Kerry").type("{downarrow}{enter}")
    cy.get('.row > :nth-child(1) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .modal-title')
        .should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('.col-lg-6 > .form-control').type("พ").type("ลู")
    cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('.form-check > .form-control').clear().type("5")
    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วน")
    cy.get('.btn-save').click()
    cy.get('.swal2-confirm').click()
}
// เช็คสถานะ
const checkOpensalesPO = () => {
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('.status-border').should("contain.text", "รอยืนยันรายการ")

}
// Seller รับรายการขาย 
const OpensalesPO1 = () => {
    cy.get('.d-none > .col-12 > .save-btn-box > span > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
    cy.get('.status-border').should("contain.text", "รายการรอจัดพิมพ์ใบรับออเดอร์")
    cy.get('p').click()
    // cy.get('.mr-4 > .btn').click()

}
// เช็คสถานะ
const checkOpensalesPO1 = () => {
    cy.get('.mr-4 > .btn').click({ force: true })
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click({ force: true })
    cy.get('.status-border').should("contain.text","รายการเสร็จสิ้น")

}

// เพิ่มขนส่งใหม่
const Addtransport = () => {
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('.nuxt-link-exact-active > .el-menu-item').click()
    cy.get('.col-xl > a > .btn').click()
    cy.get('.mt-4 > .btn').click()
    cy.get('#addShippingLabel').should("contain.text", "เพิ่มระบบการขนส่ง")
    cy.get('.form-group > .form-control').type("Ker").type("ry")
    cy.get('.modal-footer > .btn-confirm').click()
    cy.get('.swal2-confirm').click()
}

