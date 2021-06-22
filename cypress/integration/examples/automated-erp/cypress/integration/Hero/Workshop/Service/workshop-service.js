/// <reference types="cypress" />


context("Service", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add Service", () => {
        loginWorkshop("empGrip01", "password")
        // AddService()
        checkservice()
    })
})
const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

// เข้ารายการ บริการ
const AddService = () => {
    cy.get('#nav-item-5 > ').click()

    // เพิ่มบริการ
    cy.get('.el-button').click()

    // รายละเอียดบริการ
    taxAddService(getRandomAddService(1, 3))
    cy.get('#price').type("150")
    taxAddService1(getRandomAddService(1, 3))

    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}

// เช็คบริการที่เพิ่มใหม่
const checkservice = () => {
    cy.get('#nav-item-5 > ').click()

    cy.get('#servicename').click().type("test")

    cy.get('label').click()
    cy.get('label').click()
    cy.wait(500)

    cy.get('tbody > tr > :nth-child(1)').contains("test")
    cy.get(':nth-child(1) > .text-center > .btn').click()


    cy.get('.mr-5').click()

}

const getRandomAddService = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddService = (textNo) => {
    cy.get('#state-name')
        .type("test Service").type(textNo)
}
const taxAddService1 = (textNo) => {
    cy.get('#description')
        .type("test Service").type(textNo)
}

