/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve um produto com sucesso', () => {
        let produto = 'Eos V-Neck Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
       
    });

    it('Deve visitar a página do produto', () => {
       produtosPage.visitarProduto('Eos V-Neck Hoodie')
       cy.get('.product_title').should('contain', 'Eos V-Neck Hoodie')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtde = 7
       produtosPage.buscarProduto('Abominable Hoodie')
       produtosPage.addProdutoCarrinho('L', 'Blue', qtde)
       cy.get('.woocommerce-message').should('contain', qtde +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {          
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho, 
                dados[2].cor, 
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })

       
    });

});