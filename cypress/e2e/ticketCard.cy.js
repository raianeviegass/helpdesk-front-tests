import ticketsPage from '../support/pages/ticketsPage'


describe('Suite de Teste que realiza a busca e exclusão de tickets', () => {

  it('Deve acessar a página de Tickets, buscar os tickets através do filtro por status e validar que os tickets estão sendo filtrados pelo respectivo status corretamente', () => {
    ticketsPage
      .visit()
      .buscarTicketsPorStatus('In Progress')
      .verificarTicketsPorStatus()
  })

  it.only('Deve acessar a página de Tickets, selecionar o botão de exclusão de um dos Tickets e validar que o respesctivo Ticket foi excluído com sucesso', () => {
    ticketsPage
      .visit()
      .excluirTicket('The printer is not printing.')
      .verificarTicketExcluido()
  })

})