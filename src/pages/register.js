'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Register() {
	const router = useRouter();
	const { signup } = useAuth();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signup(firstName, lastName, email, password);
			toast.success('Account created successfully');
			router.push('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-0 px-0 sm:px-0 lg:px-0">
			<div className="w-full flex">
				<div
					className="lg:w-2/3 md:w-[50%] hidden md:flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage: 'url("/1.jpg")',
						height: 'calc(100vh)',
					}}
				>
					<div className="text-white text-left px-14 py-10">
						<h2 className="text-7xl font-extrabold">
							Start turning your ideas into reality.
						</h2>
						<p className="mt-4 text-lg">
							Create a free account and get full access to
							all features for 30 days. No credit card
							needed. Trusted by over 4,000 professionals.
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/3 md:w-[50%] px-5 pt-10 md:pt-36 p-6 md:px-20">
					<div>
						<h2 className="text-3xl font-extrabold text-gray-900">
							Sign Up
						</h2>

						{error && (
							<p className="mt-2 text-red-600 text-sm">
								{error}
							</p>
						)}
					</div>
					<form
						className="mt-8 space-y-6"
						onSubmit={handleSubmit}
					>
						<input
							type="hidden"
							name="remember"
							defaultValue="true"
						/>
						<div className="flex flex-col gap-5">
							<div>
								<label htmlFor="name" className="sr-only">
									First Name
								</label>
								<input
									id="fname"
									name="fname"
									type="text"
									autoComplete="name"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="First Name"
									value={firstName}
									onChange={(e) =>
										setFirstName(e.target.value)
									}
								/>
							</div>
							<div>
								<label htmlFor="name" className="sr-only">
									Last Name
								</label>
								<input
									id="name"
									name="lname"
									type="text"
									autoComplete="name"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Last Name"
									value={lastName}
									onChange={(e) =>
										setLastName(e.target.value)
									}
								/>
							</div>
							<div>
								<label
									htmlFor="email-address"
									className="sr-only"
								>
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="sr-only"
								>
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#27779B] hover:bg-[#27769bd5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Get Started
							</button>
							<div>
								<p className="text-black mt-10 text-sm text-center">
									Already have an account?{' '}
									<Link
										href="/"
										className="text-indigo-500"
									>
										Log in
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
