'use client'
import Lottie from 'lottie-react'
import loader from './loader.json'
import s from './page.module.css'

const Home = () => {
	return (
		<div className={s.home}>
			<h1>Platzi Loader</h1>
			<Lottie animationData={loader} style={{ width: '5rem' }} />
			<a
				href="https://github.com/JuandaGarcia/platzi-loader"
				className={s.home__link}
			>
				https://github.com/JuandaGarcia/platzi-loader
			</a>
		</div>
	)
}

export default Home
