/// <reference types="cypress" />

context("AddsellTax-Cash", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // ยกเลิกรายการสินค้าแบบมีภาษี
    it("Cancel Order-Sell/Card", () => {
        loginCancelOrderCard("retail-CRR", "password")
        CancelOrderCard1()
        CancelOrderCard2()
        CancelOrderCard3()
        CancelOrderCard4()
        CancelOrderCard5()
    })
    // ยกเลิกรายการสินค้าแบบไม่มีภาษี
    // it("Cancel Order-Sell/Card 1", () => {
    //     loginCancelOrderCard("retail-CRR", "password")
    //     CancelOrderCard1()
    //     CancelOrderCard2()
    //     CancelOrderCard3()
    //     CancelOrderCard41()
    //     CancelOrderCard5()

    // })

})

const loginCancelOrderCard = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

// เปิด new orders
const CancelOrderCard1 = () => {
    cy.get('.row > :nth-child(1) > .col-12').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()

}

// เปิด เลือกสินค้า
const CancelOrderCard2 = () => {
    cy.get('.box-add-product > .row > :nth-child(1) > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('#inventory > .form-group > .form-control').type("11")
    cy.get(':nth-child(1) > td > .btn').click()
    cy.get(':nth-child(2) > td > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-header > .close')
        .click({ force: true })

}

// กรอกข้อมูลสินค้าและราคา
const CancelOrderCard3 = () => {
    const products = [
        {
            price: 2,
            qty: 100,
            percentage1: 5,
            percentage2: 5
        },
        {
            price: 5,
            qty: 50,
            percentage1: 5,
            percentage2: 5,
        }
    ]
    // ชิ้นที่1
    cy.get('#products-0 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[0].price)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[0].percentage1)
    cy.get('#products-0 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[0].percentage2)
    cy.get('#products-0 > [style="width: 150px;"] > :nth-child(2) > .el-input__inner')
        .clear().type(products[0].qty)

    // ชิ้นที่2
    cy.get('#products-1 > :nth-child(2) > .form-row > :nth-child(1) > .el-input > .el-input__inner')
        .clear().type(products[1].price)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(1) > .text-left > .form-control')
        .clear().type(products[1].percentage1)
    cy.get('#products-1 > [style="width: 200px;"] > :nth-child(2) > .text-left > .form-control')
        .clear().type(products[1].percentage2)
    cy.get('#products-1 > [style="width: 150px;"] > :nth-child(2) > .el-input__inner')
        .clear().type(products[1].qty)

    let totalPrice = 0
    products.map(product => {
        totalPrice += product.qty * product.price
    })
    cy.get(':nth-child(1) > .row > .text-right > h5').should("contain.text", totalPrice)


}
// ข้อมูลลูกค้า,รูปแบบภาษี/การชำระเงิน (แบบมีภาษี)
const CancelOrderCard4 = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.row > :nth-child(3) > .btn').click()
    cy.get('[style="padding-bottom: 70px;"] > .btn').click()
    cy.get('.swal2-confirm').click()
}
// ข้อมูลลูกค้า,รูปแบบภาษี/การชำระเงิน (แบบไม่มีภาษี)
const CancelOrderCard41 = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(2) > .btn').click()
    cy.get('.row > :nth-child(3) > .btn').click()
    cy.get('[style="padding-bottom: 70px;"] > .btn').click()
    cy.get('.swal2-confirm').click()
}

// ทำขั้นตอนยกเลิกรายการสั่งซื้อ
const CancelOrderCard5 = () => {
    cy.get('.el-link--inner').click({ force: true })
    cy.get('.el-link--inner').click({ force: true })
    cy.get('#orders-0 > :nth-child(1) > a').click()
    cy.get('.btn-danger').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click({ force: true })
    cy.get('.swal2-confirm').click()
    cy.get(':nth-child(3) > .status-border').should("contain.text", "ยกเลิก")
    cy.get('.container-fuild > .row > :nth-child(1) > .nuxt-link-active > .btn').click()
}