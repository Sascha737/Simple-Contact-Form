import React from 'react';
import './App.css';
import ContactInput from './components/ContactInput/ContactInput';
import AuthPage from './components/AuthPage/AuthPage';
import {
	BrowserRouter,
	Link,
	Navigate,
	NavLink,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<div className="App">
				<header className="site-header">
					<Link to="/" className="site-brand">
						Simple Contacts
					</Link>
					<nav className="account-actions" aria-label="Account">
						<NavLink to="/signup" className="signup-button">
							Sign up
						</NavLink>
						<NavLink to="/login" className="login-button">
							Log in
						</NavLink>
					</nav>
				</header>
				<main className="page-content">
					<Routes>
						<Route path="/" element={<ContactInput />} />
						<Route path="/signup" element={<AuthPage mode="signup" />} />
						<Route path="/login" element={<AuthPage mode="login" />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;