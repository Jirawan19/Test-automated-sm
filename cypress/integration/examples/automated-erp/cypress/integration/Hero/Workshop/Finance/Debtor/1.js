// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />

context("Workshop Add Repair work", () => {
  // เปิดงานซ่อม
  it("Add job work", () => {
    cy.login("empGrip01", "password");
    //   AddCustomerJob();
    //   AddTechincianOrWorkjob();
    // addCartiees();

    JobWork();
    JobWork1();
  });

  //   ซ่อมบำรุง นำเลขออเดอร์ที่พึ่งเปิดงานซ่อมมาใส่ทุกครั้ง
  it("job work", () => {
    cy.login("empGrip01", "password");
    cy.wait(2000);
    jobwork();
    cy.wait(2000);
    checkStatus();
    checkStatus1();

    Finance();
    // checkFinance();
  });
});

const JobWork = () => {
  cy.get("#nav-item-2").click();
  cy.get("#btn-addRepairJob");
  cy.contains("เพิ่มงานซ่อม").click({ force: true });

  // เลือกลูกค้าและพนักงานซ่อม

  cy.get("#selSelectCar")
    .click({ force: true })
    .type("2253")
    .type("{downarrow}{enter}");

  cy.get("#selSelectmechanicId")
    .click({ force: true })
    .type("เพิ่มช่างซ่อม")
    .type("{downarrow}{enter}");

  cy.get("#selSelectSales")
    .click({ force: true })
    .type("เพิ่มพนักงาน")
    .type("{downarrow}{enter}");

  cy.get("#btnAddProduct").click({ force: true });

  // ค้นหาสินค้า
  cy.wait(4000);

  cy.get("#txtSelectWidth")
    .click({ force: true })
    .wait(1000)
    .type("185")
    .type("{downarrow}{enter}");

  cy.wait(2000);

  cy.get("#txtSelectSeries")
    .click({ force: true })
    .wait(1000)
    .type("16")
    .type("{downarrow}{enter}");

  cy.get("#btnSearchTire").click({ force: true });

  // ค้นหาสินค้า
  cy.get("#trTireCatalog0 > .text-left").contains("เพิ่มยาง");

  // เลือกสินค้า
  cy.get("#dotM-11953").click();
  cy.get(
    "#dotModal-11953 > .modal-dialog > .modal-content > .modal-body > .table > tbody > tr > :nth-child(1)"
  ).should("contain.text", "0319");
  cy.get(
    "#dotModal-11953 > .modal-dialog > .modal-content > .modal-body > .table > tbody > tr > :nth-child(3) > #amount-0 > .el-input-number__increase > .el-icon-plus"
  )
    .click()
    .click()
    .click();
  // cy.get('.modal-body > .table > tbody > tr > :nth-child(2)')
  //     .should("contain.text", "47")
  cy.get(
    "#dotModal-11953 > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  ).click();

  cy.get(".el-notification__closeBtn").click();

  cy.get(
    "#Product > .modal-dialog > .modal-content > .modal-header > .close"
  ).click();

  // เช็ครายการที่เลือก
  cy.get("#tiredata-0 > :nth-child(3)").contains("เพิ่มยาง");

  // ราคาต่อหน่วย
  // cy.get("#tirelatestSalePrice-0")
  //   .click({ force: true })
  //   .clear({ force: true })
  //   .type("5000", { force: true });

  // เช็คราคาของรายการงานซ่อม
  cy.get("#pricetotal").contains("15,000.00");
  cy.get("#paymentPrice").contains("16,050.00 บาท");

  //  บันทึกรายากร
  cy.get("#btncreateWalkInWorkshopJob").click();

  cy.get(".swal2-confirm").click();
};
const JobWork1 = () => {
  cy.wait(1000);
  cy.get("#btnJobdetail-0").click({ force: true });
};
// เพิ่มสินค้า รายละเอียดสินค้า
const addCartiees = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-TIRE").click({ force: true });

  taxCartiees(getRandomNumberCartiees(0, 10));
  taxCartiees1(getRandomNumberCartiees(0, 10));
  taxCartiees2(getRandomNumberCartiees(0, 10));
  taxCartiees3(getRandomNumberCartiees(0, 10));
  taxCartiees4(getRandomNumberCartiees(0, 10));

  cy.get("#txtSelectWidth").click().type("185").type("{enter}");
  cy.get("#txtSelectSeries").click().type("16").type("{enter}");
  cy.get("#txtSelectRim").click().type("15").type("{enter}");

  cy.get("#btnnextTirestep").click();

  // รายละเอียดราคา
  cy.get("#salesPriceTire").clear().type("5000");

  cy.get("#promotionTire").clear().type("4000");

  cy.get("#tiredot-0").clear().type("0319");

  cy.get("#tireamount-0").clear().type("50");

  cy.get("#saveInventoryTire").click();

  // ยืนยันเพิ่มสินค้า
  cy.get(".swal2-confirm").click();
  cy.get("#tab-TIRE").click({ force: true });
};

const getRandomNumberCartiees = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};
const taxCartiees = (textNo) => {
  cy.get("#ItemCodeTire").type("เพิ่มยาง").type(textNo);
};
const taxCartiees1 = (textNo) => {
  cy.get("#brandTire").type("เพิ่มยาง").type(textNo);
};
const taxCartiees2 = (textNo) => {
  cy.get("#itemtagTire").type("เพิ่มยาง").type(textNo);
};
const taxCartiees3 = (textNo) => {
  cy.get("#skuTire").type("เพิ่มยาง").type(textNo);
};
const taxCartiees4 = (textNo) => {
  cy.get("#itemDescriptionTire").type("เพิ่มยาง").type(textNo);
};

// เข้าหน้าเพิ่มพนักงาน
const AddTechincianOrWorkjob = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-employee").click({ force: true });
  cy.get("#btn-addEmp").click({ force: true });

  // กรอกข้อมูลพนักงาน
  taxAddEmployee(getRandomNumberAddEmployee(1, 3));
  cy.get("#roleEmp").select("ช่างซ่อม");
  cy.get("#state-password").type("password");
  taxAddEmployee2(getRandomNumberAddEmployee(1, 5));
  taxAddEmployee1(getRandomNumberAddEmployee(1, 2));
  taxAddEmployee3(getRandomNumberAddEmployee(0, 10));
  cy.get('[success=""]').click();

  cy.get(".swal2-confirm").click();
};
const getRandomNumberAddEmployee = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};
const taxAddEmployee = (textNo) => {
  cy.get("#state-nameEmp").type("เพิ่มช่างซ่อม").type(textNo);
};
const taxAddEmployee1 = (textNo) => {
  cy.get("#state-usernameEmp").type("เพิ่มช่างซ่อม").type(textNo);
};
const taxAddEmployee2 = (textNo) => {
  cy.get("#state-emailEmp")
    .type("เพิ่มช่างซ่อม")
    .type(textNo)
    .type("@gmail.com");
};
const taxAddEmployee3 = (textNo) => {
  cy.get("#state-telEmp").type(textNo);
};
// เข้าหน้าเพิ่มพนักงาน
const AddSupplier = () => {
  cy.get("#nav-item-6").click();
  cy.get("#tab-supplier").click({ force: true });
};

// เพิ่ม Customer
const AddCustomerJob = () => {
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

  // ชำระเงินสด
  cy.wait(2000);
  cy.get("#selPaymentType").click().type("{downarrow}{enter}", { force: true });
  // โอนชำระ
  // cy.get('#selPaymentType')
  //  .click().type("{downarrow}{downarrow}{enter}", { force: true })
  // // เช็ค
  // cy.get('#selPaymentType')
  //         .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")

  cy.get("#btnSubmit").click();

  // ยืนยันเพิ่ม supplier
  cy.get(".swal2-confirm");
  cy.wait(500);
  cy.get(".swal2-confirm").click();
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

const jobwork = () => {
  cy.get("#nav-item-2").click();
  cy.visit("https://herodemo.autopair.co/workshop/jobs/GRIP-01-0921-0070");
  cy.get(".status-border").contains("รอซ่อมบำรุง");
  cy.get("#podata-0 > :nth-child(3)").contains("เพิ่มยาง");
  cy.get("#po-0 > :nth-child(4)").contains("5,000.00");
  cy.get("#po-0 > :nth-child(5)").contains("15,000.00");
  cy.get("#totalPriceFinal").contains("16,050.00 บาท");
  cy.get("#paymentPrice").contains("16,050.00 บาท");

  cy.get("#btnrecheckConfirmstart").click();
  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get(".swal2-confirm").click();
};
const checkStatus = () => {
  cy.get(".status-border").contains("กำลังซ่อมบำรุง");
  cy.get("#paymentPrice").contains("16,050.00 บาท");
  cy.get("#paymentModal").click();

  cy.get("#paymentType").click().type("เครดิต").type("{downarrow}{enter}");
  cy.get("#creditValue").click().type("30").type("{enter}");
  cy.get("#btnrecheckConfirmfinish").click();

  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get(".swal2-confirm").click();
};

const checkStatus1 = () => {
  cy.get(".status-border").contains("รายการเสร็จสิ้น");
  cy.get("#btnBack").click();
};

const Finance = () => {
  cy.get("#nav-item-6").click();
  cy.wait(2000);
  cy.get("#tab-0").click({ force: true });

  cy.get("#selCustomer").click({ force: true }).type("จิรา").type("{enter}");
  cy.get("tbody > tr > :nth-child(1)").contains("จิรา");
  cy.wait(500);
  cy.get(".fc-action > #btnMobileShowBy-0 > img").click({ force: true });

  cy.get(".for-destop").click({ force: true });
  // cy.get("#txtFindOrder").click({ force: true }).type("GRIP").type("{enter}");
  cy.get("#selModalForMonth").type("ตุลาคม").type("{enter}").wait(500);
  cy.get("#btnModalFind").click({ force: true });

  cy.get(
    '[data-v-15d1ab5a=""] > .mt-5 > .table > tbody > :nth-child(1) > :nth-child(2)'
  ).contains("GRIP");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").contains("16,050.00");
  cy.get(":nth-child(1) > :nth-child(1) > .md-label-form > span").click();
  cy.get(".text-right").contains("16,050.00 บาท");
  cy.get("#btnSubmit").click();

  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get(".swal2-confirm").click();
};

const checkFinance = () => {
  cy.get("#tab-show").click({ force: true });
  cy.wait(2000);
  cy.get("#txtFindOrderPo").type("DTGRIP-01-0921-0014");
  cy.wait(500);

  cy.get('.header-col-find > .btn').click();

  cy.get("tr > :nth-child(1) > .primary-blue").click({
    force: true,
  });
  cy.get(".text-right").contains("16,050.00");
  cy.get("#btnฺMobileBack").click();
};
