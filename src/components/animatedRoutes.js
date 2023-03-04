import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

import HomeScreen from './homeScreen/homeScreen';

import Calender from '../pages/calender/calender';
import Photos from '../pages/photos/photos';
import Weather from '../pages/weather/weather';
import Ipod from '../pages/ipod/ipod';
import Youtube from '../pages/youtube/youtube';
import Apple from '../pages/apple/apple';
import Spotify from '../pages/spotify/spotify';
import SoundCloud from '../pages/soundcloud/soundcloud';
import Calculator from '../pages/calculator/calculator';
import Flappybird from '../pages/flappybird/flappyBird';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
	let location = useLocation();

	return (
		<AnimatePresence>
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path='/'
					element={<HomeScreen />}
				/>
				<Route
					path='/calender'
					element={<Calender />}
				/>
				<Route
					path='/photos'
					element={<Photos />}
				/>
				<Route
					path='/weather'
					element={<Weather />}
				/>
				<Route
					path='/ipod'
					element={<Ipod />}
				/>
				<Route
					path='/youtube'
					element={<Youtube />}
				/>
				<Route
					path='/apple'
					element={<Apple />}
				/>
				<Route
					path='/spotify'
					element={<Spotify />}
				/>
				<Route
					path='/soundcloud'
					element={<SoundCloud />}
				/>
				<Route
					path='/calculator'
					element={<Calculator />}
				/>
				<Route
					path='/flappyBird'
					element={<Flappybird />}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
