/// <reference types="cypress" />

context("manage_Employee", () => {
    it("manage_Employee", () => {
        cy.loginMNY("nd-admin", "ndAdmin1")
        // เพิ่มพนักงานขาย
        seller()
        cy.pause()
        // เพิ่มหัวหน้าพนักงานขาย
        admin()
    })
})

const seller = () => {
    cy.get('[href="/supplier/management"] > .el-menu-item > .menu-text').click({ force: true })
    cy.get('#employee > .mb-2 > .col-xl-auto > .order-1 > .btn').click({ force: true })

    taxAddEmployee01(getRandomAddEmployee(0, 1))
    cy.get('.el-input__inner').click().type("{downarrow}{downarrow}{enter}")
    taxAddEmployee02(getRandomAddEmployee(0, 1))
    taxAddEmployee03(getRandomAddEmployee(0, 1))
    taxAddEmployee04(getRandomAddEmployee(0, 1))
    taxAddEmployee05(getRandomAddEmployee(0, 1))

    cy.get(':nth-child(7) > .form-control').type("พหลฯ")

    cy.get(':nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()

    ckeck_seller()
}
const getRandomAddEmployee = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddEmployee01 = (textNo) => {
    cy.get(':nth-child(1) > .form-control').type("test-seller01").type(textNo)
}
const taxAddEmployee02 = (textNo) => {
    cy.get(':nth-child(3) > .form-control').type("test-seller01").type(textNo)
}
const taxAddEmployee03 = (textNo) => {
    cy.get(':nth-child(4) > .form-control').type("test-seller01").type(textNo)
}
const taxAddEmployee04 = (textNo) => {
    cy.get(':nth-child(5) > .form-control').type("test-seller01").type(textNo)
}
const taxAddEmployee05 = (textNo) => {
    cy.get(':nth-child(6) > .form-control').type(textNo)
}
const ckeck_seller = () => {
    cy.wait(1000)
    cy.get('#employee > .paginate-margin > div > .pagination > :nth-child(7) > .page-link').click({ force: true })
    cy.wait(500)
}
const admin = () => {
    cy.get('[href="/supplier/management"] > .el-menu-item > .menu-text').click({ force: true })
    cy.get('#employee > .mb-2 > .col-xl-auto > .order-1 > .btn').click({ force: true })

    taxAddEmployee06(getRandomAddEmployee(0, 1))
    cy.get('.el-input__inner').click().type("{downarrow}{enter}")
    taxAddEmployee07(getRandomAddEmployee(0, 1))
    taxAddEmployee08(getRandomAddEmployee(0, 1))
    taxAddEmployee09(getRandomAddEmployee(0, 1))
    taxAddEmployee10(getRandomAddEmployee(0, 1))

    cy.get(':nth-child(7) > .form-control').type("พหลฯ")

    cy.get(':nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()

    ckeck_sellerAdmin()
}
const taxAddEmployee06 = (textNo) => {
    cy.get(':nth-child(1) > .form-control').type("test-admin").type(textNo)
}
const taxAddEmployee07 = (textNo) => {
    cy.get(':nth-child(3) > .form-control').type("test-admin").type(textNo)
}
const taxAddEmployee08 = (textNo) => {
    cy.get(':nth-child(4) > .form-control').type("test-admin").type(textNo)
}
const taxAddEmployee09 = (textNo) => {
    cy.get(':nth-child(5) > .form-control').type("test-admin").type(textNo)
}
const taxAddEmployee10 = (textNo) => {
    cy.get(':nth-child(6) > .form-control').type(textNo)
}
const ckeck_sellerAdmin = () => {
    cy.wait(1000)
    cy.get('#employee > .paginate-margin > div > .pagination > :nth-child(7) > .page-link').click({ force: true })
    cy.wait(500)
}