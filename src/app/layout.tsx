export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <header>Mi Cabecera</header>
        <main>{children}</main>
        <footer>Mi pie de página</footer>
      </body>
    </html>
  )
}