import { useState } from 'react'
import { baralhosIniciais } from './data'
import DecksPage from './pages/DecksPage'
import StudyPage from './pages/StudyPage'

/*
  App — componente raiz.
  Controla:
   - a lista de baralhos (estado principal)
   - qual tela está ativa ('decks' ou 'study')
   - qual baralho está sendo estudado
*/
export default function App() {
  const [baralhos, setBaralhos] = useState(baralhosIniciais)
  const [tela, setTela] = useState('decks')
  const [baralhoAtivoId, setBaralhoAtivoId] = useState(null)

  // Cria um novo baralho com nome e cor escolhidos.
  function criarBaralho(nome, cor) {
    const novo = {
      id: Date.now(),
      nome,
      cor,
      // baralho novo já vem com uma carta de exemplo para poder estudar
      cartas: [
        { id: 1, pergunta: 'Edite esta carta de exemplo.', resposta: 'Pronto, é assim que funciona!' },
      ],
    }
    setBaralhos((lista) => [...lista, novo])
  }

  // Remove um baralho pelo id.
  function excluirBaralho(id) {
    setBaralhos((lista) => lista.filter((b) => b.id !== id))
  }

  // Abre o modo de estudo de um baralho.
  function estudar(id) {
    setBaralhoAtivoId(id)
    setTela('study')
  }

  function voltarParaDecks() {
    setTela('decks')
    setBaralhoAtivoId(null)
  }

  const baralhoAtivo = baralhos.find((b) => b.id === baralhoAtivoId)

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-name">Memo<span>Flip</span></div>
            <div className="brand-tag">flashcards para fixar o que importa</div>
          </div>
        </div>
        {tela === 'study' && (
          <button className="nav-btn" onClick={voltarParaDecks}>← Baralhos</button>
        )}
      </header>

      <main>
        {tela === 'decks' && (
          <DecksPage
            baralhos={baralhos}
            onCriar={criarBaralho}
            onExcluir={excluirBaralho}
            onEstudar={estudar}
          />
        )}

        {tela === 'study' && baralhoAtivo && (
          <StudyPage baralho={baralhoAtivo} onVoltar={voltarParaDecks} />
        )}
      </main>
    </div>
  )
}
