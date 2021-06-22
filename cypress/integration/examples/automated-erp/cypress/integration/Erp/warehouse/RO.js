/// <reference types="cypress" />


context("Warehouse Add RO", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // เพิ่มสินค้า 
    it("Add RO", () => {
        loginRO("retail-CRR", "password")
        RO1()
        RO2()
        RO3()
        RO4()
    })
})

const loginRO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เข้าคลังสินค้า
const RO1 = () => {
    cy.get(':nth-child(3) > .col-12 > .mt-4').click()
    cy.get('.header-wrapper > h4').should("contain.text", "คลังสินค้า / Inventory")
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "คลังสินค้า")
}

// เพิ่มสินค้า RO
const RO2 = () => {
    cy.get('.form-group > [href="/retailer/inventory/addinventory"] > .btn').click()
    cy.get('.col-sm-12 > h4').should("contain.text", "เพิ่มสินค้าเข้าคลัง / Add Inventory")
        .should("contain.text", "เพิ่มสินค้าเข้าคลัง / Add Inventory")
    cy.get('[style="flex-basis: 50%; margin-right: 0px;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('.row > :nth-child(1) > h5').should("contain.text", "รายละเอียดสินค้า Item Code ")
    cy.get('.col-md-4 > .el-autocomplete > .el-input > .el-input__inner').type("ล้อ")
    cy.get('.col-md-2 > .el-select > .el-input > .el-input__inner').click().type("{downarrow}{enter}")
    cy.get('.col-md-6 > .el-autocomplete > .el-input > .el-input__inner').type("A")
    cy.get(':nth-child(1) > .mt-2 > .el-input__inner').type("11002")
    cy.get('.pl-5 > .mt-2 > .el-input__inner').type("02")
    cy.get('.el-textarea__inner').type("จำนวนจำกัด")
    cy.get('.pr-5 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12 > .btn-search').click()
}
// จำนวนแล้วราคาสินค้า RO
const RO3 = () => {
    cy.get('h4').should("contain.text", "เพิ่มสินค้าเข้าคลัง / Add Inventory")
    cy.get('[style="flex-basis: 50%; margin-right: 0px;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดสินค้า")
    cy.get('[style="flex-basis: 50%; max-width: 50%;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดราคา")
    cy.get('h5').should("contain.text", "รายละเอียดราคา")
    cy.get(':nth-child(2) > :nth-child(1) > .mt-2 > .el-input__inner').type("50")
    cy.get('.btn-confirm').click()
    cy.get('#swal2-title').should("contain.text","สำเร็จ")
    cy.get('#swal2-content').should("contain.text","เพิ่มสินค้าเข้าคลังเสร็จสิ้น")
    cy.get('.swal2-confirm').click()

}
// เช็คสินค้าว่าเข้าคลังหรือเปล่า ....
const RO4 = () => {
    cy.get('.el-autocomplete > .el-input > .el-input__inner').type("ล้อ")
    cy.get('.header-wrapper').click()
}