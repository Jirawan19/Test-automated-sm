// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />


context("Workshop Add Repair work", () => {

    it("Add job work", () => {
        cy.login("empGrip01", "password")
        // AddSupplierJob()
        // AddTechincianOrWorkjob()
        // addService()

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
    cy.wait(500)

    cy.get('#tab-SERVICE')
        .click()

    cy.wait(500)

    // รอเพิ่มไอดี
    cy.get('#__BVID__275')
        .click().type("เพิ่มบริการ").type("{enter}")

    cy.wait(500)


    // เลือกสินค้า,ค้นหาสินค้า
    cy.get('[style="font-size: 1.1rem;"] > .btn-search')
        .click()

    cy.wait(5000)

   


    cy.get('.el-notification__closeBtn')
        .click()

    cy.get('#Product > .modal-dialog > .modal-content > .modal-header > .close')
        .click()


   
   
}

const JobWork1 = () => {
    cy.get('#btnJobdetail-0')
        .click()
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
