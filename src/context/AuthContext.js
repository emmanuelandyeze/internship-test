// context/AuthContext.js
import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = async (email, password) => {
		try {
			const res = await axios.post(
				'https://devapi.omacart.com/login',
				{ email, password },
			);
			// console.log(res);

			if (res.status != 200) {
				throw new Error('Login failed');
			}

			const { token } = await res.data.response;
			const { response } = await res.data;

			// console.log(response);

			// // Store the token securely (e.g., in local storage)
			localStorage.setItem('token', token);

			setUser(response);
		} catch (error) {
			console.error('Login error:', error.message);
			throw error;
		}
	};

	const signup = async (
		firstname,
		lastname,
		email,
		password,
	) => {
		try {
			const res = await axios.post(
				'https://devapi.omacart.com/signup',
				{
					email,
					password,
					firstname,
					lastname,
				},
			);

			console.log(res);

			// if (!response.ok) {
			// 	throw new Error('Sign up failed');
			// }

			// const userData = await response.json();
			// setUser(userData);
		} catch (error) {
			console.error('Sign up error:', error.message);
			throw error;
		}
	};

	const logout = () => {
		// Remove the token from storage (assuming you stored it in local storage)
		localStorage.removeItem('token');

		// Clear the user data
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, login, signup, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
