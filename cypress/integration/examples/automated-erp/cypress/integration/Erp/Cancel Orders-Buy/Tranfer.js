/// <reference types="cypress" />


context("Cancel Order-Buy/Tranfer", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // ยกเลิกออเดอร์แบบราคารวมภาษี
    it("Cancel Order-Buy/Tranfer", () => {
        LoginCancelOrderBuyTranfer("retail-CRR", "password")
        CancelOrderBuyTranfer1()
        CancelOrderBuyTranfer2()
        CancelOrderBuyTranfer3()
        taxCancelOrderBuyTranfer4(getRandomArbitraryCancelOrderBuyTranfer(1, 100000))
        CancelOrderBuyTranfer4()
    })
    // ยกเลิกออเดอร์แบบราคาไม่รวมภาษี
    it("Cancel Order-Buy/Tranfer1", () => {
        LoginCancelOrderBuyTranfer("retail-CRR", "password")
        CancelOrderBuyTranfer1()
        CancelOrderBuyTranfer2()
        CancelOrderBuyTranfer3()
        taxCancelOrderBuyTranfer41(getRandomArbitraryCancelOrderBuyTranfer(1, 100000))
        CancelOrderBuyTranfer4()
    })
})

const LoginCancelOrderBuyTranfer = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// เปิด New Order
const CancelOrderBuyTranfer1 = () => {
    cy.get(':nth-child(2) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
}

// เลือกสินค้า
const CancelOrderBuyTranfer2 = () => {
    cy.get('.box-add-product > .row > :nth-child(1) > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('#inventory > .form-group > .form-control').type("11")
    cy.get(':nth-child(1) > td > .btn').click()
    cy.get(':nth-child(2) > td > .btn').click()
    cy.get('#scanAddOrders').click({ force: true })
}

// กรอกข้อมูลสินค้าและราคา
const CancelOrderBuyTranfer3 = () => {
    const products = [
        {
            price: 2,
            qty: 100,
            percentage1: 0,
            percentage2: 0
        },
        {
            price: 2,
            qty: 200,
            percentage1: 0,
            percentage2: 0,
        }
    ]
    // ชิ้นที่1
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[0].price)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > .el-input > .el-input__inner')
        .clear().type(products[0].qty)

    // ชิ้นที่2
    cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[1].price)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[1].percentage1)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[1].percentage2)
    cy.get('#products-1 > [style="width: 150px;"] > .el-input > .el-input__inner')
        .clear().type(products[1].qty)

    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    cy.get(':nth-child(1) > .row > .text-right').should("contain.text", totalPrice)
}

// สุ่มตัวเลขภาษี
const getRandomArbitraryCancelOrderBuyTranfer = (min, max) => {
    1, 100000
    return Math.random() * (max - min) + min;
}
// เลือกลูกค้า,ราคาแบบรวมภาษี,และสุ่มภาษี (ราคารวมภาษี)
const taxCancelOrderBuyTranfer4 = (textNo) => {
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control').clear()
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner').click()
        .type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control')
        .type(textNo)
    cy.get(':nth-child(3) > .row > :nth-child(1) > .btn').click()
    cy.get('.box-price > .row > :nth-child(2) > .btn').click()
    cy.get('.pt-3 > div > .btn').click()
    cy.get('.swal2-confirm').click()
}
// เลือกลูกค้า,ราคาแบบรวมภาษี,และสุ่มภาษี (ราคาไม่รวมภาษี)
const taxCancelOrderBuyTranfer41 = (textNo) => {
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control').clear()
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner').click()
        .type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .form-control')
        .type(textNo)
    cy.get(':nth-child(3) > .row > :nth-child(1) > .btn').click()
    cy.get(':nth-child(3) > .row > :nth-child(2) > .btn').click()
    cy.get('.box-price > .row > :nth-child(2) > .btn').click()
    cy.get('.pt-3 > div > .btn').click()
    cy.get('.swal2-confirm').click()
}

const CancelOrderBuyTranfer4 = () => {
    cy.get('.el-link').click()
    cy.get('#orders-0 > :nth-child(1) > a').click()
    cy.get(':nth-child(3) > .status-border').should("contain.text","รายการเสร็จสิ้น")
    cy.get('.mt-2 > .btn').click()
    cy.get('#swal2-content').should("contain.text","การกระทำนี้จะไม่สามารถเปลี่ยนแปลงได้")
    cy.get('.swal2-confirm').click()
    cy.get('#swal2-title').should("contain.text","ยกเลิกสำเร็จ")
    cy.get('.swal2-confirm').click()
    cy.get(':nth-child(3) > .status-border').should("contain.text","ยกเลิก")
    cy.get('.btn').click()
    cy.get('.col-sm-12 > h4').should("contain.text","รายการสั่งซื้อทั้งหมด / Purchase Orders")
    cy.get('#orders-0 > :nth-child(5) > .justify-content-center > .status-border').should("contain.text","ยกเลิก")
}
