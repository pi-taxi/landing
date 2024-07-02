'use client'
import { getInitialLanguage } from '@/shared/utils/locale/locale'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Topside = () => {
	const pathname = usePathname()
	const router = useRouter()

	const [mainHeading, setMainHeading] = useState('Drive, send, meet')
	const [buttonText, setButtonText] = useState('Download the App')
	const [title, setTitle] = useState('Taxi order and parcel delivery')

	useEffect(() => {
		if (pathname === '/') {
			router.push('/ru')
		}
		const initialLocale = getInitialLanguage()
		router.replace(`/${initialLocale}`)
	}, [router])

	useEffect(() => {
		if (pathname?.includes('/ru')) {
			setMainHeading('Ехать, отправлять, встречать')
			setButtonText('Скачать приложение')
			setTitle('Заказ такси и доставка посылок')
		} else if (pathname?.includes('/en')) {
			setMainHeading('Drive, send, meet')
			setButtonText('Download the App')
			setTitle('Taxi order and parcel delivery')
		} else if (pathname?.includes('/tk')) {
			setMainHeading('Sürüji, ibermek, duşuşmak')
			setButtonText('Programmany yuklan')
			setTitle('Taksi sargydy we bukjany eltip bermek')
		} else {
			setMainHeading('Sürüji, ibermek, duşuşmak')
			setButtonText('Programmany yuklan')
			setTitle('Taksi sargydy we bukjany eltip bermek')
		}
	}, [pathname])

	return (
		<div className='bg-[#000000CC] h-[350px] w-[90%] lg:w-[486px] flex flex-col p-6 rounded-2xl gap-y-5 mt-[128px] cs:h-[300px] cs:w-[80%] lg:h-auto sm:w-[50%] sm:h-[350px] justify-center'>
			<h2 className='text-[26px] lg:text-[36px] w-full lg:w-[60%] font-semibold'>
				{mainHeading}
			</h2>
			<p className='text-[16px] lg:text-[20px]'>{title}</p>
			<button className='bg-[#FC5230] hover:brightness-50 transition-all ease-in-out duration-150 px-4 lg:px-6 py-3 lg:py-4 w-full lg:w-[60%] rounded-xl text-[17px]'>
				{buttonText}
			</button>
		</div>
	)
}

export default Topside
