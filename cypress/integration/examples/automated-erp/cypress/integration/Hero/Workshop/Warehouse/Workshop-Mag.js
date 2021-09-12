/// <reference types="cypress" />


context("Warehouse", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Mag", () => {
        cy.login("empGrip01", "password")
        Mag()
        Mag1()
        Mag2()
        confimeMag()

    })
})

const Mag = () => {
    cy.get('#nav-item-7')
        .click()
    cy.get('#tab-inventory')
        .click()
    cy.get('#btn-addInventory')
        .click()
    cy.get('#tab-MAG')
        .click({ force: true })

}

// กรอกรายละเอียดสินค้า
const Mag1 = () => {
    cy.get('#ItemCodeMag')
        .type("เพิ่มแม็ก")
    cy.get('#brandMag')
        .type("เพิ่มแม็ก 19")
    cy.get('#cb-0')
        .type("19")
    cy.get('#pcdhod-0')
        .type("5")
    cy.get('#pcdsize-0')
        .type("5")
    cy.get('#pcddec-0')
        .type("5")
    cy.get('#itemoffsetMag')
        .type("500")
    cy.get('#itemcolorMag')
        .type("white")
    cy.get('#model_mag')
        .type("5")
    cy.get('#skuMag')
        .type("25")
    cy.get('#widthMag')
        .click().type("40")
    cy.get('#rimMag')
        .click().type("17")

    cy.get('#btnnextMag')
        .click()
}

// รายละเอียดราคา
// เพิ่มสินค้าตัวเดิมยิดในคลังจะต้องเพิ่ม
const Mag2 = () => {
    cy.get('#amountMag')
        .clear().type("5")
    cy.get('#salesPriceMag')
        .clear().type("30")
    cy.get('#promotionMag')
        .clear().type("20")

    cy.get('#btnsaveInventorymag')
        .click()
}

// ยืนยันเพิ่มสินค้า
const confimeMag = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-MAG').click()
}

