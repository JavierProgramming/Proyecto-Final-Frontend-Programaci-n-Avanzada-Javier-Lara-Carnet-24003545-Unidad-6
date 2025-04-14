export const metadata = {
  title: 'Gestor de Hábitos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800 font-sans p-6">
        <div className="max-w-2xl mx-auto">{children}</div>
      </body>
    </html>
  )
}
