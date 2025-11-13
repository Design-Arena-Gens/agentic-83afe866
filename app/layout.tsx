import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gerador de Roteiros Automáticos',
  description: 'Crie roteiros completos com estrutura de começo, meio e fim em 10 partes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
