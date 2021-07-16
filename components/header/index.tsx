import React from 'react'
import { Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import styles from './style.module.css'

const Header: React.FC = () => (
	<div className={styles.anim_head}>
		<div>
			<Typography variant="h4">
				<AcUnitIcon />Zippia Jobs
			</Typography>
			<Typography variant="subtitle1">
				Explore your next opportunity using our platform
			</Typography>
		</div>
	</div>
	)

export default Header;