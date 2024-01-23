export interface InitialFormData {
	personalDetails: PersonalDetails
	address: Address
}

interface PersonalDetails {
	givenName: string
	surname: string
	email: string
	phone: string
}

interface Address {
	number: string
	street: string
	suburb: string
	state: string
	postcode: string
	country: string
}

export const initialFormData: InitialFormData = {
	personalDetails: {
		givenName: '',
		surname: '',
		email: '',
		phone: ''
	},
	address: {
		number: '',
		street: '',
		suburb: '',
		state: '',
		postcode: '',
		country: ''
	}
}