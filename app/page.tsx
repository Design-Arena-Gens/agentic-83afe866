'use client'

import { useState } from 'react'

interface RoteiroParte {
  numero: number
  titulo: string
  conteudo: string
  caracterCount: number
}

interface Roteiro {
  partes: RoteiroParte[]
  personagens?: string
}

export default function Home() {
  const [tema, setTema] = useState('')
  const [roteiro, setRoteiro] = useState<Roteiro | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const gerarRoteiro = async () => {
    if (!tema.trim()) {
      setError('Por favor, insira um tema ou ideia central')
      return
    }

    setLoading(true)
    setError('')
    setRoteiro(null)

    try {
      const response = await fetch('/api/gerar-roteiro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tema }),
      })

      if (!response.ok) {
        throw new Error('Erro ao gerar roteiro')
      }

      const data = await response.json()
      setRoteiro(data)
    } catch (err) {
      setError('Erro ao gerar roteiro. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const downloadRoteiro = () => {
    if (!roteiro) return

    let texto = '='.repeat(80) + '\n'
    texto += 'ROTEIRO AUTOMÁTICO COMPLETO\n'
    texto += '='.repeat(80) + '\n\n'

    roteiro.partes.forEach((parte) => {
      texto += `\n${'='.repeat(80)}\n`
      texto += `PARTE ${parte.numero}/10: ${parte.titulo}\n`
      texto += `Caracteres: ${parte.caracterCount}\n`
      texto += `${'='.repeat(80)}\n\n`
      texto += parte.conteudo + '\n\n'
    })

    if (roteiro.personagens) {
      texto += `\n${'='.repeat(80)}\n`
      texto += `DETALHES DOS PERSONAGENS\n`
      texto += `${'='.repeat(80)}\n\n`
      texto += roteiro.personagens + '\n'
    }

    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `roteiro-${tema.substring(0, 30).replace(/[^a-z0-9]/gi, '-')}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 gradient-text">
              🎬 Gerador de Roteiros Automáticos
            </h1>
            <p className="text-gray-600 text-lg">
              Transforme sua ideia em um roteiro completo com 10 partes estruturadas
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-3">
              🎯 Tema ou Ideia Central:
            </label>
            <textarea
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Uma jornada épica sobre um jovem que descobre poderes mágicos e precisa salvar seu reino de uma ameaça ancestral..."
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-gray-800 text-base resize-none"
              rows={5}
            />
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <button
            onClick={gerarRoteiro}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Gerando Roteiro Mágico...
              </span>
            ) : (
              '✨ Gerar Roteiro Completo'
            )}
          </button>
        </div>

        {roteiro && (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">📖 Seu Roteiro</h2>
              <button
                onClick={downloadRoteiro}
                className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md"
              >
                💾 Download .txt
              </button>
            </div>

            <div className="space-y-6">
              {roteiro.partes.map((parte) => (
                <div key={parte.numero} className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-all bg-purple-50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-purple-900">
                      Parte {parte.numero}/10: {parte.titulo}
                    </h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {parte.caracterCount} caracteres
                    </span>
                  </div>
                  <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {parte.conteudo}
                  </div>
                </div>
              ))}

              {roteiro.personagens && (
                <div className="border-2 border-indigo-200 rounded-lg p-6 bg-indigo-50">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                    👥 Detalhes dos Personagens
                  </h3>
                  <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {roteiro.personagens}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
