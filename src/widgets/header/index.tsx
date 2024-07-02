'use client'
import { useLanguage, useTranslation } from '@/app/i18n/client'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	const { language } = useLanguage()
	const { t } = useTranslation(language)

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center  lg:px-[64px] py-10 w-full lg:justify-between'>
			<Image
				src='/logo.svg'
				alt='logo'
				width={290}
				height={56}
				className='w-[156px] h-[30px] lg:h-[26px] xl:h-[36px]'
			/>
			<div className='flex gap-x-10 items-center '>
				<Link
					href=''
					className='text-[16px]  xl:text-[22px] text-white hidden lg:flex'
				>
					{t('Become a driver')}
				</Link>
				<Link
					href=''
					className=' text-[16px] xl:text-[22px] text-white hidden lg:flex'
				>
					{t('Support')}
				</Link>
				<Link
					href=''
					className='text-[16px] mt-2 lg:mt-0 xl:text-[22px] text-white'
				>
					{t('Phone')}: 137377
				</Link>
			</div>
		</div>
	)
}
