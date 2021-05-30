/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("host"))
    })
    it("Add Customer", () => {
        loginWorkshop("empGrip01", "password")
        AddCustomer()
        AddCustomer1()
        AddCustomer2()
        AddCustomer3()
        AddCustomer4()
        checkAddCustomer()
    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const AddCustomer = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('#tab-customer').should("contain.text", "ลูกค้า")
    cy.get('#tab-customer').click()
}

// กรอกข้อมูลลูกค้า
const AddCustomer1 = () => {
    cy.get(':nth-child(1) > :nth-child(1) > .ml-xl-auto > a > .btn').click()
    cy.get('h3').should("contain.text", "เพิ่มลูกค้า")

    cy.get(':nth-child(1) > .el-step__main > .el-step__title').should("contain.text", "ข้อมูลลูกค้า")
    cy.get(':nth-child(1) > .mb-CustomStyle > [for=""]').should("contain.text", "ประเภทลูกค้า")
    cy.get(':nth-child(3) > .mb-CustomStyle > [for=""]').should("contain.text", "เพศ")
    // cy.get('#__BVID__123 > :nth-child(2) > .custom-control-label > span')
    // .click({ force: true })
    cy.get('#step0 > .row > :nth-child(5) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "วันเกิด")
    // cy.get(':nth-child(2) > .el-input__inner').type("{downarrow}{downarrow}{enter}")
    cy.get('#step0 > .row > :nth-child(7) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "จังหวัด")
    cy.get(':nth-child(7) > .mb-4-CustomStyle > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .type("กรุงเทพฯ")
    cy.get('#step0 > .row > :nth-child(9) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "ตำบล / แขวง")
    cy.get(':nth-child(9) > .mb-4-CustomStyle > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .type("คลองถนน")
    cy.get(':nth-child(11) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "เบอร์โทรศัพท์")
    taxAddCustomer(getRandomNumberAddCustomer(0, 12))
    // cy.get(':nth-child(2) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "ชื่อ-นามสกุลหรือชื่อบริษัท")
    taxAddCustomer1(getRandomNumberAddCustomer(0, 2))
    cy.get(':nth-child(4) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "เลขประจำตัวประชาชน")
    cy.get('.bv-no-focus-ring > #idCardNumber').type("1100201520688")
    // taxAddCustomer2(getRandomNumberAddCustomer(0, 14))
    cy.get(':nth-child(6) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "ที่อยู่")
    cy.get('.bv-no-focus-ring > #address').type("168/106")
    cy.get('#step0 > .row > :nth-child(8) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "อำเภอ / เขต")
    cy.get(':nth-child(8) > .mb-4-CustomStyle > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .clear().type("สายไหม").type("{enter}")
    cy.get('#postal_code > .bv-no-focus-ring > label')
        .should("contain.text", "รหัสไปรษณีย์")
    cy.get('.bv-no-focus-ring > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .clear().type("10220").type("{enter}")
    // cy.get(':nth-child(12) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
    //     .should("contain.text", "เบอร์โทรศัพท์มือถือ")
    taxAddCustomer6(getRandomNumberAddCustomer(0, 10))
    taxAddCustomer3(getRandomNumberAddCustomer(0, 3))
    cy.get('#step0 > .row > [align="right"] > div > :nth-child(2) > .btn').click()
}

const getRandomNumberAddCustomer = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddCustomer = (textNo) => {
    cy.get('.bv-no-focus-ring > #telNo').type(textNo)
}
const taxAddCustomer1 = (textNo) => {
    cy.get('.bv-no-focus-ring > #name')
        .type("test customer test").type(textNo)
}
const taxAddCustomer2 = (textNo) => {
    cy.get('.bv-no-focus-ring > #idCardNumber')
        .type("1100201520688")
}
const taxAddCustomer3 = (textNo) => {
    cy.get('.bv-no-focus-ring > #mobileNo')
        .type(textNo)
}
const taxAddCustomer6 = (textNo) => {
    cy.get('.bv-no-focus-ring > #email')
        .click().type("test").type(textNo).type("@gmail.com")
}

// กรอกข้อมูลรถยนต์
const AddCustomer2 = () => {
    cy.get(':nth-child(2) > .el-step__main > .el-step__title').should("contain.text", "รถยนต์")
    taxAddCustomer4(getRandomNumberAddCustomer(1, 3))
    cy.get('#vinNo > .bv-no-focus-ring > label').should("contain.text", "เลขตัวถัง")
    taxAddCustomer5(getRandomNumberAddCustomer(0, 5))
    cy.get(':nth-child(5) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}", { force: true })
    cy.get(':nth-child(6) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click().wait(2000).type("{downarrow}{enter}")
    cy.get('#step1 > :nth-child(1) > :nth-child(2) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get(':nth-child(4) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "ประเภทรถยนต์")
    cy.get(':nth-child(4) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#step1 > :nth-child(1) > :nth-child(7) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "โฉมปีรถยนต์")
    cy.get(':nth-child(7) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#step1 > :nth-child(1) > :nth-child(8) > .mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "เกียร์รถยนต์")
    cy.get(':nth-child(8) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#latestMileage > .bv-no-focus-ring > label')
        .should("contain.text", "เลขไมล์ล่าสุด")
    cy.get('#latestMileages').type("500")
    cy.get('#step1 > :nth-child(1) > [align="right"] > div > :nth-child(2) > .btn').click()
}
const taxAddCustomer4 = (textNo) => {
    cy.get('#carRegistrationNumber')
        .click().type("9กณ").type(textNo)
}
const taxAddCustomer5 = (textNo) => {
    cy.get('#vinNos')
        .click().type(textNo)
}

// สถานะการชำระเงินและรับข่าวสาร
const AddCustomer3 = () => {
    cy.get('h3').should("contain.text", "เพิ่มลูกค้า")
    cy.get('[style="flex-basis: 250px; max-width: 33.3333%; z-index: 0;"] > .el-step__main > .el-step__title')
        .should("contain.text", "การชำระเงิน")
    cy.get('.col-12.mb-4-CustomStyle > :nth-child(1) > label')
        .should("contain.text", "ประเภทการชำระ")
    // ชำระเงินสด
    cy.get('.col-12.mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}", { force: true })
    // โอนชำระ
    // cy.get('#step2 > .row > :nth-child(2) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{downarrow}{enter}", { force: true })
    // เช็ค
    // cy.get('#step2 > .row > :nth-child(2) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
    //     .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('.btn-confirm').click()
}

// ยืนยันเพิ่มลูกค้า
const AddCustomer4 = () => {
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มลูกค้าเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}
// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddCustomer = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('#tab-customer').should("contain.text", "ลูกค้า")
    cy.get('#tab-customer').click()

    cy.get(':nth-child(1) > [style="width: 11rem;"] > .btn-details')
        .click()
    cy.get('.nuxt-link-active > .btn').click()
}