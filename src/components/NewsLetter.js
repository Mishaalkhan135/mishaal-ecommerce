import React from "react";

const NewsLetter = (props) => {
	return (
		<div className='flex flex-col justify-center font font-serif italic items-center w-[100%] h-[350px] bg-[#c4a4f9]'>
			<h1 className='md:text-[50px] text-3xl uppercase font-bold'>
				NewsLetter
			</h1>
			<h2 className='md:text-[20px] text-sm mt-2'>
				Always in touch with us, for all products
			</h2>
			<div className='flex mt-[3rem] items-center justify-between md:min-w-[30rem] md:min-h-[2rem] min-w-[15rem] min-h-[1rem] bg-white border-[#ccccccc] rounded-md overflow-hidden'>
				<input
					type='email'
					placeholder='Please Enter Email'
					className='border-none pl-[20px] flex-[7] outline-none'
				/>
				<button className='bg-green-500 flex-1 h-[100%]'>
					{" "}
					<svg
						className='ml-3 mr-1'
						viewBox='0 0 512 512'
						fill='currentColor'
						height='3rem'
						width='3rem'
						{...props}
					>
						<path d='M16 464l480-208L16 48v160l320 48-320 48z' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default NewsLetter;
