import { useFormData } from '@/pages/contexts/FormContext'
import React from 'react'

interface TextInput {
	title: string
	name: string
	group?: string
}

const TextInput = ({ title, name, group }: TextInput) => {
	const { handleFormData, formData } = useFormData()

	return (
		<div className="sm:col-span-3">
			<label htmlFor={name} className="block uppercase text-xs font-semibold leading-6 text-gray-400">
				{title}
			</label>
			<input
				type="text"
				name={name}
				id={name}
				autoComplete={name}
				className="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
				onChange={(e) => handleFormData({ group, name, value: e.target.value })}
				value={formData[group][name]}
			/>
		</div>
	)
}

export default TextInput