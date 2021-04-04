/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add Products Edit", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Add Products Edit", () => {
        AddProductsEdit("MNY-ADMIN-1", "MNYadmin1")
        AddProductsEdit1()
        CheckAddProductsEdit()
        EditProducts()
        CheckEditProducts()
    })
})
const AddProductsEdit = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เพิ่มสินค้า
const AddProductsEdit1 = () => {
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "E-Catalog")
    cy.get('.nuxt-link-exact-active > .el-menu-item').click()
    cy.get('.col-xl > .order-1 > .btn').click()
    cy.get('h4').should("contain.text", "เพิ่มสินค้า / Add Inventory")
    cy.get('#input_nameInventory').type("หมีพลู")
    cy.get('#input_fitmentDetail').click().type("{downarrow}{downarrow}{downarrow}{enter}")
    taxAddProductsEdit1(getRandomNumberAddProductsEdit1(0,0))
    taxAddProductsEdit2(getRandomNumberAddProductsEdit1(0,0))
    taxAddProductsEdit3(getRandomNumberAddProductsEdit1(0,0))
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
const CheckAddProductsEdit = () => {
    cy.get('h4').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').type("หมีพลู")
    cy.get('.pr-lg-0 > .btn').click()
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "หมีพลู")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "พลู")
}
// แก้ไขสินค้าที่เพิ่มใหม่
const EditProducts = () => {
    cy.get('#inventorys-0 > :nth-child(4) > .btn-table-warpper > [data-target="#ProductDetail"] > img')
        .click()
    cy.get('.btn-warning').click()
    cy.get(':nth-child(1) > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("(น่ารัก)")
    cy.get(':nth-child(3) > .form-control').type("(พลู พลู น่ารัก)")
    cy.get(':nth-child(4) > :nth-child(2) > .form-control').clear().type("300")
    cy.get('.modal-dialog-centered > :nth-child(1) > .modal-footer > .btn-confirm')
        .click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "แก้ไขสินค้าเสร็จสิ้น")
    cy.get('.swal2-confirm').click()

}
// ตรวจเช็คสินค้าที่ทำการแก้ไขข้อมูลใหม่
const CheckEditProducts = () => {
    cy.get('h4').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').type("หมีพลู")
    cy.get('.pr-lg-0 > .btn').click()
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "หมีพลู(น่ารัก)")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "พลู(พลู พลู น่ารัก)")
}


const getRandomNumberAddProductsEdit1 = (min, max) => {
    0,0
    return Math.random() * (max - min) + min;
}
const taxAddProductsEdit1 = (textNo) => {
    cy.get('#input_serialNo').type(textNo)
}

const taxAddProductsEdit2 = (textNo) => {
    cy.get('#input_manufacturerNo').type(textNo)
}
const taxAddProductsEdit3 = (textNo) => {
    cy.get('#input_oeNo').type(textNo)
}

// เลขสินค้า จำเป็นต้องเป็นศูนย์เพราะ ตัวเลขสินค้าที่เพิ่มแบบธรรมดาจะเรียงแบบ น้อยไปมาก 

