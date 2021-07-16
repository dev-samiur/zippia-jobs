import React, { useState, useEffect } from 'react'
import { IJob } from '../../types/interfaces'


const JobsContainer: React.FC<IJob> = ({jobs}) => {
	const [count, setCount] = useState(1)
	useEffect(() => {
		setCount(2)
		console.log(jobs)
	}, [jobs])
	return (
		<div>
			{count}
		</div>
	)
}

export default JobsContainer;
