import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Varibles
const search_box = "#twotabsearchtextbox";
const search_button = "#nav-search-submit-button";
const sort_dropdown = ".a-dropdown-prompt";
const sort_hightolowprice = "#s-result-sort-select_2";
const second_sorted_product = '[data-asin="B083K51SGJ"] > :nth-child(1) > .celwidget > .s-include-content-margin > :nth-child(1) > :nth-child(2) > .sg-col-8-of-16 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium';


Given(`I search the Nikon in amazon website search box`, () => {
  cy.get(search_box, { timeout: (Cypress.env('shorter_time_out')) }).should('be.visible');
  cy.get(search_box).clear();
  cy.get(search_box).type('nikon');
  cy.get(search_button, { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(search_button).click();
  cy.get(sort_dropdown, { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
});

When(`I sort the results from highest price to lowest`, () => {
  cy.get(sort_dropdown).click();
  cy.get(sort_hightolowprice).click();
});

And(`I Select the second product and click for details`, () => {
  cy.get(second_sorted_product).click();
});

