import { TrashIcon } from '@heroicons/react/24/outline'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteUser } from '../api'

const TableActions = ({ userId }) => {
	console.log(userId)
	const queryClient = useQueryClient()
	const { mutateAsync: deleteUserMutation } = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries(['users'])
		}
	})

	const handleDelete = async (id) => {
		console.log(id)
		try {
			await deleteUserMutation(id)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<TrashIcon className='h-6 w-6 cursor-pointer' onClick={() => handleDelete(userId)} />
	)
}

export default TableActions