import React from 'react'
import { Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const useStyles = makeStyles({
	root: {
		background: "#28DF99",
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFF',
		fontSize: 14,
		textAlign: 'center'
	},
	btnStyle: {
		marginTop: 20
	}
});


const index: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<Typography variant="h4">
					<AcUnitIcon />Zippia Jobs
				</Typography>
				<Link href="/test/jobs">
					<Button variant="outlined" color="secondary" className={classes.btnStyle}>Explore</Button>
				</Link>
			</div>
		</div>
	)
}

export default index;