export const UpdateUser_Action = (userinfo) => {
	console.log(userinfo)
	return {
		type: "CHANGING_USER_DETAILS",
		payload: userinfo
	}
}