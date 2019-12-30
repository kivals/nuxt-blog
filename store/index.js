export const state = () => ({
    error: null
})

export const mutations = {
	setError(state, error) {
		console.log('Errror')
		state.error = error
	},
	clearError(state) {
		state.error = null;
	}
}

export const getters = {
	error: state => state.error
}