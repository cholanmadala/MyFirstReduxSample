export function add (num) {
	return {
		type:"ADD",
		payload: num
	}
};

export function subtract (num) {
	return {
		type:"SUBTRACT",
		payload: num
	}
};