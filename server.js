const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    noInfo: true,
    stats: {
        colors: true
    }
}).listen(3000, 'localhost', err => {
    if (err) {
        console.log(err); // eslint-disable-line no-console
    }

    console.log('Listening at localhost:3000'); // eslint-disable-line no-console
});
