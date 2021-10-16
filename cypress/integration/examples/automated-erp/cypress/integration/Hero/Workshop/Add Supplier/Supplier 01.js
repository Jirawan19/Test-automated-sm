/// <reference types="cypress" />

context("Add Supplier", () => {
  beforeEach(() => {
    cy.visit("https://herodemo.autopair.co/");
  });
  // สมัครอู่
  it("Add Supplier", () => {
    addSupplier();
    addSupplier1();
  });
  it("Admin", () => {
    loginAdmin("ATP-ADMIN", "16011986");
    Admin1();
    logout();
  });
});

const addSupplier = () => {
  cy.get(".pl-0 > .text-info").click();

  // ข้อมูลอู่
  taxAddsupplier8(getRandomTex(1, 5));

  taxAddsupplier5(getRandomTex(1, 5));

  taxAddsupplier(getRandomTex(1, 13));

  taxAddsupplier1(getRandomTex(1, 10));

  taxAddsupplier2(getRandomTex(1, 3));

  cy.get("#txtInputAddress_AddressName").type("168/106");

  cy.get(
    ":nth-child(7) > .vth-addr-container > .vth-addr-input-container > .vth-addr-input"
  )
    .type("คลองถนน")
    .type("{downarrow}{downarrow}{enter}");

  cy.get("#btnButton_Step-1").click();
};
// ข้อมูลผู้ใช้งาน
const addSupplier1 = () => {
  taxAddsupplier7(getRandomTex(1, 3));

  cy.get("#last-name").type("01");

  taxAddsupplier11(getRandomTex(1, 10));

  taxAddsupplier3(getRandomTex(1, 10));

  taxAddsupplier6(getRandomTex(1, 10));

  cy.get("#password").type("password");

  cy.wait(2000);

  cy.get('[success=""]').click();

  // ยืนยัน
  cy.get(".swal2-confirm").click();
};

const getRandomTex = (min, max) => {
  0, 0;
  return Math.random() * (max - min) + min;
};
const taxAddsupplier = (textNo) => {
  cy.get("#nbrWorkshop_Tax").type(textNo);
};
const taxAddsupplier1 = (textNo) => {
  cy.get("#nbrState_TelNo").type(textNo);
};
const taxAddsupplier2 = (textNo) => {
  cy.get("#txtState_Email").type("nam test").type(textNo).type("@gmail.com");
};
const taxAddsupplier3 = (textNo) => {
  cy.get("#user-email").type("nam test").type(textNo).type("@gmail.com");
};
const taxAddsupplier4 = (textNo) => {
  cy.get("#username").type("test").type(textNo);
};

// ต้องคอยเปลี่ยนเพื่อไม่ให้ขึ้นซ้ำ
const taxAddsupplier5 = (textNo) => {
  cy.get("#nbrWorkshop_Tax").type("ASS").type(textNo);
};

// ต้องคอยเปลี่ยนเพื่อไม่ให้ขึ้นซ้ำ
const taxAddsupplier6 = (textNo) => {
  cy.get("#username").type("Supplier test").type(textNo);
};

const taxAddsupplier7 = (textNo) => {
  cy.get("#first-name").type("Supplier").type(textNo);
};
const taxAddsupplier8 = (textNo) => {
  cy.get("#txtWorkshop_Name").type("สมัครอู่").type(textNo);
};
const taxAddsupplier11 = (textNo) => {
  cy.get("#telNo").type(textNo);
};

const loginAdmin = (username, password) => {
//   cy.get(".my-4 > .text-left > span").should("contain.text", "ชื่อผู้ใช้งาน");
  cy.get("#username").type(username);
//   cy.get(".mb-3 > .text-left > span").should("contain.text", "รหัสผ่าน");
  cy.get("#password").type(password);
  cy.get(".btn-global").click();
};

const Admin1 = () => {
  cy.get(":nth-child(2) > .nav-link > .row").click();

  cy.get("#customer-0 > :nth-child(3) > a > .btn-details").click({
    force: true,
  });

  cy.get('[warning=""]').click({ force: true });
  cy.wait(500);
  cy.get(".the-enable").should("contain.text", "ปิดการใช้งาน");
  cy.wait(1000);
  cy.get(".el-switch__core").click({ force: true });
  // cy.wait(500)
  cy.get(".the-enable").should("contain.text", "เปิดการใช้งาน");

  cy.get('[success=""]').click();

  cy.get(".swal2-confirm").click();

  cy.get("#customer-0 > :nth-child(3) > a > .btn-details").click({
    force: true,
  });
  cy.get(".the-enable").should("contain.text", "เปิดการใช้งาน");
  cy.get(".mr-5").click({ force: true });
};
// ออกจากระบบ
const logout = () => {
  cy.get("#dropdownMenuOffset").click();
  cy.get(".btn-group > .dropdown-menu > :nth-child(2)").click();
};
