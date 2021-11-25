/// <reference types="cypress" />


context("Add Products", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Add Products", () => {
        AddProducts("MNY-ADMIN-test", "MNYadmin1")
        AddProducts1()
        CheckAddProducts()
    })
})
const AddProducts = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เพิ่มสินค้า
const AddProducts1 = () => {
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "E-Catalog")
    cy.get('.nuxt-link-exact-active > .el-menu-item').click()
    cy.get('.col-xl > .order-1 > .btn').click()
    cy.get('h4').should("contain.text", "เพิ่มสินค้า / Add Inventory")
    cy.get('#input_nameInventory').click({ force: true }).type("หมีพลู")
    cy.get('#input_fitmentDetail').click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    taxAddProducts1(getRandomNumberAddProducts1(0, 10))
    taxAddProducts2(getRandomNumberAddProducts1(0, 10))
    taxAddProducts3(getRandomNumberAddProducts1(0, 10))
    cy.get('#input_discountSubCode').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#input_discountSubCode').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#input_oeNo').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#input_brand').type("พลู")
    cy.get('#input_stockUom').click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carbrand').click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carbrand').click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carmodel').click({ force: true }).type("{downarrow}{downarrow}{enter}")
    cy.get('#input_Carmodel').click({ force: true }).type("{downarrow}{downarrow}{enter}")
    cy.get('#input_Carnickname').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#input_Carnickname').click({ force: true }).type("{downarrow}{enter}")
    cy.get('#cc').clear().type("150")
    cy.get('#input_Price').clear().type("200")
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
}

// เช็คสินค้าที่เพิ่มใหม่
const CheckAddProducts = () => {
    cy.get('.CardheadTitle > h3').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').type("หมีพลู")
    cy.get('.pr-lg-0 > .btn').click()
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "หมีพลู")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "พลู")


}

const getRandomNumberAddProducts1 = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddProducts1 = (textNo) => {
    cy.get('#input_serialNo').click({ force: true }).type(textNo)
}

const taxAddProducts2 = (textNo) => {
    cy.get('#input_manufacturerNo').click({ force: true }).type(textNo)
}
const taxAddProducts3 = (textNo) => {
    cy.get('#input_oeNo').click({ force: true }).type(textNo)
}


