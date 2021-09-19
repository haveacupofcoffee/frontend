const {resolve} = require('path')

module.exports = {

    mode: 'development',
    //mode = 'production',
    entry: './src/index.js',

    output: {
       filename: 'built.js',
       path: resolve(__dirname, 'build')
    },

    module: {
    },

    plugins:[]

    
    

}