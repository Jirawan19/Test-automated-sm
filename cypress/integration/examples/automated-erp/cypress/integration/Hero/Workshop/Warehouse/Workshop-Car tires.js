/// <reference types="cypress" />

context("Warehouse", () => {
  beforeEach(() => {
    cy.visit("https://herodemo.autopair.co/");
  });
  it("Car tiees", () => {
    cy.login("empGrip01", "password");
    Cartiees();
    Cartiees1();
    confimeCartiees();

    check();
  });
});
// รายละเอียดสินค้า
const Cartiees = () => {
  cy.get("#nav-item-7").click({ force: true });
  cy.get("#tab-inventory").click({ force: true });
  cy.wait(2000);
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-TIRE").click({ force: true });

  taxCartiees(getRandomNumberCartiees(0, 10));
  taxCartiees1(getRandomNumberCartiees(0, 10));
  taxCartiees2(getRandomNumberCartiees(0, 10));
  taxCartiees3(getRandomNumberCartiees(0, 10));
  taxCartiees4(getRandomNumberCartiees(0, 10));

  cy.get("#txtSelectWidth").click().type("{downarrow}{downarrow}{enter}");
  cy.get("#txtSelectSeries").click().type("{downarrow}{downarrow}{enter}");
  cy.get("#txtSelectRim").click().type("{downarrow}{downarrow}{enter}");

  cy.get("#btnnextTirestep").click();
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

// รายละเอียดราคา
const Cartiees1 = () => {
  cy.get("#salesPriceTire").clear().type("100");

  cy.get("#promotionTire").clear().type("50");

  cy.get("#tiredot-0").clear().type("0319");

  cy.get("#tireamount-0").clear().type("50");

  cy.get("#saveInventoryTire").click();
};

// ยืนยันเพิ่มสินค้า
const confimeCartiees = () => {
  cy.get(".swal2-confirm").click();
  cy.get("#tab-TIRE").click({ force: true });
};

const check = () => {
  cy.wait(1000);
  cy.get("#txtSelectWidth")
    .click({ force: true })
    .type("{downarrow}{enter}");
  cy.wait(500);
  cy.get("#txtSelectSeries")
    .click({ force: true })
    .type("{downarrow}{enter}");
  cy.wait(500);
  cy.get("#txtSelectRim")
    .click({ force: true })
    .type("{downarrow}{enter}");
    
  cy.get(".row.mt-4 > :nth-child(1) > .btn-search").click({ force: true });
  cy.wait(500);
  cy.get(
    "#pane-TIRE > #ordersTable > .d-none > .table > tbody > #inventorys-0 > .text-left"
  ).contains("เพิ่มยาง");
  cy.get(
    "#pane-TIRE > #ordersTable > .d-none > .table > tbody > #inventorys-0 > :nth-child(6) > .btn-details"
  ).click({ force: true });
  cy.wait(500);

  cy.get(
    ".form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > #inventorys-0 > :nth-child(1)"
  ).contains("0319");
  cy.get(
    ".form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > #inventorys-0 > :nth-child(2)"
  ).contains("50");
  cy.get(
    "#inventorytabletire > .modal-dialog > .modal-content > .modal-footer > .btn-reset"
  ).click({ force: true });
};
