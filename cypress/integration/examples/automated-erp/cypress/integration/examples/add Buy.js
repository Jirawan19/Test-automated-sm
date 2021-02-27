/// <reference types="cypress" />

// const { without } = require("cypress/types/lodash")

Cypress.config('defaultCommandTimeout', 100000)
context("add-buy-Tax", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    it("Add-Buy-Tax", () => {
        login("retail-CRR", "password")
        cy.get(':nth-child(2) > .col-12 > .mt-4').click()
        cy.get(':nth-child(2) > .form-group > a > .btn').click()
        cy.get('.box-add-product > .row > :nth-child(2) > .btn').click()
        cy.get('#atp > .form-group > .form-control').type("11", { force: true })
        cy.get(':nth-child(1) > td > .btn').click({ force: true })
        cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        AddBuy()
        Dats()
    })
})

const login = (username, password) => {
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


const Dats = () => { 
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner').clear().type("3")
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control').type("5")
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control').type("5")
    cy.get('#products-0 > [style="width: 150px;"] > .el-input > .el-input__inner').type("100")
    cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner').clear().type("2")
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control').type("10")
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control').type("10")
    cy.get('#products-1 > [style="width: 150px;"] > .el-input > .el-input__inner').type("200")
    cy.get('.col-md-5 > :nth-child(1) > :nth-child(1) > .form-control').click()
    //ToDo เขียนตรวจสอบ ควรจะเป็นอย่างไร ตัวเลขต้องถูกต้อง
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
    .type("{downarrow}{downarrow}{enter}")
}

// cy.get(':nth-child(4) > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').click().tab().type("{downarrow}{downarrow}{downarrow}{enter}")
