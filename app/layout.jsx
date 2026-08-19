import './globals.css'

export const metadata = {
  title: 'ITIL 4 Foundations - Cuestionarios Prácticos',
  description: 'Aplicación interactiva de cuestionarios para prepararse para el examen ITIL 4 Foundations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
