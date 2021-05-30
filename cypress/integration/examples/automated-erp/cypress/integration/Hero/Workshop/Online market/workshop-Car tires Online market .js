/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add order to Supplier", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("host"))
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
        logout()
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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
}
// เพิ่มรายการซื้อ ยาง
const Addorderworkshop1 = () => {
    cy.get('h3').should("contain.text", "เพิ่มรายการซื้อ")
    cy.get('.primary-blue').should("contain.text", "ผู้จำหน่าย")
    cy.get('.col-xl-4 > .el-select > .el-input > .el-input__inner')
        .click().type("ต.สยาม คอมเมอร์เชียล จำกัด").type("{downarrow}{enter}")

    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-0').should("contain.text", "ยางรถยนต์")
    cy.get('#tab-0').click()

    // หน้ากว้าง
    cy.get('.mt-2 > #searchWidth > .bv-no-focus-ring > label').should("contain.text", "หน้ากว้าง")
    cy.get('#searchWidth > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}", { force: true })

    // ซีรี่ย์
    cy.get('.mt-2 > #searchSeries > .bv-no-focus-ring > label').should("contain.text", "ซีรี่ย์")
    cy.get('#searchSeries > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("65").type("{downarrow}{downarrow}{enter}")

    // ค้นหา
    cy.get('.mt-4 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('.mt-4 > :nth-child(1) > .btn-search').click()

    // เลือกสินค้า
    cy.get('#pane-0 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-0 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(5) > .btn-details').click({ force: true })
    cy.get('.close').click()

    // เช็คสินค้าและราคาแบบ รวมภาษี 7%
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(2)').should("contain.text", "รายการ")
    cy.get('.col-12.mt-2 > .table > tbody > tr > :nth-child(2) > :nth-child(1)')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.col-12.mt-2 > .table > tbody > tr > :nth-child(2) > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.col-12.mt-2 > .table > tbody > tr > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(4)').should("contain.text", "จำนวน")
    cy.get(':nth-child(1) > :nth-child(4) > .form-check > .form-control').clear().type("2")
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(5)').should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.mt-2 > .table > tbody > tr > :nth-child(5)').should("contain.text", "2,650.00")
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(6)').should("contain.text", "ราคารวม")
    cy.get('.col-12.mt-2 > .table > tbody > tr > :nth-child(6)').should("contain.text", "5,300.00")
    cy.get('tfoot > :nth-child(1) > .text-right').should("contain.text", "5,300.00")
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > :nth-child(2)')
        .should("contain.text", "ยอดรวมสินค้าสุทธิ (VAT)")
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
        .should("contain.text", "5,671.00 บาท")

    // ตรวจเช็คสินค้าและราคาแบบไม่รวมภาษี 7%
    cy.get(':nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > :nth-child(2)')
        .should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-none > .table > tfoot > :nth-child(3) > .text-right')
        .should("contain.text", "5,300.00 บาท")

    // เปิดรายการขายแบบบวกภาษีเพิ่ม
    cy.get(':nth-child(2) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get('.d-xl-flex > :nth-child(2) > .btn')
        .click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "สถานะรอยืนยันรายกาาร")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

// เช็ครายการสินค้าที่พึ่งเปิด
const checkAddopenorder = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('.status-border').should("contain.text", "รอยืนยันรายการ")
    cy.get('.header-table > label').should("contain.text", "รายละเอียดการขาย")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(1) > :nth-child(4)')
        .should("contain.text", "5,300.00")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get('tbody > :nth-child(4) > :nth-child(3)')
        .should("contain.text", "371.00 บาท")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ยอดรวมสุทธิ (VAT)")
    cy.get('.ml-auto > .nuxt-link-active > .btn')
        .should("contain.text", "กลับ")
    cy.get('.ml-auto > .nuxt-link-active > .btn')
        .click()
}

// ออกจากระบบ
const logout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.btn-group > .dropdown-menu > :nth-child(2)').click()
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
    cy.get('h3').should("contain.text", "E-Catalog")
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการขาย")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอยืนยันรายการ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสินค้าและราคา
    cy.get('.status-border').should("contain.text", "รอยืนยันรายการ")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")

    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > :nth-child(4)')
        .should("contain.text", "2,650.00")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคารวม")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "5,300.00")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(4) > [colspan="2"]')
        .should("contain.text", "371.00 บาท")
    
    // บันทึกรับรายการขาย
    cy.get(':nth-child(2) > span > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('#swal2-content').should("contain.text", "การกระทำนี้จะไม่สามารถเปลี่ยนแปลงได้")
    cy.get('.swal2-confirm').click()

    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "บันทึกรายการสำเร็จ")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
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
// เช็คสถานะ
const checkreceive = () => {
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")
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
// รับสินค้าบางชิ้น
const receiveSale1 = () => {
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
        .clear().type("1")
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
const checkreceive1 = () => {
    cy.get('.status-border').should("contain.text", "รับสินค้าบางส่วน")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")
    // cy.get(':nth-child(5) > [colspan="4"]').click()
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}