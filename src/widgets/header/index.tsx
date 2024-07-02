import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	return (
		<div className='flex flex-col lg:flex-row items-center justify-center  lg:px-[64px] py-10 w-full lg:justify-between'>
			<Image
				src='/logo.svg'
				alt='logo'
				width={290}
				height={56}
				className='w-[156px] h-[30px] lg:w-[230px] lg:h-[32px] xl:w-[240px] xl:h-[46px]'
			/>
			<div className='flex gap-x-10 items-center '>
				<Link
					href=''
					className='text-[16px] xl:text-[22px] text-white hidden lg:flex'
				>
					Стать водителем
				</Link>
				<Link
					href=''
					className=' text-[16px] xl:text-[22px] text-white hidden lg:flex'
				>
					Служба поддержки
				</Link>
				<Link
					href=''
					className='text-[16px] mt-2 lg:mt-0 xl:text-[22px] text-white'
				>
					Phone: 137377
				</Link>
			</div>
		</div>
	)
}
