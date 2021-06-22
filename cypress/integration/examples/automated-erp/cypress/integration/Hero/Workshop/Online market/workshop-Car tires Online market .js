/// <reference types="cypress" />


context("Add order to Supplier", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add order-car tires", () => {
        loginWorkshop("empGrip01", "password")
        Addorderworkshop()
        Addorderworkshop1()
        checkAddopenorder()
        logout()
    })

    it("supplier receive", () => {
        loginsupplier("grip-member1", "password")
        supplierreceive()
        Supllierlogout()
    })

    it("workshop receive ", () => {
        loginWorkshop("empGrip01", "password")

        // // รับรายการยางรถยนต์ แบบทั้งหมด
        // receiveSale()
        // checkreceive()

        // รับรายการยางรถยนต์ แบบบางชิ้น
        receiveSale1()
        checkreceive1()

    })
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
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
}
// เพิ่มรายการซื้อ ยาง
const Addorderworkshop1 = () => {
    cy.get('#selSelectSupplier')
        .click().type("ต.สยาม คอมเมอร์เชียล จำกัด").type("{downarrow}{enter}")

    cy.get('.col-xl-6 > .btn').click()
    cy.get('#tab-0').click()

    // หน้ากว้าง
    // cy.get('#selSearchTire_Width > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}",{force: true})

    // ซีรี่ย์
    cy.get('#selSearchTire_Series > .el-input > .el-input__inner')
        .click().type("65").type("{downarrow}{downarrow}{enter}")
    cy.wait(500)

    // ค้นหา
    cy.get('#btnSearchTire')
    cy.wait(1000)

    // เลือกสินค้า
    cy.wait(500)
    cy.get('.d-xl-block > .table > tbody > :nth-child(1) > :nth-child(5) > .btn-details').click({ force: true })
    cy.get('.el-notification__closeBtn').click()
    cy.get('.close').click()

    // เช็คสินค้าและราคาแบบ รวมภาษี 7%
    cy.get('#for-destop > tbody > tr > :nth-child(2)').contains("195 / 65 R 15")
    cy.get('#for-destop > tbody > tr > :nth-child(2)').contains("NANO ENERGY 3")
    cy.get('#for-destop > tbody > tr > :nth-child(2)').contains("TOYO")

    // จำนวน
    cy.get('.md-flex > .form-control').clear().type("2")

    cy.get('#for-destop > tfoot > :nth-child(1) > .text-right')
        .contains("5,300.00 บาท")

    // เปิดรายการขายแบบบวกภาษีเพิ่ม
    cy.get('.d-xl-flex > :nth-child(2) > .btn')
        .click()
    cy.get('.swal2-confirm').click()
}

// เช็ครายการสินค้าที่พึ่งเปิด
const checkAddopenorder = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('.status-border').contains("รอยืนยันรายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .contains("195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .contains("NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .contains("TOYO")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(4) > .text-danger')
        .contains("5,300.00 บาท")

    cy.get('.ml-auto > .nuxt-link-active > .btn')
        .click()
}

// ออกจากระบบ
const logout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.dropdown-menu > :nth-child(2)')
        .click()
}
// ออกจากระบบ
const Supllierlogout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.dropdown-menu > .dropdown-item')
        .click()
}

const loginsupplier = (username, password) => {
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

    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left')
        .contains("195 / 65 R 15")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left')
        .contains("NANO ENERGY 3")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left')
        .contains("TOYO")

    cy.get('.the-footer > :nth-child(1) > :nth-child(2)')
        .contains("5,300.00 บาท")

    // บันทึกรับรายการขาย
    cy.get(':nth-child(2) > span > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)

    cy.get('.swal2-confirm').click()
}

// รับสินค้าทั้งหมด
const receiveSale = () => {
    cy.get('#nav-item-3 >').click()

    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
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

    cy.get('#priceTotaltd')
        .contains("4,000.00 บาท")

    // บันทึกรับรายการขาย
    cy.get('#saveConfirm').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
}

// เช็คสถานะ
const checkreceive = () => {
    cy.get('.status-border').contains("รายการเสร็จสิ้น")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .contains("4,000.00")
    cy.get('tbody > :nth-child(1) > :nth-child(7)')
        .contains("ยืนยันการส่ง")

}


// รับสินค้าบางชิ้น
const receiveSale1 = () => {
    cy.get('#nav-item-3 >').click()

    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
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
        .clear().type("1")
    cy.get('#txtPurchaseOrderItemQtyReceivedDots_Dot_0')
        .clear().type("1903")

    // กรอก ราคาสินค้า
    cy.get('#txtPrice_0')
        .click().clear().type("2000")

    cy.get('#priceTotaltd')
        .contains("4,000.00 บาท")

    // บันทึกรับรายการขาย
    cy.get('#saveConfirm').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
}


const checkreceive1 = () => {
    cy.get('.status-border').contains("รับสินค้าบางส่วน")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('tbody > :nth-child(1) > :nth-child(8)')
        .contains("4,000.00")
    cy.get('#backtoindex').click()
}