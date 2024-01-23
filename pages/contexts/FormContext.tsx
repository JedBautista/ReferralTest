import React, { createContext, useContext, useState } from "react";
import { initialFormData } from "../constants/initialFormData";

export const FormContext = createContext(null)

interface Props {
	children: React.ReactNode
}

export const useFormData = () => {
	return useContext(FormContext)
}

export const FormProvider: React.FC<Props> = ({ children }) => {
	const [formData, setFormData] = useState(initialFormData)

	const handleFormData = ({ group, name, value }:
		{ group: string, name: string, value: string }) => {
		setFormData({ ...formData, [group]: { ...formData[group], [name]: value } })
	}

	const clearFormData = () => {
		setFormData(initialFormData)
	}

	return (
		<FormContext.Provider value={{ formData, handleFormData, clearFormData }}>
			{children}
		</FormContext.Provider>
	)
}
