import { API_URL } from "./constants";

const ERROR_MESSAGE = "Something went wrong, please try again.";

export const actions = {
	loadProducts: () => {
		return (dispatch, getState) => {
			dispatch({ type: "TOGGLE_LOADING", data: true });
			return fetch(`${API_URL}/products/all/`)
				.then((response) => response.json())
				.then((data) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "PRODUCTS_LOADED", data });
				})
				.catch((error) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "SHOW_ERROR", data: ERROR_MESSAGE });
				});
		};
	},

	getProductByQuery: (query) => {
		return (dispatch, getState) => {
			dispatch({ type: "TOGGLE_LOADING", data: true });
			return fetch(`${API_URL}/products/${query}`)
				.then((response) => response.json())
				.then((data) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "PRODUCTS_LOADED", data });
				})
				.catch((error) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "SHOW_ERROR", data: ERROR_MESSAGE });
				});
		};
	},

	addProduct: (newProduct) => {
		return (dispatch, getState) => {
			dispatch({ type: "TOGGLE_LOADING", data: true });
			return fetch(`${API_URL}/products/create/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			})
				.then((response) => response.json())
				.then((data) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "PRODUCT_ADDED", data });
				})
				.catch((error) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "SHOW_ERROR", data: ERROR_MESSAGE });
				});
		};
	},

	updateProduct: (product) => {
		return (dispatch, getState) => {
			dispatch({ type: "TOGGLE_LOADING", data: true });
			return fetch(`${API_URL}/products/${product.id}/update`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then((response) => response.json())
				.then((data) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "PRODUCT_UPDATED", data });
				})
				.catch((error) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });

					dispatch({ type: "SHOW_ERROR", data: ERROR_MESSAGE });
				});
		};
	},

	deleteProduct: (product) => {
		return (dispatch, getState) => {
			dispatch({ type: "TOGGLE_LOADING", data: true });
			return fetch(`${API_URL}/products/${product.id}/delete`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "PRODUCT_DELETED", data });
				})
				.catch((error) => {
					dispatch({ type: "TOGGLE_LOADING", data: false });
					dispatch({ type: "SHOW_ERROR", data: ERROR_MESSAGE });
				});
		};
	},

	hideError: () => {
		return { type: "HIDE_ERROR" };
	},

	tempErrorMessage: (message) => {
		return (dispatch, getState) => {
			dispatch(showError(message));
			setTimeout(() => {
				dispatch(actions.hideError());
			}, 5000);
		};
	},
};
