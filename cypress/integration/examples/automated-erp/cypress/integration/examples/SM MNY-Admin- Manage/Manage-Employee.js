/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Admin Manage-Add/Employee", () => {
    beforeEach(() => {
        cy.visit("https://smdevdemo.autocareth.com/")
    })
    it("Admin Manage-AddEmployee", () => {
        ManageEmployee("MNY-ADMIN-test", "MNYadmin1")
        // เพิ่มหัวหน้าพนักงานขาย
        ManageEmployee1()
        // เช็คหัวหน้าพนักงานขายที่เพิ่มใหม่
        ManageEmployee2()
        // เพิ่มพนักงานขาย
        ManageEmployee3()
        // เช็คหัวหน้าพนักงานขายที่เพิ่มใหม่
        ManageEmployee4()
        // เพิ่มร้านค้าใหห้พนักงาน
        ManageEmployee5()
        // เช็คร้านค้าให้พนักงาน
        ManageEmployee6()
    })
})
const ManageEmployee = (username, password) => {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('.btn').click()
}
// ขั้นตอนเพิ่ม หัวหน้าพนักงาน
const ManageEmployee1 = () => {

    cy.get('[href="/supplier/management"] > .el-menu-item').click()
    cy.get('h4').should("contain.text", "จัดการพนักงาน และ ร้านค้า")
    cy.get(':nth-child(1) > .nav-link').should("contain.text", "พนักงาน")
    cy.get('#employee > .mb-2 > .col-xl > .order-1 > .btn').should("contain.text", "+ เพิ่มพนักงาน")
    cy.get('#employee > .mb-2 > .col-xl > .order-1 > .btn').click()
    cy.get('.col-sm-12 > h2').should("contain.text", "เพิ่มพนักงาน")
    cy.get(':nth-child(1) > .primary-blue > h5').should("contain.text", "ชื่อพนักงาน")
    cy.get(':nth-child(1) > .form-control').type("Test2")
    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "สิทธ์การใช้งาน (Roles)")
    cy.get('.el-input__inner').click().type("{downarrow}{enter}")
    cy.get(':nth-child(3) > .primary-blue > h5').should("contain.text", "Username")
    cy.get(':nth-child(3) > .form-control').type("Test-Admin2")
    cy.get(':nth-child(4) > .primary-blue > h5').should("contain.text", "Password")
    cy.get(':nth-child(4) > .form-control').type("test-admin1")
    cy.get(':nth-child(5) > .primary-blue > h5').should("contain.text", "E-mail")
    cy.get(':nth-child(5) > .form-control').type("Test2@gmail.com")
    cy.get(':nth-child(6) > .primary-blue > h5').should("contain.text", "เบอร์โทรศัพท์")
    cy.get(':nth-child(6) > .form-control').type("0123456788")
    cy.get(':nth-child(7) > .primary-blue > h5').should("contain.text", "เขตรับผิดชอบ")
    cy.get(':nth-child(7) > .form-control').type("กทม.")
    cy.get(':nth-child(2) > .btn').should("contain.text", "บันทึก")
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มพนักงานเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}
// เช็คข้อมูลพนักงานที่เพิ่มใหม่ หัวหน้าพนักงานขาย
const ManageEmployee2 = () => {
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "ลำดับ")
    cy.get('tbody > :nth-child(3) > :nth-child(1)').should("contain.text", "3")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "ชื่อพนักงาน")
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should("contain.text", "Test2")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(3)')
        .should("contain.text", "เบอร์โทรศัพท์")
    cy.get('tbody > :nth-child(3) > :nth-child(3)').should("contain.text", "0123456788")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "พื้นที่รับผิดชอบ")
    cy.get('tbody > :nth-child(3) > :nth-child(4)').should("contain.text", "กทม.")
}
// ขั้นตอน เพิ่มพนักงาน
const ManageEmployee3 = () => {

    cy.get('[href="/supplier/management"] > .el-menu-item').click()
    cy.get('h4').should("contain.text", "จัดการพนักงาน และ ร้านค้า")
    cy.get(':nth-child(1) > .nav-link').should("contain.text", "พนักงาน")
    cy.get('#employee > .mb-2 > .col-xl > .order-1 > .btn').should("contain.text", "+ เพิ่มพนักงาน")
    cy.get('#employee > .mb-2 > .col-xl > .order-1 > .btn').click()
    cy.get('.col-sm-12 > h2').should("contain.text", "เพิ่มพนักงาน")
    cy.get(':nth-child(1) > .primary-blue > h5').should("contain.text", "ชื่อพนักงาน")
    cy.get(':nth-child(1) > .form-control').type("Test3")
    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "สิทธ์การใช้งาน (Roles)")
    cy.get('.el-input__inner').click().type("{downarrow}{downarrow}{enter}")
    cy.get(':nth-child(3) > .primary-blue > h5').should("contain.text", "Username")
    cy.get(':nth-child(3) > .form-control').type("Test-Admin3")
    cy.get(':nth-child(4) > .primary-blue > h5').should("contain.text", "Password")
    cy.get(':nth-child(4) > .form-control').type("test-admin3")
    cy.get(':nth-child(5) > .primary-blue > h5').should("contain.text", "E-mail")
    cy.get(':nth-child(5) > .form-control').type("Test3@gmail.com")
    cy.get(':nth-child(6) > .primary-blue > h5').should("contain.text", "เบอร์โทรศัพท์")
    cy.get(':nth-child(6) > .form-control').type("0123456787")
    cy.get(':nth-child(7) > .primary-blue > h5').should("contain.text", "เขตรับผิดชอบ")
    cy.get(':nth-child(7) > .form-control').type("กทม.หลวง")
    cy.get(':nth-child(2) > .btn').should("contain.text", "บันทึก")
    cy.get(':nth-child(2) > .btn').click()
    cy.get('#swal2-title').should("contain.text", "สำเร็จ")
    cy.get('#swal2-content').should("contain.text", "เพิ่มพนักงานเรียบร้อย")
    cy.get('.swal2-confirm').should("contain.text", "OK")
    cy.get('.swal2-confirm').click()
}

// เช็คข้อมูลพนักงานที่เพิ่มใหม่ 
const ManageEmployee4 = () => {
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(1)')
        .should("contain.text", "ลำดับ")
    cy.get('tbody > :nth-child(4) > :nth-child(1)').should("contain.text", "4")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "ชื่อพนักงาน")
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should("contain.text", "Test3")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(3)')
        .should("contain.text", "เบอร์โทรศัพท์")
    cy.get('tbody > :nth-child(4) > :nth-child(3)').should("contain.text", "0123456787")
    cy.get('#employee > #ordersTable > .table-responsive > .table > thead > tr > :nth-child(4)')
        .should("contain.text", "พื้นที่รับผิดชอบ")
    cy.get('tbody > :nth-child(4) > :nth-child(4)').should("contain.text", "กทม.หลวง")
}
// เพิ่มร้านให้พนักงาน Test3
const ManageEmployee5 = () => {
    cy.get(':nth-child(4) > :nth-child(5) > [href="/supplier/management/MY-MEMBER-0006"] > #icon_detail')
        .click()
    cy.get(':nth-child(1) > .text-left').should("contain.text", "ข้อมูลพนักงาน")
    cy.get(':nth-child(1) > :nth-child(1) > .primary-blue > h5')
        .should("contain.text", "ชื่อพนักงาน")
    cy.get(':nth-child(1) > :nth-child(2) > .primary-blue > h5')
        .should("contain.text", "รหัสประจำตัวพนักงาน")
    cy.get(':nth-child(4) > .text-left').should("contain.text", "ข้อมูลร้านอะไหล่")
    cy.get('.col-lg-auto > .btn').should("contain.text", "เพิ่มร้าน ให้พนักงาน")
    cy.get('.col-lg-auto > .btn').click()
    cy.get('.modal-header').should("contain.text", "เลือกร้านอะไหล่")
    cy.get('.modal-body > .table-responsive > .table > thead > tr > :nth-child(2)')
        .should("contain.text", "ร้านอะไหล่")
    cy.get('#retail-1 > :nth-child(1) > .btn').click()
    cy.get('#retail-0 > :nth-child(1) > .btn').click()
    cy.get('.modal-footer > .btn').should("contain.text", "บันทึก")
    cy.get('.modal-footer > .btn').click()
}
// เช็คร้านที่เพิ่มให้พนักงาน
const ManageEmployee6 = () => {
    cy.get(':nth-child(1) > [style="text-align: center;"]')
        .should("contain.text", "บริษัท มโนยนต์ชัย จำกัด")
    cy.get(':nth-child(2) > [style="text-align: center;"]')
        .should("contain.text", "บริษัท ออโต้แพร์ จำกัด (สำนักงานใหญ่)")
}
