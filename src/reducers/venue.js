import { 
    UPDATE_CHECKED_USERS,
    UPDATE_PLACE_TO_GO,
    UPDATE_PLACE_TO_AVOID} from '../actions/actionConstants';

import venues from '../data/venues';
import users from '../data/users';
import { getPlaceToGo, getPlaceToAvoid  } from '../utils/venue-utils';

const initialState = {
    checkedUsers: [],
    placeToGo: [],
    placeToAvoid: []
};

const getSelectedUsers = ({ checkedUser }) => {
    return users.filter((user, index) => 
        checkedUser.find(user => {
            return (index === parseInt(user.key))
        }));
}

const venueReducer =(state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CHECKED_USERS:
            const user = state.checkedUsers.find(user => {
                return (user.key === action.checkedUser.key);
            });
            const checkedUsers = [ ...state.checkedUsers.filter(u => u !== user),
                { ...user, ...action.checkedUser }]
                .filter(user => (user.checked));

            return { ...state,
                    checkedUsers: checkedUsers
            }
        case UPDATE_PLACE_TO_GO:
            const placeToGo = getPlaceToGo(venues, getSelectedUsers(action));

            return { ...state,
                    placeToGo: [...placeToGo] };
        case UPDATE_PLACE_TO_AVOID:
            const placeToAvoid = getPlaceToAvoid(venues, getSelectedUsers(action));

            return { ...state,
                    placeToAvoid: [...placeToAvoid] };
        default:
            return state;
    }
}

export default venueReducer;