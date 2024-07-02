'use client'
import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import {
	initReactI18next,
	useTranslation as useTranslationOrigin,
} from 'react-i18next'
import { getOptions } from './setting'

i18next
	.use(initReactI18next)
	.use(
		resourcesToBackend(
			(language: string, namespace: string) =>
				import(`./locales/${language}/${namespace}.json`)
		)
	)
	.init(getOptions())

export function useTranslation(lang: string) {
	const { t, i18n } = useTranslationOrigin()
	useEffect(() => {
		const changingLanguage = lang && lang !== i18n.resolvedLanguage
		if (changingLanguage) {
			i18n.changeLanguage(lang)
		}
	}, [lang, i18n])
	return { t, i18n }
}

interface Props {
	language: string
	setLanguage: (language: string) => void
}

const LanguageContext = createContext<Props | undefined>(undefined)

interface ProviderProps {
	children: ReactNode
	initialLanguage: string
}

export const LanguageProvider = ({
	children,
	initialLanguage,
}: ProviderProps) => {
	const [language, setLanguage] = useState<string>(initialLanguage)

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = (): Props => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
