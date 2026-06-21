/*
  DeckCard — cartão que representa um baralho na tela inicial.
  Mostra nome, quantidade de cartas e botões de estudar/excluir.
*/
export default function DeckCard({ baralho, onEstudar, onExcluir }) {
  const total = baralho.cartas.length

  return (
    <article className="deck-card">
      <div className="deck-stripe" style={{ background: baralho.cor }} />
      <div className="deck-body">
        <h3 className="deck-name">{baralho.nome}</h3>
        <p className="deck-count">
          {total} {total === 1 ? 'carta' : 'cartas'}
        </p>
        <div className="deck-actions">
          <button
            className="btn"
            onClick={() => onEstudar(baralho.id)}
            disabled={total === 0}
            style={total === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
          >
            Estudar
          </button>
          <button className="btn btn-danger" onClick={() => onExcluir(baralho.id)}>
            Excluir
          </button>
        </div>
      </div>

      <style>{`
        .deck-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); overflow: hidden; display: flex;
          flex-direction: column; transition: 0.2s;
        }
        .deck-card:hover { transform: translateY(-4px); border-color: var(--text-dim); }
        .deck-stripe { height: 8px; width: 100%; }
        .deck-body { padding: 20px; display: flex; flex-direction: column; gap: 4px; flex: 1; }
        .deck-name { font-size: 19px; }
        .deck-count { color: var(--text-dim); font-size: 13px; margin-bottom: 14px; }
        .deck-actions { display: flex; gap: 10px; margin-top: auto; }
        .deck-actions .btn { padding: 10px 16px; font-size: 13px; }
      `}</style>
    </article>
  )
}
