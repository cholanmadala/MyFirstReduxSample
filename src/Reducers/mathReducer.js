const mathReducer = (state = {value : 0, lastValues : []}, action) => {
	switch (action.type) {
		case "ADD" :
			state = {
				...state,
				value: state.value + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "SUBTRACT" :
			state = {
				...state,
				value: state.value - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		default :
			state = {...state}
	}
	return state;
};

export default mathReducer;