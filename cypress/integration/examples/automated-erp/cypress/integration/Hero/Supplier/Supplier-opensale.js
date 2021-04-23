/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Open-Sale", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    //เปิดรายการขาย
    it("Open-Sale", () => {
        loginsupplier("grip-member1", "password")
        Opensale()

        //รายละเอียดของสินค้า
        Detail1()
        Detail2()

        //Detail3()

        //ค้นหาสินค้า
        searchdetail()

        //เช็ครายละเอียดสินค้ากรณีกรอกรายละเอียดครบ 3 ช่อง
        //checkdetailproducts()

        //เลือกสินค้า
        Selectproduct()

        //กรอกรายละเอียดหลังจากเลือกสินค้าแล้ว
        detailopensale()
    })
})

const loginsupplier = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Opensale = () => {
    cy.get(':nth-child(1) > .nav-link > .row > h6').click()
    cy.get('a > .el-button > span').should("contain.text", "เพิ่มรายการขาย")
    cy.get('a > .el-button > span').click()
    cy.get('.primary-blue').should("contain.text", "ลูกค้า")
    cy.get('.col-md-4 > .el-select > .el-input > .el-input__inner')
        .click().type("empGrip01").type("{downarrow}{enter}")
}

const Detail1 = () => {
    cy.get('.col-6 > .btn').click()
    cy.get('#tab-0').should("contain.text", "ยางรถยนต์")
    cy.get('#tab-1').should("contain.text", "อะไหล่")
    cy.get('#tab-2').should("contain.text", "ล้อแม็กซ์")
    cy.get('.mt-2 > #searchWidth > .bv-no-focus-ring > label').should("contain.text", "หน้ากว้าง")
    cy.get('#searchWidth > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}", { force: true })

}

const Detail2 = () => {
    //cy.get('.col-6 > .btn').click()
    cy.get('.mt-2 > #searchSeries > .bv-no-focus-ring > label').should("contain.text", "ซีรี่ย์")
    cy.get('#searchSeries > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("65").type("{downarrow}{downarrow}{enter}")
}

const Detail3 = () => {
    cy.get('.col-6 > .btn').click()
    cy.get('.mt-2 > #searchRimSize > .bv-no-focus-ring > label').should("contain.text", "ขอบ")
    cy.get('#searchRimSize > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}", { force: true })
}

const searchdetail = () => {
    cy.get('.mt-4 > .btn-search').should("contain.text", "ค้นหา")
    cy.get('.mt-4 > .btn-search').click()
}

const checkdetailproducts = () => {
    cy.get('#pane-0 > .table-responsive > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "สินค้า")
    cy.get('#pane-0 > .table-responsive > .table > tbody > tr > .text-left')
        .should("contain.text", "QWE123", "DUNLOB")

    cy.get('#pane-0 > .table-responsive > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "รายละเอียด")
    cy.get('#pane-0 > .table-responsive > .table > tbody > tr > :nth-child(2)')
        .should("contain.text", "ยางรีดน้ำ")

    cy.get('#pane-0 > .table-responsive > .table > thead > tr > :nth-child(3)')
        .should("contain.text", "หน่วย")
    cy.get('#pane-0 > .table-responsive > .table > tbody > tr > :nth-child(3)')
        .should("contain.text", "ชิ้น")
}

const Selectproduct = () => {
    cy.get(':nth-child(1) > :nth-child(5) > .btn-details').click()
    cy.get(':nth-child(3) > :nth-child(5) > .btn-details').click()
    cy.get('.close').click()
}

const detailopensale = () => {
    cy.get(':nth-child(1) > :nth-child(4) > .form-check > .form-control').clear().type("2")
    cy.get(':nth-child(2) > :nth-child(4) > .form-check > .form-control').clear().type("4")
}

//แทนค้า ราคาสินค้า,จำนวนและคำนวณราคาสินค้า

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


    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)

}
