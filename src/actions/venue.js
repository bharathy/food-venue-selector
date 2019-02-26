import { UPDATE_CHECKED_USERS, UPDATE_PLACE_TO_GO, UPDATE_PLACE_TO_AVOID} from './actionConstants';

/* CHECKED_USER ACTION */
export function updateCheckedUsers(checkedUser) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_CHECKED_USERS,
			checkedUser
		});
	}
}

/* PLACE_TO_GO ACTION */
export function updatePlaceToGo(checkedUser) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_PLACE_TO_GO,
			checkedUser
		});
	}
}

/* PLCE_TO_AVOID ACTION */
export function updatePlaceToAvoid(checkedUser) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_PLACE_TO_AVOID,
			checkedUser
		});
	}
}

