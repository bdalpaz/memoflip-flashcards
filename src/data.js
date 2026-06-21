export const baralhosIniciais = [
  {
    id: 1,
    nome: 'Fundamentos de Programação',
    cor: '#2dd4bf',
    cartas: [
      { id: 1, pergunta: 'O que é uma variável?', resposta: 'Um espaço na memória usado para armazenar um valor que pode mudar durante a execução.' },
      { id: 2, pergunta: 'O que faz um laço "for"?', resposta: 'Repete um bloco de código um número definido de vezes.' },
      { id: 3, pergunta: 'O que é um array (vetor)?', resposta: 'Uma estrutura que armazena vários valores em sequência, acessados por índice.' },
      { id: 4, pergunta: 'O que é uma função?', resposta: 'Um bloco de código reutilizável que executa uma tarefa e pode receber parâmetros e retornar valores.' },
      { id: 5, pergunta: 'Qual a diferença entre "==" e "===" em JavaScript?', resposta: '"==" compara só o valor (com conversão de tipo); "===" compara valor e tipo.' },
    ],
  },
  {
    id: 2,
    nome: 'React',
    cor: '#a78bfa',
    cartas: [
      { id: 1, pergunta: 'O que é um componente em React?', resposta: 'Uma função (ou classe) que retorna a interface (JSX) e pode ser reutilizada.' },
      { id: 2, pergunta: 'Para que serve o Hook useState?', resposta: 'Para criar e gerenciar estado dentro de um componente funcional.' },
      { id: 3, pergunta: 'O que são props?', resposta: 'Dados passados de um componente pai para um componente filho.' },
      { id: 4, pergunta: 'Para que serve o useEffect?', resposta: 'Para executar efeitos colaterais, como buscar dados ou reagir a mudanças de estado.' },
      { id: 5, pergunta: 'O que é JSX?', resposta: 'Uma sintaxe que permite escrever HTML dentro do JavaScript nos componentes React.' },
    ],
  },
  {
    id: 3,
    nome: 'Redes e Internet',
    cor: '#f59e0b',
    cartas: [
      { id: 1, pergunta: 'O que significa HTTP?', resposta: 'HyperText Transfer Protocol — protocolo de comunicação da web.' },
      { id: 2, pergunta: 'Qual a diferença entre HTTP e HTTPS?', resposta: 'O HTTPS usa criptografia (TLS/SSL) para tornar a comunicação segura.' },
      { id: 3, pergunta: 'O que é um endereço IP?', resposta: 'Um identificador numérico único que cada dispositivo tem em uma rede.' },
      { id: 4, pergunta: 'O que faz o DNS?', resposta: 'Traduz nomes de domínio (ex.: site.com) em endereços IP.' },
      { id: 5, pergunta: 'O que é uma API?', resposta: 'Uma interface que permite que sistemas diferentes se comuniquem e troquem dados.' },
    ],
  },
  {
    id: 4,
    nome: 'Banco de Dados',
    cor: '#60a5fa',
    cartas: [
      { id: 1, pergunta: 'O que é SQL?', resposta: 'Linguagem usada para consultar e manipular dados em bancos relacionais.' },
      { id: 2, pergunta: 'O que faz o comando SELECT?', resposta: 'Consulta e retorna dados de uma ou mais tabelas.' },
      { id: 3, pergunta: 'O que é uma chave primária?', resposta: 'Um campo que identifica de forma única cada registro de uma tabela.' },
      { id: 4, pergunta: 'Diferença entre banco SQL e NoSQL?', resposta: 'SQL é relacional (tabelas); NoSQL é não relacional (documentos, chave-valor, etc.).' },
    ],
  },
]