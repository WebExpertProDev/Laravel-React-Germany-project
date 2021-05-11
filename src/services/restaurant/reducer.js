import {
	CHECK_RESTAURANT_OPERATION_SERVICE,
	GET_RESTAURANTS_BASED_ON_CATEGORY,
	GET_RESTAURANTS_CATEGORIES,
	GET_DELIVERY_RESTAURANTS,
	GET_SELFPICKUP_RESTAURANTS,
} from "./actionTypes";

const initialState = {
	restaurants: [],
	is_operational: "",
	filtered_restaurants: [],
	restaurants_categories: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHECK_RESTAURANT_OPERATION_SERVICE:
			return { ...state, is_operational: action.payload };
		case GET_RESTAURANTS_BASED_ON_CATEGORY:
			return { ...state, filtered_restaurants: action.payload };
		case GET_RESTAURANTS_CATEGORIES:
			return { ...state, restaurants_categories: action.payload };

		case GET_DELIVERY_RESTAURANTS:
			return { ...state, restaurants: action.payload };

		case GET_SELFPICKUP_RESTAURANTS:
			return { ...state, restaurants: action.payload };
		default:
			return state;
	}
}
