// Dados iniciais dos baralhos de flashcards.
// Cada baralho tem id, nome, cor e uma lista de cartas (pergunta/resposta).

export const baralhosIniciais = [
  {
    id: 1,
    nome: 'Capitais do Mundo',
    cor: '#2dd4bf',
    cartas: [
      { id: 1, pergunta: 'Qual a capital do Brasil?', resposta: 'Brasília' },
      { id: 2, pergunta: 'Qual a capital do Japão?', resposta: 'Tóquio' },
      { id: 3, pergunta: 'Qual a capital da França?', resposta: 'Paris' },
      { id: 4, pergunta: 'Qual a capital da Austrália?', resposta: 'Canberra' },
    ],
  },
  {
    id: 2,
    nome: 'Inglês Básico',
    cor: '#a78bfa',
    cartas: [
      { id: 1, pergunta: 'Como se diz "cachorro" em inglês?', resposta: 'Dog' },
      { id: 2, pergunta: 'Como se diz "casa" em inglês?', resposta: 'House' },
      { id: 3, pergunta: 'Como se diz "livro" em inglês?', resposta: 'Book' },
    ],
  },
  {
    id: 3,
    nome: 'Lógica de Programação',
    cor: '#f59e0b',
    cartas: [
      { id: 1, pergunta: 'O que é uma variável?', resposta: 'Um espaço na memória para armazenar um valor.' },
      { id: 2, pergunta: 'O que faz um laço "for"?', resposta: 'Repete um bloco de código um número definido de vezes.' },
      { id: 3, pergunta: 'O que é um array?', resposta: 'Uma estrutura que armazena vários valores em sequência.' },
    ],
  },
]
