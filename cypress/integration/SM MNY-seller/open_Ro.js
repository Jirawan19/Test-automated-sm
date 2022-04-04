// Seller เปิดรายการขาย 
// ต้องเพิ่มพนักงานจาก แอดมิน 
// และทำการเพิ่มร้านค้าให้พนักงาน,อัพเดทสินค้า
//  และถึงจะลงชื่อเข้าใช้ ของพนักงานเพื่อเปิดรายการขาย

/// <reference types="cypress" />

context("Seller-Open sales Ro", () => {
    it("Seller-Open sales Ro", () => {
        cy.loginMNY("seller cypress", "seller cypress")

        // เปิดรายการขาย RO 
        OpenSalesRO()

        // เช็ครายการขายที่พึ่งเพิ่มใหม่
        checkOpensalesRO()

        // Seller รับรายการขาย RO
        OpensalesRO1()

        // เช็คสถานะที่พึ่งรับรายการขาย
        checkOpensalesRO1()
    })
})

const SellerOpensalesRO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

const OpenSalesRO = () => {
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
    taxAddOpenSalesRO(getRandomNumberOpenSalesRO(0, 5))
    cy.get(':nth-child(3) > .el-select > .el-input > #productposition')
        .click().type("{downarrow}{enter}")
    cy.get('#productbrand').click({ force: true }).type("ADVICS").type("{downarrow}{enter}")
    cy.get('#productcost').clear().type("200")
    cy.get('#productamount').clear().type("3")
    cy.get('#productUnit').click({ force: true }).type("{downarrow}{enter}")
    cy.get(':nth-child(8) > .el-select > .el-input > #productposition')
        .click().type("อัน").type("{downarrow}{enter}")
    // cy.get(':nth-child(9) > .el-select > .el-input > #productposition')
    //     .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    // cy.get(':nth-child(10) > .el-select > .el-input > #productposition')
    //     .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#addlistro').click()
    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('.el-textarea__inner').type("สินค้าต้องการด่วนมาก")
    cy.get('.btn-save').click()
    cy.get('#swal2-title').should("contain.text", "เพิ่มรายการขายสำเร็จ ")
    cy.get('.swal2-confirm').click()
}

const getRandomNumberOpenSalesRO = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddOpenSalesRO = (textNo) => {
    cy.get('#manufacturerNo').type(textNo)
}
// เช็คสถานะ
const checkOpensalesRO = () => {
    cy.get('.ml-3 > h4').should("contain.text", "รายการขาย / Sale Orders")
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('.status-border').should("contain.text", "รอยืนยันรายการ")

}
// Seller รับรายการขาย 
const OpensalesRO1 = () => {
    cy.get('.d-none > .col-12 > .save-btn-box > span > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
    cy.get('.status-border').should("contain.text", "รายการรอจัดพิมพ์ใบรับออเดอร์")
    cy.get('p').click()
    // cy.get('.mr-4 > .btn').click()

}
// เช็คสถานะที่พึ่งรับรายการขาย
const checkOpensalesRO1 = () => {
    cy.get('.mr-4 > .btn').click({ force: true })
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click({ force: true })
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")

}