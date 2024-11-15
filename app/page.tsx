'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import loader from './loader.json'
import s from './page.module.css'

const Home = () => {
	return (
		<div className={s.home}>
			<h1>Platzi Loader</h1>
			<DotLottieReact
				data={loader}
				loop
				autoplay
				width={100}
				height={100}
				style={{ width: '5rem', height: '5rem' }}
			/>
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
