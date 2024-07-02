import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import type { Metadata } from 'next'
import { LanguageProvider } from '../i18n/client'
import './globals.css'

export const metadata: Metadata = {
	title: 'PiTaxi',
	description: '',
}

export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.svg' />
			</head>
			<body>
				<LanguageProvider initialLanguage={lang}>
					<Header />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	)
}
