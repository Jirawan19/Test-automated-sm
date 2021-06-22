/// <reference types="cypress" />


context("Name lish book", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add Employee", () => {
        loginWorkshop("empGrip01", "password")
        AddHead()
        AddHead1()

        checkHead()
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
const AddHead = () => {
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('#tab-employee').click()
}

// กรอกข้อมูลพนักงาน
const AddHead1 = () => {
    cy.get('#pane-employee > :nth-child(1) > .col-xl-2 > a > .btn')
        .click()
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
    cy.get('#nav-item-6').click()
    cy.get('#tab-employee').click()

    // cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(1)')
    //     .contains("พนักงานขาย")

    cy.get('.table-responsive > .table > tbody > :nth-child(1) > :nth-child(4) > .btn')
        .click()

    cy.get('#roleEmp')
        .contains("แอดมิน")

    cy.get('.mr-5').click()
}