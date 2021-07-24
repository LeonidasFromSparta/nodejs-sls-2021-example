const { entries, webpack } = require('serverless-webpack').lib

module.exports = {
    entry: entries,
    devtool: webpack.isLocal ? 'eval-source-map' : 'source-map',
    target: 'node14',
    mode: webpack.isLocal ? 'development' : 'production',
    externals: webpack.isLocal ? [] : ['aws-sdk'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}
