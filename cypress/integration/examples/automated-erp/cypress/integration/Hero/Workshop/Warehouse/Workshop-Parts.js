/// <reference types="cypress" />

context("Warehouse", () => {
  it("Parts", () => {
    cy.login("empGrip01", "password");
    Parts();
    Parts1();
    confimeParts();

    check();
  });
});

// กรอกรายละเอียดสินค้า
const Parts = () => {
  cy.get("#nav-item-7").click({ force: true });
  cy.get("#tab-inventory").click({ force: true });
  cy.get("#btn-addInventory").click({ force: true });
  cy.get("#tab-PART").click({ force: true });

  taxParts(getRandomNumberParts(1, 10));
  cy.get("#fitmentDetail").click().type("{downarrow}{enter}");
  taxParts1(getRandomNumberParts(1, 10));
  taxParts2(getRandomNumberParts(1, 10));
  taxParts3(getRandomNumberParts(1, 10));
  cy.get("#itemDescription").type("test");

  cy.get("#btnNextPart").click();
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

// รายละเอียดราคา
const Parts1 = () => {
  cy.get("#amountRemainStock").clear().type("10");
  cy.get("#unit").click().type("{downarrow}{enter}");
  cy.get(":nth-child(3) > .mt-2 > #salesPricePart").clear().type("200");
  cy.get(":nth-child(4) > .mt-2 > #salesPricePart").clear().type("150");
  cy.get("#btnsaveInventoryPart").click();
};

// ยืนยันเพิ่มสินค้า
const confimeParts = () => {
  cy.get(".swal2-confirm").click();
  cy.get("#tab-PART").click({ force: true });
};

const check = () => {
  cy.wait(1000);
  cy.get("#productname").click({ force: true }).type("เพิ่มอะไหล่");
  cy.get('[style="font-size: 1.1rem;"] > .btn-search').click({ force: true });

  cy.get(
    "#pane-PART > #ordersTable > .d-none > .table > tbody > #inventorys-0 > .text-left"
  ).contains("เพิ่มอะไหล่");
  cy.get("#inventorys-0 > :nth-child(7) > .btn-details").click({ force: true });

  cy.get(
    "#inventorytablepart > .modal-dialog > .modal-content > .modal-body > .form-row.mt-4 > :nth-child(2) > .table-responsive > .table > tbody > .font-weight-bold > :nth-child(2)"
  ).contains("10");
  cy.wait(500);
  cy.get(
    "#inventorytablepart > .modal-dialog > .modal-content > .modal-header > .close"
  ).click({ force: true });
};
