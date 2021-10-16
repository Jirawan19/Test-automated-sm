/// <reference types="cypress" />

context("Warehouse", () => {
  it("Mag", () => {
    cy.login("empGrip01", "password");
    // AddMag();
    // supplier();

    Addordermag();
    checkordermag();
  });
});

const AddMag = () => {
  cy.get("#nav-item-7").click({ force: true });
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-MAG").click({ force: true });

  // กรอกรายละเอียดสินค้า
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
  cy.get(".swal2-confirm").click();
  cy.get("#tab-MAG").click({ force: true });
};

const supplier = () => {
  cy.get("#nav-item-4").click();
  cy.get("#btnCreate_Other_Tire_PurchaseOrder").click({ force: true });
  cy.get("#selSupplierId > .el-input > .el-input__inner")
    .click({ force: true })
    .type("เพิ่มผู้")
    .type("{downarrow}{enter}");

  cy.get("#state-name").type("test01");
  cy.get("#state-address").type("sky");
  cy.get("#state-mobileNo").type("0955915150");
  cy.get("#state-taxCustomerNumber").type("1100201520688");
  cy.get('[success=""]').click();

  cy.get(".swal2-confirm").click();
};
// เพิ่มรายการซื้อ
const Addordermag = () => {
  cy.get("#nav-item-4").click();
  cy.get("#tab-MAG").click({ force: true });
  cy.get("#btnCreate_Other_Mag_PurchaseOrder").click({ force: true });

  // เลือกผู้จำหน่าย
  cy.get("#selSupplierId > .el-input > .el-input__inner")
    .click({ force: true })
    .type("test")
    .type("{downarrow}{enter}", { force: true });
  cy.get(".d-xl-flex > .col-xl-6 > .btn").click();

  // // รายละเอียดสินค้า
  cy.get("#tab-MAG").click({ force: true });
  cy.get("#txtSearchmagbrand").click().type("19");
  cy.get("#btnSearchMag").click();

  // เช็คและเลือกสินค้า

  // สินค้าชิ้นที่ 1
  cy.get("#pane-MAG > .d-xl-block >").contains("19");

  cy.get("#btnAddmagdesk-0").click();

  cy.get(".close").click();

  // // จำนวน/ราคาต่อหน่วย
  cy.get("#nbrQtyReceived_0").clear().type("5");
  cy.get("#txtPrice_0").clear().type("30");

  // ราคารวม
  cy.get(
    ".col-12.d-none > .table > tfoot > :nth-child(1) > .text-right"
  ).should("contain.text", "150.00");

  cy.get(".row.text-right > :nth-child(2) > #btnCreatePurchaseOrder").click();

  cy.get(".swal2-confirm").click();
};
const checkordermag = () => {
  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();
  cy.get(".status-border").should("contain.text", "รายการเสร็จสิ้น");

  cy.get("tbody > :nth-child(1) > :nth-child(5)").should(
    "contain.text",
    "150.00"
  );

  cy.get(".ml-auto > .nuxt-link-active > .btn").click();
};
