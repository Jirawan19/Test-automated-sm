// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />


context("Workshop Add Repair work", () => {
    beforeEach(() => {
        cy.visit("https://herodemo.autopair.co/")
    })
    it("Add job work", () => {
        loginWorkshop("empGrip01", "password")
        // AddSupplierJob()
        // addCartiees()
        // AddTechincianOrWorkjob()
        JobWork()

    })
})

const loginWorkshop = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const JobWork = () => {
    cy.get('#nav-item-2')
        .click()

    cy.contains('เพิ่มงานซ่อม').click()

    // เลือกลูกค้าและพนักงานซ่อม
    cy.get('#selSelectCar')
        .click().type("9กณ").type("{downarrow}{enter}")

    cy.get('#selSelectmechanicId')
        .click().type("เพิ่มช่างซ่อม").type("{downarrow}{enter}")

    cy.get('#btnAddProduct')
        .click()

    // ค้นหาสินค้า
    cy.get('#searchWidth > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("1100").type("{downarrow}{enter}")

    cy.get('#searchSeries > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("10.5").type("{downarrow}{enter}")

    cy.get('#searchRimSize > .bv-no-focus-ring > .el-select > .el-input > .el-input__inner')
        .click().type("12").type("{downarrow}{enter}")

    // ค้นหาสินค้า
    cy.get('#pane-TIRE > :nth-child(1) > :nth-child(3) > :nth-child(1) > .btn-search')
        .click()

    cy.get('#pane-TIRE > .col-12.mt-2 > .table > tbody > :nth-child(1) > :nth-child(2)')
        .contains("test")

    // เลือกสินค้า
    cy.get('#pane-TIRE > .col-12.mt-2 > .table > tbody > :nth-child(1) > :nth-child(5) > .btn-details')
        .click()
    cy.get('.modal-body > .table > tbody > tr > :nth-child(1)')
        .should("contain.text", "0319")
    cy.get('#dotModal-10602 > .modal-dialog > .modal-content > .modal-body > .table > tbody > tr > :nth-child(3) > #amount\=0 > .el-input-number__increase > .el-icon-plus').click().click().click()
    cy.get('.modal-body > .table > tbody > tr > :nth-child(2)')
        .should("contain.text", "47")
    cy.get('.btn-primary')
        .click()

    cy.get('.el-notification__closeBtn')
        .click()

    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close')
        .click()

    // เช็ครายการที่เลือก
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(3)')
        .contains("test")

    // ราคาต่อหน่วย
    cy.get('.d-xl-block > .table > tbody > tr > :nth-child(5) > .form-check > #productlatestSalePrice')
        .clear().type("200")

    // เช็คราคาของรายการงานซ่อม
    cy.get(':nth-child(6) > .table > tbody > tr > :nth-child(6)')
        .contains("600.00")
    cy.get(':nth-child(8) > .text-right')
        .contains("642.00 บาท")

    //  บันทึกรายากร
    cy.get('.row.text-right > :nth-child(2) > [style="padding: 5px 40px; font-size: 1.3rem;"]')
        .click()
}
// เพิ่มสินค้า รายละเอียดสินค้า
const addCartiees = () => {
    cy.get('#nav-item-6').click()
    cy.get('#tab-inventory').click()
    cy.get('#pane-inventory > .mb-2 > .col-xl-2 > a > .btn')
        .click()
    taxCartiees(getRandomNumberCartiees(0, 10))
    taxCartiees1(getRandomNumberCartiees(0, 10))
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(1) > .primary-blue')
        .should("contain.text", "Tag")
    taxCartiees2(getRandomNumberCartiees(0, 10))
    taxCartiees3(getRandomNumberCartiees(0, 10))
    taxCartiees4(getRandomNumberCartiees(0, 10))

    cy.get(':nth-child(5) > :nth-child(1) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(5) > :nth-child(2) > .el-select > .el-input > .el-input__inner')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(5) > .pr-0 > .el-select')
        .click().type("{downarrow}{downarrow}{enter}")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search')
        .should("contain.text", "ถัดไป")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-search')
        .click()

    // รายละเอียดราคา
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(2) > .mt-2 > .el-input__inner')
        .clear().type("100")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(2) > :nth-child(3) > .mt-2 > .el-input__inner')
        .clear().type("50")
    cy.get('.col-md-6 > .mt-2').clear().type("0319")
    cy.get(':nth-child(4) > .col-md-4 > .mt-2 > .el-input__inner').clear().type("50")
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .col-sm-12 > .btn-confirm').click()

    // ยืนยันเพิ่มสินค้า
    cy.get('.swal2-confirm').click()
    cy.get('#tab-TIRE').click()

    // เช็คสินค้าที่เพิ่ม
    cy.get('#pane-TIRE > #ordersTable > .d-none > .table > tbody > #inventorys-0 > :nth-child(6) > .btn-details')
        .click()
    cy.get('.form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > #inventorys-0 > :nth-child(1)')
        .should("contain.text", "0319")
    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)')
        .should("contain.text", "50")

    cy.get('#inventorytabletire > .modal-dialog > .modal-content > .modal-footer > .btn')
        .click()


}

const getRandomNumberCartiees = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxCartiees = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test Cartiees").type(textNo)
}
const taxCartiees1 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .mt-3 > :nth-child(3) > .el-autocomplete > .el-input > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees2 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(1) > .mt-2 > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees3 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > :nth-child(3) > :nth-child(2) > .mt-2 > .el-input__inner')
        .type("test").type(textNo)
}
const taxCartiees4 = (textNo) => {
    cy.get('#pane-TIRE > .col-xl-12 > .col-12 > .fromitem > .form-group.mt-2 > .el-textarea > .el-textarea__inner')
        .type("test").type(textNo)
}

// เพิ่มลูกค้า
const AddTechincianOrWorkjob = () => {
    // เข้าหน้าเพิ่มพนักงาน
    cy.get('#nav-item-6').click()
    cy.get('#tab-employee').click()

    // กรอกข้อมูลพนักงาน
    cy.get('#pane-employee > :nth-child(1) > .col-xl-2 > a > .btn')
        .click()
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
    cy.get('#nav-item-6').click()
    cy.get('#tab-supplier').click()
}

// เพิ่ม Sopplier
const AddSupplierJob = () => {
    cy.get('#nav-item-6').click()
    cy.get('#tab-supplier').click()

    cy.get('#pane-supplier > .mb-2 > .col-xl-2 > a > .btn').click()
    taxAddSupplier(getRandomNumberAddSupplier(0, 5))
    taxAddSupplier1(getRandomNumberAddSupplier(0, 5))
    taxAddSupplier2(getRandomNumberAddSupplier(0, 9))
    taxAddSupplier3(getRandomNumberAddSupplier(0, 10))
    taxAddSupplier4(getRandomNumberAddSupplier(0, 13))

    // ยืนยันเพิ่ม supplier
    cy.get('[success=""]').click()
    cy.get('.swal2-confirm').click()

}
const getRandomNumberAddSupplier = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddSupplier = (textNo) => {
    cy.get('#state-name')
        .type("เพิ่มผู้จำหน่าย").type(textNo)
}
const taxAddSupplier1 = (textNo) => {
    cy.get('#state-address')
        .type("ดาวเสาร์").type(textNo)
}
const taxAddSupplier2 = (textNo) => {
    cy.get('#state-telNo')
        .type(textNo)

}
const taxAddSupplier3 = (textNo) => {
    cy.get('#state-mobileNo')
        .type(textNo)
}
const taxAddSupplier4 = (textNo) => {
    cy.get('#state-taxCustomerNumber')
        .type(textNo)
}
