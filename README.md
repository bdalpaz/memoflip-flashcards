# MemoFlip — App de Flashcards

Aplicação web feita em **React + Vite** para estudar usando flashcards.
O usuário cria baralhos, abre um deles e treina virando as cartas (pergunta/resposta),
marcando se acertou ou errou. Ao final, vê a porcentagem de aproveitamento.

## Tecnologia

- **React 18** (componentes funcionais e Hooks: `useState`, `useEffect`)
- **Vite** (ambiente de desenvolvimento e build)

## Requisitos atendidos

- **Duas telas distintas:** tela de Baralhos e tela de Estudo.
- **Componentes próprios:** `Flashcard`, `DeckCard`, `NewDeckForm`, `DecksPage`, `StudyPage`.
- **Interatividade:**
  - Formulário para criar baralhos (com validação e escolha de cor)
  - Botões com ações (estudar, excluir, virar carta, acertei/errei, reiniciar)
  - Manipulação de dados (criar e excluir baralhos, contar acertos/erros)
  - Listagem dinâmica dos baralhos
  - Animação 3D de virar a carta
- **Layout organizado e responsivo.**

## Como executar

Você precisa ter o **Node.js** instalado (versão 18 ou superior).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Depois abra no navegador o endereço mostrado no terminal (geralmente `http://localhost:5173`).

### Gerar versão de produção (opcional)

```bash
npm run build      # gera a pasta dist/
npm run preview    # visualiza a versão de produção
```

## Estrutura do projeto

```
memoflip/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # ponto de entrada
    ├── App.jsx               # componente raiz + navegação entre telas
    ├── data.js               # baralhos iniciais
    ├── styles.css            # estilos globais
    ├── components/
    │   ├── Flashcard.jsx     # carta que vira (pergunta/resposta)
    │   ├── DeckCard.jsx      # cartão de baralho na lista
    │   └── NewDeckForm.jsx   # formulário de novo baralho
    └── pages/
        ├── DecksPage.jsx     # tela 1: lista de baralhos
        └── StudyPage.jsx     # tela 2: modo de estudo
```
