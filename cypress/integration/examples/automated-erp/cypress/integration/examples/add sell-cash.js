/// <reference types="cypress" />

let textNo

Cypress.config('defaultCommandTimeout', 100000)
context("add-buy-Tax-transfer", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("getLatestTaxNo", () => {
        getLatestTaxNo()
    })
    it("Add-Buy-Tax case tax no dub", () => {
        login("retail-CRR", "password")
        sellcash()
        sellcash1()
        selltex()
        // tax(textNo)
        // cy.get(':nth-child(1) > .text-price').should("contain.text", "เลขใบกำกับภาษีนี้มีในระบบแล้ว")
    })
})

// ข้อมูลสินค้าที่เลือกซื้อ
const sellcash = () => {
    cy.get(':nth-child(1) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
    cy.get('.box-add-product > .row > :nth-child(1) > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('#inventory > .form-group > .form-control')
        .type("ยาง")
    cy.get(':nth-child(1) > td > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-header > .close').click()
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("ก้ามเบรค").tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("GIRLING").tab()
    cy.get('.form-group > .mt-2 > .el-input__inner').type("456").tab().tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("OTHER BRAND").tab().type("CROWN").tab().type("โฉมปี 1959-1967 (MARK I)")
    cy.get('.text-right > .btn-confirm').click()
}

// ข้อมูลราคาของสินค้าที่เลือก
const sellcash1 = () => {
    const products = [
        {
            price: 5,
            qty: 100,
            percentage1: 10,
            percentage2: 10
        },
        {
            price: 10,
            qty: 100,
            percentage1: 5,
            percentage2: 5,
        }
    ]
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[0].price)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > :nth-child(2) > .el-input__inner')
        .clear().type(products[0].qty)

    cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[1].price)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[1].percentage1)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[1].percentage2)
    cy.get('#products-1 > [style="width: 150px;"] > :nth-child(2) > .el-input__inner')
        .clear().type(products[1].qty)


    //     let totalPrice = 0
    //     products.map(product => {
    //         totalPrice += product.qty * product.price
    //     })
    //     // totalPrice = totalPrice
    //     cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)

}
// ข้อมูลลูกค้าและภาษี
const selltex = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.el-switch__core').click()
    cy.get('.box-price > .row > :nth-child(1) > .btn').click()
    cy.get(':nth-child(8) > .number-box > h1').click({ force: true })
    cy.get('.col-8 > .number-box > h1').click({ force: true })
    cy.get('.col-8 > .number-box > h1').click({ force: true })
    cy.get('.col-8 > .number-box > h1').click({ force: true })
    cy.get(':nth-child(3) > :nth-child(1) > .number-box > h1').click()
    cy.get('.swal2-confirm').click()
}

const tax = (textNo) => {
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control').clear()
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner').click()
        .type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control')
        .type(textNo)
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .click()

}

const login = (username, password) => {
    // exampleExpect()
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

const AddBuyTransfer = () => {
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab').click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("ผ้าดิสเบรค").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.mt-3 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("BENDIX")
    cy.get('.form-group > .mt-2 > .el-input__inner').type("1111").tab()
    cy.get('.inline-input > .el-input__inner').type("1150").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.text-right > .btn-confirm').click()
    cy.get('#validateInventoryModal > .modal-dialog > .modal-content > .modal-footer > .btn-reset').click()
}


const getLatestTaxNo = () => {
    login("retail-CRR", "password")
    cy.get(':nth-child(2) > .col-12 > .mt-4').click()
    cy.get('#orders-0 > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').invoke('val')
        .then(sometext => {
            textNo = sometext
        });
}



const getRandomArbitrary = (min, max) => {
    1, 99999999999999999
    return Math.random() * (max - min) + min;
}