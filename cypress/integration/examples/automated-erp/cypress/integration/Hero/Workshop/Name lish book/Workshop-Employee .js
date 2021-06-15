/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add Employee", () => {
        loginWorkshop("empGrip01", "password")
        AddEmployee()
        AddEmployee1()
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
const AddEmployee = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('#tab-employee').click()
}

// กรอกข้อมูลพนักงาน
const AddEmployee1 = () => {
    cy.get('#pane-employee > .mb-2 > .col-xl-2 > a > .btn').click()
    taxAddEmployee(getRandomNumberAddEmployee(1, 3))
    cy.get('.el-input__inner').click().type("{downarrow}{downarrow}{enter}")
    taxAddEmployee1(getRandomNumberAddEmployee(1, 2))
    cy.get(':nth-child(6) > .form-control').type("password")
    taxAddEmployee2(getRandomNumberAddEmployee(1, 5))
    taxAddEmployee3(getRandomNumberAddEmployee(0, 10))
    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}

const getRandomNumberAddEmployee = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddEmployee = (textNo) => {
    cy.get('.row > :nth-child(1) > .form-control')
        .type("เพิ่มพนักงาน ขาย").type(textNo)
}
const taxAddEmployee1 = (textNo) => {
    cy.get(':nth-child(5) > .form-control')
        .type("เพิ่มพนักงาน ขาย").type(textNo)
}
const taxAddEmployee2 = (textNo) => {
    cy.get(':nth-child(3) > .form-control')
        .type("เพิ่มพนักงาน ขาย").type(textNo).type("@gmail.com")

}
const taxAddEmployee3 = (textNo) => {
    cy.get(':nth-child(4) > .form-control')
        .type(textNo)
}
const taxAddEmployee4 = (textNo) => {
    cy.get(':nth-child(7) > .form-control')
        .type("ดาวพลูโต").type(textNo)
}