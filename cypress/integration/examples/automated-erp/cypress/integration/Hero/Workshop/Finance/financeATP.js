/// <reference types="cypress" />


context("finance", () => {

    it("financeATP", () => {
        cy.login("empGrip01", "password")
        ShopATP()

        // cy.login("grip-member1", "password")
        // ATPReceive()

        // cy.login("empGrip01", "password")
        // receiveSale()
        // checkFinance()

    })
})

const ShopATP = () => {
    cy.get('#nav-item-0')
        .click()

    cy.get('#btnMenu-2')
        .click()
    cy.wait(3000)

    // เลือกสินค้า
    cy.get('#selSearchPart')
        .click().type("โช๊คอัพ").type("{enter}")

    // cy.get('#selSearchPartPositions')
    //     .click().wait(500).type("หลัง").type("{enter}")


    // cy.get('#selSearchPartBrands')
    //     .click().wait(500).type("TOKICO").type("{enter}")


    // cy.get('#btnAddCartById-6364')
    //     .click()

    // cy.get('.el-notification__closeBtn')
    //     .click()


    // // เข้าหน้ารายการซื้อ
    // cy.get('.input-group > #btnTopbar_Icon_Cart > img')
    //     .click()

    // // เช็ครายการสินค้า
    // cy.get('.td-list-text > :nth-child(1)')
    //     .contains("โช้คอัพ หลัง (2771)")

    // // จำนวน
    // cy.get('#txtQtyReciveBySupplyIndex-0-0')
    //     .clear().type("3")
    // // ราคา
    // cy.get('thead > [style="cursor: pointer;"] > :nth-child(4)')
    //     .contains("399.91")

    // cy.get('.total-price')
    //     .contains("1,199.74 บาท")

    // cy.get(':nth-child(2) > .btn')
    //     .click()

    // cy.get('.swal2-confirm')
    //     .click()

    // // เช็ครายการสินค้าที่พึ่งเปิด
    // cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue')
    //     .click()

    // cy.get('.status-border')
    //     .contains("รอยืนยันรายการ")
    // cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
    //     .contains("2771")
    // cy.get('#totalNettd')
    //     .contains("1,199.74 บาท")

    // cy.get('#backtoindex')
    //     .click()

    // // ออกจากระบบ
    // cy.get('#dropdownMenuOffset').click()
    // cy.get('.dropdown-menu > :nth-child(2)')
    //     .click()
}
const ATPReceive = () => {
    // เข้าหน้ารับรายการขาย
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสินค้าและราคา
    cy.get('.status-border').contains("รอยืนยันรายการ")

    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")

    cy.get('.the-footer > :nth-child(3) > :nth-child(2)')
        .contains("1,199.74 บาท")

    // บันทึกรับรายการขาย
    cy.get(':nth-child(2) > span > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
}
// รับสินค้าทั้งหมด
const receiveSale = () => {
    cy.get('#nav-item-3')
        .click()

    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue')
        .click()
    // ตรวจเช็ครายการสินค้า
    cy.get('.status-border').contains("รอรับสินค้า")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .contains("2771")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")

    cy.get('#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0')
        .clear().type("3")

    cy.get('tbody > :nth-child(1) > :nth-child(7)')
        .contains("1,199.74")

    cy.get('#totalNettd')
        .contains("1,199.74 บาท")


    // บันทึกรายการ
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()

    cy.wait(500)

    cy.get('.swal2-confirm').click()

    // เช็คสถานะ
    cy.get('.status-border').contains("รายการเสร็จสิ้น")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "2771")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .contains("โช้คอัพ หลัง")

    cy.get('#totalNettd')
        .contains("1,199.74 บาท")

    cy.get('tbody > :nth-child(1) > :nth-child(7)')
        .contains("ยืนยันการส่ง")

    cy.get('#backtoindex').click()
}
const checkFinance = () => {
    cy.get('#nav-item-6').click()

    cy.get('#txtSelectSupplier')
        .type("ต.สยาม คอมเมอร์เชียล จำกัด").type("{enter}")
    cy.get('#txtSelectMonth')
        .type("สิงหาคม").type("{enter}")

    cy.get('.dashboards > :nth-child(1) > h3')
        .contains("ยอดซื้อรวมในเดือน ส.ค.")
    cy.get('.dashboards > :nth-child(2) > h3')
        .contains("ยอดชำระรวมในเดือน ส.ค.")
    cy.get(':nth-child(3) > h3')
        .contains("ภาษีซื้อในเดือน ส.ค.")

    cy.get('tbody > tr > :nth-child(1)')
        .contains("ต.สยาม คอมเมอร์เชียล จำกัด")

    cy.get('#btnShowBy-undefined > img')

        .click()

}