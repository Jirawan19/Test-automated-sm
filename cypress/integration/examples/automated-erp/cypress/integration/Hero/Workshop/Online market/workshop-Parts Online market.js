/// <reference types="cypress" />

context("Add order to Supplier", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add order-parts", () => {
        loginWorkshop("empGrip01", "password")
        Addorderworkshop()
        Addorderworkshop2()
        // checkAddopenorder2()
        // logout()
    })

    // it("supplier receiveATP", () => {
    //     loginsupplierATP("atp-member1", "atp16011986")
    //     supplierreceive()
    //     Supllierlogout()
    // })

    // it("workshop receive", () => {
    //     loginWorkshop("empGrip01", "password")

    //     // // รับสินค้า อะไหล่ แบบทั้งหมด
    //     // receiveSaleparts()
    //     // checkreceiveparts()

    //     // รับสินค้า อะไหล่ แบบบางชิ้น
    //     receiveSaleparts1()
    //     checkreceiveparts1()
    // })
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
    cy.get('#nav-item-0 > .nav-link > .row').click()
}


// เพิ่มรายการซื้อ
const Addorderworkshop2 = () => {
    cy.get('#selSelectSupplier')
    .click()
    cy.wait(2000)
    cy.get('#selSelectSupplier')
    .click().get('#selSelectSupplier')
    .click().type("{downarrow}{downarrow}{enter}")

    // cy.get('.col-xl-6 > .btn').click()
    // cy.get('#tab-0').click()

    // // อะไหล่
    cy.get('#txtSearchPartsName').click().type("ปีกนก", "{downarrow}{enter}")

    // // ค้นหา
    cy.get('#btnPartsSearch').click()

    // // เลือกสินค้า
    cy.get('#tab-table-trial > tbody > :nth-child(1) > :nth-child(5) > #btnPartsInsert-0')
        .click({ force: true })
    cy.get('.close').click()

    // // เช็คสินค้าและราคาแบบ

    cy.get('#opState_Name > tr > :nth-child(2) > :nth-child(4)')
        .contains("โช้คอัพ หลัง")

    cy.get('.md-flex > #txtProduct-Amount-0')
        .clear().type("3")

    cy.get('#opState_Name > tr > :nth-child(6)')
        .should("contain.text", "1,569.75")

    cy.get('#for-destop > tfoot > :nth-child(1) > #opPriceTotal')
        .should("contain.text", "1,569.75 บาท")

    cy.get('.d-xl-flex > :nth-child(2) > #btnCreateProduct')
        .click()

    cy.get('.swal2-confirm').click()
}

// เช็ครายการสินค้าที่พึ่งเปิด
const checkAddopenorder2 = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    cy.get('.status-border').contains("รอยืนยันรายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .contains("ยี่ห้อ : TOKICO")


    cy.get('#priceTotaltd')
        .contains("1,569.75 บาท")

    cy.get('#backtoindex')
        .click()
}

// ออกจากระบบ
const logout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.btn-group > .dropdown-menu > :nth-child(2)').click()
}
// ออกจากระบบ
const Supllierlogout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.dropdown-menu > .dropdown-item')
        .click()
}

const loginsupplierATP = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}
const supplierreceive = () => {
    // เข้าหน้ารับรายการขาย
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสินค้าและราคา
    cy.get('.status-border').contains("รอยืนยันรายการ")

    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")
    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(6)')
        .contains("ยี่ห้อ : TOKICO")

    cy.get('.the-footer > :nth-child(1) > :nth-child(2)')
        .contains("1,569.75 บาท")

    // บันทึกรับรายการขาย
    cy.get(':nth-child(2) > span > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
}
// workshop รับรายการอะไหล่ แบบทั้งหมด
const receiveSaleparts = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "ATP-PS0129R")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ปีกนก ล่างขวา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "ยี่ห้อ : PS")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > .quantity > input')
        .clear().type("3")


    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "3,510.00")

    // บันทึกรายการ
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()


    cy.get('.swal2-confirm').click()


}

const checkreceiveparts = () => {
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "ATP-PS0129R")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ปีกนก ล่างขวา")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > [style="width: 200px;"]')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}

// workshop รับรายการอะไหล่ แบบบางชิ้น
const receiveSaleparts1 = () => {

    cy.get('#nav-item-3 > .nav-link > .row').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue')
        .click()

    // เช็ครายการสินค้า
    cy.get('.status-border').contains("รอรับสินค้า")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .contains("ยี่ห้อ : TOKICO")

    cy.get('#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0')
        .clear().type("1")

    cy.get('#priceTotaltd')
        .contains("1,569.75 บาท")

    // บันทึกรายการ
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()

}

const checkreceiveparts1 = () => {
    cy.get('.status-border').should("contain.text", "รับสินค้าบางส่วน")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .contains("ยี่ห้อ : TOKICO")

    cy.get('tbody > :nth-child(1) > :nth-child(8)')
        .contains("1,569.75")

    cy.get('#backtoindex').click()
}