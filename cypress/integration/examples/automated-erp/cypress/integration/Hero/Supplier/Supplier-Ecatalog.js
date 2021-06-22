/// <reference types="cypress" />


context("E-catalog", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    //ค้นหา ยางรถยนต์
    // it("E-catalog/tires", () => {
    //     loginsupplier("grip-member1", "password")
    //     searchEcatalogtires1()
    //     chekearchecatalogtires1()
    //     searchEcatalogtires2()
    //     chekearchecatalogtires2()
    // })

    // //ค้นหา อะไหล่
    // it("E-catalog/spares", () => {
    //     loginsupplier("grip-member1", "password")
    //     searchEcatalogspares1()
    //     chekearchecatalogspares1()
    // })

    //ค้นหา ล้อแม็ก
    it("E-catalog/Wheel", () => {
        loginsupplier("grip-member1", "password")
        searchEcatalogWheel1()
        chekearchecatalogWheel1()
    })
})

const loginsupplier = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

//ค้นหา ยางรถยนต์
const searchEcatalogtires1 = () => {
    cy.get('h3').should("contain.text", "E-Catalog")
    cy.get('#tab-0').should("contain.text", "ยางรถยนต์")
    cy.get('.row.mt-2 > #searchSeries > .bv-no-focus-ring > .primary-blue')
        .should("contain.text", "ซีรี่ย์")
    cy.get('#searchSeries > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("65").type("{downarrow}{enter}")
    cy.get('.row.mt-4 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('.row.mt-4 > :nth-child(1) > .btn-search').click()
}

const chekearchecatalogtires1 = () => {
    cy.get('[data-v-36f4bc92=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(1)')
        .should("contain.text", "ชื่อสินค้า")
    cy.get(':nth-child(1) > .text-left > .primary-blue').should("contain.text", "195 / 65 R 15")
    cy.get(':nth-child(2) > .text-left > .primary-blue').should("contain.text", "265 / 65 R 17")
    cy.get(':nth-child(3) > .text-left > .primary-blue').should("contain.text", "265 / 65 R 17")
    cy.get('.row.mt-4 > :nth-child(2) > .btn-reset').should("contain.text", "ล้างข้อมูล")
    cy.get('.row.mt-4 > :nth-child(2) > .btn-reset').click()
}

// ค้นหา ยี่ห้อ
const searchEcatalogtires2 = () => {
    cy.get('.row.mt-2 > #searchTireฺBrand > .bv-no-focus-ring > .primary-blue')
        .should("contain.text", "ยี่ห้อ")
    cy.get('#searchTireฺBrand > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("TOYO").type("{downarrow}{enter}")
    cy.get('.row.mt-4 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('.row.mt-4 > :nth-child(1) > .btn-search').click()
}

const chekearchecatalogtires2 = () => {
    cy.get('[data-v-36f4bc92=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(2)')
        .should("contain.text", "ยี่ห้อ")
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should("contain.text", "TOYO")
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should("contain.text", "TOYO")
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should("contain.text", "TOYO")
    cy.get('.row.mt-4 > :nth-child(2) > .btn-reset').should("contain.text", "ล้างข้อมูล")
    cy.get('.row.mt-4 > :nth-child(2) > .btn-reset').click()
}

//ค้นหา อะไหล่
const searchEcatalogspares1 = () => {
    cy.get('h3').should("contain.text", "E-Catalog")
    cy.get('#tab-1').should("contain.text", "อะไหล่")
    cy.get('#tab-1').click()
    cy.get('#searchParts > .bv-no-focus-ring > .primary-blue').should("contain.text", "ค้นหาอะไหล่")
    cy.get('#inputSearchParts').type("กาว")
    cy.get('#pane-1 > .row.mt-3 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('#pane-1 > .row.mt-3 > :nth-child(1) > .btn-search').click()
}

const chekearchecatalogspares1 = () => {
    cy.get('[data-v-04c40936=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(1)')
        .should("contain.text", "ชื่อสินค้า")
    cy.get('.text-left > .secondary-blue')
        .should("contain.text", "test-044")
    cy.get('.m-0').should("contain.text", "กาวดำ -")
    cy.get('.text-left > span').should("contain.text", "ยี่ห้อ:DAITEN")

    // cy.get('[data-v-04c40936=""][data-v-2615cf88=""] > .d-none > .table > tbody > :nth-child(2) > .text-left > .secondary-blue')
    //     .should("contain.text", "test-044")
    // cy.get(':nth-child(2) > .text-left > .m-0').should("contain.text", "กาวดำ -")
    // cy.get('[data-v-04c40936=""][data-v-2615cf88=""] > .d-none > .table > tbody > :nth-child(2) > .text-left > span')
    //     .should("contain.text", "ยี่ห้อ:DAITEN")
}

// ค้นหา ล้อแม็ก
const searchEcatalogWheel1 = () => {
    cy.get('h3').should("contain.text", "E-Catalog")
    cy.get('#tab-2').should("contain.text", "ล้อแม็ก")
    cy.get('#tab-2').click()
    cy.get('#pane-2 > :nth-child(1) > :nth-child(4) > .bv-no-focus-ring > .primary-blue')
        .should("contain.text", "PCD")
    cy.get(':nth-child(4) > .bv-no-focus-ring > .el-input > .el-input__inner').type("22.0")
    cy.get(':nth-child(5) > .bv-no-focus-ring > .primary-blue').should("contain.text", "รูดุมล้อ")
    cy.get(':nth-child(5) > .bv-no-focus-ring > .el-input > .el-input__inner').type("55")
    cy.get('#pane-2 > .row.mt-3 > :nth-child(1) > .btn-search').should("contain.text", "ค้นหา")
    cy.get('#pane-2 > .row.mt-3 > :nth-child(1) > .btn-search').click()
}

const chekearchecatalogWheel1 = () => {
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(1)')
        .should("contain.text", "ชื่อสินค้า")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > tbody > tr > .text-left > .secondary-blue')
        .should("contain.text", "RWEO-2")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > tbody > tr > .text-left > span')
        .should("contain.text", "ขอบ21")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(2)')
        .should("contain.text", "ยี่ห้อ")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > tbody > tr > :nth-child(2)')
        .should("contain.text", "RTY")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > .table-header > tr > :nth-child(4)')
        .should("contain.text", "ราคาขาย")
    cy.get('[data-v-2d66592e=""][data-v-71db0b87=""] > .d-none > .table > tbody > tr > :nth-child(4)').should("contain.text", "1,564.00")
}