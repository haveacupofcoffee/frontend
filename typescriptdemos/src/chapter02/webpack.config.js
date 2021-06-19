const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {

    mode: "production",

    entry: "./index.ts",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

        environment: {
            arrowFunction: false,
            const: false
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets":{
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs":"3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/

            },
            {
                test:/\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions : {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }

                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        //default construct
        //new HtmlWebpackPlugin()
        new HtmlWebpackPlugin( {
            template: './template/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.js']
    }


};


//scenario2 : html-webpack-plugin(automatically create index.html and reference template html) webpack-dev-serve (hot swap, auto load)
/*const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        //default construct
        //new HtmlWebpackPlugin()
        new HtmlWebpackPlugin({
            //with title
            //title : "This is a test title"
            template: rootdir + 'template/index.html'
        })
    ]


};*/


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
