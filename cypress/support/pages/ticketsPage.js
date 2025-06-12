class TicketPage {

  status;
  description;

  visit() {
    cy.visit('/view/ticket.html');
    cy.url().should('include', '/ticket.html');
    return this;
  }

  ticketsPageEstaVisivel() {
    cy.url().should('include', '/ticket');
    return this;
  }

  buscarTicketsPorStatus(status) {
    this.status = status;
    cy.get('select[onchange="filterCards(event)"]')
      .select(status)
      .should('have.value', status)

    return this;
  }

  verificarTicketsPorStatus() {
    cy.get('.lower').should('be.visible').contains(this.status);
  }

  excluirTicket(description) {
    this.description = description;

    cy.get('.card')
      .filter((index, el) => {
        const nomeTexto = el.querySelector('.upper')?.textContent?.trim();
        return nomeTexto === description;
      })
      .first()
      .then($card => {
        cy.wrap($card)
          .find('button[onclick^="deleteCard"]')
          .click()
      })
    return this;
  }

  verificarTicketExcluido() {
    cy.get('.card').should('not.contain.text', this.description);
    return this;
  }
  
}

export default new TicketPage()