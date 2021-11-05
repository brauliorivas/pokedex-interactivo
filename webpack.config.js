const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    stats: {
        warnings: false,
        errors: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "./",
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "swc-loader"
                }
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.png/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new InjectManifest({
            swSrc: path.join(process.cwd(), '/sw.js'),
            swDest: 'sw.js',
            exclude: [
                /\.map$/,
                /manifest$/,
                /\.htaccess$/,
                /service-worker\.js$/,
                /sw\.js$/,
            ],
            compileSrc: true,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}