import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextTruncate from 'react-text-truncate';
import { IJob } from '../../types/interfaces'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
	height: 280,
	cursor: 'pointer',
  },
  pos: {
    marginBottom: 12,
  },
  companyLogo: {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: 80,
	width: 80,
	marginBottom: 5,
	background: theme.palette.primary.main
  }
}));

const JobCard: React.FC<{job: IJob}> = ({ job }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
	  	<div className={classes.companyLogo}>
			<ShoppingCartIcon />
		</div>
        <Typography variant="h6" component="h2" color="secondary">
          { job.jobTitle }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { job.companyName }
        </Typography>
        <Typography variant="body2" component="div">
			<TextTruncate
				line={3}
				truncateText="…"
				text={job.shortDesc}
			/>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobCard;
