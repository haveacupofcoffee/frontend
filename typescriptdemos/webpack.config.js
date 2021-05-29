const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const rootdir = "./src/chapter01/part3/";

module.exports = {

    entry: rootdir + 'index.ts',

    output: {
        path: path.resolve(__dirname, rootdir + 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: '/src/chapter01/part3/',
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin()
    ]


};


/* Scenario 1, simply use webpack to compile the ts files
const path = require("path");
const  rootdir = "./src/chapter01/part3/";

module.exports = {

    entry : rootdir + 'index.ts',

    output: {
        path : path.resolve(__dirname, rootdir + 'dist'),
        filename : 'bundle.js'
    },

    module : {
        rules: [
            {
                test : /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: '/src/chapter01/part3/'
            }
        ]
    }
};*/
