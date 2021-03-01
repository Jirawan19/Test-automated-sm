/// <reference types="cypress" />

// const { without } = require("cypress/types/lodash")
let textNo

Cypress.config('defaultCommandTimeout', 999999)
context("add-buy-Tax", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("getLatestTaxNo", () => {
        getLatestTaxNo()
    })

    it("Add-Buy-Tax case tax no dub", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        cy.get('.box-add-product > .row > :nth-child(2) > .btn').click({ force: true })
        cy.get('#atp > .form-group > .form-control').type("11", { force: true })
        cy.get(':nth-child(1) > td > .btn').click({ force: true })
        cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        AddBuy()
        Data()
        tax(textNo)
        cy.get(':nth-child(1) > .text-price').should("contain.text", "เลขใบกำกับภาษีนี้มีในระบบแล้ว")
    })

    it("Add-Buy-Tax", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get('.nuxt-link-active > .el-menu-item > .menu-text').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        cy.get('.box-add-product > .row > :nth-child(2) > .btn').click({ force: true })
        cy.get('#atp > .form-group > .form-control').type("11", { force: true })
        cy.get(':nth-child(1) > td > .btn').click({ force: true })
        cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        AddBuy()
        Data()
        tax(getRandomArbitrary(1,99999999999999999))
        cy.get(':nth-child(3) > .row > :nth-child(1) > .btn').click()
        cy.get('.el-switch__core').click()
        cy.get('.pt-3 > div > .btn').click()
        cy.get('.swal2-confirm').click()
    })
})
const getLatestTaxNo = () => {
    login("retail-CRR", "password")
    cy.get(':nth-child(2) > .col-12 > .mt-4').click()
    cy.get('#orders-0 > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > :nth-child(4) > .form-control').invoke('val')
        .then(sometext => {
            textNo = sometext
        });
}

// วิธีเช็ค
const exampleExpect = () => {

    // cy.get('strong').then(rs => {
    //     // console.log(rs);
    //     expect(rs[0].outerHTML)
    //         .eq('<strong data-v-9fea38fc="">สำหรับ Retailer และ Supplier</strong>')
    // })

    // cy.get('strong').contains("สำหรับ Retailer และ Supplier")

    // cy.get('strong').should("contain.text", "สำหรับ Retailer และ Supplier")
    // const customer = {
    //     name: "in",
    //     age: 26
    // }
    // cy.wrap(customer).its("name").should("eq", "in")
    // cy.wrap(customer).its("age").should("eq", 26)
    // cy.wrap(customer).should("deep.equal", {
    //     name: "in",
    //     age: 26
    // })
}

const login = (username, password) => {
    // exampleExpect()
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

const AddBuy = () => {
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab').click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner')
        .type("ผ้าดิสเบรค").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.mt-3 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("BENDIX")
    cy.get('.form-group > .mt-2 > .el-input__inner').type("1111").tab()
    cy.get('.inline-input > .el-input__inner').type("1150").tab().type("{downarrow}{downarrow}{enter}")
    cy.get('.text-right > .btn-confirm').click()
}

// ข้อมูลจำนวนชิ้น,ราคา และนำตัวแปลไปใส่แทนที่ตัวเลข
const Data = () => {
    const products = [
        {
            price: 100,
            qty: 3,
            percentage1: 5,
            percentage2: 5
        },
        {
            price: 200,
            qty: 2,
            percentage1: 5,
            percentage2: 5,
        }
    ]
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner').clear().type(products[0].qty)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control').type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control').type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > .el-input > .el-input__inner').type(products[0].price)
    cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner').clear().type(products[1].qty)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control').type(products[1].percentage1)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control').type(products[1].percentage2)
    cy.get('#products-1 > [style="width: 150px;"] > .el-input > .el-input__inner').type(products[1].price)
    cy.get('.col-md-5').click({ force: true })
    // cy.get('.el-switch__core').click({ force: true }) 

    // วิธีหาผลลัพธ์ ราคาและเปอร์เซ็น
    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    // วิธีเช็ค 
    totalPrice = totalPrice.toFixed(2)
    // แบบที่1
    cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)

    // แบบที่2 (แนะนำ วิธีนี้ใช้ run in test)
    // cy.get(':nth-child(1) > .row > .text-right > h5').should(rs => {
    //     expect(rs[0].outerHTML).eq('<h5 data-v-43e18a8c=""> ' + totalPrice + ' บาท</h5>')
    // })
}

const tax = (notax) => {
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control').clear()
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner').click()
        .type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control')
        .type(textNo)
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .click()

}

const getRandomArbitrary = (min, max) => {1,99999999999999999
    return Math.random() * (max - min) + min;
}




