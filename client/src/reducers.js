import {
	PRODUCTS_LOADED,
	TOGGLE_LOADING,
	PRODUCT_ADDED,
	PRODUCT_UPDATED,
	PRODUCT_DELETED,
	SHOW_ERROR,
	HIDE_ERROR,
} from "./constants";

export function productsLoaded(products) {
	return {
		type: PRODUCTS_LOADED,
		data: products,
	};
}

export function toggleLoading(isLoading) {
	return {
		type: TOGGLE_LOADING,
		data: isLoading,
	};
}

export function productAdded(data) {
	return {
		type: PRODUCT_ADDED,
		data: data,
	};
}

export function productUpdated(data) {
	return {
		type: PRODUCT_UPDATED,
		data: data,
	};
}

export function productDeleted(data) {
	return {
		type: PRODUCT_DELETED,
		data: data,
	};
}

export function showError(message) {
	return {
		type: SHOW_ERROR,
		data: message,
	};
}
