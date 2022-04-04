/// <reference types="cypress" />

context("edit products", () => {
    it("edit products", () => {
        cy.loginMNY("MNY-ADMIN", "MNYadmin1")

        add_products()
        check_products()
        edit_products()
        check_products1()
    })
})
const AddProductsEdit = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เพิ่มสินค้า
const add_products = () => {
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "E-Catalog")
    cy.get('.nuxt-link-exact-active > .el-menu-item').click({ force: true })
    cy.get('.col-xl > .order-1 > .btn').click({ force: true })
    cy.get('h4').should("contain.text", "เพิ่มสินค้า / Add Inventory")
    cy.get('#input_nameInventory').click({ force: true }).type("หมีพลู")
    taxAddProductsEdit1(getRandomNumberAddProductsEdit1(0, 1))
    taxAddProductsEdit2(getRandomNumberAddProductsEdit1(0, 1))
    taxAddProductsEdit3(getRandomNumberAddProductsEdit1(0, 1))
    cy.get('#input_fitmentDetail').click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}")
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
    cy.get('.swal2-confirm').click({ force: true })
}

// เช็คสินค้าที่เพิ่มใหม่
const check_products = () => {
    // cy.get('h4').should("contain.text", "รายการสินค้า")
    cy.get('.calculator-form > .el-input__inner').click({ force: true }).type("หมีพลู", { force: true })
    cy.wait(500)
    cy.get('.pr-lg-0 > .btn').click({ force: true })
    cy.wait(500)
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "หมีพลู")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "พลู")
}
// แก้ไขสินค้าที่เพิ่มใหม่
const edit_products = () => {
    cy.get('#inventorys-0 > :nth-child(4) > .btn-table-warpper > [data-target="#ProductDetail"] > img')
        .click({ force: true })
    cy.get('.btn-warning').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("(น่ารัก)")
    cy.get(':nth-child(3) > .form-control').type("(พลู พลู น่ารัก)")
    cy.get(':nth-child(4) > :nth-child(2) > .form-control').clear().type("300")
    cy.get('.modal-dialog-centered > :nth-child(1) > .modal-footer > .btn-confirm')
        .click({ force: true })
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "แก้ไขสินค้าเสร็จสิ้น")
    cy.get('.swal2-confirm').click({ force: true })

}
// ตรวจเช็คสินค้าที่ทำการแก้ไขข้อมูลใหม่
const check_products1 = () => {
    cy.get('.calculator-form > .el-input__inner').click({ force: true }).type("หมีพลู", { force: true })
    cy.wait(500)
    cy.get('.pr-lg-0 > .btn').click({ force: true })
    cy.wait(500)
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "หมีพลู(น่ารัก)")
    cy.get('tbody > #inventorys-0 > :nth-child(1)').should("contain.text", "พลู(พลู พลู น่ารัก)")
}


const getRandomNumberAddProductsEdit1 = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddProductsEdit1 = (textNo) => {
    cy.get('#input_serialNo').click({ force: true }).type(textNo)
}

const taxAddProductsEdit2 = (textNo) => {
    cy.get('#input_manufacturerNo').click({ force: true }).type(textNo)
}
const taxAddProductsEdit3 = (textNo) => {
    cy.get('#input_oeNo').click({ force: true }).type(textNo)
}

// เลขสินค้า จำเป็นต้องเป็นศูนย์เพราะ ตัวเลขสินค้าที่เพิ่มแบบธรรมดาจะเรียงแบบ น้อยไปมาก 

