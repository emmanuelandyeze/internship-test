'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Home() {
	const router = useRouter();
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await login(email, password);
			router.push('/dashboard');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-0 px-0 sm:px-0 lg:px-0">
			<div className="w-full flex">
				<div className="w-full px-5 md:px-10 lg:px-36 pt-10 md:pt-36 md:w-1/2 p-6">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Welcome back
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Welcome back! Please enter your details.
						</p>
						{error && (
							<p className="mt-2 text-red-600 text-sm text-center">
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
						<div className="rounded-md shadow-sm -space-y-px">
							<div className="my-4">
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
									className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
									autoComplete="current-password"
									required
									className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
									checked={rememberMe}
									onChange={(e) =>
										setRememberMe(e.target.checked)
									}
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me for 30 days
								</label>
							</div>
							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Log in
							</button>
							<div>
								<p className="text-black mt-10 text-sm text-center">
									Don't have an account?{' '}
									<Link
										href="/register"
										className="text-indigo-500"
									>
										Sign Up
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
				<div className="hidden md:block w-1/2">
					<img
						className="object-cover h-screen w-full"
						src="/2.jpg"
						alt="Login Image"
					/>
				</div>
			</div>
		</div>
	);
}
