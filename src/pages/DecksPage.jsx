import DeckCard from '../components/DeckCard'
import NewDeckForm from '../components/NewDeckForm'

/*
  DecksPage — primeira tela.
  Lista todos os baralhos e permite criar/excluir.
*/
export default function DecksPage({ baralhos, onCriar, onExcluir, onEstudar }) {
  return (
    <section>
      <div className="section-head">
        <span className="eyebrow">Seus baralhos</span>
        <h2>Escolha o que estudar hoje</h2>
        <p>Crie baralhos, abra um deles e treine sua memória virando as cartas.</p>
      </div>

      <NewDeckForm onCriar={onCriar} />

      {baralhos.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">🗂️</div>
          <p>Nenhum baralho ainda. Crie o primeiro acima!</p>
        </div>
      ) : (
        <div className="deck-grid">
          {baralhos.map((b) => (
            <DeckCard
              key={b.id}
              baralho={b}
              onEstudar={onEstudar}
              onExcluir={onExcluir}
            />
          ))}
        </div>
      )}
    </section>
  )
}
