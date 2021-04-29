/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('#tab-customer').should("contain.text", "ลูกค้า")
    cy.get('#tab-employee').should("contain.text", "พนักงาน")
    cy.get('#tab-supplier').should("contain.text", "ผู้จำหน่าย")
    cy.get('#tab-supplier').click()
}

// กรอกข้อมูล Sopplier
const AddSupplier1 = () => {
    cy.get('#pane-supplier > .mb-2 > .col-xl-2 > a > .btn').click()
    cy.get('h3').should("contain.text", "เพิ่มผู้จำหน่าย")
    taxAddSupplier(getRandomNumberAddSupplier(0, 5))
    cy.get(':nth-child(2) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "ที่อยู่")
    taxAddSupplier1(getRandomNumberAddSupplier(0, 5))
    cy.get(':nth-child(3) > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "เบอร์โทรศัพท์")
    taxAddSupplier2(getRandomNumberAddSupplier(0, 9))
    taxAddSupplier3(getRandomNumberAddSupplier(0, 10))
    cy.get('.col-sm- > .mb-4-CustomStyle > .form-group > .bv-no-focus-ring > label')
        .should("contain.text", "เลขประจำตัวผู้เสียภาษี")
    taxAddSupplier4(getRandomNumberAddSupplier(0, 13))
    // cy.get(':nth-child(6) > .mb-4-CustomStyle > #mobileNo > .bv-no-focus-ring > .form-control')
    //     .click().type("{enter}")
    cy.get('.btn-confirm').should("contain.text", "บันทึก")
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
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มผู้จำหน่ายเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddSupplier = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('#tab-customer').should("contain.text", "ลูกค้า")
    cy.get('#tab-employee').should("contain.text", "พนักงาน")
    cy.get('#tab-supplier').should("contain.text", "ผู้จำหน่าย")
    cy.get('#tab-supplier').click()
}