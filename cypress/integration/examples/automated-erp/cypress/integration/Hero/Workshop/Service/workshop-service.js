/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Service", () => {
    beforeEach(() => {
        cy.visit("https://hero.autopair.co/")
    })
    it("Add Service", () => {
        loginWorkshop("empGrip01", "password")
        AddService()
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
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการซื้อ")
    cy.get(':nth-child(7) > .nav-link > .row > h6').click()

    // เพิ่มบริการ
    cy.get('h3[data-v-56f9da8c=""]').should("contain.text", "บริการ")
    cy.get('.el-button').click()

    // รายละเอียดบริการ
    cy.get('h3').should("contain.text", "เพิ่มบริการ")
    cy.get(':nth-child(1) > .form-label').should("contain.text", "ชื่อบริการ")
    taxAddService(getRandomAddService(1, 3))
    cy.get(':nth-child(2) > .form-label').should("contain.text", "ราคาบริการ")
    cy.get('#__BVID__83').type("150")
    cy.get('.col-lg-12 > .form-label').should("contain.text", "รายละเอียดบริการ")
    taxAddService1(getRandomAddService(1, 3))

    cy.get(':nth-child(2) > .btn').should("contain.text", "เพิ่มบริการ")
    cy.get(':nth-child(2) > .btn').click()

    cy.get('#swal2-title').should("contain.text", "เพิ่มบริการสำเร็จ")
    cy.get('.swal2-confirm').should("contain.text", "ตกลง")
    cy.get('.swal2-confirm').click()

}

// เช็คบริการที่เพิ่มใหม่
const checkservice = () => {
    cy.get('h3[data-v-56f9da8c=""]').should("contain.text", "บริการ")
    cy.get('#__BVID__87__BV_label_').should("contain.text", "ค้นหาบริการ")
    cy.get('#__BVID__88').click().type("test")
    cy.get('h3[data-v-56f9da8c=""]').click()
    cy.get('h3[data-v-56f9da8c=""]').click()
    cy.get('.col-xl-2 > .btn').click()

}

const getRandomAddService = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddService = (textNo) => {
    cy.get('#__BVID__82')
            .type("test Service").type(textNo)
}
const taxAddService1 = (textNo) => {
    cy.get('.el-textarea__inner')
        .type("test Service").type(textNo)
}

