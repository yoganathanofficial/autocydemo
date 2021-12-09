/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */
const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");

const input_url = "https://www.amazon.com";
const amazon_logo = '#nav-logo-sprites';
const short_time_out = '5000';

Before(() => {
  cy.visit(input_url);
  cy.title().should("include", "Amazon");
  cy.get(amazon_logo, { timeout: short_time_out }).should('be.visible');
  cy.get(amazon_logo).click();
});

