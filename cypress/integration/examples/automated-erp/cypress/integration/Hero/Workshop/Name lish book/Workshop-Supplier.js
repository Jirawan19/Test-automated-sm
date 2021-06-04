/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("host"))
    })
    it("Add Supplier", () => {
        loginWorkshop("empGrip01", "password")
        AddSupplier()
        AddSupplier1()
        AddSupplier2()
        checkAddSupplier()
    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}
// เข้าหน้าเพิ่มพนักงาน
const AddSupplier = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('#tab-supplier').click()
}

// กรอกข้อมูล Sopplier
const AddSupplier1 = () => {
    cy.get('#pane-supplier > .mb-2 > .col-xl-2 > a > .btn').click()
    taxAddSupplier(getRandomNumberAddSupplier(0, 5))
    taxAddSupplier1(getRandomNumberAddSupplier(0, 5))
    taxAddSupplier2(getRandomNumberAddSupplier(0, 9))
    taxAddSupplier3(getRandomNumberAddSupplier(0, 10))
    taxAddSupplier4(getRandomNumberAddSupplier(0, 13))
    cy.get('.btn-confirm').click()
}
const getRandomNumberAddSupplier = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddSupplier = (textNo) => {
    cy.get('.bv-no-focus-ring > #name')
        .type("test Supplier").type(textNo)
}
const taxAddSupplier1 = (textNo) => {
    cy.get('.bv-no-focus-ring > #address')
        .type("ดาวเสาร์").type(textNo)
}
const taxAddSupplier2 = (textNo) => {
    cy.get('.bv-no-focus-ring > #telNo')
        .type(textNo)

}
const taxAddSupplier3 = (textNo) => {
    cy.get('.bv-no-focus-ring > #mobileNo')
        .type(textNo)
}
const taxAddSupplier4 = (textNo) => {
    cy.get('.bv-no-focus-ring > #taxCustomerNumber')
        .type(textNo)
}

// ยืนยันเพิ่ม supplier
const AddSupplier2 = () => {
    cy.get('.swal2-confirm').click()
}

// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddSupplier = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('#tab-supplier').click()
}