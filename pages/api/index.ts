import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080'

const fetchUsers = async () => {
	try {
		const response = await axios.get('/users')
		return response.data
	} catch (error) {
		console.error(error)
	}
}

const createUser = async (params) => {
	try {
		const response = await axios.post('/users', params)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

const deleteUser = async (userId: string) => {
	try {
		const response = await axios.delete(`/users/${userId}`)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export {
	fetchUsers,
	createUser,
	deleteUser
}