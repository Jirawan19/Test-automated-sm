/// <reference types="cypress" />

context("Warehouse", () => {
  beforeEach(() => {
    cy.visit("https://herodemo.autopair.co/");
  });
  it("Mag", () => {
    cy.login("empGrip01", "password");
    Mag();
    Mag1();
    Mag2();
    confimeMag();

    check();
  });
});

const Mag = () => {
  cy.get("#nav-item-7").click({ force: true });
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-MAG").click({ force: true });
};

// กรอกรายละเอียดสินค้า
const Mag1 = () => {
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
};

// รายละเอียดราคา
// เพิ่มสินค้าตัวเดิมยิดในคลังจะต้องเพิ่ม
const Mag2 = () => {
  cy.get("#amountMag").clear().type("5");
  cy.get("#salesPriceMag").clear().type("30");
  cy.get("#promotionMag").clear().type("20");

  cy.get("#btnsaveInventorymag").click();
};

// ยืนยันเพิ่มสินค้า
const confimeMag = () => {
  cy.get(".swal2-confirm").click();
  cy.get("#tab-MAG").click({ force: true });
};
const check = () => {
  cy.get("#searchWidth > :nth-child(1) > .el-input > .el-input__inner")
    .click({ force: true })
    .type("40");
  cy.wait(500);

  cy.get("#searchRimSize > :nth-child(1) > .el-input > .el-input__inner")
    .click({ force: true })
    .type("17");
  cy.wait(500);

  cy.get(".row.mt-3 > :nth-child(1) > .btn-search").click();
  cy.wait(500);

  cy.get(
    "#pane-MAG > #ordersTable > .d-xl-flex > .table > tbody > #inventorys-0 > .text-left"
  ).contains("เพิ่มแม็ก");

  cy.get(
    "#pane-MAG > #ordersTable > .d-xl-flex > .table > tbody > #inventorys-0 > :nth-child(6) > .btn-details"
  ).click();

  cy.get(
    "#inventorytablemag > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)"
  ).contains("5");

  cy.get(
    "#inventorytablemag > .modal-dialog > .modal-content > .modal-footer > .btn-reset"
  ).click();
};
