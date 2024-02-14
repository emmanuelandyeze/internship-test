'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { RiHome3Line } from 'react-icons/ri';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { GoStack } from 'react-icons/go';
import { HiOutlineSupport } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';

const dashboard = () => {
	const { user, logout } = useAuth();
	const router = useRouter();
	console.log(user);

	useEffect(() => {
		if (!user) {
			router.push('/');
		}
	}, [user]);

	// Return null if user is null to prevent rendering the dashboard
	if (!user) {
		return null;
	}

	return (
		<div className="flex bg-[#27779B] h-screen">
			{/* Sidebar */}
			<div className="w-1/4 hidden bg-[#27779B] md:flex flex-col justify-between pl-20 pt-20 pb-10">
				{/* Search bar */}
				<input
					type="text"
					placeholder="Search..."
					className="bg-[#475567] text-slate-50 w-[70%] mb-8 p-2 rounded-lg"
				/>

				{/* Sidebar links */}
				<ul className="flex flex-col gap-y-3">
					<li className="mb-2 flex flex-row items-center gap-3">
						<RiHome3Line size={25} color="#fff" />
						<a href="#" className="text-white">
							Home
						</a>
					</li>
					<li className="mb-2 bg-[#344544] w-[60%] py-2 px-2 rounded-md flex flex-row items-center gap-3">
						<MdOutlineInsertChartOutlined
							size={25}
							color="#fff"
						/>
						<a href="#" className="text-white">
							Courses
						</a>
					</li>
					<li className="mb-2 flex flex-row items-center gap-3">
						<GoPeople size={25} color="#fff" />
						<a href="#" className="text-white">
							Students
						</a>
					</li>
					<li className="mb-2 flex flex-row items-center gap-3">
						<GoStack size={25} color="#fff" />
						<a href="#" className="text-white">
							Wallets
						</a>
					</li>
				</ul>

				{/* Support, Settings, User */}
				<div className="mt-auto">
					<ul className="mb-8">
						<li className="mb-2 flex flex-row items-center gap-3">
							<HiOutlineSupport size={25} color="#fff" />
							<a href="#" className="text-white">
								Support
							</a>
						</li>
						<li className="mb-2 flex flex-row items-center gap-3">
							<IoSettingsOutline size={25} color="#fff" />
							<a href="#" className="text-white">
								Settings
							</a>
						</li>
					</ul>
					<hr className="w-[90%] text-[#475567]" />
					<div className="flex items-center pt-2 justify-between pr-5">
						<div className="flex items-center gap-2">
							<img
								src={'/1.jpg'}
								alt={'Profile'}
								className="w-12 h-12 rounded-full mr-2"
							/>
							<div className="flex flex-col">
								<span className="text-white">
									{user?.firstName} {user?.lastName}
								</span>
								<span className="text-white text-sm">
									{user?.email}
								</span>
							</div>
						</div>
						<div>
							<LuLogOut
								onClick={() => logout()}
								size={25}
								color="#fff"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Main content */}
			<div className="flex-1 px-5 md:px-14 py-8 rounded-none md:rounded-tl-[50px] md:rounded-bl-[50px] bg-white">
				<div className="mb-5">
					<h1 className="text-black text-4xl font-bold">
						Courses
					</h1>
					<p>View all courses and edit necessary details</p>
				</div>
				{/* Cards layout */}
				<div className="grid grid-cols-2 gap-4 mb-4">
					{/* First row of cards */}
					<div className="bg-white rounded-lg p-4 shadow-md">
						<div>
							<h1>Total Courses</h1>
							<h1 className="font-bold text-5xl pt-4">
								10
							</h1>
						</div>
					</div>
					<div className="bg-white rounded-lg p-4 shadow-md">
						<div>
							<h1>Active Courses</h1>
							<h1 className="font-bold text-5xl pt-4">6</h1>
						</div>
					</div>
				</div>

				{/* Second row of cards */}
				<div className="grid grid-cols-1 md:grid-cols-1 gap-4">
					<div className="bg-white rounded-lg p-4 shadow-md">
						<div className="flex flex-row justify-between items-end">
							<div className="flex items-start gap-3">
								<img
									src="/1.jpg"
									alt=""
									className="h-28 w-40 rounded-lg"
								/>
								<div className="flex flex-col gap-3">
									<h1 className="font-bold text-lg">
										Web development
									</h1>
									<p>102 students</p>
									<p>3 weeks</p>
								</div>
							</div>
							<div>
								<h1 className="font-bold text-xl">
									₦35,000.00
								</h1>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg p-4 shadow-md">
						<div className="flex flex-row justify-between items-end">
							<div className="flex items-start gap-3">
								<img
									src="/2.jpg"
									alt=""
									className="h-28 w-40 rounded-lg"
								/>
								<div className="flex flex-col gap-3">
									<h1 className="font-bold text-lg">
										Mobile development
									</h1>
									<p>44 students</p>
									<p>3 weeks</p>
								</div>
							</div>
							<div>
								<h1 className="font-bold text-xl">
									₦35,000.00
								</h1>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg p-4 shadow-md">
						<div className="flex flex-row justify-between items-end">
							<div className="flex items-start gap-3">
								<img
									src="/2.jpg"
									alt=""
									className="h-28 w-40 rounded-lg"
								/>
								<div className="flex flex-col gap-3">
									<h1 className="font-bold text-lg">
										Product Design
									</h1>
									<p>82 students</p>
									<p>3 weeks</p>
								</div>
							</div>
							<div>
								<h1 className="font-bold text-xl">
									₦35,000.00
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default dashboard;
