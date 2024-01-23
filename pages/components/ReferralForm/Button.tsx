import { createUser } from '@/pages/api'
import { useFormData } from '@/pages/contexts/FormContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

interface Button {
	name: string
	classNames?: string
}

const Button = ({ name, classNames }: Button) => {
	const { formData, clearFormData } = useFormData()
	const queryClient = useQueryClient()

	const { mutateAsync: addUserMutation, isLoading: loading } = useMutation({
		mutationFn: createUser,
		onSuccess: () => {
			queryClient.invalidateQueries(['users'])
			clearFormData()
		}
	})

	const handleSubmit = async () => {
		try {
			await addUserMutation({ ...formData.personalDetails, ...formData.address })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<button
			type="submit"
			className={`rounded-md px-3 py-2 text-l uppercase shadow focus-visible:outline  ${classNames}`}
			disabled={loading}
			onClick={handleSubmit}
		>
			{name}
		</button>
	)
}

export default Button