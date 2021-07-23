import React from 'react'
import axios from 'axios'
import Header from '../../components/header'
import JobsContainer from '../../components/JobsContainer'
import Footer from '../../components/Footer'
import { IJob } from '../../types/interfaces'

const Jobs: React.FC<{ jobs: Array<IJob> }> = ({ jobs }) => (
		<div>
			<Header />
			<JobsContainer jobs={jobs} />
			<Footer />
		</div>
	)

export const getStaticProps = async () => {
	const payload = {
		companySkills: true,
		dismissedListingHashes: [],
		fetchJobDesc: true,
		jobTitle: 'Business Analyst',
		locations: [],
		numJobs: 20,
		previousListingHashes: [],
	}

	const res = await axios({
		url: 'https://www.zippia.com/api/jobs/',
		method: 'POST',
		data: payload,
	})

	return {
		props: {
			jobs: res.data.jobs,
		},
	}
}

export default Jobs
