// ก่อนเปิดงานซ่อมต้องเช็ค ทะเบียนรถยนต์กับช่างซ่อมก่อน ทุกครั้ง

/// <reference types="cypress" />

context("Workshop Add Repair work", () => {
  it("Add job work", () => {
    cy.login("empGrip01", "password");
    // AddCustomerJob()
    // AddTechincianOrWorkjob()
    addMag();

    JobWork();
    JobWork1();
  });

  // ซ่อมบำรุง นำเลขออเดอร์ที่พึ่งเปิดงานซ่อมมาใส่ทุกครั้ง
  it("job work", () => {
    cy.login("empGrip01", "password");
    cy.wait(2000);
    jobwork();
    cy.wait(2000);
    checkStatus();
    checkStatus1();
  });
});

const JobWork = () => {
  cy.get("#nav-item-2").click();

  cy.contains("เพิ่มงานซ่อม").click({ force: true });

  // เลือกลูกค้าและพนักงานซ่อม
  cy.get("#selSelectCar")
    .click({ force: true })
    .type("9กณ")
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
  cy.wait(1000);

  cy.get("#tab-MAG").click({ force: true });

  cy.get("#searchMagswidth").click().type("40").type("{enter}");

  cy.get("#searchMagsrim").click().type("17").type("{enter}");

  cy.get("#btnsearchmag").click();

  // เลือกสินค้า,ค้นหาสินค้า

  cy.get(
    ".d-xl-block > .table > tbody > tr > .text-left > .primary-blue"
  ).contains("40");

  cy.get('#addMagPo-10612').click();

  cy.get(".el-notification__closeBtn").click();

  cy.get(
    "#Product > .modal-dialog > .modal-content > .modal-header > .close"
  ).click();

  // ตรวจเช็ครายละเอียดสินค้า
  cy.get("#magdata-0").contains("เพิ่มแม็ก 19");

  cy.get("#magqty-0")
    .click({ force: true })
    .clear({ force: true })
    .type("2", { force: true });

  cy.get("#endpricemag-0")
    .click({ force: true })
    .clear({ force: true })
    .type("30", { force: true });
  // ราคาต่อหน่วย
  cy.get("#magmastotal-0").contains("60.00");

  // ราคาสุทธิ
  cy.get("#paymentPrice").contains("64.20 บาท");

  cy.get("#txtNote").click().type("test");

  //  เปิดรายการซ่อม
  cy.get("#btncreateWalkInWorkshopJob").click();

  cy.get(".swal2-confirm").click();
};

const JobWork1 = () => {
  cy.get("#btnJobdetail-0").click({ force: true });
};

// เพิ่มสินค้า รายละเอียดสินค้า
const addMag = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-MAG").click({ force: true });

  cy.get("#ItemCodeMag").type("เพิ่มแม็ก");
  cy.get("#brandMag").type("เพิ่มแม็ก 19");
  cy.get("#cb-0").type("19");
  cy.get("#pcdhod-0").type("5");
  cy.get("#pcdsize-0").type("5");
  cy.get("#pcddec-0").type("5");
  cy.get("#itemoffsetMag").type("500");
  cy.get("#itemcolorMag").type("white");
  cy.get("#model_mag").type("5");
  cy.get("#skuMag").type("25");
  cy.get("#widthMag").click().type("40");
  cy.get("#rimMag").click().type("17");

  cy.get("#btnnextMag").click();

  // รายละเอียดราคา
  cy.get("#amountMag").clear().type("5");
  cy.get("#salesPriceMag").clear().type("30");
  cy.get("#promotionMag").clear().type("20");

  cy.get("#btnsaveInventorymag").click();

  // ยืนยันเพิ่มสินค้า
  cy.get(".swal2-confirm").click({ force: true });
  cy.get("#tab-MAG").click({ force: true });
};
// เข้าหน้าเพิ่มพนักงาน
const AddTechincianOrWorkjob = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-employee").click();
  cy.get("#btn-addEmp").click();

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
  cy.get("#nav-item-7").click();
  cy.get("#tab-supplier").click();
};

// เพิ่ม Customer
const AddCustomerJob = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-customer").click();
  cy.get("#btn-addCustomer").click();

  cy.get("#txtIdCardNumber").type("1100201520688");
  cy.get("#txtAddress").type("168/106");
  cy.get("#txtDistrict > .vth-addr-input-container > .vth-addr-input").type(
    "คลองถนน"
  );
  cy.get("#txtPostCode > .vth-addr-input-container > .vth-addr-input")
    .clear()
    .type("10220")
    .type("{enter}");
  taxAddCustomer(getRandomNumberAddCustomer(0, 12));
  taxAddCustomer1(getRandomNumberAddCustomer(0, 2));
  cy.get("#txtSubDistrict > .vth-addr-input-container > .vth-addr-input")
    .clear()
    .type("สายไหม")
    .type("{enter}");
  taxAddCustomer6(getRandomNumberAddCustomer(0, 10));
  taxAddCustomer3(getRandomNumberAddCustomer(0, 3));

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

  cy.get("#btnNext-2").click({ force: true }).click();

  // ชำระเงินสด
  cy.get("#selPaymentType")
    .click()
    .type("{downarrow}{downarrow}{downarrow}{enter}", { force: true });
  // โอนชำระ
  // cy.get('#selPaymentType')
  //  .click().type("{downarrow}{downarrow}{enter}", { force: true })
  // // เช็ค
  // cy.get('#selPaymentType')
  //         .click().type("{downarrow}{downarrow}{downarrow}{downarrow}{enter}")

  cy.get("#btnSubmit").click();

  // ยืนยันเพิ่ม supplier
  cy.get(".swal2-confirm");
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
  cy.get("#txtName").type("เพิ่มลูกค้า").type(textNo);
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
  cy.visit("https://herodemo.autopair.co/workshop/jobs/GRIP-01-1021-0004");
  cy.get(".status-border").contains("รอซ่อมบำรุง");
  cy.get("#podata-0 > :nth-child(4)").contains("เพิ่มแม็ก");
  cy.get("#po-0 > :nth-child(4)").contains("30.00");
  cy.get("#po-0 > :nth-child(5)").contains("60.00");
  cy.get("#totalPriceFinal").contains("64.20 บาท");
  cy.get("#paymentPrice").contains("64.20 บาท");

  cy.get("#btnrecheckConfirmstart").click();
  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get(".swal2-confirm").click();
};

const checkStatus = () => {
  cy.get(".status-border").contains("กำลังซ่อมบำรุง");
  cy.get("#paymentPrice").contains("64.20 บาท");
  cy.get("#paymentModal").click();

  cy.get("#paymentType").click().type("เงินสด").type("{downarrow}{enter}");
  cy.get("#btnrecheckConfirmfinish").click();

  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get(".swal2-confirm").click();
};

const checkStatus1 = () => {
  cy.get(".status-border").contains("รายการเสร็จสิ้น");
  cy.get("#btnBack").click();
};
