import React from 'react'
import Table from './Table'
import Container from './ReferralForm/Container'

const TwoColumnLayout = () => {
	return (
		<div className='grid grid-cols-4 h-screen'>
			<div className='col-span-2 p-6 flex items-center'>
				<div className="pb-12 min-w-full">
					<Container />
				</div>
			</div>
			<div className='col-span-2 p-6 bg-gray-100 flex items-center'>
				<Table></Table>
			</div>
		</div>
	)
}

export default TwoColumnLayout