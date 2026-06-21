import { useState } from 'react'
import { baralhosIniciais } from './data'
import DecksPage from './pages/DecksPage'
import StudyPage from './pages/StudyPage'
import EditDeckPage from './pages/EditDeckPage'

export default function App() {
  const [baralhos, setBaralhos] = useState(baralhosIniciais)
  const [tela, setTela] = useState('decks')
  const [baralhoAtivoId, setBaralhoAtivoId] = useState(null)

  function criarBaralho(nome, cor) {
    const novo = {
      id: Date.now(),
      nome,
      cor,
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

  // Atualiza as cartas de um baralho (vindo da tela de edição).
  function salvarCartas(id, novasCartas) {
    setBaralhos((lista) =>
      lista.map((b) => (b.id === id ? { ...b, cartas: novasCartas } : b))
    )
  }

  // Abre o modo de estudo de um baralho.
  function estudar(id) {
    setBaralhoAtivoId(id)
    setTela('study')
  }

  // Abre a tela de edição de um baralho.
  function editar(id) {
    setBaralhoAtivoId(id)
    setTela('edit')
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
        {tela !== 'decks' && (
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
            onEditar={editar}
          />
        )}

        {tela === 'study' && baralhoAtivo && (
          <StudyPage baralho={baralhoAtivo} onVoltar={voltarParaDecks} />
        )}

        {tela === 'edit' && baralhoAtivo && (
          <EditDeckPage
            baralho={baralhoAtivo}
            onSalvarCartas={salvarCartas}
            onVoltar={voltarParaDecks}
          />
        )}
      </main>
    </div>
  )
}