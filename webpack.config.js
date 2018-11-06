const path = require('path'); // manipulate file path
const hwp = require('html-webpack-plugin'); // create INDEX.HTML file, simplifies creation of HTML to serve bundles

module.exports = {
    entry: './src/index.js', // react entry file, this will be compiled including import components to DIST folder
    output: { // where I want my compile code to go, just 1 JS file
        path: path.join(__dirname, '/dist'), // dirname => current directory
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {   // this will look a JS file for babel to compile
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // this could create HTML file for scratch 
        new hwp({
            template: './src/index.html' // but I want it to be index.html
        }) // this will be the template reference
    ]
}

// env-preset => to compile es6 

// IN order to use presets...we should create a .babelrc file and we will specify an object array of presets there ENV,REACT