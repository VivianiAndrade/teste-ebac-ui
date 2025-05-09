/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta ', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
       
    });

    it('Deve completar Detalhes da conta com sucesso', () => {
       cy.detalhesConta('Viviani', 'Andrade Machado', 'viviani.qa')
       cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});