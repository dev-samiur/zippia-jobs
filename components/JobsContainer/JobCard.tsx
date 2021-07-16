import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextTruncate from 'react-text-truncate'

const useStyles = makeStyles((theme) => ({
root: {
    width: 350,
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

export default function JobCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
	  	<div className={classes.companyLogo}>
			<ShoppingCartIcon fontSize="large" />
		</div>
        <Typography variant="h5" component="h2">
          title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="div">
			<TextTruncate
				line={3}
				truncateText="…"
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			/>
        </Typography>
      </CardContent>
    </Card>
  );
}
