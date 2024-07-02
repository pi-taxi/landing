export const getInitialLanguage = () => {
	if (typeof window !== 'undefined' && window.navigator) {
		const lang = window.navigator.language || window.navigator.language[0]
		if (lang.startsWith('tk')) {
			return 'tk'
		} else if (lang.startsWith('ru')) {
			return 'ru'
		} else {
			return 'en'
		}
	} else {
		return 'en'
	}
}
