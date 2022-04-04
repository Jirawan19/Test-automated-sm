/// <reference types="cypress" />

context("shop", () => {
    it("shop", () => {
        cy.loginMNY("MNY-ADMIN", "MNYadmin1")
        shop()
    })
})

// ขั้นตอนเพิ่มร้านค้า
const shop = () => {
    cy.get('[href="/supplier/management"] > .el-menu-item').click({ force: true })
    cy.get(':nth-child(2) > .nav-link').click({ force: true })
    cy.get(':nth-child(4) > .order-1 > .btn').click({ force: true })

    cy.get(':nth-child(1) > .container-fluid > :nth-child(1) > :nth-child(1) > .form-control')
        .type("Test Shop")
    taxAddPManageShop1(getRandomNumberManageShop(0, 10))
    taxAddPManageShop2(getRandomNumberManageShop(0, 10))
    cy.get(':nth-child(4) > .form-control').type("พหลโยธิน-วันชรพล2 กรุงเทพ")
    cy.get(':nth-child(1) > .container-fluid > :nth-child(2) > .col-sm-6 > .form-control')
        .type("0955915150")
    taxAddPManageShop3(getRandomNumberManageShop(0, 10))
    cy.get(':nth-child(3) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{enter}")
    cy.get('h3').should("contain.text", "เพิ่มพนักงาน / Add Employee")
    taxAddPManageShop4(getRandomNumberManageShop(0, 10))
    taxAddPManageShop5(getRandomNumberManageShop(0, 10))
    cy.get(':nth-child(2) > .container-fluid > :nth-child(2) > :nth-child(1) > .form-control')
        .type("Test 5")
    cy.get(':nth-child(2) > .container-fluid > :nth-child(2) > .col-sm-6 > .form-control')
        .type("Test 5")
    taxAddPManageShop6(getRandomNumberManageShop(0, 10))
    taxAddPManageShop7(getRandomNumberManageShop(0, 10))
    
    cy.get('.row > :nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()

    check_admin()
}

const getRandomNumberManageShop = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
// ชือย่อร้านค้า
const taxAddPManageShop1 = (textNo) => {
    cy.get(':nth-child(1) > .container-fluid > :nth-child(1) > :nth-child(2) > .form-control')
        .type("TS").type(textNo)
}
// รหัสร้านค้า
const taxAddPManageShop2 = (textNo) => {
    cy.get(':nth-child(1) > :nth-child(3) > .form-control')
        .type(textNo)
}
// เลขประจำตัวผู้เสียภาษี
const taxAddPManageShop3 = (textNo) => {
    cy.get('.container-fluid > :nth-child(2) > .col-sm-12 > .form-control')
        .type(textNo)
}
// Username
const taxAddPManageShop4 = (textNo) => {
    cy.get(':nth-child(2) > .container-fluid > :nth-child(1) > :nth-child(1) > .form-control')
        .type("Test-Admin").type(textNo)
}

// รหัสพนักงาน
const taxAddPManageShop5 = (textNo) => {
    cy.get(':nth-child(2) > .container-fluid > :nth-child(1) > :nth-child(2) > .form-control')
        .type("test-admin").type(textNo)
}
// E-mail
const taxAddPManageShop6 = (textNo) => {
    cy.get(':nth-child(3) > :nth-child(1) > .form-control')
        .type("Test").type(textNo).type("@gmail.com")
}
// Password E-mail
const taxAddPManageShop7 = (textNo) => {
    cy.get(':nth-child(3) > :nth-child(2) > .form-control').type("Test 5")
        .type(textNo)
}
const check_admin = () => {
    cy.get(':nth-child(2) > .nav-link').click({ force: true })
    cy.get('#customer > .paginate-margin > div > .pagination > :nth-child(9) > .page-link').click({ force: true })

}