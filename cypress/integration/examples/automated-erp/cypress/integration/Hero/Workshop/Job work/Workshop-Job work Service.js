// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />



context("Workshop Add Repair work", () => {

    it("Add job work", () => {
        cy.login("empGrip01", "password")
        // AddCustomerJob()
        // AddTechincianOrWorkjob()
        addService()

        JobWork()
        JobWork1()
    })
})

const JobWork = () => {
    cy.get('#nav-item-2')
        .click()

    cy.contains('เพิ่มงานซ่อม').click({ force: true })

    // เลือกลูกค้าและพนักงานซ่อม
    cy.get('#selSelectCar')
        .click({ force: true }).type("9กณ").type("{downarrow}{enter}")

    cy.get('#selSelectmechanicId')
        .click({ force: true }).type("เพิ่มช่างซ่อม").type("{downarrow}{enter}")

    cy.get('#btnAddProduct')
        .click({ force: true })

    // ค้นหาสินค้า
    cy.wait(500)

    cy.get('#tab-SERVICE')
        .click({ force: true })

    cy.wait(500)

    cy.get('#serviceName')
        .click({ force: true }).type("เพิ่มบริการ").type("{enter}")

    cy.wait(500)


    // เลือกสินค้า,ค้นหาสินค้า
    cy.get('#serviceSearch')
        .click({ force: true })

    // cy.wait(1000)

    cy.get('#addservicePo-NF-254')
        .click({ force: true })

    cy.get('.el-notification__closeBtn')
        .click({ force: true })

    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close')
        .click({ force: true })

    cy.get('#poservicedata-0')
        .contains("เพิ่มบริการ")

    cy.get('#poserviceamount-0')
        .click({ force: true }).clear({ force: true }).type("3", { force: true })
    cy.get(':nth-child(3) > .th-retail-style')
        .click()

    cy.get('#poservicetotalprice-0')
        .contains("450.00")

    cy.get('#paymentPrice')
        .contains("481.50 บาท")

    cy.get('#btncreateWalkInWorkshopJob')
        .click()

    cy.get('.swal2-confirm')
        .click()

}
const JobWork1 = () => {
    cy.fixCanNotClickLink(cy.get('table>tbody>tr:first>td:last>a'))
}

// เพิ่มบริการ
const addService = () => {
    cy.get('#nav-item-5')
        .click()
    cy.get('.el-button')
        .click()

    taxAddService(getRandomAddService(1, 3))
    cy.get('#price').type("150")
    taxAddService1(getRandomAddService(1, 3))

    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}

const getRandomAddService = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddService = (textNo) => {
    cy.get('#state-name')
        .type("เพิ่มบริการ").type(textNo)
}
const taxAddService1 = (textNo) => {
    cy.get('#description')
        .type("เพิ่มบริการ").type(textNo)
}



// เข้าหน้าเพิ่มพนักงาน
const AddTechincianOrWorkjob = () => {
    cy.get('#nav-item-7').click()
    cy.get('#tab-employee').click()
    cy.get('#btn-addEmp')
        .click()

    // กรอกข้อมูลพนักงาน
    taxAddEmployee(getRandomNumberAddEmployee(1, 3))
    cy.get('#roleEmp').select("ช่างซ่อม")
    cy.get('#state-password').type("password")
    taxAddEmployee2(getRandomNumberAddEmployee(1, 5))
    taxAddEmployee1(getRandomNumberAddEmployee(1, 2))
    taxAddEmployee3(getRandomNumberAddEmployee(0, 10))
    cy.get('[success=""]').click()

    cy.get('.swal2-confirm').click()

}
const getRandomNumberAddEmployee = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddEmployee = (textNo) => {
    cy.get('#state-nameEmp')
        .type("เพิ่มช่างซ่อม").type(textNo)
}
const taxAddEmployee1 = (textNo) => {
    cy.get('#state-usernameEmp')
        .type("เพิ่มช่างซ่อม").type(textNo)
}
const taxAddEmployee2 = (textNo) => {
    cy.get('#state-emailEmp')
        .type("เพิ่มช่างซ่อม").type(textNo).type("@gmail.com")

}
const taxAddEmployee3 = (textNo) => {
    cy.get('#state-telEmp')
        .type(textNo)
}
// เข้าหน้าเพิ่มพนักงาน
const AddSupplier = () => {
    cy.get('#nav-item-7').click()
    cy.get('#tab-supplier').click()
}

// เพิ่ม Customer
const AddCustomerJob = () => {
    cy.get('#nav-item-7').click()
    cy.get('#tab-customer').click()
    cy.get('#btn-addCustomer').click()

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

    cy.get('#btnNext-1').click({ force: true })

    // กรอกข้อมูลรถยนต์
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

    cy.get('#btnNext-2').click({ force: true }).click()


    // ชำระเงินสด
    cy.get('#selPaymentType')
        .click().type("{downarrow}{downarrow}{downarrow}{enter}", { force: true })
    // โอนชำระ
    // cy.get('#selPaymentType')       
    //  .click().type("{downarrow}{downarrow}{enter}", { force: true })
    // // เช็ค
    // cy.get('#selPaymentType')
    //         .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")

    cy.get('#btnSubmit').click()

    // ยืนยันเพิ่ม supplier
    cy.get('.swal2-confirm')
    cy.get('.swal2-confirm').click()

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
const taxAddCustomer4 = (textNo) => {
    cy.get('#txtCarRegistrationNumber')
        .click().type("9กณ").type(textNo)
}
const taxAddCustomer5 = (textNo) => {
    cy.get('#vinNos')
        .click().type(textNo)
}
const taxAddCustomer6 = (textNo) => {
    cy.get('#email')
        .click().type("test").type(textNo).type("@gmail.com")
}
