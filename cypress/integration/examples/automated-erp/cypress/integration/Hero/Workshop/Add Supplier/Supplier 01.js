/// <reference types="cypress" />

Cypress.config('defaultCommandTimeout', 100000)

context("Add Supplier", () => {
    beforeEach(() => {
        cy.visit("https://hero.autopair.co/")
    })
    // สมัครอู่
    it("Add Supplier", () => {
        addSupplier()
        addSupplier1()
    })
    it("Admin", () => {
        loginAdmin("admin", "admin")
        Admin1()
        logout()
    })

})

const addSupplier = () => {
    cy.get('.pl-0 > .text-info').should("contain.text", "สมัครสมาชิก")
    cy.get('.pl-0 > .text-info').click()

    // ข้อมูลอู่
    cy.get(':nth-child(1) > .primary-blue > h5').should("contain.text", "")
    taxAddsupplier8(getRandomTex(1, 5))

    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "")
    taxAddsupplier5(getRandomTex(1, 5))

    cy.get(':nth-child(3) > .primary-blue > h5').should("contain.text", "")
    taxAddsupplier(getRandomTex(1, 13))

    cy.get(':nth-child(4) > .primary-blue').should("contain.text", "เบอร์โทรศัพท์")
    taxAddsupplier1(getRandomTex(1, 10))

    cy.get(':nth-child(5) > .primary-blue').should("contain.text", "อีเมล์")
    taxAddsupplier2(getRandomTex(1, 3))

    cy.get(':nth-child(6) > .primary-blue > h5').should("contain.text", "")
    cy.get('#workshop-address').type("168/106")

    cy.get(':nth-child(7) > .primary-blue > h5').should("contain.text", "")

    cy.get(':nth-child(7) > .vth-addr-container > .vth-addr-input-container > .vth-addr-input')
        .type("คลองถนน").type("{downarrow}{downarrow}{enter}")

    cy.get('.btn').should("contain.text", "ถัดไป")
    cy.get('.btn').click()

    // cy.get('.swal2-confirm').click()

    // cy.get('.btn').should("contain.text", "ถัดไป")
    // cy.get('.btn').click()
}
// ข้อมูลผู้ใช้งาน
const addSupplier1 = () => {
    cy.get('[style="flex-basis: 50%; max-width: 50%; z-index: 0;"] > .el-step__main > .el-step__title')
        .should("contain.text", "ข้อมูลผู้ใช้งาน")

    cy.get(':nth-child(1) > .primary-blue > h5').should("contain.text", "")
    taxAddsupplier7(getRandomTex(1, 3))

    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "")
    cy.get('#last-name').type("01")

    cy.get(':nth-child(3) > .primary-blue').should("contain.text", "เบอร์โทรศัพท์")
    taxAddsupplier1(getRandomTex(1, 10))

    cy.get(':nth-child(4) > .primary-blue').should("contain.text", "")
    taxAddsupplier3(getRandomTex(1, 10))

    cy.get(':nth-child(5) > .primary-blue').should("contain.text", "")
    taxAddsupplier6(getRandomTex(1, 10))

    cy.get(':nth-child(6) > .primary-blue').should("contain.text", "")
    cy.get('#password').type("password")

    cy.wait(2000)

    cy.get('[success=""]').should("contain.text", "บันทึก")
    cy.get('[success=""]').click()

    // cy.get('.swal2-confirm').click()

    // cy.get('[success=""]').should("contain.text", "บันทึก")
    // cy.get('[success=""]').click()

    // ยืนยัน
    cy.get('#swal2-title').should("contain.text", "การสมัครเสร็จสมบูรณ์")
    cy.get('#swal2-content').should("contain.text", "รอให้adminอนุมัติ")
    cy.get('.swal2-confirm').should("contain.text", "ตกลง")
    cy.get('.swal2-confirm').click()
}


const getRandomTex = (min, max) => {
    0, 0
    return Math.random() * (max - min) + min;
}
const taxAddsupplier = (textNo) => {
    cy.get('#work-tax')
        .type(textNo)
}
const taxAddsupplier1 = (textNo) => {
    cy.get('#telNo')
        .type(textNo)
}
const taxAddsupplier2 = (textNo) => {
    cy.get('#work-email')
        .type("nam test").type(textNo).type("@gmail.com")
}
const taxAddsupplier3 = (textNo) => {
    cy.get('#user-email')
        .type("nam test").type(textNo).type("@gmail.com")
}
const taxAddsupplier4 = (textNo) => {
    cy.get('#username')
        .type("test").type(textNo)
}

// ต้องคอยเปลี่ยนเพื่อไม่ให้ขึ้นซ้ำ
const taxAddsupplier5 = (textNo) => {
    cy.get('#workshop-id')
        .type("ASS").type(textNo)
}

// ต้องคอยเปลี่ยนเพื่อไม่ให้ขึ้นซ้ำ
const taxAddsupplier6 = (textNo) => {
    cy.get('#username')
        .type("Supplier test").type(textNo)
}

const taxAddsupplier7 = (textNo) => {
    cy.get('#first-name')
        .type("Supplier").type(textNo)
}
const taxAddsupplier8 = (textNo) => {
    cy.get('#workshop-name')
        .type("สมัครอู่").type(textNo)
}

const loginAdmin = (username, password) => {
    cy.get('.my-4 > .text-left > span').should("contain.text", "ชื่อผู้ใช้งาน")
    cy.get('#username').type(username)
    cy.get('.mb-3 > .text-left > span').should("contain.text", "รหัสผ่าน")
    cy.get('#password').type(password)
    cy.get('.btn-global').click()
}

const Admin1 = () => {
    cy.get('h3').should("contain.text", "")
    cy.get(':nth-child(2) > .nav-link > .row').click()

    cy.get('#customer-0 > :nth-child(3) > a > .btn-details')
        .should("contain.text", "ดูรายละเอียด")
    cy.get('#customer-0 > :nth-child(3) > a > .btn-details').click()

    cy.get('h3').should("contain.text", "รายละเอียดอู่")
    cy.get(':nth-child(1) > .primary-blue').should("contain.text", "")
    cy.get(':nth-child(2) > .primary-blue > h5').should("contain.text", "")

    cy.get('.content > :nth-child(1) > :nth-child(1)').should("contain.text", "แก้ไข")
    cy.get('[warning=""]').click({ force: true })

    cy.get('.the-enable').should("contain.text", "ปิดการใช้งาน")
    cy.get('.el-switch__core').click()
    cy.get('.the-enable').should("contain.text", "เปิดการใช้งาน")


    cy.get('.md-rows > div > .btn').should("contain.text", "บันทึก")
    cy.get('.md-rows > div > .btn').click()

    cy.get('#swal2-title').should("contain.text", "เรียบร้อย")
    cy.get('#swal2-content').should("contain.text", "การแก้ไขเสร็จสมบูรณ์")
    cy.get('.swal2-confirm').should("contain.text", "ตกลง")
    cy.get('.swal2-confirm').click()

    cy.get('#customer-0 > :nth-child(3) > a > .btn-details').click()
    cy.get('.the-enable').should("contain.text", "เปิดการใช้งาน")
    cy.get('.mr-5').click()

}
// ออกจากระบบ
const logout = () => {
    cy.get('#dropdownMenuOffset').click()
    cy.get('.btn-group > .dropdown-menu > :nth-child(2)').click()
}