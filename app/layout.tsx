import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Platzi Loader',
	description: 'Loader de Platzi',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	)
}
