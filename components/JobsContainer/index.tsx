import React, { useState } from 'react'
import { makeStyles , useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Typography, Grid } from '@material-ui/core';
import JobCard from './JobCard';
import { IJob } from '../../types/interfaces';

const useStyles = makeStyles({
	root: {
		marginBottom: 50
	},
	hiddenItem: {
		width: 350,
		height: 280,
		margin: 10
	},
	jobsHeader: {
		marginBottom: 50,
	}
});

const JobsContainer: React.FC<{jobs: Array<IJob>}> = ({ jobs }) => {
	const [jobItems, setJobItems]= useState(jobs);
	const classes = useStyles();
	const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Container maxWidth="lg" className={classes.root}>
			<Grid 
				container
				direction={ matches ? "column" : "row" }
				justifyContent="space-between"
				alignItems="center"
				className={classes.jobsHeader}
				spacing={3}
			>
				<Grid item>
					<Typography variant={matches ? "h5" : "h4"} component="h1" color="secondary">
						<b>Business Analyst Jobs</b>
					</Typography>
				</Grid>
				<Grid item>
					<Grid 
						container
						direction={ matches ? "column" : "row" }
						justifyContent="space-between"
						alignItems="center"
						spacing={3}
					>
						<Grid item>One</Grid>
						<Grid item>Two</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid 
				container 
				spacing={2} 
				justifyContent="center"
  				alignItems="center"
			>
				{
					jobs.slice(0,10).map( (job: IJob) => (
						<Grid item key={job.jobId}>
							<JobCard key={job.jobId} job={job} />
						</Grid>
					))
				}
				<i aria-hidden="true" className={classes.hiddenItem} />
				<i aria-hidden="true" className={classes.hiddenItem} />
			</Grid>
		</Container>
	)
}

export default JobsContainer;
