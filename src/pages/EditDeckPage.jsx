import { useState } from 'react'

/*
  EditDeckPage — tela de edição de um baralho.
  Permite adicionar, editar e remover cartas (pergunta/resposta).
  CRUD completo das cartas daquele baralho.
*/
export default function EditDeckPage({ baralho, onSalvarCartas, onVoltar }) {
  const [cartas, setCartas] = useState(baralho.cartas)
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [editandoId, setEditandoId] = useState(null)
  const [erro, setErro] = useState('')

  // Adiciona uma nova carta OU salva a edição de uma existente.
  function salvarCarta() {
    if (pergunta.trim().length < 2 || resposta.trim().length < 1) {
      setErro('Preencha a pergunta e a resposta.')
      return
    }

    if (editandoId !== null) {
      // editando carta existente
      setCartas((lista) =>
        lista.map((c) =>
          c.id === editandoId
            ? { ...c, pergunta: pergunta.trim(), resposta: resposta.trim() }
            : c
        )
      )
    } else {
      // nova carta
      const nova = {
        id: Date.now(),
        pergunta: pergunta.trim(),
        resposta: resposta.trim(),
      }
      setCartas((lista) => [...lista, nova])
    }

    setPergunta('')
    setResposta('')
    setEditandoId(null)
    setErro('')
  }

  // Carrega uma carta nos campos para editar.
  function editarCarta(carta) {
    setPergunta(carta.pergunta)
    setResposta(carta.resposta)
    setEditandoId(carta.id)
    setErro('')
  }

  // Remove uma carta da lista.
  function removerCarta(id) {
    setCartas((lista) => lista.filter((c) => c.id !== id))
    if (editandoId === id) {
      setPergunta('')
      setResposta('')
      setEditandoId(null)
    }
  }

  function cancelarEdicao() {
    setPergunta('')
    setResposta('')
    setEditandoId(null)
    setErro('')
  }

  // Salva as alterações no baralho e volta para a tela inicial.
  function concluir() {
    onSalvarCartas(baralho.id, cartas)
    onVoltar()
  }

  return (
    <section>
      <div className="section-head">
        <span className="eyebrow" style={{ color: baralho.cor }}>{baralho.nome}</span>
        <h2>Editar cartas</h2>
        <p>Adicione, edite ou remova as cartas deste baralho.</p>
      </div>

      {/* formulário de carta */}
      <div className="new-deck">
        <h3>{editandoId !== null ? 'Editar carta' : 'Nova carta'}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            className="input"
            placeholder="Pergunta (frente da carta)"
            value={pergunta}
            onChange={(e) => { setPergunta(e.target.value); if (erro) setErro('') }}
          />
          <input
            className="input"
            placeholder="Resposta (verso da carta)"
            value={resposta}
            onChange={(e) => { setResposta(e.target.value); if (erro) setErro('') }}
          />
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn" onClick={salvarCarta}>
              {editandoId !== null ? 'Salvar alteração' : 'Adicionar carta'}
            </button>
            {editandoId !== null && (
              <button className="btn btn-ghost" onClick={cancelarEdicao}>Cancelar</button>
            )}
          </div>
        </div>
        {erro && <p style={{ color: 'var(--danger)', fontSize: 13, marginTop: 10 }}>{erro}</p>}
      </div>

      {/* lista de cartas */}
      {cartas.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">📝</div>
          <p>Nenhuma carta ainda. Adicione a primeira acima!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {cartas.map((c, i) => (
            <div key={c.id} className="card-row">
              <div className="card-row-num" style={{ background: baralho.cor }}>{i + 1}</div>
              <div className="card-row-text">
                <strong>{c.pergunta}</strong>
                <span>{c.resposta}</span>
              </div>
              <div className="card-row-actions">
                <button className="btn btn-ghost" onClick={() => editarCarta(c)}>Editar</button>
                <button className="btn btn-danger" onClick={() => removerCarta(c.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
        <button className="btn" onClick={concluir}>Concluir e voltar</button>
        <button className="btn btn-ghost" onClick={onVoltar}>Voltar sem salvar</button>
      </div>

      <style>{`
        .card-row {
          display: flex; align-items: center; gap: 14px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 14px 16px;
        }
        .card-row-num {
          width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
          display: grid; place-items: center; font-weight: 700; color: #06121a;
          font-family: 'Space Grotesk', sans-serif;
        }
        .card-row-text { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
        .card-row-text strong { font-size: 15px; }
        .card-row-text span { font-size: 13px; color: var(--text-dim); }
        .card-row-actions { display: flex; gap: 8px; flex-shrink: 0; }
        .card-row-actions .btn { padding: 8px 14px; font-size: 13px; }
        @media (max-width: 560px) {
          .card-row { flex-wrap: wrap; }
          .card-row-actions { width: 100%; }
        }
      `}</style>
    </section>
  )
}