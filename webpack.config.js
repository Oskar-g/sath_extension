//webpack.config.js
const webpack = require('webpack');
const path = require('path');

const plugin = new webpack.EnvironmentPlugin();

const server = {
    entry: "./src/base.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

const baseConfig = {
    mode: "development",
    devtool: 'hidden-source-map',
    entry: "file.ts", // <-- source code
    output: {
        path: path.resolve(__dirname, './dist/src'),
        filename: "file.js" // <--- target file
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [plugin],

}

const modules = [
    { entry: "./src/base.ts", output: "base.js" },
    { entry: "./src/cookieclicker/main.ts", output: "cookieclicker.js" },
    { entry: "./src/cw/main.ts", output: "cw.js" },
    { entry: "./src/forocoches/main.js", output: "forocoches.js" },
    { entry: "./src/lectortmo/main.ts", output: "lectortmo.js" },
    { entry: "./src/idealista/main.js", output: "idealista.js" },
    { entry: "./src/videodownload/main.ts", output: "videodownload.js" },
].map(e => Object.assign({}, baseConfig, {
    entry: e.entry,
    output: {
        path: baseConfig.output.path,
        filename: e.output
    }
}))

//module.exports = [...modules, server];
module.exports = modules;