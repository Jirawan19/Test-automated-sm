/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Seller-Manage-AddShop", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Seller-Manage-AddShop", () => {
        SellerManageAddShop("Test-Seller 00", "test-seller 00")

        // ขั้นตอนเพิ่มร้านค้า
        SellerManageAddShop1()


    })
})


const SellerManageAddShop = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

// ขั้นตอนเพิ่มร้านค้า
const SellerManageAddShop1 = () => {
    cy.get('[href="/supplier/management"] > .el-menu-item > .menu-text')
        .click()
    cy.get('h4').should("contain.text", "จัดการร้านค้า")
    cy.get('.order-1 > .btn').should("contain.text", "+ เพิ่มร้านค้า")
    cy.get('.order-1 > .btn').click()
    cy.get('.header-wrapper > h2').should("contain.text", "เพิ่มร้านค้า / Add Retail")
    cy.get(':nth-child(1) > .container-fluid > :nth-child(1) > :nth-child(1) > .form-control')
        .type("Test Shop")
    taxAddPSellerManageShop1(getRandomNumberSellerManageShop(0, 10))
    taxAddPSellerManageShop2(getRandomNumberSellerManageShop(0, 10))
    cy.get(':nth-child(4) > .form-control').type("พหลโยธิน-วันชรพล2 กรุงเทพ")
    cy.get(':nth-child(1) > .container-fluid > :nth-child(2) > .col-sm-6 > .form-control')
        .type("0955915150")
    taxAddPSellerManageShop3(getRandomNumberSellerManageShop(0, 10))
    cy.get(':nth-child(3) > .el-select > .el-input > .el-input__inner')
    .click().type("{downarrow}{enter}")
    cy.get('h3').should("contain.text", "เพิ่มพนักงาน / Add Employee")
    taxAddPSellerManageShop4(getRandomNumberSellerManageShop(0, 10))
    taxAddPSellerManageShop5(getRandomNumberSellerManageShop(0, 10))
    cy.get(':nth-child(2) > .container-fluid > :nth-child(2) > .col-sm-6 > .form-control')
    .type("Test 00")
    taxAddPSellerManageShop6(getRandomNumberSellerManageShop(0, 10))
    taxAddPSellerManageShop7(getRandomNumberSellerManageShop(0, 10))
    cy.get('.row > :nth-child(2) > .btn').should("contain.text", "บันทึก")
    cy.get('.row > :nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "เพิ่มร้านค้าสำเร็จ")
    cy.get('.swal2-confirm').click()
}

const getRandomNumberSellerManageShop = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
// ชือย่อร้านค้า
const taxAddPSellerManageShop1 = (textNo) => {
    cy.get(':nth-child(1) > .container-fluid > :nth-child(1) > :nth-child(2) > .form-control')
        .type("TS").type(textNo)
}
// รหัสร้านค้า
const taxAddPSellerManageShop2 = (textNo) => {
    cy.get(':nth-child(1) > :nth-child(3) > .form-control')
        .type(textNo)
}
// เลขประจำตัวผู้เสียภาษี
const taxAddPSellerManageShop3 = (textNo) => {
    cy.get('.container-fluid > :nth-child(2) > .col-sm-12 > .form-control')
        .type(textNo)
}
// Username
const taxAddPSellerManageShop4 = (textNo) => {
    cy.get(':nth-child(2) > .container-fluid > :nth-child(1) > :nth-child(1) > .form-control')
        .type("Test-Admin").type(textNo)
}
// รหัสพนักงาน
const taxAddPSellerManageShop5 = (textNo) => {
    cy.get(':nth-child(2) > .container-fluid > :nth-child(1) > :nth-child(2) > .form-control')
        .type("test-admin").type(textNo)
}
// E-mail
const taxAddPSellerManageShop6 = (textNo) => {
    cy.get(':nth-child(3) > :nth-child(1) > .form-control')
        .type("Test").type(textNo).type("@gmail.com")
}
// Password E-mail
const taxAddPSellerManageShop7 = (textNo) => {
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type("Test 5")
        .type(textNo)
}