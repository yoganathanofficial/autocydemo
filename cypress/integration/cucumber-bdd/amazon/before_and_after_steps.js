/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */
const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");


const amazon_logo = '#nav-logo-sprites';
const short_time_out = '5000';

Before(() => {
  cy.visit(Cypress.env('input_url'));
  cy.title().should("include", "Amazon");
  cy.get(amazon_logo, { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(amazon_logo).click();
});

