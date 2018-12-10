import axios from 'axios';

export const UpdateUser_Action = (userinfo) => {
	console.log("updating...")
	var url = 'http://localhost:3000/shoppingpage/updateUser/' + userinfo.id + '/' + userinfo.email + '/' + userinfo.lname + '/' + userinfo.fname;
	return dispatch => {
		axios
			.put(url)
			.then(res => {
				//dispatch(updateSuccess(res.data));
			})
			.catch (err => {
				dispatch(updateFailure(err.message));
			})
	};
}

export const updateSuccess = (user) => {
	console.log(user);
	return {
		type: "CHANGING_USER_DETAILS",
		payload: user
	}
}

export const updateFailure = (user) => {
	return {
		type: "CHANGING_USER_DETAILS_FAILURE",
		payload: user
	}
}

/* 
var userInfo = {
			firstName: document.getElementById("firstname").value,
			lastName: document.getElementById("lastname").value,
			email: document.getElementById("email").value

		}
		*/