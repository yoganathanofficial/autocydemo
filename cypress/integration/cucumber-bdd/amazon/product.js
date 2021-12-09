import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Varibles
const product_topics = "#productOverview_feature_div > div > table > tbody";
const short_time_out = '10000';

Then(`Verify the product topic contains Nikon D3X`, () => {
  cy.get(product_topics, { timeout: short_time_out }).should('be.visible');
  cy.get(product_topics).invoke("text").should("contains", "Nikon D3X");
  cy.screenshot();
});
