import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IJob } from '../../types/interfaces';

interface ISearch {
	// eslint-disable-next-line no-unused-vars
	handleSearch(companyTitle: string) : void,
	jobs: Array<IJob>
}

const Search: React.FC<ISearch> = ({ jobs, handleSearch }) => {

	const handleChange = (value: any) => {
		handleSearch(value ? value.companyName : null);
	};

	return (
		<Autocomplete
			id="Company Name"
			options={jobs}
			getOptionLabel={(option) => option.companyName}
			style={{ width: 250 }}
			onChange={(event:any, value: any) => handleChange(value)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			renderInput={(params) => <TextField {...params} label="Company Name" variant="outlined" />}
		/>
	);
}

export default Search

