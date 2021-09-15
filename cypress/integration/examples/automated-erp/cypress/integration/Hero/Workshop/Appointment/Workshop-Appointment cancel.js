// เพิ่มนัดหมายและยกเลิก

/// <reference types="cypress" />

context("Service", () => {
  it("Add Appointment", () => {
    cy.login("empGrip01", "password");
    // addcustomer00();
    AddAppointment();

    checkAppointment();
  });
});

const addcustomer00 = () => {
  // เพิ่มลูกค้า
  cy.get("#nav-item-7").click();
  cy.get("#tab-customer").click({ force: true });
  cy.get("#btn-addCustomer").click({ force: true });

  // กรอกข้อมูลลูกค้า
  taxAddCustomer1(getRandomNumberAddCustomer(0, 2));
  // taxAddCustomer3(getRandomNumberAddCustomer(0, 3))
  cy.get("#txtIdCardNumber").click().type("1100201520688");
  // taxAddCustomer(getRandomNumberAddCustomer(0, 12))
  cy.get("#txtAddress").click().type("168/106");
  cy.get("#txtDistrict > .vth-addr-input-container > .vth-addr-input")
    .click()
    .type("คลองถนน");
  cy.get("#txtPostCode > .vth-addr-input-container > .vth-addr-input")
    .clear()
    .click()
    .type("10220")
    .type("{enter}");
  cy.get("#txtSubDistrict > .vth-addr-input-container > .vth-addr-input")
    .clear()
    .click()
    .type("สายไหม")
    .type("{enter}");
  taxAddCustomer6(getRandomNumberAddCustomer(0, 10));
  cy.get("#step0 > .row > .step_row_footer > .btn-select").click();

  cy.get("#btnNext-1").click({ force: true });

  // กรอกข้อมูลรถยนต์
  taxAddCustomer4(getRandomNumberAddCustomer(1, 3));
  taxAddCustomer5(getRandomNumberAddCustomer(0, 5));
  cy.get("#selCarBrand")
    .click()
    .type("{downarrow}{downarrow}{enter}", { force: true });
  cy.get("#input_carModel")
    .click()
    .wait(500)
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });
  cy.get("#step2-province")
    .click({ force: true })
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });

  cy.get("#selCartype")
    .click({ force: true })
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });

  cy.get("#selCarYear")
    .click({ force: true })
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });
  cy.get("#selCarGear")
    .click({ force: true })
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });
  cy.get("#latestMileages").type("500");

  cy.get("#btnNext-2").click({ force: true });

  // สถานะการชำระเงินและรับข่าวสาร
  // ชำระเงินสด
  cy.wait(2000);
  cy.get("#selPaymentType").click().type("{downarrow}{enter}", { force: true });

  // โอนชำระ
  // cy.get('#step2 > .row > :nth-child(2) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
  //     .click().type("{downarrow}{downarrow}{enter}", { force: true })
  // เช็ค
  // cy.get('#step2 > .row > :nth-child(2) > .mb-4-CustomStyle > .el-select > .el-input > .el-input__inner')
  //     .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")

  cy.get(".md-btn-success").click();

  cy.get(".swal2-confirm").click();
};
const AddAppointment = () => {
  cy.get("#nav-item-1").click({ force: true });

  cy.get(".text-right > .el-button").click({ force: true });

  cy.get("#car-id").click().type("9กณ").wait(2000).type("{downarrow}{enter}");
  cy.get("#date-1").click();
  cy.get(":nth-child(4) > :nth-child(3) > div").click();
  // cy.get('.el-date-table > tbody > :nth-child(3) > :nth-child(3) > div')
  //     .click()
  cy.get("#time").click().type("{downarrow}{enter}");
  cy.get("#customer-story").type("test");
  cy.get(".el-textarea__inner").type("test");

  cy.get('[success=""]').click();

  cy.get(".swal2-confirm").click();

  cy.get("#calendar_tb_btn").click({ force: true });
};
const getRandomNumberAddCustomer = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};
const taxAddCustomer = (textNo) => {
  cy.get("#txtTelNo").type(textNo);
};
const taxAddCustomer1 = (textNo) => {
  cy.get("#txtName")
    .type("เพิ่มลูกค้า")
    .type(textNo)
    .tab()
    .tab()
    .tab()
    .tab()
    .wait(1000)
    .type("0955915150");
};
const taxAddCustomer2 = (textNo) => {
  cy.get(".bv-no-focus-ring > #idCardNumber").type("1100201520688");
};
const taxAddCustomer3 = (textNo) => {
  cy.get("#txtMobileNo").type(textNo);
};
const taxAddCustomer4 = (textNo) => {
  cy.get("#txtCarRegistrationNumber").click().type("9กณ").type(textNo);
};
const taxAddCustomer5 = (textNo) => {
  cy.get("#vinNos").click().type(textNo);
};
const taxAddCustomer6 = (textNo) => {
  cy.get("#email").click().type("test").type(textNo).type("@gmail.com");
};

const checkAppointment = () => {
  cy.get("tbody > :nth-child(1) > .text-left").contains("9กณ");
  cy.get(".table > tbody > :nth-child(1) > :nth-child(4)").contains("test");
  // cy.get(':nth-child(1) > [style="width: 12rem;"] > .status-border').contains(
  //   "นัดหมายใหม่"
  // );
  cy.get(':nth-child(1) > [style="width: 10rem;"] > .row > .btn-details').click(
    { force: true }
  );
  cy.get(".md-btn-inactive").click({ force: true });
  cy.get(".swal2-confirm").click({ force: true });
  cy.wait(500);
  cy.get(".swal2-confirm").click({ force: true });
  cy.get("#calendar_tb_btn").click({ force: true });
  cy.get("tbody > :nth-child(1) > .text-left").contains("9กณ");
  cy.get(".table > tbody > :nth-child(1) > :nth-child(4)").contains("test");
  cy.get(':nth-child(1) > [style="width: 12rem;"] > .status-border').contains(
    "ยกเลิกนัดหมาย"
  );
};
