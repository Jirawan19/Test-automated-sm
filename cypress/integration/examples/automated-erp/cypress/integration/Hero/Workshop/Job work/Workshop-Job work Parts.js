// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />


context("Workshop Add Repair work", () => {

    it("Add job work", () => {
        cy.login("empGrip01", "password")
        // AddSupplierJob()
        // AddTechincianOrWorkjob()
        // addParts()

        JobWork()
        JobWork1()
    })
})

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
    cy.wait(5000)

    cy.get('#tab-PART')
        .click()

    cy.wait(10000)

    cy.get('#inputSearchParts')
        .click().type("เพิ่มอะไหล่").type("{enter}")

    cy.wait(5000)


    // เลือกสินค้า,ค้นหาสินค้า
    cy.get('[style="font-size: 1.1rem;"] > .btn-search')
        .click()

    cy.wait(5000)

    cy.get('#pane-PART > .d-xl-block > .table > tbody > :nth-child(1) > :nth-child(1)')
        .contains("เพิ่มอะไหล่")

    cy.get(':nth-child(1) > :nth-child(6) > .btn')
        .click()

    cy.get('.el-notification__closeBtn')
        .click()

    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close')
        .click()


    // ตรวจเช็ครายละเอียดสินค้า
    cy.get('#datapart-0 > .secondary-blue')
        .contains("เพิ่มอะไหล่")

    cy.get('#partdescription-0')
        .contains("test")

    // ราคาต่อหน่วย
    cy.get('#partproductlatestSalePricetotalend-0')
        .contains("200.00")

    // ราคาสุทธิ
    cy.get('#paymentPrice')
        .contains("214.00 บาท")

    cy.get('#txtNote')
        .click().type("test")

    //  เปิดรายการซ่อม
    cy.get('#btncreateWalkInWorkshopJob')
        .click()

    cy.get('.swal2-confirm')
        .click()
}

const JobWork1 = () => {
    cy.get('#btnJobdetail-0')
        .click()
}

// เพิ่มสินค้า รายละเอียดสินค้า
const addParts = () => {
    cy.get('#nav-item-6')
        .click()
    cy.get('#tab-inventory')
        .click()
    cy.get('#btn-addInventory')
        .click()
    cy.get('#tab-PART').click()

    taxParts(getRandomNumberParts(1, 10))
    cy.get('#fitmentDetail')
        .click().type("{downarrow}{enter}")
    taxParts1(getRandomNumberParts(1, 10))
    taxParts2(getRandomNumberParts(1, 10))
    taxParts3(getRandomNumberParts(1, 10))
    cy.get('#itemDescription')
        .type("test")

    cy.get('#btnNextPart')
        .click()

    // รายละเอียดราคา
    cy.get('#amountRemainStock')
        .clear().type("10")
    cy.get('#unit')
        .click().type("{downarrow}{enter}")
    cy.get(':nth-child(3) > .mt-2 > #salesPricePart')
        .clear().type("200")
    cy.get(':nth-child(4) > .mt-2 > #salesPricePart')
        .clear().type("150")
    cy.get('#btnsaveInventoryPart')
        .click()

    // ยืนยันเพิ่มสินค้า
    cy.get('.swal2-confirm').click()
    cy.get('#tab-TIRE').click()
}

const getRandomNumberParts = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxParts = (textNo) => {
    cy.get('#itemName')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts1 = (textNo) => {
    cy.get('#brand')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts2 = (textNo) => {
    cy.get('#manufacturerNo')
        .type("เพิ่มอะไหล่").type(textNo)
}
const taxParts3 = (textNo) => {
    cy.get('#oeNo')
        .type("เพิ่มอะไหล่").type(textNo)
}


// เข้าหน้าเพิ่มพนักงาน
const AddTechincianOrWorkjob = () => {
    cy.get('#nav-item-6').click()
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
    cy.get('#nav-item-6').click()
    cy.get('#tab-supplier').click()
}

// เพิ่ม Sopplier
const AddSupplierJob = () => {
    cy.get('#nav-item-6').click()
    cy.get('#tab-supplier').click()
    cy.get('#btn-addSupplier')
        .click()

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
