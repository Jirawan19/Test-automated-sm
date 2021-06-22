
/// <reference types="cypress" />


context("Open-Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    //เปิดรายการขาย
    it("Open-Sale all", () => {

        loginsupplier("grip-member1", "password")
        Opensale()

        // // เลือกสินค้า
        Selectproductall()
        Selectproductall2()
        Selectproductall3()


        // // รายละเอียดสินค้าที่เลือก
        detailopensaleall1()
        // เช็คราคาแบบรวมและไม่รวมภาษี
        detailopensaleall2()


        // // เปิดรายการขาย
        supplieropenorderall()

        // // เช็ครายละเอียดรายการขาย
        checksupplieropenorderall()

        // // ออกจากระบบ
        logout()
    })

    // workshop รับรายการ
    it("workshop receive ", () => {
        loginWorkshop("empGrip01", "password")


        // // รับรายการล้อแม็กซ์แบบทั้งหมด
        // receiveSaleall()
        // checkreceiveall()

        // // รับรายการล้อแม็กซ์แบบบางชิ้น
        receiveSaleall1()
        checkreceiveall1()

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

const detailall1 = () => {

}


// เลือกสินค้า ล้อแม็ก
const Selectproductall = () => {
    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-2').should("contain.text", "ล้อแม็กซ์")
    cy.get('#tab-2').click()

    // รายละเอียดสินค้า
    cy.get(':nth-child(5) > .bv-no-focus-ring > label').should("contain.text", "รูดุมล้อ")
    cy.get(':nth-child(5) > .bv-no-focus-ring > .el-input > .el-input__inner').clear().type("55")

    // ค้นหาสินค้า
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('#pane-2 > :nth-child(2) > :nth-child(1) > .btn-search').click()
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-2 > .d-xl-block > .table > tbody > tr > :nth-child(6) > .btn-details').click()
    cy.get('.close').click()
}

// รายละเอียดของสินค้าที่เลือก ล้อแม็ก,อะไหล่,ยางรถยนต์
const detailopensaleall1 = () => {

    // ล้อแม็ก
    cy.get('.col-12.mt-2 > .table > thead > tr > :nth-child(2)').should("contain.text", "รายการ")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.col-12.d-xl-block > .table > tbody > tr > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(1) > :nth-child(4) > .form-check > .form-control').clear().type("2")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(1) > :nth-child(5)')
        .should("contain.text", "1,564.00")


    // อะไหล่
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(2) > :nth-child(2) > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(2) > :nth-child(2) > :nth-child(4)')
        .should("contain.text", "กาวดำ -")

    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(2) > :nth-child(4) > .form-check > .form-control')
        .clear().type("5")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "200.00")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "1,000.00")


    // ยางรถยนต์
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(3) > :nth-child(2) > :nth-child(1)')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(3) > :nth-child(2) > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(3) > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวน")
    cy.get(':nth-child(3) > :nth-child(4) > .form-check > .form-control')
        .clear().type("2")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคาต่อหน่วย")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(3) > :nth-child(5)')
        .should("contain.text", "2,650.00")
    cy.get('.col-12.d-xl-block > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tbody > :nth-child(3) > :nth-child(6)')
        .should("contain.text", "5,300.00")

}

// เช็คราคาแบบรวมและไม่รวมภาษี
const detailopensaleall2 = () => {

    // ราคาไม่รวมภาษี
    cy.get(':nth-child(1) > [colspan="2"]')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "9,428.00 บาท")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get(':nth-child(4) > [colspan="2"]')
        .should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "9,428.00 บาท")


    // ราคารวมภาษี
    cy.get(':nth-child(1) > [colspan="2"]')
        .should("contain.text", "ราคารวม")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "9,428.00 บาท")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(3) > .text-right > .el-switch > .el-switch__core')
        .click()
    cy.get(':nth-child(4) > [colspan="2"]')
        .should("contain.text", "ยอดรวมสินค้าสุทธิ")
    cy.get('.col-12.d-xl-block > .table > tfoot > :nth-child(4) > .text-right')
        .should("contain.text", "10,087.96 บาท")

}
// เปิดรายการขาย
const supplieropenorderall = () => {
    cy.get('.el-textarea__inner').type("ด่วน")
    cy.get('.d-xl-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "สถานะรอรับสินค้า")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

// เช็ครายละเอียดรายการขาย
const checksupplieropenorderall = () => {

    // ล้อแม็ก
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

    // อะไหล่
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(2) > .text-left > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)')
        .should("contain.text", "กาวดำ -")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(2) > .text-left > :nth-child(6)')
        .should("contain.text", "ยี่ห้อ : DAITEN")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(2) > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ยืนยันการส่ง")

    // ยางรถยนต์

    cy.get('.table-order-wrappe > .table > tbody > :nth-child(3) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(3) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(3) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")
    cy.get('.table-order-wrappe > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(3) > :nth-child(5) > .secondary-blue')
        .should("contain.text", "ยืนยันการส่ง")

    // เช็คราคาของรายการขาย
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(4) > .secondary-blue')
        .should("contain.text", "ยอดรวมสินค้า")

    cy.get('.table-order-wrappe > .table > tbody > :nth-child(6) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get('.table-order-wrappe > .table > tbody > :nth-child(6) > :nth-child(3)')
        .should("contain.text", "659.96 บาท")
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

// เลือกสินค้าอะไหล่
const Selectproductall2 = () => {
    cy.get('.col-xl-6 > .btn').click()
    cy.get('.modal-title').should("contain.text", "เลือกสินค้า / Choose Product")
    cy.get('#tab-1').should("contain.text", "อะไหล่")
    cy.get('#tab-1').click()
    cy.get('#searchParts > .bv-no-focus-ring > label').should("contain.text", "ค้นหาอะไหล่")
    cy.get('#inputSearchParts').click().type("กาว")
    cy.get(':nth-child(2) > .btn-search').click()

    cy.get('#pane-1 > .d-xl-block > .table > thead > tr > :nth-child(1)').should("contain.text", "รหัสสินค้า")
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(1)').should("contain.text", "test-044")
    cy.get('#pane-1 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get(':nth-child(6) > .btn-details').click({ force: true })
    cy.get('.close').click()
}

// เลือกสินค้ายางรถยนต์
const Selectproductall3 = () => {
    cy.get('.col-xl-6 > .btn').click()
    cy.get('#tab-0').should("contain.text", "ยางรถยนต์")
    cy.get('#tab-0').click()
    cy.get('.mt-2 > #searchWidth > .bv-no-focus-ring > label').should("contain.text", "หน้ากว้าง")
    cy.get('#searchWidth > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}", { force: true })


    cy.get('.mt-2 > #searchSeries > .bv-no-focus-ring > label').should("contain.text", "ซีรี่ย์")
    cy.get('#searchSeries > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("65").type("{downarrow}{downarrow}{enter}")

    cy.get('.mt-4 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('.mt-4 > :nth-child(1) > .btn-search').click()

    cy.get('#pane-0 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('#pane-0 > .d-xl-block > .table > thead > tr > [style="width: 200px;"]').click()
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(5) > .btn-details').click({ force: true })
    cy.get('.close').click()
}

// รับรายการขายแบบนทั้งหมด
const receiveSaleall = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")

    // ล้อแม็ก
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")

    // อะไหล่
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)')
        .should("contain.text", "กาวดำ -")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > :nth-child(5)')
        .should("contain.text", "ยี่ห้อ : DAITEN")

    // ยางรถยนต์
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")

    // workshop  แบบทั้งหมด
    // กรอกจำนวนและเลข dot

    // ล้อแม็ก
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

    // อะไหล่
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > :nth-child(4) > .row > .quantity > input')
        .clear().type("5")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "200.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "1,000.00")

    // ล้อรถยนต์
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(4) > .row > :nth-child(1) > input')
        .clear().type("2")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(4) > .row > :nth-child(2) > input')
        .clear().type("1903")


    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(5)')
        .should("contain.text", "2,650.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(3) > :nth-child(6)')
        .should("contain.text", "5,300.00")

    // **

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(6) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(6) > [colspan="2"]').should("contain.text", "659.96 บาท")

    // // บันทึกรายการ
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

const checkreceiveall = () => {
    cy.get('.status-border').should("contain.text", "รายการเสร็จสิ้น")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "รายการ")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > [style="width: 200px;"]')
        .should("contain.text", "สถานะ")
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}


// รับรายการขายแบบบางชิ้น
const receiveSaleall1 = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get('thead > tr > :nth-child(5)').should("contain.text", "สถานะ")
    cy.get(':nth-child(1) > :nth-child(5) > .status-border').should("contain.text", "รอรับสินค้า")
    cy.get('thead > tr > :nth-child(1)').should("contain.text", "เลขที่รายการซื้อ")
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()

    // เช็คสถานะในบิลรายการขาย
    cy.get('.status-border').should("contain.text", "รอรับสินค้า")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายการ")

    // ล้อแม็ก
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)')
        .should("contain.text", "ยี่ห้อ : RTY")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(6)')
        .should("contain.text", "รุ่น : AAA-2")

    // อะไหล่
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > .primary-blue')
        .should("contain.text", "test-044")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > :nth-child(4)')
        .should("contain.text", "กาวดำ -")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > .text-left > :nth-child(5)')
        .should("contain.text", "ยี่ห้อ : DAITEN")

    // ยางรถยนต์
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > .primary-blue')
        .should("contain.text", "195 / 65 R 15")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > :nth-child(3)')
        .should("contain.text", "NANO ENERGY 3")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > .text-left > :nth-child(5)')
        .should("contain.text", "TOYO")

    // workshop  แบบทั้งหมด
    // กรอกจำนวนและเลข dot

    // ล้อแม็ก
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

    // อะไหล่
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > :nth-child(4) > .row > .quantity > input')
        .clear().type("2")

    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(2) > :nth-child(5)')
        .should("contain.text", "200.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(2) > :nth-child(6)')
        .should("contain.text", "1,000.00")

    // ล้อรถยนต์
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "จำนวนรับเข้า / dot")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(4) > .row > :nth-child(1) > input')
        .clear().type("1")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(4) > .row > :nth-child(2) > input')
        .clear().type("1903")


    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(5)')
        .should("contain.text", "ราคา")
    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(3) > :nth-child(5)')
        .should("contain.text", "2,650.00")
    cy.get('.table-order-wrapper.d-none > .table > thead > tr > :nth-child(6)')
        .should("contain.text", "ราคารวม")
    cy.get('tbody > :nth-child(3) > :nth-child(6)')
        .should("contain.text", "5,300.00")

    // **

    cy.get('.table-order-wrapper.d-none > .table > tbody > :nth-child(6) > .secondary-blue')
        .should("contain.text", "ภาษีมูลค่าเพิ่ม (VAT)")
    cy.get(':nth-child(6) > [colspan="2"]').should("contain.text", "659.96 บาท")

    // // บันทึกรายการ
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

const checkreceiveall1 = () => {
    cy.get('.status-border').should("contain.text", "รับสินค้าบางส่วน")
    cy.get('.ml-auto > .nuxt-link-active > .btn').click({ force: true })
}



