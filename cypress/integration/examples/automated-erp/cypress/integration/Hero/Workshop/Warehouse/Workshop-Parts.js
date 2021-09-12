/// <reference types="cypress" />


context("Warehouse", () => {
    it("Parts", () => {
        cy.login("empGrip01", "password")
        Parts()
        Parts1()
        confimeParts()
    })
})

// กรอกรายละเอียดสินค้า
const Parts = () => {
    cy.get('#nav-item-7')
        .click()
    cy.get('#tab-inventory')
        .click()
    cy.get('#btn-addInventory')
        .click()
    cy.get('#tab-PART').click({ force: true })


    taxParts(getRandomNumberParts(1, 10))
    cy.get('#fitmentDetail')
        .click().type("{downarrow}{enter}")
    taxParts1(getRandomNumberParts(1, 10))
    taxParts2(getRandomNumberParts(1, 10))
    taxParts3(getRandomNumberParts(1, 10))
    cy.get('#itemDescription')
        .type("test")

    cy.get('#btnNextPart')
        .click()
}

const getRandomNumberParts = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}

const taxParts = (textNo) => {
    cy.get('#itemName')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts1 = (textNo) => {
    cy.get('#brand')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts2 = (textNo) => {
    cy.get('#manufacturerNo')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts3 = (textNo) => {
    cy.get('#oeNo')
        .type("เพิ่มอะไหล่").type(textNo)
}

// รายละเอียดราคา
const Parts1 = () => {
    cy.get('#amountRemainStock')
        .clear().type("10")
    cy.get('#unit')
        .click().type("{downarrow}{enter}")
    cy.get(':nth-child(3) > .mt-2 > #salesPricePart')
        .clear().type("200")
    cy.get(':nth-child(4) > .mt-2 > #salesPricePart')
        .clear().type("150")
    cy.get('#btnsaveInventoryPart')
        .click()
}

// ยืนยันเพิ่มสินค้า
const confimeParts = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-PART').click()
}
