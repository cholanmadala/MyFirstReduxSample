export const setName = (name) => {
	return dispatch => {
		setTimeout(() => {
			new Promise((resolve, reject) => {
				let xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState === 4 && this.status === 200) {
						let parsedData =JSON.parse(this.responseText);
						resolve(parsedData[1].name);
					}
				};
			  xhttp.open("GET", "http://rest.learncode.academy/api/wstern/users", true);
			  xhttp.send();
		}).then((name) => {
			dispatch({
				type:"SET_NAME",
				name: name
			})
		})
	}, 2000)
		/*new Promise((resolve, reject) => {
			resolve(name);
		}).then((name) => {
			dispatch({
				type:"SET_NAME",
				name: name
			})
		})*/
		// return dispatch => {
		// 	dispatch({
		// 		type:'SET_NAME',
		// 		name: name
		// 	})
		// }
	}
};



export function setAge (age) {
	return {
		type:"SET_AGE",
		age: age
	}
};