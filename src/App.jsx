import React from 'react';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main-section.jsx';
import Card from './components/Card.jsx';

function App() {
	return (
		<div className='container'>
			<Navbar />
			<Main />
			<Card />
		</div>
	);
}

export default App;
