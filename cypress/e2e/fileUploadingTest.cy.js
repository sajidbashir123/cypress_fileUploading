/// <reference types="cypress" />

import { LoginPage } from "../support/pageObjects/loginPage";
import { RecruitmentPage } from "../support/pageObjects/recruitmentPage";

const loginPage = new LoginPage();
const recruitmentPage = new RecruitmentPage();

describe("Recruitment Page File Upload Test", () => {
  it("should log in and upload a file", () => {
    loginPage.visit();
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    loginPage.verifylogin();
    recruitmentPage.clickRecruitmentTab();
    recruitmentPage.clickAddButton();
    recruitmentPage.uploadFile("cypress/fixtures/TestFile.pdf");
    recruitmentPage.verifyFileUploaded("TestFile.pdf");
  });
});
