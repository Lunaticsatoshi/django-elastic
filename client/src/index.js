import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components";

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import {
	PRODUCTS_LOADED,
	TOGGLE_LOADING,
	PRODUCT_ADDED,
	SHOW_ERROR,
	HIDE_ERROR,
} from "./constants";

const reducer = function (state = { tasks: [] }, action) {
	console.log(action);
	switch (action.type) {
		case PRODUCTS_LOADED:
			return Object.assign({}, state, { tasks: action.data });

		case TOGGLE_LOADING:
			return Object.assign({}, state, { isLoading: action.data });

		case PRODUCT_ADDED:
			return Object.assign({}, state, {
				tasks: state.tasks.concat(action.data),
			});

		case SHOW_ERROR:
			return Object.assign({}, state, {
				isError: true,
				errorMessage: action.data,
			});

		case HIDE_ERROR:
			return Object.assign({}, state, { isError: false, errorMessage: "" });

		default:
			return state;
	}
};

//const reduxStore = createStore(reducer);
const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

let reduxStore = createStoreWithMiddleware(reducer);

// register
registerGlobalComponents();

// mount all the global components found in this page
mount("[data-riot-component]", { store: reduxStore });
