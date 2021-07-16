/// <reference types="cypress" />

context("Warehouse", () => {
    it("Car ties", () => {
        cy.login("empGrip01", "password")
        addCartiees()
        addCartiees1()
        addconfimeCartiees()
        checkconfimeCartiees()
        supplier()
        Addorder()
        checkorder()

    })

})

// รายละเอียดสินค้า
const addCartiees = () => {
    cy.get('#nav-item-6')
    .click()
cy.get('#tab-inventory')
    .click()  
cy.get('#btn-addInventory')
    .click()
cy.get('#tab-TIRE').click()

    taxCartiees(getRandomNumberCartiees(0, 10))
    taxCartiees1(getRandomNumberCartiees(0, 10))
    taxCartiees2(getRandomNumberCartiees(0, 10))
    taxCartiees3(getRandomNumberCartiees(0, 10))
    taxCartiees4(getRandomNumberCartiees(0, 10))

    cy.get('#widthTire')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#serieTire')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#rimTire')
        .click().type("{downarrow}{downarrow}{enter}")
        
    cy.get('#btnnextTirestep')
        .click()
}

const getRandomNumberCartiees = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxCartiees = (textNo) => {
    cy.get('#ItemCodeTire')
        .type("เพิ่มยาง").type(textNo)
}
const taxCartiees1 = (textNo) => {
    cy.get('#brandTire')
        .type("เพิ่มยาง").type(textNo)
}
const taxCartiees2 = (textNo) => {
    cy.get('#itemtagTire')
        .type("เพิ่มยาง").type(textNo)
}
const taxCartiees3 = (textNo) => {
    cy.get('#skuTire')
        .type("เพิ่มยาง").type(textNo)
}
const taxCartiees4 = (textNo) => {
    cy.get('#itemDescriptionTire')
        .type("เพิ่มยาง").type(textNo)
}

// รายละเอียดราคา
const addCartiees1 = () => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(2) > .mt-2 > .el-input__inner')
    .clear().type("100")

cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(3) > .mt-2 > .el-input__inner')
    .clear().type("50")

cy.get('.col-md-6 > .mt-2').clear().type("0319")

cy.get(':nth-child(4) > .col-md-4 > .mt-2 > .el-input__inner').clear().type("50")

cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()
}

// ยืนยันเพิ่มสินค้า
const addconfimeCartiees = () => {
    cy.get('.swal2-confirm').click()
    cy.get('#tab-TIRE').click()
}

// เช็คสินค้าที่เพิ่ม
const checkconfimeCartiees = () => {
    cy.get('#pane-TIRE > #ordersTable > .d-none > .table > tbody > #inventorys-0 > :nth-child(6) > .btn-details')
        .click()

    cy.get('.form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > #inventorys-0 > :nth-child(1)')
        .should("contain.text", "0319")
    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)')
        .should("contain.text", "50")

    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-footer > .btn')
        .click()

}
const supplier = () => {
    // เพิ่มผู้จำหน่าย
    cy.get('#nav-item-4').click()
    cy.get('#btnCreate_Other_Tire_PurchaseOrder').click()
    cy.get('#selSupplierId > .el-input > .el-input__inner')
        .click().type("เพิ่มผู้").type("{downarrow}{enter}")

    cy.get('#state-name').type("test01")
    cy.get('#state-address').type("sky")
    cy.get('#state-mobileNo').type("0955915150")
    cy.get('#state-taxCustomerNumber').type("1100201520688")
    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()
}
// เพิ่มรายการซื้อ
const Addorder = () => {
    cy.get('#nav-item-4').click()
    // แท็บรายการซื้อ
    cy.get('#nav-item-4').click()

    // เลือกผู้จำหน่าย
    cy.get('#btnCreate_Other_Tire_PurchaseOrder').click()
    cy.get('#selSupplierId > .el-input > .el-input__inner')
        .click().type("test").wait(500).type("{downarrow}{enter}")

    cy.get('#txtAddProductalt').click()


    // รายละเอียดสินค้า
    cy.get('#tab-TIRE').click()
    cy.get('#selsearchTireseries')
        .click().type("10.5").type("{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#selsearchTirerim')
        .click().type("12").type("{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#btnsearchTire')
        .click()

    // เลือกสินค้า
    cy.get('#btnAddtiredesk-0').click()

    cy.get('.close').click()

    // เช็คสินค้าที่เลือก
    // สินค้าชิ้นที่ 1
    cy.get(':nth-child(1) > :nth-child(4) > .row > :nth-child(1) > input')
        .clear().type("3")
    cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .row > :nth-child(2) > input')
        .type("1090")


    // ราคาต่อหน่วย
    cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > td.align-middle > .row > .mt-3 > .form-control')
        .clear().type("30")


    // ราคารวม
    // ชิ้นที่1
    cy.get('.col-12.d-none > .table > tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "90.00")

    cy.get('.col-12.d-none > .table > tfoot > :nth-child(1) > .text-right')
        .should("contain.text", "90.00 บาท")


    cy.get('.row.text-right > :nth-child(2) > .btn')
        .click()

    cy.get('.swal2-confirm').click()


}

const checkorder = () => {
    cy.get(':nth-child(1) > :nth-child(1) > a > .primary-blue').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)')
        .should("contain.text", "ยืนยันการส่ง")


    cy.get('.ml-auto > .nuxt-link-active > .btn').click()

}