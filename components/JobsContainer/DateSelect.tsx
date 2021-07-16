import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 250,
    },
  }),
);

interface IDateSelect {
	// eslint-disable-next-line no-unused-vars
	handleJobPostDate(time: string) : void,
	date: string
}

const DateSelect: React.FC<IDateSelect> = ({ date, handleJobPostDate }) => {
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		handleJobPostDate(event.target.value as string);
	};
	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel >Date Posted</InputLabel>
				<Select
					value={date}
					onChange={handleChange}
					label="Date Posted"
				>
				<MenuItem value="all">All Time</MenuItem>
				<MenuItem value="last_week">Last Week</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default DateSelect;

