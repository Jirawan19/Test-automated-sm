/// <reference types="cypress" />

context("Finance ATP", () => {
  it("Finance ATP", () => {
    cy.login("empGrip01", "password");
    orderOnlineBrake();
    orderOnlineBrake1();
    checkorderOnlineBrake();
    logout();
  });

  it("supplier receiveATP", () => {
    cy.login("atp-member1", "atp16011986");
    supplierreceive();
    Supllierlogout();
  });

  it("workshop receive", () => {
    cy.login("empGrip01", "password");

    // รับสินค้า อะไหล่ แบบทั้งหมด
    receiveSaleparts();
    checkreceiveparts();

    Finance();
    checkFinance();
  });
});

// เข้าหน้าเพิ่มรายการซื้อ
const orderOnlineBrake = () => {
  cy.get("#nav-item-0").click();

  cy.get("#btnMenu-1").click();
  cy.wait(2000);
};

// เพิ่มรายการซื้ออะไหล่ ระบบเบรก
const orderOnlineBrake1 = () => {
  cy.get("#selSearchPart")
    .wait(2000)
    .click({ force: true })
    .type("ผ้าดิสเบรค{enter}");

  cy.get("#selSearchPartPositions")
    .wait(2000)
    .click({ force: true })
    .type("หลัง", { force: true })
    .type("{enter}");

  cy.get("#selSearchPartBrands")
    .wait(2000)
    .click({ force: true })
    .type("TRW", { force: true })
    .type("{enter}");

  cy.get("#btnAddCartById-2077").click({ force: true });

  cy.get(".el-notification__closeBtn").click();

  // เข้าหน้ารายการซื้อ
  cy.get(".input-group > #btnTopbar_Icon_Cart > img").click();

  // เช็ครายการสินค้า
  cy.get(".td-list-text > :nth-child(1)").contains("ผ้าดิสเบรค หลัง");

  // จำนวน
  cy.get("#txtQtyReciveBySupplyIndex-0-0").clear().type("3");
  // ราคา
  cy.get('thead > [style="cursor: pointer;"] > :nth-child(4)').contains(
    "593.85"
  );

  cy.get(".total-price").contains("1,781.55 บาท");

  cy.get(":nth-child(2) > .btn").click();

  cy.get(".swal2-confirm").click();
};

// เช็ครายการสินค้าที่พึ่งเปิด
const checkorderOnlineBrake = () => {
  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();

  cy.get(".status-border").contains("รอยืนยันรายการ");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).contains("GDB101(COTEC)");
  cy.get("#totalNettd").contains("1,781.55 บาท");

  cy.get("#backtoindex").click();
};

// ออกจากระบบ
const logout = () => {
  cy.get("#dropdownMenuOffset").click();
  cy.get(".btn-group > .dropdown-menu > :nth-child(2)").click();
};
// ออกจากระบบ
const Supllierlogout = () => {
  cy.get("#dropdownMenuOffset").click();
  cy.get(".dropdown-menu > :nth-child(2)").click();
};

const loginsupplierATP = (username, password) => {
  cy.get(".my-4 > .text-left > span").should("contain.text", "ชื่อผู้ใช้งาน");
  cy.get("#username").type(username);
  cy.get(".mb-3 > .text-left > span").should("contain.text", "รหัสผ่าน");
  cy.get("#password").type(password);
  cy.get(".btn-global").click();
};
const supplierreceive = () => {
  // เข้าหน้ารับรายการขาย
  cy.get("#nav-item-0").click();
  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();

  // เช็คสินค้าและราคา
  cy.get(".status-border").contains("รอยืนยันรายการ");

  cy.get(
    ".table-order-wrappe > .table > tbody > tr > .text-left > .primary-blue"
  ).contains("GDB101(COTEC)");
  cy.get(
    ".table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(4)"
  ).contains("ผ้าดิสเบรค หลัง");

  cy.get(":nth-child(1) > .text-right").contains("1,781.55 บาท");

  // บันทึกรับรายการขาย
  cy.get(":nth-child(2) > span > .btn").click();
  cy.get(".swal2-confirm").click();
  cy.wait(1000);
  cy.get(".swal2-confirm").click();
};
// workshop รับรายการอะไหล่ แบบทั้งหมด
const receiveSaleparts = () => {
  cy.get("#nav-item-3").click();

  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();
  // ตรวจเช็ครายการสินค้า
  cy.get(".status-border").contains("รอรับสินค้า");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).contains("GDB101(COTEC)");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)"
  ).contains("ผ้าดิสเบรค หลัง");

  cy.get("#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0")
    .clear()
    .type("3");

  cy.get("tbody > :nth-child(1) > :nth-child(7)").contains("1,781.55");

  cy.get("#totalNettd").contains("1,781.55 บาท");

  // บันทึกรายการ
  cy.get(".d-xl-flex > :nth-child(2) > .btn").click();
  cy.get(".swal2-confirm").click();

  cy.wait(500);

  cy.get(".swal2-confirm").click();
};

const checkreceiveparts = () => {
  cy.get(".status-border").contains("รายการเสร็จสิ้น");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).should("contain.text", "GDB101(COTEC)");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(4)"
  ).should("contain.text", "ผ้าดิสเบรค");

  cy.get("#totalNettd").contains("1,781.55 บาท");

  cy.get("tbody > :nth-child(1) > :nth-child(7)").contains("ยืนยันการส่ง");

  cy.get("#backtoindex").click();
};
const Finance = () => {
  cy.get("#nav-item-6").click();
  cy.get("#btnShowBy-1 > img").click({ force: true });

  cy.get("#btnOpenModal").click({ force: true });
  cy.get("#txtFindOrder").click({ force: true }).type("POATP").wait(500);
  cy.get("#selModalForMonth").type("ตุลาคม").type("{enter}");
  cy.get("#btnModalFind").click();

  //   เช็ครายการที่ต้องการจ่าย
  cy.get("tbody > :nth-child(1) > :nth-child(2)").contains("POATP");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").contains("1,781.55");
  cy.get(":nth-child(1) > :nth-child(1) > .md-label-form > span").click();
  cy.get(
    '.fc-modal > [data-v-6f3531d5=""] > .form-group > #exampleFormControlTextarea1'
  )
    .click({ force: true })
    .type("Test");
  cy.get("#btnSubmit").click({ force: true });

  cy.get(".swal2-confirm").click();
  cy.wait(500);
  cy.get("#swal2-title").contains("บันทึกการชำระเสร็จสิ้น");
  cy.get(".swal2-confirm").click();
};

const checkFinance = () => {
  cy.get("#tab-1").click({ force: true });
  cy.get("tbody > :nth-child(1) > :nth-child(2)").contains("POATP");
  cy.get("tbody > :nth-child(1) > :nth-child(5)").contains("1,781.55");

  cy.get("tbody > :nth-child(1) > :nth-child(1) > .link").click({
    force: true,
  });
  //   cy.get("tbody > :nth-child(1) > :nth-child(1)").contains("POATP");
  //   cy.get("tbody > :nth-child(1) > :nth-child(2)").contains(
  //     "บริษัท ออโต้แพร์ จำกัด"
  //   );
  cy.get(":nth-child(2) > .text-right").contains("1,781.55 บาท");
  cy.get("#btnฺMobileBack").click({ force: true });
};
