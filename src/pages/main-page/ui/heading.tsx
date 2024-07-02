'use client'
import { useLanguage, useTranslation } from '@/app/i18n/client'
import { getInitialLanguage } from '@/shared/utils/locale/locale'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export const Heading = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)
	const router = useRouter()

	useEffect(() => {
		const locale = getInitialLanguage()
		router.push(`/${locale}`)
	}, [])

	return (
		<div className='flex flex-col h-full lg:px-[64px] text-white items-center lg:items-start'>
			<div className='bg-[#000000CC] h-[350px] w-[90%] lg:w-[486px] flex flex-col p-6 rounded-2xl gap-y-5 mt-[128px] cs:h-[300px] cs:w-[80%] lg:h-auto sm:w-[50%] sm:h-[350px] justify-center'>
				<h2 className='text-[26px] lg:text-[36px] w-full lg:w-[60%] font-semibold'>
					{t('mainHeading')}
				</h2>
				<p className='text-[16px] lg:text-[20px]'>{t('title')}</p>
				<button className='bg-[#FC5230] hover:brightness-50 transition-all ease-in-out duration-150 px-4 lg:px-6  py-3 lg:py-4 w-full lg:w-[60%] rounded-xl text-[17px] '>
					{t('buttonText')}
				</button>
			</div>
		</div>
	)
}
