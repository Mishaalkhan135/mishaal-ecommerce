import React from "react";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiOutlineMail,
} from "react-icons/ai";
import {
	FaInstagramSquare,
	FaSnapchatSquare,
	FaBlenderPhone,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
const Footer = () => {
	return (
		<div className='grid md:grid-cols-2 grid-flow-row'>
			{/* Store information */}
			<div className='flex flex-col p-2'>
				<h1 className='md:text-[30px] text-xl italic text-sky-500 font-serif'>
					Mishaal Ecommerce Website
				</h1>
				<p className='text-justify md:text-lg text-md'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maiores, voluptate. Dignissimos nostrum fugit facere, vero
					id incidunt voluptas rem.
				</p>
				<div className='flex items-baseline justify-center mt-3 self-start'>
					<div className='m-3 rounded-full cursor-pointer p-2 text-white bg-blue-500'>
						<AiFillFacebook />
					</div>
					<div className='m-3 rounded-full cursor-pointer p-2 text-white bg-sky-400'>
						<AiFillTwitterSquare />
					</div>
					<div className='m-3 rounded-full cursor-pointer p-2 text-white bg-red-500'>
						<FaInstagramSquare />
					</div>
					<div className='m-3 rounded-full cursor-pointer p-2 text-white bg-yellow-500'>
						<FaSnapchatSquare />
					</div>
				</div>
			</div>
			{/* Contact information   */}
			<div className='flex flex-col justify-center items-center p-2'>
				<div className='flex m-3  ml-8'>
					<GrLocation size={25} />
					<p className='pl-3 '>State of california</p>
				</div>
				<div className='flex m-3 '>
					<FaBlenderPhone size={25} />
					<p className='pl-3'>0336-3650852</p>
				</div>
				<div className='flex ml-20 '>
					<AiOutlineMail size={25} />
					<p className='pl-3'>khan.mishaal@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
