import { SET_VISIBILITY_FILTER } from '../constants/';
import { contactVisiblityFilter } from './action';

const ContactVisiblityFilter = (state = contactVisiblityFilter.SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default ContactVisiblityFilter;
