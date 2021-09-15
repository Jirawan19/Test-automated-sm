/// <reference types="cypress" />

context("Name lish book", () => {
  it("Add Supplier", () => {
    cy.login("empGrip01", "password");
    AddSupplier();
    AddSupplier1();

    checkAddSupplier();
  });
});

// เข้าหน้าเพิ่มพนักงาน
const AddSupplier = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-supplier").click({ force: true });
  cy.get("#btn-addSupplier").click({ force: true });
};

// กรอกข้อมูล Sopplier
const AddSupplier1 = () => {
  taxAddSupplier(getRandomNumberAddSupplier(0, 5));
  taxAddSupplier1(getRandomNumberAddSupplier(0, 5));
  taxAddSupplier2(getRandomNumberAddSupplier(0, 9));
  taxAddSupplier3(getRandomNumberAddSupplier(0, 10));
  taxAddSupplier4(getRandomNumberAddSupplier(0, 13));

  // ยืนยันเพิ่ม supplier
  cy.get('[success=""]').click();
  cy.get(".swal2-confirm").click();
};
const getRandomNumberAddSupplier = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};
const taxAddSupplier = (textNo) => {
  cy.get("#state-name").type("เพิ่มผู้จำหน่าย").type(textNo);
};
const taxAddSupplier1 = (textNo) => {
  cy.get("#state-address").type("ดาวเสาร์").type(textNo);
};
const taxAddSupplier2 = (textNo) => {
  cy.get("#state-telNo").type(textNo);
};
const taxAddSupplier3 = (textNo) => {
  cy.get("#state-mobileNo").type(textNo);
};
const taxAddSupplier4 = (textNo) => {
  cy.get("#state-taxCustomerNumber").type(textNo);
};

// เช็คผู้จำหน่อยที่พึ่งเพิ่ม
const checkAddSupplier = () => {
  cy.get("#nav-item-7").click();
  cy.get("#tab-supplier").click({ force: true });
  cy.get(
    "#pane-supplier > :nth-child(2) > .d-none > .table > tbody > :nth-child(1) > :nth-child(1)"
  ).contains("เพิ่มผู้จำหน่าย");
  cy.get(
    "#pane-supplier > :nth-child(2) > .d-none > .table > tbody > :nth-child(1) > :nth-child(4) > .btn"
  ).click({ force: true });

  cy.get(".mr-5").click();
  cy.get("#tab-supplier").click({ force: true });
};
