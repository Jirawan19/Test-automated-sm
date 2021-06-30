/// <reference types="cypress" />

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
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
    cy.get('#tab-customer').click()
}

// กรอกข้อมูลลูกค้า
const AddCustomer1 = () => {

    // กรอกข้อมูลลูกค้า
    cy.get(':nth-child(1) > :nth-child(1) > .ml-xl-auto > a > .btn').click()

    cy.get(':nth-child(9) > .mb-4-CustomStyle > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .type("คลองถนน")
    taxAddCustomer(getRandomNumberAddCustomer(0, 12))
    taxAddCustomer1(getRandomNumberAddCustomer(0, 2))
    cy.get('.bv-no-focus-ring > #idCardNumber').type("1100201520688")
    cy.get('.bv-no-focus-ring > #address').type("168/106")
    cy.get(':nth-child(8) > .mb-4-CustomStyle > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .clear().type("สายไหม").type("{enter}")
    cy.get('.bv-no-focus-ring > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .clear().type("10220").type("{enter}")
    taxAddCustomer6(getRandomNumberAddCustomer(0, 10))
    taxAddCustomer3(getRandomNumberAddCustomer(0, 3))
    cy.get('#step0 > .row > .step_row_footer > .btn-select')
        .click()
}

const getRandomNumberAddCustomer = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddCustomer = (textNo) => {
    cy.get('.bv-no-focus-ring > #telNo').type(textNo)
}
const taxAddCustomer1 = (textNo) => {
    cy.get('#name')
        .type("เพิ่มลูกค้า").type(textNo)
}
const taxAddCustomer2 = (textNo) => {
    cy.get('.bv-no-focus-ring > #idCardNumber')
        .type("1100201520688")
}
const taxAddCustomer3 = (textNo) => {
    cy.get('#mobileNo')
        .type(textNo)
}
const taxAddCustomer6 = (textNo) => {
    cy.get('.bv-no-focus-ring > #email')
        .click().type("test").type(textNo).type("@gmail.com")
}

// กรอกข้อมูลรถยนต์
const AddCustomer2 = () => {
    taxAddCustomer4(getRandomNumberAddCustomer(1, 3))
    taxAddCustomer5(getRandomNumberAddCustomer(0, 5))
    cy.get('#input_carBrand')
        .click().type("{downarrow}{downarrow}{enter}", { force: true }).tab()
    // cy.get('#input_carModel')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#step2-province')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })

    cy.get(':nth-child(4) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })

    cy.get(':nth-child(7) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get(':nth-child(8) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#latestMileages').type("500")
    cy.get('#step1 > .row > .step_row_footer > .btn-select').click()
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
    cy.get('.swal2-confirm').click()
}
// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddCustomer = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('#tab-customer').click()

    cy.get(':nth-child(1) > [style="width: 11rem;"] > .btn-details')
        .click()
    cy.get('.nuxt-link-active > .btn').click()
}