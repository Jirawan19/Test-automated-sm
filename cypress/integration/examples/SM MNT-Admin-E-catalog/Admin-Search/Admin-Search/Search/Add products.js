/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add Products", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Add Products", () => {
        AddProducts("MNY-ADMIN-1", "MNYadmin1")
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
    cy.get('#input_nameInventory').type("หมีพลู")
    cy.get('#input_fitmentDetail').click().type("{downarrow}{downarrow}{downarrow}{enter}")
    taxAddProducts1(getRandomNumberAddProducts1(0,0))
    taxAddProducts2(getRandomNumberAddProducts1(0,0))
    taxAddProducts3(getRandomNumberAddProducts1(0,0))
    cy.get('#input_discountSubCode').click().type("{downarrow}{enter}")
    cy.get('#input_discountSubCode').click().type("{downarrow}{enter}")
    cy.get('#input_oeNo').click().type("{downarrow}{enter}")
    cy.get('#input_brand').type("พลู")
    cy.get('#input_stockUom').click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carbrand').click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carbrand').click().type("{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('#input_Carmodel').click().type("{downarrow}{downarrow}{enter}")
    cy.get('#input_Carmodel').click().type("{downarrow}{downarrow}{enter}")
    cy.get('#input_Carnickname').click().type("{downarrow}{enter}")
    cy.get('#input_Carnickname').click().type("{downarrow}{enter}")
    cy.get('#cc').clear().type("150")
    cy.get('#input_Price').clear().type("200")
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('.swal2-confirm').click()
}

// เช็คสินค้าที่เพิ่มใหม่
const CheckAddProducts = () => {
    cy.get('h4').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').type("หมีพลู")
    cy.get('.pr-lg-0 > .btn').click()
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text","หมีพลู")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text","พลู")


}

const getRandomNumberAddProducts1 = (min, max) => {
    0,0
    return Math.random() * (max - min) + min;
}
const taxAddProducts1 = (textNo) => {
    cy.get('#input_serialNo').type(textNo)
}

const taxAddProducts2 = (textNo) => {
    cy.get('#input_manufacturerNo').type(textNo)
}
const taxAddProducts3 = (textNo) => {
    cy.get('#input_oeNo').type(textNo)
}


