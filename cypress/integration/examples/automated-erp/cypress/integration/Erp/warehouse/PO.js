/// <reference types="cypress" />


context("Warehouse Add PO", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // เพิ่มสินค้า PO
    it("Add PO", () => {
        loginPO("retail-CRR", "password")
        PO1()
        PO2()
        PO3()
        PO4()
        PO5()
    })
})

const loginPO = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เข้าคลังสินค้า
const PO1 = () => {
    cy.get(':nth-child(3) > .col-12 > .mt-4').click()
    cy.get('.header-wrapper > h4').should("contain.text", "คลังสินค้า / Inventory")
    cy.get('.nuxt-link-exact-active > .el-menu-item').should("contain.text", "คลังสินค้า")
}

// เพิ่มสินค้า PO
const PO2 = () => {
    cy.get('.form-group > [href="/retailer/inventory/addinventory"] > .btn').click()
    cy.get('.col-sm-12 > h4').should("contain.text", "เพิ่มสินค้าเข้าคลัง / Add Inventory")
        .should("contain.text", "เพิ่มสินค้าเข้าคลัง / Add Inventory")
    cy.get('[style="flex-basis: 50%; margin-right: 0px;"] > .el-step__main > .el-step__title')
        .should("contain.text", "รายละเอียดสินค้า")

}

// เลือกสินค้า
const PO3 = () => {
    cy.get('.row > .text-right > .btn-search').click()
    cy.get('#profile-tab').click()
    cy.get('#exampleModalCenterTitle').should("contain.text", "ค้นหาสินค้า")
    cy.get('label > .primary-blue').should("contain.text", "ค้นหาอะไหล่")
    cy.get('.form-control').click()
    cy.get(':nth-child(1) > td > .btn').click()
    cy.get('.form-row.mt-3 > .col-md-4 > .primary-blue').should("contain.text", "ชื่อสินค้า")
    cy.get('.col-md-2 > .primary-blue').should("contain.text", "ตำแหน่ง")
    cy.get('.form-row.mt-3 > .col-md-6 > .primary-blue').should("contain.text", "ยี่ห้อสินค้า")
    cy.get(':nth-child(3) > :nth-child(1) > .primary-blue').should("contain.text", "Manufacturer No.")
    cy.get('.col-sm-12 > .btn-search').should("contain.text", "ถัดไป")
    cy.get('.col-sm-12 > .btn-search').click()
}

// ราคาและจำนวนสินค้า
const PO4 = () => {
    cy.get('[style="flex-basis: 50%; max-width: 50%;"] > .el-step__main > .el-step__title').should("contain.text", "รายละเอียดราคา")
    cy.get('h5').should("contain.text", "รายละเอียดราคา")
    cy.get(':nth-child(2) > :nth-child(1) > .mt-2 > .el-input__inner').clear().type("50")
    cy.get('.btn-confirm').should("contain.text", "บันทึก")
    cy.get('.btn-confirm').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มสินค้าเข้าคลังเสร็จสิ้น")
    cy.get('.swal2-confirm').click()
}

// เช็คสินค้าว่าเข้าคลังหรือเปล่า ....
const PO5 = () => {
    cy.get('.el-autocomplete > .el-input > .el-input__inner').type("ผ้าดิสเบรค")
    cy.get('.header-wrapper').click()
}