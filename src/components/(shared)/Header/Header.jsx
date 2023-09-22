"use client";
import React, { startTransition } from "react";
import "./Header.css";
import Link from "next/link";
import { MdDashboard, MdLogin, MdLogout } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

const Header = () => {
	const router = useRouter();

	const { user, logOut, userRole } = useAuth();
	// console.log("logged user", user);
	const currentUserName = user?.displayName;
	const currentUserEmail = user?.email;
	const currentUserPhotoURL = user?.photoURL;

	const handleLogOut = async () => {
		const toastId = toast.loading("Loading...");
		console.log("log out");
		try {
			await logOut();
			Cookies.set('token', '')
			toast.dismiss(toastId);
			toast.success("Successfully logout!");
		} catch (error) {
			console.log(error.message);
			toast.error("Error!");
			toast.dismiss(toastId);
		}
	};


	<ul
		tabIndex={0}
		className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 z-10"
	>
		<li>
			<Link href="/">Home</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/tutors">Tutors</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/tutor-request">Tutor Request</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/tutor-jobs">Tutor Jobs</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/contact">Contact</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/about">About</Link>
		</li>
		<li className="hover:cursor-pointer">
			<Link href="/blogs">Blogs</Link>
		</li>
		{!user && (
			<>
				<div className="divider my-0"></div>
				<li>
					<Link className="p-0 flex" href="/login">
						<button
							type="button"
							className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-teal-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-sm px-8 py-2 text-center"
						>
							<MdLogin className="text-xl"></MdLogin>
							Login
						</button>
					</Link>
				</li>
			</>
		)}
	</ul>
					</div >
	<Link
		href="/"
		className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-slate-700 hover:bg-inherit"
	>
		<Image className="h-10 w-10" src={Logo} alt="Logo" />
		<span className="flex items-center banner-highlighted-text text-xl md:text-3xl">
			EduMentor
		</span>
	</Link>
				</div >

	{/* User Profile */ }
{

	{/* User Profile */ }
	{
		user && (
			<div className="dropdown dropdown-end mt-1 ml-6">
				<label
					tabIndex={0}
					className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
					data-tip={currentUserName}
				>
					<div className="w-10 rounded-full ring-2 ring-offset-2 ring-teal-400">
						{currentUserPhotoURL &&
							<Image
								className="object-top"
								width={40}
								height={40}
								src={currentUserPhotoURL}
								alt={currentUserName}
							/>}
					</div>
				</label>
				<ul
					tabIndex={0}
					className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box z-10"
				>
					<div className="w-full flex justify-center">
						<div className="mt-2 mb-3 h-16 w-16 rounded-full ring-2 ring-offset-2 ring-slate-400">
							{currentUserPhotoURL &&
								<Image
									className="h-16 w-full rounded-full object-cover object-center"
									width={64}
									height={64}
									src={currentUserPhotoURL}
									alt={currentUserName}
								/>
							}
						</div>
					</div>
					<li className="mt-1 text-center font-bold">
						{currentUserName}
					</li>
					<p className="text-slate-600 text-sm mt-1 mb-2 font-normal text-center whitespace-nowrap">
						{currentUserEmail}
					</p>
					{userRole && (
						<p className="uppercase px-5 py-0.5 text-sm bg-teal-300 w-fit mx-auto rounded-xl">
							{userRole}
						</p>
					)}
					<div className="divider mt-1 mb-2"></div>
					<li>
						<Link className="flex p-0 mb-2" href="/profile">
							<button
								type="button"
								className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-teal-400 to-teal-600 ring-2 ring-teal-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-8 py-2 text-center"
							>
								<ImProfile className="text-xl"></ImProfile>
								Profile
							</button>
						</Link>
					</li>
					<li>
						<Link className="flex p-0 mb-2" href="/dashboard">
							<button
								type="button"
								className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-8 py-2 text-center"
							>
								<MdDashboard className="text-xl text-white"></MdDashboard>
								Dashboard
							</button>
						</Link>
					</li>
					<li onClick={handleLogOut}>
						<button
							type="button"
							className="flex gap-2 mx-auto md:mx-0 w-full items-center justify-center !text-white bg-gradient-to-br from-red-600 to-orange-500 ring-2 ring-orange-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-sm px-8 py-2 text-center hover:!text-white"
						>
							<MdLogout className="text-xl"></MdLogout>
							Logout
						</button>
					</li>
				</ul>
			</div>
		
	);
};

export default Header;
