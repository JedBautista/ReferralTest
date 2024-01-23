import React from 'react'
import { useFormData } from '../contexts/FormContext'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api'
import { TrashIcon } from '@heroicons/react/24/outline'
import TableActions from './TableActions'

const Table = () => {

	const { data: users, isLoading } = useQuery({
		queryFn: () => fetchUsers(),
		queryKey: ['users']
	})

	const { formData } = useFormData()
	const { personalDetails } = formData

	return (
		<div className="overflow-x-auto min-w-full">
			<div className="inline-block min-w-full">
				<div className="overflow-hidden">
					<table className="min-w-full text-left text-sm font-light bg-white rounded">
						<thead className="border-b font-medium dark:border-neutral-500">
							<tr>
								<th scope="col" className="px-6 py-4 uppercase">Given Name</th>
								<th scope="col" className="px-6 py-4 uppercase">Surname</th>
								<th scope="col" className="px-6 py-4 uppercase">Email</th>
								<th scope="col" className="px-6 py-4 uppercase">Phone</th>
								<th scope="col" className="px-6 py-4 uppercase">Action</th>
							</tr>
						</thead>
						{isLoading
							? <tbody className='animate-pulse'>
								<tr className="border-b dark:border-neutral-500"></tr>
							</tbody>
							: <tbody>
								{users?.data.map(user => (
									<tr className="border-b dark:border-neutral-500" key={user._id}>
										<td className="whitespace-nowrap px-6 py-4">{user.givenName} </td>
										<td className="whitespace-nowrap px-6 py-4">{user.surname}</td>
										<td className="whitespace-nowrap px-6 py-4">{user.email}</td>
										<td className="whitespace-nowrap px-6 py-4">{user.phone}</td>
										<td className="whitespace-nowrap px-6 py-4"><TableActions userId={user._id} /></td>
									</tr>
								))}
								<tr className="border-b dark:border-neutral-500">
									<td className="whitespace-nowrap px-6 py-4">{personalDetails.givenName} </td>
									<td className="whitespace-nowrap px-6 py-4">{personalDetails.surname}</td>
									<td className="whitespace-nowrap px-6 py-4">{personalDetails.email}</td>
									<td className="whitespace-nowrap px-6 py-4">{personalDetails.phone}</td>
									<td className="whitespace-nowrap px-6 py-4"></td>
								</tr>
							</tbody>
						}
					</table>
				</div>
			</div>
		</div >
	)
}

export default Table