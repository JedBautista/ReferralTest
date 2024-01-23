import React, { useEffect, useState } from 'react'
import TextInput from './components/ReferralForm/TextInput'
import Button from './components/ReferralForm/Button'
import Table from './components/Table'
import { FormProvider, useFormData } from './contexts/FormContext'
import TwoColumnLayout from './components/TwoColumnLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Index = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<FormProvider>
				<TwoColumnLayout></TwoColumnLayout>
			</FormProvider >
		</QueryClientProvider>
	)
}

export default Index