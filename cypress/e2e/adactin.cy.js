///<reference types="cypress" />

describe("Handle adactin ", () => {
  it("Login into the website", () => {
    cy.visit("https://adactinhotelapp.com/");
    cy.get(".logo").screenshot("adactin");

    cy.get('input[type="text"]').type("jivita04");
    cy.get(".login_input").eq(1).type("123456");
    cy.wait(3000);
    cy.get("#login").click();
    cy.url().should("include", "https://adactinhotelapp.com/SearchHotel.php");
    cy.get("#location").select("London").should("have.value", "London");
    cy.wait(3000);
    cy.get("#hotels")
      .select("Hotel Sunshine")
      .should("have.value", "Hotel Sunshine");
    cy.wait(3000);
    cy.get("#room_type").select("Deluxe").should("have.value", "Deluxe");
    cy.get("#room_nos").select("1 - One");

    cy.get("#datepick_in").clear().type("08/05/2024").should('have.value','08/05/2024')
    cy.wait(5000);
    cy.get("#datepick_out").clear().type("12/05/2024").should('have.value','12/05/2024')
    cy.get("#adult_room").select("2 - Two");
    cy.get("#child_room").select("1 - One");
    cy.wait(3000);
    cy.get("#Submit").click();
    cy.url().should("include", "https://adactinhotelapp.com/SelectHotel.php");
    cy.get("#radiobutton_0").check().should("be.checked");
    cy.get("#continue").click();
    cy.get("#first_name").type("Sujith").should("be.visible", "Sujith");
    cy.get("#last_name").type("Sam").should("be.visible", "Sam");
    cy.get("#address")
      .type("Kvb garden road")
      .should("be.visible", "Kvb garden road");
    cy.get("#cc_num")
      .type("1234567891234567")
      .should("be.visible", "1234567891234567");
    cy.get("#cc_type")
      .select("American Express")
      .should("be.visible", "American Express");
    cy.get("#cc_exp_month").select("January").should("be.visible", "January");
    cy.get("#cc_exp_year").select("2023").should("be.visible", "2023");
    cy.get("#cc_cvv").type("123").should("be.visible", "123");
    cy.get("#book_now").click();
    cy.url().should("include", "https://adactinhotelapp.com/BookHotel.php");
    cy.wait(3000);
    // cy.get('#my_itinerary').invoke('attr', 'id').then((id) => {
    //   console.log(id);
    // });
    cy.get("#my_itinerary").click({ force: true });
    cy.wait(3000);
    cy.url().should(
      "include",
      "https://adactinhotelapp.com/BookedItinerary.php"
    );
    cy.get(
      "body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1)"
    ).scrollIntoView({ duration: 5000 });

    cy.screenshot({ capture: "fullPage" });

    cy.wait(3000)
    cy.get('#logout').should('be.visible').click()

    //cy.screenshot("confirmmation");
    //   cy.url()
    //     .should("include", "https://adactinhotelapp.com/BookHotel.php")
    //     .screenshot("booking");

    // cy.get('[href="Logout.php"]').click();
  });
});
