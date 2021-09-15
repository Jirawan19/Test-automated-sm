/// <reference types="cypress" />


context("Name lish book", () => {
    it("Add Employee", () => {
        cy.login("empGrip01", "password")
        AddHead()
        AddHead1()

        checkHead()
    })
})

// เข้าหน้าเพิ่มพนักงาน
const AddHead = () => {
    cy.get('#nav-item-7').click()
    cy.get('#tab-employee').click({ force: true })
    cy.wait(500)
    cy.get('#btn-addEmp')
        .click({ force: true })
}

// กรอกข้อมูลพนักงาน
const AddHead1 = () => {
    taxAddEmployee(getRandomNumberAddEmployee(1, 3))
    cy.get('#roleEmp').select("แอดมิน")
    cy.get('#state-password').type("password")
    taxAddEmployee2(getRandomNumberAddEmployee(1, 5))
    taxAddEmployee1(getRandomNumberAddEmployee(1, 2))
    taxAddEmployee3(getRandomNumberAddEmployee(0, 10))
    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}

const getRandomNumberAddEmployee = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddEmployee = (textNo) => {
    cy.get('#state-nameEmp')
        .type("เพิ่มแอดมิน").type(textNo)
}
const taxAddEmployee1 = (textNo) => {
    cy.get('#state-usernameEmp')
        .type("เพิ่มแอดมิน").type(textNo)
}
const taxAddEmployee2 = (textNo) => {
    cy.get('#state-emailEmp')
        .type("เพิ่มแอดมิน").type(textNo).type("@gmail.com")

}
const taxAddEmployee3 = (textNo) => {
    cy.get('#state-telEmp')
        .type(textNo)
}

const checkHead = () => {
    cy.get('#nav-item-7').click()
    cy.get('#tab-employee').click( { force: true })

    cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(4) > .btn')
        .click()

    cy.get('#roleEmp')
        .contains("แอดมิน")

    cy.get('.mr-5').click()

    cy.get('#tab-employee')
        .click()
}