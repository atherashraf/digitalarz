const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entryList = {
    "index": {html: "index.html", js: "index.js"}
}
const startConfig = (env, options) => {
    const devtool_val = options.mode == 'development' ? 'source-map' : '';
    let entryFiles = entryList["index"];
    return {
        entry: './src/widgets/' + entryFiles["js"],
        devtool: devtool_val,
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            }, {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                }]
            }, {
                test: /\.(png|gif|jpe?g|svg|xml|json)$/,
                use: {
                    loader: 'url-loader',
                },
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './templates/' + entryFiles["html"]
            }),
        ],
        mode: options.mode
    }
};
module.exports = startConfig;