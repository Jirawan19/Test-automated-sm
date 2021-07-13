/// <reference types="cypress" />

context("Name lish book", () => {

    it("Add Customer", () => {
        cy.login("empGrip01", "password")
        AddCustomer()
        AddCustomer1()
        AddCustomer2()
        AddCustomer3()
        AddCustomer4()
        checkAddCustomer()
    })
})


const AddCustomer = () => {
    cy.get('#nav-item-6').click()
    cy.get('#tab-customer').click()
    cy.get('#btn-addCustomer').click()
}

// กรอกข้อมูลลูกค้า
const AddCustomer1 = () => {

    // กรอกข้อมูลลูกค้า
    cy.get('#txtIdCardNumber').type("1100201520688")
    cy.get('#txtAddress').type("168/106")
    cy.get('#txtDistrict > .vth-addr-input-container > .vth-addr-input')
        .type("คลองถนน")
    cy.get('#txtPostCode > .vth-addr-input-container > .vth-addr-input')
        .clear().type("10220").type("{enter}")
    taxAddCustomer(getRandomNumberAddCustomer(0, 12))
    taxAddCustomer1(getRandomNumberAddCustomer(0, 2))
    cy.get('#txtSubDistrict > .vth-addr-input-container > .vth-addr-input')
        .clear().type("สายไหม").type("{enter}")
    taxAddCustomer6(getRandomNumberAddCustomer(0, 10))
    taxAddCustomer3(getRandomNumberAddCustomer(0, 3))
    cy.get('#step0 > .row > .step_row_footer > .btn-select')
        .click()
}

const getRandomNumberAddCustomer = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddCustomer = (textNo) => {
    cy.get('#txtTelNo').type(textNo)
}
const taxAddCustomer1 = (textNo) => {
    cy.get('#txtName')
        .type("เพิ่มลูกค้า").type(textNo)
}
const taxAddCustomer2 = (textNo) => {
    cy.get('.bv-no-focus-ring > #idCardNumber')
        .type("1100201520688")
}
const taxAddCustomer3 = (textNo) => {
    cy.get('#txtMobileNo')
        .type(textNo)
}
const taxAddCustomer6 = (textNo) => {
    cy.get('#email')
        .click().type("test").type(textNo).type("@gmail.com")
}

// กรอกข้อมูลรถยนต์
const AddCustomer2 = () => {
    taxAddCustomer4(getRandomNumberAddCustomer(1, 3))
    taxAddCustomer5(getRandomNumberAddCustomer(0, 5))
    cy.get('#selCarBrand')
        .click().type("{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#input_carModel')
        .click().wait(500).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#step2-province')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })

    cy.get('#selCartype')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })

    cy.get('#selCarYear')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#selCarGear')
        .click({ force: true }).type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    cy.get('#latestMileages').type("500")

    cy.get('#btnNext-2').click()
}
const taxAddCustomer4 = (textNo) => {
    cy.get('#txtCarRegistrationNumber')
        .click().type("9กณ").type(textNo)
}
const taxAddCustomer5 = (textNo) => {
    cy.get('#vinNos')
        .click().type(textNo)
}

// สถานะการชำระเงินและรับข่าวสาร
const AddCustomer3 = () => {
    // ชำระเงินสด
    cy.get('#selPaymentType')
        .click().type("{downarrow}{enter}", { force: true })
    // โอนชำระ
    // cy.get('#selPaymentType')       
    //  .click().type("{downarrow}{downarrow}{enter}", { force: true })
    // // เช็ค
    // cy.get('#selPaymentType')
    //         .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")

    cy.get('#btnSubmit').click()
}

// ยืนยันเพิ่มลูกค้า
const AddCustomer4 = () => {
    cy.get('.swal2-confirm')
    cy.get('.swal2-confirm').click()
}
// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddCustomer = () => {
    cy.get('#nav-item-6')
        .click()
    cy.get('#tab-customer').click()

    cy.get(':nth-child(1) > [style="width: 11rem;"] > .btn')
        .click()
        
    cy.get('#btnBack-1').click()
}