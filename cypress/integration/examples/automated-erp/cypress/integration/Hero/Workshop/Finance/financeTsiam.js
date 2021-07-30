/// <reference types="cypress" />


context("finance", () => {

    it("financeTsiam", () => {
        cy.login("empGrip01", "password")
        // ShopTsiam()

        // cy.login("grip-member1", "password")
        // tsiamReceive()

        // cy.login("empGrip01", "password")
        // receiveSale()
        checkFinance()

    })
})

const ShopTsiam = () => {
    cy.get('#nav-item-0').click()

    // เลือกสินค้า
    // หน้ากว้าง
    cy.get('#txtSelectWidth')
        .type("195").wait(500).type("{enter}")

    // ซีรี่ย์
    cy.get('#txtSelectSeries')
        .type("65").wait(500).type("{enter}")

    cy.get('#txtSelectRim')
        .type("15").wait(500).type("{enter}")

    cy.get('#txtSelectBrand')
        .type("TOYO").wait(500).type("{enter}")
    // เลือกสินค้า
    cy.get('#btnAddCartById-49')
        .click()

    cy.get('.el-notification__closeBtn').click()

    // เข้าหน้ารายการซื้อ
    cy.get('.input-group > #btnTopbar_Icon_Cart > img')
        .click()

    // เช็ครายการสินค้า
    cy.get('.td-list-text > :nth-child(1)')
        .contains("195 / 65 R 15 (NANO ENERGY 3)")

    // จำนวน
    cy.get('#txtQtyReciveBySupplyIndex-0-0')
        .click().clear().type("2")

    cy.get('thead > [style="cursor: pointer;"] > :nth-child(4)')
        .contains("2,650.00")

    cy.get('.total-price')
        .contains("5,300.00 บาท")

    // ยืนยันการซื้อสินค้า
    cy.get(':nth-child(2) > .btn')
        .click()
    cy.get('.swal2-confirm')
        .click()

    // เช็ครายการสินค้าที่พึ่งเปิด
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue')
        .click()

    cy.get('.status-border')
        .contains("รอยืนยันรายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .contains("195 / 65 R 15")
    cy.get('#totalNettd')
        .contains("5,300.00 บาท")

    cy.get('#backtoindex')
        .click()

    // ออกจากระบบ
    cy.get('#dropdownMenuOffset').click()
    cy.get('.dropdown-menu > :nth-child(2)')
        .click()
}
const tsiamReceive = () => {
    // เข้าหน้ารับรายการขาย
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสินค้าและราคา
    cy.get('.status-border').contains("รอยืนยันรายการ")

    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > .primary-blue')
        .contains("195 / 65 R 15")
    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(3)')
        .contains("NANO ENERGY 3")
    cy.get('.table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(5)')
        .contains("TOYO")

    cy.get('.the-footer > :nth-child(3) > :nth-child(2)')
        .contains("5,300.00 บาท")

    // บันทึกรับรายการขาย
    cy.get(':nth-child(2) > span > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)

    cy.get('.swal2-confirm').click()

    cy.get('#dropdownMenuOffset').click()
    cy.get('.dropdown-menu > .dropdown-item')
        .click()
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
        .contains("195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .contains("NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .contains("TOYO")

    // กรอกจำนวนและ dot ที่รับสินค้า
    cy.get('#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0')
        .clear().type("2")
    cy.get('#txtPurchaseOrderItemQtyReceivedDots_Dot_0')
        .clear().type("1903")

    // กรอก ราคาสินค้า
    cy.get('#txtPrice_0')
        .click().clear().type("2000")

    cy.get('#totalNettd')
        .contains("4,000.00 บาท")

    // บันทึกรับรายการขาย
    cy.get('#saveConfirm').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()

    cy.get('.status-border').contains("รายการเสร็จสิ้น")

    // เช็คสถานะ
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('#totalNettd')
        .contains("4,000.00 บาท")
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

    cy.get('[aria-describedby="el-tooltip-7213"] > img')
        .click()

}