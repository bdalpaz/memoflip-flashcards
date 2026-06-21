import { useState, useEffect } from 'react'

export default function Flashcard({ pergunta, resposta, cor }) {
  const [virada, setVirada] = useState(false)

  useEffect(() => {
    setVirada(false)
  }, [pergunta])

  return (
    <div
      className="flashcard"
      onClick={() => setVirada((v) => !v)}
      role="button"
      tabIndex={0}
      aria-label="Virar carta"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setVirada((v) => !v)
        }
      }}
    >
      <div className={`flashcard-inner ${virada ? 'is-flipped' : ''}`}>
        <div className="flashcard-face front" style={{ borderTopColor: cor }}>
          <span className="face-tag">Pergunta</span>
          <p className="face-text">{pergunta}</p>
          <span className="flip-hint">clique para ver a resposta</span>
        </div>
        <div className="flashcard-face back" style={{ borderTopColor: cor }}>
          <span className="face-tag" style={{ color: cor }}>Resposta</span>
          <p className="face-text">{resposta}</p>
          <span className="flip-hint">clique para voltar</span>
        </div>
      </div>

      <style>{`
        .flashcard {
          width: 100%; max-width: 460px; height: 280px;
          perspective: 1200px; cursor: pointer;
        }
        .flashcard-inner {
          position: relative; width: 100%; height: 100%;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
        }
        .flashcard-inner.is-flipped { transform: rotateY(180deg); }
        .flashcard-face {
          position: absolute; inset: 0; backface-visibility: hidden;
          background: var(--surface); border: 1px solid var(--border);
          border-top: 4px solid; border-radius: 20px;
          padding: 32px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          box-shadow: var(--shadow);
        }
        .flashcard-face.back { transform: rotateY(180deg); background: var(--surface-2); }
        .face-tag {
          font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;
          font-weight: 600; color: var(--text-dim); margin-bottom: 16px;
        }
        .face-text {
          font-family: 'Space Grotesk', sans-serif; font-size: 22px;
          font-weight: 600; line-height: 1.35;
        }
        .flip-hint {
          position: absolute; bottom: 18px; font-size: 12px; color: #64748b;
        }
        @media (prefers-reduced-motion: reduce) {
          .flashcard-inner { transition: none; }
        }
      `}</style>
    </div>
  )
}
