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
    // เช็คเลขกำกับภาษีที่มีในระบบ
    it("Add-Buy-Tax case tax no dub", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        AddBuyTransfer()
        Datatransfer()
        tax(textNo)
        cy.get(':nth-child(1) > .text-price').should("contain.text", "เลขใบกำกับภาษีนี้มีในระบบแล้ว")
    })

    // ข้อมูลสินค้าและราคาแบบบวกภาษี PO
    it("Add-Buy-Tax/transfer-PO", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        AddBuyTransfer0()
        Datatransfer()
        tax(getRandomArbitrary(1, 99999999999999999))
        AddBuyTransfer2()
    })
    // ข้อมูลสินค้าและราคาแบบไม่บวกภาษี PO
    it("Add-Buy-NoTax/transfer-PO", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        AddBuyTransfer0()
        Datatransfer()
        tax(getRandomArbitrary(1, 99999999999999999))
        AddBuyTransfer2()
    })
    // ข้อมูลสินค้าและราคาแบบบวกภาษี RO
    it("Add-Buy-Tax/transfer-RO", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        AddBuyTransfer1()
        Datatransfer()
        tax(getRandomArbitrary(1, 99999999999999999))
        AddBuyTransfer2()
    })
    // ข้อมูลสินค้าและราคาแบบไม่บวกภาษี RO
    it("Add-Buy-NoTax/transfer-RO", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        AddBuyTransfer1()
        Datatransfer()
        tax(getRandomArbitrary(1, 99999999999999999))
        AddBuyTransfer2()
    })

})

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
// เช็คสินค้าที่มีเลขกำกับภาษีในระบบ
const AddBuyTransfer = () => {
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab').click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("ผ้าดิสเบรค").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.mt-3 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("BENDIX")
    cy.get('.form-group > .mt-2 > .el-input__inner').type("1111").tab()
    cy.get('.inline-input > .el-input__inner').type("1150").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.text-right > .btn-confirm').click()
}
// ราคาสินค้า
const Datatransfer = () => {
    const products = [
        {
            price: 50,
            qty: 2,
            percentage1: 10,
            percentage2: 10
        },
        // {
        //     price: 100,
        //     qty: 2,
        //     percentage1: 5,
        //     percentage2: 5,
        // }
    ]
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[0].qty)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > .el-input > .el-input__inner')
        .clear().type(products[0].price)
    // cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner').clear().type(products[1].qty)
    // cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control').type(products[1].percentage1)
    // cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control').type(products[1].percentage2)
    // cy.get('#products-1 > [style="width: 150px;"] > .el-input > .el-input__inner').type(products[1].price)

    cy.get('.col-md-5').click({ force: true })

    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)
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

const Transfer = () => {
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab').click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("ผ้าดิสเบรค").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.mt-3 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("BENDIX")
    cy.get('.form-group > .mt-2 > .el-input__inner').type("1111").tab()
    cy.get('.inline-input > .el-input__inner').type("1150").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.text-right > .btn-confirm').click()
}

const getRandomArbitrary = (min, max) => {
    1, 99999999999999999
    return Math.random() * (max - min) + min;
}

// สินค้า PO
const AddBuyTransfer0 = () => {
    cy.get('.box-add-product > .row > :nth-child(1) > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('#inventory > .form-group > .form-control').type("11")
    cy.get('#inventory > [style="overflow: auto;"] > .table > tbody > :nth-child(2) > td > .btn')
        .click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-header > .close')
        .click()

}

// สินค้า RO
const AddBuyTransfer1 = () => {
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("ผ้าดิสเบรค").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.mt-3 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("BENDIX")
    cy.get('.form-group > .mt-2 > .el-input__inner').type("1111").tab()
    cy.get('.inline-input > .el-input__inner').type("1150").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.text-right > .btn-confirm').click()
}
// ราคารวมภาษี,สถานะการจ่ายแบบโอน,ตรวจเช็ค
const AddBuyTransfer2 = () => {
    cy.get(':nth-child(3) > .row > :nth-child(1) > .btn').click()
    cy.get('.el-switch__core').click()
    cy.get('.pt-3 > div > .btn').click()
    cy.get('.box-price > .row > :nth-child(2) > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.get('.el-link--inner').click()
    cy.get('#orders-1 > :nth-child(5) > .justify-content-center > .status-border')
        .should("contain.text", "รายการเสร็จสิ้น")
    cy.get('#orders-0 > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > .status-border').should("contain.text", " รายการเสร็จสิ้น")
}