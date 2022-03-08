const { resolve } = require("path");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src",
	plugins: [new webpack.ProvidePlugin({ riot: "riot" })],
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/build/",
		filename: "bundle.js",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: "riot-tag-loader",
				query: {
					type: "es6", // transpile the riot tags using babel
					hot: true,
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},
	resolve: {
		extensions: ["", ".js", ".tag"],
	},
};
