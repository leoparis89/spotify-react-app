const path = require('path');

module.exports = {
    entry: './src/Index.js',
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};