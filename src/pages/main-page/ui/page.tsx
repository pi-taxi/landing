const MainPage = () => {
	return (
		<main className='flex flex-col h-full lg:px-[64px] text-white items-center lg:items-start'>
			<div className='bg-[#000000CC] h-[350px] w-[90%] lg:w-[486px] flex flex-col p-6 rounded-2xl gap-y-5 mt-[128px] cs:h-[300px] cs:w-[80%] lg:h-auto sm:w-[50%] sm:h-[350px] justify-center'>
				<h2 className='text-[26px] lg:text-[42px] w-full lg:w-[60%] font-semibold'>
					Ехать, отправлять, встречать
				</h2>
				<p className='text-[16px] lg:text-[24px]'>
					Заказ такси и доставка посылок
				</p>
				<button className='bg-[#FC5230] hover:brightness-50 transition-all ease-in-out duration-150 px-4 lg:px-6  py-3 lg:py-4 w-full lg:w-[60%] rounded-xl text-[17px] '>
					Скачать приложение
				</button>
			</div>
		</main>
	)
}
export default MainPage
