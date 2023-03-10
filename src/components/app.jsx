import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const App = (app) => {
	const { id, appName, appImage, url } = app.data;
	return (
		<>
			{url === undefined ? (
				<Link
					to={`/${appName}`}
					className='Apps'
				>
					<div className='singleApp'>
						<img
							src={appImage}
							alt={`app${id}`}
						/>
						<div className='appName'>{appName}</div>
					</div>
				</Link>
			) : (
				<a
					href={url}
					target='_blank'
					className='Apps'
				>
					<div className='singleApp'>
						<img
							src={appImage}
							alt={`app${id}`}
						/>
						<div className='appName'>{appName}</div>
					</div>
				</a>
			)}
		</>
	);
};

export default App;
