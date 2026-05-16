export class LoginPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  enterUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('[type="submit"]').click();
  }
  verifylogin() {
    cy.get(".oxd-brand-banner").should("be.visible");
  }
}
