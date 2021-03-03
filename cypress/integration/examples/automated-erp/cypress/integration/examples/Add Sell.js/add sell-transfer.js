/// <reference types="cypress" />

// let textNo

Cypress.config('defaultCommandTimeout', 100000)
context("AddsellTax-transfer", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // it("getLatestTaxNo", () => {
    //     getLatestTaxNo()
    // })
    it("AddsellTax-transfer", () => {
        login("retail-CRR", "password")
        sell()
        sell1()
        selltexTransfer()
    })

    it("AddsellTax-transfer1", () => {
        login("retail-CRR", "password")
        sell()
        sell1()
        selltexTransfer1()
    })
})

// ข้อมูลสินค้าที่เลือกซื้อ
const sell = () => {
    cy.get(':nth-child(1) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click({ force: true })
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("ก้ามเบรค").tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("GIRLING").tab()
    cy.get('.form-group > .mt-2 > .el-input__inner').type("456").tab().tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("OTHER BRAND").tab().type("CROWN").tab().type("โฉมปี 1959-1967 (MARK I)")
    cy.get('.text-right > .btn-confirm').click()
}

// ข้อมูลราคาของสินค้าที่เลือก
const sell1 = () => {
    const products = [
        {
            price: 5,
            qty: 100,
            percentage1: 10,
            percentage2: 10
        },
        // {
        //     price: 10,
        //     qty: 100,
        //     percentage1: 5,
        //     percentage2: 5,
        // }
    ]
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[0].price)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > :nth-child(2) > .el-input__inner')
        .clear().type(products[0].qty)

    // วิธีเช็คจำนวนเงินของสินค้า
    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)

}
// ข้อมูลลูกค้าและราคาสินค้ารวมภาษี
const selltexTransfer = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.box-price > .row > :nth-child(2) > .btn').click()
    cy.get('.payment-box > img').click()
    cy.get('#paymentModal > .modal-dialog > .modal-content > .modal-footer > .btn-confirm').click()
    cy.get('.swal2-confirm').click()
    cy.get('#validateInventoryModal > .modal-dialog > .modal-content > .modal-footer > .btn-reset').click()
}

// ข้อมูลลูกค้าและราคาสินค้าไม่รวมภาษี
const selltexTransfer1 = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(2) > .btn').click()
    cy.get('.box-price > .row > :nth-child(2) > .btn').click()
    cy.get('.payment-box > img').click()
    cy.get('#paymentModal > .modal-dialog > .modal-content > .modal-footer > .btn-confirm').click()
    cy.get('.swal2-confirm').click()
    cy.get('#validateInventoryModal > .modal-dialog > .modal-content > .modal-footer > .btn-reset').click()
}




const login = (username, password) => {
    // exampleExpect()
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

// const getLatestTaxNo = () => {
//     login("retail-CRR", "password")
//     cy.get(':nth-child(2) > .col-12 > .mt-4').click()
//     cy.get('#orders-0 > :nth-child(1) > a').click()
//     cy.get(':nth-child(1) > :nth-child(4) > .form-control').invoke('val')
//         .then(sometext => {
//             textNo = sometext
//         });
// }


