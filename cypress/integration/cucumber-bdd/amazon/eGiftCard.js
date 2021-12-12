import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Varibles
const giftcards_tab = '[href="/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc_4fb606b1a14b44e4823e00c03fc71f47"]';
const giftcards_options = ':nth-child(3) > :nth-child(1) > .bxc-grid__content > .bxc-grid__text > :nth-child(3) > a';
const animated_button = '#gc-customization-type-button-Animated';
const animated_giftcard = '#gc-mini-picker-design-swatch-image-5';
const egift_amount = '#gc-order-form-custom-amount';
const egift_email_button = '#gc-delivery-mechanism-button-Email-announce';
const egift_to_email = '#gc-order-form-recipients';
const egift_sender = '#gc-order-form-senderName';
const egift_from_msg = '#gc-order-form-message';
const egift_from_qty = '#gc-order-form-quantity';
const egift_delivery_date_box = '#gc-order-form-date-val';
const egift_delivery_date = '.a-cal-d-1640889000000 > .a-declarative';
const add_cart_button = '#gc-buy-box-atc';


Given(`I Select Animated eGift card category in amazon website`, () => {
  cy.get(giftcards_tab).click();
  cy.get(giftcards_options , { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(giftcards_options).click();
});

When(`I select random Animated eGift card`, () => {
  cy.get(animated_button , { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(animated_button).click({force: true});
  cy.get(animated_giftcard , { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
});

//Returns a random number between 1 and 100
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const random_num = (getRandomBetween(1,100));

And(`I enter random amount from $1 to $100`, () => {
  cy.get(egift_amount , { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(egift_amount).clear();
  cy.get(egift_amount).type(random_num);
});

And(`I enter {string} and {string} and {string} and {string} details`, (to, from, msg, qty) => {
  cy.get(egift_email_button, { timeout: (Cypress.env('short_time_out')) }).should('be.visible');
  cy.get(egift_email_button,).click();
  cy.get(egift_to_email,).click();
  cy.get(egift_to_email).clear();
  cy.get(egift_to_email).type(to);
  cy.get(egift_sender).clear();
  cy.get(egift_sender).type(from);
  cy.get(egift_from_msg).clear();
  cy.get(egift_from_msg).type(msg);
  cy.get(egift_from_qty).clear();
  cy.get(egift_from_qty).type(qty);
});

And(`I select the second available delivery date from the calendar`, () => {
  cy.get(egift_delivery_date_box).click();
  cy.get(egift_delivery_date).click();
});

And(`I Add produt to the cart`, () => {
  cy.get(add_cart_button).click();
});

Then('Verify that Add to cart API request is successfull', () => {
  cy.intercept({
    path : '/1/events/com.amazon.csm.csa.prod'
  }). as ('addCartPost')

  cy.wait('@addCartPost', {timeout: (Cypress.env('medium_time_out'))}).its('response.statusCode').should((status_code) => {
    console.log(status_code)
    if (status_code !== 200) {
      throw Error('Add to Cart is faied in backend API service.')
    }
  })
});
