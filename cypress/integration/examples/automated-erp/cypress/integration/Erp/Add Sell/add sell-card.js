/// <reference types="cypress" />

// let textNo

context("AddsellTax-Card", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/retailer/home")
    })
    // it("getLatestTaxNo", () => {
    //     getLatestTaxNo()
    // })

    // ราคารวมภาษี PO
    it("AddsellTax-Card-PO", () => {
        login("retail-CRR", "password")
        sellPO()
        sell1()
        selltexCard()
        // checkCard()
    })

    // ราคาไม่รวมภาษี PO
    // it("Addsell NoTax-Card-PO", () => {
    //     login("retail-CRR", "password")
    //     sellPO()
    //     sell1()
    //     selltexCard1()
    //     checkCard()
    // })

    // ราคารวมภาษี RO
    // it("AddsellTax-Card-RO", () => {
    //     login("retail-CRR", "password")
    //     sellRO()
    //     sell1()
    //     selltexCard()
        // checkCard()
    // })

    // // ราคาไม่รวมภาษี  RO
    // it("Addsell NOTax-Card-RO", () => {
    //     login("retail-CRR", "password")
    //     sellRO()
    //     sell1()
    //     selltexCard1()
    //     // checkCard()
    // })
})

// ข้อมูลสินค้าที่เลือกซื้อ PO
const sellPO = () => {
    cy.get(':nth-child(1) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
    cy.get('.box-add-product > .row > :nth-child(1) > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('#inventory > .form-group > .form-control').type("10",{ force: true })
    cy.get(':nth-child(1) > td > .btn').click()
    cy.get('#scanAddOrders > .modal-dialog > .modal-content > .modal-header > .close')
        .click()

}

// ข้อมูลสินค้าที่เลือกซื้อ RO
const sellRO = () => {
    cy.get(':nth-child(1) > .col-12 > .mt-4').click()
    cy.get(':nth-child(2) > .form-group > a > .btn').click()
    cy.get('.box-add-product > .row > :nth-child(2) > .btn').click({ force: true })
    cy.get('#addProductModal > .modal-dialog > .modal-content > .modal-body > #myTab > :nth-child(2) > #profile-tab')
        .click()
    cy.get('.mb-2 > :nth-child(1) > .el-autocomplete > .el-input > .el-input__inner').type("ก้ามเบรค").tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("GIRLING").tab()
    cy.get('.form-group > .mt-2 > .el-input__inner').type("456").tab().tab().type("{downarrow}{downarrow}{enter}")
        .tab().type("OTHER BRAND").tab().type("CROWN").tab().type("โฉมปี 1959-1967 (MARK I)")
    cy.get('.text-right > .btn-confirm').click()
}


// ข้อมูลราคาและราคาสินค้า
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
// ข้อมูลลูกค้าและสินค้าราคารวมภาษี
const selltexCard = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.row > :nth-child(3) > .btn').click()
    cy.get('[style="padding-bottom: 70px;"] > .btn').click()
    cy.get('.swal2-confirm').click()
}


// ข้อมูลลูกค้าและสินค้าราคาไม่รวมภาษี
const selltexCard1 = () => {
    cy.get('.col-sm-12.p-0 > [style="background-color: rgb(243, 244, 246);"] > .form-row > .col-md-8 > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(1) > .btn').click()
    cy.get('.col-sm-12.p-0 > :nth-child(2) > .row > :nth-child(2) > .btn').click()
    cy.get('.row > :nth-child(3) > .btn').click()
    cy.get('[style="padding-bottom: 70px;"] > .btn').click()
    cy.get('.swal2-confirm').click()
}


const login = (username, password) => {
    // exampleExpect()
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}

const checkCard = () => {
    // cy.get('.el-link--inner').click({ force: true })
    // cy.get('.el-link--inner').click({ force: true })
    cy.visit("https://smdevdemo.autocareth.com/retailer/erp-orders-sales")
    cy.get('tbody > #orders-0 > :nth-child(1)').click()
    cy.get(':nth-child(3) > .status-border').should("contain.text", "รอชำระเงิน")

}


// const getLatestTaxNo = () => {
//     login("retail-CRR", "password")
//     cy.get(':nth-child(2) > .col-12 > .mt-4').click()
//     cy.get('#orders-0 > :nth-child(1) > a').click()
//     cy.get(':nth-child(1) > :nth-child(4) > .form-control').invoke('val')
//         .then(sometext => {
//             textNo = sometext
//         });
// }

// ตัวอย่างการแทนค่า

// const exampleExpect = () => {

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
// }

const getRandomArbitrary = (min, max) => {
    1, 100000
    return Math.random() * (max - min) + min;
}
