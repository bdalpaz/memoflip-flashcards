import { useState } from 'react'

const CORES = ['#2dd4bf', '#a78bfa', '#f59e0b', '#f87171', '#60a5fa', '#34d399']

export default function NewDeckForm({ onCriar }) {
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState(CORES[0])
  const [erro, setErro] = useState('')

  function handleSubmit() {
    if (nome.trim().length < 2) {
      setErro('Dê um nome com pelo menos 2 letras.')
      return
    }
    onCriar(nome.trim(), cor)
    setNome('')
    setCor(CORES[0])
    setErro('')
  }

  return (
    <div className="new-deck">
      <h3>Criar novo baralho</h3>
      <div className="form-row">
        <input
          className="input"
          placeholder="Ex.: Verbos em Espanhol"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value)
            if (erro) setErro('')
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <div className="color-pick">
          {CORES.map((c) => (
            <span
              key={c}
              className={`swatch ${c === cor ? 'active' : ''}`}
              style={{ background: c }}
              onClick={() => setCor(c)}
              role="button"
              aria-label={`Cor ${c}`}
            />
          ))}
        </div>
        <button className="btn" onClick={handleSubmit}>
          Adicionar
        </button>
      </div>
      {erro && <p style={{ color: 'var(--danger)', fontSize: 13, marginTop: 10 }}>{erro}</p>}
    </div>
  )
}
