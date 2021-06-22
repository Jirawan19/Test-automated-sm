
/// <reference types="cypress" />


context("Open-Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    //เปิดรายการขาย
    it("Open-Sale mag", () => {

        loginsupplier("grip-member1", "password")
        Opensale()


        // รายละเอียดสินค้า
        detailmag1()

        // ค้นหาสินค้า
        searchdetailmag()

        // เลือกสินค้า
        Selectproductmag()

        // รายละเอียดสินค้าที่เลือก
        detailopensalemag()

        // เปิดรายการขาย
        supplieropenordermag()

        // เช็ครายละเอียดรายการขาย
        checksupplieropenordermag()

        // ออกจากระบบ
        logout()
    })

    // workshop รับรายการ
    it("workshop receive ", () => {
        loginWorkshop("empGrip01", "password")


        // // รับรายการล้อแม็กซ์แบบทั้งหมด
        // receiveSalemag()
        // checkreceivemag()

        // รับรายการล้อแม็กซ์แบบบางชิ้น
        receiveSalemag1()
        checkreceivemag1()

    })

})

const loginsupplier = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Opensale = () => {
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get('a > .el-button > span').should("contain.text", "เพิ่มรายการขาย")
    cy.get('a > .el-button > span').click()
    cy.get('.primary-blue').should("contain.text", "ลูกค้า")
    cy.get('.col-xl-4 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}")
}

const detailmag1 = () => {
    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-2').should("contain.text", "ล้อแม็กซ์")
    cy.get('#tab-2').click()

    // รายละเอียดสินค้า
    cy.get(':nth-child(5) > .bv-no-focus-ring > label').should("contain.text", "รูดุมล้อ")
    cy.get(':nth-child(5) > .bv-no-focus-ring > .el-input > .el-input__inner').clear().type("55")


}

// ค้นหาสินค้า
const searchdetailmag = () => {
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').click()
}

// เลือกสินค้า
const Selectproductmag = () => {
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > tbody > tr > :nth-child(6) > .btn-details').click()
    cy.get('.close').click()
}

// รายละเอียดของสินค้าที่เลือก
const detailopensalemag = () => {
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(2)').should("contain.text", "รายการ")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(4) > .form-check > .form-control').clear().type("2")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(5)')
        .should("contain.text", "1,564.00")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(6)')
        .should("contain.text", "3,128.00")


    // ราคาไม่นวมภาษี
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "3,128.00 บาท")

    // ราคาแบบรวมภาษี
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "3,346.96 บาท")

}
// เปิดรายการขายแบบบวกภาษีเพิ่ม
const supplieropenordermag = () => {
    cy.get('.el-textarea__inner').type("ด่วน")
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "สถานะรอรับสินค้า")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

// เช็ครายละเอียดรายการขาย
const checksupplieropenordermag = () => {
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(2) > .secondary-blue')
        .should("contain.text", "ยอดรวมสินค้า")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(4) > :nth-child(3)')
        .should("contain.text", "218.96 บาท")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click()
}

// ออกจากระบบ
const logout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.btn-group > .dropdown-menu > :nth-child(2)').click()
}

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const receiveSalemag = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")

    // workshop รับรายการล้อแม็ก แบบทั้งหมด
    // กรอกจำนวนและเลข dot
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > .quantity > input')
        .clear().type("2")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "1,564.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "3,128.00")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .secondary-blue')
        .should("contain.text", "ยอดรวมสินค้า")
    cy.contains('3,128.00 บาท')
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "218.96 บาท")

    // บันทึกรายการ
    cy.get('.d-xl-flex > :nth-child(2) > .btn').should("contain.text", "บันทึกรายการ")
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('#swal2-content').should("contain.text", "การกระทำนี้จะไม่สามารถเปลี่ยนแปลงได้")
    cy.get('.swal2-confirm').click()


    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "บันทึกรายการสำเร็จ")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

const checkreceivemag = () => {
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > [style="width: 200px;"]')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}

// workshop รับรายการล้อแม็ก แบบบางชิ้น

const receiveSalemag1 = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > .quantity > input')
        .clear().type("1")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "1,564.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "3,128.00")

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .secondary-blue')
        .should("contain.text", "ยอดรวมสินค้า")
    cy.contains('3,128.00 บาท')
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(4) > [colspan="2"]').should("contain.text", "218.96 บาท")

    // บันทึกรายการ
    cy.get('.d-xl-flex > :nth-child(2) > .btn').should("contain.text", "บันทึกรายการ")
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "ยืนยันการทำรายการ ?")
    cy.get('#swal2-content').should("contain.text", "การกระทำนี้จะไม่สามารถเปลี่ยนแปลงได้")
    cy.get('.swal2-confirm').click()


    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "บันทึกรายการสำเร็จ")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()


}

// เช็คสถานะ 
const checkreceivemag1 = () => {
    cy.get('.status-border').should("contain.text", "รับสินค้าบางส่วน")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}