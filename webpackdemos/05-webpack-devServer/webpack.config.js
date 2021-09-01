const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'development',

    entry: './src/index.js',

    output: {
        filename:'built.js',
        path: resolve(__dirname, 'build')
    },

    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']
            },
            {
                //webpack 5 does not need to set esModule to false
                test: /\.(jpg|png|gif)$/,
                type: 'asset',
                generator: {
                    filename: '[hash:10][ext]'
                }
                
            },
            {
                
                test: /\.html$/,
                loader: 'html-loader'
            } 
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template:'./src/index.html'})
    ],

   /*  target: 'web', */
    devServer: {
        static: {
            directory: resolve(__dirname, 'build')
        },
        compress: true,
        port:3000,
        open: true
    }

}


