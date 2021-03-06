let cssPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: {
        style: './src/entry.js'
    },
    output: {
        path: __dirname + '/new'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    cssPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            // url() {
                            //     if (url.match(/\.(png|svg|jp(e)?g|gif)$/)) {
                            //         return false;
                            //     } else {
                            //         return true;
                            //     }
                            // }
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new cssPlugin()
    ]
}
