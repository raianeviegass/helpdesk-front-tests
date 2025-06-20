import cadastroPage from '../support/pages/cadastroPage'
import usuariosPage from '../support/pages/usuariosPage'

describe('Suite de Teste que realiza o cadastro e login de usuário cadastrado, criação, atualização e exclusão de usuário', () => {

  it('Deve acessar a página de Cadastro de Usuário, preencher o formulário, submeter o formulário, e validar o redirecionamento para Página de Login', () => {
    cadastroPage
      .visit()
      .preencherFormulario('Catarina Silvana', 'catarina-rodrigues@powerblade.com.br', '65761040816')
      .submeterFormulario()
      .loginPageEstaVisivel()   
  });

  it('Deve acessar a página de Usuários, selecionar o botão de adição de novo usuário, preencher o formulário e validar que o respesctivo usuário foi adicionado com sucesso', () => {
    usuariosPage
      .visit()
      .selecionarBotaoAdicionar()
      .preencherFormulario('Márcio Isaac', 'marcioisaacbarbosa@fepextrusao.com.br')
      .verificarUsuarioAdicionado()
  });

  it('Deve acessar a página de Usuários, selecionar um dos usuários, atualizar o nome e e-mail dele e validar que o respectivo usuário foi atualizado com sucesso', () => {
    usuariosPage
      .visit()
      .atualiarUsuario('Márcio Isaac', 'marcioisaacbarbosa@fepextrusao.com.br','Márcio barbosa', 'marciobarbosa@fepextrusao.com.br')
      .verificarUsuarioAtualizado()
  });

  it('Deve acessar a página de Usuários, selecionar o botão de exclusão de um dos usuários e validar que o respectivo usuário foi excluído com sucesso', () => {
    usuariosPage
      .visit()
      .excluirUsuario('Gilberto Gil', 'gil.gil@example.com')
      .verificarUsuarioExcluido()
  });

});