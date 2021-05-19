/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Name lish book", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add Employee", () => {
        loginWorkshop("empGrip01", "password")
        AddHeedEmployee()
        AddHeedEmployee1()
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
const AddHeedEmployee = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(7) > .nav-link > .row').click()
    cy.get('h3').should("contain.text", "สมุดรายชื่อ")
    cy.get('#tab-customer').should("contain.text", "ลูกค้า")
    cy.get('#tab-employee').should("contain.text", "พนักงาน")
    cy.get('#tab-employee').click()
}

// กรอกข้อมูลพนักงาน
const AddHeedEmployee1 = () => {
    cy.get('#pane-employee > .mb-2 > .col-xl-2 > a > .btn').click()
    cy.get('h3').should("contain.text", "เพิ่มพนักงาน")
    cy.get(':nth-child(1) > .primary-blue > h5').should("contain.text", "ชื่อพนักงาน")
    taxAddHeedEmployee(getRandomNumberAddEmployee(1, 3))
    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "สิทธ์การใช้งาน (Roles)")
    cy.get('.el-input__inner').click().type("{downarrow}{enter}")
    cy.get(':nth-child(5) > .primary-blue > h5').should("contain.text", "Username")
    taxAddHeedEmployee1(getRandomNumberAddEmployee(1, 2))
    cy.get(':nth-child(6) > .primary-blue > h5').should("contain.text", "Password")
    cy.get(':nth-child(6) > .form-control').type("password")
    cy.get(':nth-child(3) > .primary-blue > h5').should("contain.text", "E-mail")
    taxAddHeedEmployee2(getRandomNumberAddEmployee(1, 5))
    cy.get(':nth-child(4) > .primary-blue > h5').should("contain.text", "เบอร์โทรศัพท์")
    taxAddHeedEmployee3(getRandomNumberAddEmployee(0, 10))
    // cy.get(':nth-child(7) > .primary-blue > h5').should("contain.text", "เขตรับผิดชอบ")
    // taxAddEmployee4(getRandomNumberAddEmployee(0, 10))
    cy.get('[success=""]').should("contain.text", "บันทึก")
    cy.get('[success=""]').click()

    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มพนักงานเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()

}

const getRandomNumberAddEmployee = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddHeedEmployee = (textNo) => {
    cy.get('.row > :nth-child(1) > .form-control')
        .type("test Personnel").type(textNo)
}
const taxAddHeedEmployee1 = (textNo) => {
    cy.get(':nth-child(5) > .form-control')
        .type("test Personnel").type(textNo)
}
const taxAddHeedEmployee2 = (textNo) => {
    cy.get(':nth-child(3) > .form-control')
        .type("test Personnel").type(textNo).type("@gmail.com")

}
const taxAddHeedEmployee3 = (textNo) => {
    cy.get(':nth-child(4) > .form-control')
        .type(textNo)
}
const taxAddHeedEmployee4 = (textNo) => {
    cy.get(':nth-child(7) > .form-control')
        .type("ดาวพลูโต").type(textNo)
}