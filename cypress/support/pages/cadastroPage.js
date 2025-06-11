import loginPage from './loginPage'

class CadastroPage {
  visit() {
    cy.visit('/view/signUp.html')
    cy.url().should('include', '/signUp.html');
    return this
  }

  preencherFormulario(nome, email, senha) {
    cy.get('.input-container').should('be.visible').and('contain.text', 'Cadastro')
    cy.get('input[name="name"]').should('be.visible').and('have.attr', 'placeholder', 'Nome Completo').type(nome)
    cy.get('input[type="email"]').should('be.visible').and('have.attr', 'placeholder', 'Email').type(email)
    cy.get('#password').should('be.visible').and('have.attr', 'placeholder', 'Senha').type(senha)
    return this
  }

  submeterFormulario() {
    cy.contains('button', 'Cadastrar').should('be.visible').click()
    return loginPage
  }

}

export default new CadastroPage()