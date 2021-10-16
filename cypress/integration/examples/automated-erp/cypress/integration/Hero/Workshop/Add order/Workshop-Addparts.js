/// <reference types="cypress" />

context("Warehouse", () => {
  it("Parts", () => {
    cy.login("empGrip01", "password");
    // addParts();
    // supplier();

    Addorderparts();
    checkorderparts();
  });
});
// กรอกรายละเอียดสินค้า
const addParts = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-PART").click({ force: true });

  taxParts(getRandomNumberParts(1, 10));
  cy.get("#fitmentDetail").click().type("{downarrow}{enter}");
  taxParts1(getRandomNumberParts(1, 10));
  taxParts2(getRandomNumberParts(1, 10));
  taxParts3(getRandomNumberParts(1, 10));
  cy.get("#itemDescription").type("เพิ่มอะไหล่");

  cy.get("#btnNextPart").click();

  // รายละเอียดราคา
  cy.get("#amountRemainStock").clear().type("10");
  cy.get("#unit").click().type("{downarrow}{enter}");
  cy.get(":nth-child(3) > .mt-2 > #salesPricePart").clear().type("200");
  cy.get(":nth-child(4) > .mt-2 > #salesPricePart").clear().type("150");
  cy.get("#btnsaveInventoryPart").click();

  // ยืนยันเพิ่มสินค้า
  cy.get(".swal2-confirm").click();
  cy.get("#tab-PART").click({ force: true });

  // เช็คสินค้าที่เพิ่ม
  cy.get("#inventorys-0 > :nth-child(7) > .btn-details").click({ force: true });
  cy.wait(1000);
  cy.get(
    "#inventorytablepart > .modal-dialog > .modal-content > .modal-footer > .btn-reset"
  ).click({ force: true });
  cy.wait(1000);
};

const getRandomNumberParts = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};

const taxParts = (textNo) => {
  cy.get("#itemName").type("เพิ่มอะไหล่").type(textNo);
};
const taxParts1 = (textNo) => {
  cy.get("#brand").type("เพิ่มอะไหล่").type(textNo);
};
const taxParts2 = (textNo) => {
  cy.get("#manufacturerNo").type("เพิ่มอะไหล่").type(textNo);
};
const taxParts3 = (textNo) => {
  cy.get("#oeNo").type("เพิ่มอะไหล่").type(textNo);
};

const supplier = () => {
  cy.get("#nav-item-4").click();
  cy.get("#btnCreate_Other_Tire_PurchaseOrder").click({ force: true });
  cy.get("#selSupplierId > .el-input > .el-input__inner")
    .click({ force: true })
    .type("เพิ่มผู้")
    .type("{downarrow}{enter}");

  cy.get("#state-name").type("เพิ่มอะไหล่");
  cy.get("#state-address").type("sky");
  cy.get("#state-mobileNo").type("0955915150");
  cy.get("#state-taxCustomerNumber").type("1100201520688");
  cy.get('[success=""]').click();

  cy.get(".swal2-confirm").click();
};

// เพิ่มรายการซื้อ
const Addorderparts = () => {
  // แท็บรายการซื้อ
  cy.get("#nav-item-4").click();
  cy.get("#tab-PART").click({ force: true });
  cy.get("#btnCreate_Other_Part_PurchaseOrder").click({ force: true });

  cy.get(".row > :nth-child(1) > .el-select > .el-input > .el-input__inner")
    .click()
    .type("test")
    .wait(500)
    .type("{downarrow}{enter}");
  cy.get(".d-xl-flex > .col-xl-6 > .btn").click();

  // รายละเอียดสินค้า
  cy.get("#tab-PART").click();
  cy.wait(10000);
  cy.get("#txtpartBrand").click().type("เพิ่มอะไหล่");
  cy.get("#btnSearchPart").click();

  // เลือกสินค้า
  cy.get(
    "#pane-PART > .d-xl-block > .table > tbody > :nth-child(1) > :nth-child(1)"
  ).contains("เพิ่มอะไหล่");

  cy.get("#btnAddPartdesk-0").click({ force: true });

  cy.get(".close").click();

  // เช็คสินค้าที่เลือก
  // สินค้าชิ้นที่ 1
  cy.get(":nth-child(1) > :nth-child(4) > .row > .quantity > input")
    .clear()
    .type("3");
  // // ราคาต่อหน่วย
  cy.get(
    ".col-12.d-none > .table > tbody > tr > td.align-middle > .row > .mt-3 > .form-control"
  )
    .clear()
    .type("30");

  // ราคารวม
  cy.get(".col-12.d-none > .table > tbody > tr > :nth-child(6)").should(
    "contain.text",
    "90.00"
  );

  cy.get(".row.text-right > :nth-child(2) > .btn").click();

  cy.get(".swal2-confirm").click();
  // **
};
const checkorderparts = () => {
  cy.get(":nth-child(1) > :nth-child(1) > a > .primary-blue").click();

  cy.get("tbody > :nth-child(1) > :nth-child(5)").should(
    "contain.text",
    "90.00"
  );
  cy.get(
    ".table-order-wrapper.d-none > .table > tbody > :nth-child(1) > .text-left"
  ).contains("เพิ่มอะไหล่");

  cy.get(".ml-auto > .nuxt-link-active > .btn").click();
};
