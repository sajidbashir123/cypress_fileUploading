export class RecruitmentPage {
  clickRecruitmentTab() {
    cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .contains("Recruitment")
      .click();
  }

  clickAddButton() {
    cy.get(".oxd-button.oxd-button--medium.oxd-button--secondary")
      .contains("Add")
      .click();
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').selectFile(filePath, { force: true });
  }

  verifyFileUploaded(fileName) {
    cy.get('input[type="file"]').should(
      "have.value",
      `C:\\fakepath\\${fileName}`
    );
  }
}
