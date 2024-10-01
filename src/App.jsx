import React from 'react';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main-section.jsx';
import Card from './components/Card.jsx';
import Data from './data.jsx';

function App() {
	const newData = Data.map((item) => {
		return (
			<div key={item.id} className=' col-12 col-md-6 col-lg-4'>
				{/* Pass the item prop to the Card component */}
				<Card item={item} />
			</div>
		);
	});

	return (
		<div className='container'>
			<Navbar />

			<Main />

			<div className='row'>{newData}</div>
		</div>
	);
}

export default App;
