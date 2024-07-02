import MainPage from '@/pages/main-page/page'

export default function Home({
	params: { lang },
}: {
	params: { lang: string }
}) {
	return <MainPage />
}
