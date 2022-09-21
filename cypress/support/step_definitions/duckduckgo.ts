import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("HelloWorld", () => {
  cy.visit("http://localhost:4200/#/home");
});

// Then("I should see a search bar", () => {
//   cy.get("input").should(
//     "have.attr","placeholder","Search Courses"
//   );
// });
