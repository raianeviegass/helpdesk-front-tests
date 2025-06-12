class UsuariosPage {

  nome;
  email;

  visit() {
    cy.visit('/view/user.html');
    cy.url().should('include', '/user.html');
    return this;
  }

  usuariosPageEstaVisivel() {
    cy.url().should('include', '/user');
    return this;
  }

  selecionarBotaoAdicionar() {
    cy.get('#addButton').should('be.visible').click();
    return this;
  }

  preencherFormulario(nome, email) {
    this.nome = nome;
    this.email = email;

    cy.get('form.form').should('be.visible');
    cy.get('#name').should('be.visible').and('have.attr', 'placeholder', 'Name').type(nome);
    cy.get('#email').should('be.visible').and('have.attr', 'placeholder', 'E-mail').type(email);
    cy.get('#modal-button').should('be.visible').click();
    cy.reload();
    return this;
  }

  verificarUsuarioAdicionado() {
    cy.get('.upper').should('be.visible').contains(this.nome);
    cy.get('.lower').should('be.visible').contains(this.email);
    return this;
  }

  atualiarUsuario(nomeAntigo, emailAntigo, nomeNovo, emailNovo) {
    this.nome = nomeNovo;
    this.email = emailNovo;

    cy.get('.card')
      .filter((index, el) => {
        const nomeTexto = el.querySelector('.upper')?.textContent?.trim();
        const emailTexto = el.querySelector('.lower')?.textContent?.trim();
        return nomeTexto === nomeAntigo && emailTexto === emailAntigo;
      })
      .first()
      .then($card => {
        cy.wrap($card)
          .find('button[onclick^="triggerModalEdit"]')
          .click()
      });

    cy.get('form.form').should('be.visible');
    cy.get('#name').should('be.visible').and('have.attr', 'placeholder', 'Name').clear().type(nomeNovo);
    cy.get('#email').should('be.visible').and('have.attr', 'placeholder', 'E-mail').clear().type(emailNovo);
    cy.get('#modal-button').should('be.visible').click();
    return this
  }

  verificarUsuarioAtualizado() {
    cy.get('.upper').should('be.visible').contains(this.nome);
    cy.get('.lower').should('be.visible').contains(this.email);
    return this;
  }

  excluirUsuario(nome, email) {
    this.nome = nome;
    this.email = email;

    cy.get('.card')
      .filter((index, el) => {
        const nomeTexto = el.querySelector('.upper')?.textContent?.trim();
        const emailTexto = el.querySelector('.lower')?.textContent?.trim();
        return nomeTexto === nome && emailTexto === email;
      })
      .first()
      .then($card => {
        cy.wrap($card)
          .find('button[onclick^="deleteCard"]')
          .click()
      })
    return this;
  }

  verificarUsuarioExcluido() {
    cy.get('.card').should('not.contain.text', this.nome);
    cy.get('.card').should('not.contain.text', this.email);
    return this;
  }

}

export default new UsuariosPage()