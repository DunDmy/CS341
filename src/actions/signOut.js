import axios from 'axios';

export const signOut = (user) => {

	return dispatch => {
		axios
			.post('http://localhost:3000/signin',
				user
			)
			.then(res => {
				//setTimeout(() => {
					//console.log(res)
					dispatch(signOutSuccess(res.data));
				//}, 2500);
			})
			.catch (err => {
				dispatch(signOutFailure(err.message));
			})
	};
}

export const signOutSuccess = () => {
	return {
		type: "SIGN_OUT_SUCCESS",
		payload: "",
	};
}

export const signOutFailure = (guest) => {
	return {
		type: "SIGN_OUT_SUCCESS",
		payload: guest
	};
}