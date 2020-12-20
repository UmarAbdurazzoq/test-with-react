export const Reducer = (state, action) => {

	if ('key' in action && 'answer' in action) {

		return state.map((question) => {

			if (action.key === question.key) {

				return { ...question, answer: action.answer }
			}

			return question
		})
	}

	return state
}


