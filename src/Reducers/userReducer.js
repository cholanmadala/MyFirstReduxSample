const userReducer = (state = {name : 'Maddy', age : 27, allContent: {allNames: [], allAges: []}}, action) => {
	// console.log(action.type);
	switch (action.type) {
		case "SET_NAME" :
		// console.log(action);
			state = {
				...state,
				allContent: {allNames: [...state.allContent['allNames'], action.name], allAges: [...state.allContent.allAges] },
				name: action.name
			}
			break;
		case "SET_AGE" :
			state = {
				...state,
				allContent: {allNames: [...state.allContent['allNames']], allAges: [...state.allContent.allAges, action.age] },
				age: action.age
			}
			break;
		default :
			state = {...state}
	}
	return state;
};

export default userReducer;