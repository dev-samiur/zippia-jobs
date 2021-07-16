import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		background: "#435B71",
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFF',
		fontSize: 14
	},
	linkStyle: {
		color: '#FFF',
		textDecoration: 'none',
		marginLeft: 5
	}
});

const Footer: React.FC= () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			@2021 <a href="https://samiur.net" className={classes.linkStyle}>Samiur</a>
		</div>
	)
}

export default Footer
