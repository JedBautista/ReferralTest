import React from 'react'
import Button from './Button'
import TextInput from './TextInput'

const Container = () => {
	return (
		<>
			<h2 className="text-3xl font-bold leading-7 text-gray-900">Referral Builder</h2>
			<p className="mt-6 pb-2 uppercase text-base font-semibold leading-6 text-gray-600 border-b">Personal Details</p>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<TextInput title='Given Name' name='givenName' group='personalDetails' />
				<TextInput title='Surname' name='surname' group='personalDetails' />
			</div>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<TextInput title='Email' name='email' group='personalDetails' />
				<TextInput title='Phone' name='phone' group='personalDetails' />
			</div>
			<p className="mt-6 pb-2 uppercase text-base font-semibold leading-6 text-gray-600 border-b">Address</p>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<TextInput title='Home name or #' name='homeNumber' group='address' />
				<TextInput title='Street' name='street' group='address' />
			</div>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<TextInput title='Suburb' name='suburb' group='address' />
				<TextInput title='State' name='State' group='address' />
			</div>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<TextInput title='Postcode' name='postcode' group='address' />
				<TextInput title='Country' name='country' group='address' />
			</div>
			<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<Button name='upload avatar' classNames='sm:col-span-3 border text-gray-600 active:bg-gray-100' />
				<Button name='Create referral' classNames='sm:col-span-3 border text-white bg-green-500 active:bg-green-600' />
			</div>
		</>
	)
}

export default Container