const path = require("path");
/*const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");*/

const  rootdir = "./src/chapter01/part3/";

module.exports = {

/*    optimization: {
        minimize: false
    },*/

    //Scenario 1
    entry : rootdir + 'index.ts',

/*
    devtool : "inline-source-map",
*/

/*    devServer : {
        contentBase : './src/chapter01/part3/dist'
    },*/

    output: {
        //Scenario 1
        path : path.resolve(__dirname, rootdir + 'dist'),
        filename : 'bundle.js',
        /*environment : {
            arrowFunction : false
        }*/
    },

    /*resolve : {
        extension : ['.ts', '.js']
    },
*/


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


};