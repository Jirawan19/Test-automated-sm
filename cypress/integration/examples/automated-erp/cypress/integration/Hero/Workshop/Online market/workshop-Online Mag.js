// ตลาดค้าส่งออนไลน์ แม็ก/// ไม่มีสินค้า

/// <reference types="cypress" />

context("workshop-OnlineMag", () => {
  it("workshop-OnlineMag", () => {
    cy.login("empGrip01", "password");
    orderOnlineMag();
    orderOnlineMag1();
    checkOrderOnlineMag();
    logout();
  });

  it("supplier receive", () => {
    cy.login("grip-member1", "password");
    supplierreceive();
    Supllierlogout();
  });

  it("workshop receive ", () => {
    cy.login("empGrip01", "password");

  // รับรายการยางรถยนต์ แบบทั้งหมด
    receiveSale()
    checkreceive()

    //   // รับรายการยางรถยนต์ แบบบางชิ้น
    // receiveSale1();
    // checkreceive1();
  });
});
// เข้าหน้าเพิ่มรายการซื้อ
const orderOnlineMag = () => {
  cy.get("#nav-item-0").click();
  cy.get(".swiper-button-next").click({ force: true });
  cy.get("#btnMenu-12").click();
};
// เพิ่มรายการซื้อ ยาง
const orderOnlineMag1 = () => {
  // หน้ากว้าง
  cy.get("#selSearchWidth").click({ force: true }).type("195{enter}");
  // .wait(500)
  // .type("{enter}");

  // // ซีรี่ย์
  // cy.get("#txtSelectSeries")
  //   .click({ force: true })
  //   .type("65")
  //   .wait(500)
  //   .type("{enter}");

  // cy.get("#txtSelectRim")
  //   .click({ force: true })
  //   .type("15")
  //   .wait(500)
  //   .type("{enter}");

  // cy.get("#txtSelectBrand")
  //   .click({ force: true })
  //   .type("TOYO")
  //   .wait(500)
  //   .type("{enter}");

  // เลือกสินค้า
  cy.get("#btnAddCartById-50").click();

  cy.get(".el-notification__closeBtn").click();

  // เข้าหน้ารายการซื้อ
  cy.get(".input-group > #btnTopbar_Icon_Cart > img").click();

  // เช็ครายการสินค้า
  cy.get(".td-list-text > :nth-child(1)").contains("ล้อแม็ก (TORQ TAR)");

  // จำนวน
  cy.get("#txtQtyReciveBySupplyIndex-0-0").click().clear().type("2");

  cy.get('thead > [style="cursor: pointer;"] > :nth-child(4)').contains(
    "2,400.00"
  );

  cy.get(".total-price").contains("4,800.00 บาท");

  // ยืนยันการซื้อสินค้า
  cy.get(":nth-child(2) > .btn").click();
  cy.get(".swal2-confirm").click();
};

// เช็ครายการสินค้าที่พึ่งเปิด
const checkOrderOnlineMag = () => {
  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();

  cy.get(".status-border").contains("รอยืนยันรายการ");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).contains("15 X 195 4H100 ET 35 106.2,190.50");
  cy.get("#totalNettd").contains("4,800.00 บาท");

  cy.get("#backtoindex").click();
};

// ออกจากระบบ
const logout = () => {
  cy.get("#dropdownMenuOffset").click();
  cy.get(".dropdown-menu > :nth-child(2)").click();
};
// ออกจากระบบ
const Supllierlogout = () => {
  cy.get("#dropdownMenuOffset").click();
  cy.get(".dropdown-menu > :nth-child(2)").click();
};

const loginsupplier = (username, password) => {
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

  cy.pause();
  cy.get(
    ".table-order-wrappe > .table > tbody > tr > .text-left > .primary-blue"
  ).contains("15 X 195 4H100 ET 35 106.2,190.50");
  // cy.get(
  //   ".table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(3)"
  // ).contains("NANO ENERGY 3");
  // cy.get(
  //   ".table-order-wrappe > .table > tbody > tr > .text-left > :nth-child(5)"
  // ).contains("TOYO");

  cy.get(":nth-child(1) > .text-right").contains("4,800.00 บาท");

  // บันทึกรับรายการขาย
  cy.get(":nth-child(2) > span > .btn").click();
  cy.get(".swal2-confirm").click();
  cy.wait(1000);

  cy.get(".swal2-confirm").click();
};

// รับสินค้าทั้งหมด
const receiveSale = () => {
  cy.get("#nav-item-3").click();

  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();
  // ตรวจเช็ครายการสินค้า
  cy.get(".status-border").contains("รอรับสินค้า");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).contains("195 / 65 R 15");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)"
  ).contains("NANO ENERGY 3");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)"
  ).contains("TOYO");

  // กรอกจำนวนและ dot ที่รับสินค้า
  cy.get("#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0")
    .clear()
    .type("2");
  cy.get("#txtPurchaseOrderItemQtyReceivedDots_Dot_0").clear().type("1903");

  // กรอก ราคาสินค้า
  cy.get("#txtPrice_0").click().clear().type("2000");

  cy.get("#totalNettd").contains("4,000.00 บาท");

  // บันทึกรับรายการขาย
  cy.get("#saveConfirm").click();
  cy.get(".swal2-confirm").click();
  cy.wait(1000);
  cy.get(".swal2-confirm").click();
};

// เช็คสถานะ
const checkreceive = () => {
  cy.get(".status-border").contains("รายการเสร็จสิ้น");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).should("contain.text", "195 / 65 R 15");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)"
  ).should("contain.text", "NANO ENERGY 3");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)"
  ).should("contain.text", "TOYO");
  cy.get("#totalNettd").contains("4,000.00 บาท");
  cy.get("tbody > :nth-child(1) > :nth-child(7)").contains("ยืนยันการส่ง");

  cy.get("#backtoindex").click();
};

// รับสินค้าบางชิ้น
const receiveSale1 = () => {
  cy.get("#nav-item-3").click();

  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();
  // ตรวจเช็ครายการสินค้า
  cy.get(".status-border").contains("รอรับสินค้า");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).contains("195 / 65 R 15");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)"
  ).contains("NANO ENERGY 3");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)"
  ).contains("TOYO");

  // กรอกจำนวนและ dot ที่รับสินค้า
  cy.get("#nbrPurchaseOrderItemQtyReceivedDots_QtyReceived_0")
    .clear()
    .type("1");
  cy.get("#txtPurchaseOrderItemQtyReceivedDots_Dot_0").clear().type("1903");

  // กรอก ราคาสินค้า
  cy.get("#txtPrice_0").click().clear().type("2000");

  cy.get("#totalNettd").contains("4,000.00 บาท");

  // บันทึกรับรายการขาย
  cy.get("#saveConfirm").click();
  cy.get(".swal2-confirm").click();
  cy.wait(1000);
  cy.get(".swal2-confirm").click();
};

const checkreceive1 = () => {
  cy.get(".status-border").contains("รับสินค้าบางส่วน");

  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > .primary-blue"
  ).should("contain.text", "195 / 65 R 15");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(3)"
  ).should("contain.text", "NANO ENERGY 3");
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left > :nth-child(5)"
  ).should("contain.text", "TOYO");
  cy.get("tbody > :nth-child(1) > :nth-child(8)").contains("4,000.00");
  cy.get("#backtoindex").click();
};
