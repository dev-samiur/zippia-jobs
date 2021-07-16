import React, { useState } from 'react'
import { IJob } from '../../types/interfaces'
import JobCard from './JobCard'


const JobsContainer: React.FC<{jobs: IJob}> = ({jobs}) => (
		<div>
			<JobCard job={jobs} />
		</div>
	)

export default JobsContainer;
