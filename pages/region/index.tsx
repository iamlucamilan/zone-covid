import React from 'react'
import dataset from '@data/dataset.json'
import { ZONES_PROPERTIES } from '@/utils/const'

import styles from '@/styles/region.module.sass'

const AllRegions = ({ content }: AppProps): JSX.Element => {

	const regions = Object.entries(content)

	return (
		<>
			<div className={styles.header}>
				<div className={styles.label}>Regioni</div>
			</div>
			<div>
				{regions.map(([name, props]) => {
					const { data } = dataset[name]
					const actualCode = data[data.length - 1].code
					const { backgroundColor } = ZONES_PROPERTIES[actualCode].style

					return (
						<div key={name} className={styles.entry} style={{ backgroundColor }}>
							<Link href={`/region/${name}`}>
								<a>
									<span>{name}</span>
								</a>
							</Link>
						</div>
					)
				})}
			</div>

		</>
	)
}

export default AllRegions

// ————————————————————————————————————————————————————————————————————————————


import fs from 'fs'
import path from 'path'
import process from 'process'
import * as yaml from 'js-yaml'
import { GetStaticProps } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {

	const pathName = path.join(process.cwd(), 'data/content.yaml')

	const yml = yaml.load(fs.readFileSync(pathName, 'utf8')).it

	const content = yml.regions

	return {
		props: {
			content
		}
	}
}

