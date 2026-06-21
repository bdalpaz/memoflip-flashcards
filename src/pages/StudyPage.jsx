import { useState } from 'react'
import Flashcard from '../components/Flashcard'

/*
  StudyPage — segunda tela.
  Mostra as cartas do baralho uma a uma, com barra de progresso.
  Para cada carta o aluno marca "Acertei" ou "Errei".
  Ao final exibe o resultado com a pontuação.
*/
export default function StudyPage({ baralho, onVoltar }) {
  const [indice, setIndice] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [erros, setErros] = useState(0)
  const [terminou, setTerminou] = useState(false)

  const total = baralho.cartas.length
  const cartaAtual = baralho.cartas[indice]

  function avaliar(acertou) {
    if (acertou) setAcertos((n) => n + 1)
    else setErros((n) => n + 1)

    if (indice + 1 < total) {
      setIndice((i) => i + 1)
    } else {
      setTerminou(true)
    }
  }

  function reiniciar() {
    setIndice(0)
    setAcertos(0)
    setErros(0)
    setTerminou(false)
  }

  const progresso = terminou ? 100 : Math.round((indice / total) * 100)

  // ----- Tela de resultado final -----
  if (terminou) {
    const aproveitamento = Math.round((acertos / total) * 100)
    return (
      <section>
        <div className="section-head">
          <span className="eyebrow">{baralho.nome}</span>
          <h2>Estudo concluído!</h2>
        </div>

        <div className="result">
          <div className="big" style={{ color: baralho.cor }}>{aproveitamento}%</div>
          <p style={{ color: 'var(--text-dim)', marginTop: 6 }}>de aproveitamento</p>

          <div className="score-pills">
            <span className="pill hit">✓ {acertos} acertos</span>
            <span className="pill miss">✕ {erros} erros</span>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn" onClick={reiniciar}>Estudar de novo</button>
            <button className="btn btn-ghost" onClick={onVoltar}>Voltar aos baralhos</button>
          </div>
        </div>
      </section>
    )
  }

  // ----- Tela de estudo (carta atual) -----
  return (
    <section>
      <div className="section-head">
        <span className="eyebrow">{baralho.nome}</span>
        <h2>Modo de estudo</h2>
      </div>

      <div className="study-bar">
        <div className="progress-wrap">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progresso}%` }} />
          </div>
          <div className="progress-label">
            Carta {indice + 1} de {total}
          </div>
        </div>
        <button className="btn btn-ghost" onClick={onVoltar}>Sair</button>
      </div>

      <div className="study-stage">
        <Flashcard
          pergunta={cartaAtual.pergunta}
          resposta={cartaAtual.resposta}
          cor={baralho.cor}
        />
      </div>

      <p className="hint">Virou e conferiu? Marque como você foi:</p>
      <div className="rate-row">
        <button className="rate-btn rate-miss" onClick={() => avaliar(false)}>
          ✕ Errei
        </button>
        <button className="rate-btn rate-hit" onClick={() => avaliar(true)}>
          ✓ Acertei
        </button>
      </div>
    </section>
  )
}
