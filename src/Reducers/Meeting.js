const reducer = (state, action) => {

	if ('userId' in action && 'isOn' in action) {

		return state.map((user) => {

			if (action.userId === user.id) {

				return { ...user, isOn: action.isOn }
			}

			return user
		})
	}

	return state
}

export default reducer
