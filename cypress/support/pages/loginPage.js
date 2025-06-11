import usuariosPage from './usuariosPage'

class LoginPage {

  visit() {
  cy.visit('/view/login.html')
  cy.url().should('include', '/login.html');
  return this;
}

  loginPageEstaVisivel() {
    cy.url().should('include', '/login')
    return this
  }

  preencherFormulario(email, senha) {
    cy.get('.input-container').should('be.visible').and('contain.text', 'Logar')
    cy.get('#user').should('be.visible').and('have.attr', 'placeholder', 'E-mail').type(email)
    cy.get('input[type="password"]').should('be.visible').and('have.attr', 'placeholder', 'Senha').type(senha)
    return this
  }

  submeterFormulario() {
    cy.contains('button', 'Logar').should('be.visible').click()
    return usuariosPage
  }

}

export default new LoginPage()