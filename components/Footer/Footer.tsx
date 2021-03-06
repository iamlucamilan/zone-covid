import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { ArrowCircleUp, ArrowLineUpRight, ChatDots, IconProps } from 'phosphor-react'

import Link from 'next/link'

import styles from './Footer.module.sass'

export function Footer() {

	useEffect(() => {
		smoothscroll.polyfill()
	}, [])

	function onClickHandler() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return <>
		<Disclaimer weight={'bold'} />
		<footer className={styles.footer} >
			<div className={styles.content}>
				<div className={styles.logo}>
					<img src='/logo.svg' height='100%' />
				</div>
				<div className={styles.links}>
					<div><Link href={'/about'}>Info</Link></div>
					<div>Segnala un problema</div>
					<div><Link href={'/privacy'}>Privacy Policy</Link></div>
					<div><Link href={'/legal'}>Note Legali</Link></div>
				</div>
				<div className={styles.backToTop}>
					<ArrowCircleUp size={36} weight={'regular'} onClick={onClickHandler} />
				</div>
			</div>
		</footer>
	</>
}

const Disclaimer = ({ weight = 'regular' }: { weight?: IconProps['weight'] }) => {

	return <div className={styles.disclaimer}>
		<div className={styles.disclaimerIcon}>
			<ChatDots size={32} weight={weight} mirrored={true} />
		</div>
		<div className={styles.disclaimerText} >
			Per ulteriori ordinanze ad hoc, consulta il sito della tua regione</div>
		<div className={styles.disclaimerIcon}>
			<ArrowLineUpRight size={32} weight={weight} />
		</div>
	</div>

}
